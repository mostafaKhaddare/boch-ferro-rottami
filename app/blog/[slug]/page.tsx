import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { business } from "@/lib/constants";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { services } from "@/lib/services";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Articolo non trovato" };

  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      locale: "it_IT",
      type: "article",
      siteName: business.name,
      images: [{ url: post.image, alt: post.imageAlt }]
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image]
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedServices = post.relatedServices
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const relatedMaterials = post.relatedMaterials
    .map((materialSlug) => business.materials.find((material) => material.slug === materialSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const relatedPosts = post.relatedPosts
    .map((postSlug) => getBlogPost(postSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const siteUrl = business.siteUrl.replace(/\/$/, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    articleSection: post.category,
    image: `${siteUrl}${post.image}`,
    url: `${siteUrl}/blog/${post.slug}`,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    inLanguage: "it-IT",
    author: { "@type": "Organization", name: business.name, url: business.siteUrl },
    publisher: { "@type": "Organization", name: business.name, url: business.siteUrl }
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title }
        ]}
      />

      <article>
        <div className="container-boch py-12 sm:py-16">
          <Link href="/blog" className="focus-ring inline-flex items-center gap-2 text-sm font-black text-[#ffc400] hover:text-white">
            <ArrowLeft size={17} /> TORNA AL BLOG
          </Link>
          <p className="mt-10 text-sm font-black uppercase tracking-[0.2em] text-[#ffc400]">{post.category}</p>
          <h1 className="yellow-line mt-3 max-w-4xl text-4xl font-black uppercase leading-tight sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">{post.excerpt}</p>
        </div>

        <div className="container-boch">
          <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-[#111111]">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 1180px" className="object-cover" />
          </div>
        </div>

        <div className="container-boch grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.5fr_.5fr]">
          <div>
            <div className="max-w-3xl space-y-5 text-base leading-8 text-white/75">
              {post.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <div className="mt-12 grid gap-10">
              {post.sections.map((section, index) => (
                <section key={section.heading} id={`sezione-${index + 1}`} className="scroll-mt-24 border-t-2 border-[#ffc400] pt-7">
                  <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl">{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-5 max-w-3xl leading-8 text-white/70">{paragraph}</p>
                  ))}
                  {section.bullets?.length ? (
                    <ul className="mt-6 grid gap-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-7 text-white/70">
                          <Check className="mt-1.5 shrink-0 text-[#ffc400]" size={17} aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.steps?.length ? (
                    <ol className="mt-7 grid gap-5">
                      {section.steps.map((step, stepIndex) => (
                        <li key={step.title} className="border-l-2 border-[#ffc400]/50 pl-5">
                          <h3 className="text-base font-black uppercase">
                            <span className="text-[#ffc400]">{String(stepIndex + 1).padStart(2, "0")}. </span>
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-white/65">{step.text}</p>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-14 border border-[#ffc400]/30 bg-[#ffc400]/5 p-7">
              <h2 className="text-2xl font-black uppercase">In sintesi</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {post.takeaways.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-bold leading-6">
                    <Check className="mt-0.5 shrink-0 text-[#ffc400]" size={18} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-14">
              <h2 className="yellow-line text-2xl font-black uppercase sm:text-3xl">Domande frequenti</h2>
              <div className="mt-7">
                <FAQ items={post.faqs} />
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="h-fit border border-white/10 bg-[#111111] p-6">
              <p className="text-xs font-black uppercase tracking-widest text-[#ffc400]">Servizi collegati</p>
              <ul className="mt-5 grid gap-4">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/servizi/${service.slug}`} className="focus-ring inline-flex items-start gap-2 text-sm font-black uppercase leading-6 hover:text-[#ffc400]">
                      <ArrowRight className="mt-1 shrink-0 text-[#ffc400]" size={16} aria-hidden="true" />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-fit border border-white/10 bg-[#111111] p-6">
              <p className="text-xs font-black uppercase tracking-widest text-[#ffc400]">Materiali citati</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {relatedMaterials.map((material) => (
                  <li key={material.slug}>
                    <Link href={`/materiali/${material.slug}`} className="focus-ring inline-block border border-white/15 px-3 py-2 text-xs font-black uppercase hover:border-[#ffc400] hover:text-[#ffc400]">
                      {material.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-fit border border-white/10 bg-[#111111] p-6">
              <p className="text-xs font-black uppercase tracking-widest text-[#ffc400]">Continua a leggere</p>
              <ul className="mt-5 grid gap-4">
                {relatedPosts.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/blog/${item.slug}`} className="focus-ring inline-flex items-start gap-2 text-sm font-black leading-6 hover:text-[#ffc400]">
                      <ArrowRight className="mt-1 shrink-0 text-[#ffc400]" size={16} aria-hidden="true" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="bg-[#ffc400] py-12 text-black">
          <div className="container-boch flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-black uppercase sm:text-4xl">Hai bisogno di un ritiro?</h2>
              <p className="mt-2 max-w-2xl font-bold">
                Indica materiale, quantità indicativa e comune: verifichiamo la disponibilità nelle aree servite.
              </p>
            </div>
            <Link href="/contatti" className="focus-ring inline-flex min-h-14 shrink-0 items-center gap-2 bg-black px-7 font-black text-[#ffc400] transition hover:bg-white hover:text-black">
              RICHIEDI INFORMAZIONI <ArrowRight size={19} />
            </Link>
          </div>
        </section>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
