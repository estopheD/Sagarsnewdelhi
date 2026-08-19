// Single source of truth for firm facts. Sourced verbatim from
// about-and-partner-pages.md (contact block + About page) — do not invent
// or alter values here; update this file if the firm supplies corrections.

export const SITE_URL = "https://www.sagarandsagar.in";

export const firm = {
  name: "Sagar & Sagar Law Offices",
  legalName: "Sagar & Sagar Law Offices",
  foundingDate: "2000",
  areaServed: "India",
  founders: ["Rajeev Sagar", "Sanjeev Sagar"],
  emails: ["info@sagarandsagar.in", "sagarandsagar@live.com"],
} as const;

export type Office = {
  id: string;
  name: string;
  addressLines: string[];
  locality: string;
  region: string;
  postalCode?: string;
  phone?: string;
  // Highlighted direct line, rendered distinctly from the general office
  // phone since it reaches a partner rather than the office switchboard.
  partnerContact?: { number: string; note: string };
  emails?: string[];
  note?: string;
};

export const offices: Office[] = [
  {
    id: "delhi-hc-chamber",
    name: "Delhi High Court Chamber",
    addressLines: ["Chamber No. 210, Block-III, Delhi High Court"],
    locality: "New Delhi",
    region: "Delhi",
    phone: "011-65781948",
  },
  {
    id: "new-delhi-principal",
    name: "New Delhi Office (principal office)",
    addressLines: ["18, Hargobind Enclave, Bhartendu Harish Chandra Marg"],
    locality: "New Delhi",
    region: "Delhi",
    postalCode: "110092",
    phone: "+91-11-47543981",
    partnerContact: { number: "+91-9810021846", note: "for direct inquiries" },
    emails: ["info@sagarandsagar.in", "rajiv.sagar1@gmail.com"],
  },
  {
    id: "south-delhi",
    name: "South Delhi Office",
    addressLines: ["M-11, Jangpura"],
    locality: "New Delhi",
    region: "Delhi",
    postalCode: "110014",
    phone: "+91-9811016162",
  },
  {
    id: "mumbai",
    name: "Mumbai Office",
    addressLines: [
      "Office No. 12 & 13, Mitha Mansion, Shahid Bhagat Singh Road",
      "Between RBI & GPO (Above National Restaurant), Ballard Estate, Fort",
    ],
    locality: "Mumbai",
    region: "Maharashtra",
    postalCode: "400001",
    phone: "+91-9561980557",
    emails: ["navinarora21@gmail.com"],
  },
];

export const contact = {
  internationalNote:
    "For LPO enquiries from the US, UK, Canada, Australia, South East Asia and other jurisdictions, contact by email or WhatsApp to be connected with the Global Desk.",
  seniorPartnerDirect: ["+91-9810021846", "+91-9811016162"],
  officeEmails: ["info@sagarandsagar.in", "sagarandsagar@live.com"],
  landline: {
    number: "+91-11-47543981",
    hours: "Mon–Sat, 10 am–6 pm",
  },
};

export const forums = [
  "The Supreme Court of India",
  "The High Court of Delhi and the High Court of Punjab & Haryana",
  "The National Company Law Tribunal (NCLT) and the National Company Law Appellate Tribunal (NCLAT)",
  "The Appellate Tribunal under the Prevention of Money Laundering Act (PMLA)",
  "Debt Recovery Tribunals (DRT) and the Debt Recovery Appellate Tribunal (DRAT)",
  "The National Consumer Disputes Redressal Commission (NCDRC) and State and District Consumer Commissions",
  "District Courts and Commercial Courts across India",
];

// Final wording supplied by the firm. Rendered in full in the Footer, and
// summarised in the entry DisclaimerBanner (see components/layout).
export const disclaimer = {
  intro:
    "As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. By accessing this website, you acknowledge and confirm the following:",
  points: [
    "There has been no advertisement, personal communication, solicitation, invitation, or inducement of any kind whatsoever from Sagar & Sagar Law Offices or any of its members to solicit any work through this website.",
    "You wish to gain more information about Sagar & Sagar Law Offices for your own information and use.",
    "The information about Sagar & Sagar Law Offices is provided to you on your specific request, and any information obtained or materials downloaded from this website are completely at your own volition; any transmission, receipt, or use of this website does not create any lawyer-client relationship.",
    "Sagar & Sagar Law Offices is not liable for any consequence of any action taken by you relying on the material or information provided on this website.",
    "This website is meant only for providing information and does not purport to be exhaustive or intended as legal advice for any specific case or individual.",
  ],
  bannerSummary:
    "This website does not advertise or solicit work, consistent with the Bar Council of India's rules for advocates. Continued use confirms you are seeking this information at your own request and that it does not create a lawyer–client relationship.",
} as const;
