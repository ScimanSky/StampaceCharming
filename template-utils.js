export const PRESET_PATHS = {
  boutique: "./data/presets/boutique-stay.json",
  urban: "./data/presets/urban-loft.json",
  coastal: "./data/presets/coastal-retreat.json",
  family: "./data/presets/family-stay.json",
  cabin: "./data/presets/mountain-cabin.json",
  workstay: "./data/presets/self-checkin-workstay.json",
  blank: "./data/presets/blank-template.json",
};

export const PRESET_CATALOG = [
  {
    key: "boutique",
    path: PRESET_PATHS.boutique,
    label: "Boutique City",
    summary: "Editorial, refined and hospitality-led.",
    audience: "Boutique apartments, design stays and city properties.",
    bestFor: "Polished welcome pages with local recommendations and warm tone.",
    features: ["Arrival notes", "Local picks", "Editorial feel"],
    hero: "Full hero",
    sharing: "Guest guide plus curated local highlights",
    quickActions: "Arrival, Wi-Fi, local picks, host contact",
    featured: true,
    advanced: false,
  },
  {
    key: "urban",
    path: PRESET_PATHS.urban,
    label: "Urban Loft",
    summary: "Fast decisions, strong utility and low-friction arrival.",
    audience: "Lofts, serviced apartments and business travelers.",
    bestFor: "Guests arriving late or mixing work with short city stays.",
    features: ["Self check-in", "Transit-first", "Practical layout"],
    hero: "Compact hero",
    sharing: "Task-first guide for autonomous city guests",
    quickActions: "Check-in, Wi-Fi, transport, support",
    featured: true,
    advanced: false,
  },
  {
    key: "coastal",
    path: PRESET_PATHS.coastal,
    label: "Coastal Retreat",
    summary: "Relaxed navigation with local atmosphere first.",
    audience: "Beach apartments, villas and destination stays.",
    bestFor: "Holiday rentals where guests want ease, rhythm and local tips.",
    features: ["Beach access", "Dining picks", "Soft pacing"],
    hero: "Full hero",
    sharing: "Destination-led guide with slower, image-friendly rhythm",
    quickActions: "Beach, Wi-Fi, dining, host help",
    featured: true,
    advanced: false,
  },
  {
    key: "family",
    path: PRESET_PATHS.family,
    label: "Family Stay",
    summary: "Essentials visible fast, less guest messaging.",
    audience: "Family apartments, holiday homes and practical stays.",
    bestFor: "Hosts who want grocery, kitchen and child-friendly info up front.",
    features: ["Family essentials", "Kitchen notes", "Nearby basics"],
    hero: "Compact hero",
    sharing: "Reassuring guide for practical family trips",
    quickActions: "Wi-Fi, family kit, grocery, help",
    featured: true,
    advanced: false,
  },
  {
    key: "cabin",
    path: PRESET_PATHS.cabin,
    label: "Mountain Cabin",
    summary: "Calm guidance with home systems made clear.",
    audience: "Cabins, retreats and nature stays.",
    bestFor: "Hosts who need heating, arrival and local essentials easy to find.",
    features: ["Heating help", "Nature nearby", "Grounded tone"],
    hero: "Full hero",
    sharing: "Atmospheric guide with practical home-system support",
    quickActions: "Arrival, heating, essentials, host contact",
    featured: true,
    advanced: false,
  },
  {
    key: "workstay",
    path: PRESET_PATHS.workstay,
    label: "Self Check-In Workstay",
    summary: "Operations-first flow with smart autonomy.",
    audience: "Remote workers, self check-in rentals and autonomous guests.",
    bestFor: "Hosts who want check-in, workspace and support immediately visible.",
    features: ["Self check-in", "Workspace", "Support shortcuts"],
    hero: "Quick access first",
    sharing: "Guest-safe link optimized for low-contact hosting",
    quickActions: "Check-in, Wi-Fi, workspace, support",
    featured: true,
    advanced: false,
  },
  {
    key: "blank",
    path: PRESET_PATHS.blank,
    label: "Blank Builder",
    summary: "Start from a clean structure and build your own.",
    audience: "Advanced buyers who prefer a neutral starter.",
    bestFor: "Hosts comfortable editing raw structure and module order.",
    features: ["Neutral starter", "Same engine", "Advanced bonus"],
    hero: "Full hero",
    sharing: "Flexible starter for fully custom hospitality flows",
    quickActions: "Neutral defaults",
    featured: false,
    advanced: true,
  },
];

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
  family: {
    light: {
      bg: "#f7f4ee",
      bgAlt: "#ebe5da",
      paper: "rgba(255, 255, 255, 0.92)",
      paperStrong: "rgba(255, 255, 255, 0.99)",
      ink: "#2b2722",
      inkSoft: "#666056",
      accent: "#be8b5e",
      accentSoft: "#efd6bf",
      accentAlt: "#56706b",
      line: "rgba(43, 39, 34, 0.1)",
      shadow: "0 26px 64px rgba(72, 56, 41, 0.11)",
      glow: "rgba(190, 139, 94, 0.12)",
    },
    dark: {
      bg: "#171513",
      bgAlt: "#24201b",
      paper: "rgba(34, 31, 28, 0.9)",
      paperStrong: "rgba(40, 36, 32, 0.98)",
      ink: "#f8f1e7",
      inkSoft: "#cbc0b2",
      accent: "#d8a06d",
      accentSoft: "#6e5036",
      accentAlt: "#99b4ad",
      line: "rgba(248, 241, 231, 0.1)",
      shadow: "0 30px 86px rgba(0, 0, 0, 0.36)",
      glow: "rgba(216, 160, 109, 0.18)",
    },
  },
  cabin: {
    light: {
      bg: "#efe8de",
      bgAlt: "#ddd0c0",
      paper: "rgba(255, 252, 247, 0.92)",
      paperStrong: "rgba(255, 253, 250, 0.99)",
      ink: "#232019",
      inkSoft: "#5e5a50",
      accent: "#87674c",
      accentSoft: "#dcc7b2",
      accentAlt: "#43584d",
      line: "rgba(35, 32, 25, 0.1)",
      shadow: "0 26px 64px rgba(63, 50, 36, 0.12)",
      glow: "rgba(67, 88, 77, 0.16)",
    },
    dark: {
      bg: "#111511",
      bgAlt: "#1b241d",
      paper: "rgba(26, 31, 27, 0.92)",
      paperStrong: "rgba(31, 36, 32, 0.98)",
      ink: "#ecf0e8",
      inkSoft: "#bcc8ba",
      accent: "#c99c6f",
      accentSoft: "#5e4734",
      accentAlt: "#8eab93",
      line: "rgba(236, 240, 232, 0.1)",
      shadow: "0 32px 92px rgba(0, 0, 0, 0.38)",
      glow: "rgba(142, 171, 147, 0.18)",
    },
  },
  workstay: {
    light: {
      bg: "#edf1f4",
      bgAlt: "#dde5ea",
      paper: "rgba(255, 255, 255, 0.9)",
      paperStrong: "rgba(255, 255, 255, 0.99)",
      ink: "#151a20",
      inkSoft: "#586371",
      accent: "#31618c",
      accentSoft: "#d5e2ee",
      accentAlt: "#1f2f44",
      line: "rgba(21, 26, 32, 0.1)",
      shadow: "0 28px 74px rgba(18, 28, 41, 0.12)",
      glow: "rgba(49, 97, 140, 0.15)",
    },
    dark: {
      bg: "#0d1218",
      bgAlt: "#151d26",
      paper: "rgba(20, 27, 35, 0.92)",
      paperStrong: "rgba(24, 31, 39, 0.98)",
      ink: "#f0f5fa",
      inkSoft: "#b5c2cf",
      accent: "#7baad6",
      accentSoft: "#23384f",
      accentAlt: "#d5c2a4",
      line: "rgba(240, 245, 250, 0.11)",
      shadow: "0 32px 96px rgba(0, 0, 0, 0.4)",
      glow: "rgba(123, 170, 214, 0.18)",
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
  qrPocketCard: {
    title: {
      en: "Your guest guide",
      it: "La tua guida ospiti",
      fr: "Votre guide voyageurs",
    },
    tagline: {
      en: "Scan for Wi-Fi, arrival info & local tips",
      it: "Scansiona per Wi-Fi, arrivo e consigli locali",
      fr: "Scannez pour Wi-Fi, arrivee et conseils locaux",
    },
  },
};

export const layoutDefaults = {
  heroMode: "full",
  density: "balanced",
  quickActionsStyle: "pill",
  serviceCardStyle: "layered",
};

export const presetMetaDefaults = {
  key: "blank",
  label: {
    en: "Blank Builder",
    it: "Blank Builder",
    fr: "Blank Builder",
  },
  audience: {
    en: "Advanced buyers",
    it: "Acquirenti avanzati",
    fr: "Acheteurs avances",
  },
  summary: {
    en: "Start from a clean structure and build your own.",
    it: "Parti da una struttura pulita e costruisci il tuo flusso.",
    fr: "Partez d'une structure propre et construisez votre flux.",
  },
  featured: false,
  wizardCategory: "advanced",
  listingOrder: 99,
};

export const wizardDefaultsShape = {
  recommendedFor: ["general"],
  primaryGoal: "guest-experience",
  bestFor: "Hosts who want a clean guest guide starter.",
  focusModules: ["wifi", "arrival", "host contact"],
};

export const serviceMetadataDefaults = {
  wifi: { templateCategory: "core", priority: "high", audienceTags: ["all", "family", "workstay"] },
  arrival: { templateCategory: "arrival", priority: "high", audienceTags: ["all", "city", "cabin"] },
  "self-check-in": { templateCategory: "arrival", priority: "high", audienceTags: ["urban", "workstay"] },
  "house-rules": { templateCategory: "core", priority: "medium", audienceTags: ["all"] },
  checkout: { templateCategory: "core", priority: "high", audienceTags: ["all"] },
  emergency: { templateCategory: "core", priority: "high", audienceTags: ["all"] },
  food: { templateCategory: "neighborhood", priority: "medium", audienceTags: ["boutique", "coastal", "urban"] },
  mobility: { templateCategory: "neighborhood", priority: "medium", audienceTags: ["urban", "workstay", "city"] },
  experiences: { templateCategory: "lifestyle", priority: "low", audienceTags: ["boutique", "coastal", "cabin"] },
  beach: { templateCategory: "lifestyle", priority: "high", audienceTags: ["coastal"] },
  workspace: { templateCategory: "utility", priority: "high", audienceTags: ["urban", "workstay"] },
  "family-essentials": { templateCategory: "utility", priority: "high", audienceTags: ["family"] },
  kitchen: { templateCategory: "utility", priority: "medium", audienceTags: ["family"] },
  "heating-fireplace": { templateCategory: "utility", priority: "high", audienceTags: ["cabin"] },
  "house-systems": { templateCategory: "utility", priority: "high", audienceTags: ["workstay", "cabin"] },
  nearby: { templateCategory: "neighborhood", priority: "medium", audienceTags: ["family", "cabin"] },
  support: { templateCategory: "support", priority: "high", audienceTags: ["workstay"] },
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
    view: params.get("view"),
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
  config.media ??= {};
  config.media.heroImage ??= { src: "", alt: { en: "", it: "", fr: "" } };
  if (typeof config.media.heroImage === "string") {
    config.media.heroImage = { src: config.media.heroImage, alt: { en: "", it: "", fr: "" } };
  }
  config.media.heroImage.alt ??= { en: "", it: "", fr: "" };
  if (!Array.isArray(config.media.gallery)) {
    config.media.gallery = [];
  }
  config.media.gallery = config.media.gallery.map((item) => {
    if (typeof item === "string") {
      return { src: item, alt: { en: "", it: "", fr: "" } };
    }
    item.alt ??= { en: "", it: "", fr: "" };
    return item;
  });

  config.layout ??= { ...layoutDefaults };
  config.layout.heroMode = ["full", "compact", "hidden"].includes(config.layout.heroMode)
    ? config.layout.heroMode
    : layoutDefaults.heroMode;
  config.layout.density = ["editorial", "balanced", "utility"].includes(config.layout.density)
    ? config.layout.density
    : layoutDefaults.density;
  config.layout.quickActionsStyle = ["pill", "grid", "compact"].includes(config.layout.quickActionsStyle)
    ? config.layout.quickActionsStyle
    : layoutDefaults.quickActionsStyle;
  config.layout.serviceCardStyle = ["layered", "clean", "soft", "utility"].includes(config.layout.serviceCardStyle)
    ? config.layout.serviceCardStyle
    : layoutDefaults.serviceCardStyle;

  config.share ??= { publicUrl: "", qrDestinationUrl: "", guestUrl: "" };
  config.share.guestUrl ??= "";
  config.presetMeta = {
    ...presetMetaDefaults,
    ...(config.presetMeta ?? {}),
    label: ensureLocalizedValue(config.presetMeta?.label, presetMetaDefaults.label),
    audience: ensureLocalizedValue(config.presetMeta?.audience, presetMetaDefaults.audience),
    summary: ensureLocalizedValue(config.presetMeta?.summary, presetMetaDefaults.summary),
  };
  config.wizardDefaults = {
    ...wizardDefaultsShape,
    ...(config.wizardDefaults ?? {}),
  };
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
  config.printables.qrPocketCard = {
    ...printableDefaults.qrPocketCard,
    ...(config.printables.qrPocketCard ?? {}),
    title: ensureLocalizedValue(config.printables.qrPocketCard?.title, printableDefaults.qrPocketCard.title),
    tagline: ensureLocalizedValue(config.printables.qrPocketCard?.tagline, printableDefaults.qrPocketCard.tagline),
  };

  if (Array.isArray(config.services)) {
    config.services = config.services.map((service) => {
      const defaults = serviceMetadataDefaults[service.id] ?? {
        templateCategory: "utility",
        priority: "medium",
        audienceTags: ["all"],
      };
      return {
        ...service,
        templateCategory: service.templateCategory ?? defaults.templateCategory,
        priority: service.priority ?? defaults.priority,
        audienceTags: Array.isArray(service.audienceTags) ? service.audienceTags : defaults.audienceTags,
      };
    });
  }
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

export function resolvePublicGuideUrl(config) {
  const publicUrl = config.share?.publicUrl?.trim();
  if (publicUrl) {
    return publicUrl;
  }

  const fallbackPath = window.location.pathname.includes("/printables/") ? "../index.html" : "./index.html";
  return new URL(fallbackPath, window.location.href).toString();
}

export function resolveGuestUrl(config) {
  const explicit = config.share?.guestUrl?.trim();
  if (explicit) {
    return explicit;
  }

  const base = resolvePublicGuideUrl(config);
  const url = new URL(base, window.location.href);
  url.searchParams.set("view", "guest");
  return url.toString();
}

export function resolveQrDestinationUrl(config) {
  const explicit = config.share?.qrDestinationUrl?.trim();
  if (explicit) {
    return explicit;
  }

  return resolveGuestUrl(config);
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
