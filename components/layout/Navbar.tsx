"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Header, Container, Group, Button, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Phone } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [opened, { toggle, close }] = useDisclosure(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrolly > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    if (typeof window !== 'undefined') {
      const form = document.getElementById("quote-form");
      form?.scrollIntoView({ behavior: "smooth", block: "start" });
      close();
    }
  };

  return (
    <Header
      height={80}
      px="md"
      sx={(theme) => ({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: isScrolled 
          ? 'rgba(26, 26, 26, 0.98)' 
          : theme.colors.dark[8],
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: `1px solid ${theme.colors.dark[6]}`,
      })}
    >
      <Container size="xl" sx={{ height: '100%' }}>
        <Group position="apart" sx={{ height: '100%' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/images/logo.png"
              alt="Logo Détatouage Laser France"
              width={180}
              height={50}
              className="h-14 w-auto object-contain transition-transform hover:scale-105"
              priority
            />
          </Link>

          {/* Navigation Desktop */}
          <Group spacing={32} sx={{ '@media (max-width: 960px)': { display: 'none' } }}>
            <Link 
              href="/" 
              style={{ 
                color: '#fff', 
                fontWeight: 600, 
                fontSize: 14,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C9A961'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
            >
              Accueil
            </Link>
            <Link 
              href="/prix" 
              style={{ 
                color: '#fff', 
                fontWeight: 600, 
                fontSize: 14,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C9A961'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
            >
              Prix
            </Link>
            <Link 
              href="/avant-apres" 
              style={{ 
                color: '#fff', 
                fontWeight: 600, 
                fontSize: 14,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C9A961'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
            >
              Avant/Après
            </Link>

            <Button
              onClick={scrollToForm}
              size="lg"
              radius="xl"
              sx={(theme) => ({
                background: 'linear-gradient(135deg, #C9A961, #D4BA7E)',
                color: '#1A1A1A',
                fontWeight: 700,
                fontSize: 14,
                padding: '12px 32px',
                boxShadow: '0 4px 16px rgba(201, 169, 97, 0.3)',
                letterSpacing: '0.02em',
                transition: 'all 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 24px rgba(201, 169, 97, 0.5)',
                  background: 'linear-gradient(135deg, #D4BA7E, #C9A961)',
                },
              })}
            >
              Devis Gratuit
            </Button>
          </Group>

          {/* Mobile Burger */}
          <Burger
            opened={opened}
            onClick={toggle}
            color="#C9A961"
            size="md"
            sx={{ '@media (min-width: 960px)': { display: 'none' } }}
          />
        </Group>

        {/* Mobile Menu */}
        {opened && (
          <div
            style={{
              position: 'fixed',
              top: 80,
              left: 0,
              right: 0,
              backgroundColor: '#1A1A1A',
              padding: '24px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              zIndex: 99,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Link 
                href="/" 
                onClick={close}
                style={{ 
                  color: '#fff', 
                  fontWeight: 600, 
                  fontSize: 16,
                  textDecoration: 'none',
                  padding: '12px 0',
                }}
              >
                Accueil
              </Link>
              <Link 
                href="/prix" 
                onClick={close}
                style={{ 
                  color: '#fff', 
                  fontWeight: 600, 
                  fontSize: 16,
                  textDecoration: 'none',
                  padding: '12px 0',
                }}
              >
                Prix
              </Link>
              <Link 
                href="/avant-apres" 
                onClick={close}
                style={{ 
                  color: '#fff', 
                  fontWeight: 600, 
                  fontSize: 16,
                  textDecoding: 'none',
                  padding: '12px 0',
                }}
              >
                Avant/Après
              </Link>
              <Button
                onClick={scrollToForm}
                size="lg"
                radius="xl"
                fullWidth
                leftIcon={<Phone size={20} />}
                sx={{
                  background: 'linear-gradient(135deg, #C9A961, #D4BA7E)',
                  color: '#1A1A1A',
                  fontWeight: 700,
                  marginTop: 8,
                }}
              >
                Devis Gratuit
              </Button>
            </div>
          </div>
        )}
      </Container>
    </Header>
  );
}
