# Deploy Guide

This template is a static website. GitHub Pages is the easiest free option for most buyers.

## GitHub Pages steps

1. Create a new GitHub repository.
2. Upload the template files.
3. Replace the root `config.json` with the exported file from `customize.html`.
4. In GitHub, open `Settings -> Pages`.
5. Set the source to the main branch root folder.
6. Wait for GitHub Pages to publish the site.
7. Copy the live URL.
8. Paste that URL into the `Public guide URL` field in `customize.html`.
9. Export `config.json` again and upload the updated file.

## Why step 8 matters

The printables use the live guest link for their QR code.

If the buyer skips this step, the QR files may still point to a preview or temporary URL.

## No domain required

The template works perfectly with the default GitHub Pages URL.

## Custom domain

A custom domain is optional. If used, the buyer should update `Public guide URL` to the final custom domain and replace `config.json` again.
