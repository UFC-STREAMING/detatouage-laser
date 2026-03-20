export function OrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tatouage-temporaire.fr";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Détatouage Laser France",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`,
      "width": 512,
      "height": 512
    },
    "description": "Spécialiste du détatouage laser en France. Technologie Q-Switched et Discovery Pico Plus pour un retrait efficace et sécurisé des tatouages.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR",
      "addressRegion": "France"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@tatouage-temporaire.fr",
      "areaServed": "FR",
      "availableLanguage": ["French"]
    },
    "sameAs": [
      // Ajouter réseaux sociaux si disponibles
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
