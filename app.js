const siteConfig = {
  brand: {
    name: "Stampace Charming",
    email: "hello@stampacecharming.com",
    address: "Via del Demo 12, Cagliari",
    license: "CIN: IT000000B000000000",
    wifi: {
      network: "Stampace Charming Guest",
      password: "stampace-2026",
      qr: "WIFI:T:WPA;S:Stampace Charming Guest;P:stampace-2026;;",
    },
    contacts: [
      {
        name: "Chiara",
        role: "Guest care",
        phone: "+393401112233",
        whatsapp: "https://wa.me/393401112233",
      },
      {
        name: "Luca",
        role: "Check-in support",
        phone: "+393491234567",
        whatsapp: "https://wa.me/393491234567",
      },
    ],
  },
  links: {
    cityMap: "https://maps.google.com/?q=Cagliari+centro+storico",
    cityGuidePdf:
      "https://cagliariturismo.comune.cagliari.it/sites/default/files/2021-11/Mappa_della_citt_agrave_.pdf",
    walkingRoute: "https://maps.google.com/?q=Stazione+Cagliari+Stampace",
    excursions: "https://maps.google.com/?q=Golfo+degli+Angeli+boat+tour",
  },
  areaMapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=9.101%2C39.210%2C9.128%2C39.226&layer=mapnik&marker=39.2183%2C9.1134",
  areaPoints: [
    {
      category: "all",
      icon: "☕",
      title: "Caffe in piazza",
      meta: "Bar · 3 min a piedi",
      href: "https://maps.google.com/?q=Cagliari+caffe+centro",
    },
    {
      category: "food",
      icon: "🍝",
      title: "Trattoria del centro",
      meta: "Ristorante · cucina sarda",
      href: "https://maps.google.com/?q=Cagliari+ristorante+centro",
    },
    {
      category: "beach",
      icon: "🏖️",
      title: "Poetto",
      meta: "Spiaggia · bus diretto",
      href: "https://maps.google.com/?q=Poetto+Cagliari",
    },
  ],
};

const services = [
  {
    id: "wifi",
    icon: "Wifi",
    tone: "tone-orange",
    chip: { it: "Online", en: "Online", fr: "Online" },
    accent: "wifi",
  },
  {
    id: "info",
    icon: "House",
    tone: "tone-cream",
    chip: { it: "Stay", en: "Stay", fr: "Sejour" },
    accent: "modal",
  },
  {
    id: "food",
    icon: "Glass",
    tone: "tone-blue",
    chip: { it: "Food", en: "Food", fr: "Food" },
    accent: "modal",
  },
  {
    id: "mobility",
    icon: "Bus",
    tone: "tone-orange",
    chip: { it: "City", en: "City", fr: "Ville" },
    accent: "modal",
  },
  {
    id: "transfer",
    icon: "Plane",
    tone: "tone-cream",
    chip: { it: "Transfer", en: "Transfer", fr: "Transfer" },
    accent: "modal",
  },
  {
    id: "map",
    icon: "Compass",
    tone: "tone-blue",
    chip: { it: "Explore", en: "Explore", fr: "Explore" },
    accent: "links",
  },
  {
    id: "rent",
    icon: "Car",
    tone: "tone-orange",
    chip: { it: "Rental", en: "Rental", fr: "Rental" },
    accent: "modal",
  },
  {
    id: "trips",
    icon: "Wave",
    tone: "tone-orange",
    chip: { it: "Outdoor", en: "Outdoor", fr: "Outdoor" },
    accent: "links",
  },
  {
    id: "door",
    icon: "Key",
    tone: "tone-cream",
    chip: { it: "Accesso", en: "Access", fr: "Acces" },
    accent: "modal",
  },
];

