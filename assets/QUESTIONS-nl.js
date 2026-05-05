/* ===========================================================
   MASTER QUESTION ENGINE v4.8 — CANONICAL (DUTCH)
   =========================================================== */

const QUESTIONS = [
/* ===========================================================
   PILLAR 0: CONTEXT (25 QUESTIONS)
   =========================================================== */

{
  id: 1, pillar: 0, type: "group",
  title: "Vertel ons over jou en je bedrijf",
  subtitle: "Basisidentiteit van het bedrijf, gebruikt om benchmarks en rapportagecontext te kalibreren.",
  fields: [
    { name: "fullname",        label: "Je volledige naam" },
    { name: "role",            label: "Je functie of jobtitel" },
    { name: "email",           label: "E-mailadres" },
    { name: "company",         label: "Bedrijfsnaam" },
    { name: "industry",        label: "Sector (bijv. FinTech, HRTech, DevTools)" },
    { name: "total_employees", label: "Totaal aantal medewerkers (FTE-equivalent)" },
    { name: "year_founded",    label: "Oprichtingsjaar (JJJJ)" },
    { name: "hq_region",       label: "Regio hoofdkantoor (bijv. US, NL, BE, DE, UK, FR, AU, SG)" }
  ]
},

{
  id: 2, pillar: 0, type: "group",
  title: "Kern SaaS-prestatiemetrics",
  subtitle: "Financiële basis en retentie.",
  fields: [
    { name: "arr",              label: "Huidige ARR (Annual Recurring Revenue)" },
    { name: "growth_rate",      label: "Year-over-Year groei (%)" },
    { name: "nrr",              label: "Net Revenue Retention — NRR (%)" },
    { name: "grr",              label: "Gross Revenue Retention — GRR (%)" },
    { name: "gross_margin",     label: "Brutomarge (%)" },
    { name: "monthly_burn",     label: "Maandelijkse netto burn" },
    { name: "cash_runway",      label: "Cash runway (maanden)" },
    { name: "number_of_clients",label: "Aantal actieve betalende klanten" }
  ]
},

{
  id: 3, pillar: 0, type: "group",
  title: "Samenstelling GTM-team",
  subtitle: "Alleen voltijdsequivalenten (FTE).",
  fields: [
    { name: "sales_headcount",             label: "# Sales — AEs / Closers" },
    { name: "sdr_headcount",               label: "# SDR / BDR" },
    { name: "marketing_headcount",         label: "# Marketing — Demand + PMM + Brand" },
    { name: "cs_headcount",               label: "# Customer Success / Account Management" },
    { name: "revops_enablement_headcount", label: "# RevOps / Enablement" },
    { name: "product_headcount",           label: "# Product — alleen PM + Design (geen engineering)" },
    { name: "engineering_headcount",       label: "# Engineering / R&D — alleen developers" },
    { name: "gtm_other_headcount",         label: "# Overig GTM — Partners, SEs" }
  ]
},

{
  id: 4, pillar: 0, type: "group",
  title: "Doelen en efficiëntie",
  subtitle: "Revenue-efficiëntie en commerciële prestaties.",
  fields: [
    { name: "arr_target",         label: "ARR-doel voor dit boekjaar" },
    { name: "quota_attainment",   label: "% reps die hun quota halen — laatste volledige kwartaal" },
    { name: "cac_payback",        label: "CAC payback periode (maanden)" },
    { name: "magic_number",       label: "Magic Number — net new ARR ÷ S&M-spend van het vorige kwartaal" },
    { name: "avg_discount",       label: "Gemiddelde korting (%) op nieuwe-logo deals" },
    { name: "expansion_pct",      label: "% nieuwe ARR uit upsell / expansie" },
    { name: "avg_ramp_months",    label: "Gemiddelde ramp-up nieuwe AE — maanden tot volledige quota" },
    { name: "sales_marketing_pct",label: "Sales & Marketing-spend als % van de omzet" }
  ]
},

{
  id: 5, pillar: 0, type: "group",
  title: "Funnel-velocity en risicocontext",
  subtitle: "Waar deals vertragen, breken of verdwijnen.",
  fields: [
    { name: "win_rate",             label: "Gemiddelde win rate (%)" },
    { name: "sales_cycle",          label: "Gemiddelde sales cycle (dagen)" },
    { name: "pipeline_coverage",    label: "Pipeline coverage ratio (bijv. 3,5 voor 3,5x)" },
    { name: "inbound_pipeline_pct", label: "% van de gekwalificeerde pipeline uit inbound" },
    { name: "revenue_concentration",label: "% van de omzet uit de top-10 klanten" },
    { name: "top_competitors",      label: "Top 3 concurrenten (komma-gescheiden)" },
    { name: "primary_loss_reason",  label: "Belangrijkste verliesreden — één zin" },
    { name: "primary_churn_reason", label: "Belangrijkste reden voor churn — één zin" }
  ]
},

{
  id: 6, pillar: 0, type: "group",
  title: "Pipeline- en productintelligentie",
  subtitle: "Geobserveerde conversie- en adoptiemechanieken.",
  fields: [
    { name: "discovery_to_demo",        label: "Discovery → Demo conversie (%)" },
    { name: "demo_to_poc",              label: "Demo → POC / Trial conversie (%)" },
    { name: "poc_to_close",             label: "POC → Close conversie (%)" },
    { name: "technical_validation_loss",label: "% deals verloren bij technische validatie" },
    { name: "activation_30d",           label: "% gebruikers actief 30 dagen na onboarding" },
    { name: "feature_penetration",      label: "% accounts dat 3+ kernfeatures gebruikt" },
    { name: "time_to_value",            label: "Gemiddeld aantal dagen tot eerste waardemoment" },
    { name: "product_expansion_pct",    label: "% expansion-omzet gedreven door product-usage signalen" }
  ]
},

{
  id: 7, pillar: 0, type: "multi_radio",
  title: "GTM-model",
  subtitle: "Selecteer één optie per vraag.",
  questions: [
    {
      key: "gtm_motion",
      label: "Wat beschrijft je primaire GTM-motion het best?",
      options: [
        "Inbound-led (gedreven door marketing)",
        "Outbound-led (gedreven door sales)",
        "Product-led (PLG / self-serve)",
        "Partner-led (channel / ecosysteem)",
        "Enterprise Field Sales (high touch)",
        "Hybride (gebalanceerde mix)"
      ]
    },
    {
      key: "revenue_model",
      label: "Je primaire omzetmodel",
      options: [
        "SaaS-abonnement (recurring)",
        "Usage-based / consumption",
        "Transactioneel / eenmalig",
        "Marketplace / take-rate",
        "Managed services / hybride"
      ]
    }
  ]
},

{
  id: 8, pillar: 0, type: "group",
  title: "Churn- en contractdetails",
  subtitle: "Retentie en commerciële structuur.",
  fields: [
    { name: "burn_multiple",       label: "Burn Multiple — netto burn ÷ net new ARR" },
    { name: "logo_churn_rate",     label: "Jaarlijkse logo churn rate — % verloren klanten" },
    { name: "revenue_churn_rate",  label: "Jaarlijkse revenue churn rate — % verloren ARR" },
    { name: "avg_contract_length", label: "Gemiddelde contractduur (maanden)" }
  ]
},

{
  id: 9, pillar: 0, type: "multi_radio",
  title: "Doelmarkt",
  subtitle: "Selecteer één optie per vraag.",
  questions: [
    {
      key: "target_segment",
      label: "Primaire doelsegment (gedeclareerde strategie)",
      options: [
        "Rabbit / SMB (< €10k ACV)",
        "Deer / Mid-Market (€10k – €50k ACV)",
        "Elephant / Enterprise (€50k – €250k ACV)",
        "Whale / Strategic (€250k+ ACV)"
      ]
    },
    {
      key: "economic_buyer",
      label: "Wie is je primaire economic buyer?",
      options: [
        "C-Level executive (CEO, CFO, CTO)",
        "VP / Head of Department",
        "Team lead / Manager",
        "Individual contributor / eindgebruiker",
        "Technisch / IT / Inkoop"
      ]
    }
  ]
},

{
  id: 10, pillar: 0, type: "group",
  title: "Efficiëntie- en funneldetails",
  subtitle: "Secundaire efficiëntiemetrics.",
  fields: [
    { name: "ltv_cac",              label: "LTV:CAC ratio" },
    { name: "pct_deals_no_discount",label: "% deals gesloten tegen volledige listprijs" },
    { name: "outbound_pipeline_pct",label: "% van de gekwalificeerde pipeline uit outbound" },
    { name: "mql_to_sql_rate",      label: "MQL naar SQL conversieratio (%)" }
  ]
},

{
  id: 11, pillar: 0, type: "multi_radio",
  title: "Bedrijfsfase",
  subtitle: "Selecteer één optie per vraag.",
  questions: [
    {
      key: "operating_phase",
      label: "Welke operationele fase beschrijft het bedrijf vandaag het best?",
      options: [
        "Land & Expand — Snelle groei, agressieve investering in nieuwe logos. De burn is bewust.",
        "Grow & Optimize — Omzet schalen terwijl efficiëntie verbetert. Rule of 40 is binnen handbereik.",
        "Efficiency First — Winstgevendheid is het primaire doel. Nieuwe logos zijn ondergeschikt aan NRR en marge.",
        "Transition / Repositioning — Actief switchen van segment, motion, product of markt.",
        "Stabilization / Recovery — Bescherm de omzetbasis en reduceer risico voor de volgende groeifase."
      ]
    },
    {
      key: "funding_stage",
      label: "Funding-fase",
      options: [
        "Bootstrapped / winstgevend",
        "Pre-Seed / Seed",
        "Series A",
        "Series B",
        "Series C+",
        "Private Equity / beursgenoteerd"
      ]
    }
  ]
},

{
  id: 12, pillar: 0, type: "group",
  title: "Teamcontext en pipeline-bronnen",
  subtitle: "Geografisch bereik en verdeling van pipeline-kanalen.",
  fields: [
    { name: "sales_leadership_headcount",label: "# Sales leadership — VP / Head / Managers" },
    { name: "active_countries",          label: "Aantal landen met actieve sales of klanten" },
    { name: "inbound_pct",  label: "% Pipeline — Inbound (content, SEO, brand, events)", type: "number", min: 0, max: 100, placeholder: "bijv. 40" },
    { name: "outbound_pct", label: "% Pipeline — Outbound (SDR, AE-prospectie, cold)",  type: "number", min: 0, max: 100, placeholder: "bijv. 30" },
    { name: "plg_pct",      label: "% Pipeline — Product-led (PLG, self-serve, trial)",   type: "number", min: 0, max: 100, placeholder: "bijv. 20" },
    { name: "partner_pct",  label: "% Pipeline — Partners (channel, ecosysteem, referral)",type: "number", min: 0, max: 100, placeholder: "bijv. 10" }
  ]
},

{
  id: 13, pillar: 0, type: "group",
  title: "Huidige prestatie vs doel",
  subtitle: "Wat het leadership vandaag volgt en waar de gap zit.",
  fields: [
    { name: "current_primary_metric",       label: "Primaire metric die het leadership vandaag volgt — bijv. ARR, NRR, EBITDA, Rule of 40, Win Rate, Burn Multiple" },
    { name: "current_primary_metric_value", label: "Huidige waarde van die metric" },
    { name: "current_primary_metric_goal",  label: "Doelwaarde voor dit boekjaar" },
    { name: "leadership_bottleneck",        label: "Belangrijkste bottleneck zoals het leadership die ziet — één zin" }
  ]
},

{
  id: 14, pillar: 0, type: "radio",
  title: "Hoe urgent is het oplossen van je primaire GTM-bottleneck?",
  subtitle: "Kies de optie die past bij je huidige operationele realiteit.",
  options: [
    "Laag — We hebben tijd om dit goed op te lossen",
    "Gemiddeld — Dit moet aandacht krijgen in de komende twee kwartalen",
    "Hoog — Dit blokkeert groei nu",
    "Kritiek — Dit bedreigt het bedrijf binnen 90 dagen"
  ]
},

{
  id: 15, pillar: 0, type: "multi_radio",
  title: "Productprofiel",
  subtitle: "Selecteer één optie per vraag.",
  questions: [
    {
      key: "product_category",
      label: "Type productcategorie",
      options: [
        "System of Record (bijv. CRM, ERP, HRIS)",
        "System of Engagement (bijv. SEP, Collaboration, Messaging)",
        "Point Solution / Workflow tool",
        "Infrastructuur / API / Developer tool",
        "Data / Analytics / AI / BI"
      ]
    },
    {
      key: "product_complexity",
      label: "Hoe zou je de complexiteit van je product voor een typische koper beschrijven?",
      options: [
        "Simpel / Plug & Play — Live in uren, geen technische ondersteuning nodig",
        "Matig complex — Basisconfiguratie, draaiend in dagen",
        "Complex / Configureerbaar — Vereist setup, training en een gedefinieerd onboarding-proces",
        "Zeer complex / Maatwerk — Implementatie van meerdere maanden, solutions engineering vereist"
      ]
    }
  ]
},

{
  id: 16, pillar: 0, type: "group",
  title: "Doel op 12 maanden",
  subtitle: "Wat het bedrijf moet bereiken in de komende 12 maanden.",
  fields: [
    { name: "goal_12m_primary_metric",   label: "Primaire succesmetric over 12 maanden — bijv. ARR, NRR, Rule of 40, EBITDA %" },
    { name: "goal_12m_primary_target",   label: "Doelwaarde over 12 maanden" },
    { name: "goal_12m_secondary_metric", label: "Secundaire metric (12 maanden)" },
    { name: "goal_12m_secondary_target", label: "Secundaire doelwaarde" }
  ]
},

{
  id: 17, pillar: 0, type: "radio",
  title: "Wat is je primaire strategische focus voor de komende 12 maanden?",
  subtitle: "Beantwoord voor je primaire revenue-segment en GTM-motion, tenzij een vraag expliciet om onderscheid vraagt.",
  options: [
    "Agressieve nieuwe-logo groei — Volume nieuwe klanten boven alles",
    "Efficiëntie en winstgevendheid — Cashflow, margeverbetering, burn-reductie",
    "Expansie en NRR — Upsell, cross-sell en retentie als primaire revenue-motor",
    "Toetreding tot nieuwe markt — Nieuwe geografie, segment of GTM-motion",
    "Categorieleiderschap — Brand, positionering en lange-termijn verdedigbaarheid"
  ]
},

{
  id: 18, pillar: 0, type: "radio",
  title: "Wat is je meest zichtbare GTM-symptoom op dit moment?",
  options: [
    "Niet genoeg leads — De top van de funnel is te dun",
    "Lage conversie — Pipeline bestaat, maar deals sluiten niet",
    "Stilgevallen deals / lange cycles — Deals lopen traag of gaan dark",
    "Hoge churn of downsell — Klanten vertrekken of contractwaarde krimpt",
    "Team-misalignment — Executie is inconsistent of coördinatie valt uiteen"
  ]
},

{
  id: 19, pillar: 0, type: "radio",
  title: "Wat denkt het leadership dat de root cause is?",
  options: [
    "Talent- of hiring-gaps — We hebben niet de juiste mensen op de juiste plek",
    "Technologie- of data-debt — Systemen zijn traag, kapot of afwezig",
    "Budgetbeperkingen — We kunnen niet investeren wat de strategie vraagt",
    "Strategische ambiguïteit — Het leadership is niet volledig aligned op richting of prioriteiten",
    "Productgaps — Het product kan de GTM-motion die we nodig hebben niet ondersteunen"
  ]
},

{
  id: 20, pillar: 0, type: "group",
  title: "Doel op 24 maanden",
  subtitle: "Hoe het bedrijf eruit moet zien over 24 maanden.",
  fields: [
    { name: "goal_24m_primary_metric",   label: "Primaire succesmetric over 24 maanden" },
    { name: "goal_24m_primary_target",   label: "Doelwaarde over 24 maanden" },
    { name: "goal_24m_secondary_metric", label: "Secundaire metric (24 maanden)" },
    { name: "goal_24m_secondary_target", label: "Secundaire doelwaarde" },
    { name: "goal_24m_operating_model",  label: "Doel-operating model over 24 maanden — bijv. Rule of 40, EBITDA-positief, exit-ready, IPO-ready" }
  ]
},

{
  id: 21, pillar: 0, type: "radio",
  title: "Hoeveel commerciële segmenten bedien je vandaag actief?",
  subtitle: "Een segment is een aparte kopersgroep met betekenisvol andere ACV, motion of waardepropositie.",
  options: [
    "1 segment — Eén type koper en motion",
    "2 segmenten — Twee aparte kopersgroepen",
    "3 segmenten — Drie aparte kopersgroepen",
    "4 of meer segmenten"
  ]
},

{
  id: 22, pillar: 0, type: "group",
  title: "Performance segment 1",
  subtitle: "Je primaire of grootste segment in ARR-bijdrage.",
  fields: [
    { name: "segment_1_name",     label: "Segment 1 — Naam of beschrijving (bijv. Mid-Market SaaS)" },
    { name: "segment_1_arr_pct",  label: "Segment 1 — ARR-bijdrage (%)" },
    { name: "segment_1_acv",      label: "Segment 1 — Gemiddelde ACV" },
    { name: "segment_1_win_rate", label: "Segment 1 — Win rate (%)" },
    { name: "segment_1_nrr",      label: "Segment 1 — NRR (%)" },
    { name: "segment_1_priority", label: "Segment 1 — Strategische prioriteit",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

{
  id: 23, pillar: 0, type: "group",
  title: "Performance segment 2",
  subtitle: "Je tweede segment.",
  fields: [
    { name: "segment_2_name",     label: "Segment 2 — Naam" },
    { name: "segment_2_arr_pct",  label: "Segment 2 — ARR-bijdrage (%)" },
    { name: "segment_2_acv",      label: "Segment 2 — Gemiddelde ACV" },
    { name: "segment_2_win_rate", label: "Segment 2 — Win rate (%)" },
    { name: "segment_2_nrr",      label: "Segment 2 — NRR (%)" },
    { name: "segment_2_priority", label: "Segment 2 — Prioriteit",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

{
  id: 24, pillar: 0, type: "multi_radio",
  title: "Marktcontext en rapportage",
  subtitle: "Selecteer één optie per vraag.",
  questions: [
    {
      key: "market_adoption",
      label: "Adoptiefase van de markt",
      options: [
        "Emerging — Categorie-educatie is nog nodig vóór er verkocht kan worden",
        "Early Growth — Categorie-bewustzijn bestaat, productdifferentiatie is de primaire strijd",
        "Established Growth — Meerdere geloofwaardige alternatieven, concurrentie wordt heviger",
        "Mature — Categorie commoditiseert, retentie en efficiëntie tellen meer dan acquisitie"
      ]
    },
    {
      key: "currency",
      label: "Primaire rapportagevaluta",
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
  title: "Performance segment 3",
  subtitle: "Je derde segment.",
  fields: [
    { name: "segment_3_name",     label: "Segment 3 — Naam" },
    { name: "segment_3_arr_pct",  label: "Segment 3 — ARR-bijdrage (%)" },
    { name: "segment_3_acv",      label: "Segment 3 — Gemiddelde ACV" },
    { name: "segment_3_win_rate", label: "Segment 3 — Win rate (%)" },
    { name: "segment_3_nrr",      label: "Segment 3 — NRR (%)" },
    { name: "segment_3_priority", label: "Segment 3 — Prioriteit",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

/* ===========================================================
   PILLAR 1: GTM STRATEGY & LEADERSHIP (20 QUESTIONS)
   =========================================================== */

{
  id: 1001, pillar: 1, type: "scale",
  title: "Hoeveel GTM-initiatieven zijn er in de afgelopen 12 maanden formeel gestopt, gedeprioriteerd of definanciered na een kwartaalreview?",
  subtitle: "Beantwoord voor je primaire revenue-segment en GTM-motion, tenzij een vraag expliciet om onderscheid vraagt.",
  options: [
    "We hebben formeel geen enkel initiatief gestopt: alles wat we starten loopt door",
    "Een of twee dingen zijn stilletjes losgelaten, maar zonder formeel reviewproces",
    "Een paar initiatieven zijn formeel gereviewd en gestopt op basis van performance-data",
    "We hebben een gedocumenteerd kwartaal-killproces: initiatieven worden stopgezet met gedocumenteerde rationale",
    "Onze kwartaalreview kapt meer initiatieven dan ze lanceert: resourcediscipline wordt systematisch afgedwongen"
  ]
},
{
  id: 1002, pillar: 1, type: "scale",
  title: "Hoe expliciet heb je vastgelegd welke marktsegmenten, verticals of dealtypes je niet zal najagen?",
  options: [
    "Geen uitsluitingen gedefinieerd: we gaan achter alles aan dat op een deal lijkt",
    "Informele consensus, maar niets gedocumenteerd of afgedwongen",
    "Sommige uitsluitingen bestaan, maar worden niet consistent toegepast in sales",
    "Schriftelijke uitsluitingscriteria, gereviewd in pipeline-kwalificatiecalls",
    "Expliciete negatieve ICP-regels afgedwongen in CRM-scoring, quotaontwerp en rep-comp"
  ]
},
{
  id: 1003, pillar: 1, type: "scale",
  title: "Wanneer twee GTM-teams concurreren om hetzelfde budget of dezelfde headcount, hoe wordt dat conflict opgelost en hoe snel?",
  options: [
    "Conflicten worden naar de CEO geëscaleerd en informeel opgelost over weken",
    "Het leadership bespreekt het in een meeting, maar oplossing is traag en vaak politiek",
    "Een gedocumenteerd prioriteringskader bestaat, maar conflictresolutie kost nog steeds meerdere cycles",
    "Een gedefinieerde beslissingsautoriteit lost resourceconflicten binnen één week op met gedocumenteerde rationale",
    "Resourceconflicten worden opgelost op de operationele cadans: binnen 48 uur, met een vooraf afgesproken prioriteitenhiërarchie"
  ]
},
{
  id: 1004, pillar: 1, type: "scale",
  title: "Hoe gedetailleerd en gefaseerd is je GTM-roadmap voor de komende 12-18 maanden?",
  options: [
    "Geen roadmap: we opereren reactief van kwartaal tot kwartaal",
    "Ruwe kwartaaldoelen zonder mijlpalen of eigenaren",
    "Een 12-maandenplan bestaat met grote mijlpalen, maar beperkte accountability",
    "Een gefaseerde roadmap met eigenaren, succesmetrieken en kwartaalreviews",
    "Een volledig gefaseerde GTM-roadmap met mijlpaal-gates, eigenaren en board-level reporting"
  ]
},
{
  id: 1005, pillar: 1, type: "scale",
  title: "Hoe strak zijn productreleases en roadmap-beslissingen verbonden met GTM-launchplannen en -timing?",
  options: [
    "Product wordt onafhankelijk uitgerold: GTM hoort bij de launch over releases",
    "Enige coördinatie, maar GTM zit zelden aan tafel bij roadmap-beslissingen",
    "Reguliere product-GTM syncs bestaan, maar downstream planning is vaak ad hoc",
    "Plannings­cycli van product en GTM zijn aligned, met gedeelde mijlpaalreviews",
    "Een gezamenlijke product-GTM kalender stuurt sequencing, launch readiness en sales activation"
  ]
},
{
  id: 1006, pillar: 1, type: "scale",
  title: "Hoe worden GTM-doelen gezet, gevolgd en gereviewd binnen het leadershipteam?",
  options: [
    "Doelen worden jaarlijks gezet en zelden herzien",
    "Doelen bestaan, maar voortgangsreviews zijn onregelmatig of geskipt",
    "Maandelijkse reviews vinden plaats, maar datakwaliteit beperkt de discussiekwaliteit",
    "Kwartaal-OKRs of -KPIs gevolgd in een gedeeld systeem met reguliere leadership-reviews",
    "Een formele GTM-operating cadans: wekelijkse metrics, maandelijkse reviews, kwartaal-retrospectives met gedocumenteerde acties"
  ]
},
{
  id: 1007, pillar: 1, type: "scale",
  title: "Hoe expliciet articuleert je GTM-strategie waarom je wint, waarom je verliest en wat je verdedigbaar maakt?",
  options: [
    "Geen formele articulatie: differentiatie wordt in calls geïmproviseerd",
    "Een high-level positioneringsstatement bestaat, maar mist operationele verankering",
    "Win-thema's anekdotisch geïdentificeerd uit sales-feedback",
    "Een gedocumenteerd concurrentievoordeel met onderbouwende win/loss-evidence",
    "Een gevalideerde differentiatie-architectuur: getest tegen buyer-feedback, elk kwartaal geüpdatet"
  ]
},
{
  id: 1008, pillar: 1, type: "scale",
  title: "Welke motion of welk segment krijgt in je huidige budget de meeste investering — en is die allocatie expliciet gedocumenteerd en verdedigd met performance-data?",
  options: [
    "Budgetbeslissingen worden gemaakt op basis van vorig jaar met minimale strategische review",
    "Enige prioritering vindt plaats, maar grotendeels politiek of relatie-gebaseerd",
    "Investeringen zijn gemapt aan GTM-prioriteiten, maar ROI-tracking is zwak",
    "Een formeel prioriteringskader koppelt spend aan pipeline- en revenue-uitkomsten",
    "GTM-investeringen worden gerangschikt op gemodelleerde ROI, kwartaalsgewijs gereviewd en herverdeeld op basis van performance-data"
  ]
},
{
  id: 1009, pillar: 1, type: "scale",
  title: "Welke van je GTM-motions — inbound, outbound, PLG, channel — genereert de meest efficiënte omzet, en welke data bevestigt dat?",
  options: [
    "Geen visibiliteit per motion: pipeline-bronnen worden niet gevolgd",
    "Ruwe inschattingen op basis van rep-intuïtie of marketing-aannames",
    "Pipeline-data per motion bestaat, maar wordt niet consistent gebruikt in planning",
    "CAC, win rate en cycle time worden per motion gevolgd en kwartaalsgewijs gereviewd",
    "Elke motion heeft een eigen P&L-achtige view: efficiëntie, payback en capaciteit zijn gemodelleerd en geüpdatet"
  ]
},
{
  id: 1010, pillar: 1, type: "scale",
  title: "Hoe vaak heeft een markt- of competitieve ontwikkeling je in de afgelopen 12 maanden ertoe gebracht een GTM-prioriteit, budgettoewijzing of motion materieel te wijzigen?",
  options: [
    "Onze strategie is in het afgelopen jaar niet materieel veranderd in reactie op marktsignalen",
    "We hebben veranderingen besproken, maar prioriteiten of budgetten niet formeel aangepast",
    "Eén significante aanpassing is gemaakt en gedocumenteerd",
    "Twee tot drie gedocumenteerde aanpassingen zijn gemaakt in reactie op marktsignalen, met expliciete rationale",
    "We hebben een doorlopend market sensing-proces dat per kwartaal minstens één gedocumenteerde strategische aanpassing oplevert"
  ]
},
{
  id: 1011, pillar: 1, type: "scale",
  title: "In hoeverre heb je segment- of persona-specifieke GTM-playbooks die reps actief gebruiken?",
  options: [
    "Geen playbooks: elke rep opereert onafhankelijk",
    "Een generiek sales-playbook bestaat, maar is niet segmentspecifiek",
    "Playbooks bestaan voor primaire segmenten, maar adoptie door reps is inconsistent",
    "Segmentplaybooks worden gebruikt in onboarding, gereviewd in deal reviews en kwartaalsgewijs geüpdatet",
    "Een modulair playbook-systeem per segment, persona en dealfase: gebruik gevolgd via CRM of enablement-platform"
  ]
},
{
  id: 1012, pillar: 1, type: "scale",
  title: "Wanneer een nieuwe GTM-hire start, hoelang duurt het voordat die een beslissing kan nemen die aligned is met je GTM-strategie, zonder het leadership te raadplegen?",
  options: [
    "De meeste nieuwe hires internaliseren de strategie nooit volledig: ze blijven het leadership oneindig raadplegen",
    "Het duurt zes maanden of meer voordat een nieuwe hire onafhankelijk aligned beslissingen kan nemen",
    "Drie tot zes maanden: de strategie is gedocumenteerd, maar complex om op te nemen",
    "Vier tot acht weken: onboarding bevat gestructureerde strategie-sessies met beslissingskaders",
    "Twee tot vier weken: strategie is gedocumenteerd, geleerd in onboarding en gevalideerd via een gestructureerde oriëntatiecheck"
  ]
},
{
  id: 1013, pillar: 1, type: "scale",
  title: "Hoe gebalanceerd is je GTM-strategie tussen nieuwe-logo acquisitie en expansie van bestaande accounts?",
  options: [
    "Vrijwel volledig gericht op nieuwe logos: expansie is ongestructureerd",
    "Expansie gebeurt reactief, maar er is geen toegewezen motion of doelen",
    "Aparte doelen voor nieuwe logos en expansie bestaan, maar resources zijn sterk geskewd richting nieuwe logos",
    "Toegewezen expansie-capaciteit, doelen en playbooks naast de nieuwe-logo motion",
    "Een dual-engine model: nieuwe logos en expansie zijn afzonderlijk geresourced, gemeten en gereviewd"
  ]
},
{
  id: 1014, pillar: 1, type: "scale",
  title: "Hoe systematisch test je nieuwe GTM-aanpakken voordat je resources committeert om ze op te schalen?",
  options: [
    "Nieuwe initiatieven worden direct op schaal gelanceerd zonder pilots",
    "Af en toe vinden kleine tests plaats, maar zonder gedefinieerde succescriteria",
    "Pilots worden uitgevoerd, maar resultaten worden informeel en inconsistent geëvalueerd",
    "Gedefinieerde pilotcriteria, succesdrempels en schaalbeslissingen gedocumenteerd vóór launch",
    "Een formeel test-and-scale playbook: hypothese, testcohort, meetperiode en go/no-go criteria voor elk initiatief"
  ]
},
{
  id: 1015, pillar: 1, type: "scale",
  title: "Hoe direct stuurt je GTM-strategie de hiringplannen en capacity modeling?",
  options: [
    "Hiring-beslissingen worden reactief genomen op basis van backfills of executive-intuïtie",
    "GTM-strategie en hiringplannen zijn op zijn best los gekoppeld",
    "Jaarlijkse headcountplannen verwijzen naar de GTM-strategie, maar worden niet midyear geüpdatet",
    "Kwartaal-capaciteitsreviews vertalen GTM-doelen naar role-level hiringplannen",
    "Een rolling capacity model: pipelinedoelen, ramp-aannames en hiring-sequencing worden elk kwartaal geüpdatet"
  ]
},
{
  id: 1016, pillar: 1, type: "scale",
  title: "Welk percentage van je huidige pipeline komt van buiten je primaire ICP, en hoe reageert het leadership op dat cijfer?",
  options: [
    "We tracken geen ICP vs non-ICP pipeline: alle pipeline wordt gelijk behandeld",
    "Er is non-ICP pipeline, maar het wordt niet gemeten of bestuurd",
    "We tracken het, maar non-ICP pipeline wordt geaccepteerd omdat we de omzet nodig hebben",
    "Non-ICP pipeline wordt getrackt, bestuurd en reps worden niet geprikkeld om het na te jagen",
    "ICP-compliance is een quotametric: reps worden expliciet bestraft voor het najagen van non-ICP deals boven een gedefinieerde drempel"
  ]
},
{
  id: 1017, pillar: 1, type: "scale",
  title: "In hoeverre is je GTM-strategie gegrond in gevalideerde marktbewijzen in plaats van leadership-aannames?",
  options: [
    "Strategie is voornamelijk gebouwd op founder- of executive-opinies",
    "Sommige klantgesprekken voeden de strategie, maar niet systematisch",
    "Jaarlijks VOC- of marktonderzoek voedt de planningscyclus",
    "Gestructureerde win/loss, klantinterviews en marktdata worden gereviewd vóór strategie-updates",
    "GTM-strategie is verankerd in een continue evidence-loop: buyer-interviews, deal-data en marktsignalen kwartaalsgewijs gereviewd"
  ]
},
{
  id: 1018, pillar: 1, type: "scale",
  title: "Hoe vaak week je werkelijke revenue-mix — naar segment, motion of geografie — in de afgelopen vier kwartalen materieel af van wat je GTM-strategie voorspelde?",
  options: [
    "We tracken werkelijke revenue-mix niet tegen strategische voorspellingen",
    "Significante verschillen bestaan, maar worden niet formeel gereviewd",
    "Mix-verschillen worden jaarlijks in planning besproken, maar niet kwartaal voor kwartaal getrackt",
    "Kwartaalreview van werkelijke vs voorspelde revenue-mix produceert een gedocumenteerde variance-analyse",
    "Mix-variance is een board-level metric: maandelijks getrackt, kwartaalsgewijs uitgelegd, en stuurt strategiebijstelling als afwijking gedefinieerde drempels overschrijdt"
  ]
},
{
  id: 1019, pillar: 1, type: "scale",
  title: "Hoe werd het in het afgelopen kwartaal opgelost wanneer twee GTM-teams streden om dezelfde resource of prioriteit — en was die oplossing gekoppeld aan gedocumenteerde strategische criteria?",
  options: [
    "Strategie beïnvloedt zelden dagelijkse beslissingen: executie wordt gedreven door urgentie",
    "Strategie wordt af en toe genoemd, maar bestuurt geen resource calls",
    "De meeste leiders verwijzen naar de strategie in planning, maar niet in operationele beslissingen",
    "Strategie wordt gebruikt om resourceconflicten en prioriteringskeuzes te beslechten",
    "De GTM-strategie is de primaire beslissingslens: alle grote resource-, hiring- en investeringskeuzes worden eraan getoetst"
  ]
},
{
  id: 1020, pillar: 1, type: "scale",
  title: "Adresseert je huidige GTM-plan expliciet zowel de 12-maanden executie-doelen als de operating-model wijzigingen die nodig zijn om performance op 24 maanden vol te houden?",
  options: [
    "Strategie is volledig gericht op kortetermijndoelen: er is geen gestructureerde view op het 24-maanden operating model",
    "Een langetermijnrichting bestaat informeel, maar is niet verbonden met huidige GTM-beslissingen",
    "12-maanden doelen zijn gedefinieerd, maar de implicaties van het 24-maanden operating model worden niet expliciet gepland",
    "Zowel kortetermijndoelen als het 24-maanden operating model zijn gedocumenteerd en gereviewd in planning",
    "Een dual-horizon strategie stuurt GTM-beslissingen: 12-maanden executie-doelen en 24-maanden capability requirements worden parallel onderhouden, en trade-offs daartussen worden expliciet beslecht"
  ]
},

/* ===========================================================
   PILLAR 2: MARKET INTELLIGENCE (20 QUESTIONS)
   =========================================================== */

{
  id: 2001, pillar: 2, type: "scale",
  title: "Hoe scherp gedefinieerd is je Ideal Customer Profile, en hoe recent is het gevalideerd tegen closed-won data?",
  subtitle: "Beantwoord voor je primaire revenue-segment en GTM-motion, tenzij een vraag expliciet om onderscheid vraagt.",
  options: [
    "Geen ICP gedefinieerd: we gaan achter elk bedrijf aan dat interesse toont",
    "Een ruw ICP bestaat op basis van founder-intuïtie, niet gevalideerd",
    "Een ICP-document bestaat, maar is in meer dan een jaar niet tegen deal-data gevalideerd",
    "ICP-criteria gevalideerd tegen closed-won cohortdata in de afgelopen 12 maanden",
    "ICP is een levend scoringmodel: firmografische, technografische en gedragssignalen kwartaalsgewijs gevalideerd tegen omzetdata"
  ]
},
{
  id: 2002, pillar: 2, type: "scale",
  title: "Hoe wordt je target-accountlijst opgebouwd, onderhouden en geprioriteerd voor sales en marketing?",
  options: [
    "Geen formele accountlijst: reps sourcen zelf op basis van persoonlijke inschatting",
    "Een statische lijst, eenmalig samengesteld, niet regelmatig gereviewd of geüpdatet",
    "Een lijst bestaat, maar scoring en prioritering zijn inconsistent over reps heen",
    "Een data-gedreven accountlijst die kwartaalsgewijs wordt ververst, met gedefinieerde scoringcriteria",
    "Een dynamische, getierde accountlijst: maandelijks geüpdatet, gescoord op ICP-fit en koopsignalen, met eigenaarschap per account"
  ]
},
{
  id: 2003, pillar: 2, type: "scale",
  title: "Hoe verzamel, synthetiseer en handel je naar intelligentie over klantpijnpunten en koop-triggers?",
  options: [
    "Geen gestructureerd proces: inzicht komt uit informele rep-gesprekken",
    "Klantfeedback wordt ad hoc verzameld, maar zelden gesynthetiseerd",
    "VOC-calls of -surveys vinden af en toe plaats, maar outputs worden niet consistent gebruikt",
    "Een gestructureerd VOC-programma met gedocumenteerde outputs die in GTM-planning worden gereviewd",
    "Een continue customer-intelligence loop: interviews, deal-signalen en supportdata maandelijks gesynthetiseerd en gereviewd"
  ]
},
{
  id: 2004, pillar: 2, type: "scale",
  title: "Hoe consistent wordt je segmentatiemodel toegepast over sales, marketing en product?",
  options: [
    "Geen segmentatie: alle accounts worden gelijk behandeld, ongeacht grootte of fit",
    "Segmentatie bestaat conceptueel, maar wordt niet gereflecteerd in routing, prijs of messaging",
    "Segmenten zijn gedefinieerd, maar inconsistent toegepast — verschillende teams gebruiken verschillende definities",
    "Segmentatie is gecodificeerd in CRM, gebruikt in routing en campaigntargeting, jaarlijks gereviewd",
    "Een uniforme segmentatie-architectuur stuurt CRM, pricing, campaigntargeting en capaciteitsplanning — kwartaalsgewijs gereviewd en consistent toegepast"
  ]
},
{
  id: 2005, pillar: 2, type: "scale",
  title: "Hoe monitor je markttrends en moves van concurrenten, en hoe snel bereiken inzichten beslissers?",
  options: [
    "Geen monitoring: we horen over concurrent-moves wanneer prospects ze noemen",
    "Af en toe LinkedIn- of news-scanning door individuen, niet systematisch gedeeld",
    "Competitieve en marktmonitoring vindt plaats, maar is niet gestructureerd of regulier",
    "Een gedefinieerde monitoringcadans met outputs die maandelijks naar GTM-leads gaan",
    "Een continue market intelligence-feed: bronnen getrackt, signalen getriaged en briefings naar leadership op een gedefinieerde cadans"
  ]
},
{
  id: 2006, pillar: 2, type: "scale",
  title: "Noem de twee grootste barrières die je doelkopers ervan weerhouden je product te adopteren. Zijn die gebaseerd op gedocumenteerde buyer-interviews of afgeleid uit sales-feedback?",
  options: [
    "Geen gedocumenteerd begrip: reps gaan ervan uit dat ze weten wat telt",
    "Anekdotisch begrip van seniore reps, niet gecodificeerd",
    "Beslissingscriteria informeel vastgelegd in CRM-notities, maar niet gesynthetiseerd",
    "Beslissingscriteria gedocumenteerd per segment, gevalideerd via win/loss-interviews",
    "Een gevalideerde decision-criteria map: gewogen per segment en dealgrootte, geüpdatet bij elke kwartaal-win/loss review"
  ]
},
{
  id: 2007, pillar: 2, type: "scale",
  title: "In je laatste 10 verloren deals: hoe vaak heeft een blocker-persona de beslissing laten ontsporen — en is dat patroon gedocumenteerd in een formele influence map?",
  options: [
    "Geen persona-mapping: reps richten zich op wie reageert op outreach",
    "Informele kennis van sleutel-persona's bij seniore reps, maar niet gedocumenteerd",
    "Een primaire buyer-persona is gedocumenteerd, maar champion- en blocker-rollen zijn slecht begrepen",
    "Een multi-persona map per segment, gevalideerd via deal reviews en win/loss-interviews",
    "Een gevalideerde influence map documenteert champion, economic buyer en blocker per segment en dealgrootte — kwartaalsgewijs geüpdatet en gebruikt in deal-kwalificatie"
  ]
},
{
  id: 2008, pillar: 2, type: "scale",
  title: "Kun je de twee grootste barrières benoemen die je doelkopers ervan weerhouden je product te adopteren — en zijn die gebaseerd op buyer-interviews of afgeleid uit verloren deals?",
  options: [
    "Geen inzicht: adoptie-barrières worden niet bestudeerd",
    "Aannames bestaan op basis van sales-bezwaren, niet extern gevalideerd",
    "Sommige adoptie-barrières geïdentificeerd via lost-deal analyse",
    "Adoptie-barrières gedocumenteerd en gevalideerd via buyer-interviews en churn-analyse",
    "Een gedocumenteerd adoptie-barrière model: per segment, persona en dealfase, kwartaalsgewijs geüpdatet met markt- en deal-data"
  ]
},
{
  id: 2009, pillar: 2, type: "scale",
  title: "Wat zorgt ervoor dat klanten overstappen van concurrerende tools naar de jouwe — of weg van jou — en hoe scherp weet je dat?",
  options: [
    "Geen gestructureerd inzicht in switching-dynamiek",
    "Informeel begrip uit een paar rep-anekdotes",
    "Switch-triggers geïdentificeerd via incidentele win/loss-calls",
    "Switching-triggers gedocumenteerd per segment, gevalideerd via gestructureerde win/loss-interviews",
    "Een switch-trigger intelligentiemodel: patronen van competitor displacement getrackt en kwartaalsgewijs gereviewd in GTM-planning"
  ]
},
{
  id: 2010, pillar: 2, type: "scale",
  title: "Tracket je team macro-economische en sectortrends die budgetten van kopers bepalen — en voedt dat direct je GTM-prioriteiten?",
  options: [
    "Geen besef: macrotrends zijn geen onderdeel van GTM-planning",
    "Algemeen besef, maar niet verbonden met deal- of segmentstrategie",
    "Macrocontext wordt in leadership-meetings besproken, maar niet geoperationaliseerd",
    "Macrotrends opgenomen in jaarlijkse GTM-planning met expliciete scenario-aannames",
    "Macrosignalen worden continu gevolgd en voeden direct segmentprioritering en messaging-aanpassingen"
  ]
},
{
  id: 2011, pillar: 2, type: "scale",
  title: "Hoe goed gedefinieerd en operationeel consistent is je marktsegmentatiemodel over sales, marketing en product?",
  options: [
    "Geen segmentatie: alle accounts worden gelijk behandeld",
    "Segmentatie bestaat conceptueel, maar wordt niet gereflecteerd in proces of tooling",
    "Segmenten zijn gedefinieerd, maar inconsistent toegepast over teams heen",
    "Segmentatie is gecodificeerd in CRM, gebruikt in routing en jaarlijks gereviewd",
    "Een uniforme segmentatie-architectuur: consistent over CRM, campaigntargeting, pricing en capaciteitsmodellen, kwartaalsgewijs gereviewd"
  ]
},
{
  id: 2012, pillar: 2, type: "scale",
  title: "Hoe strak sluit je ICP-definitie aan op de segmenten die de hoogste ARR, laagste CAC en beste NRR genereren?",
  options: [
    "Geen verband: ICP is niet gekoppeld aan financiële performance-data",
    "Ruwe aannames over welke segmenten het best presteren, niet gevalideerd",
    "ICP en omzetdata worden jaarlijks vergeleken, maar niet geoperationaliseerd",
    "ICP-scoring is afgelopen kwartaal gekalibreerd tegen ARR-, CAC- en NRR-data",
    "ICP is een revenue-gewogen model: elk kwartaal geüpdatet met closed-won cohortanalyse en efficiëntiemetrics"
  ]
},
{
  id: 2013, pillar: 2, type: "scale",
  title: "Welke persona's versnellen consistent de deal velocity in je topaccounts — en is dat patroon apart gedocumenteerd, los van je blocker-analyse?",
  options: [
    "Geen mapping van champion of accelerator: alle persona's worden gelijk behandeld in deal-executie",
    "Ervaren reps weten informeel wie ze moeten engagen om deals te versnellen, maar het is niet gedocumenteerd",
    "Een primaire champion-persona is gedocumenteerd, maar de acceleratie-dynamiek is niet apart geanalyseerd van blockers",
    "Accelerator- en blocker-persona's zijn gedocumenteerd per segment en gebruikt in deal-kwalificatie en coaching",
    "Een volledige influence-architectuur: champion-accelerators en blocker-profielen gedocumenteerd per segment en dealgrootte, kwartaalsgewijs gevalideerd via win/loss-analyse en ingebed in rep-coaching en deal reviews"
  ]
},
{
  id: 2014, pillar: 2, type: "scale",
  title: "Hoe systematisch produceert je win/loss-programma inzichten die veranderen hoe je verkoopt of positioneert?",
  options: [
    "Geen win/loss-programma: uitkomsten worden niet formeel gereviewd",
    "Reps loggen win/loss-redenen in CRM, maar outputs worden nooit geanalyseerd",
    "Win/loss-data wordt informeel gereviewd, brengt af en toe anekdotes naar boven",
    "Een gestructureerd win/loss-programma met kwartaal-synthese en gedocumenteerde GTM-acties",
    "Win/loss-inzichten sturen elk kwartaal gedefinieerde wijzigingen aan playbooks, messaging en competitieve positionering"
  ]
},
{
  id: 2015, pillar: 2, type: "scale",
  title: "Welke klantsegmenten genereren je hoogste lifetime value — en stuurt die bevinding direct je ICP-prioritering en targetingbeslissingen?",
  options: [
    "Geen LTV-data: alle klanten worden gelijk gewaardeerd",
    "Ruw besef op basis van ARR-grootte, niet gevalideerd tegen retentie- of expansiedata",
    "LTV-schattingen bestaan, maar zijn niet gesegmenteerd of geoperationaliseerd in targeting",
    "LTV per segment wordt jaarlijks berekend en informeert ICP-prioritering",
    "LTV is een live segmentatie-input: kwartaalsgewijs geüpdatet, drijft accountscoring, capaciteitstoewijzing en pricingbeslissingen"
  ]
},
{
  id: 2016, pillar: 2, type: "scale",
  title: "Hoe goed begrijp je je partner- en channel-ecosysteem — wie deals drijft, wie blokkeert en waarom?",
  options: [
    "Geen partner-intelligentie: ecosysteemdynamiek is onbekend",
    "Informele relaties met enkele partners, geen systematisch inzicht",
    "Partner-pipeline wordt getrackt, maar invloed op deal-uitkomsten wordt niet geanalyseerd",
    "Een gedocumenteerd partner-intelligentie model, kwartaalsgewijs gereviewd in partner business reviews",
    "Een gekwantificeerde ecosysteem-map: partner-sourced vs partner-influenced pipeline, win rates en cycle times maandelijks getrackt en gereviewd"
  ]
},
{
  id: 2017, pillar: 2, type: "scale",
  title: "Hoe scherp begrijp je prijsgevoeligheid en willingness-to-pay over je belangrijke klantsegmenten?",
  options: [
    "Geen pricing-intelligentie: prijs wordt gezet via cost-plus of competitor benchmarking",
    "Anekdotisch besef uit deals die op prijs verloren werden",
    "Prijsgevoeligheid getoetst via incidentele buyer-interviews",
    "Willingness-to-pay gevalideerd via gestructureerd onderzoek en analyse van close rate per prijsband",
    "Een prijselasticiteitsmodel op segmentniveau: gevalideerd via gecontroleerde tests, win/loss-data en buyer-interviews, jaarlijks gereviewd"
  ]
},
{
  id: 2018, pillar: 2, type: "scale",
  title: "Hoe volg je opkomende concurrenten en potentiële marktdisruptors voordat ze in je deals opduiken?",
  options: [
    "Opkomende concurrenten komen pas naar boven als prospects ze in calls noemen",
    "Ad hoc monitoring door sales-leiders zonder formele rapportage",
    "Een periodieke competitieve scan vindt plaats, maar niet op een gedefinieerde cadans",
    "Een kwartaalreview van opkomende concurrenten wordt uitgevoerd en gedeeld met GTM-leadership",
    "Een doorlopend threat-monitoringprogramma: nieuwe entrants getrackt, briefings gedistribueerd en playbooks proactief geüpdatet"
  ]
},
{
  id: 2019, pillar: 2, type: "scale",
  title: "Hoe direct is je productroadmap gekoppeld aan gekwantificeerd marktbewijs in plaats van interne meningen?",
  options: [
    "Roadmap wordt gedreven door engineering-capaciteit en leadership-prioriteiten, niet door marktbewijs",
    "Marktinputs worden informeel verzameld, maar sturen zelden roadmap-sequencing",
    "Klantverzoeken worden gelogd en in planning gerefereerd, maar niet systematisch gewogen",
    "Roadmapbeslissingen zijn gekoppeld aan gedocumenteerde marktsignalen met expliciete prioriteitsrationale",
    "Elk roadmap-item heeft een gedocumenteerde markt-evidence case: klantfrequentie, dealimpact en retentie-signaal, gereviewd in planning"
  ]
},
{
  id: 2020, pillar: 2, type: "scale",
  title: "In het afgelopen kwartaal: welk percentage van je gesloten deals had partner-betrokkenheid — en weet je of die betrokkenheid de close versnelde of compliceerde?",
  options: [
    "Partnerbetrokkenheid wordt niet getrackt: we weten niet welke deals partners hadden of hoe die outcomes beïnvloedden",
    "We weten ruwweg welke deals partner-betrokkenheid hadden, maar de impact op close rate of cycle time is niet geanalyseerd",
    "Partner-betrokken deals worden getrackt, maar verschillen in win rate en cycle time zijn niet formeel geanalyseerd",
    "Partner deal-tracking bestaat en we hebben win rate en cycle time vergeleken met directe deals — kwartaalsgewijs gereviewd",
    "Een live partner performance-model: partner-sourced vs partner-influenced pipeline, win rate-delta en cycle-time impact maandelijks getrackt en in revenue-meetings gereviewd"
  ]
},

/* ===========================================================
   PILLAR 3: PRODUCT MARKETING (20 QUESTIONS)
   =========================================================== */

{
  id: 3001, pillar: 3, type: "scale",
  title: "Wanneer een prospect vraagt 'wat doen jullie en waarom doet het ertoe voor mij?', hoe consistent geven je reps en je website hetzelfde scherpe antwoord?",
  subtitle: "Beantwoord voor je primaire revenue-segment en GTM-motion, tenzij een vraag expliciet om onderscheid vraagt.",
  options: [
    "Elke rep en elke pagina geeft een ander antwoord: geen consistentie",
    "Een kernboodschap bestaat, maar reps wijken er vaak van af of improviseren",
    "Messaging is consistent in geschreven materiaal, maar niet in live gesprekken",
    "Kern-messaging is gecodificeerd, getraind en wordt consistent gebruikt in calls en collateral",
    "Messaging wordt systematisch getest, kwartaalsgewijs geüpdatet en certificering-gated voordat reps het in deals gebruiken"
  ]
},
{
  id: 3002, pillar: 3, type: "scale",
  title: "In je laatste 10 gereviewde sales-calls: gaven reps dezelfde kerndifferentiatie-boodschap — of varieerde het verhaal per rep, kanaal en dag?",
  options: [
    "Geen formele positionering: het bedrijf beschrijft zichzelf anders, afhankelijk van wie je vraagt",
    "Een positioneringsstatement bestaat, maar wordt niet consistent gereflecteerd in sales of marketing",
    "Positionering is gedocumenteerd en gebruikt in marketing, maar niet afgedwongen in sales-gesprekken",
    "Positionering is gedocumenteerd, getraind en gereflecteerd in alle grote touchpoints",
    "Positionering is gevalideerd via buyer-research, geclaimd in een categorienarratief en ingebed in elk GTM-asset en elke motion"
  ]
},
{
  id: 3003, pillar: 3, type: "scale",
  title: "Hoe weet je dat je waardepropositie écht resoneert bij je ICP-segmenten, en welk bewijs ondersteunt dat?",
  options: [
    "We nemen aan dat het resoneert: er is geen formele validatie gedaan",
    "Sales-anekdotes suggereren resonantie, maar het is niet formeel getest",
    "Een paar klantinterviews bevestigden resonantie, maar niet over segmenten heen",
    "Waardepropositie gevalideerd via gestructureerde buyer-interviews en win/loss-analyse per segment",
    "Resonantie wordt continu getest: message lift gevolgd in dealconversie, interviews en A/B-tests per segment"
  ]
},
{
  id: 3004, pillar: 3, type: "scale",
  title: "In je laatste 10 closed-won deals: welk percentage bevatte een gedocumenteerde, door de klant verklaarde reden die direct matchte met je kerndifferentiatie-boodschap?",
  options: [
    "We leggen niet vast waarom klanten zeggen dat ze ons gekocht hebben",
    "We hebben enkele win-notes, maar ze zijn niet gecodeerd tegen onze differentiatie-boodschap",
    "Ongeveer een kwart van de wins verwijst naar onze kernboodschap: de rest noemt andere redenen",
    "De helft of meer van de wins verwijst naar onze kerndifferentiatie-boodschap in gedocumenteerde win-notes",
    "Meer dan 70% van de closed-won deals bevat een door de klant verklaarde reden die matcht met onze gedocumenteerde kerndifferentiatie: kwartaalsgewijs getrackt en gereviewd"
  ]
},
{
  id: 3005, pillar: 3, type: "scale",
  title: "Hoe systematisch is messaging afgestemd op verschillende buyer-persona's — niet alleen op senioriteit, maar op rol-specifieke pijn en taal?",
  options: [
    "Eén generieke boodschap voor alle persona's",
    "Messaging wordt informeel aangepast door ervaren reps, maar niet gecodificeerd",
    "Persona-specifieke talking points bestaan, maar worden niet consistent gebruikt",
    "Gedocumenteerde persona-messaging per primaire koperrol, ingebed in playbooks en decks",
    "Een persona messaging-architectuur: rol-specifieke pijn, taal en proof gevalideerd via interviews en ingebed in alle assets"
  ]
},
{
  id: 3006, pillar: 3, type: "scale",
  title: "Hoe consistent gebruiken sales-reps het laatste goedgekeurde messaging-materiaal zonder het te wijzigen of te vervangen?",
  options: [
    "Reps gebruiken hun eigen materiaal: standaarddecks worden zelden geopend",
    "Reps gebruiken goedgekeurd materiaal af en toe, maar passen het zwaar en onvoorspelbaar aan",
    "De meeste reps gebruiken goedgekeurd materiaal, maar met inconsistente aanpassingen",
    "Goedgekeurd materiaal wordt consistent gebruikt met kleine, toegestane aanpassingen",
    "Een gecontroleerde asset-bibliotheek: versie-beheerd, adoptie getrackt in CRM of enablement-platform, afwijkingen gemarkeerd in deal reviews"
  ]
},
{
  id: 3007, pillar: 3, type: "scale",
  title: "Hoe weet je welke specifieke boodschappen, proof points of framings deals consistent vooruit bewegen?",
  options: [
    "Geen inzicht: we tracken niet welke boodschappen dealprogressie sturen",
    "Anekdotische feedback van seniore reps, niet gevalideerd of gesystematiseerd",
    "Win/loss-notes bevatten message-referenties, maar worden niet geanalyseerd",
    "Message-performance wordt gereviewd in win/loss-analyse en sales-coachingsessies",
    "Een message intelligence-systeem: win/loss gecodeerd per message-thema, conversion lift gevolgd per asset en talk track"
  ]
},
{
  id: 3008, pillar: 3, type: "scale",
  title: "Hoe compleet en bruikbaar is je bibliotheek van proof points, case studies en ROI-bewijzen, en hoe up-to-date is die?",
  options: [
    "Geen formele proof library: reps vertrouwen op geheugen of generieke testimonials",
    "Een paar case studies bestaan, maar zijn verouderd of niet segment-specifiek",
    "Een proof library bestaat, maar is niet georganiseerd per segment, persona of use case",
    "Een gecureerde proof library, georganiseerd per segment en use case, kwartaalsgewijs gereviewd",
    "Een strategische proof-architectuur: case studies, ROI-calculators en third-party validatie geïndexeerd per segment, persona en dealfase"
  ]
},
{
  id: 3009, pillar: 3, type: "scale",
  title: "In je huidige demo: welke capabilities worden in de eerste 10 minuten getoond — en is die volgorde gebaseerd op gevalideerde data over wat next-step conversie drijft?",
  options: [
    "Geen systematisch begrip: features worden gedemoed op basis van wat de rep graag toont",
    "Ervaren reps weten informeel wat werkt, maar het is niet gedocumenteerd of gedeeld",
    "Feature-resonantie wordt anekdotisch gevolgd via dealfeedback, maar niet gesystematiseerd",
    "Feature-resonantie per segment en dealfase is gedocumenteerd via win/loss- en demo-analyse",
    "Een feature-to-deal-stage map bestaat: gevalideerd via buyer-interviews en progressiedata, kwartaalsgewijs geüpdatet en gebruikt om de demostructuur te sturen"
  ]
},
{
  id: 3010, pillar: 3, type: "scale",
  title: "Welk percentage van je reps slaagde voor de laatste messaging-certificering, en hoe recent is die certificering geüpdatet om je huidige positionering te reflecteren?",
  options: [
    "Geen messaging-certificering bestaat",
    "Een certificering bestaat, maar minder dan de helft van de reps heeft hem afgerond",
    "De meeste reps hebben de certificering afgerond, maar hij is in meer dan 12 maanden niet geüpdatet",
    "Meer dan 80% van de reps gecertificeerd op huidige messaging in de afgelopen zes maanden",
    "Certificering is gated: reps kunnen geen quota dragen zonder te slagen, opnieuw getest bij elke grote positionerings-update, met slagingspercentages per manager getrackt"
  ]
},
{
  id: 3011, pillar: 3, type: "scale",
  title: "Na je laatste 10 demo's: hoeveel resulteerden in een gedocumenteerde next step — en track je welke demo-elementen die uitkomst dreven?",
  options: [
    "Next steps na demo's zijn informeel: er is geen tracking van conversieratio of wat dat dreef",
    "Sommige reps documenteren next steps, maar de demo-naar-uitkomst correlatie wordt niet systematisch gevolgd",
    "Demo-naar-next-step conversie wordt als getal getrackt, maar welke demo-elementen uitkomsten dreven is onbekend",
    "Democonversie wordt per segment getrackt en gereviewd in coaching, met enige correlatie aan demo-content en -volgorde",
    "Een bestuurd demo-performance systeem: conversieratio per rep en segment getrackt, demo-elementen gecorreleerd met uitkomsten, en bevindingen kwartaalsgewijs gebruikt om de standaard demostructuur te updaten"
  ]
},
{
  id: 3012, pillar: 3, type: "scale",
  title: "Hoeveel invloed heeft Product Marketing op de prioritering van de productroadmap, en hoe wordt die invloed uitgeoefend?",
  options: [
    "PMM heeft geen plek in roadmap-discussies",
    "PMM levert af en toe input, maar dat verandert prioritering zelden",
    "PMM presenteert marktbewijs in planningreviews met inconsistente impact",
    "PMM bezit een gestructureerd marktinput-proces met gedocumenteerde invloed op roadmap-beslissingen",
    "PMM is een formele co-eigenaar van roadmap-prioritering: marktbewijs is een verplichte input voor elke grote feature-beslissing"
  ]
},
{
  id: 3013, pillar: 3, type: "scale",
  title: "Hoe vaak bereikt een deal late stage, proposal of procurement, en gaat dan dood zonder gedocumenteerde uitleg waar je team naar handelt?",
  options: [
    "Late-stage deal-death komt vaak voor en oorzaken worden nooit systematisch geanalyseerd",
    "We bespreken late-stage verliezen informeel, maar tracken geen patronen",
    "Late-stage verliesredenen worden gelogd, maar analyse vindt hooguit jaarlijks plaats",
    "Late-stage verliezen triggeren een gestructureerde review binnen twee weken met gedocumenteerde root cause",
    "Late-stage verliesratio is een KPI: elk verlies boven een dealgroottedrempel triggert een gedocumenteerde review, root causes worden gecodeerd, en patronen sturen maandelijkse PMM- en sales-aanpassingen"
  ]
},
{
  id: 3014, pillar: 3, type: "scale",
  title: "Hoe goed geresourced en uitgevoerd zijn je productlaunch-motions, van interne readiness tot marktactivatie?",
  options: [
    "Launches gebeuren zonder gedefinieerd proces: GTM is pas voorbereid na release",
    "Enige coördinatie bestaat, maar GTM-readiness is inconsistent",
    "Launches volgen een basisproces, maar field-activatie is vaak incompleet",
    "Een gedefinieerd launchproces met interne enablement, asset-delivery en marktactivatie-checkpoints",
    "Een volledig bestuurde launch-motion: readiness scorecard, enablement-certificering en launch-to-pipeline meting voor elke launch"
  ]
},
{
  id: 3015, pillar: 3, type: "scale",
  title: "Wat is je website-conversie van gekwalificeerde bezoeker naar geboekte meeting of trial, en hoe verhoudt dat zich tot het vorige kwartaal?",
  options: [
    "We tracken visitor-to-meeting conversie op de website niet",
    "Conversie wordt getrackt, maar we weten niet hoe een goede benchmark eruitziet",
    "We tracken het, maar conversie is plat of dalend zonder gedocumenteerd verbeteringsplan",
    "Visitor-to-meeting conversie wordt maandelijks getrackt en stuurt kwartaal-website optimalisatie",
    "Website-conversie is een gemanagede KPI: wekelijks getrackt, continu A/B-getest en kwartaalsgewijs gereviewd tegen categoriebenchmarks met gedocumenteerde verbeteringsdoelen"
  ]
},
{
  id: 3016, pillar: 3, type: "scale",
  title: "Hoe systematisch tracket, documenteert en distribueert je PMM-functie competitieve intelligentie naar sales?",
  options: [
    "Geen competitieve PMM-functie: competitieve antwoorden worden in deals geïmproviseerd",
    "Battlecards bestaan, maar zijn verouderd en worden niet consistent gebruikt",
    "Competitief materiaal wordt af en toe geüpdatet wanneer iets significants verandert",
    "Een competitief PMM-programma met kwartaal-battlecard updates en rep-training",
    "Een live competitief intelligentie-systeem: eigenaarschap, maandelijks geüpdatet, ingebed in onboarding en deal reviews, met rep-adoptie getrackt"
  ]
},
{
  id: 3017, pillar: 3, type: "scale",
  title: "Wanneer een deal in de finalefase verloren gaat — na het indienen van een proposal — hoe vaak is de opgegeven reden iets dat je PMM-team had kunnen aanpakken?",
  options: [
    "We analyseren finalefase-verliezen niet op messaging- of positioneringsniveau",
    "Af en toe bespreken we late-stage verliesredenen informeel",
    "We reviewen late-stage verliezen kwartaalsgewijs, maar PMM zit niet in de review",
    "PMM neemt deel aan late-stage loss reviews en bezit een gedocumenteerde actie wanneer messaging bijdroeg",
    "PMM voert kwartaalsgewijs een finalefase verlies-audit uit: elk verlies gecodeerd op messagefaaltype, proof gap of competitieve positionerings-zwakte, met gedocumenteerde remediatie"
  ]
},
{
  id: 3018, pillar: 3, type: "scale",
  title: "Hoe overtuigend en consistent gebruikt zijn je demo- en presentatiematerialen in live buyer-interacties?",
  options: [
    "Geen standaard demo: elke rep bouwt zijn eigen",
    "Een standaard demo bestaat, maar reps wijken in de praktijk significant af",
    "Een referentie-demo bestaat en wordt als startpunt gebruikt, maar consistentie is laag",
    "Een gestandaardiseerd demoframework met rol-specifieke varianten, getraind en gecertificeerd voordat reps live gaan",
    "Een demo operating system: standaardstructuur, segmentvarianten, gebruik getrackt en elk kwartaal geüpdatet op basis van win/loss-data"
  ]
},
{
  id: 3019, pillar: 3, type: "scale",
  title: "Hoeveel draagt Product Marketing meetbaar bij aan pipeline-, win rate- en deal velocity-uitkomsten?",
  options: [
    "PMM-impact op omzet wordt niet gemeten",
    "PMM-bijdrage wordt kwalitatief besproken, maar niet gekoppeld aan dealmetrics",
    "Enkele asset-usage en campagne-attributiedata bestaat, maar wordt niet systematisch gereviewd",
    "PMM rapporteert kwartaalsgewijs over pipeline-invloed, win rate per asset en message-performance",
    "PMM bezit een revenue impact-dashboard: win rate per segment, asset-utilisatie, message lift en launch-to-pipeline correlatie maandelijks getrackt"
  ]
},
{
  id: 3020, pillar: 3, type: "scale",
  title: "Map je content tegen je buyer journey: welke fase heeft vandaag de zwakste dekking — en heb je een gedocumenteerd plan om die gap te dichten?",
  options: [
    "Messaging bestaat alleen voor de salesfase: awareness en post-sale content ontbreken",
    "Sommige content dekt meerdere fases, maar het is gefragmenteerd en niet verbonden met een buyer journey",
    "Kernfases zijn gedekt, maar er zijn gaps in late-stage proof-content en post-sale waardecommunicatie",
    "Een gedocumenteerde content-map dekt alle primaire buyerfases van awareness tot renewal voor de hoofdsegmenten",
    "Een volledige buyer journey content-architectuur: elke fase gemapt per segment en persona, freshness getrackt, gaps geprioriteerd in kwartaal-PMM planning, en performance gemeten via fase-conversie"
  ]
},

/* ===========================================================
   PILLAR 4: DEMAND GENERATION (20 QUESTIONS)
   =========================================================== */

{
  id: 4001, pillar: 4, type: "scale",
  title: "Hoe expliciet gedefinieerd zijn je demand-generation strategie, kanalen, doelen, budgetten en succesmetrics, en hoe recent is dat gereviewd?",
  subtitle: "Beantwoord voor je primaire revenue-segment en GTM-motion, tenzij een vraag expliciet om onderscheid vraagt.",
  options: [
    "Geen gedocumenteerde strategie: DG-activiteiten worden gekozen op basis van beschikbaarheid of gewoonte",
    "Een ruw kanalenplan bestaat, maar mist budgettoewijzing of performance-doelen",
    "Een strategiedocument bestaat, maar is in meer dan zes maanden niet formeel gereviewd",
    "Een gedocumenteerde DG-strategie kwartaalsgewijs gereviewd, met performance-doelen per kanaal",
    "Een volledig geoperationaliseerde DG-strategie: kanalenmix, budget, pipelinedoelen en review-cadans allemaal gedocumenteerd en sturen executie"
  ]
},
{
  id: 4002, pillar: 4, type: "scale",
  title: "Welk aandeel van je gekwalificeerde pipeline komt uit inbound-kanalen, en hoe consistent houdt dat aan kwartaal op kwartaal?",
  options: [
    "Inbound levert geen significante pipeline: het is een ambitiekanaal",
    "Inbound genereert wat leads, maar kwaliteit is laag en volume is onvoorspelbaar",
    "Inbound genereert gekwalificeerde leads, maar volume schommelt sterk per kwartaal",
    "Inbound levert elk kwartaal consistent gekwalificeerde pipeline tegen gedefinieerde doelen",
    "Inbound is een betrouwbare, gemeten pipeline-engine: bijdrage maandelijks getrackt per kanaal, segment en conversiefase"
  ]
},
{
  id: 4003, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "Hoe voorspelbaar en herhaalbaar is je outbound-motion in het genereren van gekwalificeerde pipeline, en hoe wordt dat gemeten?",
  options: [
    "Geen gestructureerde outbound: reps prospecten onafhankelijk zonder gedeelde aanpak",
    "Outbound bestaat, maar resultaten zijn zeer variabel en worden niet systematisch gemeten",
    "Outbound genereert pipeline, maar sequencing, messaging en cadans zijn inconsistent",
    "Een gestandaardiseerde outbound-motion met gedefinieerde sequenties, target-accounts en pipelinedoelen wekelijks gereviewd",
    "Een volledig geïnstrumenteerde outbound-engine: activiteit, response en pipelinemetrics dagelijks getrackt, met kwartaals-A/B testen op sequenties"
  ]
},
{
  id: 4004, pillar: 4, type: "scale",
  title: "Noem nu je top drie pipeline-bronnen, gerangschikt op cost-per-qualified-opportunity. Is die ranking gebaseerd op getrackte data of geschat uit het hoofd?",
  options: [
    "Paid media wordt niet gebruikt of spend wordt alleen op kostenniveau getrackt",
    "Paid media draait, maar ROI en pipelinebijdrage worden niet gemeten",
    "Enige pipeline-attributie bestaat, maar cost-per-opportunity tracking is inconsistent",
    "Cost-per-opportunity per kanaal getrackt met kwartaal-efficiencyreviews",
    "Paid media wordt gemanaged als een pipeline-investering: CPO, CAC-bijdrage en payback maandelijks per kanaal getrackt"
  ]
},
{
  id: 4005, pillar: 4, type: "scale",
  title: "Hoe meet je website-conversieperformance, en wat is je conversiepercentage van bezoeker naar gekwalificeerde lead?",
  options: [
    "Website-conversie wordt niet getrackt: geen funnelvisibiliteit",
    "Traffic en form fills worden getrackt, maar conversiekwaliteit wordt niet gemeten",
    "Top-of-funnel conversie getrackt, maar mid-funnel drop-off wordt niet geanalyseerd",
    "Conversiepercentages getrackt per pagina en bron, maandelijks gereviewd met gedocumenteerde verbeteracties",
    "Een conversie-optimalisatieprogramma: funnel end-to-end gemapt, A/B-tests draaien, en conversie kwartaalsgewijs getoetst aan benchmarks"
  ]
},
{
  id: 4006, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 10 },
  title: "Hoe systematisch voer je Account-Based Marketing uit op je hoogst geprioriteerde accounts, en hoe wordt impact gemeten?",
  options: [
    "Geen ABM-motion: alle accounts krijgen dezelfde outreach",
    "ABM wordt besproken, maar er is geen toegewezen accountselectie, budget of meting",
    "Een pilot ABM-motion bestaat voor een subset accounts, maar zonder gedefinieerde succesmetrics",
    "Een gedocumenteerd ABM-programma met account-tiers, kanaalactivatie en kwartaal-pipeline impact reviews",
    "Een volledig geïnstrumenteerde ABM-engine: accountdekking, engagement en pipelinebijdrage maandelijks per account-tier getrackt"
  ]
},
{
  id: 4007, pillar: 4, type: "scale",
  title: "Hoe gestructureerd en performance-getracket is je lead nurturing-motion voor prospects die nog niet klaar zijn om te kopen?",
  options: [
    "Geen nurturing: prospects die niet direct kunnen kopen worden losgelaten",
    "Een e-mailsequentie bestaat, maar is generiek, ongetarget en niet gereviewd",
    "Nurture-tracks bestaan per segment, maar engagement rates en conversie worden niet getrackt",
    "Nurture-programma's zijn gesegmenteerd, geautomatiseerd en kwartaalsgewijs gereviewd op conversie-impact",
    "Een volledig geïnstrumenteerde nurture-engine: gesegmenteerd per persona en fase, conversie getrackt en geüpdatet op basis van performance-data"
  ]
},
{
  id: 4008, pillar: 4, type: "scale",
  title: "Hoe consistent genereert content gekwalificeerde demand, en hoe meet je content-bijdrage aan pipeline?",
  options: [
    "Content wordt geproduceerd, maar de bijdrage aan pipeline wordt niet gemeten",
    "Content genereert traffic, maar pipeline-attributie wordt niet getrackt",
    "Sommige stukken content worden aan pipeline geattribueerd, maar meting is inconsistent",
    "Content-pipelinebijdrage wordt kwartaalsgewijs getrackt per assettype en thema",
    "Een content demand-model: elk asset getrackt op traffic, MQL-conversie en pipeline-invloed, maandelijks gereviewd"
  ]
},
{
  id: 4009, pillar: 4, type: "scale",
  title: "Kun je pipeline en omzet terug attribueren naar specifieke DG-kanalen, campagnes en spend — en hoe vaak stuurt die data een budgetherallocatie?",
  options: [
    "Geen attributie: alle pipeline-bronnen zijn onbekend of gemarkeerd als 'direct'",
    "First-touch attributie bestaat, maar multi-touch en spend-ROI worden niet getrackt",
    "Pipeline wordt op kanaalniveau geattribueerd, maar campagne-niveau ROI wordt niet consistent getrackt",
    "Multi-touch attributie ingesteld, maandelijks gereviewd per kanaal en campagne",
    "Een volledig attributiemodel: kanaal, campagne en spend getrackt naar closed-won omzet met kwartaal-ROI rapportage"
  ]
},
{
  id: 4010, pillar: 4, type: "scale",
  title: "Wordt Marketing aansprakelijk gehouden voor een omzet- of pipeline-quota, en hoe wordt dat doel gezet en gereviewd?",
  options: [
    "Marketing heeft geen omzet- of pipeline-quota: succes wordt gemeten in leads of impressies",
    "Een informele pipeline-verwachting bestaat, maar wordt niet formeel getrackt of bestuurd",
    "Marketing heeft een pipeline-doel, maar het is secundair en stuurt zelden budget of headcount",
    "Marketing heeft een formeel pipeline-quota, maandelijks gereviewd met de CRO of VP Sales",
    "Marketing co-bezit een revenue-doel: pipelinebijdrage, win rate op marketing-sourced deals en CPO gereviewd in wekelijkse revenue-meetings"
  ]
},
{
  id: 4011, pillar: 4, type: "scale",
  title: "Zijn je lead follow-up SLA's tussen marketing en sales gedefinieerd, getrackt en afgedwongen — en wat gebeurt er als een rep het venster mist?",
  options: [
    "Geen SLA's: lead follow-up hangt af van individueel rep-gedrag",
    "Een informele verwachting bestaat, maar wordt niet getrackt of afgedwongen",
    "SLA's zijn gedocumenteerd, maar compliance wordt niet gemonitord",
    "SLA's zijn gedefinieerd, getrackt in CRM en wekelijks gereviewd met sales-leadership",
    "SLA's zijn contractueel tussen marketing en sales: compliance dagelijks getrackt, breuken geëscaleerd, response time gereviewd in wekelijkse pipeline-meetings"
  ]
},
{
  id: 4012, pillar: 4, type: "scale",
  title: "Hoe scherp is je demand-generation gepersonaliseerd per segment, persona en koopfase, voorbij basis lijst-segmentatie?",
  options: [
    "Eén campagne naar alle prospects: geen segmentatie toegepast",
    "Basis lijst-segmentatie op bedrijfsgrootte of sector, maar messaging is generiek",
    "Segment-niveau campagnes bestaan, maar persona- en fase-targeting zijn inconsistent",
    "Campagnes zijn gesegmenteerd op ICP-tier, persona en funnelfase met gepersonaliseerde messaging",
    "Dynamische, multi-variabele personalisatie: ICP-fit, intent-signalen, persona en fase sturen automatisch content, timing en kanaalkeuze"
  ]
},
{
  id: 4013, pillar: 4, type: "scale",
  title: "Hoe systematisch worden je demand-generation campagnes geoptimaliseerd op basis van data, en wat is de cadans van die review?",
  options: [
    "Campagnes draaien voor een vaste periode zonder performance-review of aanpassing",
    "Performance wordt af en toe gereviewd, maar wijzigingen worden gemaakt op gut feel",
    "Maandelijkse performance-reviews vinden plaats, maar optimalisatiebeslissingen zijn inconsistent",
    "Een wekelijkse DG performance-review stuurt gedocumenteerde campagne-aanpassingen",
    "Een continue optimalisatieloop: kanalenperformance, CPO en conversie wekelijks getrackt, met A/B-tests en budgetherallocatie op een gedefinieerde cadans"
  ]
},
{
  id: 4014, pillar: 4, type: "scale",
  show_if: { field: 'gtm_motion', not_contains: ['product-led'] },
  title: "Voor je laatste drie events of webinars: hoeveel pipeline gegenereerd, en wat was de cost-per-qualified-opportunity per event?",
  options: [
    "Events draaien zonder pipeline- of kostentracking: opkomst is de enige metric",
    "Wat pipeline wordt achteraf aan events geattribueerd, maar cost-per-opportunity wordt niet berekend",
    "Pipeline gegenereerd wordt per event getrackt, maar kostendata is incompleet of niet gekoppeld aan gekwalificeerde opportunities",
    "Pipeline gegenereerd en cost-per-qualified-opportunity worden per event getrackt en na afloop gereviewd",
    "Een bestuurd event ROI-model: pipeline gegenereerd, cost-per-opp en influenced ARR per event getrackt — resultaten voeden direct toekomstige event-investeringsbeslissingen"
  ]
},
{
  id: 4015, pillar: 4, type: "scale",
  title: "Hoe systematisch ontwerpt, draait en documenteert je team DG-experimenten, en hoe snel sturen resultaten beslissingen?",
  options: [
    "Geen experimenten: DG draait herhaaldelijk hetzelfde playbook",
    "Af en toe wijzigingen, maar zonder gedefinieerde hypotheses of succescriteria",
    "Sommige tests worden uitgevoerd, maar documentatie en beslissingsprocessen zijn informeel",
    "Een kwartaal-experimentenkalender met gedefinieerde hypotheses, meetperiodes en go/no-go criteria",
    "Een continue testcultuur: wekelijkse experimenten in een gedeeld log, resultaten maandelijks gereviewd, en winnende aanpakken systematisch opgeschaald"
  ]
},
{
  id: 4016, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "Hoe gestructureerd is de feedback loop tussen SDR's en Marketing over leadkwaliteit, en hoe vaak stuurt die feedback wijzigingen?",
  options: [
    "Geen formele feedback loop: SDR's en Marketing opereren onafhankelijk",
    "SDR's klagen informeel over leadkwaliteit, maar het verandert geen campagnes",
    "Af en toe feedback-sessies, maar zonder gestructureerd format of action tracking",
    "Een wekelijks gestructureerd feedbackproces tussen SDR-team en Marketing met gedocumenteerde acties",
    "Een closed-loop feedbacksysteem: SDR-naar-marketing leadkwaliteitsscores wekelijks gereviewd, sturen campagne- en ICP-verfijningen op een gedefinieerde cadans"
  ]
},
{
  id: 4017, pillar: 4, type: "scale",
  show_if: { field: 'gtm_motion', not_contains: ['product-led', 'partner-led'] },
  title: "Heb je een gedefinieerde event- en webinarstrategie met pipelinedoelen per event — en kun je pipeline-ROI tonen van je laatste drie events?",
  options: [
    "Events worden opportunistisch gekozen zonder gedefinieerde strategie of meting",
    "Events worden gepland, maar opkomst is de primaire succesmetric",
    "Een basis event-kalender bestaat met post-event pipelinetracking voor grote events",
    "Een eventstrategie met gedefinieerde pipelinedoelen, pre/post-event activatie en kwartaalsgewijs gereviewde ROI",
    "Een volledig geïnstrumenteerde event-engine: pipeline sourced en influenced per event getrackt, met pre/post-playbooks en ROI-benchmarks kwartaalsgewijs gereviewd"
  ]
},
{
  id: 4018, pillar: 4, type: "scale",
  title: "Hoe formeel is Demand Generation opgenomen in revenue-planning, en co-bezit Marketing het pipeline-getal?",
  options: [
    "Marketing zit niet in revenue-planning discussies",
    "Marketing wordt geïnformeerd over revenue-doelen, maar draagt niet bij aan pipeline-modeling",
    "Marketing levert input aan planning, maar co-bezit geen pipelinedoelen",
    "Marketing co-bezit een pipelinedoel, opgenomen in het revenue-planningproces",
    "Marketing is co-eigenaar van het revenue-plan: pipelinemodel, budgettoewijzing en ramp-aannames gezamenlijk gereviewd met Sales en Finance"
  ]
},
{
  id: 4019, pillar: 4, type: "scale",
  title: "Kun je pipeline laten groeien zonder DG-budget evenredig te laten groeien — en heb je data uit de afgelopen 12 maanden om dat aan te tonen?",
  options: [
    "Pipeline schalen vereist evenredige budget- en headcountstijgingen",
    "Wat schaalvoordelen bestaan, maar efficiëntie verslechtert naarmate volume stijgt",
    "DG schaalt matig: incrementele efficiëntiewinsten worden behaald met gedocumenteerde initiatieven",
    "DG schaalt met sub-lineaire budgetstijgingen: efficiëntieverbeteringen elk kwartaal getrackt",
    "Een compounding DG-engine: organische, earned en paid kanalen versterken elkaar, en efficiëntie verbetert naarmate de schaal toeneemt"
  ]
},
{
  id: 4020, pillar: 4, type: "scale",
  title: "Hoe ontwikkelt je Customer Acquisition Cost zich naarmate je opschaalt, en hoe meet en manage je die trend?",
  options: [
    "CAC wordt niet getrackt: acquisitiekosten zijn onbekend",
    "CAC wordt jaarlijks getrackt, maar niet als performance-knop gemanaged",
    "CAC wordt kwartaalsgewijs getrackt, maar stijgt zonder gedocumenteerd verbeterplan",
    "CAC wordt maandelijks getrackt en gereviewd met gedocumenteerde efficiëntie-initiatieven",
    "CAC-trends worden per kanaal en motion gemodelleerd, maandelijks gereviewd, met een gedocumenteerde doeltrajectorie en herallocatie-trigger"
  ]
},

/* ===========================================================
   PILLAR 5: SALES EXECUTION (20 QUESTIONS)
   =========================================================== */

{
  id: 5001, pillar: 5, type: "scale",
  title: "Is je sales-proces gedocumenteerd, afgedwongen op stage gates en consistent gevolgd — of draait elke rep effectief zijn eigen versie?",
  subtitle: "Beantwoord voor je primaire revenue-segment en GTM-motion, tenzij een vraag expliciet om onderscheid vraagt.",
  options: [
    "Geen gedocumenteerd proces: elke rep beheert deals onafhankelijk",
    "Een informeel proces zit in de hoofden van seniore reps, maar is niet geschreven of getraind",
    "Een proces is gedocumenteerd, maar adoptie binnen het team is inconsistent",
    "Een gedocumenteerd stage-by-stage proces met exit-criteria, getraind en gereflecteerd in CRM",
    "Een bestuurd sales-proces: stages, exit-criteria en verplichte CRM-velden afgedwongen, met afwijkingen gemarkeerd in pipeline reviews"
  ]
},
{
  id: 5002, pillar: 5, type: "scale",
  title: "Hoe rigoureus worden deals gekwalificeerd voordat ze de pipeline ingaan, en wat gebeurt er met ongekwalificeerde deals?",
  options: [
    "Geen formele kwalificatie: alles dat interesse uit, gaat de pipeline in",
    "Kwalificatie is informeel en inconsistent over reps heen",
    "Een kwalificatieframework bestaat, maar wordt inconsistent toegepast",
    "Een gedefinieerd kwalificatieframework consistent toegepast, met ongekwalificeerde deals actief uit pipeline verwijderd",
    "Een zero-tolerance kwalificatiecultuur: deals zonder gedocumenteerde kwalificatiecriteria worden niet aangemaakt in CRM, gereviewd in pipeline-meetings"
  ]
},
{
  id: 5003, pillar: 5, type: "scale",
  title: "Hoe zichtbaar en gedisciplineerd is je pipelinemanagement, en hoe consistent stromen deals door gedefinieerde stages?",
  options: [
    "Pipeline is een wishlist: stage-progressie wordt niet bestuurd",
    "Pipeline wordt informeel gereviewd en stage-hygiëne is overgelaten aan individuele reps",
    "Pipeline reviews vinden plaats, maar gestoten en opgeblazen deals worden niet actief gemanaged",
    "Wekelijkse pipeline reviews met gedocumenteerde acties op gestalde deals en opgeblazen stages",
    "Een bestuurde pipelinediscipline: stage-age triggers, verplichte exit-criteria en pipelinekwaliteit wekelijks gescoord met geforceerde actie op overdue deals"
  ]
},
{
  id: 5004, pillar: 5, type: "scale",
  title: "Welk percentage van de aan het begin van de maand commit-gedane deals sluit daadwerkelijk per maandeinde, en hoe stabiel is die ratio?",
  options: [
    "Minder dan 50%: commit-accuratesse wordt niet getrackt of gemanaged",
    "50-70%: commits worden vaak gemist en niet systematisch gereviewd",
    "70-85%: commits sluiten in matige mate met enige forecastdiscipline",
    "85-95%: commits worden consistent gehaald met een formeel commit-reviewproces",
    "Boven 95%: commit-accuratesse is een bestuurde metric, wekelijks gereviewd, met een gedocumenteerd escalatiepad voor missers"
  ]
},
{
  id: 5005, pillar: 5, type: "scale",
  title: "Hoe consistent kunnen alle reps productcapabilities, beperkingen en competitieve differentiatie articuleren zonder te leunen op technische ondersteuning?",
  options: [
    "Productkennis varieert sterk: de meeste reps kunnen geen onsupported demo draaien",
    "Een paar ervaren reps hebben diepe productkennis; de rest is onbetrouwbaar",
    "De meeste reps hebben adequate productkennis, maar gaps komen op in complexe deals",
    "Productkennis wordt gecertificeerd voordat reps live gaan, met refreshers bij elke grote release",
    "Een doorlopend product-mastery programma: certificering-gated, per rep getrackt en geüpdatet bij elke productrelease"
  ]
},
{
  id: 5006, pillar: 5, type: "scale",
  title: "Wordt je sales-proces afgedwongen op stage gates in CRM — en welk percentage van deals in je pipeline van afgelopen kwartaal had alle verplichte velden ingevuld bij elke stage?",
  options: [
    "CRM stage gates worden niet afgedwongen: verplichte velden zijn vaak leeg en deals stromen toch door",
    "Sommige verplichte velden bestaan, maar reps kunnen meestal deals doorzetten zonder ze in te vullen",
    "Stage-gate vereisten bestaan en worden door managers gereviewd, maar enforcement is inconsistent over teams heen",
    "Verplichte velden worden afgedwongen op key stages, en compliance wordt regelmatig gereviewd in pipeline inspections",
    "Een bestuurd stage-gate systeem: verplichte velden afgedwongen in CRM bij elke stage, compliance wekelijks getrackt en uitzonderingen gedocumenteerd met manager-accountability"
  ]
},
{
  id: 5007, pillar: 5, type: "scale",
  title: "In je laatste 20 deals: welk percentage had alle kwalificatiemethodologie-velden ingevuld — en dwingt CRM dat af voordat een deal naar de volgende stage doorstroomt?",
  options: [
    "Geen kwalificatiemethodologie wordt gebruikt: reps kwalificeren op basis van persoonlijke inschatting zonder gedeeld framework",
    "Een methodologie bestaat, maar minder dan 40% van de deals heeft volledige kwalificatievelden in CRM",
    "40-70% van de deals heeft volledige kwalificatievelden, maar enforcement is inconsistent over managers heen",
    "Meer dan 70% van de deals heeft volledige kwalificatievelden — CRM stage gates dwingen methodologie af voor deals boven een gedefinieerde grootte",
    "Kwalificatiemethodologie wordt afgedwongen op 90%+ over alle deals boven drempel: CRM-gates zijn actief, compliance wekelijks getrackt en afwijkingen gemarkeerd in deal reviews"
  ]
},
{
  id: 5008, pillar: 5, type: "scale",
  title: "Hoe systematisch leg je win/loss-intelligentie vast en gebruik je die om te verbeteren hoe je reps verkopen?",
  options: [
    "Win/loss-redenen worden niet gedocumenteerd: uitkomsten worden gevierd of vergeten",
    "Reps loggen een reden in CRM, maar het wordt zelden geanalyseerd of besproken",
    "Win/loss-data wordt informeel gereviewd in teamvergaderingen zonder gestructureerde outputs",
    "Een win/loss-reviewproces produceert kwartaalsgewijs gedocumenteerde thema's, gedeeld met sales en PMM",
    "Win/loss-intelligentie stuurt elk kwartaal directe updates aan playbooks, messaging en coachingcontent"
  ]
},
{
  id: 5009, pillar: 5, type: "scale",
  title: "Hoe goed voorbereid zijn je reps op de meestvoorkomende objections, en hoe weet je dat de behandeling werkt?",
  options: [
    "Geen objection-handling framework: reps improviseren reacties",
    "Veelvoorkomende objections worden in onboarding behandeld, maar niet geoefend of geüpdatet",
    "Een objection handling-gids bestaat, maar adoptie en effectiviteit worden niet gemeten",
    "Objection-reacties worden getraind, geroleplayed en gereviewd in coachingsessies",
    "Een live objection-bibliotheek: reacties getest in calls, geüpdatet vanuit win/loss-data, en effectiviteit getrackt tegen conversiepercentages"
  ]
},
{
  id: 5010, pillar: 5, type: "scale",
  title: "In de afgelopen 90 dagen: hoeveel rep-demo's zijn gereviewd tegen een gedefinieerd kwaliteitsrubric — en wat was de gemiddelde score?",
  options: [
    "Geen demo's worden gereviewd tegen een rubric: kwaliteit wordt niet gemanaged",
    "Een paar demo's worden informeel gereviewd, maar er is geen consistent rubric of scoringmethode",
    "Sommige demo's worden gescoord tegen een rubric, maar dekking is partieel en inconsistent over managers heen",
    "Demo-kwaliteit wordt regelmatig gereviewd met een gedefinieerd rubric, en feedback wordt per rep gedocumenteerd",
    "Een bestuurd demo-kwaliteitssysteem: demo reviews gescoord tegen een standaard rubric, gemiddelde scores per rep en manager getrackt, en lage scores triggeren gerichte coaching binnen dezelfde maand"
  ]
},
{
  id: 5011, pillar: 5, type: "scale",
  title: "Beloont je sales comp-plan het gedrag dat lange-termijnomzet bouwt — of incentiveert het kortetermijn-closes ten koste van dealkwaliteit en retentie?",
  options: [
    "Comp is puur volumegebaseerd: gedrag zoals multithreading of ICP-kwalificatie wordt niet beloond",
    "Sommige kwalitatieve elementen bestaan, maar comp is voornamelijk quotagebaseerd zonder gedragsguardrails",
    "Comp bevat enige retentie- of NRR-componenten, maar discounting en dealkwaliteit worden niet bestraft",
    "Comp-ontwerp bevat dealkwaliteit-guardrails: kortingslimieten, ICP-vereisten en NRR-componenten",
    "Een multi-factor comp-model: nieuwe ARR, NRR, kortingsdiscipline en ICP-compliance allemaal gewogen, jaarlijks gereviewd met Finance en HR"
  ]
},
{
  id: 5012, pillar: 5, type: "scale",
  title: "Bevat je huidige comp-plan een mechanisme dat diepe kortingen, non-ICP closes of single-threaded deals bestraft — en heeft het rep-gedrag meetbaar veranderd?",
  options: [
    "Comp beloont alleen gesloten omzet: kortingen, ICP-kwaliteit en deal-hygiëne hebben geen consequentie",
    "Sommige gedrags-guardrails bestaan informeel, maar zijn niet ingebed in comp en gedrag is niet meetbaar veranderd",
    "Comp bevat een of twee kwaliteits-guardrails, maar ze worden zwak afgedwongen en impact is onduidelijk",
    "Comp bevat expliciete bestraffingen of modifiers voor discounting, ICP-missers of slechte dealkwaliteit, en gedrag wordt kwartaalsgewijs gereviewd",
    "Een multi-factor comp-model: kortingsdiscipline, ICP-compliance en dealkwaliteit beïnvloeden direct payout, gedrag wordt maandelijks getrackt, en meetbare verbetering is geobserveerd"
  ]
},
{
  id: 5013, pillar: 5, type: "scale",
  title: "Noem de meest impactvolle hefboom op je win rate op dit moment — en identificeer de databron die bevestigt dat het die hefboom is en niet iets anders.",
  options: [
    "We kunnen geen specifieke hefboom benoemen: win rate wordt geaggregeerd besproken zonder root-cause evidence",
    "Het leadership heeft een mening over de hefboom, maar het is grotendeels anekdotisch en niet gekoppeld aan een betrouwbare databron",
    "Een of twee waarschijnlijke hefbomen zijn geïdentificeerd, maar evidence is partieel of inconsistent over segmenten heen",
    "Een primaire win-rate hefboom is geïdentificeerd en wordt ondersteund door gesegmenteerde conversie-, win/loss- of stagedata",
    "Win-rate causaliteit wordt actief gemodelleerd: de primaire hefboom is onderbouwd door gesegmenteerde data, regelmatig gereviewd, en gekoppeld aan gerichte interventies met gemeten impact"
  ]
},
{
  id: 5014, pillar: 5, type: "scale",
  title: "In je laatste pipeline review: hoeveel gestalde of verloren deals hadden in de 30 dagen daarvoor toegang tot enablement-materiaal — en wordt dat getrackt?",
  options: [
    "Enablement-materiaal bestaat, maar wordt niet gebruikt in actieve deals",
    "Reps weten van het materiaal af, maar toegang is inconsistent en gebruik wordt niet getrackt",
    "Materiaal staat op een gedeelde drive, maar adoptie in deals wordt niet gemeten",
    "Enablement-materiaal is georganiseerd per dealfase, getrackt op gebruik en kwartaalsgewijs gereviewd op effectiviteit",
    "Een deal-stage enablement-systeem: materiaal geïndexeerd per fase, persona en objection, met gebruik en deal-uitkomst correlatie maandelijks getrackt"
  ]
},
{
  id: 5015, pillar: 5, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "Hoe streng wordt CRM data-hygiëne afgedwongen, en wat zijn de consequenties van incomplete deal-records?",
  options: [
    "CRM-data is vrijwillig: de meeste deal-records zijn incompleet of inaccuraat",
    "Datahygiëne wordt verwacht, maar niet afgedwongen: geen gevolg voor ontbrekende velden",
    "Managers checken CRM-kwaliteit informeel in 1:1's zonder systematische enforcement",
    "Verplichte CRM-velden worden afgedwongen op stage gates met manager-review",
    "Een zero-tolerance CRM-hygiënebeleid: incomplete records blokkeren stage-progressie, commissies vereisen datacompleetheid, wekelijks gereviewd"
  ]
},
{
  id: 5016, pillar: 5, type: "scale",
  title: "Hoe granulair wordt individuele rep-performance getrackt, en hoe snel worden underperformance-patronen geïdentificeerd?",
  options: [
    "Rep-performance wordt kwartaalsgewijs gereviewd, alleen op quota attainment-niveau",
    "Maandelijkse quotatracking bestaat, maar leading indicators worden niet gemonitord",
    "Activiteit, pipeline en conversiemetrics worden getrackt, maar inconsistent gereviewd",
    "Wekelijkse rep-performance dashboards die activiteit, pipeline en conversie afdekken, gereviewd in 1:1's",
    "Een real-time rep-performance intelligentiesysteem: leading en lagging indicators dagelijks getrackt, met automatische alerts voor afwijkingspatronen"
  ]
},
{
  id: 5017, pillar: 5, type: "scale",
  title: "Track je alle vier sales velocity-componenten — deal count, win rate, deal size en cycle time — per segment, en handel je daar maandelijks naar?",
  options: [
    "Sales velocity wordt niet getrackt: we focussen alleen op totale omzet",
    "Een of twee velocity-componenten worden getrackt, maar niet samen gereviewd",
    "Een basis velocity-view bestaat, maar wordt niet regelmatig gereviewd of gesegmenteerd",
    "Alle vier velocity-componenten getrackt per segment, maandelijks gereviewd met gedocumenteerde verbeteracties",
    "Een sales velocity-dashboard wekelijks gereviewd: componenten getrackt per segment, rep en motion, met hefboomspecifieke verbetering-initiatieven"
  ]
},
{
  id: 5018, pillar: 5, type: "scale",
  show_if: { field: 'product_complexity', contains_any: ['complex / configurable', 'highly complex'] },
  title: "In de afgelopen 90 dagen: welk percentage van je reps handelde een technische productvraag in een live deal af zonder te escaleren naar Product of Engineering?",
  options: [
    "Zeer weinig of geen: de meeste technische vragen triggeren een escalatie",
    "Een minderheid van de reps kan standaard technische vragen aan, maar de meesten hebben support nodig",
    "De meeste reps kunnen veelvoorkomende technische vragen aan, maar complexe scenario's escaleren nog vaak",
    "Een grote meerderheid van de reps kan standaard technische vragen onafhankelijk aan, met escalaties beperkt tot gedefinieerde edge cases",
    "Technische vloeiendheid is een gemanagede capability: rep handling rate getrackt, escalatieredenen gereviewd en enablement continu geüpdatet om onnodige escalaties te reduceren"
  ]
},
{
  id: 5019, pillar: 5, type: "scale",
  title: "In je laatste volledige kwartaal: welk percentage van gesloten deals bevatte een korting die niet door de koper is geïnitieerd — en creëert je comp-plan een prikkel voor dat gedrag?",
  options: [
    "We tracken niet of kortingen rep-geïnitieerd of buyer-geïnitieerd zijn: alle kortingen worden gelijk behandeld",
    "We weten dat discounting vaak voorkomt, maar hebben rep-geïnitieerd niet gescheiden van buyer-geïnitieerd in onze data",
    "Rep-geïnitieerde discounting bestaat blijkens, maar comp-ontwerp adresseert of bestraft het niet",
    "Rep-geïnitieerde kortingen worden getrackt en comp bevat guardrails — maar gedragsverandering is nog niet meetbaar",
    "Rep-geïnitieerd vs buyer-geïnitieerde kortingen worden maandelijks getrackt, comp bestraft rep-geïnitieerde discounting boven een gedefinieerde rate, en de rep-geïnitieerde kortingsratio is meetbaar gedaald"
  ]
},
{
  id: 5020, pillar: 5, type: "scale",
  title: "In je laatste kwartaal: welk percentage van deals dat de pipeline binnenkwam werd uiteindelijk gediskwalificeerd — en hoeveel daarvan werden binnen 30 dagen na binnenkomst verwijderd?",
  options: [
    "Diskwalificatie is zeldzaam: deals die de pipeline binnenkomen blijven veelal, ongeacht fit",
    "Sommige deals worden gediskwalificeerd, maar de rate is onbekend en timing wordt door rep-discretie gestuurd",
    "Diskwalificatieratio wordt getrackt, maar niet systematisch gereviewd — snelheid van verwijdering wordt niet gemeten",
    "Diskwalificatieratio en gemiddelde tijd-in-pipeline vóór verwijdering worden getrackt en gereviewd in pipeline-inspecties",
    "Een fast-disqualification discipline: kwalificatiecriteria afgedwongen bij stage entry, diskwalificatieratio en -snelheid wekelijks getrackt, en hoge volumes late diskwalificaties triggeren een review van het kwalificatieproces"
  ]
},

/* ===========================================================
   PILLAR 6: CUSTOMER SUCCESS & EXPANSION (20 QUESTIONS)
   =========================================================== */

{
  id: 6001, pillar: 6, type: "scale",
  title: "Hoe gestructureerd en time-bound is je customer onboarding-motion, en hoe track je of klanten op tijd hun first value bereiken?",
  subtitle: "Beantwoord voor je primaire revenue-segment en GTM-motion, tenzij een vraag expliciet om onderscheid vraagt.",
  options: [
    "Geen gestructureerde onboarding: elke klant wordt anders behandeld",
    "Een onboarding-checklist bestaat, maar time-to-value wordt niet getrackt",
    "Onboarding volgt een basisproces, maar mijlpaalrealisatie is inconsistent",
    "Een gedefinieerd onboarding-playbook met mijlpaaltracking en time-to-value per cohort gereviewd",
    "Een volledig geïnstrumenteerde onboarding-engine: mijlpaal-completion, time-to-value en early adoption per klant getrackt, wekelijks gereviewd"
  ]
},
{
  id: 6002, pillar: 6, type: "scale",
  title: "Hoe proactief monitor je customer health, en hoe snel triggert een gezondheidsverslechtering een interventie?",
  options: [
    "Geen health monitoring: churn wordt ontdekt wanneer klanten opzeggen",
    "CS-managers tracken health subjectief zonder gedeeld framework",
    "Een health score-model bestaat, maar wordt onregelmatig of inconsistent gereviewd",
    "Een health score-model wekelijks gereviewd met gedocumenteerde interventie-playbooks voor at-risk accounts",
    "Een predictief health-systeem: leading indicators in real time getrackt, geautomatiseerde alerts triggeren playbooks, en interventie-uitkomsten worden gemeten"
  ]
},
{
  id: 6003, pillar: 6, type: "scale",
  title: "Kun je de top twee beïnvloedbare drivers van churn in je base benoemen — en is dat gebaseerd op cohortanalyse of afgeleid uit een handvol verloren accounts?",
  options: [
    "Geen retentie-analyse: churn wordt zonder data toegeschreven aan product of pricing",
    "Churnredenen worden in CRM gelogd, maar niet geanalyseerd op patronen",
    "Een jaarlijkse churnanalyse identificeert brede thema's, maar geen root causes",
    "Retentie-drivers worden gekwantificeerd via cohortanalyse en exit-interviews, kwartaalsgewijs gereviewd",
    "Een retentie-intelligentiemodel: churn-predictors gescoord per segment, kwartaalsgewijs gevalideerd, sturen proactieve interventie-playbooks"
  ]
},
{
  id: 6004, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['deer / mid-market', 'elephant / enterprise', 'whale / strategic'] },
  title: "Hoe consistent en substantieel voer je customer business reviews uit, en hoe worden uitkomsten getrackt?",
  options: [
    "Geen QBR's: klanten horen alleen iets van ons als er een probleem is",
    "QBR's vinden informeel en inconsistent plaats, afhankelijk van de CS-rep",
    "Een QBR-template bestaat, maar planning en outputkwaliteit zijn inconsistent",
    "Quarterly business reviews zijn ingepland, gestructureerd en outputs gedocumenteerd per account",
    "Een volledig bestuurd QBR-programma: voorbereidingstemplates, executive-betrokkenheidsrichtlijnen en follow-through getrackt tegen renewal- en expansie-uitkomsten"
  ]
},
{
  id: 6005, pillar: 6, type: "scale",
  title: "Brengt CS systematisch klantintelligentie naar Product en Sales — en kun je een specifieke beslissing in de laatste twee kwartalen aanwijzen die daardoor veranderde?",
  options: [
    "Teams opereren in silo's: klantintelligentie wordt niet systematisch gedeeld",
    "Wat informeel delen vindt plaats, maar het stuurt geen cross-functionele beslissingen",
    "Een maandelijkse sync bestaat, maar de kwaliteit en consistentie van informatiedeling is laag",
    "Een gestructureerd klantintelligentie-forum met gedocumenteerde product-, sales- en CS-acties",
    "Een live klantintelligentie-systeem: productsignalen, expansiekansen en risico-indicatoren in real time gedeeld over CS, Product en Sales"
  ]
},
{
  id: 6006, pillar: 6, type: "scale",
  title: "Hoe proactief identificeert en activeert je CS-team expansiekansen, voordat Sales het gesprek opent?",
  options: [
    "Expansie is volledig Sales-gedreven: CS heeft geen expansiemotie",
    "CS brengt af en toe expansiekansen naar boven, maar zonder gedefinieerd proces",
    "CS identificeert expansiekansen in health reviews, maar handoff naar Sales is inconsistent",
    "Een gedocumenteerd expansie-trigger framework: CS-bezit tot handoff, met pipeline per account getrackt",
    "CS draait een proactieve expansiemotie: usage-signalen, mijlpaaltriggers en segment propensity-modellen sturen pipeline onafhankelijk van Sales"
  ]
},
{
  id: 6007, pillar: 6, type: "scale",
  title: "Hoe voorspelbaar en procesgedreven is je renewal-motion, en hoe ver van tevoren begin je elke renewal te managen?",
  options: [
    "Renewals worden reactief gemanaged: outreach begint pas als de datum nadert",
    "Een renewal-reminderproces bestaat, maar timing en eigenaarschap zijn inconsistent",
    "Renewals worden 90 dagen vooraf getrackt, maar de motion is niet gestructureerd",
    "Een renewal-playbook met 120-dagen engagement-triggers, owner-accountability en forecasttracking",
    "Een volledig bestuurde renewal-engine: risico-getierd, 180-dagen engagement-triggers, forecast wekelijks geüpdatet, en renewal-uitkomsten gereviewd in board reporting"
  ]
},
{
  id: 6008, pillar: 6, type: "scale",
  title: "In je laatste onboarding-cohort: welk percentage klanten bereikte hun gedefinieerde first value-mijlpaal op tijd — en wat blokkeerde degenen die dat niet deden?",
  options: [
    "Productadoptie wordt niet gemeten: CS leunt op anekdotische klantfeedback",
    "Sommige usage-data is beschikbaar, maar wordt niet systematisch verbonden met CS-acties",
    "Usage-metrics worden getrackt, maar inconsistent gebruikt in health scoring",
    "Productadoptie wordt per account getrackt, geïntegreerd in health scores en wekelijks gereviewd door CS",
    "Een usage-intelligentie systeem: feature-adoptie, engagement-diepte en time-to-activation per account getrackt en sturen automatische CS-interventies"
  ]
},
{
  id: 6009, pillar: 6, type: "scale",
  title: "Hoe systematisch leid je klanten op over productcapabilities, en verbetert je educatieprogramma meetbaar adoptie of renewal-rates?",
  options: [
    "Geen klant-educatieprogramma: gebruikers leren via trial and error",
    "Basisdocumentatie bestaat, maar wordt niet actief gepromoot of getrackt",
    "Een educatieprogramma bestaat, maar completion rates en impact op adoptie worden niet gemeten",
    "Een gestructureerd klant-educatieprogramma met completion-tracking en adoptiecorrelatie",
    "Een educatie-impactmodel: certificering-completion, feature-adoptie lift en renewal rate per educatiecohort getrackt en kwartaalsgewijs gereviewd"
  ]
},
{
  id: 6010, pillar: 6, type: "scale",
  title: "Hoe consistent zijn account management-verantwoordelijkheden gedefinieerd en uitgevoerd over CS- en AM-rollen, en waar gaan handoffs mis?",
  options: [
    "Geen duidelijke verantwoordelijkheidsverdeling: CS- en AM-rollen overlappen of botsen",
    "Informele rolverdeling bestaat, maar dekkings- en accountability-gaps zijn gewoon",
    "Een roldefinitiedocument bestaat, maar handoffs tussen CS en AM zijn inconsistent",
    "Een gedocumenteerde CS/AM-interface met duidelijk eigenaarschap per account-tier en omzet-drempel",
    "Een bestuurd account management-model: eigenaarschapregels ingebed in CRM, handoff-SLA's getrackt, en dekking gereviewd in maandelijkse account reviews"
  ]
},
{
  id: 6011, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['deer / mid-market', 'elephant / enterprise', 'whale / strategic'] },
  title: "In het afgelopen kwartaal: welk percentage van je accounts kreeg een business review — en is voor elke een follow-up actie gedocumenteerd en getrackt?",
  options: [
    "Waardecommunicatie is ad hoc: klanten krijgen hun ROI niet routinematig getoond",
    "Wat value-rapportage bestaat, maar inconsistent en niet klantspecifiek",
    "Een value framework bestaat, maar wordt sporadisch gebruikt in QBR's en renewal-gesprekken",
    "Gedocumenteerde value delivery, kwartaalsgewijs gedeeld met elke account, gekoppeld aan afgesproken succesmetrics",
    "Een customer value-playbook: succesmetrics gezet bij onboarding, uitkomsten kwartaalsgewijs getrackt, en ROI gedocumenteerd voor elk renewal- en expansiegesprek"
  ]
},
{
  id: 6012, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['elephant / enterprise', 'whale / strategic'] },
  title: "In het afgelopen kwartaal: hoeveel accounts vielen tussen de wal en het schip van CS- en AM-eigenaarschap — en had een duidelijkere handoff-regel dat voorkomen?",
  options: [
    "Geen handoff-regels bestaan: CS- en AM-eigenaarschap is informeel en accounts vallen vaak tussen wal en schip",
    "Sommige accounts hebben gedefinieerde eigenaren, maar de grens tussen CS en AM is onduidelijk en disputen zijn gewoon",
    "Handoff-criteria bestaan op papier, maar worden inconsistent toegepast — gaps komen nog voor en worden reactief afgehandeld",
    "CS- en AM-handoffregels zijn gedocumenteerd, ingebed in CRM en kwartaalsgewijs gereviewd — gaps zijn zeldzaam",
    "Een zero-gap eigenaarschapsmodel: elke account heeft een gedocumenteerde eigenaar, transities volgen een gedefinieerd protocol, en dekkingsgaps worden als governance-metric getrackt"
  ]
},
{
  id: 6013, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['elephant / enterprise', 'whale / strategic'] },
  title: "Hoe apart en consistent draait je Account Management-team expansion pipeline reviews, los van CS health reviews?",
  options: [
    "Geen onderscheid: expansie wordt in CS health-calls besproken zonder toegewezen pipelinemanagement",
    "Expansion pipeline komt af en toe op in CS-meetings zonder apart proces",
    "Een aparte expansion review bestaat, maar cadans en kwaliteit zijn inconsistent",
    "Wekelijkse expansion pipeline reviews los van CS health-calls met gedocumenteerde dealacties",
    "Expansion wordt gemanaged als een aparte sales-motion: pipeline wekelijks gereviewd, forecast apart getrackt, en expansion ARR onafhankelijk van renewal ARR gerapporteerd"
  ]
},
{
  id: 6014, pillar: 6, type: "scale",
  title: "Hoe systematisch worden at-risk accounts geïdentificeerd, geëscaleerd en gemanaged voordat ze churnen?",
  options: [
    "At-risk accounts worden alleen geïdentificeerd nadat de klant aankondigt te willen opzeggen",
    "CS-managers flaggen at-risk accounts informeel zonder gedeeld proces",
    "Een risicoflag-systeem bestaat, maar interventie-playbooks zijn inconsistent",
    "Een gedocumenteerd risicoframework: gezondheidsdrempels, escalatietriggers en interventie-playbooks wekelijks gereviewd",
    "Een proactieve risk management-engine: predictieve signalen triggeren automatisch playbooks, escalatiepaden zijn bestuurd, en save rates per risico-tier getrackt"
  ]
},
{
  id: 6015, pillar: 6, type: "scale",
  title: "Noem één Product- of GTM-beslissing in de laatste twee kwartalen die door CS-intelligentie veranderde — en hoe lang duurde het van signaal tot beslissing?",
  options: [
    "We kunnen er geen noemen: CS-intelligentie stuurt zichtbaar geen Product- of GTM-beslissingen",
    "CS-signalen beïnvloeden af en toe informeel beslissingen, maar de connectie is niet gedocumenteerd",
    "Een paar beslissingen zijn aan CS-input gelinkt, maar het signaal-naar-beslissingspad is inconsistent en traag",
    "Meerdere beslissingen per kwartaal zijn traceerbaar naar CS-intelligentie, met gedocumenteerde signaalherkomst en tijdlijn",
    "Een closed-loop CS-intelligentiesysteem: signalen gelogd, gereviewd in gestructureerde forums, beslissingen gelinkt aan bron, en tijd-van-signaal-naar-beslissing als performance-metric getrackt"
  ]
},
{
  id: 6016, pillar: 6, type: "scale",
  title: "Wat is je huidige customers-per-CSM ratio — en is die ratio in de afgelopen 12 maanden verbeterd of verslechterd terwijl je klantenbase groeide?",
  options: [
    "We tracken customers-per-CSM niet: elke account vereist ruwweg toegewezen CS-tijd en de ratio is nooit berekend",
    "De ratio bestaat informeel, maar is gedaald naarmate we groeiden — we hebben CS-capaciteit niet vóór de klantgroei kunnen schalen",
    "De ratio wordt getrackt, maar is ruwweg vlak: we hebben CS-headcount evenredig toegevoegd zonder hefboom te verbeteren",
    "Customers-per-CSM is in de afgelopen 12 maanden verbeterd door tiering, automatisering of self-service — kwartaalsgewijs getrackt",
    "CS-hefboom is een gemanagede metric: customers-per-CSM maandelijks getrackt, kwartaal op kwartaal verbeterend, en een doel-ratio is gezet in jaarlijkse planning met een gedocumenteerd pad om die te bereiken"
  ]
},
{
  id: 6017, pillar: 6, type: "scale",
  title: "Kan je CS-team een geünificeerde klantview ophalen — health, usage, support en commerciële data — zonder data handmatig over systemen te stitchen?",
  options: [
    "CS-data is gefragmenteerd over losgekoppelde systemen: geen geünificeerde klantview",
    "Handmatige data-stitching levert een gedeeltelijke view, onregelmatig gereviewd",
    "Een gedeeltelijke integratie bestaat, maar gaps in health- of usage-data vereisen handmatige workarounds",
    "CS-, CRM- en productdata zijn geïntegreerd met een single customer view in dashboards beschikbaar",
    "Een unified customer data-platform: health, usage, support en commerciële data in één view, in real time geüpdatet en sturend voor automatische acties"
  ]
},
{
  id: 6018, pillar: 6, type: "scale",
  title: "Track je logo churn en revenue churn als aparte metrics — en bewogen die in de laatste twee kwartalen verschillend?",
  options: [
    "Slechts één churn-metric wordt getrackt: logo en revenue churn worden niet gescheiden",
    "Beide metrics worden berekend, maar samen gereviewd zonder analyse van waarom ze divergeren",
    "Logo en revenue churn worden apart getrackt, en divergenties worden opgemerkt maar niet formeel geanalyseerd",
    "Beide metrics worden apart getrackt, maandelijks gereviewd, en divergenties worden geanalyseerd op root cause",
    "Een dual-churn diagnostisch systeem: logo en revenue churn apart getrackt en getrend, divergentie geanalyseerd per cohort en segment, en inzichten gevoed in CS-capaciteits- en expansieplanning"
  ]
},
{
  id: 6019, pillar: 6, type: "scale",
  title: "Hoe betrouwbaar draagt je CS-functie bij aan voorspelbare NRR, en hoe vol vertrouwen ben je in je NRR-forecast drie kwartalen vooruit?",
  options: [
    "NRR is onvoorspelbaar: retentie- en expansie-uitkomsten zijn volatiel kwartaal op kwartaal",
    "NRR-trends worden getrackt, maar voorspelaccuratesse is beperkt tot 30-60 dagen",
    "NRR wordt 90 dagen vooruit gemodelleerd, maar forecastaccuratesse is variabel",
    "NRR wordt 180 dagen vooruit voorspeld met gedocumenteerde renewal- en expansion-pipeline inputs",
    "Een volledig gemodelleerde NRR-forecast: renewal-risk, expansion-pipeline en churn-predictors wekelijks geüpdatet en gereviewd in board reporting"
  ]
},
{
  id: 6020, pillar: 6, type: "scale",
  title: "In het afgelopen kwartaal: hoeveel cross-functionele GTM-beslissingen werden direct gestuurd door klantintelligentie afkomstig van CS — en wordt dat ergens getrackt?",
  options: [
    "Geen: CS-intelligentie wordt niet systematisch naar cross-functionele GTM-beslissingen gebracht",
    "Sommige klantsignalen bereiken andere teams informeel, maar geen beslissingen worden ernaar teruggetrackt",
    "Een paar beslissingen zijn beïnvloed door CS-inzicht, maar de connectie wordt niet consistent gedocumenteerd",
    "Klantintelligentie van CS wordt gereviewd in gestructureerde forums en kan worden gelinkt aan gedocumenteerde GTM- of Product-beslissingen",
    "Een closed-loop klantintelligentie-systeem: CS-afkomstige signalen worden gelogd, cross-functioneel gereviewd, en beslissingen die erdoor beïnvloed werden, worden met eigenaren en uitkomsten getrackt"
  ]
},

/* ===========================================================
   PILLAR 7: REVENUE OPERATIONS & SYSTEMS (20 QUESTIONS)
   =========================================================== */

{
  id: 7001, pillar: 7, type: "scale",
  title: "Hoe accuraat en compleet worden CRM-records onderhouden, en hoe meet en dwing je datakwaliteit af?",
  subtitle: "Beantwoord voor je primaire revenue-segment en GTM-motion, tenzij een vraag expliciet om onderscheid vraagt.",
  options: [
    "CRM-data is onbetrouwbaar: records zijn incompleet, dubbel of verouderd",
    "Datakwaliteit wordt verwacht, maar niet gemeten of afgedwongen",
    "Periodieke data-audits vinden plaats, maar hygiëneproblemen blijven terugkomen zonder systemische fixes",
    "CRM-datakwaliteit wordt maandelijks gemeten met gedocumenteerd eigenaarschap en correctiedoelen",
    "Een bestuurd CRM-hygiënesysteem: verplichte velden afgedwongen, completeness wekelijks gescoord, en datakwaliteit maandelijks gerapporteerd aan leadership"
  ]
},
{
  id: 7002, pillar: 7, type: "scale",
  title: "Toen je laatste proceswijziging werd doorgevoerd, hoe lang duurde het voordat die zichtbaar werd in CRM-stagedefinities en verplichte velden — en wie had dat update in eigendom?",
  options: [
    "CRM wordt gebruikt om contacten te loggen, maar reflecteert het sales-proces niet",
    "CRM-stages bestaan, maar matchen niet hoe deals echt doorlopen",
    "CRM reflecteert het proces grofweg, maar exit-criteria en verplichte velden zijn incompleet",
    "CRM-stagedefinities, exit-criteria en verplichte velden reflecteren het werkelijke sales-proces",
    "CRM is een bestuurde processpiegel: stage gates afgedwongen, deal review-prep geautomatiseerd en configuratie gereviewd na elke proceswijziging"
  ]
},
{
  id: 7003, pillar: 7, type: "scale",
  title: "Hoe uitgebreid zijn GTM-workflows gedocumenteerd, en hoe consistent worden die processen gevolgd over teams en regio's?",
  options: [
    "Geen procesdocumentatie: workflows bestaan alleen in individuele praktijk",
    "Sommige processen zijn gedocumenteerd, maar dekking is incompleet en toegang is inconsistent",
    "Kernprocessen zijn gedocumenteerd, maar niet consistent gevolgd of afgedwongen",
    "Een procesbibliotheek die alle grote GTM-workflows dekt, kwartaalsgewijs gereviewd en gekoppeld aan onboarding",
    "Een bestuurde procesbibliotheek: versie-beheerd, toegang getrackt, en afwijkingen gemarkeerd in maandelijkse operations reviews"
  ]
},
{
  id: 7004, pillar: 7, type: "scale",
  title: "Hoe uitgebreid automatiseert je GTM-techstack repetitieve processen, en waar slokken handmatige bottlenecks nog rep- en ops-capaciteit op?",
  options: [
    "GTM draait vrijwel volledig op handmatige processen: automatisering is minimaal",
    "Wat basisautomatisering bestaat in e-mail en CRM, maar handoffs blijven handmatig",
    "Kern-workflows zijn geautomatiseerd, maar significante handmatige inspanning blijft in rapportage en routing",
    "De meeste routine-GTM processen zijn geautomatiseerd met gedocumenteerde uitzonderingen en handmatige override-controles",
    "Een volledig geïnstrumenteerde automatiseringslaag: routing, sequencing, rapportage en alerting geautomatiseerd, met handmatige touchpoints beperkt tot high-judgment activiteiten"
  ]
},
{
  id: 7005, pillar: 7, type: "scale",
  title: "Kun je een prospect van first touch tot closed-won traceren zonder data handmatig over systemen te stitchen — en hoe lang duurt dat nu?",
  options: [
    "Systemen zijn gesilo'd: data kan niet over tools getraceerd worden zonder handmatig werk",
    "Gedeeltelijke integraties bestaan, maar datagaps en sync-fouten zijn gewoon",
    "Kernsystemen zijn geïntegreerd, maar sommige data-flows vereisen handmatige reconciliatie",
    "CRM, MAP en SEP zijn volledig geïntegreerd met schone data-flows die maandelijks worden gereviewd",
    "Een coherente GTM-data architectuur: alle systemen geïntegreerd, datakwaliteit in real time gemonitord, en integratie-health kwartaalsgewijs gereviewd"
  ]
},
{
  id: 7006, pillar: 7, type: "scale",
  title: "Hoe gestructureerd en regelgebaseerd is je lead routing- en assignment-proces, en hoe snel bereikt een gekwalificeerde lead de juiste rep?",
  options: [
    "Lead routing is handmatig: iemand bepaalt wie elke lead krijgt",
    "Basisroutingregels bestaan in CRM, maar uitzonderingen zijn frequent en niet getrackt",
    "Routingregels dekken de meeste scenario's, maar edge cases veroorzaken vertragingen of dubbele toewijzingen",
    "Een gedocumenteerd routingframework dat alle leadtypes dekt, kwartaalsgewijs gereviewd op dekking",
    "Een geautomatiseerd lead routing-systeem: regels gedocumenteerd, getest en gemonitord, met routingsnelheid en accuratesse wekelijks getrackt"
  ]
},
{
  id: 7007, pillar: 7, type: "scale",
  title: "Hoe kostenefficiënt wordt je GTM-techstack gemanaged, en wanneer heb je voor het laatst gecheckt op redundantie, onderbenutting of contractinefficiëntie?",
  options: [
    "Geen techstack-audit is uitgevoerd: tools worden toegevoegd en vergeten",
    "Een ruw beeld van tools bestaat, maar geen formele audit of rationalisatie heeft plaatsgevonden",
    "Een jaarlijkse review van de techstack vindt plaats, maar utilisatie en contractoptimalisatie worden niet getrackt",
    "Een halfjaarlijkse techstack-audit reviewt utilisatie, contractwaarde en redundantie met gedocumenteerde acties",
    "Een doorlopend techstack-governanceprogramma: utilisatie maandelijks gemonitord, contracten jaarlijks gebenchmarkt, en rationalisatiebeslissingen kwartaalsgewijs gereviewd"
  ]
},
{
  id: 7008, pillar: 7, type: "scale",
  title: "Functioneert RevOps als strategische partner van GTM-teams — of vooral als reactieve request-fulfillment functie?",
  options: [
    "RevOps is reactief: werk wordt gedreven door wie het hardst vraagt",
    "RevOps heeft een backlog, maar prioritering is inconsistent en niet bestuurd",
    "RevOps prioriteert op teamverzoek, maar business impact-weging is informeel",
    "RevOps draait een sprintgebaseerd prioriteringproces, kwartaalsgewijs aligned met GTM-leadership",
    "RevOps opereert als strategische functie: een bestuurd intake-proces, impact-gewogen roadmap en stakeholder-review per kwartaal"
  ]
},
{
  id: 7009, pillar: 7, type: "scale",
  title: "Voor je top drie GTM-tools naar spend: wat is de werkelijke daily active usage rate vs licensed seats — en wanneer heb je die data voor het laatst gereviewd?",
  options: [
    "Tooladoptie wordt niet getrackt: licenties worden gekocht en we nemen gebruik aan zonder data",
    "We hebben een ruw besef welke tools onderbenut zijn, maar hebben daily active usage vs licensed seats niet gemeten",
    "Utilisatie wordt voor minstens één grote tool getrackt, maar de andere worden niet gemeten of gereviewd",
    "Utilisatie getrackt voor alle primaire tools, kwartaalsgewijs gereviewd, en onderbenutte licenties geïdentificeerd — maar herallocatiebeslissingen zijn traag",
    "Een bestuurd tooladoptieprogramma: daily active usage vs licensed seats maandelijks getrackt per tool, onderbenutting triggert binnen 30 dagen een consolidatie-review, en cost-per-active-user is een gemanagede metric"
  ]
},
{
  id: 7010, pillar: 7, type: "scale",
  title: "Hoe systematisch meet en manage je GTM-efficiëntie, en hoe weet je of je beter of slechter wordt?",
  options: [
    "GTM-efficiëntie wordt niet gemeten: we focussen alleen op top-line omzet",
    "Sommige efficiëntiemetrics bestaan, maar worden onregelmatig gereviewd",
    "Kern-efficiëntiemetrics worden getrackt, maar niet gereviewd tegen doelen of benchmarks",
    "GTM-efficiëntiemetrics maandelijks gereviewd tegen gedefinieerde doelen en historische trends",
    "Een GTM-efficiëntiedashboard maandelijks gereviewd: CAC, payback, pipeline velocity en burn multiple gebenchmarkt en sturen kwartaalsgewijze investeringsbeslissingen"
  ]
},
{
  id: 7011, pillar: 7, type: "scale",
  title: "Hoe bestuurd zijn data- en proceswijzigingen, en hoe voorkom je dat ongecontroleerde wijzigingen rapportage-inconsistenties creëren?",
  options: [
    "Geen governance: iedereen kan CRM-velden, processen of integraties wijzigen",
    "Informele normen bestaan, maar ongecontroleerde wijzigingen zijn gewoon",
    "Een change request-proces bestaat, maar compliance is inconsistent",
    "Een gedocumenteerd change governance-proces: requests gereviewd, impact beoordeeld en wijzigingen gelogd",
    "Een formele change control board: alle GTM-systeem- en proceswijzigingen gereviewd, goedgekeurd, getest en gedocumenteerd vóór deployment"
  ]
},
{
  id: 7012, pillar: 7, type: "scale",
  title: "Hoe rationeel ontworpen en eerlijk onderhouden zijn je territory- en quotastructuren, en wanneer zijn ze voor het laatst formeel gereviewd?",
  options: [
    "Territories en quota's worden historisch gezet: geen formeel ontwerp- of reviewproces",
    "Quota's worden top-down gezet met minimale data ter ondersteuning van territory-ontwerp",
    "Jaarlijkse quota- en territoryreviews vinden plaats, maar het proces is niet datagedreven",
    "Territory- en quotaontwerp volgt een gedocumenteerd framework, jaarlijks gereviewd met Finance",
    "Een datagedreven territory- en quotamodel: account-potentieel, rep-capaciteit en marktkans kwartaalsgewijs gereviewd, met midyear-aanpassingen gedocumenteerd"
  ]
},
{
  id: 7013, pillar: 7, type: "scale",
  title: "Hoe structureel geïntegreerd is RevOps over Sales, Marketing en CS, en heeft RevOps een plek in GTM-planning?",
  options: [
    "RevOps bedient één functie — Sales of Marketing — zonder cross-functionele scope",
    "RevOps overspant functies, maar opereert reactief in plaats van in planning",
    "RevOps zit bij GTM-planning, maar co-bezit geen proces- of toolingbeslissingen",
    "RevOps is formele co-eigenaar van GTM operating model-, proces- en toolingbeslissingen",
    "RevOps is een strategische GTM-functie: co-bezit planning, data en proces over alle revenue-functies met een plek in maandelijkse leadership reviews"
  ]
},
{
  id: 7014, pillar: 7, type: "scale",
  title: "Hoe actionable en consistent gebruikt zijn je GTM-dashboards en -rapporten, en wie reviewt ze op welke cadans?",
  options: [
    "Geen dashboards: rapportage gebeurt handmatig in spreadsheets",
    "Dashboards bestaan, maar worden zelden geopend of gebruikt om beslissingen te sturen",
    "Standaardrapporten worden gedraaid, maar de data wordt niet consistent vertrouwd of opgevolgd",
    "Dashboards worden gereviewd in wekelijkse GTM-meetings met gedocumenteerde action outputs",
    "Een bestuurde rapportage-architectuur: geautomatiseerde dashboards gereviewd in dagelijkse, wekelijkse en maandelijkse cadansen, met decision log die acties uit elke review tracket"
  ]
},
{
  id: 7015, pillar: 7, type: "scale",
  title: "Kan je team een complete klantview ophalen, van first touch tot huidige health, zonder data handmatig over systemen te stitchen?",
  options: [
    "Een complete klantview bestaat niet: data is verspreid over losgekoppelde tools",
    "Een gedeeltelijke view kan handmatig worden samengesteld, maar vereist significante inspanning",
    "Een klantview bestaat, maar vereist regelmatig handmatige correctie om accuraat te zijn",
    "Een geautomatiseerde single customer view bestaat in CRM of BI, dagelijks geüpdatet",
    "Een real-time geünificeerd klantrecord: alle touchpoints, health-signalen en commerciële data in één view toegankelijk zonder handmatige interventie"
  ]
},
{
  id: 7016, pillar: 7, type: "scale",
  title: "In het afgelopen kwartaal: welk percentage GTM-teams volgde de standaard RevOps-gedefinieerde processen zonder afwijking — en hoe weet je dat?",
  options: [
    "Geen standaardisatie: elk team volgt zijn eigen aanpak",
    "Sommige gedeelde processen bestaan, maar adoptie is ongelijk",
    "Kernprocessen zijn gestandaardiseerd, maar adoptie-tracking is informeel",
    "GTM-processen zijn gestandaardiseerd, adoptie per team getrackt, en afwijkingen maandelijks aangepakt",
    "Een standaardisatieprogramma: procesnaleving per team gescoord en maandelijks gereviewd, met root causes van afwijkingen aangepakt in kwartaal-audits"
  ]
},
{
  id: 7017, pillar: 7, type: "scale",
  title: "Hoe rigoureus worden pipeline- en forecastreviews uitgevoerd, en hoeveel verbetert forecastaccuratesse over het verloop van een kwartaal?",
  options: [
    "Geen formeel forecastproces: revenue-voorspellingen zijn op gut feel",
    "Een forecast wordt geproduceerd, maar accuratesse wordt niet getrackt of gereviewd tegen uitkomsten",
    "Een kwartaalforecast bestaat, maar accuratesse degradeert significant gedurende het kwartaal",
    "Een wekelijkse forecastreview met gedocumenteerde accuratesse-tracking en variance-uitleg",
    "Een bestuurd forecast operating system: call-to-close accuratesse wekelijks getrackt, variance uitgelegd, en forecast-methodologie gereviewd na elk kwartaal"
  ]
},
{
  id: 7018, pillar: 7, type: "scale",
  title: "In het afgelopen kwartaal: welk percentage RevOps-verzoeken werd op tijd geleverd — en kun je voor de grote kunnen aantonen welke business impact ze produceerden?",
  options: [
    "Lever-tijdigheid wordt niet getrackt, en business impact is grotendeels onbekend",
    "Sommige verzoeken worden op tijd geleverd, maar SLA-naleving noch impact wordt systematisch gereviewd",
    "Tijdigheid wordt voor sommige verzoeken getrackt, maar business impact wordt inconsistent gedocumenteerd",
    "RevOps-leveringstijdigheid wordt getrackt en grote verzoeken bevatten gedocumenteerde business impact na levering",
    "Een bestuurd RevOps-leveringsmodel: on-time delivery rate maandelijks getrackt, grote verzoeken vereisen impact-documentatie, en backlog-prioritering wordt aangepast op basis van geleverde businesswaarde"
  ]
},
{
  id: 7019, pillar: 7, type: "scale",
  title: "Hoe strategisch draagt RevOps bij aan GTM-planning, en is RevOps-capaciteit onderdeel van de jaarlijkse planningsdiscussie?",
  options: [
    "RevOps is uitgesloten van planning: operationele capaciteit wordt niet meegenomen",
    "RevOps wordt af en toe geconsulteerd in planning, maar is geen formele input",
    "RevOps draagt jaarlijks bij aan systeem- en procesplanning",
    "RevOps is een formele planning-input: operationele capaciteit, tooling en procesroadmap gereviewd in jaarlijkse en kwartaalplanning",
    "RevOps co-bezit het GTM-operating plan: systeemcapaciteit, procesroadmap en data-infrastructuur worden naast headcount en budget gepland"
  ]
},
{
  id: 7020, pillar: 7, type: "scale",
  title: "Welk percentage reps gebruikt je core GTM-tools actief zonder prompting of enforcement — en hoe onderscheid je vrijwillige adoptie van compliance?",
  options: [
    "Tools worden alleen gebruikt omdat compliance vereist is: reps zouden ze niet vrijwillig gebruiken en werken er vaak omheen",
    "De meeste reps tolereren de tools, maar workarounds zijn gewoon — de stack creëert meer wrijving dan hij wegneemt",
    "Kern-tools worden adequaat gebruikt: adoptie is acceptabel, maar reps zien ze niet als echt nuttig voor hun workflow",
    "De meeste reps gebruiken de kern-tools vrijwillig en zien ze als nuttig — feedback wordt verzameld en UX-issues worden aangepakt",
    "Rep-centrale stack met getrackte vrijwillige adoptie: usage-data toont dat reps tools openen voordat ze worden gevraagd, workflow-wrijving wordt kwartaalsgewijs gereviewd, en tools die consistent laag scoren worden uitgefaseerd of opnieuw ontworpen"
  ]
},

/* ===========================================================
   PILLAR 8: PRICING & PACKAGING (20 QUESTIONS)
   =========================================================== */

{
  id: 8001, pillar: 8, type: "scale",
  title: "Hoe expliciet gedefinieerd is je pricing-strategie, en wanneer is die voor het laatst gereviewd tegen markt- en kostendata?",
  subtitle: "Beantwoord voor je primaire revenue-segment en GTM-motion, tenzij een vraag expliciet om onderscheid vraagt.",
  options: [
    "Geen pricing-strategie: prijzen zijn ooit gezet en niet meer gereviewd",
    "Een informele pricing-filosofie bestaat, maar is niet gedocumenteerd of bestuurd",
    "Een pricing-strategiedocument bestaat, maar is in meer dan een jaar niet geüpdatet",
    "Een pricing-strategie jaarlijks gereviewd tegen win/loss-data, competitieve benchmarks en margedoelen",
    "Een bestuurde pricing-strategie: halfjaarlijks gereviewd, gevoed door buyer-research, deal-data en competitieve intelligentie, met gedocumenteerde beslissingsrationale"
  ]
},
{
  id: 8002, pillar: 8, type: "scale",
  title: "Reflecteert je packaging-structuur hoe klanten daadwerkelijk adopteren en uitbreiden — en heb je dat in de afgelopen 12 maanden gevalideerd tegen werkelijke usage-data?",
  options: [
    "Packaging is intern ontworpen: klantadoptie-patronen werden niet meegenomen",
    "Packaging sluit losjes aan op usage-patronen, maar creëert wrijving op expansiepunten",
    "Packaging sluit aan op primaire adoptie-patronen, maar secundaire segmenten worden slecht bediend",
    "Packaging gevalideerd tegen adoptiedata en jaarlijks gereviewd op alignment",
    "Een packaging-architectuur ontworpen vanuit adoptiedata: expansie-triggers, upgradepaden en value metric-alignment gevalideerd via klantinterviews en usage-analyse"
  ]
},
{
  id: 8003, pillar: 8, type: "scale",
  title: "Hoe intuïtief begrijpt een koper je pricing in minder dan twee minuten zonder dat een sales-rep het uitlegt?",
  options: [
    "Pricing vereist significante uitleg: kopers raken vaak in de war",
    "De meeste kopers hebben een call nodig om te begrijpen wat ze gaan betalen",
    "Pricing is begrijpelijk voor primaire segmenten, maar creëert verwarring voor anderen",
    "Pricing is duidelijk en zelfverklarend voor alle primaire kopersegmenten",
    "Pricing is gevalideerd via buyer-comprehension testing: alle segmenten kunnen het juiste tier zelf kiezen zonder sales-betrokkenheid"
  ]
},
{
  id: 8004, pillar: 8, type: "scale",
  title: "Hoe rigoureus test en valideer je willingness-to-pay over je belangrijke klantsegmenten — en via welke methodologie?",
  options: [
    "Willingness-to-pay is onbekend: pricing is gezet op basis van kosten of gut feel",
    "Anekdotisch besef uit deals die op prijs verloren werden, niet gevalideerd",
    "Sommige buyer-interviews hebben pricing gevoed, maar onderzoek is niet systematisch",
    "Willingness-to-pay gevalideerd via gestructureerd buyer-research en analyse van close rate per prijsband",
    "Een willingness-to-pay model op segmentniveau: gevalideerd via gecontroleerd onderzoek, win/loss pricing-analyse en close rate per price tier, jaarlijks gereviewd"
  ]
},
{
  id: 8005, pillar: 8, type: "scale",
  title: "Wat is je bewijs voor je huidige prijsniveau — buyer-interviews, close rate-analyse per prijsband of competitief benchmarking? Wanneer is dat bewijs voor het laatst geüpdatet?",
  options: [
    "Willingness-to-pay is onbekend: pricing is gezet op basis van kosten of interne aanname",
    "Anekdotisch besef uit deals die op prijs verloren werden, niet gevalideerd via gestructureerd onderzoek",
    "Sommige buyer-interviews hebben pricing gevoed, maar onderzoek is niet systematisch of gesegmenteerd",
    "Willingness-to-pay gevalideerd via gestructureerd buyer-research en close rate-analyse per prijsband",
    "Een willingness-to-pay model op segmentniveau: gevalideerd via gecontroleerd onderzoek, win/loss pricingdata en close rate per price tier — jaarlijks gereviewd en sturen packaging-beslissingen"
  ]
},
{
  id: 8006, pillar: 8, type: "scale",
  title: "Hoe strak zijn je prijzen verankerd in de meetbare waarde die je product levert per klantsegment?",
  options: [
    "Pricing is kostengebaseerd of competitor-gerefereerd: waarde is niet de primaire verankering",
    "Een informeel value-verhaal wordt gebruikt in onderhandeling, maar pricing is niet value-derived",
    "Pricing is grofweg afgestemd op waarde voor primaire segmenten",
    "Een gedocumenteerd value-to-price framework gevalideerd via klant-ROI analyse per segment",
    "Value-based pricing met een gedocumenteerd ROI-model per segment: value-ankers getest via buyer-interviews en jaarlijks geüpdatet"
  ]
},
{
  id: 8007, pillar: 8, type: "scale",
  title: "Is je packaging-architectuur gebaseerd op hoe klanten daadwerkelijk adopteren en uitbreiden — of op wat het makkelijkst was om te bouwen? Wanneer is het voor het laatst gevalideerd tegen werkelijke usage-data?",
  options: [
    "Packaging is intern ontworpen zonder referentie aan klantadoptie-patronen",
    "Packaging sluit losjes aan op usage-patronen, maar creëert wrijving op veelvoorkomende expansiepunten",
    "Packaging sluit aan op primaire adoptie-patronen, maar secundaire segmenten en expansiepaden worden slecht bediend",
    "Packaging gevalideerd tegen adoptiedata en jaarlijks gereviewd op alignment met usage-realiteit",
    "Een packaging-architectuur ontworpen vanuit adoptie- en expansiedata: upgradepaden, usage-triggers en value metric-alignment gevalideerd via klantinterviews en cohortanalyse"
  ]
},
{
  id: 8008, pillar: 8, type: "scale",
  title: "Hoe duidelijk begrijp je welke features willingness-to-pay sturen — en stuurt dat begrip direct hoe je ze bundelt en prijst?",
  options: [
    "Geen feature-niveau pricing-intelligentie: features worden gebundeld zonder value-testing",
    "Intuïtieve aannames sturen feature-bundeling, maar geen onderzoek ondersteunt ze",
    "Wat feature-value testing is gedaan, maar wordt niet systematisch toegepast",
    "Feature-naar-willingness-to-pay mapping gevalideerd via buyer-research en close rate-analyse",
    "Een live feature value-model: feature-belang en willingness-to-pay continu getest via buyer-interviews en usage-data, jaarlijks sturend voor packaging"
  ]
},
{
  id: 8009, pillar: 8, type: "scale",
  title: "In het afgelopen kwartaal: welk percentage expansiedeals vereiste een volledige contract-heronderhandeling om af te ronden — en verbetert of verslechtert dat percentage?",
  options: [
    "Alle expansie vereist een nieuw commercieel proces: packaging accommodeert geen groei",
    "Expansie is mogelijk, maar creëert commerciële wrijving door packaging- of contractstructuur",
    "Sommige expansiepaden bestaan, maar niet alle veelvoorkomende groeiscenario's worden netjes afgehandeld",
    "Packaging bevat gedefinieerde expansiepaden, gevalideerd tegen veelvoorkomende klantgroei-patronen",
    "Een modulaire expansie-architectuur: usage-, seat- en feature-triggers factureren automatisch zonder heronderhandeling — expansie-leakage kwartaalsgewijs getrackt en packaging geüpdatet bij gedetecteerde leakage"
  ]
},
{
  id: 8010, pillar: 8, type: "scale",
  title: "In de laatste 10 deals: hoeveel prospects vroegen om een pricing-uitleg die zelfevident had moeten zijn uit je gepubliceerde materiaal?",
  options: [
    "Alle of bijna alle prospects hadden significante pricing-uitleg nodig: onze pricing is voor geen enkel segment zelfverklarend",
    "De meeste prospects hadden minstens één follow-up call nodig om te begrijpen wat ze zouden betalen voordat ze konden evalueren",
    "Helft of meer had enige verduidelijking nodig — pricing is grofweg begrijpelijk voor ervaren kopers, maar verwarrend voor anderen",
    "Minder dan 3 op de 10 prospects had pricing uitgelegd nodig — de meeste primaire segment-kopers kunnen zelf het juiste tier kiezen",
    "Pricing-helderheid wordt getest: buyer-comprehension gevalideerd in gestructureerde interviews — minder dan 1 op de 10 primaire segment-prospects vereist een pricing-uitleg van een rep"
  ]
},
{
  id: 8011, pillar: 8, type: "scale",
  title: "Hoe scherp begrijp je prijsgevoeligheid op segmentniveau, en hoe stuurt dat welke segmenten je prioriteert?",
  options: [
    "Prijsgevoeligheid wordt niet per segment geanalyseerd: één pricingstructuur dient allen",
    "Ruw besef welke segmenten weerstand bieden op prijs",
    "Segment-niveau prijsgevoeligheid informeel getrackt via deal-data",
    "Prijsgevoeligheid per segment geanalyseerd, gevalideerd via deal- en interviewdata, jaarlijks gereviewd",
    "Een segment pricing-sensitiviteitsmodel: elasticiteit gekwantificeerd per segment, sturend voor prijs-architectuur, kortingsgovernance en GTM-resourceallocatie"
  ]
},
{
  id: 8012, pillar: 8, type: "scale",
  title: "Is je packaging gebaseerd op gedocumenteerd willingness-to-pay onderzoek — of op interne aannames over welke features het waardevolst zijn?",
  options: [
    "Packaging is intern ontworpen: er is nooit buyer-research over feature-waarde uitgevoerd",
    "Intuïtieve aannames sturen feature-bundeling — geen gestructureerd onderzoek ondersteunt huidige packagingbeslissingen",
    "Wat feature-value testing is gedaan, maar bevindingen worden niet systematisch toegepast op packagingbeslissingen",
    "Feature-naar-willingness-to-pay mapping is gevalideerd via buyer-research en close rate-analyse per prijsband",
    "Een live feature value-model bestaat: feature-belang en willingness-to-pay getest via buyer-interviews en usage-data, jaarlijks gereviewd, en stuurt direct packagingbeslissingen — geen aannames"
  ]
},
{
  id: 8013, pillar: 8, type: "scale",
  title: "Biedt je pricing en packaging betekenisvol verschillende configuraties voor verschillende persona's, use cases of verticals — of is het effectief één structuur voor iedereen?",
  options: [
    "Eén universele prijsstructuur dient alle persona's en use cases",
    "Informele prijsaanpassingen worden gemaakt voor specifieke persona's zonder gedocumenteerde rationale",
    "Sommige persona- of vertical-differentiatie bestaat, maar wordt niet consistent toegepast",
    "Persona- of use-case-gebaseerde packagingopties zijn gedocumenteerd en gebruikt in deal-structurering",
    "Een volledig gedifferentieerde packaging-architectuur: persona-, use case- en vertical-specifieke configuraties gevalideerd via buyer-research"
  ]
},
{
  id: 8014, pillar: 8, type: "scale",
  title: "Wanneer heb je je pricing voor het laatst formeel gebenchmarkt tegen concurrenten — en heeft die analyse een pricing- of packagingbeslissing veranderd?",
  options: [
    "Geen competitieve pricingdata: positionering ten opzichte van alternatieven is onbekend",
    "Ruw besef van competitor-pricing uit sales-calls, niet gestructureerd of recent",
    "Periodieke competitieve pricingreview vindt plaats, maar datakwaliteit en recentheid zijn beperkt",
    "Een jaarlijkse competitieve pricingreview met gedocumenteerde positioneringsimplicaties en beslissingen",
    "Een competitief pricing-intelligentieprogramma: halfjaarlijks gebenchmarkt, deal-niveau competitieve pricing in CRM getrackt, en positie kwartaalsgewijs gereviewd — met een gedocumenteerd antwoord wanneer positie verschuift"
  ]
},
{
  id: 8015, pillar: 8, type: "scale",
  title: "In het afgelopen kwartaal: hoeveel deals creëerden channel-conflict tussen je self-serve en enterprise-motions — en is er een gedocumenteerde regel die bestuurt welke motion welke account bezit?",
  options: [
    "Channel-conflict is ongemanaged: self-serve en enterprise concurreren regelmatig om dezelfde accounts zonder oplossingsregel",
    "Conflict bestaat en is bekend, maar wordt case by case afgehandeld — geen formele eigenaarschapsregel bestaat",
    "Een informele regel bestuurt de meeste conflicten, maar edge cases veroorzaken nog wrijving of interne disputen",
    "Een gedocumenteerde eigenaarschapsregel definieert welke motion welke accounts afhandelt — de meeste conflicten worden zonder escalatie opgelost",
    "Channel-conflict is een getrackte metric: eigenaarschapsregels afgedwongen in CRM, conflict rate maandelijks gemonitord, en regel-gaps aangepakt in kwartaal-RevOps reviews"
  ]
},
{
  id: 8016, pillar: 8, type: "scale",
  title: "Hoe systematisch identificeer je waar pricing of packaging wrijving creëert die deals blokkeert of de sales cycle vertraagt?",
  options: [
    "Pricing-wrijving wordt alleen geïdentificeerd wanneer deals verloren gaan",
    "Sales-anekdotes brengen wrijving informeel naar boven zonder systematische tracking",
    "Lost deal-analyse brengt af en toe pricing-blockers naar boven",
    "Pricing-wrijving wordt getrackt in lost deal-analyse en kwartaalsgewijs gereviewd met Finance en RevOps",
    "Een pricing-wrijving intelligentieprogramma: blockers per segment en dealfase getrackt, kwartaalsgewijs gereviewd, en sturen packaging-updates en kortingsregelwijzigingen"
  ]
},
{
  id: 8017, pillar: 8, type: "scale",
  title: "Hoe regelmatig en rigoureus test je pricingwijzigingen, en wat is je proces voor het valideren van een pricing-update vóór volledige uitrol?",
  options: [
    "Geen pricingtests: wijzigingen worden geïmplementeerd op basis van executive-beslissing",
    "Pricingwijzigingen worden af en toe gemaakt zonder formeel validatieproces",
    "Sommige pricing-experimenten worden uitgevoerd, maar resultaten worden informeel geëvalueerd",
    "Een gedefinieerd pricingwijzigingsproces: hypothese, testcohort, meetperiode en go/no-go criteria gedocumenteerd vóór elke wijziging",
    "Een systematisch pricing-governancemodel: alle wijzigingen gepiloteerd, conversie- en marge-impact gemeten, en uitrolbeslissing gedocumenteerd"
  ]
},
{
  id: 8018, pillar: 8, type: "scale",
  title: "Voor elke regio waar je actief verkoopt: is pricing gevalideerd tegen lokale willingness-to-pay, of is het een directe conversie van je primaire-marktprijzen?",
  options: [
    "Eén globale prijsstructuur overal toegepast zonder geo-overweging",
    "Informele geo-aanpassingen in onderhandeling gemaakt zonder gedocumenteerde rationale",
    "Regionale pricing bestaat, maar is niet gevalideerd tegen lokale marktdata",
    "Geo-specifieke pricing gevalideerd via buyer-research en lokale dealdata",
    "Een geografisch pricingmodel: lokale willingness-to-pay gevalideerd, koopkrachtpariteit toegepast waar relevant, en regionale pricing jaarlijks gereviewd"
  ]
},
{
  id: 8019, pillar: 8, type: "scale",
  title: "Hoe systematisch meet je pricing-performance, en welke metrics signaleren dat je pricing aanpassing nodig heeft?",
  options: [
    "Pricing-performance wordt niet getrackt: omzetgroei is het enige signaal",
    "Win rate en gemiddelde dealgrootte worden getrackt, maar niet gekoppeld aan pricingstructuur",
    "Sommige pricingmetrics worden jaarlijks gereviewd, maar zonder gedefinieerde performance-drempels",
    "Een pricing-performance review per kwartaal: win rate per prijsband, kortingsfrequentie en expansion rate getrackt tegen doelen",
    "Een pricing-analyticsysteem: win rate, kortingsratio, deal velocity en NRR maandelijks per segment gereviewd, met gedefinieerde triggers voor pricingreview"
  ]
},
{
  id: 8020, pillar: 8, type: "scale",
  title: "Hoe automatisch vangt je pricing waardeverhoging op — bijvoorbeeld via usage-stijgingen of seat-toevoegingen — zonder handmatige heronderhandeling?",
  options: [
    "Alle waarde-expansie vereist een handmatig heronderhandelingsproces",
    "Sommige expansie-triggers bestaan, maar het commerciële proces is grotendeels handmatig",
    "Seat- of usage-expansie is contractueel voorzien, maar niet geautomatiseerd",
    "De meeste expansiescenario's worden bestuurd door contractvoorwaarden en automatisch gefactureerd zonder heronderhandeling",
    "Een volledig geautomatiseerd expansiemodel: usage-, seat- en feature-triggers factureren automatisch zonder sales-betrokkenheid, kwartaalsgewijs gereviewd op leakage"
  ]
},

/* ===========================================================
   PILLAR 9: PRODUCT READINESS (20 QUESTIONS)
   =========================================================== */

{
  id: 9001, pillar: 9, type: "scale",
  title: "Hoe vaak duiken productgaps op in late-stage deals — na de demo, tijdens proof-of-concept of procurement?",
  subtitle: "Beantwoord voor je primaire revenue-segment en GTM-motion, tenzij een vraag expliciet om onderscheid vraagt.",
  options: [
    "Verrassings-productgaps in late-stage deals zijn een frequent verschijnsel: we verliezen er deals door",
    "Gaps duiken regelmatig op in late-stage deals en worden case by case afgehandeld zonder preventieproces",
    "Gaps duiken af en toe laat op, maar een escalatieproces bestaat om ze te managen",
    "Een pre-deal technische validatiestap vangt de meeste gaps voor ze late stage bereiken",
    "Een zero-surprise model: solution fit wordt in discovery bevestigd via een gestructureerd framework — late-stage gap-frequentie wordt kwartaalsgewijs getrackt en stuurt salesproces-verbeteringen"
  ]
},
{
  id: 9002, pillar: 9, type: "scale",
  title: "Hoe voorspelbaar bereiken nieuwe klanten first value, en hoe wordt dat over klantcohorten getrackt?",
  options: [
    "Time-to-value wordt niet getrackt: we weten niet wanneer klanten voor het eerst resultaat zien",
    "Time-to-value varieert significant zonder duidelijk patroon of eigenaar",
    "Een time-to-value benchmark bestaat, maar realisatie is inconsistent",
    "Time-to-value per cohort getrackt en kwartaalsgewijs gereviewd met gedocumenteerde verbeteracties",
    "Een time-to-value model: doel gedefinieerd per segment, realisatie per klant getrackt en cohorttrends maandelijks gereviewd in CS- en Product-meetings"
  ]
},
{
  id: 9003, pillar: 9, type: "scale",
  title: "In een standaard sales cycle: welk percentage demo's resulteert in een duidelijke next step — en weet je welk deel van de demo die uitkomst stuurt?",
  options: [
    "Het product kan niet effectief gedemonstreerd worden zonder uitgebreide voorbereiding",
    "Een demo bestaat, maar vereist meestal significante customisatie of specialist-betrokkenheid",
    "Een referentie-demo werkt voor de meeste cases, maar complexe scenario's vereisen workarounds",
    "Een standaard demoframework dekt alle primaire use cases en wordt consistent gebruikt",
    "Een high-conversion demosysteem: segment-specifiek, self-contained en kwartaalsgewijs getrackt op next-step conversieratio"
  ]
},
{
  id: 9004, pillar: 9, type: "scale",
  title: "In het afgelopen kwartaal: hoeveel klant-escalaties in de eerste 90 dagen werden veroorzaakt door een gap tussen wat verkocht werd en wat geleverd werd — en wordt dat getrackt?",
  options: [
    "Post-sale realiteit verschilt vaak van wat verkocht werd: veroorzaakt directe wrijving en vertrouwens­schade",
    "Mismatches tussen sales-beloften en leveringsrealiteit zijn gewoon en worden case by case afgehandeld",
    "Mismatches komen af en toe voor, maar een proces bestaat om verwachtingen vóór handoff te managen",
    "Implementatie-ervaring matcht sales-verwachtingen in de meeste gevallen met gedocumenteerde uitzonderingen",
    "Sales- en delivery-verwachtingen zijn contractueel aligned: mismatches getrackt, kwartaalsgewijs root-caused, en terugkerende patronen sturen sales-proces of productwijzigingen"
  ]
},
{
  id: 9005, pillar: 9, type: "scale",
  title: "Hoe natuurlijk ondersteunt het product je gekozen GTM-motion — SMB, mid-market of enterprise — qua deployment, configuratie en time-to-value?",
  options: [
    "Het product creëert consistent wrijving met de gekozen GTM-motion",
    "Het product werkt voor de GTM-motion, maar vereist significante workarounds",
    "Gedeeltelijke fit: het product ondersteunt sommige scenario's, maar creëert wrijving in andere",
    "Het product past goed bij de GTM-motion met minimale uitzonderingen",
    "Het product is ontworpen voor de GTM-motion: deployment, configuratie en value-tijdslijnen gevalideerd tegen verwachtingen van het doelsegment"
  ]
},
{
  id: 9006, pillar: 9, type: "scale",
  title: "Hoe consistent matcht de werkelijke implementatie-ervaring met wat tijdens de sales cycle aan de klant beloofd werd?",
  options: [
    "Post-sale verwachtingen verschillen vaak van wat verkocht werd: veroorzaakt directe wrijving",
    "Mismatches tussen sales-beloften en leveringsrealiteit komen vaak voor",
    "Mismatches komen af en toe voor en worden case by case afgehandeld",
    "Implementatie-ervaring matcht sales-verwachtingen in de meeste gevallen met gedocumenteerde uitzonderingen",
    "Sales- en delivery-verwachtingen zijn contractueel aligned: mismatches getrackt en kwartaalsgewijs root-caused"
  ]
},
{
  id: 9007, pillar: 9, type: "scale",
  title: "In je laatste 10 deals: hoe vaak dook een productlimitatie op die niet in je gedocumenteerde constraint register stond — en wat gebeurde er toen?",
  options: [
    "Productlimitaties zijn niet gedocumenteerd: teams leren ze tijdens deals of onboarding",
    "Sommige limitaties zijn informeel bekend, maar inconsistent gecommuniceerd over Sales en CS",
    "Een limitaties-document bestaat, maar wordt niet regelmatig geüpdatet of gebruikt in deal-kwalificatie",
    "Productlimitaties zijn gedocumenteerd, geüpdatet bij elke release en ingebed in sales-onboarding en kwalificatie",
    "Een expliciet product constraint register: onderhouden door Product, kwartaalsgewijs gereviewd met Sales en CS, en ingebed in deal-kwalificatie playbooks en onboarding-scripts"
  ]
},
{
  id: 9008, pillar: 9, type: "scale",
  title: "Hoe betrouwbaar kunnen sales-teams product-fit vroeg in een deal bevestigen of diskwalificeren, zonder late-stage technische validatie nodig te hebben?",
  options: [
    "Product-fit wordt meestal pas tijdens of na proof-of-concept bevestigd",
    "Fit-beoordeling wordt vertraagd tot mid-cycle omdat kwalificatiecriteria onduidelijk zijn",
    "Kwalificatiecriteria bestaan, maar worden niet consistent vroeg in het proces toegepast",
    "Een gedocumenteerd kwalificatieframework laat in de meeste deals vroege fit-bevestiging toe",
    "Een self-qualification playbook: sales kan fit bevestigen of diskwalificeren tegen einde discovery met gedefinieerde, productgegronde criteria"
  ]
},
{
  id: 9009, pillar: 9, type: "scale",
  title: "Hoe goed gedocumenteerd zijn je productlimitaties en -constraints — en passen Sales en CS die kennis consistent toe in deals en tijdens onboarding?",
  options: [
    "Productlimitaties zijn niet gedocumenteerd: teams leren ze tijdens deals of onboarding",
    "Sommige limitaties zijn bekend, maar inconsistent gecommuniceerd over Sales en CS",
    "Een limitaties-document bestaat, maar wordt niet regelmatig geüpdatet of gerefereerd",
    "Productlimitaties zijn gedocumenteerd, geüpdatet bij elke release en ingebed in sales-onboarding",
    "Een expliciet product constraint register: onderhouden door Product, kwartaalsgewijs gereviewd door Sales en CS, en ingebed in deal-kwalificatie en onboarding-playbooks"
  ]
},
{
  id: 9010, pillar: 9, type: "scale",
  title: "Wanneer een productgap opduikt in een late-stage deal: wat is het gedocumenteerde escalatiepad — en hoe vaak resulteert dat pad in een gesloten deal versus een verlies?",
  options: [
    "Geen escalatiepad bestaat: late-stage productgaps worden ad hoc afgehandeld door wie beschikbaar is",
    "Een informele escalatie bestaat — reps weten wie ze moeten bellen — maar uitkomsten variëren sterk en worden niet getrackt",
    "Een escalatieproces is gedocumenteerd, maar inconsistent gevolgd, en of het uitkomsten verbetert is onbekend",
    "Een gedocumenteerd escalatiepad bestaat, wordt in de meeste gevallen gevolgd, en win rates op geëscaleerde deals worden kwartaalsgewijs gereviewd",
    "Een bestuurd gap-escalatiesysteem: pad gedocumenteerd, consistent gevolgd, win rate op geëscaleerde deals getrackt en gebenchmarkt, en terugkerende gaps voeden een update van het product constraint register"
  ]
},
{
  id: 9011, pillar: 9, type: "scale",
  title: "Hoe geautomatiseerd en zelfvoorzienend is je customer onboarding, en hoeveel handmatige interventie is nodig om een standaard setup af te ronden?",
  options: [
    "Onboarding is volledig handmatig: elke klant vereist significante PS- of CS-tijd",
    "Onboarding is grotendeels handmatig met een paar templates",
    "Een mix van geautomatiseerde en handmatige stappen: handmatige inspanning varieert sterk per klant",
    "De meeste onboarding-stappen zijn geautomatiseerd met handmatige betrokkenheid beperkt tot gedefinieerde uitzonderingen",
    "Onboarding is volledig geautomatiseerd voor standaardconfiguraties: handmatige touchpoints worden getrackt en completion rates maandelijks gereviewd"
  ]
},
{
  id: 9012, pillar: 9, type: "scale",
  title: "Vraag een Sales-rep en een CS-manager onafhankelijk om de top drie productlimitaties te benoemen. Komen hun antwoorden overeen — en wanneer heb je die alignment voor het laatst getest?",
  options: [
    "Sales, CS en Product hebben betekenisvol verschillende beelden van productcapabilities en -limitaties",
    "High-level alignment bestaat, maar valt uiteen in edge cases en klantgesprekken",
    "Een gedeeld productdocument bestaat, maar wordt niet consistent toegepast over teams heen",
    "Een uniform productbegrip onderhouden via reguliere cross-functionele syncs en gedeelde documentatie",
    "Een single source of product truth: capabiliteitsgrenzen, bekende limitaties en positionering co-bezit door Sales, CS en Product — kwartaalsgewijs geüpdatet en getest op consistentie"
  ]
},
{
  id: 9013, pillar: 9, type: "scale",
  title: "Hoe schoon integreert je product in bestaande technische omgevingen van klanten, en hoe vaak vertragen integratie-issues time-to-value?",
  options: [
    "Integratie-uitdagingen komen vaak voor en vertragen of doen vaak deployments ontsporen",
    "Integratie werkt in de meeste gevallen, maar vereist significante klant-IT inspanning",
    "Integratie is acceptabel voor primaire omgevingen, maar gaps bestaan voor secundaire stacks",
    "Integratie-dekking is goed gedocumenteerd en gevalideerd tegen target-klantomgevingen",
    "Een gecertificeerd integratie-ecosysteem: target-stack integraties gevalideerd, documentatie onderhouden, en integratie-foutpercentages getrackt in CS-rapportage"
  ]
},
{
  id: 9014, pillar: 9, type: "scale",
  title: "Hoe consistent delen Sales, CS en Product een gemeenschappelijk beeld van wat het product goed doet, en wat niet?",
  options: [
    "Sales, CS en Product hebben betekenisvol verschillende beelden van productcapabilities",
    "Alignment bestaat op high-level, maar valt uiteen in edge cases en klantgesprekken",
    "Een gedeeld productpositioneringsdocument bestaat, maar wordt niet consistent toegepast",
    "Een uniform productbegrip wordt onderhouden via reguliere cross-functionele syncs en gedeelde documentatie",
    "Een single source of product truth: capabiliteitsgrenzen, bekende limitaties en positionering zijn co-bezit door Sales, CS en Product en worden kwartaalsgewijs geüpdatet"
  ]
},
{
  id: 9015, pillar: 9, type: "scale",
  title: "In het afgelopen kwartaal: welk percentage expansiedeals vereiste engineeringwerk, custom configuratie of PS-betrokkenheid om af te ronden — en verbetert dat percentage?",
  options: [
    "Meer dan 80% van de expansiedeals vereiste significante engineering- of PS-betrokkenheid: expansie is geen self-service en is dat nooit geweest",
    "50-80% van de expansies vereiste technische interventie: standaard expansiepaden zijn niet betrouwbaar self-service",
    "20-50% van de expansies vereiste wat technisch werk — veelvoorkomende expansiescenario's werken meestal, maar edge cases hebben nog support nodig",
    "Minder dan 20% van de expansiedeals vereiste technische interventie — de meeste veelvoorkomende expansiescenario's zijn natively ondersteund",
    "Onder de 10% van de expansies vereist engineering- of PS-betrokkenheid: expansiepaden zijn frictieloos, gedocumenteerd en getest tegen werkelijke klantpatronen — leakage kwartaalsgewijs gereviewd"
  ]
},
{
  id: 9016, pillar: 9, type: "scale",
  title: "Hoe uitgebreid en up-to-date is je productdocumentatie en enablement-materiaal, en vinden GTM-teams het voldoende zonder naar Product te escaleren?",
  options: [
    "Documentatie ontbreekt, is verouderd of ontoegankelijk",
    "Documentatie bestaat, maar is incompleet en vereist frequente Product-team verduidelijking",
    "Documentatie dekt kern-use cases, maar gaps bestaan voor geavanceerde scenario's",
    "Uitgebreide documentatie die primaire en secundaire use cases dekt, geüpdatet bij elke release",
    "Een best-in-class documentatiesysteem: compleet, versie-beheerd, doorzoekbaar en kwartaalsgewijs door GTM-teams gevalideerd op voldoende-zijn"
  ]
},
{
  id: 9017, pillar: 9, type: "scale",
  title: "Hoe gestructureerd is het proces voor GTM-teams om productfeedback in te dienen, en hoe track je of het de roadmap beïnvloedt?",
  options: [
    "Geen feedbackproces: GTM-teams escaleren naar Product via informele kanalen",
    "Een ad-hoc feedbackproces bestaat, maar tracking van input naar uitkomst ontbreekt",
    "Een gestructureerd feedback-indieningsproces bestaat, maar impact op roadmap is onduidelijk",
    "Een formele feedback loop: inputs getrackt van indiening tot roadmap-review met outcome-zichtbaarheid voor indieners",
    "Een closed-loop GTM-naar-Product feedbacksysteem: inputs gelogd, kwartaalsgewijs gereviewd, transparant geprioriteerd en uitkomsten teruggerapporteerd aan GTM-teams"
  ]
},
{
  id: 9018, pillar: 9, type: "scale",
  title: "Hoe direct worden roadmap-beslissingen gestuurd door gevalideerde GTM- en klantsignalen, in plaats van door interne aannames?",
  options: [
    "Roadmap wordt gedreven door engineering-prioriteiten en leadership-intuïtie",
    "Klantverzoeken worden meegenomen, maar weging is informeel en ondoorzichtig",
    "Klant- en marktinputs voeden planning, maar worden niet systematisch gescoord",
    "Roadmapbeslissingen documenteren het markt- en klantbewijs achter elke prioriteit",
    "Een evidence-based roadmap: elke significante beslissing heeft een gedocumenteerd markt- en klantsignaal met frequentie, omzetimpact en retentiecorrelatie"
  ]
},
{
  id: 9019, pillar: 9, type: "scale",
  title: "In het afgelopen kwartaal: welk percentage nieuwe deals vereiste een non-standaard term, custom delivery-commitment of uitzondering op je standaardproces — en wordt die rate getrackt?",
  options: [
    "Uitzonderingen zijn de norm: de meeste deals vereisen een vorm van custom term of delivery-aanpassing",
    "Een significante minderheid van deals vereist uitzonderingen, maar de rate wordt niet getrackt en de drivers zijn onduidelijk",
    "Uitzonderingsratio wordt getrackt, maar niet formeel gereviewd — of het verbetert of verslechtert is onbekend",
    "Uitzonderingsratio wordt kwartaalsgewijs getrackt, gereviewd door leadership, en drivers worden geanalyseerd om herhaling te reduceren",
    "Een bestuurde uitzonderingsdiscipline: standaardvoorwaarden en delivery gelden voor de grote meerderheid van deals, uitzonderingsratio is een gemanagede KPI, en elke uitzondering wordt gelogd, goedgekeurd en root-caused"
  ]
},
{
  id: 9020, pillar: 9, type: "scale",
  title: "Hoe consistent kan je product worden verkocht, geïmplementeerd en geschaald zonder uitzonderingen op standaardvoorwaarden of delivery-processen?",
  options: [
    "Uitzonderingen zijn de norm: bijna elke deal vereist een vorm van custom-aanpassing",
    "Uitzonderingen komen vaak voor en worden case by case afgehandeld zonder gedocumenteerde governance",
    "Sommige uitzonderingsscenario's zijn gedocumenteerd, maar andere vereisen nog ad-hoc resolutie",
    "Uitzonderingen zijn zeldzaam en worden bestuurd door een gedocumenteerd uitzonderingsproces met leadership-goedkeuring",
    "Een no-exception standaardmodel: standaardvoorwaarden en delivery gelden consistent, uitzonderingen worden getrackt en gereviewd voor systemische resolutie"
  ]
},

/* ===========================================================
   PILLAR 10: DATA & INSIGHTS (20 QUESTIONS)
   =========================================================== */

{
  id: 10001, pillar: 10, type: "scale",
  title: "Noem in de afgelopen 30 dagen één GTM-beslissing die door data veranderde. Hoe gemakkelijk was dat te beantwoorden?",
  subtitle: "Beantwoord voor je primaire revenue-segment en GTM-motion, tenzij een vraag expliciet om onderscheid vraagt.",
  options: [
    "We kunnen er geen noemen: data wordt geproduceerd, maar beïnvloedt geen beslissingen",
    "Data wordt in meetings gereviewd, maar verandert zelden de conclusie — intuïtie domineert",
    "Data beïnvloedt af en toe beslissingen, maar we kunnen geen recent specifiek voorbeeld aanwijzen",
    "We kunnen twee of drie recente beslissingen noemen die direct door data beïnvloed werden, met gedocumenteerde rationale",
    "Data-gedreven beslissingen zijn de norm: elke grote GTM-beslissing wordt gedocumenteerd met data-onderbouwing, en gevallen waarin data intuïtie overruled werden, worden als positieve governance-signalen getrackt"
  ]
},
{
  id: 10002, pillar: 10, type: "scale",
  title: "In je laatste drie leadership-reviews: hoeveel minuten gingen op aan debat over metric-definities in plaats van actie ondernemen — en is dat getal een verbetering?",
  options: [
    "Het grootste deel van de review-tijd gaat op aan metric-disputen: teams vertrouwen geen gedeelde definitieset",
    "Metric-debatten vertragen vaak beslissingen, en er is geen bewijs dat de situatie verbetert",
    "Metric-definities zijn grotendeels aligned, maar terugkerende disputen slokken nog significante reviewtijd op",
    "Metric-definities zijn bestuurd, disputen zijn beperkt, en reviewtijd gaat vooral naar interpretatie en actie",
    "Een single-source metric registry stuurt alle leadership-reviews: debat over definities is zeldzaam, getrackt wanneer het voorkomt en trendt over tijd omlaag"
  ]
},
{
  id: 10003, pillar: 10, type: "scale",
  title: "Hoe consistent wordt data gebruikt om GTM-beslissingen te sturen, en kun je een voorbeeld uit de afgelopen 30 dagen geven waarin data een plan veranderde?",
  options: [
    "Gut feel stuurt de meeste beslissingen: data wordt geproduceerd, maar niet gebruikt",
    "Data wordt in meetings gereviewd, maar verandert zelden de conclusie",
    "Data beïnvloedt af en toe beslissingen, maar intuïtie domineert nog",
    "Data is een primaire input voor de meeste GTM-beslissingen, met gedocumenteerde beslissingsrationale",
    "Een data-gedreven beslissingscultuur: beslissingen gedocumenteerd met data-onderbouwing, en gevallen waarin data intuïtie overruled wordt als positief signaal getrackt"
  ]
},
{
  id: 10004, pillar: 10, type: "scale",
  title: "Op dit moment, zonder een handmatige data-pull: kun je je pipeline coverage ratio noemen, je gewogen pipeline per stage, en het aantal at-risk deals dit kwartaal?",
  options: [
    "Nee: deze cijfers vereisen handmatig samenstellen of zijn niet beschikbaar",
    "Sommige cijfers zijn beschikbaar, maar minstens één vereist handmatig werk of wordt niet vertrouwd",
    "Kern-pipelinemetrics bestaan in dashboards, maar vertrouwen in accuratesse of freshness is gemixt",
    "Deze metrics zijn near real-time beschikbaar en gebruikt in wekelijkse operating reviews",
    "Een bestuurde pipeline-intelligentielaag: coverage, gewogen stagewaarde en at-risk deals on demand beschikbaar, vertrouwd door leadership en gekoppeld aan gedocumenteerde actiedrempels"
  ]
},
{
  id: 10005, pillar: 10, type: "scale",
  title: "In de laatste twee kwartalen: hoeveel revenue-misses werden door een leading indicator meer dan 60 dagen vooraf voorspeld — versus pas ontdekt bij quarter close?",
  options: [
    "Geen werd vroeg voorspeld: misses werden ontdekt toen omzet al gemist was",
    "Een paar waarschuwingstekenen bestonden, maar ze waren informeel en niet gekoppeld aan een gedefinieerd leading-indicator systeem",
    "Sommige misses werden vroeg voorspeld, maar signaalkwaliteit en follow-through waren inconsistent",
    "Leading indicators voorspelden meerdere misses vroeg genoeg om te handelen, en die gevallen werden na het kwartaal gereviewd",
    "Een predictief signaalsysteem bestaat: vroege waarschuwingen worden gelogd, opgevolgd en gereviewd tegen uitkomsten — met de ratio van vroeg-gedetecteerde vs laat-gedetecteerde misses over tijd getrackt"
  ]
},
{
  id: 10006, pillar: 10, type: "scale",
  title: "Hoe scherp meet je GTM-efficiëntie, en kun je CAC payback, burn multiple en pipeline-efficiëntie per motion berekenen?",
  options: [
    "GTM-efficiëntie wordt niet gemeten: we tracken omzet maar geen cost-of-revenue",
    "Totale CAC wordt getrackt, maar efficiëntie per motion of segment is onbekend",
    "Kern-efficiëntiemetrics bestaan, maar worden onregelmatig of inconsistent gereviewd",
    "CAC, payback en pipeline-efficiëntie per motion getrackt en maandelijks gereviewd",
    "Een GTM-efficiëntie P&L: CAC, payback, burn multiple en pipeline-efficiëntie per motion, segment en rep maandelijks gereviewd in leadership-meetings"
  ]
},
{
  id: 10007, pillar: 10, type: "scale",
  title: "Hoe rigoureus voer je cohortanalyse uit, en kun je retentie, expansie en churn rates over acquisitie-cohorten vergelijken?",
  options: [
    "Geen cohortanalyse: klantperformance wordt niet over tijd getrackt",
    "Basis cohort-tracking bestaat, maar wordt niet gereviewd of gebruikt in planning",
    "Cohortdata is beschikbaar, maar analyse is oppervlakkig en zeldzaam",
    "Kwartaal-cohortreviews die retentie, NRR en expansie vergelijken per acquisitieperiode",
    "Een volledig cohort-intelligentiesysteem: retentie, expansie en payback per cohort getrackt, kwartaalsgewijs gereviewd, en informeren ICP- en DG-strategie"
  ]
},
{
  id: 10008, pillar: 10, type: "scale",
  title: "Op dit moment, zonder handmatige data-pull: kun je je pipeline-stageverdeling, health flags en coverage ratio zien — en vertrouw je die cijfers?",
  options: [
    "Pipeline-zichtbaarheid is beperkt: een real-time view vereist handmatig samenstellen",
    "Pipeline is zichtbaar in CRM, maar kwaliteit, health en stage-accuratesse worden niet vertrouwd",
    "Pipeline-dashboards bestaan, maar data-hygiëne issues verminderen vertrouwen in de view",
    "Een real-time pipeline-view met stage-distributie, health flags en coverage ratio getrackt",
    "Een bestuurd pipeline-intelligentiesysteem: stage-distributie, health score, coverage en velocity in real time getrackt en gereviewd in wekelijkse pipeline-meetings"
  ]
},
{
  id: 10009, pillar: 10, type: "scale",
  title: "Hoe granulair kun je GTM-performance data segmenteren — naar segment, motion, rep en cohort — om root causes te identificeren in plaats van gemiddelden?",
  options: [
    "Performance-data is alleen aggregaat beschikbaar: segmentatie is niet mogelijk",
    "Wat segmentatie is mogelijk, maar vereist significant handmatig datawerk",
    "Kernsegmenten zijn beschikbaar, maar cross-filtering per motion en rep is beperkt",
    "Performance kan worden gesegmenteerd per segment, motion en rep, met data beschikbaar in dashboards",
    "Een multi-dimensioneel segmentatiemodel: performance gesneden per segment, motion, rep, cohort en geografie, maandelijks gereviewd op team- en leadershipniveau"
  ]
},
{
  id: 10010, pillar: 10, type: "scale",
  title: "Hoe accuraat voorspelt je team de omzet van het volgende kwartaal, en wat is je typische variance tussen commit en eindresultaat?",
  options: [
    "Geen formele forecast: kwartaalomzet is een verrassing",
    "Een forecast bestaat, maar variance op werkelijk is meestal groter dan 20%",
    "Forecasting wordt geprobeerd, maar variance is inconsistent en niet systematisch gereviewd",
    "Een gedocumenteerde forecastmethodologie met variance-tracking en post-quarter retrospective",
    "Een bestuurd forecastsysteem: variance consistent onder 10%, methodologie kwartaalsgewijs gereviewd, en call-to-close accuratesse wekelijks getrackt"
  ]
},
{
  id: 10011, pillar: 10, type: "scale",
  title: "Hoe geavanceerd is je gebruik van predictive analytics in GTM, en kun je de waarschijnlijke uitkomst van een deal of een DG-campagne modelleren voordat hij sluit?",
  options: [
    "Geen predictive analytics: alle beslissingen zijn op historische data of intuïtie",
    "Wat basis trendline-analyse bestaat, maar geen forward-looking modellen worden gebruikt",
    "Predictive scoring wordt in één functie gebruikt, maar wordt niet GTM-breed toegepast",
    "Predictive modellen gebruikt voor lead scoring, churn-risico en pipelinekwaliteit GTM-breed",
    "Een volledige predictive intelligence-laag: deal scoring, churn-predictie en DG campagne-modeling geïntegreerd in dagelijkse GTM-operaties"
  ]
},
{
  id: 10012, pillar: 10, type: "scale",
  title: "Hoe actionable zijn je GTM-dashboards, en wanneer een dashboard een probleem toont, is er een duidelijke eigenaar en next action?",
  options: [
    "Dashboards bestaan, maar worden niet gereviewd of opgevolgd",
    "Dashboards worden gereviewd, maar genereren discussie in plaats van beslissingen",
    "De meeste metrics hebben eigenaren, maar action follow-through is inconsistent",
    "Dashboards sturen gedocumenteerde acties met eigenaren en deadlines die elke week worden gereviewd",
    "Dashboards zijn beslissings-tools: elke metric heeft een eigenaar, een drempel en een gedocumenteerd playbook voor wanneer de drempel doorbroken wordt"
  ]
},
{
  id: 10013, pillar: 10, type: "scale",
  title: "Hoe data-gedreven zijn je GTM-performance reviews, en welk percentage tijd gaat naar analyse versus anekdote?",
  options: [
    "Performance reviews zijn anekdote-gedreven: data wordt zelden gepresenteerd of in twijfel getrokken",
    "Data is aanwezig in reviews, maar discussie wordt gedomineerd door narratief en intuïtie",
    "De meeste reviews gebruiken data, maar diepte van analyse varieert sterk per manager",
    "Een standaard data-framework stuurt alle performance reviews met verplichte pre-read materialen",
    "Performance reviews zijn volledig data-led: gestandaardiseerde pre-read, gestructureerde analyse en decision log geproduceerd in elke sessie"
  ]
},
{
  id: 10014, pillar: 10, type: "scale",
  title: "Hoe systematisch identificeer je performance-trends, en hoe snel bereiken trendsignalen de mensen die ernaar kunnen handelen?",
  options: [
    "Trends worden geïdentificeerd nadat ze al problemen zijn geworden",
    "Trendbesef is informeel: gespot door ervaren leiders in meetings",
    "Wat trendmonitoring bestaat, maar signaal-naar-actie snelheid is traag",
    "Trend-alerts zijn geautomatiseerd en geleverd aan eigenaren binnen een gedefinieerd tijdsvenster",
    "Een proactief trend-intelligentiesysteem: signalen algoritmisch gedetecteerd, in real time aan eigenaren geleverd, en responstijd getrackt als governance-metric"
  ]
},
{
  id: 10015, pillar: 10, type: "scale",
  title: "Hoe systematisch benchmark je je GTM-performance tegen externe industriestandaarden, en wanneer heb je benchmarks voor het laatst gebruikt om een beslissing uit te dagen?",
  options: [
    "Geen benchmarking: we evalueren performance in isolatie",
    "Het leadership heeft een ruw besef van industriegemiddelden, maar geen formele vergelijking",
    "Jaarlijkse benchmarkvergelijking vindt plaats, maar verandert zelden hoe we werken",
    "Externe benchmarks zijn opgenomen in kwartaalplanning en performance reviews",
    "Een doorlopend benchmarkprogramma: externe databronnen geïntegreerd in dashboards, gebruikt om aannames in planning uit te dagen en gereviewd met de board"
  ]
},
{
  id: 10016, pillar: 10, type: "scale",
  title: "Hoe accuraat kun je de omzet van het volgende kwartaal voorspellen, en wat is de foutmarge in je laatste vier kwartaal-forecasts?",
  options: [
    "Omzetvoorspelling is onmogelijk: variance is meer dan 25%",
    "Forecastaccuratesse is laag: variance is meestal 15-25%",
    "Forecast is soms accuraat, maar within-quarter variance is significant",
    "Forecastaccuratesse binnen 10% in de meeste kwartalen, met een gedocumenteerd variance reviewproces",
    "Forecastaccuratesse consistent binnen 5%: vier-kwartalen track record gedocumenteerd en gereviewd met de board"
  ]
},
{
  id: 10017, pillar: 10, type: "scale",
  title: "Hoe systematisch gebruik je performance-data om GTM-resources gedurende het jaar te heralloceren — budget, headcount of focus?",
  options: [
    "Resources worden gezet in jaarlijkse planning en gedurende het jaar niet aangepast",
    "Herallocatie gebeurt af en toe, maar op executive-voorkeur in plaats van data",
    "Midyear-reviews bestaan, maar data stuurt zelden betekenisvolle resourceverschuivingen",
    "Een gedocumenteerde midyear resource review gebruikt performance-data om budget en focus te heralloceren",
    "Een doorlopend performance-based resourceallocatiemodel: onderpresterende motions worden gedefundeerd en high-ROI motions worden in real time opgeschaald"
  ]
},
{
  id: 10018, pillar: 10, type: "scale",
  title: "Hoe accuraat bereken je LTV, en houdt je LTV-model rekening met expansie, churn en marge per segment?",
  options: [
    "LTV wordt niet berekend: we schatten waarde alleen op basis van ARR",
    "Een basis LTV-schatting bestaat, maar houdt geen rekening met expansie of marge",
    "LTV wordt op aggregaatniveau berekend, maar niet gesegmenteerd of regelmatig geüpdatet",
    "LTV wordt per segment berekend, met retentie, expansie en brutomarge meegenomen",
    "Een volledig LTV-model: op segmentniveau, kwartaalsgewijs geüpdatet, met expansiekans, churnrisico en marge meegenomen, en gebruikt in ICP-scoring en CAC-doelstelling"
  ]
},
{
  id: 10019, pillar: 10, type: "scale",
  title: "Hoe direct sturen data en inzichten GTM-performanceverbetering, en kun je een specifieke wijziging uit het afgelopen kwartaal aanwijzen die op data was gebaseerd?",
  options: [
    "Data stuurt geen wijzigingen: performance reviews zijn alleen informatief",
    "Data brengt af en toe inzichten naar boven, maar leidt zelden tot gedocumenteerde actie",
    "Data beïnvloedt sommige beslissingen, maar follow-through is inconsistent",
    "Een kwartaal data-gedreven verbeteringsproces produceert gedocumenteerde acties met eigenaren",
    "Data-gedreven verbetering is een culturele norm: elk kwartaal produceert gedocumenteerde wijzigingen die traceerbaar zijn naar een specifiek datasignaal, met outcome-tracking"
  ]
},
{
  id: 10020, pillar: 10, type: "scale",
  title: "Hoe vroeg en betrouwbaar identificeren datasignalen churnrisico, en wat is je gemiddelde lead time tussen risicodetectie en klantopzegging?",
  options: [
    "Churn wordt gedetecteerd op of na de cancellation call: geen vroege waarschuwing bestaat",
    "Sommige signalen worden in de laatste 30 dagen voor churn opgemerkt",
    "Risicosignalen worden 60-90 dagen voor churn gedetecteerd in sommige accounts",
    "Een health scoring-model identificeert de meeste at-risk accounts 90 dagen of meer vóór churn",
    "Een predictief churnsysteem: risico gedetecteerd 120 of meer dagen vóór opzegging, interventie automatisch getriggerd, en save rate per risico-tier getrackt"
  ]
},

/* ===========================================================
   PILLAR 11: ENABLEMENT (20 QUESTIONS)
   =========================================================== */

{
  id: 11001, pillar: 11, type: "scale",
  title: "Hoe gestructureerd en consistent geleverd is je onboarding-programma voor nieuwe GTM-hires, en hoe wordt completion en kwaliteit getrackt?",
  subtitle: "Beantwoord voor je primaire revenue-segment en GTM-motion, tenzij een vraag expliciet om onderscheid vraagt.",
  options: [
    "Geen gestructureerde onboarding: nieuwe hires leren via observatie en trial",
    "Een informeel onboardingproces bestaat, maar dekking en kwaliteit variëren per manager",
    "Een onboardingcurriculum bestaat, maar completion en kwaliteit worden niet systematisch getrackt",
    "Een gestructureerd onboardingprogramma met mijlpaal-completion per hire getrackt",
    "Een volledig bestuurd onboarding-systeem: curriculum, mijlpalen, manager sign-offs en 30-60-90 dagen performance gereviewd voor elke nieuwe hire"
  ]
},
{
  id: 11002, pillar: 11, type: "scale",
  title: "Hoe efficiënt rampen nieuwe GTM-hires naar volledige productiviteit, en hoe track je ramp-tijd versus doel?",
  options: [
    "Ramp-tijd wordt niet getrackt: we weten niet hoe lang het duurt voordat nieuwe hires bijdragen",
    "Ramp-verwachtingen bestaan informeel, maar werkelijke time-to-productivity wordt niet gemeten",
    "Ramp-tijd wordt getrackt, maar niet vergeleken met een gedefinieerd doel of benchmark",
    "Time-to-productivity per cohort getrackt tegen een gedefinieerd doel, kwartaalsgewijs gereviewd",
    "Een ramp-efficiëntiemodel: time-to-first-deal en time-to-quota per hire getrackt, gebenchmarkt tegen eerdere cohorten en sturen onboarding-verbetering"
  ]
},
{
  id: 11003, pillar: 11, type: "scale",
  title: "Hoe consistent krijgt je team gestructureerde skill development, en is leren gekoppeld aan geobserveerde performance-gaps?",
  options: [
    "Geen doorlopende training: ontwikkeling is zelf gestuurd en niet ondersteund",
    "Ad-hoc training vindt plaats wanneer een probleem opduikt, niet proactief",
    "Een trainingskalender bestaat, maar content is generiek en niet gekoppeld aan performance-data",
    "Skill development is gekoppeld aan rep-performance gaps geïdentificeerd in coaching en call reviews",
    "Een performance-gekoppeld leersysteem: skill-gaps wekelijks geïdentificeerd in coaching, training daarop voorgeschreven, en verbetering getrackt tegen deal-uitkomsten"
  ]
},
{
  id: 11004, pillar: 11, type: "scale",
  title: "Hoe compleet, up-to-date en gebruikt zijn je sales-playbooks, en hoe weet je dat reps ze daadwerkelijk raadplegen in actieve deals?",
  options: [
    "Geen sales-playbooks: reps leunen op ervaring en persoonlijke inschatting",
    "Playbooks bestaan, maar zijn meer dan een jaar geleden geüpdatet en worden zelden geopend",
    "Playbooks zijn beschikbaar, maar gebruik in actieve deals wordt niet getrackt",
    "Playbooks worden kwartaalsgewijs geüpdatet en gebruik wordt getrackt via het enablement-platform",
    "Een live playbook-systeem: kwartaalsgewijs geüpdatet, gebruik per dealfase getrackt, en playbook-naar-win-rate correlatie maandelijks gereviewd"
  ]
},
{
  id: 11005, pillar: 11, type: "scale",
  title: "Hoe gemakkelijk vinden en gebruiken GTM-reps de enablement-content die ze nodig hebben, en hoe meet je content-toegankelijkheid?",
  options: [
    "Enablement-content is verspreid over meerdere systemen zonder centraal toegangspunt",
    "Een centrale repository bestaat, maar zoeken en navigatie zijn slecht",
    "Content is georganiseerd, maar reps escaleren regelmatig om te vinden wat ze nodig hebben",
    "Een goed georganiseerd enablement-platform waar reps content per rol en dealfase kunnen vinden",
    "Een gestructureerd, doorzoekbaar enablement-platform: content geïndexeerd per rol, fase en persona, adoptie getrackt en search success rate kwartaalsgewijs gereviewd"
  ]
},
{
  id: 11006, pillar: 11, type: "scale",
  title: "Hoe specifiek is enablement-content afgestemd op elke GTM-rol — AE, SDR, CS, AM — in plaats van geproduceerd als generieke gedeelde content?",
  options: [
    "Alle enablement-content is generiek: rollen worden niet gedifferentieerd",
    "Sommige rol-specifieke content bestaat, maar gaps zijn significant",
    "Primaire rollen hebben toegewezen content, maar secundaire rollen worden onderbediend",
    "Rol-specifieke enablement-tracks bestaan voor alle primaire GTM-rollen",
    "Een rol-specifieke enablement-architectuur: elke GTM-rol heeft een toegewezen curriculum, onafhankelijk beoordeeld en geüpdatet op basis van rol-specifieke performance-data"
  ]
},
{
  id: 11007, pillar: 11, type: "scale",
  title: "Hoe rigoureus worden reps gecertificeerd voordat ze met live prospects in contact komen, en wat gebeurt er als een rep zakt voor certificering?",
  options: [
    "Geen certificeringsproces: reps beginnen vanaf dag één te verkopen zonder beoordeling",
    "Een informele sign-off bestaat, maar standaarden zijn inconsistent over managers heen",
    "Een certificerings-checklist bestaat, maar completion wordt informeel getrackt",
    "Een gestructureerd certificeringsproces met pass/fail criteria en remediatiepaden",
    "Een rigoureuze certificerings-gate: reps mogen niet met live prospects engagen zonder te slagen, mislukte pogingen triggeren gestructureerde remediatie, en certificeringspercentages worden getrackt"
  ]
},
{
  id: 11008, pillar: 11, type: "scale",
  title: "Hoe gestructureerd en consistent is de sales-coaching die je managers leveren, en hoe wordt coachingkwaliteit getrackt?",
  options: [
    "Coaching is volledig informeel: managers geven feedback wanneer erom gevraagd wordt",
    "Coaching gebeurt in 1:1's, maar zonder gedefinieerd framework of cadans",
    "Een coaching-framework bestaat, maar kwaliteit en consistentie variëren sterk per manager",
    "Een gestandaardiseerd coaching-framework consistent toegepast over alle managers, met sessie-outputs gedocumenteerd",
    "Een coaching operating system: call reviews, skill-scoring, sessie-documentatie en coaching-impact wekelijks getrackt tegen rep-performance"
  ]
},
{
  id: 11009, pillar: 11, type: "scale",
  title: "Hoe uitgebreid en up-to-date is je sales- en marketingcollateral-bibliotheek, en gebruiken reps het in actieve deals?",
  options: [
    "Collateral is minimaal, verouderd of wordt niet in deals gebruikt",
    "Een collateral-set bestaat, maar de meeste reps gebruiken hun eigen materiaal",
    "Standaard collateral is beschikbaar, maar gebruik in live deals wordt niet gemeten",
    "Een actuele collateral-bibliotheek georganiseerd per dealfase en use case, met adoptie getrackt",
    "Een strategisch collateral-systeem: dealfase-geïndexeerd, versie-beheerd en adoptie kwartaalsgewijs gecorreleerd met win rate"
  ]
},
{
  id: 11010, pillar: 11, type: "scale",
  title: "Wordt Time-to-First-Deal getrackt als primaire ramp-KPI voor nieuwe hires, en hoe verhoudt het zich tot je gedefinieerde doel?",
  options: [
    "Time-to-First-Deal wordt niet getrackt",
    "Het wordt informeel getrackt, maar niet vergeleken met een gedefinieerd doel",
    "Het wordt getrackt en gerapporteerd, maar niet gebruikt om onboarding- of coachingbeslissingen te sturen",
    "Formeel getrackt als KPI, vergeleken met een doel en gereviewd in nieuwe-hire retrospectives",
    "Een bestuurde ramp-KPI: Time-to-First-Deal per hire getrackt, kwartaalsgewijs gebenchmarkt, en stuurt updates aan het onboarding-curriculum"
  ]
},
{
  id: 11011, pillar: 11, type: "scale",
  title: "Hoe systematisch meet je of enablement-programma's meetbare verbetering in deal-uitkomsten produceren?",
  options: [
    "Enablement-effectiviteit wordt niet gemeten: programma's worden gedraaid en aangenomen dat ze werken",
    "Deelname wordt getrackt, maar performance-impact wordt niet beoordeeld",
    "Enige correlatie tussen training-completion en performance wordt informeel geobserveerd",
    "Enablement-programma's worden kwartaalsgewijs geëvalueerd op skill-verbetering en win rate-impact",
    "Een enablement ROI-model: programma-completion, skill-score verbetering en deal-uitkomst correlatie maandelijks getrackt en gereviewd"
  ]
},
{
  id: 11012, pillar: 11, type: "scale",
  title: "Hoe consistent en frequent worden enablement-materialen geüpdatet om productwijzigingen, marktverschuivingen en competitieve moves te reflecteren?",
  options: [
    "Materialen worden zelden geüpdatet: content is binnen maanden na creatie verouderd",
    "Updates gebeuren reactief wanneer iets duidelijk fout is",
    "Een ruwe jaarlijkse updatecyclus bestaat, maar actualiteit is inconsistent over assets heen",
    "Een gedefinieerde kwartaal-updatecyclus voor alle kern-enablement assets met owner-accountability",
    "Een doorlopend updatesysteem: materialen gereviewd op een gedefinieerde cadans, getriggerd door productreleases en competitieve wijzigingen, met versiebeheer en vervaldata"
  ]
},
{
  id: 11013, pillar: 11, type: "scale",
  title: "Na je laatste drie productreleases: hoe snel zijn enablement-materialen geüpdatet — en werd het update proactief getriggerd of pas nadat reps gaps in deals signaleerden?",
  options: [
    "Enablement-materialen werden niet op tijd geüpdatet: reps ontdekten gaps in live deals",
    "Updates gebeurden reactief na klachten uit het veld, zonder een gedefinieerd release-gekoppeld proces",
    "Materialen werden voor sommige releases geüpdatet, maar timing en compleetheid waren inconsistent",
    "Enablement-updates zijn gekoppeld aan productreleases en meestal afgerond vóór field-blootstelling",
    "Een release-gekoppeld enablement-systeem: materialen proactief geüpdatet op een gedefinieerd tijdpad, field readiness gecheckt vóór release, en lag-tijd na elke release getrackt"
  ]
},
{
  id: 11014, pillar: 11, type: "scale",
  title: "Hoe specifiek worden je reps getraind en gerepeteerd om de meest voorkomende deal-blokkerende objections aan te pakken?",
  options: [
    "Geen objection handling-training: reps ontwikkelen hun eigen reacties over tijd",
    "Veelvoorkomende objections worden in onboarding behandeld, maar niet ververst of geoefend",
    "Een objection-gids bestaat, maar is niet gekoppeld aan live deal-review of role-play",
    "Objection handling getraind in onboarding, versterkt in coachingsessies en geüpdatet vanuit win/loss-data",
    "Een gestructureerd objection trainingsysteem: veelvoorkomende objections per segment gecatalogiseerd, reacties getest in live coaching, en handling-effectiviteit getrackt per objection-type"
  ]
},
{
  id: 11015, pillar: 11, type: "scale",
  title: "In je laatste pipeline review: hoeveel gestalde of verloren deals hadden in de 30 dagen daarvoor toegang tot enablement-materiaal — en track je dat?",
  options: [
    "Enablement is volledig pre-sale: geen support bestaat voor in-flight deals",
    "Reps kunnen algemeen materiaal openen, maar deal-specifieke begeleiding is niet beschikbaar",
    "Wat dealfase-enablement bestaat, maar is inconsistent georganiseerd en geopend",
    "Dealfase-geïndexeerde enablement is beschikbaar en wordt actief gerefereerd in deal reviews",
    "Een deal-executie enablement-systeem: stage-specifieke content, tools en escalatiepaden georganiseerd in CRM en maandelijks gereviewd op gebruik"
  ]
},
{
  id: 11016, pillar: 11, type: "scale",
  title: "Hoe diep begrijpen je GTM-reps het product, en kunnen ze technische vragen aan zonder product of engineering te betrekken?",
  options: [
    "Reps hebben oppervlakkige productkennis: de meeste technische vragen vereisen escalatie",
    "Sommige reps gaan goed om met technische vragen, maar kennisniveaus variëren sterk",
    "De meeste reps kunnen standaardvragen aan, maar complexe scenario's vereisen specialist-support",
    "Productkennis wordt gecertificeerd en ververst bij elke grote release",
    "Een doorlopend product-mastery programma: certificering-gated, regelmatig beoordeeld, ververst bij elke release met rep-kennisscores per kwartaal getrackt"
  ]
},
{
  id: 11017, pillar: 11, type: "scale",
  title: "In het afgelopen kwartaal: voor elke onderpresterende rep — werd een specifieke skill-gap geïdentificeerd en gerichte training voorgeschreven, of werd op iedereen hetzelfde generieke curriculum toegepast?",
  options: [
    "Onderpresteren wordt niet gekoppeld aan specifieke skill-gap diagnose: support is generiek of afwezig",
    "Managers identificeren soms waarschijnlijke gaps, maar training blijft grotendeels generiek en inconsistent",
    "Sommige onderpresteerders krijgen gerichte ontwikkeling, maar het proces is niet systematisch over managers heen",
    "Onderpresterende reps krijgen skill-gap diagnose en gerichte trainingsplannen met manager follow-up",
    "Een performance-gekoppeld enablement-systeem: elke onderpresteerder krijgt een gediagnosticeerde skill-gap, voorgeschreven gerichte training en outcome-tracking tegen de gediagnosticeerde gap"
  ]
},
{
  id: 11018, pillar: 11, type: "scale",
  title: "Hoe systematisch gebruik je real-world scenario's en gestructureerde role-plays om rep-skills op te bouwen voordat ze kopers tegenkomen?",
  options: [
    "Geen role-play of scenario-oefening: reps leren via live deal-ervaring",
    "Af en toe role-play in training, maar niet gestructureerd of beoordeeld",
    "Role-play maakt deel uit van onboarding, maar wordt niet consistent gebruikt in doorlopende coaching",
    "Gestructureerde role-play met gedefinieerde scenario's en scoring gebruikt in onboarding en kwartaal-refreshers",
    "Een immersive practice-systeem: opgenomen role-plays gereviewd door managers, gescoord tegen rubrics, en gebruikt om skill-ontwikkeling over tijd te tracken"
  ]
},
{
  id: 11019, pillar: 11, type: "scale",
  title: "Hoe direct en meetbaar draagt je enablement-functie bij aan verbeteringen in win rate, ramp-tijd en pipeline-consistentie?",
  options: [
    "Enablement-bijdrage aan performance wordt niet gemeten of getrackt",
    "Anekdotisch bewijs suggereert dat enablement helpt, maar geen data ondersteunt de claim",
    "Sommige leading indicators van enablement-impact worden getrackt, maar niet formeel gereviewd",
    "Enablement-ROI wordt kwartaalsgewijs gereviewd: ramp-tijd, win rate per training-completion en playbook-gebruik getrackt",
    "Enablement is een gemeten revenue-functie: win rate, ramp-tijd en deal velocity-verbeteringen toegeschreven aan enablement-programma's en maandelijks gereviewd met Sales-leadership"
  ]
},
{
  id: 11020, pillar: 11, type: "scale",
  title: "Hoe consistent en snel manage je organisatie onderpresterende reps, en wat is de gemiddelde tijd van geïdentificeerde onderprestatie tot resolutie?",
  options: [
    "Onderpresteren wordt onbeperkt getolereerd: er bestaat geen systematisch performance management",
    "Onderpresteerders worden uiteindelijk aangepakt, maar het proces is inconsistent en traag",
    "Een formeel PIP-proces bestaat, maar activatie is vertraagd en uitkomsten zijn onvoorspelbaar",
    "Onderpresteren wordt binnen een kwartaal geïdentificeerd en aangepakt via een gedocumenteerd verbeterplan binnen 30 dagen",
    "Leading indicators flaggen onderpresteren vroeg, verbeterplannen activeren binnen 30 dagen, en uitkomsten worden consistent getrackt"
  ]
},

/* ===========================================================
   PILLAR 12: ALIGNMENT & GOVERNANCE (20 QUESTIONS)
   =========================================================== */

{
  id: 12001, pillar: 12, type: "scale",
  title: "Als je nu vijf frontline-GTM reps zou vragen om de top drie prioriteiten voor dit kwartaal te benoemen, hoeveel zouden hetzelfde antwoord geven?",
  subtitle: "Beantwoord voor je primaire revenue-segment en GTM-motion, tenzij een vraag expliciet om onderscheid vraagt.",
  options: [
    "Minder dan twee zouden het eens zijn: prioriteiten zijn onbekend of tegenstrijdig op de frontline",
    "Twee of drie zouden grofweg aligned zijn, maar met significante variatie in bewoording en ranking",
    "De meesten zouden vergelijkbare prioriteiten noemen, maar zonder exacte taal of consistente volgorde",
    "Vier of vijf zouden hetzelfde antwoord geven: prioriteiten worden gecommuniceerd en getest in teamvergaderingen",
    "Alle vijf zouden identieke antwoorden geven: prioriteits­cascade wordt gevalideerd via een gestructureerde kwartaal frontline comprehension check — en misalignment triggert een onmiddellijke communicatie-interventie"
  ]
},
{
  id: 12002, pillar: 12, type: "scale",
  title: "Wanneer leadership bijeenkomt om GTM-performance te reviewen: hoeveel tijd gaat naar debat over data-definities versus echt problemen oplossen?",
  options: [
    "Het meeste meeting-tijd gaat op aan data-disputen: er is geen single source of truth",
    "Data-debatten doen discussies vaak ontsporen en vertragen beslissingen",
    "Data is grotendeels akkoord, maar af en toe disputen vertragen reviews",
    "Data-definities zijn vastgelegd: meetings focussen op interpretatie en beslissingen in plaats van getallen-disputen",
    "Alle leadership-fora opereren vanuit een single bestuurde databron: data-debatten zijn afwezig en 100% van de tijd gaat naar besluitvorming"
  ]
},
{
  id: 12003, pillar: 12, type: "scale",
  title: "Hoe rigoureus worden GTM-teams aansprakelijk gehouden voor de doelen waaraan ze zich gecommitteerd hebben, en wat gebeurt er als een commitment wordt gemist?",
  options: [
    "Geen accountability-mechanisme: gemiste doelen worden weggepraat zonder consequentie",
    "Gemiste doelen worden informeel besproken, maar gestructureerde accountability ontbreekt",
    "Een reviewproces bestaat, maar accountability is inconsistent over leiders heen",
    "Een formele accountability-review voor gemiste doelen met gedocumenteerde root cause en corrigerende actie",
    "Een gedisciplineerd accountability-systeem: gemiste doelen triggeren een gedocumenteerde review binnen twee weken, corrigerende acties getrackt en herhaalde missers geëscaleerd"
  ]
},
{
  id: 12004, pillar: 12, type: "scale",
  title: "Wanneer een cross-functionele GTM-beslissing input vraagt van meer dan twee teams: hoe lang duurt het meestal voor er een gedocumenteerde conclusie ligt — en wordt dat getrackt?",
  options: [
    "Multi-team beslissingen hebben geen gedefinieerd proces: ze lossen op wanneer iemand uiteindelijk een conclusie afdwingt",
    "Deze beslissingen vinden informeel plaats in meetings, maar tijd-tot-resolutie wordt niet getrackt en varieert sterk",
    "De meeste multi-team beslissingen lossen binnen een paar weken op, maar er is geen formele SLA en vertragingen zijn gewoon",
    "Een gedocumenteerd proces voor multi-team beslissingen bestaat met een gedefinieerde tijdlijn en accountable facilitator",
    "Een bestuurd multi-team beslissingsprotocol: input-deadlines, beslissingseigenaar en resolutie-SLA gedefinieerd — tijd-tot-beslissing kwartaalsgewijs getrackt, en aanhoudende vertragingen escaleren automatisch naar leadership"
  ]
},
{
  id: 12005, pillar: 12, type: "scale",
  title: "Hoe betrouwbaar houdt je GTM-operating cadans stand, en welk percentage geplande meetings wordt gecanceld of gehouden zonder pre-read?",
  options: [
    "Meetings worden vaak gecanceld of gehouden zonder voorbereiding: de cadans is onbetrouwbaar",
    "De cadans loopt, maar aanwezigheid en voorbereiding zijn inconsistent",
    "Meetings vinden meestal plaats, maar pre-reads en documentatiestandaarden worden niet afgedwongen",
    "De operating cadans wordt consistent volgehouden met pre-reads en gedocumenteerde outputs",
    "Een non-negotiable operating rhythm: aanwezigheid, pre-read en outputstandaarden afgedwongen, met cadans-health maandelijks gereviewd door de COO of CRO"
  ]
},
{
  id: 12006, pillar: 12, type: "scale",
  title: "In het afgelopen kwartaal: hoeveel GTM-initiatieven werden formeel gestopt of gedeprioriteerd — en werd die beslissing proactief genomen of pas nadat resources al verspild waren?",
  options: [
    "Initiatieven stoppen zelden: eenmaal gestart, neigt GTM-werk door te lopen ongeacht resultaten",
    "Sommige initiatieven worden stilletjes verlaten, maar formele stop-beslissingen zijn ongebruikelijk en niet gedocumenteerd",
    "Een paar initiatieven werden dit kwartaal gestopt, maar beslissingen waren reactief en kwamen na zichtbare mislukking",
    "Stop-beslissingen voor initiatieven worden gedocumenteerd, gereviewd in kwartaalplanning en gedreven door vooraf gedefinieerde performance-criteria",
    "Een bestuurde initiatief-discipline: stop/deprioriteer-criteria gedefinieerd bij launch, performance gereviewd op vaste checkpoints, en kill-beslissingen proactief gemaakt — met een post-mortem om vergelijkbare verspilling te voorkomen"
  ]
},
{
  id: 12007, pillar: 12, type: "scale",
  title: "Van je huidige GTM-initiatieven: hoeveel hebben één benoemde aansprakelijke eigenaar met gedefinieerde autoriteit — en hoeveel zijn van een commissie of hebben geen duidelijke eigenaar?",
  options: [
    "Initiatieven hebben geen formele eigenaar: iedereen en niemand is verantwoordelijk",
    "Eigenaarschap wordt informeel toegewezen, maar autoriteit en accountability zijn onduidelijk",
    "Initiatief-eigenaren bestaan, maar sponsorship op executive-niveau is inconsistent",
    "Elk GTM-initiatief heeft een gedocumenteerde eigenaar met gedefinieerde autoriteit en accountability",
    "Een formeel initiatief-governance model: één aansprakelijke eigenaar, executive sponsor, gedefinieerde succesmetrics en maandelijkse status gereviewd in het GTM-leadership forum"
  ]
},
{
  id: 12008, pillar: 12, type: "scale",
  title: "Hoe snel en voorspelbaar worden operationele blockers geëscaleerd en opgelost, en leidt je escalatiepad daadwerkelijk tot resolutie?",
  options: [
    "Geen escalatiepad: blockers stapelen op tot ze crises worden",
    "Blockers worden informeel aangekaart, maar resolutie is traag en onvoorspelbaar",
    "Een escalatieproces bestaat, maar wordt zelden gebruikt of vertrouwd",
    "Een gedefinieerd escalatiepad met response time-SLA's en gedocumenteerde resolutie-tracking",
    "Een bestuurd blocker-resolutiesysteem: escalatie-triggers, response-SLA's en resolutie-uitkomsten maandelijks getrackt in de operating review"
  ]
},
{
  id: 12009, pillar: 12, type: "scale",
  title: "Van je laatste drie governance-meetings: welk percentage gedocumenteerde acties werden afgerond door de afgesproken eigenaar, op de afgesproken deadline?",
  options: [
    "Meetings produceren discussie, maar geen gedocumenteerde beslissingen of eigenaren",
    "Sommige beslissingen worden in meetings gemaakt, maar follow-through wordt niet systematisch getrackt",
    "Beslissingen worden gedocumenteerd, maar action-tracking is inconsistent tussen meetings",
    "Alle governance-meetings produceren een decision log met eigenaren, deadlines en voortgang gereviewd in de volgende sessie",
    "Een gedisciplineerd governance operating system: elke meeting produceert een gestructureerde decision log, acties worden gereviewd aan het begin van de volgende meeting, en completion rates worden getrackt"
  ]
},
{
  id: 12010, pillar: 12, type: "scale",
  title: "Hoe systematisch en consistent is je performance management-proces, en hoe lang duurt het van het identificeren van onderpresteren tot gedocumenteerde actie ondernemen?",
  options: [
    "Performance management is volledig ad hoc: er bestaat geen systematisch proces",
    "Performance-issues worden informeel en inconsistent over managers heen aangepakt",
    "Een formeel PIP-proces bestaat, maar activatie wordt weken of maanden vertraagd",
    "Performance-issues triggeren een formele review binnen 30 dagen met gedocumenteerde verbeteringscriteria",
    "Een bestuurd performance management-systeem: onderpresteren geïdentificeerd via leading indicators, formele review binnen twee weken, en uitkomsten consistent getrackt"
  ]
},
{
  id: 12011, pillar: 12, type: "scale",
  title: "In het afgelopen kwartaal: hoeveel cross-functionele GTM-initiatieven werden vertraagd, geblokkeerd of mislukten door onduidelijk eigenaarschap of interface-gaps tussen teams?",
  options: [
    "Meerdere grote initiatieven werden vertraagd door eigenaarschap-ambiguïteit: dit is een terugkerend patroon",
    "Verschillende kleinere initiatieven werden vertraagd door onduidelijke interfaces, maar niets werd formeel aangepakt",
    "Een of twee vertragingen vonden plaats en werden informeel opgelost",
    "Eigenaarschap-gaps worden geïdentificeerd in de kwartaal-retrospective en aangepakt vóór de volgende plancyclus",
    "Cross-functionele eigenaarschap-gaps worden getrackt als governance-metric: frequentie, resolutietijd en root cause kwartaalsgewijs gereviewd"
  ]
},
{
  id: 12012, pillar: 12, type: "scale",
  title: "Hoe direct reflecteert GTM-investering en headcount-toewijzing de strategische prioriteiten in je GTM-plan?",
  options: [
    "Investeringsbeslissingen worden gedreven door inertie of interne politiek, niet door strategische prioriteiten",
    "Enige verbinding tussen strategie en resourceallocatie bestaat, maar het is los",
    "Resourceallocatie verwijst naar strategie, maar significante misalignment blijft bestaan",
    "Resourceallocatie-beslissingen worden gedocumenteerd en gemapt aan strategische prioriteiten in planning",
    "Een strategy-to-investment governance model: elke significante allocatiebeslissing gedocumenteerd tegen de strategische prioriteit die hij dient, kwartaalsgewijs gereviewd"
  ]
},
{
  id: 12013, pillar: 12, type: "scale",
  title: "Hoe gestructureerd en actie-gedreven zijn de feedback loops tussen frontline GTM-teams en executive leadership?",
  options: [
    "Geen gestructureerde feedback loop: executives horen via escalaties iets van de frontline",
    "Frontline-feedback bereikt leadership informeel en inconsistent",
    "Een feedback-mechanisme bestaat, maar outputs worden niet betrouwbaar opgevolgd",
    "Een gestructureerd kwartaal frontline-naar-executive feedbackproces met gedocumenteerde acties",
    "Een continu bidirectioneel feedbacksysteem: frontline-signalen maandelijks gereviewd, executive-reacties gedocumenteerd en action-completion getrackt"
  ]
},
{
  id: 12014, pillar: 12, type: "scale",
  title: "Hoe gedefinieerd is je proces voor het maken van strategische aanpassingen, en wat triggert een strategy review tussen jaarlijkse plancycli?",
  options: [
    "Geen gedefinieerd proces: strategiewijzigingen gebeuren reactief wanneer iets breekt",
    "Leadership bespreekt strategie-aanpassingen informeel wanneer problemen opduiken",
    "Een brede strategy review wordt getriggerd door grote events, maar criteria zijn niet gedocumenteerd",
    "Gedefinieerde performance-drempels triggeren een gestructureerde strategy review met een gedocumenteerd proces",
    "Een bestuurd strategy adaptation-protocol: gedefinieerde triggers, reviewproces en documentatie­vereisten voor alle tussen-cyclus aanpassingen"
  ]
},
{
  id: 12015, pillar: 12, type: "scale",
  title: "In het afgelopen kwartaal: hoeveel beslissingen in je wekelijkse GTM-meetings waren direct te traceren naar een kwartaaldoel — en hoeveel waren reactief op issues die niet in het plan stonden?",
  options: [
    "De meeste wekelijkse beslissingen zijn reactief: er is weinig zichtbare link met kwartaaldoelen",
    "Kwartaaldoelen bestaan, maar wekelijkse beslissingen drijven er regelmatig vanaf zonder challenge",
    "Sommige wekelijkse beslissingen zijn te traceren naar kwartaaldoelen, maar reactief werk slokt nog een groot deel van de leadership-aandacht op",
    "De meeste wekelijkse beslissingen zijn te traceren naar kwartaaldoelen, met reactief werk expliciet geïdentificeerd en ingedamd",
    "Wekelijkse operating-beslissingen zijn by design gemapt aan kwartaaldoelen: off-plan werk wordt gelogd, gekwantificeerd en gereviewd als governance health-signaal"
  ]
},
{
  id: 12016, pillar: 12, type: "scale",
  title: "In de laatste twee kwartalen: over hoeveel significante GTM-problemen hoorde executive leadership van een frontline-teamlid voordat het in een metric verscheen — en hoeveel ontdekten ze pas na een miss?",
  options: [
    "Leadership hoort meestal pas over problemen na een metric-miss of zichtbare mislukking",
    "Een paar issues worden vroeg naar boven gebracht, maar vooral door seniore leiders in plaats van frontline-teams",
    "Sommige frontline-afkomstige early warnings bereiken leadership, maar het patroon is inconsistent",
    "Meerdere materiële issues werden vroeg naar boven gebracht door frontline-teams en aangepakt vóór omzetimpact",
    "Vroege waarschuwing is een bestuurd signaal: frontline-afkomstige escalaties worden getrackt, gereviewd tegen latere uitkomsten en gebruikt als transparantie health-metric"
  ]
},
{
  id: 12017, pillar: 12, type: "scale",
  title: "Hoe duidelijk en actief gebruikt zijn je GTM-escalatiepaden, en kan elk teamlid nu beschrijven hoe ze een groot issue moeten escaleren?",
  options: [
    "Geen formele escalatiepaden: issues worden informeel afgehandeld of helemaal niet",
    "Escalatiepaden bestaan, maar zijn niet breed bekend of vertrouwd",
    "Escalatiepaden zijn gedocumenteerd, maar gebruik is inconsistent",
    "Escalatiepaden zijn gedocumenteerd, getraind en consistent gerefereerd wanneer blockers opduiken",
    "Een bestuurd escalatiesysteem: paden zijn gedocumenteerd, jaarlijks getest, en gebruikspercentages getrackt als health-metric voor organisatorische transparantie"
  ]
},
{
  id: 12018, pillar: 12, type: "scale",
  title: "In de laatste twee kwartalen: hoeveel significante GTM-risico's of -missers kwamen op executive niveau aan het licht VOORDAT ze een revenue-probleem werden, en wie bracht ze naar boven?",
  options: [
    "Significante missers werden altijd in de revenue impact-fase ontdekt: de frontline escaleerde niet vroeg",
    "Af en toe werden risico's vroeg naar boven gebracht, maar door seniore leiders, niet frontline-teams",
    "Een paar vroege escalaties gebeurden, maar het patroon is inconsistent",
    "Meerdere vroege escalaties kwamen van frontline-teams en werden aangepakt vóór omzetimpact",
    "Vroege risico-escalatie is een getrackte metric: frontline-afkomstige early warnings worden geteld, publiek erkend, en de ratio van vroege vs late detectie wordt kwartaalsgewijs gereviewd"
  ]
},
{
  id: 12019, pillar: 12, type: "scale",
  title: "Welk percentage actiepunten uit je laatste drie GTM-leadership reviews werden op tijd afgerond, door de eigenaar, op de afgesproken deadline?",
  options: [
    "We tracken geen action item-completion uit leadership-reviews",
    "Action items worden gelogd, maar completion wordt zelden gereviewd in de volgende meeting",
    "Ongeveer de helft van de action items wordt op tijd afgerond: de rest wordt herhaaldelijk doorgeschoven",
    "Meer dan 70% van de action items wordt op tijd afgerond, gereviewd aan het begin van elke meeting",
    "Action completion rate is een governance health-metric: per eigenaar getrackt, maandelijks gerapporteerd aan de CRO, en sub-drempel completion triggert een escalatiereview"
  ]
},
{
  id: 12020, pillar: 12, type: "scale",
  title: "In het afgelopen kwartaal: hoeveel GTM-beslissingen werden teruggedraaid of significant gewijzigd na implementatie — omdat de oorspronkelijke beslissing op incomplete frontline-intelligentie gebaseerd was?",
  options: [
    "Beslissings-reversals komen vaak voor: we ontdekken regelmatig dat veldrealiteit tegenspreekt wat de oorspronkelijke beslissing dreef",
    "Sommige reversals gebeuren, maar worden niet getrackt en de connectie met intelligentie-gaps wordt niet geanalyseerd",
    "Af en toe reversals worden informeel besproken, maar geen formele tracking of root cause-proces bestaat",
    "Beslissings-reversals worden getrackt, en degenen gelinkt aan intelligentie-gaps worden gereviewd in kwartaal-governance",
    "Een beslissingskwaliteit-systeem: reversals getrackt met root cause, intelligentie-gap reversals maandelijks gereviewd, en patronen voeden terug in hoe frontline-data wordt verzameld en naar boven gebracht voordat beslissingen gemaakt worden"
  ]
},

];

window.QUESTIONS = QUESTIONS;
