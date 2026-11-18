import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali per il sito di BOCH FERRO ROTTAMI: dati raccolti tramite modulo di contatto e strumenti di misurazione.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true }
};

const sections = [
  {
    title: "Titolare del trattamento",
    body: (
      <>
        <p>
          Il titolare del trattamento dei dati raccolti tramite questo sito è {business.name}. Per qualsiasi richiesta relativa ai tuoi dati personali puoi utilizzare i canali indicati nella{" "}
          <Link href="/contatti" className="focus-ring font-black text-[#ffc400] hover:text-white">pagina contatti</Link>.
        </p>
      </>
    )
  },
  {
    title: "Dati raccolti",
    body: (
      <>
        <p>Tramite il modulo di contatto raccogliamo esclusivamente le informazioni che decidiamo di inserire:</p>
        <ul className="mt-4 grid gap-2 pl-5">
          {["Nome e azienda", "Telefono ed email", "Comune", "Servizio e materiale di interesse", "Quantità indicativa e messaggio"].map((item) => (
            <li key={item} className="list-disc">{item}</li>
          ))}
        </ul>
        <p className="mt-4">L&apos;eventuale campo &ldquo;website&rdquo; è un controllo anti-spam e non viene utilizzato per identificare le persone.</p>
      </>
    )
  },
  {
    title: "Finalità e base giuridica",
    body: (
      <p>
        I dati vengono trattati per rispondere alle richieste di informazioni, valutare il materiale descritto e organizzare, se possibile, il ritiro dei rottami. La base giuridica è l&apos;interesse legittimo a gestire le richieste ricevute e, ove applicabile, l&apos;esecuzione di misure precontrattuali richieste dall&apos;interessato.
      </p>
    )
  },
  {
    title: "Destinatari dei dati",
    body: (
      <p>
        Le informazioni del modulo vengono inviate all&apos;indirizzo email configurato per la gestione delle richieste, tramite un servizio SMTP. Il sito utilizza Google Tag Manager per caricare eventuali strumenti di misurazione e pubblicità: tali strumenti sono gestiti tramite il container GTM e possono trattare dati secondo le rispettive informative.
      </p>
    )
  },
  {
    title: "Conservazione",
    body: (
      <p>
        I dati sono conservati per il tempo necessario a rispondere alla richiesta e a gestire l&apos;eventuale rapporto commerciale, salvo obblighi di conservazione previsti dalla legge.
      </p>
    )
  },
  {
    title: "Diritti dell'interessato",
    body: (
      <>
        <p>
          Puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilità dei dati e opporti al trattamento, oltre a proporre reclamo all&apos;Autorità Garante per la protezione dei dati personali. Per esercitare questi diritti usa i canali della{" "}
          <Link href="/contatti" className="focus-ring font-black text-[#ffc400] hover:text-white">pagina contatti</Link>.
        </p>
      </>
    )
  },
  {
    title: "Cookie e misurazione",
    body: (
      <p>
        Il codice del sito non installa cookie di profilazione. Il container Google Tag Manager può caricare strumenti di terze parti; maggiori informazioni sono nella{" "}
        <Link href="/cookie-policy" className="focus-ring font-black text-[#ffc400] hover:text-white">Cookie Policy</Link>.
      </p>
    )
  }
];

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <div className="container-boch py-14 sm:py-20">
        <h1 className="yellow-line text-4xl font-black uppercase sm:text-6xl">PRIVACY POLICY</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
          Questa informativa descrive come vengono trattati i dati personali inviati tramite il sito di {business.name}.
        </p>
        <div className="mt-12 grid max-w-4xl gap-10">
          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="text-2xl font-black uppercase"><span className="text-[#ffc400]">{String(index + 1).padStart(2, "0")}. </span>{section.title}</h2>
              <div className="mt-4 space-y-4 leading-8 text-white/65">{section.body}</div>
            </section>
          ))}
        </div>
        <p className="mt-12 max-w-3xl text-sm leading-6 text-white/60">
          Le informazioni vengono aggiornate in caso di modifiche al sito o ai servizi utilizzati.
        </p>
      </div>
    </>
  );
}