const copy = {
  it: {
    languageLabel: "Lingua",
    topbarTagline: "Guest guide multilingua",
    heroKicker: "Boutique stay in centro storico",
    heroTitle: "Un'app elegante per il tuo appartamento.",
    heroSubtitle:
      "Una home mobile-first per ospiti: accessi, Wi-Fi, consigli locali, transfer e contatti in un'unica esperienza ordinata.",
    heroWelcome:
      "Questa demo prende ispirazione dal progetto di riferimento, ma la ricostruisce in modo piu' pulito e facilmente personalizzabile. Tutti i contenuti sono gestiti da dati JavaScript, quindi puoi sostituire testi, numeri e link senza toccare il layout.",
    stats: [
      { value: "3", label: "Lingue attive" },
      { value: "9", label: "Carte servizio" },
      { value: "1 click", label: "Per contattare gli host" },
    ],
    servicesKicker: "Tap, scorri, apri",
    servicesTitle: "Servizi rapidi per gli ospiti",
    servicesCopy:
      "Ogni card apre un'informazione utile o una call to action. La struttura e' pronta per QR code, landing da WhatsApp o link inviato prima del check-in.",
    areaTitle: "Mappa dei dintorni",
    areaCopy: "L'alloggio e i punti consigliati nelle vicinanze.",
    areaFilters: ["Tutti", "Ristorante", "Bar", "Spiagge"],
    storyKicker: "Direzione creativa",
    storyTitle: "Mediterraneo caldo, tono editoriale, interazioni semplici.",
    storyBody:
      "Ho scelto un'estetica piu' raffinata rispetto al sito originale: palette sabbia, oliva e terracotta; tipografia serif per dare carattere; componenti morbidi e ben leggibili anche su smartphone. Il risultato resta familiare, ma sale di qualita'.",
    notesKicker: "Cosa personalizzare",
    notes: [
      "Sostituisci nome struttura, indirizzo, email e codice CIN nel blocco `siteConfig`.",
      "Aggiorna numeri host, password Wi-Fi e link esterni direttamente in `app.js`.",
      "Puoi duplicare le card servizio aggiungendo nuovi item all'array `services` e i relativi contenuti in `copy`.",
    ],
    footerCopy: "Guest experience pensata per short stay e case vacanza.",
    footerContact: "Contatta gli host",
    contactTitle: "Host disponibili",
    contactCopy:
      "Blocchi chiari per chiamata e WhatsApp, con tono premium ma immediato.",
    buttons: {
      open: "Apri guida",
      wifi: "Connetti al Wi-Fi",
      copyPassword: "Copia password",
      mapPrimary: "Apri mappa",
      mapSecondary: "Scarica PDF",
      trips: "Vedi escursioni",
      call: "Chiama",
      whatsapp: "WhatsApp",
      stationRoute: "Percorso dalla stazione",
      copied: "Password copiata",
      dockRules: "Regole",
      dockWifi: "Wi-Fi",
      dockMap: "Mappa",
      dockHost: "Host",
    },
    services: {
      info: {
        title: "Informazioni & regole",
        description: "Check-in, casa, servizi inclusi e poche regole essenziali.",
        modal: {
          kicker: "Manuale soggiorno",
          title: "Informazioni essenziali",
          copy: "Usa questa sezione per concentrare le informazioni che oggi mandi in piu' messaggi separati.",
          sections: [
            {
              icon: "Clock",
              title: "Check-in e check-out",
              body:
                "Check-in dalle 15:00 alle 21:30. Check-out entro le 10:30. Se vuoi offrire early check-in o late check-out, qui puoi indicare disponibilita' e supplementi.",
            },
            {
              icon: "Sparkles",
              title: "Durante il soggiorno",
              body:
                "Spiega in modo sintetico come lasciare la casa quando gli ospiti escono, dove trovare i set spiaggia, e quali comfort sono inclusi.",
            },
            {
              icon: "Shield",
              title: "Regole importanti",
              body:
                "Silenzio dopo le 22:00, niente fumo indoor, finestre chiuse quando l'aria condizionata e' accesa, chiavi lasciate sul tavolo al check-out.",
            },
          ],
        },
      },
      wifi: {
        title: "Password Wi-Fi",
        description: "Nome rete, password leggibile e doppia azione: copia o connessione.",
        metaLabel: "Password",
      },
      door: {
        title: "Accesso all'edificio",
        description: "Sequenza rapida per aprire portone e cassetta chiavi senza ambiguita'.",
        modal: {
          kicker: "Self check-in",
          title: "Come entrare",
          copy: "Questa card riduce messaggi e chiamate in fase di arrivo. Mantieni le istruzioni estremamente corte.",
          sections: [
            {
              icon: "Hash",
              title: "1. Apri il tastierino",
              body:
                "Premi il tasto con l'icona chiave per attivare il pannello. Se il sistema si resetta, attendi due secondi e riprova.",
            },
            {
              icon: "Lock",
              title: "2. Inserisci il codice",
              body:
                "Digita il codice di accesso che invii il giorno dell'arrivo. Puoi anche specificare qui eventuali istruzioni per cassetta portachiavi.",
            },
            {
              icon: "Door",
              title: "3. Conferma e richiudi",
              body:
                "Premi di nuovo il tasto chiave, entra e accertati che il portone si richiuda bene dietro di te.",
            },
          ],
        },
      },
      mobility: {
        title: "Trasporti",
        description: "Bus, treno aeroporto, fermate vicine e suggerimenti pratici.",
        modal: {
          kicker: "Come muoversi",
          title: "Citta', aeroporto, parcheggio",
          copy: "Una singola modale puo' coprire tutto cio' che serve davvero a chi arriva senza auto o vuole muoversi leggero.",
          sections: [
            {
              icon: "Bus",
              title: "Bus di quartiere",
              body:
                "Indica la fermata piu' vicina, le linee utili e il costo del biglietto. Se hai un'app locale consigliata, aggiungila qui.",
            },
            {
              icon: "Train",
              title: "Collegamento aeroporto",
              body:
                "Scrivi ogni quanto parte il treno o la navetta, quanto dura il tragitto e quanti minuti a piedi servono per arrivare in appartamento.",
              actions: [{ type: "link", labelKey: "stationRoute", href: siteConfig.links.walkingRoute }],
            },
            {
              icon: "Parking",
              title: "Parcheggio",
              body:
                "Spiega dove si trovano le strisce blu, quando si paga e se esistono fasce gratuite. Gli ospiti lo cercano quasi sempre.",
            },
          ],
        },
      },
      map: {
        title: "Mappa del quartiere",
        description: "Apri i punti di interesse o scarica una mappa PDF ufficiale.",
      },
      food: {
        title: "Ristoranti & aperitivo",
        description: "Una selezione breve, ordinata e credibile. Meglio pochi consigli forti.",
        modal: {
          kicker: "Local picks",
          title: "Dove mangiare bene",
          copy: "Organizza i suggerimenti per atmosfera o momento della giornata invece che con liste infinite.",
          sections: [
            {
              icon: "Fish",
              title: "Pesce",
              body:
                "Inserisci 2 o 3 posti davvero affidabili, con una nota pratica: prenotazione consigliata, fascia prezzo o piatto forte.",
            },
            {
              icon: "Fire",
              title: "Carne e cucina sarda",
              body:
                "Perfetto per raccontare un posto piu' autentico o una trattoria con menu tipico.",
            },
            {
              icon: "Cocktail",
              title: "Aperitivo e sera",
              body:
                "Suggerisci un rooftop, un wine bar e una piazza viva. L'ospite decide prima e piu' facilmente.",
            },
          ],
        },
      },
      trips: {
        title: "Escursioni",
        description: "Boat tour, spiagge, giornate fuori porta e attivita da prenotare.",
      },
      transfer: {
        title: "Transfer privato",
        description: "Se collabori con un NCC o autista, questa card converte bene.",
        modal: {
          kicker: "Servizi premium",
          title: "Transfer su richiesta",
          copy: "Puoi usare questa sezione per proporre un partner fidato invece di lasciare l'ospite a cercare da solo.",
          sections: [
            {
              icon: "Plane",
              title: "Aeroporto e porto",
              body:
                "Disponibile su prenotazione per arrivi tardivi, partenze mattutine e trasferimenti porta a porta.",
            },
            {
              icon: "Message",
              title: "Come prenotare",
              body:
                "Chiedi un messaggio almeno 24 ore prima con numero persone, orario e bagagli. Qui puoi indicare anche il costo fisso.",
            },
          ],
        },
      },
      rent: {
        title: "Noleggio",
        description: "Auto, scooter e bici con un'unica sezione dedicata.",
        modal: {
          kicker: "Move freely",
          title: "Auto, scooter, bici",
          copy: "Una modale breve e chiara permette di presentare i partner giusti senza sovraccaricare la home.",
          sections: [
            {
              icon: "Car",
              title: "Auto e scooter",
              body:
                "Utile per chi vuole uscire dal centro o visitare piu' spiagge in giornata. Indica se offri consegna vicino alla struttura.",
            },
            {
              icon: "Bike",
              title: "Bici e mobilita' leggera",
              body:
                "Perfetta per ospiti urban e soggiorni brevi. Puoi citare ciclabili, lungomare o itinerari facili.",
            },
          ],
        },
      },
    },
  },
  en: {
    languageLabel: "Language",
    topbarTagline: "Multilingual guest guide",
    heroKicker: "Boutique stay in the historic center",
    heroTitle: "An elegant app for your apartment.",
    heroSubtitle:
      "A mobile-first guest home: access instructions, Wi-Fi, local tips, transfers and host contacts in one clean experience.",
    heroWelcome:
      "This demo is inspired by the reference site, but rebuilt in a cleaner and easier-to-customize way. All content is data-driven, so you can replace text, numbers and links without touching the layout.",
    stats: [
      { value: "3", label: "Active languages" },
      { value: "9", label: "Service cards" },
      { value: "1 tap", label: "To reach the hosts" },
    ],
    servicesKicker: "Tap, scroll, open",
    servicesTitle: "Quick tools for guests",
    servicesCopy:
      "Each card opens a useful detail or a call to action. The structure is ready for QR codes, WhatsApp landings or pre-check-in links.",
    areaTitle: "Neighborhood map",
    areaCopy: "Your stay and the most useful points nearby.",
    areaFilters: ["All", "Food", "Bar", "Beaches"],
    storyKicker: "Creative direction",
    storyTitle: "Warm Mediterranean mood, editorial tone, simple interactions.",
    storyBody:
      "I pushed the visual quality above the original example: sand, olive and terracotta palette; serif typography for character; rounded components that stay readable on mobile. Familiar concept, stronger execution.",
    notesKicker: "What to customize",
    notes: [
      "Replace property name, address, email and CIN code inside `siteConfig`.",
      "Update host numbers, Wi-Fi password and external links directly in `app.js`.",
      "You can add more service cards by extending the `services` array and related content in `copy`.",
    ],
    footerCopy: "Guest experience made for short stays and vacation rentals.",
    footerContact: "Contact hosts",
    contactTitle: "Hosts on call",
    contactCopy: "Clear call and WhatsApp blocks with a premium but immediate tone.",
    buttons: {
      open: "Open guide",
      wifi: "Join Wi-Fi",
      copyPassword: "Copy password",
      mapPrimary: "Open map",
      mapSecondary: "Download PDF",
      trips: "See excursions",
      call: "Call",
      whatsapp: "WhatsApp",
      stationRoute: "Route from station",
      copied: "Password copied",
      dockRules: "Rules",
      dockWifi: "Wi-Fi",
      dockMap: "Map",
      dockHost: "Host",
    },
    services: {
      info: {
        title: "Info & rules",
        description: "Check-in, house details, included perks and the few rules that matter.",
        modal: {
          kicker: "Stay manual",
          title: "Essential information",
          copy: "Use this section to gather the details you usually send across multiple separate messages.",
          sections: [
            {
              icon: "Clock",
              title: "Check-in and check-out",
              body:
                "Check-in from 3:00 PM to 9:30 PM. Check-out by 10:30 AM. If you offer early check-in or late check-out, you can state availability and fees here.",
            },
            {
              icon: "Sparkles",
              title: "During the stay",
              body:
                "Explain how guests should leave the home when they go out, where beach sets are stored, and which comfort items are included.",
            },
            {
              icon: "Shield",
              title: "Important rules",
              body:
                "Quiet after 10:00 PM, no indoor smoking, keep windows closed when AC is on, and leave the keys on the table at departure.",
            },
          ],
        },
      },
      wifi: {
        title: "Wi-Fi password",
        description: "Readable network details with both copy and direct connection actions.",
        metaLabel: "Password",
      },
      door: {
        title: "Building access",
        description: "A short and unambiguous sequence for gate and keybox access.",
        modal: {
          kicker: "Self check-in",
          title: "How to enter",
          copy: "This card reduces calls during arrivals. Keep the instructions extremely short.",
          sections: [
            {
              icon: "Hash",
              title: "1. Wake up the keypad",
              body:
                "Press the key icon button to activate the panel. If the system resets, wait two seconds and try again.",
            },
            {
              icon: "Lock",
              title: "2. Enter the code",
              body:
                "Type the access code you send on the arrival day. You can also mention keybox instructions here.",
            },
            {
              icon: "Door",
              title: "3. Confirm and close",
              body:
                "Press the key button again, enter, and make sure the building door closes properly behind you.",
            },
          ],
        },
      },
      mobility: {
        title: "Getting around",
        description: "Bus, airport train, nearby stops and practical movement tips.",
        modal: {
          kicker: "Move through the city",
          title: "City, airport, parking",
          copy: "One modal can cover everything a guest really needs when arriving without a car or moving light.",
          sections: [
            {
              icon: "Bus",
              title: "Neighborhood bus",
              body:
                "List the nearest stop, the lines that matter and the ticket cost. If there is a useful local app, mention it here.",
            },
            {
              icon: "Train",
              title: "Airport connection",
              body:
                "State how often the train or shuttle runs, how long the trip takes and how many walking minutes remain to the apartment.",
              actions: [{ type: "link", labelKey: "stationRoute", href: siteConfig.links.walkingRoute }],
            },
            {
              icon: "Parking",
              title: "Parking",
              body:
                "Explain where the paid spots are, when charges apply and whether there are any free time windows. Guests almost always ask.",
            },
          ],
        },
      },
      map: {
        title: "Neighborhood map",
        description: "Open the key points of interest or download an official PDF map.",
      },
      food: {
        title: "Restaurants & bars",
        description: "A short, trustworthy and well-organized local list. Fewer, stronger picks.",
        modal: {
          kicker: "Local picks",
          title: "Where to eat well",
          copy: "Organize recommendations by mood or moment of the day instead of building endless lists.",
          sections: [
            {
              icon: "Fish",
              title: "Seafood",
              body:
                "Add two or three reliable places, plus a practical note: booking advice, price band or standout dish.",
            },
            {
              icon: "Fire",
              title: "Meat and Sardinian cuisine",
              body:
                "Useful for highlighting a more authentic venue or a traditional local trattoria.",
            },
            {
              icon: "Cocktail",
              title: "Aperitivo and evening",
              body:
                "Suggest a rooftop, a wine bar and a lively square. Guests decide faster when choices are structured.",
            },
          ],
        },
      },
      trips: {
        title: "Excursions",
        description: "Boat tours, beaches, day trips and activities worth booking.",
      },
      transfer: {
        title: "Private transfer",
        description: "If you work with a driver, this card is a strong conversion point.",
        modal: {
          kicker: "Premium services",
          title: "Transfer on request",
          copy: "Use this section to recommend a trusted partner instead of leaving the guest to figure it out alone.",
          sections: [
            {
              icon: "Plane",
              title: "Airport and port",
              body:
                "Available on request for late arrivals, early departures and direct door-to-door journeys.",
            },
            {
              icon: "Message",
              title: "How to book",
              body:
                "Ask for a message at least 24 hours in advance with passenger count, time and luggage details. You can also state a fixed price here.",
            },
          ],
        },
      },
      rent: {
        title: "Rentals",
        description: "Cars, scooters and bikes grouped in one dedicated section.",
        modal: {
          kicker: "Move freely",
          title: "Cars, scooters, bikes",
          copy: "A short clear modal lets you present the right partners without overloading the homepage.",
          sections: [
            {
              icon: "Car",
              title: "Cars and scooters",
              body:
                "Useful for guests who want to leave the center or visit several beaches in one day. Mention delivery near the property if available.",
            },
            {
              icon: "Bike",
              title: "Bikes and light mobility",
              body:
                "Perfect for urban guests and short stays. You can reference seafront routes or easy cycling paths.",
            },
          ],
        },
      },
    },
  },
  fr: {
    languageLabel: "Langue",
    topbarTagline: "Guide client multilingue",
    heroKicker: "Boutique stay dans le centre historique",
    heroTitle: "Une app elegante pour votre appartement.",
    heroSubtitle:
      "Une page d'accueil mobile-first pour les voyageurs: acces, Wi-Fi, bonnes adresses, transferts et contacts des hotes dans une seule experience claire.",
    heroWelcome:
      "Cette demo s'inspire du site de reference, mais elle a ete reconstruite de facon plus propre et plus simple a personnaliser. Tous les contenus sont geres par des donnees JavaScript.",
    stats: [
      { value: "3", label: "Langues actives" },
      { value: "9", label: "Cartes service" },
      { value: "1 clic", label: "Pour joindre les hotes" },
    ],
    servicesKicker: "Touchez, faites defiler, ouvrez",
    servicesTitle: "Services rapides pour les hotes",
    servicesCopy:
      "Chaque carte ouvre une information utile ou une action. La structure est prete pour QR code, landing WhatsApp ou lien envoye avant le check-in.",
    storyKicker: "Direction creative",
    storyTitle: "Ambiance mediterraneenne, ton editorial, interactions simples.",
    storyBody:
      "J'ai pousse la qualite visuelle au-dessus de l'exemple d'origine: palette sable, olive et terracotta, typographie serif, composants doux et tres lisibles sur mobile.",
    notesKicker: "A personnaliser",
    notes: [
      "Remplacez nom, adresse, email et code CIN dans `siteConfig`.",
      "Mettez a jour les numeros des hotes, le Wi-Fi et les liens externes directement dans `app.js`.",
      "Vous pouvez ajouter d'autres cartes en etendant `services` et les contenus associes dans `copy`.",
    ],
    footerCopy: "Experience client pensee pour locations courte duree et maisons de vacances.",
    footerContact: "Contacter les hotes",
    contactTitle: "Hotes disponibles",
    contactCopy: "Blocs clairs pour appel et WhatsApp, avec un ton premium mais immediat.",
    buttons: {
      open: "Ouvrir le guide",
      wifi: "Se connecter au Wi-Fi",
      copyPassword: "Copier le mot de passe",
      mapPrimary: "Ouvrir la carte",
      mapSecondary: "Telecharger le PDF",
      trips: "Voir les excursions",
      call: "Appeler",
      whatsapp: "WhatsApp",
      stationRoute: "Trajet depuis la gare",
      copied: "Mot de passe copie",
      dockRules: "Regles",
      dockWifi: "Wi-Fi",
      dockMap: "Carte",
      dockHost: "Hotes",
    },
    services: {
      info: {
        title: "Infos & regles",
        description: "Check-in, maison, services inclus et quelques regles essentielles.",
        modal: {
          kicker: "Guide du sejour",
          title: "Informations essentielles",
          copy: "Utilisez cette section pour reunir les details que vous envoyez aujourd'hui dans plusieurs messages.",
          sections: [
            {
              icon: "Clock",
              title: "Check-in et check-out",
              body:
                "Check-in de 15h00 a 21h30. Check-out avant 10h30. Si vous proposez un early check-in ou un late check-out, indiquez ici disponibilite et supplement.",
            },
            {
              icon: "Sparkles",
              title: "Pendant le sejour",
              body:
                "Expliquez comment laisser l'appartement en sortant, ou trouver les accessoires plage et quels conforts sont inclus.",
            },
            {
              icon: "Shield",
              title: "Regles importantes",
              body:
                "Silence apres 22h00, pas de cigarette a l'interieur, fenetres fermees quand la climatisation est activee et cles laissees sur la table au depart.",
            },
          ],
        },
      },
      wifi: {
        title: "Mot de passe Wi-Fi",
        description: "Informations lisibles avec action de copie et connexion directe.",
        metaLabel: "Mot de passe",
      },
      door: {
        title: "Acces immeuble",
        description: "Une sequence courte et sans ambiguite pour le portail et la boite a cles.",
        modal: {
          kicker: "Self check-in",
          title: "Comment entrer",
          copy: "Cette carte reduit les appels a l'arrivee. Gardez les instructions tres courtes.",
          sections: [
            {
              icon: "Hash",
              title: "1. Activez le clavier",
              body:
                "Appuyez sur le bouton avec l'icone cle pour activer le panneau. Si le systeme se reinitialise, attendez deux secondes et recommencez.",
            },
            {
              icon: "Lock",
              title: "2. Entrez le code",
              body:
                "Saisissez le code d'acces envoye le jour d'arrivee. Vous pouvez aussi indiquer ici la marche a suivre pour la boite a cles.",
            },
            {
              icon: "Door",
              title: "3. Confirmez et refermez",
              body:
                "Appuyez a nouveau sur le bouton cle, entrez et assurez-vous que la porte se referme bien derriere vous.",
            },
          ],
        },
      },
      mobility: {
        title: "Se deplacer",
        description: "Bus, train aeroport, arrets proches et conseils pratiques.",
        modal: {
          kicker: "Mobilite urbaine",
          title: "Ville, aeroport, parking",
          copy: "Une seule modale peut couvrir tout ce qu'un voyageur doit vraiment savoir en arrivant sans voiture.",
          sections: [
            {
              icon: "Bus",
              title: "Bus du quartier",
              body:
                "Indiquez l'arret le plus proche, les lignes utiles et le prix du billet. Si une app locale est pratique, mentionnez-la ici.",
            },
            {
              icon: "Train",
              title: "Connexion aeroport",
              body:
                "Precisez la frequence du train ou de la navette, la duree du trajet et le nombre de minutes a pied jusqu'a l'appartement.",
              actions: [{ type: "link", labelKey: "stationRoute", href: siteConfig.links.walkingRoute }],
            },
            {
              icon: "Parking",
              title: "Parking",
              body:
                "Expliquez ou se trouvent les places payantes, quand elles s'appliquent et s'il existe des plages gratuites.",
            },
          ],
        },
      },
      map: {
        title: "Carte du quartier",
        description: "Ouvrez les points d'interet ou telechargez une carte PDF officielle.",
      },
      food: {
        title: "Restaurants & aperitif",
        description: "Une selection courte, fiable et bien ordonnee. Mieux vaut peu, mais fort.",
        modal: {
          kicker: "Adresses locales",
          title: "Ou bien manger",
          copy: "Organisez les recommandations par ambiance ou moment de la journee au lieu de listes interminables.",
          sections: [
            {
              icon: "Fish",
              title: "Poisson",
              body:
                "Ajoutez deux ou trois adresses fiables avec une note pratique: reservation, niveau de prix ou plat signature.",
            },
            {
              icon: "Fire",
              title: "Viande et cuisine sarde",
              body:
                "Parfait pour mettre en avant une trattoria plus authentique ou un lieu traditionnel.",
            },
            {
              icon: "Cocktail",
              title: "Aperitif et soiree",
              body:
                "Suggerez un rooftop, un bar a vins et une place animee. Les voyageurs choisissent plus vite quand tout est structure.",
            },
          ],
        },
      },
      trips: {
        title: "Excursions",
        description: "Sorties bateau, plages, journees dehors et activites a reserver.",
      },
      transfer: {
        title: "Transfert prive",
        description: "Si vous travaillez avec un chauffeur, cette carte convertit tres bien.",
        modal: {
          kicker: "Services premium",
          title: "Transfert sur demande",
          copy: "Utilisez cette section pour recommander un partenaire de confiance plutot que laisser le voyageur chercher seul.",
          sections: [
            {
              icon: "Plane",
              title: "Aeroport et port",
              body:
                "Disponible sur demande pour arrivees tardives, departs matinaux et trajets directs porte a porte.",
            },
            {
              icon: "Message",
              title: "Comment reserver",
              body:
                "Demandez un message au moins 24 heures avant avec nombre de personnes, horaire et bagages. Vous pouvez aussi indiquer un prix fixe ici.",
            },
          ],
        },
      },
      rent: {
        title: "Location",
        description: "Voitures, scooters et velos regroupes dans une seule section.",
        modal: {
          kicker: "Move freely",
          title: "Voitures, scooters, velos",
          copy: "Une modale courte et claire permet de presenter les bons partenaires sans surcharger la home.",
          sections: [
            {
              icon: "Car",
              title: "Voitures et scooters",
              body:
                "Utile pour les voyageurs qui veulent quitter le centre ou visiter plusieurs plages le meme jour. Mentionnez la livraison pres du logement si elle existe.",
            },
            {
              icon: "Bike",
              title: "Velos et mobilite legere",
              body:
                "Parfait pour les sejours urbains et courts. Vous pouvez citer la promenade ou des pistes faciles.",
            },
          ],
        },
      },
    },
  },
};

