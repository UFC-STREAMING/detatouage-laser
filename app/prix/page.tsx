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
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
              Combien coûte un détatouage laser ?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Le prix d'un détatouage varie selon plusieurs facteurs. Nous vous proposons une{" "}
              <strong>tarification transparente</strong> basée sur la taille, la couleur et la complexité de votre tatouage.
            </p>
          </div>

          {/* Tableau des tarifs */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6 text-center">
              Tarifs indicatifs par séance
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-[var(--color-grey-200)] rounded-lg overflow-hidden">
                <thead className="bg-[var(--color-primary)] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Taille du tatouage</th>
                    <th className="px-6 py-4 text-center font-semibold">Dimensions approximatives</th>
                    <th className="px-6 py-4 text-right font-semibold">Prix par séance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-grey-200)]">
                  <tr className="hover:bg-[var(--bg-secondary)] transition">
                    <td className="px-6 py-4 font-medium">Très petit</td>
                    <td className="px-6 py-4 text-center text-[var(--text-secondary)]">Moins de 5cm²</td>
                    <td className="px-6 py-4 text-right text-[var(--color-primary)] font-bold">80€ - 120€</td>
                  </tr>
                  <tr className="hover:bg-[var(--bg-secondary)] transition">
                    <td className="px-6 py-4 font-medium">Petit</td>
                    <td className="px-6 py-4 text-center text-[var(--text-secondary)]">5cm² - 10cm² (carte bancaire)</td>
                    <td className="px-6 py-4 text-right text-[var(--color-primary)] font-bold">120€ - 180€</td>
                  </tr>
                  <tr className="hover:bg-[var(--bg-secondary)] transition">
                    <td className="px-6 py-4 font-medium">Moyen</td>
                    <td className="px-6 py-4 text-center text-[var(--text-secondary)]">10cm² - 25cm² (main)</td>
                    <td className="px-6 py-4 text-right text-[var(--color-primary)] font-bold">180€ - 250€</td>
                  </tr>
                  <tr className="hover:bg-[var(--bg-secondary)] transition">
                    <td className="px-6 py-4 font-medium">Grand</td>
                    <td className="px-6 py-4 text-center text-[var(--text-secondary)]">25cm² - 50cm² (feuille A4)</td>
                    <td className="px-6 py-4 text-right text-[var(--color-primary)] font-bold">250€ - 350€</td>
                  </tr>
                  <tr className="hover:bg-[var(--bg-secondary)] transition">
                    <td className="px-6 py-4 font-medium">Très grand</td>
                    <td className="px-6 py-4 text-center text-[var(--text-secondary)]">Plus de 50cm²</td>
                    <td className="px-6 py-4 text-right text-[var(--color-primary)] font-bold">Sur devis</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-[var(--color-primary-lighter)] border-l-4 border-[var(--color-primary-light)] p-6 rounded">
              <p className="text-[var(--color-primary)] font-semibold mb-2">
                💡 Ces tarifs sont donnés à titre indicatif
              </p>
              <p className="text-[var(--text-secondary)]">
                Le prix final dépend de nombreux facteurs. Demandez votre devis gratuit pour obtenir un tarif précis adapté à votre tatouage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facteurs de prix */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            Les facteurs qui influencent le prix
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-[var(--color-primary-lighter)] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Palette className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-[var(--color-primary)]">Couleur de l'encre</h3>
              <p className="text-[var(--text-secondary)] mb-3">
                Les tatouages <strong>noirs</strong> sont plus faciles à traiter que les couleurs.
              </p>
              <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                <li>• Noir : Le plus simple</li>
                <li>• Rouge/Orange : Moyennement difficile</li>
                <li>• Vert/Bleu clair : Plus résistant</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-[var(--color-primary-lighter)] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-[var(--color-primary)]">Densité et remplissage</h3>
              <p className="text-[var(--text-secondary)] mb-3">
                Un tatouage <strong>fortement rempli</strong> nécessite plus de séances.
              </p>
              <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                <li>• Trait fin : Moins de séances</li>
                <li>• Remplissage partiel : Moyen</li>
                <li>• Remplissage total : Plus long</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-[var(--color-primary-lighter)] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-[var(--color-primary)]">Ancienneté du tatouage</h3>
              <p className="text-[var(--text-secondary)] mb-3">
                Les <strong>tatouages anciens</strong> sont souvent plus faciles à enlever.
              </p>
              <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                <li>• + 5 ans : Plus facile</li>
                <li>• 1-5 ans : Moyen</li>
                <li>• Récent : Plus résistant</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-[var(--color-primary-lighter)] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Euro className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-[var(--color-primary)]">Qualité de l'encre</h3>
              <p className="text-[var(--text-secondary)] mb-3">
                L'encre <strong>professionnelle</strong> se retire généralement mieux que l'amateur.
              </p>
              <ul className="text-sm text-[var(--text-secondary)] space-y-1">
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
            <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-8">
              Estimation du coût total
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[var(--bg-secondary)] p-8 rounded-lg border-2 border-[var(--color-grey-200)]">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                  Tatouage petit (noir uniquement)
                </h3>
                <div className="space-y-3 text-[var(--text-secondary)]">
                  <p><strong>Prix par séance:</strong> 120€</p>
                  <p><strong>Nombre de séances:</strong> 5-6</p>
                  <div className="border-t border-[var(--color-grey-200)] pt-3 mt-3">
                    <p className="text-2xl font-bold text-[var(--color-primary)]">
                      600€ - 720€
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">Coût total estimé</p>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--bg-secondary)] p-8 rounded-lg border-2 border-[var(--color-grey-200)]">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                  Tatouage moyen (couleurs)
                </h3>
                <div className="space-y-3 text-[var(--text-secondary)]">
                  <p><strong>Prix par séance:</strong> 220€</p>
                  <p><strong>Nombre de séances:</strong> 8-10</p>
                  <div className="border-t border-[var(--color-grey-200)] pt-3 mt-3">
                    <p className="text-2xl font-bold text-[var(--color-primary)]">
                      1 760€ - 2 200€
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">Coût total estimé</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Obtenez votre devis personnalisé gratuit
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Chaque tatouage est unique. Pour un tarif précis adapté à votre situation, 
                remplissez notre formulaire de devis gratuit.
              </p>
              <a
                href="#quote-form"
                className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--bg-secondary)] transition text-lg"
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
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[var(--color-primary)] mb-8">
            Questions fréquentes sur les prix
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer text-[var(--color-primary)]">
                Puis-je payer en plusieurs fois ?
              </summary>
              <p className="mt-4 text-[var(--text-secondary)]">
                Oui, nous proposons des solutions de paiement échelonné selon la durée du traitement. Contactez-nous pour plus d'informations.
              </p>
            </details>
            <details className="bg-white p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer text-[var(--color-primary)]">
                Y a-t-il des frais cachés ?
              </summary>
              <p className="mt-4 text-[var(--text-secondary)]">
                Non, nos tarifs sont totalement transparents. Le prix annoncé inclut la consultation, le traitement laser et le suivi post-séance.
              </p>
            </details>
            <details className="bg-white p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer text-[var(--color-primary)]">
                Le détatouage est-il remboursé par la Sécurité Sociale ?
              </summary>
              <p className="mt-4 text-[var(--text-secondary)]">
                Le détatouage esthétique n'est généralement pas pris en charge. Certaines mutuelles peuvent offrir une participation. Renseignez-vous auprès de votre mutuelle.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
