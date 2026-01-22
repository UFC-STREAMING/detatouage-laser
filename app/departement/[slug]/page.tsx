import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllDepartments, getCitiesByDepartment } from "@/data/cities";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { getNeighborDepartments } from "@/data/department-neighbors";
import { getDepartmentWithPreposition } from "@/lib/utils/department-articles";
import Link from "next/link";
import { MapPin } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const departments = getAllDepartments();
  return departments.map((dept) => ({
    slug: dept.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const departments = getAllDepartments();
  const department = departments.find((d) => d.slug === slug);

  if (!department) {
    return {
      title: "Département non trouvé",
    };
  }

  const title = `Détatouage Laser ${getDepartmentWithPreposition(department.name)} (${department.number}) | Prix & Devis`;
  const description = `Spécialiste du détatouage laser ${getDepartmentWithPreposition(department.name)} (${department.number}). ${department.cities.length} villes couvertes. Devis gratuit et consultation personnalisée.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/departement/${department.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/departement/${department.slug}`,
      type: "website",
    },
  };
}

export default async function DepartmentPage({ params }: Props) {
  const { slug } = await params;
  const departments = getAllDepartments();
  const department = departments.find((d) => d.slug === slug);

  if (!department) {
    notFound();
  }

  const cities = getCitiesByDepartment(department.slug);
  const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));
  const neighborDepartments = getNeighborDepartments(department.number);
  const allDepartments = getAllDepartments();

  return (
    <>
      <FAQSchema />
      <HeroSection
        imageSrc="/images/Departement-detatouage.png"
        imageAlt={`Détatouage laser ${getDepartmentWithPreposition(department.name)}`}
        title={`Détatouage Laser ${getDepartmentWithPreposition(department.name)}`}
        subtitle={`${department.cities.length} villes couvertes dans le département ${department.number}`}
        ctaText="Devis Gratuit"
        ctaHref="#quote-form"
        height="medium"
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: department.name }]} />

      <article>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0077b6] mb-4">
            Détatouage Laser {getDepartmentWithPreposition(department.name)} ({department.number})
          </h1>
          <p className="text-xl text-[#6c757d]">
            Trouvez votre centre de détatouage laser parmi {department.cities.length} ville
            {department.cities.length > 1 ? "s" : ""} du département
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-12">
          <p className="text-lg leading-relaxed">
            Vous cherchez un <strong>spécialiste du détatouage laser {getDepartmentWithPreposition(department.name)}</strong> ?
            Notre réseau de centres utilise la technologie laser la plus avancée pour vous offrir un{" "}
            <strong>retrait de tatouage efficace et sécurisé</strong> partout dans le département{" "}
            {department.number}.
          </p>

          <h2 className="text-2xl font-bold text-[#0077b6] mt-8 mb-4">
            Nos centres de détatouage {getDepartmentWithPreposition(department.name)}
          </h2>
          <p>
            Nous couvrons {department.cities.length} ville{department.cities.length > 1 ? "s" : ""} du
            département {department.name} pour vous offrir un service de proximité. Quelle que soit
            votre localisation, vous trouverez un centre équipé des technologies laser les plus
            performantes.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-bold text-[#0077b6] mb-6">
            Sélectionnez votre ville
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedCities.map((city) => (
              <Link
                key={city.id}
                href={`/ville/${city.slug}`}
                className="group bg-white border-2 border-[#e9ecef] hover:border-[#48cae4] rounded-lg p-5 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-[#48cae4] group-hover:scale-110 transition-transform flex-shrink-0" />
                  <h3 className="font-bold text-lg text-[#0077b6] group-hover:text-[#48cae4] transition">
                    {city.name}
                  </h3>
                </div>
                <p className="text-sm text-[#6c757d]">
                  Code postal: {city.postalCode}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#0077b6] to-[#48cae4] text-white rounded-lg p-8 my-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pourquoi choisir notre technologie laser ?
            </h2>
            <p className="text-lg mb-6">
              Dans le {department.name}, nos centres sont équipés de lasers Q-Switched de dernière
              génération pour un détatouage efficace et sécurisé.
            </p>
            <ul className="text-left space-y-2 mb-6">
              <li>✓ Technologie laser certifiée et sécurisée</li>
              <li>✓ Protocole médical personnalisé</li>
              <li>✓ Résultats visibles dès les premières séances</li>
              <li>✓ Opérateurs qualifiés et expérimentés</li>
              <li>✓ Consultation et devis gratuits</li>
            </ul>
          </div>
        </section>

        <QuoteForm />

        {neighborDepartments.length > 0 && (
          <section className="mt-12 pt-8 border-t-2 border-[#e9ecef]">
            <h2 className="text-2xl font-bold text-[#0077b6] mb-6">
              Départements voisins
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {neighborDepartments.map((neighborNumber) => {
                const neighborDept = allDepartments.find(d => d.number === neighborNumber);
                if (!neighborDept) return null;
                return (
                  <Link
                    key={neighborDept.number}
                    href={`/departement/${neighborDept.slug}`}
                    className="group bg-white border-2 border-[#e9ecef] hover:border-[#48cae4] rounded-lg p-4 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#48cae4] group-hover:scale-110 transition-transform flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-[#0077b6] group-hover:text-[#48cae4] transition">
                          {neighborDept.name}
                        </h3>
                        <p className="text-sm text-[#6c757d]">
                          Département {neighborDept.number}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </article>
      </div>
    </>
  );
}
