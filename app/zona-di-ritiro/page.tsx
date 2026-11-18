import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceArea from "@/components/ServiceArea";
import { serviceAreas } from "@/lib/areas";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Zona di Ritiro Rottami in Piemonte",
  description:
    "Area di servizio per ritiro e recupero di rottami metallici: Asti, Nizza Monferrato, Canelli, Acqui Terme, Incisa Scapaccino, Calamandrana e Costigliole d'Asti.",
  alternates: { canonical: "/zona-di-ritiro" },
  openGraph: {
    title: "Zona di Ritiro Rottami in Piemonte | BOCH FERRO ROTTAMI",
    description:
      "Scopri le aree servite per il ritiro di rottami metallici e recupero ferro in Piemonte.",
    url: "/zona-di-ritiro",
    locale: "it_IT",
    type: "website",
    siteName: business.name,
    images: [{ url: "/images/hero/boch-hero.webp", alt: "Area di servizio per il ritiro rottami" }]
  }
};

const faqs = [
  { q: "Ritirate rottami in tutte le zone del Piemonte?", a: "Operiamo principalmente nelle aree indicate in questa pagina e nei comuni limitrofi. Per una località diversa, indicacela nella richiesta: verifichiamo la disponibilità in base al materiale." },
  { q: "Posso chiedere il ritiro del ferro ad Asti o a Nizza Monferrato?", a: "Sì. Sono tra le aree indicate per il servizio. Indica comune, tipo di materiale e quantità indicativa nel modulo di contatto o su WhatsApp." },
  { q: "Lavorate con aziende agricole della zona?", a: "Sì. Cascine, aziende agricole e attività legate al territorio rientrano tra i clienti per cui organizziamo il ritiro di rottami metallici." },
  { q: "Come verifico se il mio comune è servito?", a: "Scrivici il nome del comune e una breve descrizione del materiale: ti risponderemo con le informazioni disponibili sulla disponibilità del servizio." }
];

export default function ZonaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ritiro e recupero rottami metallici in Piemonte",
    description: business.description,
    provider: { "@type": "Organization", name: business.name, url: business.siteUrl },
    areaServed: business.areas.map((name) => ({ "@type": "City", name })),
    url: `${business.siteUrl.replace(/\/$/, "")}/zona-di-ritiro`
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Zona di ritiro" }]} />
      <div>
        <section className="container-boch py-16 sm:py-24">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Servizio locale</p>
          <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">ZONA DI SERVIZIO</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
            Operiamo principalmente in Piemonte, con particolare riferimento all&apos;area astigiana. Il servizio riguarda ritiro, recupero e commercio di rottami ferrosi e metalli non ferrosi per privati e aziende.
          </p>
        </section>

        <ServiceArea />

        <section className="container-boch py-16 sm:py-20">
          <h2 className="yellow-line text-3xl font-black uppercase sm:text-4xl">Le aree che serviamo</h2>
          <p className="mt-6 max-w-3xl leading-7 text-white/65">
            Per ogni area indicata è possibile richiedere informazioni su ritiro di rottami, recupero ferro e metalli o vendita di materiale. La disponibilità viene verificata caso per caso in base al materiale descritto.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area, index) => (
              <article key={area.slug} className="border border-white/10 bg-[#111111] p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-black uppercase">{area.name}</h3>
                  <span className="text-sm font-black text-[#ffc400]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/65">{area.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-black uppercase">
                  <Link href="/servizi/ritiro-rottami-privati" className="focus-ring text-[#ffc400] hover:text-white">Ritiro privati</Link>
                  <Link href="/servizi/ritiro-rottami-aziende" className="focus-ring text-[#ffc400] hover:text-white">Ritiro aziende</Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-white/60">
            <MapPin className="shrink-0 text-[#ffc400]" size={17} aria-hidden="true" />
            Comuni limitrofi: indicaci la tua località per verificare la disponibilità.
          </p>
        </section>

        <section className="border-y border-white/10 bg-[#0b0b0b] py-16">
          <div className="container-boch grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Ricerche locali</p>
              <h2 className="yellow-line mt-3 text-3xl font-black uppercase sm:text-4xl">Metalli e rottami nella tua zona</h2>
              <p className="mt-6 leading-7 text-white/65">
                Che tu cerchi recupero ferro ad Asti, ritiro rottami a Nizza Monferrato o vendita rottami in Piemonte, il primo passo è descrivere il materiale: tipo, quantità e comune.
              </p>
              <Link href="/contatti" className="focus-ring mt-7 inline-flex min-h-12 items-center gap-2 bg-[#ffc400] px-6 font-black text-black hover:bg-white">
                RICHIEDI INFORMAZIONI <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Rottami metallici Asti", "/contatti"],
                ["Recupero ferro Asti", "/materiali/ferro"],
                ["Ritiro rottami Nizza Monferrato", "/servizi/ritiro-rottami-privati"],
                ["Recupero metalli Nizza Monferrato", "/servizi/recupero-selezione-metalli"],
                ["Ritiro ferro Acqui Terme", "/servizi/ritiro-rottami-privati"],
                ["Rottami metallici Canelli", "/servizi/ritiro-rottami-aziende-agricole"]
              ].map(([label, href]) => (
                <Link key={label} href={href} className="focus-ring flex items-center justify-between gap-3 border border-white/10 bg-[#111111] p-5 text-sm font-black uppercase transition hover:border-[#ffc400] hover:text-[#ffc400]">
                  {label} <ArrowRight size={16} className="shrink-0 text-[#ffc400]" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container-boch py-16">
          <h2 className="text-3xl font-black uppercase sm:text-4xl">Domande sulla zona di servizio</h2>
          <div className="mt-9 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-[#111111]">
                <summary className="focus-ring cursor-pointer list-none px-5 py-5 font-black uppercase marker:hidden">
                  <span className="flex items-center justify-between gap-6">
                    {faq.q}
                    <span className="text-2xl text-[#ffc400] transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="max-w-4xl px-5 pb-6 text-sm leading-7 text-white/65">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
