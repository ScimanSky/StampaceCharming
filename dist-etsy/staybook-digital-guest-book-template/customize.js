import {
  arrayToLines,
  browserConfigKey,
  defaultLanguages,
  linesToArray,
  loadTemplateConfig,
  normalizeConfig,
  persistBrowserConfig,
  resolveGuestUrl,
} from "./template-utils.js";

const state = {
  config: null,
  activeLocale: "en",
};

const dom = {
  propertyNameInput: document.querySelector("#property-name-input"),
  propertyBadgeInput: document.querySelector("#property-badge-input"),
  propertyCityInput: document.querySelector("#property-city-input"),
  propertyAddressInput: document.querySelector("#property-address-input"),
  propertyRegistrationInput: document.querySelector("#property-registration-input"),
  checkInWindowInput: document.querySelector("#check-in-window-input"),
  checkOutTimeInput: document.querySelector("#check-out-time-input"),
  heroImageInput: document.querySelector("#hero-image-input"),
  hostNameInput: document.querySelector("#host-name-input"),
  hostPhoneInput: document.querySelector("#host-phone-input"),
  hostEmailInput: document.querySelector("#host-email-input"),
  hostWhatsappInput: document.querySelector("#host-whatsapp-input"),
  wifiNetworkInput: document.querySelector("#wifi-network-input"),
  wifiPasswordInput: document.querySelector("#wifi-password-input"),
  languageSwitch: document.querySelector("#language-switch"),
  heroKickerInput: document.querySelector("#hero-kicker-input"),
  essentialsKickerInput: document.querySelector("#essentials-kicker-input"),
  hostKickerInput: document.querySelector("#host-kicker-input"),
  houseRulesTitleInput: document.querySelector("#house-rules-title-input"),
  usefulInfoTitleInput: document.querySelector("#useful-info-title-input"),
  checkInTitleInput: document.querySelector("#check-in-title-input"),
  checkOutTitleInput: document.querySelector("#check-out-title-input"),
  localTipsTitleInput: document.querySelector("#local-tips-title-input"),
  emergencyTitleInput: document.querySelector("#emergency-title-input"),
  introInput: document.querySelector("#intro-input"),
  houseRulesInput: document.querySelector("#house-rules-input"),
  usefulInfoInput: document.querySelector("#useful-info-input"),
  checkInInput: document.querySelector("#check-in-input"),
  checkOutInput: document.querySelector("#check-out-input"),
  localTipsInput: document.querySelector("#local-tips-input"),
  emergencyInput: document.querySelector("#emergency-input"),
  contactNoteInput: document.querySelector("#contact-note-input"),
  publicUrlInput: document.querySelector("#public-url-input"),
  guestUrlInput: document.querySelector("#guest-url-input"),
  qrDestinationInput: document.querySelector("#qr-destination-input"),
  shareStatusPill: document.querySelector("#share-status-pill"),
  shareStatusCopy: document.querySelector("#share-status-copy"),
  guestLinkOutput: document.querySelector("#guest-link-output"),
  guestMessageOutput: document.querySelector("#guest-message-output"),
  guidePreviewLink: document.querySelector("#guide-preview-link"),
  qrSignPreviewLink: document.querySelector("#qr-sign-preview-link"),
  wifiCardPreviewLink: document.querySelector("#wifi-card-preview-link"),
  welcomeSheetPreviewLink: document.querySelector("#welcome-sheet-preview-link"),
  pocketCardPreviewLink: document.querySelector("#pocket-card-preview-link"),
  downloadButton: document.querySelector("#download-button"),
  importInput: document.querySelector("#import-input"),
  copyGuestLinkButton: document.querySelector("#copy-guest-link-button"),
  copyGuestMessageButton: document.querySelector("#copy-guest-message-button"),
  jsonEditor: document.querySelector("#json-editor"),
  toast: document.querySelector("#toast"),
};

