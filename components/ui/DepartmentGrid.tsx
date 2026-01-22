import Link from "next/link";
import { MapPin } from "lucide-react";
import { Department } from "@/types";

interface DepartmentGridProps {
  departments: Department[];
}

export function DepartmentGrid({ departments }: DepartmentGridProps) {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <span className="badge badge-primary mb-4">Nos centres</span>
          <h2 className="mb-4">
            Trouvez votre centre par <span className="text-gradient">département</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Des centres de détatouage laser partout en France
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <Link
              key={dept.slug}
              href={`/departement/${dept.slug}`}
              className="card group"
              style={{
                padding: 'var(--space-lg)',
                transition: 'all var(--transition-base) var(--ease-smooth)',
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <MapPin
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  style={{ color: 'var(--color-primary)' }}
                />
                <span
                  className="badge"
                  style={{
                    fontSize: 'var(--text-xs)',
                    background: 'var(--color-primary-lighter)',
                    color: 'var(--color-primary-dark)',
                  }}
                >
                  {dept.number}
                </span>
              </div>
              <h3
                className="font-semibold text-lg mb-2 group-hover:text-[var(--color-primary)] transition-colors"
                style={{ color: 'var(--text-primary)' }}
              >
                {dept.name}
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {dept.cities.length} ville{dept.cities.length > 1 ? "s" : ""}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
