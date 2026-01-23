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
          <div className="text-center mx-auto mb-16" style={{ maxWidth: '800px' }}>
            <span className="badge badge-primary mb-4">Confort</span>
            <h2 className="mb-6">
              Est-ce <span className="text-gradient">douloureux</span> ?
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Une expérience supportable avec des solutions pour minimiser l'inconfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'var(--color-primary-lighter)' }}
              >
                <Heart className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-3">La sensation</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Comparable à un élastique qui claque sur la peau. L'intensité varie selon la zone et votre sensibilité.
              </p>
            </div>

            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'var(--color-primary-lighter)' }}
              >
                <Shield className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Crème anesthésiante</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Application 30 minutes avant la séance pour minimiser considérablement l'inconfort.
              </p>
            </div>

            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'var(--color-primary-lighter)' }}
              >
                <Sparkles className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Glace pendant traitement</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Utilisation de glace pendant le laser pour un confort maximal. La plupart des patients trouvent cela supportable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Estimation durée */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mx-auto mb-16" style={{ maxWidth: '800px' }}>
            <span className="badge badge-primary mb-4">Durée du traitement</span>
            <h2 className="mb-6">
              Combien de séances <span className="text-gradient">nécessaires</span> ?
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              La durée varie selon plusieurs facteurs, mais voici ce que vous devez savoir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'var(--color-primary-lighter)' }}
              >
                <Clock className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Tatouages noirs</h3>
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                5-8 séances
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                Les plus faciles à traiter. Le laser absorbe mieux le noir.
              </p>
            </div>

            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'var(--color-primary-lighter)' }}
              >
                <Sparkles className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Tatouages colorés</h3>
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-secondary)' }}>
                8-12 séances
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                Certaines couleurs (vert, bleu clair) sont plus résistantes au laser.
              </p>
            </div>

            <div className="card text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'var(--color-primary-lighter)' }}
              >
                <Award className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Entre chaque séance</h3>
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                6-8 semaines
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                Temps nécessaire pour que votre corps élimine l'encre fragmentée.
              </p>
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
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mx-auto mb-16" style={{ maxWidth: '800px' }}>
            <span className="badge badge-primary mb-4">FAQ</span>
            <h2 className="mb-6">
              Questions <span className="text-gradient">fréquentes</span>
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Trouvez les réponses aux questions les plus courantes sur le détatouage laser
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                Combien coûte un détatouage ?
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Le prix varie selon la surface du tatouage. Comptez en moyenne entre 80€ et 300€ par séance. Nous proposons des devis gratuits et personnalisés.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                Peut-on retatouer sur un détatouage ?
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Oui, le "cover" est tout à fait possible une fois la peau complètement cicatrisée après le traitement laser.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                Est-ce que le détatouage fait mal ?
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                La sensation est comparable à un claquement d'élastique. Une crème anesthésiante est appliquée avant la séance pour minimiser l'inconfort.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                Comment est la peau après un détatouage ?
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Des rougeurs et un effet "givre" (frosting) apparaissent immédiatement, suivis de croûtelles pendant quelques jours. La cicatrisation complète prend 2-3 semaines.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                Combien de temps entre les séances ?
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Il faut laisser 6 à 8 semaines minimum entre chaque séance pour permettre au système lymphatique d'éliminer l'encre fragmentée.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                Les résultats sont-ils garantis ?
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Le laser Q-Switched est la technique la plus efficace, mais les résultats varient selon le type d'encre, la profondeur et votre peau. Un bilan gratuit vous permettra d'avoir une estimation précise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Grid */}
      <DepartmentGrid departments={departments} />
    </>
  );
}
