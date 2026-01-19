import Link from "next/link";
import { MapPin } from "lucide-react";
import { Department } from "@/types";

interface DepartmentGridProps {
  departments: Department[];
}

export function DepartmentGrid({ departments }: DepartmentGridProps) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-[#0077b6] mb-6">
        Trouvez votre centre par département
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {departments.map((dept) => (
          <Link
            key={dept.slug}
            href={`/departement/${dept.slug}`}
            className="group bg-white border-2 border-[#e9ecef] hover:border-[#48cae4] rounded-lg p-5 transition-all hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-2">
              <MapPin className="w-5 h-5 text-[#48cae4] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-[#6c757d] bg-[#f8f9fa] px-2 py-1 rounded">
                {dept.number}
              </span>
            </div>
            <h3 className="font-bold text-lg text-[#0077b6] group-hover:text-[#48cae4] transition">
              {dept.name}
            </h3>
            <p className="text-sm text-[#6c757d] mt-1">
              {dept.cities.length} ville{dept.cities.length > 1 ? "s" : ""}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
