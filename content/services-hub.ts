// Verbatim content for the Services Hub page (/services), transcribed from
// SAGAR_AND_SAGAR_WEBSITE_CONTENT.md, Part 1. Do not rewrite or paraphrase.
//
// Practice area group XVII (Aerospace & Defence) is present in the source
// file but its data is intentionally NOT included in `groups` below and is
// excluded from navigation, per the source file's own note at that section:
// "Publication of this page is subject to Senior Partner confirmation that
// the firm undertakes this work." If confirmed, add it back as group 17.

export type PracticeGroup = {
  numeral: string;
  slug: string;
  title: string;
  description: string;
  serviceLines: string[];
};

export const seo = {
  title: "Our Practice Areas | Sagar & Sagar Law Offices",
  description:
    "Litigation, banking and debt recovery, insolvency, corporate and regulatory practice areas of Sagar & Sagar Law Offices, a New Delhi law firm.",
  slug: "/services",
};

export const h1 = "Our Practice Areas";

export const answerFirst =
  "Sagar & Sagar Law Offices is a full-service Indian law firm advising on contentious and non-contentious matters across banking and finance, insolvency, corporate and commercial law, regulatory and competition matters, dispute resolution, taxation, technology and data, intellectual property, and private client work. The firm acts for banks, non-banking financial companies, asset reconstruction companies, corporates, investors and individuals, and appears before courts, tribunals and regulatory authorities across India. The practice areas set out below are organised into principal groups; each links to a detailed page, and the service lines listed within each group indicate the range of work undertaken.";

export const introParagraphs = [
  "The firm's work is organised by legal discipline rather than by industry, so that a client with a single problem is directed to the framework that governs it rather than to a sector label. Many matters engage more than one of the practice areas below at the same time — a distressed account may involve banking enforcement, insolvency and financial crime simultaneously; a corporate transaction may engage company law, foreign exchange, competition and tax together. The groups are therefore built to connect, and the individual practice pages cross-refer to one another where matters commonly overlap.",
  "Each principal practice area is set out below with a short statement of what the group covers and how the firm approaches it, followed by the specific service lines within it. The linked page for each group contains the detailed treatment, including the forums before which the work is conducted, the categories of client acted for, and answers to the questions that arise most frequently in that area.",
];

export const howToRead =
  "Each numbered heading is a **principal practice area** with its own detailed page — follow the link for the full treatment. The items listed beneath each heading are the **specific service lines** within that area, provided so that clients can see the full span of the firm's work at a glance. The service lines are descriptive; the linked page is the place to begin an enquiry.";

