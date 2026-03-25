"use client";

import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        background: 'var(--bg-secondary)',
        borderColor: 'var(--color-grey-200)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Branding */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-new.svg"
                alt="Logo Détatouage Laser France"
                width={240}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              Spécialiste du retrait de tatouage par laser dans toute la France.
              Technologie de pointe pour des résultats optimaux et sécurisés.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3
              className="font-bold mb-4 text-base"
              style={{ color: 'var(--color-primary)' }}
            >
              Liens rapides
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-[var(--color-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/prix"
                  className="transition-colors hover:text-[var(--color-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Prix
                </Link>
              </li>
              <li>
                <Link
                  href="/avant-apres"
                  className="transition-colors hover:text-[var(--color-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Avant/Après
                </Link>
              </li>
              <li>
                <Link
                  href="/resultats-1-seance"
                  className="transition-colors hover:text-[var(--color-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Résultats 1ère séance
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3
              className="font-bold mb-4 text-base"
              style={{ color: 'var(--color-primary)' }}
            >
              Informations légales
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/mentions-legales"
                  className="transition-colors hover:text-[var(--color-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="transition-colors hover:text-[var(--color-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-bold mb-4 text-base"
              style={{ color: 'var(--color-primary)' }}
            >
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <EnvelopeIcon
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--color-primary)' }}
                />
                <a
                  href="mailto:contact@tatouage-temporaire.fr"
                  className="transition-colors hover:text-[var(--color-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  contact@tatouage-temporaire.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--color-primary)' }}
                />
                <span style={{ color: 'var(--text-secondary)' }}>
                  Partout en France
                </span>
              </li>
            </ul>

          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 pt-8 border-t text-center text-sm"
          style={{
            borderColor: 'var(--color-grey-200)',
            color: 'var(--text-tertiary)'
          }}
        >
          <p>
            &copy; {currentYear} Détatouage Laser France. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
