import type { MetadataRoute } from "next";
import { business } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/servizi", "/materiali", "/aziende", "/zona-di-ritiro", "/contatti"];
  return routes.map((route) => ({
    url: `${business.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