const localeOptions = [
  { code: "it", label: "IT", flag: "🇮🇹", name: "Italiano" },
  { code: "en", label: "EN", flag: "🇬🇧", name: "English" },
  { code: "fr", label: "FR", flag: "🇫🇷", name: "Francais" },
  { code: "de", label: "DE", flag: "🇩🇪", name: "Deutsch" },
  { code: "es", label: "ES", flag: "🇪🇸", name: "Espanol" },
  { code: "pt", label: "PT", flag: "🇵🇹", name: "Portugues" },
  { code: "pl", label: "PL", flag: "🇵🇱", name: "Polski" },
];

function cloneLocale(locale) {
  return structuredClone(locale);
}

function mergeLocale(base, overrides) {
  const output = cloneLocale(base);

  function assign(target, source) {
    Object.entries(source).forEach(([key, value]) => {
      if (Array.isArray(value) || value === null || typeof value !== "object") {
        target[key] = value;
        return;
      }

      if (!target[key] || Array.isArray(target[key]) || typeof target[key] !== "object") {
        target[key] = {};
      }

      assign(target[key], value);
    });
  }

  assign(output, overrides);
  return output;
}

copy.de = mergeLocale(copy.en, {
  languageLabel: "Sprache",
  topbarTagline: "Mehrsprachiger Gast-Guide",
  heroKicker: "Boutique-Aufenthalt im historischen Zentrum",
  heroTitle: "Eine elegante App fuer Ihr Apartment.",
  heroSubtitle:
    "Eine mobile-first Startseite fuer Gaeste: Zugang, Wi-Fi, lokale Tipps, Transfers und Host-Kontakte in einer klaren Erfahrung.",
  heroWelcome:
    "Diese Demo ist vom Referenzprojekt inspiriert, wurde aber sauberer und einfacher anpassbar neu aufgebaut. Alle Inhalte sind datenbasiert, sodass Sie Texte, Nummern und Links ohne Eingriff ins Layout ersetzen koennen.",
  stats: [
    { value: "7", label: "Aktive Sprachen" },
    { value: "9", label: "Servicekarten" },
    { value: "1 Tipp", label: "Um die Hosts zu erreichen" },
  ],
  servicesKicker: "Tippen, scrollen, oeffnen",
  servicesTitle: "Schnelle Tools fuer Gaeste",
  servicesCopy:
    "Jede Karte oeffnet eine nuetzliche Information oder eine direkte Aktion. Die Struktur ist bereit fuer QR-Codes, WhatsApp-Landingpages oder Pre-Check-in-Links.",
  storyKicker: "Kreative Richtung",
  storyTitle: "Warme mediterrane Stimmung, redaktioneller Ton, einfache Interaktionen.",
  storyBody:
    "Die Bildsprache wurde im Vergleich zur Ausgangsversion angehoben: Sand-, Oliv- und Terrakotta-Toene, Serifentypografie fuer Charakter und weiche Komponenten, die auf dem Smartphone gut lesbar bleiben.",
  notesKicker: "Was angepasst werden kann",
  notes: [
    "Ersetzen Sie Unterkunftsname, Adresse, E-Mail und CIN-Code im Block `siteConfig`.",
    "Aktualisieren Sie Host-Nummern, Wi-Fi-Passwort und externe Links direkt in `app.js`.",
    "Weitere Servicekarten koennen ueber das Array `services` und die Inhalte in `copy` ergaenzt werden.",
  ],
  footerCopy: "Gast-Erlebnis fuer Kurzaufenthalte und Ferienunterkuenfte.",
  footerContact: "Hosts kontaktieren",
  contactTitle: "Hosts erreichbar",
  contactCopy: "Klare Bereiche fuer Anruf und WhatsApp mit einem direkten, aber hochwertigen Ton.",
  buttons: {
    open: "Guide oeffnen",
    wifi: "Mit Wi-Fi verbinden",
    copyPassword: "Passwort kopieren",
    mapPrimary: "Karte oeffnen",
    mapSecondary: "PDF herunterladen",
    trips: "Ausfluege ansehen",
    call: "Anrufen",
    whatsapp: "WhatsApp",
    stationRoute: "Route vom Bahnhof",
    copied: "Passwort kopiert",
    dockRules: "Regeln",
    dockWifi: "Wi-Fi",
    dockMap: "Karte",
    dockHost: "Host",
  },
  services: {
    info: {
      title: "Infos & Regeln",
      description: "Check-in, Hausdetails, inklusive Extras und die wichtigsten Regeln.",
      modal: {
        kicker: "Aufenthalts-Guide",
        title: "Wichtige Informationen",
        copy: "Nutzen Sie diesen Bereich, um Informationen zu sammeln, die Sie sonst in mehreren einzelnen Nachrichten senden.",
        sections: [
          {
            icon: "Clock",
            title: "Check-in und Check-out",
            body:
              "Check-in von 15:00 bis 21:30 Uhr. Check-out bis 10:30 Uhr. Wenn Sie Early Check-in oder Late Check-out anbieten, koennen Sie hier Verfuegbarkeit und Gebuehren angeben.",
          },
          {
            icon: "Sparkles",
            title: "Waehrend des Aufenthalts",
            body:
              "Erklaeren Sie kurz, wie die Wohnung beim Verlassen hinterlassen werden soll, wo Strandsets liegen und welche Komfortleistungen inbegriffen sind.",
          },
          {
            icon: "Shield",
            title: "Wichtige Regeln",
            body:
              "Ruhe nach 22:00 Uhr, kein Rauchen innen, Fenster geschlossen halten wenn die Klimaanlage laeuft, Schluessel beim Check-out auf dem Tisch lassen.",
          },
        ],
      },
    },
    wifi: {
      title: "Wi-Fi Passwort",
      description: "Gut lesbare Netzwerkdaten mit direkter Verbindungs- und Kopieraktion.",
      metaLabel: "Passwort",
    },
    door: {
      title: "Zugang zum Gebaeude",
      description: "Kurze und eindeutige Schritte fuer Haustor und Schluesselbox.",
      modal: {
        kicker: "Self Check-in",
        title: "So kommen Sie hinein",
        copy: "Diese Karte reduziert Anrufe bei der Anreise. Halten Sie die Anweisungen extrem kurz.",
        sections: [
          {
            icon: "Hash",
            title: "1. Tastenfeld aktivieren",
            body:
              "Druecken Sie die Taste mit dem Schluesselsymbol, um das Panel zu aktivieren. Wenn das System zuruecksetzt, warten Sie zwei Sekunden und versuchen Sie es erneut.",
          },
          {
            icon: "Lock",
            title: "2. Code eingeben",
            body:
              "Geben Sie den Zugangscode ein, den Sie am Anreisetag senden. Hier koennen Sie auch Hinweise zur Schluesselbox ergaenzen.",
          },
          {
            icon: "Door",
            title: "3. Bestaetigen und schliessen",
            body:
              "Druecken Sie erneut die Schluesseltaste, gehen Sie hinein und pruefen Sie, dass sich die Haustuer hinter Ihnen korrekt schliesst.",
          },
        ],
      },
    },
    mobility: {
      title: "Mobilitaet vor Ort",
      description: "Bus, Flughafenbahn, nahe Haltestellen und praktische Hinweise.",
      modal: {
        kicker: "Unterwegs in der Stadt",
        title: "Stadt, Flughafen, Parken",
        copy: "Ein einziges Modal kann alles abdecken, was ein Gast ohne Auto oder mit leichtem Gepaeck wirklich wissen muss.",
        sections: [
          {
            icon: "Bus",
            title: "Bus im Viertel",
            body:
              "Nennen Sie die naechste Haltestelle, die wichtigen Linien und den Ticketpreis. Wenn es eine hilfreiche lokale App gibt, koennen Sie sie hier nennen.",
          },
          {
            icon: "Train",
            title: "Flughafenverbindung",
            body:
              "Geben Sie an, wie oft Zug oder Shuttle faehrt, wie lange die Fahrt dauert und wie viele Gehminuten bis zum Apartment bleiben.",
            actions: [{ type: "link", labelKey: "stationRoute", href: siteConfig.links.walkingRoute }],
          },
          {
            icon: "Parking",
            title: "Parken",
            body:
              "Erklaeren Sie, wo kostenpflichtige Plaetze sind, wann bezahlt werden muss und ob es kostenlose Zeitfenster gibt. Danach fragen Gaeste fast immer.",
          },
        ],
      },
    },
    map: {
      title: "Karte der Umgebung",
      description: "Wichtige Orte oeffnen oder eine offizielle PDF-Karte herunterladen.",
    },
    food: {
      title: "Restaurants & Bars",
      description: "Eine kurze, glaubwuerdige und gut geordnete Liste lokaler Empfehlungen.",
      modal: {
        kicker: "Lokale Tipps",
        title: "Wo man gut essen kann",
        copy: "Ordnen Sie Empfehlungen lieber nach Stimmung oder Tageszeit statt endlose Listen zu bauen.",
        sections: [
          {
            icon: "Fish",
            title: "Fisch",
            body:
              "Fuegen Sie zwei oder drei verlaessliche Adressen hinzu, plus eine praktische Notiz: Reservierung, Preisniveau oder empfohlenes Gericht.",
          },
          {
            icon: "Fire",
            title: "Fleisch und sardische Kueche",
            body:
              "Ideal, um ein authentischeres Lokal oder eine traditionelle Trattoria hervorzuheben.",
          },
          {
            icon: "Cocktail",
            title: "Aperitivo und Abend",
            body:
              "Empfehlen Sie eine Rooftop-Bar, eine Weinbar und einen lebhaften Platz. Gaeste entscheiden schneller, wenn die Auswahl strukturiert ist.",
          },
        ],
      },
    },
    trips: {
      title: "Ausfluege",
      description: "Bootstouren, Straende, Tagesausfluege und buchbare Aktivitaeten.",
    },
    transfer: {
      title: "Privater Transfer",
      description: "Wenn Sie mit einem Fahrer arbeiten, ist diese Karte ein starker Conversion-Punkt.",
      modal: {
        kicker: "Premium-Services",
        title: "Transfer auf Anfrage",
        copy: "Nutzen Sie diesen Bereich, um einen vertrauenswuerdigen Partner zu empfehlen, statt den Gast allein suchen zu lassen.",
        sections: [
          {
            icon: "Plane",
            title: "Flughafen und Hafen",
            body:
              "Auf Anfrage verfuegbar fuer spaete Ankuenfte, fruehe Abfahrten und direkte Tuer-zu-Tuer-Fahrten.",
          },
          {
            icon: "Message",
            title: "So wird gebucht",
            body:
              "Bitten Sie mindestens 24 Stunden vorher um eine Nachricht mit Personenzahl, Uhrzeit und Gepaeck. Hier kann auch ein Fixpreis stehen.",
          },
        ],
      },
    },
    rent: {
      title: "Vermietung",
      description: "Autos, Roller und Fahrraeder in einem einzigen Bereich.",
      modal: {
        kicker: "Frei bewegen",
        title: "Autos, Roller, Fahrraeder",
        copy: "Ein kurzes klares Modal praesentiert die richtigen Partner, ohne die Startseite zu ueberladen.",
        sections: [
          {
            icon: "Car",
            title: "Autos und Roller",
            body:
              "Nuetzlich fuer Gaeste, die das Zentrum verlassen oder mehrere Straende an einem Tag besuchen moechten. Erwaehnen Sie ggf. die Lieferung in Unterkunftsnaehe.",
          },
          {
            icon: "Bike",
            title: "Fahrraeder und leichte Mobilitaet",
            body:
              "Perfekt fuer urbane Gaeste und kurze Aufenthalte. Sie koennen Uferwege oder einfache Radrouten nennen.",
          },
        ],
      },
    },
  },
});

