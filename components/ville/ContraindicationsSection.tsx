import { XCircleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export function ContraindicationsSection() {
  const items = [
    "Grossesse et allaitement",
    "Peau bronzée ou exposée au soleil (4 dernières semaines)",
    "Infections cutanées actives sur la zone",
    "Traitements photosensibilisants en cours",
    "Antécédents de cicatrices chéloïdes",
  ];

  return (
    <section className="mb-16">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--color-grey-200)' }}>
          {/* Header */}
          <div className="px-6 py-4 flex items-center gap-3" style={{ background: 'var(--color-grey-50)', borderBottom: '1px solid var(--color-grey-200)' }}>
            <XCircleIcon className="w-5 h-5" style={{ color: 'var(--color-secondary)' }} />
            <h2 className="text-lg font-bold" style={{ color: 'var(--color-primary)', textAlign: 'left' }}>
              Contre-indications
            </h2>
          </div>

          {/* Liste compacte */}
          <div className="px-6 py-4">
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--color-secondary)' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer réglementation */}
          <div className="px-6 py-3 flex items-start gap-2" style={{ background: 'var(--color-primary-lighter)', borderTop: '1px solid var(--color-grey-200)' }}>
            <InformationCircleIcon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
            <p className="text-xs" style={{ color: 'var(--color-primary)', textAlign: 'left' }}>
              Acte encadré par l&apos;ANSM — réalisé par ou sous la responsabilité d&apos;un médecin qualifié (décret n°2022-1227).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
