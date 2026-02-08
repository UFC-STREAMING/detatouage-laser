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
    <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: 'var(--text-secondary)' }} aria-label="Breadcrumb">
      <Link href="/" className="hover:text-[var(--color-primary)] transition">
        Accueil
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4" />
          {item.href ? (
            <Link href={item.href} className="hover:text-[var(--color-primary)] transition">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
