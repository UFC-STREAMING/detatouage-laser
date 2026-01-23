import { Metadata } from "next";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { Testimonials } from "@/components/ui/Testimonials";
import { DepartmentGrid } from "@/components/ui/DepartmentGrid";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { getAllDepartments } from "@/data/cities";
import { Sparkles, Shield, Clock, Award, Zap, Heart, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Détatouage Laser en France : Spécialistes Certifiés | Tatouage Temporaire",
  description:
    "Centre de détatouage laser certifié en France. Technologie Q-Switched pour un retrait efficace et sécurisé. Devis gratuit partout en France.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const departments = getAllDepartments();

  return (
    <>
      <FAQSchema />

      {/* Hero Section */}
      <HeroSection
        imageSrc="/images/Acceuil-detatouage.png"
        imageAlt="Centre de détatouage laser en France"
        title="Détatouage Laser en France : Spécialistes Certifiés"
        subtitle="Technologie laser de dernière génération pour un retrait efficace et sécurisé de vos tatouages"
        ctaText="Obtenir mon devis gratuit"
        ctaHref="#quote-form"
        height="large"
      />

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mx-auto mb-16" style={{ maxWidth: '800px' }}>
            <span className="badge badge-primary mb-4">Notre expertise</span>
            <h2 className="mb-6">
              Pourquoi choisir notre <span className="text-gradient">technologie laser</span> ?
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Une technologie de pointe et une expertise reconnue pour des résultats optimaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'var(--color-primary-lighter)' }}
              >
                <Sparkles className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Technologie avancée</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Laser Q-Switched de dernière génération pour des résultats optimaux
              </p>
            </div>

            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'var(--color-primary-lighter)' }}
              >
                <Shield className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Sûr et efficace</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Protocole médical sécurisé et certifié
              </p>
            </div>

            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'var(--color-primary-lighter)' }}
              >
                <Clock className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Séances rapides</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                15 à 30 minutes selon la zone traitée
              </p>
            </div>

            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'var(--color-primary-lighter)' }}
              >
                <Award className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Expertise reconnue</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Plus de 10 ans d'expérience dans le détatouage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comment ça marche */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mx-auto mb-16" style={{ maxWidth: '800px' }}>
            <span className="badge badge-primary mb-4">Le processus</span>
            <h2 className="mb-6">
              Comment fonctionne le <span className="text-gradient">détatouage laser</span> ?
            </h2>
          </div>

          {/* Explication technique */}
          <div className="mx-auto mb-12" style={{ maxWidth: '900px' }}>
            <div className="card" style={{ background: 'linear-gradient(135deg, var(--color-primary-lighter), var(--color-white))' }}>
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--color-primary)' }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Fragmentation de l'encre par le laser</h3>
                  <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                    Le laser Q-Switched émet des impulsions ultra-courtes qui <strong>fragmentent les pigments d'encre</strong> en particules microscopiques.
                    Ces particules sont ensuite naturellement éliminées par votre système lymphatique.
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Le laser cible uniquement l'encre sans endommager la peau environnante,
                    garantissant un traitement <strong>sûr et efficace</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Étapes du processus */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto" style={{ maxWidth: '1000px' }}>
            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mb-6 mx-auto"
                style={{ background: 'var(--color-primary)', color: 'white' }}
              >
                1
              </div>
              <h4 className="text-lg font-semibold mb-3">Consultation</h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Évaluation du tatouage et plan de traitement personnalisé adapté à votre peau
              </p>
            </div>

            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mb-6 mx-auto"
                style={{ background: 'var(--color-primary)', color: 'white' }}
              >
                2
              </div>
              <h4 className="text-lg font-semibold mb-3">Traitement laser</h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Séances de 15-30 minutes espacées de 6-8 semaines pour une efficacité optimale
              </p>
            </div>

            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mb-6 mx-auto"
                style={{ background: 'var(--color-primary)', color: 'white' }}
              >
                3
              </div>
              <h4 className="text-lg font-semibold mb-3">Élimination</h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                L'encre fragmentée est éliminée naturellement par votre organisme
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Est-ce douloureux */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12 mx-auto" style={{ maxWidth: '800px' }}>
            <span className="badge badge-primary mb-4">Confort</span>
            <h2 className="mb-4">Est-ce douloureux ?</h2>
          </div>

          <div className="mx-auto" style={{ maxWidth: '900px' }}>
            <div className="card">
              <div className="flex items-start gap-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--color-primary-lighter)' }}
                >
                  <Heart className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">Honnêteté sur la sensation</h3>
                  <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                    La sensation est souvent comparée à <strong>un élastique qui claque sur la peau</strong>.
                    L'intensité varie selon la zone traitée et votre sensibilité personnelle.
                  </p>
                  <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                    Pour minimiser l'inconfort, nous appliquons une <strong>crème anesthésiante</strong> 30 minutes avant la séance.
                    De la glace peut également être utilisée pendant le traitement.
                  </p>
                  <div
                    className="p-4 rounded-xl border-l-4"
                    style={{
                      background: 'var(--color-primary-lighter)',
                      borderColor: 'var(--color-primary)'
                    }}
                  >
                    <p style={{ color: 'var(--color-primary-dark)' }} className="font-semibold">
                      💡 La plupart de nos patients trouvent la sensation tout à fait supportable et ne regrettent jamais leur décision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Estimation durée */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mx-auto mb-12" style={{ maxWidth: '800px' }}>
            <span className="badge badge-primary mb-4">Durée du traitement</span>
            <h2 className="mb-4">Combien de séances sont nécessaires ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mx-auto" style={{ maxWidth: '900px' }}>
            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'var(--color-primary)' }}
              >
                <span className="text-2xl font-bold text-white">N</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                Tatouages noirs
              </h3>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                Les plus faciles à traiter. Le laser absorbe mieux le noir.
              </p>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                5-8 séances
              </div>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>En moyenne</p>
            </div>

            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'var(--color-secondary)' }}
              >
                <span className="text-2xl font-bold text-white">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-secondary)' }}>
                Tatouages colorés
              </h3>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                Certaines couleurs (vert, bleu clair) sont plus résistantes.
              </p>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-secondary)' }}>
                8-12 séances
              </div>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>En moyenne</p>
            </div>
          </div>

          <div className="mx-auto" style={{ maxWidth: '900px' }}>
            <div
              className="card"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary-lighter), var(--color-white))',
                borderLeft: '4px solid var(--color-primary)'
              }}
            >
              <h4 className="text-lg font-semibold mb-6" style={{ color: 'var(--color-primary)' }}>
                Facteurs influençant la durée du traitement :
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Profondeur de l\'encre',
                  'Ancienneté du tatouage',
                  'Qualité de l\'encre utilisée',
                  'Votre système immunitaire',
                  'Densité du tatouage',
                  'Localisation sur le corps'
                ].map((factor, index) => (
                  <li key={index} className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: 'var(--color-success)' }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Quote Form */}
      <div className="section bg-white">
        <div className="container">
          <QuoteForm />
        </div>
      </div>

      {/* FAQ Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mx-auto mb-12" style={{ maxWidth: '800px' }}>
            <span className="badge badge-primary mb-4">FAQ</span>
            <h2 className="mb-4">Questions fréquentes</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Trouvez les réponses aux questions les plus courantes sur le détatouage laser
            </p>
          </div>

          <div className="space-y-4 mx-auto" style={{ maxWidth: '800px' }}>
            {[
              {
                question: 'Combien coûte un détatouage ?',
                answer: 'Le prix varie selon la surface du tatouage. Comptez en moyenne entre 80€ et 300€ par séance. Nous proposons des devis gratuits et personnalisés.'
              },
              {
                question: 'Peut-on retatouer sur un détatouage ?',
                answer: 'Oui, le "cover" est tout à fait possible une fois la peau complètement cicatrisée après le traitement laser.'
              },
              {
                question: 'Est-ce que le détatouage fait mal ?',
                answer: 'La sensation est comparable à un claquement d\'élastique. Une crème anesthésiante est appliquée avant la séance pour minimiser l\'inconfort.'
              },
              {
                question: 'Comment est la peau après un détatouage ?',
                answer: 'Des rougeurs et un effet "givre" (frosting) apparaissent immédiatement, suivis de croûtelles pendant quelques jours. La cicatrisation complète prend 2-3 semaines.'
              },
              {
                question: 'Combien de temps entre les séances ?',
                answer: 'Il faut laisser 6 à 8 semaines minimum entre chaque séance pour permettre au système lymphatique d\'éliminer l\'encre fragmentée.'
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="card group"
                {...(index === 0 ? { open: true } : {})}
              >
                <summary
                  className="font-semibold text-lg cursor-pointer flex items-center justify-between"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {faq.question}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Department Grid */}
      <DepartmentGrid departments={departments} />
    </>
  );
}
