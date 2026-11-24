import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { business } from "@/lib/constants";
import { materialDetails } from "@/lib/materialDetails";
import { services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return business.materials.map((material) => ({ slug: material.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const material = business.materials.find((item) => item.slug === slug);
  if (!material) return { title: "Materiale non trovato" };

  const title = `Recupero ${material.name} | BOCH FERRO`;
  const description = `${material.description} Ritiro, recupero e commercio di ${material.name.toLowerCase()} in Piemonte con BOCH FERRO ROTTAMI.`;

  return pageMeta({
    title,
    description,
    path: `/materiali/${material.slug}`,
    image: `/images/og/materiali/${material.slug}.webp`,
    imageAlt: `Recupero di ${material.name.toLowerCase()}`
  });
}

export default async function MaterialDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const material = business.materials.find((item) => item.slug === slug);
  const detail = materialDetails[slug];
  if (!material || !detail) notFound();

  const relatedServices = detail.relatedServices
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Recupero ${material.name}`,
    description: detail.intro,
    serviceType: `Ritiro e recupero di ${material.name.toLowerCase()}`,
    provider: { "@type": "Organization", name: business.name, url: business.siteUrl },
    areaServed: business.areas.map((name) => ({ "@type": "City", name })),
    url: `${business.siteUrl.replace(/\/$/, "")}/materiali/${material.slug}`
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Materiali", href: "/materiali" },
          { label: material.name }
        ]}
      />

      <div className="container-boch py-14 sm:py-20">
        <Link href="/materiali" className="focus-ring inline-flex items-center gap-2 text-sm font-black text-[#ffc400]">
          <ArrowLeft size={17} /> TORNA AI MATERIALI
        </Link>
        <p className="mt-10 text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Materiale</p>
        <h1 className="yellow-line mt-3 max-w-4xl text-5xl font-black uppercase sm:text-7xl">
          Recupero {material.name}
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-8 text-white/75">{detail.intro}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href={`/contatti?materiale=${encodeURIComponent(material.name)}`} className="focus-ring inline-flex min-h-14 items-center gap-2 bg-[#ffc400] px-7 font-black text-black transition hover:bg-white">
            RICHIEDI UN RITIRO <ArrowRight size={18} />
          </Link>
          <Link href="/servizi" className="focus-ring inline-flex min-h-14 items-center gap-2 border border-white/25 px-7 font-black transition hover:border-[#ffc400] hover:text-[#ffc400]">
            TUTTI I SERVIZI
          </Link>
        </div>
      </div>

      <section className="border-y border-white/10 bg-[#0b0b0b] py-16">
        <div className="container-boch grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black uppercase sm:text-4xl">Cosa ritiriamo</h2>
            <ul className="mt-7 grid gap-3">
              {detail.sources.map((source) => (
                <li key={source} className="flex gap-3 border-b border-white/10 pb-3 text-base leading-7 text-white/75">
                  <Check className="mt-1.5 shrink-0 text-[#ffc400]" size={18} aria-hidden="true" />
                  {source}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-black uppercase sm:text-4xl">A chi rivolge il servizio</h2>
            <p className="mt-7 leading-7 text-white/70">
              Il recupero di {material.name.toLowerCase()} è pensato per chiunque abbia materiale metallico da gestire: privati, attività produttive, cantieri e realtà agricole dell&apos;area servita.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {detail.who.map((item) => (
                <li key={item} className="border border-[#ffc400]/40 px-4 py-2 text-sm font-black uppercase text-[#ffc400]">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-boch py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr]">
          <div>
            <h2 className="yellow-line text-3xl font-black uppercase sm:text-4xl">Come avviene il recupero</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70">{detail.recovery}</p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/60">
              Per organizzare il ritiro indicaci comune, quantità indicativa e condizioni del materiale: verifichiamo insieme la disponibilità nel territorio servito.
            </p>
          </div>
          <aside className="h-fit border border-white/10 bg-[#111111] p-7">
            <p className="text-xs font-black uppercase tracking-widest text-[#ffc400]">Servizi collegati</p>
            <ul className="mt-5 grid gap-4">
              {relatedServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/servizi/${service.slug}`} className="focus-ring inline-flex items-start gap-2 text-sm font-black uppercase leading-6 text-white transition hover:text-[#ffc400]">
                    <ArrowRight className="mt-1 shrink-0 text-[#ffc400]" size={16} aria-hidden="true" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b] py-16">
        <div className="container-boch">
          <h2 className="text-3xl font-black uppercase sm:text-4xl">Domande frequenti su {material.name.toLowerCase()}</h2>
          <div className="mt-9 divide-y divide-white/10 border-y border-white/10">
            {detail.faqs.map((faq) => (
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
        </div>
      </section>

      <section className="bg-[#ffc400] py-12 text-black">
        <div className="container-boch flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-black uppercase sm:text-4xl">Hai {material.name.toLowerCase()} da ritirare?</h2>
            <p className="mt-2 max-w-2xl font-bold">Scrivici quantità indicativa e comune per ricevere informazioni sul ritiro.</p>
          </div>
          <Link href={`/contatti?materiale=${encodeURIComponent(material.name)}`} className="focus-ring inline-flex min-h-14 shrink-0 items-center gap-2 bg-black px-7 font-black text-[#ffc400] transition hover:bg-white hover:text-black">
            CONTATTACI <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
