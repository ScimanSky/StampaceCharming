# Deploy Guide

This template is designed for static hosting. No backend is required.

Deploying your guide as a live website provides significant advantages over a traditional PDF:
- **Always up-to-date:** Changes reflect instantly for all guests.
- **Interactive:** Features like the map widget, clickable emergency numbers, and dynamic checkout instructions.
- **Accessible:** Guests don't need to download large files to access House Rules or Emergency info.

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
4. Leave `Guest URL` empty unless you want a guest-safe custom link
5. Download `config.json` again
6. Replace the published `config.json`

This ensures the QR sign points to the real live page and the guest mode link stays shareable.

## Printable flow after publishing

1. Open `printables/qr-sign.html`
2. Confirm the QR code opens the correct guide
3. Click `Print / Save as PDF`
4. Repeat for `wifi-card.html`, `welcome-sheet.html` and `qr-pocket-card.html`

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