copy.es = mergeLocale(copy.en, {
  languageLabel: "Idioma",
  topbarTagline: "Guia multilingue para huespedes",
  heroKicker: "Estancia boutique en el centro historico",
  heroTitle: "Una app elegante para tu apartamento.",
  heroSubtitle:
    "Una pagina mobile-first para huespedes: acceso, Wi-Fi, consejos locales, traslados y contactos del anfitrion en una sola experiencia clara.",
  heroWelcome:
    "Esta demo se inspira en el sitio de referencia, pero fue reconstruida de forma mas limpia y facil de personalizar. Todo el contenido esta guiado por datos.",
  stats: [
    { value: "7", label: "Idiomas activos" },
    { value: "9", label: "Tarjetas de servicio" },
    { value: "1 toque", label: "Para contactar a los anfitriones" },
  ],
  servicesKicker: "Toca, desplaza, abre",
  servicesTitle: "Herramientas rapidas para huespedes",
  servicesCopy:
    "Cada tarjeta abre una informacion util o una accion directa. La estructura esta lista para codigos QR, enlaces de WhatsApp o enlaces antes del check-in.",
  storyKicker: "Direccion creativa",
  storyTitle: "Ambiente mediterraneo calido, tono editorial e interacciones simples.",
  storyBody:
    "La calidad visual se reforzo respecto al ejemplo original: paleta arena, oliva y terracota, tipografia serif con caracter y componentes suaves faciles de leer en movil.",
  notesKicker: "Que personalizar",
  notes: [
    "Sustituye nombre del alojamiento, direccion, email y codigo CIN en `siteConfig`.",
    "Actualiza numeros de anfitriones, contrasena Wi-Fi y enlaces externos directamente en `app.js`.",
    "Puedes anadir mas tarjetas ampliando el array `services` y sus contenidos en `copy`.",
  ],
  footerCopy: "Experiencia para estancias cortas y alquiler vacacional.",
  footerContact: "Contactar anfitriones",
  contactTitle: "Anfitriones disponibles",
  contactCopy: "Bloques claros para llamada y WhatsApp con un tono premium pero inmediato.",
  buttons: {
    open: "Abrir guia",
    wifi: "Conectar al Wi-Fi",
    copyPassword: "Copiar contrasena",
    mapPrimary: "Abrir mapa",
    mapSecondary: "Descargar PDF",
    trips: "Ver excursiones",
    call: "Llamar",
    whatsapp: "WhatsApp",
    stationRoute: "Ruta desde la estacion",
    copied: "Contrasena copiada",
    dockRules: "Normas",
    dockWifi: "Wi-Fi",
    dockMap: "Mapa",
    dockHost: "Host",
  },
  services: {
    info: {
      title: "Informacion y normas",
      description: "Check-in, detalles de la casa, extras incluidos y reglas esenciales.",
    },
    wifi: {
      title: "Contrasena Wi-Fi",
      description: "Datos de red legibles con accion para copiar o conectar.",
      metaLabel: "Contrasena",
    },
    door: {
      title: "Acceso al edificio",
      description: "Secuencia breve y clara para portal y caja de llaves.",
    },
    mobility: {
      title: "Movilidad urbana",
      description: "Bus, tren al aeropuerto, paradas cercanas y consejos practicos.",
    },
    map: {
      title: "Mapa del barrio",
      description: "Abre puntos de interes o descarga un mapa PDF oficial.",
    },
    food: {
      title: "Restaurantes y bares",
      description: "Una lista local breve, fiable y bien organizada.",
    },
    trips: {
      title: "Excursiones",
      description: "Paseos en barco, playas, salidas de un dia y actividades reservables.",
    },
    transfer: {
      title: "Traslado privado",
      description: "Si trabajas con un conductor, esta tarjeta convierte muy bien.",
    },
    rent: {
      title: "Alquiler",
      description: "Coches, scooters y bicicletas en una sola seccion.",
    },
  },
});

copy.pt = mergeLocale(copy.en, {
  languageLabel: "Idioma",
  topbarTagline: "Guia multilingue para hospedes",
  heroKicker: "Estadia boutique no centro historico",
  heroTitle: "Uma app elegante para o seu apartamento.",
  heroSubtitle:
    "Uma pagina mobile-first para hospedes: acesso, Wi-Fi, dicas locais, transfers e contactos do anfitriao numa experiencia clara.",
  heroWelcome:
    "Esta demo inspira-se no site de referencia, mas foi reconstruida de forma mais limpa e facil de personalizar. Todo o conteudo e orientado por dados.",
  stats: [
    { value: "7", label: "Idiomas ativos" },
    { value: "9", label: "Cartoes de servico" },
    { value: "1 toque", label: "Para contactar os anfitrioes" },
  ],
  servicesKicker: "Toque, deslize, abra",
  servicesTitle: "Ferramentas rapidas para hospedes",
  servicesCopy:
    "Cada cartao abre uma informacao util ou uma acao direta. A estrutura esta pronta para codigos QR, links do WhatsApp ou links antes do check-in.",
  storyKicker: "Direcao criativa",
  storyTitle: "Ambiente mediterranico quente, tom editorial e interacoes simples.",
  storyBody:
    "A qualidade visual foi elevada em relacao ao exemplo original: paleta areia, oliva e terracota, tipografia serifada com personalidade e componentes suaves para leitura em telemovel.",
  notesKicker: "O que personalizar",
  notes: [
    "Substitua nome da propriedade, morada, email e codigo CIN em `siteConfig`.",
    "Atualize numeros dos anfitrioes, palavra-passe do Wi-Fi e links externos diretamente em `app.js`.",
    "Pode adicionar mais cartoes extendendo o array `services` e os respetivos conteudos em `copy`.",
  ],
  footerCopy: "Experiencia para estadias curtas e alojamento local.",
  footerContact: "Contactar anfitrioes",
  contactTitle: "Anfitrioes disponiveis",
  contactCopy: "Blocos claros para chamada e WhatsApp com um tom premium mas direto.",
  buttons: {
    open: "Abrir guia",
    wifi: "Ligar ao Wi-Fi",
    copyPassword: "Copiar palavra-passe",
    mapPrimary: "Abrir mapa",
    mapSecondary: "Descarregar PDF",
    trips: "Ver excursoes",
    call: "Ligar",
    whatsapp: "WhatsApp",
    stationRoute: "Rota desde a estacao",
    copied: "Palavra-passe copiada",
    dockRules: "Regras",
    dockWifi: "Wi-Fi",
    dockMap: "Mapa",
    dockHost: "Host",
  },
  services: {
    info: {
      title: "Informacoes e regras",
      description: "Check-in, detalhes da casa, extras incluidos e regras essenciais.",
    },
    wifi: {
      title: "Palavra-passe Wi-Fi",
      description: "Dados da rede legiveis com acao para copiar ou ligar.",
      metaLabel: "Palavra-passe",
    },
    door: {
      title: "Acesso ao edificio",
      description: "Sequencia curta e clara para porta principal e caixa de chaves.",
    },
    mobility: {
      title: "Mobilidade urbana",
      description: "Autocarro, comboio para o aeroporto, paragens proximas e dicas praticas.",
    },
    map: {
      title: "Mapa da zona",
      description: "Abra os pontos de interesse ou descarregue um mapa PDF oficial.",
    },
    food: {
      title: "Restaurantes e bares",
      description: "Uma lista local curta, fiavel e bem organizada.",
    },
    trips: {
      title: "Excursoes",
      description: "Passeios de barco, praias, saidas de um dia e atividades para reservar.",
    },
    transfer: {
      title: "Transfer privado",
      description: "Se trabalhar com um motorista, este cartao converte bem.",
    },
    rent: {
      title: "Aluguer",
      description: "Carros, scooters e bicicletas numa unica secao.",
    },
  },
});

