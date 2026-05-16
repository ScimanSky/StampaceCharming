import {
  applyThemeVariables,
  getLocalizedContent,
  getLocaleList,
  getQueryConfig,
  getStoredColorMode,
  loadTemplateConfig,
  resolveQrDestinationUrl,
  ui,
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

const printableCopy = {
  en: {
    qrHero: "QR guest book",
    wifiHero: "Guest Wi-Fi",
    welcomeHero: "Guest welcome",
    property: "Property",
    host: "Host",
    guestsGet: "What guests get",
    guideList: ["Wi-Fi access", "Arrival details", "House rules", "Useful local info"],
    network: "Network",
    password: "Password",
    wifiCaption: "Scan to connect on supported devices",
    hostContact: "Direct host contact",
    openGuideFor: "Open the guide for",
    openGuideList: ["Wi-Fi access", "Arrival notes", "House rules", "Useful stay info"],
  },
  it: {
    qrHero: "QR guida ospiti",
    wifiHero: "Wi-Fi ospiti",
    welcomeHero: "Benvenuti",
    property: "Proprieta'",
    host: "Host",
    guestsGet: "Cosa trovano gli ospiti",
    guideList: ["Accesso Wi-Fi", "Dettagli arrivo", "Regole della casa", "Info utili"],
    network: "Rete",
    password: "Password",
    wifiCaption: "Scansiona per connetterti sui dispositivi compatibili",
    hostContact: "Contatto diretto host",
    openGuideFor: "Apri la guida per",
    openGuideList: ["Accesso Wi-Fi", "Note di arrivo", "Regole della casa", "Info per il soggiorno"],
  },
  fr: {
    qrHero: "QR guide voyageurs",
    wifiHero: "Wi-Fi voyageurs",
    welcomeHero: "Bienvenue",
    property: "Propriete",
    host: "Hote",
    guestsGet: "Ce que trouvent les voyageurs",
    guideList: ["Acces Wi-Fi", "Details d'arrivee", "Regles de la maison", "Infos utiles"],
    network: "Reseau",
    password: "Mot de passe",
    wifiCaption: "Scannez pour vous connecter sur les appareils compatibles",
    hostContact: "Contact direct hote",
    openGuideFor: "Ouvrez le guide pour",
    openGuideList: ["Acces Wi-Fi", "Notes d'arrivee", "Regles de la maison", "Infos utiles"],
  },
  de: {
    qrHero: "QR Gaestebuch",
    wifiHero: "Gaeste Wi-Fi",
    welcomeHero: "Willkommen",
    property: "Unterkunft",
    host: "Gastgeber",
    guestsGet: "Was Gaeste finden",
    guideList: ["Wi-Fi Zugang", "Anreisehinweise", "Hausregeln", "Praktische Infos"],
    network: "Netzwerk",
    password: "Passwort",
    wifiCaption: "Scannen zum Verbinden auf unterstuetzten Geraeten",
    hostContact: "Direkter Host-Kontakt",
    openGuideFor: "Guide oeffnen fuer",
    openGuideList: ["Wi-Fi Zugang", "Anreise", "Hausregeln", "Infos zum Aufenthalt"],
  },
  es: {
    qrHero: "QR guia de huespedes",
    wifiHero: "Wi-Fi huespedes",
    welcomeHero: "Bienvenidos",
    property: "Propiedad",
    host: "Anfitrion",
    guestsGet: "Lo que ven los huespedes",
    guideList: ["Acceso Wi-Fi", "Detalles de llegada", "Normas de la casa", "Informacion util"],
    network: "Red",
    password: "Contrasena",
    wifiCaption: "Escanea para conectar dispositivos compatibles",
    hostContact: "Contacto directo del anfitrion",
    openGuideFor: "Abre la guia para",
    openGuideList: ["Acceso Wi-Fi", "Notas de llegada", "Normas de la casa", "Info de estancia"],
  },
};

function $(id) {
  return document.getElementById(id);
}

function text(id, value) {
  const node = $(id);
  if (node) {
    node.textContent = value ?? "";
  }
}

function list(id, items) {
  const node = $(id);
  if (!node) {
    return;
  }
  node.innerHTML = (items || []).map((item) => `<li>${item}</li>`).join("");
}

function renderQrFrame(value) {
  const frame = $("qr-frame");
  if (!frame) {
    return;
  }

  frame.innerHTML = "";
  if (!value) {
    frame.innerHTML = `<div class="qr-frame-empty">Add your live guide URL to generate this QR code.</div>`;
    return;
  }

  const qr = window.qrcode(0, "M");
  qr.addData(value);
  qr.make();
  frame.innerHTML = qr.createSvgTag(8, 0);
}

function buildGuidePreviewHref() {
  const target = new URL("../index.html", window.location.href);
  target.searchParams.set("lang", state.locale);
  if (query.config === "browser") {
    target.searchParams.set("config", "browser");
  } else if (query.config) {
    target.searchParams.set("config", query.config);
  }
  return target.toString();
}

function buildQrValue(config) {
  if (pageType === "wifi-card") {
    return config.wifi.connectUrl;
  }

  const fallback = query.config === "browser" ? buildGuidePreviewHref() : "";
  return resolveQrDestinationUrl(config, fallback);
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
    button.textContent = item.short;
    button.addEventListener("click", () => {
      state.locale = item.code;
      renderPrintable();
    });
    container.appendChild(button);
  });
}

