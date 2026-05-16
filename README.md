# Guest Guide Atelier

Mobile-first guest guide website template for Airbnb hosts, vacation rentals, villas, family stays, cabins and work-friendly rentals.

This product is packaged as an Etsy-ready digital bundle:

- `index.html`: the live guest guide
- `customize.html`: no-code browser customizer
- `config.json`: single editable content file
- `printables/`: QR sign, Wi-Fi card, welcome sheet and pocket QR card
- `data/presets/`: 6 commercial templates plus 1 blank bonus starter
- `icons.js`: local SVG icon system for service cards and UI
- `vendor/qrcode.js`: local MIT QR generator, no external API required
- hero display modes: full, compact or hidden
- optional property image support: hero image + gallery strip
- guest mode sharing for clean guest-facing links

## What this product is

- A lightweight guest guide website template
- A QR-ready hospitality mini web app with dedicated modules for House Rules, Checkout steps, and Emergency info
- A browser-editable template for small hosts and property managers

## What this product is not

- Not a Canva file
- Not a PDF-only welcome book (a static web app is interactive, easier to translate, copy-paste friendly, and updates instantly without re-printing)
- Not a full hotel website
- Not a hosted SaaS product

## Local preview

Run a static server:

```bash
python3 -m http.server 4173
```

Open:

- `http://localhost:4173/index.html`
- `http://localhost:4173/customize.html`
- `http://localhost:4173/printables/qr-sign.html`
- `http://localhost:4173/printables/wifi-card.html`
- `http://localhost:4173/printables/welcome-sheet.html`
- `http://localhost:4173/printables/qr-pocket-card.html`

Preset previews:

- `http://localhost:4173/index.html?preset=boutique`
- `http://localhost:4173/index.html?preset=urban`
- `http://localhost:4173/index.html?preset=coastal`
- `http://localhost:4173/index.html?preset=family`
- `http://localhost:4173/index.html?preset=cabin`
- `http://localhost:4173/index.html?preset=workstay`
- `http://localhost:4173/index.html?preset=blank`

## Buyer workflow

1. Open `customize.html`
2. Choose a template from the wizard
3. Edit the core content
4. Add your public guide URL in the `Publish` step
5. Add property images if desired
6. Preview host mode, guest mode and printables
7. Download `config.json`
8. Replace the root `config.json`
9. Publish the files to GitHub Pages or another static host
10. Print the QR sign, Wi-Fi card, welcome sheet or pocket QR card

## Included bundle

- Guide website template
- No-code customizer
- Single `config.json` system
- 6 distinct guest guide templates
- 1 blank bonus starter
- QR Welcome Sign
- Wi-Fi Card
- Welcome Sheet
- Pocket QR Card
- Buyer docs and deploy guide

## Documentation

- [Quick Start](./QUICK_START.md)
- [Customization Guide](./CUSTOMIZATION_GUIDE.md)
- [Deploy Guide](./DEPLOY_GUIDE.md)
- [Etsy Package Guide](./ETSY_PACKAGE.md)
- [Etsy Listing Copy](./ETSY_LISTING_COPY.md)
- [Seller Checklist](./SELLER_CHECKLIST.md)
- [License](./LICENSE.txt)
