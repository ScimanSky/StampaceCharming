export const browserConfigKey = "staybook-browser-config";
export const modeStorageKey = "staybook-color-mode";
export const defaultConfigPath = "./config.json";

export const defaultLanguages = [
  { code: "en", label: "English", short: "EN" },
  { code: "it", label: "Italiano", short: "IT" },
  { code: "fr", label: "Francais", short: "FR" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "es", label: "Espanol", short: "ES" },
];

export const sectionCatalog = [
  { key: "houseRules", icon: "house" },
  { key: "usefulInfo", icon: "map" },
  { key: "checkIn", icon: "arrival" },
  { key: "checkOut", icon: "checkout" },
  { key: "localTips", icon: "food" },
  { key: "emergency", icon: "contact" },
];

const copyDictionary = {
  en: {
    guestBook: "Digital guest book",
    previewBanner: "Previewing your browser edits. Export the config file when you are ready to publish.",
    backToEditor: "Back to editor",
    welcomeBadge: "Guest book",
    wifi: "Wi-Fi",
    network: "Network",
    password: "Password",
    copiedPassword: "Password copied",
    copiedLink: "Guest link copied",
    copyPassword: "Copy password",
    houseRules: "House rules",
    houseRulesHint: "Quiet hours, keys, smoking",
    usefulInfo: "Useful info",
    usefulInfoHint: "Trash, hot water, practical notes",
    checkIn: "Check-in",
    checkInHint: "Arrival timing and entry steps",
    checkOut: "Check-out",
    checkOutHint: "Departure reminders in one tap",
    localTips: "Local tips",
    localTipsHint: "Food, groceries and nearby spots",
    emergency: "Need help?",
    emergencyHint: "Urgent numbers and fast support",
    contactHost: "Contact host",
    callHost: "Call host",
    emailHost: "Email host",
    whatsappHost: "WhatsApp host",
    address: "Address",
    city: "City",
    registration: "Registration",
    checkInWindow: "Check-in",
    checkOutTime: "Check-out",
    hostedBy: "Hosted by",
    openDetails: "Open details",
    tapToOpen: "Tap to open",
    notesCount: "notes",
    quickAccess: "Quick access",
    everythingReady: "Everything your guests usually ask for, in one polished page.",
    previewGuestMessage: "Ready-to-send guest message",
    shareStatusReady: "Ready to share",
    shareStatusMissing: "Add your live URL to create the final guest link.",
    qrSignTitle: "Scan for your guest book",
    qrSignSubtitle: "Wi-Fi, house rules, arrival info and useful stay details",
    qrSignFooter: "Open on your phone",
    wifiCardTitle: "Wi-Fi access",
    welcomeSheetTitle: "Welcome",
    pocketCardTitle: "Guest guide",
    pocketCardTagline: "Scan for Wi-Fi, house rules and useful info",
    openGuide: "Open guide",
    printLabel: "Print / Save as PDF",
    heroFallback: "Add a hero image in the customizer for a more branded first impression.",
    introLabel: "Welcome note",
  },
  it: {
    guestBook: "Guest book digitale",
    previewBanner: "Stai visualizzando le modifiche salvate nel browser. Esporta il file config quando sei pronto a pubblicare.",
    backToEditor: "Torna all'editor",
    welcomeBadge: "Guida ospiti",
    wifi: "Wi-Fi",
    network: "Rete",
    password: "Password",
    copiedPassword: "Password copiata",
    copiedLink: "Link ospiti copiato",
    copyPassword: "Copia password",
    houseRules: "Regole della casa",
    houseRulesHint: "Silenzio, chiavi, fumo",
    usefulInfo: "Info utili",
    usefulInfoHint: "Rifiuti, acqua calda, note pratiche",
    checkIn: "Check-in",
    checkInHint: "Orario arrivo e accesso",
    checkOut: "Check-out",
    checkOutHint: "Promemoria prima di uscire",
    localTips: "Consigli locali",
    localTipsHint: "Cibo, spesa e luoghi vicini",
    emergency: "Hai bisogno di aiuto?",
    emergencyHint: "Numeri urgenti e supporto rapido",
    contactHost: "Contatta l'host",
    callHost: "Chiama l'host",
    emailHost: "Email host",
    whatsappHost: "WhatsApp host",
    address: "Indirizzo",
    city: "Citta'",
    registration: "Registrazione",
    checkInWindow: "Check-in",
    checkOutTime: "Check-out",
    hostedBy: "Host",
    openDetails: "Apri dettagli",
    tapToOpen: "Tocca per aprire",
    notesCount: "note",
    quickAccess: "Accesso rapido",
    everythingReady: "Tutto quello che gli ospiti chiedono di solito, in una pagina chiara ed elegante.",
    previewGuestMessage: "Messaggio ospiti pronto da inviare",
    shareStatusReady: "Pronto da condividere",
    shareStatusMissing: "Aggiungi l'URL live per creare il link finale da inviare agli ospiti.",
    qrSignTitle: "Scansiona per la guida ospiti",
    qrSignSubtitle: "Wi-Fi, regole della casa, arrivo e informazioni utili",
    qrSignFooter: "Apri sul telefono",
    wifiCardTitle: "Accesso Wi-Fi",
    welcomeSheetTitle: "Benvenuti",
    pocketCardTitle: "Guida ospiti",
    pocketCardTagline: "Scansiona per Wi-Fi, regole e info utili",
    openGuide: "Apri guida",
    printLabel: "Stampa / Salva in PDF",
    heroFallback: "Aggiungi una hero image dal customizer per un impatto piu' curato.",
    introLabel: "Messaggio di benvenuto",
  },
  fr: {
    guestBook: "Guide voyageurs digitale",
    previewBanner: "Vous visualisez les modifications stockees dans le navigateur. Exportez le fichier config quand vous etes pret a publier.",
    backToEditor: "Retour a l'editeur",
    welcomeBadge: "Guide voyageurs",
    wifi: "Wi-Fi",
    network: "Reseau",
    password: "Mot de passe",
    copiedPassword: "Mot de passe copie",
    copiedLink: "Lien voyageurs copie",
    copyPassword: "Copier le mot de passe",
    houseRules: "Regles de la maison",
    houseRulesHint: "Calme, cles, tabac",
    usefulInfo: "Infos utiles",
    usefulInfoHint: "Poubelles, eau chaude, notes pratiques",
    checkIn: "Arrivee",
    checkInHint: "Horaire et acces",
    checkOut: "Depart",
    checkOutHint: "Rappels avant de partir",
    localTips: "Conseils locaux",
    localTipsHint: "Restaurants, courses et alentours",
    emergency: "Besoin d'aide ?",
    emergencyHint: "Urgence et aide rapide",
    contactHost: "Contacter l'hote",
    callHost: "Appeler l'hote",
    emailHost: "Email host",
    whatsappHost: "WhatsApp host",
    address: "Adresse",
    city: "Ville",
    registration: "Enregistrement",
    checkInWindow: "Arrivee",
    checkOutTime: "Depart",
    hostedBy: "Hote",
    openDetails: "Ouvrir",
    tapToOpen: "Touchez pour ouvrir",
    notesCount: "notes",
    quickAccess: "Acces rapide",
    everythingReady: "Tout ce que les voyageurs demandent d'habitude, dans une page claire et elegante.",
    previewGuestMessage: "Message voyageurs pret a envoyer",
    shareStatusReady: "Pret a partager",
    shareStatusMissing: "Ajoutez votre URL live pour creer le lien final a envoyer.",
    qrSignTitle: "Scannez pour le guide voyageurs",
    qrSignSubtitle: "Wi-Fi, regles, arrivee et informations utiles",
    qrSignFooter: "Ouvrez sur votre telephone",
    wifiCardTitle: "Acces Wi-Fi",
    welcomeSheetTitle: "Bienvenue",
    pocketCardTitle: "Guide voyageurs",
    pocketCardTagline: "Scannez pour Wi-Fi, regles et infos utiles",
    openGuide: "Ouvrir le guide",
    printLabel: "Imprimer / Enregistrer en PDF",
    heroFallback: "Ajoutez une image hero dans le customizer pour un rendu plus premium.",
    introLabel: "Mot d'accueil",
  },
  de: {
    guestBook: "Digitales Gaestebuch",
    previewBanner: "Sie sehen die im Browser gespeicherten Aenderungen. Exportieren Sie die config-Datei, wenn Sie bereit zum Veroeffentlichen sind.",
    backToEditor: "Zurueck zum Editor",
    welcomeBadge: "Gaestebuch",
    wifi: "Wi-Fi",
    network: "Netzwerk",
    password: "Passwort",
    copiedPassword: "Passwort kopiert",
    copiedLink: "Gaestelink kopiert",
    copyPassword: "Passwort kopieren",
    houseRules: "Hausregeln",
    houseRulesHint: "Ruhe, Schluessel, Rauchen",
    usefulInfo: "Nutzliche Infos",
    usefulInfoHint: "Muell, Warmwasser, praktische Infos",
    checkIn: "Check-in",
    checkInHint: "Anreisezeit und Zugang",
    checkOut: "Check-out",
    checkOutHint: "Erinnerungen vor der Abreise",
    localTips: "Lokale Tipps",
    localTipsHint: "Essen, Einkauf und Umgebung",
    emergency: "Brauchen Sie Hilfe?",
    emergencyHint: "Notfallnummern und schnelle Hilfe",
    contactHost: "Host kontaktieren",
    callHost: "Host anrufen",
    emailHost: "E-Mail an Host",
    whatsappHost: "WhatsApp Host",
    address: "Adresse",
    city: "Ort",
    registration: "Registrierung",
    checkInWindow: "Check-in",
    checkOutTime: "Check-out",
    hostedBy: "Gastgeber",
    openDetails: "Details oeffnen",
    tapToOpen: "Tippen zum Oeffnen",
    notesCount: "Hinweise",
    quickAccess: "Schnellzugriff",
    everythingReady: "Alles, was Gaeste normalerweise brauchen, auf einer klaren und attraktiven Seite.",
    previewGuestMessage: "Versandfertige Gastnachricht",
    shareStatusReady: "Bereit zum Teilen",
    shareStatusMissing: "Fuegen Sie Ihre Live-URL hinzu, um den finalen Gastlink zu erstellen.",
    qrSignTitle: "Scannen fuer das Gaestebuch",
    qrSignSubtitle: "Wi-Fi, Hausregeln, Anreise und praktische Infos",
    qrSignFooter: "Am Telefon oeffnen",
    wifiCardTitle: "Wi-Fi Zugang",
    welcomeSheetTitle: "Willkommen",
    pocketCardTitle: "Gaestebuch",
    pocketCardTagline: "Scannen fuer Wi-Fi, Regeln und Infos",
    openGuide: "Guide oeffnen",
    printLabel: "Drucken / Als PDF speichern",
    heroFallback: "Fuegen Sie im Customizer ein Hero-Bild hinzu fuer einen staerkeren ersten Eindruck.",
    introLabel: "Willkommensnotiz",
  },
  es: {
    guestBook: "Libro digital de bienvenida",
    previewBanner: "Estas viendo los cambios guardados en el navegador. Exporta el archivo config cuando estes listo para publicar.",
    backToEditor: "Volver al editor",
    welcomeBadge: "Guia de huespedes",
    wifi: "Wi-Fi",
    network: "Red",
    password: "Contrasena",
    copiedPassword: "Contrasena copiada",
    copiedLink: "Enlace para huespedes copiado",
    copyPassword: "Copiar contrasena",
    houseRules: "Normas de la casa",
    houseRulesHint: "Silencio, llaves, tabaco",
    usefulInfo: "Informacion util",
    usefulInfoHint: "Basura, agua caliente, notas practicas",
    checkIn: "Check-in",
    checkInHint: "Horario y acceso",
    checkOut: "Check-out",
    checkOutHint: "Recordatorios antes de salir",
    localTips: "Consejos locales",
    localTipsHint: "Comida, compras y alrededores",
    emergency: "Necesitas ayuda?",
    emergencyHint: "Urgencias y ayuda rapida",
    contactHost: "Contactar al anfitrion",
    callHost: "Llamar al anfitrion",
    emailHost: "Email host",
    whatsappHost: "WhatsApp host",
    address: "Direccion",
    city: "Ciudad",
    registration: "Registro",
    checkInWindow: "Check-in",
    checkOutTime: "Check-out",
    hostedBy: "Anfitrion",
    openDetails: "Abrir detalles",
    tapToOpen: "Toca para abrir",
    notesCount: "notas",
    quickAccess: "Acceso rapido",
    everythingReady: "Todo lo que los huespedes suelen preguntar, en una pagina clara y atractiva.",
    previewGuestMessage: "Mensaje para huespedes listo para enviar",
    shareStatusReady: "Listo para compartir",
    shareStatusMissing: "Agrega tu URL publica para crear el enlace final para huespedes.",
    qrSignTitle: "Escanea para la guia de huespedes",
    qrSignSubtitle: "Wi-Fi, normas, llegada e informacion util",
    qrSignFooter: "Abre en tu telefono",
    wifiCardTitle: "Acceso Wi-Fi",
    welcomeSheetTitle: "Bienvenidos",
    pocketCardTitle: "Guia de huespedes",
    pocketCardTagline: "Escanea para Wi-Fi, normas e info util",
    openGuide: "Abrir guia",
    printLabel: "Imprimir / Guardar en PDF",
    heroFallback: "Agrega una imagen principal desde el customizer para un impacto mas cuidado.",
    introLabel: "Mensaje de bienvenida",
  },
};

