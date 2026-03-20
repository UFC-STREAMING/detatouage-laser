"use client";

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
          className="w-full text-center px-6 py-4 rounded-2xl font-bold text-base transition-all duration-300 active:scale-95 relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, #C9A961, #D4BA7E)',
            boxShadow: '0 8px 32px rgba(201, 169, 97, 0.4)',
            color: '#1A1A1A',
            letterSpacing: '0.02em',
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          <span className="relative z-10">✨ Devis Gratuit Premium</span>
        </button>
      </div>
    </>
  );
}
