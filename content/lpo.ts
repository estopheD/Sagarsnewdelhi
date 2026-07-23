// Verbatim content for the LPO & Cross-Border Legal Support page (/lpo),
// transcribed from lpo-international-page.md, Part A. Do not rewrite or
// paraphrase. Per that file's Part C review notes: the client list and any
// quantified/superlative claims are intentionally excluded; the phone number
// discrepancy (9710021846 vs 9810021846) is resolved in favour of
// 9810021846 throughout, per the source instruction.

export const seo = {
  title: "Legal Process Outsourcing (LPO) India | Sagar & Sagar Law Offices",
  description:
    "India-based legal process outsourcing for US, UK, Canadian and Australian law firms and in-house teams — legal research, drafting, contract review, litigation and compliance support.",
  slug: "/lpo",
  primaryKeyword: "legal process outsourcing India",
  secondaryKeywords: [
    "LPO services India",
    "offshore legal support India",
    "legal research outsourcing India",
    "contract review outsourcing",
    "document review services India",
    "offshore paralegal support",
    "India legal outsourcing for US law firms",
    "UK law firm outsourcing India",
    "dedicated offshore legal team",
    "litigation support outsourcing India",
    "contract abstraction services",
    "due diligence support India",
  ],
};

export const h1 = "Legal Process Outsourcing & Cross-Border Legal Support";
export const subheading =
  "India-based legal support for law firms, in-house teams and financial institutions in the United States, United Kingdom, Canada, Australia and beyond.";

// Reconciled per Part C note 3 of the source file.
export const partnerPhoneDisplay = "+91 98100 21846";
export const partnerPhoneTel = "+919810021846";
export const whatsappHref = "https://wa.me/919810021846";

export const contactBar = {
  intro: "Speak directly with a partner.",
  deskEmails: ["info@sagarandsagar.in", "sagarandsagar@lawoffices.co.in"],
  landline: { number: "+91-11-47543981", hours: "Mon–Sat, 10:00–18:00 IST" },
  deskLocation: "Legal Process Outsourcing Desk, New Delhi, India",
  note: "Enquiries from the United States, United Kingdom, Canada, Australia, Singapore, the UAE and other jurisdictions are handled directly by the firm's partners. Time-zone-adjusted calls can be arranged.",
};

export const answerFirst =
  "Sagar & Sagar Law Offices provides legal process outsourcing (LPO) and cross-border legal support from India to foreign law firms, corporate legal departments, financial institutions and LPO companies in the United States, Canada, the United Kingdom and Australia. The firm operates as a backend legal support partner — delivering legal research, drafting, contract review and abstraction, litigation and discovery support, due diligence and compliance work — under the supervision and direction of the instructing foreign attorney or in-house legal team. The firm provides legal support and process outsourcing services and does not independently practise the law of any foreign jurisdiction.";

export const overview = [
  "Legal work that is routine in volume but demanding in accuracy — research memoranda, contract review, document review, chronologies, due diligence, compliance tracking — consumes a disproportionate share of a legal team's capacity. Outsourcing that work offshore is now an established part of how firms and in-house departments manage cost, throughput and turnaround. What determines whether it succeeds is not the arrangement itself but the quality of the legal analysis behind it and the discipline of the process delivering it.",
  "Sagar & Sagar has been in continuous legal practice in India since 2000, with a litigation and transactional practice in banking and finance, debt recovery, insolvency, corporate and commercial law, regulatory compliance and dispute resolution. The firm's LPO practice is staffed and supervised from within that practice. Work is performed by qualified Indian lawyers who conduct contentious and advisory matters in their own right, which means research and drafting for overseas clients is produced by people who understand how the material will be used — and tested — in a live matter.",
  "The firm is institutionally empanelled with several of India's major public sector and private sector banks, housing finance companies, non-banking financial companies and financial institutions. Empanelment follows a structured evaluation by an institution's law department of an advocate's qualifications, experience, court coverage and professional conduct, and is distinct from ordinary client engagement. For overseas clients, it is a useful indicator: the firm's work is already subject to the recurring scrutiny of institutional legal departments.",
];

