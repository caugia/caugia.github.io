/* ===========================================================
   MASTER QUESTION ENGINE v4.8 — CANONICAL (GERMAN)
   =========================================================== */

const QUESTIONS = [
/* ===========================================================
   PILLAR 0: CONTEXT (25 QUESTIONS)
   =========================================================== */

{
  id: 1, pillar: 0, type: "group",
  title: "Kurz zu Ihnen und Ihrem Unternehmen",
  subtitle: "Firmenkontext, damit wir Benchmarks und Reporting korrekt kalibrieren.",
  fields: [
    { name: "fullname",        label: "Ihr vollständiger Name" },
    { name: "role",            label: "Ihre Rolle bzw. Jobtitel" },
    { name: "email",           label: "E-Mail-Adresse" },
    { name: "company",         label: "Firmenname" },
    { name: "industry",        label: "Branche (z. B. FinTech, HRTech, DevTools)" },
    { name: "total_employees", label: "Gesamte Belegschaft (FTE)" },
    { name: "year_founded",    label: "Gründungsjahr (JJJJ)" },
    { name: "hq_region",       label: "Region des Headquarters (z. B. US, DACH, FR, UK, Benelux, Nordics)" }
  ]
},

{
  id: 2, pillar: 0, type: "group",
  title: "Zentrale SaaS-KPIs",
  subtitle: "Finanz- und Retention-Basisdaten.",
  fields: [
    { name: "arr",              label: "Aktueller ARR (Annual Recurring Revenue)" },
    { name: "growth_rate",      label: "Jährliche Wachstumsrate (%)" },
    { name: "nrr",              label: "Net Revenue Retention: NRR (%)" },
    { name: "grr",              label: "Gross Revenue Retention: GRR (%)" },
    { name: "gross_margin",     label: "Bruttomarge (%)" },
    { name: "monthly_burn",     label: "Monatlicher Netto-Burn" },
    { name: "cash_runway",      label: "Cash Runway (Monate)" },
    { name: "number_of_clients",label: "Anzahl zahlender Kunden" }
  ]
},

{
  id: 3, pillar: 0, type: "group",
  title: "Zusammensetzung des GTM-Teams",
  subtitle: "Nur FTEs angeben.",
  fields: [
    { name: "sales_headcount",             label: "# Sales: AEs / Closer" },
    { name: "sdr_headcount",               label: "# SDR / BDR" },
    { name: "marketing_headcount",         label: "# Marketing: Demand + PMM + Brand" },
    { name: "cs_headcount",               label: "# Customer Success / Account Management" },
    { name: "revops_enablement_headcount", label: "# RevOps / Enablement" },
    { name: "product_headcount",           label: "# Product: PM + Design (ohne Engineering)" },
    { name: "engineering_headcount",       label: "# Engineering / R&D: nur Entwickler" },
    { name: "gtm_other_headcount",         label: "# Sonstige GTM: Partner, SEs" }
  ]
},

{
  id: 4, pillar: 0, type: "group",
  title: "Ziele und Effizienz",
  subtitle: "Umsatzeffizienz und kommerzielle Performance.",
  fields: [
    { name: "arr_target",         label: "ARR-Ziel für dieses Geschäftsjahr" },
    { name: "quota_attainment",   label: "% der Sales Reps on Quota: letztes abgeschlossenes Quartal" },
    { name: "cac_payback",        label: "CAC Payback (Monate)" },
    { name: "magic_number",       label: "Magic Number: Net New ARR ÷ S&M-Spend Vorquartal" },
    { name: "avg_discount",       label: "Ø Rabatt (%) bei Neukunden-Deals" },
    { name: "expansion_pct",      label: "% des Net New ARR aus Upsell / Expansion" },
    { name: "avg_ramp_months",    label: "Ø Ramp-up neuer AEs: Monate bis Full Quota" },
    { name: "sales_marketing_pct",label: "S&M-Spend als % des Umsatzes" }
  ]
},

{
  id: 5, pillar: 0, type: "group",
  title: "Funnel-Velocity und Risikokontext",
  subtitle: "Wo Deals ausbremsen, hängenbleiben oder verschwinden.",
  fields: [
    { name: "win_rate",             label: "Ø Win Rate (%)" },
    { name: "sales_cycle",          label: "Ø Sales Cycle (Tage)" },
    { name: "pipeline_coverage",    label: "Pipeline Coverage Ratio (z. B. 3,5 für 3,5x)" },
    { name: "inbound_pipeline_pct", label: "% der qualifizierten Pipeline aus Inbound" },
    { name: "revenue_concentration",label: "% des Umsatzes aus den Top-10-Kunden" },
    { name: "top_competitors",      label: "Top 3 Wettbewerber (kommagetrennt)" },
    { name: "primary_loss_reason",  label: "Hauptgrund für Deal-Verlust: ein Satz" },
    { name: "primary_churn_reason", label: "Hauptgrund für Churn: ein Satz" }
  ]
},

{
  id: 6, pillar: 0, type: "group",
  title: "Pipeline- und Produkt-Intelligence",
  subtitle: "Conversion- und Adoption-Mechanik aus den realen Daten.",
  fields: [
    { name: "discovery_to_demo",        label: "Discovery → Demo Conversion (%)" },
    { name: "demo_to_poc",              label: "Demo → POC / Trial Conversion (%)" },
    { name: "poc_to_close",             label: "POC → Closed Won Conversion (%)" },
    { name: "technical_validation_loss",label: "% der Deals, die an der technischen Validierung scheitern" },
    { name: "activation_30d",           label: "% der User, die 30 Tage nach Onboarding aktiv sind" },
    { name: "feature_penetration",      label: "% der Accounts, die 3+ Kernfeatures nutzen" },
    { name: "time_to_value",            label: "Ø Tage bis zum ersten Value-Moment" },
    { name: "product_expansion_pct",    label: "% Expansion-Umsatz, getrieben durch Produktnutzungssignale" }
  ]
},

{
  id: 7, pillar: 0, type: "multi_radio",
  title: "GTM-Modell",
  subtitle: "Wählen Sie für jede Frage eine Option.",
  questions: [
    {
      key: "gtm_motion",
      label: "Was beschreibt Ihre primäre GTM-Motion am besten?",
      options: [
        "Inbound-led (Marketing-getrieben)",
        "Outbound-led (Sales-getrieben)",
        "Product-led (PLG / Self-Serve)",
        "Partner-led (Channel / Ecosystem)",
        "Enterprise Field Sales (High Touch)",
        "Hybrid (balancierter Mix)"
      ]
    },
    {
      key: "revenue_model",
      label: "Ihr primäres Revenue-Modell",
      options: [
        "SaaS-Subscription (recurring)",
        "Usage-based / Consumption",
        "Transaktional / Einmalig",
        "Marketplace / Take-Rate",
        "Managed Services / Hybrid"
      ]
    }
  ]
},

{
  id: 8, pillar: 0, type: "group",
  title: "Churn- und Vertragsdetails",
  subtitle: "Retention und kommerzielle Struktur.",
  fields: [
    { name: "burn_multiple",       label: "Burn Multiple: Net Burn ÷ Net New ARR" },
    { name: "logo_churn_rate",     label: "Annual Logo Churn: % verlorene Kunden" },
    { name: "revenue_churn_rate",  label: "Annual Revenue Churn: % verlorener ARR" },
    { name: "avg_contract_length", label: "Ø Vertragslaufzeit (Monate)" }
  ]
},

{
  id: 9, pillar: 0, type: "multi_radio",
  title: "Zielmarkt",
  subtitle: "Wählen Sie für jede Frage eine Option.",
  questions: [
    {
      key: "target_segment",
      label: "Primäres Zielsegment (laut Strategie)",
      options: [
        "Rabbit / SMB (< 10.000 € ACV)",
        "Deer / Mid-Market (10.000 € – 50.000 € ACV)",
        "Elephant / Enterprise (50.000 € – 250.000 € ACV)",
        "Whale / Strategic (250.000 €+ ACV)"
      ]
    },
    {
      key: "economic_buyer",
      label: "Wer ist Ihr primärer Economic Buyer?",
      options: [
        "C-Level (CEO, CFO, CTO)",
        "VP / Bereichsleiter",
        "Team Lead / Manager",
        "Individual Contributor / Endnutzer",
        "Technik / IT / Einkauf"
      ]
    }
  ]
},

{
  id: 10, pillar: 0, type: "group",
  title: "Effizienz und Funnel-Details",
  subtitle: "Sekundäre Effizienz-KPIs.",
  fields: [
    { name: "ltv_cac",              label: "LTV:CAC Ratio" },
    { name: "pct_deals_no_discount",label: "% der Deals, die zum Listenpreis closen" },
    { name: "outbound_pipeline_pct",label: "% der qualifizierten Pipeline aus Outbound" },
    { name: "mql_to_sql_rate",      label: "MQL → SQL Conversion Rate (%)" }
  ]
},

{
  id: 11, pillar: 0, type: "multi_radio",
  title: "Unternehmensphase",
  subtitle: "Wählen Sie für jede Frage eine Option.",
  questions: [
    {
      key: "operating_phase",
      label: "Welche operative Phase beschreibt Ihr Unternehmen heute am besten?",
      options: [
        "Land & Expand: schnelles Wachstum, aggressive Investition in Neukunden. Burn ist gewollt.",
        "Grow & Optimize: Revenue skalieren und dabei Effizienz steigern. Rule of 40 ist in Reichweite.",
        "Efficiency First: Profitabilität hat Vorrang. Neukunden sind nachrangig gegenüber NRR und Marge.",
        "Transition / Repositioning: Segment, Motion, Produkt oder Markt werden aktiv verändert.",
        "Stabilisierung / Erholung: Umsatzbasis schützen und Risiken abbauen vor der nächsten Wachstumsphase."
      ]
    },
    {
      key: "funding_stage",
      label: "Finanzierungsstand",
      options: [
        "Bootstrapped / profitabel",
        "Pre-Seed / Seed",
        "Series A",
        "Series B",
        "Series C+",
        "Private Equity / börsennotiert"
      ]
    }
  ]
},

{
  id: 12, pillar: 0, type: "group",
  title: "Team-Kontext und Pipeline-Quellen",
  subtitle: "Geografische Reichweite und Pipeline-Split nach Kanal.",
  fields: [
    { name: "sales_leadership_headcount",label: "# Sales Leadership: VP / Head / Manager" },
    { name: "active_countries",          label: "Anzahl Länder mit aktivem Sales oder Kunden" },
    { name: "inbound_pct",  label: "% Pipeline: Inbound (Content, SEO, Brand, Events)", type: "number", min: 0, max: 100, placeholder: "z. B. 40" },
    { name: "outbound_pct", label: "% Pipeline: Outbound (SDR, AE-Prospecting, Cold Outreach)",  type: "number", min: 0, max: 100, placeholder: "z. B. 30" },
    { name: "plg_pct",      label: "% Pipeline: Product-led (PLG, Self-Serve, Trial)",   type: "number", min: 0, max: 100, placeholder: "z. B. 20" },
    { name: "partner_pct",  label: "% Pipeline: Partner (Channel, Ecosystem, Referral)",type: "number", min: 0, max: 100, placeholder: "z. B. 10" }
  ]
},

{
  id: 13, pillar: 0, type: "group",
  title: "Aktueller Stand vs. Ziel",
  subtitle: "Was das Leadership-Team heute trackt und wo die Lücke liegt.",
  fields: [
    { name: "current_primary_metric",       label: "Primäre KPI im Leadership-Fokus: z. B. ARR, NRR, EBITDA, Rule of 40, Win Rate, Burn Multiple" },
    { name: "current_primary_metric_value", label: "Aktueller Wert dieser KPI" },
    { name: "current_primary_metric_goal",  label: "Zielwert für dieses Geschäftsjahr" },
    { name: "leadership_bottleneck",        label: "Der primäre Bottleneck, den das Leadership-Team sieht: ein Satz" }
  ]
},

{
  id: 14, pillar: 0, type: "radio",
  title: "Wie dringend muss Ihr primärer GTM-Bottleneck gelöst werden?",
  subtitle: "Die Option wählen, die Ihre operative Realität trifft.",
  options: [
    "Niedrig: wir haben Zeit, das sauber anzugehen",
    "Moderat: gehört in den nächsten zwei Quartalen adressiert",
    "Hoch: blockiert aktuell unser Wachstum",
    "Kritisch: gefährdet das Unternehmen innerhalb von 90 Tagen"
  ]
},

{
  id: 15, pillar: 0, type: "multi_radio",
  title: "Produktprofil",
  subtitle: "Wählen Sie für jede Frage eine Option.",
  questions: [
    {
      key: "product_category",
      label: "Produktkategorie",
      options: [
        "System of Record (z. B. CRM, ERP, HRIS)",
        "System of Engagement (z. B. SEP, Collaboration, Messaging)",
        "Point Solution / Workflow-Tool",
        "Infrastructure / API / Developer Tool",
        "Data / Analytics / AI / BI"
      ]
    },
    {
      key: "product_complexity",
      label: "Wie hoch ist die Produktkomplexität für einen typischen Käufer?",
      options: [
        "Einfach / Plug & Play: in Stunden live, kein technischer Support nötig",
        "Mittlere Komplexität: Basis-Konfiguration, in Tagen live",
        "Komplex / Konfigurierbar: braucht Setup, Training und einen definierten Onboarding-Prozess",
        "Sehr komplex / Custom: Implementierung über mehrere Monate, Solutions Engineering nötig"
      ]
    }
  ]
},

{
  id: 16, pillar: 0, type: "group",
  title: "12-Monats-Zielbild",
  subtitle: "Wo das Unternehmen in 12 Monaten stehen muss.",
  fields: [
    { name: "goal_12m_primary_metric",   label: "Primäre KPI in 12 Monaten: z. B. ARR, NRR, Rule of 40, EBITDA %" },
    { name: "goal_12m_primary_target",   label: "Zielwert in 12 Monaten" },
    { name: "goal_12m_secondary_metric", label: "Sekundäre KPI (12 Monate)" },
    { name: "goal_12m_secondary_target", label: "Zielwert der sekundären KPI" }
  ]
},

{
  id: 17, pillar: 0, type: "radio",
  title: "Was ist Ihr primärer strategischer Fokus für die nächsten 12 Monate?",
  subtitle: "Bitte für Ihr primäres Umsatzsegment und Ihre primäre GTM-Motion beantworten, sofern eine Frage nicht explizit differenziert.",
  options: [
    "Aggressive Neukundengewinnung: Neukundenvolumen hat Priorität über alles",
    "Effizienz und Profitabilität: Cashflow, Margenverbesserung, Burn senken",
    "Expansion und NRR: Upsell, Cross-Sell und Retention als primärer Umsatztreiber",
    "Neuer Markteintritt: neue Geografie, neues Segment oder neue GTM-Motion",
    "Category Leadership: Brand, Positionierung und langfristige Defensibility"
  ]
},

{
  id: 18, pillar: 0, type: "radio",
  title: "Was ist aktuell Ihr sichtbarstes GTM-Symptom?",
  options: [
    "Zu wenige Leads: Top of Funnel ist zu dünn",
    "Niedrige Conversion: Pipeline ist da, aber Deals closen nicht",
    "Stagnierende Deals / lange Cycles: Deals bewegen sich langsam oder verstummen",
    "Hoher Churn oder Downsell: Kunden gehen oder Vertragswerte sinken",
    "Team-Misalignment: Execution ist inkonsistent oder Koordination bricht zusammen"
  ]
},

{
  id: 19, pillar: 0, type: "radio",
  title: "Worin sieht das Leadership-Team die Ursache?",
  options: [
    "Talent- oder Hiring-Lücken: wir haben nicht die richtigen Leute in den richtigen Rollen",
    "Tech- oder Data-Debt: Systeme sind langsam, kaputt oder gar nicht vorhanden",
    "Budget-Constraints: wir können nicht investieren, was die Strategie eigentlich verlangt",
    "Strategische Unklarheit: das Leadership-Team ist sich über Richtung oder Prioritäten nicht einig",
    "Produktlücken: das Produkt trägt die benötigte GTM-Motion nicht"
  ]
},

{
  id: 20, pillar: 0, type: "group",
  title: "24-Monats-Zielbild",
  subtitle: "Wie das Unternehmen in 24 Monaten aussehen muss.",
  fields: [
    { name: "goal_24m_primary_metric",   label: "Primäre KPI in 24 Monaten" },
    { name: "goal_24m_primary_target",   label: "Zielwert in 24 Monaten" },
    { name: "goal_24m_secondary_metric", label: "Sekundäre KPI (24 Monate)" },
    { name: "goal_24m_secondary_target", label: "Zielwert der sekundären KPI" },
    { name: "goal_24m_operating_model",  label: "Target Operating Model in 24 Monaten: z. B. Rule of 40, EBITDA-positiv, Exit-Ready, IPO-Ready" }
  ]
},

{
  id: 21, pillar: 0, type: "radio",
  title: "In wie viele kommerzielle Segmente verkaufen Sie heute aktiv?",
  subtitle: "Ein Segment ist eine eigenständige Käufergruppe mit deutlich anderem ACV, anderer Motion oder anderem Value Proposition.",
  options: [
    "1 Segment: ein Käufertyp, eine Motion",
    "2 Segmente: zwei eigenständige Käufergruppen",
    "3 Segmente: drei eigenständige Käufergruppen",
    "4 oder mehr Segmente"
  ]
},

{
  id: 22, pillar: 0, type: "group",
  title: "Segment-1-Performance",
  subtitle: "Ihr primäres oder größtes Segment nach ARR-Beitrag.",
  fields: [
    { name: "segment_1_name",     label: "Segment 1: Name oder Beschreibung (z. B. Mid-Market SaaS)" },
    { name: "segment_1_arr_pct",  label: "Segment 1: ARR-Beitrag (%)" },
    { name: "segment_1_acv",      label: "Segment 1: Durchschnittlicher ACV" },
    { name: "segment_1_win_rate", label: "Segment 1: Win Rate (%)" },
    { name: "segment_1_nrr",      label: "Segment 1: NRR (%)" },
    { name: "segment_1_priority", label: "Segment 1: Strategische Priorität",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

{
  id: 23, pillar: 0, type: "group",
  title: "Segment-2-Performance",
  subtitle: "Ihr zweites Segment.",
  fields: [
    { name: "segment_2_name",     label: "Segment 2: Name" },
    { name: "segment_2_arr_pct",  label: "Segment 2: ARR-Beitrag (%)" },
    { name: "segment_2_acv",      label: "Segment 2: Durchschnittlicher ACV" },
    { name: "segment_2_win_rate", label: "Segment 2: Win Rate (%)" },
    { name: "segment_2_nrr",      label: "Segment 2: NRR (%)" },
    { name: "segment_2_priority", label: "Segment 2: Priorität",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

{
  id: 24, pillar: 0, type: "multi_radio",
  title: "Marktkontext und Reporting",
  subtitle: "Wählen Sie für jede Frage eine Option.",
  questions: [
    {
      key: "market_adoption",
      label: "Marktadoptionsphase",
      options: [
        "Aufkommend: Kategorie-Aufklärung ist vor dem Verkauf noch erforderlich",
        "Frühes Wachstum: Kategorie-Bewusstsein existiert, Produktdifferenzierung ist die Hauptherausforderung",
        "Etabliertes Wachstum: Mehrere glaubwürdige Alternativen, der Wettbewerb verschärft sich",
        "Reif: Die Kategorie wird zur Commodity, Retention und Effizienz zählen mehr als Akquisition"
      ]
    },
    {
      key: "currency",
      label: "Primäre Berichtswährung",
      options: [
        "USD ($)",
        "EUR (€)",
        "GBP (£)",
        "AUD ($)",
        "CAD ($)",
        "Andere"
      ]
    }
  ]
},

{
  id: 25, pillar: 0, type: "group",
  title: "Segment-3-Performance",
  subtitle: "Ihr drittes Segment.",
  fields: [
    { name: "segment_3_name",     label: "Segment 3: Name" },
    { name: "segment_3_arr_pct",  label: "Segment 3: ARR-Beitrag (%)" },
    { name: "segment_3_acv",      label: "Segment 3: Durchschnittlicher ACV" },
    { name: "segment_3_win_rate", label: "Segment 3: Win Rate (%)" },
    { name: "segment_3_nrr",      label: "Segment 3: NRR (%)" },
    { name: "segment_3_priority", label: "Segment 3: Priorität",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

/* ===========================================================
   PILLAR 1: GTM STRATEGY & LEADERSHIP (20 QUESTIONS)
   =========================================================== */

{
  id: 1001, pillar: 1, type: "scale",
  title: "Wie viele GTM-Initiativen haben Sie in den letzten 12 Monaten nach einem Quarterly Review formell gestoppt, heruntergestuft oder defundet?",
  subtitle: "Bitte für Ihr primäres Umsatzsegment und Ihre primäre GTM-Motion beantworten, sofern eine Frage nicht explizit differenziert.",
  options: [
    "Wir stoppen nichts formell: Was wir starten, läuft einfach weiter",
    "Ein, zwei Dinge sind still eingeschlafen, aber ohne formellen Review",
    "Einige Initiativen haben wir auf Basis von Performance-Daten formell gestoppt",
    "Wir haben einen dokumentierten Quarterly-Stopp-Prozess mit festgehaltener Begründung",
    "Unser Quarterly Review stoppt mehr Initiativen als er startet: Ressourcendisziplin läuft systematisch"
  ]
},
{
  id: 1002, pillar: 1, type: "scale",
  title: "Wie klar haben Sie definiert, welche Marktsegmente, Branchen oder Deal-Typen Sie nicht verfolgen?",
  options: [
    "Keine Ausschlüsse: Wir gehen allem nach, was nach Deal aussieht",
    "Informeller Konsens, aber nichts dokumentiert oder durchgesetzt",
    "Einzelne Ausschlüsse gibt es, werden im Sales aber nicht konsistent angewandt",
    "Schriftliche Ausschlusskriterien, die in Pipeline-Qualifizierung geprüft werden",
    "Explizite Negativ-ICP-Regeln: durchgesetzt in CRM-Scoring, Quota-Design und Rep-Vergütung"
  ]
},
{
  id: 1003, pillar: 1, type: "scale",
  title: "Wenn zwei GTM-Teams um dasselbe Budget oder denselben Headcount konkurrieren: wie und wie schnell wird das entschieden?",
  options: [
    "Konflikte landen beim CEO und werden über Wochen informell gelöst",
    "Das Leadership-Team bespricht es in Meetings, aber die Lösung ist langsam und oft politisch",
    "Ein dokumentiertes Priorisierungs-Framework gibt es, aber die Klärung zieht sich über mehrere Zyklen",
    "Ein klar benannter Owner entscheidet Ressourcenkonflikte innerhalb einer Woche mit dokumentierter Begründung",
    "Ressourcenkonflikte werden in der operativen Kadenz geklärt: innerhalb von 48 Stunden, anhand einer vorher vereinbarten Prioritätshierarchie"
  ]
},
{
  id: 1004, pillar: 1, type: "scale",
  title: "Wie detailliert und zeitlich verankert ist Ihre GTM-Roadmap für die nächsten 12–18 Monate?",
  options: [
    "Keine Roadmap: Wir fahren reaktiv von Quartal zu Quartal",
    "Grobe Quartalsziele, ohne Milestones oder Owner",
    "Ein 12-Monats-Plan mit wichtigen Milestones, aber schwacher Accountability",
    "Eine sequenzierte Roadmap mit Ownern, Erfolgs-KPIs und Quarterly Reviews",
    "Eine voll durchphasierte GTM-Roadmap mit Milestone-Gates, Ownern und Board-Reporting"
  ]
},
{
  id: 1005, pillar: 1, type: "scale",
  title: "Wie eng sind Produkt-Releases und Roadmap-Entscheidungen mit GTM-Launchplänen und Timing verzahnt?",
  options: [
    "Product liefert autark: GTM erfährt von Releases erst zum Launch",
    "Es gibt etwas Abstimmung, aber GTM sitzt selten bei Roadmap-Entscheidungen am Tisch",
    "Regelmäßige Product–GTM-Syncs, aber die nachgelagerte Planung ist oft ad hoc",
    "Product- und GTM-Planungszyklen sind synchronisiert, mit gemeinsamen Milestone-Reviews",
    "Ein gemeinsamer Product–GTM-Kalender steuert Sequenzierung, Launch-Readiness und Sales Enablement"
  ]
},
{
  id: 1006, pillar: 1, type: "scale",
  title: "Wie werden GTM-Ziele im Leadership-Team gesetzt, getrackt und reviewed?",
  options: [
    "Ziele werden jährlich gesetzt und selten überprüft",
    "Es gibt Ziele, aber Progress-Reviews sind unregelmäßig oder werden übersprungen",
    "Monatliche Reviews finden statt, aber die Datenqualität limitiert die Diskussion",
    "Quartals-OKRs oder -KPIs laufen in einem gemeinsamen System mit regelmäßigen Leadership-Reviews",
    "Eine formelle GTM-Operating-Kadenz: wöchentliche KPIs, monatliche Reviews, Quartals-Retros mit dokumentierten Actions"
  ]
},
{
  id: 1007, pillar: 1, type: "scale",
  title: "Wie klar benennt Ihre GTM-Strategie, warum Sie gewinnen, warum Sie verlieren: und was Sie defensibel macht?",
  options: [
    "Keine formelle Formulierung: Differenzierung wird im Gespräch improvisiert",
    "Ein übergeordnetes Positioning-Statement gibt es, aber ohne operative Verankerung",
    "Win-Themen werden anekdotisch aus Sales-Feedback abgeleitet",
    "Ein dokumentierter Wettbewerbsvorteil mit stützenden Win/Loss-Belegen",
    "Eine validierte Differenzierungs-Architektur: durch Buyer-Feedback geprüft, quartalsweise aktualisiert"
  ]
},
{
  id: 1008, pillar: 1, type: "scale",
  title: "Welche Motion oder welches Segment bekommt im aktuellen Budget die höchste Investition: und ist diese Allokation explizit dokumentiert und durch Performance-Daten begründet?",
  options: [
    "Budgetentscheidungen orientieren sich am Vorjahres-Spend, ohne echten strategischen Review",
    "Es wird priorisiert, aber weitgehend politisch oder beziehungsgetrieben",
    "Investitionen sind auf GTM-Prioritäten gemappt, aber ROI-Tracking ist dünn",
    "Ein formelles Priorisierungs-Framework verbindet Spend mit Pipeline- und Revenue-Outcomes",
    "GTM-Investitionen werden nach modelliertem ROI ranked, quartalsweise reviewed und auf Basis von Performance-Daten reallokiert"
  ]
},
{
  id: 1009, pillar: 1, type: "scale",
  title: "Welche Ihrer GTM-Motions: Inbound, Outbound, PLG, Channel: generiert den effizientesten Umsatz, und welche Daten belegen das?",
  options: [
    "Keine Motion-Level-Transparenz: Pipeline-Quellen werden nicht getrackt",
    "Grobe Schätzungen aus Sales-Gefühl oder Marketing-Annahmen",
    "Motion-Level-Pipeline-Daten gibt es, werden in der Planung aber nicht konsistent genutzt",
    "CAC, Win Rate und Cycle Time werden pro Motion getrackt und quartalsweise reviewed",
    "Jede Motion hat ihre eigene P&L-artige Sicht: Effizienz, Payback und Kapazität werden modelliert und laufend aktualisiert"
  ]
},
{
  id: 1010, pillar: 1, type: "scale",
  title: "Wie oft hat eine Markt- oder Wettbewerbsentwicklung in den letzten 12 Monaten dazu geführt, dass Sie eine GTM-Priorität, Budget-Allokation oder Motion substanziell verändert haben?",
  options: [
    "Unsere Strategie hat sich im letzten Jahr nicht wesentlich bewegt: trotz Marktsignalen",
    "Wir haben über Änderungen gesprochen, aber keine Prioritäten oder Budgets formell angepasst",
    "Eine wesentliche Anpassung wurde vorgenommen und dokumentiert",
    "Zwei bis drei dokumentierte Anpassungen als Reaktion auf Marktsignale, mit klarer Begründung",
    "Wir haben ein kontinuierliches Market-Monitoring, das mindestens eine dokumentierte strategische Anpassung pro Quartal liefert"
  ]
},
{
  id: 1011, pillar: 1, type: "scale",
  title: "Wie belastbar sind Ihre segment- oder personaspezifischen GTM-Playbooks: und nutzen Ihre Reps sie tatsächlich?",
  options: [
    "Keine Playbooks: Jeder Rep fährt seine eigene Show",
    "Es gibt ein generisches Sales-Playbook, aber nicht segmentspezifisch",
    "Playbooks existieren für die Kernsegmente, werden von den Reps aber inkonsistent genutzt",
    "Segment-Playbooks laufen im Onboarding, werden in Deal Reviews geprüft und quartalsweise aktualisiert",
    "Ein modulares Playbook-System nach Segment, Persona und Deal-Stage: mit Nutzungstracking über CRM oder Enablement-Plattform"
  ]
},
{
  id: 1012, pillar: 1, type: "scale",
  title: "Wenn ein neuer GTM-Hire ins Team kommt: wie lange dauert es, bis er strategiekonforme Entscheidungen trifft, ohne beim Leadership-Team nachzufragen?",
  options: [
    "Die meisten neuen Hires verinnerlichen die Strategie nie ganz und bleiben dauerhaft vom Leadership-Team abhängig",
    "Sechs Monate oder länger, bis jemand eigenständig abgestimmte Entscheidungen trifft",
    "Drei bis sechs Monate: Die Strategie ist dokumentiert, aber schwer zu verinnerlichen",
    "Vier bis acht Wochen: Das Onboarding enthält strukturierte Strategy-Sessions mit Entscheidungsrahmen",
    "Zwei bis vier Wochen: Die Strategie ist dokumentiert, wird im Onboarding vermittelt und per strukturierter Orientierungsprüfung verifiziert"
  ]
},
{
  id: 1013, pillar: 1, type: "scale",
  title: "Wie ausgewogen ist Ihre GTM-Strategie zwischen Neukundengewinnung und Expansion bestehender Accounts?",
  options: [
    "Fast ausschließlich auf New Logo fokussiert: Expansion läuft unstrukturiert",
    "Expansion passiert reaktiv, es gibt keine eigene Motion oder Ziele",
    "Getrennte New-Logo- und Expansion-Ziele, aber die Ressourcen sitzen klar bei New Logo",
    "Dedizierte Expansion-Kapazität, -Ziele und -Playbooks neben der New-Logo-Motion",
    "Ein Dual-Engine-Modell: New Logo und Expansion werden unabhängig ressourciert, gemessen und reviewed"
  ]
},
{
  id: 1014, pillar: 1, type: "scale",
  title: "Wie systematisch testen Sie neue GTM-Ansätze, bevor Sie Ressourcen für Skalierung freigeben?",
  options: [
    "Neue Initiativen werden ohne Pilot direkt im großen Stil gelauncht",
    "Ab und zu laufen kleine Tests, aber ohne definierte Erfolgskriterien",
    "Piloten laufen, Ergebnisse werden aber informell und inkonsistent ausgewertet",
    "Pilot-Kriterien, Erfolgsschwellen und Scale-Entscheidungen werden vor dem Start dokumentiert",
    "Ein formelles Test-&-Scale-Playbook: Hypothese, Testkohorte, Messzeitraum und Go/No-Go-Kriterien pro Initiative"
  ]
},
{
  id: 1015, pillar: 1, type: "scale",
  title: "Wie unmittelbar steuert Ihre GTM-Strategie Hiring-Pläne und Capacity-Modelling?",
  options: [
    "Hiring-Entscheidungen sind reaktiv: Nachbesetzungen oder Bauchgefühl der Führung",
    "GTM-Strategie und Hiring-Pläne sind bestenfalls lose gekoppelt",
    "Jahres-Headcount-Pläne referenzieren die GTM-Strategie, werden unterjährig aber nicht aktualisiert",
    "Quartals-Capacity-Reviews übersetzen GTM-Ziele in rollenspezifische Hiring-Pläne",
    "Ein rollierendes Capacity-Modell: Pipeline-Ziele, Ramp-Annahmen und Hiring-Sequenz werden pro Quartal aktualisiert"
  ]
},
{
  id: 1016, pillar: 1, type: "scale",
  title: "Welcher Anteil Ihrer aktuellen Pipeline liegt außerhalb des primären ICP: und wie reagiert das Leadership-Team auf diese Zahl?",
  options: [
    "ICP- vs. Nicht-ICP-Pipeline wird nicht getrackt: alles wird gleich behandelt",
    "Nicht-ICP-Pipeline ist da, wird aber weder gemessen noch gesteuert",
    "Wir tracken sie, akzeptieren Nicht-ICP-Pipeline aber, weil wir den Umsatz brauchen",
    "Nicht-ICP-Pipeline wird getrackt, gesteuert, und Reps werden nicht dafür incentiviert, sie zu verfolgen",
    "ICP-Compliance ist eine Quota-KPI: Reps werden explizit sanktioniert, wenn sie Nicht-ICP-Deals über einem Schwellenwert verfolgen"
  ]
},
{
  id: 1017, pillar: 1, type: "scale",
  title: "Wie stark stützt sich Ihre GTM-Strategie auf validierte Marktdaten statt auf Annahmen des Leadership-Teams?",
  options: [
    "Die Strategie basiert primär auf Gründer- oder Führungsmeinung",
    "Einzelne Kundengespräche fließen ein, aber nicht systematisch",
    "Jährliche VOC- oder Market Research fließt in den Planungszyklus ein",
    "Vor jedem Strategie-Update werden strukturierte Win/Loss-Analysen, Kundeninterviews und Marktdaten geprüft",
    "Die GTM-Strategie sitzt in einer kontinuierlichen Evidenz-Schleife: Buyer Interviews, Deal-Daten und Marktsignale quartalsweise reviewed"
  ]
},
{
  id: 1018, pillar: 1, type: "scale",
  title: "Wie stark wich Ihr tatsächlicher Umsatzmix nach Segment, Motion oder Geografie in den letzten vier Quartalen von Ihrer GTM-Prognose ab?",
  options: [
    "Wir tracken den Umsatzmix nicht gegen strategische Prognosen",
    "Es gibt signifikante Abweichungen, werden aber nicht formell reviewed",
    "Mix-Abweichungen werden in der Jahresplanung besprochen, aber nicht quartalsweise getrackt",
    "Ein Quarterly Review von Ist- vs. Soll-Mix liefert eine dokumentierte Varianzanalyse",
    "Mix-Abweichung ist eine Board-KPI: monatlich getrackt, quartalsweise erklärt, und triggert eine Strategieanpassung, wenn definierte Schwellen überschritten werden"
  ]
},
{
  id: 1019, pillar: 1, type: "scale",
  title: "Wenn im letzten Quartal zwei GTM-Teams um dieselbe Ressource oder Priorität konkurrierten: Wie wurde entschieden: und war die Entscheidung an dokumentierte strategische Kriterien gebunden?",
  options: [
    "Die Strategie beeinflusst Tagesentscheidungen selten: Execution läuft über Dringlichkeit",
    "Die Strategie wird gelegentlich zitiert, steuert aber keine Ressourcenentscheidungen",
    "Die meisten Führungskräfte referenzieren die Strategie in der Planung, aber nicht im operativen Tagesgeschäft",
    "Die Strategie wird genutzt, um Ressourcenkonflikte und Priorisierung zu schlichten",
    "Die GTM-Strategie ist die primäre Entscheidungslinse: Jede wesentliche Ressourcen-, Hiring- und Investitionsentscheidung wird daran geprüft"
  ]
},
{
  id: 1020, pillar: 1, type: "scale",
  title: "Deckt Ihr aktueller GTM-Plan sowohl die 12-Monats-Execution-Ziele als auch die Operating-Model-Änderungen ab, die nötig sind, um die Performance bis 24 Monate zu halten?",
  options: [
    "Die Strategie ist voll auf Short-term gepolt: keine strukturierte Sicht auf das 24-Monats-Operating-Model",
    "Eine Long-term-Richtung existiert informell, ist aber nicht mit aktuellen GTM-Entscheidungen verknüpft",
    "12-Monats-Ziele sind definiert, aber die Implikationen für das 24-Monats-Operating-Model sind nicht explizit geplant",
    "Kurzfristige Ziele und das 24-Monats-Operating-Model sind beide dokumentiert und werden in der Planung geprüft",
    "Eine Dual-Horizon-Strategie steuert GTM-Entscheidungen: 12-Monats-Execution-Ziele und 24-Monats-Capacity-Anforderungen werden parallel gepflegt, und Trade-offs werden explizit entschieden"
  ]
},

/* ===========================================================
   PILLAR 2: MARKET INTELLIGENCE (20 QUESTIONS)
   =========================================================== */

{
  id: 2001, pillar: 2, type: "scale",
  title: "Wie präzise ist Ihr Ideal Customer Profile definiert: und wann wurde es zuletzt gegen Closed-Won-Daten validiert?",
  subtitle: "Bitte für Ihr primäres Umsatzsegment und Ihre primäre GTM-Motion beantworten, sofern eine Frage nicht explizit differenziert.",
  options: [
    "Kein ICP definiert: Wir gehen auf jedes Unternehmen zu, das Interesse zeigt",
    "Ein grobes ICP aus dem Gründer-Gefühl heraus, nicht validiert",
    "Ein ICP-Dokument existiert, wurde aber seit über einem Jahr nicht mehr gegen Deal-Daten validiert",
    "ICP-Kriterien wurden in den letzten 12 Monaten gegen Closed-Won-Kohorten validiert",
    "Das ICP ist ein lebendes Scoring-Modell: firmografische, technografische und Behavioral Signals werden quartalsweise gegen Revenue-Daten validiert"
  ]
},
{
  id: 2002, pillar: 2, type: "scale",
  title: "Wie wird Ihre Target Account List für Sales und Marketing erstellt, gepflegt und priorisiert?",
  options: [
    "Keine formelle Target Account List: Reps sourcen nach eigenem Ermessen",
    "Eine statische Liste, einmal erstellt, wird nicht regelmäßig reviewed oder aktualisiert",
    "Eine Liste gibt es, aber Scoring und Priorisierung sind von Rep zu Rep inkonsistent",
    "Eine datengetriebene Account-Liste, quartalsweise aktualisiert, mit klaren Scoring-Kriterien",
    "Eine dynamische, gestaffelte Account-Liste: monatlich aktualisiert, nach ICP-Fit und Buying Signals gescored, mit festem Owner pro Account"
  ]
},
{
  id: 2003, pillar: 2, type: "scale",
  title: "Wie erfassen, verdichten und nutzen Sie Insights zu Kunden-Pain-Points und Kaufauslösern?",
  options: [
    "Kein strukturierter Prozess: Insights kommen aus informellen Sales-Gesprächen",
    "Kundenfeedback wird ad hoc gesammelt, aber selten verdichtet",
    "VOC-Calls oder -Surveys laufen gelegentlich, Ergebnisse werden aber nicht konsistent genutzt",
    "Ein strukturiertes VOC-Programm mit dokumentierten Findings, die in der GTM-Planung geprüft werden",
    "Eine kontinuierliche Customer-Intelligence-Loop: Interviews, Deal-Signale und Support-Daten werden monatlich verdichtet und reviewed"
  ]
},
{
  id: 2004, pillar: 2, type: "scale",
  title: "Wie konsistent wird Ihr Segmentierungsmodell über Sales, Marketing und Product hinweg angewandt?",
  options: [
    "Keine Segmentierung: Alle Accounts werden gleich behandelt, unabhängig von Größe oder Fit",
    "Segmentierung existiert konzeptionell, schlägt sich aber nicht in Routing, Pricing oder Messaging nieder",
    "Segmente sind definiert, werden aber inkonsistent genutzt: Teams arbeiten mit unterschiedlichen Definitionen",
    "Segmentierung ist im CRM verankert, steuert Routing und Campaign Targeting, jährlich reviewed",
    "Eine einheitliche Segmentierungs-Architektur steuert CRM, Pricing, Campaign Targeting und Capacity Planning: quartalsweise reviewed und konsistent angewandt"
  ]
},
{
  id: 2005, pillar: 2, type: "scale",
  title: "Wie beobachten Sie Markttrends und Competitor-Moves: und wie schnell erreichen Insights die Entscheider?",
  options: [
    "Kein Monitoring: Wir hören von Competitor-Moves, wenn Prospects sie erwähnen",
    "Gelegentliches LinkedIn- oder News-Scanning durch Einzelpersonen, nicht systematisch geteilt",
    "Competitive- und Market-Monitoring findet statt, aber weder strukturiert noch regelmäßig",
    "Eine definierte Monitoring-Kadenz mit Ergebnissen, die monatlich an die GTM-Owner gehen",
    "Ein kontinuierlicher Market-Intelligence-Feed: Quellen werden getrackt, Signale priorisiert und Briefings in klarer Kadenz ans Leadership-Team geliefert"
  ]
},
{
  id: 2006, pillar: 2, type: "scale",
  title: "Nennen Sie die zwei größten Hindernisse, die Ihre Zielkäufer an der Adoption Ihres Produkts hindern. Basieren diese auf dokumentierten Käuferinterviews oder werden sie aus Vertriebsfeedback abgeleitet?",
  options: [
    "Kein dokumentiertes Verständnis: Sales Reps gehen davon aus zu wissen, was zählt",
    "Anekdotisches Verständnis von erfahrenen Sales Reps, nicht kodifiziert",
    "Entscheidungskriterien informell in CRM-Notizen erfasst, aber nicht synthetisiert",
    "Entscheidungskriterien pro Segment dokumentiert, durch Win/Loss-Interviews validiert",
    "Eine validierte Entscheidungskriterienkarte: nach Segment und Deal-Größe gewichtet, bei jedem quartalsweisen Win/Loss-Review aktualisiert"
  ]
},
{
  id: 2007, pillar: 2, type: "scale",
  title: "Wie oft hat in Ihren letzten 10 verlorenen Deals eine Blocker-Persona die Entscheidung entgleisen lassen: und ist dieses Muster in einer formellen Einflusskarte dokumentiert?",
  options: [
    "Kein Persona-Mapping: Sales Reps zielen auf jeden ab, der auf Outreach reagiert",
    "Informelles Bewusstsein für Schlüsselpersonas bei erfahrenen Sales Reps, aber nicht dokumentiert",
    "Ein primäres Käuferpersona ist dokumentiert, aber Champion- und Blocker-Rollen sind schlecht verstanden",
    "Eine Multi-Persona-Karte existiert pro Segment, validiert durch Deal Reviews und Win/Loss-Interviews",
    "Eine validierte Einflusskarte dokumentiert Champion-, Economic-Buyer- und Blocker-Rollen nach Segment und Deal-Größe: quartalsweise aktualisiert und in der Deal-Qualifizierung genutzt"
  ]
},
{
  id: 2008, pillar: 2, type: "scale",
  title: "Können Sie die zwei größten Hindernisse nennen, die Ihre Zielkäufer von der Adoption Ihres Produkts abhalten: und basieren diese auf Käuferinterviews oder werden sie aus verlorenen Deals abgeleitet?",
  options: [
    "Keine Erkenntnisse: Adoptionshindernisse werden nicht untersucht",
    "Annahmen basierend auf Vertriebseinwänden existieren, nicht extern validiert",
    "Einige Adoptionshindernisse wurden durch Analyse verlorener Deals identifiziert",
    "Adoptionshindernisse dokumentiert und durch Käuferinterviews und Churn-Analyse validiert",
    "Ein dokumentiertes Modell der Adoptionshindernisse: nach Segment, Persona und Deal-Phase, quartalsweise mit Markt- und Deal-Daten aktualisiert"
  ]
},
{
  id: 2009, pillar: 2, type: "scale",
  title: "Was veranlasst Kunden, von Wettbewerbstools zu Ihrem zu wechseln: oder von Ihrem weg: und wie genau wissen Sie das?",
  options: [
    "Keine strukturierten Erkenntnisse zu Wechseldynamiken",
    "Informelles Verständnis aus einigen Vertriebsanekdoten",
    "Wechselauslöser durch gelegentliche Win/Loss-Gespräche identifiziert",
    "Wechselauslöser pro Segment dokumentiert, durch strukturierte Win/Loss-Interviews validiert",
    "Ein Modell der Wechselauslöser-Intelligenz: Verdrängungsmuster von Wettbewerbern werden getrackt und quartalsweise in der GTM-Planung überprüft"
  ]
},
{
  id: 2010, pillar: 2, type: "scale",
  title: "Verfolgt Ihr Team makroökonomische und Branchentrends, die die Budgets der Käufer beeinflussen: und fließt das direkt in Ihre GTM-Prioritäten ein?",
  options: [
    "Kein Bewusstsein: Makrotrends sind nicht Teil der GTM-Planung",
    "Allgemeines Bewusstsein, aber nicht mit Deal- oder Segmentstrategie verknüpft",
    "Makrokontext wird in Leadership-Meetings besprochen, aber nicht operationalisiert",
    "Makrotrends in die jährliche GTM-Planung mit expliziten Szenarioannahmen integriert",
    "Makrosignale werden kontinuierlich getrackt und fließen direkt in die Segmentpriorisierung und Messaging-Anpassungen ein"
  ]
},
{
  id: 2011, pillar: 2, type: "scale",
  title: "Wie gut definiert und operativ konsistent ist Ihr Marktsegmentierungsmodell über Vertrieb, Marketing und Produkt hinweg?",
  options: [
    "Keine Segmentierung: Alle Accounts werden gleich behandelt",
    "Segmentierung existiert konzeptionell, spiegelt sich aber nicht in Prozessen oder Tools wider",
    "Segmente sind definiert, werden aber teamübergreifend inkonsistent angewandt",
    "Segmentierung ist im CRM kodifiziert, wird im Routing genutzt und jährlich überprüft",
    "Eine einheitliche Segmentierungsarchitektur: konsistent über CRM, Kampagnen-Targeting, Pricing und Kapazitätsmodelle hinweg, quartalsweise überprüft"
  ]
},
{
  id: 2012, pillar: 2, type: "scale",
  title: "Wie eng stimmt Ihre ICP-Definition mit den Segmenten überein, die den höchsten ARR, niedrigsten CAC und besten NRR generieren?",
  options: [
    "Keine Verbindung: ICP ist nicht mit finanziellen Leistungsdaten verknüpft",
    "Grobe Annahmen darüber, welche Segmente am besten performen, nicht validiert",
    "ICP und Umsatzdaten werden jährlich verglichen, aber nicht operationalisiert",
    "ICP-Scoring ist anhand von ARR-, CAC- und NRR-Daten kalibriert, die letztes Quartal überprüft wurden",
    "ICP ist ein umsatzgewichtetes Modell: jedes Quartal mit Closed-Won-Kohortenanalyse und Effizienzkennzahlen aktualisiert"
  ]
},
{
  id: 2013, pillar: 2, type: "scale",
  title: "Welche Personas beschleunigen am konsistentesten die Deal-Geschwindigkeit in Ihren Top-Accounts: und ist dieses Muster getrennt von Ihrer Blocker-Analyse dokumentiert?",
  options: [
    "Kein Champion- oder Beschleuniger-Mapping: Alle Personas werden in der Deal-Ausführung gleich behandelt",
    "Erfahrene Sales Reps wissen informell, wen sie einbinden müssen, um Deals zu beschleunigen, aber es ist nicht dokumentiert",
    "Ein primäres Champion-Persona ist dokumentiert, aber die Beschleunigungsdynamik wird nicht getrennt von Blockern analysiert",
    "Beschleuniger- und Blocker-Personas sind pro Segment dokumentiert und werden in der Deal-Qualifizierung und im Coaching genutzt",
    "Eine vollständige Einflussarchitektur: Champion-Beschleuniger- und Blocker-Profile pro Segment und Deal-Größe dokumentiert, quartalsweise durch Win/Loss-Analyse validiert und in Vertriebscoaching und Deal Reviews eingebettet"
  ]
},
{
  id: 2014, pillar: 2, type: "scale",
  title: "Wie systematisch liefert Ihr Win/Loss-Programm Erkenntnisse, die verändern, wie Sie verkaufen oder positionieren?",
  options: [
    "Kein Win/Loss-Programm: Ergebnisse werden nicht formell überprüft",
    "Sales Reps protokollieren Win/Loss-Gründe im CRM, aber die Ergebnisse werden nie analysiert",
    "Win/Loss-Daten werden informell überprüft, gelegentlich tauchen Anekdoten auf",
    "Ein strukturiertes Win/Loss-Programm mit quartalsweiser Synthese und dokumentierten GTM-Maßnahmen",
    "Win/Loss-Erkenntnisse treiben definierte Änderungen an Playbooks, Messaging und Wettbewerbspositionierung jedes Quartal"
  ]
},
{
  id: 2015, pillar: 2, type: "scale",
  title: "Welche Kundensegmente generieren Ihren höchsten Lifetime Value: und treibt dieser Befund direkt Ihre ICP-Priorisierungs- und Targeting-Entscheidungen?",
  options: [
    "Keine LTV-Daten: Alle Kunden werden als gleich wertvoll behandelt",
    "Grobes Bewusstsein basierend auf ARR-Größe, nicht anhand von Retention- oder Expansionsdaten validiert",
    "LTV-Schätzungen existieren, sind aber nicht segmentiert oder im Targeting operationalisiert",
    "LTV pro Segment wird jährlich berechnet und fließt in die ICP-Priorisierung ein",
    "LTV ist ein lebender Segmentierungsinput: quartalsweise aktualisiert, treibt Account-Scoring, Kapazitätsallokation und Pricing-Entscheidungen"
  ]
},
{
  id: 2016, pillar: 2, type: "scale",
  title: "Wie gut verstehen Sie Ihr Partner- und Channel-Ökosystem: wer treibt Deals, wer blockiert sie und warum?",
  options: [
    "Keine Partner-Intelligenz: Ökosystemdynamiken sind unbekannt",
    "Informelle Beziehungen zu einigen Partnern, kein systematischer Einblick",
    "Partner-Pipeline wird getrackt, aber der Einfluss auf Deal-Ergebnisse wird nicht analysiert",
    "Ein dokumentiertes Partner-Intelligenz-Modell, das in quartalsweisen Partner-Business-Reviews überprüft wird",
    "Eine quantifizierte Ökosystemkarte: Partner-gesourcte vs. Partner-beeinflusste Pipeline, Win Rates und Cycle Times werden monatlich getrackt und überprüft"
  ]
},
{
  id: 2017, pillar: 2, type: "scale",
  title: "Wie genau verstehen Sie die Preissensitivität und Zahlungsbereitschaft über Ihre wichtigsten Kundensegmente hinweg?",
  options: [
    "Keine Pricing-Intelligenz: Der Preis wird durch Kosten-Plus oder Wettbewerbs-Benchmarking festgelegt",
    "Anekdotisches Bewusstsein aus Deals, die am Preis gescheitert sind",
    "Preissensitivität durch gelegentliche Käuferinterviews bewertet",
    "Zahlungsbereitschaft durch strukturierte Forschung und Analyse der Abschlussrate nach Preisband validiert",
    "Ein Preiselastizitätsmodell auf Segmentebene: durch kontrollierte Tests, Win/Loss-Daten und Käuferinterviews validiert, jährlich überprüft"
  ]
},
{
  id: 2018, pillar: 2, type: "scale",
  title: "Wie tracken Sie aufkommende Wettbewerber und potenzielle Markt-Disruptoren, bevor sie in Ihren Deals auftauchen?",
  options: [
    "Aufkommende Wettbewerber tauchen erst auf, wenn Interessenten sie in Gesprächen erwähnen",
    "Ad-hoc-Beobachtung durch Vertriebsverantwortliche ohne formelles Reporting",
    "Ein periodischer Wettbewerbs-Scan wird durchgeführt, aber nicht in definierter Kadenz",
    "Ein quartalsweises Review aufkommender Wettbewerber wird durchgeführt und mit der GTM-Führung geteilt",
    "Ein kontinuierliches Bedrohungsüberwachungsprogramm: Neue Marktteilnehmer werden getrackt, Briefings verteilt und Playbooks proaktiv aktualisiert"
  ]
},
{
  id: 2019, pillar: 2, type: "scale",
  title: "Wie direkt ist Ihre Produkt-Roadmap mit quantifizierten Marktbelegen verknüpft und nicht nur mit internen Meinungen?",
  options: [
    "Die Roadmap wird durch Engineering-Kapazität und Führungsprioritäten gesteuert, nicht durch Marktbelege",
    "Markt-Inputs werden informell gesammelt, beeinflussen aber selten die Roadmap-Sequenzierung",
    "Kundenanfragen werden protokolliert und in der Planung referenziert, aber nicht systematisch gewichtet",
    "Roadmap-Entscheidungen sind an dokumentierte Marktsignale mit expliziter Priorisierungsbegründung gebunden",
    "Jedes Roadmap-Element hat einen dokumentierten Markt-Evidenz-Fall: Kundenfrequenz, Deal-Auswirkung und Retention-Signal, in der Planung überprüft"
  ]
},
{
  id: 2020, pillar: 2, type: "scale",
  title: "Welcher Prozentsatz Ihrer abgeschlossenen Deals im letzten Quartal involvierte einen Partner: und wissen Sie, ob die Partnerbeteiligung jeden Abschluss beschleunigt oder verkompliziert hat?",
  options: [
    "Partnerbeteiligung wird nicht getrackt: Wir wissen nicht, welche Deals Partner involvierten oder wie sie die Ergebnisse beeinflussten",
    "Wir wissen ungefähr, welche Deals Partnerbeteiligung hatten, haben aber die Auswirkung auf Abschlussrate oder Cycle Time nicht analysiert",
    "Deals mit Partnerbeteiligung werden getrackt, aber Unterschiede bei Win Rate und Cycle Time wurden nicht formell analysiert",
    "Partner-Deal-Tracking existiert und wir haben Win Rate und Cycle Time vs. Direkt-Deals verglichen: quartalsweise überprüft",
    "Ein lebendes Partner-Performance-Modell: Partner-gesourcte vs. Partner-beeinflusste Pipeline, Win-Rate-Delta und Cycle Time-Auswirkung werden monatlich getrackt und in Revenue-Meetings überprüft"
  ]
},

/* ===========================================================
   PILLAR 3: PRODUCT MARKETING (20 QUESTIONS)
   =========================================================== */

{
  id: 3001, pillar: 3, type: "scale",
  title: "Wenn ein Interessent fragt 'Was machen Sie und warum ist das für mich relevant?', wie konsistent liefern Ihre Sales Reps und Ihre Website dieselbe prägnante Antwort?",
  subtitle: "Bitte für Ihr primäres Umsatzsegment und Ihre primäre GTM-Motion beantworten, sofern eine Frage nicht explizit differenziert.",
  options: [
    "Jeder Rep und jede Seite gibt eine andere Antwort: Keine Konsistenz",
    "Eine Kernbotschaft existiert, aber Sales Reps weichen häufig ab oder improvisieren",
    "Messaging ist in schriftlichen Materialien konsistent, aber nicht in Live-Gesprächen",
    "Kern-Messaging ist kodifiziert, geschult und wird konsistent in Calls und Materialien verwendet",
    "Messaging wird systematisch getestet, quartalsweise aktualisiert und ist zertifizierungspflichtig, bevor Sales Reps es in Deals nutzen"
  ]
},
{
  id: 3002, pillar: 3, type: "scale",
  title: "Haben Ihre Sales Reps in den letzten 10 überprüften Vertriebsgesprächen dieselbe Kern-Differenzierungsbotschaft vermittelt: oder variierte die Story je nach Person, Kanal und Tag?",
  options: [
    "Keine formelle Positionierung: Das Unternehmen beschreibt sich unterschiedlich, je nachdem wen Sie fragen",
    "Ein Positionierungsstatement existiert, spiegelt sich aber nicht konsistent in Vertrieb oder Marketing wider",
    "Positionierung ist dokumentiert und wird im Marketing genutzt, aber im Vertrieb nicht durchgesetzt",
    "Positionierung ist dokumentiert, geschult und in allen wichtigen Touchpoints reflektiert",
    "Positionierung ist durch Käuferforschung validiert, in einem Kategorie-Narrativ verankert und in jeden GTM-Asset und jede Motion eingebettet"
  ]
},
{
  id: 3003, pillar: 3, type: "scale",
  title: "Woher wissen Sie, dass Ihr Value Proposition tatsächlich bei Ihren ICP-Segmenten resoniert, und welche Evidenz stützt das?",
  options: [
    "Wir nehmen an, dass es resoniert: Keine formelle Validierung wurde durchgeführt",
    "Vertriebsanekdoten deuten auf Resonanz hin, aber es wurde nicht formell getestet",
    "Einige Kundeninterviews haben Resonanz bestätigt, aber nicht segmentübergreifend",
    "Value Proposition durch strukturierte Käuferinterviews und Win/Loss-Analyse pro Segment validiert",
    "Resonanz wird kontinuierlich getestet: Message-Lift wird in der Deal-Conversion, Interviews und A/B-Tests pro Segment getrackt"
  ]
},
{
  id: 3004, pillar: 3, type: "scale",
  title: "Welcher Prozentsatz Ihrer letzten 10 Closed-Won-Deals enthielt einen dokumentierten, vom Kunden genannten Grund, der direkt mit Ihrer Kern-Differenzierungsbotschaft übereinstimmte?",
  options: [
    "Wir erfassen nicht, warum Kunden sagen, dass sie bei uns gekauft haben",
    "Wir haben einige Gewinn-Notizen, die aber nicht gegen unsere Differenzierungsbotschaft kodiert sind",
    "Ungefähr ein Viertel der Gewinne referenziert unsere Kernbotschaft: Der Rest nennt andere Gründe",
    "Die Hälfte oder mehr der Gewinne referenziert unsere Kern-Differenzierungsbotschaft in dokumentierten Gewinn-Notizen",
    "Über 70 % der Closed-Won-Deals enthalten einen vom Kunden genannten Grund, der mit unserer dokumentierten Kerndifferenzierung übereinstimmt: quartalsweise getrackt und überprüft"
  ]
},
{
  id: 3005, pillar: 3, type: "scale",
  title: "Wie systematisch wird Messaging auf verschiedene Käuferpersonas zugeschnitten, nicht nur nach Seniorität, sondern nach rollenspezifischem Pain und Sprache?",
  options: [
    "Eine generische Botschaft für alle Personas",
    "Messaging wird von erfahrenen Sales Reps informell angepasst, aber nicht kodifiziert",
    "Persona-spezifische Gesprächspunkte existieren, werden aber nicht konsistent genutzt",
    "Dokumentiertes Persona-Messaging nach primären Käuferrollen, eingebettet in Playbooks und Präsentationen",
    "Eine Persona-Messaging-Architektur: Rollenspezifischer Pain, Sprache und Belege durch Interviews validiert und in alle Assets eingebettet"
  ]
},
{
  id: 3006, pillar: 3, type: "scale",
  title: "Wie konsistent nutzen Sales Reps die neuesten genehmigten Messaging-Materialien, ohne sie zu modifizieren oder zu ersetzen?",
  options: [
    "Sales Reps nutzen eigene Materialien: Standardpräsentationen werden selten geöffnet",
    "Sales Reps nutzen genehmigte Materialien gelegentlich, passen aber stark und unvorhersehbar an",
    "Die meisten Sales Reps nutzen genehmigte Materialien, aber mit inkonsistenten Modifikationen",
    "Genehmigte Materialien werden konsistent mit geringfügigen, erlaubten Anpassungen genutzt",
    "Eine kontrollierte Asset-Bibliothek: Versioniert, Nutzung im CRM oder der Enablement-Plattform getrackt, Abweichungen in Deal Reviews gemeldet"
  ]
},
{
  id: 3007, pillar: 3, type: "scale",
  title: "Woher wissen Sie, welche spezifischen Botschaften, Belege oder Framings konsistent Deals voranbringen?",
  options: [
    "Keine Erkenntnisse: Wir tracken nicht, welche Botschaften die Deal-Progression treiben",
    "Anekdotisches Feedback von erfahrenen Sales Reps, nicht validiert oder systematisiert",
    "Win/Loss-Notizen enthalten Message-Referenzen, werden aber nicht analysiert",
    "Message-Performance wird in der Win/Loss-Analyse und in Coaching-Sitzungen überprüft",
    "Ein Message-Intelligence-System: Win/Loss nach Message-Thema kodiert, Conversion-Lift nach Asset und Argumentation getrackt"
  ]
},
{
  id: 3008, pillar: 3, type: "scale",
  title: "Wie umfassend und nutzbar ist Ihre Bibliothek an Belegen, Fallstudien und ROI-Evidenz, und wie aktuell ist sie?",
  options: [
    "Keine formelle Belege-Bibliothek: Sales Reps verlassen sich auf Erinnerung oder generische Testimonials",
    "Einige Fallstudien existieren, sind aber veraltet oder nicht segmentspezifisch",
    "Eine Belege-Bibliothek existiert, ist aber nicht nach Segment, Persona oder Anwendungsfall organisiert",
    "Eine kuratierte Belege-Bibliothek nach Segment und Anwendungsfall organisiert, quartalsweise überprüft",
    "Eine strategische Belege-Architektur: Fallstudien, ROI-Rechner und Drittanbietervalidierungen nach Segment, Persona und Deal-Phase indexiert"
  ]
},
{
  id: 3009, pillar: 3, type: "scale",
  title: "Welche Funktionen werden in Ihrer aktuellen Demo in den ersten 10 Minuten gezeigt: und basiert diese Reihenfolge auf validierten Daten darüber, was die Conversion zum nächsten Schritt antreibt?",
  options: [
    "Kein systematisches Verständnis: Funktionen werden basierend auf dem gezeigt, was der Sales Reps gerne zeigt",
    "Erfahrene Sales Reps haben ein informelles Bewusstsein dafür, was funktioniert, aber es ist weder dokumentiert noch geteilt",
    "Funktionsresonanz wird anekdotisch durch Deal-Feedback getrackt, aber nicht systematisiert",
    "Funktionsresonanz nach Segment und Deal-Phase ist durch Win/Loss- und Demo-Analyse dokumentiert",
    "Eine Funktions-zu-Deal-Phase-Karte existiert: durch Käuferinterviews und Progressionsdaten validiert, quartalsweise aktualisiert und zur Steuerung der Demo-Struktur genutzt"
  ]
},
{
  id: 3010, pillar: 3, type: "scale",
  title: "Welcher Prozentsatz Ihrer Sales Reps hat die letzte Messaging-Zertifizierung bestanden, und wann wurde diese Zertifizierung zuletzt aktualisiert, um Ihre aktuelle Positionierung widerzuspiegeln?",
  options: [
    "Keine Messaging-Zertifizierung existiert",
    "Eine Zertifizierung existiert, aber weniger als die Hälfte der Sales Reps hat sie absolviert",
    "Die meisten Sales Reps haben die Zertifizierung absolviert, aber sie wurde seit über 12 Monaten nicht aktualisiert",
    "Über 80 % der Sales Reps sind mit aktuellem Messaging innerhalb der letzten sechs Monate zertifiziert",
    "Zertifizierung ist verpflichtend: Sales Reps können ohne Bestehen keine Quota tragen, Nachtestung bei jeder wesentlichen Positionierungsaktualisierung, Bestehensquoten pro Manager getrackt"
  ]
},
{
  id: 3011, pillar: 3, type: "scale",
  title: "Wie viele Ihrer letzten 10 Demos führten zu einem dokumentierten nächsten Schritt: und tracken Sie, welche Demo-Elemente dieses Ergebnis bewirkt haben?",
  options: [
    "Nächste Schritte nach Demos sind informell: Es gibt kein Tracking der Conversion Rate oder was sie antreibt",
    "Einige Sales Reps dokumentieren nächste Schritte, aber die Demo-zu-Ergebnis-Korrelation wird nicht systematisch getrackt",
    "Demo-zu-nächster-Schritt-Conversion wird als Zahl getrackt, aber welche Demo-Elemente die Ergebnisse antrieben, ist unbekannt",
    "Demo-Conversion Rate wird pro Segment getrackt und im Coaching überprüft, mit gewisser Korrelation zu Demo-Inhalt und -Reihenfolge",
    "Ein gesteuertes Demo-Performance-System: Conversion Rate pro Rep und Segment getrackt, Demo-Elemente mit Ergebnissen korreliert, und Erkenntnisse zur quartalsweisen Aktualisierung der Standard-Demo-Struktur genutzt"
  ]
},
{
  id: 3012, pillar: 3, type: "scale",
  title: "Wie viel Einfluss hat Product Marketing auf die Produkt-Roadmap-Priorisierung, und wie wird dieser Einfluss ausgeübt?",
  options: [
    "PMM hat keinen Platz in Roadmap-Diskussionen",
    "PMM liefert gelegentlich Input, der aber selten die Priorisierung ändert",
    "PMM präsentiert Marktbelege in Planungsreviews mit inkonsistentem Einfluss",
    "PMM betreibt einen strukturierten Markt-Input-Prozess mit dokumentiertem Einfluss auf Roadmap-Entscheidungen",
    "PMM ist formeller Mitverantwortlicher der Roadmap-Priorisierung: Marktbelege sind ein erforderlicher Input für jede wesentliche Feature-Entscheidung"
  ]
},
{
  id: 3013, pillar: 3, type: "scale",
  title: "Wie oft erreicht ein Deal eine späte Phase (Angebot oder Beschaffung) und stirbt dann ohne eine dokumentierte Erklärung, auf die Ihr Team reagiert hat?",
  options: [
    "Späte Deal-Verluste sind häufig und Ursachen werden nie systematisch analysiert",
    "Wir besprechen späte Verluste informell, verfolgen aber keine Muster",
    "Gründe für späte Verluste werden protokolliert, aber Analyse findet höchstens jährlich statt",
    "Späte Verluste lösen innerhalb von zwei Wochen ein strukturiertes Review mit dokumentierter Ursachenanalyse aus",
    "Die Rate späte Verluste ist ein KPI: Jeder Verlust über einem Deal-Größen-Schwellenwert löst ein dokumentiertes Review aus, Ursachen werden kodiert, und Muster treiben monatliche PMM- und Vertriebsanpassungen"
  ]
},
{
  id: 3014, pillar: 3, type: "scale",
  title: "Wie gut ausgestattet und durchgeführt sind Ihre Produktlaunch-Motions, von der internen Readiness bis zur Marktaktivierung?",
  options: [
    "Launches finden ohne definierten Prozess statt: GTM ist erst nach dem Release vorbereitet",
    "Etwas Koordination existiert, aber GTM-Readiness ist inkonsistent",
    "Launches folgen einem Basisprozess, aber die Aktivierung im Feld ist oft unvollständig",
    "Ein definierter Launch-Prozess mit internem Enablement, Asset-Bereitstellung und Marktaktivierungs-Checkpoints",
    "Voll gesteuerte Launch-Motion: Readiness-Scorecard, Enablement-Zertifizierung und Launch-zu-Pipeline-Messung für jeden Launch"
  ]
},
{
  id: 3015, pillar: 3, type: "scale",
  title: "Wie hoch ist die Conversion Rate Ihrer Website von qualifiziertem Besucher zu gebuchtem Meeting oder Trial, und wie steht das im Vergleich zum Vorquartal?",
  options: [
    "Wir tracken die Besucher-zu-Meeting-Conversion auf der Website nicht",
    "Die Conversion wird getrackt, aber wir wissen nicht, wie ein guter Benchmark aussieht",
    "Wir tracken es, aber die Conversion ist flach oder rückläufig ohne einen dokumentierten Verbesserungsplan",
    "Besucher-zu-Meeting-Conversion wird monatlich getrackt und treibt quartalsweise Website-Optimierung",
    "Website-Conversion ist ein gesteuerter KPI: wöchentlich getrackt, kontinuierlich A/B-getestet und quartalsweise gegen Kategorie-Benchmarks überprüft mit dokumentierten Verbesserungszielen"
  ]
},
{
  id: 3016, pillar: 3, type: "scale",
  title: "Wie systematisch getrackt, dokumentiert und verteilt Ihre PMM-Funktion Wettbewerbsintelligenz an den Vertrieb?",
  options: [
    "Keine Wettbewerbs-PMM-Funktion: Wettbewerbsantworten werden in Deals improvisiert",
    "Battlecards existieren, sind aber veraltet und werden nicht konsistent genutzt",
    "Wettbewerbsmaterialien werden gelegentlich aktualisiert, wenn sich etwas Wesentliches ändert",
    "Ein Wettbewerbs-PMM-Programm mit quartalsweisen Battlecard-Updates und Vertriebsschulungen",
    "Ein lebendes Wettbewerbsintelligenz-System: eigenverantwortlich geführt, monatlich aktualisiert, in Onboarding und Deal Reviews eingebettet, mit verfolger Nutzung durch Sales Reps"
  ]
},
{
  id: 3017, pillar: 3, type: "scale",
  title: "Wenn ein Deal in der Endphase verloren wird (nach Angebotsabgabe), wie oft war der genannte Grund etwas, das Ihr PMM-Team hätte adressieren können?",
  options: [
    "Wir analysieren Endphasen-Verluste nicht auf Messaging- oder Positionierungsebene",
    "Gelegentlich besprechen wir Gründe für späte Verluste informell",
    "Wir überprüfen späte Verluste quartalsweise, aber PMM ist nicht Teil des Reviews",
    "PMM nimmt an Reviews später Verluste teil und verantwortet eine dokumentierte Maßnahme, wenn Messaging beigetragen hat",
    "PMM führt quartalsweise ein Endphasen-Verlust-Audit durch: Jeder Verlust wird nach Message-Fehlertyp, Belege-Lücke oder Wettbewerbspositionierungsschwäche kodiert, mit dokumentierter Abhilfemaßnahme"
  ]
},
{
  id: 3018, pillar: 3, type: "scale",
  title: "Wie überzeugend und konsistent werden Ihre Demo- und Präsentationsmaterialien in Live-Käuferinteraktionen genutzt?",
  options: [
    "Keine Standard-Demo: Jeder Rep erstellt seine eigene",
    "Eine Standard-Demo existiert, aber Sales Reps weichen in der Praxis erheblich ab",
    "Eine Referenz-Demo existiert und wird als Ausgangspunkt genutzt, aber die Konsistenz ist gering",
    "Ein standardisiertes Demo-Framework mit rollenspezifischen Varianten, geschult und zertifiziert bevor Sales Reps live gehen",
    "Ein Demo-Betriebssystem: Standardstruktur, Segmentvarianten, Nutzung getrackt und quartalsweise basierend auf Win/Loss-Daten aktualisiert"
  ]
},
{
  id: 3019, pillar: 3, type: "scale",
  title: "Wie stark trägt Product Marketing messbar zu Pipeline, Win Rate und Deal-Geschwindigkeits-Ergebnissen bei?",
  options: [
    "PMM-Einfluss auf den Umsatz wird nicht gemessen",
    "PMM-Beitrag wird qualitativ besprochen, aber nicht mit Deal-Kennzahlen verknüpft",
    "Einige Asset-Nutzungs- und Kampagnen-Attributionsdaten existieren, werden aber nicht systematisch überprüft",
    "PMM berichtet quartalsweise über Pipeline-Einfluss, Win Rate nach Asset und Message-Performance",
    "PMM betreibt ein Revenue-Impact-Dashboard: Win Rate nach Segment, Asset-Nutzung, Message-Lift und Launch-zu-Pipeline-Korrelation werden monatlich getrackt"
  ]
},
{
  id: 3020, pillar: 3, type: "scale",
  title: "Ordnen Sie Ihren Content entlang der Buyer Journey ein: Welche Phase hat heute die schwächste Abdeckung: und haben Sie einen dokumentierten Plan, um diese Lücke zu schließen?",
  options: [
    "Messaging existiert nur für die Vertriebsphase: Awareness- und Post-Sale-Content fehlt",
    "Etwas Content deckt mehrere Phasen ab, ist aber fragmentiert und nicht mit einer Buyer Journey verknüpft",
    "Kernphasen sind abgedeckt, aber es gibt Lücken bei Spätphasen-Belegen und Post-Sale-Wertkommunikation",
    "Eine dokumentierte Content-Map deckt alle primären Käuferphasen von Awareness bis Verlängerung für die Hauptsegmente ab",
    "Eine vollständige Buyer-Journey-Content-Architektur: Jede Phase nach Segment und Persona gemappt, Aktualität getrackt, Lücken in der quartalsweisen PMM-Planung priorisiert und Performance nach Stage-Conversion gemessen"
  ]
},

/* ===========================================================
   PILLAR 4: DEMAND GENERATION (20 QUESTIONS)
   =========================================================== */

{
  id: 4001, pillar: 4, type: "scale",
  title: "Wie explizit ist Ihre Demand-Generation-Strategie definiert: Kanäle, Ziele, Budgets und Erfolgskennzahlen: und wann wurde sie zuletzt überprüft?",
  subtitle: "Bitte für Ihr primäres Umsatzsegment und Ihre primäre GTM-Motion beantworten, sofern eine Frage nicht explizit differenziert.",
  options: [
    "Keine dokumentierte Strategie: DG-Aktivitäten werden basierend auf Verfügbarkeit oder Gewohnheit gewählt",
    "Ein grober Kanalplan existiert, aber ohne Budgetallokation oder Leistungsziele",
    "Ein Strategiedokument existiert, wurde aber seit über sechs Monaten nicht formell überprüft",
    "Eine dokumentierte DG-Strategie, quartalsweise mit kanalspezifischen Leistungszielen überprüft",
    "Eine vollständig operationalisierte DG-Strategie: Kanalmix, Budget, Pipeline-Ziele und Review-Kadenz sind alle dokumentiert und steuern die Ausführung"
  ]
},
{
  id: 4002, pillar: 4, type: "scale",
  title: "Welcher Anteil Ihrer qualifizierten Pipeline stammt aus Inbound-Kanälen, und wie konsistent hält sich das Quartal für Quartal?",
  options: [
    "Inbound trägt keine nennenswerte Pipeline bei: Es ist ein angestrebter Kanal",
    "Inbound generiert einige Leads, aber die Qualität ist niedrig und das Volumen unvorhersehbar",
    "Inbound generiert qualifizierte Leads, aber das Volumen schwankt erheblich von Quartal zu Quartal",
    "Inbound liefert konsistent qualifizierte Pipeline gegen definierte Ziele pro Quartal",
    "Inbound ist eine zuverlässige, gemessene Pipeline-Engine: Beitrag nach Kanal, Segment und Conversion-Stufe monatlich getrackt"
  ]
},
{
  id: 4003, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "Wie vorhersagbar und wiederholbar ist Ihre Outbound-Motion bei der Generierung qualifizierter Pipeline, und wie wird das gemessen?",
  options: [
    "Kein strukturiertes Outbound: Sales Reps prospecten eigenständig ohne gemeinsamen Ansatz",
    "Outbound existiert, aber die Ergebnisse sind hochvariabel und werden nicht systematisch gemessen",
    "Outbound generiert Pipeline, aber Sequenzierung, Messaging und Kadenz sind inkonsistent",
    "Eine standardisierte Outbound-Motion mit definierten Sequenzen, Ziel-Accounts und Pipeline-Zielen, die wöchentlich überprüft wird",
    "Voll instrumentierte Outbound-Engine: Aktivitäts-, Antwort- und Pipeline-Kennzahlen werden täglich getrackt, mit quartalsweisem A/B-Testing der Sequenzen"
  ]
},
{
  id: 4004, pillar: 4, type: "scale",
  title: "Nennen Sie Ihre drei wichtigsten Pipeline-Quellen, gerankt nach Kosten-pro-qualifizierter-Opportunity. Basiert dieses Ranking auf getrackten Daten oder aus dem Gedächtnis geschätzt?",
  options: [
    "Paid Media wird nicht genutzt, oder Spend wird nur auf Kostenebene getrackt",
    "Paid Media läuft, aber ROI und Pipeline-Beitrag werden nicht gemessen",
    "Etwas Pipeline-Attribution existiert, aber Kosten-pro-Opportunity-Tracking ist inkonsistent",
    "Kosten-pro-Opportunity werden nach Kanal mit quartalsweisen Effizienzreviews getrackt",
    "Paid Media wird als Pipeline-Investment gemanagt: CPO, CAC-Beitrag und Amortisation werden monatlich pro Kanal getrackt"
  ]
},
{
  id: 4005, pillar: 4, type: "scale",
  title: "Wie messen Sie die Website-Conversion-Performance, und wie hoch ist Ihre Conversion Rate vom Besucher zum qualifizierten Lead?",
  options: [
    "Website-Conversion wird nicht getrackt: Keine Funnel-Transparenz",
    "Traffic und Formularausfüllungen werden getrackt, aber Conversion-Qualität wird nicht gemessen",
    "Top-of-Funnel-Conversion wird getrackt, aber Mid-Funnel-Abbrüche werden nicht analysiert",
    "Conversion Rates werden nach Seite und Quelle getrackt, monatlich mit dokumentierten Verbesserungsmaßnahmen überprüft",
    "Ein Conversion-Optimization-Programm: Funnel End-to-End gemappt, A/B-Tests laufen, und Conversion Rate wird quartalsweise gegen Benchmarks überprüft"
  ]
},
{
  id: 4006, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 10 },
  title: "Wie systematisch führen Sie Account-Based Marketing gegen Ihre höchstpriorisierten Accounts durch, und wie wird der Einfluss gemessen?",
  options: [
    "Keine ABM-Motion: Alle Accounts erhalten dasselbe Outreach",
    "ABM wird besprochen, aber es gibt keine dedizierte Account-Auswahl, kein Budget oder keine Messung",
    "Eine Pilot-ABM-Motion existiert für eine Teilmenge von Accounts, aber ohne definierte Erfolgskennzahlen",
    "Ein dokumentiertes ABM-Programm mit Account-Stufen, Kanalaktivierung und quartalsweisen Pipeline-Impact-Reviews",
    "Voll instrumentierte ABM-Engine: Account-Coverage, Engagement und Pipeline-Beitrag werden monatlich pro Account-Stufe getrackt"
  ]
},
{
  id: 4007, pillar: 4, type: "scale",
  title: "Wie strukturiert und performance-getrackt läuft Ihre Lead-Nurturing-Motion für Interessenten, die noch nicht kaufbereit sind?",
  options: [
    "Kein Nurturing: Interessenten, die nicht sofort kaufbereit sind, werden aufgegeben",
    "Eine E-Mail-Sequenz existiert, ist aber generisch, unzielgerichtet und wird nicht überprüft",
    "Nurture-Tracks existieren nach Segment, aber Engagement-Raten und Conversion werden nicht getrackt",
    "Nurture-Programme sind segmentiert, automatisiert und werden quartalsweise auf Conversion-Impact überprüft",
    "Voll instrumentierte Nurture-Engine: nach Persona und Phase segmentiert, Conversion getrackt und basierend auf Leistungsdaten aktualisiert"
  ]
},
{
  id: 4008, pillar: 4, type: "scale",
  title: "Wie konsistent generiert Content qualifizierte Nachfrage, und wie messen Sie den Content-Beitrag zur Pipeline?",
  options: [
    "Content wird produziert, aber sein Beitrag zur Pipeline wird nicht gemessen",
    "Content generiert Traffic, aber Pipeline-Attribution wird nicht getrackt",
    "Einige Content-Stücke werden der Pipeline zugeordnet, aber die Messung ist inkonsistent",
    "Content-Pipeline-Beitrag wird quartalsweise nach Asset-Typ und Thema getrackt",
    "Ein Content-Demand-Modell: Jedes Asset wird nach Traffic, MQL-Conversion und Pipeline-Einfluss getrackt, monatlich überprüft"
  ]
},
{
  id: 4009, pillar: 4, type: "scale",
  title: "Können Sie Pipeline und Umsatz auf spezifische DG-Kanäle, Kampagnen und Ausgaben zurückführen: und wie oft führt das zu einer Budgetumverteilung?",
  options: [
    "Keine Attribution: Alle Pipeline-Quellen sind unbekannt oder als 'direkt' markiert",
    "First-Touch-Attribution existiert, aber Multi-Touch und Ausgaben-ROI werden nicht getrackt",
    "Pipeline wird auf Kanalebene zugeordnet, aber Kampagnen-ROI wird nicht konsistent getrackt",
    "Multi-Touch-Attribution implementiert, monatlich nach Kanal und Kampagne überprüft",
    "Ein vollständiges Attributionsmodell: Kanal, Kampagne und Ausgaben bis zum Closed-Won-Umsatz getrackt mit quartalsweisem ROI-Reporting"
  ]
},
{
  id: 4010, pillar: 4, type: "scale",
  title: "Wird Marketing an einer Umsatz- oder Pipeline-Quota gemessen, und wie wird dieses Ziel gesetzt und überprüft?",
  options: [
    "Marketing hat keine Umsatz- oder Pipeline-Quota: Erfolg wird in Leads oder Impressionen gemessen",
    "Eine informelle Pipeline-Erwartung existiert, wird aber nicht formell getrackt oder gesteuert",
    "Marketing hat ein Pipeline-Ziel, das aber sekundär ist und selten Budget- oder Headcount-Entscheidungen treibt",
    "Marketing hat eine formelle Pipeline-Quota, die monatlich mit dem CRO oder VP Sales überprüft wird",
    "Marketing ist Mitverantwortlicher eines Umsatzziels: Pipeline-Beitrag, Win Rate bei Marketing-gesourcten Deals und CPO werden in wöchentlichen Revenue-Meetings überprüft"
  ]
},
{
  id: 4011, pillar: 4, type: "scale",
  title: "Sind Ihre Lead-Follow-up-SLAs zwischen Marketing und Vertrieb definiert, getrackt und durchgesetzt: und was passiert, wenn ein Sales Rep das Zeitfenster verpasst?",
  options: [
    "Keine SLAs: Lead-Follow-up hängt vom individuellen Verhalten der Sales Reps ab",
    "Eine informelle Erwartung existiert, wird aber nicht getrackt oder durchgesetzt",
    "SLAs sind dokumentiert, aber die Einhaltung wird nicht überwacht",
    "SLAs sind definiert, im CRM getrackt und wöchentlich mit der Sales Leadership überprüft",
    "SLAs sind vertraglich zwischen Marketing und Vertrieb: Einhaltung wird täglich getrackt, Verstöße eskaliert und Antwortzeiten in wöchentlichen Pipeline-Meetings überprüft"
  ]
},
{
  id: 4012, pillar: 4, type: "scale",
  title: "Wie präzise ist Ihre Demand Generation nach Segment, Persona und Kaufphase personalisiert, über grundlegende Listensegmentierung hinaus?",
  options: [
    "Eine Kampagne wird an alle Interessenten gesendet: Keine Segmentierung angewandt",
    "Grundlegende Listensegmentierung nach Unternehmensgröße oder Branche, aber generisches Messaging",
    "Segment-Level-Kampagnen existieren, aber Persona- und Phasen-Targeting sind inkonsistent",
    "Kampagnen sind nach ICP-Stufe, Persona und Funnel-Phase segmentiert mit personalisiertem Messaging",
    "Dynamische, multivariable Personalisierung: ICP-Fit, Intent-Signale, Persona und Phase steuern Content, Timing und Kanalauswahl automatisch"
  ]
},
{
  id: 4013, pillar: 4, type: "scale",
  title: "Wie systematisch werden Ihre Demand-Generation-Kampagnen datenbasiert optimiert, und was ist die Kadenz dieser Überprüfung?",
  options: [
    "Kampagnen laufen für einen festen Zeitraum ohne Leistungsreview oder Anpassung",
    "Leistung wird gelegentlich überprüft, aber Änderungen basieren auf Bauchgefühl",
    "Monatliche Leistungsreviews finden statt, aber Optimierungsentscheidungen sind inkonsistent",
    "Ein wöchentliches DG-Performance-Review treibt dokumentierte Kampagnenanpassungen",
    "Eine kontinuierliche Optimierungsschleife: Kanalperformance, CPO und Conversion wöchentlich getrackt, mit A/B-Tests und Budgetumverteilung in definierter Kadenz"
  ]
},
{
  id: 4014, pillar: 4, type: "scale",
  show_if: { field: 'gtm_motion', not_contains: ['product-led'] },
  title: "Für Ihre letzten drei Events oder Webinare: Wie viel Pipeline wurde generiert, und wie hoch waren die Kosten-pro-qualifizierter-Opportunity pro Event?",
  options: [
    "Events werden ohne Pipeline- oder Kosten-Tracking durchgeführt: Teilnahme ist die einzige Kennzahl",
    "Etwas Pipeline wird Events nachträglich zugeordnet, aber Kosten-pro-Opportunity werden nicht berechnet",
    "Generierte Pipeline wird pro Event getrackt, aber Kostendaten sind unvollständig oder nicht mit qualifizierten Opportunities verknüpft",
    "Generierte Pipeline und Kosten-pro-qualifizierter-Opportunity werden pro Event getrackt und nach jedem überprüft",
    "Ein gesteuertes Event-ROI-Modell: Generierte Pipeline, Kosten-pro-Opportunity und beeinflusster ARR werden pro Event getrackt: Ergebnisse fließen direkt in zukünftige Event-Investitionsentscheidungen ein"
  ]
},
{
  id: 4015, pillar: 4, type: "scale",
  title: "Wie systematisch plant, führt und dokumentiert Ihr Team DG-Experimente, und wie schnell treiben Ergebnisse Entscheidungen?",
  options: [
    "Keine Experimente: DG führt wiederholt dasselbe Playbook aus",
    "Gelegentliche Änderungen werden vorgenommen, aber ohne definierte Hypothesen oder Erfolgskriterien",
    "Einige Tests werden durchgeführt, aber Dokumentation und Entscheidungsprozesse sind informell",
    "Ein quartalsweiser Experimentkalender mit definierten Hypothesen, Messzeiträumen und Go/No-Go-Kriterien",
    "Eine kontinuierliche Testkultur: Wöchentliche Experimente in einem gemeinsamen Protokoll getrackt, Ergebnisse monatlich überprüft, und gewinnende Ansätze systematisch skaliert"
  ]
},
{
  id: 4016, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "Wie strukturiert ist die Feedback-Schleife zwischen SDRs und Marketing zur Lead-Qualität, und wie oft führt dieses Feedback zu Änderungen?",
  options: [
    "Keine formelle Feedback-Schleife: SDRs und Marketing operieren unabhängig voneinander",
    "SDRs beschweren sich informell über Lead-Qualität, aber es verändert keine Kampagnen",
    "Gelegentliche Feedback-Sitzungen finden statt, aber ohne strukturiertes Format oder Maßnahmenverfolgung",
    "Ein wöchentlich strukturierter Feedback-Prozess zwischen SDR-Team und Marketing mit dokumentierten Maßnahmen",
    "Ein geschlossenes Feedback-System: SDR-zu-Marketing-Lead-Qualitätsbewertungen werden wöchentlich überprüft und treiben Kampagnen- und ICP-Verfeinerungen in definierter Kadenz"
  ]
},
{
  id: 4017, pillar: 4, type: "scale",
  show_if: { field: 'gtm_motion', not_contains: ['product-led', 'partner-led'] },
  title: "Haben Sie eine definierte Event- und Webinar-Strategie mit Pipeline-Zielen pro Event: und können Sie den Pipeline-ROI Ihrer letzten drei Events nachweisen?",
  options: [
    "Events werden opportunistisch gewählt, ohne definierte Strategie oder Messung",
    "Events werden geplant, aber Teilnahme ist die primäre Erfolgskennzahl",
    "Ein grundlegender Eventkalender existiert mit Post-Event-Pipeline-Tracking für wichtige Events",
    "Eine Event-Strategie mit definierten Pipeline-Zielen, Pre-/Post-Event-Aktivierung und quartalsweisem ROI-Review",
    "Voll instrumentierte Event-Engine: Pipeline-gesourct und -beeinflusst wird pro Event getrackt, mit Pre-/Post-Playbooks und ROI-Benchmarks, die quartalsweise überprüft werden"
  ]
},
{
  id: 4018, pillar: 4, type: "scale",
  title: "Wie formell ist Demand Generation in die Umsatzplanung eingebunden, und teilt Marketing die Pipeline-Verantwortung?",
  options: [
    "Marketing ist nicht in Revenue-Planungsgespräche einbezogen",
    "Marketing wird über Umsatzziele informiert, trägt aber nicht zur Pipeline-Modellierung bei",
    "Marketing liefert Input zur Planung, teilt aber nicht die Pipeline-Zielverantwortung",
    "Marketing teilt ein Pipeline-Ziel, ist in den Revenue-Planungsprozess einbezogen",
    "Marketing ist Mitverantwortlicher des Revenue-Plans: Pipeline-Modell, Budgetallokation und Ramp-Annahmen werden gemeinsam mit Vertrieb und Finance überprüft"
  ]
},
{
  id: 4019, pillar: 4, type: "scale",
  title: "Können Sie Pipeline steigern, ohne proportional das DG-Budget zu erhöhen: und haben Sie Daten der letzten 12 Monate, um das zu belegen?",
  options: [
    "Pipeline-Skalierung erfordert proportionale Budget- und Headcount-Erhöhungen",
    "Einige Skaleneffekte existieren, aber die Effizienz sinkt mit steigendem Volumen",
    "DG skaliert moderat: Inkrementelle Effizienzgewinne werden mit dokumentierten Initiativen erzielt",
    "DG skaliert mit unterproportionalen Budgetsteigerungen: Effizienzverbesserungen werden pro Quartal getrackt",
    "Eine sich verstärkende DG-Engine: Organische, Earned- und Paid-Kanäle verstärken sich gegenseitig, und die Effizienz verbessert sich mit zunehmender Skalierung"
  ]
},
{
  id: 4020, pillar: 4, type: "scale",
  title: "Wie entwickeln sich Ihre Customer Acquisition Costs beim Skalieren, und wie messen und managen Sie diesen Trend?",
  options: [
    "CAC wird nicht getrackt: Akquisitionskosten sind unbekannt",
    "CAC wird jährlich getrackt, aber nicht als Leistungshebel gemanagt",
    "CAC wird quartalsweise getrackt, steigt aber ohne einen dokumentierten Verbesserungsplan",
    "CAC wird monatlich getrackt und mit dokumentierten Effizienzinitiativen überprüft",
    "CAC-Trends werden nach Kanal und Motion modelliert, monatlich überprüft, mit einer dokumentierten Ziel-Trajektorie und einem Umverteilungs-Trigger"
  ]
},

/* ===========================================================
   PILLAR 5: SALES EXECUTION (20 QUESTIONS)
   =========================================================== */

{
  id: 5001, pillar: 5, type: "scale",
  title: "Ist Ihr Vertriebsprozess dokumentiert, an Stage Gates durchgesetzt und wird er konsistent befolgt: oder fährt jeder Rep faktisch seine eigene Version?",
  subtitle: "Bitte für Ihr primäres Umsatzsegment und Ihre primäre GTM-Motion beantworten, sofern eine Frage nicht explizit differenziert.",
  options: [
    "Kein dokumentierter Prozess: Jeder Rep managt Deals eigenständig",
    "Ein informeller Prozess existiert in den Köpfen erfahrener Sales Rep, ist aber nicht verschriftlicht oder geschult",
    "Ein Prozess ist dokumentiert, aber die Nutzung im Team ist inkonsistent",
    "Ein dokumentierter Stufe-für-Stufe-Prozess mit Ausstiegskriterien, geschult und im CRM reflektiert",
    "Ein gesteuerter Vertriebsprozess: Stufen, Ausstiegskriterien und erforderliche CRM-Felder werden durchgesetzt, Abweichungen in Pipeline Reviews gemeldet"
  ]
},
{
  id: 5002, pillar: 5, type: "scale",
  title: "Wie rigoros werden Deals qualifiziert, bevor sie in die Pipeline aufgenommen werden, und was passiert mit unqualifizierten Deals?",
  options: [
    "Keine formelle Qualifizierung: Alles, was Interesse zeigt, kommt in die Pipeline",
    "Qualifizierung ist informell und über Sales Reps hinweg inkonsistent",
    "Ein Qualifizierungsframework existiert, wird aber inkonsistent angewandt",
    "Ein definiertes Qualifizierungsframework wird konsistent angewandt, unqualifizierte Deals werden aktiv aus der Pipeline entfernt",
    "Eine Null-Toleranz-Qualifizierungskultur: Deals ohne dokumentierte Qualifizierungskriterien werden nicht im CRM erstellt, in Pipeline-Meetings überprüft"
  ]
},
{
  id: 5003, pillar: 5, type: "scale",
  title: "Wie transparent und diszipliniert ist Ihr Pipeline-Management, und wie konsistent durchlaufen Deals definierte Stufen?",
  options: [
    "Pipeline ist eine Wunschliste: Stufenprogression wird nicht gesteuert",
    "Pipeline wird informell überprüft und Stufen-Hygiene bleibt den einzelnen Sales Reps überlassen",
    "Pipeline Reviews finden statt, aber stagnierende und aufgeblähte Deals werden nicht aktiv gemanagt",
    "Wöchentliche Pipeline Reviews mit dokumentierten Maßnahmen bei stagnierenden Deals und aufgeblähten Stufen",
    "Eine gesteuerte Pipeline-Disziplin: Stufen-Alter-Trigger, erforderliche Ausstiegskriterien und Pipeline-Qualität wöchentlich bewertet mit erzwungenen Maßnahmen bei überfälligen Deals"
  ]
},
{
  id: 5004, pillar: 5, type: "scale",
  title: "Welcher Prozentsatz der zu Monatsbeginn zugesagten Deals schließt tatsächlich bis Monatsende, und wie stabil ist dieses Verhältnis?",
  options: [
    "Unter 50 %: Commit-Genauigkeit wird nicht getrackt oder gemanagt",
    "50-70 %: Commits werden häufig verfehlt und nicht systematisch überprüft",
    "70-85 %: Commits schließen mit moderater Rate bei etwas Forecast-Disziplin",
    "85-95 %: Commits werden konsistent eingehalten mit einem formellen Commit-Review-Prozess",
    "Über 95 %: Commit-Genauigkeit ist eine gesteuerte Kennzahl, wöchentlich überprüft, mit einem dokumentierten Eskalationspfad bei Abweichungen"
  ]
},
{
  id: 5005, pillar: 5, type: "scale",
  title: "Wie konsistent können alle Sales Reps Produktfähigkeiten, Einschränkungen und Wettbewerbsdifferenzierung artikulieren, ohne auf technischen Support angewiesen zu sein?",
  options: [
    "Produktwissen variiert stark: Die meisten Sales Reps können keine unbegleitete Demo durchführen",
    "Einige erfahrene Sales Reps haben tiefes Produktwissen; der Rest ist unzuverlässig",
    "Die meisten Sales Reps haben adäquates Produktwissen, aber Lücken treten bei komplexen Deals auf",
    "Produktwissen ist zertifiziert, bevor Sales Reps live gehen, mit Auffrischungen bei jedem größeren Release",
    "Ein kontinuierliches Produkt-Mastery-Programm: zertifizierungspflichtig, pro Rep getrackt und bei jedem Produkt-Release aktualisiert"
  ]
},
{
  id: 5006, pillar: 5, type: "scale",
  title: "Wird Ihr Vertriebsprozess an Stage Gates im CRM durchgesetzt: und welcher Prozentsatz der Deals in Ihrer Pipeline im letzten Quartal hatte alle erforderlichen Felder bei jeder Stufe ausgefüllt?",
  options: [
    "CRM-Stage-Gates werden nicht durchgesetzt: Pflichtfelder sind oft leer und Deals werden trotzdem weitergeschoben",
    "Einige Pflichtfelder existieren, aber Sales Reps können Deals meist ohne deren Ausfüllung voranbringen",
    "Stage-Gate-Anforderungen existieren und werden von Managern überprüft, aber die Durchsetzung ist teamübergreifend inkonsistent",
    "Pflichtfelder werden an Schlüsselstufen durchgesetzt, und die Einhaltung wird regelmäßig in Pipeline-Inspektionen überprüft",
    "Ein gesteuertes Stage-Gate-System: Pflichtfelder werden im CRM bei jeder Stufe durchgesetzt, Einhaltung wöchentlich getrackt und Ausnahmen mit Manager-Verantwortlichkeit dokumentiert"
  ]
},
{
  id: 5007, pillar: 5, type: "scale",
  title: "Welcher Prozentsatz Ihrer letzten 20 Deals hatte alle Qualifizierungsmethodik-Felder ausgefüllt: und erzwingt das CRM dies, bevor ein Deal zur nächsten Stufe fortschreitet?",
  options: [
    "Keine Qualifizierungsmethodik wird genutzt: Sales Reps qualifizieren nach eigenem Ermessen ohne gemeinsames Framework",
    "Eine Methodik existiert, aber weniger als 40 % der Deals haben vollständige Qualifizierungsfelder im CRM",
    "40-70 % der Deals haben vollständige Qualifizierungsfelder, aber die Durchsetzung ist über Manager hinweg inkonsistent",
    "Über 70 % der Deals haben vollständige Qualifizierungsfelder: CRM-Stage-Gates erzwingen die Methodik für Deals über einer definierten Größe",
    "Qualifizierungsmethodik wird bei 90 %+ aller Deals über dem Schwellenwert durchgesetzt: CRM-Gates sind aktiv, Einhaltung wöchentlich getrackt und Abweichung in Deal Reviews gemeldet"
  ]
},
{
  id: 5008, pillar: 5, type: "scale",
  title: "Wie systematisch erfassen und nutzen Sie Win/Loss-Intelligenz, um zu verbessern, wie Ihre Sales Reps verkaufen?",
  options: [
    "Win/Loss-Gründe werden nicht dokumentiert: Ergebnisse werden gefeiert oder vergessen",
    "Sales Reps protokollieren einen Grund im CRM, der aber selten analysiert oder besprochen wird",
    "Win/Loss-Daten werden informell in Teammeetings ohne strukturierte Outputs überprüft",
    "Ein Win/Loss-Review-Prozess liefert dokumentierte Themen, die quartalsweise mit Vertrieb und PMM geteilt werden",
    "Win/Loss-Intelligenz treibt direkte Aktualisierungen an Playbooks, Messaging und Coaching-Inhalten jedes Quartal"
  ]
},
{
  id: 5009, pillar: 5, type: "scale",
  title: "Wie gut vorbereitet sind Ihre Sales Reps auf die häufigsten Einwände, und woher wissen Sie, dass die Einwandbehandlung funktioniert?",
  options: [
    "Kein Einwandbehandlungs-Framework: Sales Reps improvisieren Antworten",
    "Häufige Einwände werden im Onboarding behandelt, aber nicht geübt oder aktualisiert",
    "Ein Einwandbehandlungsleitfaden existiert, aber Nutzung und Wirksamkeit werden nicht gemessen",
    "Einwandantworten werden geschult, in Rollenspielen geübt und in Coaching-Sitzungen überprüft",
    "Eine lebende Einwand-Bibliothek: Antworten werden in Gesprächen getestet, aus Win/Loss-Daten aktualisiert und Wirksamkeit gegen Conversion Rates getrackt"
  ]
},
{
  id: 5010, pillar: 5, type: "scale",
  title: "Wie viele Sales Reps-Demos wurden in den letzten 90 Tagen gegen ein definiertes Qualitätskriterium überprüft: und was war die durchschnittliche Bewertung?",
  options: [
    "Keine Demos werden gegen ein Bewertungsschema überprüft: Qualität ist ungesteuert",
    "Einige Demos werden informell überprüft, aber ohne konsistentes Bewertungsschema oder Bewertungsmethode",
    "Einige Demos werden gegen ein Bewertungsschema bewertet, aber die Abdeckung ist teilweise und über Manager hinweg inkonsistent",
    "Demo-Qualität wird regelmäßig mit einem definierten Bewertungsschema überprüft und Feedback pro Rep dokumentiert",
    "Ein gesteuertes Demo-Qualitätssystem: Demo-Reviews werden gegen ein Standard-Bewertungsschema bewertet, Durchschnittsbewertungen pro Rep und Manager getrackt, und niedrige Bewertungen lösen gezieltes Coaching im selben Monat aus"
  ]
},
{
  id: 5011, pillar: 5, type: "scale",
  title: "Belohnt Ihr Vergütungsplan Verhaltensweisen, die langfristigen Umsatz aufbauen: oder incentiviert er kurzfristige Abschlüsse auf Kosten von Deal-Qualität und Retention?",
  options: [
    "Vergütung ist rein volumenbasiert: Verhaltensweisen wie Multithreading oder ICP-Qualifizierung werden nicht belohnt",
    "Einige qualitative Elemente existieren, aber Vergütung ist primär quota-basiert ohne Verhaltens-Leitplanken",
    "Vergütung enthält einige Retention- oder NRR-Komponenten, aber Rabattierung und Deal-Qualität werden nicht bestraft",
    "Vergütungsdesign enthält Deal-Qualitäts-Leitplanken: Rabattlimits, ICP-Anforderungen und NRR-Komponenten",
    "Ein Multi-Faktor-Vergütungsmodell: Neuer ARR, NRR, Rabattdisziplin und ICP-Compliance sind alle gewichtet, jährlich mit Finance und HR überprüft"
  ]
},
{
  id: 5012, pillar: 5, type: "scale",
  title: "Enthält Ihr aktueller Vergütungsplan einen Mechanismus, der tiefe Rabatte, Nicht-ICP-Abschlüsse oder Single-Threaded-Deals bestraft: und hat das das Verhalten der Sales Reps messbar verändert?",
  options: [
    "Vergütung belohnt nur abgeschlossenen Umsatz: Rabatte, ICP-Qualität und Deal-Hygiene haben keine Konsequenzen",
    "Einige Verhaltens-Leitplanken existieren informell, sind aber nicht in der Vergütung verankert und Verhalten hat sich nicht messbar verändert",
    "Vergütung enthält ein oder zwei Qualitäts-Leitplanken, die aber schwach durchgesetzt werden und der Einfluss unklar ist",
    "Vergütung enthält explizite Strafen oder Modifikatoren für Rabattierung, ICP-Verstöße oder schlechte Deal-Qualität, und Verhalten wird quartalsweise überprüft",
    "Ein Multi-Faktor-Vergütungsmodell: Rabattdisziplin, ICP-Compliance und Deal-Qualität beeinflussen direkt die Auszahlung, Verhalten wird monatlich getrackt und messbare Verbesserung wurde beobachtet"
  ]
},
{
  id: 5013, pillar: 5, type: "scale",
  title: "Nennen Sie den wirkungsvollsten Hebel auf Ihre Win Rate gerade: und identifizieren Sie die Datenquelle, die bestätigt, dass es dieser Hebel ist und nicht etwas anderes.",
  options: [
    "Wir können keinen spezifischen Hebel benennen: Win Rate wird aggregiert besprochen ohne Ursachenbeleg",
    "Das Leadership-Team hat eine Sicht auf den Hebel, die aber überwiegend anekdotisch und nicht an eine verlässliche Datenquelle gebunden ist",
    "Ein oder zwei wahrscheinliche Hebel wurden identifiziert, aber die Evidenz ist teilweise oder über Segmente hinweg inkonsistent",
    "Ein primärer Win-Rate-Hebel wurde identifiziert und durch segmentierte Conversion-, Win/Loss- oder Stage-Daten gestützt",
    "Win-Rate-Kausalität wird aktiv modelliert: Der primäre Hebel wird durch segmentierte Daten belegt, regelmäßig überprüft und mit gezielten Interventionen mit gemessenem Einfluss verknüpft"
  ]
},
{
  id: 5014, pillar: 5, type: "scale",
  title: "Wie viele Deals in Ihrem letzten Pipeline Review, die stagnierten oder verloren wurden, hatten in den 30 Tagen zuvor Enablement-Materialien genutzt: und wird das getrackt?",
  options: [
    "Enablement-Materialien existieren, werden aber in aktiven Deals nicht genutzt",
    "Sales Reps kennen die Materialien, aber der Zugriff ist inkonsistent und die Nutzung wird nicht getrackt",
    "Materialien sind in einem gemeinsamen Laufwerk verfügbar, aber die Nutzung in Deals wird nicht gemessen",
    "Enablement-Materialien sind nach Deal-Phase organisiert, Nutzung wird getrackt und Wirksamkeit quartalsweise überprüft",
    "Ein Deal-Stufen-Enablement-System: Materialien nach Stufe, Persona und Einwand indexiert, mit Nutzungs- und Deal-Ergebnis-Korrelation, die monatlich getrackt wird"
  ]
},
{
  id: 5015, pillar: 5, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "Wie streng wird CRM-Datenhygiene durchgesetzt, und welche Konsequenzen haben unvollständige Deal-Datensätze?",
  options: [
    "CRM-Daten sind freiwillig: Die meisten Deal-Datensätze sind unvollständig oder ungenau",
    "Datenhygiene wird erwartet, aber nicht durchgesetzt: Keine Konsequenz für fehlende Felder",
    "Manager prüfen CRM-Qualität informell in 1:1s ohne systematische Durchsetzung",
    "Erforderliche CRM-Felder werden an Stage Gates mit Manager-Review durchgesetzt",
    "Eine Null-Toleranz-CRM-Hygiene-Richtlinie: Unvollständige Datensätze blockieren die Stufenprogression, Provisionen erfordern Datenvollständigkeit, wöchentlich überprüft"
  ]
},
{
  id: 5016, pillar: 5, type: "scale",
  title: "Wie granular wird die individuelle Rep-Performance getrackt, und wie schnell werden Underperformance-Muster erkannt?",
  options: [
    "Sales Reps-Leistung wird quartalsweise nur auf Quota-Erreichungsebene überprüft",
    "Monatliches Quota-Tracking existiert, aber Frühindikatoren werden nicht überwacht",
    "Aktivitäts-, Pipeline- und Conversion-KPIs werden getrackt, aber inkonsistent überprüft",
    "Wöchentliche Sales Reps-Performance-Dashboards zu Aktivität, Pipeline und Conversion, in 1:1s überprüft",
    "Ein Echtzeit-Sales Reps-Performance-Intelligenz-System: Früh- und Spätindikatoren täglich getrackt, mit automatisierten Alerts bei Abweichungsmustern"
  ]
},
{
  id: 5017, pillar: 5, type: "scale",
  title: "Verfolgen Sie alle vier Komponenten der Sales Velocity: Deal-Anzahl, Win Rate, Deal-Größe und Cycle Time: nach Segment, und handeln Sie monatlich auf Basis der Daten?",
  options: [
    "Sales Velocity wird nicht getrackt: Wir fokussieren nur auf Gesamtumsatz",
    "Ein oder zwei Velocity-Komponenten werden getrackt, aber nicht zusammen überprüft",
    "Eine grundlegende Velocity-Ansicht existiert, wird aber nicht regelmäßig überprüft oder segmentiert",
    "Alle vier Velocity-Komponenten werden nach Segment getrackt, monatlich mit dokumentierten Verbesserungsmaßnahmen überprüft",
    "Ein Sales-Velocity-Dashboard wird wöchentlich überprüft: Komponenten nach Segment, Rep und Motion getrackt, mit hebelspezifischen Verbesserungsinitiativen"
  ]
},
{
  id: 5018, pillar: 5, type: "scale",
  show_if: { field: 'product_complexity', contains_any: ['complex / configurable', 'highly complex'] },
  title: "Welcher Prozentsatz Ihrer Sales Reps hat in den letzten 90 Tagen eine technische Produktfrage in einem Live-Deal ohne Eskalation an Produkt oder Engineering beantwortet?",
  options: [
    "Sehr wenige oder keine: Die meisten technischen Fragen lösen eine Eskalation aus",
    "Eine Minderheit der Sales Reps kann Standard-Technikfragen beantworten, aber die meisten benötigen Support",
    "Die meisten Sales Reps können häufige technische Fragen beantworten, aber komplexe Szenarien eskalieren noch häufig",
    "Eine große Mehrheit der Sales Reps kann Standard-Technikfragen eigenständig beantworten, Eskalationen beschränken sich auf definierte Randfälle",
    "Technische Kompetenz ist eine gesteuerte Fähigkeit: Bearbeitungsrate der Sales Reps wird getrackt, Eskalationsgründe überprüft und Enablement kontinuierlich aktualisiert, um unnötige Eskalationen zu reduzieren"
  ]
},
{
  id: 5019, pillar: 5, type: "scale",
  title: "Welcher Prozentsatz der abgeschlossenen Deals im letzten vollständigen Quartal enthielt einen Rabatt, der nicht vom Käufer initiiert wurde: und schafft Ihr Vergütungsplan einen Anreiz für dieses Verhalten?",
  options: [
    "Wir tracken nicht, ob Rabatte vom Sales Reps oder Käufer initiiert wurden: Alle Rabatte werden gleich behandelt",
    "Wir wissen, dass Rabattierung üblich ist, haben aber in unseren Daten nicht zwischen Sales Reps-initiiert und Käufer-initiiert unterschieden",
    "Sales Reps-initiierte Rabattierung existiert bekanntermaßen, aber das Vergütungsdesign adressiert oder bestraft sie nicht",
    "Sales Reps-initiierte Rabatte werden getrackt und die Vergütung enthält Leitplanken: aber Verhaltensänderung ist noch nicht messbar",
    "Sales Reps-initiierte vs. Käufer-initiierte Rabatte werden monatlich getrackt, Vergütung bestraft Sales Reps-initiierte Rabattierung über einer definierten Rate, und die Sales Reps-initiierte Rabattrate ist messbar gesunken"
  ]
},
{
  id: 5020, pillar: 5, type: "scale",
  title: "Welcher Prozentsatz der Deals, die im letzten Quartal in die Pipeline kamen, wurde letztlich disqualifiziert: und wie viele davon wurden innerhalb von 30 Tagen nach Aufnahme entfernt?",
  options: [
    "Disqualifizierung ist selten: Deals, die in die Pipeline kommen, bleiben tendenziell unabhängig von der Passung",
    "Einige Deals werden disqualifiziert, aber die Rate ist unbekannt und das Timing liegt im Ermessen der Sales Reps",
    "Disqualifizierungsrate wird getrackt, aber nicht systematisch überprüft: Geschwindigkeit der Entfernung wird nicht gemessen",
    "Disqualifizierungsrate und durchschnittliche Verweildauer in der Pipeline vor Entfernung werden getrackt und in Pipeline-Inspektionen überprüft",
    "Eine Schnell-Disqualifizierungs-Disziplin: Qualifizierungskriterien werden beim Stufeneintritt durchgesetzt, Disqualifizierungsrate und -geschwindigkeit wöchentlich getrackt, und hochvolumige späte Disqualifizierungen lösen eine Überprüfung des Qualifizierungsprozesses aus"
  ]
},

/* ===========================================================
   PILLAR 6: CUSTOMER SUCCESS & EXPANSION (20 QUESTIONS)
   =========================================================== */

{
  id: 6001, pillar: 6, type: "scale",
  title: "Wie strukturiert läuft Ihr Onboarding, und sehen Sie pro Kohorte, wer den First-Value-Meilenstein plangemäß erreicht?",
  subtitle: "Bitte auf Ihr Hauptsegment und primäre GTM-Motion beziehen, falls die Frage nicht ausdrücklich differenziert.",
  options: [
    "Kein Onboarding-Standard: jeder Kunde läuft anders durch, First-Value-Datum steht nirgends",
    "Onboarding-Checkliste in Notion oder Asana, Time-to-Value wird nicht gemessen",
    "Onboarding folgt einem groben Playbook, Meilensteine werden je nach CSM anders interpretiert",
    "Onboarding-Playbook mit Meilenstein-Tracking im CRM, Time-to-Value pro Kohorte im Dashboard",
    "Onboarding-Engine: Kickoff, Meilenstein-Gates und First-Value-Trigger pro Account live, Abweichungen wöchentlich im CS-Review"
  ]
},
{
  id: 6002, pillar: 6, type: "scale",
  title: "Wie früh sehen Sie, dass ein Account kippt, und wie schnell läuft eine Intervention an?",
  options: [
    "Keine Gesundheitsdaten: Churn fällt erst beim Kündigungsgespräch auf",
    "CSMs geben in 1:1s subjektive Red/Yellow/Green-Einschätzungen ab, ohne gemeinsames Modell",
    "Health Score existiert im CRM, wird aber nur quartalsweise oder bei Eskalation angesehen",
    "Wöchentliches Health-Score-Review, Interventions-Playbook startet bei Account-Rot innerhalb von 5 Werktagen",
    "Health Signal in Echtzeit: Nutzungs-, Support- und Sentiment-Trigger lösen Playbooks automatisch aus, Save-Rate pro Intervention im Dashboard"
  ]
},
{
  id: 6003, pillar: 6, type: "scale",
  title: "Nennen Sie die zwei beeinflussbaren Churn-Treiber in Ihrem Bestand. Steht die Antwort auf Kohortenanalyse oder auf einem Bauchgefühl aus drei verlorenen Accounts?",
  options: [
    "Keine Retention-Analyse: Churn wird reflexhaft Produkt oder Pricing zugeschrieben",
    "Churn-Gründe werden im CRM getaggt, es läuft aber keine Auswertung auf Muster",
    "Jährliche Churn-Analyse zeigt Themen, Root-Cause bleibt an der Oberfläche",
    "Churn-Treiber pro Kohorte quantifiziert, Exit-Interviews dokumentiert, quartalsweises Retention-Review",
    "Churn-Prädiktoren pro Segment modelliert, quartalsweise validiert, speisen aktive Interventions-Playbooks"
  ]
},
{
  id: 6004, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['deer / mid-market', 'elephant / enterprise', 'whale / strategic'] },
  title: "Wie konsequent und substanziell laufen Ihre QBRs, und was passiert danach mit den Ergebnissen?",
  options: [
    "Keine QBRs: Kunden hören nur von uns, wenn etwas brennt",
    "QBRs finden sporadisch statt, Format und Tiefe hängen am CSM",
    "QBR-Template existiert, Terminierung rutscht, Output-Qualität schwankt",
    "QBRs quartalsweise pro A- und B-Account, strukturiert, Outputs im CRM dokumentiert",
    "QBR-Programm gesteuert: Pre-Read-Template, Executive-Teilnahme-Regel pro Account-Tier, Follow-up-Ownership mit Renewal- und Expansion-Outcome verknüpft"
  ]
},
{
  id: 6005, pillar: 6, type: "scale",
  title: "Gibt CS Kundenintelligenz systematisch an Produkt und Sales weiter? Nennen Sie eine Entscheidung aus den letzten zwei Quartalen, die dadurch gekippt ist.",
  options: [
    "Teams arbeiten in Silos: Kundensignale verlassen CS nicht",
    "Informeller Austausch in Slack, aber keine teamübergreifende Entscheidung ist darauf rückführbar",
    "Monatlicher Voice-of-Customer-Sync existiert, Tiefe und Teilnahme schwanken stark",
    "Strukturiertes VoC-Forum mit dokumentierten Actions pro Team, Follow-up in Produkt-Roadmap und Sales-Playbook sichtbar",
    "VoC live: Produktsignale, Expansionschancen und Risikoflags fließen in Echtzeit aus Gainsight oder Planhat nach Sales und Product"
  ]
},
{
  id: 6006, pillar: 6, type: "scale",
  title: "Wie proaktiv findet und qualifiziert CS Expansion, bevor Sales das Gespräch eröffnet?",
  options: [
    "Expansion läuft rein über Sales: CS hat keine Expansions-Motion",
    "CS flaggt gelegentlich Chancen im Slack, ohne definierten Qualifikationspfad",
    "CS findet Chancen im Health Review, Handoff an AM oder AE läuft uneinheitlich",
    "Dokumentiertes Expansions-Trigger-Framework: CS qualifiziert bis SAL-Stage, Handoff-SLA im CRM, Expansions-Pipeline pro Account sichtbar",
    "CS-geführte Expansions-Motion: Nutzungsschwellen, Meilenstein-Trigger und Propensity-Score bauen Pipeline autonom, Conversion pro Trigger getrackt"
  ]
},
{
  id: 6007, pillar: 6, type: "scale",
  title: "Wie vorhersagbar läuft Ihr Renewal, und wie viele Tage vor Vertragsende steigen Sie ein?",
  options: [
    "Renewals reaktiv: erste Ansprache erst kurz vor Vertragsende",
    "Kalender-Reminder in Outlook, Timing und Ownership variieren je Rep",
    "90-Tage-Renewal-Liste wird getrackt, Motion bleibt unstrukturiert",
    "Renewal-Playbook mit 120-Tage-Trigger, Owner im CRM, Forecast pro Renewal wöchentlich aktualisiert",
    "Renewal-Engine: 180-Tage-Trigger, Risiko-Tiering, wöchentlicher Renewal-Forecast, Net Renewal Rate im Board-Pack"
  ]
},
{
  id: 6008, pillar: 6, type: "scale",
  title: "Wie viele Kunden aus Ihrer letzten Onboarding-Kohorte haben den First-Value-Meilenstein plangemäß erreicht, und was hat die anderen gebremst?",
  options: [
    "Produktadoption wird nicht gemessen: CS arbeitet mit Bauchgefühl und Kundenzitaten",
    "Nutzungsdaten in Mixpanel oder Amplitude vorhanden, landen aber nicht strukturiert bei CS",
    "Core-Nutzungsmetriken werden getrackt, fließen aber uneinheitlich in den Health Score ein",
    "Adoption pro Account im Dashboard, in Health Score eingebaut, wöchentlich pro Portfolio reviewed",
    "Usage Engine: Feature-Adoption, Engagement-Depth und Time-to-Activation pro Account, unter Schwellen triggern automatische CS-Playbooks"
  ]
},
{
  id: 6009, pillar: 6, type: "scale",
  title: "Wie systematisch schulen Sie Kunden auf Ihr Produkt, und verbessert das Programm messbar Adoption oder Renewal Rate?",
  options: [
    "Kein Customer-Training: Nutzer lernen durch Ausprobieren und Support-Tickets",
    "Docs in Notion oder Intercom vorhanden, werden weder aktiv beworben noch getrackt",
    "Training-Programm existiert, Completion Rate und Impact auf Adoption werden nicht gemessen",
    "Strukturiertes Customer-Training mit Completion-Tracking pro Account und Adoption-Korrelation im Dashboard",
    "Training-Impact-Modell: Zertifizierung, Feature-Adoption-Uplift und Renewal Rate pro Training-Kohorte quartalsweise im CS-Review"
  ]
},
{
  id: 6010, pillar: 6, type: "scale",
  title: "Wie sauber ist die Trennlinie zwischen CS und AM, und wo fallen Accounts regelmäßig durch den Handoff?",
  options: [
    "Keine klare Rollenteilung: CS und AM stolpern übereinander oder übersehen Accounts",
    "Informelle Rollenteilung, Abdeckungslücken und Owner-Streits sind Alltag",
    "Rollen-Dokument in Confluence, Handoffs zwischen CS und AM laufen je nach Tandem anders",
    "Dokumentierte CS- und AM-Schnittstelle nach Account-Tier und ARR-Schwelle, Ownership im CRM",
    "Account-Ownership-Modell gesteuert: Regeln im CRM hardverdrahtet, Handoff-SLAs getrackt, Abdeckung im monatlichen Account Review geprüft"
  ]
},
{
  id: 6011, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['deer / mid-market', 'elephant / enterprise', 'whale / strategic'] },
  title: "Welcher Prozentsatz Ihrer Accounts hat im letzten Quartal einen Value Review erhalten, und wurde für jeden eine Follow-up-Action dokumentiert und abgeschlossen?",
  options: [
    "Value-Kommunikation ist ad hoc: ROI wird Kunden routinemäßig nicht gezeigt",
    "Value-Reporting existiert, bleibt generisch und nicht kundenspezifisch",
    "Value-Framework vorhanden, wird sporadisch in QBRs und Renewal-Calls genutzt",
    "Value-Delivery pro Account quartalsweise geteilt, verknüpft mit den im Onboarding vereinbarten Success Metrics",
    "Customer-Value-Playbook: Success Metrics beim Kickoff gesetzt, Outcomes quartalsweise getrackt, ROI-Dokument in jedem Renewal- und Expansion-Case"
  ]
},
{
  id: 6012, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['elephant / enterprise', 'whale / strategic'] },
  title: "Wie viele Accounts sind im letzten Quartal zwischen CS und AM verloren gegangen, und hätte eine klarere Handoff-Regel das verhindert?",
  options: [
    "Keine Handoff-Regeln: CS- und AM-Ownership sind informell, Accounts fallen regelmäßig durchs Raster",
    "Accounts haben definierte Owner, die Grenze zwischen CS und AM bleibt unscharf, interne Streits sind häufig",
    "Handoff-Kriterien sind schriftlich, werden aber je nach Team anders gelebt, Lücken werden reaktiv gepatcht",
    "CS- und AM-Handoff-Regeln dokumentiert, im CRM als Stage-Gate erzwungen, quartalsweise reviewed, Lücken selten",
    "Zero-Gap-Ownership-Modell: pro Account ein Owner im CRM, Handoff folgt einem definierten Protokoll, Abdeckungslücken laufen als Governance-KPI"
  ]
},
{
  id: 6013, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['elephant / enterprise', 'whale / strategic'] },
  title: "Führt AM ein eigenes Expansion-Pipeline-Review separat vom CS-Health-Review, und wie konsistent läuft das?",
  options: [
    "Keine Trennung: Expansion-Themen hängen an den CS-Health-Calls dran",
    "Expansions-Pipeline wird in CS-Meetings gelegentlich erwähnt, kein eigener Prozess",
    "Separates Expansions-Review existiert, Kadenz und Teilnahme sind wackelig",
    "Wöchentliches Expansion-Pipeline-Review unabhängig vom CS-Health-Call, Deal-Actions im CRM",
    "Expansion als eigene Sales-Motion gemanagt: wöchentliches Pipeline-Review, eigener Forecast, Expansion-ARR separat vom Renewal-ARR berichtet"
  ]
},
{
  id: 6014, pillar: 6, type: "scale",
  title: "Wie früh flaggen Sie gefährdete Accounts, und wie läuft die Eskalation, bevor der Kunde kündigt?",
  options: [
    "At-Risk-Flag fällt erst, wenn der Kunde eine Kündigung ankündigt",
    "CS-Manager melden Risiko-Accounts informell im 1:1, kein gemeinsamer Prozess",
    "Risk-Flag im CRM existiert, Interventions-Playbooks laufen je nach CSM anders",
    "Risk Framework dokumentiert: Health-Schwellen, Eskalations-Trigger und Intervention-Playbooks, wöchentlich im CS-Review reviewed",
    "Proaktive Risk Engine: Prädiktive Signale lösen Playbooks automatisch aus, Eskalationspfad hartverdrahtet, Save Rate pro Risk-Tier getrackt"
  ]
},
{
  id: 6015, pillar: 6, type: "scale",
  title: "Nennen Sie eine Produkt- oder GTM-Entscheidung der letzten zwei Quartale, die durch ein CS-Signal gekippt ist. Wie viele Tage lagen zwischen Signal und Entscheidung?",
  options: [
    "Keine: CS-Insights treiben sichtbar keine Produkt- oder GTM-Entscheidung",
    "CS-Signale beeinflussen gelegentlich informell, die Verbindung ist nirgends dokumentiert",
    "Einzelne Entscheidungen lassen sich auf CS-Input zurückführen, der Signal-to-Decision-Path ist inkonsistent und zäh",
    "Mehrere Entscheidungen pro Quartal sind auf CS-Signale rückführbar, Signal-Ursprung und Zeitlinie dokumentiert",
    "Closed-Loop-CS-Intelligence: Signale im Log, in strukturiertem Forum reviewed, Entscheidungen mit Signal-ID verknüpft, Signal-to-Decision-Time als KPI im Board-Pack"
  ]
},
{
  id: 6016, pillar: 6, type: "scale",
  title: "Wie hoch ist Ihre aktuelle Accounts-pro-CSM-Ratio, und hat sich die Ratio in den letzten 12 Monaten verbessert oder verschlechtert, während der Kundenstamm wuchs?",
  options: [
    "Accounts-pro-CSM wird nicht getrackt: Kapazität wird akkordmäßig nachgeschoben",
    "Ratio existiert informell, hat sich beim Wachstum verschlechtert, CS-Kapazität hinkt dem Kundenwachstum nach",
    "Ratio wird getrackt, bleibt flach: CS-Headcount wächst linear mit Accounts, kein Hebel-Uplift",
    "Accounts-pro-CSM hat sich in 12 Monaten durch Tiering, Automatisierung oder Self-Service verbessert, quartalsweise im CS-Review",
    "CS-Leverage als gesteuerter KPI: Accounts-pro-CSM monatlich getrackt, Ziel-Ratio in der Jahresplanung fest, mit dokumentiertem Pfad zur Erreichung"
  ]
},
{
  id: 6017, pillar: 6, type: "scale",
  title: "Kann ein CSM eine Single Customer View öffnen, Health, Usage, Support und ARR auf einen Blick, ohne manuell Daten zusammenzuklicken?",
  options: [
    "CS-Daten in getrennten Systemen, keine Single Customer View",
    "Daten werden in Spreadsheets zusammengeklickt, selten aktualisiert, nur Teilansicht",
    "Teilintegration vorhanden, Lücken bei Nutzungs- oder Support-Daten, CSMs machen manuelle Workarounds",
    "CS-, CRM- und Produktdaten integriert, Single Customer View im Dashboard verfügbar",
    "Unified CDP: Health, Usage, Support und Commercial in einer Ansicht, in Echtzeit aktualisiert, feeds automatisierte Plays"
  ]
},
{
  id: 6018, pillar: 6, type: "scale",
  title: "Tracken Sie Logo Churn und Revenue Churn getrennt, und sind sie in den letzten zwei Quartalen auseinandergelaufen?",
  options: [
    "Nur eine Churn-Zahl im Board-Pack: Logo- und Revenue-Churn werden nicht getrennt",
    "Beide werden berechnet, im Review zusammengeworfen, Divergenz nicht analysiert",
    "Logo- und Revenue-Churn getrennt getrackt, Divergenz fällt auf, wird aber nicht root-cause-analysiert",
    "Beide getrennt, monatlich reviewed, Divergenz-Ursachen analysiert und dokumentiert",
    "Dual-Churn-Diagnose: Logo- und Revenue-Churn getrackt und getrendet, Divergenz pro Kohorte und Segment, feeds CS-Kapazitäts- und Expansion-Plan"
  ]
},
{
  id: 6019, pillar: 6, type: "scale",
  title: "Wie vorhersagbar ist Ihr NRR, und wie sicher ist Ihr NRR-Forecast drei Quartale nach vorn?",
  options: [
    "NRR ist Lotterie: Retention und Expansion schwanken Quartal für Quartal",
    "NRR-Trend wird getrackt, Forecast hält nur 30 bis 60 Tage",
    "NRR 90 Tage nach vorn modelliert, Accuracy schwankt",
    "NRR 180 Tage nach vorn geforecasted mit dokumentiertem Renewal- und Expansions-Pipeline-Input",
    "NRR-Forecast durchmodelliert: Renewal-Risiko, Expansion-Pipeline und Churn-Prädiktoren wöchentlich aktualisiert, im Board-Pack reviewed"
  ]
},
{
  id: 6020, pillar: 6, type: "scale",
  title: "Wie viele cross-funktionale GTM-Entscheidungen im letzten Quartal wurden direkt durch CS-Signale getrieben, und wird das irgendwo getrackt?",
  options: [
    "Keine: CS-Intelligence fließt nicht in cross-funktionale Entscheidungen",
    "Kundensignale erreichen andere Teams informell, keine Entscheidung ist rückführbar",
    "Einige Entscheidungen waren CS-beeinflusst, die Verbindung ist inkonsistent dokumentiert",
    "CS-Signale im strukturierten Forum reviewed, lassen sich auf dokumentierte GTM- oder Produktentscheidungen mappen",
    "Closed-Loop-CS-Intelligence: Signale geloggt, cross-funktional reviewed, Entscheidungen mit Owner und Outcome getrackt"
  ]
},

// ===========================================================
// PILLAR 7: REVENUE OPERATIONS & SYSTEMS (20 QUESTIONS)
// ===========================================================

{
  id: 7001, pillar: 7, type: "scale",
  title: "Wie sauber sind Ihre CRM-Records, und wie messen Sie Datenqualität tatsächlich, statt sie zu hoffen?",
  subtitle: "Bitte auf Ihr Hauptsegment und primäre GTM-Motion beziehen, falls die Frage nicht ausdrücklich differenziert.",
  options: [
    "CRM-Daten sind unzuverlässig: unvollständig, Duplikate, Felder veraltet",
    "Datenqualität wird im Meeting angemahnt, aber weder gemessen noch erzwungen",
    "Periodische Audits finden statt, dieselben Hygieneprobleme kommen alle drei Monate wieder",
    "CRM-Data-Quality-Score monatlich gemessen, Owner pro Feld, Korrekturziele dokumentiert",
    "CRM-Hygiene hartverdrahtet: Pflichtfelder als Stage-Gate erzwungen, Completeness wöchentlich gescored, Monats-Report an Leadership"
  ]
},
{
  id: 7002, pillar: 7, type: "scale",
  title: "Nach Ihrer letzten Sales-Prozess-Änderung: wie viele Tage bis Stages und Pflichtfelder im CRM nachgezogen waren, und wer war der Owner?",
  options: [
    "CRM ist Kontakt-Log: der echte Sales-Prozess lebt woanders",
    "CRM-Stages existieren, bilden aber nicht ab, wie Deals wirklich laufen",
    "CRM bildet den Prozess grob ab, Exit-Kriterien und Pflichtfelder sind Schweizer Käse",
    "Stages, Exit-Kriterien und Pflichtfelder im CRM spiegeln den echten Sales-Prozess",
    "CRM als gesteuerter Prozessspiegel: Stage-Gates erzwungen, Deal-Review-Prep automatisiert, Konfig nach jeder Prozessänderung reviewed"
  ]
},
{
  id: 7003, pillar: 7, type: "scale",
  title: "Wie gut sind GTM-Workflows dokumentiert, und wie konsequent hält sich jedes Team über Regionen hinweg daran?",
  options: [
    "Keine Prozess-Docs: Workflows leben in Tribal Knowledge und Rep-Köpfen",
    "Einige Prozesse in Confluence, Coverage löchrig, Zugang uneinheitlich",
    "Core-Prozesse dokumentiert, werden aber nicht konsequent gelebt",
    "Prozessbibliothek deckt alle wichtigen GTM-Workflows ab, quartalsweise reviewed und ans Onboarding gekoppelt",
    "Prozessbibliothek gesteuert: versioniert, mit Access-Log, Abweichungen pro Team monatlich im Ops-Review sichtbar"
  ]
},
{
  id: 7004, pillar: 7, type: "scale",
  title: "Wie weit automatisiert Ihr GTM-Stack Repeat-Work, und wo fressen manuelle Tasks noch Rep- und Ops-Stunden?",
  options: [
    "GTM läuft manuell: Automatisierung ist minimal",
    "Basic-Automation in E-Mail und CRM, Handoffs laufen per Hand",
    "Core-Workflows automatisiert, Reporting und Routing schlucken Stunden pro Woche",
    "Die meisten Routine-Workflows automatisiert, Ausnahmen dokumentiert, Override-Kontrollen gesetzt",
    "Automation-Layer voll instrumentiert: Routing, Sequencing, Reporting und Alerting laufen auto, manuelle Arbeit bleibt auf Judgment-Themen beschränkt"
  ]
},
{
  id: 7005, pillar: 7, type: "scale",
  title: "Können Sie einen Prospect von First Touch bis Closed-Won verfolgen, ohne Excel aufzumachen, und wie lange dauert das?",
  options: [
    "Systeme sind Silos: End-to-End-Tracking nur mit manueller Excel-Arbeit",
    "Teilintegrationen vorhanden, Datenlücken und Sync-Errors sind Alltag",
    "Kernsysteme integriert, einzelne Datenflüsse brauchen manuelle Abstimmung",
    "CRM, MAP und SEP voll integriert, Datenflüsse monatlich gereviewed",
    "GTM-Datenarchitektur kohärent: alle Systeme integriert, Datenqualität in Echtzeit überwacht, Integration Health quartalsweise reviewed"
  ]
},
{
  id: 7006, pillar: 7, type: "scale",
  title: "Wie regelbasiert läuft Lead-Routing, und wie viele Minuten vergehen, bis ein MQL auf dem Rep-Desk liegt?",
  options: [
    "Lead-Routing manuell: SDR-Manager verteilt Leads per Hand",
    "Basic-Routing-Regeln im CRM, Ausnahmen sind Alltag und werden nicht protokolliert",
    "Routing-Regeln decken die meisten Szenarien ab, Edge Cases erzeugen Double-Assignments und Delays",
    "Routing-Framework dokumentiert, alle Lead-Typen abgedeckt, Coverage quartalsweise reviewed",
    "Routing-Engine automatisiert: Regeln dokumentiert, getestet und überwacht, Routing-Speed und Accuracy wöchentlich getrackt"
  ]
},
{
  id: 7007, pillar: 7, type: "scale",
  title: "Wie kosteneffizient laufen Ihr GTM-Stack und Ihre Verträge, und wann haben Sie zuletzt auf Tool-Redundanz und Seat-Leerlauf geprüft?",
  options: [
    "Kein Tech-Stack-Audit: Tools werden lizenziert und vergessen",
    "Grober Tool-Overview existiert, kein formales Audit oder Rationalisierungsprozess",
    "Jährliches Stack-Review findet statt, Seat-Nutzung und Vertragsoptimierung werden nicht getrackt",
    "Halbjährliches Tech-Stack-Audit mit Usage, Contract Value und Redundanz, Actions dokumentiert",
    "Stack-Governance kontinuierlich: Usage monatlich überwacht, Verträge jährlich gebenchmarkt, Rationalisierungs-Entscheidungen quartalsweise im RevOps-Review"
  ]
},
{
  id: 7008, pillar: 7, type: "scale",
  title: "Ist RevOps strategischer Partner oder Ticket-Abarbeitung, und wer setzt die Prioritäten?",
  options: [
    "RevOps ist Ticket-Desk: es arbeitet, wer am lautesten schreit",
    "RevOps hat einen Backlog, Priorisierung ist inkonsistent und nicht gesteuert",
    "RevOps priorisiert nach Team-Request, Business-Impact-Gewichtung bleibt informell",
    "RevOps fährt Sprint-basierte Priorisierung, quartalsweise mit GTM-Leadership abgestimmt",
    "RevOps strategisch aufgestellt: gesteuerter Intake, Impact-gewichtete Roadmap, Stakeholder-Review quartalsweise"
  ]
},
{
  id: 7009, pillar: 7, type: "scale",
  title: "Für Ihre Top-3-GTM-Tools nach Spend: wie hoch ist die Daily Active Usage vs. lizenzierte Seats, und wann haben Sie das zuletzt geprüft?",
  options: [
    "Tool-Adoption wird nicht getrackt: Seats werden gekauft und als genutzt unterstellt",
    "Grobe Ahnung, welche Tools leerstehen, DAU vs. Seats ist nicht gemessen",
    "Usage für ein Kern-Tool getrackt, die anderen bleiben im Blindflug",
    "Usage für alle Primär-Tools getrackt, quartalsweise reviewed, Reallocation-Entscheidungen sind zäh",
    "Tool-Adoption-Programm gesteuert: DAU vs. Seats monatlich pro Tool, Unterauslastung triggert 30-Tage-Konsolidierungs-Check, Cost-per-Active-User als gesteuerter KPI"
  ]
},
{
  id: 7010, pillar: 7, type: "scale",
  title: "Wie systematisch messen und steuern Sie GTM-Effizienz, und woher wissen Sie, ob Sie effizienter oder ineffizienter werden?",
  options: [
    "GTM-Effizienz wird nicht gemessen: nur Top-Line-Revenue zählt",
    "Einzelne Effizienz-Metriken im Board-Pack, kaum reviewed",
    "Core-Effizienz-KPIs getrackt, ohne Ziel oder Benchmark",
    "GTM-Effizienz-KPIs monatlich gegen Ziel und Historie reviewed",
    "GTM-Efficiency-Dashboard monatlich reviewed: CAC, Payback, Pipeline Velocity und Burn Multiple gebenchmarkt, feeds quartalsweise Investitionsentscheidungen"
  ]
},
{
  id: 7011, pillar: 7, type: "scale",
  title: "Wie gesteuert laufen Daten- und Prozess-Changes, und wie verhindern Sie, dass ein Shadow-Change Ihre Reports bricht?",
  options: [
    "Keine Governance: jeder Admin kann CRM-Felder, Prozesse oder Integrationen ändern",
    "Informelle Norms, Shadow-Changes sind Alltag",
    "Change-Request-Prozess existiert, Einhaltung ist inkonsistent",
    "Change-Governance dokumentiert: Requests reviewed, Impact assessed, Changes im Log",
    "Change Control Board formal: jedes GTM-System- und Prozess-Change wird vor Deployment reviewed, approved, getestet und dokumentiert"
  ]
},
{
  id: 7012, pillar: 7, type: "scale",
  title: "Wie rational sind Ihre Territories und Quotas, und wann haben Sie sie zuletzt formell gegen Account-Potential neu geschnitten?",
  options: [
    "Territories und Quotas sind historisch gewachsen: kein formales Design oder Review",
    "Quotas werden top-down gesetzt, Territory-Design ist nicht datengestützt",
    "Jährliches Quota- und Territory-Review findet statt, Prozess ist nicht datengetrieben",
    "Territory- und Quota-Design folgt dokumentiertem Framework, jährlich mit Finance reviewed",
    "Territory- und Quota-Modell datengetrieben: Account-Potential, Rep-Kapazität und Market Opportunity quartalsweise reviewed, Mid-Year-Adjustments dokumentiert"
  ]
},
{
  id: 7013, pillar: 7, type: "scale",
  title: "Wie strukturell ist RevOps über Sales, Marketing und CS integriert, und hat RevOps einen Sitz in der GTM-Planung?",
  options: [
    "RevOps bedient eine Funktion, typischerweise Sales: kein cross-funktionaler Scope",
    "RevOps spannt über Funktionen, operiert aber reaktiv statt in der Planung",
    "RevOps nimmt an GTM-Planung teil, ist aber kein Co-Owner von Prozessen oder Tooling",
    "RevOps formal Co-Owner des GTM-Operating-Models, der Prozesse und Tooling-Entscheidungen",
    "RevOps strategisch: Co-Owner von Planung, Daten und Prozessen über alle Revenue-Funktionen, Sitz im monatlichen Leadership-Review"
  ]
},
{
  id: 7014, pillar: 7, type: "scale",
  title: "Wie actionable sind Ihre GTM-Dashboards, und wer reviewed sie in welcher Kadenz?",
  options: [
    "Keine Dashboards: Reporting läuft über Excel-Pulls",
    "Dashboards existieren, werden selten geöffnet oder für Entscheidungen genutzt",
    "Standard-Reports existieren, Daten wird nicht vertraut und nicht actioned",
    "Dashboards werden in wöchentlichen GTM-Meetings gereviewed, Actions dokumentiert",
    "Reporting gesteuert: automatisierte Dashboards in Daily-, Weekly- und Monthly-Kadenz, Decision Log trackt Actions aus jedem Review"
  ]
},
{
  id: 7015, pillar: 7, type: "scale",
  title: "Kann Ihr Team eine End-to-End-Kundensicht abrufen, First Touch bis aktueller Health, ohne Excel-Zusammenstellung?",
  options: [
    "Keine End-to-End-Kundensicht: Daten liegen in getrennten Tools",
    "Teilansicht lässt sich manuell zusammenstellen, kostet Stunden",
    "Kundensicht existiert, Accuracy erfordert manuelle Korrektur",
    "Automatisierte Single Customer View im CRM oder BI, Tages-Refresh",
    "Unified Customer Record in Echtzeit: alle Touchpoints, Health Signals und Commercial Data in einer Ansicht, kein manueller Eingriff"
  ]
},
{
  id: 7016, pillar: 7, type: "scale",
  title: "Welcher Prozentsatz Ihrer GTM-Teams folgte im letzten Quartal den von RevOps definierten Prozessen ohne Abweichung, und woher wissen Sie das?",
  options: [
    "Keine Standardisierung: jedes Team fährt seinen eigenen Weg",
    "Gemeinsame Prozesse existieren, Adoption ist Flickenteppich",
    "Core-Prozesse standardisiert, Adoption wird informell getrackt",
    "GTM-Prozesse standardisiert, Adoption pro Team im Dashboard, Abweichungen monatlich adressiert",
    "Standardisierungs-Programm: Compliance pro Team gescored, monatlich reviewed, Abweichungs-Root-Causes im quartalsweisen Audit"
  ]
},
{
  id: 7017, pillar: 7, type: "scale",
  title: "Wie rigoros laufen Pipeline- und Forecast-Reviews, und wie stark verbessert sich die Forecast-Accuracy im Quartalsverlauf?",
  options: [
    "Kein formaler Forecast-Prozess: Revenue-Prognose ist Bauchgefühl",
    "Forecast wird erstellt, Accuracy wird nicht getrackt oder gegen Ist reviewed",
    "Quartalsforecast existiert, Accuracy driftet im Quartalsverlauf weg",
    "Wöchentliches Forecast-Review mit Accuracy-Tracking und Variance-Erklärung",
    "Forecast-Operating-System: Call-to-Close-Accuracy wöchentlich getrackt, Variance erklärt, Methodik nach jedem Quartal reviewed"
  ]
},
{
  id: 7018, pillar: 7, type: "scale",
  title: "Welcher Prozentsatz der RevOps-Requests im letzten Quartal wurde on-time geliefert, und können Sie bei den größeren den Business Impact zeigen?",
  options: [
    "On-Time-Delivery wird nicht getrackt, Business Impact bleibt unbekannt",
    "Einige Requests werden on-time geliefert, weder SLA noch Impact werden reviewed",
    "On-Time-Rate wird für einzelne Requests getrackt, Impact-Dokumentation ist inkonsistent",
    "On-Time-Delivery wird getrackt, größere Requests haben Post-Delivery-Impact-Dokumentation",
    "RevOps-Delivery gesteuert: OTR monatlich getrackt, größere Requests brauchen Impact-Dok, Backlog-Priorisierung richtet sich am gelieferten Business Value aus"
  ]
},
{
  id: 7019, pillar: 7, type: "scale",
  title: "Wie strategisch trägt RevOps zur GTM-Planung bei, und ist RevOps-Kapazität Teil der Jahresplanung?",
  options: [
    "RevOps ist von der Planung ausgeschlossen: operative Kapazität taucht nicht auf",
    "RevOps wird gelegentlich konsultiert, ist kein formaler Planungs-Input",
    "RevOps trägt jährlich zu System- und Prozessplanung bei",
    "RevOps ist formaler Planungs-Input: Kapazität, Tooling und Prozess-Roadmap im Jahr und Quartal reviewed",
    "RevOps Co-Owner des GTM-Operations-Plans: Systemkapazität, Prozess-Roadmap und Dateninfrastruktur werden mit Headcount und Budget zusammen geplant"
  ]
},
{
  id: 7020, pillar: 7, type: "scale",
  title: "Welcher Prozentsatz Ihrer Reps nutzt die Core-GTM-Tools ohne Druck, und wie unterscheiden Sie Voluntary Adoption von Compliance?",
  options: [
    "Tools werden nur aus Compliance genutzt: Reps umgehen sie, wenn möglich",
    "Die meisten Reps tolerieren die Tools, Workarounds sind Alltag, der Stack erzeugt mehr Reibung als er löst",
    "Core-Tools werden adäquat genutzt, Reps sehen aber keinen echten Workflow-Nutzen",
    "Die meisten Reps nutzen Core-Tools freiwillig, Feedback wird gesammelt, UX-Issues werden adressiert",
    "Rep-zentrischer Stack mit Voluntary Adoption im Dashboard: Reps greifen proaktiv zu, Workflow-Friction quartalsweise reviewed, Tools mit schlechtem Score werden eingestellt oder re-designed"
  ]
},

// ===========================================================
// PILLAR 8: PRICING & PACKAGING (20 QUESTIONS)
// ===========================================================

{
  id: 8001, pillar: 8, type: "scale",
  title: "Wie konkret ist Ihre Preisstrategie, und wann haben Sie sie zuletzt gegen Markt- und Margendaten geprüft?",
  subtitle: "Bitte auf Ihr Hauptsegment und primäre GTM-Motion beziehen, falls die Frage nicht ausdrücklich differenziert.",
  options: [
    "Keine Preisstrategie: einmal gesetzt, nie reviewed",
    "Informelle Preislogik im Kopf des CEO, nicht dokumentiert",
    "Preisstrategie-Dokument existiert, seit über 12 Monaten nicht aktualisiert",
    "Preisstrategie jährlich gegen Win/Loss, Competitive Benchmark und Margenziel geprüft",
    "Preisstrategie gesteuert: halbjährliches Review, gespeist aus Buyer Research, Deal-Daten und Competitive Intelligence, Begründung dokumentiert"
  ]
},
{
  id: 8002, pillar: 8, type: "scale",
  title: "Bildet Ihr Packaging ab, wie Kunden tatsächlich starten und expandieren, und haben Sie es in 12 Monaten gegen echte Nutzungsdaten validiert?",
  options: [
    "Packaging wurde intern designt, Kunden-Adoption-Patterns blieben außen vor",
    "Packaging passt grob zu Nutzungs-Patterns, Friction an Expansion-Points",
    "Packaging passt für Primärsegmente, sekundäre Segmente fallen durch",
    "Packaging gegen Adoption-Daten validiert, jährliches Review",
    "Packaging aus Adoption-Daten gebaut: Expansion-Trigger, Upgrade-Paths und Value-Metric-Alignment durch Buyer Interviews und Usage-Analyse belegt"
  ]
},
{
  id: 8003, pillar: 8, type: "scale",
  title: "Versteht ein Käufer Ihre Preise in zwei Minuten auf der Pricing-Page, oder muss ein Rep sie erklären?",
  options: [
    "Preise brauchen erhebliche Erklärung: Käufer sind regelmäßig verwirrt",
    "Die meisten Prospects brauchen einen Call, um zu verstehen, was sie zahlen",
    "Preise sind für Primärsegmente klar, andere werden verwirrt",
    "Preise sind klar und selbsterklärend für alle Primärsegmente",
    "Preisklarheit in Buyer-Comprehension-Tests validiert: alle Segmente wählen die richtige Stufe ohne Sales-Involvement"
  ]
},
{
  id: 8004, pillar: 8, type: "scale",
  title: "Wie rigoros testen Sie Willingness-to-Pay über Ihre Kernsegmente, und mit welcher Methodik?",
  options: [
    "WTP unbekannt: Preise kamen aus Kostenkalkulation oder Bauchgefühl",
    "Anekdoten aus preis-verlorenen Deals, kein strukturierter Beleg",
    "Einzelne Buyer Interviews haben Pricing informiert, Research ist nicht systematisch",
    "WTP durch strukturierte Buyer Research und Close-Rate-Analyse pro Preisband validiert",
    "WTP-Modell auf Segmentebene: durch kontrollierte Research, Win/Loss-Preisanalyse und Close Rate pro Preisstufe validiert, jährliches Review"
  ]
},
{
  id: 8005, pillar: 8, type: "scale",
  title: "Was ist Ihre Evidenz für Ihr aktuelles Preisniveau: Buyer Interviews, Close-Rate-Analyse pro Preisband oder Competitive Benchmarking? Wann zuletzt aktualisiert?",
  options: [
    "WTP unbekannt: Preise kommen aus Kostenbasis oder internen Annahmen",
    "Anekdoten aus preis-verlorenen Deals, keine strukturierte Research dahinter",
    "Einzelne Buyer Interviews haben Pricing informiert, Research ist weder systematisch noch segmentiert",
    "WTP durch strukturierte Buyer Research und Close-Rate-Analyse pro Preisband validiert",
    "WTP-Modell auf Segmentebene: validiert durch kontrollierte Research, Win/Loss-Pricing und Close Rate pro Preisstufe, jährlich reviewed und direkt in Packaging-Entscheidungen einfließend"
  ]
},
{
  id: 8006, pillar: 8, type: "scale",
  title: "Wie eng sind Ihre Preise am messbaren Value verankert, den Ihr Produkt pro Segment liefert?",
  options: [
    "Preise sind kosten- oder competitor-basiert: Value ist nicht der Anker",
    "Informelle Value-Story in Verhandlungen, Preise sind nicht value-abgeleitet",
    "Preise sind für Primärsegmente grob am Value ausgerichtet",
    "Value-to-Price-Framework dokumentiert, validiert durch Customer-ROI-Analyse pro Segment",
    "Value-Based Pricing mit ROI-Modell pro Segment: Value-Anker durch Buyer Interviews getestet, jährlich aktualisiert"
  ]
},
{
  id: 8007, pillar: 8, type: "scale",
  title: "Basiert Ihre Packaging-Architektur darauf, wie Kunden adoptieren und expandieren, oder darauf, was am schnellsten zu bauen war? Wann zuletzt gegen reale Usage-Daten validiert?",
  options: [
    "Packaging intern designt, ohne Referenz zu Adoption-Patterns",
    "Packaging passt lose zu Usage, Friction an Expansion-Points",
    "Packaging passt für Primär-Adoption, sekundäre Segmente und Expansion-Paths werden schlecht bedient",
    "Packaging gegen Adoption-Daten validiert, jährliches Review gegen Usage-Realität",
    "Packaging aus Adoption- und Expansion-Daten designt: Upgrade-Paths, Usage-Trigger und Value-Metric-Alignment durch Customer Interviews und Cohort-Analyse validiert"
  ]
},
{
  id: 8008, pillar: 8, type: "scale",
  title: "Wie klar wissen Sie, welche Features Willingness-to-Pay treiben, und fließt das direkt in Bundling und Preisstufen?",
  options: [
    "Keine Feature-Level-Pricing-Intelligence: Features werden gebündelt, ohne Value-Tests",
    "Intuitive Annahmen treiben Feature-Bundles, keine Research dahinter",
    "Einzelne Feature-Value-Tests gefahren, werden nicht systematisch angewendet",
    "Feature-to-WTP-Mapping durch Buyer Research und Close-Rate-Analyse validiert",
    "Live-Feature-Value-Modell: Feature-Importance und WTP durch Buyer Interviews und Usage-Daten kontinuierlich getestet, fließen jährlich ins Packaging"
  ]
},
{
  id: 8009, pillar: 8, type: "scale",
  title: "Welcher Prozentsatz Ihrer Expansion-Deals im letzten Quartal brauchte eine komplette Vertragsneuverhandlung, und verbessert sich der Wert?",
  options: [
    "Jede Expansion braucht einen neuen Vertragsprozess: Packaging plant kein Wachstum ein",
    "Expansion geht, Packaging- oder Vertragsstruktur erzeugt Commercial Friction",
    "Einzelne Expansion-Paths existieren, gängige Wachstumsszenarien werden nicht sauber abgedeckt",
    "Packaging hat definierte Expansion-Paths, gegen typische Customer-Growth-Patterns validiert",
    "Modulare Expansion-Architektur: Usage-, Seat- und Feature-Trigger werden automatisch fakturiert ohne Neuverhandlung, Expansion Leakage quartalsweise getrackt und Packaging bei Leakage aktualisiert"
  ]
},
{
  id: 8010, pillar: 8, type: "scale",
  title: "In Ihren letzten 10 Deals: wie viele Prospects haben nach einer Preis-Erklärung gefragt, die aus Ihrer Pricing-Page selbstevident hätte sein müssen?",
  options: [
    "Alle oder fast alle brauchten erhebliche Preis-Erklärung: unsere Preise sind für kein Segment selbsterklärend",
    "Die meisten brauchten mindestens einen Follow-up-Call, um zu verstehen, was sie zahlen",
    "Die Hälfte brauchte Klärung: Preise sind für erfahrene Käufer grob verständlich, für andere verwirrend",
    "Weniger als 3 von 10 brauchten eine Erklärung, die meisten Primärsegment-Käufer wählen die richtige Stufe selbst",
    "Preisklarheit wird strukturiert validiert: weniger als 1 von 10 Primärsegment-Prospects braucht Rep-Erklärung"
  ]
},
{
  id: 8011, pillar: 8, type: "scale",
  title: "Wie präzise kennen Sie die Preissensitivität pro Segment, und fließt das in die Segment-Priorisierung?",
  options: [
    "Preissensitivität wird nicht nach Segment analysiert: eine Preisstruktur bedient alle",
    "Grobe Ahnung, welche Segmente beim Preis zucken",
    "Segment-Preissensitivität informell aus Deal-Daten abgelesen",
    "Preissensitivität pro Segment analysiert, durch Deal- und Interview-Daten validiert, jährlich reviewed",
    "Segment-Price-Sensitivity-Modell: Elastizität pro Segment quantifiziert, fließt in Preisarchitektur, Discount Governance und GTM-Resource-Allocation"
  ]
},
{
  id: 8012, pillar: 8, type: "scale",
  title: "Basiert Ihr Packaging auf dokumentierter WTP-Research, oder auf internen Annahmen, welche Features wertvoll sind?",
  options: [
    "Packaging intern designt: keine Buyer Research zum Feature-Value jemals gefahren",
    "Intuitive Annahmen treiben Feature-Bundles, keine strukturierte Research dahinter",
    "Einzelne Feature-Value-Tests gefahren, Ergebnisse fließen nicht systematisch ins Packaging",
    "Feature-to-WTP-Mapping durch Buyer Research und Close-Rate-Analyse pro Preisband validiert",
    "Live-Feature-Value-Modell: Feature-Importance und WTP durch Buyer Interviews und Usage-Daten getestet, jährlich reviewed, direkt Packaging-Entscheidungen leitend"
  ]
},
{
  id: 8013, pillar: 8, type: "scale",
  title: "Gibt Ihr Pricing und Packaging wirklich unterschiedliche Konfigurationen für Personas, Use Cases oder Branchen, oder ist es im Kern eine Struktur für alle?",
  options: [
    "Universelle Preisstruktur bedient alle Personas und Use Cases",
    "Informelle Preis-Adjustments pro Persona, keine dokumentierte Logik",
    "Einzelne Persona- oder Branchen-Differenzierung vorhanden, uneinheitlich gelebt",
    "Persona- oder Use-Case-Packaging dokumentiert, in Deal-Strukturierung genutzt",
    "Packaging-Architektur vollständig differenziert: Persona-, Use-Case- und Branchen-Varianten durch Buyer Research validiert"
  ]
},
{
  id: 8014, pillar: 8, type: "scale",
  title: "Wann haben Sie zuletzt Ihre Preise formal gegen Competitors gebenchmarkt, und hat die Analyse eine Preis- oder Packaging-Entscheidung verändert?",
  options: [
    "Keine Competitive-Pricing-Daten: Position gegenüber Alternativen ist unbekannt",
    "Grobes Bewusstsein aus Sales-Calls, weder strukturiert noch aktuell",
    "Competitive-Pricing-Review läuft, Datenqualität und Aktualität sind dünn",
    "Jährliches Competitive-Pricing-Review mit dokumentierten Positioning-Implikationen",
    "Competitive-Pricing-Intelligence-Programm: halbjährlicher Benchmark, Deal-Level-Competitor-Price im CRM, Position quartalsweise reviewed, Reaktion bei Shift dokumentiert"
  ]
},
{
  id: 8015, pillar: 8, type: "scale",
  title: "Wie viele Deals im letzten Quartal erzeugten Channel Conflict zwischen Self-Serve und Enterprise-Motion, und wer owned welchen Account laut Regel?",
  options: [
    "Channel Conflict wird nicht gemanagt: Self-Serve und Enterprise ziehen denselben Account, ohne Regel",
    "Konflikte sind bekannt, werden fallweise gelöst, keine formale Ownership-Regel",
    "Informelle Regel löst die meisten Konflikte, Edge Cases produzieren interne Streits",
    "Ownership-Regel dokumentiert, Motion pro Account klar, die meisten Konflikte ohne Eskalation gelöst",
    "Channel Conflict als KPI: Ownership-Regel im CRM erzwungen, Konfliktrate monatlich überwacht, Regel-Gaps im quartalsweisen RevOps-Review geschlossen"
  ]
},
{
  id: 8016, pillar: 8, type: "scale",
  title: "Wie systematisch sehen Sie, wo Price- oder Packaging-Friction Deals blockt oder den Sales Cycle verlangsamt?",
  options: [
    "Pricing Friction fällt erst auf, wenn der Deal verloren ist",
    "Sales-Anekdoten zeigen Friction informell, kein strukturiertes Tracking",
    "Lost-Deal-Analyse deckt gelegentlich Pricing Blocker auf",
    "Pricing Friction in Lost-Deal-Analyse getrackt, quartalsweise mit Finance und RevOps reviewed",
    "Pricing-Friction-Intelligence: Blocker pro Segment und Deal-Stage getrackt, quartalsweise reviewed, treiben Packaging-Updates und Discount-Rule-Changes"
  ]
},
{
  id: 8017, pillar: 8, type: "scale",
  title: "Wie rigoros testen Sie Preisänderungen, und wie läuft Ihr Validierungsprozess vor dem Full Rollout?",
  options: [
    "Keine Preistests: Changes werden auf CEO-Entscheid ausgerollt",
    "Preisänderungen werden ohne formalen Validierungsprozess live gesetzt",
    "Einzelne Price Experiments gefahren, Ergebnisse werden informell bewertet",
    "Price-Change-Prozess definiert: Hypothese, Test-Cohort, Messperiode und Go/No-Go-Kriterien vor jedem Change",
    "Pricing Governance systematisch: jeder Change wird pilotiert, Conversion- und Margin-Impact gemessen, Rollout-Entscheidung dokumentiert"
  ]
},
{
  id: 8018, pillar: 8, type: "scale",
  title: "Für jede Geografie, in der Sie aktiv verkaufen: sind Preise gegen lokale WTP validiert, oder ist es eine direkte FX-Umrechnung Ihres Primärmarkts?",
  options: [
    "Globale Preisstruktur, überall angewendet, keine Geo-Logik",
    "Informelle Geo-Adjustments in Verhandlungen, keine dokumentierte Regel",
    "Regionale Preise existieren, nicht gegen lokale Marktdaten validiert",
    "Geo-spezifische Preise durch Buyer Research und lokale Deal-Daten validiert",
    "Geo-Pricing-Modell: lokale WTP validiert, PPP-Logik wo relevant, regionale Preise jährlich reviewed"
  ]
},
{
  id: 8019, pillar: 8, type: "scale",
  title: "Wie systematisch messen Sie Pricing Performance, und welche Signale triggern eine Preis-Überprüfung?",
  options: [
    "Pricing Performance wird nicht getrackt: nur Top-Line-Revenue ist das Signal",
    "Win Rate und Ø Deal Size werden getrackt, aber nicht auf Preisstruktur gemappt",
    "Einzelne Pricing-Metriken jährlich reviewed, keine definierten Schwellen",
    "Pricing-Performance-Review quartalsweise: Win Rate pro Preisband, Discount Frequency und Expansion Rate gegen Ziele",
    "Pricing Analytics: Win Rate, Discount Rate, Deal Velocity und NRR monatlich pro Segment reviewed, definierte Trigger lösen Pricing-Review aus"
  ]
},
{
  id: 8020, pillar: 8, type: "scale",
  title: "Wie automatisch fakturiert Ihr Pricing Value Growth, etwa Usage-Spikes oder Seat-Adds, ohne manuelle Neuverhandlung?",
  options: [
    "Jede Value-Expansion erfordert manuelle Neuverhandlung",
    "Einige Expansion-Trigger existieren, Commercial-Prozess ist weitgehend manuell",
    "Seat- oder Usage-Expansion vertraglich vorgesehen, nicht automatisiert",
    "Die meisten Expansion-Szenarien vertraglich geregelt und automatisch fakturiert",
    "Expansion-Modell voll automatisiert: Usage-, Seat- und Feature-Trigger fakturieren ohne Sales-Involvement, Leakage quartalsweise reviewed"
  ]
},

// ===========================================================
// PILLAR 9: PRODUCT READINESS (20 QUESTIONS)
// ===========================================================

{
  id: 9001, pillar: 9, type: "scale",
  title: "Wie oft tauchen Produktlücken erst im Late Stage auf, also nach Demo, während PoC oder in der Beschaffung?",
  subtitle: "Bitte auf Ihr Hauptsegment und primäre GTM-Motion beziehen, falls die Frage nicht ausdrücklich differenziert.",
  options: [
    "Late-Stage-Überraschungen sind Alltag: wir verlieren regelmäßig Deals deswegen",
    "Lücken tauchen regelmäßig spät auf, werden fallweise gepatcht, kein Präventionsprozess",
    "Lücken tauchen gelegentlich spät auf, ein Eskalationsprozess existiert",
    "Pre-Deal-Technik-Validierungsstep fängt die meisten Lücken ab, bevor sie Late Stage erreichen",
    "Zero-Surprise-Modell: Solution Fit wird in Discovery mit strukturiertem Framework bestätigt, Late-Stage-Gap-Rate quartalsweise getrackt und speist Sales-Prozess-Updates"
  ]
},
{
  id: 9002, pillar: 9, type: "scale",
  title: "Wie vorhersagbar erreichen neue Kunden den First Value, und wie tracken Sie das pro Kohorte?",
  options: [
    "Time-to-Value wird nicht gemessen: wir wissen nicht, wann Kunden erste Outcomes sehen",
    "Time-to-Value streut breit, kein Muster, kein Owner",
    "Time-to-Value-Benchmark existiert, Erreichung ist inkonsistent",
    "Time-to-Value pro Kohorte getrackt, quartalsweise reviewed, Verbesserungs-Actions dokumentiert",
    "Time-to-Value-Modell: Ziel pro Segment, Erreichung pro Account, Cohort-Trends monatlich in CS- und Produkt-Meetings reviewed"
  ]
},
{
  id: 9003, pillar: 9, type: "scale",
  title: "In einem Standard-Sales-Zyklus: welcher Prozentsatz der Demos endet mit einem klaren Next Step, und wissen Sie, welcher Demo-Teil das treibt?",
  options: [
    "Das Produkt lässt sich ohne lange Vorbereitung nicht effektiv demonstrieren",
    "Eine Demo existiert, braucht typischerweise Solution-Engineer-Beteiligung",
    "Referenz-Demo funktioniert für die meisten Cases, komplexe Szenarien brauchen Workarounds",
    "Standard-Demo-Framework deckt alle primären Use Cases ab und wird konsistent genutzt",
    "High-Conversion-Demo-System: segmentspezifisch, self-contained, Next-Step-Conversion quartalsweise pro Demo-Track getrackt"
  ]
},
{
  id: 9004, pillar: 9, type: "scale",
  title: "Wie viele Kundeneskalationen in den ersten 90 Tagen gingen im letzten Quartal auf eine Lücke zwischen Sales-Versprechen und Delivery zurück, und wird das getrackt?",
  options: [
    "Post-Sale-Realität weicht häufig von dem Verkauften ab: sofortige Friction, Vertrauensverlust",
    "Sales-vs-Delivery-Gaps sind häufig, werden fallweise behandelt",
    "Gaps treten gelegentlich auf, ein Prozess managt Erwartungen vor dem Handoff",
    "Implementation stimmt in den meisten Fällen mit Sales-Versprechen überein, Ausnahmen dokumentiert",
    "Sales und Delivery vertraglich aligned: Gaps getrackt, quartalsweise root-cause-analysiert, Muster speisen Sales-Prozess- oder Produkt-Changes"
  ]
},
{
  id: 9005, pillar: 9, type: "scale",
  title: "Wie natürlich passt das Produkt zu Ihrer gewählten GTM-Motion (SMB, Mid-Market, Enterprise) in Bezug auf Deployment, Configuration und Time-to-Value?",
  options: [
    "Das Produkt erzeugt konsequent Friction mit der gewählten GTM-Motion",
    "Produkt funktioniert für die Motion, braucht erhebliche Workarounds",
    "Teilfit: Produkt unterstützt einige Szenarien, erzeugt bei anderen Friction",
    "Produkt passt gut zur Motion, mit einzelnen Ausnahmen",
    "Produkt ist für die Motion konzipiert: Deployment, Configuration und Value-Timelines gegen Zielsegment-Erwartungen validiert"
  ]
},
{
  id: 9006, pillar: 9, type: "scale",
  title: "Wie konsistent passt das tatsächliche Onboarding zu dem, was im Sales-Zyklus versprochen wurde?",
  options: [
    "Post-Sale-Realität driftet oft von Sales-Versprechen ab: Friction ab Tag eins",
    "Sales-vs-Delivery-Gaps sind häufig",
    "Gaps treten gelegentlich auf, werden fallweise gehandelt",
    "Implementation passt in den meisten Fällen zum Sales-Versprechen, Ausnahmen dokumentiert",
    "Sales und Delivery vertraglich aligned: Gaps quartalsweise root-cause-analysiert"
  ]
},
{
  id: 9007, pillar: 9, type: "scale",
  title: "In Ihren letzten 10 Deals: wie oft kam eine Produktlimitierung hoch, die nicht in Ihrem Limitation Register stand, und was passierte danach?",
  options: [
    "Produktlimitierungen sind nirgends dokumentiert: Teams lernen sie im Deal oder im Onboarding kennen",
    "Einige Limitierungen sind informell bekannt, Sales und CS kommunizieren sie inkonsistent",
    "Limitation Doc existiert, wird nicht regelmäßig aktualisiert oder in Qualifikation genutzt",
    "Produktlimitierungen dokumentiert, pro Release aktualisiert, im Sales-Onboarding und in Qualifikation eingebaut",
    "Explizites Product Limitation Register: von Product gepflegt, quartalsweise mit Sales und CS reviewed, in Qualifikations-Playbooks und Onboarding-Skripten eingebaut"
  ]
},
{
  id: 9008, pillar: 9, type: "scale",
  title: "Wie zuverlässig kann Sales den Product Fit früh im Deal bestätigen oder disqualifizieren, ohne Late-Stage-Tech-Validierung?",
  options: [
    "Product Fit wird typischerweise erst im oder nach dem PoC bestätigt",
    "Fit-Assessment rutscht in Mid-Cycle, weil Qualifikationskriterien unklar sind",
    "Qualifikationskriterien existieren, werden nicht konsistent früh angewendet",
    "Qualifikations-Framework dokumentiert, in den meisten Deals frühe Fit-Bestätigung möglich",
    "Self-Qualification-Playbook: Sales bestätigt oder disqualifiziert Fit bis Ende Discovery, mit definierten produktbasierten Kriterien"
  ]
},
{
  id: 9009, pillar: 9, type: "scale",
  title: "Wie gut sind Produktlimitierungen und Constraints dokumentiert, und wenden Sales und CS das Wissen konsequent an?",
  options: [
    "Produktlimitierungen sind nirgends dokumentiert: Teams lernen sie in Deals oder im Onboarding",
    "Einzelne Limitierungen sind bekannt, Sales und CS kommunizieren sie inkonsistent",
    "Limitation Doc existiert, wird nicht regelmäßig aktualisiert oder referenziert",
    "Produktlimitierungen dokumentiert, pro Release aktualisiert, im Sales-Onboarding eingebaut",
    "Product Limitation Register explizit: von Product gepflegt, quartalsweise von Sales und CS reviewed, in Qualifikations- und Onboarding-Playbooks eingebaut"
  ]
},
{
  id: 9010, pillar: 9, type: "scale",
  title: "Wenn eine Produktlücke im Late Stage auftaucht: was ist der dokumentierte Eskalationspfad, und wie oft endet der in Closed-Won statt Lost?",
  options: [
    "Kein Eskalationspfad: Late-Stage-Lücken werden ad hoc gehandelt, von wem gerade da ist",
    "Informelle Eskalation existiert, Reps wissen wen sie anrufen, Ergebnisse streuen und werden nicht getrackt",
    "Eskalationsprozess dokumentiert, wird inkonsistent befolgt, Outcome-Impact unbekannt",
    "Eskalationspfad dokumentiert, wird in den meisten Fällen befolgt, Win Rate bei Eskalationen quartalsweise reviewed",
    "Gap-Escalation-System gesteuert: Pfad dokumentiert, konsequent befolgt, Win Rate getrackt und gebenchmarkt, wiederkehrende Gaps fließen zurück ins Product Limitation Register"
  ]
},
{
  id: 9011, pillar: 9, type: "scale",
  title: "Wie automatisiert läuft Ihr Customer-Onboarding, und wie viel Hand-Steering kostet ein Standard-Setup?",
  options: [
    "Onboarding komplett manuell: jeder Kunde kostet PS- oder CS-Stunden",
    "Onboarding überwiegend manuell, einzelne Template-Steps",
    "Mix aus Automation und Handarbeit, manueller Aufwand variiert stark pro Kunde",
    "Die meisten Onboarding-Steps automatisiert, Handarbeit auf definierte Ausnahmen begrenzt",
    "Onboarding für Standard-Configs voll automatisiert: manuelle Touchpoints getrackt, Completion Rate monatlich reviewed"
  ]
},
{
  id: 9012, pillar: 9, type: "scale",
  title: "Fragen Sie einen Sales Rep und einen CS-Manager unabhängig nach den drei größten Produktlimitierungen: stimmen ihre Antworten überein, und wann haben Sie das zuletzt getestet?",
  options: [
    "Sales, CS und Product haben materiell unterschiedliche Sicht auf Fähigkeiten und Limitierungen",
    "High-Level-Alignment steht, bricht bei Edge Cases und Customer-Calls auseinander",
    "Shared Product Doc existiert, wird nicht konsistent über Teams genutzt",
    "Einheitliches Produktverständnis durch regelmäßige cross-funktionale Syncs und gemeinsame Doku",
    "Single Source of Product Truth: Capability Limits, Known Limitations und Positioning werden von Sales, CS und Product gemeinsam gepflegt, quartalsweise auf Konsistenz getestet"
  ]
},
{
  id: 9013, pillar: 9, type: "scale",
  title: "Wie sauber integriert sich Ihr Produkt in bestehende Kunden-Stacks, und wie oft verzögern Integrations-Issues die Time-to-Value?",
  options: [
    "Integrations-Issues sind häufig, verzögern oder gefährden Deployments",
    "Integration funktioniert meistens, erfordert erheblichen IT-Aufwand auf Kundenseite",
    "Integration für Primär-Stacks ok, Lücken bei sekundären Stacks",
    "Integration Coverage gut dokumentiert und gegen Zielstacks validiert",
    "Certified-Integration-Ecosystem: Zielstacks validiert, Docs gepflegt, Integration Error Rate im CS-Reporting getrackt"
  ]
},
{
  id: 9014, pillar: 9, type: "scale",
  title: "Wie konsistent teilen Sales, CS und Product eine gemeinsame Sicht darauf, was das Produkt kann und was nicht?",
  options: [
    "Sales, CS und Product haben materiell unterschiedliche Sicht auf Produktfähigkeiten",
    "Alignment steht auf High Level, bricht bei Edge Cases und Kunden-Calls",
    "Shared-Positioning-Doc existiert, wird nicht konsistent angewendet",
    "Einheitliches Produktverständnis durch regelmäßige cross-funktionale Syncs und gemeinsame Doku",
    "Single Source of Product Truth: Capability Limits, Known Limitations und Positioning von Sales, CS und Product gemeinsam gepflegt, quartalsweise aktualisiert"
  ]
},
{
  id: 9015, pillar: 9, type: "scale",
  title: "Welcher Prozentsatz Ihrer Expansion-Deals im letzten Quartal brauchte Engineering-Arbeit, Custom-Config oder PS-Involvement zum Close, und verbessert sich der Wert?",
  options: [
    "Über 80% brauchten Engineering oder PS: Expansion war nie Self-Serve",
    "50 bis 80% brauchten technische Intervention: Standard-Expansion-Paths sind nicht zuverlässig Self-Serve",
    "20 bis 50% brauchten technische Arbeit, gängige Expansion-Szenarien laufen, Edge Cases brauchen Support",
    "Unter 20% brauchten technische Intervention, die meisten Expansion-Szenarien laufen nativ",
    "Unter 10% brauchen Engineering oder PS: Expansion-Paths dokumentiert und gegen reale Customer-Patterns getestet, Leakage quartalsweise reviewed"
  ]
},
{
  id: 9016, pillar: 9, type: "scale",
  title: "Wie umfassend und aktuell sind Produktdoku und Enablement-Material, und reicht das GTM-Teams aus, ohne an Product zu eskalieren?",
  options: [
    "Doku fehlt, veraltet oder nicht zugänglich",
    "Doku existiert, ist unvollständig, Product Team wird regelmäßig gepingt",
    "Doku deckt Core-Use-Cases ab, Lücken bei fortgeschrittenen Szenarien",
    "Umfassende Doku, Primär- und Sekundär-Use-Cases abgedeckt, pro Release aktualisiert",
    "Doku-System erstklassig: vollständig, versioniert, durchsuchbar, quartalsweise von GTM-Teams auf Suffizienz geprüft"
  ]
},
{
  id: 9017, pillar: 9, type: "scale",
  title: "Wie strukturiert submitten GTM-Teams Produkt-Feedback, und wie tracken Sie, ob es die Roadmap bewegt?",
  options: [
    "Kein Feedback-Prozess: GTM-Teams eskalieren an Product via Slack",
    "Ad-hoc-Feedback, kein Tracking von Input zu Outcome",
    "Strukturierter Submission-Prozess existiert, Roadmap-Impact bleibt opak",
    "Formal Feedback Loop: Inputs von Submission bis Roadmap-Review getrackt, Outcome für Submitter sichtbar",
    "Closed-Loop-GTM-to-Product-Feedback: Inputs geloggt, quartalsweise reviewed, transparent priorisiert, Outcomes an GTM-Teams zurückgespielt"
  ]
},
{
  id: 9018, pillar: 9, type: "scale",
  title: "Wie direkt speisen validierte GTM- und Kundensignale die Roadmap, statt interner Annahmen?",
  options: [
    "Roadmap wird von Engineering-Prioritäten und CEO-Intuition getrieben",
    "Customer Requests werden berücksichtigt, Gewichtung ist informell und opak",
    "Customer- und Market-Inputs fließen in die Planung, werden nicht systematisch bewertet",
    "Roadmap-Entscheidungen dokumentieren Market- und Customer-Evidence hinter jeder Priorität",
    "Evidence-Based Roadmap: jede bedeutsame Entscheidung hat ein dokumentiertes Signal mit Frequency, Revenue Impact und Retention-Korrelation"
  ]
},
{
  id: 9019, pillar: 9, type: "scale",
  title: "Welcher Prozentsatz neuer Deals im letzten Quartal brauchte eine Non-Standard-Bedingung, ein Custom-Delivery-Promise oder eine Prozess-Ausnahme, und wird diese Rate getrackt?",
  options: [
    "Ausnahmen sind die Norm: die meisten Deals brauchen Custom-Terms oder Delivery-Adjustments",
    "Signifikante Minderheit braucht Ausnahmen, Rate wird nicht getrackt, Treiber opak",
    "Exception Rate wird getrackt, nicht formell reviewed, Trend unbekannt",
    "Exception Rate quartalsweise getrackt, von Leadership reviewed, Treiber analysiert, um Wiederholung zu senken",
    "Exception Discipline gesteuert: Standard-Terms und -Delivery gelten für die Mehrheit, Exception Rate als KPI, jede Ausnahme geloggt, approved und root-cause-analysiert"
  ]
},
{
  id: 9020, pillar: 9, type: "scale",
  title: "Wie konsistent lässt sich Ihr Produkt verkaufen, deployen und skalieren, ohne von Standard-Terms oder Delivery abzuweichen?",
  options: [
    "Ausnahmen sind die Norm: fast jeder Deal braucht Custom-Anpassung",
    "Ausnahmen sind häufig, werden fallweise ohne dokumentierte Governance behandelt",
    "Einige Exception-Szenarien dokumentiert, andere brauchen ad hoc Lösung",
    "Ausnahmen selten, dokumentierter Exception-Prozess mit Leadership-Approval",
    "Exception-freies Standard-Modell: Standard-Terms und -Delivery gelten, Ausnahmen werden getrackt und systemisch behoben"
  ]
},

// ===========================================================
// PILLAR 10: DATA & INSIGHTS (20 QUESTIONS)
// ===========================================================

{
  id: 10001, pillar: 10, type: "scale",
  title: "Nennen Sie eine GTM-Entscheidung der letzten 30 Tage, die Daten verändert haben. Wie leicht fiel Ihnen die Antwort?",
  subtitle: "Bitte auf Ihr Hauptsegment und primäre GTM-Motion beziehen, falls die Frage nicht ausdrücklich differenziert.",
  options: [
    "Keine: Daten werden produziert, beeinflussen aber keine Entscheidung",
    "Daten werden in Meetings gezeigt, Intuition dominiert das Outcome",
    "Daten beeinflussen gelegentlich Entscheidungen, kein konkretes aktuelles Beispiel fällt ein",
    "Zwei oder drei aktuelle Entscheidungen lassen sich direkt auf Datensupport zurückführen, Rationale dokumentiert",
    "Data-Driven Decisions sind die Norm: jede relevante GTM-Entscheidung mit Data-Support dokumentiert, Daten-over-Gut-Fälle als positive Governance-Signale getrackt"
  ]
},
{
  id: 10002, pillar: 10, type: "scale",
  title: "In Ihren letzten drei Leadership-Reviews: wie viele Minuten wurden für Metric-Definition-Debatten verbrannt statt für Action auf die Zahl?",
  options: [
    "Die Review-Zeit wird von Metric-Streit geschluckt: keine Single Source of Truth",
    "Metric-Debatten bremsen Entscheidungen regelmäßig, keine Verbesserung in Sicht",
    "Definitionen sind weitgehend aligned, wiederkehrende Streits schlucken noch Review-Zeit",
    "Metric-Definitionen sind gesteuert, Streits sind selten, Review-Zeit geht in Interpretation und Action",
    "Single-Source-Metric-Register steuert alle Leadership-Reviews: Definition-Debatten selten, werden geloggt, Trend geht nach unten"
  ]
},
{
  id: 10003, pillar: 10, type: "scale",
  title: "Wie konsistent treiben Daten GTM-Entscheidungen, und können Sie ein Beispiel aus den letzten 30 Tagen nennen, in dem Daten einen Plan gekippt haben?",
  options: [
    "Bauchgefühl treibt die meisten Entscheidungen: Daten werden produziert, aber nicht genutzt",
    "Daten werden im Meeting gezeigt, das Outcome bleibt unverändert",
    "Daten beeinflussen gelegentlich, Intuition dominiert noch",
    "Daten sind primärer Input für die meisten GTM-Entscheidungen, Rationale dokumentiert",
    "Data-Driven Culture: Entscheidungen mit Data-Support dokumentiert, Daten-over-Gut-Fälle als positives Signal getrackt"
  ]
},
{
  id: 10004, pillar: 10, type: "scale",
  title: "Können Sie jetzt sofort, ohne RevOps-Ticket, die Pipeline Coverage Ratio, die gewichtete Pipeline pro Stage und die Deals-at-Risk für dieses Quartal nennen?",
  options: [
    "Nein: diese Zahlen erfordern manuelle Zusammenstellung oder existieren nicht",
    "Einzelne Zahlen sind verfügbar, eine braucht Handarbeit oder wird nicht vertraut",
    "Core-Pipeline-KPIs im Dashboard, Accuracy- und Recency-Vertrauen gemischt",
    "KPIs sind near-realtime verfügbar und werden im Weekly Operating Review genutzt",
    "Pipeline-Intelligence-Layer gesteuert: Coverage, Weighted Stage Value und Deals-at-Risk on demand, Leadership vertraut, an dokumentierte Action Thresholds gebunden"
  ]
},
{
  id: 10005, pillar: 10, type: "scale",
  title: "In den letzten zwei Quartalen: wie viele Revenue Misses wurden 60+ Tage im Voraus durch einen Leading Indicator vorhergesagt, statt erst beim Close of Quarter entdeckt?",
  options: [
    "Keine: Misses wurden erst sichtbar, als Revenue schon weg war",
    "Einzelne Warnsignale, informell, nicht an ein definiertes Leading-Indicator-System gebunden",
    "Einzelne Misses wurden früh vorhergesagt, Signalqualität und Follow-through inkonsistent",
    "Leading Indicators haben mehrere Misses früh genug prognostiziert, post-quarter reviewed",
    "Prädiktives Signalsystem: Frühwarnungen geloggt, actioned und gegen Outcomes geprüft, Early vs. Late Detection Ratio wird getrackt"
  ]
},
{
  id: 10006, pillar: 10, type: "scale",
  title: "Wie präzise messen Sie GTM-Effizienz, und können Sie CAC Payback, Burn Multiple und Pipeline-Efficiency pro Motion splitten?",
  options: [
    "GTM-Effizienz wird nicht gemessen: nur Revenue, nicht Cost-of-Revenue",
    "Blended CAC wird getrackt, Efficiency pro Motion oder Segment unbekannt",
    "Core-Efficiency-KPIs existieren, werden selten oder inkonsistent reviewed",
    "CAC, Payback und Pipeline Efficiency pro Motion getrackt und monatlich reviewed",
    "GTM-Efficiency-P&L: CAC, Payback, Burn Multiple und Pipeline Efficiency pro Motion, Segment und Rep monatlich im Leadership-Meeting"
  ]
},
{
  id: 10007, pillar: 10, type: "scale",
  title: "Wie rigoros laufen Cohort-Analysen, und können Sie Retention, Expansion und Churn pro Akquisitions-Kohorte vergleichen?",
  options: [
    "Keine Cohort-Analyse: Kundenperformance wird nicht über Zeit getrackt",
    "Basic Cohort Tracking existiert, wird nicht reviewed oder in der Planung genutzt",
    "Cohort-Daten verfügbar, Analyse ist oberflächlich und selten",
    "Quartalsweises Cohort Review vergleicht Retention, NRR und Expansion pro Acquisition Period",
    "Cohort Intelligence komplett: Retention, Expansion und Payback pro Cohort, quartalsweise reviewed, feeds ICP- und DG-Strategie"
  ]
},
{
  id: 10008, pillar: 10, type: "scale",
  title: "Können Sie jetzt sofort Stage Distribution, Health Flags und Coverage Ratio sehen, und vertrauen Sie diesen Zahlen?",
  options: [
    "Pipeline-Visibility begrenzt: Realtime-View braucht manuelle Zusammenstellung",
    "Pipeline im CRM sichtbar, Qualität, Health und Stage-Accuracy werden nicht vertraut",
    "Pipeline-Dashboards existieren, Data-Hygiene-Probleme senken Vertrauen",
    "Realtime-Pipeline-View mit Stage Distribution, Health Flags und Coverage Ratio wird getrackt",
    "Pipeline-Intelligence gesteuert: Stage Distribution, Health Score, Coverage und Velocity in Echtzeit, wöchentlich im Pipeline-Meeting reviewed"
  ]
},
{
  id: 10009, pillar: 10, type: "scale",
  title: "Wie granular können Sie GTM-Performance-Daten splitten (Segment, Motion, Rep, Kohorte), um Root Causes zu finden, nicht nur Durchschnitte?",
  options: [
    "Performance-Daten sind nur aggregiert: kein Segmentieren möglich",
    "Segmentierung möglich, kostet erhebliche Handarbeit",
    "Core-Segmente verfügbar, Cross-Filter nach Motion und Rep begrenzt",
    "Performance lässt sich nach Segment, Motion und Rep splitten, Daten in Dashboards",
    "Multi-Dim-Segmentation-Modell: Performance nach Segment, Motion, Rep, Cohort und Geo, monatlich auf Team- und Leadership-Ebene reviewed"
  ]
},
{
  id: 10010, pillar: 10, type: "scale",
  title: "Wie genau prognostiziert Ihr Team Next-Quarter-Revenue, und wie hoch ist Ihre typische Variance zwischen Commit und Ist?",
  options: [
    "Kein formaler Forecast: Q-End-Revenue ist eine Überraschung",
    "Forecast existiert, Variance zum Ist ist typischerweise über 20%",
    "Forecasting wird versucht, Variance ist inkonsistent und wird nicht systematisch reviewed",
    "Forecast-Methodik dokumentiert, Variance getrackt, Post-Quarter-Retro",
    "Forecast-System gesteuert: Variance konsistent unter 10%, Methodik quartalsweise reviewed, Call-to-Close-Accuracy wöchentlich getrackt"
  ]
},
{
  id: 10011, pillar: 10, type: "scale",
  title: "Wie fortgeschritten ist Ihre Nutzung von Predictive Analytics im GTM, und können Sie das wahrscheinliche Outcome eines Deals oder einer DG-Kampagne modellieren, bevor sie closed?",
  options: [
    "Keine Predictive Analytics: Entscheidungen basieren auf Historie oder Intuition",
    "Basic Trendlinien existieren, keine Forward-Looking-Modelle",
    "Predictive Scoring läuft in einer Funktion, nicht cross-funktional",
    "Predictive Models für Lead Scoring, Churn Risk und Pipeline Quality cross-funktional im Einsatz",
    "Predictive Intelligence Layer komplett: Deal Scoring, Churn Prediction und DG Campaign Modeling im Tagesbetrieb integriert"
  ]
},
{
  id: 10012, pillar: 10, type: "scale",
  title: "Wie actionable sind Ihre GTM-Dashboards? Wenn ein Dashboard ein Problem zeigt, steht ein Owner und ein Next Step daneben?",
  options: [
    "Dashboards existieren, werden nicht reviewed oder actioned",
    "Dashboards werden reviewed, erzeugen Diskussion statt Entscheidung",
    "Die meisten KPIs haben Owner, Action-Tracking ist inkonsistent",
    "Dashboards treiben dokumentierte Actions mit Owner und Deadline, wöchentlich reviewed",
    "Dashboards als Decision Tool: jede Metric hat Owner, Threshold und Playbook bei Threshold Breach"
  ]
},
{
  id: 10013, pillar: 10, type: "scale",
  title: "Wie datengetrieben sind Ihre Performance-Reviews, und welcher Anteil der Meeting-Zeit geht in Analyse statt Anekdoten?",
  options: [
    "Performance-Reviews sind anekdotengetrieben: Daten werden selten gezeigt oder hinterfragt",
    "Daten sind anwesend, Narrative und Intuition dominieren die Diskussion",
    "Die meisten Reviews nutzen Daten, Analyse-Tiefe variiert stark pro Manager",
    "Standardisiertes Data-Framework steuert alle Reviews, Pre-Read-Pflicht",
    "Performance-Reviews voll datengeführt: standardisiertes Pre-Read, strukturierte Analyse, Decision Log pro Meeting"
  ]
},
{
  id: 10014, pillar: 10, type: "scale",
  title: "Wie systematisch spotten Sie Performance-Trends, und wie schnell erreichen Trendsignale die Leute, die handeln können?",
  options: [
    "Trends fallen erst auf, wenn sie schon Probleme geworden sind",
    "Trend-Awareness ist informell: erfahrene Manager merken es im Meeting",
    "Trend-Monitoring läuft, Signal-to-Action-Speed ist zäh",
    "Trend-Alerts automatisiert, in definiertem Zeitfenster an Owner zugestellt",
    "Proaktives Trend-Intelligence: Signale algorithmisch erkannt, in Echtzeit an Owner, Response Time als Governance-KPI"
  ]
},
{
  id: 10015, pillar: 10, type: "scale",
  title: "Wie systematisch benchmarken Sie GTM-Performance gegen externe Industrie-Daten, und wann haben Sie zuletzt einen Benchmark genutzt, um eine Entscheidung zu challenge?",
  options: [
    "Kein Benchmarking: Performance wird isoliert bewertet",
    "Leadership kennt grobe Industrie-Durchschnitte, kein formaler Vergleich",
    "Jährlicher Benchmark-Vergleich findet statt, ändert unser Vorgehen selten",
    "Externe Benchmarks fließen in Quartals-Planung und Performance-Reviews",
    "Benchmarking kontinuierlich: externe Datenquellen im Dashboard integriert, challengen Planning-Annahmen, im Board-Pack reviewed"
  ]
},
{
  id: 10016, pillar: 10, type: "scale",
  title: "Wie genau ist Ihr Next-Quarter-Forecast, und wie groß war die Fehlermarge in Ihren letzten vier Quartalen?",
  options: [
    "Forecasting chancenlos: Variance über 25%",
    "Forecast Accuracy niedrig: Variance typischerweise 15 bis 25%",
    "Forecast trifft manchmal, Within-Quarter-Variance ist substanziell",
    "Forecast Accuracy innerhalb 10% in den meisten Quartalen, Variance Review dokumentiert",
    "Forecast Accuracy konsistent innerhalb 5%: Four-Quarter-Track-Record dokumentiert, im Board reviewed"
  ]
},
{
  id: 10017, pillar: 10, type: "scale",
  title: "Wie systematisch nutzen Sie Performance-Daten, um GTM-Ressourcen (Budget, Headcount, Fokus) im Jahr umzuverteilen?",
  options: [
    "Ressourcen werden im Jahresplan fixiert und nicht mehr angefasst",
    "Umverteilung passiert, basiert auf Management-Präferenz statt auf Daten",
    "Mid-Year-Reviews existieren, Daten treiben selten echte Shifts",
    "Mid-Year-Resource-Review dokumentiert, Performance-Daten treiben Budget- und Fokus-Shifts",
    "Performance-basiertes Resource-Allocation-Modell: Underperforming Motions werden definanziert, High-ROI-Motions in Echtzeit skaliert"
  ]
},
{
  id: 10018, pillar: 10, type: "scale",
  title: "Wie präzise berechnen Sie LTV, und berücksichtigt Ihr Modell Expansion, Churn und Margin pro Segment?",
  options: [
    "LTV wird nicht berechnet: Wert wird nur über ARR geschätzt",
    "Basic-LTV-Schätzung existiert, ohne Expansion oder Margin",
    "LTV auf aggregierter Ebene, nicht segmentiert oder regelmäßig refreshed",
    "LTV pro Segment berechnet, inkl. Retention, Expansion und Gross Margin",
    "LTV-Modell komplett: Segment-Level, quartalsweise aktualisiert, inkl. Expansion Probability, Churn Risk und Margin, feeds ICP Scoring und CAC Targeting"
  ]
},
{
  id: 10019, pillar: 10, type: "scale",
  title: "Wie direkt treiben Daten GTM-Performance-Verbesserung, und können Sie eine konkrete Änderung aus dem letzten Quartal nennen, die auf Daten basierte?",
  options: [
    "Daten treiben keine Changes: Performance-Reviews sind reine Infoshows",
    "Daten liefern gelegentlich Insights, landen selten in dokumentierten Actions",
    "Daten beeinflussen einzelne Entscheidungen, Follow-through ist inkonsistent",
    "Quartalsweiser Data-Driven-Improvement-Prozess produziert dokumentierte Actions mit Owner",
    "Data-Driven Improvement als kulturelle Norm: jedes Quartal liefert dokumentierte Changes, auf spezifisches Signal rückführbar, Outcome getrackt"
  ]
},
{
  id: 10020, pillar: 10, type: "scale",
  title: "Wie früh und zuverlässig identifizieren Datensignale Churn Risk, und wie viele Tage Lead Time haben Sie im Schnitt zwischen Risk Detection und Kundenkündigung?",
  options: [
    "Churn wird erst beim oder nach dem Kündigungsgespräch sichtbar: keine Frühwarnung",
    "Signale werden in den letzten 30 Tagen vor Churn bemerkt",
    "Risk-Signale werden bei einigen Accounts 60 bis 90 Tage vor Churn erkannt",
    "Health-Scoring-Modell identifiziert die meisten At-Risk-Accounts 90+ Tage vor Churn",
    "Predictive Churn System: Risk 120+ Tage vor Kündigung erkannt, Intervention auto-getriggered, Save Rate pro Risk Tier getrackt"
  ]
},

// ===========================================================
// PILLAR 11: ENABLEMENT (20 QUESTIONS)
// ===========================================================

{
  id: 11001, pillar: 11, type: "scale",
  title: "Wie strukturiert läuft das Onboarding neuer GTM-Mitarbeitender, und wie tracken Sie Completion und Qualität?",
  subtitle: "Bitte auf Ihr Hauptsegment und primäre GTM-Motion beziehen, falls die Frage nicht ausdrücklich differenziert.",
  options: [
    "Kein strukturiertes Onboarding: Neue lernen durch Shadowing und Ausprobieren",
    "Informeller Onboarding-Prozess, Tiefe und Qualität hängen am Manager",
    "Onboarding-Curriculum existiert, Completion und Qualität werden nicht systematisch getrackt",
    "Strukturiertes Onboarding mit Meilenstein-Tracking pro neuem Mitarbeiter",
    "Onboarding gesteuert: Curriculum, Meilensteine, Manager Sign-Off und 30-60-90-Tage-Performance pro neuem Rep reviewed"
  ]
},
{
  id: 11002, pillar: 11, type: "scale",
  title: "Wie effizient kommen neue Reps in die volle Productivity, und tracken Sie Ramp Time gegen ein definiertes Ziel?",
  options: [
    "Ramp Time wird nicht gemessen: wir wissen nicht, wie lange bis zum ersten Contribution",
    "Ramp-Erwartungen existieren informell, Time-to-Productivity wird nicht gemessen",
    "Ramp Time wird getrackt, ohne klares Ziel oder Benchmark",
    "Time-to-Productivity pro Kohorte gegen Ziel getrackt, quartalsweise reviewed",
    "Ramp-Efficiency-Modell: Time-to-First-Deal und Time-to-Quota pro Rep, gegen frühere Kohorten gebenchmarkt, feeds Onboarding-Updates"
  ]
},
{
  id: 11003, pillar: 11, type: "scale",
  title: "Wie konsequent bekommt Ihr Team strukturierte Skill-Development, und ist das Learning an beobachtete Performance-Gaps gekoppelt?",
  options: [
    "Kein laufendes Training: Entwicklung läuft self-directed und ohne Support",
    "Ad-hoc-Training, wenn ein Problem hochkommt, nicht proaktiv",
    "Training-Kalender existiert, Inhalte sind generisch und nicht an Performance-Daten gekoppelt",
    "Skill-Development hängt an Rep-Performance-Gaps aus Coaching und Call-Review",
    "Performance-gekoppeltes Learning: Gaps wöchentlich im Coaching identifiziert, Training passgenau verordnet, Impact gegen Deal-Outcomes getrackt"
  ]
},
{
  id: 11004, pillar: 11, type: "scale",
  title: "Wie vollständig, aktuell und genutzt sind Ihre Sales Playbooks, und woher wissen Sie, dass Reps sie in aktiven Deals referenzieren?",
  options: [
    "Keine Sales Playbooks: Reps verlassen sich auf Erfahrung und Bauchgefühl",
    "Playbooks existieren, seit über 12 Monaten nicht aktualisiert, werden selten geöffnet",
    "Playbooks verfügbar, Nutzung in aktiven Deals wird nicht getrackt",
    "Playbooks quartalsweise aktualisiert, Nutzung via Enablement-Plattform getrackt",
    "Live-Playbook-System: quartalsweise aktualisiert, Nutzung pro Deal Stage getrackt, Playbook-to-Win-Rate monatlich reviewed"
  ]
},
{
  id: 11005, pillar: 11, type: "scale",
  title: "Wie leicht finden Reps das Enablement-Asset, das sie gerade brauchen, und wie messen Sie Content-Auffindbarkeit?",
  options: [
    "Enablement-Content liegt über mehrere Systeme verteilt, kein zentraler Entry-Point",
    "Zentrales Repository existiert, Such- und Navigation-Qualität schlecht",
    "Content ist organisiert, Reps eskalieren regelmäßig, um zu finden was sie brauchen",
    "Enablement-Plattform gut organisiert, Reps finden Content nach Rolle und Deal Stage",
    "Enablement-Plattform strukturiert und durchsuchbar: Content indiziert nach Rolle, Stage und Persona, Adoption getrackt, Search Success Rate quartalsweise reviewed"
  ]
},
{
  id: 11006, pillar: 11, type: "scale",
  title: "Wie rollenspezifisch ist Ihr Enablement-Content für AE, SDR, CS und AM, statt als generischer Shared-Content produziert?",
  options: [
    "Alle Enablement-Inhalte sind generisch: keine Rollen-Differenzierung",
    "Einzelne rollenspezifische Inhalte existieren, Lücken sind substanziell",
    "Primärrollen haben dedizierten Content, sekundäre Rollen sind unterversorgt",
    "Rollenspezifische Enablement-Tracks für alle primären GTM-Rollen",
    "Role-Specific Enablement Architecture: jede GTM-Rolle hat eigenes Curriculum, unabhängig bewertet und auf Rollen-Performance-Daten aktualisiert"
  ]
},
{
  id: 11007, pillar: 11, type: "scale",
  title: "Wie rigoros werden Reps zertifiziert, bevor sie Live Prospects anfassen, und was passiert bei Durchfallen?",
  options: [
    "Keine Zertifizierung: Reps starten ab Tag eins ohne Assessment",
    "Informelle Freigabe, Standards variieren pro Manager",
    "Zertifizierungs-Checkliste existiert, Completion wird informell getrackt",
    "Strukturierter Zertifizierungsprozess mit Pass/Fail-Kriterien und Remediation-Path",
    "Zertifizierungs-Gate rigoros: ohne Pass kein Kontakt zu Live Prospects, Durchfallen triggert strukturierte Remediation, Pass Rate getrackt"
  ]
},
{
  id: 11008, pillar: 11, type: "scale",
  title: "Wie strukturiert und konsistent coachen Ihre Sales Manager, und wie wird Coaching-Qualität gemessen?",
  options: [
    "Coaching ist komplett informell: Feedback gibts, wenn danach gefragt wird",
    "Coaching findet im 1:1 statt, kein definiertes Framework und keine Kadenz",
    "Coaching-Framework existiert, Qualität und Konsistenz variieren stark pro Manager",
    "Standardisiertes Coaching-Framework wird konsequent über alle Manager gelebt, Session-Outcomes dokumentiert",
    "Coaching Operating System: Call Reviews, Skill Scoring, Session-Doku und Coaching-Impact gegen Rep-Performance wöchentlich getrackt"
  ]
},
{
  id: 11009, pillar: 11, type: "scale",
  title: "Wie umfassend und aktuell ist Ihre Sales- und Marketing-Collateral-Library, und nutzen Reps sie in aktiven Deals?",
  options: [
    "Collateral ist minimal, veraltet oder wird in Deals nicht genutzt",
    "Collateral-Set existiert, die meisten Reps bauen ihre eigenen Folien",
    "Standard-Collateral verfügbar, Nutzung in Live-Deals wird nicht gemessen",
    "Aktuelle Collateral-Library nach Deal Stage und Use Case, Adoption getrackt",
    "Collateral-System strategisch: nach Deal Stage indiziert, versionsgepflegt, Adoption quartalsweise mit Win Rate korreliert"
  ]
},
{
  id: 11010, pillar: 11, type: "scale",
  title: "Ist Time-to-First-Deal Ihr primärer Ramp-KPI, und wie vergleicht er sich mit Ihrem definierten Ziel?",
  options: [
    "Time-to-First-Deal wird nicht getrackt",
    "Wird informell getrackt, nicht gegen ein Ziel verglichen",
    "Wird getrackt und reported, treibt keine Onboarding- oder Coaching-Entscheidungen",
    "Formal als KPI getrackt, gegen Ziel verglichen, im New-Hire-Retro reviewed",
    "Ramp-KPI gesteuert: Time-to-First-Deal pro Rep getrackt, quartalsweise gebenchmarkt, feeds Onboarding-Curriculum-Updates"
  ]
},
{
  id: 11011, pillar: 11, type: "scale",
  title: "Wie systematisch messen Sie, ob Enablement-Programme messbaren Uplift in Deal Outcomes produzieren?",
  options: [
    "Enablement-Wirkung wird nicht gemessen: Programme laufen und werden als wirksam unterstellt",
    "Attendance wird getrackt, Performance-Impact wird nicht bewertet",
    "Korrelation zwischen Training-Completion und Performance wird informell beobachtet",
    "Enablement-Programme quartalsweise auf Skill Uplift und Win Rate Impact bewertet",
    "Enablement-ROI-Modell: Program Completion, Skill Score Delta und Deal Outcome Korrelation getrackt und monatlich reviewed"
  ]
},
{
  id: 11012, pillar: 11, type: "scale",
  title: "Wie konsequent werden Enablement-Materialien bei Produkt-, Markt- oder Competitor-Changes aktualisiert?",
  options: [
    "Materialien werden selten aktualisiert: Content ist innerhalb von Monaten veraltet",
    "Updates laufen reaktiv, wenn etwas offensichtlich falsch ist",
    "Grober jährlicher Update-Cycle existiert, Aktualität schwankt pro Asset",
    "Definierter Quartals-Update-Cycle für alle Core-Assets, Owner accountable",
    "Update-System kontinuierlich: Materialien in definierter Kadenz reviewed, getriggered von Product Releases und Competitor Moves, Versionskontrolle und Expiry Dates"
  ]
},
{
  id: 11013, pillar: 11, type: "scale",
  title: "Nach Ihren letzten drei Produkt-Releases: wie schnell wurde Enablement-Material aktualisiert, und war das Update proaktiv oder erst nach Field-Beschwerde?",
  options: [
    "Enablement-Materialien wurden nicht rechtzeitig aktualisiert: Reps entdeckten Gaps in Live-Deals",
    "Updates kamen reaktiv nach Field-Beschwerden, kein Release-gebundener Prozess",
    "Materialien wurden für einige Releases aktualisiert, Timing und Vollständigkeit inkonsistent",
    "Enablement-Updates an Release-Termin gebunden, meist vor Field Exposure abgeschlossen",
    "Release-gebundenes Enablement: Materialien proaktiv im definierten Zeitrahmen aktualisiert, Field Readiness vor Release geprüft, Delay nach jedem Release getrackt"
  ]
},
{
  id: 11014, pillar: 11, type: "scale",
  title: "Wie spezifisch werden Reps trainiert und geprobt, um die häufigsten Deal-Killer-Einwände zu handeln?",
  options: [
    "Kein Objection-Handling-Training: Reps bauen ihre Antworten mit der Zeit selbst",
    "Häufige Einwände werden im Onboarding behandelt, nie refreshed oder geübt",
    "Objection-Guide existiert, nicht mit Live-Deal-Review oder Roleplay verknüpft",
    "Objection Handling im Onboarding trainiert, im Coaching refreshed, aus Win/Loss-Daten aktualisiert",
    "Objection Training System strukturiert: häufige Einwände nach Segment katalogisiert, Responses im Live-Coaching getestet, Effektivität pro Objection Type getrackt"
  ]
},
{
  id: 11015, pillar: 11, type: "scale",
  title: "In Ihrem letzten Pipeline Review: bei wie vielen stagnierten oder verlorenen Deals wurde im Monat davor Enablement-Material aufgerufen, und tracken Sie das?",
  options: [
    "Enablement ist rein Pre-Sale: für laufende Deals gibt es keinen Support",
    "Reps können auf allgemeines Material zugreifen, keine Deal-spezifische Anleitung",
    "Deal-Stage-Enablement existiert, inkonsistent organisiert, unregelmäßig genutzt",
    "Deal-Stage-indiziertes Enablement verfügbar, wird aktiv im Deal Review referenziert",
    "Deal-Execution-Enablement-System: Stage-spezifische Inhalte, Tools und Eskalationspfade im CRM, monatlich auf Nutzung reviewed"
  ]
},
{
  id: 11016, pillar: 11, type: "scale",
  title: "Wie tief verstehen Ihre GTM-Reps das Produkt, und können sie technische Fragen ohne Rückfrage an Product oder Engineering beantworten?",
  options: [
    "Reps haben oberflächliches Produktwissen: die meisten technischen Fragen eskalieren",
    "Einzelne Reps handeln technische Fragen gut, Wissensniveau streut stark",
    "Die meisten Reps handeln Standardfragen, komplexe Szenarien brauchen Spezialisten",
    "Produktwissen ist zertifiziert, wird pro Major Release refreshed",
    "Product Mastery Programm kontinuierlich: zertifizierungsgebunden, regelmäßig bewertet, pro Release refreshed, Rep-Knowledge-Score quartalsweise getrackt"
  ]
},
{
  id: 11017, pillar: 11, type: "scale",
  title: "Im letzten Quartal: wurde für jeden Underperformer eine spezifische Skill Gap diagnostiziert und gezieltes Training verordnet, oder bekamen alle dasselbe generische Curriculum?",
  options: [
    "Underperformance wird nicht an konkrete Skill-Gap-Diagnose geknüpft: Support ist generisch oder fehlt",
    "Manager raten gelegentlich die Gap, Training bleibt generisch und inkonsistent",
    "Einzelne Underperformer bekommen gezielte Entwicklung, kein systematischer Prozess pro Manager",
    "Underperformer bekommen Skill-Gap-Diagnose und gezielten Trainingsplan, Manager-Tracking",
    "Performance-gekoppeltes Enablement: jeder Underperformer bekommt diagnostizierte Skill Gap, verordnetes Training und Outcome-Tracking gegen die Gap"
  ]
},
{
  id: 11018, pillar: 11, type: "scale",
  title: "Wie systematisch bauen Sie Rep-Skills über Real-World-Szenarien und strukturiertes Roleplay, bevor sie auf Käufer losgehen?",
  options: [
    "Kein Roleplay oder Szenario-Praxis: Reps lernen am Live Deal",
    "Gelegentliches Roleplay im Training, unstrukturiert und nicht bewertet",
    "Roleplay ist im Onboarding, wird im laufenden Coaching nicht konsequent genutzt",
    "Strukturiertes Roleplay mit definierten Szenarien und Rubric, Onboarding plus quartalsweise Refresher",
    "Immersives Practice-System: aufgezeichnete Roleplays werden von Managern reviewed, gegen Rubric gescored, Skill-Entwicklung über Zeit getrackt"
  ]
},
{
  id: 11019, pillar: 11, type: "scale",
  title: "Wie direkt und messbar treibt Enablement Win Rate, Ramp Time und Pipeline-Konsistenz?",
  options: [
    "Enablement-Beitrag zur Performance wird nicht gemessen oder getrackt",
    "Anekdotische Evidenz sagt Enablement hilft, keine Daten stützen das",
    "Einzelne Enablement-Leading-Indicators werden getrackt, nicht formal reviewed",
    "Enablement-ROI quartalsweise reviewed: Ramp Time, Win Rate post-Training und Playbook-Nutzung getrackt",
    "Enablement als gemessene Revenue-Funktion: Win Rate, Ramp Time und Deal Velocity Uplift Enablement-Programmen zugerechnet, monatlich mit Sales Leadership reviewed"
  ]
},
{
  id: 11020, pillar: 11, type: "scale",
  title: "Wie konsequent und schnell managen Sie Underperformance, und wie viele Tage liegen zwischen identifizierter Gap und dokumentierter Action?",
  options: [
    "Underperformance wird unbegrenzt toleriert: kein systematisches Performance Management",
    "Underperformer werden irgendwann adressiert, Prozess ist inkonsistent und langsam",
    "Formaler PIP-Prozess existiert, Aktivierung rutscht, Outcome unvorhersehbar",
    "Underperformance innerhalb eines Quartals identifiziert, Plan innerhalb 30 Tagen dokumentiert",
    "Leading Indicators flaggen Underperformance früh, Improvement Plan innerhalb 30 Tagen aktiviert, Outcome konsistent getrackt"
  ]
},

// ===========================================================
// PILLAR 12: ALIGNMENT & GOVERNANCE (20 QUESTIONS)
// ===========================================================

{
  id: 12001, pillar: 12, type: "scale",
  title: "Fragen Sie fünf Frontline-Reps jetzt nach den drei Quartals-Prioritäten: wie viele geben dieselbe Antwort?",
  subtitle: "Bitte auf Ihr Hauptsegment und primäre GTM-Motion beziehen, falls die Frage nicht ausdrücklich differenziert.",
  options: [
    "Unter zwei: Prioritäten sind an der Front unbekannt oder widersprüchlich",
    "Zwei oder drei überlappen grob, Formulierung und Reihenfolge streuen",
    "Die meisten nennen ähnliche Prioritäten, ohne präzise Sprache oder konsistente Reihenfolge",
    "Vier oder fünf antworten gleich: Prioritäten kommuniziert und im Team-Meeting reviewed",
    "Alle fünf antworten identisch: Prioritäten-Kaskade wird quartalsweise am Frontline-Check verifiziert, bei Abweichung greift sofort eine Comms-Intervention"
  ]
},
{
  id: 12002, pillar: 12, type: "scale",
  title: "Wenn Leadership GTM-Performance reviewed: wie viel Zeit geht für Datendefinitions-Streit drauf, statt für Problemlösung?",
  options: [
    "Die Zeit geht in Datenstreit: keine Single Source of Truth",
    "Datendebatten entgleisen regelmäßig die Diskussion, Entscheidungen verzögern",
    "Daten sind weitgehend akzeptiert, gelegentliche Streits bremsen Reviews",
    "Datendefinitionen stehen: Meetings gehen um Interpretation und Action, nicht um Zahlen",
    "Alle Leadership-Foren laufen auf einer gesteuerten Datenquelle: keine Datendebatten, 100% der Zeit für Entscheidungen"
  ]
},
{
  id: 12003, pillar: 12, type: "scale",
  title: "Wie konsequent stehen GTM-Teams zu den Commitments, die sie gemacht haben, und was passiert, wenn ein Commitment reißt?",
  options: [
    "Keine Accountability: Missed Targets werden weggeredet, ohne Konsequenz",
    "Missed Targets werden informell besprochen, keine strukturierte Accountability",
    "Review-Prozess existiert, Accountability ist je Manager uneinheitlich",
    "Formales Accountability-Review bei Miss, mit Root Cause und Corrective Action",
    "Accountability-System diszipliniert: Misses triggern binnen zwei Wochen dokumentiertes Review, Korrekturen getrackt, Repeat Miss eskaliert"
  ]
},
{
  id: 12004, pillar: 12, type: "scale",
  title: "Wenn eine cross-funktionale GTM-Entscheidung Input von drei oder mehr Teams braucht: wie viele Tage bis zur dokumentierten Entscheidung, und tracken Sie das?",
  options: [
    "Multi-Team-Entscheidungen haben keinen definierten Prozess: sie werden gelöst, wenn jemand sie erzwingt",
    "Diese Entscheidungen entstehen informell in Meetings, Time-to-Resolution wird nicht getrackt",
    "Die meisten Multi-Team-Entscheidungen werden in Wochen gelöst, kein formales SLA, Verzögerungen sind häufig",
    "Multi-Team-Decision-Prozess dokumentiert: definierter Zeitrahmen, verantwortlicher Moderator",
    "Multi-Team-Decision-Protokoll gesteuert: Input-Deadlines, Decision Owner und Resolution-SLA definiert, Time-to-Decision quartalsweise getrackt, anhaltende Delays eskalieren automatisch an die Leadership"
  ]
},
{
  id: 12005, pillar: 12, type: "scale",
  title: "Wie zuverlässig hält Ihre GTM-Operating-Kadenz, und wie viele geplante Meetings fallen aus oder laufen ohne Pre-Read?",
  options: [
    "Meetings fallen regelmäßig aus oder laufen ohne Vorbereitung: Kadenz hält nicht",
    "Kadenz läuft, Teilnahme und Vorbereitung sind uneinheitlich",
    "Meetings finden meist statt, Pre-Read und Doku-Standards werden nicht erzwungen",
    "Operating-Kadenz läuft konsequent, Pre-Read und dokumentierte Outputs",
    "Operating-Rhythmus nicht verhandelbar: Teilnahme, Pre-Read und Output Standard, Cadence Health monatlich von COO oder CRO reviewed"
  ]
},
{
  id: 12006, pillar: 12, type: "scale",
  title: "Wie viele GTM-Initiativen im letzten Quartal wurden formell gestoppt oder deprioritisiert, und kam die Entscheidung proaktiv oder erst nach verbrannten Ressourcen?",
  options: [
    "Initiativen stoppen selten: einmal gestartet, läuft GTM-Arbeit unabhängig vom Outcome weiter",
    "Einzelne Initiativen werden still begraben, formale Stopp-Entscheidungen sind ungewöhnlich und undokumentiert",
    "Einzelne Initiativen wurden gestoppt, reaktiv und nach sichtbarem Scheitern",
    "Initiativen-Stopp-Entscheidungen werden dokumentiert, quartalsweise reviewed, von vordefinierten Performance-Kriterien getrieben",
    "Initiative Discipline gesteuert: Stopp- und Deprio-Kriterien beim Start definiert, Performance an Checkpoints reviewed, Kill-Entscheidungen proaktiv, Post-Mortem zur Wastewaste-Prevention"
  ]
},
{
  id: 12007, pillar: 12, type: "scale",
  title: "Von Ihren aktuellen GTM-Initiativen: wie viele haben einen einzigen benannten Owner mit definierter Authority, und wie viele sind Committee-Ownership oder ownerless?",
  options: [
    "Initiativen haben keinen formalen Owner: jeder und niemand ist verantwortlich",
    "Ownership ist informell, Authority und Accountability unklar",
    "Initiative-Owner existieren, Executive Sponsorship ist inkonsistent",
    "Jede GTM-Initiative hat einen dokumentierten Owner mit definierter Authority und Accountability",
    "Initiative Governance formal: Single Owner, Executive Sponsor, definierte Erfolgs-KPIs, monatlicher Status im GTM-Leadership-Forum reviewed"
  ]
},
{
  id: 12008, pillar: 12, type: "scale",
  title: "Wie schnell und vorhersagbar werden Operational Blocker eskaliert und gelöst, und führt Ihr Eskalationspfad tatsächlich zur Lösung?",
  options: [
    "Kein Eskalationspfad: Blocker akkumulieren, bis es knallt",
    "Blocker werden informell angesprochen, Lösung ist langsam und unvorhersehbar",
    "Eskalationsprozess existiert, wird selten genutzt oder vertraut",
    "Eskalationspfad definiert mit Response-Time-SLA und dokumentiertem Resolution-Tracking",
    "Blocker-Resolution-System gesteuert: Escalation-Trigger, Response-SLA und Resolution Outcome monatlich im Operating Review getrackt"
  ]
},
{
  id: 12009, pillar: 12, type: "scale",
  title: "Aus Ihren letzten drei Governance-Meetings: welcher Prozentsatz dokumentierter Actions wurde vom vereinbarten Owner bis zur vereinbarten Deadline abgeschlossen?",
  options: [
    "Meetings produzieren Diskussion, aber keine dokumentierten Entscheidungen oder Owner",
    "Einzelne Entscheidungen entstehen, Follow-through wird nicht systematisch getrackt",
    "Entscheidungen werden dokumentiert, Action-Tracking ist zwischen Meetings inkonsistent",
    "Alle Governance-Meetings produzieren Decision Log mit Owner, Deadline und Progress, im nächsten Meeting reviewed",
    "Governance OS diszipliniert: jedes Meeting produziert strukturiertes Decision Log, Actions werden zu Beginn des nächsten Meetings reviewed, Completion Rate getrackt"
  ]
},
{
  id: 12010, pillar: 12, type: "scale",
  title: "Wie systematisch läuft Performance Management, und wie viele Tage liegen zwischen Identifizierung von Underperformance und dokumentierter Action?",
  options: [
    "Performance Management ist ad hoc: kein systematischer Prozess",
    "Performance-Issues werden informell und inkonsistent je Manager adressiert",
    "Formaler PIP-Prozess existiert, Aktivierung rutscht Wochen oder Monate",
    "Performance-Issues triggern innerhalb 30 Tagen formales Review mit dokumentierten Kriterien",
    "Performance Management System gesteuert: Underperformance über Leading Indicators identifiziert, formales Review innerhalb zwei Wochen, Outcomes konsistent getrackt"
  ]
},
{
  id: 12011, pillar: 12, type: "scale",
  title: "Wie viele cross-funktionale GTM-Initiativen im letzten Quartal wurden durch unklares Ownership oder Interface-Gaps zwischen Teams verzögert, blockiert oder sind gestorben?",
  options: [
    "Mehrere große Initiativen wurden durch Ownership-Ambiguität verzögert, wiederkehrendes Muster",
    "Mehrere kleinere Initiativen wurden durch unklare Interfaces verlangsamt, nichts formal adressiert",
    "Ein oder zwei Verzögerungen traten auf und wurden informell gelöst",
    "Ownership-Gaps werden im Quartals-Retro identifiziert und vor dem nächsten Planungszyklus adressiert",
    "Cross-funktionale Ownership Gaps als Governance-KPI: Frequency, Resolution Time und Root Cause quartalsweise reviewed"
  ]
},
{
  id: 12012, pillar: 12, type: "scale",
  title: "Wie direkt spiegelt Ihre GTM-Investment- und Headcount-Allocation die strategischen Prioritäten in Ihrem GTM-Plan?",
  options: [
    "Investment-Entscheidungen werden von Trägheit oder interner Politik getrieben, nicht von Strategie",
    "Lose Verbindung zwischen Strategie und Resource Allocation",
    "Resource Allocation referenziert die Strategie, substanzielle Misalignments bestehen",
    "Resource-Allocation-Entscheidungen werden in der Planung dokumentiert und strategischen Prioritäten zugeordnet",
    "Strategy-to-Investment Governance: jede relevante Allocation-Entscheidung wird gegen die strategische Priorität dokumentiert, quartalsweise reviewed"
  ]
},
{
  id: 12013, pillar: 12, type: "scale",
  title: "Wie strukturiert und aktionsorientiert laufen die Feedback-Loops zwischen Frontline-GTM-Teams und Leadership?",
  options: [
    "Keine strukturierte Feedback-Loop: Executives erfahren von der Front nur über Eskalationen",
    "Frontline-Feedback erreicht Leadership informell und inkonsistent",
    "Feedback-Mechanismus existiert, Outputs werden nicht zuverlässig actioned",
    "Frontline-to-Executive-Feedback quartalsweise strukturiert, Actions dokumentiert",
    "Bidirectional Feedback System kontinuierlich: Frontline-Signale monatlich reviewed, Executive Response dokumentiert, Action Completion getrackt"
  ]
},
{
  id: 12014, pillar: 12, type: "scale",
  title: "Wie definiert ist Ihr Prozess für Strategie-Adjustments, und was triggert ein Strategy Review zwischen den Jahresplanungszyklen?",
  options: [
    "Kein definierter Prozess: Strategie-Changes laufen reaktiv, wenn etwas bricht",
    "Leadership diskutiert Adjustments informell, wenn Probleme auftreten",
    "Breites Strategy Review wird von größeren Events getriggered, Kriterien nicht dokumentiert",
    "Definierte Performance-Schwellen triggern strukturiertes Strategy Review mit dokumentiertem Prozess",
    "Strategy Adjustment Protocol gesteuert: definierte Trigger, Review-Prozess und Doku-Anforderungen für alle In-Cycle-Adjustments"
  ]
},
{
  id: 12015, pillar: 12, type: "scale",
  title: "Wie viele Entscheidungen in Ihren wöchentlichen GTM-Meetings waren im letzten Quartal direkt auf ein Quartalsziel rückführbar, und wie viele waren reaktiv auf Off-Plan-Themen?",
  options: [
    "Die meisten Wochenentscheidungen sind reaktiv: wenig sichtbare Verbindung zu Quartalszielen",
    "Quartalsziele existieren, Wochenentscheidungen driften häufig ohne Pushback davon ab",
    "Einzelne Wochenentscheidungen lassen sich auf Quartalsziele mappen, reaktive Arbeit frisst Leadership-Zeit",
    "Die meisten Wochenentscheidungen sind auf Quartalsziele rückführbar, Off-Plan-Arbeit wird explizit identifiziert und eingedämmt",
    "Wochenentscheidungen werden by Design auf Quartalsziele gemappt: Off-Plan-Work geloggt, quantifiziert und als Governance Health Signal reviewed"
  ]
},
{
  id: 12016, pillar: 12, type: "scale",
  title: "In den letzten zwei Quartalen: wie viele relevante GTM-Probleme hat Leadership von einem Frontline-Mitarbeitenden erfahren, bevor sie in einer Metric auftauchten, und wie viele erst nach einem Miss?",
  options: [
    "Leadership erfährt von Problemen typischerweise erst nach einem Metric Miss oder sichtbarem Failure",
    "Einzelne Probleme werden früh aufgedeckt, meist von Senior Leaders, nicht von der Front",
    "Einzelne Frontline-Frühwarnungen erreichen Leadership, Muster ist inkonsistent",
    "Mehrere relevante Probleme wurden früh von Frontline-Teams aufgedeckt und vor Revenue-Impact adressiert",
    "Early Warning als gesteuertes Signal: Frontline-Eskalationen getrackt, gegen spätere Outcomes geprüft, als Transparency Health KPI genutzt"
  ]
},
{
  id: 12017, pillar: 12, type: "scale",
  title: "Wie klar und aktiv genutzt sind Ihre GTM-Eskalationspfade, und kann jeder Teammitarbeiter jetzt beschreiben, wie ein großes Problem eskaliert wird?",
  options: [
    "Keine formalen Eskalationspfade: Probleme werden informell oder gar nicht behandelt",
    "Eskalationspfade existieren, sind weder breit bekannt noch vertraut",
    "Eskalationspfade dokumentiert, Nutzung ist inkonsistent",
    "Eskalationspfade dokumentiert, geschult, konsequent referenziert, wenn ein Blocker hochkommt",
    "Escalation System gesteuert: Pfade dokumentiert, jährlich getestet, Usage Rate als Transparency Health KPI getrackt"
  ]
},
{
  id: 12018, pillar: 12, type: "scale",
  title: "In den letzten zwei Quartalen: wie viele relevanten GTM-Risiken oder Misses landeten auf Leadership-Ebene, BEVOR sie ein Revenue-Problem wurden, und wer hat sie aufgedeckt?",
  options: [
    "Relevante Misses wurden immer erst bei Revenue Impact sichtbar: die Front hat nicht früh eskaliert",
    "Gelegentliche Frühwarnung kam, aber von Senior Leaders, nicht von der Front",
    "Einzelne frühe Eskalationen liefen, Muster ist inkonsistent",
    "Mehrere frühe Eskalationen kamen von Frontline-Teams und wurden vor Revenue-Impact adressiert",
    "Early Risk Escalation als gemessener KPI: Frontline-Frühwarnungen gezählt, öffentlich anerkannt, Early-vs-Late-Detection-Ratio quartalsweise reviewed"
  ]
},
{
  id: 12019, pillar: 12, type: "scale",
  title: "Welcher Prozentsatz der Action Items aus Ihren letzten drei GTM-Leadership-Reviews wurde on-time vom Owner bis zur Deadline geclosed?",
  options: [
    "Action-Item-Completion aus Leadership-Reviews wird nicht getrackt",
    "Action Items werden geloggt, Completion wird im nächsten Meeting selten reviewed",
    "Etwa die Hälfte wird on-time geclosed, der Rest wird repeatedly geschoben",
    "Über 70% der Action Items werden on-time geclosed, zu Beginn jedes Meetings reviewed",
    "Action Completion Rate als Governance Health KPI: pro Owner getrackt, monatlich an CRO reported, below-Threshold-Completion triggert Escalation Review"
  ]
},
{
  id: 12020, pillar: 12, type: "scale",
  title: "Wie viele GTM-Entscheidungen im letzten Quartal wurden nach Implementierung reversed oder materiell geändert, weil die Ursprungsentscheidung auf unvollständiger Frontline-Intelligence basierte?",
  options: [
    "Decision Reversals sind häufig: Feldrealität widerspricht regelmäßig der Ursprungsentscheidung",
    "Einzelne Reversals passieren, werden nicht getrackt, Intel-Gap-Verbindung nicht analysiert",
    "Gelegentliche Reversals, informell besprochen, kein formales Tracking oder Root-Cause-Prozess",
    "Decision Reversals werden getrackt, Intel-Gap-Reversals quartalsweise im Governance reviewed",
    "Decision Quality System: Reversals mit Root Cause getrackt, Intel-Gap-Reversals monatlich reviewed, Muster fließen zurück, wie Frontline-Daten vor Entscheidungen gesammelt und aufbereitet werden"
  ]
},

]; // END QUESTIONS ARRAY

window.QUESTIONS = QUESTIONS;
