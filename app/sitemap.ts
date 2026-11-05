import type { MetadataRoute } from "next";
import { business } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/servizi", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/materiali", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/aziende", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/zona-di-ritiro", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contatti", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" as const }
  ];
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${business.siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