export const groups: PracticeGroup[] = [
  {
    numeral: "I",
    slug: "litigation-dispute-resolution",
    title: "Litigation & Dispute Resolution",
    description:
      "The conduct of contested proceedings before Indian courts and tribunals, from institution through trial, appeal and enforcement. The firm acts for parties initiating and defending civil, commercial, corporate, constitutional and regulatory disputes, with attention to forum selection, interim protection and the appellate record from the outset.",
    serviceLines: [
      "General and commercial litigation",
      "Civil litigation",
      "Corporate and shareholder disputes",
      "Constitutional and writ litigation",
      "Appellate and Supreme Court practice",
      "Commercial Courts litigation",
      "Regulatory litigation",
      "Public interest litigation",
      "Class actions",
      "Consumer and insurance litigation",
      "Enforcement and execution proceedings",
      "Cross-border and multi-jurisdiction litigation",
      "Tribunal litigation",
    ],
  },
  {
    numeral: "II",
    slug: "banking-finance-debt-recovery",
    title: "Banking, Finance & Debt Recovery",
    description:
      "Enforcement of security interests and recovery of dues by lenders, and the defence of borrowers and guarantors, together with pre-lending documentation and advisory. The firm acts on both sides of secured recovery, from title and security documentation through SARFAESI enforcement, tribunal proceedings, appeal and execution, and coordinates recovery with insolvency where an account moves to the Tribunal.",
    serviceLines: [
      "SARFAESI enforcement",
      "Debts Recovery Tribunal and DRAT proceedings",
      "NPA and loan recovery",
      "Secured, structured and project finance",
      "Trade and export finance",
      "Syndicated and corporate lending",
      "Security documentation",
      "Title search and verification",
      "Asset reconstruction and distressed assets",
      "Debt restructuring",
      "One-time settlements",
      "Banking compliance and advisory",
      "Enforcement of guarantees",
    ],
  },
  {
    numeral: "III",
    slug: "insolvency-bankruptcy-ibc",
    title: "Insolvency & Bankruptcy (IBC)",
    description:
      "Resolution and liquidation of companies under the Insolvency and Bankruptcy Code, 2016, and the rights of creditors, debtors and guarantors within it. The firm acts for financial and operational creditors, corporate debtors, resolution applicants and personal guarantors across the process, from admission through resolution or liquidation to appeal.",
    serviceLines: [
      "Corporate insolvency resolution (CIRP)",
      "Financial creditor representation (Section 7)",
      "Operational creditor representation (Sections 8 and 9)",
      "Corporate debtor and applicant representation (Section 10)",
      "Committee of creditors advisory",
      "Resolution plans and Section 29A eligibility",
      "Liquidation and distribution",
      "Avoidance and preferential transaction applications",
      "Personal guarantor insolvency",
      "Pre-packaged insolvency for eligible MSMEs",
      "Cross-border insolvency",
      "Insolvency litigation and appeals (NCLAT)",
    ],
  },
  {
    numeral: "IV",
    slug: "white-collar-financial-crime-defence",
    title: "White Collar Crime & Financial Crime Defence",
    description:
      "Representation in investigations and proceedings concerning economic offences, money laundering, foreign exchange contraventions and corporate fraud. The firm advises from the stage of summons and investigation through attachment, adjudication, trial and appeal, and coordinates positions across parallel criminal, regulatory and civil proceedings.",
    serviceLines: [
      "PMLA proceedings, attachment and adjudication",
      "Enforcement Directorate representation",
      "FEMA adjudication and compounding",
      "Economic offences and fraud investigations",
      "Serious Fraud Investigation Office matters",
      "CBI and Economic Offences Wing proceedings",
      "Prevention of Corruption Act matters",
      "Benami and Fugitive Economic Offenders proceedings",
      "Internal investigations",
      "AML and KYC advisory",
      "Anticipatory and regular bail",
      "Quashing proceedings",
    ],
  },
  {
    numeral: "V",
    slug: "nbfc-fintech-financial-regulatory-advisory",
    title: "NBFC, FinTech & Financial Regulatory Advisory",
    description:
      "Licensing, structuring and ongoing compliance of entities carrying on financial activity under Reserve Bank of India supervision, and the regulatory treatment of technology-enabled financial products. The firm advises on registration, change-in-control approvals, digital lending and payments structuring, and represents entities in inspection follow-up and enforcement.",
    serviceLines: [
      "NBFC registration and scale based regulation",
      "Change in control and management approvals",
      "Digital lending framework compliance",
      "Co-lending and default loss guarantee arrangements",
      "Payment aggregator and gateway advisory",
      "Prepaid payment instruments",
      "Account aggregator and peer-to-peer lending",
      "Housing and consumer finance regulation",
      "RBI advisory and compliance",
      "Master Directions compliance",
      "Credit information reporting",
      "Foreign investment in financial services",
      "Regulatory inspection and enforcement response",
    ],
  },
  {
    numeral: "VI",
    slug: "corporate-ma-private-equity-capital-markets",
    title: "Corporate, M&A, Private Equity & Capital Markets",
    description:
      "Formation, governance, financing, acquisition and restructuring of companies, and the regulatory frameworks applicable to each. The firm advises on transactions from structuring through completion, and provides standing corporate advisory to companies without a transaction in progress.",
    serviceLines: [
      "Corporate advisory and governance",
      "Company secretarial and compliance",
      "Mergers, acquisitions and business transfers",
      "Schemes of arrangement and demergers (NCLT)",
      "Joint ventures and shareholders' agreements",
      "Private equity and venture capital investment",
      "Fund formation and alternative investment funds",
      "Share purchase, subscription and exit transactions",
      "Due diligence",
      "Foreign direct investment and FEMA",
      "Capital markets — IPO, rights issue, QIP, OFS",
      "SEBI and securities regulation",
      "Takeover code and insider trading",
      "Merger control (CCI)",
    ],
  },
  {
    numeral: "VII",
    slug: "regulatory-competition-compliance",
    title: "Regulatory, Competition & Compliance",
    description:
      "Obligations imposed on business by sectoral and cross-sectoral regulators, and representation when those obligations are alleged to have been breached. The firm advises on preventive compliance, conducts internal investigations, and defends investigation, adjudication and appellate proceedings across regulators.",
    serviceLines: [
      "Competition law — anti-competitive agreements (Section 3)",
      "Abuse of dominance (Section 4)",
      "Merger control and CCI representation",
      "Cartel and antitrust investigations",
      "Companies Act compliance and adjudication",
      "Consumer protection and CCPA proceedings",
      "Data protection and DPDP Act advisory",
      "Regulatory investigations",
      "Compliance audits and frameworks",
      "Corporate governance advisory",
      "Serious Fraud Investigation Office matters",
    ],
  },
  {
    numeral: "VIII",
    slug: "arbitration-mediation-adr",
    title: "Arbitration, Mediation & Alternative Dispute Resolution",
    description:
      "Determination of disputes outside the court system, and the supporting and supervisory role courts retain. The firm drafts dispute resolution clauses, conducts domestic and international arbitrations, and pursues or resists interim relief, challenge and enforcement of awards.",
    serviceLines: [
      "Domestic commercial arbitration",
      "International and institutional arbitration",
      "Section 9 interim relief",
      "Section 11 appointment of arbitrators",
      "Section 34 setting aside and Section 37 appeals",
      "Domestic and foreign award enforcement (Section 48)",
      "Construction and infrastructure arbitration",
      "Investment arbitration",
      "Mediation under the Mediation Act, 2023",
      "Pre-institution mediation",
      "Conciliation",
      "Expert determination",
      "Dispute resolution clause drafting",
    ],
  },
  {
    numeral: "IX",
    slug: "real-estate-infrastructure-energy",
    title: "Real Estate, Infrastructure & Energy",
    description:
      "Acquisition, development, financing and regulation of immovable property and of projects built upon it, together with the frameworks governing power and infrastructure. The firm covers title and documentation, RERA compliance and disputes, development and concession contracts, and energy sector regulation.",
    serviceLines: [
      "Title investigation and property due diligence",
      "Sale, conveyance and property documentation",
      "Joint development and area sharing agreements",
      "Construction and EPC contracts",
      "RERA registration, compliance and disputes",
      "Commercial leasing and licensing",
      "Land acquisition and compensation",
      "Infrastructure and concession agreements (PPP)",
      "Public procurement and tender disputes",
      "Electricity Act regulation and tariff proceedings",
      "Power purchase agreements and open access",
      "Renewable energy projects",
      "Environmental clearances and National Green Tribunal",
      "REITs and InvITs",
    ],
  },
  {
    numeral: "X",
    slug: "intellectual-property",
    title: "Intellectual Property",
    description:
      "Creation, registration, licensing and enforcement of rights in trade marks, copyright, patents, designs and confidential information. The firm covers clearance and prosecution, opposition and rectification, transactional work, and contentious enforcement, and provides structured IP support through its LPO capability.",
    serviceLines: [
      "Trade mark clearance, prosecution and registry proceedings",
      "Trade mark opposition and rectification",
      "Trade mark enforcement, infringement and passing off",
      "Copyright registration, licensing and enforcement",
      "Patent prosecution, opposition and revocation",
      "Patent infringement and freedom to operate",
      "Design registration and enforcement",
      "Geographical indications",
      "Trade secrets and confidential information",
      "Domain name disputes and online enforcement",
      "IP assignment, licensing and commercialisation",
      "IP due diligence",
      "IP support and managed services",
    ],
  },
  {
    numeral: "XI",
    slug: "tax-advisory-litigation",
    title: "Tax Advisory & Litigation",
    description:
      "Compliance with, and disputes arising under, India's direct and indirect tax legislation, and the tax consequences of commercial transactions. The firm advises on transaction structuring and represents taxpayers through assessment, audit and investigation, and in appeals through the statutory hierarchy.",
    serviceLines: [
      "Direct tax advisory",
      "Assessment, reassessment and dispute",
      "Direct tax appeals (CIT(A), ITAT, High Court, Supreme Court)",
      "Transfer pricing and advance pricing agreements",
      "International tax and treaty benefits",
      "Permanent establishment and profit attribution",
      "GST advisory, classification and input tax credit",
      "GST refunds, audit and adjudication",
      "GST appeals and advance rulings",
      "Customs classification, valuation and disputes",
      "CESTAT appeals",
      "Legacy excise and service tax",
      "Tax in transactions and due diligence",
    ],
  },
  {
    numeral: "XII",
    slug: "technology-ai-data-privacy-cybersecurity",
    title: "Technology, AI, Data Privacy & Cybersecurity",
    description:
      "The legal framework applicable to digital products, platforms and infrastructure, the processing of personal data, and the response to cyber incidents. The firm advises on data protection compliance, technology contracting, AI governance and incident response, and represents businesses in technology disputes and regulatory proceedings.",
    serviceLines: [
      "DPDP Act compliance and data mapping",
      "Privacy notices, consent and data principal rights",
      "Data processing and cross-border transfer",
      "Cyber incident response and CERT-In reporting",
      "Intermediary and platform obligations (IT Rules)",
      "Artificial intelligence governance and contracting",
      "Software, SaaS and cloud agreements",
      "IT outsourcing and managed services",
      "Source code escrow and open source",
      "E-commerce and digital business regulation",
      "Telecommunications regulation and TDSAT",
      "Technology disputes and cybercrime",
      "Electronic evidence",
    ],
  },
  {
    numeral: "XIII",
    slug: "media-entertainment-digital-content",
    title: "Media, Entertainment & Digital Content",
    description:
      "Creation, financing, licensing, distribution and regulation of content across film, television, streaming, music, publishing and digital platforms. The firm covers production and talent documentation, content acquisition and distribution, certification and content regulation, advertising compliance, and defamation and personality rights.",
    serviceLines: [
      "Film, television and streaming production",
      "Chain of title and rights acquisition",
      "Talent, writer and director agreements",
      "Content acquisition and distribution",
      "Format and adaptation licensing",
      "Music, synchronisation and performer rights",
      "Film certification and content regulation",
      "OTT and digital media compliance (IT Rules)",
      "Advertising and marketing regulation",
      "Influencer and endorsement compliance",
      "Personality, publicity and reputation",
      "Defamation (civil and criminal)",
      "Publishing and digital news",
      "Sports, gaming and live events",
    ],
  },
  {
    numeral: "XIV",
    slug: "employment-labour-law",
    title: "Employment & Labour Law",
    description:
      "The relationship between employers and those who work for them — engagement, terms of service, workplace conduct, termination and collective relations. The firm advises on documentation and policies, statutory compliance, workplace harassment obligations and separation processes, and represents parties in industrial and employment disputes.",
    serviceLines: [
      "Employment contracts and appointment documentation",
      "Restrictive covenants and confidentiality",
      "Employee handbooks and policies",
      "Labour law compliance (central and state)",
      "Wages, gratuity, provident fund and ESI",
      "Contract labour and principal employer liability",
      "Gig and platform worker obligations",
      "POSH compliance, internal committees and inquiries",
      "Disciplinary process and domestic inquiries",
      "Termination, retrenchment and closure",
      "Industrial disputes and collective bargaining",
      "Employment in transactions and restructuring",
      "Employee stock options and incentives",
      "Individual employment disputes",
    ],
  },
  {
    numeral: "XV",
    slug: "esg-sustainability",
    title: "ESG & Sustainability",
    description:
      "Legal obligations arising from environmental, social and governance requirements, including mandatory disclosure, environmental compliance, responsible sourcing and board-level governance. The firm advises on sustainability reporting, CSR, producer responsibility, carbon and green finance frameworks, and exposure arising from sustainability claims.",
    serviceLines: [
      "Sustainability reporting and disclosure (BRSR)",
      "Corporate social responsibility (Section 135)",
      "Environmental clearances and compliance",
      "Extended producer responsibility",
      "Plastic, e-waste and battery waste obligations",
      "National Green Tribunal proceedings",
      "Carbon credit trading and voluntary carbon markets",
      "Renewable purchase and energy efficiency obligations",
      "Green and sustainability-linked finance",
      "Governance and board advisory",
      "Supply chain and human rights due diligence",
      "Greenwashing and sustainability claims",
      "ESG in transactions",
    ],
  },
  {
    numeral: "XVI",
    slug: "private-clients-family-wealth",
    title: "Private Clients & Family Wealth",
    description:
      "Ordering, transmission and protection of personal and family wealth, including succession planning, testamentary documentation, trusts and family business governance. The firm advises on lifetime structuring and acts in probate, administration and family disputes.",
    serviceLines: [
      "Wills and testamentary documentation",
      "Private trusts and wealth structuring",
      "Family settlements and arrangements",
      "HUF partition and coparcenary matters",
      "Probate, letters of administration and succession certificates",
      "Contentious probate and will challenges",
      "Family business governance and succession",
      "Family constitutions and charters",
      "Cross-border and non-resident estate matters",
      "Powers of attorney and incapacity planning",
      "Senior citizen maintenance and protection",
      "Philanthropy and charitable structures",
    ],
  },
];

