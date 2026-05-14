# Guest Guide Atelier

Mobile-first guest guide website template for Airbnb hosts, vacation rentals, villas and boutique stays.

This product is packaged as an Etsy-ready digital bundle:

- `index.html`: the live guest guide
- `customize.html`: no-code browser customizer
- `config.json`: single editable content file
- `printables/`: QR sign, Wi-Fi card and welcome sheet
- `data/presets/`: 4 starter presets
- `vendor/qrcode.js`: local MIT QR generator, no external API required
- hero display modes: full, compact or hidden

## What this product is

- A lightweight guest guide website template
- A QR-ready hospitality mini web app
- A browser-editable template for small hosts and property managers

## What this product is not

- Not a Canva file
- Not a PDF-only welcome book
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

Preset previews:

- `http://localhost:4173/index.html?preset=boutique`
- `http://localhost:4173/index.html?preset=urban`
- `http://localhost:4173/index.html?preset=coastal`
- `http://localhost:4173/index.html?preset=blank`

## Buyer workflow

1. Open `customize.html`
2. Choose a preset
3. Edit the core content
4. Add your public guide URL in the `Publish` step
5. Preview the guide and printables
6. Download `config.json`
7. Replace the root `config.json`
8. Publish the files to GitHub Pages or another static host
9. Print the QR sign, Wi-Fi card or welcome sheet

## Included bundle

- Guide website template
- No-code customizer
- Single `config.json` system
- 4 starter presets
- QR Welcome Sign
- Wi-Fi Card
- Welcome Sheet
- Buyer docs and deploy guide

## Documentation

- [Quick Start](./QUICK_START.md)
- [Customization Guide](./CUSTOMIZATION_GUIDE.md)
- [Deploy Guide](./DEPLOY_GUIDE.md)
- [Etsy Package Guide](./ETSY_PACKAGE.md)
- [Etsy Listing Copy](./ETSY_LISTING_COPY.md)
- [Seller Checklist](./SELLER_CHECKLIST.md)
- [License](./LICENSE.txt)
