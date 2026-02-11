import { Zap, Palette, Globe } from "lucide-react";

type WhyUsSectionProps = {
  cityName: string;
};

export function WhyUsSection({ cityName }: WhyUsSectionProps) {
  const cards = [
    {
      icon: Zap,
      title: "Puissance Pico",
      subtitle: "Moins de séances",
      description:
        "Les impulsions picosecondes pulvérisent l'encre plus efficacement. Résultat : 30 à 50% de séances en moins qu'un laser classique.",
    },
    {
      icon: Palette,
      title: "Toutes couleurs",
      subtitle: "Bleu, vert, rouge",
      description:
        "Grâce au laser Ruby 694 nm intégré, nous effaçons les pigments bleus et verts que la plupart des centres ne peuvent pas traiter.",
    },
    {
      icon: Globe,
      title: "Toutes peaux",
      subtitle: "Peaux mates et noires",
      description:
        "Le Nd:YAG 1064 nm est sûr pour les phototypes IV à VI, sans risque d'hypopigmentation ni de cicatrices.",
    },
  ];

  return (
    <section className="mb-20">
      {/* Section header */}
      <div className="text-center mb-14" style={{ textAlign: 'center' }}>
        <span className="badge badge-primary inline-flex items-center gap-2 mb-5 text-sm font-semibold">
          Nos avantages
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: "var(--color-primary)" }}
        >
          Pourquoi choisir notre centre à {cityName} ?
        </h2>
        <p
          className="text-lg leading-relaxed max-w-3xl mx-auto text-center"
          style={{ color: "var(--text-secondary)", textAlign: 'center' }}
        >
          Situé au c&oelig;ur de {cityName}, notre centre médical est équipé de
          la dernière génération de laser : le{" "}
          <strong>Discovery Pico Plus</strong>. Plus puissant, plus rapide et
          plus sûr que les lasers traditionnels, il permet d&apos;effacer tous
          types de tatouages avec moins de séances et moins de douleur.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className={`group relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                index === 1 ? "md:-mt-4" : ""
              }`}
              style={{
                background: "var(--color-white)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Colored top border - full width, centered */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
                  borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
                }}
              />

              {/* Icon circle */}
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                  boxShadow: "0 4px 16px rgba(1, 103, 204, 0.25)",
                }}
              >
                <Icon size={24} color="white" strokeWidth={2} />
              </div>

              <h3
                className="text-xl font-bold mb-1"
                style={{ color: "var(--color-primary)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm font-semibold mb-4"
                style={{ color: "var(--color-secondary)" }}
              >
                {card.subtitle}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
