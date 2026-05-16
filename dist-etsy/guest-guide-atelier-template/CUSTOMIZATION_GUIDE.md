# Customization Guide

## Recommended workflow

1. Open `customize.html`
2. Pick a preset
3. Edit the quick fields in `Edit Content`
4. Add your live URL in `Publish`
5. Preview the guide and printables
6. Download `config.json`
7. Replace the root `config.json`

## What the customizer controls

- property name and crest
- hero display mode: full, compact or hidden
- guest mode links for guest-safe sharing
- headline and subtitle
- address, email and license line
- host name and direct contact
- Wi-Fi network and password
- map, route, PDF and excursion links
- public guide URL and QR destination URL
- property hero image and gallery image URLs
- printable titles for the QR sign, Wi-Fi card, welcome sheet and pocket card
- theme preset

The customizer also keeps dependent actions in sync:

- Wi-Fi modal text
- map and route links
- host call / WhatsApp actions
- QR destination fallbacks

## JSON structure overview

Main sections inside `config.json`:

- `meta`
- `layout`
- `themePreset`
- `languages`
- `brand`
- `stats`
- `host`
- `wifi`
- `links`
- `share`
- `printables`
- `ui`
- `quickActions`
- `sections`
- `services`
- `area`
- `contacts`

## Built-in service modules

The template now includes dedicated modules for common guest needs:
- `house-rules`: to clearly outline the essential rules.
- `checkout`: for step-by-step departure instructions.
- `emergency`: to list local emergency contacts and safety measures.

These are pre-configured in the `services` array in `config.json`.

## `share` section

```json
"share": {
  "publicUrl": "",
  "qrDestinationUrl": "",
  "guestUrl": ""
}
```

- `publicUrl`: the final published URL of the guide
- `qrDestinationUrl`: optional override used by the printable QR sign
- `guestUrl`: optional explicit guest-facing URL; if blank, the template derives one automatically from the public URL
- If `qrDestinationUrl` is empty, the printables use `publicUrl`

## `media` section

```json
"media": {
  "heroImage": {
    "src": "",
    "alt": { "en": "", "it": "", "fr": "" }
  },
  "gallery": [
    {
      "src": "",
      "alt": { "en": "", "it": "", "fr": "" }
    }
  ]
}
```

- `heroImage`: optional large property image below the hero
- `gallery`: up to 3 visual slots for room, exterior or amenity photos
- Leave them blank for a clean image-free layout

## `printables` section

Use this section to rename the bundled printable bonuses:

- `printables.qrSign.title`
- `printables.qrSign.subtitle`
- `printables.qrSign.footer`
- `printables.wifiCard.title`
- `printables.welcomeSheet.title`
- `printables.qrPocketCard.title`
- `printables.qrPocketCard.tagline`

Translations stay inside the same file to keep the Etsy handoff simple.

## `layout` section

```json
"layout": {
  "heroMode": "full"
}
```

- `full`: shows the large editorial hero
- `compact`: keeps the hero but removes the welcome paragraph and stats
- `hidden`: hides the large hero copy and leaves the topbar plus quick access rail

## When to edit raw JSON directly

Use the JSON editor when you want to:

- add or remove service cards
- rewrite modal sections
- change nearby recommendations
- add more languages
- replace the starter structure entirely

## Printables included

- `printables/qr-sign.html`
- `printables/wifi-card.html`
- `printables/welcome-sheet.html`
- `printables/qr-pocket-card.html`

All of them read the same `config.json`.

## Best practice

- Treat the guide like a guest tool, not a brochure
- Keep arrival, Wi-Fi and contact info easy to scan
- Use one polished public URL before generating the QR sign
- Print one test copy before giving it to guests