copy.pl = mergeLocale(copy.en, {
  languageLabel: "Jezyk",
  topbarTagline: "Wielojezyczny przewodnik dla gosci",
  heroKicker: "Boutique stay w historycznym centrum",
  heroTitle: "Elegancka aplikacja dla Twojego apartamentu.",
  heroSubtitle:
    "Strona mobile-first dla gosci: dostep, Wi-Fi, lokalne wskazowki, transfery i kontakt do gospodarzy w jednym czytelnym miejscu.",
  heroWelcome:
    "Ta wersja jest inspirowana projektem referencyjnym, ale zostala przebudowana tak, aby byla czystsza i latwiejsza do personalizacji. Cala tresc jest oparta na danych.",
  stats: [
    { value: "7", label: "Aktywne jezyki" },
    { value: "9", label: "Karty uslug" },
    { value: "1 klik", label: "Aby skontaktowac sie z gospodarzem" },
  ],
  servicesKicker: "Dotknij, przewin, otworz",
  servicesTitle: "Szybkie narzedzia dla gosci",
  servicesCopy:
    "Kazda karta otwiera przydatna informacje lub szybka akcje. Struktura jest gotowa pod kody QR, linki z WhatsAppa lub link wysylany przed check-inem.",
  storyKicker: "Kierunek kreatywny",
  storyTitle: "Cieply srodziemnomorski klimat, redakcyjny ton i proste interakcje.",
  storyBody:
    "Warstwa wizualna zostala podniesiona wzgledem oryginalu: paleta piasku, oliwki i terakoty, typografia szeryfowa z charakterem oraz miekkie komponenty czytelne na telefonie.",
  notesKicker: "Co mozna dostosowac",
  notes: [
    "Podmien nazwe obiektu, adres, email i kod CIN w `siteConfig`.",
    "Zaktualizuj numery gospodarzy, haslo Wi-Fi i linki zewnetrzne bezposrednio w `app.js`.",
    "Mozesz dodac kolejne karty rozszerzajac tablice `services` i odpowiadajace tresci w `copy`.",
  ],
  footerCopy: "Doswiadczenie goscia dla krotkich pobytow i wynajmu wakacyjnego.",
  footerContact: "Skontaktuj sie z gospodarzami",
  contactTitle: "Gospodarze dostepni",
  contactCopy: "Czytelne bloki dla telefonu i WhatsAppa z bezposrednim, ale premium tonem.",
  buttons: {
    open: "Otworz przewodnik",
    wifi: "Polacz z Wi-Fi",
    copyPassword: "Skopiuj haslo",
    mapPrimary: "Otworz mape",
    mapSecondary: "Pobierz PDF",
    trips: "Zobacz wycieczki",
    call: "Zadzwon",
    whatsapp: "WhatsApp",
    stationRoute: "Trasa z dworca",
    copied: "Haslo skopiowane",
    dockRules: "Zasady",
    dockWifi: "Wi-Fi",
    dockMap: "Mapa",
    dockHost: "Host",
  },
  services: {
    info: {
      title: "Informacje i zasady",
      description: "Check-in, szczegoly domu, dodatki w cenie i najwazniejsze zasady.",
    },
    wifi: {
      title: "Haslo Wi-Fi",
      description: "Czytelne dane sieci z opcja kopiowania lub polaczenia.",
      metaLabel: "Haslo",
    },
    door: {
      title: "Dostep do budynku",
      description: "Krotka i jednoznaczna sekwencja dla bramy i skrytki na klucze.",
    },
    mobility: {
      title: "Komunikacja miejska",
      description: "Autobus, pociag na lotnisko, pobliskie przystanki i praktyczne wskazowki.",
    },
    map: {
      title: "Mapa okolicy",
      description: "Otworz punkty zainteresowania lub pobierz oficjalna mape PDF.",
    },
    food: {
      title: "Restauracje i bary",
      description: "Krotka, wiarygodna i dobrze uporzadkowana lista miejsc.",
    },
    trips: {
      title: "Wycieczki",
      description: "Rejsy, plaze, jednodniowe wypady i aktywnosci do rezerwacji.",
    },
    transfer: {
      title: "Transfer prywatny",
      description: "Jesli wspolpracujesz z kierowca, ta karta dobrze konwertuje.",
    },
    rent: {
      title: "Wynajem",
      description: "Samochody, skutery i rowery w jednej sekcji.",
    },
  },
});

[
  copy.it,
  copy.en,
  copy.fr,
  copy.de,
  copy.es,
  copy.pt,
  copy.pl,
].forEach((locale) => {
  locale.stats[0].value = "7";
});

copy.it.buttons.themeDark = "Modalita notte";
copy.it.buttons.themeLight = "Modalita giorno";
copy.en.buttons.themeDark = "Night mode";
copy.en.buttons.themeLight = "Day mode";
copy.fr.buttons.themeDark = "Mode nuit";
copy.fr.buttons.themeLight = "Mode jour";
copy.de.buttons.themeDark = "Nachtmodus";
copy.de.buttons.themeLight = "Tagesmodus";
copy.es.buttons.themeDark = "Modo nocturno";
copy.es.buttons.themeLight = "Modo diurno";
copy.pt.buttons.themeDark = "Modo noturno";
copy.pt.buttons.themeLight = "Modo diurno";
copy.pl.buttons.themeDark = "Tryb nocny";
copy.pl.buttons.themeLight = "Tryb dzienny";

copy.es = mergeLocale(copy.es, {
  services: {
    info: {
      modal: {
        kicker: "Guia de estancia",
        title: "Informacion esencial",
        copy: "Usa esta seccion para reunir la informacion que hoy sueles enviar en varios mensajes separados.",
        sections: [
          {
            icon: "Clock",
            title: "Check-in y check-out",
            body:
              "Check-in de 15:00 a 21:30. Check-out antes de las 10:30. Si ofreces early check-in o late check-out, puedes indicar aqui disponibilidad y suplemento.",
          },
          {
            icon: "Sparkles",
            title: "Durante la estancia",
            body:
              "Explica de forma breve como dejar la casa al salir, donde estan los accesorios de playa y que comodidades estan incluidas.",
          },
          {
            icon: "Shield",
            title: "Normas importantes",
            body:
              "Silencio despues de las 22:00, no fumar dentro, mantener las ventanas cerradas cuando el aire acondicionado este encendido y dejar las llaves sobre la mesa al salir.",
          },
        ],
      },
    },
    door: {
      modal: {
        kicker: "Self check-in",
        title: "Como entrar",
        copy: "Esta tarjeta reduce llamadas durante la llegada. Manten las instrucciones muy cortas.",
        sections: [
          {
            icon: "Hash",
            title: "1. Activa el teclado",
            body:
              "Pulsa el boton con el icono de llave para activar el panel. Si el sistema se reinicia, espera dos segundos y vuelve a intentarlo.",
          },
          {
            icon: "Lock",
            title: "2. Introduce el codigo",
            body:
              "Escribe el codigo de acceso que envias el dia de llegada. Aqui tambien puedes anadir instrucciones para la caja de llaves.",
          },
          {
            icon: "Door",
            title: "3. Confirma y cierra",
            body:
              "Pulsa otra vez el boton de llave, entra y asegurate de que la puerta principal se cierre bien detras de ti.",
          },
        ],
      },
    },
    mobility: {
      modal: {
        kicker: "Moverse por la ciudad",
        title: "Ciudad, aeropuerto, aparcamiento",
        copy: "Un solo modal puede cubrir todo lo que un huesped realmente necesita saber si llega sin coche o quiere moverse ligero.",
        sections: [
          {
            icon: "Bus",
            title: "Bus del barrio",
            body:
              "Indica la parada mas cercana, las lineas utiles y el precio del billete. Si hay una app local recomendable, puedes mencionarla aqui.",
          },
          {
            icon: "Train",
            title: "Conexion con el aeropuerto",
            body:
              "Especifica cada cuanto sale el tren o el shuttle, cuanto dura el trayecto y cuantos minutos a pie quedan hasta el apartamento.",
            actions: [{ type: "link", labelKey: "stationRoute", href: siteConfig.links.walkingRoute }],
          },
          {
            icon: "Parking",
            title: "Aparcamiento",
            body:
              "Explica donde estan las plazas de pago, cuando se paga y si existen franjas gratuitas. Es una de las preguntas mas frecuentes.",
          },
        ],
      },
    },
    food: {
      modal: {
        kicker: "Recomendaciones locales",
        title: "Donde comer bien",
        copy: "Organiza las recomendaciones por ambiente o momento del dia en lugar de crear listas interminables.",
        sections: [
          {
            icon: "Fish",
            title: "Pescado",
            body:
              "Anade dos o tres sitios fiables junto con una nota util: si conviene reservar, rango de precio o plato destacado.",
          },
          {
            icon: "Fire",
            title: "Carne y cocina sarda",
            body:
              "Ideal para destacar un sitio mas autentico o una trattoria tradicional con cocina local.",
          },
          {
            icon: "Cocktail",
            title: "Aperitivo y noche",
            body:
              "Sugiere un rooftop, un wine bar y una plaza animada. Los huespedes deciden antes cuando las opciones estan claras.",
          },
        ],
      },
    },
    transfer: {
      modal: {
        kicker: "Servicios premium",
        title: "Traslado bajo peticion",
        copy: "Usa esta seccion para recomendar un socio de confianza en vez de dejar al huesped buscando por su cuenta.",
        sections: [
          {
            icon: "Plane",
            title: "Aeropuerto y puerto",
            body:
              "Disponible bajo reserva para llegadas tardias, salidas muy tempranas y trayectos puerta a puerta.",
          },
          {
            icon: "Message",
            title: "Como reservar",
            body:
              "Pide un mensaje al menos 24 horas antes con numero de personas, hora y equipaje. Aqui tambien puedes indicar un precio fijo.",
          },
        ],
      },
    },
    rent: {
      modal: {
        kicker: "Moverse con libertad",
        title: "Coches, scooters y bicis",
        copy: "Un modal breve y claro permite presentar los socios adecuados sin sobrecargar la home.",
        sections: [
          {
            icon: "Car",
            title: "Coches y scooters",
            body:
              "Util para huespedes que quieren salir del centro o visitar varias playas en un dia. Menciona si hay entrega cerca del alojamiento.",
          },
          {
            icon: "Bike",
            title: "Bicis y movilidad ligera",
            body:
              "Perfecto para huespedes urbanos y estancias cortas. Puedes mencionar paseos junto al mar o rutas faciles en bici.",
          },
        ],
      },
    },
  },
});

