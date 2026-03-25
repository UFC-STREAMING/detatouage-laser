import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug, cities } from "@/data/cities";
import { getProximityCitiesDynamic } from "@/lib/utils/proximity";
import { getBusinessesByCity } from "@/data/businesses";
import { getCityContent, getCityCoordinates } from "@/lib/city-content";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProximityLinks } from "@/components/ui/ProximityLinks";
import { BusinessListings } from "@/components/ui/BusinessListings";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { HeroSection } from "@/components/ville/HeroSection";
import { WhyUsSection } from "@/components/ville/WhyUsSection";
import { TechSection } from "@/components/ville/TechSection";
import { GallerySection } from "@/components/ville/GallerySection";
import { ProcessSection } from "@/components/ville/ProcessSection";
import { PricingSection } from "@/components/ville/PricingSection";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FAQSection } from "@/components/ville/FAQSection";
import { ContraindicationsSection } from "@/components/ville/ContraindicationsSection";
import { CTABanner } from "@/components/ville/CTABanner";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {
      title: "Ville non trouvée",
    };
  }

  const cityContent = getCityContent(slug);

  const title = `Détatouage ${city.name} : Prix & Centres 2026 | Devis Gratuit`;
  const description = cityContent?.description
    || `Centres de détatouage laser à ${city.name} (${city.department.name}). Laser Q-Switch dernière génération, toutes couleurs. À partir de 29€/séance. Consultation gratuite.`;

  const keywords = [
    `détatouage ${city.name}`,
    `détatouage laser ${city.name}`,
    `enlever tatouage ${city.name}`,
    `retrait tatouage ${city.name}`,
    `effacer tatouage ${city.name}`,
    `laser tatouage ${city.name}`,
    `détatouage ${city.department.name}`,
    `centre détatouage ${city.name}`,
    `prix détatouage laser ${city.name}`,
    `centre détatouage laser ${city.name}`,
  ];

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: `/ville/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/ville/${city.slug}`,
      type: "website",
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const proximityCities = getProximityCitiesDynamic(city.slug);
  const cityBusinesses = getBusinessesByCity(city.slug);
  const cityContent = getCityContent(slug);
  const coords = getCityCoordinates(slug);

  const faqItems = [
    {
      question: "Est-ce douloureux ?",
      answer: `La sensation est souvent comparée à un élastique qui claque sur la peau. À ${city.name}, nous appliquons une crème anesthésiante 1h avant chaque séance pour un confort optimal. Le laser Q-Switch de dernière génération est également moins douloureux que les anciens lasers grâce à ses impulsions très courtes.`,
    },
    {
      question: "Combien de séances pour un tatouage noir ?",
      answer: `Un tatouage noir nécessite en moyenne 5 à 10 séances, espacées de 4 à 8 semaines. Le nombre exact dépend de la densité de l'encre, la profondeur et l'ancienneté du tatouage.`,
    },
    {
      question: "Le détatouage est-il compatible avec les peaux noires ?",
      answer: `Oui. Nos lasers Q-Switch sont adaptés aux peaux mates et noires (phototypes IV à VI). Grâce à leurs longueurs d'onde spécifiques (1064 nm Nd:YAG), ils ciblent l'encre sans affecter la mélanine environnante, réduisant considérablement le risque d'hypopigmentation.`,
    },
    {
      question: `Combien coûte un détatouage laser à ${city.name} ?`,
      answer: `Le prix d'une séance de détatouage laser à ${city.name} varie de 29€ à 299€ selon la taille et la complexité du tatouage. Une très petite zone (< 5 cm²) coûte entre 29€ et 59€ par séance. Une zone moyenne (10-20 cm²) entre 100€ et 149€. La consultation initiale est gratuite et permet d'obtenir un devis personnalisé exact.`,
    },
    {
      question: "Le détatouage laser est-il remboursé par la Sécurité Sociale ?",
      answer: "Le détatouage laser à visée esthétique n'est pas pris en charge par la Sécurité Sociale. Cependant, certaines mutuelles proposent une participation aux frais. Nous vous conseillons de vérifier auprès de votre complémentaire santé. Dans le cas de tatouages post-traumatiques ou médicaux, une prise en charge partielle peut être possible sur prescription.",
    },
    {
      question: "Peut-on se faire retatouer après un détatouage laser ?",
      answer: "Oui, il est tout à fait possible de se faire retatouer sur une zone détatouée au laser (technique du « cover-up partiel »). Il faut attendre la cicatrisation complète de la peau, soit environ 3 à 6 mois après la dernière séance. Beaucoup de patients choisissent un effacement partiel pour faciliter un nouveau tatouage de meilleure qualité.",
    },
  ];

  return (
    <>
      <FAQSchema
        cityName={city.name}
        departmentName={city.department.name}
        customQuestions={faqItems}
      />
      <LocalBusinessSchema
        city={city.name}
        department={city.department.name}
        postalCode={city.postalCode}
        latitude={coords?.lat}
        longitude={coords?.lng}
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: city.department.name, url: `/departement/${city.department.slug}` },
          { name: city.name, url: `/ville/${city.slug}` },
        ]}
      />

      <HeroSection cityName={city.name} />

      <div className="py-10 bg-white">
        <div className="container">
          <Breadcrumb
            items={[
              { label: city.department.name, href: `/departement/${city.department.slug}` },
              { label: city.name },
            ]}
          />

          {/* Centres en premier — contenu unique par ville, évite le duplicate content */}
          <BusinessListings
            businesses={cityBusinesses}
            serpBusinesses={cityContent?.businesses}
            cityName={city.name}
          />

          <article>
            <WhyUsSection cityName={city.name} />
            <TechSection cityName={city.name} />
            <GallerySection />
            <ProcessSection />
            <PricingSection cityName={city.name} />
            <QuoteForm initialPostalCode={city.postalCode} />
            <FAQSection cityName={city.name} faqItems={faqItems} />
            <ContraindicationsSection />
            <CTABanner />
          </article>
        </div>
      </div>

      {proximityCities.length > 0 && (
        <div className="py-12" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <ProximityLinks cities={proximityCities} currentCity={city.name} />
          </div>
        </div>
      )}
    </>
  );
}
