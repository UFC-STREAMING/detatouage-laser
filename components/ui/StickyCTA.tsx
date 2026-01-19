"use client";

import { useState, useEffect } from "react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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
      {/* Mobile: Bottom sticky bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0077b6] text-white shadow-lg">
        <button
          onClick={scrollToForm}
          className="w-full py-4 px-4 font-semibold text-center hover:bg-[#023e8a] transition"
        >
          Demander un devis gratuit
        </button>
      </div>

      {/* Desktop: Top banner (appears on scroll) */}
      {isVisible && (
        <div className="hidden md:block fixed top-[73px] left-0 right-0 z-40 bg-[#48cae4] text-white shadow-md animate-slide-down">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-semibold">Obtenez votre devis gratuit en 2 minutes</span>
            <button
              onClick={scrollToForm}
              className="bg-[#0077b6] px-6 py-2 rounded-lg font-semibold hover:bg-[#023e8a] transition"
            >
              Devis en ligne
            </button>
          </div>
        </div>
      )}
    </>
  );
}