copy.pt = mergeLocale(copy.pt, {
  services: {
    info: {
      modal: {
        kicker: "Guia da estadia",
        title: "Informacao essencial",
        copy: "Use esta secao para reunir a informacao que hoje costuma enviar em varias mensagens separadas.",
        sections: [
          {
            icon: "Clock",
            title: "Check-in e check-out",
            body:
              "Check-in das 15:00 as 21:30. Check-out ate as 10:30. Se oferecer early check-in ou late check-out, pode indicar aqui disponibilidade e suplemento.",
          },
          {
            icon: "Sparkles",
            title: "Durante a estadia",
            body:
              "Explique de forma breve como deixar a casa ao sair, onde estao os acessorios de praia e quais comodidades estao incluidas.",
          },
          {
            icon: "Shield",
            title: "Regras importantes",
            body:
              "Silencio apos as 22:00, nao fumar no interior, manter as janelas fechadas quando o ar condicionado estiver ligado e deixar as chaves sobre a mesa na partida.",
          },
        ],
      },
    },
    door: {
      modal: {
        kicker: "Self check-in",
        title: "Como entrar",
        copy: "Este cartao reduz chamadas no momento da chegada. Mantenha as instrucoes muito curtas.",
        sections: [
          {
            icon: "Hash",
            title: "1. Ative o teclado",
            body:
              "Prima o botao com o icone de chave para ativar o painel. Se o sistema reiniciar, espere dois segundos e tente de novo.",
          },
          {
            icon: "Lock",
            title: "2. Introduza o codigo",
            body:
              "Introduza o codigo de acesso enviado no dia da chegada. Aqui tambem pode acrescentar instrucoes para a caixa de chaves.",
          },
          {
            icon: "Door",
            title: "3. Confirme e feche",
            body:
              "Prima novamente o botao da chave, entre e confirme que a porta principal fica bem fechada atras de si.",
          },
        ],
      },
    },
    mobility: {
      modal: {
        kicker: "Mover-se na cidade",
        title: "Cidade, aeroporto, estacionamento",
        copy: "Um unico modal pode cobrir tudo o que um hospede realmente precisa de saber se chega sem carro ou quer circular de forma leve.",
        sections: [
          {
            icon: "Bus",
            title: "Autocarro do bairro",
            body:
              "Indique a paragem mais proxima, as linhas uteis e o preco do bilhete. Se houver uma app local recomendada, pode menciona-la aqui.",
          },
          {
            icon: "Train",
            title: "Ligacao ao aeroporto",
            body:
              "Indique com que frequencia sai o comboio ou shuttle, quanto dura a viagem e quantos minutos a pe faltam ate ao apartamento.",
            actions: [{ type: "link", labelKey: "stationRoute", href: siteConfig.links.walkingRoute }],
          },
          {
            icon: "Parking",
            title: "Estacionamento",
            body:
              "Explique onde ficam os lugares pagos, em que horarios se paga e se existem periodos gratuitos. E uma pergunta muito frequente.",
          },
        ],
      },
    },
    food: {
      modal: {
        kicker: "Sugestoes locais",
        title: "Onde comer bem",
        copy: "Organize as recomendacoes por ambiente ou momento do dia em vez de criar listas interminaveis.",
        sections: [
          {
            icon: "Fish",
            title: "Peixe",
            body:
              "Adicione dois ou tres sitios de confianca, juntamente com uma nota util: se convem reservar, faixa de preco ou prato em destaque.",
          },
          {
            icon: "Fire",
            title: "Carne e cozinha sarda",
            body:
              "Perfeito para destacar um lugar mais autentico ou uma trattoria tradicional com cozinha local.",
          },
          {
            icon: "Cocktail",
            title: "Aperitivo e noite",
            body:
              "Sugira um rooftop, um wine bar e uma praca animada. Os hospedes decidem mais depressa quando as opcoes estao bem estruturadas.",
          },
        ],
      },
    },
    transfer: {
      modal: {
        kicker: "Servicos premium",
        title: "Transfer sob pedido",
        copy: "Use esta secao para recomendar um parceiro de confianca em vez de deixar o hospede procurar sozinho.",
        sections: [
          {
            icon: "Plane",
            title: "Aeroporto e porto",
            body:
              "Disponivel mediante reserva para chegadas tardias, partidas de madrugada e trajetos porta a porta.",
          },
          {
            icon: "Message",
            title: "Como reservar",
            body:
              "Peca uma mensagem com pelo menos 24 horas de antecedencia com numero de pessoas, horario e bagagem. Aqui tambem pode indicar um preco fixo.",
          },
        ],
      },
    },
    rent: {
      modal: {
        kicker: "Mover-se com liberdade",
        title: "Carros, scooters e bicicletas",
        copy: "Um modal curto e claro permite apresentar os parceiros certos sem sobrecarregar a pagina inicial.",
        sections: [
          {
            icon: "Car",
            title: "Carros e scooters",
            body:
              "Util para hospedes que querem sair do centro ou visitar varias praias no mesmo dia. Refira se existe entrega perto do alojamento.",
          },
          {
            icon: "Bike",
            title: "Bicicletas e mobilidade leve",
            body:
              "Perfeito para hospedes urbanos e estadias curtas. Pode mencionar percursos junto ao mar ou rotas de bicicleta simples.",
          },
        ],
      },
    },
  },
});

copy.pl = mergeLocale(copy.pl, {
  services: {
    info: {
      modal: {
        kicker: "Przewodnik pobytu",
        title: "Najwazniejsze informacje",
        copy: "W tej sekcji zbierzesz informacje, ktore zwykle wysylasz gosciom w kilku osobnych wiadomosciach.",
        sections: [
          {
            icon: "Clock",
            title: "Check-in i check-out",
            body:
              "Check-in od 15:00 do 21:30. Check-out do 10:30. Jesli oferujesz early check-in lub late check-out, tutaj mozesz podac dostepnosc i ewentualna oplata.",
          },
          {
            icon: "Sparkles",
            title: "Podczas pobytu",
            body:
              "Krotko wyjasnij, jak zostawic mieszkanie przy wychodzeniu, gdzie znajduja sie akcesoria plazowe i jakie udogodnienia sa w cenie.",
          },
          {
            icon: "Shield",
            title: "Wazne zasady",
            body:
              "Cisza po 22:00, zakaz palenia wewnatrz, zamkniete okna przy wlaczonej klimatyzacji oraz zostawienie kluczy na stole przy wyjezdzie.",
          },
        ],
      },
    },
    door: {
      modal: {
        kicker: "Self check-in",
        title: "Jak wejsc",
        copy: "Ta karta ogranicza telefony przy przyjezdzie. Instrukcje powinny byc bardzo krotkie.",
        sections: [
          {
            icon: "Hash",
            title: "1. Aktywuj klawiature",
            body:
              "Nacisnij przycisk z ikona klucza, aby aktywowac panel. Jesli system sie zresetuje, odczekaj dwie sekundy i sprobuj ponownie.",
          },
          {
            icon: "Lock",
            title: "2. Wpisz kod",
            body:
              "Wpisz kod dostepu wysylany w dniu przyjazdu. W tym miejscu mozesz tez dodac instrukcje do skrytki na klucze.",
          },
          {
            icon: "Door",
            title: "3. Potwierdz i zamknij",
            body:
              "Nacisnij ponownie przycisk klucza, wejdz i upewnij sie, ze drzwi glowne poprawnie zamknely sie za Toba.",
          },
        ],
      },
    },
    mobility: {
      modal: {
        kicker: "Poruszanie sie po miescie",
        title: "Miasto, lotnisko, parking",
        copy: "Jedno okno modalne moze zawierac wszystko, co gosc naprawde musi wiedziec, jesli przyjezdza bez auta lub chce poruszac sie lekko.",
        sections: [
          {
            icon: "Bus",
            title: "Autobus w okolicy",
            body:
              "Podaj najblizszy przystanek, przydatne linie i cene biletu. Jesli jest polecana lokalna aplikacja, mozesz ja tu dodac.",
          },
          {
            icon: "Train",
            title: "Polaczenie z lotniskiem",
            body:
              "Wpisz, jak czesto kursuje pociag lub shuttle, ile trwa przejazd i ile minut pieszo zostaje do apartamentu.",
            actions: [{ type: "link", labelKey: "stationRoute", href: siteConfig.links.walkingRoute }],
          },
          {
            icon: "Parking",
            title: "Parking",
            body:
              "Wyjasnij, gdzie sa miejsca platne, w jakich godzinach obowiazuje oplata i czy sa darmowe przedzialy czasowe. Goscie prawie zawsze o to pytaja.",
          },
        ],
      },
    },
    food: {
      modal: {
        kicker: "Lokalne rekomendacje",
        title: "Gdzie dobrze zjesc",
        copy: "Lepiej uporzadkowac rekomendacje wedlug klimatu lub pory dnia niz budowac bardzo dlugie listy.",
        sections: [
          {
            icon: "Fish",
            title: "Ryby",
            body:
              "Dodaj dwie lub trzy sprawdzone miejscowki oraz praktyczna uwage: czy warto rezerwowac, jaki jest poziom cen lub jakie danie warto wybrac.",
          },
          {
            icon: "Fire",
            title: "Mieso i kuchnia sardynska",
            body:
              "To dobre miejsce, by polecic bardziej autentyczny lokal albo tradycyjna trattorie z lokalna kuchnia.",
          },
          {
            icon: "Cocktail",
            title: "Aperitivo i wieczor",
            body:
              "Zaproponuj rooftop, wine bar i zywy plac. Goscie szybciej podejmuja decyzje, gdy opcje sa jasno uporzadkowane.",
          },
        ],
      },
    },
    transfer: {
      modal: {
        kicker: "Uslugi premium",
        title: "Transfer na zyczenie",
        copy: "W tej sekcji mozesz polecic zaufanego partnera zamiast zostawiac goscia samemu sobie.",
        sections: [
          {
            icon: "Plane",
            title: "Lotnisko i port",
            body:
              "Dostepne na rezerwacje dla poznych przylotow, wczesnych wyjazdow i przejazdow door-to-door.",
          },
          {
            icon: "Message",
            title: "Jak zarezerwowac",
            body:
              "Popros o wiadomosc co najmniej 24 godziny wczesniej z liczba osob, godzina i bagazem. Tutaj mozesz tez podac cene stala.",
          },
        ],
      },
    },
    rent: {
      modal: {
        kicker: "Podrozuj swobodnie",
        title: "Samochody, skutery i rowery",
        copy: "Krotki i czytelny modal pozwala pokazac odpowiednich partnerow bez przeciazania strony glownej.",
        sections: [
          {
            icon: "Car",
            title: "Samochody i skutery",
            body:
              "Przydatne dla gosci, ktorzy chca wyjechac poza centrum lub odwiedzic kilka plaz jednego dnia. Wspomnij, jesli mozliwa jest dostawa blisko obiektu.",
          },
          {
            icon: "Bike",
            title: "Rowery i lekka mobilnosc",
            body:
              "Idealne dla miejskich gosci i krotkich pobytow. Mozesz wskazac trasy nad morzem lub latwe sciezki rowerowe.",
          },
        ],
      },
    },
  },
});

