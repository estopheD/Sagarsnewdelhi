import type { PracticeAreaContent } from "./types";

// Registry of populated practice-area pages, keyed by slug. Content is kept
// verbatim from the source content files (practice-pages-batch-1.md,
// practice-pages-batch-2.md) — do not paraphrase or add adjectives not
// present in the source. See README.md "Adding a practice-area page" for
// how to add another one; `app/practice-areas/[slug]/page.tsx` calls
// notFound() for any slug not present here, so partially-populated
// rollouts are safe.
export const practiceAreaContent: Record<string, PracticeAreaContent> = {
  "litigation-dispute-resolution": {
    slug: "litigation-dispute-resolution",
    seo: {
      title: "Litigation & Dispute Resolution | Sagar & Sagar Law Offices",
      description:
        "Civil, commercial, corporate and constitutional litigation before the Supreme Court, High Courts, Commercial Courts and tribunals across India.",
      primaryKeyword: "litigation law firm India",
      secondaryKeywords: [
        "commercial litigation India",
        "civil litigation advocates",
        "Supreme Court litigation",
        "High Court writ petition",
        "Commercial Courts Act litigation",
        "appellate litigation India",
        "tribunal litigation",
        "corporate litigation India",
      ],
    },
    serviceType: "Litigation and Dispute Resolution",
    h1: "Litigation & Dispute Resolution",
    answerFirst:
      "Litigation and dispute resolution covers the conduct of contested proceedings before Indian courts and tribunals, from institution of a suit or petition through trial, appeal and enforcement. Sagar & Sagar Law Offices advises and appears in civil, commercial, corporate, constitutional and regulatory disputes before the Supreme Court of India, the High Courts, District and Commercial Courts, and statutory tribunals. The practice covers the full lifecycle of a dispute, including pre-litigation assessment, interim relief, trial, appellate proceedings and execution.",
    overview: [
      "Litigation in India is conducted across a layered system of forums, each with distinct procedure, jurisdiction and limitation requirements. A commercial dispute may proceed before a Commercial Court under the Commercial Courts Act, 2015; a challenge to State action may lie in writ jurisdiction before a High Court; a company law dispute may fall before the National Company Law Tribunal. Identifying the correct forum at the outset materially affects how a matter proceeds.",
      "The practice at Sagar & Sagar Law Offices is structured around this reality. Work involves assessing the cause of action and limitation position, selecting the appropriate forum and remedy, securing interim protection where the circumstances require it, conducting pleadings and evidence, and carrying matters through appeal and execution where necessary. The firm acts both for parties initiating proceedings and for those defending them.",
    ],
    scopeOfWork: [
      {
        heading: "Civil and commercial litigation",
        intro:
          "Disputes arising from contracts, commercial relationships and property, conducted under the Code of Civil Procedure, 1908 and, where applicable, the Commercial Courts Act, 2015.",
        items: [
          "Contractual disputes, including breach, termination and damages claims",
          "Suits for recovery of money and enforcement of monetary claims",
          "Specific performance and injunctive relief under the Specific Relief Act, 1963",
          "Applications for interim relief, including temporary injunctions, attachment before judgment and appointment of receivers",
          "Pre-institution mediation and settlement processes applicable to commercial suits",
          "Property, title and real estate disputes",
          "Construction and infrastructure disputes",
          "Insurance disputes",
          "Consumer disputes before consumer commissions",
        ],
      },
      {
        heading: "Corporate and shareholder disputes",
        intro:
          "Contested matters arising from the internal affairs, management and ownership of companies.",
        items: [
          "Oppression and mismanagement proceedings before the National Company Law Tribunal",
          "Shareholder and joint venture disputes",
          "Disputes concerning shareholders' agreements, share transfers and exit rights",
          "Director and officer liability proceedings",
          "Disputes arising out of mergers, acquisitions and corporate restructuring",
          "Enforcement of contractual rights against corporate counterparties",
        ],
      },
      {
        heading: "Constitutional and regulatory litigation",
        intro: "Proceedings involving State action, statutory authorities and regulatory decisions.",
        items: [
          "Writ petitions before the High Courts under Article 226 and before the Supreme Court under Article 32",
          "Challenges to administrative and regulatory orders",
          "Public interest litigation",
          "Service and employment-related writ proceedings",
          "Challenges to the vires of subordinate legislation and executive action",
          "Representation in regulatory show-cause and enforcement proceedings",
        ],
      },
      {
        heading: "Appellate and Supreme Court practice",
        intro: "Carriage of matters through the appellate hierarchy.",
        items: [
          "First and second appeals before the High Courts",
          "Special leave petitions and civil appeals before the Supreme Court of India",
          "Review, revision and restoration applications",
          "Appeals from tribunal orders to the High Courts and Supreme Court",
          "Transfer petitions and applications for consolidation of proceedings",
        ],
      },
      {
        heading: "Enforcement and execution",
        intro: "Steps taken after a decree, award or order is obtained.",
        items: [
          "Execution petitions and enforcement of decrees",
          "Enforcement of arbitral awards, including foreign awards",
          "Contempt proceedings for wilful disobedience of court orders",
          "Attachment and sale in execution",
          "Cross-border and multi-jurisdictional enforcement issues",
        ],
      },
    ],
    forums: [
      "Supreme Court of India",
      "High Courts across India, in original, appellate and writ jurisdiction",
      "District and Sessions Courts and Courts of Civil Judges",
      "Commercial Courts and Commercial Divisions constituted under the Commercial Courts Act, 2015",
      "National Company Law Tribunal (NCLT) and National Company Law Appellate Tribunal (NCLAT)",
      "Debts Recovery Tribunals (DRT) and the Debts Recovery Appellate Tribunal (DRAT)",
      "National, State and District Consumer Disputes Redressal Commissions",
      "Statutory and regulatory tribunals, including tax and telecom appellate tribunals",
      "Arbitral tribunals and courts exercising supervisory jurisdiction under the Arbitration and Conciliation Act, 1996",
    ],
    whoWeActFor: [
      "Companies and limited liability partnerships",
      "Banks, non-banking financial companies and financial institutions",
      "Promoters, shareholders and directors",
      "Partnership firms and proprietorships",
      "Public sector undertakings and statutory bodies",
      "Individuals and family businesses",
      "Foreign entities requiring representation in Indian proceedings",
    ],
    approach: [
      {
        title: "Forum and remedy assessment at the outset.",
        body: "Before proceedings are initiated, the cause of action, limitation position and available forums are assessed, so that the choice of remedy is deliberate rather than default.",
      },
      {
        title: "Attention to interim protection.",
        body: "In many disputes the interim stage determines the practical position of the parties for the duration of the litigation. Applications for interim relief are treated as a substantive stage of the matter, not a formality.",
      },
      {
        title: "Documentary discipline.",
        body: "Pleadings, documents and evidence are prepared on the footing that they will be tested in cross-examination and on appeal.",
      },
      {
        title: "Continuity through appeal.",
        body: "Matters are conducted with the appellate record in view, so that the position taken at trial remains coherent if the matter travels upward.",
      },
    ],
    faqs: [
      {
        question: "What types of disputes does this practice cover?",
        answer:
          "The practice covers civil, commercial, corporate, constitutional and regulatory disputes. This includes contractual and recovery claims, property and construction disputes, shareholder and management disputes before the National Company Law Tribunal, writ proceedings challenging State or regulatory action, and appeals arising from any of these before the High Courts and the Supreme Court.",
      },
      {
        question: "Which court will hear my dispute?",
        answer:
          "Jurisdiction depends on the nature of the claim, its value, the subject matter and where the cause of action arose. Commercial disputes above the notified value are heard by Commercial Courts. Company law matters go before the National Company Law Tribunal. Challenges to State action lie in writ jurisdiction before a High Court. The correct forum is assessed matter by matter.",
      },
      {
        question: "What is a commercial dispute under the Commercial Courts Act, 2015?",
        answer:
          "The Act defines commercial disputes to include disputes arising from ordinary transactions of merchants and traders, construction and infrastructure contracts, joint venture and shareholder agreements, intellectual property, and other categories set out in the statute, where the value meets the specified threshold. Such disputes follow a distinct procedure with defined timelines.",
      },
      {
        question: "Is mediation required before filing a commercial suit?",
        answer:
          "The Commercial Courts Act, 2015 requires pre-institution mediation in commercial suits that do not contemplate urgent interim relief. Where urgent interim relief is sought, the suit may be instituted without first exhausting that process. Whether the exception applies depends on the facts of the matter.",
      },
      {
        question: "What is the difference between an appeal and a writ petition?",
        answer:
          "An appeal challenges a decision of a lower court or tribunal within a defined statutory hierarchy, generally on grounds of error in the decision. A writ petition invokes the constitutional jurisdiction of a High Court under Article 226 or the Supreme Court under Article 32, typically against State action or an authority acting without jurisdiction.",
      },
      {
        question: "How long does litigation in India take?",
        answer:
          "Timelines vary substantially with the forum, the nature of the proceedings and the conduct of the parties. Commercial Courts and several tribunals operate under statutory timelines, while ordinary civil suits do not. No reliable estimate can be given without reference to the specific matter and forum.",
      },
    ],
    relatedPracticeAreas: [
      "arbitration-mediation-adr",
      "banking-finance-debt-recovery",
      "insolvency-bankruptcy-ibc",
      "white-collar-financial-crime-defence",
    ],
    breadcrumbLabel: "Litigation & Dispute Resolution",
  },

  "white-collar-financial-crime-defence": {
    slug: "white-collar-financial-crime-defence",
    seo: {
      title: "White Collar & Financial Crime Defence | Sagar & Sagar",
      description:
        "Representation in PMLA, ED, FEMA, SFIO, CBI and economic offence proceedings, including attachment, summons, bail and appellate matters.",
      primaryKeyword: "white collar crime lawyer India",
      secondaryKeywords: [
        "PMLA lawyer India",
        "Enforcement Directorate defence",
        "money laundering advocate",
        "FEMA proceedings",
        "economic offences defence",
        "SFIO investigation lawyer",
        "ED summons representation",
        "provisional attachment PMLA",
      ],
    },
    serviceType: "White Collar Crime and Financial Crime Defence",
    h1: "White Collar Crime & Financial Crime Defence",
    answerFirst:
      "White collar and financial crime defence concerns representation in investigations and proceedings relating to economic offences, including money laundering, fraud, foreign exchange contraventions and corporate misconduct. Sagar & Sagar Law Offices advises and appears in proceedings before investigating agencies, adjudicating authorities, Special Courts and appellate forums under legislation including the Prevention of Money Laundering Act, 2002, the Foreign Exchange Management Act, 1999, the Companies Act, 2013 and the Prevention of Corruption Act, 1988. Work spans the investigative stage, attachment and adjudication proceedings, trial, and appeals.",
    overview: [
      "Economic offence proceedings in India frequently run on parallel tracks. A single set of facts can give rise to a criminal complaint, an investigation by the Enforcement Directorate, a regulatory proceeding before a sectoral regulator, and civil recovery litigation — each before a different forum, on different standards, and at different speeds. The positions taken in one proceeding can have consequences in the others.",
      "The practice at Sagar & Sagar Law Offices is oriented to that structure. Work involves advising at the stage of summons and investigation, responding to attachment and adjudication, appearing in bail and quashing proceedings, conducting trial and appellate representation, and coordinating the client's position across simultaneous criminal, regulatory and civil proceedings so that they remain consistent.",
    ],
    scopeOfWork: [
      {
        heading: "Prevention of Money Laundering Act, 2002",
        intro: "Representation across the stages of a proceeding under the PMLA.",
        items: [
          "Advice and representation in response to summons issued under Section 50 of the PMLA",
          "Representation during search, seizure and investigation by the Enforcement Directorate",
          "Response to provisional attachment of property under Section 5 and related proceedings",
          "Proceedings before the Adjudicating Authority on confirmation of attachment",
          "Bail applications, including those governed by the conditions under Section 45",
          "Appeals before the Appellate Tribunal and further appellate remedies",
          "Trial representation before Special Courts designated under the Act",
        ],
      },
      {
        heading: "Foreign exchange and cross-border financial regulation",
        intro: "Proceedings and advisory work under India's foreign exchange framework.",
        items: [
          "Representation in adjudication proceedings under the Foreign Exchange Management Act, 1999",
          "Show-cause notices and responses relating to alleged contraventions",
          "Compounding applications and related representation",
          "Appeals from adjudication orders",
          "Advisory on foreign exchange compliance in cross-border transactions",
          "Proceedings under the Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015",
          "Proceedings under the Fugitive Economic Offenders Act, 2018",
        ],
      },
      {
        heading: "Corporate fraud and statutory investigations",
        intro: "Matters arising from alleged fraud, misstatement or misconduct within companies.",
        items: [
          "Representation in investigations by the Serious Fraud Investigation Office under the Companies Act, 2013",
          "Proceedings relating to fraud as defined under the Companies Act, 2013",
          "Representation in investigations by the Central Bureau of Investigation and Economic Offences Wings",
          "Proceedings under the Prevention of Corruption Act, 1988",
          "Bank fraud, cheating and criminal breach of trust proceedings",
          "Proceedings relating to benami transactions under the Prohibition of Benami Property Transactions Act, 1988",
          "Cheque dishonour proceedings under the Negotiable Instruments Act, 1881",
        ],
      },
      {
        heading: "Internal investigations and preventive advisory",
        intro: "Work undertaken before, or independently of, agency proceedings.",
        items: [
          "Internal investigations into suspected fraud or misconduct",
          "Whistleblower complaint assessment and response",
          "Anti-money laundering and know-your-customer compliance advisory",
          "Review of compliance frameworks and reporting obligations",
          "Advisory to boards and audit committees on exposure and response",
          "Advisory on document preservation and response protocols during investigation",
        ],
      },
      {
        heading: "Criminal procedure remedies",
        intro: "Procedural remedies commonly engaged in economic offence matters.",
        items: [
          "Anticipatory bail and regular bail applications",
          "Petitions for quashing of criminal proceedings before the High Courts",
          "Applications for release or de-freezing of accounts and assets",
          "Discharge applications",
          "Appeals and revisions against orders of criminal courts",
          "Transfer petitions",
        ],
      },
    ],
    forums: [
      "Enforcement Directorate",
      "Adjudicating Authority under the Prevention of Money Laundering Act, 2002",
      "Appellate Tribunal constituted under the Smugglers and Foreign Exchange Manipulators (Forfeiture of Property) Act, 1976, exercising appellate jurisdiction under PMLA and FEMA",
      "Special Courts designated under the Prevention of Money Laundering Act, 2002",
      "Serious Fraud Investigation Office",
      "Central Bureau of Investigation and State Economic Offences Wings",
      "Sessions Courts and Courts of Magistrates",
      "High Courts, in criminal appellate, revisional and writ jurisdiction",
      "Supreme Court of India",
      "Securities and Exchange Board of India and the Securities Appellate Tribunal, in securities-related matters",
    ],
    whoWeActFor: [
      "Companies facing investigation or proceedings",
      "Directors, officers and key managerial personnel",
      "Promoters and shareholders",
      "Banks, non-banking financial companies and financial institutions",
      "Professionals named in investigations",
      "Individuals summoned or arrayed in economic offence proceedings",
      "Boards and audit committees requiring independent internal investigation",
    ],
    approach: [
      {
        title: "Early-stage advice.",
        body: "The response at the stage of summons, search or initial questioning frequently shapes the course of the entire proceeding. Advisory work at that stage is treated as substantive representation.",
      },
      {
        title: "Coordination across parallel proceedings.",
        body: "Criminal, regulatory and civil proceedings arising from the same facts are managed with reference to one another, so that a position taken in one forum does not create difficulty in another.",
      },
      {
        title: "Documentary and procedural rigour.",
        body: "Responses to notices and attachments are prepared with attention to the statutory scheme, procedural requirements and the record that will be relied upon at later stages.",
      },
      {
        title: "Confidentiality.",
        body: "Matters in this practice are handled on the footing that the fact of an investigation is itself sensitive.",
      },
    ],
    faqs: [
      {
        question: "What is a summons under Section 50 of the PMLA?",
        answer:
          "Section 50 of the Prevention of Money Laundering Act, 2002 empowers authorised officers of the Enforcement Directorate to summon a person to give evidence or produce records in the course of an investigation. A person so summoned is bound to attend and to state the truth on the subject matter of examination. Statements recorded are governed by the scheme of the Act.",
      },
      {
        question: "What is provisional attachment under the PMLA?",
        answer:
          "Section 5 of the Prevention of Money Laundering Act, 2002 permits an authorised officer to provisionally attach property believed to be involved in money laundering, subject to the conditions in that section. Such attachment is required to be placed before the Adjudicating Authority, which decides whether it is to be confirmed after hearing the affected parties.",
      },
      {
        question: "Are PMLA offences bailable?",
        answer:
          "Offences under the Prevention of Money Laundering Act, 2002 are cognizable and non-bailable, and Section 45 imposes additional conditions on the grant of bail, subject to the exceptions provided in that section for certain categories of persons. Whether bail is granted in a given case depends on the facts and the view taken by the court concerned.",
      },
      {
        question: "Can civil, criminal and regulatory proceedings arise from the same facts?",
        answer:
          "Yes. A single set of transactions may give rise to a criminal complaint, an investigation under the PMLA, adjudication under FEMA, a regulatory proceeding, and civil recovery litigation, each proceeding independently before a different forum. This is why positions taken across parallel proceedings are ordinarily coordinated.",
      },
      {
        question: "What is compounding under FEMA?",
        answer:
          "The Foreign Exchange Management Act, 1999 provides a mechanism by which certain contraventions may be compounded on an application by the person concerned, subject to the conditions and procedure prescribed. Not all contraventions are compoundable, and eligibility depends on the nature of the alleged contravention.",
      },
      {
        question: "When does the Serious Fraud Investigation Office become involved?",
        answer:
          "The Serious Fraud Investigation Office investigates the affairs of a company where an investigation is assigned to it under the Companies Act, 2013, in the circumstances specified in that Act. Its investigations concern corporate fraud and related offences and may run alongside proceedings by other agencies.",
      },
    ],
    relatedPracticeAreas: [
      "litigation-dispute-resolution",
      "banking-finance-debt-recovery",
      "regulatory-competition-compliance",
      "nbfc-fintech-financial-regulatory-advisory",
    ],
    breadcrumbLabel: "White Collar Crime & Financial Crime Defence",
  },

  "banking-finance-debt-recovery": {
    slug: "banking-finance-debt-recovery",
    seo: {
      title: "Banking, Finance & Debt Recovery | Sagar & Sagar",
      description:
        "SARFAESI enforcement, DRT and DRAT proceedings, NPA and loan recovery, security documentation and title verification for lenders and borrowers.",
      primaryKeyword: "SARFAESI lawyer India",
      secondaryKeywords: [
        "DRT advocate Delhi",
        "debt recovery tribunal lawyer",
        "NPA recovery legal services",
        "SARFAESI Section 13 notice",
        "Section 17 SARFAESI application",
        "DRAT appeal",
        "loan recovery suit India",
        "security documentation lawyer",
        "title search report bank",
        "asset reconstruction company legal",
      ],
    },
    serviceType: "Banking, Finance and Debt Recovery",
    h1: "Banking, Finance & Debt Recovery",
    answerFirst:
      "Banking and debt recovery practice concerns the enforcement of security interests and the recovery of dues by banks, non-banking financial companies and asset reconstruction companies, and the defence of borrowers and guarantors in those proceedings. Sagar & Sagar Law Offices advises and appears in matters under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI), the Recovery of Debts and Bankruptcy Act, 1993, and related civil and criminal remedies, before Debts Recovery Tribunals, the Debts Recovery Appellate Tribunal, civil courts and the High Courts. The practice also covers pre-lending work, including security documentation, title verification and legal opinions.",
    overview: [
      "Recovery of a secured debt in India is rarely confined to a single proceeding. A lender enforcing security under SARFAESI may simultaneously pursue an application before a Debts Recovery Tribunal, initiate proceedings under Section 138 of the Negotiable Instruments Act, 1881 on dishonoured instruments, and face a parallel insolvency petition affecting the same borrower. A borrower resisting enforcement may proceed under Section 17 of the SARFAESI Act, invoke the writ jurisdiction of a High Court, or raise the dispute in a civil suit. Each of these carries distinct limitation periods, forum requirements and consequences for the security itself.",
      "The practice at Sagar & Sagar Law Offices covers this field on both sides of the ledger. Work extends from the pre-lending stage, where title and security documentation determine whether an account can be enforced at all, through classification and notice, enforcement and tribunal proceedings, to appeal and execution. Where an account moves into insolvency, the practice coordinates with the firm's Insolvency & Bankruptcy work so that the lender's position as a secured creditor is preserved.",
    ],
    scopeOfWork: [
      {
        heading: "SARFAESI enforcement",
        intro:
          "Enforcement of security interests by secured creditors under the SARFAESI Act, 2002, and the defence of borrowers in those proceedings.",
        items: [
          "Advice on classification of an account and eligibility for enforcement under the Act",
          "Drafting and issue of demand notices under Section 13(2)",
          "Response to borrower representations and objections under Section 13(3A)",
          "Measures under Section 13(4), including possession and sale of secured assets",
          "Applications before the District Magistrate or Chief Metropolitan Magistrate under Section 14 for assistance in taking possession",
          "Conduct of and advice on auction, sale notices and confirmation of sale",
          "Securitisation applications by borrowers and guarantors under Section 17 before the Debts Recovery Tribunal",
          "Appeals under Section 18 before the Debts Recovery Appellate Tribunal",
          "Writ proceedings before the High Courts arising from SARFAESI action, including on maintainability where a statutory remedy exists",
          "Advice on interplay between SARFAESI enforcement and the moratorium under the Insolvency and Bankruptcy Code, 2016",
        ],
      },
      {
        heading: "Debts Recovery Tribunal proceedings",
        intro: "Recovery of debts due to banks and financial institutions under the Recovery of Debts and Bankruptcy Act, 1993.",
        items: [
          "Original applications for recovery of dues before the Debts Recovery Tribunal",
          "Defence of original applications on behalf of borrowers, guarantors and mortgagors",
          "Applications for interim relief, including attachment and injunction",
          "Counterclaims and set-off",
          "Proceedings on issue and execution of recovery certificates",
          "Appeals before the Debts Recovery Appellate Tribunal, including on pre-deposit",
          "Proceedings concerning guarantors and third-party security providers",
        ],
      },
      {
        heading: "Civil and criminal recovery remedies",
        intro: "Remedies pursued outside the tribunal framework, frequently in parallel.",
        items: [
          "Suits for recovery of money, including summary suits under Order 37 of the Code of Civil Procedure, 1908",
          "Proceedings under Section 138 of the Negotiable Instruments Act, 1881 on dishonour of cheques",
          "Applications under Section 9 of the Arbitration and Conciliation Act, 1996 for interim protection, where the facility documents contain an arbitration clause",
          "Arbitration proceedings arising from loan and facility agreements",
          "Execution proceedings and enforcement of decrees, awards and recovery certificates",
          "Criminal complaints in cases involving alleged fraud, forgery or diversion of funds",
          "Proceedings concerning wilful defaulter classification under the applicable Reserve Bank of India framework",
        ],
      },
      {
        heading: "Security documentation, title and pre-lending advisory",
        intro: "Work undertaken before disbursement, which determines enforceability later.",
        items: [
          "Title search and title verification in respect of properties offered as security",
          "Search at the office of the Sub-Registrar and examination of the chain of title",
          "Legal opinions on the marketability of title and creation of security",
          "Drafting and vetting of loan agreements, facility documents, hypothecation and mortgage deeds",
          "Advice on creation and perfection of security, including equitable and registered mortgage",
          "Advice on guarantees, indemnities and third-party security",
          "Legal due diligence in respect of borrower entities",
          "Advice on registration of charges under the Companies Act, 2013",
        ],
      },
      {
        heading: "Distressed assets and asset reconstruction",
        intro: "Work relating to non-performing accounts and their transfer.",
        items: [
          "Advice on assignment of debts to asset reconstruction companies",
          "Legal due diligence on portfolios of non-performing accounts",
          "Advice and representation for asset reconstruction companies in enforcement and recovery",
          "Restructuring and settlement documentation, including one-time settlements",
          "Advice on the position of secured creditors where a borrower enters insolvency",
          "Advisory on distressed asset acquisition",
        ],
      },
      {
        heading: "Regulatory advisory for lenders",
        intro: "Advisory work arising from the regulatory framework applicable to lending.",
        items: [
          "Advice on Reserve Bank of India directions applicable to lending and recovery",
          "Advice on income recognition, asset classification and provisioning norms as they affect enforcement",
          "Advice on fair practices and recovery conduct requirements",
          "Advice on documentation and compliance requirements for non-banking financial companies",
          "Advisory on digital lending arrangements and associated documentation",
        ],
      },
    ],
    forums: [
      "Debts Recovery Tribunals",
      "Debts Recovery Appellate Tribunal",
      "District Magistrates and Chief Metropolitan Magistrates, in proceedings under Section 14 of the SARFAESI Act, 2002",
      "Civil Courts and Commercial Courts",
      "Courts of Magistrates, in proceedings under the Negotiable Instruments Act, 1881",
      "National Company Law Tribunal and National Company Law Appellate Tribunal, where recovery intersects with insolvency",
      "High Courts, in writ and appellate jurisdiction",
      "Supreme Court of India",
      "Reserve Bank of India, in regulatory and advisory matters",
      "Arbitral tribunals constituted under facility documentation",
    ],
    whoWeActFor: [
      "Banks, including public sector and private sector banks",
      "Non-banking financial companies",
      "Housing finance companies",
      "Asset reconstruction companies",
      "Financial institutions and lenders in structured transactions",
      "Borrower companies, promoters and guarantors",
      "Purchasers of secured assets in enforcement sales",
      "Investors in distressed assets",
    ],
    approach: [
      {
        title: "Enforceability assessed from the documentation upward.",
        body: "Whether an account can be enforced is usually settled long before default, in the title and security documents. Pre-lending work is treated as part of the recovery practice, not separate from it.",
      },
      {
        title: "Parallel proceedings mapped at the outset.",
        body: "SARFAESI action, tribunal proceedings, cheque dishonour complaints and insolvency petitions frequently run together. The sequence and interaction of these are considered before the first notice issues.",
      },
      {
        title: "Attention to procedural compliance in enforcement.",
        body: "Notice, service, valuation and sale under the SARFAESI Act are the points at which enforcement is most often challenged. Each step is conducted with that challenge anticipated.",
      },
      {
        title: "Continuity into insolvency.",
        body: "Where an account moves to the National Company Law Tribunal, the secured creditor's position, security interest and claim are carried forward without a break in conduct.",
      },
    ],
    faqs: [
      {
        question: "What is the SARFAESI Act and who can use it?",
        answer:
          "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 permits secured creditors, including banks and notified non-banking financial companies, to enforce security interests without the intervention of a court or tribunal, subject to the conditions and procedure in the Act. It applies to secured debts classified as non-performing, subject to the exclusions set out in the statute.",
      },
      {
        question: "What is a notice under Section 13(2) of the SARFAESI Act?",
        answer:
          "Section 13(2) requires a secured creditor to issue a written notice to the borrower calling upon the borrower to discharge the liabilities in full within sixty days, before taking measures to enforce the security. The notice is required to specify the amount claimed and the secured assets intended to be enforced. It is the first formal step in the enforcement process.",
      },
      {
        question: "How can a borrower challenge SARFAESI enforcement?",
        answer:
          "Section 17 of the SARFAESI Act provides for an application to the Debts Recovery Tribunal by any person aggrieved by measures taken under Section 13(4), within the period prescribed. An appeal from the Tribunal lies to the Debts Recovery Appellate Tribunal under Section 18, subject to the pre-deposit condition in that section. Writ jurisdiction is ordinarily invoked only in limited circumstances given the availability of the statutory remedy.",
      },
      {
        question: "What is the difference between DRT proceedings and SARFAESI enforcement?",
        answer:
          "Proceedings before a Debts Recovery Tribunal under the Recovery of Debts and Bankruptcy Act, 1993 are adjudicatory: the lender applies to the Tribunal, which determines the debt and issues a recovery certificate. SARFAESI enforcement is a self-help remedy in which the secured creditor acts first and the borrower approaches the Tribunal to challenge that action. The two may proceed in relation to the same account.",
      },
      {
        question: "What happens to a secured creditor's rights when a borrower enters insolvency?",
        answer:
          "On admission of an application under the Insolvency and Bankruptcy Code, 2016, a moratorium takes effect which restricts the enforcement of security interests against the corporate debtor, including action under the SARFAESI Act. The secured creditor's remedy is then to submit a claim in the resolution process and participate in accordance with the Code. The position of a secured creditor in liquidation is governed by the distribution provisions of the Code.",
      },
      {
        question: "Why is title verification carried out before a loan is sanctioned?",
        answer:
          "A title search establishes the chain of ownership of the property offered as security and identifies encumbrances, prior charges or defects that would affect the lender's ability to realise the security. Where title is defective or the security is imperfectly created, enforcement at a later stage may be resisted successfully. Verification is therefore preventive rather than procedural.",
      },
      {
        question: "Can a guarantor be proceeded against separately from the borrower?",
        answer:
          "The liability of a guarantor under a contract of guarantee is generally co-extensive with that of the principal debtor unless the contract provides otherwise, and proceedings may be maintained against a guarantor. The position where the principal debtor is undergoing insolvency proceedings is governed by the relevant provisions of the Insolvency and Bankruptcy Code, 2016 and depends on the terms of the guarantee.",
      },
    ],
    relatedPracticeAreas: [
      "insolvency-bankruptcy-ibc",
      "litigation-dispute-resolution",
      "white-collar-financial-crime-defence",
      "nbfc-fintech-financial-regulatory-advisory",
    ],
    breadcrumbLabel: "Banking, Finance & Debt Recovery",
  },

  "insolvency-bankruptcy-ibc": {
    slug: "insolvency-bankruptcy-ibc",
    seo: {
      title: "Insolvency & Bankruptcy (IBC) | Sagar & Sagar Law Offices",
      description:
        "CIRP, liquidation, resolution plans and creditor representation under the Insolvency and Bankruptcy Code, 2016 before the NCLT and NCLAT.",
      primaryKeyword: "IBC lawyer India",
      secondaryKeywords: [
        "NCLT advocate Delhi",
        "NCLAT appeal lawyer",
        "Section 7 IBC application",
        "Section 9 operational creditor petition",
        "CIRP legal representation",
        "committee of creditors advisory",
        "corporate insolvency resolution process",
        "liquidation proceedings India",
        "personal guarantor insolvency",
        "avoidance transactions IBC",
      ],
    },
    serviceType: "Insolvency and Bankruptcy",
    h1: "Insolvency & Bankruptcy (IBC)",
    answerFirst:
      "Insolvency and bankruptcy practice under the Insolvency and Bankruptcy Code, 2016 concerns the resolution or liquidation of companies unable to pay their debts, and the corresponding rights of financial creditors, operational creditors and corporate debtors. Sagar & Sagar Law Offices advises and appears in corporate insolvency resolution proceedings, liquidation, avoidance applications and insolvency of personal guarantors, before the National Company Law Tribunal and the National Company Law Appellate Tribunal. Work covers admission, the conduct of the resolution process, approval or rejection of resolution plans, and appeals.",
    overview: [
      "The Insolvency and Bankruptcy Code, 2016 replaced a fragmented framework with a single time-bound process. It also changed the position of the parties. Control of a corporate debtor shifts to an insolvency professional on admission; decision-making moves to a committee of financial creditors; and enforcement by individual creditors is suspended by a statutory moratorium. Rights that existed before admission — security interests, guarantees, contractual claims — do not disappear, but they are exercised through the process rather than outside it.",
      "The practice at Sagar & Sagar Law Offices covers the process end to end and from each side of it. Work includes applications to initiate insolvency and opposition to such applications, representation of creditors in the committee, claim submission and verification disputes, applications concerning avoidance of prior transactions, resolution plan and liquidation issues, and appeals to the National Company Law Appellate Tribunal. Where the same debtor is the subject of recovery proceedings, the position is coordinated with the firm's Banking, Finance & Debt Recovery practice.",
    ],
    scopeOfWork: [
      {
        heading: "Initiation of insolvency proceedings",
        intro: "Applications to commence the corporate insolvency resolution process, and the defence of such applications.",
        items: [
          "Applications by financial creditors under Section 7 of the Code",
          "Demand notices and applications by operational creditors under Sections 8 and 9",
          "Applications by corporate applicants under Section 10",
          "Advice on the threshold for default and on limitation",
          "Defence of applications, including on grounds of pre-existing dispute in operational creditor matters",
          "Advice on eligibility, documentation and evidence of default required at admission",
          "Applications concerning interim moratorium and the effect of admission",
        ],
      },
      {
        heading: "Representation of creditors",
        intro: "Work on behalf of financial and operational creditors through the resolution process.",
        items: [
          "Submission, substantiation and revision of claims before the resolution professional",
          "Applications arising from rejection or reduction of claims",
          "Representation of financial creditors before the committee of creditors",
          "Advice to committee members on voting, commercial decisions and record-keeping",
          "Representation of operational creditors, including on the treatment of their dues",
          "Representation of homebuyers and other classes of creditors through authorised representatives",
          "Advice on the position of secured creditors, security interests and relinquishment",
        ],
      },
      {
        heading: "Conduct of the resolution process",
        intro: "Matters arising during the corporate insolvency resolution process itself.",
        items: [
          "Applications concerning the appointment, replacement or conduct of the interim resolution professional or resolution professional",
          "Disputes concerning the constitution of the committee of creditors",
          "Applications concerning the information memorandum and access to records",
          "Advice on eligibility of resolution applicants under Section 29A",
          "Advice on and objections to resolution plans",
          "Applications for approval of resolution plans under Section 31, and objections to approval",
          "Applications for extension of the resolution period and issues arising from statutory timelines",
          "Applications for withdrawal of proceedings under Section 12A",
        ],
      },
      {
        heading: "Liquidation",
        intro: "Proceedings following a failure to resolve, or on a decision to liquidate.",
        items: [
          "Applications for liquidation under Section 33",
          "Representation of stakeholders in the liquidation process",
          "Claim submission and disputes before the liquidator",
          "Advice on the order of priority of distribution under Section 53",
          "Applications concerning sale of assets and sale as a going concern",
          "Representation in dissolution proceedings",
          "Advice to secured creditors on relinquishing or realising security in liquidation",
        ],
      },
      {
        heading: "Avoidance and improper transactions",
        intro: "Applications concerning transactions entered into before commencement of insolvency.",
        items: [
          "Applications relating to preferential transactions under Section 43",
          "Applications relating to undervalued transactions under Section 45",
          "Applications relating to extortionate credit transactions",
          "Applications concerning fraudulent or wrongful trading under Section 66",
          "Defence of directors, promoters and counterparties in avoidance proceedings",
          "Advice on the look-back periods and the position of related parties",
        ],
      },
      {
        heading: "Personal guarantors and individual insolvency",
        intro: "Proceedings under Part III of the Code as applicable to personal guarantors to corporate debtors.",
        items: [
          "Applications for insolvency resolution against personal guarantors",
          "Defence of personal guarantors in such proceedings",
          "Advice on the interim moratorium and its scope",
          "Representation in repayment plan proceedings",
          "Advice on the interaction between guarantee enforcement and corporate insolvency of the principal debtor",
        ],
      },
      {
        heading: "Appeals and related proceedings",
        intro: "Challenges to orders passed in insolvency proceedings.",
        items: [
          "Appeals to the National Company Law Appellate Tribunal under Section 61",
          "Appeals to the Supreme Court of India under Section 62",
          "Applications for condonation of delay and interim relief in appeals",
          "Writ proceedings before the High Courts in appropriate cases",
          "Advice on the limited grounds available for challenge to a resolution plan approved by the Adjudicating Authority",
        ],
      },
      {
        heading: "Related advisory",
        intro: "",
        items: [
          "Advice on pre-packaged insolvency resolution for eligible micro, small and medium enterprises",
          "Advice on distressed acquisitions through the resolution process",
          "Advice on debt restructuring outside the Code",
          "Advice on the treatment of cross-border elements in insolvency",
        ],
      },
    ],
    forums: [
      "National Company Law Tribunal, as the Adjudicating Authority for corporate persons",
      "National Company Law Appellate Tribunal",
      "Supreme Court of India",
      "High Courts, in writ jurisdiction where applicable",
      "Insolvency and Bankruptcy Board of India, in regulatory and advisory matters",
      "Debts Recovery Tribunals, as the Adjudicating Authority in respect of individuals and partnership firms under the relevant provisions",
    ],
    whoWeActFor: [
      "Banks and financial institutions as financial creditors",
      "Non-banking financial companies",
      "Asset reconstruction companies",
      "Operational creditors, including suppliers and service providers",
      "Corporate debtors and their boards",
      "Promoters, directors and personal guarantors",
      "Resolution applicants and prospective acquirers of distressed businesses",
      "Committees of creditors and their members",
      "Homebuyers and other creditor classes represented collectively",
    ],
    approach: [
      {
        title: "Admission stage treated as decisive.",
        body: "Whether an application is admitted determines control of the debtor, the operation of the moratorium and the position of every creditor. Work at the Section 7, 9 or 10 stage is conducted accordingly.",
      },
      {
        title: "Claims documented for challenge.",
        body: "Claims are prepared on the basis that quantum, classification and security interest may each be contested before the resolution professional and, subsequently, before the Adjudicating Authority.",
      },
      {
        title: "Timelines treated as substantive.",
        body: "The Code operates on statutory periods. Positions are prepared and filed with those periods in view rather than in response to them.",
      },
      {
        title: "Coordination with recovery proceedings.",
        body: "Where a lender has parallel SARFAESI or tribunal proceedings against the same debtor, the insolvency position is taken consistently with those proceedings.",
      },
    ],
    faqs: [
      {
        question: "Who can initiate insolvency proceedings against a company?",
        answer:
          "The Insolvency and Bankruptcy Code, 2016 permits a financial creditor to apply under Section 7, an operational creditor to apply under Section 9 following a demand notice under Section 8, and the corporate debtor itself to apply under Section 10. Each route has distinct requirements as to proof of default and documentation, and the application is made to the National Company Law Tribunal.",
      },
      {
        question: "What is the minimum default required to initiate corporate insolvency?",
        answer:
          "The Code prescribes a minimum amount of default for an application to be maintainable, which the Central Government is empowered to notify. The threshold applicable at any given time should be verified against the notification in force, as it has been revised. Whether a default of the requisite amount exists is a matter of evidence before the Adjudicating Authority.",
      },
      {
        question: "What is a moratorium under Section 14?",
        answer:
          "On admission of an application, the Adjudicating Authority declares a moratorium prohibiting, among other things, the institution or continuation of suits and proceedings against the corporate debtor, transfer of its assets, and enforcement of security interests including action under the SARFAESI Act. The moratorium continues until the resolution process concludes, subject to the exclusions provided in the Code.",
      },
      {
        question: "What is the committee of creditors and what does it decide?",
        answer:
          "The committee of creditors is constituted from the financial creditors of the corporate debtor and takes the principal decisions in the resolution process, including on the appointment of the resolution professional and on approval of a resolution plan. Its decisions are taken by the voting thresholds specified in the Code. Commercial decisions of the committee have been treated as falling within its own domain, subject to the limited grounds of challenge in the Code.",
      },
      {
        question: "What does Section 29A do?",
        answer:
          "Section 29A sets out the categories of persons who are ineligible to submit a resolution plan, including certain persons connected with the corporate debtor and certain persons with accounts classified as non-performing, subject to the conditions and exceptions in that section. Its purpose is to restrict participation by persons whose conduct contributed to the debtor's position.",
      },
      {
        question: "What is the difference between resolution and liquidation?",
        answer:
          "Resolution seeks to keep the corporate debtor operating as a going concern under a plan approved by the committee of creditors and the Adjudicating Authority. Liquidation applies where no plan is approved within the statutory period, where the committee resolves to liquidate, or in the other circumstances set out in Section 33, and involves realisation of assets and distribution in the order of priority under Section 53.",
      },
      {
        question: "Can a personal guarantor be proceeded against under the Code?",
        answer:
          "Part III of the Code, as brought into force in respect of personal guarantors to corporate debtors, provides for insolvency resolution and bankruptcy proceedings against such guarantors. Proceedings against a personal guarantor may be maintainable notwithstanding proceedings against the corporate debtor, subject to the provisions of the Code and the terms of the guarantee.",
      },
      {
        question: "What can be challenged after a resolution plan is approved?",
        answer:
          "Section 61 provides for appeal to the National Company Law Appellate Tribunal against an order approving a resolution plan, on the grounds specified in that section, which are limited. A further appeal lies to the Supreme Court under Section 62 on a question of law. The commercial wisdom of the committee of creditors is not ordinarily a ground of challenge.",
      },
    ],
    relatedPracticeAreas: [
      "banking-finance-debt-recovery",
      "corporate-ma-private-equity-capital-markets",
      "litigation-dispute-resolution",
      "white-collar-financial-crime-defence",
    ],
    breadcrumbLabel: "Insolvency & Bankruptcy (IBC)",
  },

  "nbfc-fintech-financial-regulatory-advisory": {
    slug: "nbfc-fintech-financial-regulatory-advisory",
    seo: {
      title: "NBFC, FinTech & Financial Regulatory Advisory | Sagar & Sagar",
      description:
        "RBI registration and compliance for NBFCs, digital lending, payment systems, co-lending and fintech regulatory advisory, and enforcement representation.",
      primaryKeyword: "NBFC compliance lawyer India",
      secondaryKeywords: [
        "RBI regulatory advisory",
        "NBFC registration Section 45-IA",
        "digital lending guidelines compliance",
        "scale based regulation NBFC",
        "payment aggregator licence India",
        "prepaid payment instruments advisory",
        "co-lending arrangement legal",
        "NBFC change in control RBI approval",
        "fintech regulatory counsel India",
        "account aggregator regulation",
      ],
    },
    serviceType: "NBFC, FinTech and Financial Regulatory Advisory",
    h1: "NBFC, FinTech & Financial Regulatory Advisory",
    answerFirst:
      "NBFC and fintech regulatory advisory concerns the licensing, structuring and ongoing compliance of entities carrying on financial activity under the supervision of the Reserve Bank of India, and the regulatory treatment of technology-enabled financial products. Sagar & Sagar Law Offices advises on registration of non-banking financial companies under the Reserve Bank of India Act, 1934, compliance under the applicable Master Directions, digital lending and payment system arrangements, and represents entities in regulatory correspondence, inspection follow-up and enforcement proceedings. The practice covers both the entity's regulatory perimeter and the documentation through which its products are delivered.",
    overview: [
      "Financial activity in India is regulated by activity as much as by entity. Whether a business requires registration, which framework applies to it, and what obligations follow depend on what it actually does rather than what it calls itself. A lending platform may be regulated as a non-banking financial company, or may fall outside registration but be treated as a lending service provider subject to the digital lending framework; a payments product may require authorisation under the Payment and Settlement Systems Act, 2007, or may sit within an existing licensee's arrangement. Characterisation at the outset determines the entire compliance position.",
      "The practice at Sagar & Sagar Law Offices addresses that question first and then works outward from it. Work covers registration and change-in-control approvals, the structuring of lending and payments arrangements between regulated and unregulated participants, product and customer documentation, ongoing compliance under the applicable Master Directions, and representation where a regulator raises questions. Where regulatory issues develop into enforcement, the position is coordinated with the firm's white collar and litigation practices.",
    ],
    scopeOfWork: [
      {
        heading: "NBFC registration, licensing and structural approvals",
        intro: "Approvals required to commence and to continue regulated financial activity.",
        items: [
          "Advice on whether a proposed business requires registration as a non-banking financial company",
          "Applications for a certificate of registration under Section 45-IA of the Reserve Bank of India Act, 1934",
          "Advice on categorisation of the entity and the layer applicable under the scale based regulation framework",
          "Advice on net owned fund and other eligibility requirements",
          "Applications for prior approval in respect of change in control, change in shareholding and change in management",
          "Advice on amalgamation, transfer of business and restructuring involving regulated entities",
          "Advice on principal business criteria and the consequences of falling outside them",
          "Advice on registration requirements for specialised categories, including account aggregators, peer-to-peer lending platforms and factoring entities",
        ],
      },
      {
        heading: "Digital lending and technology-enabled credit",
        intro: "Regulatory treatment of lending conducted through digital channels and third-party platforms.",
        items: [
          "Advice on the application of the Reserve Bank of India's digital lending framework to a proposed business model",
          "Structuring of arrangements between regulated entities and lending service providers",
          "Advice on flow of funds requirements, including disbursal and repayment between the borrower and the regulated entity",
          "Drafting and review of key fact statements and borrower-facing disclosures",
          "Advice on default loss guarantee arrangements and the applicable limits",
          "Advice on co-lending arrangements between banks and non-banking financial companies",
          "Drafting and review of platform, sourcing, servicing and collection agreements",
          "Advice on recovery conduct requirements and fair practices obligations in digital collections",
          "Advice on data collection, storage and consent requirements in lending applications",
        ],
      },
      {
        heading: "Payments, prepaid instruments and payment intermediaries",
        intro: "Regulatory work in respect of payment products and their operators.",
        items: [
          "Advice on authorisation requirements under the Payment and Settlement Systems Act, 2007",
          "Advice and applications in respect of payment aggregator and payment gateway activity",
          "Advice on prepaid payment instruments and the applicable Master Directions",
          "Advice on escrow and nodal account arrangements",
          "Structuring and documentation of merchant onboarding and settlement arrangements",
          "Advice on cross-border payment arrangements and their interaction with foreign exchange requirements",
          "Advice on outsourcing arrangements involving payment and technology service providers",
        ],
      },
      {
        heading: "Ongoing compliance for regulated entities",
        intro: "Recurring obligations applicable once an entity is registered or authorised.",
        items: [
          "Advice on obligations under the applicable Reserve Bank of India Master Directions",
          "Advice on income recognition, asset classification and provisioning requirements",
          "Advice on know your customer and anti-money laundering obligations, including under the Prevention of Money Laundering Act, 2002 and the applicable Master Direction",
          "Advice on fair practices code requirements and customer grievance mechanisms",
          "Advice on credit information reporting obligations under the Credit Information Companies (Regulation) Act, 2005",
          "Advice on corporate governance, board composition and internal policy requirements",
          "Advice on outsourcing, information technology and cyber security requirements applicable to regulated entities",
          "Preparation and review of internal policies, codes and compliance manuals",
          "Advice on regulatory reporting and returns",
        ],
      },
      {
        heading: "Product, transaction and customer documentation",
        intro: "The documents through which regulated products are actually delivered.",
        items: [
          "Drafting and vetting of loan agreements, sanction letters and facility documentation",
          "Drafting and vetting of guarantees, hypothecation deeds and security documents",
          "Drafting and review of terms of use, privacy notices and consent architecture for digital products",
          "Drafting of co-lending, business correspondent and direct selling agent agreements",
          "Drafting of assignment and securitisation documentation for transfer of loan exposures",
          "Review of marketing and customer communication material for regulatory consistency",
          "Advice on documentation for insurance and investment product distribution by regulated entities",
        ],
      },
      {
        heading: "Regulatory engagement, inspection and enforcement",
        intro: "Representation where the regulator makes contact.",
        items: [
          "Advice on and drafting of responses to regulatory queries and correspondence",
          "Assistance with inspection preparedness and response to inspection findings",
          "Advice on and drafting of responses to show-cause notices",
          "Representation in penalty and adjudication proceedings before regulatory authorities",
          "Advice on supervisory action, including restrictions on business and directions to cease activity",
          "Appeals and writ proceedings arising from regulatory action",
          "Advice on voluntary disclosure and remediation",
          "Coordination where a regulatory matter gives rise to parallel enforcement under the Prevention of Money Laundering Act, 2002 or the Foreign Exchange Management Act, 1999",
        ],
      },
      {
        heading: "Foreign investment and cross-border structuring",
        intro: "Regulatory work where the capital or the counterparty is foreign.",
        items: [
          "Advice on foreign direct investment in financial services entities under the Foreign Exchange Management Act, 1999 and the rules made under it",
          "Advice on sectoral conditions applicable to investment in regulated financial entities",
          "Advice on reporting requirements in respect of foreign investment",
          "Advice on external commercial borrowing and its application to non-banking financial companies",
          "Advice on cross-border arrangements involving offshore technology and service providers",
        ],
      },
    ],
    forums: [
      "Reserve Bank of India",
      "Ministry of Finance and Department of Financial Services, in policy and approval matters",
      "Ministry of Corporate Affairs and the Registrar of Companies",
      "Financial Intelligence Unit — India, in respect of reporting obligations",
      "Enforcement Directorate, in matters under the Prevention of Money Laundering Act, 2002 and the Foreign Exchange Management Act, 1999",
      "National Company Law Tribunal and National Company Law Appellate Tribunal",
      "Debts Recovery Tribunals and the Debts Recovery Appellate Tribunal",
      "Consumer Disputes Redressal Commissions, in customer disputes",
      "High Courts, in writ jurisdiction against regulatory action",
      "Supreme Court of India",
    ],
    whoWeActFor: [
      "Non-banking financial companies across categories",
      "Housing finance companies",
      "Banks, in respect of partnership and co-lending arrangements",
      "Financial technology companies and lending platforms",
      "Payment aggregators, payment gateways and prepaid instrument issuers",
      "Account aggregators and technology service providers to regulated entities",
      "Asset reconstruction companies",
      "Investors in regulated financial entities",
      "Promoters and boards of regulated entities",
    ],
    approach: [
      {
        title: "Characterisation before compliance.",
        body: "The first question in this practice is what framework applies. Advice proceeds from the activity actually carried on, not from the label attached to it.",
      },
      {
        title: "Structure and documentation treated together.",
        body: "A permissible structure delivered through non-compliant documentation is not a compliant business. Arrangement, flow of funds and customer documents are reviewed as one.",
      },
      {
        title: "Regulatory correspondence prepared with the record in view.",
        body: "Responses to queries, inspections and notices are drafted on the footing that they will form part of the record in any subsequent supervisory or enforcement proceeding.",
      },
      {
        title: "Awareness of parallel exposure.",
        body: "Regulatory shortfalls in financial services frequently attract attention under other statutes. The wider exposure is considered when advising on any single regulatory issue.",
      },
    ],
    faqs: [
      {
        question: "When does a business need to register as an NBFC?",
        answer:
          "Registration under Section 45-IA of the Reserve Bank of India Act, 1934 is required where a company carries on the business of a non-banking financial institution, subject to the exemptions provided. Whether an entity falls within that description depends on the nature of its activity and on the principal business criteria applied by the Reserve Bank of India. Certain categories of financial activity regulated by other regulators are treated separately.",
      },
      {
        question: "What is the scale based regulation framework?",
        answer:
          "The Reserve Bank of India applies a layered regulatory framework to non-banking financial companies, under which entities are placed in different layers according to size, activity and perceived risk, with regulatory requirements calibrated accordingly. The layer applicable to an entity determines aspects of its governance, capital and compliance obligations. Categorisation is reviewed periodically by the regulator.",
      },
      {
        question: "Does a lending app need its own RBI licence?",
        answer:
          "Not necessarily. Lending must be carried on by a regulated entity, but a digital platform may operate as a lending service provider to a regulated entity rather than lending on its own account. The digital lending framework governs how such arrangements must be structured, including in relation to flow of funds, disclosure and customer protection. Whether a licence is required depends on who is lending and on whose balance sheet.",
      },
      {
        question: "Is prior RBI approval needed to change control of an NBFC?",
        answer:
          "The applicable Reserve Bank of India directions require prior written approval for change in control or management of a non-banking financial company, and for changes in shareholding beyond specified thresholds, subject to the conditions in those directions. Public notice requirements may also apply. The requirement should be assessed before a transaction is signed, not after.",
      },
      {
        question: "What is a default loss guarantee arrangement?",
        answer:
          "A default loss guarantee is an arrangement under which a third party, typically a lending service provider, guarantees to compensate a regulated lender for losses on a defined loan portfolio up to a specified extent. The Reserve Bank of India has prescribed conditions and a cap on such arrangements. Structures that transfer credit risk beyond what is permitted are treated as outside the framework.",
      },
      {
        question: "What is a payment aggregator and does it require authorisation?",
        answer:
          "A payment aggregator facilitates the collection of payments from customers on behalf of merchants and settles funds to those merchants. Such activity is regulated under the Payment and Settlement Systems Act, 2007 and the directions issued under it, and requires authorisation from the Reserve Bank of India subject to the eligibility conditions prescribed. Related activity may be permitted within an authorised entity's arrangement.",
      },
      {
        question: "Can foreign investment be made in an NBFC?",
        answer:
          "Foreign investment in financial services entities is permitted subject to the Foreign Exchange Management Act, 1999 and the rules made under it, including the sectoral conditions applicable to activities regulated by a financial sector regulator. Approval requirements, entry routes and reporting obligations vary with the activity and with the source of the investment. Position should be verified against the framework in force at the time of the investment.",
      },
      {
        question: "What happens if the Reserve Bank of India issues a show-cause notice?",
        answer:
          "A show-cause notice requires the entity to explain why action should not be taken in respect of the matters set out in it. The response forms part of the record and may be relied upon in subsequent proceedings, including in any appeal or writ petition. Penalty and supervisory action may follow, and the notice may also have consequences under other statutes depending on the subject matter.",
      },
    ],
    relatedPracticeAreas: [
      "banking-finance-debt-recovery",
      "white-collar-financial-crime-defence",
      "technology-ai-data-privacy-cybersecurity",
      "regulatory-competition-compliance",
    ],
    breadcrumbLabel: "NBFC, FinTech & Financial Regulatory Advisory",
  },

  "corporate-ma-private-equity-capital-markets": {
    slug: "corporate-ma-private-equity-capital-markets",
    seo: {
      title: "Corporate, M&A, Private Equity & Capital Markets | Sagar & Sagar",
      description:
        "Corporate advisory, mergers and acquisitions, joint ventures, private equity investment, fund formation and SEBI-regulated capital markets transactions.",
      primaryKeyword: "corporate law firm India M&A",
      secondaryKeywords: [
        "merger acquisition lawyer India",
        "share purchase agreement drafting",
        "shareholders agreement India",
        "scheme of arrangement NCLT",
        "private equity investment counsel",
        "SEBI ICDR compliance",
        "takeover code open offer",
        "due diligence legal India",
        "joint venture agreement lawyer",
        "AIF fund formation India",
      ],
    },
    serviceType: "Corporate, M&A, Private Equity and Capital Markets",
    h1: "Corporate, M&A, Private Equity & Capital Markets",
    answerFirst:
      "Corporate and transactional practice concerns the formation, governance, financing, acquisition and restructuring of companies, and the regulatory framework applicable to each. Sagar & Sagar Law Offices advises on mergers and acquisitions, joint ventures, private equity and venture capital investment, schemes of arrangement, and capital markets transactions governed by the Companies Act, 2013, the Foreign Exchange Management Act, 1999 and the regulations of the Securities and Exchange Board of India. Work covers structuring, due diligence, transaction documentation, regulatory approvals and completion, as well as ongoing corporate governance and compliance.",
    overview: [
      "An Indian corporate transaction is generally governed by several frameworks at once. A share acquisition may engage the Companies Act, 2013 on issue and transfer, the Foreign Exchange Management Act, 1999 where an investor is non-resident, the Competition Act, 2002 where thresholds are met, and the regulations of the Securities and Exchange Board of India where a listed company is involved. Sequencing matters: an approval sought late, or a condition identified after signing, can change the economics of a deal or prevent completion.",
      "The practice at Sagar & Sagar Law Offices covers transactions from structuring through to completion and beyond. Work includes legal due diligence, negotiation and drafting of transaction and shareholder documentation, obtaining regulatory approvals, and advising on post-completion governance and integration. The practice also covers standing corporate advisory work — board and governance matters, corporate compliance, and secretarial and structural changes — for companies that do not have a transaction in progress.",
    ],
    scopeOfWork: [
      {
        heading: "Corporate advisory and governance",
        intro: "Standing advisory work on the constitution, management and compliance of companies.",
        items: [
          "Advice on entity structuring and choice of vehicle, including companies and limited liability partnerships",
          "Incorporation, conversion and changes to corporate structure",
          "Drafting and amendment of memorandum and articles of association",
          "Advice on board and shareholder meetings, resolutions and procedure",
          "Advice on directors' duties, liabilities and related party transactions",
          "Advice on corporate governance requirements under the Companies Act, 2013",
          "Advice on corporate social responsibility obligations",
          "Advice on registration and satisfaction of charges",
          "Compliance reviews and remediation of past non-compliance",
          "Advice on winding up and strike-off",
        ],
      },
      {
        heading: "Mergers, acquisitions and business transfers",
        intro: "Acquisition and disposal of companies, businesses and undertakings.",
        items: [
          "Structuring of acquisitions, including share purchase, asset purchase and slump sale",
          "Legal due diligence on target entities and businesses",
          "Drafting and negotiation of term sheets, memoranda of understanding and exclusivity arrangements",
          "Drafting and negotiation of share purchase agreements and business transfer agreements",
          "Advice on representations, warranties, indemnities and limitations of liability",
          "Advice on conditions precedent, completion mechanics and post-completion adjustments",
          "Advice on escrow, deferred consideration and earn-out arrangements",
          "Advice on employee, contract and property transfer issues arising on transfer of a business",
          "Advice on acquisition of distressed businesses, including through the resolution process under the Insolvency and Bankruptcy Code, 2016",
        ],
      },
      {
        heading: "Schemes of arrangement and corporate restructuring",
        intro: "Court and tribunal-supervised restructuring under the Companies Act, 2013.",
        items: [
          "Schemes of merger and amalgamation under Sections 230 to 232 of the Companies Act, 2013",
          "Fast track mergers under Section 233 for eligible companies",
          "Demergers, spin-offs and hive-offs",
          "Reduction of share capital",
          "Advice on cross-border merger arrangements",
          "Representation before the National Company Law Tribunal in scheme proceedings",
          "Advice on objections and representations from regulators and creditors in scheme proceedings",
          "Internal group reorganisations and holding structure rationalisation",
        ],
      },
      {
        heading: "Joint ventures and shareholder arrangements",
        intro: "Arrangements governing the relationship between shareholders.",
        items: [
          "Structuring of joint ventures, including incorporated and contractual arrangements",
          "Drafting and negotiation of joint venture agreements and shareholders' agreements",
          "Advice on board composition, reserved matters and deadlock resolution",
          "Advice on transfer restrictions, including rights of first refusal and first offer, tag along and drag along rights",
          "Advice on non-compete and exclusivity provisions and their enforceability",
          "Advice on funding obligations and consequences of failure to fund",
          "Advice on exit mechanisms and termination of joint ventures",
          "Advice on alignment of shareholders' agreements with the articles of association",
        ],
      },
      {
        heading: "Private equity, venture capital and fund work",
        intro: "Investment into companies and the vehicles through which investment is made.",
        items: [
          "Advice to investors and to investee companies on equity and structured investments",
          "Drafting and negotiation of share subscription agreements and shareholders' agreements",
          "Advice on instruments including compulsorily convertible preference shares and debentures",
          "Advice on valuation, pricing and pricing guideline requirements for non-resident investment",
          "Advice on liquidation preference, anti-dilution and preferential rights",
          "Advice on exit rights and on the enforceability of optionality and exit arrangements",
          "Advice on formation and structuring of alternative investment funds",
          "Advice on fund documentation and on registration requirements with the Securities and Exchange Board of India",
          "Legal due diligence for investors, including on regulatory and litigation exposure",
        ],
      },
      {
        heading: "Capital markets and securities regulation",
        intro: "Transactions and compliance involving listed companies and public issues.",
        items: [
          "Advice on public issues, rights issues, qualified institutions placements and offers for sale",
          "Advice on preferential allotments and private placements",
          "Advice on compliance under the Securities and Exchange Board of India (Issue of Capital and Disclosure Requirements) Regulations, 2018",
          "Advice on continuous disclosure and governance obligations under the listing regulations",
          "Advice on the Securities and Exchange Board of India (Substantial Acquisition of Shares and Takeovers) Regulations, 2011, including open offer triggers and exemptions",
          "Advice on insider trading regulations, unpublished price sensitive information and structured digital databases",
          "Advice on buy-back and delisting of securities",
          "Representation in proceedings before the Securities and Exchange Board of India and the Securities Appellate Tribunal",
          "Advice on debt securities and listed debt compliance",
        ],
      },
      {
        heading: "Foreign investment and cross-border transactions",
        intro: "Regulatory work where a party or the capital is non-resident.",
        items: [
          "Advice on entry routes, sectoral caps and conditions applicable to foreign direct investment",
          "Advice on approval requirements applicable to investment from specified jurisdictions",
          "Advice on pricing guidelines and permissible instruments for non-resident investment",
          "Advice on reporting and filing obligations under the Foreign Exchange Management Act, 1999",
          "Advice on overseas investment by Indian entities",
          "Advice on India entry structures for foreign investors",
          "Advice on external commercial borrowing and permissible debt funding",
        ],
      },
      {
        heading: "Competition and merger control",
        intro: "Assessment and clearance of transactions under competition law.",
        items: [
          "Assessment of notification requirements under the Competition Act, 2002",
          "Advice on applicable thresholds and available exemptions",
          "Preparation and filing of notifications with the Competition Commission of India",
          "Advice on gun jumping risk and on permissible pre-completion conduct",
          "Advice on remedies and modifications where required",
        ],
      },
    ],
    forums: [
      "Ministry of Corporate Affairs and the Registrar of Companies",
      "National Company Law Tribunal and National Company Law Appellate Tribunal",
      "Securities and Exchange Board of India",
      "Securities Appellate Tribunal",
      "Reserve Bank of India, in respect of foreign exchange and investment matters",
      "Competition Commission of India",
      "Regional Director and Official Liquidator, in scheme proceedings",
      "Stock exchanges, in respect of listed company compliance",
      "High Courts and the Supreme Court of India",
    ],
    whoWeActFor: [
      "Indian and foreign companies undertaking acquisitions and disposals",
      "Private equity and venture capital investors",
      "Founders, promoters and management teams",
      "Family businesses and closely held companies",
      "Listed companies and their boards",
      "Investment funds and fund managers",
      "Financial institutions participating in transactions",
      "Joint venture partners",
      "Acquirers of distressed businesses",
    ],
    approach: [
      {
        title: "Structuring assessed against every applicable framework at the start.",
        body: "Company law, foreign exchange, competition and securities regulation are considered together at the structuring stage, since a change to any one of them can alter the timetable or the price.",
      },
      {
        title: "Due diligence directed at what affects the deal.",
        body: "Diligence is conducted to identify issues that bear on value, on conditions to completion or on post-completion liability, rather than to produce an exhaustive catalogue.",
      },
      {
        title: "Documentation drafted for the dispute it may produce.",
        body: "Warranties, indemnities, transfer restrictions and exit rights are drafted with an eye to how they would be construed and enforced if the relationship breaks down.",
      },
      {
        title: "Approvals sequenced against completion.",
        body: "Regulatory filings and approvals are mapped against the conditions to completion so that the transaction timetable reflects the actual approval position.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a share purchase and an asset purchase?",
        answer:
          "In a share purchase the buyer acquires shares in the target company, which continues to hold its assets and liabilities, so historical liabilities generally remain within the company. In an asset purchase or slump sale the buyer acquires identified assets or a business undertaking, which can allow liabilities to be left behind, subject to statutory exceptions. The choice affects diligence scope, documentation, tax treatment and consents required.",
      },
      {
        question: "What does legal due diligence cover in an Indian transaction?",
        answer:
          "Legal due diligence typically examines corporate records and capital structure, title to material assets, material contracts and their change of control provisions, regulatory licences and compliance, employment arrangements, intellectual property, litigation and contingent liabilities, and past corporate filings. The scope is agreed with reference to the transaction structure and to the risks that will be allocated in the documentation.",
      },
      {
        question: "When does a merger require approval from the National Company Law Tribunal?",
        answer:
          "A scheme of merger, amalgamation or arrangement under Sections 230 to 232 of the Companies Act, 2013 requires the approval of the National Company Law Tribunal, following meetings of members and creditors as directed and notice to the specified regulatory authorities. Certain mergers between eligible companies may instead be undertaken under the fast track route in Section 233, which does not require Tribunal approval in the same manner.",
      },
      {
        question: "When is a transaction notifiable to the Competition Commission of India?",
        answer:
          "The Competition Act, 2002 requires notification of combinations meeting the prescribed thresholds, which are based on assets and turnover of the parties and, in specified circumstances, on transaction value together with a local nexus requirement. Certain categories of transaction are exempt. Notifiable transactions may not be given effect to before clearance, and thresholds should be assessed against the position in force at the time of the transaction.",
      },
      {
        question: "What triggers an open offer under the takeover regulations?",
        answer:
          "The Securities and Exchange Board of India (Substantial Acquisition of Shares and Takeovers) Regulations, 2011 require an acquirer to make an open offer to public shareholders on acquiring shares or voting rights beyond the specified thresholds, on further acquisition beyond the permitted creeping limits, or on acquiring control of a listed company. Exemptions are available in the circumstances set out in the regulations.",
      },
      {
        question: "Can a foreign investor freely invest in an Indian company?",
        answer:
          "Foreign investment is permitted under the automatic route in many sectors, subject to sectoral caps and conditions, while other sectors require government approval. Investment from specified jurisdictions is subject to additional approval requirements. Pricing guidelines, permissible instruments and reporting obligations under the Foreign Exchange Management Act, 1999 apply in each case.",
      },
      {
        question: "Are exit rights in a shareholders' agreement enforceable?",
        answer:
          "Exit and optionality arrangements involving non-resident investors are subject to the conditions applicable under the foreign exchange framework, including restrictions on assured returns. Enforceability also depends on how the provision is drafted, whether it is reflected in the articles of association, and on the applicable provisions of company law. Structuring at the drafting stage materially affects enforceability later.",
      },
      {
        question: "What is unpublished price sensitive information?",
        answer:
          "Under the insider trading regulations, unpublished price sensitive information is information relating to a listed company or its securities, not generally available, which on becoming generally available is likely to materially affect the price of the securities. Persons in possession of such information are subject to restrictions on trading and communication, and listed companies are required to maintain the records prescribed by the regulations.",
      },
    ],
    relatedPracticeAreas: [
      "regulatory-competition-compliance",
      "insolvency-bankruptcy-ibc",
      "tax-advisory-litigation",
      "litigation-dispute-resolution",
    ],
    breadcrumbLabel: "Corporate, M&A, Private Equity & Capital Markets",
  },

  "regulatory-competition-compliance": {
    slug: "regulatory-competition-compliance",
    seo: {
      title: "Regulatory, Competition & Compliance | Sagar & Sagar",
      description:
        "Competition law and CCI proceedings, corporate compliance, consumer protection, data protection and regulatory investigations across Indian regulators.",
      primaryKeyword: "competition law firm India",
      secondaryKeywords: [
        "CCI proceedings lawyer",
        "abuse of dominance India",
        "cartel investigation defence",
        "anti-competitive agreement Section 3",
        "corporate compliance advisory India",
        "DPDP Act compliance lawyer",
        "consumer protection CCPA proceedings",
        "regulatory investigation defence",
        "compliance audit legal India",
        "competition appeal NCLAT",
      ],
    },
    serviceType: "Regulatory, Competition and Compliance",
    h1: "Regulatory, Competition & Compliance",
    answerFirst:
      "Regulatory and competition practice concerns the obligations imposed on businesses by sectoral and cross-sectoral regulators, and representation when those obligations are alleged to have been breached. Sagar & Sagar Law Offices advises on and appears in proceedings under the Competition Act, 2002, the Companies Act, 2013, the Consumer Protection Act, 2019 and the Digital Personal Data Protection Act, 2023, before the Competition Commission of India, the Ministry of Corporate Affairs, consumer authorities and appellate tribunals. Work covers preventive compliance advisory, internal investigations, regulatory filings, and defence in investigation, adjudication and appellate proceedings.",
    overview: [
      "Regulatory exposure in India is cumulative rather than compartmentalised. Conduct that attracts the attention of one regulator frequently engages others: a distribution arrangement may raise questions under competition law and consumer law simultaneously; a data incident may engage the data protection framework, information technology law, and sectoral directions applicable to the business. The same facts are then examined by different authorities applying different standards, at different speeds, with different consequences.",
      "The practice at Sagar & Sagar Law Offices operates across that field rather than within a single statute. Work covers the design and review of compliance frameworks before a question arises, internal investigation where one does, engagement with regulators during inquiry and inspection, and representation through adjudication and appeal. Where regulatory exposure carries a criminal dimension, the position is coordinated with the firm's White Collar Crime & Financial Crime Defence practice.",
    ],
    scopeOfWork: [
      {
        heading: "Competition law — anti-competitive agreements",
        intro: "Conduct examined under Section 3 of the Competition Act, 2002.",
        items: [
          "Advice on horizontal arrangements between competitors, including price fixing, market allocation, output restriction and bid rigging",
          "Advice on vertical arrangements, including exclusive supply and distribution, tie-in arrangements, refusal to deal and resale price maintenance",
          "Assessment of distribution, franchise, supply and agency arrangements for competition law exposure",
          "Representation in investigations initiated by the Competition Commission of India",
          "Representation during investigation by the Director General, including in response to information requisitions and depositions",
          "Advice on applications under the lesser penalty framework",
          "Advice on settlement and commitment mechanisms available under the Act",
          "Defence of associations and their members in proceedings concerning collective conduct",
        ],
      },
      {
        heading: "Competition law — abuse of dominance",
        intro: "Conduct examined under Section 4 of the Competition Act, 2002.",
        items: [
          "Advice on assessment of dominance, including relevant product and geographic market definition",
          "Advice on pricing conduct, including predatory pricing, excessive pricing and discriminatory pricing",
          "Advice on refusal to deal, denial of market access and leveraging across markets",
          "Advice on exclusivity, bundling and platform conduct",
          "Representation in information and inquiry proceedings before the Commission",
          "Advice on remedies, behavioural directions and cease and desist orders",
        ],
      },
      {
        heading: "Competition law — merger control and advisory",
        intro: "Transactional and preventive competition work.",
        items: [
          "Assessment of whether a transaction constitutes a notifiable combination",
          "Advice on applicable thresholds, exemptions and the local nexus requirement",
          "Preparation and filing of combination notices with the Competition Commission of India",
          "Advice on gun jumping exposure and permissible conduct before clearance",
          "Advice on remedies and modifications offered to secure clearance",
          "Competition compliance programmes, policies and training material",
          "Competition audits of commercial arrangements and internal documents",
        ],
      },
      {
        heading: "Competition law — appeals and enforcement",
        intro: "Challenges to orders and enforcement of outcomes.",
        items: [
          "Appeals to the National Company Law Appellate Tribunal against orders of the Commission",
          "Appeals to the Supreme Court of India",
          "Writ proceedings before the High Courts in appropriate cases",
          "Advice on penalty computation and its basis",
          "Advice on compensation applications arising from findings of contravention",
        ],
      },
      {
        heading: "Corporate and company law compliance",
        intro: "Obligations arising under the Companies Act, 2013 and administered by the Ministry of Corporate Affairs.",
        items: [
          "Advice on statutory compliance requirements applicable to companies",
          "Compliance reviews and identification of historical non-compliance",
          "Advice on adjudication and compounding of offences under the Companies Act, 2013",
          "Representation before the Registrar of Companies and the Regional Director",
          "Advice on directors' duties, disqualification and related proceedings",
          "Advice on related party transactions and the approvals they require",
          "Advice on corporate social responsibility obligations and reporting",
          "Representation in proceedings arising from inspection or inquiry into a company's affairs",
          "Advice in relation to investigations by the Serious Fraud Investigation Office",
        ],
      },
      {
        heading: "Consumer protection and market conduct",
        intro: "Obligations owed to consumers and the authorities enforcing them.",
        items: [
          "Advice on obligations under the Consumer Protection Act, 2019",
          "Advice on unfair trade practices and misleading advertisement exposure",
          "Advice on product liability and the standards applicable to it",
          "Advice on obligations applicable to electronic commerce platforms and sellers",
          "Representation in proceedings before the Central Consumer Protection Authority",
          "Representation before the National, State and District Consumer Disputes Redressal Commissions",
          "Review of advertising, marketing and packaging material for regulatory consistency",
          "Advice on grievance redressal mechanisms and their statutory requirements",
        ],
      },
      {
        heading: "Data protection and digital regulation",
        intro: "Obligations concerning personal data and digital operations.",
        items: [
          "Advice on obligations of data fiduciaries under the Digital Personal Data Protection Act, 2023",
          "Advice on notice, consent and purpose limitation requirements",
          "Advice on the rights of data principals and mechanisms for exercising them",
          "Advice on obligations under the Information Technology Act, 2000 and the rules made under it",
          "Advice on intermediary obligations and due diligence requirements",
          "Advice on personal data breach response and notification obligations",
          "Data protection policies, privacy notices and internal processing documentation",
          "Advice on data processing arrangements with vendors and processors",
          "Advice on cross-border transfer of personal data",
        ],
      },
      {
        heading: "Regulatory investigations and internal compliance",
        intro: "Work undertaken when conduct is questioned, or before it is.",
        items: [
          "Design and review of internal compliance frameworks, codes and policies",
          "Compliance audits across applicable regulatory frameworks",
          "Internal investigations into alleged non-compliance or misconduct",
          "Whistleblower complaint assessment and response",
          "Advice on document preservation and privilege during investigation",
          "Preparation of responses to regulatory queries, notices and inspection findings",
          "Representation in adjudication and penalty proceedings",
          "Advice on voluntary disclosure, remediation and undertakings",
          "Advice to boards and audit committees on regulatory exposure",
        ],
      },
      {
        heading: "Environmental, social and governance obligations",
        intro: "Reporting and governance requirements applicable to larger and listed entities.",
        items: [
          "Advice on sustainability reporting requirements applicable to listed entities",
          "Advice on governance requirements and board-level responsibility for compliance",
          "Advice on the interaction between voluntary commitments and enforceable obligations",
        ],
      },
    ],
    forums: [
      "Competition Commission of India and the office of the Director General",
      "National Company Law Appellate Tribunal, in competition appeals",
      "Ministry of Corporate Affairs, the Registrar of Companies and the Regional Director",
      "Serious Fraud Investigation Office",
      "Central Consumer Protection Authority",
      "National, State and District Consumer Disputes Redressal Commissions",
      "Data Protection Board constituted under the Digital Personal Data Protection Act, 2023",
      "Sectoral regulators, according to the industry concerned",
      "High Courts, in writ and appellate jurisdiction",
      "Supreme Court of India",
    ],
    whoWeActFor: [
      "Companies subject to sectoral and cross-sectoral regulation",
      "Boards, audit committees and independent directors",
      "Trade associations and industry bodies",
      "Electronic commerce platforms and technology businesses",
      "Banks, non-banking financial companies and financial institutions",
      "Manufacturers, distributors and franchisors",
      "Data fiduciaries and processors",
      "Parties to transactions requiring competition clearance",
      "Individuals named in regulatory proceedings",
    ],
    approach: [
      {
        title: "Exposure mapped across regulators, not within one.",
        body: "The same conduct is usually examined by more than one authority. Advice identifies the full set of frameworks engaged before addressing any of them individually.",
      },
      {
        title: "Compliance documented so that it can be demonstrated.",
        body: "A compliance position that cannot be evidenced at the time of inquiry is of limited assistance. Policies, records and internal documentation are prepared with that use in view.",
      },
      {
        title: "Investigation responses prepared as part of the record.",
        body: "Responses to requisitions, depositions and notices are drafted on the footing that they will be relied upon at adjudication and on appeal.",
      },
      {
        title: "Awareness of criminal exposure.",
        body: "Regulatory findings in India frequently carry consequences under other statutes. Where that risk exists, it is identified at the outset rather than after adjudication.",
      },
    ],
    faqs: [
      {
        question: "What conduct does Section 3 of the Competition Act prohibit?",
        answer:
          "Section 3 prohibits agreements in respect of production, supply, distribution, storage, acquisition or control of goods or services which cause or are likely to cause an appreciable adverse effect on competition in India. Certain horizontal agreements between competitors, including those relating to prices, output, market sharing and bid rigging, are presumed to have such an effect, subject to the exceptions in the section.",
      },
      {
        question: "How does the Competition Commission of India begin an investigation?",
        answer:
          "The Commission may act on information received, on a reference from a government or statutory authority, or on its own motion. Where it forms a prima facie opinion that a contravention exists, it directs the Director General to investigate. The Director General's report is then considered by the Commission, and the parties are given an opportunity to be heard before any final order is passed.",
      },
      {
        question: "What is the lesser penalty framework?",
        answer:
          "The Competition Act, 2002 provides for a reduction in penalty for a party to a cartel that makes a full and true disclosure in respect of the alleged contravention, subject to the conditions prescribed in the applicable regulations. The extent of reduction depends on the priority of the disclosure and on the value of the evidence provided, and continued cooperation is a condition of the benefit.",
      },
      {
        question: "Where does an appeal from a CCI order lie?",
        answer:
          "An appeal from an order of the Competition Commission of India lies to the National Company Law Appellate Tribunal within the period prescribed under the Act, and a further appeal lies to the Supreme Court of India. Conditions relating to deposit of penalty may apply. The grounds and scope of appellate interference are governed by the Act.",
      },
      {
        question: "Who is a data fiduciary under the DPDP Act?",
        answer:
          "The Digital Personal Data Protection Act, 2023 defines a data fiduciary as any person who alone or in conjunction with others determines the purpose and means of processing personal data. Data fiduciaries bear the principal obligations under the Act, including in relation to notice, consent, purpose limitation, security safeguards and breach intimation. Certain entities may be notified as significant data fiduciaries with additional obligations.",
      },
      {
        question: "What is the Central Consumer Protection Authority?",
        answer:
          "The Central Consumer Protection Authority is established under the Consumer Protection Act, 2019 to regulate matters relating to violation of consumer rights, unfair trade practices and false or misleading advertisements, and to promote and protect the rights of consumers as a class. It has powers of inquiry and investigation and may pass directions in the circumstances set out in the Act.",
      },
      {
        question: "What is the difference between adjudication and compounding under the Companies Act?",
        answer:
          "Adjudication is the process by which a designated adjudicating officer determines whether a default has occurred and imposes the penalty provided by the statute. Compounding is a mechanism by which certain offences may be settled on payment of an amount, in the circumstances and before the authority specified in the Companies Act, 2013. Availability depends on the nature of the default.",
      },
      {
        question: "Should a company conduct an internal investigation before responding to a regulator?",
        answer:
          "Whether to investigate internally, and how, depends on the nature of the allegation, the exposure involved and the timelines set by the regulator. An internal review can establish the factual position before a response is filed, but it also creates a record. Questions of privilege, document preservation and the sequence of disclosure are ordinarily considered before an internal investigation begins.",
      },
    ],
    relatedPracticeAreas: [
      "corporate-ma-private-equity-capital-markets",
      "white-collar-financial-crime-defence",
      "technology-ai-data-privacy-cybersecurity",
      "litigation-dispute-resolution",
    ],
    breadcrumbLabel: "Regulatory, Competition & Compliance",
  },

  "arbitration-mediation-adr": {
    slug: "arbitration-mediation-adr",
    seo: {
      title: "Arbitration, Mediation & ADR | Sagar & Sagar Law Offices",
      description:
        "Domestic and international arbitration, Section 9 and Section 34 proceedings, award enforcement, mediation and conciliation under Indian law.",
      primaryKeyword: "arbitration lawyer India",
      secondaryKeywords: [
        "Section 34 setting aside award",
        "Section 9 interim relief arbitration",
        "foreign award enforcement India",
        "Section 11 appointment of arbitrator",
        "institutional arbitration India",
        "commercial arbitration counsel",
        "Section 37 arbitration appeal",
        "mediation Act 2023 India",
        "conciliation proceedings",
        "arbitration clause drafting India",
      ],
    },
    serviceType: "Arbitration, Mediation and Alternative Dispute Resolution",
    h1: "Arbitration, Mediation & Alternative Dispute Resolution",
    answerFirst:
      "Arbitration and alternative dispute resolution concern the determination of disputes outside the ordinary court system, principally by arbitral tribunals, and the limited role courts retain in supporting and supervising that process. Sagar & Sagar Law Offices advises and appears in domestic and international commercial arbitrations under the Arbitration and Conciliation Act, 1996, in court proceedings for interim relief, appointment of arbitrators, setting aside and enforcement of awards, and in mediation and conciliation. Work covers the drafting of dispute resolution clauses, conduct of arbitral proceedings, and enforcement of domestic and foreign awards in India.",
    overview: [
      "The Arbitration and Conciliation Act, 1996 establishes a framework in which the tribunal decides the dispute and the courts perform defined supporting functions. Courts may grant interim measures, appoint arbitrators where the agreed mechanism fails, refer parties to arbitration where a valid agreement exists, and set aside or refuse enforcement of an award on the limited grounds the statute permits. The scope of that supervision is narrow by design, which makes the arbitration itself — and the clause that created it — the decisive stage.",
      "The practice at Sagar & Sagar Law Offices covers the process from the clause forward. Work includes drafting and reviewing dispute resolution clauses before a dispute exists, obtaining or resisting interim protection, conducting arbitral proceedings including pleadings, evidence and cross-examination, and pursuing or resisting challenge and enforcement of awards. The practice also covers mediation and conciliation, including the pre-institution mediation applicable to certain commercial suits.",
    ],
    scopeOfWork: [
      {
        heading: "Domestic commercial arbitration",
        intro: "Arbitrations seated in India between Indian parties, under Part I of the Arbitration and Conciliation Act, 1996.",
        items: [
          "Advice on the existence, validity and scope of an arbitration agreement",
          "Applications under Section 8 for reference of parties to arbitration where a suit is filed",
          "Applications under Section 11 for appointment of an arbitrator where the agreed procedure fails",
          "Advice on the independence and impartiality of arbitrators and challenges to appointment",
          "Conduct of arbitral proceedings, including statement of claim, defence, counterclaim and rejoinder",
          "Documentary and oral evidence, including examination and cross-examination of witnesses",
          "Applications before the tribunal under Section 16 concerning its own jurisdiction",
          "Applications for interim measures before the tribunal under Section 17",
          "Advice on the statutory timelines applicable to the making of an award",
          "Advice on costs and on interest under the Act",
        ],
      },
      {
        heading: "International and institutional arbitration",
        intro: "Arbitrations with a foreign element, or administered by an arbitral institution.",
        items: [
          "Advice on international commercial arbitration and the provisions applicable to it",
          "Advice on choice of seat, venue, governing law and language in dispute resolution clauses",
          "Arbitrations administered under institutional rules, including proceedings before Indian and foreign arbitral institutions",
          "Advice on emergency arbitrator provisions where the applicable rules provide for them",
          "Advice on multi-party and multi-contract arrangements, including joinder and consolidation",
          "Coordination with foreign counsel in arbitrations seated outside India",
          "Advice on interim relief from Indian courts in support of foreign-seated arbitration, where available",
        ],
      },
      {
        heading: "Court proceedings in support of arbitration",
        intro: "Proceedings before Indian courts arising from or supporting arbitration.",
        items: [
          "Applications under Section 9 for interim measures before, during or after arbitral proceedings",
          "Applications for preservation of assets, security for the claimed amount and injunctive relief",
          "Applications concerning the appointment and substitution of arbitrators",
          "Proceedings concerning the arbitrability of a dispute",
          "Applications for court assistance in taking evidence",
          "Applications concerning the termination of an arbitrator's mandate",
          "Anti-suit and related applications, in appropriate cases",
        ],
      },
      {
        heading: "Challenge to and enforcement of awards",
        intro: "Proceedings after an award is made.",
        items: [
          "Applications under Section 34 for setting aside a domestic award, on the grounds available under that section",
          "Advice on the scope of the public policy ground and, in domestic awards, on patent illegality",
          "Defence of awards in setting aside proceedings",
          "Applications for stay of operation of an award and advice on conditions imposed",
          "Enforcement of domestic awards as decrees of court",
          "Enforcement of foreign awards under Part II of the Act",
          "Advice on and resistance to enforcement on the grounds available under Section 48",
          "Appeals under Section 37 against orders refusing to refer parties to arbitration, granting or refusing interim measures, or setting aside or refusing to set aside an award",
          "Execution proceedings in respect of awards, including attachment and realisation",
        ],
      },
      {
        heading: "Mediation and conciliation",
        intro: "Consensual processes for resolution of disputes.",
        items: [
          "Advice on and conduct of mediation under the Mediation Act, 2023",
          "Pre-institution mediation in commercial suits under the Commercial Courts Act, 2015",
          "Advice on the enforceability of mediated settlement agreements",
          "Conciliation proceedings and advice on the status of settlement agreements arising from them",
          "Preparation of parties for mediation, including position papers and settlement parameters",
          "Drafting and review of settlement agreements and consent terms",
          "Advice on confidentiality and without prejudice protection in settlement discussions",
          "Advice on Lok Adalat proceedings and settlements recorded before them",
        ],
      },
      {
        heading: "Dispute resolution clause drafting and advisory",
        intro: "Preventive work undertaken before any dispute arises.",
        items: [
          "Drafting of arbitration clauses in commercial contracts",
          "Advice on tiered and multi-stage dispute resolution clauses",
          "Advice on institutional versus ad hoc arbitration",
          "Advice on number of arbitrators, appointment mechanism and qualification requirements",
          "Advice on seat, venue and governing law and the consequences of each",
          "Review of existing contractual dispute resolution provisions for enforceability",
          "Advice on expert determination and other contractual dispute mechanisms",
          "Strategic advice on forum selection where both arbitration and litigation are available",
        ],
      },
      {
        heading: "Sector-specific arbitration",
        intro: "Disputes arising in fields where arbitration is the usual mechanism.",
        items: [
          "Construction and engineering disputes, including delay, variation and termination claims",
          "Infrastructure and concession agreement disputes",
          "Disputes arising from joint ventures and shareholders' agreements",
          "Supply, distribution and long-term commercial contract disputes",
          "Disputes under financing and facility documentation",
          "Technology, licensing and services agreement disputes",
          "Energy and power sector disputes",
        ],
      },
    ],
    forums: [
      "Arbitral tribunals, whether ad hoc or institutionally administered",
      "Arbitral institutions, Indian and foreign, under their respective rules",
      "High Courts, in proceedings under Sections 9, 11, 34 and 37 of the Arbitration and Conciliation Act, 1996",
      "Commercial Courts and Commercial Divisions, in arbitration-related proceedings falling within their jurisdiction",
      "District Courts, in arbitration proceedings not falling before a High Court",
      "Supreme Court of India",
      "Mediation centres and mediators appointed under the Mediation Act, 2023",
      "Authorities notified for pre-institution mediation under the Commercial Courts Act, 2015",
      "Lok Adalats constituted under the Legal Services Authorities Act, 1987",
    ],
    whoWeActFor: [
      "Companies party to commercial contracts containing arbitration clauses",
      "Contractors, employers and consultants in construction and infrastructure disputes",
      "Banks, non-banking financial companies and financial institutions",
      "Joint venture partners and shareholders",
      "Foreign parties in arbitrations seated in India",
      "Indian parties in arbitrations seated outside India",
      "Award holders seeking enforcement in India",
      "Parties resisting enforcement of domestic or foreign awards",
      "Parties in mediation and conciliation proceedings",
    ],
    approach: [
      {
        title: "The clause treated as the first stage of the dispute.",
        body: "Seat, appointment mechanism and scope determine what is possible once a dispute arises. Clause drafting is conducted as dispute work, not as boilerplate.",
      },
      {
        title: "Interim protection addressed early.",
        body: "Applications under Section 9 or Section 17 frequently determine the practical position of the parties for the duration of the reference, and are prepared accordingly.",
      },
      {
        title: "The award prepared for from the pleadings.",
        body: "Proceedings are conducted with the grounds of challenge under Section 34 and, where relevant, Section 48 in view, so that the award that results is capable of surviving challenge and being enforced.",
      },
      {
        title: "Enforcement treated as part of the mandate.",
        body: "An award is a step, not a conclusion. Execution and realisation are considered as part of the overall strategy rather than as a separate matter.",
      },
    ],
    faqs: [
      {
        question: "What makes an arbitration agreement valid under Indian law?",
        answer:
          "The Arbitration and Conciliation Act, 1996 requires an arbitration agreement to be in writing and to record the parties' agreement to submit to arbitration disputes arising between them in respect of a defined legal relationship. It may be a clause in a contract or a separate agreement. Whether a particular provision constitutes a valid agreement depends on its terms and on whether it discloses an intention to arbitrate.",
      },
      {
        question: "What is Section 9 and when is it used?",
        answer:
          "Section 9 permits a party to apply to a court for interim measures of protection before the commencement of arbitral proceedings, during those proceedings, or after an award is made but before it is enforced. Relief may include preservation of assets, securing the amount in dispute and interim injunctions. Once a tribunal is constituted, courts ordinarily decline to entertain such applications where the tribunal can grant equivalent relief.",
      },
      {
        question: "On what grounds can an arbitral award be set aside?",
        answer:
          "Section 34 permits setting aside on limited grounds, including incapacity of a party, invalidity of the arbitration agreement, want of proper notice, the award dealing with matters beyond the scope of submission, improper composition or procedure, non-arbitrability of the subject matter, and conflict with the public policy of India. In arbitrations other than international commercial arbitration, an award may also be set aside if vitiated by patent illegality appearing on its face. The provision does not permit review of the merits.",
      },
      {
        question: "How is a foreign award enforced in India?",
        answer:
          "Part II of the Arbitration and Conciliation Act, 1996 provides for enforcement of foreign awards made in territories notified by the Central Government under the applicable convention. The party seeking enforcement produces the award and the arbitration agreement in the form required. Section 48 sets out the limited grounds on which enforcement may be refused, and where the court is satisfied the award is enforceable, it is enforced as a decree of that court.",
      },
      {
        question: "What is the difference between the seat and the venue of arbitration?",
        answer:
          "The seat determines the legal framework governing the arbitration, including which courts exercise supervisory jurisdiction over it. The venue is the physical location at which hearings are conducted, which may differ from the seat for reasons of convenience without altering the applicable legal framework. Clauses that use the terms interchangeably are a recurring source of jurisdictional dispute.",
      },
      {
        question: "Is there a time limit for completing an arbitration in India?",
        answer:
          "The Act prescribes a period within which an award is to be made in arbitrations to which the provision applies, running from the date specified in the statute, with provision for extension by agreement of the parties to a limited extent and thereafter by the court. The applicable position differs for international commercial arbitration. The specific timelines should be checked against the provisions in force.",
      },
      {
        question: "Can a dispute be referred to arbitration if a suit has already been filed?",
        answer:
          "Section 8 requires a judicial authority before which an action is brought in a matter that is the subject of an arbitration agreement to refer the parties to arbitration, if a party applies not later than the date of submitting its first statement on the substance of the dispute, unless it finds prima facie that no valid arbitration agreement exists. The application must be accompanied by the arbitration agreement or a copy of it.",
      },
      {
        question: "Is a mediated settlement agreement enforceable?",
        answer:
          "The Mediation Act, 2023 provides for mediated settlement agreements to be enforceable in the manner set out in that Act, subject to the grounds of challenge it specifies. Settlement agreements arising from conciliation under the Arbitration and Conciliation Act, 1996 have the status provided under that Act. Enforceability depends on the process followed and on the form in which the settlement is recorded.",
      },
      {
        question: "Is pre-institution mediation compulsory before filing a commercial suit?",
        answer:
          "The Commercial Courts Act, 2015 requires a plaintiff to exhaust pre-institution mediation before instituting a commercial suit that does not contemplate any urgent interim relief. Where urgent interim relief is genuinely sought, the suit may be instituted without first completing that process. Whether the exception applies is determined on the facts of the case.",
      },
    ],
    relatedPracticeAreas: [
      "litigation-dispute-resolution",
      "corporate-ma-private-equity-capital-markets",
      "real-estate-infrastructure-energy",
      "banking-finance-debt-recovery",
    ],
    breadcrumbLabel: "Arbitration, Mediation & ADR",
  },

  "real-estate-infrastructure-energy": {
    slug: "real-estate-infrastructure-energy",
    seo: {
      title: "Real Estate, Infrastructure & Energy | Sagar & Sagar",
      description:
        "RERA compliance and disputes, title due diligence, development and lease agreements, concession contracts, and electricity and renewable energy regulation.",
      primaryKeyword: "real estate lawyer India RERA",
      secondaryKeywords: [
        "RERA complaint advocate",
        "title due diligence property India",
        "development agreement drafting",
        "commercial leasing lawyer",
        "land acquisition compensation LARR",
        "concession agreement PPP legal",
        "EPC contract disputes India",
        "electricity regulatory commission advocate",
        "power purchase agreement legal",
        "renewable energy project counsel",
      ],
    },
    serviceType: "Real Estate, Infrastructure and Energy",
    h1: "Real Estate, Infrastructure & Energy",
    answerFirst:
      "Real estate, infrastructure and energy practice concerns the acquisition, development, financing and regulation of immovable property and of projects built upon it, together with the statutory frameworks governing power and infrastructure. Sagar & Sagar Law Offices advises on title due diligence and property documentation, compliance and disputes under the Real Estate (Regulation and Development) Act, 2016, development, construction and concession contracts, and regulatory matters under the Electricity Act, 2003, appearing before regulatory commissions, tribunals and courts. Work spans transactional documentation, regulatory approvals and contentious proceedings.",
    overview: [
      "Property and project work in India is governed by a combination of central statute, state legislation and administrative practice that varies by location. Title derives from the Transfer of Property Act, 1882 and the Registration Act, 1908, but is evidenced through state revenue records, mutation entries and local practice. Development is regulated under the Real Estate (Regulation and Development) Act, 2016 through state-level authorities. Stamp duty, land ceiling and tenancy provisions differ across states. Two projects with identical commercial terms can carry materially different legal positions depending on where they sit.",
      "The practice at Sagar & Sagar Law Offices addresses the transactional and the contentious sides of this field together. Work includes title investigation and due diligence, drafting and negotiation of development, sale, lease and construction documentation, regulatory registration and compliance, and representation in disputes before real estate authorities, consumer commissions, regulatory commissions, arbitral tribunals and courts. Where a project is financed, the position is coordinated with the firm's Banking, Finance & Debt Recovery practice.",
    ],
    scopeOfWork: [
      {
        heading: "Title investigation and property due diligence",
        intro: "Establishing what is owned, by whom, and subject to what.",
        items: [
          "Investigation of title and examination of the chain of ownership",
          "Search at the office of the Sub-Registrar and examination of registered instruments",
          "Examination of revenue records, mutation entries and land classification",
          "Encumbrance verification and identification of prior charges and claims",
          "Advice on defects in title and on measures to cure them",
          "Title opinions and certificates for purchasers, developers and lenders",
          "Due diligence on land parcels proposed for acquisition or development",
          "Advice on land use, zoning and permissible development",
          "Verification of statutory approvals, sanctions and completion documentation",
        ],
      },
      {
        heading: "Property transactions and documentation",
        intro: "Instruments through which interests in immovable property are created and transferred.",
        items: [
          "Drafting and vetting of agreements to sell, sale deeds and conveyance deeds",
          "Drafting of gift deeds, relinquishment deeds, partition deeds and family settlement documents",
          "Advice on stamp duty and registration requirements applicable to instruments",
          "Drafting of mortgage deeds and creation of security over immovable property",
          "Advice on powers of attorney and their limitations in property transactions",
          "Advice on part performance and on possession-based arrangements",
          "Drafting of memoranda of understanding and term sheets in property transactions",
        ],
      },
      {
        heading: "Development, joint development and construction",
        intro: "Arrangements between landowners, developers and contractors.",
        items: [
          "Drafting and negotiation of joint development agreements and area sharing arrangements",
          "Advice on revenue sharing and hybrid development structures",
          "Drafting of development management agreements",
          "Advice on transferable development rights and floor space index arrangements",
          "Drafting and negotiation of engineering, procurement and construction contracts",
          "Advice on turnkey and item rate construction contracts",
          "Advice on delay, extension of time, liquidated damages and variation claims",
          "Advice on termination and consequences of termination in construction contracts",
          "Drafting and review of contractor, consultant and project management appointments",
        ],
      },
      {
        heading: "RERA compliance and proceedings",
        intro: "Obligations and remedies under the Real Estate (Regulation and Development) Act, 2016.",
        items: [
          "Advice on registration of real estate projects with the state regulatory authority",
          "Advice on registration of real estate agents",
          "Preparation and review of the disclosures required at registration",
          "Advice on promoter obligations, including adherence to sanctioned plans and use of project funds",
          "Drafting and review of agreements for sale in the form prescribed by the applicable state rules",
          "Advice on the consequences of alteration of plans and of delay in possession",
          "Representation of allottees in complaints before the real estate regulatory authority",
          "Representation of promoters in complaints and in proceedings initiated by the authority",
          "Proceedings before the adjudicating officer in respect of compensation",
          "Appeals before the Real Estate Appellate Tribunal and further appeals to the High Court",
          "Advice on the interaction between RERA remedies, consumer proceedings and insolvency",
        ],
      },
      {
        heading: "Leasing and occupancy arrangements",
        intro: "Arrangements short of transfer of ownership.",
        items: [
          "Drafting and negotiation of commercial lease deeds",
          "Drafting of leave and licence agreements",
          "Advice on retail, office, warehousing and industrial leasing arrangements",
          "Advice on lock-in, escalation, renewal and exit provisions",
          "Advice on fit-out, maintenance and common area obligations",
          "Advice on applicable tenancy and rent legislation in the relevant state",
          "Disputes concerning possession, eviction, arrears and forfeiture of security deposit",
          "Advice on registration and stamp duty applicable to leases",
        ],
      },
      {
        heading: "Land acquisition and compulsory purchase",
        intro: "Proceedings where land is acquired by the State.",
        items: [
          "Advice on acquisition under the Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013",
          "Advice on the social impact assessment and consent requirements applicable",
          "Objections and representations during acquisition proceedings",
          "Proceedings concerning determination and enhancement of compensation",
          "References and appeals arising from compensation awards",
          "Advice on rehabilitation and resettlement entitlements",
          "Writ proceedings challenging acquisition and related notifications",
        ],
      },
      {
        heading: "Infrastructure projects and concession arrangements",
        intro: "Project structures involving public authorities and long-term contracts.",
        items: [
          "Advice on public private partnership structures and concession models",
          "Review and negotiation of concession agreements",
          "Advice on bid documentation, eligibility and tender conditions",
          "Representation in tender disputes and challenges to award of contract",
          "Advice on change in law, force majeure and termination payment provisions",
          "Disputes concerning delay, milestone default and performance obligations",
          "Advice on project documentation for roads, ports, airports and urban infrastructure",
          "Coordination with lenders on project finance documentation and security",
        ],
      },
      {
        heading: "Energy and power sector regulation",
        intro: "Regulatory work under the framework governing electricity and related sectors.",
        items: [
          "Advice on licensing and approvals under the Electricity Act, 2003",
          "Advice on and representation in tariff determination proceedings",
          "Advice on power purchase agreements and their regulatory approval",
          "Advice on open access, wheeling, banking and cross-subsidy surcharge",
          "Advice on renewable purchase obligations and compliance with them",
          "Advice on solar, wind and hybrid project documentation",
          "Change in law claims and disputes arising from tariff and policy changes",
          "Representation before State and Central Electricity Regulatory Commissions",
          "Appeals before the Appellate Tribunal for Electricity and further appeals",
          "Advice on captive generation and group captive arrangements",
          "Advice on petroleum and natural gas sector regulation and on mining approvals",
        ],
      },
      {
        heading: "Environmental clearances and green tribunal proceedings",
        intro: "Approvals and proceedings concerning the environmental dimension of projects.",
        items: [
          "Advice on environmental clearance requirements applicable to projects",
          "Advice on consent to establish and consent to operate under pollution control legislation",
          "Advice on forest and wildlife clearance requirements",
          "Representation before the National Green Tribunal",
          "Defence of projects in proceedings alleging environmental non-compliance",
          "Advice on conditions attached to clearances and on compliance reporting",
        ],
      },
      {
        heading: "Real estate investment vehicles",
        intro: "Structures through which real estate and infrastructure assets are held and monetised.",
        items: [
          "Advice on real estate investment trusts and their regulatory framework",
          "Advice on infrastructure investment trusts",
          "Legal due diligence on assets proposed for inclusion in such vehicles",
          "Advice on structuring of real estate funds and investment platforms",
        ],
      },
    ],
    forums: [
      "State Real Estate Regulatory Authorities and adjudicating officers",
      "Real Estate Appellate Tribunals",
      "National, State and District Consumer Disputes Redressal Commissions",
      "State and Central Electricity Regulatory Commissions",
      "Appellate Tribunal for Electricity",
      "National Green Tribunal",
      "National Company Law Tribunal and National Company Law Appellate Tribunal, in real estate insolvency",
      "Civil Courts and Commercial Courts",
      "Revenue authorities, Sub-Registrars and land acquisition authorities",
      "Arbitral tribunals, in construction and concession disputes",
      "High Courts and the Supreme Court of India",
    ],
    whoWeActFor: [
      "Developers and promoters of real estate projects",
      "Landowners entering development arrangements",
      "Purchasers, allottees and homebuyer groups",
      "Commercial tenants and landlords",
      "Contractors, employers and consultants in construction projects",
      "Infrastructure concessionaires and project companies",
      "Power generators, distribution licensees and open access consumers",
      "Renewable energy developers",
      "Banks and financial institutions financing projects",
      "Investors in real estate and infrastructure assets",
    ],
    approach: [
      {
        title: "Title examined at source.",
        body: "Title opinions rest on examination of the registered instruments and revenue record rather than on documentation furnished by the counterparty alone.",
      },
      {
        title: "State variation treated as a primary factor.",
        body: "Stamp duty, tenancy law, land ceiling provisions and RERA rules differ by state. Advice identifies the applicable state framework before addressing the transaction.",
      },
      {
        title: "Documentation drafted against the dispute it may generate.",
        body: "Delay, variation, termination and force majeure provisions in development and construction contracts are drafted with the arbitration that may follow in view.",
      },
      {
        title: "Regulatory and contractual positions kept aligned.",
        body: "In energy and infrastructure work, a contractual entitlement that is not supported by the applicable regulatory position is of limited value, and the two are advised on together.",
      },
    ],
    faqs: [
      {
        question: "What does title due diligence involve?",
        answer:
          "Title due diligence examines the chain of ownership of a property over the period considered appropriate for the transaction, through registered instruments, revenue records and mutation entries, together with a search for encumbrances, prior charges, litigation and statutory restrictions. It identifies defects that would affect transfer, development or enforcement of security, and forms the basis of a title opinion.",
      },
      {
        question: "Which real estate projects require registration under RERA?",
        answer:
          "The Real Estate (Regulation and Development) Act, 2016 requires registration of real estate projects with the state regulatory authority before advertising, marketing or sale, subject to the exemptions in the Act relating to project size, area and the nature of the work. The applicable thresholds and procedural requirements are set out in the Act and in the rules framed by each state. Real estate agents are separately required to register.",
      },
      {
        question: "What remedies does an allottee have for delay in possession?",
        answer:
          "The Act provides that where a promoter fails to complete or is unable to give possession in accordance with the terms of the agreement for sale, the allottee may withdraw from the project and claim return of the amount paid with interest, or, if the allottee does not intend to withdraw, claim interest for every month of delay until possession. Complaints are filed before the state regulatory authority, with compensation claims before the adjudicating officer.",
      },
      {
        question: "Can a homebuyer proceed under both RERA and consumer law?",
        answer:
          "Allottees have pursued remedies under the Real Estate (Regulation and Development) Act, 2016 and under consumer protection legislation, and in certain circumstances proceedings under the Insolvency and Bankruptcy Code, 2016 have also been available to allottees as a class. The remedies are not identical in scope or outcome, and the appropriate course depends on the relief sought and on the stage of the project.",
      },
      {
        question: "How is compensation determined in land acquisition?",
        answer:
          "The Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013 provides a method for determining compensation based on the factors set out in the Act, together with entitlements relating to rehabilitation and resettlement. A person dissatisfied with the award may seek a reference for determination by the authority provided under the Act, with appeal thereafter.",
      },
      {
        question: "What is open access in the electricity sector?",
        answer:
          "Open access refers to the use of transmission or distribution systems by persons other than the licensee owning them, on payment of the charges determined by the appropriate commission, as provided under the Electricity Act, 2003. It permits eligible consumers to procure power from sources other than the local distribution licensee, subject to the conditions, charges and regulations applicable in the relevant state.",
      },
      {
        question: "What is a change in law claim in a power project?",
        answer:
          "Power purchase agreements typically provide that where a change in law after a specified date alters the cost or revenue position of the generator, the affected party is to be restored to the same economic position. Claims arise from changes in duties, levies, statutory charges or regulatory requirements. Such claims are ordinarily determined by the appropriate electricity regulatory commission, with appeal to the Appellate Tribunal for Electricity.",
      },
      {
        question: "Where does an appeal from an electricity regulatory commission lie?",
        answer:
          "An appeal from an order of an adjudicating officer or of a State or Central Electricity Regulatory Commission lies to the Appellate Tribunal for Electricity under the Electricity Act, 2003, within the period prescribed. A further appeal lies to the Supreme Court of India on the grounds specified in the Act.",
      },
    ],
    relatedPracticeAreas: [
      "arbitration-mediation-adr",
      "litigation-dispute-resolution",
      "banking-finance-debt-recovery",
      "regulatory-competition-compliance",
    ],
    breadcrumbLabel: "Real Estate, Infrastructure & Energy",
  },

  "intellectual-property": {
    slug: "intellectual-property",
    seo: {
      title: "Intellectual Property | Sagar & Sagar Law Offices",
      description:
        "Trade mark, copyright, patent and design protection, prosecution, opposition and enforcement, including IP litigation before the High Courts.",
      primaryKeyword: "intellectual property lawyer India",
      secondaryKeywords: [
        "trademark registration India lawyer",
        "trademark opposition advocate",
        "copyright infringement suit India",
        "patent opposition India",
        "design registration lawyer",
        "IP litigation Delhi High Court",
        "passing off action India",
        "domain name dispute INDRP",
        "trade secret protection India",
        "IP portfolio management support",
      ],
    },
    serviceType: "Intellectual Property",
    h1: "Intellectual Property",
    answerFirst:
      "Intellectual property practice concerns the creation, registration, licensing and enforcement of rights in trade marks, copyright, patents, designs and confidential information. Sagar & Sagar Law Offices advises on clearance and registration, conducts prosecution and opposition proceedings before the Registries, drafts assignment and licensing documentation, and appears in infringement and passing off proceedings before the Commercial Courts and the High Courts. The practice also provides structured IP support services, including searches, portfolio management and prosecution support, delivered through the firm's legal process outsourcing capability.",
    overview: [
      "Intellectual property in India is governed by separate statutes for each category of right, each with its own registry, procedure and enforcement route. A single commercial product may involve a registered trade mark, copyright in its packaging and software, a registered design in its shape, and confidential information in its process — with different terms of protection, different registration requirements and different remedies attaching to each. Since the reorganisation of tribunal jurisdiction, appellate and rectification work in intellectual property has largely moved to the High Courts, several of which now operate dedicated intellectual property divisions.",
      "The practice at Sagar & Sagar Law Offices covers the lifecycle of these rights. Work includes availability searches and clearance before adoption, filing and prosecution through the relevant registry, opposition and rectification proceedings, transactional work on assignment and licensing, and contentious enforcement including interim injunctions. The practice also delivers volume support work — searches, docketing, portfolio administration and prosecution support — for firms and businesses managing IP portfolios, which is described further on the firm's International Services — LPO page.",
    ],
    scopeOfWork: [
      {
        heading: "Trade marks — clearance, prosecution and registry proceedings",
        intro: "Securing and maintaining registered trade mark rights.",
        items: [
          "Availability searches and clearance opinions before adoption of a mark",
          "Advice on distinctiveness, descriptiveness and registrability",
          "Preparation and filing of trade mark applications, including in multiple classes",
          "Advice on classification and specification of goods and services",
          "Responses to examination reports and objections raised by the Registry",
          "Appearance in show cause hearings before the Registrar",
          "Opposition proceedings, including notices of opposition, counter-statements and evidence",
          "Rectification and cancellation proceedings",
          "Renewal, assignment recordal and change of proprietorship applications",
          "Advice on well-known mark status and applications relating to it",
          "Advice on international filing strategy, including applications under the international registration system",
        ],
      },
      {
        heading: "Trade marks — enforcement",
        intro: "Contentious proceedings to protect registered and unregistered marks.",
        items: [
          "Cease and desist notices and pre-litigation correspondence",
          "Infringement suits before the Commercial Courts and High Courts",
          "Passing off actions in respect of unregistered marks and trade dress",
          "Applications for interim and ex parte injunctions",
          "Applications for appointment of local commissioners for search and seizure",
          "Advice on and applications for damages, accounts of profits and delivery up",
          "Defence of infringement and passing off proceedings",
          "Advice on parallel imports, grey market goods and exhaustion of rights",
          "Customs recordal and border enforcement measures",
          "Criminal complaints in respect of falsification and counterfeiting",
        ],
      },
      {
        heading: "Copyright",
        intro: "Rights in literary, dramatic, musical and artistic works, films, sound recordings and software.",
        items: [
          "Advice on subsistence, ownership and term of copyright",
          "Advice on first ownership, including in works created under employment or on commission",
          "Copyright registration applications and related proceedings",
          "Drafting of assignment and licensing agreements",
          "Advice on moral rights and their exercise",
          "Advice on fair dealing and permitted acts",
          "Advice on software licensing and open source compliance",
          "Infringement proceedings, including applications for injunctive relief",
          "Advice on and proceedings concerning online infringement, including blocking and takedown",
          "Advice on intermediary obligations in relation to infringing content",
          "Criminal proceedings in respect of copyright infringement",
        ],
      },
      {
        heading: "Patents",
        intro: "Rights in inventions, from filing through opposition and enforcement.",
        items: [
          "Advice on patentability and on subject matter excluded from patentability",
          "Prior art searches and patentability assessment",
          "Coordination of drafting and filing of provisional and complete specifications",
          "National phase entry of international applications",
          "Advice on requirements applicable to filing abroad",
          "Responses to examination reports and first examination reports",
          "Appearance in hearings before the Controller",
          "Pre-grant and post-grant opposition proceedings",
          "Revocation proceedings and defence against revocation",
          "Advice on working statements and other post-grant compliance",
          "Advice on compulsory licensing provisions",
          "Patent infringement proceedings and defence, including invalidity defences",
          "Freedom to operate assessments",
        ],
      },
      {
        heading: "Designs, geographical indications and related rights",
        intro: "Other registered rights under specialised statutes.",
        items: [
          "Design registration applications under the Designs Act, 2000",
          "Advice on novelty, prior publication and functionality objections",
          "Cancellation proceedings in respect of registered designs",
          "Design infringement proceedings and defence",
          "Advice on the overlap between design protection and copyright in artistic works",
          "Applications and advice in respect of geographical indications",
          "Advice on protection of semiconductor layout designs and plant varieties",
        ],
      },
      {
        heading: "Trade secrets and confidential information",
        intro: "Protection of information not capable of registration.",
        items: [
          "Advice on identification and classification of confidential information",
          "Drafting of non-disclosure and confidentiality agreements",
          "Drafting of confidentiality and invention assignment provisions in employment contracts",
          "Advice on restrictive covenants and their enforceability",
          "Proceedings for breach of confidence and misuse of confidential information",
          "Applications for injunctive relief to restrain disclosure or use",
          "Advice on protection of information in outsourcing and vendor arrangements",
          "Investigation and response where confidential information is suspected to have been taken",
        ],
      },
      {
        heading: "Domain names and online enforcement",
        intro: "Rights and remedies in the digital environment.",
        items: [
          "Domain name disputes under the applicable dispute resolution policy for country code domains",
          "Domain name disputes under the uniform dispute resolution policy for generic domains",
          "Advice on cybersquatting and typosquatting",
          "Takedown notices to platforms, marketplaces and hosting providers",
          "Applications for blocking orders in respect of infringing websites",
          "Advice on enforcement against unidentified defendants",
          "Brand monitoring and enforcement across online marketplaces and social platforms",
        ],
      },
      {
        heading: "IP transactions and commercialisation",
        intro: "Transactional work in respect of intellectual property assets.",
        items: [
          "Drafting and negotiation of assignment deeds",
          "Drafting and negotiation of licensing agreements, including exclusive and non-exclusive licences",
          "Advice on royalty structures and payment terms",
          "Technology transfer and know-how agreements",
          "Franchising and brand licensing documentation",
          "Merchandising and character licensing agreements",
          "Research, development and collaboration agreements, including ownership of resulting IP",
          "IP due diligence in mergers, acquisitions and investment transactions",
          "Advice on IP holding structures and intra-group licensing",
          "Advice on security interests over intellectual property",
        ],
      },
      {
        heading: "IP support and managed services",
        intro: "Structured, volume-based support work, delivered through the firm's LPO capability.",
        items: [
          "Trade mark availability and screening searches across classes and jurisdictions",
          "Watch services and monitoring of published applications",
          "Prosecution support, including preparation of routine filings and responses",
          "Docketing and management of prosecution and renewal deadlines",
          "Portfolio administration and record maintenance",
          "Prior art and patent landscape searches",
          "Contract review for IP clauses across contract sets",
          "Preparation of status reports and portfolio summaries for in-house teams",
          "Support to foreign firms and corporations managing Indian portfolios",
        ],
        note: {
          prefix: "Further detail on delivery models and engagement terms for this work appears on the ",
          linkText: "International Services — LPO",
          href: "/lpo",
          suffix: " page.",
        },
      },
    ],
    forums: [
      "Trade Marks Registry",
      "Patent Office and the Controller of Patents, Designs and Trade Marks",
      "Copyright Office",
      "Geographical Indications Registry",
      "Intellectual property divisions of the High Courts, where constituted",
      "Commercial Courts and Commercial Divisions",
      "High Courts, in appellate, rectification and writ jurisdiction",
      "Supreme Court of India",
      "Courts of Magistrates, in criminal proceedings relating to infringement and counterfeiting",
      "Customs authorities, in border enforcement",
      "Domain name dispute resolution providers under the applicable policy",
    ],
    whoWeActFor: [
      "Companies building and maintaining brand portfolios",
      "Manufacturers and consumer goods businesses",
      "Technology and software companies",
      "Pharmaceutical and life sciences companies",
      "Media, entertainment and publishing businesses",
      "Startups and founders establishing IP ownership",
      "Foreign proprietors seeking protection and enforcement in India",
      "Foreign law firms requiring Indian filing, prosecution and support work",
      "Licensees, distributors and franchisees",
      "Defendants in infringement and passing off proceedings",
    ],
    approach: [
      {
        title: "Clearance treated as the cheapest stage.",
        body: "Searching and assessing a mark or an invention before adoption costs materially less than rectifying a conflict after launch, and clearance work is treated as substantive rather than administrative.",
      },
      {
        title: "Registration strategy aligned to commercial use.",
        body: "Classes, specifications and filing jurisdictions are selected by reference to how the right will actually be used and enforced, rather than by default coverage.",
      },
      {
        title: "Enforcement assessed before it is commenced.",
        body: "The strength of the right, the evidence of use, the conduct of the proprietor and the likely defences are assessed before proceedings are initiated, since each affects the availability of interim relief.",
      },
      {
        title: "Support work managed on defined process.",
        body: "Volume search, docketing and prosecution support work is conducted on documented process with defined quality control, so that portfolio deadlines and records remain reliable at scale.",
      },
    ],
    faqs: [
      {
        question: "Why is a trade mark search conducted before an application is filed?",
        answer:
          "A search identifies identical and similar marks already registered or applied for in the relevant classes, and assesses the likelihood of objection by the Registry or opposition by third parties. It also identifies conflicts with unregistered marks in use. Searching before adoption allows the mark to be changed at a stage when rebranding costs little, rather than after commercial launch.",
      },
      {
        question: "What is the difference between trade mark infringement and passing off?",
        answer:
          "Infringement is a statutory remedy available to the proprietor of a registered trade mark under the Trade Marks Act, 1999. Passing off is a common law action protecting the goodwill associated with a mark irrespective of registration, and requires the claimant to establish goodwill, misrepresentation and damage. Both may be pleaded together where a registered mark is involved.",
      },
      {
        question: "How does trade mark opposition work in India?",
        answer:
          "Once an application is accepted and advertised in the Trade Marks Journal, any person may oppose it by filing a notice of opposition within the period prescribed. The applicant files a counter-statement, following which both sides file evidence by way of affidavit. The Registrar hears the matter and decides whether the mark proceeds to registration.",
      },
      {
        question: "Is software patentable in India?",
        answer:
          "The Patents Act, 1970 excludes certain subject matter from patentability, including computer programmes as such. Whether a particular invention involving software falls within that exclusion depends on how the invention is claimed and on whether a technical effect or contribution beyond the programme itself is established. Software is separately protected as a literary work under copyright law.",
      },
      {
        question: "What is pre-grant opposition?",
        answer:
          "The Patents Act, 1970 permits any person to make a representation opposing the grant of a patent after publication of the application and before grant, on the grounds specified in the Act. This is distinct from post-grant opposition, which may be filed by an interested person within the period prescribed after grant, and from revocation proceedings.",
      },
      {
        question: "Who owns copyright in work created by an employee?",
        answer:
          "The Copyright Act, 1957 provides that, in the absence of an agreement to the contrary, the employer is the first owner of copyright in a work made by an employee in the course of employment under a contract of service, subject to the exceptions in that section. The position differs for work commissioned from an independent contractor, where ownership generally requires express assignment.",
      },
      {
        question: "Are trade secrets protected by statute in India?",
        answer:
          "India does not have a dedicated trade secrets statute. Confidential information is protected through contract, including non-disclosure and confidentiality provisions, and through the equitable action for breach of confidence. Effective protection therefore depends substantially on how information is identified, restricted and documented within the organisation.",
      },
      {
        question: "Where are IP disputes heard following the abolition of the IPAB?",
        answer:
          "Following the reorganisation of tribunal jurisdiction, matters previously before the Intellectual Property Appellate Board are dealt with by the High Courts. Several High Courts have constituted dedicated intellectual property divisions with their own procedural rules. Infringement suits continue to be filed before Commercial Courts or the Commercial Divisions of the High Courts according to jurisdiction and value.",
      },
      {
        question: "Can Indian counsel support a foreign firm's portfolio work?",
        answer:
          "Indian counsel are frequently engaged by foreign firms and corporations for filing, prosecution and support work in India, and for search, docketing and portfolio administration delivered on a managed basis. Engagement terms, scope and confidentiality arrangements are agreed at the outset. Further detail appears on the firm's International Services — LPO page.",
      },
    ],
    relatedPracticeAreas: [
      "technology-ai-data-privacy-cybersecurity",
      "litigation-dispute-resolution",
      "corporate-ma-private-equity-capital-markets",
      "lpo",
    ],
    breadcrumbLabel: "Intellectual Property",
  },
};