export const seniorAdvocateNote = {
  bold: "Sanjeev Sagar, was designated a Senior Advocate by the High Court of Delhi in November 2024",
  prefix: "One of the firm's founding partners, ",
  suffix:
    " — a distinction conferred by the Court itself in recognition of ability and standing at the Bar, and among the highest recognitions available in the Indian legal profession.",
};

export const howEngagedIntro =
  "Foreign firms and corporate legal departments generally engage offshore support as legal analysts, legal consultants or an outsourcing partner, rather than as jurisdiction-specific counsel. Sagar & Sagar is engaged in that capacity, functioning as:";

export const engagementRoles = [
  "an LPO partner and legal operations support desk",
  "an India-based legal research and drafting team",
  "a litigation and compliance support provider",
  "a dedicated offshore legal services unit operating as an extension of the client's own team",
];

export const howEngagedClosing =
  "In each model, professional responsibility for the matter, client relationships and any appearance or filing in the foreign jurisdiction remain entirely with the instructing attorney or in-house team. The firm's role is defined, supervised and documented at the outset of the engagement.";

export type CoreServiceSection = {
  id: string;
  heading: string;
  items: string[];
  note?: string; // rendered with the page's link-substitution helper
};

export const coreServices: CoreServiceSection[] = [
  {
    id: "research-writing",
    heading: "Legal research and writing",
    items: [
      "Case law research across common law jurisdictions, including the United States, United Kingdom, Canada and Australia",
      "Statutory and regulatory research",
      "Research memoranda and written legal analysis",
      "Comparative law analysis across jurisdictions",
      "Summaries of authority, issue notes and points of law for counsel",
    ],
  },
  {
    id: "contract-drafting",
    heading: "Contract drafting, review and abstraction",
    items: [
      "Non-disclosure agreements, master services agreements and SaaS agreements",
      "Loan documentation and security documentation",
      "Commercial contracts, amendments, renewals and side letters",
      "Contract abstraction and clause extraction to client-specified fields",
      "Risk flagging, deviation reporting and issue matrices",
      "Playbook-based review against client fallback positions",
    ],
  },
  {
    id: "litigation-support",
    heading: "Litigation and dispute support",
    items: [
      "Drafting of pleadings, applications and affidavits on the instructions of foreign counsel",
      "Discovery support and document review",
      "Chronology preparation, case summaries and brief abstracts",
      "Trial preparation support and evidence analysis",
      "Deposition and hearing preparation materials",
      "Mediation and settlement documentation support",
    ],
  },
  {
    id: "banking-finance",
    heading: "Banking, finance and recovery support",
    items: [
      "Loan and facility documentation review",
      "Debt recovery research and enforcement documentation support",
      "Regulatory and compliance analysis in financial services",
      "Security and collateral documentation review",
      "Financial litigation research",
    ],
    note: "This is the firm's core domestic practice, described in detail on the {{banking-finance-debt-recovery}} and {{insolvency-bankruptcy-ibc}} pages.",
  },
  {
    id: "due-diligence",
    heading: "Due diligence and compliance",
    items: [
      "Corporate and financial due diligence support",
      "Know-your-customer and anti-money-laundering documentation support",
      "Registrar of Companies and corporate registry searches in India",
      "Compliance checklists, matrices and periodic reporting",
      "Regulatory tracking and summarised updates",
    ],
  },
  {
    id: "ip-support",
    heading: "Intellectual property support",
    items: [
      "Trade mark availability and screening searches",
      "IP portfolio administration and docketing support",
      "Drafting and filing support for India-related matters",
      "Prior art and infringement research",
    ],
    note: "Related domestic practice: {{intellectual-property}}.",
  },
  {
    id: "legal-ops",
    heading: "Administrative and legal operations support",
    items: [
      "Legal data management and structured document indexing",
      "Document management and version control",
      "Process documentation for legal operations",
      "Retainer-based legal desk support",
    ],
  },
];

