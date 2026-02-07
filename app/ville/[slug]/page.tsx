import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug, getProximityCities, cities } from "@/data/cities";
import { getBusinessesByCity } from "@/data/businesses";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProximityLinks } from "@/components/ui/ProximityLinks";
import { HeroSection } from "@/components/ui/HeroSection";
import { BusinessListings } from "@/components/ui/BusinessListings";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { MapPin } from "lucide-react";

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

  const title = `Détatouage Laser à ${city.name} | Prix & Devis Gratuit`;
  const description = `Spécialiste du détatouage laser à ${city.name}, ${city.department.name}. Retrait de tatouage par laser de dernière génération. Devis gratuit et consultation personnalisée.`;

  // Keywords enrichis pour SEO local
  const keywords = [
    `détatouage ${city.name}`,
    `détatouage laser ${city.name}`,
    `enlever tatouage ${city.name}`,
    `retrait tatouage ${city.name}`,
    `effacer tatouage ${city.name}`,
    `laser tatouage ${city.name}`,
    `détatouage ${city.department.name}`,
    `centre détatouage ${city.name}`,
    `spécialiste détatouage ${city.name}`,
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

  const proximityCities = getProximityCities(city.slug);
  const cityBusinesses = getBusinessesByCity(city.slug);

  return (
    <>
      <FAQSchema />
      <LocalBusinessSchema
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
      <HeroSection
        imageSrc="/images/Ville-detatouage.png"
        imageAlt={`Détatouage laser à ${city.name}`}
        title={`Détatouage Laser à ${city.name}`}
        subtitle={`Retrait de tatouage professionnel dans le ${city.department.name} (${city.department.number})`}
        ctaText="Devis Gratuit"
        ctaHref="#quote-form"
        height="medium"
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: city.department.name, href: `/departement/${city.department.slug}` },
            { label: city.name },
          ]}
        />

      <article>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0077b6] mb-4">
            Détatouage Laser à {city.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-[#6c757d]">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#48cae4]" />
              <span>
                {city.name}, {city.department.name} ({city.department.number})
              </span>
            </div>
          </div>
        </header>

        <section className="prose prose-lg max-w-none mb-12">
          <p className="text-lg leading-relaxed">
            Vous recherchez un <strong>spécialiste du détatouage laser à {city.name}</strong> ?
            Notre centre utilise la technologie laser la plus avancée pour vous offrir un{" "}
            <strong>retrait de tatouage efficace et sécurisé</strong> dans le département{" "}
            {city.department.name} ({city.department.number}).
          </p>

          <h2 className="text-2xl font-bold text-[#0077b6] mt-8 mb-4">
            Pourquoi choisir notre centre de détatouage à {city.name} ?
          </h2>
          <p>
            Notre expertise en <strong>détatouage laser à {city.name}</strong> nous permet de
            traiter tous types de tatouages, quelle que soit leur taille, leur couleur ou leur
            ancienneté. Nous utilisons un laser Q-Switched de dernière génération qui fragmente
            les pigments d'encre de manière ciblée.
          </p>

          <div className="bg-[#48cae4]/10 border-l-4 border-[#48cae4] p-6 my-8 rounded">
            <h3 className="text-xl font-bold text-[#0077b6] mb-3">
              🎯 Les avantages de notre technologie laser
            </h3>
            <ul className="space-y-2 mb-0">
              <li>✓ Résultats visibles dès les premières séances</li>
              <li>✓ Traitement adapté à tous les types de peau</li>
              <li>✓ Protocole médical sécurisé et personnalisé</li>
              <li>✓ Effacement progressif sans cicatrices</li>
              <li>✓ Équipement certifié et opérateurs qualifiés</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-[#0077b6] mt-8 mb-4">
            Déroulement du détatouage laser à {city.name}
          </h2>
          <p>
            Notre processus de <strong>retrait de tatouage à {city.name}</strong> commence par une
            consultation gratuite pendant laquelle nous évaluons votre tatouage et déterminons le
            nombre de séances nécessaires. Chaque séance dure entre 15 et 30 minutes selon la zone
            traitée.
          </p>

          <h3 className="text-xl font-semibold text-[#0077b6] mt-6 mb-3">
            Les étapes de votre traitement
          </h3>
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Consultation initiale gratuite</strong> : Analyse de votre tatouage et
              élaboration d'un plan de traitement personnalisé
            </li>
            <li>
              <strong>Séances de traitement laser</strong> : Espacées de 6 à 8 semaines pour
              permettre à votre peau de récupérer
            </li>
            <li>
              <strong>Suivi régulier</strong> : Nous suivons l'évolution de votre détatouage et
              ajustons le traitement si nécessaire
            </li>
            <li>
              <strong>Élimination complète</strong> : Les pigments sont progressivement éliminés
              par votre système immunitaire
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-[#0077b6] mt-8 mb-4">
            Questions fréquentes sur le détatouage à {city.name}
          </h2>

          <h3 className="text-xl font-semibold text-[#0077b6] mt-6 mb-3">
            Combien coûte un détatouage laser à {city.name} ?
          </h3>
          <p>
            Le coût dépend de plusieurs facteurs : la taille du tatouage, sa complexité, les
            couleurs utilisées et le nombre de séances nécessaires. Demandez votre{" "}
            <strong>devis gratuit</strong> ci-dessous pour obtenir une estimation personnalisée pour
            votre projet de détatouage à {city.name}.
          </p>

          <h3 className="text-xl font-semibold text-[#0077b6] mt-6 mb-3">
            Le détatouage laser est-il douloureux ?
          </h3>
          <p>
            La sensation est souvent comparée à un élastique qui claque contre la peau. À {city.name}
            , nous utilisons des techniques d'anesthésie locale (crème anesthésiante ou froid) pour
            minimiser l'inconfort pendant le traitement.
          </p>

          <h3 className="text-xl font-semibold text-[#0077b6] mt-6 mb-3">
            Combien de séances sont nécessaires ?
          </h3>
          <p>
            Le nombre de séances varie généralement entre 5 et 10, selon la profondeur de l'encre,
            les couleurs utilisées et la taille du tatouage. Les tatouages noirs sont généralement
            plus faciles à effacer que les tatouages colorés.
          </p>
        </section>

        <div className="bg-gradient-to-br from-[#003d5c] via-[#0077b6] to-[#005f8a] rounded-2xl p-10 md:p-14 my-16 shadow-xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white drop-shadow-sm">
              Prêt à commencer votre détatouage à {city.name} ?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Obtenez votre devis gratuit en 2 minutes et commencez votre transformation
            </p>
            <a
              href="#quote-form"
              className="inline-block bg-white text-[#0077b6] px-10 py-4 rounded-xl font-bold hover:bg-[#f0f7ff] hover:shadow-lg transition-all text-lg shadow-md"
            >
              Demander mon devis gratuit
            </a>
          </div>
        </div>
      </article>
      </div>

      {/* Section des entreprises locales */}
      <BusinessListings businesses={cityBusinesses} cityName={city.name} />

      {/* Formulaire de devis */}
      <div className="section bg-white">
        <div className="container">
          <QuoteForm initialPostalCode={city.postalCode} />
        </div>
      </div>

      {/* Villes à proximité */}
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
