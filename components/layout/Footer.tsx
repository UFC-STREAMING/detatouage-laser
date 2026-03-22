"use client";

import Link from "next/link";
import Image from "next/image";
import { Container, Group, Text, Anchor, Stack, rem } from "@mantine/core";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const aboutLinks = [
    { label: "Accueil", href: "/" },
    { label: "Prix", href: "/prix" },
    { label: "Avant/Après", href: "/avant-apres" },
    { label: "Résultats 1ère séance", href: "/resultats-1-seance" },
  ];

  const legalLinks = [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  ];

  return (
    <footer
      className="border-t mt-20"
      style={{
        background: 'var(--color-dark)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        paddingTop: rem(60),
        paddingBottom: rem(40),
      }}
    >
      <Container size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* About Column */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Logo Détatouage Laser France"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <Text size="sm" c="dimmed" mb="lg" style={{ lineHeight: 1.6 }}>
              Spécialiste du retrait de tatouage par laser dans toute la France.
              Technologie de pointe pour des résultats optimaux et sécurisés.
            </Text>
            {/* CTA Footer Mobile */}
            <a
              href="#quote-form"
              className="inline-block text-center px-10 py-4 rounded-full font-bold text-base transition-all duration-200 hover:shadow-xl hover:scale-105 sm:hidden"
              style={{
                background: 'linear-gradient(135deg, #C9A961, #D4BA7E)',
                color: '#1A1A1A',
              }}
            >
              Devis Gratuit
            </a>
          </div>

          {/* Services Column */}
          <div>
            <Text
              fw={700}
              mb="lg"
              size="md"
              style={{ color: 'var(--color-secondary)' }}
            >
              Nos Services
            </Text>
            <Stack gap="sm">
              {aboutLinks.map((link) => (
                <Anchor
                  key={link.href}
                  component={Link}
                  href={link.href}
                  size="sm"
                  c="dimmed"
                  className="hover-gold"
                  style={{
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Anchor>
              ))}
            </Stack>
          </div>

          {/* Legal Column */}
          <div>
            <Text
              fw={700}
              mb="lg"
              size="md"
              style={{ color: 'var(--color-secondary)' }}
            >
              Informations légales
            </Text>
            <Stack gap="sm">
              {legalLinks.map((link) => (
                <Anchor
                  key={link.href}
                  component={Link}
                  href={link.href}
                  size="sm"
                  c="dimmed"
                  className="hover-gold"
                  style={{
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Anchor>
              ))}
            </Stack>
          </div>

          {/* Contact Column */}
          <div>
            <Text
              fw={700}
              mb="lg"
              size="md"
              style={{ color: 'var(--color-secondary)' }}
            >
              Contact
            </Text>
            <Stack gap="md">
              <Group gap="sm" align="flex-start">
                <Mail
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--color-secondary)' }}
                />
                <Anchor
                  href="mailto:contact@tatouage-temporaire.fr"
                  size="sm"
                  c="dimmed"
                  className="hover-gold"
                  style={{
                    transition: 'color 0.2s',
                  }}
                >
                  contact@tatouage-temporaire.fr
                </Anchor>
              </Group>

              <Group gap="sm" align="flex-start">
                <MapPin
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--color-secondary)' }}
                />
                <Text size="sm" c="dimmed">
                  Partout en France
                </Text>
              </Group>
            </Stack>

            {/* CTA Footer Desktop */}
            <div className="mt-6 hidden sm:block">
              <a
                href="#quote-form"
                className="inline-block text-center px-10 py-4 rounded-full font-bold text-base transition-all duration-200 hover:shadow-xl hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #C9A961, #D4BA7E)',
                  color: '#1A1A1A',
                }}
              >
                Devis Gratuit
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="pt-8 border-t text-center"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <Text size="sm" c="dimmed">
            &copy; {currentYear} Détatouage Laser France. Tous droits réservés.
          </Text>
        </div>
      </Container>

      <style jsx global>{`
        .hover-gold:hover {
          color: var(--color-secondary) !important;
        }
      `}</style>
    </footer>
  );
}