// Link targets referenced by {{...}} placeholders in `coreServices[].note`.
export const relatedPracticeLinks: Record<string, { label: string; href: string }> = {
  "banking-finance-debt-recovery": {
    label: "Banking, Finance & Debt Recovery",
    href: "/practice-areas/banking-finance-debt-recovery",
  },
  "insolvency-bankruptcy-ibc": {
    label: "Insolvency & Bankruptcy (IBC)",
    href: "/practice-areas/insolvency-bankruptcy-ibc",
  },
  "intellectual-property": {
    label: "Intellectual Property",
    href: "/practice-areas/intellectual-property",
  },
};

export const confidentiality: { lead: string; rest: string }[] = [
  {
    lead: "Non-disclosure and confidentiality agreements",
    rest: " executed at the outset, on the client's own form where preferred",
  },
  {
    lead: "A dedicated legal team and a single point of contact",
    rest: " for each engagement, so that work is not rotated across unfamiliar personnel",
  },
  {
    lead: "Defined service levels and turnaround timelines",
    rest: ", agreed in advance and tracked",
  },
  {
    lead: "Secure document handling",
    rest: " through SharePoint, encrypted drives or the client's preferred systems",
  },
  { lead: "Version control and audit trails", rest: " across all deliverables" },
  {
    lead: "Conflict-free engagement assurance",
    rest: ", checked before an engagement is accepted",
  },
  {
    lead: "Access control protocols",
    rest: " restricting matter files to the assigned team",
  },
  {
    lead: "Defined review layers",
    rest: ", with output reviewed by a supervising lawyer before delivery",
  },
];

export const team = [
  "Qualified Indian lawyers with both litigation and transactional experience",
  "Dedicated research and drafting teams",
  "Trained support personnel for document review, indexing and data handling",
  "Access to leading Indian legal research databases, including Manupatra and SCC Online",
  "Video-conferencing capability for client calls, virtual hearings and coordination across time zones",
  "Multi-city operational presence in India, with offices in New Delhi and Mumbai and advocates in other principal commercial centres",
  "Workflow and communication systems suited to sustained, long-term engagements",
];

export const teamClosing =
  "The firm is structured to scale for long-term retainers and continuing outsourcing engagements rather than only for discrete projects.";

export const sectorExperience = [
  "Banking and financial services",
  "Debt recovery and insolvency-related matters",
  "Corporate and commercial law",
  "Regulatory and compliance matters",
  "Arbitration and mediation support",
  "Intellectual property",
];

export const engagementModels: { model: string; suitedTo: string }[] = [
  {
    model: "Hourly legal support",
    suitedTo: "Discrete research questions, one-off drafting, variable workload",
  },
  {
    model: "Monthly retainer LPO desk",
    suitedTo: "Predictable recurring volume; a standing capacity the client can draw on",
  },
  {
    model: "Project-based outsourcing",
    suitedTo:
      "Defined deliverables — a diligence exercise, a document review, a contract remediation",
  },
  {
    model: "Dedicated offshore legal team",
    suitedTo:
      "Continuing engagement where a named team works as an extension of the client's department",
  },
];

export const engagementModelsClosing =
  "Engagement terms, scope, supervision arrangements and turnaround expectations are agreed in writing before work commences.";

