import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { QuoteForm } from "@/components/ui/QuoteForm";

export const metadata: Metadata = {
  title: "Résultats Après 1 Séance de Détatouage Laser",
  description:
    "Découvrez l'effet frosting et les premiers résultats dès la première séance de détatouage laser.",
  alternates: {
    canonical: "/resultats-1-seance",
  },
};

export default function Resultats1SeancePage() {
  return (
    <>
      <HeroSection
        imageSrc="/images/1-seance-detatouage.png"
        imageAlt="Résultats après 1 séance de détatouage laser"
        title="Résultats Après 1 Séance"
        subtitle="L'effet immédiat du laser : le frosting"
        ctaText="Voir mes résultats potentiels"
        ctaHref="#quote-form"
        height="medium"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#0077b6] mb-8">
              Qu'est-ce que le "Frosting" ?
            </h2>

            <div className="bg-[#f8f9fa] p-8 rounded-lg mb-8">
              <p className="text-lg text-[#6c757d] leading-relaxed mb-4">
                Le <strong>"frosting"</strong> (effet givre) est une réaction immédiate et normale après une séance de détatouage laser. 
                Il s'agit d'un <strong>blanchiment temporaire de la peau</strong> qui apparaît dans les secondes suivant le traitement.
              </p>
              <p className="text-lg text-[#6c757d] leading-relaxed">
                Cet effet est causé par la libération de gaz et de vapeur d'eau lorsque le laser fragmente les pigments d'encre. 
                C'est un <strong>signe positif</strong> que le traitement fonctionne !
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white border-2 border-[#e9ecef] p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-[#0077b6]">
                  ⏱️ Durée du frosting
                </h3>
                <p className="text-[#6c757d]">
                  L'effet blanc disparaît généralement après <strong>10 à 30 minutes</strong>. 
                  La peau retrouve ensuite une couleur rosée normale.
                </p>
              </div>

              <div className="bg-white border-2 border-[#e9ecef] p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-[#0077b6]">
                  🎯 Signification
                </h3>
                <p className="text-[#6c757d]">
                  Le frosting indique que le laser a bien <strong>ciblé et fragmenté l'encre</strong>. 
                  Plus il est prononcé, plus le traitement est efficace.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0077b6] to-[#48cae4] text-white p-8 rounded-lg text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Que se passe-t-il après le frosting ?
              </h3>
              <div className="max-w-2xl mx-auto text-left space-y-4">
                <div className="flex items-start gap-3">
                  <span className="bg-white/20 text-white px-3 py-1 rounded font-bold">1</span>
                  <p className="flex-1">
                    <strong>Heures suivantes :</strong> Rougeur et léger gonflement, sensation de chaleur
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-white/20 text-white px-3 py-1 rounded font-bold">2</span>
                  <p className="flex-1">
                    <strong>Jours 1-3 :</strong> Le tatouage peut paraître plus foncé (normal !)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-white/20 text-white px-3 py-1 rounded font-bold">3</span>
                  <p className="flex-1">
                    <strong>Jours 4-10 :</strong> Formation de croûtelles, début de l'élimination
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-white/20 text-white px-3 py-1 rounded font-bold">4</span>
                  <p className="flex-1">
                    <strong>Semaines 2-8 :</strong> Le tatouage s'estompe progressivement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <QuoteForm />
      </div>
    </>
  );
}
