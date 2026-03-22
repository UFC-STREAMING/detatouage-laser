import { BackgroundImage, Overlay, Container, Title, Text, Button, Group } from "@mantine/core";
import { Phone, Shield, Award, Star } from "lucide-react";

interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  height?: "small" | "medium" | "large";
}

export function HeroSection({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  ctaText,
  ctaHref,
  height = "medium",
}: HeroSectionProps) {
  const heightValues = {
    small: 380,
    medium: 500,
    large: 600,
  };

  return (
    <BackgroundImage
      src={imageSrc.replace('.png', '.webp')}
      style={{ minHeight: heightValues[height] }}
    >
      <Overlay
        gradient="linear-gradient(135deg, rgba(26, 26, 26, 0.92) 0%, rgba(46, 49, 146, 0.85) 50%, rgba(201, 169, 97, 0.65) 100%)"
        opacity={1}
        zIndex={1}
      />

      <Container 
        size="lg" 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          minHeight: heightValues[height],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '40px 16px',
        }}
      >
        {/* Badge Excellence */}
        <div
          style={{
            background: 'linear-gradient(135deg, #C9A961, #D4BA7E)',
            color: '#1A1A1A',
            padding: '12px 24px',
            borderRadius: 999,
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            boxShadow: '0 8px 32px rgba(201, 169, 97, 0.5)',
            marginBottom: 32,
          }}
        >
          ★ Excellence Médicale
        </div>

        {/* Title - Playfair Display */}
        <Title
          order={1}
          sx={(theme) => ({
            color: '#fff',
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(32px, 6vw, 64px)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            textShadow: '0 6px 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(201, 169, 97, 0.3)',
            marginBottom: 24,
            maxWidth: 900,
          })}
        >
          {title}
        </Title>

        {/* Subtitle */}
        {subtitle && (
          <Text
            size="xl"
            sx={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: 'clamp(16px, 2vw, 24px)',
              lineHeight: 1.6,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)',
              marginBottom: 40,
              maxWidth: 700,
            }}
          >
            {subtitle}
          </Text>
        )}

        {/* CTA Button */}
        {ctaText && ctaHref && (
          <Button
            component="a"
            href={ctaHref}
            size="xl"
            radius="xl"
            leftIcon={<Phone size={24} />}
            sx={{
              background: 'linear-gradient(135deg, #C9A961, #D4BA7E)',
              color: '#1A1A1A',
              fontSize: 18,
              fontWeight: 700,
              padding: '24px 48px',
              height: 'auto',
              letterSpacing: '0.02em',
              boxShadow: '0 12px 40px rgba(201, 169, 97, 0.6), 0 0 60px rgba(201, 169, 97, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 16px 60px rgba(201, 169, 97, 0.8)',
                background: 'linear-gradient(135deg, #D4BA7E, #C9A961)',
              },
              '&:active': {
                transform: 'scale(0.98)',
              },
            }}
          >
            {ctaText}
          </Button>
        )}

        {/* Trust Badges */}
        <Group 
          position="center" 
          spacing={40} 
          mt={48}
          sx={{
            '@media (max-width: 768px)': {
              flexDirection: 'column',
              gap: 16,
            },
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Shield size={32} color="#C9A961" />
            <Text size="sm" color="rgba(255, 255, 255, 0.9)" weight={600}>
              Certifié Médical
            </Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Award size={32} color="#C9A961" />
            <Text size="sm" color="rgba(255, 255, 255, 0.9)" weight={600}>
              +10 ans d'expérience
            </Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Star size={32} color="#C9A961" />
            <Text size="sm" color="rgba(255, 255, 255, 0.9)" weight={600}>
              4.9/5 Avis clients
            </Text>
          </div>
        </Group>
      </Container>
    </BackgroundImage>
  );
}
