# Stampace Charming

Demo statico di una guest app, ricostruita con un layout piu' curato e una struttura dati facile da personalizzare.

## Avvio locale

```bash
python3 -m http.server 4173
```

Poi apri `http://localhost:4173`.

## Dove personalizzare

- `app.js` > `siteConfig`: nome struttura, indirizzo, email, CIN, Wi-Fi, contatti, link.
- `app.js` > `copy`: testi in italiano, inglese e francese.
- `app.js` > `services`: elenco card in home.
- `styles.css`: palette, spaziature, componenti e responsive.

## Struttura

- `index.html`: shell della pagina
- `styles.css`: design system e layout
- `app.js`: contenuti, rendering, modali e cambio lingua
