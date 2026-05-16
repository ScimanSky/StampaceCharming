import {
  PRESET_PATHS,
  browserConfigKey,
  cloneConfig,
  escapeHtml,
  normalizeConfig,
  resolveGuestUrl,
  resolveQrDestinationUrl,
  t,
} from "./template-utils.js";

const state = {
  config: null,
  activePreset: "boutique",
};

const dom = {
  presetSelect: document.querySelector("#preset-select"),
  themeSelect: document.querySelector("#theme-select"),
  heroModeSelect: document.querySelector("#hero-mode-select"),
  brandNameInput: document.querySelector("#brand-name-input"),
  brandCrestInput: document.querySelector("#brand-crest-input"),
  brandAddressInput: document.querySelector("#brand-address-input"),
  brandEmailInput: document.querySelector("#brand-email-input"),
  brandLicenseInput: document.querySelector("#brand-license-input"),
  hostNameInput: document.querySelector("#host-name-input"),
  hostPhoneInput: document.querySelector("#host-phone-input"),
  hostEmailInput: document.querySelector("#host-email-input"),
  hostWhatsappInput: document.querySelector("#host-whatsapp-input"),
  wifiNetworkInput: document.querySelector("#wifi-network-input"),
  wifiPasswordInput: document.querySelector("#wifi-password-input"),
  headlineEnInput: document.querySelector("#headline-en-input"),
  headlineItInput: document.querySelector("#headline-it-input"),
  headlineFrInput: document.querySelector("#headline-fr-input"),
  cityMapInput: document.querySelector("#city-map-input"),
  arrivalRouteInput: document.querySelector("#arrival-route-input"),
  guidePdfInput: document.querySelector("#guide-pdf-input"),
  excursionsInput: document.querySelector("#excursions-input"),
  publicUrlInput: document.querySelector("#public-url-input"),
  qrDestinationInput: document.querySelector("#qr-destination-input"),
  qrTitleEnInput: document.querySelector("#qr-title-en-input"),
  qrTitleItInput: document.querySelector("#qr-title-it-input"),
  qrTitleFrInput: document.querySelector("#qr-title-fr-input"),
  qrSubtitleEnInput: document.querySelector("#qr-subtitle-en-input"),
  wifiCardTitleEnInput: document.querySelector("#wifi-card-title-en-input"),
  welcomeSheetTitleEnInput: document.querySelector("#welcome-sheet-title-en-input"),
  heroImageInput: document.querySelector("#hero-image-input"),
  heroAltEnInput: document.querySelector("#hero-alt-en-input"),
  heroAltItInput: document.querySelector("#hero-alt-it-input"),
  heroAltFrInput: document.querySelector("#hero-alt-fr-input"),
  gallery1SrcInput: document.querySelector("#gallery-1-src-input"),
  gallery1AltEnInput: document.querySelector("#gallery-1-alt-en-input"),
  gallery1AltItInput: document.querySelector("#gallery-1-alt-it-input"),
  gallery2SrcInput: document.querySelector("#gallery-2-src-input"),
  gallery2AltEnInput: document.querySelector("#gallery-2-alt-en-input"),
  gallery2AltItInput: document.querySelector("#gallery-2-alt-it-input"),
  gallery3SrcInput: document.querySelector("#gallery-3-src-input"),
  gallery3AltEnInput: document.querySelector("#gallery-3-alt-en-input"),
  gallery3AltItInput: document.querySelector("#gallery-3-alt-it-input"),
  jsonEditor: document.querySelector("#json-editor"),
  hostPreviewButton: document.querySelector("#host-preview-button"),
  guestPreviewButton: document.querySelector("#guest-preview-button"),
  copyShareLinkButton: document.querySelector("#copy-share-link-button"),
  copyGuestLinkButton: document.querySelector("#copy-guest-link-button"),
  downloadButton: document.querySelector("#download-button"),
  importInput: document.querySelector("#import-input"),
  guidePreviewLink: document.querySelector("#guide-preview-link"),
  qrSignPreviewLink: document.querySelector("#qr-sign-preview-link"),
  wifiCardPreviewLink: document.querySelector("#wifi-card-preview-link"),
  welcomeSheetPreviewLink: document.querySelector("#welcome-sheet-preview-link"),
  pocketCardPreviewLink: document.querySelector("#pocket-card-preview-link"),
  toast: document.querySelector("#toast"),
};

