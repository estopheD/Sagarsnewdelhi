export type FaqItem = {
  question: string;
  answer: string;
};

// Native <details>/<summary> for interactive disclosure — no client JS
// required, the answer text is in the HTML at first paint (CSS hides it
// while collapsed), and it is fully readable with JavaScript disabled.
// Each question is a heading inside its <summary>, so it is both operable as
// a disclosure control and exposed as a heading to crawlers and screen
// readers. (A <dl> wrapping <details> is invalid HTML.)
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-t border-b border-line">
      {items.map((item) => (
        <details key={item.question} className="faq-item group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg leading-snug text-ink">
            <h3 className="flex-1 font-normal">{item.question}</h3>
            <span
              aria-hidden="true"
              className="faq-chevron mt-1 shrink-0 text-accent transition-transform duration-200"
            >
              &#9662;
            </span>
          </summary>
          <p className="prose-measure mt-4 text-[0.975rem] leading-relaxed text-ink-muted">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
