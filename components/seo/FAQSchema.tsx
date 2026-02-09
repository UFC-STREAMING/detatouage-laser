interface FAQSchemaProps {
  cityName?: string;
  departmentName?: string;
}

export function FAQSchema({ cityName, departmentName }: FAQSchemaProps = {}) {
  const location = cityName || "en France";
  const locationPrefix = cityName ? `à ${cityName}` : "en France";

  const genericQuestions = [
    {
      "@type": "Question" as const,
      "name": "Combien coûte un détatouage ?",
      "acceptedAnswer": {
        "@type": "Answer" as const,
        "text": "Le prix varie selon la surface. Comptez en moyenne entre 80€ et 300€ par séance."
      }
    },
    {
      "@type": "Question" as const,
      "name": "Peut-on retatouer sur un détatouage ?",
      "acceptedAnswer": {
        "@type": "Answer" as const,
        "text": "Oui, le 'cover' est tout à fait possible une fois la peau cicatrisée."
      }
    },
    {
      "@type": "Question" as const,
      "name": "Est-ce que le détatouage fait mal ?",
      "acceptedAnswer": {
        "@type": "Answer" as const,
        "text": "La sensation est comparable à un claquement d'élastique. Une crème anesthésiante peut être appliquée."
      }
    },
    {
      "@type": "Question" as const,
      "name": "Comment est la peau après un détatouage ?",
      "acceptedAnswer": {
        "@type": "Answer" as const,
        "text": "Des rougeurs et un effet 'givre' (frosting) apparaissent immédiatement, suivis de croutelles pendant quelques jours."
      }
    },
    {
      "@type": "Question" as const,
      "name": "Combien de temps entre les séances ?",
      "acceptedAnswer": {
        "@type": "Answer" as const,
        "text": "Il faut laisser le système lymphatique éliminer l'encre, soit 6 à 8 semaines minimum."
      }
    }
  ];

  const cityQuestions = cityName ? [
    {
      "@type": "Question" as const,
      "name": `Combien coûte un détatouage laser ${locationPrefix} ?`,
      "acceptedAnswer": {
        "@type": "Answer" as const,
        "text": `Le prix d'un détatouage laser ${locationPrefix} varie entre 80€ et 300€ par séance selon la taille, les couleurs et la complexité du tatouage. Demandez un devis gratuit pour une estimation personnalisée.`
      }
    },
    {
      "@type": "Question" as const,
      "name": `Où faire un détatouage laser ${locationPrefix} ?`,
      "acceptedAnswer": {
        "@type": "Answer" as const,
        "text": `Notre centre de détatouage laser ${locationPrefix}${departmentName ? ` (${departmentName})` : ''} utilise la technologie Q-Switched de dernière génération. Nous proposons une consultation gratuite pour évaluer votre tatouage.`
      }
    },
    {
      "@type": "Question" as const,
      "name": `Combien de séances pour un détatouage ${locationPrefix} ?`,
      "acceptedAnswer": {
        "@type": "Answer" as const,
        "text": `Le nombre de séances de détatouage ${locationPrefix} varie entre 5 et 12 selon le type de tatouage. Les tatouages noirs nécessitent généralement 5 à 8 séances, les tatouages colorés 8 à 12 séances, espacées de 6 à 8 semaines.`
      }
    },
    {
      "@type": "Question" as const,
      "name": `Le détatouage laser est-il douloureux ?`,
      "acceptedAnswer": {
        "@type": "Answer" as const,
        "text": `La sensation est souvent comparée à un élastique qui claque contre la peau. ${cityName ? `À ${cityName}, n` : 'N'}ous utilisons des techniques d'anesthésie locale (crème anesthésiante, système de refroidissement) pour minimiser l'inconfort pendant le traitement.`
      }
    },
    {
      "@type": "Question" as const,
      "name": `Quels sont les résultats après la première séance ?`,
      "acceptedAnswer": {
        "@type": "Answer" as const,
        "text": "Un effet 'frosting' (blanchiment) apparaît immédiatement après le traitement, signe que le laser a bien fragmenté les pigments. La peau peut présenter des rougeurs et un léger gonflement pendant quelques jours. L'encre s'estompe progressivement dans les semaines suivantes."
      }
    }
  ] : [];

  const questions = cityName ? cityQuestions : genericQuestions;

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
