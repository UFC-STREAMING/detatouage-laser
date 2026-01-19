import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-[#6c757d] mb-6" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-[#0077b6] transition">
        Accueil
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4" />
          {item.href ? (
            <Link href={item.href} className="hover:text-[#0077b6] transition">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#0077b6] font-semibold">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
