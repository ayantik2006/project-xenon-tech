import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://tech.hoardspace.in/sitemap.xml",
    host: "https://tech.hoardspace.in",
  };
}