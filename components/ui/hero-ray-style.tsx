import Image from "next/image";
import Link from "next/link";

interface HeroRayStyleProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function HeroRayStyle({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  ctaText,
  ctaHref,
}: HeroRayStyleProps) {
  return (
    <section className="relative min-h-screen bg-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
          {/* Left: Content */}
          <div className="text-white space-y-8 lg:space-y-10">
            <div className="inline-block">
              <span className="text-amber-500 uppercase tracking-wider text-sm font-semibold border border-amber-500/30 px-4 py-2 rounded-full bg-amber-500/5 backdrop-blur">
                Excellence Médicale
              </span>
            </div>
            
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-xl lg:text-2xl text-zinc-300 leading-relaxed max-w-xl">
                {subtitle}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {ctaText && ctaHref && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-zinc-900 px-10 py-5 text-lg font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-amber-500/20"
                >
                  {ctaText}
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
              
              <Link
                href="tel:+33000000000"
                className="inline-flex items-center justify-center border-2 border-white/20 hover:border-white/40 text-white px-10 py-5 text-lg font-semibold rounded-lg transition-all duration-300 backdrop-blur"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appelez-nous
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white">Certifié Médical</div>
                  <div className="text-zinc-400">Agréé ARS</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white">10+ Ans</div>
                  <div className="text-zinc-400">D'expertise</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[500px] lg:h-[700px] order-first lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl" />
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover rounded-3xl shadow-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
