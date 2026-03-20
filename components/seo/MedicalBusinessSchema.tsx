interface MedicalBusinessSchemaProps {
  city?: string;
  department?: string;
  postalCode?: string;
}

export function MedicalBusinessSchema({ city, department, postalCode }: MedicalBusinessSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tatouage-temporaire.fr";
  const locationSuffix = city ? ` ${city}` : "";

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${baseUrl}${city ? `/ville/${city.toLowerCase().replace(/\s+/g, '-')}` : ''}#medical-business`,
    "name": `Détatouage Laser${locationSuffix}`,
    "image": `${baseUrl}/logo.png`,
    "url": baseUrl,
    "priceRange": "€€",
    ...(city && department && postalCode ? {
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": department,
        "postalCode": postalCode,
        "addressCountry": "FR"
      }
    } : {
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR"
      }
    }),
    "medicalSpecialty": [
      {
        "@type": "MedicalSpecialty",
        "name": "Dermatology"
      }
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Laser Tattoo Removal",
        "procedureType": "Q-Switched Laser Treatment",
        "description": "Retrait de tatouage par laser Q-Switched de dernière génération. Traitement efficace et sécurisé pour tous types de tatouages et toutes carnations."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Pico Laser Tattoo Removal",
        "procedureType": "Picosecond Laser Treatment",
        "description": "Technologie Discovery Pico Plus pour un retrait plus rapide et efficace, particulièrement adapté aux couleurs résistantes et peaux mates."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de détatouage laser",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultation gratuite",
            "description": "Évaluation du tatouage et plan de traitement personnalisé"
          },
          "price": "0",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Séance de détatouage laser",
            "description": "Traitement laser Q-Switched ou Pico pour retrait de tatouage"
          },
          "priceRange": "80-300",
          "priceCurrency": "EUR"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
