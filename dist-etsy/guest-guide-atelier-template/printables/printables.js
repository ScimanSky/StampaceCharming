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
    : pageName.includes("qr-pocket-card")
      ? "qr-pocket-card"
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

function buildPocketCardHtml(config) {
  const locale = state.locale;
  const qrValue = buildQrValue(config);
  const crest = config.brand?.crest || "GG";
  const propertyName = config.brand?.name || "";
  const hostName = config.host?.name || "";
  const title = t(config.printables?.qrPocketCard?.title, locale, "Your guest guide");
  const tagline = t(config.printables?.qrPocketCard?.tagline, locale, "Scan for Wi-Fi, arrival info & local tips");

  // Generate the QR SVG once
  let qrHtml = "";
  if (qrValue) {
    const qr = window.qrcode(0, "M");
    qr.addData(qrValue);
    qr.make();
    qrHtml = qr.createSvgTag(4, 0);
  } else {
    qrHtml = `<div class="qr-frame-empty">Add a public URL to generate the QR code.</div>`;
  }

  const escStr = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const cardHtml = `
    <div class="pocket-card">
      <div class="pocket-body">
        <div>
          <p class="pocket-overline">Guest guide</p>
          <h2 class="pocket-title">${escStr(title)}</h2>
          <p class="pocket-tagline">${escStr(tagline)}</p>
        </div>
        <div class="pocket-footer">
          <div class="pocket-seal">${escStr(crest)}</div>
          <span class="pocket-host">${escStr(propertyName || hostName)}</span>
        </div>
      </div>
      <div class="pocket-qr-side">
        <div class="pocket-qr-frame">${qrHtml}</div>
        <p class="pocket-scan-label">Scan me</p>
      </div>
    </div>
  `;

  return cardHtml;
}

function renderQrPocketCard(config) {
  const grid = document.getElementById("pocket-grid");
  if (!grid) {
    return;
  }
  // Render 3 cards per sheet
  const card = buildPocketCardHtml(config);
  grid.innerHTML = card + card + card;
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
  } else if (pageType === "qr-pocket-card") {
    renderQrPocketCard(config);
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
