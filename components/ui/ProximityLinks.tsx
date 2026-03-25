import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { City } from "@/types";

interface ProximityLinksProps {
  cities: City[];
  currentCity: string;
}

export function ProximityLinks({ cities, currentCity }: ProximityLinksProps) {
  if (cities.length === 0) return null;

  return (
    <section className="rounded-lg p-6 mt-8" style={{ background: 'var(--bg-secondary)' }}>
      <h2 className="text-xl font-bold mb-4 flex items-center justify-center gap-2" style={{ color: 'var(--color-primary)' }}>
        <MapPinIcon className="w-5 h-5" />
        Villes à proximité de {currentCity}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {cities.map((city) => (
          <Link
            key={city.id}
            href={`/ville/${city.slug}`}
            className="bg-white px-4 py-3 rounded-lg hover:bg-[var(--color-primary-light)] hover:text-white transition-all group"
          >
            <div className="font-semibold group-hover:translate-x-1 transition-transform">
              {city.name}
            </div>
            <div className="text-sm group-hover:text-white" style={{ color: 'var(--text-secondary)' }}>
              {city.department.name} ({city.department.number})
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
