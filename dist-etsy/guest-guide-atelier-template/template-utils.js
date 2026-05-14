export const PRESET_PATHS = {
  boutique: "./data/presets/boutique-stay.json",
  urban: "./data/presets/urban-loft.json",
  coastal: "./data/presets/coastal-retreat.json",
  blank: "./data/presets/blank-template.json",
};

export const browserConfigKey = "guest-guide-template-config";
export const modeStorageKey = "guest-guide-template-mode";
export const defaultConfigPath = "./config.json";

export const themePresets = {
  mediterranean: {
    light: {
      bg: "#f8efe3",
      bgAlt: "#ecdbc6",
      paper: "rgba(255, 250, 244, 0.9)",
      paperStrong: "rgba(255, 249, 242, 0.98)",
      ink: "#271f19",
      inkSoft: "#5e4d41",
      accent: "#b86f46",
      accentSoft: "#dfb796",
      accentAlt: "#2d5142",
      line: "rgba(58, 36, 22, 0.12)",
      shadow: "0 30px 70px rgba(76, 46, 24, 0.12)",
      glow: "rgba(184, 111, 70, 0.14)",
    },
    dark: {
      bg: "#171412",
      bgAlt: "#25201d",
      paper: "rgba(36, 31, 28, 0.88)",
      paperStrong: "rgba(43, 37, 33, 0.96)",
      ink: "#f5ecdf",
      inkSoft: "#cdbca9",
      accent: "#d08a5f",
      accentSoft: "#81553b",
      accentAlt: "#9eb6a5",
      line: "rgba(250, 240, 229, 0.12)",
      shadow: "0 32px 90px rgba(0, 0, 0, 0.34)",
      glow: "rgba(208, 138, 95, 0.2)",
    },
  },
  gallery: {
    light: {
      bg: "#f3f0eb",
      bgAlt: "#ddd7cf",
      paper: "rgba(255, 255, 255, 0.88)",
      paperStrong: "rgba(255, 255, 255, 0.98)",
      ink: "#171818",
      inkSoft: "#555a5a",
      accent: "#1f3c63",
      accentSoft: "#d9e2ee",
      accentAlt: "#8f5e31",
      line: "rgba(15, 20, 22, 0.1)",
      shadow: "0 32px 68px rgba(18, 27, 34, 0.12)",
      glow: "rgba(31, 60, 99, 0.14)",
    },
    dark: {
      bg: "#0f1317",
      bgAlt: "#182028",
      paper: "rgba(20, 25, 31, 0.9)",
      paperStrong: "rgba(26, 32, 38, 0.98)",
      ink: "#f3f5f7",
      inkSoft: "#bac3cc",
      accent: "#7ca0ce",
      accentSoft: "#203751",
      accentAlt: "#d7b98f",
      line: "rgba(232, 238, 245, 0.12)",
      shadow: "0 32px 88px rgba(0, 0, 0, 0.38)",
      glow: "rgba(124, 160, 206, 0.2)",
    },
  },
  coastal: {
    light: {
      bg: "#eef6f5",
      bgAlt: "#d6e7e4",
      paper: "rgba(252, 255, 255, 0.9)",
      paperStrong: "rgba(255, 255, 255, 0.98)",
      ink: "#163031",
      inkSoft: "#4a6966",
      accent: "#1e7474",
      accentSoft: "#c3e2df",
      accentAlt: "#c67f53",
      line: "rgba(15, 45, 44, 0.12)",
      shadow: "0 28px 70px rgba(19, 61, 60, 0.12)",
      glow: "rgba(30, 116, 116, 0.16)",
    },
    dark: {
      bg: "#0d1517",
      bgAlt: "#132023",
      paper: "rgba(20, 32, 35, 0.9)",
      paperStrong: "rgba(26, 38, 41, 0.98)",
      ink: "#e8f6f5",
      inkSoft: "#a4c9c6",
      accent: "#56b9b1",
      accentSoft: "#1b5252",
      accentAlt: "#d09a72",
      line: "rgba(228, 244, 243, 0.12)",
      shadow: "0 30px 86px rgba(0, 0, 0, 0.36)",
      glow: "rgba(86, 185, 177, 0.2)",
    },
  },
};

