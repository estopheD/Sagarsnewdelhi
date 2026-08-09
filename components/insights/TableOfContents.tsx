import type { TocItem } from "@/lib/insights";

// Anchors-only navigation, no client JS: works with JavaScript disabled and
// costs nothing at runtime. Sticky on lg+ where there's a real side column
// to stick within; a plain block above the body on narrower screens, where
// a fixed sidebar would just eat scroll space.
export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="mb-10 border border-line bg-paper-raised p-5 text-sm lg:sticky lg:top-10 lg:mb-0 lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
        On this page
      </p>
      <ol className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-ink-muted hover:text-accent">
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
