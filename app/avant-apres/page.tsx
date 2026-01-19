import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { QuoteForm } from "@/components/ui/QuoteForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Avant/Après Détatouage Laser - Résultats Photos",
  description:
    "Découvrez les résultats du détatouage laser. Photos avant/après des traitements. Phases de cicatrisation expliquées.",
  alternates: {
    canonical: "/avant-apres",
  },
};

export default function AvantApresPage() {
  return (
    <>
      <HeroSection
        imageSrc="/images/avant-apres-detatouage.png"
        imageAlt="Résultats avant après détatouage laser"
        title="Résultats Avant/Après Détatouage Laser"
        subtitle="Découvrez les étapes de transformation"
        ctaText="Voir mes résultats potentiels"
        ctaHref="#quote-form"
        height="medium"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#0077b6] mb-12">
              Comprendre les phases du détatouage
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-[#f8f9fa] p-6 rounded-lg">
                <div className="bg-[#0077b6] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#0077b6]">État initial</h3>
                <p className="text-[#6c757d]">
                  Le tatouage est clairement visible avant le premier traitement.
                </p>
              </div>

              <div className="bg-[#f8f9fa] p-6 rounded-lg">
                <div className="bg-[#0077b6] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#0077b6]">Frosting immédiat</h3>
                <p className="text-[#6c757d]">
                  Un effet "givre" blanc apparaît immédiatement après le laser, signe que le traitement fonctionne.
                </p>
              </div>

              <div className="bg-[#f8f9fa] p-6 rounded-lg">
                <div className="bg-[#0077b6] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#0077b6]">Cicatrisation</h3>
                <p className="text-[#6c757d]">
                  Formation de croûtelles pendant 7-10 jours. Ne pas gratter !
                </p>
              </div>

              <div className="bg-[#f8f9fa] p-6 rounded-lg">
                <div className="bg-[#0077b6] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#0077b6]">Résultat final</h3>
                <p className="text-[#6c757d]">
                  L'encre s'estompe progressivement après plusieurs séances.
                </p>
              </div>
            </div>

            {/* Image Avant/Après */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center text-[#0077b6] mb-6">
                Exemple d'évolution réelle sur 4 séances
              </h3>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/evolution-detatouage.jpg"
                  alt="Évolution d'un détatouage laser sur 4 séances"
                  width={1200}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p className="text-center text-sm text-[#6c757d] mt-4">
                Résultat progressif d'un détatouage laser : de l'état initial à l'estompement significatif après plusieurs séances
              </p>
            </div>

            <div className="bg-[#48cae4]/10 border-l-4 border-[#48cae4] p-6 rounded mb-12">
              <h3 className="text-xl font-semibold text-[#0077b6] mb-3">
                📸 L'importance du suivi photographique
              </h3>
              <p className="text-[#6c757d] leading-relaxed">
                Nous prenons des photos avant chaque séance pour suivre l'évolution de votre détatouage.
                Les résultats sont progressifs et il est parfois difficile de percevoir les changements au quotidien.
                Les photos permettent de constater objectivement l'efficacité du traitement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#0077b6] mb-8">
              À quoi s'attendre après une séance
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-[#0077b6]">Immédiatement après</h3>
                <ul className="space-y-2 text-[#6c757d]">
                  <li>✓ Effet "frosting" (blanchiment temporaire)</li>
                  <li>✓ Rougeur et légère enflure</li>
                  <li>✓ Sensation de chaleur pendant quelques heures</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-[#0077b6]">Jours 1-3</h3>
                <ul className="space-y-2 text-[#6c757d]">
                  <li>✓ Le tatouage peut paraître plus foncé</li>
                  <li>✓ Formation possible de petites cloques</li>
                  <li>✓ Application de crème cicatrisante recommandée</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-[#0077b6]">Jours 4-10</h3>
                <ul className="space-y-2 text-[#6c757d]">
                  <li>✓ Apparition de croûtelles (ne pas gratter !)</li>
                  <li>✓ Démangeaisons possibles</li>
                  <li>✓ Éviter l'exposition au soleil</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-[#0077b6]">Après 2-3 semaines</h3>
                <ul className="space-y-2 text-[#6c757d]">
                  <li>✓ La peau est complètement cicatrisée</li>
                  <li>✓ Le tatouage commence à s'estomper</li>
                  <li>✓ L'élimination continue pendant 6-8 semaines</li>
                </ul>
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
