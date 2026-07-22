// Shape for a fully-populated practice-area page, matching the 12-section
// structure defined in SAGAR_AND_SAGAR_WEBSITE_CONTENT.md §0.11 (SEO block →
// H1 → answer-first → overview → scope of work → forums → who we act for →
// approach → FAQ → related areas → enquiry line → schema notes).
//
// See README.md "Adding a practice-area page" for how to populate one of
// these and wire it into the registry in `index.ts`.

export type ScopeGroup = {
  heading: string;
  intro: string;
  items: string[];
};

export type Faq = {
  question: string;
  answer: string;
};

export type PracticeAreaContent = {
  slug: string;
  seo: {
    title: string;
    description: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
  };
  h1: string;
  answerFirst: string;
  overview: string[];
  scopeOfWork: ScopeGroup[];
  forums: string[];
  whoWeActFor: string[];
  approach: { title: string; body: string }[];
  faqs: Faq[];
  relatedPracticeAreas: string[]; // practice-area slugs
  breadcrumbLabel: string;
};
