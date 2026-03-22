interface ProductSchemaProps {
  businessName: string;
  businessAddress: string;
  city: string;
  postalCode: string;
  rating?: number;
  reviewCount?: number;
  phone?: string;
  website?: string;
}

export function ProductSchema({
  businessName,
  businessAddress,
  city,
  postalCode,
  rating = 4.5,
  reviewCount = 0,
  phone,
  website,
}: ProductSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tatouage-temporaire.fr";
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${baseUrl}/ville/${citySlug}#product-${businessName.toLowerCase().replace(/\s+/g, '-')}`,
    "name": `Détatouage Laser - ${businessName}`,
    "description": `Service de détatouage laser professionnel au ${businessName} à ${city}. Technologie Q-Switched de dernière génération pour un retrait efficace et sécurisé de tous types de tatouages.`,
    "image": `${baseUrl}/logo.png`,
    "brand": {
      "@type": "Brand",
      "name": businessName
    },
    "offers": {
      "@type": "Offer",
      "url": website || `${baseUrl}/ville/${citySlug}`,
      "priceCurrency": "EUR",
      "price": "150",
      "priceRange": "80-300",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "availableAtOrFrom": {
        "@type": "Place",
        "name": businessName,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": businessAddress,
          "addressLocality": city,
          "postalCode": postalCode,
          "addressCountry": "FR"
        }
      },
      "seller": {
        "@type": "Organization",
        "name": businessName,
        ...(phone ? { "telephone": phone } : {}),
      }
    },
    ...(reviewCount > 0 ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating.toString(),
        "reviewCount": reviewCount.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    } : {}),
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Type de laser",
        "value": "Q-Switched"
      },
      {
        "@type": "PropertyValue",
        "name": "Types de tatouages traités",
        "value": "Tous types - noir, couleur, professionnel, amateur"
      },
      {
        "@type": "PropertyValue",
        "name": "Consultation",
        "value": "Gratuite"
      },
      {
        "@type": "PropertyValue",
        "name": "Devis",
        "value": "Gratuit sur photo"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