const fieldBindings = [
  {
    input: dom.brandNameInput,
    read: (config) => config.brand.name,
    write: (config, value) => {
      config.brand.name = value;
      config.meta.title = value;
    },
  },
  {
    input: dom.brandCrestInput,
    read: (config) => config.brand.crest,
    write: (config, value) => {
      config.brand.crest = value.toUpperCase();
    },
  },
  {
    input: dom.brandAddressInput,
    read: (config) => config.brand.address,
    write: (config, value) => {
      config.brand.address = value;
    },
  },
  {
    input: dom.brandEmailInput,
    read: (config) => config.brand.email,
    write: (config, value) => {
      config.brand.email = value;
    },
  },
  {
    input: dom.brandLicenseInput,
    read: (config) => config.brand.license,
    write: (config, value) => {
      config.brand.license = value;
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
    },
  },
  {
    input: dom.wifiPasswordInput,
    read: (config) => config.wifi.password,
    write: (config, value) => {
      config.wifi.password = value;
    },
  },
  {
    input: dom.headlineEnInput,
    read: (config) => config.brand.headline.en,
    write: (config, value) => {
      config.brand.headline.en = value;
    },
  },
  {
    input: dom.headlineItInput,
    read: (config) => config.brand.headline.it,
    write: (config, value) => {
      config.brand.headline.it = value;
    },
  },
  {
    input: dom.headlineFrInput,
    read: (config) => config.brand.headline.fr,
    write: (config, value) => {
      config.brand.headline.fr = value;
    },
  },
  {
    input: dom.cityMapInput,
    read: (config) => config.links.cityMap,
    write: (config, value) => {
      config.links.cityMap = value;
    },
  },
  {
    input: dom.arrivalRouteInput,
    read: (config) => config.links.arrivalRoute,
    write: (config, value) => {
      config.links.arrivalRoute = value;
    },
  },
  {
    input: dom.guidePdfInput,
    read: (config) => config.links.guidePdf,
    write: (config, value) => {
      config.links.guidePdf = value;
    },
  },
  {
    input: dom.excursionsInput,
    read: (config) => config.links.excursions,
    write: (config, value) => {
      config.links.excursions = value;
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
    input: dom.qrDestinationInput,
    read: (config) => config.share.qrDestinationUrl,
    write: (config, value) => {
      config.share.qrDestinationUrl = value;
    },
  },
  {
    input: dom.qrTitleEnInput,
    read: (config) => config.printables.qrSign.title.en,
    write: (config, value) => {
      config.printables.qrSign.title.en = value;
    },
  },
  {
    input: dom.qrTitleItInput,
    read: (config) => config.printables.qrSign.title.it,
    write: (config, value) => {
      config.printables.qrSign.title.it = value;
    },
  },
  {
    input: dom.qrTitleFrInput,
    read: (config) => config.printables.qrSign.title.fr,
    write: (config, value) => {
      config.printables.qrSign.title.fr = value;
    },
  },
  {
    input: dom.qrSubtitleEnInput,
    read: (config) => config.printables.qrSign.subtitle.en,
    write: (config, value) => {
      config.printables.qrSign.subtitle.en = value;
    },
  },
  {
    input: dom.wifiCardTitleEnInput,
    read: (config) => config.printables.wifiCard.title.en,
    write: (config, value) => {
      config.printables.wifiCard.title.en = value;
    },
  },
  {
    input: dom.welcomeSheetTitleEnInput,
    read: (config) => config.printables.welcomeSheet.title.en,
    write: (config, value) => {
      config.printables.welcomeSheet.title.en = value;
    },
  },
  {
    input: dom.heroImageInput,
    read: (config) => config.media?.heroImage?.src ?? "",
    write: (config, value) => {
      config.media ??= {};
      config.media.heroImage ??= { src: "", alt: { en: "", it: "", fr: "" } };
      config.media.heroImage.src = value;
    },
  },
  {
    input: dom.heroAltEnInput,
    read: (config) => config.media?.heroImage?.alt?.en ?? "",
    write: (config, value) => {
      config.media ??= {};
      config.media.heroImage ??= { src: "", alt: { en: "", it: "", fr: "" } };
      config.media.heroImage.alt ??= {};
      config.media.heroImage.alt.en = value;
    },
  },
  {
    input: dom.heroAltItInput,
    read: (config) => config.media?.heroImage?.alt?.it ?? "",
    write: (config, value) => {
      config.media ??= {};
      config.media.heroImage ??= { src: "", alt: { en: "", it: "", fr: "" } };
      config.media.heroImage.alt ??= {};
      config.media.heroImage.alt.it = value;
    },
  },
  {
    input: dom.heroAltFrInput,
    read: (config) => config.media?.heroImage?.alt?.fr ?? "",
    write: (config, value) => {
      config.media ??= {};
      config.media.heroImage ??= { src: "", alt: { en: "", it: "", fr: "" } };
      config.media.heroImage.alt ??= {};
      config.media.heroImage.alt.fr = value;
    },
  },
  {
    input: dom.gallery1SrcInput,
    read: (config) => config.media?.gallery?.[0]?.src ?? "",
    write: (config, value) => {
      ensureGallerySlot(config, 0);
      config.media.gallery[0].src = value;
    },
  },
  {
    input: dom.gallery1AltEnInput,
    read: (config) => config.media?.gallery?.[0]?.alt?.en ?? "",
    write: (config, value) => {
      ensureGallerySlot(config, 0);
      config.media.gallery[0].alt.en = value;
    },
  },
  {
    input: dom.gallery1AltItInput,
    read: (config) => config.media?.gallery?.[0]?.alt?.it ?? "",
    write: (config, value) => {
      ensureGallerySlot(config, 0);
      config.media.gallery[0].alt.it = value;
    },
  },
  {
    input: dom.gallery2SrcInput,
    read: (config) => config.media?.gallery?.[1]?.src ?? "",
    write: (config, value) => {
      ensureGallerySlot(config, 1);
      config.media.gallery[1].src = value;
    },
  },
  {
    input: dom.gallery2AltEnInput,
    read: (config) => config.media?.gallery?.[1]?.alt?.en ?? "",
    write: (config, value) => {
      ensureGallerySlot(config, 1);
      config.media.gallery[1].alt.en = value;
    },
  },
  {
    input: dom.gallery2AltItInput,
    read: (config) => config.media?.gallery?.[1]?.alt?.it ?? "",
    write: (config, value) => {
      ensureGallerySlot(config, 1);
      config.media.gallery[1].alt.it = value;
    },
  },
  {
    input: dom.gallery3SrcInput,
    read: (config) => config.media?.gallery?.[2]?.src ?? "",
    write: (config, value) => {
      ensureGallerySlot(config, 2);
      config.media.gallery[2].src = value;
    },
  },
  {
    input: dom.gallery3AltEnInput,
    read: (config) => config.media?.gallery?.[2]?.alt?.en ?? "",
    write: (config, value) => {
      ensureGallerySlot(config, 2);
      config.media.gallery[2].alt.en = value;
    },
  },
  {
    input: dom.gallery3AltItInput,
    read: (config) => config.media?.gallery?.[2]?.alt?.it ?? "",
    write: (config, value) => {
      ensureGallerySlot(config, 2);
      config.media.gallery[2].alt.it = value;
    },
  },
];

function ensureGallerySlot(config, index) {
  config.media ??= {};
  if (!Array.isArray(config.media.gallery)) {
    config.media.gallery = [];
  }

  while (config.media.gallery.length <= index) {
    config.media.gallery.push({
      src: "",
      alt: { en: "", it: "", fr: "" },
    });
  }

  config.media.gallery[index].alt ??= { en: "", it: "", fr: "" };
}

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    dom.toast.classList.remove("is-visible");
  }, 1800);
}