export const printableDefaults = {
  qrSign: {
    title: {
      en: "Scan for your guest guide",
      it: "Scansiona per la guida ospiti",
      fr: "Scannez pour le guide voyageurs",
    },
    subtitle: {
      en: "Wi-Fi, arrival details, local recommendations and host contacts",
      it: "Wi-Fi, arrivo, consigli locali e contatti host",
      fr: "Wi-Fi, arrivee, recommandations locales et contacts host",
    },
    footer: {
      en: "Open on your phone",
      it: "Apri sul telefono",
      fr: "Ouvrez sur votre telephone",
    },
  },
  wifiCard: {
    title: {
      en: "Wi-Fi access",
      it: "Accesso Wi-Fi",
      fr: "Acces Wi-Fi",
    },
  },
  welcomeSheet: {
    title: {
      en: "Welcome",
      it: "Benvenuti",
      fr: "Bienvenue",
    },
  },
};

export const layoutDefaults = {
  heroMode: "full",
};

export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function t(value, locale, fallback = "") {
  if (value == null) {
    return fallback;
  }

  if (typeof value === "string") {
    return value;
  }

  return value[locale] ?? value.en ?? Object.values(value)[0] ?? fallback;
}

export function cloneConfig(value) {
  return JSON.parse(JSON.stringify(value));
}

export function getStoredColorMode() {
  const stored = window.localStorage.getItem(modeStorageKey);
  return stored === "dark" ? "dark" : "light";
}

export function getQueryConfig(search = window.location.search) {
  const params = new URLSearchParams(search);
  return {
    preset: params.get("preset"),
    config: params.get("config"),
    lang: params.get("lang"),
  };
}

export function buildWifiConnectUrl(network, password) {
  return `WIFI:T:WPA;S:${network};P:${password};;`;
}

function ensureLocalizedValue(target = {}, source = {}) {
  const value = { ...target };
  Object.entries(source).forEach(([locale, text]) => {
    if (!value[locale]) {
      value[locale] = text;
    }
  });
  return value;
}

export function ensurePrintableConfig(config) {
  config.layout ??= { ...layoutDefaults };
  config.layout.heroMode = ["full", "compact", "hidden"].includes(config.layout.heroMode)
    ? config.layout.heroMode
    : layoutDefaults.heroMode;

  config.share ??= { publicUrl: "", qrDestinationUrl: "" };
  config.printables ??= {};
  config.printables.qrSign = {
    ...printableDefaults.qrSign,
    ...(config.printables.qrSign ?? {}),
    title: ensureLocalizedValue(config.printables.qrSign?.title, printableDefaults.qrSign.title),
    subtitle: ensureLocalizedValue(config.printables.qrSign?.subtitle, printableDefaults.qrSign.subtitle),
    footer: ensureLocalizedValue(config.printables.qrSign?.footer, printableDefaults.qrSign.footer),
  };
  config.printables.wifiCard = {
    ...printableDefaults.wifiCard,
    ...(config.printables.wifiCard ?? {}),
    title: ensureLocalizedValue(config.printables.wifiCard?.title, printableDefaults.wifiCard.title),
  };
  config.printables.welcomeSheet = {
    ...printableDefaults.welcomeSheet,
    ...(config.printables.welcomeSheet ?? {}),
    title: ensureLocalizedValue(config.printables.welcomeSheet?.title, printableDefaults.welcomeSheet.title),
  };
}

export function syncActionReferences(config, action) {
  if (!action) {
    return;
  }

  if (action.reference === "cityMap") {
    action.href = config.links.cityMap;
  }

  if (action.reference === "guidePdf") {
    action.href = config.links.guidePdf;
  }

  if (action.reference === "arrivalRoute") {
    action.href = config.links.arrivalRoute;
  }

  if (action.reference === "excursions") {
    action.href = config.links.excursions;
  }

  if (action.reference === "hostPhone") {
    action.phone = config.host.phone;
  }

  if (action.reference === "hostWhatsapp") {
    action.href = config.host.whatsapp;
  }

  if (action.reference === "hostEmail") {
    action.email = config.host.email;
  }
}

