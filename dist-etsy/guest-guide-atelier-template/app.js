import {
  applyThemeVariables,
  browserConfigKey,
  escapeHtml,
  getLocaleList,
  getQueryConfig,
  getStoredColorMode,
  loadTemplateConfig,
  modeStorageKey,
  t,
} from "./template-utils.js";
import { renderIcon } from "./icons.js";

const state = {
  config: null,
  locale: "en",
  colorMode: getStoredColorMode(),
  activeMapFilter: "all",
  openServiceId: null,
  hostSheetOpen: false,
  source: "preset",
  isGuestMode: false,
};

const dom = {
  hero: document.querySelector(".hero"),
  brandSeal: document.querySelector("#brand-seal"),
  brandName: document.querySelector("#brand-name"),
  customizerLink: document.querySelector("#customizer-link"),
  hostButton: document.querySelector("#host-button"),
  localeSwitch: document.querySelector("#locale-switch"),
  themeToggle: document.querySelector("#theme-toggle"),
  heroKicker: document.querySelector("#hero-kicker"),
  heroTitle: document.querySelector("#hero-title"),
  heroSubtitle: document.querySelector("#hero-subtitle"),
  heroAddress: document.querySelector("#hero-address"),
  heroEmail: document.querySelector("#hero-email"),
  heroLicense: document.querySelector("#hero-license"),
  heroWelcome: document.querySelector("#hero-welcome"),
  statsGrid: document.querySelector("#stats-grid"),
  heroImageWrap: document.querySelector("#hero-image-wrap"),
  heroImageEl: document.querySelector("#hero-image"),
  galleryStrip: document.querySelector("#gallery-strip"),
  galleryGrid: document.querySelector("#gallery-grid"),
  previewBanner: document.querySelector("#preview-banner"),
  quickDock: document.querySelector("#quick-dock"),
  servicesKicker: document.querySelector("#services-kicker"),
  servicesTitle: document.querySelector("#services-title"),
  servicesCopy: document.querySelector("#services-copy"),
  servicesGrid: document.querySelector("#services-grid"),
  areaTitle: document.querySelector("#area-title"),
  areaCopy: document.querySelector("#area-copy"),
  areaMap: document.querySelector("#area-map"),
  mapFilters: document.querySelector("#map-filters"),
  mapPoints: document.querySelector("#map-points"),
  storyKicker: document.querySelector("#story-kicker"),
  storyTitle: document.querySelector("#story-title"),
  storyBody: document.querySelector("#story-body"),
  notesKicker: document.querySelector("#notes-kicker"),
  notesList: document.querySelector("#notes-list"),
  contactTitle: document.querySelector("#contact-title"),
  contactCopy: document.querySelector("#contact-copy"),
  contactsGrid: document.querySelector("#contacts-grid"),
  footerBrand: document.querySelector("#footer-brand"),
  footerNote: document.querySelector("#footer-note"),
  hostSheet: document.querySelector("#host-sheet"),
  hostSheetBackdrop: document.querySelector("#host-sheet-backdrop"),
  hostSheetClose: document.querySelector("#host-sheet-close"),
  hostSheetKicker: document.querySelector("#host-sheet-kicker"),
  hostSheetName: document.querySelector("#host-sheet-name"),
  hostSheetCopy: document.querySelector("#host-sheet-copy"),
  hostSheetActions: document.querySelector("#host-sheet-actions"),
  sheetSeal: document.querySelector("#sheet-seal"),
  modal: document.querySelector("#modal"),
  modalBackdrop: document.querySelector("#modal-backdrop"),
  modalClose: document.querySelector("#modal-close"),
  modalKicker: document.querySelector("#modal-kicker"),
  modalTitle: document.querySelector("#modal-title"),
  modalCopy: document.querySelector("#modal-copy"),
  modalSections: document.querySelector("#modal-sections"),
  toast: document.querySelector("#toast"),
};

function setDocumentMeta() {
  document.documentElement.lang = state.locale;
  document.title = state.config.meta?.title ?? state.config.brand?.name ?? "Guest Guide Atelier";

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", state.config.meta?.description ?? "");
  }
}

function getCopy(value, fallback = "") {
  return t(value, state.locale, fallback);
}

