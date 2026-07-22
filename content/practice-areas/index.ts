import type { PracticeAreaContent } from "./types";

// Registry of populated practice-area pages, keyed by slug. Empty until
// content is dropped in — see README.md "Adding a practice-area page".
// `app/practice-areas/[slug]/page.tsx` calls notFound() for any slug not
// present here, so partially-populated rollouts are safe.
export const practiceAreaContent: Record<string, PracticeAreaContent> = {};
