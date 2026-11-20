# BOCH FERRO ROTTAMI

Sito vetrina Next.js per il recupero, la raccolta, la selezione e l'acquisto di rottami metallici.

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS v4
- lucide-react
- nodemailer per il modulo contatti
- Google Tag Manager (`GTM-N3MXCJDG`)

## Avvio locale

```bash
npm install
cp .env.example .env.local
npm run dev
```

http://localhost:3000

## Configurazione

Valori richiesti in `.env.local`:

| Variabile | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pubblico: canonical, sitemap, JSON-LD, Open Graph |
| `NEXT_PUBLIC_PHONE_NUMBER` | Numero reale per pulsante chiamata; se contiene `X` il pulsante non viene mostrato |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Numero reale per WhatsApp; se contiene `X` il pulsante non viene mostrato |
| `NEXT_PUBLIC_EMAIL` | Email pubblica mostrata nei contatti |
| `CONTACT_TO_EMAIL` | Destinatario delle richieste del modulo |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` | Invio email del modulo (SMTP_PASS obbligatorio) |

⚠️ Con valori segnaposto (`X`, `example.it`, SMTP_PASS vuoto) i pulsanti di contatto vengono nascosti e il modulo restituisce errore 503: è il comportamento atteso finché la configurazione reale non viene inserita.

## Struttura dei contenuti

- `lib/constants.ts` — dati aziendali, materiali, slide hero
- `lib/services.ts` — servizi e contenuto delle pagine `/servizi/[slug]`
- `lib/materialDetails.ts` — contenuto delle pagine `/materiali/[slug]`
- `lib/areas.ts` — aree servite, usate da `/zona-di-ritiro` e Footer
- `lib/faqs.ts` — FAQ globali raggruppate per argomento
- `lib/blog.ts` — 5 articoli statici (nessun CMS) usati da `/blog` e `/blog/[slug]`
- `lib/gtm.ts` + `components/GoogleTagManager.tsx` — installazione GTM
- `components/Breadcrumbs.tsx` — breadcrumb visivo e JSON-LD BreadcrumbList

## Pagine

- `/` — homepage con link ai servizi principali
- `/servizi` e 6 pagine servizio:
  - `/servizi/ritiro-rottami-privati`
  - `/servizi/ritiro-rottami-aziende`
  - `/servizi/ritiro-rottami-aziende-agricole`
  - `/servizi/ritiro-rottami-cantieri`
  - `/servizi/recupero-selezione-metalli`
  - `/servizi/acquisto-rottami-metallici`
- `/materiali` + 6 schede materiale (`/materiali/[slug]`)
- `/faq` — domande frequenti con FAQPage JSON-LD
- `/blog` + 5 articoli statici:
  - `/blog/preparare-rottami-per-il-ritiro`
  - `/blog/riconoscere-i-metalli-da-recuperare`
  - `/blog/rottami-in-azienda-officine-e-cantieri`
  - `/blog/recupero-metalli-e-economia-circolare`
  - `/blog/vendere-rottami-in-piemonte`
- `/aziende`, `/zona-di-ritiro`, `/contatti`, `/privacy`, `/cookie-policy`
- `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`

## Google Tag Manager

GTM è installato una sola volta in `app/layout.tsx`:

- dataLayer inizializzato prima degli altri script
- `gtm.js` caricato in modo asincrono dopo l'idratazione
- `<noscript>` subito dopo l'apertura di `<body>`

Il modulo contatto invia l'evento `generate_lead` al dataLayer dopo un invio riuscito. Configura i tag di Google Ads/Analytics direttamente nel container GTM.

## Verifiche

```bash
npm run build
```

Il build genera le pagine statiche e valida i tipi. Prima della pubblicazione verificare:

1. Valori reali in `.env.local` (sito, telefono, WhatsApp, SMTP).
2. Testo legale delle pagine privacy/cookie con un consulente.
3. Configurazione del consenso per i tag che installano cookie nel container GTM.
4. Immagini e foto definitive dei servizi.

Non sono state inventate autorizzazioni, certificazioni, prezzi, indirizzi, orari, numeri di telefono o recensioni.