function getInitialLocale() {
  const query = getQueryConfig();
  const localeList = getLocaleList(state.config);
  const requested = query.lang;

  if (requested && localeList.some((locale) => locale.code === requested)) {
    return requested;
  }

  return localeList[0]?.code ?? "en";
}

function renderLocaleSwitch() {
  dom.localeSwitch.innerHTML = getLocaleList(state.config)
    .map((locale) => {
      const activeClass = locale.code === state.locale ? "is-active" : "";
      return `
        <button class="locale-pill ${activeClass}" type="button" data-locale="${escapeHtml(locale.code)}">
          <span>${escapeHtml(locale.short ?? locale.code.toUpperCase())}</span>
        </button>
      `;
    })
    .join("");
}

function renderPreviewBanner() {
  if (state.source !== "browser" || state.isGuestMode) {
    dom.previewBanner.hidden = true;
    dom.previewBanner.textContent = "";
    return;
  }

  dom.previewBanner.hidden = false;
  dom.previewBanner.textContent = getCopy(
    state.config.ui?.previewBanner,
    "Previewing your browser config. Export the file when you are ready to publish.",
  );
}

function renderHero() {
  const { brand, stats } = state.config;
  const heroMode = state.config.layout?.heroMode ?? "full";
  const density = state.config.layout?.density ?? "balanced";
  const serviceCardStyle = state.config.layout?.serviceCardStyle ?? "layered";
  const quickActionsStyle = state.config.layout?.quickActionsStyle ?? "pill";
  document.body.dataset.heroMode = heroMode;
  document.body.dataset.density = density;
  document.body.dataset.serviceCardStyle = serviceCardStyle;
  document.body.dataset.quickActionsStyle = quickActionsStyle;
  document.body.dataset.presetKey = state.config.presetMeta?.key ?? "blank";
  dom.hero.dataset.heroMode = heroMode;
  dom.brandSeal.textContent = brand.crest;
  dom.sheetSeal.textContent = brand.crest;
  dom.brandName.textContent = brand.name;
  dom.footerBrand.textContent = brand.name;
  dom.heroKicker.textContent = getCopy(brand.eyebrow);
  dom.heroTitle.textContent = getCopy(brand.headline);
  dom.heroSubtitle.textContent = getCopy(brand.subtitle);
  dom.heroAddress.textContent = brand.address;
  dom.heroEmail.textContent = brand.email;
  dom.heroLicense.textContent = brand.license;
  dom.heroWelcome.textContent = getCopy(brand.welcome);
  dom.footerNote.textContent = getCopy(brand.footerNote);
  dom.statsGrid.innerHTML = stats
    .map(
      (item) => `
        <article class="stat-tile">
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(getCopy(item.label))}</span>
        </article>
      `,
    )
    .join("");
}

function renderHeroImage() {
  const heroImg = state.config.media?.heroImage;
  const src = heroImg?.src?.trim();
  if (!src) {
    dom.heroImageWrap.hidden = true;
    return;
  }
  dom.heroImageEl.src = src;
  dom.heroImageEl.alt = getCopy(heroImg.alt, state.config.brand?.name ?? "Property photo");
  dom.heroImageWrap.hidden = false;
}

function renderGallery() {
  const gallery = (state.config.media?.gallery ?? []).filter((item) => item.src?.trim());
  if (gallery.length === 0) {
    dom.galleryStrip.hidden = true;
    dom.galleryGrid.innerHTML = "";
    return;
  }
  dom.galleryStrip.hidden = false;
  dom.galleryGrid.innerHTML = gallery
    .map(
      (item, index) => `
        <figure class="gallery-item gallery-item-${index + 1}">
          <img src="${escapeHtml(item.src)}" alt="${escapeHtml(getCopy(item.alt, 'Property photo'))}" loading="lazy" />
        </figure>
      `,
    )
    .join("");
}

function renderTopbar() {
  const isGuest = state.isGuestMode;

  // Host-only elements: hide in guest mode
  dom.customizerLink.hidden = isGuest;
  dom.hostButton.hidden = false;

  dom.hostButton.innerHTML = renderIcon('user') + " " + escapeHtml(getCopy(state.config.ui?.contactHosts, "Host"));
  dom.themeToggle.innerHTML =
    state.colorMode === "dark"
      ? renderIcon('sun') + " " + escapeHtml(getCopy(state.config.ui?.themeLight, "Light"))
      : renderIcon('moon') + " " + escapeHtml(getCopy(state.config.ui?.themeDark, "Night"));
  dom.customizerLink.innerHTML = renderIcon('settings') + " " + escapeHtml(getCopy(state.config.ui?.openCustomizer, "Customizer"));
}

