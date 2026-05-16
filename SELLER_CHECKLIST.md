# Seller Checklist

## Product position

Sell this as:
- `5-language digital guest book template`
- `QR-ready house manual for Airbnb and vacation rentals`
- `editable guest welcome website`

Do not position it as a full website builder.

## Live demo URLs

- guide: `https://scimansky.github.io/StampaceCharming/`
- customizer: `https://scimansky.github.io/StampaceCharming/customize.html`
- QR sign: `https://scimansky.github.io/StampaceCharming/printables/qr-sign.html`
- Wi-Fi card: `https://scimansky.github.io/StampaceCharming/printables/wifi-card.html`

## Listing priorities

1. explain that it is a digital guest book, not a PDF
2. highlight the 5 included languages
3. show the fixed hospitality sections
4. show how simple the customizer is
5. show the QR printables
6. state that hosting is not included

## Build before upload

```bash
npm run check:js
npm run build:etsy
```

Upload:
- `dist-etsy/staybook-digital-guest-book-template.zip`

## Final QA

- open the live demo
- open the customizer
- check all 5 languages
- confirm the printables load
- confirm the ZIP contains no seller-only files