const localizedFieldBindings = [
  {
    input: dom.heroKickerInput,
    key: "heroKicker",
    scope: "labels",
    toValue: (value) => value ?? "",
    fromValue: (value) => value,
  },
  {
    input: dom.essentialsKickerInput,
    key: "essentialsKicker",
    scope: "labels",
    toValue: (value) => value ?? "",
    fromValue: (value) => value,
  },
  {
    input: dom.hostKickerInput,
    key: "hostKicker",
    scope: "labels",
    toValue: (value) => value ?? "",
    fromValue: (value) => value,
  },
  {
    input: dom.houseRulesTitleInput,
    key: "houseRules",
    scope: "labels",
    toValue: (value) => value ?? "",
    fromValue: (value) => value,
  },
  {
    input: dom.usefulInfoTitleInput,
    key: "usefulInfo",
    scope: "labels",
    toValue: (value) => value ?? "",
    fromValue: (value) => value,
  },
  {
    input: dom.checkInTitleInput,
    key: "checkIn",
    scope: "labels",
    toValue: (value) => value ?? "",
    fromValue: (value) => value,
  },
  {
    input: dom.checkOutTitleInput,
    key: "checkOut",
    scope: "labels",
    toValue: (value) => value ?? "",
    fromValue: (value) => value,
  },
  {
    input: dom.localTipsTitleInput,
    key: "localTips",
    scope: "labels",
    toValue: (value) => value ?? "",
    fromValue: (value) => value,
  },
  {
    input: dom.emergencyTitleInput,
    key: "emergency",
    scope: "labels",
    toValue: (value) => value ?? "",
    fromValue: (value) => value,
  },
  {
    input: dom.introInput,
    key: "intro",
    label: "Welcome note",
    toValue: (value) => value ?? "",
    fromValue: (value) => value,
  },
  {
    input: dom.houseRulesInput,
    key: "houseRules",
    label: "House rules",
    toValue: arrayToLines,
    fromValue: linesToArray,
  },
  {
    input: dom.usefulInfoInput,
    key: "usefulInfo",
    label: "Useful info",
    toValue: arrayToLines,
    fromValue: linesToArray,
  },
  {
    input: dom.checkInInput,
    key: "checkIn",
    label: "Check-in notes",
    toValue: arrayToLines,
    fromValue: linesToArray,
  },
  {
    input: dom.checkOutInput,
    key: "checkOut",
    label: "Check-out notes",
    toValue: arrayToLines,
    fromValue: linesToArray,
  },
  {
    input: dom.localTipsInput,
    key: "localTips",
    label: "Local tips",
    toValue: arrayToLines,
    fromValue: linesToArray,
  },
  {
    input: dom.emergencyInput,
    key: "emergency",
    label: "Emergency info",
    toValue: arrayToLines,
    fromValue: linesToArray,
  },
  {
    input: dom.contactNoteInput,
    key: "contactNote",
    label: "Contact note",
    toValue: (value) => value ?? "",
    fromValue: (value) => value,
  },
];

