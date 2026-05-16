# Quick Start

## For buyers

1. Open `customize.html` in a browser.
2. Fill in:
   - property name
   - address
   - registration / CIN
   - check-in and check-out times
   - host contact details
   - Wi-Fi network and password
3. Switch through the 5 language tabs and replace the demo text.
4. Paste your live website URL in the `Public guide URL` field.
5. Preview:
   - guest book
   - QR sign
   - Wi-Fi card
   - welcome sheet
   - pocket QR card
6. Click `Download config.json`.
7. Replace the root `config.json` file in the template with your exported version.

## For local testing

```bash
python3 -m http.server 4173
```

Then open:
- `http://localhost:4173/customize.html`
- `http://localhost:4173/index.html`

## For publishing

Follow [DEPLOY_GUIDE.md](/home/scima/projects/StampaceCharming/DEPLOY_GUIDE.md).
