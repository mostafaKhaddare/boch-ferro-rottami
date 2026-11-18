import type { MetadataRoute } from "next";
import { business } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = business.siteUrl.replace(/\/$/, "");

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