const commonBindings = [
  {
    input: dom.propertyNameInput,
    read: (config) => config.property.name,
    write: (config, value) => {
      config.property.name = value;
      config.meta.title = `${value} Guest Book`;
      defaultLanguages.forEach(({ code }) => {
        config.property.heroImageAlt[code] = `${value} guest book hero image`;
      });
    },
  },
  {
    input: dom.propertyBadgeInput,
    read: (config) => config.property.badge,
    write: (config, value) => {
      config.property.badge = value;
    },
  },
  {
    input: dom.propertyCityInput,
    read: (config) => config.property.city,
    write: (config, value) => {
      config.property.city = value;
    },
  },
  {
    input: dom.propertyAddressInput,
    read: (config) => config.property.address,
    write: (config, value) => {
      config.property.address = value;
    },
  },
  {
    input: dom.propertyRegistrationInput,
    read: (config) => config.property.registration,
    write: (config, value) => {
      config.property.registration = value;
    },
  },
  {
    input: dom.checkInWindowInput,
    read: (config) => config.property.checkInWindow,
    write: (config, value) => {
      config.property.checkInWindow = value;
    },
  },
  {
    input: dom.checkOutTimeInput,
    read: (config) => config.property.checkOutTime,
    write: (config, value) => {
      config.property.checkOutTime = value;
    },
  },
  {
    input: dom.heroImageInput,
    read: (config) => config.property.heroImage,
    write: (config, value) => {
      config.property.heroImage = value;
    },
  },
  {
    input: dom.hostNameInput,
    read: (config) => config.host.name,
    write: (config, value) => {
      config.host.name = value;
    },
  },
  {
    input: dom.hostPhoneInput,
    read: (config) => config.host.phone,
    write: (config, value) => {
      config.host.phone = value;
    },
  },
  {
    input: dom.hostEmailInput,
    read: (config) => config.host.email,
    write: (config, value) => {
      config.host.email = value;
    },
  },
  {
    input: dom.hostWhatsappInput,
    read: (config) => config.host.whatsapp,
    write: (config, value) => {
      config.host.whatsapp = value;
    },
  },
  {
    input: dom.wifiNetworkInput,
    read: (config) => config.wifi.network,
    write: (config, value) => {
      config.wifi.network = value;
      config.wifi.connectUrl = `WIFI:T:WPA;S:${config.wifi.network};P:${config.wifi.password};;`;
    },
  },
  {
    input: dom.wifiPasswordInput,
    read: (config) => config.wifi.password,
    write: (config, value) => {
      config.wifi.password = value;
      config.wifi.connectUrl = `WIFI:T:WPA;S:${config.wifi.network};P:${config.wifi.password};;`;
    },
  },
  {
    input: dom.publicUrlInput,
    read: (config) => config.share.publicUrl,
    write: (config, value) => {
      config.share.publicUrl = value;
    },
  },
  {
    input: dom.guestUrlInput,
    read: (config) => config.share.guestUrl,
    write: (config, value) => {
      config.share.guestUrl = value;
    },
  },
  {
    input: dom.qrDestinationInput,
    read: (config) => config.share.qrDestinationUrl,
    write: (config, value) => {
      config.share.qrDestinationUrl = value;
    },
  },
];

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    dom.toast.hidden = true;
  }, 2200);
}

async function copyToClipboard(value, successMessage, missingMessage) {
  if (!value) {
    showToast(missingMessage);
    return;
  }

  try {
    await navigator.clipboard.writeText(value);
    showToast(successMessage);
  } catch (error) {
    console.error(error);
  }
}

function getActiveContent() {
  return state.config.content[state.activeLocale];
}

function getActiveLabels() {
  return state.config.labels[state.activeLocale];
}

function buildPreviewHref(path) {
  const url = new URL(path, window.location.href);
  url.searchParams.set("config", "browser");
  url.searchParams.set("lang", state.activeLocale);
  return url.toString();
}

function getGuestMessage() {
  const link = resolveGuestUrl(state.config, "");
  const name = state.config.property.name;
  const messages = {
    en: `Hi! Here is the guest book for ${name}: ${link}\nIt includes Wi-Fi, house rules and useful stay information.`,
    it: `Ciao! Ecco la guida ospiti di ${name}: ${link}\nTroverai Wi-Fi, regole della casa e informazioni utili per il soggiorno.`,
    fr: `Bonjour ! Voici le guide voyageurs de ${name} : ${link}\nVous y trouverez le Wi-Fi, les regles de la maison et les informations utiles.`,
    de: `Hallo! Hier ist das Gaestebuch fuer ${name}: ${link}\nDarin finden Sie Wi-Fi, Hausregeln und praktische Infos fuer den Aufenthalt.`,
    es: `Hola! Aqui tienes la guia de huespedes de ${name}: ${link}\nIncluye Wi-Fi, normas de la casa e informacion util para la estancia.`,
  };

  return messages[state.activeLocale] || messages.en;
}

function renderLanguageSwitch() {
  dom.languageSwitch.innerHTML = defaultLanguages
    .map((language) => {
      const active = language.code === state.activeLocale ? " is-active" : "";
      return `<button class="language-pill${active}" type="button" data-language="${language.code}">${language.short}</button>`;
    })
    .join("");
}

function renderCommonFields() {
  commonBindings.forEach((binding) => {
    binding.input.value = binding.read(state.config);
  });
}

function renderLocalizedFields() {
  const content = getActiveContent();
  const labels = getActiveLabels();
  localizedFieldBindings.forEach((binding) => {
    const source = binding.scope === "labels" ? labels : content;
    binding.input.value = binding.toValue(source[binding.key]);
  });
}

