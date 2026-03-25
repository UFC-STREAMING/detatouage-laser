type TechSectionProps = {
  cityName: string;
};

export function TechSection({ cityName }: TechSectionProps) {
  const stats = [
    { value: "3", label: "longueurs d'onde" },
    { value: "Q-Switch", label: "technologie médicale" },
    { value: "4-8", label: "semaines entre séances" },
    { value: "100%", label: "des couleurs traitées" },
  ];

  return (
    <section className="mb-16">
      <div
        className="relative rounded-2xl p-8 md:p-12 lg:p-16 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, var(--color-primary-lighter) 0%, var(--color-white) 50%, var(--color-grey-50) 100%)",
        }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(1, 103, 204, 0.08) 0%, transparent 70%)",
          }}
        />

        {/* Subtle dot pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(1, 103, 204, 0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* 2-column layout */}
        <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left column - Text content (60%) */}
          <div className="flex-1 lg:flex-[3] flex gap-5">
            {/* Vertical accent bar */}
            <div
              className="hidden md:block w-1 flex-shrink-0 rounded-full self-stretch"
              style={{
                background:
                  "linear-gradient(180deg, var(--color-primary), var(--color-secondary))",
              }}
            />

            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "var(--color-primary)" }}
              >
                Notre technologie laser Q-Switch à{" "}
                <span style={{ color: "var(--color-secondary)" }}>
                  {cityName}
                </span>
              </h2>
              <div className="space-y-4">
                <p
                  className="leading-relaxed text-base md:text-lg"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Notre centre utilise des{" "}
                  <strong>
                    lasers Q-Switch de dernière génération
                  </strong>
                  , la référence médicale pour le détatouage. Ces lasers émettent des impulsions très courtes qui fragmentent l&apos;encre en micro-particules, éliminées naturellement par votre système immunitaire — efficacement, avec moins d&apos;inflammation et moins de risques de cicatrices.
                </p>
                <p
                  className="leading-relaxed text-base md:text-lg"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Grâce à <strong>3 longueurs d&apos;onde</strong> (1064 nm,
                  532 nm et 694 nm), nos lasers couvrent{" "}
                  <strong>100% du spectre des encres de tatouage</strong>,
                  y compris les pigments <strong>bleus et verts</strong> réputés
                  les plus difficiles à traiter. Tous les phototypes de peau
                  sont pris en charge, des peaux claires aux peaux mates.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Stats grid (40%) */}
          <div className="w-full lg:flex-[2]">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: "var(--color-white)",
                    boxShadow: "var(--shadow-sm)",
                    border: "1px solid var(--color-grey-100)",
                  }}
                >
                  <div
                    className="text-3xl md:text-4xl font-black mb-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs sm:text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
