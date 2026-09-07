import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const PARTNERS_DIR = path.join(process.cwd(), "content", "partners");

// Marks where the Education section (rendered as a <dl>, not MDX prose —
// see PartnerProfileLayout) is injected between the two halves of the MDX
// body. Written as an HTML comment so it's inert if ever left in by mistake.
const EDUCATION_MARKER = "<!-- EDUCATION-SLOT -->";

export type EducationRow = { label: string; value: string };

export type PartnerDirectContact = {
  partnerNumber: string;
  partnerNote: string;
  emails: string[];
};

// Maps directly onto the Person JSON-LD fields in lib/schema.ts's
// partnerProfileSchema — kept as plain strings here so content authors
// don't need to know schema.org's nested object shapes.
export type PartnerSchemaPerson = {
  alumniOf: string[];
  memberOf: string[];
  knowsAbout: string[];
};

export type PartnerFrontmatter = {
  name: string;
  honorific?: string; // e.g. "Advocate", "Senior Advocate"
  role: string; // e.g. "Founding & Managing Partner"
  enrolledNote: string; // e.g. "Advocate · Enrolled with the Bar Council of Delhi, 21 August 2000"
  metaTitle: string;
  description: string;
  keywords?: string[];
  breadcrumbLabel: string;
  education: EducationRow[];
  educationNote: string;
  schemaPerson: PartnerSchemaPerson;
  directContact?: PartnerDirectContact;
};

export type Partner = PartnerFrontmatter & {
  slug: string;
  bodyBeforeEducation: string;
  bodyAfterEducation: string;
};

function readSlugs(): string[] {
  if (!fs.existsSync(PARTNERS_DIR)) return [];
  return fs
    .readdirSync(PARTNERS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllPartnerSlugs(): string[] {
  return readSlugs();
}

export function getPartner(slug: string): Partner | null {
  const filePath = path.join(PARTNERS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as PartnerFrontmatter;

  const [bodyBeforeEducation, bodyAfterEducation] = content.includes(EDUCATION_MARKER)
    ? content.split(EDUCATION_MARKER)
    : [content, ""];

  return {
    ...frontmatter,
    slug,
    bodyBeforeEducation: bodyBeforeEducation.trim(),
    bodyAfterEducation: bodyAfterEducation.trim(),
  };
}
