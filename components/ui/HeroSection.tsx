import Image from "next/image";
import { Phone } from "lucide-react";

interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  height?: "small" | "medium" | "large";
}

export function HeroSection({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  ctaText,
  ctaHref,
  height = "medium",
}: HeroSectionProps) {
  const heightClasses = {
    small: "h-[280px] sm:h-[320px] md:h-[380px]",
    medium: "h-[350px] sm:h-[420px] md:h-[500px]",
    large: "h-[400px] sm:h-[480px] md:h-[550px] lg:h-[600px]",
  };

  return (
    <section className={`relative ${heightClasses[height]} w-full overflow-hidden`}>
      {/* Image de fond optimisée */}
      <Image
        src={imageSrc.replace('.png', '.webp')}
        alt={imageAlt}
        fill
        priority
        loading="eager"
        className="object-cover"
        sizes="100vw"
        quality={85}
      />

      {/* Overlay premium gradient noir/or */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(26, 26, 26, 0.92) 0%, rgba(46, 49, 146, 0.85) 50%, rgba(201, 169, 97, 0.65) 100%)",
        }}
      />

      {/* Contenu centré avec contrainte max-width */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-5xl mx-auto text-center">
          {/* Badge premium or */}
          <span
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold mb-6 sm:mb-8"
            style={{
              background: "linear-gradient(135deg, #C9A961, #D4BA7E)",
              color: "#1A1A1A",
              boxShadow: "0 8px 32px rgba(201, 169, 97, 0.5)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            ★ Excellence Médicale
          </span>

          {/* Titre principal premium avec Playfair */}
          <p
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            style={{
              color: "white",
              fontFamily: "var(--font-playfair)",
              textShadow: "0 6px 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(201, 169, 97, 0.3)",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </p>

          {/* Sous-titre avec meilleure lisibilité */}
          {subtitle && (
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-4"
              style={{
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.6)",
              }}
            >
              {subtitle}
            </p>
          )}

          {/* CTA Premium Gold */}
          {ctaText && ctaHref && (
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-5 sm:py-6 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 max-w-full relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #C9A961, #D4BA7E)",
                boxShadow: "0 12px 40px rgba(201, 169, 97, 0.6), 0 0 60px rgba(201, 169, 97, 0.3)",
                minHeight: "64px",
                color: "#1A1A1A",
                letterSpacing: "0.02em",
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              <span className="relative z-10">{ctaText}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
