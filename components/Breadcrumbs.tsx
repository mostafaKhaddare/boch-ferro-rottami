import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { business } from "@/lib/constants";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${business.siteUrl.replace(/\/$/, "")}${item.href}` } : {})
    }))
  };

  return (
    <>
      <nav aria-label="Percorso di navigazione" className="border-b border-white/10 bg-[#0a0a0a]">
        <ol className="container-boch flex flex-wrap items-center gap-x-2 gap-y-1 py-4 text-xs font-bold uppercase tracking-wide text-white/60">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <ChevronRight size={13} aria-hidden="true" className="text-[#ffc400]" /> : null}
              {item.href ? (
                <Link href={item.href} className="focus-ring transition hover:text-[#ffc400]">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-white/80">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
