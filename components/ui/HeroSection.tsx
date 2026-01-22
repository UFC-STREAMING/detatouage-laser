import Image from "next/image";

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
    small: "h-[300px] md:h-[400px]",
    medium: "h-[400px] md:h-[500px]",
    large: "h-[500px] md:h-[600px]",
  };

  return (
    <section className={`relative ${heightClasses[height]} w-full overflow-hidden`}>
      {/* Image de fond */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={90}
      />

      {/* Overlay dégradé amélioré pour meilleure lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Contenu */}
      <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl drop-shadow-2xl">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-10 max-w-2xl drop-shadow-xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="btn btn-primary btn-lg"
            style={{
              background: 'var(--color-primary)',
              boxShadow: 'var(--shadow-primary)',
            }}
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
