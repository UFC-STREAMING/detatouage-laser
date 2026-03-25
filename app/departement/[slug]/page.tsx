import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllDepartments, getCitiesByDepartment } from "@/data/cities";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { getNeighborDepartments } from "@/data/department-neighbors";
import { getDepartmentWithPreposition } from "@/lib/utils/department-articles";
import Link from "next/link";
import { MapPinIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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

  // Keywords enrichis pour SEO local département
  const keywords = [
    `détatouage ${department.name}`,
    `détatouage laser ${department.name}`,
    `enlever tatouage ${department.name}`,
    `retrait tatouage ${department.name}`,
    `effacer tatouage ${department.name}`,
    `détatouage ${department.number}`,
    `centre détatouage ${department.name}`,
    `spécialiste détatouage ${department.name}`,
    `prix détatouage ${department.name}`,
    `devis détatouage ${department.name}`,
  ];

  return {
    title,
    description,
    keywords: keywords.join(', '),
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
      <FAQSchema departmentName={department.name} />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: department.name, url: `/departement/${department.slug}` },
        ]}
      />
      <HeroSection
        imageSrc="/images/Departement-detatouage.png"
        imageAlt={`Détatouage laser ${getDepartmentWithPreposition(department.name)}`}
        title={`Détatouage Laser ${getDepartmentWithPreposition(department.name)}`}
        subtitle={`${department.cities.length} villes couvertes dans le département ${department.number}`}
        ctaText="Devis Gratuit"
        ctaHref="#quote-form"
        height="medium"
      />
      <div className="section bg-white">
        <div className="container">
          <Breadcrumb items={[{ label: department.name }]} />

          <article>
            <header className="mb-12 text-center">
              <h1
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                Détatouage Laser {getDepartmentWithPreposition(department.name)} ({department.number})
              </h1>
              <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
                Trouvez votre centre de détatouage laser parmi {department.cities.length} ville
                {department.cities.length > 1 ? "s" : ""} du département
              </p>
            </header>

            <section className="max-w-3xl mx-auto mb-12" style={{ textAlign: 'center' }}>
              <p className="text-lg leading-relaxed text-center">
                Vous cherchez un <strong>spécialiste du détatouage laser {getDepartmentWithPreposition(department.name)}</strong> ?
                Notre réseau de centres utilise la technologie laser la plus avancée pour vous offrir un{" "}
                <strong>retrait de tatouage efficace et sécurisé</strong> partout dans le département{" "}
                {department.number}.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-center" style={{ color: 'var(--color-primary)' }}>
                Nos centres de détatouage {getDepartmentWithPreposition(department.name)}
              </h2>
              <p className="text-center">
                Nous couvrons {department.cities.length} ville{department.cities.length > 1 ? "s" : ""} du
                département {department.name} pour vous offrir un service de proximité. Quelle que soit
                votre localisation, vous trouverez un centre équipé des technologies laser les plus
                performantes.
              </p>
            </section>

            <section className="my-12">
              <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--color-primary)' }}>
                Sélectionnez votre ville
              </h2>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid var(--color-border)', background: 'var(--color-white)' }}
          >
            {/* Table header - desktop */}
            <div
              className="hidden md:grid grid-cols-12 items-center px-6 py-3"
              style={{ background: 'var(--color-bg-alt)', borderBottom: '1px solid var(--color-border)' }}
            >
              <div className="col-span-1 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                CP
              </div>
              <div className="col-span-8 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                Ville
              </div>
              <div className="col-span-3"></div>
            </div>

            {/* City rows */}
            {sortedCities.map((city, index) => (
              <Link
                key={city.id}
                href={`/ville/${city.slug}`}
                className="grid grid-cols-1 md:grid-cols-12 items-center px-6 py-4 group transition-colors duration-150 hover:bg-[var(--color-primary-lighter)]"
                style={{
                  borderBottom: index !== sortedCities.length - 1 ? '1px solid var(--color-border-light, #f0f0f0)' : 'none',
                }}
              >
                <div className="md:col-span-1 mb-1 md:mb-0">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg font-bold text-sm"
                    style={{ background: 'var(--color-primary-lighter)', color: 'var(--color-primary)' }}
                  >
                    {city.postalCode.slice(0, 2)}
                  </span>
                </div>
                <div className="md:col-span-8 mb-1 md:mb-0">
                  <span
                    className="font-semibold text-base group-hover:text-[var(--color-primary)] transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {city.name}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--text-tertiary)', marginLeft: '0.5rem' }}>
                    {city.postalCode}
                  </span>
                </div>
                <div className="md:col-span-3 hidden md:flex justify-end">
                  <span
                    className="inline-flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Voir la ville
                    <ChevronRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section
          className="rounded-2xl p-10 md:p-14 my-16 shadow-xl"
          style={{ background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%)' }}
        >
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
              style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
            >
              Pourquoi choisir notre technologie laser ?
            </h2>
            <p
              className="text-lg md:text-xl mb-10 text-center leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.92)' }}
            >
              Dans le {department.name}, nos centres sont équipés de lasers Q-Switched de dernière
              génération pour un détatouage efficace et sécurisé.
            </p>
            <ul className="space-y-5 max-w-xl mx-auto">
              {[
                "Technologie laser certifiée et sécurisée",
                "Protocole médical personnalisé",
                "Résultats visibles dès les premières séances",
                "Opérateurs qualifiés et expérimentés",
                "Consultation et devis gratuits",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff' }}
                  >
                    ✓
                  </span>
                  <span className="text-base md:text-lg" style={{ color: '#ffffff' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

            <QuoteForm />

            {neighborDepartments.length > 0 && (
              <section className="mt-12 pt-8">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--color-primary)' }}>
              Départements voisins
            </h2>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--color-border)', background: 'var(--color-white)' }}
            >
              {/* Table header - desktop */}
              <div
                className="hidden md:grid grid-cols-12 items-center px-6 py-3"
                style={{ background: 'var(--color-bg-alt)', borderBottom: '1px solid var(--color-border)' }}
              >
                <div className="col-span-1 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                  N°
                </div>
                <div className="col-span-5 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                  Département
                </div>
                <div className="col-span-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                  Villes couvertes
                </div>
                <div className="col-span-3"></div>
              </div>

              {/* Department rows */}
              {neighborDepartments.map((neighborNumber, index) => {
                const neighborDept = allDepartments.find(d => d.number === neighborNumber);
                if (!neighborDept) return null;
                return (
                  <Link
                    key={neighborDept.number}
                    href={`/departement/${neighborDept.slug}`}
                    className="grid grid-cols-1 md:grid-cols-12 items-center px-6 py-4 group transition-colors duration-150 hover:bg-[var(--color-primary-lighter)]"
                    style={{
                      borderBottom: index !== neighborDepartments.length - 1 ? '1px solid var(--color-border-light, #f0f0f0)' : 'none',
                    }}
                  >
                    <div className="md:col-span-1 mb-1 md:mb-0">
                      <span
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg font-bold text-sm"
                        style={{ background: 'var(--color-primary-lighter)', color: 'var(--color-primary)' }}
                      >
                        {neighborDept.number}
                      </span>
                    </div>
                    <div className="md:col-span-5 mb-1 md:mb-0">
                      <span
                        className="font-semibold text-base group-hover:text-[var(--color-primary)] transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {neighborDept.name}
                      </span>
                    </div>
                    <div className="md:col-span-3 mb-1 md:mb-0">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: 'var(--color-primary-lighter)', color: 'var(--color-primary-dark)' }}
                      >
                        {neighborDept.cities.length} ville{neighborDept.cities.length > 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="md:col-span-3 hidden md:flex justify-end">
                      <span
                        className="inline-flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        Voir le département
                        <ChevronRightIcon className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
            )}
          </article>
        </div>
      </div>
    </>
  );
}