// Group XVII — Aerospace & Defence — Regulatory & Advisory — held back pending
// Senior Partner confirmation. Kept here (unused) so it can be appended to
// `groups` the moment the firm confirms this line of work.
export const aerospaceDefencePendingConfirmation: PracticeGroup = {
  numeral: "XVII",
  slug: "aerospace-defence-regulatory-advisory",
  title: "Aerospace & Defence — Regulatory & Advisory",
  description:
    "The regulatory framework applicable to defence procurement and production, aviation operations, and the movement of controlled goods and technology. The firm advises on acquisition and offsets, industrial licensing, export control and aviation regulation, and acts in disputes with public sector purchasers. Work in this area is regulatory, contractual and advisory in nature.",
  serviceLines: [
    "Defence procurement and acquisition",
    "Offsets and indigenisation",
    "Industrial licensing and arms rules",
    "Foreign investment in defence",
    "Export controls and SCOMET",
    "Industrial collaboration and technology transfer",
    "Civil aviation regulation",
    "Aircraft acquisition, leasing and financing",
    "Unmanned aircraft (drone) regulation",
    "Space sector regulatory advisory",
    "Disputes with public sector purchasers",
    "Blacklisting and debarment challenges",
  ],
};

export const internationalServices = [
  {
    slug: "international-services",
    title: "International Services — India Desk",
    description:
      "India entry, regulatory and counsel services for foreign businesses and investors. Advice on establishing and operating in India, on the regulatory frameworks applicable to inbound investment, and on Indian law aspects of cross-border transactions.",
    serviceLines: [
      "India entry advisory",
      "India regulatory advisory",
      "India counsel services",
      "Cross-border transactions",
      "Inbound investment structuring",
      "Coordination with foreign counsel",
    ],
  },
  {
    slug: "lpo",
    title: "Legal Process Outsourcing (LPO)",
    description:
      "Structured, volume-based legal support delivered to foreign law firms and corporations. Contract and document review, legal research, due diligence support, litigation and discovery support, and AI-assisted legal review, delivered on defined process with quality control.",
    serviceLines: [
      "Contract review",
      "Document review",
      "Legal research",
      "Due diligence support",
      "Litigation and discovery support",
      "Compliance support",
      "Legal drafting",
      "AI-assisted legal review",
      "IP search, docketing and prosecution support",
    ],
  },
];

