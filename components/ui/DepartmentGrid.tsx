import Link from "next/link";
import { ChevronRight } from "lucide-react";
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

        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: '1px solid var(--color-border)',
            background: 'var(--color-white)',
          }}
        >
          {/* Table header - desktop only */}
          <div
            className="hidden md:grid grid-cols-12 items-center px-6 py-3"
            style={{
              background: 'var(--color-bg-alt)',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            <div className="col-span-1 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
              N°
            </div>
            <div className="col-span-5 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
              Département
            </div>
            <div className="col-span-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
              Villes couvertes
            </div>
            <div className="col-span-3"></div>
          </div>

          {/* Department rows */}
          {departments.map((dept, index) => (
            <Link
              key={dept.slug}
              href={`/departement/${dept.slug}`}
              className="grid grid-cols-1 md:grid-cols-12 items-center px-6 py-4 group transition-colors duration-150 hover:bg-[var(--color-primary-lighter)]"
              style={{
                borderBottom: index !== departments.length - 1 ? '1px solid var(--color-border-light, #f0f0f0)' : 'none',
              }}
            >
              {/* Code département */}
              <div className="md:col-span-1 mb-1 md:mb-0">
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg font-bold text-sm"
                  style={{
                    background: 'var(--color-primary-lighter)',
                    color: 'var(--color-primary)',
                  }}
                >
                  {dept.number}
                </span>
              </div>

              {/* Nom département */}
              <div className="md:col-span-5 mb-1 md:mb-0">
                <span
                  className="font-semibold text-base group-hover:text-[var(--color-primary)] transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {dept.name}
                </span>
              </div>

              {/* Nombre de villes */}
              <div className="md:col-span-3 mb-1 md:mb-0">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: 'var(--color-primary-lighter)',
                    color: 'var(--color-primary-dark)',
                  }}
                >
                  {dept.cities.length} ville{dept.cities.length > 1 ? "s" : ""}
                </span>
              </div>

              {/* Arrow */}
              <div className="md:col-span-3 hidden md:flex justify-end">
                <span
                  className="inline-flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Voir le département
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
