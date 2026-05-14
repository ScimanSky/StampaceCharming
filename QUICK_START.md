# Quick Start

## For buyers

1. Start a local server:

   ```bash
   python3 -m http.server 4173
   ```

2. Open `http://localhost:4173/customize.html`
3. Choose the preset closest to your property
4. Update:
   - property name
   - hero display mode
   - address
   - host contact
   - Wi-Fi details
   - map and route links
   - public guide URL
5. Click `Preview guide`
6. Review the printable previews
7. Click `Download config.json`

## Files you will publish

- `index.html`
- `app.js`
- `template-utils.js`
- `styles.css`
- `favicon.svg`
- `config.json`
- `printables/`
- `vendor/`

## Optional files to keep

- `customize.html`
- `customize.js`
- `customize.css`
- `data/presets/`

## After export

1. Replace the root `config.json` with your downloaded file
2. Publish the folder to GitHub Pages or another static host
3. Update `share.publicUrl` if your final URL changed
4. Open:
   - `printables/qr-sign.html`
   - `printables/wifi-card.html`
   - `printables/welcome-sheet.html`
5. Print or save them as PDF

## Best practice

- Keep the guide short and useful
- Limit service cards to real guest questions
- Test on mobile before sharing
- Replace every demo URL and phone number
