import { renderIcon } from "./icons.js";
import {
  applyThemeVariables,
  defaultConfigPath,
  escapeHtml,
  getLocalizedContent,
  getLocalizedLabels,
  getLocaleList,
  getQueryConfig,
  getStoredColorMode,
  loadTemplateConfig,
  sectionCatalog,
  setStoredColorMode,
  ui,
} from "./template-utils.js";

const state = {
  config: null,
  source: "file",
  locale: "en",
  colorMode: getStoredColorMode(),
  openSectionKey: null,
};

const dom = {
  previewBanner: document.querySelector("#preview-banner"),
  previewBannerCopy: document.querySelector("#preview-banner-copy"),
  previewBannerLink: document.querySelector("#preview-banner-link"),
  brandSeal: document.querySelector("#brand-seal"),
  propertyBadge: document.querySelector("#property-badge"),
  propertyNameSmall: document.querySelector("#property-name-small"),
  localeSwitch: document.querySelector("#locale-switch"),
  themeToggle: document.querySelector("#theme-toggle"),
  heroKicker: document.querySelector("#hero-kicker"),
  heroTitle: document.querySelector("#hero-title"),
  heroSubtitle: document.querySelector("#hero-subtitle"),
  heroImageWrap: document.querySelector("#hero-image-wrap"),
  heroImage: document.querySelector("#hero-image"),
  heroFallback: document.querySelector("#hero-fallback"),
  fallbackSeal: document.querySelector("#fallback-seal"),
  heroFallbackCopy: document.querySelector("#hero-fallback-copy"),
  sectionIntroKicker: document.querySelector("#section-intro-kicker"),
  sectionGrid: document.querySelector("#section-grid"),
  hostLabel: document.querySelector("#host-label"),
  hostNameLarge: document.querySelector("#host-name-large"),
  hostContactNote: document.querySelector("#host-contact-note"),
  hostActions: document.querySelector("#host-actions"),
  modal: document.querySelector("#section-modal"),
  modalBackdrop: document.querySelector("#modal-backdrop"),
  modalClose: document.querySelector("#modal-close"),
  modalKicker: document.querySelector("#modal-kicker"),
  modalTitle: document.querySelector("#modal-title"),
  modalList: document.querySelector("#modal-list"),
};

function getLocale() {
  return state.locale;
}

function getSectionCopy(sectionKey) {
  return getLocalizedContent(state.config, state.locale)[sectionKey] ?? [];
}

function localeLabel(sectionKey) {
  const labels = getLocalizedLabels(state.config, state.locale);
  return labels?.[sectionKey] || ui(getLocale(), sectionKey, sectionKey);
}

function getHeroFallbackCopy() {
  return ui(getLocale(), "heroFallback");
}

function setDocumentMeta() {
  const propertyName = state.config.property.name;
  document.documentElement.lang = state.locale;
  document.title = `${propertyName} - ${ui(getLocale(), "guestBook")}`;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", state.config.meta.description);
  }
}

function renderThemeToggle() {
  dom.themeToggle.innerHTML = renderIcon(state.colorMode === "dark" ? "sun" : "moon");
}

function renderLocaleSwitch() {
  dom.localeSwitch.innerHTML = getLocaleList(state.config)
    .map((locale) => {
      const active = locale.code === state.locale ? " is-active" : "";
      return `
        <button class="locale-pill${active}" type="button" data-locale="${escapeHtml(locale.code)}">
          ${escapeHtml(locale.short)}
        </button>
      `;
    })
    .join("");
}

function renderPreviewBanner() {
  if (state.source !== "browser") {
    dom.previewBanner.hidden = true;
    return;
  }

  dom.previewBanner.hidden = false;
  dom.previewBannerCopy.textContent = ui(getLocale(), "previewBanner");
  dom.previewBannerLink.textContent = ui(getLocale(), "backToEditor");
  dom.previewBannerLink.href = "./customize.html";
}

function renderHero() {
  const localeContent = getLocalizedContent(state.config, state.locale);
  const labels = getLocalizedLabels(state.config, state.locale);
  const { property } = state.config;
  dom.brandSeal.textContent = property.name
    .split(" ")
    .slice(0, 2)
    .map((chunk) => chunk[0] || "")
    .join("")
    .toUpperCase()
    .slice(0, 2);
  dom.fallbackSeal.textContent = dom.brandSeal.textContent;
  dom.propertyBadge.textContent = property.badge || ui(getLocale(), "guestBook");
  dom.propertyNameSmall.textContent = property.name;
  dom.heroKicker.textContent = labels.heroKicker || ui(getLocale(), "welcomeBadge");
  dom.heroTitle.textContent = property.name;
  dom.heroSubtitle.textContent = localeContent.intro;
  dom.heroFallbackCopy.textContent = getHeroFallbackCopy();
  dom.sectionIntroKicker.textContent = labels.essentialsKicker || "Guest essentials";

  if (property.heroImage) {
    dom.heroImageWrap.hidden = false;
    dom.heroImage.src = property.heroImage;
    dom.heroImage.alt = property.heroImageAlt?.[state.locale] || property.heroImageAlt?.en || property.name;
    dom.heroFallback.hidden = true;
  } else {
    dom.heroImageWrap.hidden = true;
    dom.heroImage.removeAttribute("src");
    dom.heroFallback.hidden = false;
  }
}

