import { MetadataRoute } from "next";
import { cities, getAllDepartments } from "@/data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tatouage-temporaire.fr";
  const currentDate = new Date();

  // Homepage
  const homepage = {
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 1,
  };

  // City pages
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/ville/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Department pages
  const departments = getAllDepartments();
  const departmentPages = departments.map((dept) => ({
    url: `${baseUrl}/departement/${dept.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [homepage, ...cityPages, ...departmentPages];
}
