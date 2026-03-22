import { Business } from "@/data/businesses";

interface ItemListSchemaProps {
  businesses: Business[];
  cityName: string;
}

export function ItemListSchema({ businesses, cityName }: ItemListSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tatouage-temporaire.fr";
  const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Centres de détatouage laser à ${cityName}`,
    "description": `Liste des centres spécialisés en détatouage laser à ${cityName}. Tous les établissements utilisent la technologie Q-Switched de dernière génération.`,
    "numberOfItems": businesses.length,
    "itemListElement": businesses.map((business, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/ville/${citySlug}#business-${business.id}`,
        "name": business.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": business.address,
          "addressLocality": business.city,
          "postalCode": business.postalCode,
          "addressCountry": "FR"
        },
        ...(business.phone ? { "telephone": business.phone } : {}),
        ...(business.website ? { "url": business.website } : {}),
        ...(business.rating && business.reviewCount > 0 ? {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": business.rating.toString(),
            "reviewCount": business.reviewCount.toString(),
            "bestRating": "5",
            "worstRating": "1"
          }
        } : {}),
        "priceRange": "€€",
        "image": `${baseUrl}/logo.png`,
        "description": business.description
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
