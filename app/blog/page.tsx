import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { business } from "@/lib/constants";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Guide su Rottami e Recupero Metalli",
  description:
    "Guide pratiche su ritiro rottami, riconoscimento dei metalli, recupero e gestione degli scarti per aziende e privati in Piemonte.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog - Guide su Rottami e Recupero Metalli | BOCH FERRO ROTTAMI",
    description:
      "Cinque guide pratiche su rottami metallici, recupero e valorizzazione dei materiali.",
    url: "/blog",
    locale: "it_IT",
    type: "website",
    siteName: business.name,
    images: [{ url: "/images/hero/boch-hero.webp", alt: "Blog BOCH FERRO ROTTAMI" }]
  }
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog BOCH FERRO ROTTAMI",
    url: `${business.siteUrl.replace(/\/$/, "")}/blog`,
    description: "Guide pratiche su rottami metallici, ritiro e recupero.",
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${business.siteUrl.replace(/\/$/, "")}/blog/${post.slug}`,
      image: `${business.siteUrl.replace(/\/$/, "")}${post.image}`
    }))
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <section className="metal-noise border-b border-white/10">
        <div className="container-boch py-14 sm:py-20">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">Guide e approfondimenti</p>
          <h1 className="yellow-line mt-3 text-5xl font-black uppercase sm:text-7xl">BLOG</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            Informazioni pratiche su rottami metallici, ritiro e recupero. Cinque guide per privati, aziende, cantieri e attività agricole nelle aree servite in Piemonte.
          </p>
        </div>
      </section>

      <div className="container-boch py-12 sm:py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article key={post.slug} className="lift group relative flex h-full flex-col overflow-hidden border border-white/10 bg-[#111111]">
              <Link href={`/blog/${post.slug}`} className="focus-ring relative block aspect-[16/10] overflow-hidden" aria-label={`Leggi: ${post.title}`}>
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={index === 0}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </Link>
              <span className="pointer-events-none absolute left-4 top-4 bg-[#ffc400] px-3 py-1.5 text-xs font-black uppercase text-black">
                {post.category}
              </span>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-black uppercase leading-tight">
                  <Link href={`/blog/${post.slug}`} className="focus-ring transition hover:text-[#ffc400]">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-white/65">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-[#ffc400] hover:text-white">
                  LEGGI L&apos;ARTICOLO <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border border-white/10 bg-[#111111] p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-black uppercase">Hai materiale da gestire?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/65">
              Dopo aver letto le guide, descrivici il rottame e il comune per ricevere informazioni sul servizio.
            </p>
          </div>
          <Link href="/contatti" className="focus-ring inline-flex min-h-12 shrink-0 items-center gap-2 bg-[#ffc400] px-6 font-black text-black hover:bg-white">
            RICHIEDI INFORMAZIONI <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