function getInitialViewMode(source) {
  const query = getQueryConfig();

  if (query.view === "guest") {
    return true;
  }

  if (query.view === "host") {
    return false;
  }

  return source !== "browser";
}

function getActionMarkup(action, classes = "ghost-link") {
  const label = escapeHtml(getCopy(action.label));

  if (action.type === "modal") {
    return `<button class="${classes}" type="button" data-open-service="${escapeHtml(action.serviceId)}">${label}</button>`;
  }

  if (action.type === "copy-wifi") {
    return `<button class="${classes}" type="button" data-copy-wifi="true">${label}</button>`;
  }

  if (action.type === "connect-wifi") {
    return `<button class="${classes}" type="button" data-connect-wifi="true">${label}</button>`;
  }

  if (action.type === "host-sheet") {
    return `<button class="${classes}" type="button" data-open-host="true">${label}</button>`;
  }

  if (action.type === "call") {
    return `<a class="${classes}" href="tel:${escapeHtml(action.phone)}">${label}</a>`;
  }

  if (action.type === "email") {
    return `<a class="${classes}" href="mailto:${escapeHtml(action.email)}">${label}</a>`;
  }

  return `<a class="${classes}" href="${escapeHtml(action.href)}" target="_blank" rel="noreferrer">${label}</a>`;
}

function renderQuickDock() {
  dom.quickDock.innerHTML = state.config.quickActions
    .map(
      (action) => `
        <button class="dock-button" type="button" data-action='${escapeHtml(JSON.stringify(action))}'>
          <span class="dock-emoji">${renderIcon(action.icon)}</span>
          <span>${escapeHtml(getCopy(action.label))}</span>
        </button>
      `,
    )
    .join("");
}

function renderServices() {
  dom.servicesKicker.textContent = getCopy(state.config.sections.services.kicker);
  dom.servicesTitle.textContent = getCopy(state.config.sections.services.title);
  dom.servicesCopy.textContent = getCopy(state.config.sections.services.copy);

  dom.servicesGrid.innerHTML = state.config.services
    .map((service) => {
      const actions = Array.isArray(service.cardActions) ? service.cardActions : [];
      const actionMarkup =
        actions.length > 0
          ? actions.map((action, index) => getActionMarkup(action, index === 0 ? "primary-link" : "ghost-link")).join("")
          : getActionMarkup(
              { type: "modal", serviceId: service.id, label: state.config.ui?.openCard },
              "primary-link",
            );

      return `
        <article class="service-card service-tone-${escapeHtml(service.tone ?? "sand")} service-priority-${escapeHtml(service.priority ?? "medium")}">
          <div class="service-card-top">
            <span class="service-icon">${renderIcon(service.icon)}</span>
            <span class="service-chip">${escapeHtml(getCopy(service.chip))}</span>
          </div>
          <div class="service-card-copy">
            <h3>${escapeHtml(getCopy(service.title))}</h3>
            <p>${escapeHtml(getCopy(service.description))}</p>
          </div>
          <div class="service-card-actions">${actionMarkup}</div>
        </article>
      `;
    })
    .join("");
}

function renderArea() {
  dom.areaTitle.textContent = getCopy(state.config.sections.area.title);
  dom.areaCopy.textContent = getCopy(state.config.sections.area.copy);
  dom.areaMap.src = state.config.area.mapEmbed;

  dom.mapFilters.innerHTML = state.config.area.filters
    .map((filter) => {
      const activeClass = filter.id === state.activeMapFilter ? "is-active" : "";
      return `
        <button class="filter-pill ${activeClass}" type="button" data-map-filter="${escapeHtml(filter.id)}">
          ${escapeHtml(getCopy(filter.label))}
        </button>
      `;
    })
    .join("");

  const visiblePoints = state.config.area.points.filter(
    (point) => state.activeMapFilter === "all" || point.category === state.activeMapFilter,
  );

  dom.mapPoints.innerHTML = visiblePoints
    .map(
      (point) => `
        <a class="map-point" href="${escapeHtml(point.href)}" target="_blank" rel="noreferrer">
          <span class="map-point-icon">${renderIcon(point.icon)}</span>
          <span class="map-point-copy">
            <strong>${escapeHtml(getCopy(point.title))}</strong>
            <small>${escapeHtml(getCopy(point.meta))}</small>
          </span>
        </a>
      `,
    )
    .join("");
}

