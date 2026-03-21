import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Sparkles } from "lucide-react";

interface HeroPremiumProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function HeroPremium({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  ctaText,
  ctaHref,
}: HeroPremiumProps) {
  return (
    <section className="relative h-[600px] md:h-[650px] lg:h-[700px] w-full overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover brightness-50"
          sizes="100vw"
          quality={85}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-zinc-900/70 to-amber-900/40"
          aria-hidden="true"
        />
      </div>

      {/* Content - Centered and constrained */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Premium badge */}
          <div className="flex justify-center">
            <Badge 
              variant="outline" 
              className="border-amber-500/50 bg-amber-500/10 text-amber-200 hover:bg-amber-500/20 px-6 py-2.5 text-sm font-semibold backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Excellence Médicale Certifiée
            </Badge>
          </div>

          {/* Title - Professional serif font */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-100 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* CTA Button */}
          {ctaText && ctaHref && (
            <div className="flex justify-center pt-4">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-zinc-900 font-bold text-lg px-10 py-7 rounded-xl shadow-2xl shadow-amber-500/50 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/70"
              >
                <a href={ctaHref}>
                  <Phone className="w-5 h-5 mr-3" />
                  {ctaText}
                </a>
              </Button>
            </div>
          )}

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Certifié Médical</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Technologie Laser Pico</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>10+ Ans d'Expérience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