export const themePresets = {
  staybook: {
    light: {
      bg: "#f6efe4",
      bgAlt: "#eadcc7",
      paper: "rgba(255, 251, 246, 0.92)",
      paperStrong: "rgba(255, 252, 248, 0.98)",
      ink: "#241d19",
      inkSoft: "#66584c",
      accent: "#a75c43",
      accentSoft: "#ead0c2",
      accentAlt: "#5d6d4c",
      line: "rgba(36, 29, 25, 0.1)",
      shadow: "0 28px 70px rgba(80, 54, 35, 0.13)",
      glow: "rgba(167, 92, 67, 0.14)",
    },
    dark: {
      bg: "#171412",
      bgAlt: "#241e1a",
      paper: "rgba(34, 29, 26, 0.9)",
      paperStrong: "rgba(41, 35, 31, 0.98)",
      ink: "#f8efe5",
      inkSoft: "#c7b7a8",
      accent: "#d1896d",
      accentSoft: "#704838",
      accentAlt: "#b5c39b",
      line: "rgba(248, 239, 229, 0.1)",
      shadow: "0 32px 90px rgba(0, 0, 0, 0.36)",
      glow: "rgba(209, 137, 109, 0.2)",
    },
  },
};

const localeTemplate = {
  intro: "",
  houseRules: [],
  usefulInfo: [],
  checkIn: [],
  checkOut: [],
  localTips: [],
  emergency: [],
  contactNote: "",
};

