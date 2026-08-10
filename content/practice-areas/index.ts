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
};
