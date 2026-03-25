import { ArrowRightIcon, ClockIcon, CheckBadgeIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export function CTABanner() {
  return (
    <div
      className="relative rounded-3xl p-10 md:p-16 lg:p-20 my-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 40%, var(--color-primary-light) 100%)",
        boxShadow: "var(--shadow-2xl)",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .cta-btn:hover {
              transform: scale(1.05);
              box-shadow: 0 25px 50px rgba(0,0,0,0.25) !important;
              background: var(--color-grey-50) !important;
            }
          `,
        }}
      />

      {/* Subtle radial dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Warm accent glow top-right */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(234,107,66,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative text-center max-w-2xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-extrabold mb-10"
          style={{
            color: "#ffffff",
            textShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          Prêt à effacer votre tatouage ?
        </h2>

        <a
          href="#quote-form"
          className="cta-btn inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg"
          style={{
            background: "#ffffff",
            color: "var(--color-primary)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            transition:
              "transform var(--transition-base) var(--ease-smooth), box-shadow var(--transition-base) var(--ease-smooth), background var(--transition-base) var(--ease-smooth)",
          }}
        >
          Consultation gratuite →
          <ArrowRightIcon className="w-5 h-5" />
        </a>

        {/* Trust indicators */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          <span className="flex items-center gap-2 text-sm">
            <ClockIcon className="w-[14px] h-[14px]" />
            Réponse sous 24h
          </span>
          <span
            className="hidden sm:block"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            |
          </span>
          <span className="flex items-center gap-2 text-sm">
            <CheckBadgeIcon className="w-[14px] h-[14px]" />
            100% gratuit
          </span>
          <span
            className="hidden sm:block"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            |
          </span>
          <span className="flex items-center gap-2 text-sm">
            <ShieldCheckIcon className="w-[14px] h-[14px]" />
            Sans engagement
          </span>
        </div>
      </div>
    </div>
  );
}
