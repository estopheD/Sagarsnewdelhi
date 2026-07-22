export type FaqItem = {
  question: string;
  answer: string;
};

// Renders as a semantic <dl> for content structure, with native
// <details>/<summary> for interactive disclosure — no client JS required,
// fully readable and navigable with JS disabled.
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <dl className="divide-y divide-line border-t border-b border-line">
      {items.map((item) => (
        <div key={item.question}>
          <details className="faq-item group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg leading-snug text-ink">
              <dt className="flex-1">{item.question}</dt>
              <span
                aria-hidden="true"
                className="faq-chevron mt-1 shrink-0 text-accent transition-transform duration-200"
              >
                &#9662;
              </span>
            </summary>
            <dd className="prose-measure mt-4 text-[0.975rem] leading-relaxed text-ink-muted">
              {item.answer}
            </dd>
          </details>
        </div>
      ))}
    </dl>
  );
}