const labelsTemplate = {
  heroKicker: "",
  essentialsKicker: "",
  hostKicker: "",
  houseRules: "",
  usefulInfo: "",
  checkIn: "",
  checkOut: "",
  localTips: "",
  emergency: "",
};

function clone(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value));
}

function ensureString(value, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function ensureStringArray(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean);
}

function ensureLocaleObject(value, fallback = "") {
  const output = {};
  defaultLanguages.forEach(({ code }) => {
    output[code] = ensureString(value?.[code], fallback);
  });
  return output;
}

function ensureLocaleContent(value) {
  return {
    intro: ensureString(value?.intro),
    houseRules: ensureStringArray(value?.houseRules),
    usefulInfo: ensureStringArray(value?.usefulInfo),
    checkIn: ensureStringArray(value?.checkIn),
    checkOut: ensureStringArray(value?.checkOut),
    localTips: ensureStringArray(value?.localTips),
    emergency: ensureStringArray(value?.emergency),
    contactNote: ensureString(value?.contactNote),
  };
}

function buildDefaultContentMap() {
  const output = {};
  defaultLanguages.forEach(({ code }) => {
    output[code] = clone(localeTemplate);
  });
  return output;
}

function buildDefaultLabelsMap() {
  const output = {};
  defaultLanguages.forEach(({ code }) => {
    output[code] = clone(labelsTemplate);
  });
  return output;
}

