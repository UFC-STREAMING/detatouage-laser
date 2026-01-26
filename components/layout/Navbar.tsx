"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    if (typeof window !== 'undefined') {
      const form = document.getElementById("quote-form");
      form?.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white/98 backdrop-blur-lg shadow-lg'
          : 'bg-white shadow-sm'
        }
      `}
    >
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group relative z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo Tatouage Permanent France"
                width={180}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="relative text-sm font-semibold transition-colors group"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="group-hover:text-[var(--color-primary)] transition-colors">
                Accueil
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full"
                    style={{ background: 'var(--color-primary)' }}></span>
            </Link>

            <Link
              href="/prix"
              className="relative text-sm font-semibold transition-colors group"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="group-hover:text-[var(--color-primary)] transition-colors">
                Prix
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full"
                    style={{ background: 'var(--color-primary)' }}></span>
            </Link>

            <Link
              href="/avant-apres"
              className="relative text-sm font-semibold transition-colors group"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="group-hover:text-[var(--color-primary)] transition-colors">
                Avant/Après
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full"
                    style={{ background: 'var(--color-primary)' }}></span>
            </Link>

            {/* CTA Button */}
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-white text-sm transition-all duration-200 hover:shadow-xl hover:scale-105"
              style={{ background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))' }}
            >
              <Phone className="w-4 h-4" />
              Devis Gratuit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2 rounded-lg transition-colors"
            style={{ color: 'var(--color-primary)' }}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 sm:top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-2xl animate-slide-down">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-base font-semibold transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                Accueil
              </Link>

              <Link
                href="/prix"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-base font-semibold transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                Prix
              </Link>

              <Link
                href="/avant-apres"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-base font-semibold transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                Avant/Après
              </Link>

              <button
                onClick={scrollToForm}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))' }}
              >
                <Phone className="w-5 h-5" />
                Devis Gratuit
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
