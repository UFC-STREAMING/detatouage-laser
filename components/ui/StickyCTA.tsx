"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById("quote-form");
    form?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Desktop: Banner sticky en haut après scroll */}
      {isVisible && (
        <div
          className="hidden lg:block fixed left-0 right-0 z-40 animate-slide-down"
          style={{
            top: '73px',
            background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
            boxShadow: '0 4px 20px rgba(234, 107, 66, 0.3)'
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
            <span className="font-semibold text-white text-lg flex items-center gap-3">
              <Phone className="w-5 h-5" />
              Obtenez votre devis personnalisé gratuitement
            </span>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: 'white',
                color: 'var(--color-secondary)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
              }}
            >
              Obtenir mon devis
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile: Bouton fixe en bas toujours visible */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4"
        style={{
          background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.98) 70%, rgba(255, 255, 255, 0) 100%)',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)'
        }}
      >
        <button
          onClick={scrollToForm}
          className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full font-bold text-base text-white transition-all duration-300 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
            boxShadow: '0 8px 30px rgba(234, 107, 66, 0.4)',
            minHeight: '56px'
          }}
        >
          <Phone className="w-5 h-5" />
          Devis Gratuit
        </button>
      </div>
    </>
  );
}
