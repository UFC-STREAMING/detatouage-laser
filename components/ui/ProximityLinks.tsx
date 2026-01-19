import Link from "next/link";
import { MapPin } from "lucide-react";
import { City } from "@/types";

interface ProximityLinksProps {
  cities: City[];
  currentCity: string;
}

export function ProximityLinks({ cities, currentCity }: ProximityLinksProps) {
  if (cities.length === 0) return null;

  return (
    <section className="bg-[#f8f9fa] rounded-lg p-6 mt-12">
      <h2 className="text-xl font-bold text-[#0077b6] mb-4 flex items-center gap-2">
        <MapPin className="w-5 h-5" />
        Villes à proximité de {currentCity}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {cities.map((city) => (
          <Link
            key={city.id}
            href={`/ville/${city.slug}`}
            className="bg-white px-4 py-3 rounded-lg hover:bg-[#48cae4] hover:text-white transition-all group"
          >
            <div className="font-semibold group-hover:translate-x-1 transition-transform">
              {city.name}
            </div>
            <div className="text-sm text-[#6c757d] group-hover:text-white">
              {city.department.name} ({city.department.number})
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
