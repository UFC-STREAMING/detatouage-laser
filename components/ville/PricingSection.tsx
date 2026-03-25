type PricingSectionProps = {
  cityName: string;
};

export function PricingSection({ cityName }: PricingSectionProps) {
  return (
    <section className="mb-16">
      <div className="text-center mb-8" style={{ textAlign: 'center' }}>
        <h2
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ color: "var(--color-primary)" }}
        >
          Prix du détatouage laser à {cityName}
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Tarifs indicatifs par séance — consultation gratuite pour un devis exact
        </p>
      </div>

      {/* Tableau détaillé des prix — optimisé rich snippets */}
      <div className="max-w-3xl mx-auto">
        <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--color-grey-200)' }}>
          <table className="w-full border-collapse text-left">
            <thead>
              <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                <th className="px-5 py-3.5 font-semibold text-sm">Zone</th>
                <th className="px-5 py-3.5 font-semibold text-sm">Taille</th>
                <th className="px-5 py-3.5 font-semibold text-sm">Prix / séance</th>
                <th className="px-5 py-3.5 font-semibold text-sm">Séances estimées</th>
              </tr>
            </thead>
            <tbody className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              <tr style={{ borderBottom: '1px solid var(--color-grey-200)' }}>
                <td className="px-5 py-3.5 font-medium" style={{ color: 'var(--text-primary)' }}>Très petite zone</td>
                <td className="px-5 py-3.5">&lt; 5 cm²</td>
                <td className="px-5 py-3.5 font-bold" style={{ color: 'var(--color-primary)' }}>29€ — 59€</td>
                <td className="px-5 py-3.5">4 à 6</td>
              </tr>
              <tr style={{ background: 'var(--color-grey-50)', borderBottom: '1px solid var(--color-grey-200)' }}>
                <td className="px-5 py-3.5 font-medium" style={{ color: 'var(--text-primary)' }}>Petite zone</td>
                <td className="px-5 py-3.5">5 — 10 cm²</td>
                <td className="px-5 py-3.5 font-bold" style={{ color: 'var(--color-primary)' }}>59€ — 99€</td>
                <td className="px-5 py-3.5">5 à 8</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-grey-200)' }}>
                <td className="px-5 py-3.5 font-medium" style={{ color: 'var(--text-primary)' }}>Zone moyenne</td>
                <td className="px-5 py-3.5">10 — 20 cm²</td>
                <td className="px-5 py-3.5 font-bold" style={{ color: 'var(--color-primary)' }}>100€ — 149€</td>
                <td className="px-5 py-3.5">6 à 10</td>
              </tr>
              <tr style={{ background: 'var(--color-grey-50)', borderBottom: '1px solid var(--color-grey-200)' }}>
                <td className="px-5 py-3.5 font-medium" style={{ color: 'var(--text-primary)' }}>Grande zone</td>
                <td className="px-5 py-3.5">20 — 35 cm²</td>
                <td className="px-5 py-3.5 font-bold" style={{ color: 'var(--color-primary)' }}>150€ — 199€</td>
                <td className="px-5 py-3.5">8 à 12</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-medium" style={{ color: 'var(--text-primary)' }}>Très grande zone</td>
                <td className="px-5 py-3.5">&gt; 35 cm²</td>
                <td className="px-5 py-3.5 font-bold" style={{ color: 'var(--color-primary)' }}>200€ — 299€</td>
                <td className="px-5 py-3.5">8 à 15</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm mt-4 text-center" style={{ color: 'var(--text-tertiary)' }}>
          * Le tarif exact dépend de la surface, densité et couleurs du tatouage.{" "}
          <a href="/prix" style={{ color: 'var(--color-primary)' }} className="font-semibold underline">
            Voir la grille complète
          </a>
        </p>
      </div>
    </section>
  );
}
