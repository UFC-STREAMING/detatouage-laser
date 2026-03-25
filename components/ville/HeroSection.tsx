import Image from "next/image";
import { ArrowRightIcon, UserGroupIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

type HeroSectionProps = {
  cityName: string;
};

export function HeroSection({ cityName }: HeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden">
      <Image
        src="/images/global/progression-5x.jpg"
        alt={`Progression détatouage laser à ${cityName} - Laser Q-Switch`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />

      {/* Multi-stop gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(1, 79, 163, 0.95) 0%, rgba(1, 103, 204, 0.85) 35%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />

      {/* Radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(1, 103, 204, 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Decorative geometric element - top right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(234, 107, 66, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative h-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-5xl mx-auto text-center">
          {/* Laser Q-Switch Badge with pulse glow */}
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 sm:mb-10 animate-fade-in"
            style={{
              background: "rgba(234, 107, 66, 0.15)",
              color: "white",
              border: "1px solid rgba(234, 107, 66, 0.4)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow:
                "0 0 20px rgba(234, 107, 66, 0.2), 0 0 40px rgba(234, 107, 66, 0.1)",
              animation: "pulse 3s ease-in-out infinite, fadeIn 0.4s ease both",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--color-secondary)" }}
            />
            Laser Q-Switch
          </span>

          {/* H1 */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-5 leading-[1.1] tracking-tight animate-fade-in-up"
            style={{
              color: "white",
              textShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
            }}
          >
            Détatouage Laser à {cityName}
          </h1>
          <p
            className="block mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-normal animate-fade-in-up"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.95), rgba(255,255,255,0.6))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Laser Q-Switch dernière génération
          </p>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4 animate-fade-in-up"
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.4)",
              animationDelay: "0.1s",
            }}
          >
            Le laser le plus avancé pour effacer votre tatouage — toutes
            couleurs, toutes peaux
          </p>

          {/* CTA Button with shimmer */}
          <div
            className="mb-10 sm:mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="#quote-form"
              className="group inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-5 sm:py-6 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))",
                boxShadow:
                  "0 8px 30px rgba(234, 107, 66, 0.5), 0 0 60px rgba(234, 107, 66, 0.15)",
                color: "#ffffff",
              }}
            >
              {/* Shimmer effect */}
              <span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)",
                  animation: "shimmerBtn 3s ease-in-out infinite",
                }}
              />
              <span className="relative z-10 flex items-center gap-3">
                Obtenir mon devis gratuit
                <ArrowRightIcon
                  className="w-[22px] h-[22px] transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
          </div>

          {/* Trust indicators */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
              <StarIcon className="w-[18px] h-[18px] text-yellow-400" />
              <span className="font-semibold text-white">4.9/5</span>
              <span className="text-white/60">avis</span>
            </div>

            <div
              className="hidden sm:block w-px h-5"
              style={{ background: "rgba(255,255,255,0.2)" }}
            />

            <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
              <UserGroupIcon className="w-[18px] h-[18px] text-white/70" />
              <span className="font-semibold text-white">10 000+</span>
              <span className="text-white/60">patients</span>
            </div>

            <div
              className="hidden sm:block w-px h-5"
              style={{ background: "rgba(255,255,255,0.2)" }}
            />

            <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
              <ShieldCheckIcon className="w-[18px] h-[18px] text-emerald-400" />
              <span className="font-semibold text-white">Résultat garanti</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
