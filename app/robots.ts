import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.detatouage-laser.fr";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/merci", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
