import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { business } from "@/lib/constants";
import { allFaqs, faqGroups } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ - Domande Frequenti su Rottami e Ritiri",
  description:
    "Risposte alle domande frequenti su ritiro rottami, materiali metallici, recupero, zone servite e richiesta di informazioni per aziende e privati.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ - Domande Frequenti | BOCH FERRO ROTTAMI",
    description:
      "Tutte le risposte utili su servizi, materiali, ritiri e area di servizio.",
    url: "/faq",
    locale: "it_IT",
    type: "website",
    siteName: business.name,
    images: [{ url: "/images/hero/boch-hero.webp", alt: "Domande frequenti sui rottami metallici" }]
  }
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Domande frequenti",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

      <section className="metal-noise border-b border-white/10">
        <div className="container-boch py-14 sm:py-20">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Informazioni utili</p>
          <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">FAQ</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            Domande frequenti sui servizi di {business.name}: ritiro e recupero dei rottami, materiali trattati, zone servite e modalità di contatto.
          </p>
        </div>
      </section>

      <nav aria-label="Indice delle domande" className="border-b border-white/10 bg-[#0a0a0a]">
        <div className="container-boch flex flex-wrap gap-x-6 gap-y-2 py-5 text-sm font-black uppercase">
          {faqGroups.map((group) => (
            <a key={group.id} href={`#${group.id}`} className="focus-ring text-[#ffc400] hover:text-white">
              {group.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-boch py-12 sm:py-16">
        {faqGroups.map((group, index) => (
          <section key={group.id} id={group.id} className="mb-16 scroll-mt-24 last:mb-0">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffc400]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="yellow-line mt-2 text-3xl font-black uppercase sm:text-4xl">{group.title}</h2>
                <p className="mt-4 max-w-2xl leading-7 text-white/65">{group.description}</p>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-black">
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="focus-ring text-[#ffc400] hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <FAQ items={group.items} />
            </div>
          </section>
        ))}

        <div className="mt-14 grid gap-5 border-t border-white/10 pt-12 sm:grid-cols-2">
          <div className="border border-white/10 bg-[#111111] p-6">
            <h2 className="text-2xl font-black uppercase">Non hai trovato la risposta?</h2>
            <p className="mt-4 text-sm leading-7 text-white/65">
              Descrivici il materiale, il comune e la quantità indicativa: ti risponderemo con le informazioni disponibili.
            </p>
            <Link href="/contatti" className="focus-ring mt-6 inline-flex min-h-12 items-center gap-2 bg-[#ffc400] px-6 font-black text-black hover:bg-white">
              CONTATTACI <ArrowRight size={18} />
            </Link>
          </div>
          <div className="border border-white/10 bg-[#111111] p-6">
            <h2 className="text-2xl font-black uppercase">Approfondisci</h2>
            <ul className="mt-5 grid gap-3 text-sm font-black uppercase">
              <li><Link href="/servizi" className="focus-ring text-[#ffc400] hover:text-white">Servizi di recupero e ritiro</Link></li>
              <li><Link href="/materiali" className="focus-ring text-[#ffc400] hover:text-white">Materiali metallici trattati</Link></li>
              <li><Link href="/blog" className="focus-ring text-[#ffc400] hover:text-white">Guide e articoli</Link></li>
              <li><Link href="/zona-di-ritiro" className="focus-ring text-[#ffc400] hover:text-white">Zona di servizio</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