function renderShared(config) {
  const localeContent = getLocalizedContent(config, state.locale);
  text("sign-crest", config.property.name.slice(0, 2).toUpperCase());
  text("property-name", config.property.name);
  text("property-address", config.property.address);
  text("host-name", config.host.name);
  text("host-contact", config.host.phone || config.host.email || "");
  text("welcome-intro", localeContent.intro);
  text("sign-footer", ui(state.locale, "qrSignFooter"));
}

function renderQrSign(config) {
  const copy = printableCopy[state.locale] || printableCopy.en;
  text("hero-label", copy.qrHero);
  text("sign-title", ui(state.locale, "qrSignTitle"));
  text("sign-subtitle", ui(state.locale, "qrSignSubtitle"));
  text("property-label", copy.property);
  text("host-label", copy.host);
  text("guests-get-label", copy.guestsGet);
  list("guests-get-list", copy.guideList);
  renderQrFrame(buildQrValue(config));
}

function renderWifiCard(config) {
  const copy = printableCopy[state.locale] || printableCopy.en;
  text("hero-label", copy.wifiHero);
  text("wifi-title", ui(state.locale, "wifiCardTitle"));
  text("network-label", copy.network);
  text("password-label", copy.password);
  text("property-label", copy.property);
  text("wifi-network", config.wifi.network);
  text("wifi-password", config.wifi.password);
  text("wifi-caption", copy.wifiCaption);
  renderQrFrame(buildQrValue(config));
}

function renderWelcomeSheet(config) {
  const copy = printableCopy[state.locale] || printableCopy.en;
  text("hero-label", copy.welcomeHero);
  text("welcome-title", ui(state.locale, "welcomeSheetTitle"));
  text("property-label", copy.property);
  text("host-label", copy.hostContact);
  text("open-guide-for-label", copy.openGuideFor);
  list("open-guide-for-list", copy.openGuideList);
  renderQrFrame(buildQrValue(config));
}

function buildPocketCardHtml(config) {
  const qrValue = buildQrValue(config);
  const title = ui(state.locale, "pocketCardTitle");
  const tagline = ui(state.locale, "pocketCardTagline");
  const seal = config.property.name.slice(0, 2).toUpperCase();

  let qrHtml = `<div class="qr-frame-empty">Add your live URL</div>`;
  if (qrValue) {
    const qr = window.qrcode(0, "M");
    qr.addData(qrValue);
    qr.make();
    qrHtml = qr.createSvgTag(4, 0);
  }

  return `
    <div class="pocket-card">
      <div class="pocket-body">
        <div>
          <p class="pocket-overline">${ui(state.locale, "guestBook")}</p>
          <h2 class="pocket-title">${title}</h2>
          <p class="pocket-tagline">${tagline}</p>
        </div>
        <div class="pocket-footer">
          <div class="pocket-seal">${seal}</div>
          <span class="pocket-host">${config.property.name}</span>
        </div>
      </div>
      <div class="pocket-qr-side">
        <div class="pocket-qr-frame">${qrHtml}</div>
        <p class="pocket-scan-label">${ui(state.locale, "openGuide")}</p>
      </div>
    </div>
  `;
}

function renderQrPocketCard(config) {
  const grid = $("pocket-grid");
  if (!grid) {
    return;
  }

  const card = buildPocketCardHtml(config);
  grid.innerHTML = card + card + card;
}

function renderPrintable() {
  const config = state.config;
  if (!config) {
    return;
  }

  applyThemeVariables(document.documentElement, state.colorMode, config.themePreset);
  renderLocaleSwitch(config);
  renderShared(config);

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
    const target = query.config === "browser" ? buildGuidePreviewHref() : resolveQrDestinationUrl(state.config, buildGuidePreviewHref());
    window.open(target, "_blank", "noopener,noreferrer");
  });
}

async function init() {
  try {
    const loaded = await loadTemplateConfig({ query, defaultPath: "../config.json" });
    state.config = loaded.config;
    renderPrintable();
    wireToolbar();
  } catch (error) {
    console.error(error);
  }
}

init();
