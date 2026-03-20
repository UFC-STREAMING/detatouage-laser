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
import { MedicalBusinessSchema } from "@/components/seo/MedicalBusinessSchema";
import { HeroSection } from "@/components/ville/HeroSection";
import { WhyUsSection } from "@/components/ville/WhyUsSection";
import { TechSection } from "@/components/ville/TechSection";
import { GallerySection } from "@/components/ville/GallerySection";
import { ProcessSection } from "@/components/ville/ProcessSection";
import { PricingSection } from "@/components/ville/PricingSection";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FAQSection } from "@/components/ville/FAQSection";
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

  const title = `Détatouage Laser à ${city.name} | Discovery Pico Plus | Devis Gratuit`;
  const description = cityContent?.description
    || `Détatouage laser Discovery Pico Plus à ${city.name}, ${city.department.name}. Toutes couleurs, toutes peaux. Résultats visibles dès la 1ère séance. Devis gratuit sur photo.`;

  const keywords = [
    `détatouage ${city.name}`,
    `détatouage laser ${city.name}`,
    `enlever tatouage ${city.name}`,
    `retrait tatouage ${city.name}`,
    `effacer tatouage ${city.name}`,
    `laser tatouage ${city.name}`,
    `détatouage ${city.department.name}`,
    `centre détatouage ${city.name}`,
    `discovery pico plus ${city.name}`,
    `prix détatouage ${city.name}`,
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
      answer: `La sensation est souvent comparée à un élastique qui claque sur la peau. À ${city.name}, nous appliquons une crème anesthésiante 1h avant chaque séance pour un confort optimal. Le laser Discovery Pico Plus est également moins douloureux que les anciens lasers nanosecondes grâce à ses impulsions ultra-courtes.`,
    },
    {
      question: "Combien de séances pour un tatouage noir ?",
      answer: `Un tatouage noir nécessite en moyenne 4 à 8 séances avec le Discovery Pico Plus, espacées de 6 à 8 semaines. C'est 30 à 50% moins de séances qu'avec un laser Q-Switched classique. Le nombre exact dépend de la densité de l'encre, la profondeur et l'ancienneté du tatouage.`,
    },
    {
      question: "Le détatouage est-il compatible avec les peaux noires ?",
      answer: `Oui. Le Discovery Pico Plus est l'un des rares lasers adaptés aux peaux mates et noires (phototypes IV à VI). Grâce à ses longueurs d'onde spécifiques (1064 nm Nd:YAG), il cible l'encre sans affecter la mélanine environnante, réduisant considérablement le risque d'hypopigmentation.`,
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
      <MedicalBusinessSchema
        city={city.name}
        department={city.department.name}
        postalCode={city.postalCode}
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: city.department.name, url: `/departement/${city.department.slug}` },
          { name: city.name, url: `/ville/${city.slug}` },
        ]}
      />

      <HeroSection cityName={city.name} />

      <div className="section bg-white">
        <div className="container">
          <Breadcrumb
            items={[
              { label: city.department.name, href: `/departement/${city.department.slug}` },
              { label: city.name },
            ]}
          />

          <article>
            <WhyUsSection cityName={city.name} />
            <TechSection cityName={city.name} />
            <GallerySection />
            <ProcessSection />
            <PricingSection cityName={city.name} />
            <QuoteForm initialPostalCode={city.postalCode} />
            <FAQSection cityName={city.name} faqItems={faqItems} />
            <CTABanner />
          </article>
        </div>
      </div>

      <BusinessListings
        businesses={cityBusinesses}
        serpBusinesses={cityContent?.businesses}
        cityName={city.name}
      />

      {proximityCities.length > 0 && (
        <div className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <ProximityLinks cities={proximityCities} currentCity={city.name} />
          </div>
        </div>
      )}
    </>
  );
}
