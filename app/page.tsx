import { Metadata } from "next";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { DepartmentGrid } from "@/components/ui/DepartmentGrid";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { getAllDepartments } from "@/data/cities";
import { Sparkles, Shield, Clock, Award, Zap, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Détatouage Laser en France : Spécialistes Certifiés",
  description:
    "Centre de détatouage laser certifié. Technologie Q-Switched pour un retrait efficace et sécurisé. Devis gratuit partout en France.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const departments = getAllDepartments();

  return (
    <>
      <FAQSchema />
      
      {/* Hero Section avec image */}
      <HeroSection
        imageSrc="/images/Acceuil-detatouage.png"
        imageAlt="Centre de détatouage laser en France"
        title="Détatouage Laser en France : Spécialistes Certifiés"
        subtitle="Technologie laser de dernière génération pour un retrait efficace et sécurisé"
        ctaText="Obtenir mon devis gratuit"
        ctaHref="#quote-form"
        height="large"
      />

      {/* Section Comment ça marche */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0077b6] mb-12">
            Comment fonctionne le détatouage laser ?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#f8f9fa] p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-[#0077b6] mb-4 flex items-center gap-3">
                <Zap className="w-6 h-6" />
                Fragmentation de l'encre par le laser
              </h3>
              <p className="text-lg text-[#6c757d] leading-relaxed mb-4">
                Le laser Q-Switched émet des impulsions ultra-courtes qui <strong>fragmentent les pigments d'encre</strong> en particules microscopiques. 
                Ces particules sont ensuite naturellement éliminées par votre système lymphatique.
              </p>
              <p className="text-lg text-[#6c757d] leading-relaxed">
                Le laser cible uniquement l'encre sans endommager la peau environnante, 
                garantissant un traitement <strong>sûr et efficace</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="bg-[#0077b6] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                  1
                </div>
                <h4 className="font-semibold text-lg mb-2">Consultation</h4>
                <p className="text-[#6c757d]">
                  Évaluation du tatouage et plan de traitement personnalisé
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-[#0077b6] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                  2
                </div>
                <h4 className="font-semibold text-lg mb-2">Traitement laser</h4>
                <p className="text-[#6c757d]">
                  Séances de 15-30 minutes espacées de 6-8 semaines
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-[#0077b6] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                  3
                </div>
                <h4 className="font-semibold text-lg mb-2">Élimination</h4>
                <p className="text-[#6c757d]">
                  L'encre fragmentée est éliminée naturellement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Est-ce douloureux */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#0077b6] mb-8">
              Est-ce douloureux ?
            </h2>
            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <Heart className="w-8 h-8 text-[#0077b6] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Honnêteté sur la sensation</h3>
                  <p className="text-lg text-[#6c757d] leading-relaxed mb-4">
                    La sensation est souvent comparée à <strong>un élastique qui claque sur la peau</strong>. 
                    L'intensité varie selon la zone traitée et votre sensibilité personnelle.
                  </p>
                  <p className="text-lg text-[#6c757d] leading-relaxed mb-4">
                    Pour minimiser l'inconfort, nous appliquons une <strong>crème anesthésiante</strong> 30 minutes avant la séance. 
                    De la glace peut également être utilisée pendant le traitement.
                  </p>
                  <div className="bg-[#48cae4]/10 border-l-4 border-[#48cae4] p-4 rounded">
                    <p className="text-[#0077b6] font-semibold">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0077b6] mb-12">
            Combien de séances sont nécessaires ?
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0077b6] mb-3">Tatouages noirs</h3>
              <p className="text-[#6c757d] mb-4">
                Les plus faciles à traiter. Le laser absorbe mieux le noir.
              </p>
              <div className="text-3xl font-bold text-[#0077b6]">5-8 séances</div>
              <p className="text-sm text-[#6c757d] mt-2">En moyenne</p>
            </div>

            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0077b6] mb-3">Tatouages colorés</h3>
              <p className="text-[#6c757d] mb-4">
                Certaines couleurs (vert, bleu clair) sont plus résistantes.
              </p>
              <div className="text-3xl font-bold text-[#0077b6]">8-12 séances</div>
              <p className="text-sm text-[#6c757d] mt-2">En moyenne</p>
            </div>
          </div>

          <div className="mt-8 max-w-4xl mx-auto bg-[#0077b6]/5 border border-[#0077b6]/20 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-3 text-[#0077b6]">Facteurs influençant la durée :</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#6c757d]">
              <li>✓ Profondeur de l'encre</li>
              <li>✓ Ancienneté du tatouage</li>
              <li>✓ Qualité de l'encre utilisée</li>
              <li>✓ Votre système immunitaire</li>
              <li>✓ Densité du tatouage</li>
              <li>✓ Localisation sur le corps</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0077b6] mb-12">
            Pourquoi choisir notre technologie laser ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg">
              <div className="bg-[#48cae4]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#48cae4]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Technologie avancée</h3>
              <p className="text-[#6c757d]">
                Laser Q-Switched de dernière génération
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg">
              <div className="bg-[#48cae4]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#48cae4]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sûr et efficace</h3>
              <p className="text-[#6c757d]">
                Protocole médical sécurisé
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg">
              <div className="bg-[#48cae4]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#48cae4]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Séances rapides</h3>
              <p className="text-[#6c757d]">
                15 à 30 minutes selon la zone
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg">
              <div className="bg-[#48cae4]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#48cae4]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expertise</h3>
              <p className="text-[#6c757d]">
                +10 ans d'expérience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <div className="container mx-auto px-4">
        <QuoteForm />
      </div>

      {/* FAQ Section avec Schema.org */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0077b6] mb-12">
            Questions fréquentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-[#f8f9fa] p-6 rounded-lg" open>
              <summary className="font-semibold text-lg cursor-pointer text-[#0077b6]">
                Combien coûte un détatouage ?
              </summary>
              <p className="mt-4 text-[#6c757d]">
                Le prix varie selon la surface. Comptez en moyenne entre 80€ et 300€ par séance.
              </p>
            </details>
            <details className="bg-[#f8f9fa] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer text-[#0077b6]">
                Peut-on retatouer sur un détatouage ?
              </summary>
              <p className="mt-4 text-[#6c757d]">
                Oui, le 'cover' est tout à fait possible une fois la peau cicatrisée.
              </p>
            </details>
            <details className="bg-[#f8f9fa] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer text-[#0077b6]">
                Est-ce que le détatouage fait mal ?
              </summary>
              <p className="mt-4 text-[#6c757d]">
                La sensation est comparable à un claquement d'élastique. Une crème anesthésiante peut être appliquée.
              </p>
            </details>
            <details className="bg-[#f8f9fa] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer text-[#0077b6]">
                Comment est la peau après un détatouage ?
              </summary>
              <p className="mt-4 text-[#6c757d]">
                Des rougeurs et un effet 'givre' (frosting) apparaissent immédiatement, suivis de croutelles pendant quelques jours.
              </p>
            </details>
            <details className="bg-[#f8f9fa] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer text-[#0077b6]">
                Combien de temps entre les séances ?
              </summary>
              <p className="mt-4 text-[#6c757d]">
                Il faut laisser le système lymphatique éliminer l'encre, soit 6 à 8 semaines minimum.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Department Grid */}
      <div className="container mx-auto px-4 pb-16">
        <DepartmentGrid departments={departments} />
      </div>
    </>
  );
}
