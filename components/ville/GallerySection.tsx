import Image from "next/image";
import { ArrowRight } from "lucide-react";

const beforeAfterImages = [
  {
    src: "/images/global/before-after-dragon.webp",
    alt: "Détatouage dragon noir - avant après",
    label: "Dragon noir - 5 séances - Disparition complète",
  },
  {
    src: "/images/global/before-after-tribal.webp",
    alt: "Détatouage tribal noir - avant après",
    label: "Tribal noir - 4 séances - Peau nette",
  },
  {
    src: "/images/global/before-after-butterfly.webp",
    alt: "Détatouage papillon couleur - avant après",
    label: "Papillon couleur - 4 séances - Résultat optimal",
  },
  {
    src: "/images/global/before-after-mickey.webp",
    alt: "Détatouage bleu foncé - avant après",
    label: "Bleu foncé - 4 séances - Effacement total",
  },
];

export function GallerySection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-10" style={{ textAlign: 'center' }}>
        <span className="badge badge-primary mb-4 inline-flex">Résultats prouvés</span>
        <h2
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ color: "var(--color-primary)" }}
        >
          Résultats avant / après
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Résultats obtenus avec le Discovery Pico Plus sur nos patients
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {beforeAfterImages.map((img) => (
          <div key={img.src} className="group">
            <div
              className="relative aspect-square rounded-2xl overflow-hidden"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={80}
              />
              <div
                className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none"
                style={{ transitionTimingFunction: "var(--ease-smooth)" }}
              >
                <div
                  className="px-3 py-3 sm:px-4 sm:py-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                  }}
                >
                  <p className="text-white font-medium text-xs sm:text-sm !mb-0">
                    {img.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8" style={{ textAlign: 'center' }}>
        <a
          href="/avant-apres"
          className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-3"
          style={{
            color: "var(--color-primary)",
            transitionDuration: "var(--transition-base)",
            transitionTimingFunction: "var(--ease-smooth)",
          }}
        >
          Voir plus de résultats
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
