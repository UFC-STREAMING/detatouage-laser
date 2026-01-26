"use client";

import { Phone } from "lucide-react";

export function StickyCTA() {
  const scrollToForm = () => {
    const form = document.getElementById("quote-form");
    form?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Mobile UNIQUEMENT: Bouton fixe en bas */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4"
        style={{
          background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.98) 70%, rgba(255, 255, 255, 0) 100%)',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)'
        }}
      >
        <button
          onClick={scrollToForm}
          className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full font-bold text-lg text-white transition-all duration-300 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
            boxShadow: '0 8px 30px rgba(234, 107, 66, 0.4)',
            minHeight: '60px'
          }}
        >
          <Phone className="w-6 h-6" />
          Devis Gratuit
        </button>
      </div>
    </>
  );
}
