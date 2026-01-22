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

      {/* Overlay sombre fort pour contraste */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenu centré */}
      <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <span className="badge badge-primary mb-6" style={{ background: 'var(--color-secondary)', color: 'white' }}>
          ✨ Technologie de pointe
        </span>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl"
          style={{
            color: 'white',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl leading-relaxed"
            style={{
              color: 'white',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
            }}
          >
            {subtitle}
          </p>
        )}

        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="btn btn-primary btn-lg"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