export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function t(value, locale = "en", fallback = "") {
  if (value == null) {
    return fallback;
  }

  if (typeof value === "string") {
    return value || fallback;
  }

  if (typeof value === "object") {
    return value[locale] || value.en || Object.values(value).find(Boolean) || fallback;
  }

  return fallback;
}

export function ui(locale, key, fallback = "") {
  return copyDictionary[locale]?.[key] || copyDictionary.en[key] || fallback;
}

export function getLocaleList(config) {
  const configured = Array.isArray(config?.languages) ? config.languages : [];
  const merged = configured.length ? configured : defaultLanguages;

  return merged.map((item) => {
    const fallback = defaultLanguages.find((entry) => entry.code === item.code);
    return {
      code: item.code,
      label: item.label || fallback?.label || item.code,
      short: item.short || fallback?.short || item.code.toUpperCase(),
    };
  });
}

export function getQueryConfig() {
  const params = new URLSearchParams(window.location.search);
  return {
    config: params.get("config"),
    lang: params.get("lang"),
  };
}

export function getStoredColorMode() {
  const value = window.localStorage.getItem(modeStorageKey);
  return value === "dark" ? "dark" : "light";
}

export function setStoredColorMode(mode) {
  window.localStorage.setItem(modeStorageKey, mode === "dark" ? "dark" : "light");
}

