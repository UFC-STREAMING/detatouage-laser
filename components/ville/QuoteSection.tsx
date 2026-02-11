import { QuoteForm } from "@/components/ui/QuoteForm";

type QuoteSectionProps = {
  postalCode: string;
};

export function QuoteSection({ postalCode }: QuoteSectionProps) {
  return (
    <section className="mb-16" id="quote-form">
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary-lighter) 0%, var(--color-white) 60%, var(--color-white) 100%)",
          boxShadow: "var(--shadow-xl)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(1,103,204,0.03) 10px, rgba(1,103,204,0.03) 11px)",
          }}
        />

        <div className="relative p-6 md:p-10 lg:p-12">
          <QuoteForm initialPostalCode={postalCode} />
        </div>
      </div>
    </section>
  );
}