function previewUrl(path) {
  return `${path}?config=browser`;
}

function renderPreviewLinks() {
  dom.guidePreviewLink.href = previewUrl("./index.html");
  dom.qrSignPreviewLink.href = previewUrl("./printables/qr-sign.html");
  dom.wifiCardPreviewLink.href = previewUrl("./printables/wifi-card.html");
  dom.welcomeSheetPreviewLink.href = previewUrl("./printables/welcome-sheet.html");
  dom.pocketCardPreviewLink.href = previewUrl("./printables/qr-pocket-card.html");
}

function renderPresetOptions() {
  dom.presetSelect.innerHTML = [
    ["boutique", "Boutique stay"],
    ["urban", "Urban loft"],
    ["coastal", "Coastal retreat"],
    ["blank", "Blank template"],
  ]
    .map(
      ([value, label]) =>
        `<option value="${value}" ${value === state.activePreset ? "selected" : ""}>${escapeHtml(label)}</option>`,
    )
    .join("");
}

function renderForm() {
  renderPresetOptions();
  dom.themeSelect.value = state.config.themePreset;
  dom.heroModeSelect.value = state.config.layout?.heroMode ?? "full";

  fieldBindings.forEach((binding) => {
    binding.input.value = binding.read(state.config) ?? "";
  });

  renderPreviewLinks();
}

function renderJson() {
  dom.jsonEditor.classList.remove("is-invalid");
  dom.jsonEditor.value = JSON.stringify(state.config, null, 2);
}

function normalizeAndRefresh() {
  normalizeConfig(state.config);
  renderPreviewLinks();
}