const localizedChips = {
  info: { de: "Stay", es: "Estancia", pt: "Estadia", pl: "Pobyt" },
  wifi: { de: "Online", es: "Online", pt: "Online", pl: "Online" },
  door: { de: "Zugang", es: "Acceso", pt: "Acesso", pl: "Dostep" },
  mobility: { de: "Stadt", es: "Ciudad", pt: "Cidade", pl: "Miasto" },
  map: { de: "Entdecken", es: "Explorar", pt: "Explorar", pl: "Odkryj" },
  food: { de: "Food", es: "Comida", pt: "Food", pl: "Jedzenie" },
  trips: { de: "Outdoor", es: "Outdoor", pt: "Outdoor", pl: "Plener" },
  transfer: { de: "Transfer", es: "Transfer", pt: "Transfer", pl: "Transfer" },
  rent: { de: "Rental", es: "Alquiler", pt: "Aluguer", pl: "Wynajem" },
};

services.forEach((service) => Object.assign(service.chip, localizedChips[service.id] ?? {}));

const iconPaths = {
  House: '<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/>',
  Wifi: '<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.3" fill="currentColor" stroke="none"/>',
  Key: '<circle cx="8" cy="14" r="4"/><path d="M11.5 14H21"/><path d="M18 14v-2.5"/><path d="M15 14v2.5"/>',
  Train: '<rect x="6" y="3" width="12" height="13" rx="3"/><path d="M8 19l-2 2"/><path d="M18 19l2 2"/><path d="M8 8h8"/><path d="M9 12h.01"/><path d="M15 12h.01"/>',
  Compass: '<circle cx="12" cy="12" r="8.5"/><path d="M14.8 9.2l-1.8 5.6-5.6 1.8 1.8-5.6 5.6-1.8z"/>',
  Glass: '<path d="M7 4h10"/><path d="M8.2 4l1 8.2a3 3 0 0 0 2.98 2.6h0a3 3 0 0 0 2.98-2.6L16 4"/><path d="M12 14.8V21"/>',
  Wave: '<path d="M3 15c2.5 0 2.5-6 5-6s2.5 6 5 6 2.5-6 5-6 2.5 6 5 6"/><path d="M3 20c2.5 0 2.5-6 5-6s2.5 6 5 6 2.5-6 5-6 2.5 6 5 6"/>',
  Car: '<path d="M5 16l1.4-5a2 2 0 0 1 1.9-1.5h7.4a2 2 0 0 1 1.9 1.5L19 16"/><path d="M4 16h16v3H4z"/><circle cx="7.5" cy="19.2" r="1.3"/><circle cx="16.5" cy="19.2" r="1.3"/>',
  Bike: '<circle cx="6" cy="17" r="3.5"/><circle cx="18" cy="17" r="3.5"/><path d="M9.5 17l3-6 2.2 6"/><path d="M10.5 8h3"/><path d="M12.2 11H8l2 6"/><path d="M15 10h4"/>',
  Clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5l3.2 2"/>',
  Sparkles: '<path d="M12 4l1.3 3.7L17 9l-3.7 1.3L12 14l-1.3-3.7L7 9l3.7-1.3L12 4z"/><path d="M19 14l.7 2 .3.1L22 17l-2 .9-.3.1L19 20l-.7-2-.3-.1L16 17l2-.9.3-.1L19 14z"/><path d="M5 14l.6 1.7L7.3 16l-1.7.6L5 18.3l-.6-1.7L2.7 16l1.7-.3L5 14z"/>',
  Shield: '<path d="M12 3l7 3v5c0 4.5-2.8 8.4-7 10-4.2-1.6-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
  Hash: '<path d="M9 3L7 21"/><path d="M17 3l-2 18"/><path d="M4 9h16"/><path d="M3 15h16"/>',
  Lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 1 1 8 0v3"/>',
  Door: '<path d="M6 4h10a2 2 0 0 1 2 2v14H6z"/><path d="M10 4v16"/><path d="M13.8 12h.01"/>',
  Bus: '<rect x="5" y="4" width="14" height="13" rx="3"/><path d="M8 17l-1.5 3"/><path d="M16 17l1.5 3"/><path d="M8 8h8"/><path d="M8.8 12h.01"/><path d="M15.2 12h.01"/>',
  Parking: '<path d="M7 21V4h5.5a4 4 0 0 1 0 8H7"/><path d="M7 12h5"/>',
  Fish: '<path d="M4 12s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5z"/><path d="M20 12l2-2v4l-2-2z"/><circle cx="10" cy="11" r="0.8" fill="currentColor" stroke="none"/>',
  Fire: '<path d="M12 3c2.2 2 4 4.6 4 7.3A4 4 0 1 1 8 12c0-1.8.8-3.3 2-4.8.4 1.6 1.2 2.8 2 3.6.8-1.5 1.1-3.6 0-7.8z"/><path d="M12 13c1.1.9 1.8 1.8 1.8 3a1.8 1.8 0 1 1-3.6 0c0-.8.5-1.6 1.8-3z"/>',
  Cocktail: '<path d="M5 5h14l-6 7v5l2 2H9l2-2v-5L5 5z"/><path d="M8 20h8"/>',
  Plane: '<path d="M3 13l18-6-6 14-2-6-6-2z"/><path d="M13 15l8-8"/>',
  Message: '<path d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/>',
  Phone: '<path d="M7 4h4l1 4-2.2 1.8a14 14 0 0 0 4.4 4.4L16 12l4 1v4a2 2 0 0 1-2.2 2A17 17 0 0 1 5 6.2 2 2 0 0 1 7 4z"/>',
  Copy: '<rect x="9" y="9" width="10" height="10" rx="2"/><path d="M7 15H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"/>',
  Route: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h4a4 4 0 0 0 4-4V8"/>',
  File: '<path d="M8 3h6l5 5v13H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v6h6"/><path d="M10 14h6"/><path d="M10 18h4"/>',
  Moon: '<path d="M20 14.5A7.5 7.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z"/>',
  Sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2.5"/><path d="M12 19.5V22"/><path d="M4.9 4.9l1.8 1.8"/><path d="M17.3 17.3l1.8 1.8"/><path d="M2 12h2.5"/><path d="M19.5 12H22"/><path d="M4.9 19.1l1.8-1.8"/><path d="M17.3 6.7l1.8-1.8"/>',
  Contact: '<path d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M5 20a7 7 0 0 1 14 0"/>',
};

const actionIcons = {
  info: "House",
  wifi: "Wifi",
  door: "Key",
  mobility: "Bus",
  map: "Compass",
  food: "Cocktail",
  trips: "Wave",
  transfer: "Car",
  rent: "Bike",
  contact: "Contact",
  copy: "Copy",
  call: "Phone",
  whatsapp: "Message",
  route: "Route",
  pdf: "File",
  themeDark: "Moon",
  themeLight: "Sun",
};

const tileIcons = {
  wifi: "📶",
  info: "📋",
  food: "🍽️",
  mobility: "🚌",
  transfer: "🧳",
  map: "🗺️",
  rent: "🚗",
  trips: "🏖️",
  door: "🔑",
};

const themeStorageKey = "stampace-theme";

const state = {
  lang: "it",
  theme: getInitialTheme(),
};

const dom = {
  langSwitch: document.querySelector("#lang-switch"),
  themeToggle: document.querySelector("#theme-toggle"),
  heroCard: document.querySelector("#hero-card"),
  heroTagline: document.querySelector("#hero-tagline"),
  heroKicker: document.querySelector("#hero-kicker"),
  heroTitle: document.querySelector("#hero-title"),
  heroSubtitle: document.querySelector("#hero-subtitle"),
  heroAddress: document.querySelector("#hero-address"),
  heroMail: document.querySelector("#hero-mail"),
  heroLicense: document.querySelector("#hero-license"),
  heroWelcome: document.querySelector("#hero-welcome"),
  statOneValue: document.querySelector("#stat-one-value"),
  statOneLabel: document.querySelector("#stat-one-label"),
  statTwoValue: document.querySelector("#stat-two-value"),
  statTwoLabel: document.querySelector("#stat-two-label"),
  statThreeValue: document.querySelector("#stat-three-value"),
  statThreeLabel: document.querySelector("#stat-three-label"),
  servicesKicker: document.querySelector("#services-kicker"),
  servicesTitle: document.querySelector("#services-title"),
  servicesCopy: document.querySelector("#services-copy"),
  serviceGrid: document.querySelector("#service-grid"),
  areaTitle: document.querySelector("#area-title"),
  areaCopy: document.querySelector("#area-copy"),
  areaMap: document.querySelector("#area-map"),
  mapPills: document.querySelector("#map-pills"),
  mapList: document.querySelector("#map-list"),
  storyKicker: document.querySelector("#story-kicker"),
  storyTitle: document.querySelector("#story-title"),
  storyBody: document.querySelector("#story-body"),
  notesKicker: document.querySelector("#notes-kicker"),
  notesList: document.querySelector("#notes-list"),
  footerCopy: document.querySelector("#footer-copy"),
  footerContact: document.querySelector("#footer-contact"),
  quickDock: document.querySelector("#quick-dock"),
  modal: document.querySelector("#modal"),
  modalClose: document.querySelector("#modal-close"),
  modalIcon: document.querySelector("#modal-icon"),
  modalKicker: document.querySelector("#modal-kicker"),
  modalTitle: document.querySelector("#modal-title"),
  modalCopy: document.querySelector("#modal-copy"),
  modalBody: document.querySelector("#modal-body"),
};

