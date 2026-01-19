import { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { Euro, TrendingUp, Calendar, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Prix Détatouage Laser - Tarifs et Estimations",
  description:
    "Découvrez nos tarifs de détatouage laser. Prix par séance selon la taille du tatouage. Devis gratuit et personnalisé.",
  alternates: {
    canonical: "/prix",
  },
};

export default function PrixPage() {
  return (
    <>
      <HeroSection
        imageSrc="/images/Contact-detatouage.png"
        imageAlt="Tarifs détatouage laser"
        title="Prix du Détatouage Laser"
        subtitle="Transparence sur nos tarifs et facteurs de prix"
        ctaText="Obtenir mon devis gratuit"
        ctaHref="#quote-form"
        height="medium"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0077b6] mb-6">
              Combien coûte un détatouage laser ?
            </h2>
            <p className="text-lg text-[#6c757d] leading-relaxed">
              Le prix d'un détatouage varie selon plusieurs facteurs. Nous vous proposons une{" "}
              <strong>tarification transparente</strong> basée sur la taille, la couleur et la complexité de votre tatouage.
            </p>
          </div>

          {/* Tableau des tarifs */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-[#0077b6] mb-6 text-center">
              Tarifs indicatifs par séance
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-[#e9ecef] rounded-lg overflow-hidden">
                <thead className="bg-[#0077b6] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Taille du tatouage</th>
                    <th className="px-6 py-4 text-center font-semibold">Dimensions approximatives</th>
                    <th className="px-6 py-4 text-right font-semibold">Prix par séance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e9ecef]">
                  <tr className="hover:bg-[#f8f9fa] transition">
                    <td className="px-6 py-4 font-medium">Très petit</td>
                    <td className="px-6 py-4 text-center text-[#6c757d]">Moins de 5cm²</td>
                    <td className="px-6 py-4 text-right text-[#0077b6] font-bold">80€ - 120€</td>
                  </tr>
                  <tr className="hover:bg-[#f8f9fa] transition">
                    <td className="px-6 py-4 font-medium">Petit</td>
                    <td className="px-6 py-4 text-center text-[#6c757d]">5cm² - 10cm² (carte bancaire)</td>
                    <td className="px-6 py-4 text-right text-[#0077b6] font-bold">120€ - 180€</td>
                  </tr>
                  <tr className="hover:bg-[#f8f9fa] transition">
                    <td className="px-6 py-4 font-medium">Moyen</td>
                    <td className="px-6 py-4 text-center text-[#6c757d]">10cm² - 25cm² (main)</td>
                    <td className="px-6 py-4 text-right text-[#0077b6] font-bold">180€ - 250€</td>
                  </tr>
                  <tr className="hover:bg-[#f8f9fa] transition">
                    <td className="px-6 py-4 font-medium">Grand</td>
                    <td className="px-6 py-4 text-center text-[#6c757d]">25cm² - 50cm² (feuille A4)</td>
                    <td className="px-6 py-4 text-right text-[#0077b6] font-bold">250€ - 350€</td>
                  </tr>
                  <tr className="hover:bg-[#f8f9fa] transition">
                    <td className="px-6 py-4 font-medium">Très grand</td>
                    <td className="px-6 py-4 text-center text-[#6c757d]">Plus de 50cm²</td>
                    <td className="px-6 py-4 text-right text-[#0077b6] font-bold">Sur devis</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-[#48cae4]/10 border-l-4 border-[#48cae4] p-6 rounded">
              <p className="text-[#0077b6] font-semibold mb-2">
                💡 Ces tarifs sont donnés à titre indicatif
              </p>
              <p className="text-[#6c757d]">
                Le prix final dépend de nombreux facteurs. Demandez votre devis gratuit pour obtenir un tarif précis adapté à votre tatouage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facteurs de prix */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0077b6] mb-12">
            Les facteurs qui influencent le prix
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-[#0077b6]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Palette className="w-7 h-7 text-[#0077b6]" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-[#0077b6]">Couleur de l'encre</h3>
              <p className="text-[#6c757d] mb-3">
                Les tatouages <strong>noirs</strong> sont plus faciles à traiter que les couleurs.
              </p>
              <ul className="text-sm text-[#6c757d] space-y-1">
                <li>• Noir : Le plus simple</li>
                <li>• Rouge/Orange : Moyennement difficile</li>
                <li>• Vert/Bleu clair : Plus résistant</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-[#0077b6]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-[#0077b6]" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-[#0077b6]">Densité et remplissage</h3>
              <p className="text-[#6c757d] mb-3">
                Un tatouage <strong>fortement rempli</strong> nécessite plus de séances.
              </p>
              <ul className="text-sm text-[#6c757d] space-y-1">
                <li>• Trait fin : Moins de séances</li>
                <li>• Remplissage partiel : Moyen</li>
                <li>• Remplissage total : Plus long</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-[#0077b6]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-[#0077b6]" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-[#0077b6]">Ancienneté du tatouage</h3>
              <p className="text-[#6c757d] mb-3">
                Les <strong>tatouages anciens</strong> sont souvent plus faciles à enlever.
              </p>
              <ul className="text-sm text-[#6c757d] space-y-1">
                <li>• + 5 ans : Plus facile</li>
                <li>• 1-5 ans : Moyen</li>
                <li>• Récent : Plus résistant</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-[#0077b6]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Euro className="w-7 h-7 text-[#0077b6]" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-[#0077b6]">Qualité de l'encre</h3>
              <p className="text-[#6c757d] mb-3">
                L'encre <strong>professionnelle</strong> se retire généralement mieux que l'amateur.
              </p>
              <ul className="text-sm text-[#6c757d] space-y-1">
                <li>• Pro : Meilleur résultat</li>
                <li>• Amateur : Variable</li>
                <li>• Prison : Plus difficile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coût total estimé */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#0077b6] mb-8">
              Estimation du coût total
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#f8f9fa] p-8 rounded-lg border-2 border-[#e9ecef]">
                <h3 className="text-xl font-semibold text-[#0077b6] mb-4">
                  Tatouage petit (noir uniquement)
                </h3>
                <div className="space-y-3 text-[#6c757d]">
                  <p><strong>Prix par séance:</strong> 120€</p>
                  <p><strong>Nombre de séances:</strong> 5-6</p>
                  <div className="border-t border-[#e9ecef] pt-3 mt-3">
                    <p className="text-2xl font-bold text-[#0077b6]">
                      600€ - 720€
                    </p>
                    <p className="text-sm text-[#6c757d]">Coût total estimé</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] p-8 rounded-lg border-2 border-[#e9ecef]">
                <h3 className="text-xl font-semibold text-[#0077b6] mb-4">
                  Tatouage moyen (couleurs)
                </h3>
                <div className="space-y-3 text-[#6c757d]">
                  <p><strong>Prix par séance:</strong> 220€</p>
                  <p><strong>Nombre de séances:</strong> 8-10</p>
                  <div className="border-t border-[#e9ecef] pt-3 mt-3">
                    <p className="text-2xl font-bold text-[#0077b6]">
                      1 760€ - 2 200€
                    </p>
                    <p className="text-sm text-[#6c757d]">Coût total estimé</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0077b6] to-[#48cae4] text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Obtenez votre devis personnalisé gratuit
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Chaque tatouage est unique. Pour un tarif précis adapté à votre situation, 
                remplissez notre formulaire de devis gratuit.
              </p>
              <a
                href="#quote-form"
                className="inline-block bg-white text-[#0077b6] px-8 py-4 rounded-lg font-semibold hover:bg-[#f8f9fa] transition text-lg"
              >
                Demander mon devis gratuit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <div className="container mx-auto px-4">
        <QuoteForm />
      </div>

      {/* FAQ Prix */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#0077b6] mb-8">
            Questions fréquentes sur les prix
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer text-[#0077b6]">
                Puis-je payer en plusieurs fois ?
              </summary>
              <p className="mt-4 text-[#6c757d]">
                Oui, nous proposons des solutions de paiement échelonné selon la durée du traitement. Contactez-nous pour plus d'informations.
              </p>
            </details>
            <details className="bg-white p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer text-[#0077b6]">
                Y a-t-il des frais cachés ?
              </summary>
              <p className="mt-4 text-[#6c757d]">
                Non, nos tarifs sont totalement transparents. Le prix annoncé inclut la consultation, le traitement laser et le suivi post-séance.
              </p>
            </details>
            <details className="bg-white p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer text-[#0077b6]">
                Le détatouage est-il remboursé par la Sécurité Sociale ?
              </summary>
              <p className="mt-4 text-[#6c757d]">
                Le détatouage esthétique n'est généralement pas pris en charge. Certaines mutuelles peuvent offrir une participation. Renseignez-vous auprès de votre mutuelle.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
