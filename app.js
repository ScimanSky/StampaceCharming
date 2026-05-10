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
};

const services = [
  {
    id: "info",
    icon: "House",
    chip: { it: "Stay", en: "Stay", fr: "Sejour" },
    accent: "modal",
  },
  {
    id: "wifi",
    icon: "Wifi",
    chip: { it: "Online", en: "Online", fr: "Online" },
    accent: "wifi",
  },
  {
    id: "door",
    icon: "Key",
    chip: { it: "Accesso", en: "Access", fr: "Acces" },
    accent: "modal",
  },
  {
    id: "mobility",
    icon: "Train",
    chip: { it: "City", en: "City", fr: "Ville" },
    accent: "modal",
  },
  {
    id: "map",
    icon: "Compass",
    chip: { it: "Explore", en: "Explore", fr: "Explore" },
    accent: "links",
  },
  {
    id: "food",
    icon: "Glass",
    chip: { it: "Food", en: "Food", fr: "Food" },
    accent: "modal",
  },
  {
    id: "trips",
    icon: "Wave",
    chip: { it: "Outdoor", en: "Outdoor", fr: "Outdoor" },
    accent: "links",
  },
  {
    id: "transfer",
    icon: "Car",
    chip: { it: "Transfer", en: "Transfer", fr: "Transfer" },
    accent: "modal",
  },
  {
    id: "rent",
    icon: "Bike",
    chip: { it: "Rental", en: "Rental", fr: "Rental" },
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
        title: "Mobilita' urbana",
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
        description: "Boat tour, spiagge, giornate fuori porta e attività da prenotare.",
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

const icons = {
  House: "Casa",
  Wifi: "Wi-Fi",
  Key: "Key",
  Train: "Train",
  Compass: "Map",
  Glass: "Food",
  Wave: "Sea",
  Car: "Car",
  Bike: "Bike",
  Clock: "Time",
  Sparkles: "Plus",
  Shield: "Rules",
  Hash: "Code",
  Lock: "Lock",
  Door: "Door",
  Bus: "Bus",
  Parking: "Park",
  Fish: "Fish",
  Fire: "Food",
  Cocktail: "Bar",
  Plane: "Fly",
  Message: "Chat",
};

const actionIcons = {
  info: "🏠",
  wifi: "📶",
  door: "🚪",
  mobility: "🚌",
  map: "🗺️",
  food: "🍽️",
  trips: "⛵",
  transfer: "🚐",
  rent: "🛵",
  contact: "📞",
  copy: "⧉",
  call: "☎",
  whatsapp: "💬",
  route: "📍",
  pdf: "📄",
};

const state = {
  lang: "it",
};

const dom = {
  langSwitch: document.querySelector("#lang-switch"),
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

function renderLanguageSwitch() {
  const label = copy[state.lang].languageLabel;
  const languages = [
    { code: "it", label: "IT" },
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
  ];

  dom.langSwitch.innerHTML = "";

  languages.forEach((language) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = language.label;
    button.setAttribute("aria-label", `${label} ${language.label}`);
    button.className = language.code === state.lang ? "active" : "";
    button.addEventListener("click", () => {
      state.lang = language.code;
      renderPage();
    });
    dom.langSwitch.append(button);
  });
}

function renderQuickDock() {
  const buttons = copy[state.lang].buttons;
  dom.quickDock.innerHTML = `
    <button class="dock-button" type="button" data-open-modal="info">
      <em class="button-icon" aria-hidden="true">${actionIcons.info}</em>
      <strong>${buttons.dockRules}</strong>
      <span>${buttons.open}</span>
    </button>
    <button class="dock-button" type="button" data-copy-wifi="true">
      <em class="button-icon" aria-hidden="true">${actionIcons.wifi}</em>
      <strong>${buttons.dockWifi}</strong>
      <span>${buttons.copyPassword}</span>
    </button>
    <a class="dock-button" href="${siteConfig.links.cityMap}" target="_blank" rel="noreferrer">
      <em class="button-icon" aria-hidden="true">${actionIcons.map}</em>
      <strong>${buttons.dockMap}</strong>
      <span>${buttons.mapPrimary}</span>
    </a>
    <button class="dock-button" type="button" data-scroll-contact="true">
      <em class="button-icon" aria-hidden="true">${actionIcons.contact}</em>
      <strong>${buttons.dockHost}</strong>
      <span>${buttons.call}</span>
    </button>
  `;
}

function getServiceCopy(serviceId) {
  return copy[state.lang].services[serviceId];
}

function renderButtonLabel(icon, label) {
  return `<span class="button-label"><em class="button-icon" aria-hidden="true">${icon}</em><span>${label}</span></span>`;
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

function renderServices() {
  dom.serviceGrid.innerHTML = "";

  services.forEach((service) => {
    const localized = getServiceCopy(service.id);
    const article = document.createElement("article");
    article.className = "service-card";
    article.innerHTML = `
      <div class="service-top">
        <div class="service-icon" aria-hidden="true">${icons[service.icon]}</div>
        <div class="service-chip">${service.chip[state.lang]}</div>
      </div>
      <h3>${localized.title}</h3>
      <p>${localized.description}</p>
      ${
        service.id === "wifi"
          ? `
            <div class="service-meta">
              <strong>${localized.metaLabel}</strong>
              <span>${siteConfig.brand.wifi.password}</span>
            </div>
          `
          : ""
      }
      <div class="service-actions">${serviceActions(service)}</div>
    `;
    dom.serviceGrid.append(article);
  });

  dom.serviceGrid.append(renderContactCard());
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
      <div class="service-icon" aria-hidden="true">Host</div>
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

  dom.modalIcon.textContent = icons[service.icon];
  dom.modalKicker.textContent = modal.kicker;
  dom.modalTitle.textContent = modal.title;
  dom.modalCopy.textContent = modal.copy;
  dom.modalBody.innerHTML = modal.sections
    .map(
      (section) => `
        <section class="modal-section">
          <div class="modal-section-header">
            <div class="modal-section-badge" aria-hidden="true">${icons[section.icon]}</div>
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

function scrollToContact() {
  const contactCard = document.querySelector(".contact-card");
  if (contactCard) {
    contactCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function renderPage() {
  const localized = copy[state.lang];

  document.documentElement.lang = state.lang;
  document.title = `${siteConfig.brand.name} | ${localized.topbarTagline}`;

  renderLanguageSwitch();

  dom.heroTagline.textContent = localized.topbarTagline;
  dom.heroKicker.textContent = localized.heroKicker;
  dom.heroTitle.textContent = localized.heroTitle;
  dom.heroSubtitle.textContent = localized.heroSubtitle;
  dom.heroAddress.textContent = siteConfig.brand.address;
  dom.heroMail.textContent = siteConfig.brand.email;
  dom.heroLicense.textContent = siteConfig.brand.license;
  dom.heroWelcome.textContent = localized.heroWelcome;

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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !dom.modal.classList.contains("hidden")) {
    closeModal();
  }
});

renderPage();
