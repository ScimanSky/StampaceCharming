# StayBook

StayBook is a five-language digital guest book template for vacation rentals, B&Bs and holiday homes.

It is intentionally narrow:
- one guest-facing layout
- five built-in guest languages
- fixed hospitality sections
- a simple browser customizer
- matching QR printables

## What is included

- `index.html`: guest-facing digital guest book
- `config.json`: the only file buyers need to replace after editing
- `customize.html`: browser customizer for non-technical buyers
- `printables/`: QR sign, Wi-Fi card, welcome sheet and pocket QR card
- `DEPLOY_GUIDE.md`: GitHub Pages publishing guide
- buyer docs and license

## Guest book structure

The template always includes these sections:
- house rules
- useful info
- check-in
- check-out
- local tips
- emergency / help

It also keeps Wi-Fi, host contact and stay details visible at the top of the page.

## Languages included

- English
- Italian
- French
- German
- Spanish

## Local preview

Run a simple static server from the project root:

```bash
python3 -m http.server 4173
```

Open:
- `http://localhost:4173/index.html`
- `http://localhost:4173/customize.html`
- `http://localhost:4173/printables/qr-sign.html`

## Buyer flow

1. Open `customize.html`
2. Edit stay details, host contact and Wi-Fi
3. Review the 5 language tabs
4. Paste the final live URL
5. Preview the guest book and printables
6. Download `config.json`
7. Publish the files and replace the root `config.json`

## Build seller bundle

```bash
npm run build:etsy
```

This creates:
- `dist-etsy/staybook-digital-guest-book-template.zip`
- refreshed seller listing slides in `seller-assets/listing-slides/`
