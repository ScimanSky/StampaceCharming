# Seller Checklist

## Before publishing on Etsy

1. Run:

   ```bash
   npm run check:js
   npm run build:etsy
   ```

2. Review:
   - `dist-etsy/guest-guide-atelier-template.zip`
   - `seller-assets/listing-slides/`
   - `seller-assets/social-crops/`

3. Upload only the ZIP file as the Etsy digital download
4. Upload the generated PNG slides as the listing image set
5. Use the listing copy from `ETSY_LISTING_COPY.md`
6. Publish a live demo before going live on Etsy

## Demo URLs

- public demo homepage: `https://scimansky.github.io/StampaceCharming/`
- demo customizer: `https://scimansky.github.io/StampaceCharming/customize.html`
- demo QR sign: `https://scimansky.github.io/StampaceCharming/printables/qr-sign.html`
- demo guest mode: `https://scimansky.github.io/StampaceCharming/?view=guest`

Recommended hosting: GitHub Pages.

## Listing image order

1. cover
2. what guests can do
3. what's included
4. how easy it is to edit
5. preset comparison
6. bonus printables
7. after purchase flow
8. delivery / hosting / license

## Offer setup

- base listing launch price: `USD 17`
- later test range: `USD 19-24`
- personalization add-on: `USD 49`

## Manual QA

- every phone number and email is clearly demo content
- verify demo content for `house-rules`, `checkout` and `emergency` modules
- verify host mode and guest mode links both work
- verify hero image and gallery fallbacks still look clean when empty
- the buyer ZIP contains no seller-only files
- the QR sign opens the correct guide URL
- the printables look coherent with the guide theme
- the listing clearly says `website template`, `digital download` and `hosting not included`
- the license matches one-business / one-client usage
