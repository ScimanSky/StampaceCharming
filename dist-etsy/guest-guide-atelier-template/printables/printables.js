import {
  applyThemeVariables,
  getLocaleList,
  PRESET_PATHS,
  getQueryConfig,
  getStoredColorMode,
  loadTemplateConfig,
  resolveQrDestinationUrl,
  t,
} from "../template-utils.js";

const pageName = window.location.pathname.split("/").pop() ?? "";
const pageType = pageName.includes("wifi-card")
  ? "wifi-card"
  : pageName.includes("welcome-sheet")
    ? "welcome-sheet"
    : "qr-sign";

const query = getQueryConfig();

const state = {
  colorMode: getStoredColorMode(),
  locale: query.lang || "en",
  config: null,
};

function $(id) {
  return document.getElementById(id);
}

function renderText(id, value) {
  const node = $(id);
  if (node) {
    node.textContent = value ?? "";
  }
}

function renderQrFrame(value) {
  const frame = $("qr-frame");
  if (!frame) {
    return;
  }

  frame.innerHTML = "";

  if (!value) {
    const placeholder = document.createElement("div");
    placeholder.className = "qr-frame-empty";
    placeholder.textContent = "Add a public URL to generate the QR code for this printable.";
    frame.appendChild(placeholder);
    return;
  }

  const qr = window.qrcode(0, "M");
  qr.addData(value);
  qr.make();
  frame.innerHTML = qr.createSvgTag(8, 0);
}

function buildGuidePreviewHref() {
  if (query.config === "browser") {
    return new URL("../index.html?config=browser", window.location.href).toString();
  }

  if (query.config && query.config !== "browser") {
    const target = new URL("../index.html", window.location.href);
    target.searchParams.set("config", query.config);
    if (state.locale) {
      target.searchParams.set("lang", state.locale);
    }
    return target.toString();
  }

  const target = new URL("../index.html", window.location.href);
  if (state.locale) {
    target.searchParams.set("lang", state.locale);
  }
  return target.toString();
}

function buildQrValue(config) {
  if (pageType === "wifi-card") {
    return config.wifi?.connectUrl || "";
  }

  return resolveQrDestinationUrl(config);
}

function renderLocaleSwitch(config) {
  const container = $("locale-switch");
  if (!container) {
    return;
  }

  container.innerHTML = "";
  const locales = getLocaleList(config);

  if (!locales.some((item) => item.code === state.locale)) {
    state.locale = locales[0]?.code || "en";
  }

  locales.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `topbar-button${item.code === state.locale ? " is-active" : ""}`;
    button.textContent = item.short || item.code.toUpperCase();
    button.addEventListener("click", () => {
      state.locale = item.code;
      renderPrintable();
    });
    container.appendChild(button);
  });
}

function renderSharedFields(config) {
  const locale = state.locale;
  renderText("sign-crest", config.brand?.crest || "GG");
  renderText("property-name", config.brand?.name || "");
  renderText("property-address", config.brand?.address || "");
  renderText("host-name", config.host?.name || "");
  renderText("host-contact", config.host?.phone || config.host?.email || "");
  renderText("sign-footer", t(config.printables?.qrSign?.footer, locale));
  renderText("welcome-intro", t(config.host?.intro, locale));
}

function renderQrSign(config) {
  const locale = state.locale;
  renderText("sign-title", t(config.printables?.qrSign?.title, locale));
  renderText("sign-subtitle", t(config.printables?.qrSign?.subtitle, locale));
  renderQrFrame(buildQrValue(config));
}

function renderWifiCard(config) {
  const locale = state.locale;
  renderText("wifi-title", t(config.printables?.wifiCard?.title, locale));
  renderText("wifi-network", config.wifi?.network || "");
  renderText("wifi-password", config.wifi?.password || "");
  renderQrFrame(buildQrValue(config));
}

function renderWelcomeSheet(config) {
  const locale = state.locale;
  renderText("welcome-title", t(config.printables?.welcomeSheet?.title, locale));
  renderQrFrame(buildQrValue(config));
}

function renderPrintable() {
  const { config } = state;
  if (!config) {
    return;
  }

  applyThemeVariables(document.documentElement, state.colorMode, config.themePreset);
  renderLocaleSwitch(config);
  renderSharedFields(config);

  if (pageType === "wifi-card") {
    renderWifiCard(config);
  } else if (pageType === "welcome-sheet") {
    renderWelcomeSheet(config);
  } else {
    renderQrSign(config);
  }
}

function wireToolbar() {
  $("print-button")?.addEventListener("click", () => window.print());
  $("open-guide-button")?.addEventListener("click", () => {
    const target = query.config === "browser" ? buildGuidePreviewHref() : resolveQrDestinationUrl(state.config);
    window.open(target, "_blank", "noopener,noreferrer");
  });
}

async function init() {
  try {
    const loaded = await loadTemplateConfig({
      query,
      defaultPath: "../config.json",
      presetPaths: Object.fromEntries(Object.entries(PRESET_PATHS).map(([key, value]) => [key, `..${value.slice(1)}`])),
    });
    state.config = loaded.config;
    renderPrintable();
    wireToolbar();
  } catch (error) {
    const frame = $("qr-frame");
    if (frame) {
      frame.innerHTML = `<div class="qr-frame-empty">${error.message}</div>`;
    }
    console.error(error);
  }
}

init();