export function syncActionReferencesAcrossConfig(config) {
  (config.quickActions ?? []).forEach((action) => syncActionReferences(config, action));

  (config.services ?? []).forEach((service) => {
    [...(service.cardActions ?? []), ...(service.modal?.sections ?? []).flatMap((section) => section.actions ?? [])].forEach(
      (action) => syncActionReferences(config, action),
    );
  });
}

export function syncWifiContent(config) {
  const wifiService = (config.services ?? []).find((service) => service.id === "wifi");
  const sections = wifiService?.modal?.sections;

  if (!Array.isArray(sections) || sections.length < 2) {
    return;
  }

  if (sections[0]?.text && typeof sections[0].text === "object") {
    Object.keys(sections[0].text).forEach((locale) => {
      sections[0].text[locale] = config.wifi.network;
    });
  }

  if (sections[1]?.text && typeof sections[1].text === "object") {
    Object.keys(sections[1].text).forEach((locale) => {
      sections[1].text[locale] = config.wifi.password;
    });
  }
}

export function normalizeConfig(config) {
  config.wifi.connectUrl = buildWifiConnectUrl(config.wifi.network, config.wifi.password);
  ensurePrintableConfig(config);
  syncActionReferencesAcrossConfig(config);
  syncWifiContent(config);
  return config;
}

export function resolveQrDestinationUrl(config) {
  const explicit = config.share?.qrDestinationUrl?.trim();
  if (explicit) {
    return explicit;
  }

  const publicUrl = config.share?.publicUrl?.trim();
  if (publicUrl) {
    return publicUrl;
  }

  const fallbackPath = window.location.pathname.includes("/printables/") ? "../index.html" : "./index.html";
  return new URL(fallbackPath, window.location.href).toString();
}

export function getLocaleList(config) {
  return Array.isArray(config?.languages) && config.languages.length
    ? config.languages
    : [{ code: "en", label: "English", short: "EN" }];
}

export function applyThemeVariables(root, colorMode, themePreset) {
  const themeName = themePreset in themePresets ? themePreset : "mediterranean";
  const palette = themePresets[themeName][colorMode];

  Object.entries({
    "--bg": palette.bg,
    "--bg-alt": palette.bgAlt,
    "--paper": palette.paper,
    "--paper-strong": palette.paperStrong,
    "--ink": palette.ink,
    "--ink-soft": palette.inkSoft,
    "--accent": palette.accent,
    "--accent-soft": palette.accentSoft,
    "--accent-alt": palette.accentAlt,
    "--line": palette.line,
    "--shadow": palette.shadow,
    "--glow": palette.glow,
  }).forEach(([name, value]) => root.style.setProperty(name, value));
}

export async function loadTemplateConfig({ query = getQueryConfig(), defaultPath = defaultConfigPath, presetPaths = PRESET_PATHS } = {}) {
  if (query.config === "browser") {
    const raw = window.localStorage.getItem(browserConfigKey);
    if (raw) {
      return { config: normalizeConfig(JSON.parse(raw)), source: "browser" };
    }
  }

  if (query.config && query.config !== "browser") {
    const response = await fetch(query.config);
    if (!response.ok) {
      throw new Error(`Unable to load config file: ${query.config}`);
    }

    return { config: normalizeConfig(await response.json()), source: "file" };
  }

  const defaultResponse = await fetch(defaultPath);
  if (defaultResponse.ok) {
    return { config: normalizeConfig(await defaultResponse.json()), source: "file" };
  }

  const presetPath = presetPaths[query.preset] ?? presetPaths.boutique;
  const response = await fetch(presetPath);
  if (!response.ok) {
    throw new Error(`Unable to load preset: ${presetPath}`);
  }

  return { config: normalizeConfig(await response.json()), source: query.preset ?? "preset" };
}
