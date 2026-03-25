import { ClipboardDocumentListIcon, HeartIcon, BoltIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const processSteps = [
  {
    number: "1",
    title: "Consultation & Devis",
    description:
      "Analyse de votre tatouage, photo, estimation du nombre de séances et devis personnalisé gratuit.",
    icon: ClipboardDocumentListIcon,
  },
  {
    number: "2",
    title: "Confort",
    description:
      "Application d'une crème anesthésiante 1h avant la séance pour un traitement indolore.",
    icon: HeartIcon,
  },
  {
    number: "3",
    title: "Traitement",
    description:
      "Séance laser de 10 à 30 minutes selon la taille. Les impulsions picosecondes fragmentent l'encre.",
    icon: BoltIcon,
  },
  {
    number: "4",
    title: "Post-traitement",
    description:
      "Soins cicatrisants, consignes post-séance et suivi personnalisé entre les séances.",
    icon: CheckCircleIcon,
  },
];

export function ProcessSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12" style={{ textAlign: 'center' }}>
        <span className="badge badge-primary mb-4 inline-flex">Notre protocole</span>
        <h2
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ color: "var(--color-primary)" }}
        >
          Comment se déroule le traitement ?
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Un protocole médical en 4 étapes pour un résultat optimal
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Desktop horizontal connecting line */}
        <div
          className="hidden lg:block absolute top-[1.75rem] left-[calc(12.5%+1.75rem)] right-[calc(12.5%+1.75rem)] h-0.5"
          style={{
            background: "linear-gradient(to right, var(--color-primary-light), var(--color-primary))",
          }}
        />

        {/* Mobile vertical connecting line */}
        <div
          className="lg:hidden absolute top-[1.75rem] bottom-[1.75rem] left-[1.75rem] w-0.5"
          style={{
            background: "linear-gradient(to bottom, var(--color-primary-light), var(--color-primary))",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Mobile layout: circle on the left, card to the right */}
                <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0">
                  {/* Step circle */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                    style={{
                      background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                      boxShadow: "var(--shadow-lg)",
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 lg:mt-6 rounded-xl p-6 lg:p-8 transition-all lg:text-center"
                    style={{
                      background: "var(--color-white)",
                      boxShadow: "var(--shadow-md)",
                      transitionDuration: "var(--transition-base)",
                      transitionTimingFunction: "var(--ease-smooth)",
                    }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-primary-light)" }}
                    >
                      Étape {step.number}
                    </span>
                    <h3
                      className="text-lg font-bold mt-1 mb-2"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm !mb-0" style={{ color: "var(--text-secondary)" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
