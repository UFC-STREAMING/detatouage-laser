"use client";

import Link from "next/link";
import { Logo } from "@/components/icons/Logo";

export function Navbar() {
  const scrollToForm = () => {
    if (typeof window !== 'undefined') {
      const form = document.getElementById("quote-form");
      form?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <Logo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#0077b6]">Détatouage Laser</span>
              <span className="text-xs text-[#6c757d] hidden sm:block">Spécialistes certifiés</span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-[#6c757d] hover:text-[#0077b6] transition font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/prix"
              className="text-[#6c757d] hover:text-[#0077b6] transition font-medium"
            >
              Prix
            </Link>
            <Link
              href="/avant-apres"
              className="text-[#6c757d] hover:text-[#0077b6] transition font-medium"
            >
              Avant/Après
            </Link>
            <button
              onClick={scrollToForm}
              className="bg-[#0077b6] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#023e8a] transition"
            >
              Devis Gratuit
            </button>
          </div>

          {/* Mobile CTA */}
          <button
            onClick={scrollToForm}
            className="md:hidden bg-[#0077b6] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#023e8a] transition text-sm"
          >
            Devis
          </button>
        </div>
      </nav>
    </header>
  );
}
