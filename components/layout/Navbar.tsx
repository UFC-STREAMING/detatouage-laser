"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white shadow-sm'
        }
      `}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Logo Tatouage Temporaire"
                width={50}
                height={50}
                className="w-12 h-12 object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span
                className="text-xl font-bold transition-colors"
                style={{ color: 'var(--color-brand)' }}
              >
                Tatouage Temporaire
              </span>
              <span
                className="text-xs hidden sm:block"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Détatouage Laser
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="relative text-sm font-medium transition-colors group"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="group-hover:text-[var(--color-primary)] transition-colors">
                Accueil
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all group-hover:w-full"></span>
            </Link>

            <Link
              href="/prix"
              className="relative text-sm font-medium transition-colors group"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="group-hover:text-[var(--color-primary)] transition-colors">
                Prix
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all group-hover:w-full"></span>
            </Link>

            <Link
              href="/avant-apres"
              className="relative text-sm font-medium transition-colors group"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="group-hover:text-[var(--color-primary)] transition-colors">
                Avant/Après
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all group-hover:w-full"></span>
            </Link>

            {/* CTA Button */}
            <button
              onClick={scrollToForm}
              className="btn btn-primary"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Devis Gratuit
            </button>
          </div>

          {/* Mobile CTA */}
          <button
            onClick={scrollToForm}
            className="md:hidden btn btn-primary btn-sm"
          >
            Devis
          </button>
        </div>
      </nav>
    </header>
  );
}
