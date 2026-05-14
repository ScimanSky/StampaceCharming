# Deploy Guide

This template is designed for static hosting. No backend is required.

## Recommended path: GitHub Pages

1. Create a new GitHub repository
2. Upload the template files
3. Replace the root `config.json` with your exported file
4. Commit the files
5. Open repository `Settings > Pages`
6. Set the source to the main branch root
7. Save and wait for the Pages URL

Your guide will be available at a URL similar to:

```text
https://yourusername.github.io/your-repository-name/
```

## Update the public URL

After GitHub Pages is live:

1. Open `customize.html`
2. Set `Public guide URL` to the final live URL
3. Leave `QR destination URL` empty unless you want a different target
4. Download `config.json` again
5. Replace the published `config.json`

This ensures the QR sign points to the real live page.

## Printable flow after publishing

1. Open `printables/qr-sign.html`
2. Confirm the QR code opens the correct guide
3. Click `Print / Save as PDF`
4. Repeat for `wifi-card.html` and `welcome-sheet.html`

## Notes

- No domain is required
- A custom domain is optional
- Hosting is not included with the template purchase
- GitHub Pages is free for static sites

## Optional quick alternative

If you need a faster one-off upload, you can also use Netlify Drop:

1. Export your final files
2. Drag the folder into Netlify Drop
3. Copy the generated URL
4. Update `share.publicUrl`
5. Re-export `config.json`

GitHub Pages remains the recommended long-term setup because it is stable, linkable and easy to document for buyers.
