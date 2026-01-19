export function FAQSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien coûte un détatouage ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le prix varie selon la surface. Comptez en moyenne entre 80€ et 300€ par séance."
        }
      },
      {
        "@type": "Question",
        "name": "Peut-on retatouer sur un détatouage ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, le 'cover' est tout à fait possible une fois la peau cicatrisée."
        }
      },
      {
        "@type": "Question",
        "name": "Est-ce que le détatouage fait mal ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La sensation est comparable à un claquement d'élastique. Une crème anesthésiante peut être appliquée."
        }
      },
      {
        "@type": "Question",
        "name": "Comment est la peau après un détatouage ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Des rougeurs et un effet 'givre' (frosting) apparaissent immédiatement, suivis de croutelles pendant quelques jours."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps entre les séances ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il faut laisser le système lymphatique éliminer l'encre, soit 6 à 8 semaines minimum."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
