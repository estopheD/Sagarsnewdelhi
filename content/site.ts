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
  email?: string;
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
    email: "navinarora21@gmail.com",
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

// Placeholder — final wording to be supplied by the firm. Do not fabricate.
export const disclaimerPlaceholder =
  "FIRM TO SUPPLY FINAL DISCLAIMER WORDING. This website is for general information only, does not constitute legal advice, and does not create an advocate–client relationship.";