function getInitialTheme() {
  const storedTheme = window.localStorage.getItem(themeStorageKey);
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function renderIcon(name, className = "icon-svg") {
  const path = iconPaths[name] ?? iconPaths.Sparkles;
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}

function applyTheme() {
  document.body.dataset.theme = state.theme;
}

function renderLanguageSwitch() {
  const label = copy[state.lang].languageLabel;
  dom.langSwitch.innerHTML = `
    <label class="lang-select-shell" aria-label="${label}">
      <span class="lang-select-current" aria-hidden="true">${localeOptions.find((language) => language.code === state.lang)?.flag ?? "🌐"}</span>
      <select class="lang-select" id="lang-select">
        ${localeOptions
          .map(
            (language) => `
              <option value="${language.code}" ${language.code === state.lang ? "selected" : ""}>
                ${language.name}
              </option>
            `,
          )
          .join("")}
      </select>
      <span class="lang-select-caret" aria-hidden="true">v</span>
    </label>
  `;

  const select = dom.langSwitch.querySelector("#lang-select");
  if (select instanceof HTMLSelectElement) {
    select.addEventListener("change", () => {
      const currentScrollY = window.scrollY;
      state.lang = select.value;
      renderPage();
      requestAnimationFrame(() => {
        window.scrollTo(0, currentScrollY);
      });
    });
  }
}

function renderThemeToggle() {
  const buttons = copy[state.lang].buttons;
  const nextTheme = state.theme === "dark" ? "light" : "dark";
  const label = nextTheme === "dark" ? buttons.themeDark : buttons.themeLight;
  const iconName = nextTheme === "dark" ? actionIcons.themeDark : actionIcons.themeLight;

  dom.themeToggle.innerHTML = `<span class="theme-toggle-icon" aria-hidden="true">${renderIcon(iconName, "button-glyph")}</span>`;
  dom.themeToggle.setAttribute("aria-label", label);
  dom.themeToggle.setAttribute("title", label);
}

function renderQuickDock() {
  const buttons = copy[state.lang].buttons;
  dom.quickDock.innerHTML = `
    <button class="dock-button" type="button" data-open-modal="info">
      <em class="button-icon" aria-hidden="true">${renderIcon(actionIcons.info, "button-glyph")}</em>
      <strong>${buttons.dockRules}</strong>
      <span>${buttons.open}</span>
    </button>
    <button class="dock-button" type="button" data-copy-wifi="true">
      <em class="button-icon" aria-hidden="true">${renderIcon(actionIcons.wifi, "button-glyph")}</em>
      <strong>${buttons.dockWifi}</strong>
      <span>${buttons.copyPassword}</span>
    </button>
    <a class="dock-button" href="${siteConfig.links.cityMap}" target="_blank" rel="noreferrer">
      <em class="button-icon" aria-hidden="true">${renderIcon(actionIcons.map, "button-glyph")}</em>
      <strong>${buttons.dockMap}</strong>
      <span>${buttons.mapPrimary}</span>
    </a>
    <button class="dock-button" type="button" data-scroll-contact="true">
      <em class="button-icon" aria-hidden="true">${renderIcon(actionIcons.contact, "button-glyph")}</em>
      <strong>${buttons.dockHost}</strong>
      <span>${buttons.call}</span>
    </button>
  `;
}

function getServiceCopy(serviceId) {
  return copy[state.lang].services[serviceId];
}

function getLocalizedText(localized, key, fallback = "") {
  return localized?.[key] ?? copy.en?.[key] ?? fallback;
}

function renderButtonLabel(iconName, label) {
  return `<span class="button-label"><em class="button-icon" aria-hidden="true">${renderIcon(iconName, "button-glyph")}</em><span>${label}</span></span>`;
}

function serviceActions(service) {
  const texts = copy[state.lang].buttons;

  if (service.id === "wifi") {
    return `
      <button class="cta-button" type="button" data-connect-wifi="true">${renderButtonLabel(actionIcons.wifi, texts.wifi)}</button>
      <button class="secondary-button" type="button" data-copy-wifi="true">${renderButtonLabel(actionIcons.copy, texts.copyPassword)}</button>
    `;
  }

  if (service.id === "map") {
    return `
      <a class="cta-button" href="${siteConfig.links.cityMap}" target="_blank" rel="noreferrer">${renderButtonLabel(actionIcons.map, texts.mapPrimary)}</a>
      <a class="secondary-button" href="${siteConfig.links.cityGuidePdf}" target="_blank" rel="noreferrer">${renderButtonLabel(actionIcons.pdf, texts.mapSecondary)}</a>
    `;
  }

  if (service.id === "trips") {
    return `
      <a class="cta-button" href="${siteConfig.links.excursions}" target="_blank" rel="noreferrer">${renderButtonLabel(actionIcons.trips, texts.trips)}</a>
    `;
  }

  return `
    <button class="cta-button" type="button" data-open-modal="${service.id}">${renderButtonLabel(actionIcons[service.id], texts.open)}</button>
  `;
}

function runServiceAction(serviceId) {
  if (serviceId === "wifi") {
    copyWifiPassword();
    return;
  }

  if (serviceId === "map") {
    scrollToMapSection();
    return;
  }

  if (serviceId === "trips") {
    window.open(siteConfig.links.excursions, "_blank", "noreferrer");
    return;
  }

  openModal(serviceId);
}

function renderServices() {
  dom.serviceGrid.innerHTML = "";

  services.forEach((service) => {
    const localized = getServiceCopy(service.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `service-tile ${service.tone ?? "tone-orange"}`;
    button.dataset.serviceId = service.id;
    button.setAttribute("aria-label", localized.title);
    button.innerHTML = `
      <div class="service-tile-icon" aria-hidden="true"><span class="tile-emoji">${tileIcons[service.id] ?? "✨"}</span></div>
      <div class="service-tile-copy">
        <h3>${localized.title}</h3>
      </div>
    `;
    dom.serviceGrid.append(button);
  });
}

function renderContactCard() {
  const localized = copy[state.lang];
  const article = document.createElement("article");
  article.className = "contact-card";

  const peopleMarkup = siteConfig.brand.contacts
    .map(
      (person) => `
        <div class="contact-person">
          <div>
            <span class="contact-name">${person.name}</span>
            <span class="contact-role">${person.role}</span>
          </div>
          <div class="contact-actions">
            <a class="ghost-button" href="tel:${person.phone}">${renderButtonLabel(actionIcons.call, localized.buttons.call)}</a>
            <a class="cta-button" href="${person.whatsapp}" target="_blank" rel="noreferrer">${renderButtonLabel(actionIcons.whatsapp, localized.buttons.whatsapp)}</a>
          </div>
        </div>
      `,
    )
    .join("");

  article.innerHTML = `
    <div class="service-top">
      <div class="service-icon" aria-hidden="true">${renderIcon("Contact", "service-glyph")}</div>
      <div class="service-chip">24/7</div>
    </div>
    <h3>${localized.contactTitle}</h3>
    <p>${localized.contactCopy}</p>
    <div class="contact-leads">${peopleMarkup}</div>
  `;

  return article;
}

function renderNotes() {
  dom.notesList.innerHTML = copy[state.lang].notes.map((item) => `<li>${item}</li>`).join("");
}

function renderAreaSection() {
  const localized = copy[state.lang];
  dom.areaTitle.textContent = getLocalizedText(localized, "areaTitle", "Mappa dei dintorni");
  dom.areaCopy.textContent = getLocalizedText(
    localized,
    "areaCopy",
    "L'alloggio e i punti consigliati nelle vicinanze.",
  );
  dom.areaMap.src = siteConfig.areaMapEmbed;

  const filters = getLocalizedText(localized, "areaFilters", ["Tutti", "Ristorante", "Bar", "Spiagge"]);
  dom.mapPills.innerHTML = filters
    .map(
      (filter, index) =>
        `<span class="map-pill ${index === 0 ? "is-active" : ""}">${filter}</span>`,
    )
    .join("");

  dom.mapList.innerHTML = siteConfig.areaPoints
    .map(
      (point) => `
        <a class="map-point-card" href="${point.href}" target="_blank" rel="noreferrer">
          <span class="map-point-icon" aria-hidden="true">${point.icon}</span>
          <span class="map-point-copy">
            <strong>${point.title}</strong>
            <small>${point.meta}</small>
          </span>
        </a>
      `,
    )
    .join("");
}

function modalSectionActions(actions = []) {
  if (!actions.length) {
    return "";
  }

  const buttons = copy[state.lang].buttons;
  const links = actions
    .filter((action) => action.type === "link")
    .map(
      (action) => `
        <a class="ghost-button" href="${action.href}" target="_blank" rel="noreferrer">
          ${renderButtonLabel(actionIcons.route, buttons[action.labelKey])}
        </a>
      `,
    )
    .join("");

  return links ? `<div class="modal-inline-actions">${links}</div>` : "";
}

function openModal(serviceId) {
  const serviceCopy = getServiceCopy(serviceId);
  const service = services.find((item) => item.id === serviceId);
  const modal = serviceCopy.modal;

  if (!modal || !service) {
    return;
  }

  dom.modalIcon.innerHTML = renderIcon(service.icon, "modal-glyph");
  dom.modalKicker.textContent = modal.kicker;
  dom.modalTitle.textContent = modal.title;
  dom.modalCopy.textContent = modal.copy;
  dom.modalBody.innerHTML = modal.sections
    .map(
      (section) => `
        <section class="modal-section">
          <div class="modal-section-header">
            <div class="modal-section-badge" aria-hidden="true">${renderIcon(section.icon, "badge-glyph")}</div>
            <h4>${section.title}</h4>
          </div>
          <p>${section.body}</p>
          ${modalSectionActions(section.actions)}
        </section>
      `,
    )
    .join("");

  dom.modal.classList.remove("hidden");
  dom.modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  dom.modal.classList.add("hidden");
  dom.modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.append(toast);
  window.setTimeout(() => toast.remove(), 1800);
}

async function copyWifiPassword() {
  try {
    await navigator.clipboard.writeText(siteConfig.brand.wifi.password);
    showToast(copy[state.lang].buttons.copied);
  } catch {
    showToast(siteConfig.brand.wifi.password);
  }
}

function connectWifi() {
  window.location.href = siteConfig.brand.wifi.qr;
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  window.localStorage.setItem(themeStorageKey, state.theme);
  applyTheme();
  renderThemeToggle();
}

function scrollToContact() {
  const contactCard = document.querySelector(".contact-card");
  if (contactCard) {
    contactCard.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const primaryHost = siteConfig.brand.contacts[0];
  if (primaryHost?.whatsapp) {
    window.open(primaryHost.whatsapp, "_blank", "noreferrer");
  }
}

function scrollToMapSection() {
  const mapSection = document.querySelector("#map-section");
  if (mapSection) {
    mapSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderPage() {
  const localized = copy[state.lang];

  document.documentElement.lang = state.lang;
  document.title = `${siteConfig.brand.name} | ${localized.topbarTagline}`;
  dom.heroCard.style.backgroundImage = "";
  dom.heroCard.classList.add("hero-brick");

  applyTheme();
  renderLanguageSwitch();
  renderThemeToggle();

  dom.heroKicker.textContent = "";
  dom.heroTitle.textContent = "Stampace Charming";
  dom.heroSubtitle.textContent = "Luxury apartment";
  dom.heroAddress.textContent = siteConfig.brand.address;
  dom.heroMail.textContent = siteConfig.brand.email;
  dom.heroLicense.textContent = siteConfig.brand.license;
  dom.heroWelcome.textContent = "";

  dom.statOneValue.textContent = localized.stats[0].value;
  dom.statOneLabel.textContent = localized.stats[0].label;
  dom.statTwoValue.textContent = localized.stats[1].value;
  dom.statTwoLabel.textContent = localized.stats[1].label;
  dom.statThreeValue.textContent = localized.stats[2].value;
  dom.statThreeLabel.textContent = localized.stats[2].label;

  dom.servicesKicker.textContent = localized.servicesKicker;
  dom.servicesTitle.textContent = localized.servicesTitle;
  dom.servicesCopy.textContent = localized.servicesCopy;

  dom.storyKicker.textContent = localized.storyKicker;
  dom.storyTitle.textContent = localized.storyTitle;
  dom.storyBody.textContent = localized.storyBody;

  dom.notesKicker.textContent = localized.notesKicker;
  dom.footerCopy.textContent = localized.footerCopy;
  dom.footerContact.textContent = localized.footerContact;
  dom.footerContact.onclick = () => {
    scrollToContact();
  };

  renderQuickDock();
  renderServices();
  renderAreaSection();
  renderNotes();
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const modalTrigger = target.closest("[data-open-modal]");
  if (modalTrigger instanceof HTMLElement) {
    openModal(modalTrigger.dataset.openModal);
    return;
  }

  const serviceTile = target.closest("[data-service-id]");
  if (serviceTile instanceof HTMLElement) {
    runServiceAction(serviceTile.dataset.serviceId);
    return;
  }

  if (target.closest("[data-copy-wifi='true']")) {
    copyWifiPassword();
    return;
  }

  if (target.closest("[data-connect-wifi='true']")) {
    connectWifi();
    return;
  }

  if (target.closest("[data-scroll-contact='true']")) {
    scrollToContact();
    return;
  }

  if (target.dataset.close === "true") {
    closeModal();
  }
});

dom.modalClose.addEventListener("click", closeModal);
dom.themeToggle.addEventListener("click", toggleTheme);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !dom.modal.classList.contains("hidden")) {
    closeModal();
  }
});

renderPage();