function applyFormChanges() {
  fieldBindings.forEach((binding) => {
    binding.write(state.config, binding.input.value.trim());
  });

  state.config.themePreset = dom.themeSelect.value;
  state.config.layout.heroMode = dom.heroModeSelect.value;
  normalizeAndRefresh();
  renderJson();
}

async function loadPreset(presetKey) {
  const response = await fetch(PRESET_PATHS[presetKey]);
  if (!response.ok) {
    throw new Error(`Unable to load preset ${presetKey}`);
  }

  const config = await response.json();
  state.activePreset = presetKey;
  state.config = normalizeConfig(cloneConfig(config));
  renderForm();
  renderJson();
}

function savePreviewConfig() {
  window.localStorage.setItem(browserConfigKey, JSON.stringify(state.config));
}

function downloadConfig() {
  const blob = new Blob([JSON.stringify(state.config, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "config.json";
  anchor.click();
  URL.revokeObjectURL(url);
}

function parseJsonEditor() {
  try {
    const parsed = JSON.parse(dom.jsonEditor.value);
    state.config = normalizeConfig(parsed);
    renderForm();
    dom.jsonEditor.classList.remove("is-invalid");
    return true;
  } catch {
    dom.jsonEditor.classList.add("is-invalid");
    return false;
  }
}

function getShareUrl() {
  return resolveQrDestinationUrl(state.config);
}

function getGuestUrl() {
  return resolveGuestUrl(state.config);
}

async function copyShareLink() {
  const shareUrl = getShareUrl();

  try {
    await navigator.clipboard.writeText(shareUrl);
    showToast("Share link copied");
  } catch {
    showToast(shareUrl);
  }
}

async function copyGuestLink() {
  const guestUrl = getGuestUrl();

  try {
    await navigator.clipboard.writeText(guestUrl);
    showToast("Guest link copied");
  } catch {
    showToast(guestUrl);
  }
}

dom.presetSelect.addEventListener("change", () => {
  loadPreset(dom.presetSelect.value).catch((error) => {
    console.error(error);
    showToast("Unable to load preset");
  });
});

dom.themeSelect.addEventListener("change", applyFormChanges);
dom.heroModeSelect.addEventListener("change", applyFormChanges);

fieldBindings.forEach((binding) => {
  binding.input.addEventListener("input", applyFormChanges);
});

dom.hostPreviewButton.addEventListener("click", () => {
  if (!parseJsonEditor()) {
    showToast("Fix the JSON before previewing");
    return;
  }

  savePreviewConfig();
  window.open(previewUrl("./index.html"), "_blank", "noreferrer");
});

dom.guestPreviewButton.addEventListener("click", () => {
  if (!parseJsonEditor()) {
    showToast("Fix the JSON before previewing");
    return;
  }

  savePreviewConfig();
  window.open(`${previewUrl("./index.html")}&view=guest`, "_blank", "noreferrer");
});

dom.copyShareLinkButton.addEventListener("click", () => {
  if (!parseJsonEditor()) {
    showToast("Fix the JSON before copying");
    return;
  }

  copyShareLink();
});

dom.copyGuestLinkButton.addEventListener("click", () => {
  if (!parseJsonEditor()) {
    showToast("Fix the JSON before copying");
    return;
  }

  copyGuestLink();
});

dom.downloadButton.addEventListener("click", () => {
  if (!parseJsonEditor()) {
    showToast("Fix the JSON before downloading");
    return;
  }

  downloadConfig();
  showToast("config.json downloaded");
});

dom.jsonEditor.addEventListener("input", () => {
  window.clearTimeout(dom.jsonEditor.timeoutId);
  dom.jsonEditor.timeoutId = window.setTimeout(() => {
    parseJsonEditor();
  }, 240);
});

dom.importInput.addEventListener("change", async () => {
  const file = dom.importInput.files?.[0];
  if (!file) {
    return;
  }

  const text = await file.text();

  try {
    state.config = normalizeConfig(JSON.parse(text));
    renderForm();
    renderJson();
    showToast("Config imported");
  } catch {
    showToast("Invalid JSON file");
  }

  dom.importInput.value = "";
});

loadPreset(state.activePreset).catch((error) => {
  console.error(error);
  document.body.innerHTML = `
    <main style="padding: 32px; font-family: 'Hanken Grotesk', sans-serif; color: #231b17;">
      <h1 style="font-family: 'Fraunces', serif;">Unable to load the customizer</h1>
      <p>Start a local server such as <code>python3 -m http.server 4173</code> and open the project via <code>http://localhost:4173/customize.html</code>.</p>
    </main>
  `;
});
