import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight, MapPin } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { business } from "@/lib/constants";
import { getService, services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Servizio non trovato" };

  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/servizi/${service.slug}`,
    image: `/images/og/servizi/${service.slug}.webp`,
    imageAlt: service.imageAlt
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.intro.join(" "),
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: business.name,
      url: business.siteUrl
    },
    areaServed: business.areas.map((name) => ({ "@type": "City", name })),
    url: `${business.siteUrl.replace(/\/$/, "")}/servizi/${service.slug}`
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Servizi", href: "/servizi" },
          { label: service.title }
        ]}
      />

      <section className="metal-noise border-b border-white/10">
        <div className="container-boch grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">{service.eyebrow}</p>
            <h1 className="yellow-line mt-3 max-w-3xl text-4xl font-black uppercase leading-[1.02] sm:text-6xl">
              {service.h1}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{service.shortDescription}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={`/contatti?servizio=${service.slug}`}
                className="focus-ring inline-flex min-h-14 items-center gap-2 bg-[#ffc400] px-7 font-black text-black transition hover:bg-white"
              >
                RICHIEDI INFORMAZIONI <ArrowRight size={19} />
              </Link>
              <Link
                href="/servizi"
                className="focus-ring inline-flex min-h-14 items-center gap-2 border border-white/25 px-7 font-black text-white transition hover:border-[#ffc400] hover:text-[#ffc400]"
              >
                TUTTI I SERVIZI
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#111111]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-boch py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_.6fr]">
          <div>
            <h2 className="text-3xl font-black uppercase sm:text-4xl">Il servizio</h2>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-white/70">
              {service.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <aside className="h-fit border border-white/10 bg-[#111111] p-7">
            <p className="text-xs font-black uppercase tracking-widest text-[#ffc400]">Materiali principali</p>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/70">
              {service.materials.slice(0, 3).map((material) => (
                <li key={material} className="flex gap-3">
                  <Check className="mt-1 shrink-0 text-[#ffc400]" size={17} aria-hidden="true" />
                  {material}
                </li>
              ))}
            </ul>
            <Link href="/contatti" className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-black text-[#ffc400] hover:text-white">
              PARLIAMONE <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b] py-16">
        <div className="container-boch">
          <h2 className="yellow-line text-3xl font-black uppercase sm:text-4xl">Cosa trattiamo</h2>
          <p className="mt-5 max-w-3xl leading-7 text-white/65">
            Materiali e oggetti che rientrano in questo servizio. Per tipologie diverse, descrivici il materiale nella richiesta.
          </p>
          <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.materials.map((material) => (
              <li key={material} className="flex items-start gap-3 border border-white/10 bg-[#111111] p-5 text-sm font-bold leading-6">
                <Check className="mt-0.5 shrink-0 text-[#ffc400]" size={18} aria-hidden="true" />
                {material}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-sm text-white/60">
            Approfondisci i singoli materiali nella sezione{" "}
            <Link href="/materiali" className="focus-ring font-black text-[#ffc400] hover:text-white">materiali trattati</Link>.
          </p>
        </div>
      </section>

      <section className="container-boch py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black uppercase sm:text-4xl">A chi è rivolto</h2>
            <ul className="mt-7 grid gap-3">
              {service.audience.map((item) => (
                <li key={item} className="flex gap-3 border-b border-white/10 pb-3 text-base leading-7 text-white/75">
                  <ChevronRight className="mt-1.5 shrink-0 text-[#ffc400]" size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-black uppercase sm:text-4xl">Come funziona</h2>
            <ol className="mt-7 grid gap-6">
              {service.process.map((step, index) => (
                <li key={step.title} className="border-t-2 border-[#ffc400] pt-5">
                  <div className="flex items-baseline gap-4">
                    <span className="text-2xl font-black text-[#ffc400]">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="text-lg font-black uppercase">{step.title}</h3>
                  </div>
                  <p className="mt-2 pl-10 text-sm leading-7 text-white/65">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="industrial-grid border-y border-white/10 bg-[#0a0a0a] py-16">
        <div className="container-boch grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Perché sceglierci</p>
            <h2 className="yellow-line mt-3 text-3xl font-black uppercase sm:text-4xl">I vantaggi</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 border border-white/10 bg-[#111111] p-5 text-sm font-bold leading-6">
                  <Check className="mt-0.5 shrink-0 text-[#ffc400]" size={18} aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-[#ffc400]/25 bg-black/40 p-7">
            <MapPin className="text-[#ffc400]" size={28} aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-black uppercase">Servizio locale</h2>
            <p className="mt-4 leading-7 text-white/70">{service.local}</p>
            <Link href="/zona-di-ritiro" className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-black text-[#ffc400] hover:text-white">
              VEDI LA ZONA DI SERVIZIO <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-boch py-16 sm:py-20">
        <h2 className="yellow-line text-3xl font-black uppercase sm:text-4xl">Domande frequenti</h2>
        <div className="mt-9 divide-y divide-white/10 border-y border-white/10">
          {service.faqs.map((faq) => (
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

      {related.length ? (
        <section className="border-t border-white/10 bg-[#0b0b0b] py-16">
          <div className="container-boch">
            <h2 className="text-3xl font-black uppercase sm:text-4xl">Servizi correlati</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/servizi/${item.slug}`}
                  className="focus-ring lift group border border-white/10 bg-[#111111] p-6"
                >
                  <p className="text-xs font-black uppercase tracking-widest text-[#ffc400]">{item.eyebrow}</p>
                  <h3 className="mt-3 text-lg font-black uppercase leading-tight transition group-hover:text-[#ffc400]">{item.title}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#ffc400]">
                    SCOPRI <ArrowRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#ffc400] py-12 text-black">
        <div className="container-boch flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-black uppercase sm:text-4xl">Hai materiale da gestire?</h2>
            <p className="mt-2 max-w-2xl font-bold">Descrivici il rottame e il comune: ti risponderemo con le informazioni disponibili.</p>
          </div>
          <Link
            href={`/contatti?servizio=${service.slug}`}
            className="focus-ring inline-flex min-h-14 shrink-0 items-center gap-2 bg-black px-7 font-black text-[#ffc400] transition hover:bg-white hover:text-black"
          >
            RICHIEDI UN PREVENTIVO <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
