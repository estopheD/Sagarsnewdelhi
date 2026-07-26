"use client";

import { useState } from "react";
import { disclaimer } from "@/content/site";

// Cookie-consent-style entry notice: a slim, dismissible bottom bar rather
// than a full-page gate, so the page and its content stay reachable (and
// crawlable) immediately. The comprehensive Bar Council of India disclaimer
// text lives in the Footer (#disclaimer) — this banner summarises it and
// links there. Per the build brief, no localStorage/sessionStorage is used
// anywhere on the site, so this shows once per full page load.
export function DisclaimerBanner() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      role="region"
      aria-label="Website disclaimer"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper-raised/97 px-4 py-4 backdrop-blur-sm sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-xs leading-relaxed text-ink-muted sm:max-w-3xl">
          {disclaimer.bannerSummary}{" "}
          <a href="#disclaimer" className="text-accent underline underline-offset-2 hover:text-accent-hover">
            Read the full disclaimer
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="shrink-0 border border-ink px-5 py-2.5 text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          I Agree
        </button>
      </div>
    </div>
  );
}