function renderShareOutputs() {
  const guestLink = resolveGuestUrl(state.config, "");
  const shareReady = Boolean(guestLink);
  dom.shareStatusPill.textContent = shareReady ? "Ready to share" : "Preview only";
  dom.shareStatusPill.classList.toggle("is-ready", shareReady);
  dom.shareStatusCopy.textContent = shareReady
    ? "This is the link to send to guests and use in the QR files."
    : "Add your live URL to create the final guest link.";
  dom.guestLinkOutput.textContent = guestLink || "Add your live URL";
  dom.guestMessageOutput.textContent = shareReady
    ? getGuestMessage()
    : "Add your live URL first, then copy a ready-to-send message for guests.";
}

function renderPreviewLinks() {
  dom.guidePreviewLink.href = buildPreviewHref("./index.html");
  dom.qrSignPreviewLink.href = buildPreviewHref("./printables/qr-sign.html");
  dom.wifiCardPreviewLink.href = buildPreviewHref("./printables/wifi-card.html");
  dom.welcomeSheetPreviewLink.href = buildPreviewHref("./printables/welcome-sheet.html");
  dom.pocketCardPreviewLink.href = buildPreviewHref("./printables/qr-pocket-card.html");
}

function renderJsonEditor() {
  dom.jsonEditor.value = JSON.stringify(state.config, null, 2);
}

function persistAndRender() {
  state.config = normalizeConfig(state.config);
  persistBrowserConfig(state.config);
  renderLanguageSwitch();
  renderShareOutputs();
  renderPreviewLinks();
  renderJsonEditor();
}

function bindCommonFields() {
  commonBindings.forEach((binding) => {
    binding.input.addEventListener("input", (event) => {
      binding.write(state.config, event.target.value);
      persistAndRender();
    });
  });
}

function bindLocalizedFields() {
  localizedFieldBindings.forEach((binding) => {
    binding.input.addEventListener("input", (event) => {
      const source = binding.scope === "labels" ? getActiveLabels() : getActiveContent();
      source[binding.key] = binding.fromValue(event.target.value);
      persistAndRender();
    });
  });
}

function bindActions() {
  dom.languageSwitch.addEventListener("click", (event) => {
    const target = event.target.closest("[data-language]");
    if (!(target instanceof HTMLElement)) {
      return;
    }

    state.activeLocale = target.dataset.language || "en";
    renderLanguageSwitch();
    renderLocalizedFields();
    renderShareOutputs();
    renderPreviewLinks();
  });

  dom.copyGuestLinkButton.addEventListener("click", () => {
    copyToClipboard(
      resolveGuestUrl(state.config, ""),
      "Guest link copied",
      "Add your live URL first",
    );
  });

  dom.copyGuestMessageButton.addEventListener("click", () => {
    const link = resolveGuestUrl(state.config, "");
    if (!link) {
      showToast("Add your live URL first");
      return;
    }

    copyToClipboard(getGuestMessage(), "Guest message copied", "Add your live URL first");
  });

  dom.downloadButton.addEventListener("click", () => {
    const payload = JSON.stringify(state.config, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "config.json";
    anchor.click();
    URL.revokeObjectURL(url);
  });

  dom.importInput.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const payload = await file.text();
      state.config = normalizeConfig(JSON.parse(payload));
      persistBrowserConfig(state.config);
      renderAll();
      showToast("Config imported");
    } catch (error) {
      console.error(error);
      showToast("Unable to import config");
    } finally {
      dom.importInput.value = "";
    }
  });
}

function renderAll() {
  renderCommonFields();
  renderLocalizedFields();
  renderLanguageSwitch();
  renderShareOutputs();
  renderPreviewLinks();
  renderJsonEditor();
}

async function init() {
  try {
    const stored = window.localStorage.getItem(browserConfigKey);
    if (stored) {
      state.config = normalizeConfig(JSON.parse(stored));
    } else {
      const { config } = await loadTemplateConfig({ defaultPath: "./config.json" });
      state.config = config;
      persistBrowserConfig(state.config);
    }

    state.activeLocale = state.config.languages[0]?.code || "en";
    renderAll();
    bindCommonFields();
    bindLocalizedFields();
    bindActions();
  } catch (error) {
    console.error(error);
    showToast("Unable to load config");
  }
}

init();