export function applyThemeVariables(target, colorMode = "light", themePreset = "staybook") {
  const theme = themePresets[themePreset] ?? themePresets.staybook;
  const colors = theme[colorMode] ?? theme.light;

  Object.entries(colors).forEach(([key, value]) => {
    target.style.setProperty(`--${key}`, value);
  });

  target.dataset.colorMode = colorMode;
}

export function cloneConfig(config) {
  return clone(config);
}

export function normalizeConfig(rawConfig = {}) {
  const normalized = clone(rawConfig);
  normalized.meta = {
    title: ensureString(normalized.meta?.title, normalized.property?.name || "StayBook"),
    description: ensureString(normalized.meta?.description, "Five-language digital guest book for vacation rentals."),
  };
  normalized.themePreset = ensureString(normalized.themePreset, "staybook");
  normalized.languages = getLocaleList(normalized);
  normalized.property = {
    name: ensureString(normalized.property?.name, "Casa Oliva"),
    badge: ensureString(normalized.property?.badge, "Digital guest book"),
    city: ensureString(normalized.property?.city, "Florence, Italy"),
    address: ensureString(normalized.property?.address, "Add your property address"),
    registration: ensureString(normalized.property?.registration, "Add registration or CIN"),
    checkInWindow: ensureString(normalized.property?.checkInWindow, "15:00 - 22:00"),
    checkOutTime: ensureString(normalized.property?.checkOutTime, "By 10:00"),
    heroImage: ensureString(normalized.property?.heroImage),
    heroImageAlt: ensureLocaleObject(normalized.property?.heroImageAlt, "Guest book hero image"),
  };
  normalized.host = {
    name: ensureString(normalized.host?.name, "Your host"),
    phone: ensureString(normalized.host?.phone),
    email: ensureString(normalized.host?.email),
    whatsapp: ensureString(normalized.host?.whatsapp),
  };
  normalized.wifi = {
    network: ensureString(normalized.wifi?.network, "Your Wi-Fi"),
    password: ensureString(normalized.wifi?.password, "change-me"),
    connectUrl: ensureString(normalized.wifi?.connectUrl),
  };

  if (!normalized.wifi.connectUrl && normalized.wifi.network && normalized.wifi.password) {
    normalized.wifi.connectUrl = `WIFI:T:WPA;S:${normalized.wifi.network};P:${normalized.wifi.password};;`;
  }

  normalized.share = {
    publicUrl: ensureString(normalized.share?.publicUrl),
    guestUrl: ensureString(normalized.share?.guestUrl),
    qrDestinationUrl: ensureString(normalized.share?.qrDestinationUrl),
  };

  const content = buildDefaultContentMap();
  defaultLanguages.forEach(({ code }) => {
    content[code] = ensureLocaleContent(normalized.content?.[code]);
  });
  normalized.content = content;

  const labels = buildDefaultLabelsMap();
  defaultLanguages.forEach(({ code }) => {
    labels[code] = {
      heroKicker: ensureString(normalized.labels?.[code]?.heroKicker, ui(code, "welcomeBadge")),
      essentialsKicker: ensureString(normalized.labels?.[code]?.essentialsKicker, "Guest essentials"),
      hostKicker: ensureString(normalized.labels?.[code]?.hostKicker, ui(code, "hostedBy")),
      houseRules: ensureString(normalized.labels?.[code]?.houseRules, ui(code, "houseRules")),
      usefulInfo: ensureString(normalized.labels?.[code]?.usefulInfo, ui(code, "usefulInfo")),
      checkIn: ensureString(normalized.labels?.[code]?.checkIn, ui(code, "checkIn")),
      checkOut: ensureString(normalized.labels?.[code]?.checkOut, ui(code, "checkOut")),
      localTips: ensureString(normalized.labels?.[code]?.localTips, ui(code, "localTips")),
      emergency: ensureString(normalized.labels?.[code]?.emergency, ui(code, "emergency")),
    };
  });
  normalized.labels = labels;
  return normalized;
}

