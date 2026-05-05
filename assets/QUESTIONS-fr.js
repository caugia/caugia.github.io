/* ===========================================================
   MASTER QUESTION ENGINE v4.8 — CANONICAL (FRENCH)
   =========================================================== */

const QUESTIONS = [
/* ===========================================================
   PILLAR 0: CONTEXT (25 QUESTIONS)
   =========================================================== */

{
  id: 1, pillar: 0, type: "group",
  title: "Parle-nous de toi et de ta boîte",
  subtitle: "Identité de l’entreprise utilisée pour calibrer les benchmarks et le contexte de reporting.",
  fields: [
    { name: "fullname",        label: "Ton nom complet" },
    { name: "role",            label: "Ta fonction ou intitulé de poste" },
    { name: "email",           label: "Adresse e-mail" },
    { name: "company",         label: "Nom de l’entreprise" },
    { name: "industry",        label: "Secteur (ex. FinTech, HRTech, DevTools)" },
    { name: "total_employees", label: "Nombre total de collaborateurs (ETP)" },
    { name: "year_founded",    label: "Année de création (AAAA)" },
    { name: "hq_region",       label: "Région du siège (US, FR, UK, DACH, Benelux, Nordics, Autre)" }
  ]
},

{
  id: 2, pillar: 0, type: "group",
  title: "Métriques clés de performance SaaS",
  subtitle: "Base financière et de rétention.",
  fields: [
    { name: "arr",              label: "ARR actuel (Annual Recurring Revenue)" },
    { name: "growth_rate",      label: "Taux de croissance annuel (%)" },
    { name: "nrr",              label: "Net Revenue Retention — NRR (%)" },
    { name: "grr",              label: "Gross Revenue Retention — GRR (%)" },
    { name: "gross_margin",     label: "Marge brute (%)" },
    { name: "monthly_burn",     label: "Burn net mensuel" },
    { name: "cash_runway",      label: "Runway de trésorerie (mois)" },
    { name: "number_of_clients",label: "Nombre de clients payants actifs" }
  ]
},

{
  id: 3, pillar: 0, type: "group",
  title: "Composition de l’équipe GTM",
  subtitle: "Équivalents temps plein uniquement.",
  fields: [
    { name: "sales_headcount",             label: "# Sales — AEs / Closers" },
    { name: "sdr_headcount",               label: "# SDR / BDR" },
    { name: "marketing_headcount",         label: "# Marketing — Demand + PMM + Brand" },
    { name: "cs_headcount",               label: "# Customer Success / Account Management" },
    { name: "revops_enablement_headcount", label: "# RevOps / Enablement" },
    { name: "product_headcount",           label: "# Produit — PM + Design uniquement (hors engineering)" },
    { name: "engineering_headcount",       label: "# Engineering / R&D — développeurs uniquement" },
    { name: "gtm_other_headcount",         label: "# Autres GTM — Partenaires, SEs" }
  ]
},

{
  id: 4, pillar: 0, type: "group",
  title: "Objectifs et efficacité",
  subtitle: "Efficacité du revenu et performance commerciale.",
  fields: [
    { name: "arr_target",         label: "Objectif ARR pour cet exercice fiscal" },
    { name: "quota_attainment",   label: "% des commerciaux atteignant leur quota — dernier trimestre complet" },
    { name: "cac_payback",        label: "Période de retour du CAC (mois)" },
    { name: "magic_number",       label: "Magic Number — net new ARR ÷ dépenses S&M du trimestre précédent" },
    { name: "avg_discount",       label: "Remise moyenne (%) sur les nouveaux logos" },
    { name: "expansion_pct",      label: "% du nouvel ARR provenant de l’upsell / expansion" },
    { name: "avg_ramp_months",    label: "Durée moyenne de montée en puissance d’un nouvel AE — mois jusqu’au quota complet" },
    { name: "sales_marketing_pct",label: "Dépenses Sales & Marketing en % du revenu" }
  ]
},

{
  id: 5, pillar: 0, type: "group",
  title: "Vélocité du funnel et contexte de risque",
  subtitle: "Là où les deals ralentissent, se bloquent ou disparaissent.",
  fields: [
    { name: "win_rate",             label: "Win rate moyen (%)" },
    { name: "sales_cycle",          label: "Durée moyenne du cycle de vente (jours)" },
    { name: "pipeline_coverage",    label: "Ratio de couverture pipeline (ex. 3,5 pour 3,5x)" },
    { name: "inbound_pipeline_pct", label: "% du pipeline qualifié provenant de l’inbound" },
    { name: "revenue_concentration",label: "% du revenu provenant des 10 premiers clients" },
    { name: "top_competitors",      label: "Top 3 des concurrents (séparés par des virgules)" },
    { name: "primary_loss_reason",  label: "Principale raison de perte — une phrase" },
    { name: "primary_churn_reason", label: "Principale raison de churn — une phrase" }
  ]
},

{
  id: 6, pillar: 0, type: "group",
  title: "Intelligence pipeline et produit",
  subtitle: "Mécaniques de conversion et d’adoption observées.",
  fields: [
    { name: "discovery_to_demo",        label: "Conversion Discovery → Démo (%)" },
    { name: "demo_to_poc",              label: "Conversion Démo → POC / Essai (%)" },
    { name: "poc_to_close",             label: "Conversion POC → Closing (%)" },
    { name: "technical_validation_loss",label: "% de deals perdus à la validation technique" },
    { name: "activation_30d",           label: "% d’utilisateurs actifs 30 jours après l’onboarding" },
    { name: "feature_penetration",      label: "% de comptes utilisant 3+ fonctionnalités clés" },
    { name: "time_to_value",            label: "Nombre moyen de jours jusqu’au premier moment de valeur" },
    { name: "product_expansion_pct",    label: "% du revenu d’expansion généré par les signaux d’usage produit" }
  ]
},

{
  id: 7, pillar: 0, type: "multi_radio",
  title: "Modèle GTM",
  subtitle: "Sélectionnez une option pour chaque question.",
  questions: [
    {
      key: "gtm_motion",
      label: "Quel est le meilleur descriptif de ta motion GTM principale ?",
      options: [
        "Inbound-led (piloté par le marketing)",
        "Outbound-led (piloté par les ventes)",
        "Product-led (PLG / self-serve)",
        "Partner-led (channel / écosystème)",
        "Enterprise Field Sales (haut niveau d’accompagnement)",
        "Hybride (mix équilibré)"
      ]
    },
    {
      key: "revenue_model",
      label: "Ton modèle de revenu principal",
      options: [
        "Abonnement SaaS (récurrent)",
        "Basé sur l’usage / consommation",
        "Transactionnel / ponctuel",
        "Marketplace / take-rate",
        "Services managés / hybride"
      ]
    }
  ]
},

{
  id: 8, pillar: 0, type: "group",
  title: "Détail churn et contrats",
  subtitle: "Structure de rétention et commerciale.",
  fields: [
    { name: "burn_multiple",       label: "Burn Multiple — burn net ÷ net new ARR" },
    { name: "logo_churn_rate",     label: "Taux annuel de churn logo — % de clients perdus" },
    { name: "revenue_churn_rate",  label: "Taux annuel de churn revenu — % d’ARR perdu" },
    { name: "avg_contract_length", label: "Durée moyenne des contrats (mois)" }
  ]
},

{
  id: 9, pillar: 0, type: "multi_radio",
  title: "Marché cible",
  subtitle: "Sélectionnez une option pour chaque question.",
  questions: [
    {
      key: "target_segment",
      label: "Segment cible principal (stratégie déclarée)",
      options: [
        "Rabbit / SMB (< 10 000 € ACV)",
        "Deer / Mid-Market (10 000 € – 50 000 € ACV)",
        "Elephant / Enterprise (50 000 € – 250 000 € ACV)",
        "Whale / Strategic (250 000 €+ ACV)"
      ]
    },
    {
      key: "economic_buyer",
      label: "Qui est ton acheteur économique principal ?",
      options: [
        "Dirigeant C-Level (CEO, CFO, CTO)",
        "VP / Directeur de département",
        "Team Lead / Manager",
        "Contributeur individuel / Utilisateur final",
        "Technique / IT / Achats"
      ]
    }
  ]
},

{
  id: 10, pillar: 0, type: "group",
  title: "Efficacité et détail du funnel",
  subtitle: "Métriques d’efficacité secondaires.",
  fields: [
    { name: "ltv_cac",              label: "Ratio LTV:CAC" },
    { name: "pct_deals_no_discount",label: "% de deals clos au prix catalogue" },
    { name: "outbound_pipeline_pct",label: "% du pipeline qualifié provenant de l’outbound" },
    { name: "mql_to_sql_rate",      label: "Taux de conversion MQL vers SQL (%)" }
  ]
},

{
  id: 11, pillar: 0, type: "multi_radio",
  title: "Stade de l’entreprise",
  subtitle: "Sélectionnez une option pour chaque question.",
  questions: [
    {
      key: "operating_phase",
      label: "Quelle phase opérationnelle décrit le mieux ta boîte aujourd’hui ?",
      options: [
        "Land & Expand — Croissance rapide, investissement agressif sur les nouveaux logos. Le burn est intentionnel.",
        "Grow & Optimize — Passage à l’échelle du revenu tout en améliorant l’efficacité. La Rule of 40 est à portée.",
        "Efficiency First — La rentabilité est l’objectif principal. Les nouveaux logos sont secondaires par rapport au NRR et à la marge.",
        "Transition / Repositionnement — Changement actif de segment, motion, produit ou marché.",
        "Stabilisation / Recovery — Protection de la base de revenu et réduction du risque avant la prochaine phase de croissance."
      ]
    },
    {
      key: "funding_stage",
      label: "Stade de financement",
      options: [
        "Bootstrappé / Rentable",
        "Pre-Seed / Seed",
        "Series A",
        "Series B",
        "Series C+",
        "Private Equity / Coté en bourse"
      ]
    }
  ]
},

{
  id: 12, pillar: 0, type: "group",
  title: "Contexte équipe et sources de pipeline",
  subtitle: "Couverture géographique et répartition du pipeline par canal.",
  fields: [
    { name: "sales_leadership_headcount",label: "# Leadership Sales — VP / Head / Managers" },
    { name: "active_countries",          label: "Nombre de pays avec des ventes actives ou des clients" },
    { name: "inbound_pct",  label: "% Pipeline — Inbound (contenu, SEO, marque, événements)", type: "number", min: 0, max: 100, placeholder: "ex. 40" },
    { name: "outbound_pct", label: "% Pipeline — Outbound (SDR, prospection AE, cold)",  type: "number", min: 0, max: 100, placeholder: "ex. 30" },
    { name: "plg_pct",      label: "% Pipeline — Product-led (PLG, self-serve, essai)",   type: "number", min: 0, max: 100, placeholder: "ex. 20" },
    { name: "partner_pct",  label: "% Pipeline — Partenaires (channel, écosystème, référencement)",type: "number", min: 0, max: 100, placeholder: "ex. 10" }
  ]
},

{
  id: 13, pillar: 0, type: "group",
  title: "Performance actuelle vs objectif",
  subtitle: "Ce que le leadership suit aujourd’hui et où se situe l’écart.",
  fields: [
    { name: "current_primary_metric",       label: "Métrique principale suivie par le leadership — ex. ARR, NRR, EBITDA, Rule of 40, Win Rate, Burn Multiple" },
    { name: "current_primary_metric_value", label: "Valeur actuelle de cette métrique" },
    { name: "current_primary_metric_goal",  label: "Valeur cible pour cet exercice fiscal" },
    { name: "leadership_bottleneck",        label: "Principal goulot d’étranglement perçu par le leadership — une phrase" }
  ]
},

{
  id: 14, pillar: 0, type: "radio",
  title: "Quelle est l’urgence de résoudre ton principal goulot d’étranglement GTM ?",
  subtitle: "Choisis l’option qui colle à ta réalité opérationnelle.",
  options: [
    "Faible — Nous avons le temps de résoudre cela correctement",
    "Modérée — Cela nécessite une attention dans les deux prochains trimestres",
    "Élevée — Cela bloque la croissance actuellement",
    "Critique — Cela menace l’entreprise sous 90 jours"
  ]
},

{
  id: 15, pillar: 0, type: "multi_radio",
  title: "Profil produit",
  subtitle: "Sélectionnez une option pour chaque question.",
  questions: [
    {
      key: "product_category",
      label: "Type de catégorie produit",
      options: [
        "Système de référence (ex. CRM, ERP, SIRH)",
        "Système d’engagement (ex. SEP, Collaboration, Messaging)",
        "Solution ponctuelle / Outil de workflow",
        "Infrastructure / API / Outil développeur",
        "Data / Analytics / AI / BI"
      ]
    },
    {
      key: "product_complexity",
      label: "Comment tu décrirais la complexité de ton produit pour un acheteur type ?",
      options: [
        "Simple / Plug & Play — Opérationnel en quelques heures, aucun support technique nécessaire",
        "Modérément complexe — Configuration basique, opérationnel en quelques jours",
        "Complexe / Configurable — Nécessite un paramétrage, une formation et un processus d’onboarding défini",
        "Très complexe / Sur mesure — Implémentation de plusieurs mois, solutions engineering sur mesure requises"
      ]
    }
  ]
},

{
  id: 16, pillar: 0, type: "group",
  title: "Objectif à 12 mois",
  subtitle: "Ce que l’entreprise doit atteindre dans les 12 prochains mois.",
  fields: [
    { name: "goal_12m_primary_metric",   label: "Métrique de succès principale à 12 mois — ex. ARR, NRR, Rule of 40, EBITDA %" },
    { name: "goal_12m_primary_target",   label: "Valeur cible à 12 mois" },
    { name: "goal_12m_secondary_metric", label: "Métrique secondaire (12 mois)" },
    { name: "goal_12m_secondary_target", label: "Valeur cible secondaire" }
  ]
},

{
  id: 17, pillar: 0, type: "radio",
  title: "Quel est ton axe stratégique principal pour les 12 prochains mois ?",
  subtitle: "Répondez pour ton segment de revenu principal et ta motion GTM principale, sauf si une question te demande explicitement de distinguer.",
  options: [
    "Acquisition agressive de nouveaux logos — Le volume de nouveaux clients avant tout",
    "Efficacité et rentabilité — Trésorerie, amélioration des marges, réduction du burn",
    "Expansion et NRR — Upsell, cross-sell et rétention comme moteur principal de revenu",
    "Entrée sur un nouveau marché — Nouvelle géographie, segment ou motion GTM",
    "Leadership de catégorie — Marque, positionnement et défensibilité à long terme"
  ]
},

{
  id: 18, pillar: 0, type: "radio",
  title: "Quel est ton symptôme GTM le plus visible actuellement ?",
  options: [
    "Pas assez de leads — Le haut du funnel est trop mince",
    "Faible conversion — Le pipeline existe mais les deals ne se closent pas",
    "Deals au point mort / Cycles longs — Les deals avancent lentement ou deviennent silencieux",
    "Churn ou downsell élevé — Les clients partent ou la valeur contractuelle diminue",
    "Désalignement des équipes — L’exécution est incohérente ou la coordination se dégrade"
  ]
},

{
  id: 19, pillar: 0, type: "radio",
  title: "Quelle est la cause profonde selon le leadership ?",
  options: [
    "Lacunes de talent ou de recrutement — Nous n’avons pas les bonnes personnes aux bons postes",
    "Dette technologique ou de données — Les systèmes sont lents, défaillants ou inexistants",
    "Contraintes budgétaires — Nous ne pouvons pas investir ce que la stratégie exige",
    "Ambiguïté stratégique — Le leadership n’est pas pleinement aligné sur la direction ou les priorités",
    "Lacunes produit — Le produit ne peut pas supporter la motion GTM dont nous avons besoin"
  ]
},

{
  id: 20, pillar: 0, type: "group",
  title: "Objectif à 24 mois",
  subtitle: "Ce à quoi l’entreprise doit ressembler dans 24 mois.",
  fields: [
    { name: "goal_24m_primary_metric",   label: "Métrique de succès principale à 24 mois" },
    { name: "goal_24m_primary_target",   label: "Valeur cible à 24 mois" },
    { name: "goal_24m_secondary_metric", label: "Métrique secondaire (24 mois)" },
    { name: "goal_24m_secondary_target", label: "Valeur cible secondaire" },
    { name: "goal_24m_operating_model",  label: "Modèle opérationnel cible à 24 mois — ex. Rule of 40, EBITDA positif, prêt pour une sortie, prêt pour une IPO" }
  ]
},

{
  id: 21, pillar: 0, type: "radio",
  title: "Combien de segments commerciaux tu adresses activement aujourd’hui ?",
  subtitle: "Un segment est un groupe d’acheteurs distinct avec un ACV, une motion ou une proposition de valeur significativement différents.",
  options: [
    "1 segment — Un seul type d’acheteur et une seule motion",
    "2 segments — Deux groupes d’acheteurs distincts",
    "3 segments — Trois groupes d’acheteurs distincts",
    "4 segments ou plus"
  ]
},

{
  id: 22, pillar: 0, type: "group",
  title: "Performance du segment 1",
  subtitle: "Ton segment principal ou le plus important en contribution ARR.",
  fields: [
    { name: "segment_1_name",     label: "Segment 1 — Nom ou description (ex. Mid-Market SaaS)" },
    { name: "segment_1_arr_pct",  label: "Segment 1 — Contribution ARR (%)" },
    { name: "segment_1_acv",      label: "Segment 1 — ACV moyen" },
    { name: "segment_1_win_rate", label: "Segment 1 — Win Rate (%)" },
    { name: "segment_1_nrr",      label: "Segment 1 — NRR (%)" },
    { name: "segment_1_priority", label: "Segment 1 — Priorité stratégique",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

{
  id: 23, pillar: 0, type: "group",
  title: "Performance du segment 2",
  subtitle: "Ton deuxième segment.",
  fields: [
    { name: "segment_2_name",     label: "Segment 2 — Nom" },
    { name: "segment_2_arr_pct",  label: "Segment 2 — Contribution ARR (%)" },
    { name: "segment_2_acv",      label: "Segment 2 — ACV moyen" },
    { name: "segment_2_win_rate", label: "Segment 2 — Win Rate (%)" },
    { name: "segment_2_nrr",      label: "Segment 2 — NRR (%)" },
    { name: "segment_2_priority", label: "Segment 2 — Priorité",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

{
  id: 24, pillar: 0, type: "multi_radio",
  title: "Contexte de marché et reporting",
  subtitle: "Sélectionnez une option pour chaque question.",
  questions: [
    {
      key: "market_adoption",
      label: "Phase d’adoption du marché",
      options: [
        "Émergent — L’éducation de la catégorie est encore nécessaire avant de vendre",
        "Croissance précoce — La notoriété de la catégorie existe, la différenciation produit est le principal enjeu",
        "Croissance établie — Plusieurs alternatives crédibles, la concurrence s’intensifie",
        "Mature — La catégorie se commoditise, la rétention et l’efficacité comptent plus que l’acquisition"
      ]
    },
    {
      key: "currency",
      label: "Devise principale de reporting",
      options: [
        "USD ($)",
        "EUR (€)",
        "GBP (£)",
        "AUD ($)",
        "CAD ($)",
        "Autre"
      ]
    }
  ]
},

{
  id: 25, pillar: 0, type: "group",
  title: "Performance du segment 3",
  subtitle: "Ton troisième segment.",
  fields: [
    { name: "segment_3_name",     label: "Segment 3 — Nom" },
    { name: "segment_3_arr_pct",  label: "Segment 3 — Contribution ARR (%)" },
    { name: "segment_3_acv",      label: "Segment 3 — ACV moyen" },
    { name: "segment_3_win_rate", label: "Segment 3 — Win Rate (%)" },
    { name: "segment_3_nrr",      label: "Segment 3 — NRR (%)" },
    { name: "segment_3_priority", label: "Segment 3 — Priorité",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

/* ===========================================================
   PILLAR 1: GTM STRATEGY & LEADERSHIP (20 QUESTIONS)
   =========================================================== */

{
  id: 1001, pillar: 1, type: "scale",
  title: "Au cours des 12 derniers mois, combien d'initiatives GTM ont été formellement arrêtées, déprioritisées ou définancées après une revue trimestrielle ?",
  subtitle: "Réponds pour ton segment de revenu principal et ta motion GTM principale, sauf si une question te demande explicitement de distinguer.",
  options: [
    "Nous n'avons formellement arrêté aucune initiative : tout ce que nous démarrons continue",
    "Une ou deux choses ont été discrètement abandonnées mais sans processus de revue formel",
    "Quelques initiatives ont été formellement revues et arrêtées sur la base de données de performance",
    "Nous avons un processus trimestriel documenté d'arrêt : les initiatives sont stoppées avec une justification documentée",
    "Notre revue trimestrielle arrête plus d'initiatives qu'elle n'en lance : la discipline des ressources est appliquée systématiquement"
  ]
},
{
  id: 1002, pillar: 1, type: "scale",
  title: "À quel point tu as explicitement défini quels segments de marché, verticaux ou types de deals tu ne poursuivras pas ?",
  options: [
    "Aucune exclusion définie : nous poursuivons tout ce qui ressemble à un deal",
    "Consensus informel mais rien de documenté ou d'appliqué",
    "Certaines exclusions existent mais ne sont pas appliquées de façon cohérente dans les ventes",
    "Critères d'exclusion écrits, revus lors des appels de qualification du pipeline",
    "Règles explicites d'ICP négatif appliquées dans le scoring CRM, la conception des quotas et la rémunération des commerciaux"
  ]
},
{
  id: 1003, pillar: 1, type: "scale",
  title: "Lorsque deux équipes GTM sont en concurrence pour le même budget ou headcount, comment ce conflit est-il résolu, et en combien de temps ?",
  options: [
    "Les conflits sont escaladés au CEO et résolus de façon informelle sur plusieurs semaines",
    "Le leadership en discute en réunion mais la résolution est lente et souvent politique",
    "Un cadre de priorisation documenté existe mais la résolution des conflits prend encore plusieurs cycles",
    "Une autorité décisionnelle définie résout les conflits de ressources en une semaine avec une justification documentée",
    "Les conflits de ressources sont résolus au niveau de la cadence opérationnelle : sous 48 heures, en utilisant une hiérarchie de priorités pré-établie"
  ]
},
{
  id: 1004, pillar: 1, type: "scale",
  title: "À quel point ta roadmap GTM pour les 12-18 prochains mois est-elle détaillée et cadrée dans le temps ?",
  options: [
    "Pas de feuille de route : nous fonctionnons de trimestre en trimestre de façon réactive",
    "Objectifs trimestriels approximatifs sans jalons ni responsables",
    "Un plan sur 12 mois existe avec des jalons majeurs mais une responsabilisation limitée",
    "Une feuille de route séquencée avec des responsables, des métriques de succès et des revues trimestrielles",
    "Une feuille de route GTM entièrement phasée avec des jalons de validation, des responsables et un reporting au niveau du board"
  ]
},
{
  id: 1005, pillar: 1, type: "scale",
  title: "À quel point les releases produit et les décisions de roadmap sont-elles connectées aux plans de lancement GTM et à leur calendrier ?",
  options: [
    "Le produit est livré indépendamment : le GTM découvre les releases au lancement",
    "Une certaine coordination mais le GTM est rarement présent lors des décisions de roadmap",
    "Des synchronisations régulières produit-GTM existent mais la planification en aval est souvent ad-hoc",
    "Les cycles de planification produit et GTM sont alignés avec des revues de jalons partagées",
    "Un calendrier unifié produit-GTM pilote le séquencement, la préparation au lancement et l'activation commerciale"
  ]
},
{
  id: 1006, pillar: 1, type: "scale",
  title: "Comment les objectifs GTM sont-ils définis, suivis et revus au sein de l'équipe dirigeante ?",
  options: [
    "Les objectifs sont fixés une fois par an et rarement revus",
    "Des objectifs existent mais les revues de progression sont irrégulières ou ignorées",
    "Des revues mensuelles ont lieu mais la qualité des données limite la qualité des discussions",
    "OKR ou KPI trimestriels suivis dans un système partagé avec des revues régulières du leadership",
    "Une cadence opérationnelle GTM formelle : métriques hebdomadaires, revues mensuelles, rétrospectives trimestrielles avec des actions documentées"
  ]
},
{
  id: 1007, pillar: 1, type: "scale",
  title: "À quel point ta stratégie GTM articule-t-elle explicitement pourquoi tu gagnes, pourquoi tu perds, et ce qui te rend défendable ?",
  options: [
    "Aucune articulation formelle : la différenciation est improvisée lors des appels",
    "Un énoncé de positionnement de haut niveau existe mais manque d'ancrage opérationnel",
    "Thèmes de victoire identifiés de façon anecdotique à partir des retours commerciaux",
    "Un avantage concurrentiel documenté avec des preuves win/loss à l'appui",
    "Une architecture de différenciation validée : testée auprès des acheteurs, mise à jour trimestriellement"
  ]
},
{
  id: 1008, pillar: 1, type: "scale",
  title: "Dans ton budget actuel, quelle motion ou quel segment reçoit le plus d'investissement: et cette allocation est-elle explicitement documentée et défendue avec des données de performance ?",
  options: [
    "Les décisions budgétaires sont prises sur la base des dépenses de l'année précédente avec une revue stratégique minimale",
    "Une certaine priorisation existe mais elle est largement politique ou basée sur les relations",
    "Les investissements sont mappés aux priorités GTM mais le suivi du ROI est faible",
    "Un cadre de priorisation formel lie les dépenses aux résultats de pipeline et de revenu",
    "Les investissements GTM sont classés par ROI modélisé, revus trimestriellement et réalloués sur la base de données de performance"
  ]
},
{
  id: 1009, pillar: 1, type: "scale",
  title: "Laquelle de tes motions GTM: inbound, outbound, PLG, channel: génère le revenu le plus efficient, et quelles données le confirment ?",
  options: [
    "Aucune visibilité par motion : les sources de pipeline ne sont pas suivies",
    "Estimations approximatives basées sur l'intuition des commerciaux ou les hypothèses marketing",
    "Des données de pipeline par motion existent mais ne sont pas utilisées de façon cohérente dans la planification",
    "Le CAC, le win rate et la durée du cycle sont suivis par motion et revus trimestriellement",
    "Chaque motion dispose de sa propre vue de type P&L : efficacité, retour sur investissement et capacité sont modélisés et mis à jour"
  ]
},
{
  id: 1010, pillar: 1, type: "scale",
  title: "Au cours des 12 derniers mois, combien de fois un développement du marché ou concurrentiel t'a-t-il amené à modifier matériellement une priorité GTM, une allocation budgétaire ou une motion ?",
  options: [
    "Notre stratégie n'a pas matériellement changé en réponse aux signaux du marché au cours de la dernière année",
    "Nous avons discuté de changements mais n'avons pas formellement ajusté les priorités ou les budgets",
    "Un ajustement significatif a été réalisé et documenté",
    "Deux à trois ajustements documentés ont eu lieu en réponse aux signaux du marché avec une justification explicite",
    "Nous avons un processus continu de veille du marché qui produit au moins un ajustement stratégique documenté par trimestre"
  ]
},
{
  id: 1011, pillar: 1, type: "scale",
  title: "À quel point tu disposes de playbooks GTM spécifiques par segment ou persona que les commerciaux utilisent activement ?",
  options: [
    "Pas de playbooks : chaque commercial opère indépendamment",
    "Un playbook de vente générique existe mais n'est pas spécifique aux segments",
    "Des playbooks existent pour les segments principaux mais l'adoption par les commerciaux est incohérente",
    "Les playbooks par segment sont utilisés dans l'onboarding, revus lors des deal reviews et mis à jour trimestriellement",
    "Un système de playbooks modulaire par segment, persona et étape de deal : avec un suivi d'utilisation via CRM ou plateforme d'enablement"
  ]
},
{
  id: 1012, pillar: 1, type: "scale",
  title: "Lorsqu'un nouveau collaborateur GTM rejoint l'équipe, combien de temps faut-il avant qu'il puisse prendre une décision alignée avec ta stratégie GTM, sans demander au leadership ?",
  options: [
    "La plupart des nouveaux arrivants n'intériorisent jamais pleinement la stratégie : ils s'en remettent au leadership indéfiniment",
    "Il faut six mois ou plus avant qu'un nouvel arrivant puisse prendre des décisions alignées en autonomie",
    "Trois à six mois : la stratégie est documentée mais complexe à assimiler",
    "Quatre à huit semaines : l'onboarding inclut des sessions de stratégie structurées avec des cadres de décision",
    "Deux à quatre semaines : la stratégie est documentée, enseignée dans l'onboarding et vérifiée via une évaluation d'orientation structurée"
  ]
},
{
  id: 1013, pillar: 1, type: "scale",
  title: "À quel point ta stratégie GTM est-elle équilibrée entre l'acquisition de nouveaux logos et l'expansion des comptes existants ?",
  options: [
    "Presque entièrement centré sur les nouveaux logos : l'expansion est non structurée",
    "L'expansion se fait de façon réactive mais aucune motion ou objectif dédié n'existe",
    "Des objectifs distincts pour les nouveaux logos et l'expansion existent mais les ressources sont fortement orientées vers les nouveaux logos",
    "Capacité d'expansion dédiée, objectifs et playbooks en parallèle de la motion nouveaux logos",
    "Un modèle à double moteur : nouveaux logos et expansion sont dotés en ressources, mesurés et revus indépendamment"
  ]
},
{
  id: 1014, pillar: 1, type: "scale",
  title: "Concrètement, comment tu testes de nouvelles approches GTM avant d'engager des ressources pour les déployer à grande échelle ?",
  options: [
    "Les nouvelles initiatives sont lancées à grande échelle sans pilotes",
    "Des tests ponctuels à petite échelle ont lieu mais sans critères de succès définis",
    "Des pilotes sont menés mais les résultats sont évalués de façon informelle et incohérente",
    "Critères de pilote définis, seuils de succès et décisions de mise à l'échelle documentés avant le lancement",
    "Un playbook formel de test et de mise à l'échelle : hypothèse, cohorte test, période de mesure et critères go/no-go pour chaque initiative"
  ]
},
{
  id: 1015, pillar: 1, type: "scale",
  title: "À quel point ta stratégie GTM guide-t-elle directement les plans de recrutement et la modélisation de capacité ?",
  options: [
    "Les décisions de recrutement sont prises de façon réactive sur la base de remplacements ou de l'instinct des dirigeants",
    "La stratégie GTM et les plans de recrutement sont au mieux faiblement connectés",
    "Les plans annuels de headcount font référence à la stratégie GTM mais ne sont pas mis à jour en cours d'année",
    "Des revues trimestrielles de capacité traduisent les objectifs GTM en plans de recrutement par rôle",
    "Un modèle de capacité glissant : objectifs de pipeline, hypothèses de montée en puissance et séquencement des recrutements sont mis à jour chaque trimestre"
  ]
},
{
  id: 1016, pillar: 1, type: "scale",
  title: "Quel pourcentage de ton pipeline actuel provient de l'extérieur de ton ICP principal, et comment le leadership réagit-il à ce chiffre ?",
  options: [
    "Nous ne suivons pas le pipeline ICP vs non-ICP : tout le pipeline est traité à parts égales",
    "Du pipeline hors ICP existe mais il n'est ni mesuré ni gouverné",
    "Nous le suivons mais le pipeline hors ICP est accepté car nous avons besoin du revenu",
    "Le pipeline hors ICP est suivi, gouverné et les commerciaux ne sont pas incités à le poursuivre",
    "La conformité ICP est une métrique de quota : les commerciaux sont explicitement pénalisés pour la poursuite de deals hors ICP au-delà d'un seuil défini"
  ]
},
{
  id: 1017, pillar: 1, type: "scale",
  title: "À quel point ta stratégie GTM repose-t-elle sur des preuves de marché validées plutôt que sur des hypothèses du leadership ?",
  options: [
    "La stratégie est principalement construite sur l'opinion du fondateur ou des dirigeants",
    "Certaines conversations clients alimentent la stratégie mais pas de façon systématique",
    "Une recherche VOC ou de marché annuelle alimente le cycle de planification",
    "Des analyses win/loss structurées, des entretiens clients et des données de marché sont revus avant les mises à jour stratégiques",
    "La stratégie GTM est ancrée dans une boucle de preuves continue : entretiens acheteurs, données de deals et signaux de marché revus trimestriellement"
  ]
},
{
  id: 1018, pillar: 1, type: "scale",
  title: "Au cours des quatre derniers trimestres, combien de fois ton mix de revenu réel, par segment, motion ou géographie, a-t-il matériellement différé de ce que ta stratégie GTM prédisait ?",
  options: [
    "Nous ne suivons pas le mix de revenu réel par rapport aux prédictions stratégiques",
    "Des différences significatives existent mais elles ne sont pas formellement revues",
    "Les différences de mix sont discutées annuellement dans la planification mais non suivies trimestre par trimestre",
    "Une revue trimestrielle du mix de revenu réel vs prédit produit une analyse documentée des écarts",
    "L'écart de mix est une métrique au niveau du board : suivi mensuellement, expliqué trimestriellement et qui entraîne un ajustement stratégique lorsque la déviation dépasse les seuils définis"
  ]
},
{
  id: 1019, pillar: 1, type: "scale",
  title: "Au dernier trimestre, lorsque deux équipes GTM étaient en concurrence pour la même ressource ou priorité, comment cela a-t-il été résolu: et la résolution était-elle liée à des critères stratégiques documentés ?",
  options: [
    "La stratégie influence rarement les décisions quotidiennes : l'exécution est guidée par l'urgence",
    "La stratégie est occasionnellement référencée mais ne gouverne pas les arbitrages de ressources",
    "La plupart des leaders font référence à la stratégie dans la planification mais pas dans les décisions opérationnelles",
    "La stratégie est utilisée pour arbitrer les conflits de ressources et les décisions de priorisation",
    "La stratégie GTM est le prisme décisionnel principal : toutes les décisions majeures de ressources, recrutement et investissement sont testées par rapport à elle"
  ]
},
{
  id: 1020, pillar: 1, type: "scale",
  title: "Ton plan GTM actuel adresse-t-il explicitement à la fois les objectifs d'exécution à 12 mois et les évolutions du modèle opérationnel nécessaires pour maintenir la performance à 24 mois ?",
  options: [
    "La stratégie est entièrement focalisée sur les objectifs court terme : aucune vision structurée du modèle opérationnel à 24 mois n'existe",
    "Une direction long terme existe de façon informelle mais n'est pas connectée aux décisions GTM actuelles",
    "Les objectifs à 12 mois sont définis mais les implications du modèle opérationnel à 24 mois ne sont pas explicitement planifiées",
    "Les objectifs court terme et le modèle opérationnel à 24 mois sont tous deux documentés et revus dans la planification",
    "Une stratégie à double horizon gouverne les décisions GTM : les objectifs d'exécution à 12 mois et les exigences de capacité à 24 mois sont maintenus en parallèle, et les arbitrages entre eux sont explicitement décidés"
  ]
},

/* ===========================================================
   PILLAR 2: MARKET INTELLIGENCE (20 QUESTIONS)
   =========================================================== */

{
  id: 2001, pillar: 2, type: "scale",
  title: "À quel point ton Ideal Customer Profile est-il défini, et quand a-t-il été validé pour la dernière fois par rapport aux données closed-won ?",
  subtitle: "Réponds pour ton segment de revenu principal et ta motion GTM principale, sauf si une question te demande explicitement de distinguer.",
  options: [
    "Pas d'ICP défini : nous poursuivons toute entreprise qui manifeste de l'intérêt",
    "Un ICP approximatif existe basé sur l'intuition du fondateur, non validé",
    "Un document ICP existe mais n'a pas été validé par rapport aux données de deals depuis plus d'un an",
    "Critères ICP validés par rapport aux données de cohortes closed-won au cours des 12 derniers mois",
    "L'ICP est un modèle de scoring vivant : signaux firmographiques, technographiques et comportementaux validés par rapport aux données de revenu trimestriellement"
  ]
},
{
  id: 2002, pillar: 2, type: "scale",
  title: "Comment ta liste de comptes cibles est-elle construite, maintenue et priorisée pour les ventes et le marketing ?",
  options: [
    "Pas de liste de comptes formelle : les commerciaux s'auto-sourçent selon leur jugement personnel",
    "Une liste statique construite une fois, non régulièrement revue ni mise à jour",
    "Une liste existe mais le scoring et la priorisation sont incohérents d'un commercial à l'autre",
    "Une liste de comptes basée sur les données, rafraîchie trimestriellement avec des critères de scoring définis",
    "Une liste de comptes dynamique et hiérarchisée : mise à jour mensuellement, scorée par adéquation ICP et signaux d'achat, avec un responsable assigné par compte"
  ]
},
{
  id: 2003, pillar: 2, type: "scale",
  title: "Comment tu collectes, tu synthétises et tu agis sur l'intelligence relative aux points de douleur et aux déclencheurs d'achat des clients ?",
  options: [
    "Pas de processus structuré : les insights proviennent de conversations informelles des commerciaux",
    "Les retours clients sont collectés en ad-hoc mais rarement synthétisés",
    "Des appels ou enquêtes VOC ont lieu occasionnellement mais les résultats ne sont pas utilisés de façon cohérente",
    "Un programme VOC structuré avec des résultats documentés revus dans la planification GTM",
    "Une boucle continue d'intelligence client : entretiens, signaux de deals et données support synthétisés et revus mensuellement"
  ]
},
{
  id: 2004, pillar: 2, type: "scale",
  title: "À quel point ton modèle de segmentation est-il appliqué côté ventes, marketing et produit ?",
  options: [
    "Pas de segmentation : tous les comptes sont traités de la même manière quelle que soit la taille ou l'adéquation",
    "La segmentation existe conceptuellement mais ne se reflète pas dans le routage, le pricing ou le messaging",
    "Les segments sont définis mais appliqués de façon incohérente: différentes équipes utilisent des définitions différentes",
    "La segmentation est codifiée dans le CRM, utilisée dans le routage et le ciblage des campagnes, revue annuellement",
    "Une architecture de segmentation unifiée gouverne le CRM, le pricing, le ciblage des campagnes et la planification de capacité: revue trimestriellement et appliquée de façon cohérente"
  ]
},
{
  id: 2005, pillar: 2, type: "scale",
  title: "Comment tu surveilles les tendances du marché et les mouvements des concurrents, et à quelle vitesse les insights atteignent-ils les décideurs ?",
  options: [
    "Pas de veille : nous apprenons les mouvements des concurrents quand les prospects les mentionnent",
    "Veille occasionnelle sur LinkedIn ou les actualités par des individus, non partagée systématiquement",
    "La veille concurrentielle et de marché existe mais n'est ni structurée ni régulière",
    "Une cadence de veille définie avec des résultats partagés aux responsables GTM mensuellement",
    "Un flux continu d'intelligence de marché : sources suivies, signaux triés et briefings livrés au leadership sur une cadence définie"
  ]
},
{
  id: 2006, pillar: 2, type: "scale",
  title: "Cite les deux principaux freins empêchant tes acheteurs cibles d'adopter ton produit. Sont-ils basés sur des entretiens acheteurs documentés ou déduits des retours commerciaux ?",
  options: [
    "Pas de compréhension documentée : les commerciaux supposent savoir ce qui compte",
    "Compréhension anecdotique des commerciaux seniors, non codifiée",
    "Critères de décision capturés de façon informelle dans les notes CRM mais non synthétisés",
    "Critères de décision documentés par segment, validés par des entretiens win/loss",
    "Une carte de critères de décision validée : pondérée par segment et taille de deal, mise à jour à chaque revue win/loss trimestrielle"
  ]
},
{
  id: 2007, pillar: 2, type: "scale",
  title: "Dans tes 10 derniers deals perdus, à quelle fréquence un persona bloqueur a-t-il fait dérailler la décision: et ce schéma est-il documenté dans une carte d'influence formelle ?",
  options: [
    "Pas de mapping de personas : les commerciaux ciblent quiconque répond à la prospection",
    "Une connaissance informelle des personas clés existe parmi les commerciaux seniors, mais elle n'est pas documentée",
    "Un persona acheteur principal est documenté, mais les rôles de champion et de bloqueur sont mal compris",
    "Une carte multi-personas existe par segment, validée par des deal reviews et des entretiens win/loss",
    "Une carte d'influence validée documente les rôles de champion, acheteur économique et bloqueur par segment et taille de deal: mise à jour trimestriellement et utilisée dans la qualification des deals"
  ]
},
{
  id: 2008, pillar: 2, type: "scale",
  title: "Tu peux citer les deux principaux freins empêchant tes acheteurs cibles d'adopter ton produit: et sont-ils basés sur des entretiens acheteurs ou déduits des deals perdus ?",
  options: [
    "Pas d'insight : les freins à l'adoption ne sont pas étudiés",
    "Des hypothèses existent basées sur les objections commerciales, non validées en externe",
    "Certains freins à l'adoption identifiés par l'analyse des deals perdus",
    "Freins à l'adoption documentés et validés par des entretiens acheteurs et une analyse du churn",
    "Un modèle documenté des freins à l'adoption : par segment, persona et étape de deal, mis à jour avec les données de marché et de deals trimestriellement"
  ]
},
{
  id: 2009, pillar: 2, type: "scale",
  title: "Qu'est-ce qui pousse les clients à passer des outils concurrents au vôtre: ou à quitter le vôtre: et avec quelle précision le stu as ?",
  options: [
    "Pas d'insight structuré sur les dynamiques de switch",
    "Compréhension informelle à partir de quelques anecdotes commerciales",
    "Déclencheurs de switch identifiés par des appels win/loss occasionnels",
    "Déclencheurs de switch documentés par segment, validés par des entretiens win/loss structurés",
    "Un modèle d'intelligence des déclencheurs de switch : schémas de déplacement des concurrents suivis et revus dans la planification GTM trimestriellement"
  ]
},
{
  id: 2010, pillar: 2, type: "scale",
  title: "Ton équipe suit-elle les tendances macroéconomiques et sectorielles qui façonnent les budgets des acheteurs: et cela alimente-t-il directement tes priorités GTM ?",
  options: [
    "Pas de conscience : les tendances macro ne font pas partie de la planification GTM",
    "Conscience générale mais non connectée à la stratégie de deals ou de segments",
    "Le contexte macro est discuté en réunions du leadership mais non opérationnalisé",
    "Tendances macro intégrées dans la planification GTM annuelle avec des hypothèses de scénarios explicites",
    "Les signaux macro sont suivis en continu et alimentent directement la priorisation des segments et les ajustements de messaging"
  ]
},
{
  id: 2011, pillar: 2, type: "scale",
  title: "À quel point ton modèle de segmentation de marché est-il bien défini et opérationnellement cohérent côté ventes, marketing et produit ?",
  options: [
    "Pas de segmentation : tous les comptes sont traités de la même manière",
    "La segmentation existe conceptuellement mais ne se reflète pas dans les processus ou les outils",
    "Les segments sont définis mais appliqués de façon incohérente entre les équipes",
    "La segmentation est codifiée dans le CRM, utilisée dans le routage et revue annuellement",
    "Une architecture de segmentation unifiée : cohérente côté CRM, le ciblage des campagnes, le pricing et les modèles de capacité, revue trimestriellement"
  ]
},
{
  id: 2012, pillar: 2, type: "scale",
  title: "À quel point ta définition d'ICP est-elle alignée avec les segments qui génèrent le plus d'ARR, le CAC le plus bas et le meilleur NRR ?",
  options: [
    "Pas de connexion : l'ICP n'est pas lié aux données de performance financière",
    "Hypothèses approximatives sur les segments les plus performants, non validées",
    "L'ICP et les données de revenu sont comparés annuellement mais non opérationnalisés",
    "Le scoring ICP est calibré par rapport aux données ARR, CAC et NRR revues au dernier trimestre",
    "L'ICP est un modèle pondéré par le revenu : mis à jour chaque trimestre avec une analyse de cohortes closed-won et des métriques d'efficacité"
  ]
},
{
  id: 2013, pillar: 2, type: "scale",
  title: "Quels personas accélèrent le plus systématiquement la vélocité des deals dans tes comptes principaux: et ce schéma est-il documenté séparément de ton analyse des bloqueurs ?",
  options: [
    "Pas de mapping de champions ou d'accélérateurs : tous les personas sont traités de la même manière dans l'exécution des deals",
    "Les commerciaux expérimentés savent informellement qui engager pour accélérer les deals, mais ce n'est pas documenté",
    "Un persona champion principal est documenté, mais la dynamique d'accélération n'est pas analysée séparément des bloqueurs",
    "Les personas accélérateurs et bloqueurs sont documentés par segment et utilisés dans la qualification des deals et le coaching",
    "Une architecture d'influence complète : profils d'accélérateurs champions et de bloqueurs documentés par segment et taille de deal, validés trimestriellement par l'analyse win/loss, et intégrés au coaching des commerciaux et aux deal reviews"
  ]
},
{
  id: 2014, pillar: 2, type: "scale",
  title: "Concrètement, ton programme win/loss produit-il des insights qui changent ta façon de vendre ou de positionner ?",
  options: [
    "Pas de programme win/loss : les résultats ne sont pas formellement revus",
    "Les commerciaux enregistrent les raisons win/loss dans le CRM mais les résultats ne sont jamais analysés",
    "Les données win/loss sont revues de façon informelle, faisant parfois remonter des anecdotes",
    "Un programme win/loss structuré avec une synthèse trimestrielle et des actions GTM documentées",
    "Les insights win/loss entraînent des changements définis dans les playbooks, le messaging et le positionnement concurrentiel chaque trimestre"
  ]
},
{
  id: 2015, pillar: 2, type: "scale",
  title: "Quels segments clients génèrent ta lifetime value la plus élevée: et ce constat guide-t-il directement tes décisions de priorisation et de ciblage ICP ?",
  options: [
    "Pas de données LTV : tous les clients sont traités comme ayant une valeur égale",
    "Conscience approximative basée sur la taille de l'ARR, non validée par rapport aux données de rétention ou d'expansion",
    "Des estimations de LTV existent mais ne sont pas segmentées ou opérationnalisées dans le ciblage",
    "La LTV par segment est calculée annuellement et alimente la priorisation ICP",
    "La LTV est un input de segmentation vivant : mis à jour trimestriellement, alimentant le scoring des comptes, l'allocation de capacité et les décisions de pricing"
  ]
},
{
  id: 2016, pillar: 2, type: "scale",
  title: "À quel point tu comprends ton écosystème de partenaires et de channel: qui accélère les deals, qui les bloque, et pourquoi ?",
  options: [
    "Pas d'intelligence partenaires : les dynamiques de l'écosystème sont inconnues",
    "Relations informelles avec quelques partenaires, pas d'insight systématique",
    "Le pipeline partenaires est suivi mais l'influence sur les résultats des deals n'est pas analysée",
    "Un modèle d'intelligence partenaires documenté, revu dans les business reviews partenaires trimestriellement",
    "Une carte d'écosystème quantifiée : pipeline sourcé vs influencé par les partenaires, win rates et durées de cycle suivis et revus mensuellement"
  ]
},
{
  id: 2017, pillar: 2, type: "scale",
  title: "À quel point tu comprends la sensibilité au prix et la propension à payer sur tes segments clients clés ?",
  options: [
    "Pas d'intelligence pricing : le prix est fixé par coût majoré ou benchmark concurrentiel",
    "Conscience anecdotique à partir de deals perdus sur le prix",
    "Sensibilité au prix évaluée par des entretiens acheteurs occasionnels",
    "Propension à payer validée par une recherche structurée et une analyse du taux de closing par tranche de prix",
    "Un modèle d'élasticité-prix par segment : validé par des tests contrôlés, des données win/loss et des entretiens acheteurs, revu annuellement"
  ]
},
{
  id: 2018, pillar: 2, type: "scale",
  title: "Comment tu suis les concurrents émergents et les potentiels disrupteurs de marché avant qu'ils n'apparaissent dans tes deals ?",
  options: [
    "Les concurrents émergents ne font surface que lorsque les prospects les mentionnent en appel",
    "Veille ad-hoc par les responsables commerciaux sans reporting formel",
    "Un scan concurrentiel périodique est mené mais pas sur une cadence définie",
    "Une revue trimestrielle des concurrents émergents est menée et partagée avec le leadership GTM",
    "Un programme de veille continue des menaces : nouveaux entrants suivis, briefings distribués et playbooks mis à jour proactivement"
  ]
},
{
  id: 2019, pillar: 2, type: "scale",
  title: "À quel point ta roadmap produit est-elle liée à des preuves quantifiées du marché, et pas seulement à des opinions internes ?",
  options: [
    "La roadmap est guidée par la capacité engineering et les priorités du leadership, pas par les preuves du marché",
    "Les inputs du marché sont collectés de façon informelle mais guident rarement le séquencement de la roadmap",
    "Les demandes clients sont enregistrées et référencées dans la planification mais pas systématiquement pondérées",
    "Les décisions de roadmap sont liées à des signaux de marché documentés avec une justification de priorité explicite",
    "Chaque élément de roadmap dispose d'un dossier de preuves de marché documenté : fréquence client, impact sur les deals et signal de rétention, revu dans la planification"
  ]
},
{
  id: 2020, pillar: 2, type: "scale",
  title: "Au dernier trimestre, quel pourcentage de tes deals closés impliquait un partenaire: et stu as si l'implication du partenaire a accéléré ou compliqué chaque closing ?",
  options: [
    "L'implication des partenaires n'est pas suivie : nous ne savons pas quels deals impliquaient des partenaires ni comment ils ont affecté les résultats",
    "Nous savons approximativement quels deals impliquaient des partenaires mais n'avons pas analysé l'impact sur le taux de closing ou la durée du cycle",
    "Les deals avec implication de partenaires sont suivis mais les différences de win rate et de durée de cycle n'ont pas été formellement analysées",
    "Un suivi des deals partenaires existe et nous avons comparé le win rate et la durée du cycle vs les deals directs: revu trimestriellement",
    "Un modèle vivant de performance partenaires : pipeline sourcé vs influencé par les partenaires, delta de win rate et impact sur la durée du cycle suivis mensuellement et revus en réunions de revenu"
  ]
},

/* ===========================================================
   PILLAR 3: PRODUCT MARKETING (20 QUESTIONS)
   =========================================================== */

{
  id: 3001, pillar: 3, type: "scale",
  title: "Lorsqu'un prospect demande « qu'est-ce que tu fais et pourquoi cela m'importe-t-il ? », avec quelle cohérence tes commerciaux et ton site délivrent-ils la même réponse claire ?",
  subtitle: "Réponds pour ton segment de revenu principal et ta motion GTM principale, sauf si une question te demande explicitement de distinguer.",
  options: [
    "Chaque commercial et chaque page donne une réponse différente : aucune cohérence",
    "Un message principal existe mais les commerciaux dévient fréquemment ou improvisent",
    "Le messaging est cohérent dans les supports écrits mais pas dans les conversations en direct",
    "Le messaging principal est codifié, formé et utilisé de façon cohérente dans les appels et les supports",
    "Le messaging est systématiquement testé, mis à jour trimestriellement et soumis à une certification avant que les commerciaux ne l'utilisent dans les deals"
  ]
},
{
  id: 3002, pillar: 3, type: "scale",
  title: "Dans tes 10 derniers appels commerciaux revus, les commerciaux ont-ils délivré le même message de différenciation principal: ou l'histoire variait-elle selon le commercial, le canal et le jour ?",
  options: [
    "Pas de positionnement formel : l'entreprise se décrit différemment selon la personne interrogée",
    "Un énoncé de positionnement existe mais ne se reflète pas de façon cohérente dans les ventes ou le marketing",
    "Le positionnement est documenté et utilisé en marketing mais non appliqué dans les conversations commerciales",
    "Le positionnement est documenté, formé et reflété dans tous les points de contact majeurs",
    "Le positionnement est validé par la recherche acheteurs, intégré dans un narratif de catégorie et embarqué dans chaque asset et motion GTM"
  ]
},
{
  id: 3003, pillar: 3, type: "scale",
  title: "Comment tu sais que ta proposition de valeur résonne effectivement avec tes segments ICP, et quelles preuves le soutiennent ?",
  options: [
    "Nous supposons qu'elle résonne : aucune validation formelle n'a eu lieu",
    "Les anecdotes commerciales suggèrent une résonance mais elle n'a pas été testée formellement",
    "Quelques entretiens clients ont confirmé la résonance, mais pas sur tous les segments",
    "Proposition de valeur validée par des entretiens acheteurs structurés et une analyse win/loss par segment",
    "La résonance est testée en continu : l'amélioration des messages suivie dans la conversion des deals, les entretiens et les A/B tests par segment"
  ]
},
{
  id: 3004, pillar: 3, type: "scale",
  title: "Dans tes 10 derniers deals closed-won, quel pourcentage incluait une raison documentée et énoncée par le client correspondant directement à ton message de différenciation principal ?",
  options: [
    "Nous ne capturons pas pourquoi les clients disent nous avoir choisis",
    "Nous avons quelques notes de victoire mais elles ne sont pas codées par rapport à notre message de différenciation",
    "Environ un quart des victoires font référence à notre message principal : le reste cite d'autres raisons",
    "La moitié ou plus des victoires font référence à notre message de différenciation principal dans les notes de victoire documentées",
    "Plus de 70 % des deals closed-won incluent une raison énoncée par le client correspondant à notre différenciation principale documentée : suivi et revu trimestriellement"
  ]
},
{
  id: 3005, pillar: 3, type: "scale",
  title: "Concrètement, le messaging est-il adapté aux différents personas acheteurs, non seulement par séniorité, mais par douleur et langage spécifiques au rôle ?",
  options: [
    "Un message générique utilisé pour tous les personas",
    "Le messaging est ajusté de façon informelle par les commerciaux expérimentés mais non codifié",
    "Des points de discussion spécifiques aux personas existent mais ne sont pas utilisés de façon cohérente",
    "Messaging par persona documenté pour les rôles acheteurs principaux, intégré dans les playbooks et les présentations",
    "Une architecture de messaging par persona : douleur, langage et preuves spécifiques au rôle, validés par des entretiens et intégrés dans tous les assets"
  ]
},
{
  id: 3006, pillar: 3, type: "scale",
  title: "À quel point les commerciaux utilisent-ils les derniers supports de messaging approuvés sans les modifier ni les remplacer ?",
  options: [
    "Les commerciaux utilisent leurs propres supports : les présentations standard sont rarement ouvertes",
    "Les commerciaux utilisent les supports approuvés occasionnellement mais personnalisent fortement et de façon imprévisible",
    "La plupart des commerciaux utilisent les supports approuvés mais avec des modifications incohérentes",
    "Les supports approuvés sont utilisés de façon cohérente avec des personnalisations mineures et autorisées",
    "Une bibliothèque d'assets contrôlée : versionnée, adoption suivie dans le CRM ou la plateforme d'enablement, déviations signalées lors des deal reviews"
  ]
},
{
  id: 3007, pillar: 3, type: "scale",
  title: "Comment tu sais quels messages spécifiques, preuves ou cadrages font systématiquement avancer les deals ?",
  options: [
    "Pas d'insight : nous ne suivons pas quels messages font avancer les deals",
    "Retours anecdotiques des commerciaux seniors, non validés ni systématisés",
    "Les notes win/loss contiennent des références aux messages mais ne sont pas analysées",
    "La performance des messages est revue dans l'analyse win/loss et les sessions de coaching commercial",
    "Un système d'intelligence des messages : win/loss codés par thème de message, amélioration de la conversion suivie par asset et argumentaire"
  ]
},
{
  id: 3008, pillar: 3, type: "scale",
  title: "À quel point ta bibliothèque de preuves, études de cas et données ROI est-elle complète, utilisable et à jour ?",
  options: [
    "Pas de bibliothèque de preuves formelle : les commerciaux s'appuient sur leur mémoire ou des témoignages génériques",
    "Quelques études de cas existent mais elles sont obsolètes ou non spécifiques aux segments",
    "Une bibliothèque de preuves existe mais n'est pas organisée par segment, persona ou cas d'usage",
    "Une bibliothèque de preuves organisée par segment et cas d'usage, revue trimestriellement",
    "Une architecture stratégique de preuves : études de cas, calculateurs de ROI et validations tierces indexés par segment, persona et étape de deal"
  ]
},
{
  id: 3009, pillar: 3, type: "scale",
  title: "Dans ta démo actuelle, quelles fonctionnalités sont montrées dans les 10 premières minutes: et cette séquence est-elle basée sur des données validées sur ce qui génère la conversion à l'étape suivante ?",
  options: [
    "Pas de compréhension systématique : les fonctionnalités sont démontrées selon ce que le commercial aime montrer",
    "Les commerciaux expérimentés ont une conscience informelle de ce qui fonctionne, mais ce n'est ni documenté ni partagé",
    "La résonance des fonctionnalités est suivie de façon anecdotique via les retours de deals mais non systématisée",
    "La résonance des fonctionnalités par segment et étape de deal est documentée par l'analyse win/loss et des démos",
    "Une carte fonctionnalités-étape de deal existe : validée par des entretiens acheteurs et des données de progression, mise à jour trimestriellement et utilisée pour gouverner la structure de la démo"
  ]
},
{
  id: 3010, pillar: 3, type: "scale",
  title: "Quel pourcentage de tes commerciaux a réussi leur dernière certification messaging, et quand cette certification a-t-elle été mise à jour pour refléter ton positionnement actuel ?",
  options: [
    "Aucune certification messaging n'existe",
    "Une certification existe mais moins de la moitié des commerciaux l'ont complétée",
    "La plupart des commerciaux ont complété la certification mais elle n'a pas été mise à jour depuis plus de 12 mois",
    "Plus de 80 % des commerciaux certifiés sur le messaging actuel au cours des six derniers mois",
    "La certification est obligatoire : les commerciaux ne peuvent pas avoir de quota sans la réussir, retestés à chaque mise à jour majeure du positionnement, avec des taux de réussite suivis par manager"
  ]
},
{
  id: 3011, pillar: 3, type: "scale",
  title: "Après tes 10 dernières démos, combien ont abouti à une prochaine étape documentée: et tu suis quels éléments de la démo ont produit ce résultat ?",
  options: [
    "Les prochaines étapes après les démos sont informelles : il n'y a pas de suivi du taux de conversion ni de ce qui l'a produit",
    "Certains commerciaux documentent les prochaines étapes, mais la corrélation démo-résultat n'est pas suivie systématiquement",
    "La conversion démo-prochaine étape est suivie en tant que nombre, mais quels éléments de la démo ont produit les résultats est inconnu",
    "Le taux de conversion des démos est suivi par segment et revu en coaching, avec une certaine corrélation au contenu et à la séquence de la démo",
    "Un système gouverné de performance des démos : taux de conversion suivi par commercial et segment, éléments de démo corrélés aux résultats, et conclusions utilisées pour mettre à jour la structure de démo standard trimestriellement"
  ]
},
{
  id: 3012, pillar: 3, type: "scale",
  title: "Quelle influence le Product Marketing a-t-il sur la priorisation de la roadmap produit, et comment cette influence est-elle exercée ?",
  options: [
    "Le PMM n'a pas de siège dans les discussions de roadmap",
    "Le PMM fournit occasionnellement un input mais il change rarement la priorisation",
    "Le PMM présente des preuves de marché dans les revues de planification avec un impact incohérent",
    "Le PMM possède un processus structuré d'input marché avec une influence documentée sur les décisions de roadmap",
    "Le PMM est un co-propriétaire formel de la priorisation de la roadmap : les preuves de marché sont un input requis pour chaque décision de fonctionnalité majeure"
  ]
},
{
  id: 3013, pillar: 3, type: "scale",
  title: "À quelle fréquence un deal atteint-il un stade avancé, proposition ou achat, puis meurt sans explication documentée sur laquelle ton équipe a agi ?",
  options: [
    "La mort des deals en stade avancé est courante et les causes ne sont jamais systématiquement analysées",
    "Nous discutons des pertes en stade avancé de façon informelle mais ne suivons pas les schémas",
    "Les raisons de perte en stade avancé sont enregistrées mais l'analyse a lieu au mieux annuellement",
    "Les pertes en stade avancé déclenchent une revue structurée sous deux semaines avec une cause racine documentée",
    "Le taux de perte en stade avancé est un KPI : chaque perte au-dessus d'un seuil de taille de deal déclenche une revue documentée, les causes racines sont codées et les schémas entraînent des ajustements mensuels PMM et ventes"
  ]
},
{
  id: 3014, pillar: 3, type: "scale",
  title: "À quel point tes motions de lancement produit sont-elles bien dotées en ressources et exécutées, de la préparation interne à l'activation marché ?",
  options: [
    "Les lancements ont lieu sans processus défini : le GTM n'est pas préparé avant la release",
    "Une certaine coordination existe mais la préparation GTM est incohérente",
    "Les lancements suivent un processus basique mais l'activation terrain est souvent incomplète",
    "Un processus de lancement défini avec de l'enablement interne, la livraison d'assets et des points de contrôle d'activation marché",
    "Une motion de lancement entièrement gouvernée : scorecard de préparation, certification d'enablement et mesure lancement-vers-pipeline pour chaque lancement"
  ]
},
{
  id: 3015, pillar: 3, type: "scale",
  title: "Quel est le taux de conversion de ton site, de visiteur qualifié à réunion réservée ou essai, et comment se compare-t-il au trimestre précédent ?",
  options: [
    "Nous ne suivons pas la conversion visiteur-vers-réunion sur le site web",
    "La conversion est suivie mais nous ne savons pas à quoi ressemble un bon benchmark",
    "Nous la suivons mais la conversion est stable ou en baisse sans plan d'amélioration documenté",
    "La conversion visiteur-vers-réunion est suivie mensuellement et pilote l'optimisation trimestrielle du site web",
    "La conversion du site web est un KPI géré : suivi hebdomadairement, testé en A/B en continu et revu par rapport aux benchmarks de catégorie trimestriellement avec des objectifs d'amélioration documentés"
  ]
},
{
  id: 3016, pillar: 3, type: "scale",
  title: "Concrètement, ta fonction PMM suit-elle, documente-t-elle et distribue-t-elle l'intelligence concurrentielle aux ventes ?",
  options: [
    "Pas de fonction PMM concurrentielle : les réponses concurrentielles sont improvisées dans les deals",
    "Des battlecards existent mais sont obsolètes et non utilisées de façon cohérente",
    "Les supports concurrentiels sont mis à jour occasionnellement quand quelque chose de significatif change",
    "Un programme PMM concurrentiel avec des mises à jour trimestrielles des battlecards et la formation des commerciaux",
    "Un système d'intelligence concurrentielle vivant : possédé, mis à jour mensuellement, intégré dans l'onboarding et les deal reviews, avec un suivi d'adoption par les commerciaux"
  ]
},
{
  id: 3017, pillar: 3, type: "scale",
  title: "Lorsqu'un deal est perdu au stade final, après la soumission d'une proposition, à quelle fréquence la raison invoquée est-elle quelque chose que ton équipe PMM aurait pu adresser ?",
  options: [
    "Nous n'analysons pas les pertes au stade final au niveau du messaging ou du positionnement",
    "Nous discutons occasionnellement des raisons de perte en stade avancé de façon informelle",
    "Nous revoyons les pertes en stade avancé trimestriellement mais le PMM ne fait pas partie de la revue",
    "Le PMM participe aux revues de pertes en stade avancé et possède une action documentée quand le messaging a contribué",
    "Le PMM mène un audit trimestriel des pertes au stade final : chaque perte codée par type d'échec du message, lacune de preuve ou faiblesse de positionnement concurrentiel, avec une remédiation documentée"
  ]
},
{
  id: 3018, pillar: 3, type: "scale",
  title: "À quel point tes supports de démo et de présentation sont-ils convaincants et utilisés de façon cohérente dans les interactions acheteurs en direct ?",
  options: [
    "Pas de démo standard : chaque commercial construit la sienne",
    "Une démo standard existe mais les commerciaux dévient significativement en pratique",
    "Une démo de référence existe et est utilisée comme point de départ mais la cohérence est faible",
    "Un cadre de démo standardisé avec des variantes spécifiques au rôle, formé et certifié avant que les commerciaux ne soient en contact avec les prospects",
    "Un système opérationnel de démo : structure standard, variantes par segment, utilisation suivie et mise à jour basée sur les données win/loss chaque trimestre"
  ]
},
{
  id: 3019, pillar: 3, type: "scale",
  title: "À quel point le Product Marketing contribue-t-il de façon mesurable au pipeline, au win rate et à la vélocité des deals ?",
  options: [
    "L'impact du PMM sur le revenu n'est pas mesuré",
    "La contribution du PMM est discutée qualitativement mais non liée aux métriques de deals",
    "Certaines données d'utilisation d'assets et d'attribution de campagnes existent mais ne sont pas systématiquement revues",
    "Le PMM rapporte sur l'influence du pipeline, le win rate par asset et la performance des messages trimestriellement",
    "Le PMM possède un tableau de bord d'impact revenu : win rate par segment, utilisation des assets, amélioration des messages et corrélation lancement-vers-pipeline suivis mensuellement"
  ]
},
{
  id: 3020, pillar: 3, type: "scale",
  title: "Mappe ton contenu sur le parcours acheteur : quelle étape a la couverture la plus faible aujourd'hui: et tu as un plan documenté pour combler cet écart ?",
  options: [
    "Le messaging existe uniquement pour le stade de vente : le contenu de sensibilisation et post-vente est absent",
    "Du contenu couvre plusieurs étapes mais il est fragmenté et non connecté à un parcours acheteur",
    "Les étapes principales sont couvertes mais des lacunes existent dans le contenu de preuve en stade avancé et la communication de valeur post-vente",
    "Une carte de contenu documentée couvre toutes les étapes acheteurs principales de la sensibilisation au renouvellement pour les segments principaux",
    "Une architecture complète de contenu du parcours acheteur : chaque étape mappée par segment et persona, fraîcheur suivie, lacunes priorisées dans la planification PMM trimestrielle et performance mesurée par conversion d'étape"
  ]
},

/* ===========================================================
   PILLAR 4: DEMAND GENERATION (20 QUESTIONS)
   =========================================================== */

{
  id: 4001, pillar: 4, type: "scale",
  title: "À quel point ta stratégie de demand generation est-elle explicitement définie: canaux, cibles, budgets et métriques de succès: et quand a-t-elle été revue pour la dernière fois ?",
  subtitle: "Réponds pour ton segment de revenu principal et ta motion GTM principale, sauf si une question te demande explicitement de distinguer.",
  options: [
    "Pas de stratégie documentée : les activités DG sont choisies par disponibilité ou habitude",
    "Un plan de canaux approximatif existe mais manque d'allocation budgétaire ou d'objectifs de performance",
    "Un document de stratégie existe mais n'a pas été formellement revu depuis plus de six mois",
    "Une stratégie DG documentée revue trimestriellement avec des objectifs de performance par canal",
    "Une stratégie DG entièrement opérationnalisée : mix de canaux, budget, objectifs de pipeline et cadence de revue, le tout documenté et gouvernant l'exécution"
  ]
},
{
  id: 4002, pillar: 4, type: "scale",
  title: "Quelle part de ton pipeline qualifié provient des canaux inbound, et avec quelle constance cela se maintient-il trimestre après trimestre ?",
  options: [
    "L'inbound ne contribue pas de pipeline significatif : c'est un canal aspirationnel",
    "L'inbound génère quelques leads mais la qualité est faible et le volume imprévisible",
    "L'inbound génère des leads qualifiés mais le volume fluctue significativement par trimestre",
    "L'inbound délivre un pipeline qualifié constant par rapport aux objectifs définis chaque trimestre",
    "L'inbound est un moteur de pipeline fiable et mesuré : contribution suivie par canal, segment et étape de conversion mensuellement"
  ]
},
{
  id: 4003, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "À quel point ta motion outbound est-elle prévisible et reproductible pour générer du pipeline qualifié, et comment cela est-il mesuré ?",
  options: [
    "Pas d'outbound structuré : les commerciaux prospectent indépendamment sans approche partagée",
    "L'outbound existe mais les résultats sont très variables et non systématiquement mesurés",
    "L'outbound génère du pipeline mais le séquencement, le messaging et la cadence sont incohérents",
    "Une motion outbound standardisée avec des séquences définies, des comptes cibles et des objectifs de pipeline revus hebdomadairement",
    "Un moteur outbound entièrement instrumenté : activité, réponse et métriques de pipeline suivis quotidiennement, avec des A/B tests sur les séquences trimestriellement"
  ]
},
{
  id: 4004, pillar: 4, type: "scale",
  title: "Cite tes trois principales sources de pipeline classées par coût par opportunité qualifiée actuellement. Ce classement est-il basé sur des données suivies ou estimé de mémoire ?",
  options: [
    "Le paid media n'est pas utilisé ou les dépenses ne sont suivies qu'au niveau des coûts",
    "Le paid media fonctionne mais le ROI et la contribution au pipeline ne sont pas mesurés",
    "Une certaine attribution de pipeline existe mais le suivi du coût par opportunité est incohérent",
    "Coût par opportunité suivi par canal avec des revues d'efficacité trimestrielles",
    "Le paid media est géré comme un investissement pipeline : CPO, contribution au CAC et retour suivis mensuellement par canal"
  ]
},
{
  id: 4005, pillar: 4, type: "scale",
  title: "Comment tu mesures la performance de conversion du site web, et quel est ton taux de conversion de visiteur à lead qualifié ?",
  options: [
    "La conversion du site web n'est pas suivie : aucune visibilité sur le funnel",
    "Le trafic et les soumissions de formulaires sont suivis mais la qualité de conversion n'est pas mesurée",
    "La conversion haut de funnel est suivie mais les abandons en milieu de funnel ne sont pas analysés",
    "Les taux de conversion sont suivis par page et source, revus mensuellement avec des actions d'amélioration documentées",
    "Un programme d'optimisation de la conversion : funnel mappé de bout en bout, A/B tests en cours et taux de conversion revu par rapport aux benchmarks trimestriellement"
  ]
},
{
  id: 4006, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 10 },
  title: "Concrètement, comment tu exécutes l'Account-Based Marketing sur tes comptes les plus prioritaires, et comment l'impact est-il mesuré ?",
  options: [
    "Pas de motion ABM : tous les comptes reçoivent la même approche",
    "L'ABM est discuté mais aucune sélection de comptes dédiée, budget ou mesure n'existe",
    "Une motion ABM pilote existe pour un sous-ensemble de comptes mais sans métriques de succès définies",
    "Un programme ABM documenté avec des tiers de comptes, une activation par canal et des revues trimestrielles d'impact sur le pipeline",
    "Un moteur ABM entièrement instrumenté : couverture, engagement et contribution au pipeline suivis par tier de comptes mensuellement"
  ]
},
{
  id: 4007, pillar: 4, type: "scale",
  title: "À quel point ta motion de lead nurturing pour les prospects pas encore prêts à acheter est-elle structurée et suivie en performance ?",
  options: [
    "Pas de nurturing : les prospects pas immédiatement prêts à acheter sont abandonnés",
    "Une séquence d'emails existe mais elle est générique, non ciblée et non revue",
    "Des parcours de nurturing existent par segment mais les taux d'engagement et de conversion ne sont pas suivis",
    "Les programmes de nurturing sont segmentés, automatisés et revus pour leur impact de conversion trimestriellement",
    "Un moteur de nurturing entièrement instrumenté : segmenté par persona et étape, conversion suivie et mis à jour sur la base de données de performance"
  ]
},
{
  id: 4008, pillar: 4, type: "scale",
  title: "À quel point le contenu génère-t-il de la demande qualifiée, et comment tu mesures la contribution du contenu au pipeline ?",
  options: [
    "Du contenu est produit mais sa contribution au pipeline n'est pas mesurée",
    "Le contenu génère du trafic mais l'attribution au pipeline n'est pas suivie",
    "Certains contenus sont attribués au pipeline mais la mesure est incohérente",
    "La contribution du contenu au pipeline est suivie trimestriellement par type d'asset et sujet",
    "Un modèle de demande par contenu : chaque asset suivi pour le trafic, la conversion MQL et l'influence sur le pipeline, revu mensuellement"
  ]
},
{
  id: 4009, pillar: 4, type: "scale",
  title: "Tu peux attribuer le pipeline et le revenu à des canaux, campagnes et dépenses DG spécifiques: et à quelle fréquence ces données entraînent-elles une réallocation budgétaire ?",
  options: [
    "Pas d'attribution : toute source de pipeline est inconnue ou marquée « direct »",
    "L'attribution au premier point de contact existe mais le multi-touch et le ROI des dépenses ne sont pas suivis",
    "Le pipeline est attribué au niveau du canal mais le ROI au niveau des campagnes n'est pas suivi de façon cohérente",
    "Attribution multi-touch en place, revue mensuellement par canal et campagne",
    "Un modèle d'attribution complet : canal, campagne et dépenses suivis jusqu'au revenu closed-won avec un reporting ROI trimestriel"
  ]
},
{
  id: 4010, pillar: 4, type: "scale",
  title: "Le Marketing est-il tenu responsable d'un quota de revenu ou de pipeline, et comment cet objectif est-il fixé et revu ?",
  options: [
    "Le Marketing n'a pas de quota de revenu ou de pipeline : le succès est mesuré en leads ou impressions",
    "Une attente informelle de pipeline existe mais n'est pas formellement suivie ni gouvernée",
    "Le Marketing a un objectif de pipeline mais il est secondaire et guide rarement les décisions de budget ou de headcount",
    "Le Marketing a un quota de pipeline formel revu mensuellement avec le CRO ou VP Sales",
    "Le Marketing co-possède un objectif de revenu : contribution au pipeline, win rate sur les deals sourcés par le marketing et CPO revus en réunions de revenu hebdomadaires"
  ]
},
{
  id: 4011, pillar: 4, type: "scale",
  title: "Tes SLA de suivi des leads entre marketing et ventes sont-ils définis, suivis et appliqués: et que se passe-t-il quand un commercial manque la fenêtre ?",
  options: [
    "Pas de SLA : le suivi des leads dépend du comportement individuel du commercial",
    "Une attente informelle existe mais n'est ni suivie ni appliquée",
    "Les SLA sont documentés mais la conformité n'est pas surveillée",
    "Les SLA sont définis, suivis dans le CRM et revus hebdomadairement avec le leadership commercial",
    "Les SLA sont contractuels entre le marketing et les ventes : conformité suivie quotidiennement, violations escaladées et temps de réponse revu en réunions de pipeline hebdomadaires"
  ]
},
{
  id: 4012, pillar: 4, type: "scale",
  title: "À quel point ta demand generation est-elle personnalisée par segment, persona et étape d'achat, au-delà de la segmentation basique de listes ?",
  options: [
    "Une seule campagne envoyée à tous les prospects : aucune segmentation appliquée",
    "Segmentation basique par taille d'entreprise ou secteur, mais le messaging est générique",
    "Des campagnes au niveau du segment existent mais le ciblage par persona et étape est incohérent",
    "Les campagnes sont segmentées par tier ICP, persona et étape du funnel avec un messaging personnalisé",
    "Personnalisation dynamique multi-variables : adéquation ICP, signaux d'intention, persona et étape pilotent automatiquement le contenu, le timing et la sélection des canaux"
  ]
},
{
  id: 4013, pillar: 4, type: "scale",
  title: "Concrètement, comment tes campagnes de demand generation sont-elles optimisées à partir de la data, et quelle est la cadence de cette revue ?",
  options: [
    "Les campagnes sont menées sur une période fixe sans revue de performance ni ajustement",
    "La performance est revue occasionnellement mais les changements sont faits au feeling",
    "Des revues de performance mensuelles ont lieu mais les décisions d'optimisation sont incohérentes",
    "Une revue de performance DG hebdomadaire entraîne des ajustements de campagnes documentés",
    "Une boucle d'optimisation continue : performance des canaux, CPO et conversion suivis hebdomadairement, avec des A/B tests et une réallocation budgétaire sur une cadence définie"
  ]
},
{
  id: 4014, pillar: 4, type: "scale",
  show_if: { field: 'gtm_motion', not_contains: ['product-led'] },
  title: "Pour tes trois derniers événements ou webinaires : quel pipeline a été généré, et quel était le coût par opportunité qualifiée par événement ?",
  options: [
    "Les événements sont menés sans suivi du pipeline ou des coûts : la participation est la seule métrique",
    "Du pipeline est attribué aux événements après coup, mais le coût par opportunité n'est pas calculé",
    "Le pipeline généré est suivi par événement, mais les données de coût sont incomplètes ou non liées aux opportunités qualifiées",
    "Le pipeline généré et le coût par opportunité qualifiée sont suivis par événement et revus après chacun",
    "Un modèle de ROI événements gouverné : pipeline généré, coût par opp et ARR influencé suivis par événement: les résultats alimentent directement les décisions d'investissement pour les futurs événements"
  ]
},
{
  id: 4015, pillar: 4, type: "scale",
  title: "Concrètement, comment ton équipe conçoit-elle, exécute-t-elle et documente-t-elle les expérimentations DG, et à quelle vitesse les résultats orientent-ils les décisions ?",
  options: [
    "Pas d'expérimentations : la DG exécute le même playbook de façon répétée",
    "Des changements occasionnels sont faits mais sans hypothèses définies ni critères de succès",
    "Quelques tests sont menés mais la documentation et les processus de décision sont informels",
    "Un calendrier d'expérimentations trimestriel avec des hypothèses définies, des périodes de mesure et des critères go/no-go",
    "Une culture de test continu : expérimentations hebdomadaires suivies dans un journal partagé, résultats revus mensuellement et approches gagnantes déployées systématiquement"
  ]
},
{
  id: 4016, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "À quel point la boucle de feedback entre SDR et Marketing sur la qualité des leads est-elle structurée, et à quelle fréquence ce feedback entraîne-t-il des changements ?",
  options: [
    "Pas de boucle de feedback formelle : les SDR et le Marketing opèrent indépendamment",
    "Les SDR se plaignent informellement de la qualité des leads mais cela ne change pas les campagnes",
    "Des sessions de feedback occasionnelles ont lieu mais sans format structuré ni suivi d'actions",
    "Un processus de feedback structuré hebdomadaire entre l'équipe SDR et le Marketing avec des actions documentées",
    "Un système de feedback en boucle fermée : scores de qualité des leads SDR-vers-marketing revus hebdomadairement, pilotant les affinements de campagnes et d'ICP sur une cadence définie"
  ]
},
{
  id: 4017, pillar: 4, type: "scale",
  show_if: { field: 'gtm_motion', not_contains: ['product-led', 'partner-led'] },
  title: "Tu as une stratégie d'événements et de webinaires définie avec des objectifs de pipeline par événement: et tu peux montrer le ROI pipeline de tes trois derniers événements ?",
  options: [
    "Les événements sont choisis de façon opportuniste sans stratégie définie ni mesure",
    "Les événements sont planifiés mais la participation est la principale métrique de succès",
    "Un calendrier d'événements basique existe avec un suivi du pipeline post-événement pour les événements majeurs",
    "Une stratégie événementielle avec des objectifs de pipeline définis, une activation pré/post-événement et un ROI revu trimestriellement",
    "Un moteur événementiel entièrement instrumenté : pipeline sourcé et influencé suivi par événement, avec des playbooks pré/post et des benchmarks ROI revus trimestriellement"
  ]
},
{
  id: 4018, pillar: 4, type: "scale",
  title: "À quel point la Demand Generation est-elle formellement incluse dans la planification du revenu, et le Marketing co-possède-t-il le chiffre de pipeline ?",
  options: [
    "Le Marketing n'est pas inclus dans les discussions de planification du revenu",
    "Le Marketing est informé des objectifs de revenu mais ne contribue pas à la modélisation du pipeline",
    "Le Marketing fournit un input à la planification mais ne co-possède pas les objectifs de pipeline",
    "Le Marketing co-possède un objectif de pipeline, inclus dans le processus de planification du revenu",
    "Le Marketing est co-propriétaire du plan de revenu : modèle de pipeline, allocation budgétaire et hypothèses de montée en puissance revus conjointement avec les Sales et la Finance"
  ]
},
{
  id: 4019, pillar: 4, type: "scale",
  title: "Tu peux faire croître le pipeline sans augmenter proportionnellement le budget DG: et tu as des données des 12 derniers mois pour le démontrer ?",
  options: [
    "Faire croître le pipeline nécessite des augmentations proportionnelles de budget et de headcount",
    "Certaines économies d'échelle existent mais l'efficacité se dégrade à mesure que le volume augmente",
    "La DG passe à l'échelle modérément : des gains d'efficacité incrémentaux sont atteints avec des initiatives documentées",
    "La DG passe à l'échelle avec des augmentations de budget sous-linéaires : améliorations d'efficacité suivies chaque trimestre",
    "Un moteur DG à effet cumulatif : les canaux organiques, acquis et payants se renforcent mutuellement, et l'efficacité s'améliore à mesure que l'échelle augmente"
  ]
},
{
  id: 4020, pillar: 4, type: "scale",
  title: "Comment ton Customer Acquisition Cost évolue-t-il à mesure que tu passes à l'échelle, et comment tu mesures et tu gères cette tendance ?",
  options: [
    "Le CAC n'est pas suivi : le coût d'acquisition est inconnu",
    "Le CAC est suivi annuellement mais non géré comme un levier de performance",
    "Le CAC est suivi trimestriellement mais augmente sans plan d'amélioration documenté",
    "Le CAC est suivi mensuellement et revu avec des initiatives d'efficacité documentées",
    "Les tendances du CAC sont modélisées par canal et motion, revues mensuellement, avec une trajectoire cible documentée et un déclencheur de réallocation"
  ]
},

/* ===========================================================
   PILLAR 5: SALES EXECUTION (20 QUESTIONS)
   =========================================================== */

{
  id: 5001, pillar: 5, type: "scale",
  title: "Ton processus de vente est-il documenté, appliqué aux portes d'étape et systématiquement suivi: ou chaque commercial exécute-t-il effectivement sa propre version ?",
  subtitle: "Réponds pour ton segment de revenu principal et ta motion GTM principale, sauf si une question te demande explicitement de distinguer.",
  options: [
    "Pas de processus documenté : chaque commercial gère les deals indépendamment",
    "Un processus informel existe dans l'esprit des commerciaux seniors mais n'est ni écrit ni enseigné",
    "Un processus est documenté mais l'adoption dans l'équipe est incohérente",
    "Un processus documenté étape par étape avec des critères de sortie, formé et reflété dans le CRM",
    "Un processus de vente gouverné : étapes, critères de sortie et champs CRM requis appliqués, avec déviation signalée dans les revues de pipeline"
  ]
},
{
  id: 5002, pillar: 5, type: "scale",
  title: "À quel point les deals sont-ils qualifiés avant d'entrer dans le pipeline, et que se passe-t-il pour les deals non qualifiés ?",
  options: [
    "Pas de qualification formelle : tout ce qui exprime de l'intérêt entre dans le pipeline",
    "La qualification est informelle et incohérente entre les commerciaux",
    "Un cadre de qualification existe mais est appliqué de façon incohérente",
    "Un cadre de qualification défini appliqué de façon cohérente, avec les deals non qualifiés activement retirés du pipeline",
    "Une culture de qualification zéro tolérance : les deals sans critères de qualification documentés ne sont pas créés dans le CRM, revus en réunions de pipeline"
  ]
},
{
  id: 5003, pillar: 5, type: "scale",
  title: "À quel point ton gestion du pipeline est-elle visible et disciplinée, et avec quelle cohérence les deals progressent-ils d'étape en étape ?",
  options: [
    "Le pipeline est une liste de voeux : la progression des étapes n'est pas gouvernée",
    "Le pipeline est revu de façon informelle et l'hygiène des étapes est laissée aux commerciaux individuels",
    "Des revues de pipeline ont lieu mais les deals stagnants et gonflés ne sont pas activement gérés",
    "Des revues de pipeline hebdomadaires avec des actions documentées sur les deals stagnants et les étapes gonflées",
    "Une discipline de pipeline gouvernée : déclencheurs d'ancienneté d'étape, critères de sortie requis et qualité du pipeline scorée hebdomadairement avec action forcée sur les deals en retard"
  ]
},
{
  id: 5004, pillar: 5, type: "scale",
  title: "Quel pourcentage des deals engagés en début de mois se closent effectivement en fin de mois, et dans quelle mesure ce ratio est-il stable ?",
  options: [
    "Moins de 50 % : la précision des engagements n'est ni suivie ni gérée",
    "50-70 % : les engagements sont fréquemment manqués et non systématiquement revus",
    "70-85 % : les engagements se closent à un taux modéré avec une certaine discipline de prévision",
    "85-95 % : les engagements sont constamment tenus avec un processus formel de revue des engagements",
    "Plus de 95 % : la précision des engagements est une métrique gouvernée, revue hebdomadairement, avec un chemin d'escalade documenté pour les manquements"
  ]
},
{
  id: 5005, pillar: 5, type: "scale",
  title: "À quel point tous les commerciaux peuvent-ils articuler les capacités du produit, ses limites et sa différenciation concurrentielle sans s'appuyer sur le support technique ?",
  options: [
    "La connaissance produit varie considérablement : la plupart des commerciaux ne peuvent pas faire une démo sans assistance",
    "Quelques commerciaux expérimentés ont une connaissance produit approfondie ; les autres ne sont pas fiables",
    "La plupart des commerciaux ont une connaissance produit adéquate mais des lacunes apparaissent dans les deals complexes",
    "La connaissance produit est certifiée avant que les commerciaux ne soient opérationnels, avec des rappels à chaque release majeure",
    "Un programme de maîtrise produit continu : conditionné par la certification, suivi par commercial et mis à jour à chaque release produit"
  ]
},
{
  id: 5006, pillar: 5, type: "scale",
  title: "Ton processus de vente est-il appliqué aux portes d'étape dans le CRM: et quel pourcentage des deals dans ton pipeline au dernier trimestre avait tous les champs requis complétés à chaque étape ?",
  options: [
    "Les portes d'étape CRM ne sont pas appliquées : les champs requis sont souvent vides et les deals progressent quand même",
    "Certains champs requis existent mais les commerciaux peuvent généralement faire avancer les deals sans les compléter",
    "Les exigences de portes d'étape existent et sont revues par les managers, mais l'application est incohérente entre les équipes",
    "Les champs requis sont appliqués aux étapes clés et la conformité est revue régulièrement lors des inspections de pipeline",
    "Un système de portes d'étape gouverné : champs requis appliqués dans le CRM à chaque étape, conformité suivie hebdomadairement et exceptions documentées avec responsabilité du manager"
  ]
},
{
  id: 5007, pillar: 5, type: "scale",
  title: "Dans tes 20 derniers deals, quel pourcentage avait tous les champs de méthodologie de qualification complétés: et le CRM l'impose-t-il avant qu'un deal ne progresse à l'étape suivante ?",
  options: [
    "Aucune méthodologie de qualification n'est utilisée : les commerciaux qualifient selon leur jugement personnel sans cadre partagé",
    "Une méthodologie existe mais moins de 40 % des deals ont des champs de qualification complets dans le CRM",
    "40-70 % des deals ont des champs de qualification complets, mais l'application est incohérente entre les managers",
    "Plus de 70 % des deals ont des champs de qualification complets: les portes d'étape CRM appliquent la méthodologie pour les deals au-dessus d'une taille définie",
    "La méthodologie de qualification est appliquée à 90 %+ sur tous les deals au-dessus du seuil : portes CRM actives, conformité suivie hebdomadairement et déviation signalée dans les deal reviews"
  ]
},
{
  id: 5008, pillar: 5, type: "scale",
  title: "Concrètement, comment tu captures et tu utilises l'intelligence win/loss pour améliorer la façon dont tes commerciaux vendent ?",
  options: [
    "Les raisons win/loss ne sont pas documentées : les résultats sont célébrés ou oubliés",
    "Les commerciaux enregistrent une raison dans le CRM mais elle est rarement analysée ou discutée",
    "Les données win/loss sont revues de façon informelle en réunions d'équipe sans résultats structurés",
    "Un processus de revue win/loss produit des thèmes documentés partagés avec les ventes et le PMM trimestriellement",
    "L'intelligence win/loss entraîne des mises à jour directes des playbooks, du messaging et du contenu de coaching chaque trimestre"
  ]
},
{
  id: 5009, pillar: 5, type: "scale",
  title: "À quel point tes commerciaux sont-ils préparés à gérer les objections les plus courantes, et comment stu as que le traitement fonctionne ?",
  options: [
    "Pas de cadre de traitement des objections : les commerciaux improvisent les réponses",
    "Les objections courantes sont couvertes dans l'onboarding mais non pratiquées ni mises à jour",
    "Un guide de traitement des objections existe mais l'adoption et l'efficacité ne sont pas mesurées",
    "Les réponses aux objections sont formées, pratiquées en jeux de rôle et revues en sessions de coaching",
    "Une bibliothèque d'objections vivante : réponses testées en appel, mises à jour à partir des données win/loss et efficacité suivie par rapport aux taux de conversion"
  ]
},
{
  id: 5010, pillar: 5, type: "scale",
  title: "Au cours des 90 derniers jours, combien de démos de commerciaux ont été revues par rapport à une grille qualité définie: et quel était le score moyen ?",
  options: [
    "Aucune démo n'est revue par rapport à une grille : la qualité n'est pas gérée",
    "Quelques démos sont revues de façon informelle, mais il n'y a pas de grille cohérente ni de méthode de notation",
    "Certaines démos sont notées par rapport à une grille, mais la couverture est partielle et incohérente entre les managers",
    "La qualité des démos est revue régulièrement avec une grille définie et le feedback est documenté par commercial",
    "Un système gouverné de qualité des démos : revues de démos notées par rapport à une grille standard, scores moyens suivis par commercial et manager, et les scores faibles déclenchent un coaching ciblé dans le même mois"
  ]
},
{
  id: 5011, pillar: 5, type: "scale",
  title: "Ton plan de rémunération commerciale récompense-t-il les comportements qui construisent le revenu à long terme: ou incite-t-il aux closings court terme au détriment de la qualité des deals et de la rétention ?",
  options: [
    "La rémunération est purement basée sur le volume : les comportements comme le multithreading ou la qualification ICP ne sont pas récompensés",
    "Certains éléments qualitatifs existent mais la rémunération est principalement basée sur le quota sans garde-fous comportementaux",
    "La rémunération inclut certains composants de rétention ou NRR mais les remises et la qualité des deals ne sont pas pénalisées",
    "La conception de la rémunération inclut des garde-fous de qualité des deals : limites de remise, exigences ICP et composants NRR",
    "Un modèle de rémunération multi-facteurs : nouvel ARR, NRR, discipline de remise et conformité ICP, le tout pondéré, revu annuellement avec la Finance et les RH"
  ]
},
{
  id: 5012, pillar: 5, type: "scale",
  title: "Ton plan de rémunération actuel inclut-il un mécanisme qui pénalise les remises importantes, les closings hors ICP ou les deals single-threaded: et cela a-t-il modifié le comportement des commerciaux de façon mesurable ?",
  options: [
    "La rémunération récompense uniquement le revenu closé : les remises, la qualité ICP et l'hygiène des deals n'ont aucune conséquence",
    "Certains garde-fous comportementaux existent de façon informelle, mais ils ne sont pas intégrés dans la rémunération et le comportement n'a pas changé de façon mesurable",
    "La rémunération inclut un ou deux garde-fous de qualité, mais ils sont faiblement appliqués et l'impact est flou",
    "La rémunération inclut des pénalités ou modificateurs explicites pour les remises, les manquements ICP ou la mauvaise qualité des deals, et le comportement est revu trimestriellement",
    "Un modèle de rémunération multi-facteurs : la discipline de remise, la conformité ICP et la qualité des deals affectent directement la rémunération, le comportement est suivi mensuellement et une amélioration mesurable a été observée"
  ]
},
{
  id: 5013, pillar: 5, type: "scale",
  title: "Cite le levier le plus impactant sur ton win rate actuellement: et identifiez la source de données qui confirme que c'est ce levier et pas autre chose.",
  options: [
    "Nous ne pouvons pas nommer un levier spécifique : le win rate est discuté de façon agrégée sans preuve de cause racine",
    "Le leadership a une vision du levier, mais c'est principalement anecdotique et non lié à une source de données fiable",
    "Un ou deux leviers probables ont été identifiés, mais les preuves sont partielles ou incohérentes entre les segments",
    "Un levier principal de win rate a été identifié et est soutenu par des données segmentées de conversion, win/loss ou d'étape",
    "La causalité du win rate est activement modélisée : le levier principal est étayé par des données segmentées, revu régulièrement et lié à des interventions ciblées avec un impact mesuré"
  ]
},
{
  id: 5014, pillar: 5, type: "scale",
  title: "Lors de ta dernière revue de pipeline, pour les deals qui ont stagné ou ont été perdus : combien avaient vu leurs supports d'enablement consultés dans les 30 jours précédents: et cela est-il suivi ?",
  options: [
    "Les supports d'enablement existent mais ne sont pas utilisés dans les deals actifs",
    "Les commerciaux connaissent les supports mais l'accès est incohérent et l'utilisation n'est pas suivie",
    "Les supports sont disponibles dans un drive partagé mais l'adoption dans les deals n'est pas mesurée",
    "Les supports d'enablement sont organisés par étape de deal, suivis pour l'utilisation et revus pour l'efficacité trimestriellement",
    "Un système d'enablement par étape de deal : supports indexés par étape, persona et objection, avec corrélation utilisation-résultat de deal suivie mensuellement"
  ]
},
{
  id: 5015, pillar: 5, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "À quel point l'hygiène des données CRM est-elle appliquée, et quelles sont les conséquences des fiches de deals incomplètes ?",
  options: [
    "Les données CRM sont volontaires : la plupart des fiches de deals sont incomplètes ou inexactes",
    "L'hygiène des données est attendue mais non appliquée : aucune conséquence pour les champs manquants",
    "Les managers vérifient la qualité CRM de façon informelle en 1:1 sans application systématique",
    "Les champs CRM requis sont appliqués aux portes d'étape avec revue du manager",
    "Une politique d'hygiène CRM zéro tolérance : les fiches incomplètes bloquent la progression d'étape, les commissions exigent la complétude des données, revu hebdomadairement"
  ]
},
{
  id: 5016, pillar: 5, type: "scale",
  title: "À quel niveau de détail la performance individuelle des commerciaux est-elle suivie, et à quelle vitesse les schémas de sous-performance sont-ils identifiés ?",
  options: [
    "La performance des commerciaux est revue trimestriellement au seul niveau d'atteinte du quota",
    "Un suivi mensuel du quota existe mais les indicateurs avancés ne sont pas surveillés",
    "Les métriques d'activité, de pipeline et de conversion sont suivies mais revues de façon incohérente",
    "Des tableaux de bord hebdomadaires de performance des commerciaux couvrant l'activité, le pipeline et la conversion, revus en 1:1",
    "Un système d'intelligence de performance des commerciaux en temps réel : indicateurs avancés et retardés suivis quotidiennement, avec des alertes automatisées pour les schémas de déviation"
  ]
},
{
  id: 5017, pillar: 5, type: "scale",
  title: "Tu suis les quatre composantes de la vélocité commerciale: nombre de deals, win rate, taille des deals et durée du cycle: par segment, et tu agis sur les données mensuellement ?",
  options: [
    "La vélocité commerciale n'est pas suivie : nous nous concentrons uniquement sur le revenu total",
    "Une ou deux composantes de vélocité sont suivies mais non revues ensemble",
    "Une vue basique de vélocité existe mais n'est pas revue régulièrement ni segmentée",
    "Les quatre composantes de vélocité sont suivies par segment, revues mensuellement avec des actions d'amélioration documentées",
    "Un tableau de bord de vélocité commerciale revu hebdomadairement : composantes suivies par segment, commercial et motion, avec des initiatives d'amélioration par levier"
  ]
},
{
  id: 5018, pillar: 5, type: "scale",
  show_if: { field: 'product_complexity', contains_any: ['complex / configurable', 'highly complex'] },
  title: "Au cours des 90 derniers jours, quel pourcentage de tes commerciaux a traité une question technique produit dans un deal en cours sans escalader vers le Produit ou l'Engineering ?",
  options: [
    "Très peu ou aucun : la plupart des questions techniques déclenchent une escalade",
    "Une minorité de commerciaux peut traiter les questions techniques standard, mais la plupart nécessitent du support",
    "La plupart des commerciaux peuvent traiter les questions techniques courantes, mais les scénarios complexes sont encore fréquemment escaladés",
    "Une large majorité de commerciaux peut traiter les questions techniques standard en autonomie, avec des escalades limitées aux cas limites définis",
    "La maîtrise technique est une compétence gérée : taux de traitement par les commerciaux suivi, raisons d'escalade revues et enablement continuellement mis à jour pour réduire les escalades inutiles"
  ]
},
{
  id: 5019, pillar: 5, type: "scale",
  title: "Au dernier trimestre complet, quel pourcentage des deals closés incluait une remise non initiée par l'acheteur: et ton plan de rémunération crée-t-il une incitation pour ce comportement ?",
  options: [
    "Nous ne suivons pas si les remises sont initiées par le commercial ou l'acheteur : toutes les remises sont traitées de la même manière",
    "Nous savons que les remises sont courantes mais n'avons pas séparé celles initiées par le commercial de celles initiées par l'acheteur dans nos données",
    "Les remises initiées par les commerciaux sont connues mais la conception de la rémunération ne les adresse ni ne les pénalise",
    "Les remises initiées par les commerciaux sont suivies et la rémunération inclut des garde-fous: mais le changement de comportement n'est pas encore mesurable",
    "Les remises initiées par les commerciaux vs celles initiées par les acheteurs sont suivies mensuellement, la rémunération pénalise les remises initiées par les commerciaux au-dessus d'un taux défini, et le taux de remises initiées par les commerciaux a mesurablement diminué"
  ]
},
{
  id: 5020, pillar: 5, type: "scale",
  title: "Au dernier trimestre, quel pourcentage des deals entrés dans le pipeline ont finalement été disqualifiés: et combien d'entre eux ont été retirés dans les 30 jours suivant leur entrée ?",
  options: [
    "La disqualification est rare : les deals qui entrent dans le pipeline ont tendance à rester quelle que soit l'adéquation",
    "Certains deals sont disqualifiés mais le taux est inconnu et le timing est laissé à la discrétion du commercial",
    "Le taux de disqualification est suivi mais non revu systématiquement: la vitesse de retrait n'est pas mesurée",
    "Le taux de disqualification et le temps moyen dans le pipeline avant retrait sont suivis et revus lors des inspections de pipeline",
    "Une discipline de disqualification rapide : les critères de qualification sont appliqués à l'entrée d'étape, le taux et la vitesse de disqualification sont suivis hebdomadairement, et les disqualifications tardives en volume élevé déclenchent une revue du processus de qualification"
  ]
},

/* ===========================================================
   PILLAR 6: CUSTOMER SUCCESS & EXPANSION (20 QUESTIONS)
   =========================================================== */

{
  id: 6001, pillar: 6, type: "scale",
  title: "À quel point ta motion d'onboarding client est-elle structurée et cadrée dans le temps, et comment tu suis si les clients atteignent la première valeur dans les délais ?",
  subtitle: "Réponds pour ton segment de revenu principal et ta motion GTM principale, sauf si une question te demande explicitement de distinguer.",
  options: [
    "Pas d'onboarding structuré : chaque client est géré différemment",
    "Une checklist d'onboarding existe mais le time-to-value n'est pas suivi",
    "L'onboarding suit un processus basique mais l'atteinte des jalons est incohérente",
    "Un playbook d'onboarding défini avec un suivi des jalons et un time-to-value revu par cohorte",
    "Un moteur d'onboarding entièrement instrumenté : complétion des jalons, time-to-value et adoption précoce suivis par client, revus hebdomadairement"
  ]
},
{
  id: 6002, pillar: 6, type: "scale",
  title: "À quel point tu surveilles la santé des clients, et à quelle vitesse une détérioration de la santé déclenche-t-elle une intervention ?",
  options: [
    "Pas de suivi de santé : le churn est découvert quand les clients annulent",
    "Les managers CS suivent la santé de façon subjective sans cadre partagé",
    "Un modèle de score de santé existe mais est revu peu fréquemment ou de façon incohérente",
    "Un modèle de score de santé revu hebdomadairement avec des playbooks d'intervention documentés pour les comptes à risque",
    "Un système de santé prédictif : indicateurs avancés suivis en temps réel, alertes automatisées déclenchant des playbooks et résultats des interventions mesurés"
  ]
},
{
  id: 6003, pillar: 6, type: "scale",
  title: "Tu peux citer les deux principaux facteurs contrôlables de churn dans ta base: et est-ce basé sur une analyse de cohortes ou déduit de quelques comptes perdus ?",
  options: [
    "Pas d'analyse de rétention : le churn est attribué au produit ou au pricing sans données",
    "Les raisons de churn sont enregistrées dans le CRM mais non analysées pour détecter des schémas",
    "Une analyse annuelle du churn identifie des thèmes larges mais pas les causes racines",
    "Les facteurs de rétention sont quantifiés par l'analyse de cohortes et les entretiens de sortie revus trimestriellement",
    "Un modèle d'intelligence de rétention : prédicteurs de churn scorés par segment, validés trimestriellement, alimentant des playbooks d'intervention proactifs"
  ]
},
{
  id: 6004, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['deer / mid-market', 'elephant / enterprise', 'whale / strategic'] },
  title: "À quel point et quelle substance tu mènes les business reviews clients, et comment les résultats sont-ils suivis ?",
  options: [
    "Pas de QBR : les clients n'entendent parler de nous que lorsqu'il y a un problème",
    "Les QBR ont lieu de façon informelle et incohérente selon le représentant CS",
    "Un template de QBR existe mais la planification et la qualité des résultats sont incohérentes",
    "Les business reviews trimestrielles sont planifiées, structurées et les résultats documentés par compte",
    "Un programme QBR entièrement gouverné : templates de préparation, directives d'implication des dirigeants et suivi des actions rapporté aux résultats de renouvellement et d'expansion"
  ]
},
{
  id: 6005, pillar: 6, type: "scale",
  title: "Le CS fait-il systématiquement remonter l'intelligence client vers le Produit et les Sales: et tu peux retracer une décision spécifique des deux derniers trimestres qui a changé grâce à cela ?",
  options: [
    "Les équipes opèrent en silos : l'intelligence client n'est pas systématiquement partagée",
    "Un certain partage informel a lieu mais il ne pilote pas les décisions cross-fonctionnelles",
    "Un point de synchronisation mensuel existe mais la qualité et la cohérence du partage d'information sont faibles",
    "Un forum d'intelligence client structuré avec des actions produit, ventes et CS documentées",
    "Un système d'intelligence client vivant : signaux produit, opportunités d'expansion et indicateurs de risque partagés entre le CS, le Produit et les Sales en temps réel"
  ]
},
{
  id: 6006, pillar: 6, type: "scale",
  title: "À quel point ton équipe CS identifie-t-elle et actionne-t-elle les opportunités d'expansion, avant que les Sales n'initient la conversation ?",
  options: [
    "L'expansion est entièrement pilotée par les Sales : le CS n'a pas de motion d'expansion",
    "Le CS fait parfois remonter des opportunités d'expansion mais sans processus défini",
    "Le CS identifie des opportunités d'expansion dans les revues de santé mais le transfert aux Sales est incohérent",
    "Un cadre de déclencheurs d'expansion documenté : possédé par le CS jusqu'au transfert, avec pipeline suivi par compte",
    "Le CS mène une motion d'expansion proactive : signaux d'usage, déclencheurs de jalons et modèles de propension par segment alimentent le pipeline indépendamment des Sales"
  ]
},
{
  id: 6007, pillar: 6, type: "scale",
  title: "À quel point ta motion de renouvellement est-elle prévisible et processée, et combien de temps à l'avance tu commences à gérer chaque renouvellement ?",
  options: [
    "Les renouvellements sont gérés de façon réactive : la prise de contact ne commence qu'à l'approche de la date",
    "Un processus de rappel de renouvellement existe mais le timing et la responsabilité sont incohérents",
    "Les renouvellements sont suivis à 90 jours mais la motion n'est pas structurée",
    "Un playbook de renouvellement avec des déclencheurs d'engagement à 120 jours, responsabilité du propriétaire et suivi des prévisions",
    "Un moteur de renouvellement entièrement gouverné : hiérarchisé par risque, déclencheurs d'engagement à 180 jours, prévisions mises à jour hebdomadairement et résultats de renouvellement revus dans le reporting au board"
  ]
},
{
  id: 6008, pillar: 6, type: "scale",
  title: "Dans ta dernière cohorte d'onboarding, quel pourcentage de clients a atteint le jalon de première valeur défini dans les délais: et qu'est-ce qui a bloqué ceux qui ne l'ont pas atteint ?",
  options: [
    "L'adoption produit n'est pas mesurée : le CS s'appuie sur des retours clients anecdotiques",
    "Certaines données d'usage sont disponibles mais ne sont pas systématiquement connectées aux actions CS",
    "Les métriques d'usage sont suivies mais utilisées de façon incohérente dans le scoring de santé",
    "L'adoption produit est suivie par compte, intégrée dans les scores de santé et revue hebdomadairement par le CS",
    "Un système d'intelligence d'usage : adoption des fonctionnalités, profondeur d'engagement et time-to-activation suivis par compte et alimentant des interventions CS automatisées"
  ]
},
{
  id: 6009, pillar: 6, type: "scale",
  title: "Concrètement, comment tu éduques les clients sur les capacités du produit, et ton programme d'éducation améliore-t-il mesurablement les taux d'adoption ou de renouvellement ?",
  options: [
    "Pas de programme d'éducation client : les utilisateurs apprennent par essais et erreurs",
    "Une documentation basique existe mais n'est pas activement promue ni suivie",
    "Un programme d'éducation existe mais les taux de complétion et l'impact sur l'adoption ne sont pas mesurés",
    "Un programme d'éducation client structuré avec un suivi de complétion et une corrélation avec l'adoption",
    "Un modèle d'impact de l'éducation : complétion des certifications, augmentation de l'adoption des fonctionnalités et taux de renouvellement par cohorte d'éducation suivis et revus trimestriellement"
  ]
},
{
  id: 6010, pillar: 6, type: "scale",
  title: "À quel point les responsabilités de gestion de comptes sont-elles définies et exécutées entre les rôles CS et AM, et où les transferts échouent-ils ?",
  options: [
    "Pas de division claire des responsabilités : les rôles CS et AM se chevauchent ou entrent en conflit",
    "Une division informelle des rôles existe mais les lacunes de couverture et de responsabilité sont courantes",
    "Un document de définition des rôles existe mais les transferts entre CS et AM sont incohérents",
    "Une interface CS/AM documentée avec une responsabilité claire par tier de compte et seuil de revenu",
    "Un modèle de gestion de comptes gouverné : règles de responsabilité intégrées dans le CRM, SLA de transfert suivis et couverture revue dans les revues de comptes mensuelles"
  ]
},
{
  id: 6011, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['deer / mid-market', 'elephant / enterprise', 'whale / strategic'] },
  title: "Au dernier trimestre, quel pourcentage de tes comptes a reçu une business review: et pour chacun, une action de suivi a-t-elle été documentée et suivie ?",
  options: [
    "La communication de valeur est ad-hoc : les clients ne voient pas régulièrement leur ROI",
    "Un certain reporting de valeur existe mais il est incohérent et non spécifique au client",
    "Un cadre de valeur existe mais est utilisé sporadiquement dans les QBR et les conversations de renouvellement",
    "Livraison de valeur documentée partagée avec chaque compte trimestriellement, liée aux métriques de succès convenues",
    "Un playbook de valeur client : métriques de succès définies à l'onboarding, résultats suivis trimestriellement et ROI documenté pour chaque conversation de renouvellement et d'expansion"
  ]
},
{
  id: 6012, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['elephant / enterprise', 'whale / strategic'] },
  title: "Au dernier trimestre, combien de comptes sont tombés dans l'écart entre la responsabilité CS et AM: et une règle de transfert plus claire aurait-elle empêché cela ?",
  options: [
    "Pas de règles de transfert : la responsabilité CS et AM est informelle et les comptes tombent fréquemment dans les lacunes",
    "Certains comptes ont des responsables définis, mais la frontière entre CS et AM est floue et les conflits sont courants",
    "Des critères de transfert existent par écrit, mais sont appliqués de façon incohérente: des lacunes surviennent encore et sont gérées de façon réactive",
    "Les règles de transfert CS et AM sont documentées, intégrées dans le CRM et revues trimestriellement: les lacunes sont rares",
    "Un modèle de responsabilité sans lacune : chaque compte a un seul responsable documenté, les transitions suivent un protocole défini et les lacunes de couverture sont suivies comme métrique de gouvernance"
  ]
},
{
  id: 6013, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['elephant / enterprise', 'whale / strategic'] },
  title: "Concrètement, comment ton équipe Account Management mène-t-elle les revues de pipeline d'expansion, séparément des revues de santé CS ?",
  options: [
    "Pas de distinction : l'expansion est discutée dans les appels de santé CS sans gestion de pipeline dédiée",
    "Le pipeline d'expansion est occasionnellement soulevé dans les réunions CS sans processus séparé",
    "Une revue d'expansion séparée existe mais la cadence et la qualité sont incohérentes",
    "Des revues hebdomadaires du pipeline d'expansion sont menées séparément des appels de santé CS avec des actions de deal documentées",
    "L'expansion est gérée comme une motion de vente distincte : pipeline revu hebdomadairement, prévisions suivies séparément et ARR d'expansion rapporté indépendamment de l'ARR de renouvellement"
  ]
},
{
  id: 6014, pillar: 6, type: "scale",
  title: "Concrètement, comment les comptes à risque sont-ils identifiés, escaladés et gérés avant qu'ils ne churnent ?",
  options: [
    "Les comptes à risque ne sont identifiés qu'après que le client ait signalé son intention d'annuler",
    "Les managers CS signalent les comptes à risque de façon informelle sans processus partagé",
    "Un système de signalement de risque existe mais les playbooks d'intervention sont incohérents",
    "Un cadre de risque documenté : seuils de santé, déclencheurs d'escalade et playbooks d'intervention revus hebdomadairement",
    "Un moteur de gestion de risque proactif : les signaux prédictifs déclenchent automatiquement des playbooks, les chemins d'escalade sont gouvernés et les taux de sauvegarde sont suivis par tier de risque"
  ]
},
{
  id: 6015, pillar: 6, type: "scale",
  title: "Cite une décision Produit ou GTM des deux derniers trimestres qui a changé grâce à l'intelligence CS: et combien de temps a-t-il fallu entre le signal et la décision ?",
  options: [
    "Nous ne pouvons pas en nommer un : l'intelligence CS ne pilote pas visiblement les décisions Produit ou GTM",
    "Les signaux CS influencent occasionnellement les décisions de façon informelle, mais la connexion n'est pas documentée",
    "Quelques décisions ont été liées à un input CS, mais le chemin signal-vers-décision est incohérent et lent",
    "Plusieurs décisions par trimestre sont traçables à l'intelligence CS, avec l'origine du signal et le calendrier documentés",
    "Un système d'intelligence CS en boucle fermée : signaux enregistrés, revus dans des forums structurés, décisions liées à la source et délai signal-vers-décision suivi comme métrique de performance"
  ]
},
{
  id: 6016, pillar: 6, type: "scale",
  title: "Quel est ton ratio actuel clients par CSM: et ce ratio s'est-il amélioré ou dégradé au cours des 12 derniers mois à mesure que ta base client a grandi ?",
  options: [
    "Nous ne suivons pas les clients par CSM : chaque compte nécessite un temps CS à peu près dédié et le ratio n'a jamais été calculé",
    "Le ratio existe de façon informelle mais s'est dégradé avec notre croissance: nous n'avons pas pu dimensionner la capacité CS en avance sur la croissance client",
    "Le ratio est suivi mais à peu près stable : nous avons ajouté du headcount CS proportionnellement sans améliorer l'effet de levier",
    "Le ratio clients par CSM s'est amélioré au cours des 12 derniers mois grâce au tiering, à l'automatisation ou au self-service: suivi trimestriellement",
    "L'effet de levier CS est une métrique gérée : clients par CSM suivi mensuellement, en amélioration trimestre après trimestre, et un ratio cible est défini dans la planification annuelle avec un chemin documenté pour l'atteindre"
  ]
},
{
  id: 6017, pillar: 6, type: "scale",
  title: "Ton équipe CS peut-elle extraire une vue client unifiée: santé, usage, support et données commerciales: sans assembler manuellement les données entre les systèmes ?",
  options: [
    "Les données CS sont fragmentées entre des systèmes déconnectés : pas de vue client unifiée",
    "L'assemblage manuel des données fournit une vue partielle, revue peu fréquemment",
    "Une intégration partielle existe mais les lacunes dans les données de santé ou d'usage nécessitent des contournements manuels",
    "Les données CS, CRM et produit sont intégrées avec une vue client unique disponible dans les tableaux de bord",
    "Une plateforme de données client unifiée : santé, usage, support et données commerciales dans une seule vue, mise à jour en temps réel et alimentant des actions automatisées"
  ]
},
{
  id: 6018, pillar: 6, type: "scale",
  title: "Tu suis le churn logo et le churn revenu comme des métriques distinctes: et au cours des deux derniers trimestres, ont-ils évolué différemment ?",
  options: [
    "Une seule métrique de churn est suivie : le churn logo et le churn revenu ne sont pas séparés",
    "Les deux métriques sont calculées, mais elles sont revues ensemble sans analyse de pourquoi elles divergent",
    "Le churn logo et le churn revenu sont suivis séparément, et les divergences sont notées mais non formellement analysées",
    "Les deux métriques sont suivies séparément, revues mensuellement et les divergences sont analysées pour en trouver la cause racine",
    "Un système diagnostic de double churn : churn logo et churn revenu suivis et tendancés séparément, divergence analysée par cohorte et segment, et insights alimentant la planification de capacité CS et d'expansion"
  ]
},
{
  id: 6019, pillar: 6, type: "scale",
  title: "À quel point ta fonction CS contribue-t-elle à un NRR prévisible, et quelle confiance tu as dans ta prévision NRR à trois trimestres ?",
  options: [
    "Le NRR est imprévisible : les résultats de rétention et d'expansion sont volatils d'un trimestre à l'autre",
    "Les tendances NRR sont suivies mais la précision des prévisions est limitée à 30-60 jours",
    "Le NRR est modélisé à 90 jours mais la précision des prévisions est variable",
    "Le NRR est prévu à 180 jours avec des inputs documentés de pipeline de renouvellement et d'expansion",
    "Une prévision NRR entièrement modélisée : risque de renouvellement, pipeline d'expansion et prédicteurs de churn mis à jour hebdomadairement et revus dans le reporting au board"
  ]
},
{
  id: 6020, pillar: 6, type: "scale",
  title: "Au dernier trimestre, combien de décisions GTM cross-fonctionnelles ont été directement alimentées par l'intelligence client remontée par le CS: et est-ce suivi quelque part ?",
  options: [
    "Aucune : l'intelligence CS n'est pas systématiquement remontée dans les décisions GTM cross-fonctionnelles",
    "Certains signaux clients atteignent d'autres équipes de façon informelle, mais aucune décision n'est retracée jusqu'à eux",
    "Quelques décisions ont été influencées par les insights CS, mais la connexion n'est pas documentée de façon cohérente",
    "L'intelligence client du CS est revue dans des forums structurés et peut être liée à des décisions GTM ou Produit documentées",
    "Un système d'intelligence client en boucle fermée : les signaux originés par le CS sont enregistrés, revus de façon cross-fonctionnelle et les décisions influencées par eux sont suivies avec les responsables et les résultats"
  ]
},

/* ===========================================================
   PILLAR 7: REVENUE OPERATIONS & SYSTEMS (20 QUESTIONS)
   =========================================================== */

{
  id: 7001, pillar: 7, type: "scale",
  title: "À quel point les enregistrements CRM sont-ils maintenus, et comment tu mesures et tu appliques la qualité des données ?",
  subtitle: "Réponds pour ton segment de revenu principal et ta motion GTM principale, sauf si une question te demande explicitement de distinguer.",
  options: [
    "Les données CRM ne sont pas fiables : les enregistrements sont incomplets, dupliqués ou obsolètes",
    "La qualité des données est attendue mais non mesurée ni appliquée",
    "Des audits de données périodiques ont lieu mais les problèmes d'hygiène reviennent sans corrections systémiques",
    "La qualité des données CRM est mesurée mensuellement avec des responsables documentés et des objectifs de correction",
    "Un système d'hygiène CRM gouverné : champs requis appliqués, complétude scorée hebdomadairement et qualité des données rapportée au leadership mensuellement"
  ]
},
{
  id: 7002, pillar: 7, type: "scale",
  title: "Lors de ton dernier changement de processus, combien de temps a-t-il fallu pour refléter ce changement dans les définitions d'étapes CRM et les champs requis: et qui était responsable de cette mise à jour ?",
  options: [
    "Le CRM est utilisé pour enregistrer les contacts mais ne reflète pas le processus de vente",
    "Des étapes CRM existent mais ne correspondent pas à la façon dont les deals progressent réellement",
    "Le CRM reflète globalement le processus mais les critères de sortie et les champs requis sont incomplets",
    "Les définitions d'étapes CRM, les critères de sortie et les champs requis reflètent le processus de vente réel",
    "Le CRM est un miroir de processus gouverné : portes d'étape appliquées, préparation des deal reviews automatisée et configuration revue après chaque changement de processus"
  ]
},
{
  id: 7003, pillar: 7, type: "scale",
  title: "Les workflows GTM sont-ils documentés, et avec quelle cohérence ces processus sont-ils suivis entre les équipes et les régions ?",
  options: [
    "Pas de documentation de processus : les workflows n'existent que dans la pratique individuelle",
    "Certains processus sont documentés mais la couverture est incomplète et l'accès est incohérent",
    "Les processus principaux sont documentés mais non systématiquement suivis ni appliqués",
    "Une bibliothèque de processus couvrant tous les workflows GTM majeurs, revue trimestriellement et liée à l'onboarding",
    "Une bibliothèque de processus gouvernée : versionnée, accès suivi et déviation signalée dans les revues opérationnelles mensuellement"
  ]
},
{
  id: 7004, pillar: 7, type: "scale",
  title: "À quel point ta stack technologique GTM automatise-t-il les processus répétitifs, et où les goulots d'étranglement manuels consomment-ils encore la capacité des commerciaux et de l'ops ?",
  options: [
    "Le GTM fonctionne presque entièrement sur des processus manuels : l'automatisation est minimale",
    "Une automatisation basique existe dans l'email et le CRM mais les transferts restent manuels",
    "Les workflows principaux sont automatisés mais un effort manuel significatif reste dans le reporting et le routage",
    "La plupart des processus GTM routiniers sont automatisés avec des exceptions documentées et des contrôles de dérogation manuelle",
    "Une couche d'automatisation entièrement instrumentée : routage, séquencement, reporting et alertes automatisés, avec des points de contact manuels limités aux activités nécessitant un jugement élevé"
  ]
},
{
  id: 7005, pillar: 7, type: "scale",
  title: "Tu peux retracer un prospect du premier contact au closed-won sans assembler manuellement les données entre les systèmes: et combien de temps cela prend-il actuellement ?",
  options: [
    "Les systèmes sont en silos : les données ne peuvent pas être tracées entre les outils sans travail manuel",
    "Des intégrations partielles existent mais les lacunes de données et les échecs de synchronisation sont courants",
    "Les systèmes principaux sont intégrés mais certains flux de données nécessitent une réconciliation manuelle",
    "Le CRM, le MAP et le SEP sont entièrement intégrés avec des flux de données propres revus mensuellement",
    "Une architecture de données GTM cohérente : tous les systèmes intégrés, qualité des données surveillée en temps réel et santé des intégrations revue trimestriellement"
  ]
},
{
  id: 7006, pillar: 7, type: "scale",
  title: "À quel point ton processus de routage et d'attribution des leads est-il structuré et basé sur des règles, et à quelle vitesse un lead qualifié atteint-il le bon commercial ?",
  options: [
    "Le routage des leads est manuel : quelqu'un décide qui reçoit chaque lead",
    "Des règles de routage basiques existent dans le CRM mais les exceptions sont fréquentes et non suivies",
    "Les règles de routage couvrent la plupart des scénarios mais les cas limites causent des retards ou des doubles attributions",
    "Un cadre de routage documenté couvrant tous les types de leads, revu trimestriellement pour la couverture",
    "Un système de routage des leads automatisé : règles documentées, testées et surveillées, avec vitesse et précision du routage suivies hebdomadairement"
  ]
},
{
  id: 7007, pillar: 7, type: "scale",
  title: "À quel point ta stack technologique GTM est-il géré côté coûts, et quand tu as réalisé ton dernier audit de redondance, sous-utilisation ou inefficacité contractuelle ?",
  options: [
    "Aucun audit du stack technologique n'a été mené : les outils sont ajoutés et oubliés",
    "Une vue approximative des outils existe mais aucun audit formel ni rationalisation n'a eu lieu",
    "Une revue annuelle du stack technologique a lieu mais l'utilisation et l'optimisation des contrats ne sont pas suivies",
    "Un audit semestriel du stack technologique revoit l'utilisation, la valeur des contrats et la redondance avec des actions documentées",
    "Un programme de gouvernance du stack technologique continu : utilisation surveillée mensuellement, contrats benchmarkés annuellement et décisions de rationalisation revues trimestriellement"
  ]
},
{
  id: 7008, pillar: 7, type: "scale",
  title: "Le RevOps fonctionne-t-il comme un partenaire stratégique des équipes GTM: ou principalement comme une fonction réactive d'exécution de demandes ?",
  options: [
    "Le RevOps est réactif : le travail est piloté par celui qui demande le plus fort",
    "Le RevOps a un backlog mais la priorisation est incohérente et non gouvernée",
    "Le RevOps priorise par demande d'équipe mais la pondération de l'impact business est informelle",
    "Le RevOps exécute un processus de priorisation basé sur des sprints, aligné avec le leadership GTM trimestriellement",
    "Le RevOps opère comme une fonction stratégique : processus d'intake gouverné, feuille de route pondérée par l'impact et revue des parties prenantes trimestrielle"
  ]
},
{
  id: 7009, pillar: 7, type: "scale",
  title: "Pour tes trois principaux outils GTM par dépense : quel est le taux réel d'utilisation quotidienne active par rapport aux sièges licenciés: et quand tu as revu ces données pour la dernière fois ?",
  options: [
    "L'adoption des outils n'est pas suivie : les licences sont achetées et nous supposons l'utilisation sans données",
    "Nous avons une idée approximative des outils sous-utilisés mais n'avons pas mesuré l'usage quotidien actif vs les sièges licenciés",
    "L'utilisation est suivie pour au moins un outil majeur mais les autres ne sont pas mesurés ni revus",
    "L'utilisation est suivie pour tous les outils principaux, revue trimestriellement et les licences sous-utilisées identifiées: mais les décisions de réallocation sont lentes",
    "Un programme gouverné d'adoption des outils : usage quotidien actif vs sièges licenciés suivi mensuellement par outil, la sous-utilisation déclenche une revue de consolidation sous 30 jours et le coût par utilisateur actif est une métrique gérée"
  ]
},
{
  id: 7010, pillar: 7, type: "scale",
  title: "Concrètement, comment tu mesures et tu gères l'efficacité GTM, et comment tu sais si tu progresses ou tu recules ?",
  options: [
    "L'efficacité GTM n'est pas mesurée : nous nous concentrons uniquement sur le revenu top-line",
    "Certaines métriques d'efficacité existent mais sont revues peu fréquemment",
    "Les métriques d'efficacité principales sont suivies mais non revues par rapport aux objectifs ou aux benchmarks",
    "Les métriques d'efficacité GTM sont revues mensuellement par rapport aux objectifs définis et aux tendances historiques",
    "Un tableau de bord d'efficacité GTM revu mensuellement : CAC, retour sur investissement, vélocité du pipeline et burn multiple benchmarkés et pilotant les décisions d'investissement trimestrielles"
  ]
},
{
  id: 7011, pillar: 7, type: "scale",
  title: "À quel point les changements de données et de processus sont-ils gouvernés, et comment tu empêches les changements non contrôlés de créer des incohérences de reporting ?",
  options: [
    "Pas de gouvernance : n'importe qui peut modifier les champs CRM, les processus ou les intégrations",
    "Des normes informelles existent mais les changements non contrôlés sont courants",
    "Un processus de demande de changement existe mais la conformité est incohérente",
    "Un processus de gouvernance des changements documenté : demandes revues, impact évalué et changements enregistrés",
    "Un comité formel de contrôle des changements : tous les changements de système et processus GTM revus, approuvés, testés et documentés avant déploiement"
  ]
},
{
  id: 7012, pillar: 7, type: "scale",
  title: "Concrètement, comment tes structures de territoires et de quotas sont-elles conçues et maintenues équitablement, et quand ont-elles été formellement revues pour la dernière fois ?",
  options: [
    "Les territoires et quotas sont fixés historiquement : pas de processus formel de conception ou de revue",
    "Les quotas sont fixés top-down avec un minimum de données soutenant la conception des territoires",
    "Des revues annuelles de quotas et de territoires ont lieu mais le processus n'est pas guidé par les données",
    "La conception des territoires et quotas suit un cadre documenté revu annuellement avec la Finance",
    "Un modèle de territoires et quotas guidé par les données : potentiel des comptes, capacité des commerciaux et opportunité de marché revus trimestriellement, avec des ajustements en cours d'année documentés"
  ]
},
{
  id: 7013, pillar: 7, type: "scale",
  title: "À quel point le RevOps est-il structurellement intégré entre les Sales, le Marketing et le CS, et le RevOps a-t-il un siège dans la planification GTM ?",
  options: [
    "Le RevOps sert une seule fonction : Sales ou Marketing, sans périmètre cross-fonctionnel",
    "Le RevOps couvre plusieurs fonctions mais opère de façon réactive plutôt que dans la planification",
    "Le RevOps assiste à la planification GTM mais ne co-possède pas les décisions de processus ou d'outillage",
    "Le RevOps est un co-propriétaire formel du modèle opérationnel GTM, des décisions de processus et d'outillage",
    "Le RevOps est une fonction GTM stratégique : co-possède la planification, les données et les processus sur toutes les fonctions de revenu avec un siège dans les revues mensuelles du leadership"
  ]
},
{
  id: 7014, pillar: 7, type: "scale",
  title: "À quel point tes tableaux de bord et rapports GTM sont-ils actionnables et utilisés de façon cohérente, et qui les revoit et à quelle cadence ?",
  options: [
    "Pas de tableaux de bord : le reporting est fait manuellement dans des feuilles de calcul",
    "Des tableaux de bord existent mais sont rarement ouverts ou utilisés pour guider les décisions",
    "Des rapports standard sont produits mais les données ne sont pas systématiquement fiables ni exploitées",
    "Les tableaux de bord sont revus en réunions GTM hebdomadaires avec des résultats d'action documentés",
    "Une architecture de reporting gouvernée : tableaux de bord automatisés revus aux cadences quotidienne, hebdomadaire et mensuelle, avec un journal de décisions suivant les actions de chaque revue"
  ]
},
{
  id: 7015, pillar: 7, type: "scale",
  title: "Ton équipe peut-elle extraire une vue client complète, du premier contact à la santé actuelle, sans assembler manuellement les données entre les systèmes ?",
  options: [
    "Une vue client complète n'existe pas : les données sont dispersées entre des outils déconnectés",
    "Une vue partielle peut être assemblée manuellement mais nécessite un effort significatif",
    "Une vue client existe mais nécessite des corrections manuelles régulières pour être exacte",
    "Une vue client unique automatisée existe dans le CRM ou le BI, mise à jour quotidiennement",
    "Un enregistrement client unifié en temps réel : tous les points de contact, signaux de santé et données commerciales accessibles dans une seule vue sans intervention manuelle"
  ]
},
{
  id: 7016, pillar: 7, type: "scale",
  title: "Au dernier trimestre, quel pourcentage des équipes GTM a suivi les processus standard définis par le RevOps sans déviation: et comment le stu as ?",
  options: [
    "Pas de standardisation : chaque équipe suit sa propre approche",
    "Certains processus partagés existent mais l'adoption est inégale",
    "Les processus principaux sont standardisés mais le suivi de l'adoption est informel",
    "Les processus GTM sont standardisés, l'adoption suivie par équipe et la déviation adressée mensuellement",
    "Un programme de standardisation : adhérence aux processus scorée par équipe et revue mensuellement, avec les causes racines de déviation adressées dans des audits trimestriels"
  ]
},
{
  id: 7017, pillar: 7, type: "scale",
  title: "À quel point les revues de pipeline et de prévisions sont-elles menées, et dans quelle mesure la précision des prévisions s'améliore-t-elle au cours d'un trimestre ?",
  options: [
    "Pas de processus de prévision formel : les prédictions de revenu sont basées sur le feeling",
    "Une prévision est produite mais la précision n'est ni suivie ni revue par rapport aux résultats",
    "Une prévision trimestrielle existe mais la précision se dégrade significativement au cours du trimestre",
    "Une revue hebdomadaire des prévisions avec un suivi de précision documenté et une explication des écarts",
    "Un système opérationnel de prévisions gouverné : précision appel-vers-closing suivie hebdomadairement, écarts expliqués et méthodologie de prévision revue après chaque trimestre"
  ]
},
{
  id: 7018, pillar: 7, type: "scale",
  title: "Au dernier trimestre, quel pourcentage des demandes RevOps a été livré à temps: et pour les principales, tu peux montrer l'impact business qu'elles ont produit ?",
  options: [
    "Le respect des délais de livraison des demandes n'est pas suivi et l'impact business est généralement inconnu",
    "Certaines demandes sont livrées à temps, mais ni l'adhérence aux SLA ni l'impact ne sont revus systématiquement",
    "Le respect des délais est suivi pour certaines demandes, mais l'impact business est documenté de façon incohérente",
    "Le respect des délais de livraison RevOps est suivi et les demandes majeures incluent un impact business documenté après livraison",
    "Un modèle de livraison RevOps gouverné : taux de livraison à temps suivi mensuellement, les demandes majeures nécessitent une documentation d'impact et la priorisation du backlog est ajustée en fonction de la valeur business livrée"
  ]
},
{
  id: 7019, pillar: 7, type: "scale",
  title: "Comment le RevOps contribue-t-il à la planification GTM, et la capacité RevOps fait-elle partie de la discussion de planification annuelle ?",
  options: [
    "Le RevOps est exclu de la planification : la capacité opérationnelle n'est pas prise en compte",
    "Le RevOps est consulté occasionnellement dans la planification mais n'est pas un input formel",
    "Le RevOps contribue à la planification des systèmes et processus annuellement",
    "Le RevOps est un input de planification formel : capacité opérationnelle, outillage et feuille de route des processus revus dans la planification annuelle et trimestrielle",
    "Le RevOps co-possède le plan opérationnel GTM : capacité des systèmes, feuille de route des processus et infrastructure de données sont planifiés en parallèle du headcount et du budget"
  ]
},
{
  id: 7020, pillar: 7, type: "scale",
  title: "Quel pourcentage de tes commerciaux utilise activement tes outils GTM principaux sans incitation ni contrainte: et comment tu distingues l'adoption volontaire de la conformité ?",
  options: [
    "Les outils ne sont utilisés que parce que la conformité l'exige : les commerciaux ne les utiliseraient pas volontairement et les contournent fréquemment",
    "La plupart des commerciaux tolèrent les outils mais les contournements sont courants: le stack crée plus de friction qu'il n'en supprime",
    "Les outils principaux sont utilisés correctement : l'adoption est acceptable mais les commerciaux ne les voient pas comme réellement utiles à leur workflow",
    "La plupart des commerciaux utilisent volontairement les outils principaux et les trouvent utiles: le feedback est collecté et les problèmes UX sont adressés",
    "Un stack centré sur le commercial avec une adoption volontaire suivie : les données d'usage montrent que les commerciaux accèdent aux outils avant d'y être invités, la friction de workflow est revue trimestriellement et les outils qui scorent systématiquement bas sont retirés ou reconçus"
  ]
},

/* ===========================================================
   PILLAR 8: PRICING & PACKAGING (20 QUESTIONS)
   =========================================================== */

{
  id: 8001, pillar: 8, type: "scale",
  title: "À quel point ta stratégie de pricing est-elle explicitement définie, et quand a-t-elle été revue pour la dernière fois par rapport aux données de marché et de coûts ?",
  subtitle: "Réponds pour ton segment de revenu principal et ta motion GTM principale, sauf si une question te demande explicitement de distinguer.",
  options: [
    "Pas de stratégie de pricing : les prix ont été fixés une fois et n'ont pas été revus",
    "Une philosophie de pricing informelle existe mais n'est ni documentée ni gouvernée",
    "Un document de stratégie de pricing existe mais n'a pas été mis à jour depuis plus d'un an",
    "Une stratégie de pricing revue annuellement par rapport aux données win/loss, aux benchmarks concurrentiels et aux objectifs de marge",
    "Une stratégie de pricing gouvernée : revue semestriellement, alimentée par la recherche acheteurs, les données de deals et l'intelligence concurrentielle, avec une justification des décisions documentée"
  ]
},
{
  id: 8002, pillar: 8, type: "scale",
  title: "Ta structure de packaging reflète-t-elle la manière dont les clients adoptent et s'étendent réellement: et l'tu as validée par rapport aux données d'usage réelles au cours des 12 derniers mois ?",
  options: [
    "Le packaging a été conçu en interne : les patterns d'adoption client n'ont pas été pris en compte",
    "Le packaging est vaguement aligné avec les patterns d'usage mais crée de la friction aux points d'expansion",
    "Le packaging est aligné avec les patterns d'adoption principaux mais les segments secondaires sont mal servis",
    "Le packaging est validé par rapport aux données d'adoption et revu annuellement pour l'alignement",
    "Une architecture de packaging conçue à partir des données d'adoption : déclencheurs d'expansion, parcours d'upgrade et alignement des métriques de valeur validés par des entretiens clients et une analyse d'usage"
  ]
},
{
  id: 8003, pillar: 8, type: "scale",
  title: "À quel point un acheteur peut-il comprendre ton pricing en moins de deux minutes sans avoir besoin d'un commercial pour l'expliquer ?",
  options: [
    "Le pricing nécessite des explications significatives : les acheteurs sont fréquemment confus",
    "La plupart des acheteurs ont besoin d'un appel pour comprendre ce qu'ils paieront",
    "Le pricing est compréhensible pour les segments principaux mais crée de la confusion pour les autres",
    "Le pricing est clair et auto-explicatif pour tous les segments d'acheteurs principaux",
    "Le pricing est validé par des tests de compréhension acheteur : tous les segments peuvent auto-sélectionner le bon tier sans implication commerciale"
  ]
},
{
  id: 8004, pillar: 8, type: "scale",
  title: "À quel point tu testes et tu valides la propension à payer sur tes segments clients clés: et par quelle méthodologie ?",
  options: [
    "La propension à payer est inconnue : le pricing a été fixé sur la base du coût ou du feeling",
    "Conscience anecdotique à partir de deals perdus sur le prix, non validée",
    "Certains entretiens acheteurs ont alimenté le pricing mais la recherche n'est pas systématique",
    "Propension à payer validée par une recherche acheteurs structurée et une analyse du taux de closing par tranche de prix",
    "Un modèle de propension à payer par segment : validé par une recherche contrôlée, une analyse pricing win/loss et un taux de closing par tier de prix, revu annuellement"
  ]
},
{
  id: 8005, pillar: 8, type: "scale",
  title: "Quelle est ta preuve pour ton niveau de pricing actuel: entretiens acheteurs, analyse du taux de closing par tranche de prix ou benchmark concurrentiel ? Quand cette preuve a-t-elle été mise à jour pour la dernière fois ?",
  options: [
    "La propension à payer est inconnue : le pricing a été fixé sur la base du coût ou d'hypothèses internes",
    "Conscience anecdotique à partir de deals perdus sur le prix, non validée par une recherche structurée",
    "Certains entretiens acheteurs ont alimenté le pricing mais la recherche n'est ni systématique ni segmentée",
    "Propension à payer validée par une recherche acheteurs structurée et une analyse du taux de closing par tranche de prix",
    "Un modèle de propension à payer par segment : validé par une recherche contrôlée, des données pricing win/loss et un taux de closing par tier de prix: revu annuellement et alimentant les décisions de packaging"
  ]
},
{
  id: 8006, pillar: 8, type: "scale",
  title: "À quel point tes prix sont-ils ancrés à la valeur mesurable que ton produit délivre aux clients dans chaque segment ?",
  options: [
    "Le pricing est basé sur le coût ou référencé au concurrent : la valeur n'est pas l'ancre principale",
    "Un narratif de valeur informel est utilisé dans les négociations mais le pricing n'est pas dérivé de la valeur",
    "Le pricing est approximativement aligné avec la valeur pour les segments principaux",
    "Un cadre documenté valeur-vers-prix validé par une analyse ROI client par segment",
    "Pricing basé sur la valeur avec un modèle ROI documenté par segment : ancres de valeur testées par des entretiens acheteurs et mises à jour annuellement"
  ]
},
{
  id: 8007, pillar: 8, type: "scale",
  title: "Ton architecture de packaging est-elle basée sur la manière dont les clients adoptent et s'étendent réellement: ou sur ce qui était le plus facile à construire ? Quand l'tu as validée pour la dernière fois par rapport aux données d'usage réelles ?",
  options: [
    "Le packaging a été conçu en interne sans référence aux patterns d'adoption client",
    "Le packaging est vaguement aligné avec les patterns d'usage mais crée de la friction aux points d'expansion courants",
    "Le packaging est aligné avec les patterns d'adoption principaux mais les segments secondaires et les parcours d'expansion sont mal servis",
    "Le packaging est validé par rapport aux données d'adoption et revu annuellement pour l'alignement avec la réalité d'usage",
    "Une architecture de packaging conçue à partir des données d'adoption et d'expansion : parcours d'upgrade, déclencheurs d'usage et alignement des métriques de valeur validés par des entretiens clients et une analyse de cohortes"
  ]
},
{
  id: 8008, pillar: 8, type: "scale",
  title: "À quel point tu comprends quelles fonctionnalités génèrent la propension à payer: et cette compréhension informe-t-elle directement la façon dont tu les packages et les tarifes ?",
  options: [
    "Pas d'intelligence pricing au niveau des fonctionnalités : les fonctionnalités sont packagées sans test de valeur",
    "Des hypothèses intuitives guident le packaging des fonctionnalités mais aucune recherche ne les soutient",
    "Des tests de valeur par fonctionnalité ont eu lieu mais ne sont pas systématiquement appliqués",
    "Mapping fonctionnalité-vers-propension à payer validé par une recherche acheteurs et une analyse du taux de closing",
    "Un modèle vivant de valeur des fonctionnalités : importance des fonctionnalités et propension à payer testées en continu par des entretiens acheteurs et des données d'usage, alimentant le packaging annuellement"
  ]
},
{
  id: 8009, pillar: 8, type: "scale",
  title: "Au dernier trimestre, quel pourcentage des deals d'expansion a nécessité une renégociation complète du contrat: et ce pourcentage s'améliore-t-il ou se dégrade-t-il ?",
  options: [
    "Toute expansion nécessite un nouveau processus commercial : le packaging ne s'adapte pas à la croissance",
    "L'expansion est possible mais crée de la friction commerciale en raison du packaging ou de la structure contractuelle",
    "Certains parcours d'expansion existent mais tous les scénarios de croissance courants ne sont pas gérés proprement",
    "Le packaging inclut des parcours d'expansion définis validés par rapport aux patterns de croissance client courants",
    "Une architecture d'expansion modulaire : déclencheurs d'usage, de sièges et de fonctionnalités auto-facturés sans renégociation: fuite d'expansion suivie trimestriellement et packaging mis à jour quand une fuite est détectée"
  ]
},
{
  id: 8010, pillar: 8, type: "scale",
  title: "Dans les 10 derniers deals, combien de prospects ont demandé une explication du pricing qui aurait dû être évidente à partir de tes supports publiés ?",
  options: [
    "Tous ou presque tous les prospects ont eu besoin d'explications significatives sur le pricing : notre pricing n'est auto-explicatif pour aucun segment",
    "La plupart des prospects ont eu besoin d'au moins un appel de suivi pour comprendre ce qu'ils paieraient avant de pouvoir évaluer",
    "La moitié ou plus ont eu besoin de clarifications: le pricing est à peu près compréhensible pour les acheteurs expérimentés mais confus pour les autres",
    "Moins de 3 prospects sur 10 ont eu besoin d'explications sur le pricing: la plupart des acheteurs du segment principal peuvent auto-sélectionner le bon tier",
    "La clarté du pricing est testée : compréhension acheteur validée par des entretiens structurés: moins d'1 prospect sur 10 du segment principal nécessite une explication de pricing par un commercial"
  ]
},
{
  id: 8011, pillar: 8, type: "scale",
  title: "À quel point tu comprends la sensibilité au prix au niveau du segment, et comment cela informe-t-il quels segments tu priorises ?",
  options: [
    "La sensibilité au prix n'est pas analysée par segment : une seule structure de pricing sert tous les segments",
    "Conscience approximative de quels segments contestent le prix",
    "Sensibilité au prix par segment suivie de façon informelle par les données de deals",
    "Sensibilité au prix analysée par segment, validée par les données de deals et d'entretiens revues annuellement",
    "Un modèle de sensibilité au prix par segment : élasticité quantifiée par segment, alimentant l'architecture de prix, la gouvernance des remises et l'allocation de ressources GTM"
  ]
},
{
  id: 8012, pillar: 8, type: "scale",
  title: "Ton packaging est-il basé sur une recherche documentée de propension à payer: ou sur des hypothèses internes sur les fonctionnalités les plus précieuses ?",
  options: [
    "Le packaging a été conçu en interne : aucune recherche acheteur sur la valeur des fonctionnalités n'a jamais été menée",
    "Des hypothèses intuitives guident le packaging des fonctionnalités: aucune recherche structurée ne soutient les décisions de packaging actuelles",
    "Des tests de valeur par fonctionnalité ont eu lieu mais les résultats ne sont pas systématiquement appliqués aux décisions de packaging",
    "Le mapping fonctionnalité-vers-propension à payer a été validé par une recherche acheteurs et une analyse du taux de closing par tranche de prix",
    "Un modèle vivant de valeur des fonctionnalités existe : importance des fonctionnalités et propension à payer testées par des entretiens acheteurs et des données d'usage, revu annuellement et alimentant directement les décisions de packaging: pas les hypothèses"
  ]
},
{
  id: 8013, pillar: 8, type: "scale",
  title: "Ton pricing et packaging offrent-ils des configurations significativement différentes pour différents personas, cas d'usage ou verticaux: ou est-ce effectivement une seule structure pour tout le monde ?",
  options: [
    "Une structure de prix universelle sert tous les personas et cas d'usage",
    "Des ajustements de prix informels sont faits pour des personas spécifiques sans justification documentée",
    "Une certaine différenciation par persona ou vertical existe mais n'est pas appliquée de façon cohérente",
    "Des options de packaging basées sur les personas ou les cas d'usage sont documentées et utilisées dans la structuration des deals",
    "Une architecture de packaging entièrement différenciée : configurations spécifiques aux personas, cas d'usage et verticaux validées par la recherche acheteurs"
  ]
},
{
  id: 8014, pillar: 8, type: "scale",
  title: "Quand tu as formellement benchmarké ton pricing par rapport aux concurrents pour la dernière fois: et cette analyse a-t-elle modifié une décision de pricing ou de packaging ?",
  options: [
    "Pas de données de pricing concurrentiel : le positionnement par rapport aux alternatives est inconnu",
    "Conscience approximative du pricing concurrentiel à partir des appels commerciaux, non structurée ni récente",
    "Une revue périodique du pricing concurrentiel a lieu mais la qualité et la fraîcheur des données sont limitées",
    "Une revue annuelle du pricing concurrentiel avec des implications de positionnement et des décisions documentées",
    "Un programme d'intelligence pricing concurrentielle : benchmarké semestriellement, pricing concurrentiel au niveau des deals suivi dans le CRM et position revue trimestriellement: avec une réponse documentée quand la position change"
  ]
},
{
  id: 8015, pillar: 8, type: "scale",
  title: "Au dernier trimestre, combien de deals ont créé un conflit de canal entre tes motions self-serve et enterprise: et existe-t-il une règle documentée qui gouverne quelle motion possède quel compte ?",
  options: [
    "Le conflit de canal n'est pas géré : le self-serve et l'enterprise sont régulièrement en concurrence pour les mêmes comptes sans règle de résolution",
    "Le conflit existe et est connu mais géré au cas par cas: aucune règle formelle de responsabilité n'existe",
    "Une règle informelle gouverne la plupart des conflits mais les cas limites causent encore de la friction ou des conflits internes",
    "Une règle de responsabilité documentée définit quelle motion gère quels comptes: la plupart des conflits sont résolus sans escalade",
    "Le conflit de canal est une métrique suivie : règles de responsabilité appliquées dans le CRM, taux de conflit surveillé mensuellement et lacunes des règles adressées dans les revues RevOps trimestrielles"
  ]
},
{
  id: 8016, pillar: 8, type: "scale",
  title: "Concrètement, comment tu identifies où le pricing ou le packaging crée de la friction qui bloque les deals ou ralentit le cycle de vente ?",
  options: [
    "La friction de pricing n'est identifiée que lorsque des deals sont perdus",
    "Les anecdotes commerciales font remonter la friction de façon informelle sans suivi systématique",
    "L'analyse des deals perdus fait parfois remonter des blocages de pricing",
    "La friction de pricing est suivie dans l'analyse des deals perdus et revue trimestriellement avec la Finance et le RevOps",
    "Un programme d'intelligence de friction pricing : blocages suivis par segment et étape de deal, revus trimestriellement et alimentant les mises à jour de packaging et les changements de règles de remise"
  ]
},
{
  id: 8017, pillar: 8, type: "scale",
  title: "À quelle fréquence et proprement tu testes les changements de pricing, et quel est ton processus pour valider une mise à jour de pricing avant un déploiement complet ?",
  options: [
    "Pas de tests de pricing : les changements sont implémentés sur décision des dirigeants",
    "Des changements de pricing sont faits occasionnellement sans processus de validation formel",
    "Quelques expérimentations de pricing sont menées mais les résultats sont évalués de façon informelle",
    "Un processus de changement de pricing défini : hypothèse, cohorte test, période de mesure et critères go/no-go documentés avant chaque changement",
    "Un modèle de gouvernance du pricing systématique : tous les changements pilotés, impact sur la conversion et la marge mesuré et décision de déploiement documentée"
  ]
},
{
  id: 8018, pillar: 8, type: "scale",
  title: "Pour chaque géographie où tu vends activement : le pricing est-il validé par rapport à la propension à payer locale, ou est-ce une conversion directe de ton pricing du marché principal ?",
  options: [
    "Une seule structure de prix mondiale appliquée partout sans considération géographique",
    "Ajustements géographiques informels faits en négociation sans justification documentée",
    "Un pricing régional existe mais n'est pas validé par rapport aux données de marché locales",
    "Pricing spécifique par géographie validé par la recherche acheteurs et les données de deals locales",
    "Un modèle de pricing géographique : propension à payer locale validée, parité de pouvoir d'achat appliquée quand pertinent et pricing régional revu annuellement"
  ]
},
{
  id: 8019, pillar: 8, type: "scale",
  title: "Concrètement, comment tu mesures la performance du pricing, et quelles métriques signalent que ton pricing nécessite un ajustement ?",
  options: [
    "La performance du pricing n'est pas suivie : la croissance du revenu est le seul signal",
    "Le win rate et la taille moyenne des deals sont suivis mais non liés à la structure de pricing",
    "Certaines métriques de pricing sont revues annuellement mais sans seuils de performance définis",
    "Une revue de performance du pricing trimestrielle : win rate par tranche de prix, fréquence des remises et taux d'expansion suivis par rapport aux objectifs",
    "Un système d'analytique pricing : win rate, taux de remise, vélocité des deals et NRR revus mensuellement par segment, avec des déclencheurs définis pour la revue du pricing"
  ]
},
{
  id: 8020, pillar: 8, type: "scale",
  title: "Ton pricing capture-t-il la croissance de valeur, par exemple via les augmentations d'usage ou les ajouts de sièges, sans nécessiter de renégociation manuelle ?",
  options: [
    "Toute expansion de valeur nécessite un processus de renégociation manuelle",
    "Certains déclencheurs d'expansion existent mais le processus commercial est largement manuel",
    "L'expansion de sièges ou d'usage est prévue contractuellement mais non automatisée",
    "La plupart des scénarios d'expansion sont gouvernés par les conditions contractuelles et auto-facturés sans renégociation",
    "Un modèle d'expansion entièrement automatisé : déclencheurs d'usage, de sièges et de fonctionnalités auto-facturés sans implication commerciale, revu pour les fuites trimestriellement"
  ]
},

/* ===========================================================
   PILLAR 9: PRODUCT READINESS (20 QUESTIONS)
   =========================================================== */

{
  id: 9001, pillar: 9, type: "scale",
  title: "À quelle fréquence des lacunes produit font-elles surface dans les deals en stade avancé: après la démo, pendant le proof-of-concept ou l'achat ?",
  subtitle: "Réponds pour ton segment de revenu principal et ta motion GTM principale, sauf si une question te demande explicitement de distinguer.",
  options: [
    "Les lacunes produit surprises dans les deals en stade avancé sont fréquentes : nous perdons des deals à cause d'elles",
    "Les lacunes font surface régulièrement dans les deals en stade avancé et sont gérées au cas par cas sans processus de prévention",
    "Les lacunes font parfois surface tardivement mais un processus d'escalade existe pour les gérer",
    "Une étape de validation technique pré-deal capte la plupart des lacunes avant qu'elles n'atteignent le stade avancé",
    "Un modèle zéro surprise : l'adéquation de la solution est confirmée en discovery via un cadre structuré: la fréquence des lacunes en stade avancé est suivie trimestriellement et alimente les améliorations du processus de vente"
  ]
},
{
  id: 9002, pillar: 9, type: "scale",
  title: "À quel point les nouveaux clients atteignent-ils la première valeur, et comment cela est-il suivi sur les cohortes clients ?",
  options: [
    "Le time-to-value n'est pas suivi : nous ne savons pas quand les clients voient leurs premiers résultats",
    "Le time-to-value varie significativement sans schéma clair ni responsable",
    "Un benchmark de time-to-value existe mais l'atteinte est incohérente",
    "Le time-to-value est suivi par cohorte et revu trimestriellement avec des actions d'amélioration documentées",
    "Un modèle de time-to-value : objectif défini par segment, atteinte suivie par client et tendances de cohortes revues mensuellement en réunions CS et Produit"
  ]
},
{
  id: 9003, pillar: 9, type: "scale",
  title: "Dans un cycle de vente standard, quel pourcentage des démos aboutit à une prochaine étape claire: et stu as quelle partie de la démo produit ce résultat ?",
  options: [
    "Le produit ne peut pas être efficacement démontré sans une préparation extensive",
    "Une démo existe mais nécessite généralement une personnalisation significative ou l'implication d'un spécialiste",
    "Une démo de référence fonctionne pour la plupart des cas mais les scénarios complexes nécessitent des contournements",
    "Un cadre de démo standard couvre tous les cas d'usage principaux et est utilisé de façon cohérente",
    "Un système de démo à haute conversion : spécifique au segment, autonome et suivi pour le taux de conversion à l'étape suivante trimestriellement"
  ]
},
{
  id: 9004, pillar: 9, type: "scale",
  title: "Au dernier trimestre, combien d'escalades clients dans les 90 premiers jours ont été causées par un écart entre ce qui a été vendu et ce qui a été délivré: et cela est-il suivi ?",
  options: [
    "La réalité post-vente diffère fréquemment de ce qui a été vendu : causant une friction immédiate et des dommages de confiance",
    "Les décalages entre les promesses commerciales et la réalité de la livraison sont courants et gérés au cas par cas",
    "Des décalages surviennent occasionnellement mais un processus existe pour gérer les attentes avant le transfert",
    "L'expérience d'implémentation correspond aux attentes commerciales dans la plupart des cas avec des exceptions documentées",
    "Les attentes commerciales et de livraison sont alignées par contrat : décalages suivis, causes racines identifiées trimestriellement et les schémas récurrents entraînent des changements de processus de vente ou de produit"
  ]
},
{
  id: 9005, pillar: 9, type: "scale",
  title: "Le produit supporte-t-il ta motion GTM choisie, SMB, mid-market ou enterprise, côté déploiement, configuration et time-to-value ?",
  options: [
    "Le produit crée systématiquement de la friction avec la motion GTM choisie",
    "Le produit fonctionne pour la motion GTM mais nécessite des contournements significatifs",
    "Adéquation partielle : le produit supporte certains scénarios mais crée de la friction dans d'autres",
    "Le produit est bien adapté à la motion GTM avec des exceptions mineures",
    "Le produit est conçu pour la motion GTM : déploiement, configuration et calendriers de valeur validés par rapport aux attentes du segment cible"
  ]
},
{
  id: 9006, pillar: 9, type: "scale",
  title: "À quel point l'expérience d'implémentation réelle correspond-elle à ce qui a été promis au client pendant le cycle de vente ?",
  options: [
    "Les attentes post-vente diffèrent fréquemment de ce qui a été vendu : causant une friction immédiate",
    "Les décalages entre les promesses commerciales et la réalité de la livraison sont courants",
    "Des décalages surviennent occasionnellement et sont gérés au cas par cas",
    "L'expérience d'implémentation correspond aux attentes commerciales dans la plupart des cas avec des exceptions documentées",
    "Les attentes commerciales et de livraison sont contractuellement alignées : décalages suivis et causes racines identifiées trimestriellement"
  ]
},
{
  id: 9007, pillar: 9, type: "scale",
  title: "Dans tes 10 derniers deals, combien de fois une limitation produit a-t-elle fait surface qui n'était pas dans ton registre de contraintes documenté: et que s'est-il passé ?",
  options: [
    "Les limitations produit ne sont pas documentées : les équipes les découvrent pendant les deals ou l'onboarding",
    "Certaines limitations sont connues de façon informelle mais communiquées de façon incohérente entre les Sales et le CS",
    "Un document de limitations existe mais n'est pas régulièrement mis à jour ni utilisé dans la qualification des deals",
    "Les limitations produit sont documentées, mises à jour à chaque release et intégrées dans l'onboarding commercial et la qualification",
    "Un registre explicite de contraintes produit : maintenu par le Produit, revu avec les Sales et le CS trimestriellement et intégré dans les playbooks de qualification des deals et les scripts d'onboarding"
  ]
},
{
  id: 9008, pillar: 9, type: "scale",
  title: "À quel point les équipes commerciales peuvent-elles confirmer ou disqualifier l'adéquation produit tôt dans un deal, sans nécessiter de validation technique en stade avancé ?",
  options: [
    "L'adéquation produit n'est généralement confirmée que pendant ou après le proof-of-concept",
    "L'évaluation de l'adéquation est retardée en milieu de cycle car les critères de qualification sont flous",
    "Des critères de qualification existent mais ne sont pas appliqués de façon cohérente tôt dans le processus",
    "Un cadre de qualification documenté permet la confirmation précoce de l'adéquation dans la plupart des deals",
    "Un playbook d'auto-qualification : les commerciaux peuvent confirmer ou disqualifier l'adéquation en fin de discovery en utilisant des critères définis et ancrés dans le produit"
  ]
},
{
  id: 9009, pillar: 9, type: "scale",
  title: "À quel point tes limitations et contraintes produit sont-elles bien documentées: et les Sales et le CS appliquent-ils systématiquement cette connaissance dans les deals et pendant l'onboarding ?",
  options: [
    "Les limitations produit ne sont pas documentées : les équipes les découvrent pendant les deals ou l'onboarding",
    "Certaines limitations sont connues mais communiquées de façon incohérente entre les Sales et le CS",
    "Un document de limitations existe mais n'est pas régulièrement mis à jour ni référencé",
    "Les limitations produit sont documentées, mises à jour à chaque release et intégrées dans l'onboarding commercial",
    "Un registre explicite de contraintes produit : maintenu par le Produit, revu par les Sales et le CS trimestriellement et intégré dans les playbooks de qualification des deals et d'onboarding"
  ]
},
{
  id: 9010, pillar: 9, type: "scale",
  title: "Lorsqu'une lacune produit fait surface dans un deal en stade avancé, quel est le chemin d'escalade documenté: et à quelle fréquence suivre ce chemin aboutit-il à un deal closé vs une perte ?",
  options: [
    "Pas de chemin d'escalade : les lacunes produit en stade avancé sont gérées ad hoc par qui est disponible",
    "Une escalade informelle existe: les commerciaux savent qui appeler: mais les résultats varient considérablement et ne sont pas suivis",
    "Un processus d'escalade est documenté mais suivi de façon incohérente, et s'il améliore les résultats est inconnu",
    "Un chemin d'escalade documenté existe, est suivi dans la plupart des cas et les win rates sur les deals escaladés sont revus trimestriellement",
    "Un système d'escalade des lacunes gouverné : chemin documenté, suivi de façon cohérente, win rate sur les deals escaladés suivi et benchmarké, et les lacunes récurrentes alimentent une mise à jour du registre de contraintes produit"
  ]
},
{
  id: 9011, pillar: 9, type: "scale",
  title: "À quel point ton onboarding client est-il automatisé et autonome, et quelle intervention manuelle est requise pour compléter une configuration standard ?",
  options: [
    "L'onboarding est entièrement manuel : chaque client nécessite un temps PS ou CS significatif",
    "L'onboarding est principalement manuel avec quelques étapes modélisées",
    "Un mix d'étapes automatisées et manuelles : l'effort manuel varie significativement selon le client",
    "La plupart des étapes d'onboarding sont automatisées avec une implication manuelle limitée aux exceptions définies",
    "L'onboarding est entièrement automatisé pour les configurations standard : les points de contact manuels sont suivis et les taux de complétion revus mensuellement"
  ]
},
{
  id: 9012, pillar: 9, type: "scale",
  title: "Demandez indépendamment à un commercial et à un manager CS de nommer les trois principales limitations produit. Leurs réponses correspondent-elles: et quand tu as testé cet alignement pour la dernière fois ?",
  options: [
    "Les Sales, le CS et le Produit ont des visions significativement différentes des capacités et limitations du produit",
    "Un alignement de haut niveau existe mais se désagrège dans les cas limites et les conversations face au client",
    "Un document produit partagé existe mais n'est pas appliqué de façon cohérente entre les équipes",
    "Une compréhension produit unifiée maintenue par des synchronisations cross-fonctionnelles régulières et une documentation partagée",
    "Une source unique de vérité produit : limites de capacité, limitations connues et positionnement co-possédés par les Sales, le CS et le Produit: mis à jour trimestriellement et testés pour la cohérence"
  ]
},
{
  id: 9013, pillar: 9, type: "scale",
  title: "Ton produit s'intègre-t-il dans les environnements techniques existants des clients, et à quelle fréquence les problèmes d'intégration retardent-ils le time-to-value ?",
  options: [
    "Les défis d'intégration sont courants et retardent ou font dérailler fréquemment les déploiements",
    "L'intégration fonctionne dans la plupart des cas mais nécessite un effort IT client significatif",
    "L'intégration est acceptable pour les environnements principaux mais des lacunes existent pour les stacks secondaires",
    "La couverture d'intégration est bien documentée et validée par rapport aux environnements clients cibles",
    "Un écosystème d'intégration certifié : intégrations du stack cible validées, documentation maintenue et taux d'échec d'intégration suivis dans le reporting CS"
  ]
},
{
  id: 9014, pillar: 9, type: "scale",
  title: "À quel point les Sales, le CS et le Produit partagent-ils une vision commune de ce que le produit fait bien et de ce qu'il ne fait pas ?",
  options: [
    "Les Sales, le CS et le Produit ont des visions significativement différentes des capacités du produit",
    "Un alignement existe à haut niveau mais se désagrège dans les cas limites et les conversations clients",
    "Un document de positionnement produit partagé existe mais n'est pas appliqué de façon cohérente",
    "Une compréhension produit unifiée est maintenue par des synchronisations cross-fonctionnelles régulières et une documentation partagée",
    "Une source unique de vérité produit : limites de capacité, limitations connues et positionnement sont co-possédés par les Sales, le CS et le Produit et mis à jour trimestriellement"
  ]
},
{
  id: 9015, pillar: 9, type: "scale",
  title: "Au dernier trimestre, quel pourcentage des deals d'expansion a nécessité du travail d'engineering, une configuration sur mesure ou l'implication du PS: et ce pourcentage s'améliore-t-il ?",
  options: [
    "Plus de 80 % des deals d'expansion ont nécessité une implication significative de l'engineering ou du PS : l'expansion n'est pas en self-service et ne l'a jamais été",
    "50-80 % des expansions ont nécessité une intervention technique : les parcours d'expansion standard ne sont pas fiablement en self-service",
    "20-50 % des expansions ont nécessité du travail technique: les scénarios d'expansion courants fonctionnent globalement mais les cas limites nécessitent encore du support",
    "Moins de 20 % des deals d'expansion ont nécessité une intervention technique: les scénarios d'expansion les plus courants sont nativement supportés",
    "Moins de 10 % des expansions nécessitent l'implication de l'engineering ou du PS : les parcours d'expansion sont sans friction, documentés et testés par rapport aux patterns clients réels: fuites revues trimestriellement"
  ]
},
{
  id: 9016, pillar: 9, type: "scale",
  title: "À quel point ta documentation produit et tes supports d'enablement sont-ils complets et à jour, et les équipes GTM les trouvent-elles suffisants sans escalader vers le Produit ?",
  options: [
    "La documentation est manquante, obsolète ou inaccessible",
    "La documentation existe mais est incomplète et nécessite des clarifications fréquentes de l'équipe Produit",
    "La documentation couvre les cas d'usage principaux mais des lacunes existent pour les scénarios avancés",
    "Documentation complète couvrant les cas d'usage principaux et secondaires, mise à jour à chaque release",
    "Un système de documentation best-in-class : complet, versionné, recherchable et validé par les équipes GTM pour la suffisance trimestriellement"
  ]
},
{
  id: 9017, pillar: 9, type: "scale",
  title: "À quel point le processus de soumission de feedback produit par les équipes GTM est-il structuré, et comment tu suis si cela influence la roadmap ?",
  options: [
    "Pas de processus de feedback : les équipes GTM escaladent vers le Produit par des canaux informels",
    "Un processus de feedback ad-hoc existe mais le suivi de l'input au résultat est absent",
    "Un processus structuré de soumission de feedback existe mais l'impact sur la roadmap est flou",
    "Une boucle de feedback formelle : inputs suivis de la soumission à la revue de roadmap avec visibilité des résultats pour les soumetteurs",
    "Un système de feedback GTM-vers-Produit en boucle fermée : inputs enregistrés, revus trimestriellement, priorisés de façon transparente et résultats rapportés aux équipes GTM"
  ]
},
{
  id: 9018, pillar: 9, type: "scale",
  title: "À quel point les décisions de roadmap sont-elles directement alimentées par des signaux GTM et clients validés, plutôt que par des hypothèses internes ?",
  options: [
    "La roadmap est guidée par les priorités de l'engineering et l'intuition du leadership",
    "Les demandes clients sont considérées mais la pondération est informelle et opaque",
    "Les inputs clients et marché alimentent la planification mais ne sont pas systématiquement scorés",
    "Les décisions de roadmap documentent les preuves de marché et clients derrière chaque priorité",
    "Une roadmap basée sur les preuves : chaque décision significative a un signal de marché et client documenté avec fréquence, impact revenu et corrélation avec la rétention"
  ]
},
{
  id: 9019, pillar: 9, type: "scale",
  title: "Au dernier trimestre, quel pourcentage des nouveaux deals a nécessité une clause non standard, un engagement de livraison sur mesure ou une exception à ton processus standard: et ce taux est-il suivi ?",
  options: [
    "Les exceptions sont la norme : la plupart des deals nécessitent une forme de clause sur mesure ou d'accommodation de livraison",
    "Une minorité significative de deals nécessite des exceptions, mais le taux n'est pas suivi et les facteurs sont flous",
    "Le taux d'exception est suivi mais non formellement revu: s'il s'améliore ou se dégrade est inconnu",
    "Le taux d'exception est suivi trimestriellement, revu par le leadership et les facteurs sont analysés pour réduire la récurrence",
    "Une discipline d'exception gouvernée : les conditions et livraison standard s'appliquent à la grande majorité des deals, le taux d'exception est un KPI géré et chaque exception est enregistrée, approuvée et sa cause racine identifiée"
  ]
},
{
  id: 9020, pillar: 9, type: "scale",
  title: "À quel point ton produit peut-il être vendu, implémenté et mis à l'échelle sans nécessiter d'exceptions aux conditions standard ou aux processus de livraison ?",
  options: [
    "Les exceptions sont la norme : quasiment chaque deal nécessite une forme d'accommodation sur mesure",
    "Les exceptions sont fréquentes et gérées au cas par cas sans gouvernance documentée",
    "Certains scénarios d'exception sont documentés mais d'autres nécessitent encore une résolution ad-hoc",
    "Les exceptions sont rares et gouvernées par un processus d'exception documenté avec approbation du leadership",
    "Un modèle standard sans exception : les conditions et livraison standard s'appliquent de façon cohérente, les exceptions sont suivies et revues pour une résolution systémique"
  ]
},

/* ===========================================================
   PILLAR 10: DATA & INSIGHTS (20 QUESTIONS)
   =========================================================== */

{
  id: 10001, pillar: 10, type: "scale",
  title: "Au cours des 30 derniers jours, nommez une décision GTM que les données ont changé. Était-ce facile à répondre ?",
  subtitle: "Réponds pour ton segment de revenu principal et ta motion GTM principale, sauf si une question te demande explicitement de distinguer.",
  options: [
    "Nous ne pouvons pas en nommer un : des données sont produites mais n'influencent pas les décisions",
    "Les données sont revues en réunion mais changent rarement la conclusion: l'intuition domine",
    "Les données influencent occasionnellement les décisions mais nous ne pouvons pas pointer un exemple récent spécifique",
    "Nous pouvons nommer deux ou trois décisions récentes directement influencées par les données, avec une justification documentée",
    "Les décisions guidées par les données sont la norme : chaque décision GTM majeure est documentée avec un appui de données, et les cas où les données ont supplanté l'intuition sont suivis comme signaux de gouvernance positifs"
  ]
},
{
  id: 10002, pillar: 10, type: "scale",
  title: "Lors de tes trois dernières revues de leadership, combien de minutes ont été consacrées à débattre des définitions de métriques plutôt qu'à agir dessus: et ce chiffre représente-t-il une amélioration ?",
  options: [
    "La majeure partie du temps de revue est consommée par des disputes de métriques : les équipes ne font pas confiance à un ensemble de définitions partagé",
    "Les débats de métriques ralentissent fréquemment les décisions et il n'y a pas de preuve que la situation s'améliore",
    "Les définitions de métriques sont principalement alignées, mais les disputes récurrentes consomment encore un temps de revue significatif",
    "Les définitions de métriques sont gouvernées, les disputes sont limitées et le temps de revue est principalement consacré à l'interprétation et à l'action",
    "Un registre de métriques à source unique gouverne toutes les revues de leadership : les débats sur les définitions sont rares, suivis quand ils surviennent et en tendance baissière"
  ]
},
{
  id: 10003, pillar: 10, type: "scale",
  title: "À quel point les données sont-elles utilisées pour guider les décisions GTM, et tu peux donner un exemple des 30 derniers jours où les données ont changé un plan ?",
  options: [
    "Le feeling guide la plupart des décisions : des données sont produites mais non utilisées",
    "Les données sont revues en réunion mais changent rarement la conclusion",
    "Les données influencent occasionnellement les décisions mais l'intuition domine encore",
    "Les données sont un input principal pour la plupart des décisions GTM avec une justification de décision documentée",
    "Une culture de décision guidée par les données : décisions documentées avec un appui de données et les cas où les données ont supplanté l'intuition suivis comme signal positif"
  ]
},
{
  id: 10004, pillar: 10, type: "scale",
  title: "Actuellement, sans extraction manuelle de données : tu peux énoncer ton ratio de couverture pipeline, le pipeline pondéré par étape et le nombre de deals à risque ce trimestre ?",
  options: [
    "Non : ces chiffres nécessitent un assemblage manuel ou ne sont pas du tout disponibles",
    "Certains chiffres sont disponibles, mais au moins un nécessite du travail manuel ou n'est pas fiable",
    "Les métriques de pipeline principales existent dans les tableaux de bord, mais la confiance dans l'exactitude ou la fraîcheur est mitigée",
    "Ces métriques sont disponibles en quasi temps réel et utilisées dans les revues opérationnelles hebdomadaires",
    "Une couche d'intelligence pipeline gouvernée : couverture, valeur d'étape pondérée et deals à risque disponibles à la demande, fiables pour le leadership et liés à des seuils d'action documentés"
  ]
},
{
  id: 10005, pillar: 10, type: "scale",
  title: "Au cours des deux derniers trimestres, combien de manquements de revenu ont été prédits par un indicateur avancé plus de 60 jours à l'avance: vs découverts seulement à la clôture du trimestre ?",
  options: [
    "Aucun n'a été prédit tôt : les manquements ont été découverts quand le revenu était déjà manqué",
    "Quelques signaux d'alerte existaient, mais ils étaient informels et non liés à un système d'indicateurs avancés défini",
    "Certains manquements ont été prédits tôt, mais la qualité des signaux et le suivi étaient incohérents",
    "Les indicateurs avancés ont prédit plusieurs manquements suffisamment tôt pour agir, et ces cas ont été revus après le trimestre",
    "Un système de signaux prédictifs existe : les alertes précoces sont enregistrées, suivies d'action et revues par rapport aux résultats: avec le ratio de manquements détectés tôt vs tard suivi dans le temps"
  ]
},
{
  id: 10006, pillar: 10, type: "scale",
  title: "À quel point tu mesures l'efficacité GTM, et tu peux calculer le retour du CAC, le burn multiple et l'efficacité du pipeline par motion ?",
  options: [
    "L'efficacité GTM n'est pas mesurée : nous suivons le revenu mais pas le coût du revenu",
    "Le CAC total est suivi mais l'efficacité par motion ou segment est inconnue",
    "Les métriques d'efficacité principales existent mais sont revues peu fréquemment ou de façon incohérente",
    "CAC, retour sur investissement et efficacité du pipeline suivis par motion et revus mensuellement",
    "Un P&L d'efficacité GTM : CAC, retour, burn multiple et efficacité du pipeline par motion, segment et commercial revus mensuellement en réunions de leadership"
  ]
},
{
  id: 10007, pillar: 10, type: "scale",
  title: "À quel point tu mènes des analyses de cohortes, et tu peux comparer les taux de rétention, d'expansion et de churn sur les cohortes d'acquisition ?",
  options: [
    "Pas d'analyse de cohortes : la performance client n'est pas suivie dans le temps",
    "Un suivi basique de cohortes existe mais il n'est pas revu ni utilisé dans la planification",
    "Les données de cohortes sont disponibles mais l'analyse est superficielle et peu fréquente",
    "Des revues trimestrielles de cohortes comparant rétention, NRR et expansion par période d'acquisition",
    "Un système complet d'intelligence de cohortes : rétention, expansion et retour suivis par cohorte, revus trimestriellement et alimentant la stratégie ICP et DG"
  ]
},
{
  id: 10008, pillar: 10, type: "scale",
  title: "Actuellement, sans extraction manuelle de données : tu peux voir la distribution des étapes de ton pipeline, les indicateurs de santé et le ratio de couverture: et tu fais confiance à ces chiffres ?",
  options: [
    "La visibilité sur le pipeline est limitée : une vue en temps réel nécessite un assemblage manuel des données",
    "Le pipeline est visible dans le CRM mais la qualité, la santé et l'exactitude des étapes ne sont pas fiables",
    "Des tableaux de bord pipeline existent mais les problèmes d'hygiène des données réduisent la confiance dans la vue",
    "Une vue pipeline en temps réel avec distribution des étapes, indicateurs de santé et ratio de couverture suivis",
    "Un système d'intelligence pipeline gouverné : distribution des étapes, score de santé, couverture et vélocité suivis en temps réel et revus en réunions de pipeline hebdomadaires"
  ]
},
{
  id: 10009, pillar: 10, type: "scale",
  title: "À quel niveau de détail tu peux segmenter les données de performance GTM, par segment, motion, commercial et cohorte, pour identifier les causes racines plutôt que les moyennes ?",
  options: [
    "Les données de performance ne sont disponibles qu'en agrégé : la segmentation n'est pas possible",
    "Une certaine segmentation est possible mais nécessite un travail manuel significatif sur les données",
    "Les segments principaux sont disponibles mais le filtrage croisé par motion et commercial est limité",
    "La performance peut être segmentée par segment, motion et commercial avec des données disponibles dans les tableaux de bord",
    "Un modèle de segmentation multi-dimensionnel : performance découpée par segment, motion, commercial, cohorte et géographie, revue mensuellement au niveau de l'équipe et du leadership"
  ]
},
{
  id: 10010, pillar: 10, type: "scale",
  title: "À quel point ton équipe prévoit-elle le revenu du prochain trimestre, et quel est ton écart typique entre l'engagement et le résultat final ?",
  options: [
    "Pas de prévision formelle : le revenu trimestriel est une surprise",
    "Une prévision existe mais l'écart par rapport au réel est généralement supérieur à 20 %",
    "Des prévisions sont tentées mais l'écart est incohérent et non systématiquement revu",
    "Une méthodologie de prévision documentée avec un suivi des écarts et une rétrospective post-trimestre",
    "Un système de prévision gouverné : écart inférieur à 10 % de façon constante, méthodologie revue trimestriellement et précision appel-vers-closing suivie hebdomadairement"
  ]
},
{
  id: 10011, pillar: 10, type: "scale",
  title: "Quel est le niveau d'avancement de ton utilisation de l'analytique prédictive dans le GTM, et tu peux modéliser le résultat probable d'un deal ou d'une campagne DG avant sa clôture ?",
  options: [
    "Pas d'analytique prédictive : toutes les décisions sont basées sur des données historiques ou l'intuition",
    "Une analyse basique de tendance existe mais aucun modèle prospectif n'est utilisé",
    "Le scoring prédictif est utilisé dans une fonction mais n'est pas appliqué côté GTM",
    "Des modèles prédictifs sont utilisés pour le lead scoring, le risque de churn et la qualité du pipeline côté GTM",
    "Une couche complète d'intelligence prédictive : scoring des deals, prédiction du churn et modélisation des campagnes DG intégrés dans les opérations GTM quotidiennes"
  ]
},
{
  id: 10012, pillar: 10, type: "scale",
  title: "À quel point tes tableaux de bord GTM sont-ils actionnables, et lorsqu'un tableau de bord montre un problème, y a-t-il un responsable clair et une prochaine action ?",
  options: [
    "Des tableaux de bord existent mais ne sont ni revus ni exploités",
    "Les tableaux de bord sont revus mais ils génèrent des discussions plutôt que des décisions",
    "La plupart des métriques ont des responsables mais le suivi des actions est incohérent",
    "Les tableaux de bord entraînent des actions documentées avec des responsables et des échéances revus chaque semaine",
    "Les tableaux de bord sont des outils de décision : chaque métrique a un responsable, un seuil et un playbook documenté pour quand le seuil est franchi"
  ]
},
{
  id: 10013, pillar: 10, type: "scale",
  title: "À quel point tes revues de performance GTM sont-elles guidées par les données, et quel pourcentage du temps est consacré à l'analyse vs à l'anecdote ?",
  options: [
    "Les revues de performance sont guidées par les anecdotes : les données sont rarement présentées ou questionnées",
    "Les données sont présentes dans les revues mais la discussion est dominée par le narratif et l'intuition",
    "La plupart des revues utilisent les données mais la profondeur d'analyse varie significativement selon le manager",
    "Un cadre de données standard gouverne toutes les revues de performance avec des supports de pré-lecture requis",
    "Les revues de performance sont entièrement guidées par les données : pré-lecture standardisée, analyse structurée et journal de décisions produit à chaque session"
  ]
},
{
  id: 10014, pillar: 10, type: "scale",
  title: "Concrètement, comment tu identifies les tendances de performance, et à quelle vitesse les signaux de tendance atteignent-ils les personnes qui peuvent agir dessus ?",
  options: [
    "Les tendances sont identifiées après qu'elles soient déjà devenues des problèmes",
    "La conscience des tendances est informelle : repérée par des leaders expérimentés en réunion",
    "Un certain suivi des tendances existe mais la vitesse signal-vers-action est lente",
    "Les alertes de tendance sont automatisées et livrées aux responsables dans un délai défini",
    "Un système proactif d'intelligence des tendances : signaux détectés algorithmiquement, livrés aux responsables en temps réel et temps de réponse suivi comme métrique de gouvernance"
  ]
},
{
  id: 10015, pillar: 10, type: "scale",
  title: "Concrètement, comment tu benchmarks ta performance GTM par rapport aux standards sectoriels externes, et quand tu as utilisé des benchmarks pour la dernière fois pour challenger une décision ?",
  options: [
    "Pas de benchmarking : nous évaluons la performance de façon isolée",
    "Le leadership a une idée approximative des moyennes sectorielles mais pas de comparaison formelle",
    "Une comparaison annuelle aux benchmarks a lieu mais elle change rarement notre façon d'opérer",
    "Les benchmarks externes sont intégrés dans la planification trimestrielle et les revues de performance",
    "Un programme de benchmarking continu : sources de données externes intégrées dans les tableaux de bord, utilisées pour challenger les hypothèses dans la planification et revues avec le board"
  ]
},
{
  id: 10016, pillar: 10, type: "scale",
  title: "À quel point tu peux prédire le revenu du prochain trimestre, et quelle est la marge d'erreur dans tes quatre dernières prévisions trimestrielles ?",
  options: [
    "La prédiction du revenu est impossible : l'écart est supérieur à 25 %",
    "La précision des prévisions est faible : l'écart est typiquement de 15-25 %",
    "La prévision est parfois exacte mais l'écart intra-trimestriel est significatif",
    "Précision des prévisions à moins de 10 % la plupart des trimestres avec un processus documenté de revue des écarts",
    "Précision des prévisions à moins de 5 % de façon constante : historique de quatre trimestres documenté et revu avec le board"
  ]
},
{
  id: 10017, pillar: 10, type: "scale",
  title: "Concrètement, comment tu utilises les données de performance pour réallouer les ressources GTM, budget, headcount ou focus, en cours d'année ?",
  options: [
    "Les ressources sont fixées dans la planification annuelle et non ajustées en cours d'année",
    "La réallocation a lieu occasionnellement mais basée sur les préférences des dirigeants plutôt que sur les données",
    "Des revues en cours d'année existent mais les données guident rarement des changements significatifs de ressources",
    "Une revue documentée de ressources en cours d'année utilise les données de performance pour réallouer le budget et le focus",
    "Un modèle d'allocation de ressources basé sur la performance continue : les motions sous-performantes sont définancées et les motions à haut ROI sont mises à l'échelle en temps réel"
  ]
},
{
  id: 10018, pillar: 10, type: "scale",
  title: "À quel point tu calcules la LTV, et ton modèle LTV tient-il compte de l'expansion, du churn et de la marge par segment ?",
  options: [
    "La LTV n'est pas calculée : nous estimons la valeur sur la seule base de l'ARR",
    "Une estimation basique de la LTV existe mais ne prend pas en compte l'expansion ou la marge",
    "La LTV est calculée au niveau agrégé mais non segmentée ni mise à jour régulièrement",
    "La LTV est calculée par segment, intégrant rétention, expansion et marge brute",
    "Un modèle LTV complet : au niveau du segment, mis à jour trimestriellement, intégrant probabilité d'expansion, risque de churn et marge, et utilisé dans le scoring ICP et la fixation des objectifs de CAC"
  ]
},
{
  id: 10019, pillar: 10, type: "scale",
  title: "Les données et insights guident-ils l'amélioration de la performance GTM, et tu peux citer un changement spécifique fait au dernier trimestre basé sur les données ?",
  options: [
    "Les données ne guident pas les changements : les revues de performance sont uniquement informatives",
    "Les données font parfois remonter des insights mais ils mènent rarement à des actions documentées",
    "Les données influencent certaines décisions mais le suivi est incohérent",
    "Un processus trimestriel d'amélioration guidé par les données produit des actions documentées avec des responsables",
    "L'amélioration guidée par les données est une norme culturelle : chaque trimestre produit des changements documentés traçables à un signal de données spécifique, avec un suivi des résultats"
  ]
},
{
  id: 10020, pillar: 10, type: "scale",
  title: "Les signaux de données identifient-ils le risque de churn, et quel est ton délai moyen entre la détection du risque et l'annulation par le client ?",
  options: [
    "Le churn est détecté au moment de l'appel d'annulation ou après : aucune alerte précoce n'existe",
    "Certains signaux sont remarqués dans les 30 derniers jours avant le churn",
    "Les signaux de risque sont détectés 60-90 jours avant le churn dans certains comptes",
    "Un modèle de scoring de santé identifie la plupart des comptes à risque 90 jours ou plus avant le churn",
    "Un système prédictif de churn : risque détecté 120 jours ou plus avant l'annulation, intervention déclenchée automatiquement et taux de sauvegarde suivi par tier de risque"
  ]
},

/* ===========================================================
   PILLAR 11: ENABLEMENT (20 QUESTIONS)
   =========================================================== */

{
  id: 11001, pillar: 11, type: "scale",
  title: "À quel point ton programme d'onboarding pour les nouveaux collaborateurs GTM est-il structuré et délivré de façon cohérente, et comment la complétion et la qualité sont-elles suivies ?",
  subtitle: "Réponds pour ton segment de revenu principal et ta motion GTM principale, sauf si une question te demande explicitement de distinguer.",
  options: [
    "Pas d'onboarding structuré : les nouveaux arrivants apprennent par observation et essai",
    "Un processus d'onboarding informel existe mais la couverture et la qualité varient selon le manager",
    "Un cursus d'onboarding existe mais la complétion et la qualité ne sont pas systématiquement suivies",
    "Un programme d'onboarding structuré avec un suivi de complétion des jalons par recrue",
    "Un système d'onboarding entièrement gouverné : cursus, jalons, validations du manager et performance à 30-60-90 jours revue pour chaque nouvel arrivant"
  ]
},
{
  id: 11002, pillar: 11, type: "scale",
  title: "À quel point les nouveaux collaborateurs GTM montent-ils en puissance vers la pleine productivité, et comment tu suis le temps de montée en puissance vs l'objectif ?",
  options: [
    "Le temps de montée en puissance n'est pas suivi : nous ne savons pas combien de temps il faut aux nouveaux arrivants pour contribuer",
    "Des attentes de montée en puissance existent de façon informelle mais le time-to-productivity réel n'est pas mesuré",
    "Le temps de montée en puissance est suivi mais non comparé à un objectif ou benchmark défini",
    "Le time-to-productivity est suivi par cohorte par rapport à un objectif défini, revu trimestriellement",
    "Un modèle d'efficacité de montée en puissance : time-to-first-deal et time-to-quota suivis par recrue, benchmarkés par rapport aux cohortes précédentes et alimentant l'amélioration de l'onboarding"
  ]
},
{
  id: 11003, pillar: 11, type: "scale",
  title: "À quel point ton équipe reçoit-elle un développement structuré des compétences, et la formation est-elle liée aux écarts de performance observés ?",
  options: [
    "Pas de formation continue : le développement est auto-dirigé et non soutenu",
    "Des formations ad-hoc ont lieu quand un problème fait surface, pas de façon proactive",
    "Un calendrier de formation existe mais le contenu est générique et non lié aux données de performance",
    "Le développement des compétences est lié aux écarts de performance des commerciaux identifiés en coaching et revues d'appels",
    "Un système d'apprentissage lié à la performance : écarts de compétences identifiés hebdomadairement en coaching, formation prescrite en conséquence et amélioration suivie par rapport aux résultats de deals"
  ]
},
{
  id: 11004, pillar: 11, type: "scale",
  title: "À quel point tes playbooks de vente sont-ils complets, à jour et utilisés, et comment stu as que les commerciaux les consultent réellement dans les deals actifs ?",
  options: [
    "Pas de playbooks de vente : les commerciaux s'appuient sur l'expérience et le jugement personnel",
    "Des playbooks existent mais ont été mis à jour pour la dernière fois il y a plus d'un an et sont rarement consultés",
    "Les playbooks sont disponibles mais l'utilisation dans les deals actifs n'est pas suivie",
    "Les playbooks sont mis à jour trimestriellement et l'utilisation est suivie via la plateforme d'enablement",
    "Un système de playbooks vivant : mis à jour trimestriellement, utilisation suivie par étape de deal et corrélation playbook-vers-win-rate revue mensuellement"
  ]
},
{
  id: 11005, pillar: 11, type: "scale",
  title: "À quel point les commerciaux GTM peuvent-ils trouver et utiliser le contenu d'enablement dont ils ont besoin, et comment tu mesures l'accessibilité du contenu ?",
  options: [
    "Le contenu d'enablement est dispersé entre de multiples systèmes sans point d'accès central",
    "Un référentiel central existe mais la recherche et la navigation sont médiocres",
    "Le contenu est organisé mais les commerciaux escaladent fréquemment pour trouver ce dont ils ont besoin",
    "Une plateforme d'enablement bien organisée où les commerciaux peuvent trouver du contenu par rôle et étape de deal",
    "Une plateforme d'enablement structurée et recherchable : contenu indexé par rôle, étape et persona, adoption suivie et taux de succès de recherche revu trimestriellement"
  ]
},
{
  id: 11006, pillar: 11, type: "scale",
  title: "Concrètement, le contenu d'enablement est-il adapté à chaque rôle GTM, AE, SDR, CS, AM, plutôt que produit comme du contenu générique partagé ?",
  options: [
    "Tout le contenu d'enablement est générique : les rôles ne sont pas différenciés",
    "Du contenu spécifique aux rôles existe mais les lacunes sont significatives",
    "Les rôles principaux ont du contenu dédié mais les rôles secondaires sont sous-servis",
    "Des parcours d'enablement spécifiques aux rôles existent pour tous les rôles GTM principaux",
    "Une architecture d'enablement spécifique aux rôles : chaque rôle GTM a un cursus dédié, évalué indépendamment et mis à jour sur la base de données de performance spécifiques au rôle"
  ]
},
{
  id: 11007, pillar: 11, type: "scale",
  title: "À quel point les commerciaux sont-ils certifiés avant d'engager des prospects en direct, et que se passe-t-il quand un commercial échoue à la certification ?",
  options: [
    "Pas de processus de certification : les commerciaux commencent à vendre dès le premier jour sans évaluation",
    "Une validation informelle existe mais les standards sont incohérents entre les managers",
    "Une checklist de certification existe mais la complétion est suivie de façon informelle",
    "Un processus de certification structuré avec des critères de réussite/échec et des parcours de remédiation",
    "Une porte de certification rigoureuse : les commerciaux ne peuvent pas engager de prospects en direct sans la réussir, les tentatives échouées déclenchent une remédiation structurée et les taux de certification sont suivis"
  ]
},
{
  id: 11008, pillar: 11, type: "scale",
  title: "À quel point le coaching commercial délivré par tes managers est-il structuré et cohérent, et comment la qualité du coaching est-elle suivie ?",
  options: [
    "Le coaching est entièrement informel : les managers donnent du feedback quand on leur demande",
    "Le coaching a lieu en 1:1 mais sans cadre défini ni cadence",
    "Un cadre de coaching existe mais la qualité et la cohérence varient significativement selon le manager",
    "Un cadre de coaching standardisé appliqué de façon cohérente dans tous les managers, avec des résultats de session documentés",
    "Un système opérationnel de coaching : revues d'appels, scoring de compétences, documentation de session et impact du coaching suivi par rapport à la performance des commerciaux hebdomadairement"
  ]
},
{
  id: 11009, pillar: 11, type: "scale",
  title: "À quel point ta bibliothèque de supports commerciaux et marketing est-elle complète et à jour, et les commerciaux l'utilisent-ils dans les deals actifs ?",
  options: [
    "Les supports sont minimaux, obsolètes ou non utilisés dans les deals",
    "Un ensemble de supports existe mais la plupart des commerciaux utilisent leurs propres supports",
    "Les supports standard sont disponibles mais l'utilisation dans les deals en cours n'est pas mesurée",
    "Une bibliothèque de supports à jour organisée par étape de deal et cas d'usage, avec un suivi d'adoption",
    "Un système stratégique de supports : indexé par étape de deal, versionné et adoption corrélée avec le win rate trimestriellement"
  ]
},
{
  id: 11010, pillar: 11, type: "scale",
  title: "Le Time-to-First-Deal est-il suivi comme KPI principal de montée en puissance pour les nouveaux arrivants, et comment se compare-t-il à ton objectif défini ?",
  options: [
    "Le Time-to-First-Deal n'est pas suivi",
    "Il est suivi de façon informelle mais non comparé à un objectif défini",
    "Il est suivi et rapporté mais non utilisé pour guider les décisions d'onboarding ou de coaching",
    "Suivi formellement comme un KPI, comparé à un objectif et revu en rétrospectives des nouveaux arrivants",
    "Un KPI de montée en puissance gouverné : Time-to-First-Deal suivi par recrue, benchmarké trimestriellement et alimentant les mises à jour du cursus d'onboarding"
  ]
},
{
  id: 11011, pillar: 11, type: "scale",
  title: "Concrètement, comment tu mesures si les programmes d'enablement produisent une amélioration mesurable des résultats des deals ?",
  options: [
    "L'efficacité de l'enablement n'est pas mesurée : les programmes sont menés et supposés fonctionner",
    "La participation est suivie mais l'impact sur la performance n'est pas évalué",
    "Une certaine corrélation entre la complétion de formation et la performance est observée de façon informelle",
    "Les programmes d'enablement sont évalués pour l'amélioration des compétences et l'impact sur le win rate trimestriellement",
    "Un modèle de ROI de l'enablement : complétion des programmes, amélioration du score de compétences et corrélation avec les résultats de deals suivis et revus mensuellement"
  ]
},
{
  id: 11012, pillar: 11, type: "scale",
  title: "À quel point et fréquence les supports d'enablement sont-ils mis à jour pour refléter les changements produit, les évolutions du marché et les mouvements concurrentiels ?",
  options: [
    "Les supports sont rarement mis à jour : le contenu devient obsolète quelques mois après sa création",
    "Les mises à jour ont lieu de façon réactive quand quelque chose est clairement incorrect",
    "Un cycle de mise à jour annuel approximatif existe mais la fraîcheur est incohérente entre les assets",
    "Un cycle de mise à jour trimestriel défini pour tous les assets d'enablement principaux avec responsabilité du propriétaire",
    "Un système de mise à jour continu : supports revus sur une cadence définie, déclenchés par les releases produit et les changements concurrentiels, avec contrôle de version et dates d'expiration"
  ]
},
{
  id: 11013, pillar: 11, type: "scale",
  title: "Après tes trois dernières releases produit : à quelle vitesse les supports d'enablement ont-ils été mis à jour: et la mise à jour a-t-elle été déclenchée proactivement ou seulement après que les commerciaux aient signalé des lacunes dans les deals ?",
  options: [
    "Les supports d'enablement n'ont pas été mis à jour à temps : les commerciaux ont découvert des lacunes dans des deals en cours",
    "Les mises à jour ont eu lieu de façon réactive après les plaintes du terrain, sans processus défini lié aux releases",
    "Les supports ont été mis à jour pour certaines releases, mais le timing et la complétude étaient incohérents",
    "Les mises à jour d'enablement sont liées aux releases produit et généralement complétées avant l'exposition terrain",
    "Un système d'enablement lié aux releases : supports mis à jour proactivement sur un calendrier défini, préparation terrain vérifiée avant la release et temps de retard suivi après chaque release"
  ]
},
{
  id: 11014, pillar: 11, type: "scale",
  title: "Concrètement, comment tes commerciaux sont-ils formés et entraînés à gérer les objections les plus courantes qui bloquent les deals ?",
  options: [
    "Pas de formation au traitement des objections : les commerciaux développent leurs propres réponses avec le temps",
    "Les objections courantes sont couvertes dans l'onboarding mais non rafraîchies ni pratiquées",
    "Un guide d'objections existe mais n'est pas lié aux revues de deals en cours ni aux jeux de rôle",
    "Le traitement des objections est formé dans l'onboarding, renforcé en sessions de coaching et mis à jour à partir des données win/loss",
    "Un système structuré de formation aux objections : objections courantes par segment cataloguées, réponses testées en coaching en direct et efficacité du traitement suivie par type d'objection"
  ]
},
{
  id: 11015, pillar: 11, type: "scale",
  title: "Lors de ta dernière revue de pipeline, pour les deals qui ont stagné ou ont été perdus : combien avaient vu leurs supports d'enablement consultés dans les 30 jours précédents: et tu suis cela ?",
  options: [
    "L'enablement est entièrement pré-vente : aucun support n'existe pour les deals en cours",
    "Les commerciaux peuvent accéder à des supports généraux mais des conseils spécifiques aux deals ne sont pas disponibles",
    "De l'enablement par étape de deal existe mais il est organisé et consulté de façon incohérente",
    "De l'enablement indexé par étape de deal est disponible et activement référencé dans les deal reviews",
    "Un système d'enablement d'exécution des deals : contenu spécifique par étape, outils et chemins d'escalade organisés dans le CRM et revus pour l'utilisation mensuellement"
  ]
},
{
  id: 11016, pillar: 11, type: "scale",
  title: "À quel point tes commerciaux GTM comprennent-ils le produit, et peuvent-ils traiter les questions techniques sans impliquer le produit ou l'engineering ?",
  options: [
    "Les commerciaux ont une connaissance produit superficielle : la plupart des questions techniques nécessitent une escalade",
    "Certains commerciaux traitent bien les questions techniques mais les niveaux de connaissance varient considérablement",
    "La plupart des commerciaux peuvent traiter les questions standard mais les scénarios complexes nécessitent un support spécialiste",
    "La connaissance produit est certifiée et rafraîchie à chaque release majeure",
    "Un programme de maîtrise produit continu : conditionné par la certification, évalué régulièrement et rafraîchi à chaque release avec des scores de connaissance des commerciaux suivis par trimestre"
  ]
},
{
  id: 11017, pillar: 11, type: "scale",
  title: "Au dernier trimestre, pour chaque commercial sous-performant : un écart de compétence spécifique a-t-il été identifié et une formation ciblée prescrite: ou le même cursus générique a-t-il été appliqué à tous ?",
  options: [
    "La sous-performance n'est pas liée à un diagnostic d'écart de compétences spécifique : le support est générique ou absent",
    "Les managers identifient parfois les lacunes probables, mais la formation reste principalement générique et incohérente",
    "Certains sous-performants reçoivent un développement ciblé, mais le processus n'est pas systématique entre les managers",
    "Les commerciaux sous-performants reçoivent un diagnostic d'écart de compétences et des plans de formation ciblés avec un suivi du manager",
    "Un système d'enablement lié à la performance : chaque sous-performant reçoit un diagnostic d'écart de compétences, une formation ciblée prescrite et un suivi des résultats par rapport à l'écart diagnostiqué"
  ]
},
{
  id: 11018, pillar: 11, type: "scale",
  title: "Concrètement, comment tu utilises des scénarios réels et des jeux de rôle structurés pour développer les compétences des commerciaux avant qu'ils ne fassent face aux acheteurs ?",
  options: [
    "Pas de jeux de rôle ni de pratique de scénarios : les commerciaux apprennent par l'expérience des deals en direct",
    "Des jeux de rôle occasionnels ont lieu en formation mais ne sont ni structurés ni évalués",
    "Les jeux de rôle font partie de l'onboarding mais ne sont pas utilisés de façon cohérente dans le coaching continu",
    "Des jeux de rôle structurés avec des scénarios définis et un scoring utilisés dans l'onboarding et les rappels trimestriels",
    "Un système de pratique immersif : jeux de rôle enregistrés revus par les managers, notés par rapport à des grilles et utilisés pour suivre le développement des compétences dans le temps"
  ]
},
{
  id: 11019, pillar: 11, type: "scale",
  title: "Ta fonction d'enablement contribue-t-elle de façon directe et mesurable contribue-t-elle à des améliorations du win rate, du temps de montée en puissance et de la constance du pipeline ?",
  options: [
    "La contribution de l'enablement à la performance n'est pas mesurée ni suivie",
    "Des preuves anecdotiques suggèrent que l'enablement aide mais aucune donnée ne soutient cette affirmation",
    "Certains indicateurs avancés d'impact de l'enablement sont suivis mais non formellement revus",
    "Le ROI de l'enablement est revu trimestriellement : temps de montée en puissance, win rate par complétion de formation et utilisation des playbooks suivis",
    "L'enablement est une fonction de revenu mesurée : win rate, temps de montée en puissance et améliorations de vélocité des deals attribués aux programmes d'enablement et revus mensuellement avec le leadership Sales"
  ]
},
{
  id: 11020, pillar: 11, type: "scale",
  title: "À quel point et rapidité ton organisation gère-t-elle les commerciaux sous-performants, et quel est le délai moyen entre l'identification de la sous-performance et sa résolution ?",
  options: [
    "La sous-performance est tolérée indéfiniment : aucune gestion systématique de la performance n'existe",
    "Les sous-performants sont finalement adressés mais le processus est incohérent et lent",
    "Un processus de PIP formel existe mais l'activation est retardée et les résultats sont imprévisibles",
    "La sous-performance est identifiée dans le trimestre et adressée par un plan d'amélioration documenté sous 30 jours",
    "Les indicateurs avancés signalent la sous-performance tôt, les plans d'amélioration s'activent sous 30 jours et les résultats sont suivis de façon cohérente"
  ]
},

/* ===========================================================
   PILLAR 12: ALIGNMENT & GOVERNANCE (20 QUESTIONS)
   =========================================================== */

{
  id: 12001, pillar: 12, type: "scale",
  title: "Si tu demandais à cinq commerciaux GTM de première ligne dès maintenant de nommer les trois principales priorités de ce trimestre, combien donneraient la même réponse ?",
  subtitle: "Réponds pour ton segment de revenu principal et ta motion GTM principale, sauf si une question te demande explicitement de distinguer.",
  options: [
    "Moins de deux seraient d'accord : les priorités sont inconnues ou contradictoires au niveau de la première ligne",
    "Deux ou trois pourraient s'aligner globalement mais avec des variations significatives dans la formulation et le classement",
    "La plupart nommeraient des priorités similaires mais sans langage précis ni ordre cohérent",
    "Quatre ou cinq donneraient la même réponse : les priorités sont communiquées et testées en réunions d'équipe",
    "Les cinq donneraient des réponses identiques : la cascade de priorités est vérifiée par un contrôle structuré trimestriel de compréhension en première ligne: et le désalignement déclenche une intervention de communication immédiate"
  ]
},
{
  id: 12002, pillar: 12, type: "scale",
  title: "Lorsque le leadership se réunit pour revoir la performance GTM, combien de temps est consacré à débattre des définitions de données vs à résoudre réellement les problèmes ?",
  options: [
    "La majeure partie du temps de réunion est consommée par des disputes de données : aucune source unique de vérité n'existe",
    "Les débats de données font fréquemment dérailler les discussions et retardent les décisions",
    "Les données sont principalement acceptées mais des disputes occasionnelles ralentissent les revues",
    "Les définitions de données sont verrouillées : les réunions se concentrent sur l'interprétation et les décisions plutôt que sur les disputes de chiffres",
    "Tous les forums du leadership opèrent à partir d'une source de données unique et gouvernée : les débats de données sont absents et 100 % du temps est consacré à la prise de décision"
  ]
},
{
  id: 12003, pillar: 12, type: "scale",
  title: "À quel point les équipes GTM sont-elles tenues responsables des objectifs auxquels elles se sont engagées, et que se passe-t-il quand un engagement est manqué ?",
  options: [
    "Pas de mécanisme de responsabilisation : les objectifs manqués sont justifiés sans conséquence",
    "Les objectifs manqués sont discutés de façon informelle mais la responsabilisation structurée est absente",
    "Un processus de revue existe mais la responsabilisation est incohérente entre les leaders",
    "Une revue de responsabilisation formelle pour les objectifs manqués avec cause racine documentée et action corrective",
    "Un système de responsabilisation discipliné : les objectifs manqués déclenchent une revue documentée sous deux semaines, les actions correctives sont suivies et les manquements répétés sont escaladés"
  ]
},
{
  id: 12004, pillar: 12, type: "scale",
  title: "Lorsqu'une décision GTM cross-fonctionnelle nécessite l'input de plus de deux équipes, combien de temps faut-il généralement pour atteindre une conclusion documentée: et est-ce suivi ?",
  options: [
    "Les décisions multi-équipes n'ont pas de processus défini : elles se résolvent quand quelqu'un finit par forcer une conclusion",
    "Ces décisions ont lieu de façon informelle en réunion, mais le temps de résolution n'est pas suivi et varie considérablement",
    "La plupart des décisions multi-équipes se résolvent en quelques semaines, mais il n'y a pas de SLA formel et les retards sont courants",
    "Un processus documenté existe pour les décisions multi-équipes avec un calendrier défini et un facilitateur responsable",
    "Un protocole gouverné de décision multi-équipes : échéances d'input, propriétaire de la décision et SLA de résolution définis: temps de décision suivi trimestriellement et les retards persistants sont escaladés au leadership automatiquement"
  ]
},
{
  id: 12005, pillar: 12, type: "scale",
  title: "À quel point ta cadence opérationnelle GTM tient-elle, et quel pourcentage des réunions programmées sont annulées ou menées sans pré-lecture ?",
  options: [
    "Les réunions sont fréquemment annulées ou tenues sans préparation : la cadence n'est pas fiable",
    "La cadence fonctionne mais la participation et la préparation sont incohérentes",
    "Les réunions se tiennent globalement mais les pré-lectures et les standards de documentation ne sont pas appliqués",
    "La cadence opérationnelle est maintenue de façon cohérente avec des pré-lectures et des résultats documentés",
    "Un rythme opérationnel non négociable : standards de participation, de pré-lecture et de résultats appliqués, avec la santé de la cadence revue mensuellement par le COO ou le CRO"
  ]
},
{
  id: 12006, pillar: 12, type: "scale",
  title: "Au dernier trimestre, combien d'initiatives GTM ont été formellement arrêtées ou déprioritisées: et cette décision a-t-elle été prise proactivement ou seulement après que des ressources aient déjà été gaspillées ?",
  options: [
    "Les initiatives s'arrêtent rarement : une fois démarrées, le travail GTM tend à continuer indépendamment des résultats",
    "Certaines initiatives sont discrètement abandonnées, mais les décisions formelles d'arrêt sont rares et non documentées",
    "Quelques initiatives ont été arrêtées ce trimestre, mais les décisions étaient réactives et sont venues après un échec visible",
    "Les décisions d'arrêt d'initiatives sont documentées, revues dans la planification trimestrielle et guidées par des critères de performance pré-définis",
    "Une discipline d'initiatives gouvernée : critères d'arrêt/déprioritisation définis au lancement, performance revue à des points de contrôle fixes et décisions d'arrêt prises proactivement: avec un post-mortem pour éviter un gaspillage similaire"
  ]
},
{
  id: 12007, pillar: 12, type: "scale",
  title: "Parmi tes initiatives GTM actuelles : combien ont un seul responsable nommé avec une autorité définie: et combien sont détenues par un comité ou n'ont pas de responsable clair ?",
  options: [
    "Les initiatives n'ont pas de propriétaire formel : tout le monde et personne n'est responsable",
    "La responsabilité est attribuée de façon informelle mais l'autorité et la redevabilité sont floues",
    "Des propriétaires d'initiatives existent mais le sponsorship au niveau exécutif est incohérent",
    "Chaque initiative GTM a un propriétaire documenté avec une autorité et une redevabilité définies",
    "Un modèle formel de gouvernance des initiatives : un seul propriétaire redevable, sponsor exécutif, métriques de succès définies et statut mensuel revu dans le forum de leadership GTM"
  ]
},
{
  id: 12008, pillar: 12, type: "scale",
  title: "À quelle vitesse et proprement les blocages opérationnels sont-ils escaladés et résolus, et ton chemin d'escalade mène-t-il réellement à une résolution ?",
  options: [
    "Pas de chemin d'escalade : les blocages s'accumulent jusqu'à devenir des crises",
    "Les blocages sont soulevés de façon informelle mais la résolution est lente et imprévisible",
    "Un processus d'escalade existe mais est rarement utilisé ou fiable",
    "Un chemin d'escalade défini avec des SLA de temps de réponse et un suivi de résolution documenté",
    "Un système gouverné de résolution des blocages : déclencheurs d'escalade, SLA de réponse et résultats de résolution suivis mensuellement dans la revue opérationnelle"
  ]
},
{
  id: 12009, pillar: 12, type: "scale",
  title: "Lors de tes trois dernières réunions de gouvernance : quel pourcentage des actions documentées ont été complétées par le responsable convenu, dans le délai convenu ?",
  options: [
    "Les réunions produisent des discussions mais pas de décisions documentées ni de responsables",
    "Certaines décisions sont prises en réunion mais le suivi n'est pas systématiquement assuré",
    "Les décisions sont documentées mais le suivi des actions est incohérent entre les réunions",
    "Toutes les réunions de gouvernance produisent un journal de décisions avec des responsables, des échéances et un progrès revu à la session suivante",
    "Un système opérationnel de gouvernance discipliné : chaque réunion produit un journal de décisions structuré, les actions sont revues au début de la réunion suivante et les taux de complétion sont suivis"
  ]
},
{
  id: 12010, pillar: 12, type: "scale",
  title: "À quel point ton processus de gestion de la performance est-il systématique et cohérent, et combien de temps faut-il entre l'identification de la sous-performance et la prise d'action documentée ?",
  options: [
    "La gestion de la performance est entièrement ad-hoc : aucun processus systématique n'existe",
    "Les problèmes de performance sont adressés de façon informelle et incohérente entre les managers",
    "Un processus de PIP formel existe mais l'activation est retardée de semaines ou de mois",
    "Les problèmes de performance déclenchent une revue formelle sous 30 jours avec des critères d'amélioration documentés",
    "Un système de gestion de la performance gouverné : sous-performance identifiée via des indicateurs avancés, revue formelle sous deux semaines et résultats suivis de façon cohérente"
  ]
},
{
  id: 12011, pillar: 12, type: "scale",
  title: "Au dernier trimestre, combien d'initiatives GTM cross-fonctionnelles ont été retardées, bloquées ou ont échoué en raison d'une responsabilité floue ou de lacunes d'interface entre les équipes ?",
  options: [
    "Plusieurs initiatives majeures ont été retardées en raison d'une ambiguïté de responsabilité : c'est un schéma récurrent",
    "Plusieurs initiatives plus petites ont été ralenties par des interfaces floues mais rien n'a été formellement adressé",
    "Un ou deux retards se sont produits et ont été résolus de façon informelle",
    "Les lacunes de responsabilité sont identifiées dans la rétrospective trimestrielle et adressées avant le prochain cycle de planification",
    "Les lacunes de responsabilité cross-fonctionnelles sont suivies comme métrique de gouvernance : fréquence, temps de résolution et cause racine revus trimestriellement"
  ]
},
{
  id: 12012, pillar: 12, type: "scale",
  title: "L'investissement GTM et l'allocation de headcount reflètent-ils les priorités stratégiques de ton plan GTM ?",
  options: [
    "Les décisions d'investissement sont guidées par l'inertie ou la politique interne, pas par les priorités stratégiques",
    "Une certaine connexion entre la stratégie et l'allocation des ressources existe mais elle est lâche",
    "L'allocation des ressources fait référence à la stratégie mais un désalignement significatif persiste",
    "Les décisions d'allocation des ressources sont documentées et mappées aux priorités stratégiques dans la planification",
    "Un modèle de gouvernance stratégie-vers-investissement : chaque décision d'allocation significative documentée par rapport à la priorité stratégique qu'elle sert, revue trimestriellement"
  ]
},
{
  id: 12013, pillar: 12, type: "scale",
  title: "À quel point les boucles de feedback entre les équipes GTM de première ligne et le leadership exécutif sont-elles structurées et orientées vers l'action ?",
  options: [
    "Pas de boucle de feedback structurée : les dirigeants entendent la première ligne via les escalades",
    "Le feedback de première ligne atteint le leadership de façon informelle et incohérente",
    "Un mécanisme de feedback existe mais les résultats ne sont pas fiablement exploités",
    "Un processus trimestriel structuré de feedback première ligne-vers-dirigeants avec des actions documentées",
    "Un système de feedback bidirectionnel continu : signaux de première ligne revus mensuellement, réponses des dirigeants documentées et complétion des actions suivie"
  ]
},
{
  id: 12014, pillar: 12, type: "scale",
  title: "À quel point ton processus d'ajustements stratégiques est-il défini, et qu'est-ce qui déclenche une revue stratégique entre les cycles de planification annuels ?",
  options: [
    "Pas de processus défini : les changements de stratégie ont lieu de façon réactive quand quelque chose casse",
    "Le leadership discute des ajustements stratégiques de façon informelle quand des problèmes émergent",
    "Une revue stratégique large est déclenchée par des événements majeurs mais les critères ne sont pas documentés",
    "Des seuils de performance définis déclenchent une revue stratégique structurée avec un processus documenté",
    "Un protocole gouverné d'adaptation stratégique : déclencheurs définis, processus de revue et exigences de documentation pour tous les ajustements entre les cycles"
  ]
},
{
  id: 12015, pillar: 12, type: "scale",
  title: "Au dernier trimestre, combien de décisions prises dans tes réunions GTM hebdomadaires étaient directement traçables à un objectif trimestriel: et combien étaient réactives à des problèmes non prévus ?",
  options: [
    "La plupart des décisions hebdomadaires sont réactives : il y a peu de lien visible avec les objectifs trimestriels",
    "Les objectifs trimestriels existent, mais les décisions hebdomadaires dérivent fréquemment sans être challengées",
    "Certaines décisions hebdomadaires peuvent être retracées aux objectifs trimestriels, mais le travail réactif consomme encore une grande part de l'attention du leadership",
    "La plupart des décisions hebdomadaires peuvent être retracées aux objectifs trimestriels, avec le travail réactif explicitement identifié et contenu",
    "Les décisions opérationnelles hebdomadaires sont mappées aux objectifs trimestriels par conception : le travail hors-plan est enregistré, quantifié et revu comme signal de santé de gouvernance"
  ]
},
{
  id: 12016, pillar: 12, type: "scale",
  title: "Au cours des deux derniers trimestres, combien de problèmes GTM significatifs le leadership exécutif a-t-il appris d'un membre de l'équipe de première ligne avant qu'il n'apparaisse dans une métrique: et combien n'ont-ils découverts qu'après un manquement ?",
  options: [
    "Le leadership apprend généralement les problèmes seulement après un manquement de métrique ou un échec visible",
    "Quelques problèmes sont remontés tôt, mais principalement par des leaders seniors plutôt que par les équipes de première ligne",
    "Certaines alertes précoces originées de la première ligne atteignent le leadership, mais le schéma est incohérent",
    "Plusieurs problèmes matériels ont été remontés tôt par les équipes de première ligne et adressés avant l'impact sur le revenu",
    "L'alerte précoce est un signal gouverné : les escalades originées de la première ligne sont suivies, revues par rapport aux résultats ultérieurs et utilisées comme métrique de santé de transparence"
  ]
},
{
  id: 12017, pillar: 12, type: "scale",
  title: "À quel point tes chemins d'escalade GTM sont-ils clairs et activement utilisés, et n'importe quel membre de l'équipe peut-il décrire comment escalader un problème majeur dès maintenant ?",
  options: [
    "Pas de chemins d'escalade formels : les problèmes sont gérés de façon informelle ou pas du tout",
    "Des chemins d'escalade existent mais ne sont pas largement connus ou fiables",
    "Les chemins d'escalade sont documentés mais l'utilisation est incohérente",
    "Les chemins d'escalade sont documentés, formés et systématiquement référencés quand des blocages surviennent",
    "Un système d'escalade gouverné : les chemins sont documentés, testés annuellement et les taux d'utilisation suivis comme métrique de santé de transparence organisationnelle"
  ]
},
{
  id: 12018, pillar: 12, type: "scale",
  title: "Au cours des deux derniers trimestres, combien de risques ou manquements GTM significatifs ont fait surface au niveau exécutif AVANT qu'ils ne deviennent un problème de revenu, et qui les a fait remonter ?",
  options: [
    "Les manquements significatifs étaient toujours découverts au stade de l'impact sur le revenu : la première ligne n'a pas escaladé tôt",
    "Occasionnellement des risques ont été remontés tôt mais par des leaders seniors, pas par les équipes de première ligne",
    "Quelques escalades précoces ont eu lieu mais le schéma est incohérent",
    "Plusieurs escalades précoces sont venues des équipes de première ligne et ont été adressées avant l'impact sur le revenu",
    "L'escalade précoce des risques est une métrique suivie : les alertes précoces sourcées en première ligne sont comptées, reconnues publiquement et le ratio détection précoce vs tardive est revu trimestriellement"
  ]
},
{
  id: 12019, pillar: 12, type: "scale",
  title: "Quel pourcentage des éléments d'action de tes trois dernières revues de leadership GTM a été complété à temps, par le responsable, dans le délai convenu ?",
  options: [
    "Nous ne suivons pas la complétion des éléments d'action des revues de leadership",
    "Les éléments d'action sont enregistrés mais la complétion est rarement revue à la réunion suivante",
    "Environ la moitié des éléments d'action sont complétés à temps : le reste est reporté de façon répétée",
    "Plus de 70 % des éléments d'action sont complétés à temps, revus au début de chaque réunion",
    "Le taux de complétion des actions est une métrique de santé de gouvernance : suivi par responsable, rapporté au CRO mensuellement et une complétion en dessous du seuil déclenche une revue d'escalade"
  ]
},
{
  id: 12020, pillar: 12, type: "scale",
  title: "Au dernier trimestre, combien de décisions GTM ont été inversées ou significativement modifiées après implémentation: parce que la décision originale était basée sur une intelligence de première ligne incomplète ?",
  options: [
    "Les inversions de décisions sont courantes : nous découvrons fréquemment que la réalité terrain contredit ce qui a motivé la décision originale",
    "Certaines inversions ont lieu, mais elles ne sont pas suivies et la connexion aux lacunes d'intelligence n'est pas analysée",
    "Des inversions occasionnelles surviennent et sont discutées de façon informelle, mais aucun suivi formel ni processus de cause racine n'existe",
    "Les inversions de décisions sont suivies, et celles liées aux lacunes d'intelligence sont revues dans la gouvernance trimestrielle",
    "Un système de qualité des décisions : inversions suivies avec cause racine, inversions liées aux lacunes d'intelligence revues mensuellement et les schémas alimentent la façon dont les données de première ligne sont collectées et remontées avant la prise de décision"
  ]
},


]; // END QUESTIONS ARRAY

window.QUESTIONS = QUESTIONS;