export const sectors = {
  slug: "sectors",
  title: "Sectors We Serve",
  intro:
    "The firm's practice areas are organised by legal discipline, but the work is delivered to clients across industries. The Sectors We Serve page links each industry to the practice areas most relevant to it, without duplicating the practice content.",
  list: [
    "Banking and financial institutions",
    "NBFCs",
    "Asset reconstruction companies",
    "Insurance",
    "FinTech",
    "Private equity and venture capital",
    "Startups",
    "Technology and artificial intelligence",
    "Healthcare and life sciences",
    "Pharmaceuticals",
    "Manufacturing",
    "Automotive",
    "Defence and aerospace",
    "Government and public sector undertakings",
    "Telecom",
    "Media and entertainment",
    "Real estate and construction",
    "Infrastructure and energy",
    "Retail and consumer",
    "Hospitality",
    "Education",
    "Logistics",
    "Shipping and maritime",
    "Aviation",
    "Agriculture",
    "Family businesses",
    "High net worth individuals",
  ],
};

export const approach = [
  {
    title: "Depth in banking, recovery and insolvency.",
    body: "A substantial part of the firm's contentious work sits at the intersection of secured lending, enforcement and insolvency. Because these areas are conducted together rather than in isolation, a distressed account can be handled coherently across SARFAESI enforcement, tribunal recovery, and proceedings before the National Company Law Tribunal, with the position of the secured creditor preserved throughout.",
  },
  {
    title: "Matters conducted across parallel proceedings.",
    body: "Indian disputes frequently proceed on several tracks at once — civil, criminal, regulatory and insolvency — arising from the same facts. The firm's practice groups are built to connect, so that a position taken in one forum is consistent with the position in another rather than in conflict with it.",
  },
  {
    title: "Advisory and contentious work under one roof.",
    body: "The frameworks the firm advises on — banking, regulatory, corporate, tax — are the same frameworks it litigates. Transactional documentation is drafted with the dispute it may generate in view, and contentious work is informed by how the underlying arrangements were structured.",
  },
  {
    title: "Attention to the record.",
    body: "Across practice areas, the firm's method is to build the record at the earliest stage — in documentation, in the first response to a notice, in the pleadings — on the footing that it will be tested later on appeal, in adjudication, or in enforcement.",
  },
  {
    title: "Work grounded in verifiable frameworks.",
    body: "The firm's content and advice are framed by reference to the statutes, forums and procedures that verifiably govern each area, rather than by reference to claimed outcomes.",
  },
];

