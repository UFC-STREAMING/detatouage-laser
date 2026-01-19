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

      {/* Overlay dégradé pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Contenu */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl drop-shadow-lg">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl drop-shadow-md">
            {subtitle}
          </p>
        )}

        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="bg-[#0077b6] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#023e8a] transition text-lg shadow-lg hover:shadow-xl"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
