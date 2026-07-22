"use client";

import { useEffect, useRef, useState } from "react";
import { disclaimerPlaceholder } from "@/content/site";

// Entry disclaimer shell. Per the build brief, no localStorage/sessionStorage
// is used anywhere on the site, so this shows once per full page load rather
// than being suppressed permanently after a first visit — that persistence
// behaviour is left for the firm to decide once final wording is supplied.
export function DisclaimerModal() {
  const [open, setOpen] = useState(true);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus();
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4 backdrop-blur-[1px]">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-heading"
        className="w-full max-w-lg border border-line bg-paper p-8 shadow-sm"
      >
        <h2 id="disclaimer-heading" className="font-serif text-xl text-ink">
          Disclaimer
        </h2>
        <p className="prose-measure mt-4 text-sm leading-relaxed text-ink-muted">
          {disclaimerPlaceholder}
        </p>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={() => setOpen(false)}
          className="mt-8 w-full border border-ink px-6 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-paper sm:w-auto"
        >
          I Understand — Enter Site
        </button>
      </div>
    </div>
  );
}