function renderSectionGrid() {
  dom.sectionGrid.innerHTML = sectionCatalog
    .map((section) => {
      const items = getSectionCopy(section.key);
      return `
        <button class="section-orb" type="button" data-open-section="${escapeHtml(section.key)}" aria-label="${escapeHtml(localeLabel(section.key))}">
          <span class="section-orb-glow section-orb-glow-${escapeHtml(section.key)}"></span>
          <span class="section-orb-icon section-orb-icon-${escapeHtml(section.key)}">${renderIcon(section.icon)}</span>
          <span class="section-orb-title">${escapeHtml(localeLabel(section.key))}</span>
          <span class="section-orb-meta">
            <span class="section-count">${items.length}</span>
            <span class="section-count-label">${escapeHtml(ui(getLocale(), "notesCount"))}</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderHostSection() {
  const localeContent = getLocalizedContent(state.config, state.locale);
  const labels = getLocalizedLabels(state.config, state.locale);
  dom.hostLabel.textContent = labels.hostKicker || ui(getLocale(), "hostedBy");
  dom.hostNameLarge.textContent = state.config.host.name;
  dom.hostContactNote.textContent = localeContent.contactNote;

  const actions = [];
  if (state.config.host.phone) {
    actions.push(`
      <a class="primary-button" href="tel:${escapeHtml(state.config.host.phone)}">
        ${renderIcon("contact")}
        <span>${escapeHtml(ui(getLocale(), "callHost"))}</span>
      </a>
    `);
  }
  if (state.config.host.whatsapp) {
    actions.push(`
      <a class="secondary-button" href="${escapeHtml(state.config.host.whatsapp)}" target="_blank" rel="noreferrer">
        ${renderIcon("contact")}
        <span>${escapeHtml(ui(getLocale(), "whatsappHost"))}</span>
      </a>
    `);
  }
  if (state.config.host.email) {
    actions.push(`
      <a class="secondary-button" href="mailto:${escapeHtml(state.config.host.email)}">
        ${renderIcon("contact")}
        <span>${escapeHtml(ui(getLocale(), "emailHost"))}</span>
      </a>
    `);
  }
  dom.hostActions.innerHTML = actions.join("");
}

function openSection(sectionKey) {
  const section = sectionCatalog.find((item) => item.key === sectionKey);
  if (!section) {
    return;
  }

  state.openSectionKey = sectionKey;
  dom.modalKicker.textContent = ui(getLocale(), "guestBook");
  dom.modalTitle.textContent = localeLabel(sectionKey);
  dom.modalList.innerHTML = getSectionCopy(sectionKey)
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  dom.modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  state.openSectionKey = null;
  dom.modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function renderAll() {
  applyThemeVariables(document.documentElement, state.colorMode, state.config.themePreset);
  setDocumentMeta();
  renderThemeToggle();
  renderLocaleSwitch();
  renderPreviewBanner();
  renderHero();
  renderSectionGrid();
  renderHostSection();
}

function wireEvents() {
  dom.localeSwitch.addEventListener("click", (event) => {
    const target = event.target.closest("[data-locale]");
    if (!(target instanceof HTMLElement)) {
      return;
    }

    state.locale = target.dataset.locale || "en";
    renderAll();
  });

  dom.themeToggle.addEventListener("click", () => {
    state.colorMode = state.colorMode === "dark" ? "light" : "dark";
    setStoredColorMode(state.colorMode);
    renderAll();
  });

  dom.sectionGrid.addEventListener("click", (event) => {
    const target = event.target.closest("[data-open-section]");
    if (!(target instanceof HTMLElement)) {
      return;
    }

    openSection(target.dataset.openSection || "");
  });

  dom.modalClose.addEventListener("click", closeModal);
  dom.modalBackdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !dom.modal.hidden) {
      closeModal();
    }
  });
}

async function init() {
  try {
    const query = getQueryConfig();
    const { config, source } = await loadTemplateConfig({ query, defaultPath: defaultConfigPath });
    state.config = config;
    state.source = source;
    const validLocale = getLocaleList(config).some((item) => item.code === query.lang) ? query.lang : config.languages[0]?.code || "en";
    state.locale = validLocale;
    renderAll();
    wireEvents();
  } catch (error) {
    console.error(error);
    document.body.innerHTML = `
      <main class="error-state">
        <h1>Unable to load the guest book</h1>
        <p>Start a local static server and open this project through <code>http://localhost:4173</code>.</p>
      </main>
    `;
  }
}

init();
