import { ChevronDown, HelpCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  cityName: string;
  faqItems: FAQItem[];
};

export function FAQSection({ cityName, faqItems }: FAQSectionProps) {
  return (
    <section className="mb-16">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .faq-item[open] {
              border-left: 4px solid var(--color-primary);
            }
            .faq-item[open] .faq-chevron {
              transform: rotate(180deg);
            }
            .faq-item summary {
              list-style: none;
            }
            .faq-item summary::-webkit-details-marker {
              display: none;
            }
            .faq-item[open] summary {
              border-bottom: 1px solid var(--color-grey-100);
            }
            .faq-item:hover {
              box-shadow: var(--shadow-md);
            }
          `,
        }}
      />

      <div className="text-center mb-10" style={{ textAlign: 'center' }}>
        <span className="badge badge-primary mb-4 inline-flex">
          <HelpCircle size={14} />
          FAQ
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: "var(--color-primary)" }}
        >
          Questions fréquentes sur le détatouage à {cityName}
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqItems.map((faq) => (
          <details
            key={faq.question}
            className="faq-item rounded-xl mb-4 overflow-hidden"
            style={{
              border: "1px solid var(--color-grey-200)",
              background: "var(--color-white)",
              transition:
                "box-shadow var(--transition-base) var(--ease-smooth), border-color var(--transition-base) var(--ease-smooth)",
              borderLeft: "4px solid transparent",
            }}
          >
            <summary
              className="px-6 py-5 font-semibold text-lg cursor-pointer flex justify-between items-center"
              style={{ color: "var(--text-primary)" }}
            >
              <span className="pr-4">{faq.question}</span>
              <ChevronDown
                className="faq-chevron flex-shrink-0"
                size={20}
                style={{
                  color: "var(--color-primary)",
                  transition:
                    "transform var(--transition-base) var(--ease-smooth)",
                }}
              />
            </summary>
            <div
              className="px-6 pb-6 pt-4 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {faq.answer}
            </div>
          </details>
        ))}

        {/* Bottom CTA */}
        <div
          className="text-center mt-8 pt-6"
          style={{ borderTop: "1px solid var(--color-grey-100)", textAlign: 'center' }}
        >
          <p
            className="text-sm mb-3"
            style={{ color: "var(--text-tertiary)" }}
          >
            Vous avez d&apos;autres questions ?
          </p>
          <a
            href="#quote-form"
            className="inline-flex items-center gap-2 font-semibold text-sm"
            style={{
              color: "var(--color-primary)",
              transition: "color var(--transition-base) var(--ease-smooth)",
            }}
          >
            Contactez-nous via le formulaire de devis
          </a>
        </div>
      </div>
    </section>
  );
}
