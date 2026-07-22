// Shape for a fully-populated partner profile page, matching the structure
// in about-and-partner-pages.md (Pages B and C).
//
// See README.md "Adding a partner page" for how to populate one of these and
// wire it into the registry in `index.ts`.

export type PartnerContent = {
  slug: string;
  seo: {
    title: string;
    description: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
  };
  name: string;
  honorific?: string; // e.g. "Senior Advocate"
  role: string; // e.g. "Founding & Managing Partner"
  answerFirst: string;
  profile: string[];
  areasOfPractice: string[];
  courtsAndTribunals: string[];
  roleAtFirm: string;
  professionalDetails: { label: string; value: string }[];
};
