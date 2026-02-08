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

  // Static content pages
  const staticPages = [
    { url: `${baseUrl}/prix`, priority: 0.9 },
    { url: `${baseUrl}/avant-apres`, priority: 0.8 },
    { url: `${baseUrl}/resultats-1-seance`, priority: 0.7 },
    { url: `${baseUrl}/mentions-legales`, priority: 0.3 },
    { url: `${baseUrl}/politique-confidentialite`, priority: 0.3 },
  ].map((page) => ({
    ...page,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
  }));

  return [homepage, ...staticPages, ...cityPages, ...departmentPages];
}