export const faqs = [
  {
    question: "How does legal process outsourcing to India work in practice?",
    answer:
      "The instructing foreign law firm or in-house team defines the scope of work and supervises it. The India-based team performs the research, drafting, review or analysis and delivers work product back to the instructing attorney, who exercises professional judgement over its use. The offshore team does not advise the end client, does not appear before any foreign court, and does not take professional responsibility for the matter.",
  },
  {
    question: "Does Sagar & Sagar practise US, UK, Canadian or Australian law?",
    answer:
      "No. The firm provides legal support and process outsourcing services only, and works strictly under the supervision and instructions of licensed foreign attorneys or in-house legal teams. It does not independently practise the law of any foreign jurisdiction, and does not hold itself out as qualified to do so.",
  },
  {
    question: "Who supervises the work?",
    answer:
      "Supervision operates at two levels. Within the firm, work is reviewed by a supervising Indian lawyer before delivery. Externally, the instructing foreign attorney or in-house counsel directs the scope and retains professional responsibility for the finished work product and its use in the matter.",
  },
  {
    question: "How is confidentiality protected?",
    answer:
      "Confidentiality is addressed contractually and operationally. The firm executes non-disclosure and confidentiality agreements at the outset, including on the client's own form; restricts matter files to the assigned team through access controls; handles documents through secure systems including SharePoint, encrypted drives or the client's preferred platform; and maintains version control and audit trails across deliverables.",
  },
  {
    question: "Are conflicts of interest checked?",
    answer:
      "Yes. Conflict checks are conducted before an engagement is accepted, and conflict-free engagement assurance forms part of the firm's standard engagement terms.",
  },
  {
    question: "What is the difference between an LPO provider and foreign local counsel?",
    answer:
      "Local counsel is qualified in the relevant jurisdiction, advises the client directly, and takes professional responsibility for that advice. An LPO provider performs defined legal support work under the supervision of the qualified attorney, who retains responsibility. The two are complementary: LPO adds capacity and cost efficiency to the supervising firm rather than replacing its role.",
  },
  {
    question: "How quickly can work be turned around?",
    answer:
      "Turnaround is agreed as part of the engagement and recorded in defined service levels. The time-zone difference between India and North America, the United Kingdom and Australia commonly permits work instructed at the end of a client's business day to be progressed overnight and returned for the following morning.",
  },
  {
    question: "Can the firm work within our systems and templates?",
    answer:
      "Yes. The firm works to client-specified formats, templates, playbooks and fallback positions, and can operate within the client's own document management and secure file-sharing environment where preferred.",
  },
  {
    question: "Can the firm also advise on Indian law where a matter has an India element?",
    answer:
      "Yes. Where a matter touches Indian law — Indian corporate registry searches, India-related IP filings, Indian regulatory or banking questions, or an India-facing transaction — the firm can act in its own right as Indian counsel, in addition to providing support work. Its Indian practice areas are set out on the Services pages.",
  },
  {
    question: "How does an engagement begin?",
    answer:
      "An initial conversation establishes scope, supervision arrangements, confidentiality requirements, service levels and the appropriate engagement model. Enquiries may be directed to the partner line or the LPO desk email shown at the top and foot of this page. Confidentiality and conflict checks are completed before any material is exchanged.",
  },
];

// Must render on-page, prominently, not collapsed — see B.3/B.5 build notes.
export const disclaimer =
  "Sagar & Sagar Law Offices provides legal support and outsourcing services only. The firm does not independently practise the law of any foreign jurisdiction and works strictly under the supervision and instructions of licensed foreign attorneys or in-house legal teams. Nothing on this page constitutes legal advice, an advertisement or a solicitation, and no attorney–client or advocate–client relationship arises from accessing this page.";

export const footerContactBlock = {
  heading: "Contact the LPO Desk",
  emails: [
    "info@sagarandsagar.in",
    "sagarandsagar@lawoffices.co.in",
    "sagarandsagar@live.com",
  ],
  landline: { number: "+91-11-47543981", hours: "Mon–Sat, 10:00–18:00 IST" },
  deskLabel: "Legal Process Outsourcing Desk",
  deskLocation: "New Delhi, India",
  principalOffice: {
    label: "Principal office:",
    lines: ["18 Hargobind Enclave, Bhartendu Harish Chandra Marg, New Delhi – 110092, India"],
  },
  delhiChamber: {
    label: "Delhi High Court chamber:",
    lines: ["Chamber No. 210, Block-III, Delhi High Court, New Delhi"],
    phone: "011-65781948",
  },
  mumbaiOffice: {
    label: "Mumbai office:",
    lines: ["Office No. 12 & 13, Mitha Mansion, Shahid Bhagat Singh Road, Ballard Estate, Fort, Mumbai – 400001"],
  },
  web: "www.sagarandsagar.in",
  note: "Enquiries from the United States, United Kingdom, Canada, Australia, Singapore, the UAE and other jurisdictions are welcome. Calls can be scheduled to suit your time zone.",
};
