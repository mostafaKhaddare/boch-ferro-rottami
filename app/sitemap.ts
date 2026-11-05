import type { MetadataRoute } from "next";
import { business } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = business.siteUrl.replace(/\/$/, "");
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/servizi", priority: 0.9, changeFrequency: "monthly" },
    { path: "/materiali", priority: 0.9, changeFrequency: "monthly" },
    ...business.materials.map((material) => ({
      path: `/materiali/${material.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const
    })),
    { path: "/aziende", priority: 0.8, changeFrequency: "monthly" },
    { path: "/zona-di-ritiro", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contatti", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" }
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path || "/"}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
