interface LocalBusinessSchemaProps {
  city: string;
  department: string;
  postalCode: string;
  region?: string;
  latitude?: number;
  longitude?: number;
}

export function LocalBusinessSchema({
  city,
  department,
  postalCode,
  region,
  latitude,
  longitude,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.tatouage-temporaire.fr/ville/${city.toLowerCase().replace(/\s+/g, '-')}#business`,
    "name": `Détatouage Laser ${city}`,
    "image": "https://www.tatouage-temporaire.fr/logo.png",
    "description": `Centre spécialisé en détatouage laser à ${city} (${department}). Technologie Q-Switched de dernière génération pour un retrait efficace et sécurisé de vos tatouages.`,
    "url": `https://www.tatouage-temporaire.fr/ville/${city.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": "+33-1-XX-XX-XX-XX", // TODO: Remplacer par vrai numéro
    "email": "contact@tatouage-temporaire.fr",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Service disponible dans toute la ville",
      "addressLocality": city,
      "addressRegion": region || department,
      "postalCode": postalCode,
      "addressCountry": "FR"
    },
    ...(latitude && longitude ? {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": latitude,
        "longitude": longitude
      }
    } : {}),
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedIn": {
        "@type": "AdministrativeArea",
        "name": department
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de détatouage laser",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Détatouage laser Q-Switched",
            "description": "Retrait de tatouage par laser Q-Switched, technique la plus efficace et sécurisée"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultation gratuite",
            "description": "Évaluation du tatouage et plan de traitement personnalisé"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Devis gratuit",
            "description": "Estimation précise du nombre de séances et du coût total"
          }
        }
      ]
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Détatouage laser",
        "description": "Retrait de tatouage par technologie laser Q-Switched",
        "areaServed": {
          "@type": "City",
          "name": city
        }
      }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "EUR",
    "sameAs": [
      // TODO: Ajouter liens réseaux sociaux si disponibles
      // "https://www.facebook.com/votrecompte",
      // "https://www.instagram.com/votrecompte"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
