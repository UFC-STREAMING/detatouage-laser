"use client";

import { useState, useEffect } from "react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Afficher seulement après avoir scrollé passé le hero (800px)
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

  // Uniquement desktop top banner au scroll (pas de mobile sticky)
  return (
    <>
      {isVisible && (
        <div
          className="hidden md:block fixed left-0 right-0 z-40 animate-slide-down"
          style={{
            top: '73px',
            background: 'var(--color-secondary)',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div className="container mx-auto px-6 py-3 flex items-center justify-between">
            <span className="font-semibold text-white">
              ✨ Obtenez votre devis personnalisé en 2 minutes
            </span>
            <button
              onClick={scrollToForm}
              className="btn btn-primary btn-sm"
              style={{ background: 'white', color: 'var(--color-primary)' }}
            >
              Recevoir mon devis
            </button>
          </div>
        </div>
      )}
    </>
  );
}
