import type { Metadata } from "next";

export const SITE_NAME = "BOCH FERRO ROTTAMI";
export const DEFAULT_OG_IMAGE = "/images/og/default.webp";

type PageMetaOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  modifiedTime?: string;
};

/**
 * Metadati di pagina coerenti: title, description, canonical, Open Graph e Twitter
 * derivano sempre dagli stessi valori, così i social non ereditano quelli della home.
 */
export function pageMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = title,
  type = "website",
  modifiedTime
}: PageMetaOptions): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "it_IT",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
      ...(type === "article" && modifiedTime ? { modifiedTime } : {})
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}
