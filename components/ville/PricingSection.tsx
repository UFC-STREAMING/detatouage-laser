type PricingSectionProps = {
  cityName: string;
};

const pricingTiers = [
  {
    zone: "Petite zone",
    size: "Moins de 10 cm",
    price: "90€ - 120€",
    featured: false,
  },
  {
    zone: "Zone moyenne",
    size: "10 à 20 cm",
    price: "150€ - 200€",
    featured: true,
  },
  {
    zone: "Grande zone",
    size: "Plus de 20 cm",
    price: "Dès 300€",
    featured: false,
  },
];

export function PricingSection({ cityName }: PricingSectionProps) {
  return (
    <section className="mb-16">
      <div className="text-center mb-12" style={{ textAlign: 'center' }}>
        <span className="badge badge-primary mb-4 inline-flex">Tarifs transparents</span>
        <h2
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ color: "var(--color-primary)" }}
        >
          Tarifs du détatouage à {cityName}
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Prix par séance — devis exact sur photo
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6 items-center max-w-4xl mx-auto pt-10">
        {pricingTiers.map((tier) => (
          <div
            key={tier.zone}
            className={`relative rounded-2xl p-8 transition-all ${
              tier.featured ? "sm:scale-105 sm:py-10 sm:pt-12" : ""
            }`}
            style={{
              background: "var(--color-white)",
              border: tier.featured
                ? "2px solid var(--color-primary)"
                : "1px solid var(--color-grey-100)",
              boxShadow: tier.featured ? "var(--shadow-xl)" : "var(--shadow-md)",
              transitionDuration: "var(--transition-base)",
              transitionTimingFunction: "var(--ease-smooth)",
            }}
          >
            {/* Featured badge */}
            {tier.featured && (
              <span
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-1.5 text-sm font-semibold text-white rounded-full whitespace-nowrap z-10"
                style={{
                  background: "linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))",
                  boxShadow: "0 4px 12px rgba(234, 107, 66, 0.3)",
                }}
              >
                Le plus demandé
              </span>
            )}

            <div className="text-center">
              <h3
                className="text-lg font-bold mb-1"
                style={{ color: "var(--color-primary)" }}
              >
                {tier.zone}
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                {tier.size}
              </p>

              <p
                className="text-3xl md:text-4xl font-black mb-1"
                style={{
                  color: tier.featured
                    ? "var(--color-secondary-dark)"
                    : "var(--color-primary)",
                }}
              >
                {tier.price}
              </p>
              <p
                className="text-sm mb-6"
                style={{ color: "var(--text-tertiary)" }}
              >
                par séance
              </p>

              <a
                href="#quote-form"
                className={`btn btn-sm w-full ${
                  tier.featured ? "btn-primary" : "btn-outline"
                }`}
              >
                Devis gratuit
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