export const faqs = [
  {
    question: "What areas of law does Sagar & Sagar Law Offices practise?",
    answer:
      "The firm is a full-service Indian law firm practising across litigation and dispute resolution, banking and debt recovery, insolvency, white collar and financial crime defence, financial regulatory advisory, corporate and M&A, private equity and capital markets, competition and regulatory compliance, arbitration, real estate and energy, intellectual property, tax, technology and data, media and entertainment, employment, ESG, and private client matters, together with international and cross-border services.",
  },
  {
    question: "Does the firm act for both lenders and borrowers?",
    answer:
      "The firm's banking, recovery and insolvency practice acts for banks, non-banking financial companies and asset reconstruction companies, and separately for borrowers, guarantors and corporate debtors, subject to the conflict-of-interest requirements applicable to advocates. Whether the firm can act in a particular matter is assessed against those requirements before an engagement is accepted.",
  },
  {
    question: "Can the firm handle a matter that spans several practice areas?",
    answer:
      "Many matters engage more than one practice area at once, such as a distressed account involving banking enforcement, insolvency and financial crime, or a transaction involving company law, foreign exchange, competition and tax. The firm's practice groups are structured to work together on such matters so that the client's position remains consistent across the different frameworks and forums involved.",
  },
  {
    question: "Which courts and tribunals does the firm appear before?",
    answer:
      "The firm appears before the Supreme Court of India, the High Courts, District and Commercial Courts, and a range of tribunals and regulatory authorities including the National Company Law Tribunal and its appellate tribunal, the Debts Recovery Tribunals, consumer commissions, and appellate forums under the tax, competition and other regulatory frameworks. The forums relevant to each practice area are set out on the individual practice pages.",
  },
  {
    question: "Does the firm advise foreign clients?",
    answer:
      "The firm advises foreign businesses and investors on India entry, on the regulatory frameworks applicable to inbound investment, and on Indian law aspects of cross-border transactions, and provides legal process outsourcing and support services to foreign law firms and corporations. These services are described on the International Services and LPO pages.",
  },
  {
    question: "How do I begin an engagement?",
    answer:
      "Enquiries may be directed through the details on the Contact page. The relevant practice page for a matter sets out the scope of work in that area; the Contact page provides the means to make an enquiry. Nothing on this website constitutes legal advice or creates an advocate–client relationship, which arises only on a formal engagement.",
  },
];

export const enquiryLine =
  "For enquiries in any of the areas above, please use the details on the [Contact](/contact) page. The individual practice pages set out the scope of work in each area in detail.";