export async function loadTemplateConfig({ query = getQueryConfig(), defaultPath = defaultConfigPath } = {}) {
  if (query.config === "browser") {
    const stored = window.localStorage.getItem(browserConfigKey);
    if (!stored) {
      throw new Error("No browser config found.");
    }

    return { config: normalizeConfig(JSON.parse(stored)), source: "browser" };
  }

  const targetPath = query.config && query.config !== "browser" ? query.config : defaultPath;
  const response = await fetch(targetPath);
  if (!response.ok) {
    throw new Error(`Unable to load config: ${targetPath}`);
  }

  return { config: normalizeConfig(await response.json()), source: "file" };
}

export function persistBrowserConfig(config) {
  window.localStorage.setItem(browserConfigKey, JSON.stringify(normalizeConfig(config), null, 2));
}

export function resolveGuestUrl(config, fallback = "") {
  return ensureString(config?.share?.guestUrl) || ensureString(config?.share?.publicUrl) || fallback;
}

export function resolveQrDestinationUrl(config, fallback = "") {
  return ensureString(config?.share?.qrDestinationUrl) || resolveGuestUrl(config, fallback) || fallback;
}

export function linesToArray(value) {
  return String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export function arrayToLines(value) {
  return ensureStringArray(value).join("\n");
}

export function getLocalizedContent(config, locale) {
  return config.content?.[locale] || config.content?.en || clone(localeTemplate);
}

export function getLocalizedLabels(config, locale) {
  return config.labels?.[locale] || config.labels?.en || clone(labelsTemplate);
}