function renderStory() {
  dom.storyKicker.textContent = getCopy(state.config.sections.story.kicker);
  dom.storyTitle.textContent = getCopy(state.config.sections.story.title);
  dom.storyBody.textContent = getCopy(state.config.sections.story.body);
  dom.notesKicker.textContent = getCopy(state.config.sections.notes.kicker);

  const notes = state.config.sections.notes.items[state.locale] ?? state.config.sections.notes.items.en ?? [];
  dom.notesList.innerHTML = notes.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderContacts() {
  dom.contactTitle.textContent = getCopy(state.config.sections.contact.title);
  dom.contactCopy.textContent = getCopy(state.config.sections.contact.copy);

  dom.contactsGrid.innerHTML = state.config.contacts
    .map(
      (contact) => `
        <article class="contact-card">
          <p class="contact-role">${escapeHtml(getCopy(contact.role))}</p>
          <h3>${escapeHtml(contact.name)}</h3>
          <div class="contact-actions">
            <a class="ghost-link" href="tel:${escapeHtml(contact.phone)}">${escapeHtml(getCopy(state.config.ui.call))}</a>
            <a class="primary-link" href="${escapeHtml(contact.whatsapp)}" target="_blank" rel="noreferrer">
              ${escapeHtml(getCopy(state.config.ui.whatsapp))}
            </a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderHostSheet() {
  const host = state.config.host;
  dom.hostSheetKicker.textContent = getCopy(host.role);
  dom.hostSheetName.textContent = host.name;
  dom.hostSheetCopy.textContent = getCopy(host.intro);
  dom.hostSheetActions.innerHTML = [
    { type: "email", email: host.email, label: state.config.ui.email },
    { type: "call", phone: host.phone, label: state.config.ui.call },
    { type: "link", href: host.whatsapp, label: state.config.ui.whatsapp },
    { type: "link", href: host.instagram, label: state.config.ui.instagram },
  ]
    .map((action, index) => getActionMarkup(action, index % 2 === 0 ? "ghost-link" : "primary-link"))
    .join("");

  dom.hostSheet.classList.toggle("hidden", !state.hostSheetOpen);
  dom.hostSheet.setAttribute("aria-hidden", state.hostSheetOpen ? "false" : "true");
  document.body.classList.toggle("is-sheet-open", state.hostSheetOpen);
}

function getServiceById(serviceId) {
  return state.config.services.find((service) => service.id === serviceId) ?? null;
}

function renderModal() {
  const service = getServiceById(state.openServiceId);

  if (!service?.modal) {
    dom.modal.classList.add("hidden");
    dom.modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-modal-open");
    return;
  }

  dom.modalKicker.textContent = getCopy(service.modal.kicker);
  dom.modalTitle.textContent = getCopy(service.modal.title);
  dom.modalCopy.textContent = getCopy(service.modal.copy);
  dom.modalSections.innerHTML = service.modal.sections
    .map(
      (section) => `
        <section class="modal-section">
          <div class="modal-section-head">
            <span class="modal-badge">${renderIcon(section.icon)}</span>
            <h4>${escapeHtml(getCopy(section.title))}</h4>
          </div>
          <p>${escapeHtml(getCopy(section.text))}</p>
          <div class="modal-actions">
            ${(section.actions ?? [])
              .map((action, index) => getActionMarkup(action, index === 0 ? "primary-link" : "ghost-link"))
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");

  dom.modal.classList.remove("hidden");
  dom.modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-modal-open");
}

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    dom.toast.classList.remove("is-visible");
  }, 1800);
}

async function copyWifiPassword() {
  const password = state.config.wifi.password;

  try {
    await navigator.clipboard.writeText(password);
    showToast(getCopy(state.config.ui.copied, "Copied"));
  } catch {
    showToast(password);
  }
}

function connectWifi() {
  window.location.href = state.config.wifi.connectUrl;
}

