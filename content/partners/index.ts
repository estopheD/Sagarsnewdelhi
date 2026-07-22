import type { PartnerContent } from "./types";

// Registry of populated partner pages, keyed by slug. Empty until content is
// dropped in — see README.md "Adding a partner page".
// `app/about/[partner]/page.tsx` calls notFound() for any slug not present
// here, so a partial rollout (one partner live, one pending) is safe.
export const partnerContent: Record<string, PartnerContent> = {};
