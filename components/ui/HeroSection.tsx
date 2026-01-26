"use client";

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
    small: "h-[300px] sm:h-[350px] md:h-[400px]",
    medium: "h-[450px] sm:h-[500px] md:h-[550px]",
    large: "h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px]",
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("quote-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`relative ${heightClasses[height]} w-full overflow-hidden`}>
      {/* Image de fond optimisée */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />

      {/* Overlay avec gradient pour meilleur contraste */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(1, 103, 204, 0.85) 0%, rgba(0, 0, 0, 0.75) 100%)",
        }}
      />

      {/* Contenu centré avec contrainte max-width */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-5xl mx-auto text-center">
          {/* Badge supérieur */}
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 sm:mb-8"
            style={{
              background: "linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))",
              color: "white",
              boxShadow: "0 4px 20px rgba(234, 107, 66, 0.4)",
            }}
          >
            ✨ Technologie de pointe
          </span>

          {/* Titre principal - responsive avec breakpoints clairs */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            style={{
              color: "white",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
            }}
          >
            {title}
          </h1>

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

          {/* CTA Button - thumb-accessible sur mobile */}
          {ctaText && ctaHref && (
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
              style={{
                background: "linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))",
                boxShadow: "0 8px 30px rgba(234, 107, 66, 0.5)",
                minHeight: "56px", // Thumb-accessible minimum
                minWidth: "280px",  // Mobile-friendly width
              }}
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              {ctaText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