function runAction(action) {
  if (action.type === "modal") {
    state.openServiceId = action.serviceId;
    renderModal();
    return;
  }

  if (action.type === "copy-wifi") {
    copyWifiPassword();
    return;
  }

  if (action.type === "connect-wifi") {
    connectWifi();
    return;
  }

  if (action.type === "host-sheet") {
    state.hostSheetOpen = true;
    renderHostSheet();
    return;
  }

  if (action.type === "call") {
    window.location.href = `tel:${action.phone}`;
    return;
  }

  if (action.type === "email") {
    window.location.href = `mailto:${action.email}`;
    return;
  }

  if (action.href) {
    window.open(action.href, "_blank", "noreferrer");
  }
}

function handleSerializedAction(rawAction) {
  if (!rawAction) {
    return;
  }

  try {
    runAction(JSON.parse(rawAction));
  } catch {
    // Ignore malformed action payloads.
  }
}

function closeModal() {
  state.openServiceId = null;
  renderModal();
}

function closeHostSheet() {
  state.hostSheetOpen = false;
  renderHostSheet();
}

function renderAll() {
  setDocumentMeta();
  applyThemeVariables(document.documentElement, state.colorMode, state.config.themePreset);
  document.body.dataset.mode = state.colorMode;
  document.body.dataset.viewMode = state.isGuestMode ? "guest" : "host";
  renderTopbar();
  renderLocaleSwitch();
  renderPreviewBanner();
  renderHero();
  renderHeroImage();
  renderGallery();
  renderQuickDock();
  renderServices();
  renderArea();
  renderStory();
  renderContacts();
  renderHostSheet();
  renderModal();
}

document.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const localeButton = target.closest("[data-locale]");
  if (localeButton instanceof HTMLElement) {
    state.locale = localeButton.dataset.locale ?? state.locale;
    renderAll();
    return;
  }

  const quickAction = target.closest("[data-action]");
  if (quickAction instanceof HTMLElement) {
    handleSerializedAction(quickAction.dataset.action);
    return;
  }

  const serviceTrigger = target.closest("[data-open-service]");
  if (serviceTrigger instanceof HTMLElement) {
    state.openServiceId = serviceTrigger.dataset.openService ?? null;
    renderModal();
    return;
  }

  const mapFilter = target.closest("[data-map-filter]");
  if (mapFilter instanceof HTMLElement) {
    state.activeMapFilter = mapFilter.dataset.mapFilter ?? "all";
    renderArea();
    return;
  }

  if (target.closest("[data-copy-wifi='true']")) {
    copyWifiPassword();
    return;
  }

  if (target.closest("[data-connect-wifi='true']")) {
    connectWifi();
    return;
  }

  if (target.closest("[data-open-host='true']")) {
    state.hostSheetOpen = true;
    renderHostSheet();
  }
});

dom.hostButton.addEventListener("click", () => {
  state.hostSheetOpen = true;
  renderHostSheet();
});

dom.themeToggle.addEventListener("click", () => {
  state.colorMode = state.colorMode === "dark" ? "light" : "dark";
  window.localStorage.setItem(modeStorageKey, state.colorMode);
  renderAll();
});

dom.hostSheetBackdrop.addEventListener("click", closeHostSheet);
dom.hostSheetClose.addEventListener("click", closeHostSheet);
dom.modalBackdrop.addEventListener("click", closeModal);
dom.modalClose.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.openServiceId) {
    closeModal();
  }

  if (event.key === "Escape" && state.hostSheetOpen) {
    closeHostSheet();
  }
});

loadTemplateConfig()
  .then(({ config, source }) => {
    state.config = config;
    state.source = source;
    state.locale = getInitialLocale();
    state.isGuestMode = getInitialViewMode(source);
    renderAll();
  })
  .catch((error) => {
    console.error(error);
    document.body.innerHTML = `
      <main style="padding: 32px; font-family: 'Hanken Grotesk', sans-serif; color: #231b17;">
        <h1 style="font-family: 'Fraunces', serif;">Unable to load the guest guide</h1>
        <p>Start a local server such as <code>python3 -m http.server 4173</code> and open the project via <code>http://localhost:4173</code>. The guide supports <code>config.json</code>, preset query params, and browser preview links.</p>
      </main>
    `;
  });
