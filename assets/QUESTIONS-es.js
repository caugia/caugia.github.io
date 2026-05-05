/* ===========================================================
   MASTER QUESTION ENGINE v4.8 — CANONICAL (SPANISH)
   =========================================================== */

const QUESTIONS = [
/* ===========================================================
   PILAR 0: CONTEXTO (25 QUESTIONS)
   =========================================================== */

{
  id: 1, pillar: 0, type: "group",
  title: "Cuéntanos sobre ti y tu empresa",
  subtitle: "Identidad de la empresa utilizada para calibrar los benchmarks y el contexto de reporting.",
  fields: [
    { name: "fullname",        label: "Tu nombre completo" },
    { name: "role",            label: "Tu cargo o puesto" },
    { name: "email",           label: "Dirección de correo electrónico" },
    { name: "company",         label: "Nombre de la empresa" },
    { name: "industry",        label: "Sector (p. ej. FinTech, HRTech, DevTools)" },
    { name: "total_employees", label: "Número total de empleados (ETC)" },
    { name: "year_founded",    label: "Año de fundación (AAAA)" },
    { name: "hq_region",       label: "Región de la sede (US, ES, FR, UK, DACH, Benelux, Nordics, Otra)" }
  ]
},

{
  id: 2, pillar: 0, type: "group",
  title: "Métricas clave de rendimiento SaaS",
  subtitle: "Base financiera y de retención.",
  fields: [
    { name: "arr",              label: "ARR actual (Annual Recurring Revenue)" },
    { name: "growth_rate",      label: "Tasa de crecimiento anual (%)" },
    { name: "nrr",              label: "Net Revenue Retention — NRR (%)" },
    { name: "grr",              label: "Gross Revenue Retention — GRR (%)" },
    { name: "gross_margin",     label: "Margen bruto (%)" },
    { name: "monthly_burn",     label: "Burn neto mensual" },
    { name: "cash_runway",      label: "Runway de tesorería (meses)" },
    { name: "number_of_clients",label: "Número de clientes de pago activos" }
  ]
},

{
  id: 3, pillar: 0, type: "group",
  title: "Composición del equipo GTM",
  subtitle: "Equivalentes a tiempo completo únicamente.",
  fields: [
    { name: "sales_headcount",             label: "# Ventas — AEs / Closers" },
    { name: "sdr_headcount",               label: "# SDR / BDR" },
    { name: "marketing_headcount",         label: "# Marketing — Demand + PMM + Brand" },
    { name: "cs_headcount",               label: "# Customer Success / Account Management" },
    { name: "revops_enablement_headcount", label: "# RevOps / Enablement" },
    { name: "product_headcount",           label: "# Producto — PM + Design únicamente (sin engineering)" },
    { name: "engineering_headcount",       label: "# Engineering / I+D — solo desarrolladores" },
    { name: "gtm_other_headcount",         label: "# Otros GTM — Partners, SEs" }
  ]
},

{
  id: 4, pillar: 0, type: "group",
  title: "Objetivos y eficiencia",
  subtitle: "Eficiencia de los ingresos y rendimiento comercial.",
  fields: [
    { name: "arr_target",         label: "Objetivo de ARR para este ejercicio fiscal" },
    { name: "quota_attainment",   label: "% de comerciales que alcanzan su quota — último trimestre completo" },
    { name: "cac_payback",        label: "Periodo de retorno del CAC (meses)" },
    { name: "magic_number",       label: "Magic Number — net new ARR ÷ gasto S&M del trimestre anterior" },
    { name: "avg_discount",       label: "Descuento medio (%) sobre nuevos logos" },
    { name: "expansion_pct",      label: "% del nuevo ARR procedente de upsell / expansion" },
    { name: "avg_ramp_months",    label: "Duración media de ramp de un nuevo AE — meses hasta quota completa" },
    { name: "sales_marketing_pct",label: "Gasto de Sales & Marketing como % de los ingresos" }
  ]
},

{
  id: 5, pillar: 0, type: "group",
  title: "Velocidad del funnel y contexto de riesgo",
  subtitle: "Dónde se ralentizan, se bloquean o desaparecen los deals.",
  fields: [
    { name: "win_rate",             label: "Win rate medio (%)" },
    { name: "sales_cycle",          label: "Duración media del ciclo de ventas (días)" },
    { name: "pipeline_coverage",    label: "Ratio de cobertura de pipeline (p. ej. 3,5 para 3,5x)" },
    { name: "inbound_pipeline_pct", label: "% del pipeline cualificado procedente del inbound" },
    { name: "revenue_concentration",label: "% de los ingresos procedentes de los 10 primeros clientes" },
    { name: "top_competitors",      label: "Top 3 de competidores (separados por comas)" },
    { name: "primary_loss_reason",  label: "Principal razón de pérdida — una frase" },
    { name: "primary_churn_reason", label: "Principal razón de churn — una frase" }
  ]
},

{
  id: 6, pillar: 0, type: "group",
  title: "Inteligencia de pipeline y producto",
  subtitle: "Mecánicas de conversión y adopción observadas.",
  fields: [
    { name: "discovery_to_demo",        label: "Conversión Discovery → Demo (%)" },
    { name: "demo_to_poc",              label: "Conversión Demo → POC / Trial (%)" },
    { name: "poc_to_close",             label: "Conversión POC → Closing (%)" },
    { name: "technical_validation_loss",label: "% de deals perdidos en la validación técnica" },
    { name: "activation_30d",           label: "% de usuarios activos 30 días después del onboarding" },
    { name: "feature_penetration",      label: "% de cuentas que utilizan 3+ funcionalidades clave" },
    { name: "time_to_value",            label: "Número medio de días hasta el primer momento de valor" },
    { name: "product_expansion_pct",    label: "% de los ingresos de expansion generados por señales de uso de producto" }
  ]
},

{
  id: 7, pillar: 0, type: "multi_radio",
  title: "Modelo GTM",
  subtitle: "Elige una opción para cada pregunta.",
  questions: [
    {
      key: "gtm_motion",
      label: "¿Cuál describe mejor tu motion GTM principal?",
      options: [
        "Inbound-led (liderado por marketing)",
        "Outbound-led (liderado por ventas)",
        "Product-led (PLG / self-serve)",
        "Partner-led (channel / ecosistema)",
        "Enterprise Field Sales (alto nivel de acompañamiento)",
        "Híbrido (mix equilibrado)"
      ]
    },
    {
      key: "revenue_model",
      label: "Tu modelo de ingresos principal",
      options: [
        "Suscripción SaaS (recurrente)",
        "Basado en uso / consumo",
        "Transaccional / puntual",
        "Marketplace / take-rate",
        "Servicios gestionados / híbrido"
      ]
    }
  ]
},

{
  id: 8, pillar: 0, type: "group",
  title: "Detalle de churn y contratos",
  subtitle: "Estructura de retención y comercial.",
  fields: [
    { name: "burn_multiple",       label: "Burn Multiple — burn neto ÷ net new ARR" },
    { name: "logo_churn_rate",     label: "Tasa anual de churn de logos — % de clientes perdidos" },
    { name: "revenue_churn_rate",  label: "Tasa anual de churn de ingresos — % de ARR perdido" },
    { name: "avg_contract_length", label: "Duración media de los contratos (meses)" }
  ]
},

{
  id: 9, pillar: 0, type: "multi_radio",
  title: "Mercado objetivo",
  subtitle: "Elige una opción para cada pregunta.",
  questions: [
    {
      key: "target_segment",
      label: "Segmento objetivo principal (estrategia declarada)",
      options: [
        "Rabbit / SMB (< 10 000 € ACV)",
        "Deer / Mid-Market (10 000 € – 50 000 € ACV)",
        "Elephant / Enterprise (50 000 € – 250 000 € ACV)",
        "Whale / Strategic (250 000 €+ ACV)"
      ]
    },
    {
      key: "economic_buyer",
      label: "¿Quién es tu comprador económico principal?",
      options: [
        "Directivo C-Level (CEO, CFO, CTO)",
        "VP / Director de departamento",
        "Team Lead / Manager",
        "Colaborador individual / Usuario final",
        "Técnico / IT / Compras"
      ]
    }
  ]
},

{
  id: 10, pillar: 0, type: "group",
  title: "Eficiencia y detalle del funnel",
  subtitle: "Métricas de eficiencia secundarias.",
  fields: [
    { name: "ltv_cac",              label: "Ratio LTV:CAC" },
    { name: "pct_deals_no_discount",label: "% de deals cerrados a precio de tarifa" },
    { name: "outbound_pipeline_pct",label: "% del pipeline cualificado procedente del outbound" },
    { name: "mql_to_sql_rate",      label: "Tasa de conversión MQL a SQL (%)" }
  ]
},

{
  id: 11, pillar: 0, type: "multi_radio",
  title: "Fase de la empresa",
  subtitle: "Elige una opción para cada pregunta.",
  questions: [
    {
      key: "operating_phase",
      label: "¿Qué fase operativa describe mejor tu empresa hoy?",
      options: [
        "Land & Expand — Crecimiento rápido, inversión agresiva en nuevos logos. El burn es intencional.",
        "Grow & Optimize — Escalado de los ingresos mejorando la eficiencia. La Rule of 40 está al alcance.",
        "Efficiency First — La rentabilidad es el objetivo principal. Los nuevos logos son secundarios frente al NRR y al margen.",
        "Transición / Reposicionamiento — Cambio activo de segmento, motion, producto o mercado.",
        "Estabilización / Recovery — Protección de la base de ingresos y reducción del riesgo antes de la siguiente fase de crecimiento."
      ]
    },
    {
      key: "funding_stage",
      label: "Fase de financiación",
      options: [
        "Bootstrapped / Rentable",
        "Pre-Seed / Seed",
        "Series A",
        "Series B",
        "Series C+",
        "Private Equity / Cotizada en bolsa"
      ]
    }
  ]
},

{
  id: 12, pillar: 0, type: "group",
  title: "Contexto del equipo y fuentes de pipeline",
  subtitle: "Cobertura geográfica y distribución del pipeline por canal.",
  fields: [
    { name: "sales_leadership_headcount",label: "# Liderazgo de Ventas — VP / Head / Managers" },
    { name: "active_countries",          label: "Número de países con ventas activas o clientes" },
    { name: "inbound_pct",  label: "% Pipeline — Inbound (contenido, SEO, marca, eventos)", type: "number", min: 0, max: 100, placeholder: "p. ej. 40" },
    { name: "outbound_pct", label: "% Pipeline — Outbound (SDR, prospección AE, cold)",  type: "number", min: 0, max: 100, placeholder: "p. ej. 30" },
    { name: "plg_pct",      label: "% Pipeline — Product-led (PLG, self-serve, trial)",   type: "number", min: 0, max: 100, placeholder: "p. ej. 20" },
    { name: "partner_pct",  label: "% Pipeline — Partners (channel, ecosistema, referidos)",type: "number", min: 0, max: 100, placeholder: "p. ej. 10" }
  ]
},

{
  id: 13, pillar: 0, type: "group",
  title: "Rendimiento actual vs objetivo",
  subtitle: "Lo que el liderazgo sigue hoy y dónde está la brecha.",
  fields: [
    { name: "current_primary_metric",       label: "Métrica principal seguida por el liderazgo — p. ej. ARR, NRR, EBITDA, Rule of 40, Win Rate, Burn Multiple" },
    { name: "current_primary_metric_value", label: "Valor actual de esa métrica" },
    { name: "current_primary_metric_goal",  label: "Valor objetivo para este ejercicio fiscal" },
    { name: "leadership_bottleneck",        label: "Principal cuello de botella percibido por el liderazgo — una frase" }
  ]
},

{
  id: 14, pillar: 0, type: "radio",
  title: "¿Cuál es la urgencia de resolver tu principal cuello de botella GTM?",
  subtitle: "Elige la opción que refleje tu realidad operativa actual.",
  options: [
    "Baja — Tenemos tiempo para resolverlo correctamente",
    "Moderada — Requiere atención en los dos próximos trimestres",
    "Alta — Actualmente está bloqueando el crecimiento",
    "Crítica — Amenaza a la empresa en menos de 90 días"
  ]
},

{
  id: 15, pillar: 0, type: "multi_radio",
  title: "Perfil de producto",
  subtitle: "Elige una opción para cada pregunta.",
  questions: [
    {
      key: "product_category",
      label: "Tipo de categoría de producto",
      options: [
        "Sistema de referencia (p. ej. CRM, ERP, HRIS)",
        "Sistema de engagement (p. ej. SEP, Collaboration, Messaging)",
        "Solución puntual / Herramienta de workflow",
        "Infraestructura / API / Herramienta para desarrolladores",
        "Data / Analytics / IA / BI"
      ]
    },
    {
      key: "product_complexity",
      label: "¿Cómo describiría la complejidad de tu producto para un comprador tipo?",
      options: [
        "Simple / Plug & Play — Operativo en pocas horas, sin necesidad de soporte técnico",
        "Moderadamente complejo — Configuración básica, operativo en pocos días",
        "Complejo / Configurable — Requiere parametrización, formación y un proceso de onboarding definido",
        "Muy complejo / A medida — Implementación de varios meses, se requieren solutions engineers"
      ]
    }
  ]
},

{
  id: 16, pillar: 0, type: "group",
  title: "Objetivo a 12 meses",
  subtitle: "Lo que la empresa debe alcanzar en los próximos 12 meses.",
  fields: [
    { name: "goal_12m_primary_metric",   label: "Métrica principal de éxito a 12 meses — p. ej. ARR, NRR, Rule of 40, EBITDA %" },
    { name: "goal_12m_primary_target",   label: "Valor objetivo a 12 meses" },
    { name: "goal_12m_secondary_metric", label: "Métrica secundaria (12 meses)" },
    { name: "goal_12m_secondary_target", label: "Valor objetivo secundario" }
  ]
},

{
  id: 17, pillar: 0, type: "radio",
  title: "¿Cuál es tu eje estratégico principal para los próximos 12 meses?",
  subtitle: "Responde por tu segmento de ingresos principal y tu motion GTM principal, salvo que una pregunta pida explícitamente distinguir.",
  options: [
    "Adquisición agresiva de nuevos logos — El volumen de nuevos clientes por encima de todo",
    "Eficiencia y rentabilidad — Tesorería, mejora de márgenes, reducción del burn",
    "Expansion y NRR — Upsell, cross-sell y retención como motor principal de ingresos",
    "Entrada en un nuevo mercado — Nueva geografía, segmento o motion GTM",
    "Liderazgo de categoría — Marca, posicionamiento y defendibilidad a largo plazo"
  ]
},

{
  id: 18, pillar: 0, type: "radio",
  title: "¿Cuál es tu síntoma GTM más visible actualmente?",
  options: [
    "No hay suficientes leads — La parte alta del funnel es demasiado estrecha",
    "Baja conversión — El pipeline existe pero los deals no se cierran",
    "Deals estancados / Ciclos largos — Los deals avanzan lentamente o se quedan en silencio",
    "Churn o downsell elevado — Los clientes se van o el valor contractual disminuye",
    "Desalineamiento de los equipos — La ejecución es incoherente o la coordinación se degrada"
  ]
},

{
  id: 19, pillar: 0, type: "radio",
  title: "¿Cuál es la causa profunda según el liderazgo?",
  options: [
    "Carencias de talento o de contratación — No tenemos a las personas adecuadas en los puestos adecuados",
    "Deuda tecnológica o de datos — Los sistemas son lentos, fallan o no existen",
    "Restricciones presupuestarias — No podemos invertir lo que la estrategia exige",
    "Ambigüedad estratégica — El liderazgo no está plenamente alineado sobre la dirección o las prioridades",
    "Carencias de producto — El producto no puede soportar la motion GTM que necesitamos"
  ]
},

{
  id: 20, pillar: 0, type: "group",
  title: "Objetivo a 24 meses",
  subtitle: "Cómo debe ser la empresa dentro de 24 meses.",
  fields: [
    { name: "goal_24m_primary_metric",   label: "Métrica principal de éxito a 24 meses" },
    { name: "goal_24m_primary_target",   label: "Valor objetivo a 24 meses" },
    { name: "goal_24m_secondary_metric", label: "Métrica secundaria (24 meses)" },
    { name: "goal_24m_secondary_target", label: "Valor objetivo secundario" },
    { name: "goal_24m_operating_model",  label: "Modelo operativo objetivo a 24 meses — p. ej. Rule of 40, EBITDA positivo, listo para una salida, listo para IPO" }
  ]
},

{
  id: 21, pillar: 0, type: "radio",
  title: "¿A cuántos segmentos comerciales se dirige activamente hoy?",
  subtitle: "Un segmento es un grupo de compradores distinto con un ACV, una motion o una propuesta de valor significativamente diferentes.",
  options: [
    "1 segmento — Un único tipo de comprador y una única motion",
    "2 segmentos — Dos grupos de compradores distintos",
    "3 segmentos — Tres grupos de compradores distintos",
    "4 segmentos o más"
  ]
},

{
  id: 22, pillar: 0, type: "group",
  title: "Rendimiento del segmento 1",
  subtitle: "Tu segmento principal o el de mayor contribución al ARR.",
  fields: [
    { name: "segment_1_name",     label: "Segmento 1 — Nombre o descripción (p. ej. Mid-Market SaaS)" },
    { name: "segment_1_arr_pct",  label: "Segmento 1 — Contribución al ARR (%)" },
    { name: "segment_1_acv",      label: "Segmento 1 — ACV medio" },
    { name: "segment_1_win_rate", label: "Segmento 1 — Win Rate (%)" },
    { name: "segment_1_nrr",      label: "Segmento 1 — NRR (%)" },
    { name: "segment_1_priority", label: "Segmento 1 — Prioridad estratégica",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

{
  id: 23, pillar: 0, type: "group",
  title: "Rendimiento del segmento 2",
  subtitle: "Tu segundo segmento.",
  fields: [
    { name: "segment_2_name",     label: "Segmento 2 — Nombre" },
    { name: "segment_2_arr_pct",  label: "Segmento 2 — Contribución al ARR (%)" },
    { name: "segment_2_acv",      label: "Segmento 2 — ACV medio" },
    { name: "segment_2_win_rate", label: "Segmento 2 — Win Rate (%)" },
    { name: "segment_2_nrr",      label: "Segmento 2 — NRR (%)" },
    { name: "segment_2_priority", label: "Segmento 2 — Prioridad",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

{
  id: 24, pillar: 0, type: "multi_radio",
  title: "Contexto de mercado y reporting",
  subtitle: "Elige una opción para cada pregunta.",
  questions: [
    {
      key: "market_adoption",
      label: "Fase de adopción del mercado",
      options: [
        "Emergente — Todavía se requiere educación de la categoría antes de vender",
        "Crecimiento temprano — La notoriedad de la categoría existe, la diferenciación de producto es el reto principal",
        "Crecimiento establecido — Varias alternativas creíbles, la competencia se intensifica",
        "Madura — La categoría se comoditiza, la retención y la eficiencia pesan más que la adquisición"
      ]
    },
    {
      key: "currency",
      label: "Divisa principal de reporting",
      options: [
        "USD ($)",
        "EUR (€)",
        "GBP (£)",
        "AUD ($)",
        "CAD ($)",
        "Otra"
      ]
    }
  ]
},

{
  id: 25, pillar: 0, type: "group",
  title: "Rendimiento del segmento 3",
  subtitle: "Tu tercer segmento.",
  fields: [
    { name: "segment_3_name",     label: "Segmento 3 — Nombre" },
    { name: "segment_3_arr_pct",  label: "Segmento 3 — Contribución al ARR (%)" },
    { name: "segment_3_acv",      label: "Segmento 3 — ACV medio" },
    { name: "segment_3_win_rate", label: "Segmento 3 — Win Rate (%)" },
    { name: "segment_3_nrr",      label: "Segmento 3 — NRR (%)" },
    { name: "segment_3_priority", label: "Segmento 3 — Prioridad",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

/* ===========================================================
   PILAR 1: GTM STRATEGY & LEADERSHIP (20 QUESTIONS)
   =========================================================== */

{
  id: 1001, pillar: 1, type: "scale",
  title: "En los últimos 12 meses, ¿cuántas iniciativas GTM se han detenido, despriorizado o desfinanciado formalmente tras una revisión trimestral?",
  subtitle: "Responde por tu segmento de ingresos principal y tu motion GTM principal, salvo que una pregunta pida explícitamente distinguir.",
  options: [
    "No hemos detenido formalmente ninguna iniciativa: todo lo que arrancamos continúa",
    "Una o dos cosas se han abandonado de forma discreta pero sin un proceso formal de revisión",
    "Algunas iniciativas se han revisado formalmente y se han detenido con base en datos de rendimiento",
    "Tenemos un proceso trimestral documentado de cierre: las iniciativas se detienen con una justificación documentada",
    "Nuestra revisión trimestral detiene más iniciativas de las que lanza: la disciplina de recursos se aplica sistemáticamente"
  ]
},
{
  id: 1002, pillar: 1, type: "scale",
  title: "¿En qué medida has definido explícitamente qué segmentos de mercado, verticales o tipos de deal no perseguirá?",
  options: [
    "Sin exclusiones definidas: perseguimos todo lo que parece un deal",
    "Consenso informal pero nada documentado ni aplicado",
    "Existen algunas exclusiones pero no se aplican de forma coherente en ventas",
    "Criterios de exclusión escritos, revisados en las llamadas de cualificación de pipeline",
    "Reglas explícitas de ICP negativo aplicadas en el scoring del CRM, el diseño de cuotas y la retribución de comerciales"
  ]
},
{
  id: 1003, pillar: 1, type: "scale",
  title: "Cuando dos equipos GTM compiten por el mismo presupuesto o plantilla, ¿cómo se resuelve ese conflicto y en cuánto tiempo?",
  options: [
    "Los conflictos se escalan al CEO y se resuelven de forma informal durante varias semanas",
    "El liderazgo lo discute en reuniones pero la resolución es lenta y a menudo política",
    "Existe un marco de priorización documentado pero la resolución de conflictos todavía toma varios ciclos",
    "Una autoridad de decisión definida resuelve los conflictos de recursos en una semana con una justificación documentada",
    "Los conflictos de recursos se resuelven al nivel de la cadencia operativa: en menos de 48 horas, usando una jerarquía de prioridades preestablecida"
  ]
},
{
  id: 1004, pillar: 1, type: "scale",
  title: "¿Hasta qué punto tu hoja de ruta GTM para los próximos 12-18 meses es detallada y está enmarcada en el tiempo?",
  options: [
    "Sin hoja de ruta: funcionamos trimestre a trimestre de forma reactiva",
    "Objetivos trimestrales aproximados sin hitos ni responsables",
    "Existe un plan a 12 meses con hitos principales pero con responsabilización limitada",
    "Una hoja de ruta secuenciada con responsables, métricas de éxito y revisiones trimestrales",
    "Una hoja de ruta GTM completamente fasificada con hitos de validación, responsables y reporting a nivel del board"
  ]
},
{
  id: 1005, pillar: 1, type: "scale",
  title: "¿En qué medida los releases de producto y las decisiones de roadmap están conectados con los planes de lanzamiento GTM y tu calendario?",
  options: [
    "El producto se entrega de forma independiente: el GTM descubre los releases en el lanzamiento",
    "Existe cierta coordinación pero el GTM rara vez está presente en las decisiones de roadmap",
    "Hay sincronizaciones regulares producto-GTM pero la planificación aguas abajo suele ser ad-hoc",
    "Los ciclos de planificación de producto y GTM están alineados con revisiones de hitos compartidas",
    "Un calendario unificado producto-GTM guía el secuenciado, la preparación del lanzamiento y la activación comercial"
  ]
},
{
  id: 1006, pillar: 1, type: "scale",
  title: "¿Cómo se definen, siguen y revisan los objetivos GTM dentro del equipo directivo?",
  options: [
    "Los objetivos se fijan anualmente y se revisan rara vez",
    "Existen objetivos pero las revisiones de progreso son irregulares o se ignoran",
    "Se realizan revisiones mensuales pero la calidad de los datos limita la calidad de las discusiones",
    "OKR o KPI trimestrales seguidos en un sistema compartido con revisiones regulares del liderazgo",
    "Una cadencia operativa GTM formal: métricas semanales, revisiones mensuales, retrospectivas trimestrales con acciones documentadas"
  ]
},
{
  id: 1007, pillar: 1, type: "scale",
  title: "¿En qué medida tu estrategia GTM articula explícitamente por qué gana, por qué pierde y qué le hace defendible?",
  options: [
    "Sin articulación formal: la diferenciación se improvisa en las llamadas",
    "Existe un enunciado de posicionamiento de alto nivel pero carece de anclaje operativo",
    "Temas de victoria identificados de forma anecdótica a partir de los comentarios comerciales",
    "Una ventaja competitiva documentada con evidencia win/loss que la respalda",
    "Una arquitectura de diferenciación validada: testada con compradores, actualizada trimestralmente"
  ]
},
{
  id: 1008, pillar: 1, type: "scale",
  title: "En tu presupuesto actual, ¿qué motion o segmento recibe la mayor inversión y esa asignación está explícitamente documentada y defendida con datos de rendimiento?",
  options: [
    "Las decisiones presupuestarias se toman con base en el gasto del año anterior con una revisión estratégica mínima",
    "Existe cierta priorización pero es mayoritariamente política o basada en relaciones",
    "Las inversiones se mapean a las prioridades GTM pero el seguimiento del ROI es débil",
    "Un marco de priorización formal vincula el gasto a los resultados de pipeline e ingresos",
    "Las inversiones GTM se ranquean por ROI modelado, se revisan trimestralmente y se reasignan con base en datos de rendimiento"
  ]
},
{
  id: 1009, pillar: 1, type: "scale",
  title: "¿Cuál de tus motions GTM — inbound, outbound, PLG, channel — genera los ingresos más eficientes y qué datos lo confirman?",
  options: [
    "Sin visibilidad por motion: las fuentes de pipeline no se siguen",
    "Estimaciones aproximadas basadas en la intuición de los comerciales o supuestos de marketing",
    "Existen datos de pipeline por motion pero no se usan de forma coherente en la planificación",
    "El CAC, el win rate y la duración del ciclo se siguen por motion y se revisan trimestralmente",
    "Cada motion dispone de su propia vista tipo P&L: eficiencia, retorno de inversión y capacidad se modelan y actualizan"
  ]
},
{
  id: 1010, pillar: 1, type: "scale",
  title: "En los últimos 12 meses, ¿cuántas veces un desarrollo del mercado o competitivo le ha llevado a modificar materialmente una prioridad GTM, una asignación presupuestaria o una motion?",
  options: [
    "Nuestra estrategia no ha cambiado materialmente en respuesta a las señales del mercado durante el último año",
    "Hemos discutido cambios pero no hemos ajustado formalmente las prioridades o los presupuestos",
    "Se ha realizado y documentado un ajuste significativo",
    "Se han realizado y documentado dos o tres ajustes en respuesta a señales del mercado con una justificación explícita",
    "Tenemos un proceso continuo de vigilancia del mercado que produce al menos un ajuste estratégico documentado por trimestre"
  ]
},
{
  id: 1011, pillar: 1, type: "scale",
  title: "¿En qué medida dispone de playbooks GTM específicos por segmento o persona que los comerciales utilizan activamente?",
  options: [
    "Sin playbooks: cada comercial opera de forma independiente",
    "Existe un playbook de ventas genérico pero no es específico por segmento",
    "Existen playbooks para los segmentos principales pero la adopción por los comerciales es incoherente",
    "Los playbooks por segmento se utilizan en el onboarding, se revisan en los deal reviews y se actualizan trimestralmente",
    "Un sistema de playbooks modular por segmento, persona y etapa del deal: con seguimiento de uso vía CRM o plataforma de enablement"
  ]
},
{
  id: 1012, pillar: 1, type: "scale",
  title: "Cuando un nuevo colaborador GTM se incorpora al equipo, ¿cuánto tiempo pasa hasta que puede tomar una decisión alineada con tu estrategia GTM sin recurrir al liderazgo?",
  options: [
    "La mayoría de los nuevos no interiorizan nunca del todo la estrategia: recurren al liderazgo de forma indefinida",
    "Se necesitan seis meses o más hasta que un nuevo pueda tomar decisiones alineadas de forma autónoma",
    "Entre tres y seis meses: la estrategia está documentada pero es compleja de asimilar",
    "De cuatro a ocho semanas: el onboarding incluye sesiones de estrategia estructuradas con marcos de decisión",
    "De dos a cuatro semanas: la estrategia está documentada, se enseña en el onboarding y se verifica mediante una evaluación de orientación estructurada"
  ]
},
{
  id: 1013, pillar: 1, type: "scale",
  title: "¿En qué medida tu estrategia GTM está equilibrada entre la adquisición de nuevos logos y la expansion de las cuentas existentes?",
  options: [
    "Casi totalmente centrada en nuevos logos: la expansion no está estructurada",
    "La expansion se realiza de forma reactiva pero no existe una motion u objetivo dedicados",
    "Existen objetivos separados para nuevos logos y expansion pero los recursos están muy orientados a nuevos logos",
    "Capacidad de expansion dedicada, objetivos y playbooks en paralelo a la motion de nuevos logos",
    "Un modelo de doble motor: nuevos logos y expansion están dotados de recursos, medidos y revisados de forma independiente"
  ]
},
{
  id: 1014, pillar: 1, type: "scale",
  title: "De forma sistemática, ¿cómo prueba nuevas aproximaciones GTM antes de comprometer recursos para desplegarlas a gran escala?",
  options: [
    "Las nuevas iniciativas se lanzan a gran escala sin pilotos",
    "Existen tests puntuales a pequeña escala pero sin criterios de éxito definidos",
    "Se realizan pilotos pero los resultados se evalúan de forma informal e incoherente",
    "Criterios de piloto definidos, umbrales de éxito y decisiones de escalado documentados antes del lanzamiento",
    "Un playbook formal de test y escalado: hipótesis, cohorte de test, periodo de medición y criterios go/no-go para cada iniciativa"
  ]
},
{
  id: 1015, pillar: 1, type: "scale",
  title: "¿En qué medida tu estrategia GTM guía directamente los planes de contratación y la modelización de capacidad?",
  options: [
    "Las decisiones de contratación se toman de forma reactiva con base en reemplazos o el instinto de los directivos",
    "La estrategia GTM y los planes de contratación están, en el mejor de los casos, débilmente conectados",
    "Los planes anuales de plantilla hacen referencia a la estrategia GTM pero no se actualizan a lo largo del año",
    "Revisiones trimestrales de capacidad traducen los objetivos GTM en planes de contratación por rol",
    "Un modelo de capacidad rodante: objetivos de pipeline, hipótesis de ramp y secuenciado de contrataciones se actualizan cada trimestre"
  ]
},
{
  id: 1016, pillar: 1, type: "scale",
  title: "¿Qué porcentaje de tu pipeline actual procede de fuera de tu ICP principal, y cómo reacciona el liderazgo ante esa cifra?",
  options: [
    "No seguimos el pipeline ICP vs no-ICP: todo el pipeline se trata de forma igual",
    "Existe pipeline fuera de ICP pero no se mide ni se gobierna",
    "Lo seguimos pero el pipeline fuera de ICP se acepta porque necesitamos los ingresos",
    "El pipeline fuera de ICP se sigue, se gobierna y los comerciales no tienen incentivos para perseguirlo",
    "La conformidad con el ICP es una métrica de quota: los comerciales son penalizados explícitamente por perseguir deals fuera de ICP por encima de un umbral definido"
  ]
},
{
  id: 1017, pillar: 1, type: "scale",
  title: "¿En qué medida tu estrategia GTM se apoya en evidencias de mercado validadas en lugar de en hipótesis del liderazgo?",
  options: [
    "La estrategia se construye principalmente sobre la opinión del fundador o de los directivos",
    "Algunas conversaciones con clientes alimentan la estrategia pero no de forma sistemática",
    "Una investigación VOC o de mercado anual alimenta el ciclo de planificación",
    "Análisis win/loss estructurados, entrevistas a clientes y datos de mercado se revisan antes de las actualizaciones estratégicas",
    "La estrategia GTM está anclada en un bucle de evidencia continuo: entrevistas a compradores, datos de deals y señales de mercado revisados trimestralmente"
  ]
},
{
  id: 1018, pillar: 1, type: "scale",
  title: "En los cuatro últimos trimestres, ¿cuántas veces tu mix de ingresos real, por segmento, motion o geografía, ha diferido materialmente de lo que tu estrategia GTM predecía?",
  options: [
    "No seguimos el mix de ingresos real frente a las predicciones estratégicas",
    "Existen diferencias significativas pero no se revisan formalmente",
    "Las diferencias de mix se discuten anualmente en la planificación pero no se siguen trimestre a trimestre",
    "Una revisión trimestral del mix de ingresos real vs predicho produce un análisis documentado de desviaciones",
    "La desviación de mix es una métrica a nivel del board: seguida mensualmente, explicada trimestralmente y que desencadena un ajuste estratégico cuando la desviación supera los umbrales definidos"
  ]
},
{
  id: 1019, pillar: 1, type: "scale",
  title: "En el último trimestre, cuando dos equipos GTM competían por el mismo recurso o prioridad, ¿cómo se resolvió y la resolución estaba ligada a criterios estratégicos documentados?",
  options: [
    "La estrategia rara vez influye en las decisiones diarias: la ejecución la guía la urgencia",
    "La estrategia se referencia ocasionalmente pero no gobierna los arbitrajes de recursos",
    "La mayoría de los líderes referencian la estrategia en la planificación pero no en las decisiones operativas",
    "La estrategia se utiliza para arbitrar conflictos de recursos y decisiones de priorización",
    "La estrategia GTM es el prisma de decisión principal: todas las decisiones importantes de recursos, contratación e inversión se contrastan con ella"
  ]
},
{
  id: 1020, pillar: 1, type: "scale",
  title: "¿Su plan GTM actual aborda explícitamente tanto los objetivos de ejecución a 12 meses como las evoluciones del modelo operativo necesarias para mantener el rendimiento a 24 meses?",
  options: [
    "La estrategia está completamente enfocada en los objetivos de corto plazo: no existe una visión estructurada del modelo operativo a 24 meses",
    "Existe una dirección a largo plazo de forma informal pero no está conectada con las decisiones GTM actuales",
    "Los objetivos a 12 meses están definidos pero las implicaciones del modelo operativo a 24 meses no están explícitamente planificadas",
    "Tanto los objetivos de corto plazo como el modelo operativo a 24 meses están documentados y se revisan en la planificación",
    "Una estrategia de doble horizonte gobierna las decisiones GTM: los objetivos de ejecución a 12 meses y los requisitos de capacidad a 24 meses se mantienen en paralelo, y los arbitrajes entre ellos se deciden explícitamente"
  ]
},

/* ===========================================================
   PILLAR 2: MARKET INTELLIGENCE (20 QUESTIONS)
   =========================================================== */

{
  id: 2001, pillar: 2, type: "scale",
  title: "¿Con qué precisión está definido tu Ideal Customer Profile y cuándo se validó por última vez frente a los datos closed-won?",
  subtitle: "Responde por tu segmento de ingresos principal y tu motion GTM principal, salvo que una pregunta pida explícitamente distinguir.",
  options: [
    "Sin ICP definido: perseguimos a toda empresa que muestre interés",
    "Un ICP aproximado basado en la intuición del fundador, sin validar",
    "Existe un documento ICP pero no se ha validado frente a datos de deals en más de un año",
    "Criterios ICP validados frente a datos de cohortes closed-won en los últimos 12 meses",
    "El ICP es un modelo de scoring vivo: señales firmográficas, tecnográficas y de comportamiento validadas frente a datos de ingresos trimestralmente"
  ]
},
{
  id: 2002, pillar: 2, type: "scale",
  title: "¿Cómo se construye, mantiene y prioriza tu lista de cuentas objetivo para ventas y marketing?",
  options: [
    "Sin lista de cuentas formal: los comerciales se autosourcean según tu criterio personal",
    "Una lista estática construida una vez, no revisada ni actualizada regularmente",
    "Existe una lista pero el scoring y la priorización son incoherentes de un comercial a otro",
    "Una lista de cuentas basada en datos, refrescada trimestralmente con criterios de scoring definidos",
    "Una lista de cuentas dinámica y jerarquizada: actualizada mensualmente, scored por ajuste ICP y señales de compra, con un responsable asignado por cuenta"
  ]
},
{
  id: 2003, pillar: 2, type: "scale",
  title: "¿Cómo recopila, sintetiza y actúa sobre la inteligencia relativa a los puntos de dolor y los disparadores de compra de los clientes?",
  options: [
    "Sin proceso estructurado: los insights proceden de conversaciones informales de los comerciales",
    "Los comentarios de clientes se recogen de forma ad-hoc pero rara vez se sintetizan",
    "Se realizan llamadas o encuestas VOC ocasionalmente pero los resultados no se usan de forma coherente",
    "Un programa VOC estructurado con resultados documentados revisados en la planificación GTM",
    "Un bucle continuo de inteligencia de cliente: entrevistas, señales de deals y datos de soporte sintetizados y revisados mensualmente"
  ]
},
{
  id: 2004, pillar: 2, type: "scale",
  title: "¿Con qué coherencia se aplica tu modelo de segmentación en ventas, marketing y producto?",
  options: [
    "Sin segmentación: todas las cuentas se tratan igual con independencia del tamaño o el ajuste",
    "La segmentación existe conceptualmente pero no se refleja en el routing, el pricing o el messaging",
    "Los segmentos están definidos pero se aplican de forma incoherente: distintos equipos usan definiciones distintas",
    "La segmentación está codificada en el CRM, se usa en el routing y en la segmentación de campañas, revisada anualmente",
    "Una arquitectura de segmentación unificada gobierna el CRM, el pricing, la segmentación de campañas y la planificación de capacidad: revisada trimestralmente y aplicada de forma coherente"
  ]
},
{
  id: 2005, pillar: 2, type: "scale",
  title: "¿Cómo vigila las tendencias del mercado y los movimientos de los competidores, y con qué rapidez llegan los insights a los responsables de decisión?",
  options: [
    "Sin vigilancia: nos enteramos de los movimientos de los competidores cuando los prospects los mencionan",
    "Vigilancia ocasional en LinkedIn o noticias por parte de personas, no compartida sistemáticamente",
    "La vigilancia competitiva y de mercado existe pero no está estructurada ni es regular",
    "Una cadencia de vigilancia definida con resultados compartidos con los responsables GTM mensualmente",
    "Un flujo continuo de inteligencia de mercado: fuentes seguidas, señales triadas y briefings entregados al liderazgo en una cadencia definida"
  ]
},
{
  id: 2006, pillar: 2, type: "scale",
  title: "Nombra los dos frenos principales que impiden a tus compradores objetivo adoptar tu producto. ¿Están basados en entrevistas a compradores documentadas o deducidos de los comentarios comerciales?",
  options: [
    "Sin comprensión documentada: los comerciales suponen que saben lo que importa",
    "Comprensión anecdótica de los comerciales sénior, no codificada",
    "Criterios de decisión capturados de forma informal en las notas del CRM pero no sintetizados",
    "Criterios de decisión documentados por segmento, validados por entrevistas win/loss",
    "Un mapa de criterios de decisión validado: ponderado por segmento y tamaño de deal, actualizado en cada revisión win/loss trimestral"
  ]
},
{
  id: 2007, pillar: 2, type: "scale",
  title: "En tus 10 últimos deals perdidos, ¿con qué frecuencia un persona bloqueador hizo descarrilar la decisión y ese patrón está documentado en un mapa de influencia formal?",
  options: [
    "Sin mapping de personas: los comerciales apuntan a cualquiera que responde a la prospección",
    "Existe un conocimiento informal de los personas clave entre los comerciales sénior, pero no está documentado",
    "Un persona comprador principal está documentado, pero los roles de champion y bloqueador son mal comprendidos",
    "Un mapa multi-personas existe por segmento, validado por deal reviews y entrevistas win/loss",
    "Un mapa de influencia validado documenta los roles de champion, comprador económico y bloqueador por segmento y tamaño de deal: actualizado trimestralmente y utilizado en la cualificación de deals"
  ]
},
{
  id: 2008, pillar: 2, type: "scale",
  title: "¿Puede nombrar los dos frenos principales que impiden a tus compradores objetivo adoptar tu producto y están basados en entrevistas a compradores o deducidos de los deals perdidos?",
  options: [
    "Sin insight: los frenos a la adopción no se estudian",
    "Existen hipótesis basadas en las objeciones comerciales, no validadas externamente",
    "Algunos frenos a la adopción identificados por el análisis de deals perdidos",
    "Frenos a la adopción documentados y validados por entrevistas a compradores y análisis del churn",
    "Un modelo documentado de frenos a la adopción: por segmento, persona y etapa del deal, actualizado con datos de mercado y de deals trimestralmente"
  ]
},
{
  id: 2009, pillar: 2, type: "scale",
  title: "¿Qué empuja a los clientes a cambiar de herramientas competidoras a la suya, o a abandonar la suya, y con qué precisión lo sabe?",
  options: [
    "Sin insight estructurado sobre las dinámicas de switch",
    "Comprensión informal a partir de algunas anécdotas comerciales",
    "Disparadores de switch identificados por llamadas win/loss ocasionales",
    "Disparadores de switch documentados por segmento, validados por entrevistas win/loss estructuradas",
    "Un modelo de inteligencia de disparadores de switch: patrones de desplazamiento de competidores seguidos y revisados en la planificación GTM trimestralmente"
  ]
},
{
  id: 2010, pillar: 2, type: "scale",
  title: "¿Su equipo sigue las tendencias macroeconómicas y sectoriales que dan forma a los presupuestos de los compradores, y eso alimenta directamente tus prioridades GTM?",
  options: [
    "Sin conciencia: las tendencias macro no forman parte de la planificación GTM",
    "Conciencia general pero no conectada con la estrategia de deals o segmentos",
    "El contexto macro se discute en reuniones del liderazgo pero no se operacionaliza",
    "Tendencias macro integradas en la planificación GTM anual con hipótesis de escenarios explícitas",
    "Las señales macro se siguen continuamente y alimentan directamente la priorización de segmentos y los ajustes de messaging"
  ]
},
{
  id: 2011, pillar: 2, type: "scale",
  title: "¿En qué medida está bien definido y es operativamente coherente tu modelo de segmentación de mercado en ventas, marketing y producto?",
  options: [
    "Sin segmentación: todas las cuentas se tratan igual",
    "La segmentación existe conceptualmente pero no se refleja en los procesos o las herramientas",
    "Los segmentos están definidos pero se aplican de forma incoherente entre equipos",
    "La segmentación está codificada en el CRM, se usa en el routing y se revisa anualmente",
    "Una arquitectura de segmentación unificada: coherente a través del CRM, la segmentación de campañas, el pricing y los modelos de capacidad, revisada trimestralmente"
  ]
},
{
  id: 2012, pillar: 2, type: "scale",
  title: "¿En qué medida tu definición de ICP está alineada con los segmentos que generan más ARR, el CAC más bajo y el mejor NRR?",
  options: [
    "Sin conexión: el ICP no está ligado a los datos de rendimiento financiero",
    "Hipótesis aproximadas sobre los segmentos con mejor rendimiento, no validadas",
    "El ICP y los datos de ingresos se comparan anualmente pero no se operacionalizan",
    "El scoring ICP está calibrado frente a los datos de ARR, CAC y NRR revisados en el último trimestre",
    "El ICP es un modelo ponderado por ingresos: actualizado cada trimestre con análisis de cohortes closed-won y métricas de eficiencia"
  ]
},
{
  id: 2013, pillar: 2, type: "scale",
  title: "¿Qué personas aceleran más sistemáticamente la velocidad de los deals en tus cuentas principales y ese patrón está documentado por separado de tu análisis de bloqueadores?",
  options: [
    "Sin mapping de champions o aceleradores: todos los personas se tratan igual en la ejecución de deals",
    "Los comerciales con experiencia saben informalmente a quién involucrar para acelerar los deals, pero no está documentado",
    "Un persona champion principal está documentado, pero la dinámica de aceleración no se analiza por separado de los bloqueadores",
    "Los personas aceleradores y bloqueadores están documentados por segmento y se usan en la cualificación de deals y el coaching",
    "Una arquitectura de influencia completa: perfiles de aceleradores champions y de bloqueadores documentados por segmento y tamaño de deal, validados trimestralmente por el análisis win/loss e integrados en el coaching de los comerciales y los deal reviews"
  ]
},
{
  id: 2014, pillar: 2, type: "scale",
  title: "De forma sistemática, ¿su programa win/loss produce insights que cambian tu forma de vender o de posicionar?",
  options: [
    "Sin programa win/loss: los resultados no se revisan formalmente",
    "Los comerciales registran las razones win/loss en el CRM pero los resultados nunca se analizan",
    "Los datos win/loss se revisan de forma informal, haciendo aflorar ocasionalmente anécdotas",
    "Un programa win/loss estructurado con una síntesis trimestral y acciones GTM documentadas",
    "Los insights win/loss provocan cambios definidos en los playbooks, el messaging y el posicionamiento competitivo cada trimestre"
  ]
},
{
  id: 2015, pillar: 2, type: "scale",
  title: "¿Qué segmentos de clientes generan tu lifetime value más alto y esa constatación guía directamente tus decisiones de priorización y de targeting ICP?",
  options: [
    "Sin datos de LTV: todos los clientes se tratan como de igual valor",
    "Conciencia aproximada basada en el tamaño del ARR, no validada frente a datos de retención o de expansion",
    "Existen estimaciones de LTV pero no están segmentadas ni operacionalizadas en el targeting",
    "La LTV por segmento se calcula anualmente y alimenta la priorización ICP",
    "La LTV es un input de segmentación vivo: actualizado trimestralmente, alimentando el scoring de cuentas, la asignación de capacidad y las decisiones de pricing"
  ]
},
{
  id: 2016, pillar: 2, type: "scale",
  title: "¿En qué medida comprende tu ecosistema de partners y de channel — quién acelera los deals, quién los bloquea y por qué?",
  options: [
    "Sin inteligencia de partners: las dinámicas del ecosistema son desconocidas",
    "Relaciones informales con algunos partners, sin insight sistemático",
    "El pipeline de partners se sigue pero la influencia en los resultados de los deals no se analiza",
    "Un modelo de inteligencia de partners documentado, revisado en los business reviews de partners trimestralmente",
    "Un mapa de ecosistema cuantificado: pipeline sourced vs influenced por los partners, win rates y duraciones de ciclo seguidos y revisados mensualmente"
  ]
},
{
  id: 2017, pillar: 2, type: "scale",
  title: "¿Con qué precisión comprende la sensibilidad al precio y la propensión a pagar en tus segmentos de clientes clave?",
  options: [
    "Sin inteligencia de pricing: el precio se fija por coste más margen o benchmark competitivo",
    "Conciencia anecdótica a partir de deals perdidos por precio",
    "Sensibilidad al precio evaluada mediante entrevistas ocasionales a compradores",
    "Propensión a pagar validada mediante investigación estructurada y análisis de la tasa de cierre por tramo de precio",
    "Un modelo de elasticidad-precio por segmento: validado mediante tests controlados, datos win/loss y entrevistas a compradores, revisado anualmente"
  ]
},
{
  id: 2018, pillar: 2, type: "scale",
  title: "¿Cómo sigue a los competidores emergentes y a los potenciales disruptores del mercado antes de que aparezcan en tus deals?",
  options: [
    "Los competidores emergentes solo afloran cuando los prospects los mencionan en una llamada",
    "Vigilancia ad-hoc por parte de los responsables comerciales sin reporting formal",
    "Se realiza un escaneo competitivo periódico pero no en una cadencia definida",
    "Se realiza una revisión trimestral de competidores emergentes y se comparte con el liderazgo GTM",
    "Un programa de vigilancia continua de amenazas: nuevos entrantes seguidos, briefings distribuidos y playbooks actualizados proactivamente"
  ]
},
{
  id: 2019, pillar: 2, type: "scale",
  title: "¿En qué medida tu roadmap de producto está ligada a evidencias cuantificadas del mercado, y no solo a opiniones internas?",
  options: [
    "La roadmap la guía la capacidad de engineering y las prioridades del liderazgo, no las evidencias del mercado",
    "Los inputs del mercado se recogen de forma informal pero rara vez guían el secuenciado de la roadmap",
    "Las peticiones de clientes se registran y se referencian en la planificación pero no se ponderan sistemáticamente",
    "Las decisiones de roadmap están ligadas a señales de mercado documentadas con una justificación de prioridad explícita",
    "Cada elemento de la roadmap dispone de un dossier de evidencias de mercado documentado: frecuencia en clientes, impacto en deals y señal de retención, revisado en la planificación"
  ]
},
{
  id: 2020, pillar: 2, type: "scale",
  title: "En el último trimestre, ¿qué porcentaje de tus deals cerrados involucró a un partner y sabes si la participación del partner aceleró o complicó cada cierre?",
  options: [
    "La participación de los partners no se sigue: no sabemos qué deals involucraban partners ni cómo afectaron a los resultados",
    "Sabemos aproximadamente qué deals involucraban partners pero no hemos analizado el impacto en la tasa de cierre o la duración del ciclo",
    "Los deals con participación de partners se siguen pero las diferencias de win rate y duración del ciclo no se han analizado formalmente",
    "Existe un seguimiento de los deals con partners y hemos comparado el win rate y la duración del ciclo vs los deals directos: revisado trimestralmente",
    "Un modelo vivo de rendimiento de partners: pipeline sourced vs influenced por partners, delta de win rate e impacto en la duración del ciclo seguidos mensualmente y revisados en reuniones de ingresos"
  ]
},

/* ===========================================================
   PILLAR 3: PRODUCT MARKETING (20 QUESTIONS)
   =========================================================== */

{
  id: 3001, pillar: 3, type: "scale",
  title: "Cuando un prospect pregunta «¿qué hacen y por qué me debería importar?», ¿con qué coherencia tus comerciales y tu sitio web ofrecen la misma respuesta clara?",
  subtitle: "Responde por tu segmento de ingresos principal y tu motion GTM principal, salvo que una pregunta pida explícitamente distinguir.",
  options: [
    "Cada comercial y cada página da una respuesta distinta: sin coherencia",
    "Existe un mensaje principal pero los comerciales se desvían con frecuencia o improvisan",
    "El messaging es coherente en los materiales escritos pero no en las conversaciones en directo",
    "El messaging principal está codificado, formado y utilizado de forma coherente en llamadas y materiales",
    "El messaging se testa sistemáticamente, se actualiza trimestralmente y se somete a certificación antes de que los comerciales lo usen en deals"
  ]
},
{
  id: 3002, pillar: 3, type: "scale",
  title: "En tus 10 últimas llamadas comerciales revisadas, ¿los comerciales entregaron el mismo mensaje de diferenciación principal o la historia variaba según el comercial, el canal y el día?",
  options: [
    "Sin posicionamiento formal: la empresa se describe de forma distinta según a quién se pregunte",
    "Existe un enunciado de posicionamiento pero no se refleja de forma coherente en ventas o marketing",
    "El posicionamiento está documentado y se usa en marketing pero no se aplica en las conversaciones comerciales",
    "El posicionamiento está documentado, formado y reflejado en todos los puntos de contacto importantes",
    "El posicionamiento está validado por la investigación de compradores, integrado en un narrativo de categoría y embebido en cada asset y motion GTM"
  ]
},
{
  id: 3003, pillar: 3, type: "scale",
  title: "¿Cómo sabe que tu propuesta de valor realmente resuena con tus segmentos ICP, y qué evidencias lo respaldan?",
  options: [
    "Suponemos que resuena: no se ha realizado ninguna validación formal",
    "Las anécdotas comerciales sugieren resonancia pero no se ha testado formalmente",
    "Algunas entrevistas a clientes han confirmado la resonancia, pero no en todos los segmentos",
    "Propuesta de valor validada mediante entrevistas estructuradas a compradores y análisis win/loss por segmento",
    "La resonancia se testa continuamente: la mejora de los mensajes se sigue en la conversión de deals, las entrevistas y los A/B tests por segmento"
  ]
},
{
  id: 3004, pillar: 3, type: "scale",
  title: "En tus 10 últimos deals closed-won, ¿qué porcentaje incluía una razón documentada y enunciada por el cliente correspondiente directamente a tu mensaje de diferenciación principal?",
  options: [
    "No capturamos por qué los clientes dicen que nos eligieron",
    "Tenemos algunas notas de victoria pero no están codificadas frente a nuestro mensaje de diferenciación",
    "Alrededor de un cuarto de las victorias hacen referencia a nuestro mensaje principal: el resto cita otras razones",
    "La mitad o más de las victorias hacen referencia a nuestro mensaje de diferenciación principal en las notas de victoria documentadas",
    "Más del 70 % de los deals closed-won incluyen una razón enunciada por el cliente que se corresponde con nuestra diferenciación principal documentada: seguido y revisado trimestralmente"
  ]
},
{
  id: 3005, pillar: 3, type: "scale",
  title: "De forma sistemática, ¿el messaging se adapta a los distintos personas compradores, no solo por seniority, sino por dolor y lenguaje específicos del rol?",
  options: [
    "Un mensaje genérico utilizado para todos los personas",
    "El messaging lo ajustan de forma informal los comerciales con experiencia pero no está codificado",
    "Existen puntos de discusión específicos por persona pero no se usan de forma coherente",
    "Messaging por persona documentado para los roles compradores principales, integrado en los playbooks y las presentaciones",
    "Una arquitectura de messaging por persona: dolor, lenguaje y evidencias específicas del rol, validados por entrevistas e integrados en todos los assets"
  ]
},
{
  id: 3006, pillar: 3, type: "scale",
  title: "¿Con qué coherencia utilizan los comerciales los últimos materiales de messaging aprobados sin modificarlos ni sustituirlos?",
  options: [
    "Los comerciales usan sus propios materiales: las presentaciones estándar rara vez se abren",
    "Los comerciales usan los materiales aprobados ocasionalmente pero los personalizan fuertemente y de forma imprevisible",
    "La mayoría de los comerciales usan los materiales aprobados pero con modificaciones incoherentes",
    "Los materiales aprobados se usan de forma coherente con personalizaciones menores y autorizadas",
    "Una biblioteca de assets controlada: versionada, adopción seguida en el CRM o la plataforma de enablement, desviaciones señaladas en los deal reviews"
  ]
},
{
  id: 3007, pillar: 3, type: "scale",
  title: "¿Cómo sabe qué mensajes, evidencias o enfoques concretos hacen avanzar sistemáticamente los deals?",
  options: [
    "Sin insight: no seguimos qué mensajes hacen avanzar los deals",
    "Comentarios anecdóticos de los comerciales sénior, no validados ni sistematizados",
    "Las notas win/loss contienen referencias a los mensajes pero no se analizan",
    "El rendimiento de los mensajes se revisa en el análisis win/loss y las sesiones de coaching comercial",
    "Un sistema de inteligencia de mensajes: win/loss codificados por tema de mensaje, mejora de la conversión seguida por asset y argumentario"
  ]
},
{
  id: 3008, pillar: 3, type: "scale",
  title: "¿En qué medida tu biblioteca de evidencias, casos de estudio y datos de ROI es completa, utilizable y está actualizada?",
  options: [
    "Sin biblioteca de evidencias formal: los comerciales tiran de memoria o en testimonios genéricos",
    "Existen algunos casos de estudio pero están obsoletos o no son específicos por segmento",
    "Existe una biblioteca de evidencias pero no está organizada por segmento, persona o caso de uso",
    "Una biblioteca de evidencias organizada por segmento y caso de uso, revisada trimestralmente",
    "Una arquitectura estratégica de evidencias: casos de estudio, calculadoras de ROI y validaciones de terceros indexadas por segmento, persona y etapa del deal"
  ]
},
{
  id: 3009, pillar: 3, type: "scale",
  title: "En tu demo actual, ¿qué funcionalidades se muestran en los primeros 10 minutos, y esa secuencia está basada en datos validados sobre lo que genera la conversión a la siguiente etapa?",
  options: [
    "Sin comprensión sistemática: las funcionalidades se demuestran según lo que al comercial le gusta mostrar",
    "Los comerciales con experiencia tienen una conciencia informal de lo que funciona, pero no está documentado ni compartido",
    "La resonancia de las funcionalidades se sigue de forma anecdótica mediante los comentarios de deals pero no se sistematiza",
    "La resonancia de las funcionalidades por segmento y etapa del deal está documentada mediante el análisis win/loss y las demos",
    "Existe un mapa funcionalidades-etapa del deal: validado mediante entrevistas a compradores y datos de progresión, actualizado trimestralmente y utilizado para gobernar la estructura de la demo"
  ]
},
{
  id: 3010, pillar: 3, type: "scale",
  title: "¿Qué porcentaje de tus comerciales ha superado tu última certificación de messaging, y cuándo se actualizó esa certificación para reflejar tu posicionamiento actual?",
  options: [
    "No existe ninguna certificación de messaging",
    "Existe una certificación pero menos de la mitad de los comerciales la han completado",
    "La mayoría de los comerciales han completado la certificación pero no se ha actualizado en más de 12 meses",
    "Más del 80 % de los comerciales certificados en el messaging actual en los últimos seis meses",
    "La certificación es obligatoria: los comerciales no pueden tener quota sin superarla, se retestan en cada actualización mayor del posicionamiento, con tasas de aprobado seguidas por manager"
  ]
},
{
  id: 3011, pillar: 3, type: "scale",
  title: "Tras tus 10 últimas demos, ¿cuántas desembocaron en una próxima etapa documentada y sigue qué elementos de la demo produjeron ese resultado?",
  options: [
    "Las próximas etapas tras las demos son informales: no hay seguimiento de la tasa de conversión ni de lo que la produjo",
    "Algunos comerciales documentan las próximas etapas, pero la correlación demo-resultado no se sigue sistemáticamente",
    "La conversión demo-próxima etapa se sigue como cifra, pero se desconoce qué elementos de la demo produjeron los resultados",
    "La tasa de conversión de las demos se sigue por segmento y se revisa en coaching, con cierta correlación con el contenido y la secuencia de la demo",
    "Un sistema gobernado de rendimiento de demos: tasa de conversión seguida por comercial y segmento, elementos de la demo correlacionados con los resultados, y conclusiones utilizadas para actualizar la estructura de demo estándar trimestralmente"
  ]
},
{
  id: 3012, pillar: 3, type: "scale",
  title: "¿Qué influencia tiene el Product Marketing en la priorización de la roadmap de producto, y cómo se ejerce esa influencia?",
  options: [
    "El PMM no tiene asiento en las discusiones de roadmap",
    "El PMM aporta ocasionalmente input pero rara vez cambia la priorización",
    "El PMM presenta evidencias de mercado en las revisiones de planificación con un impacto incoherente",
    "El PMM posee un proceso estructurado de input de mercado con una influencia documentada sobre las decisiones de roadmap",
    "El PMM es co-propietario formal de la priorización de la roadmap: las evidencias de mercado son un input requerido para cada decisión de funcionalidad mayor"
  ]
},
{
  id: 3013, pillar: 3, type: "scale",
  title: "¿Con qué frecuencia un deal alcanza una etapa avanzada, propuesta o compra, y luego muere sin explicación documentada sobre la que tu equipo haya actuado?",
  options: [
    "La muerte de deals en etapa avanzada es común y las causas nunca se analizan sistemáticamente",
    "Discutimos las pérdidas en etapa avanzada de forma informal pero no seguimos los patrones",
    "Las razones de pérdida en etapa avanzada se registran pero el análisis se realiza, en el mejor de los casos, anualmente",
    "Las pérdidas en etapa avanzada disparan una revisión estructurada en menos de dos semanas con una causa raíz documentada",
    "La tasa de pérdida en etapa avanzada es un KPI: cada pérdida por encima de un umbral de tamaño de deal dispara una revisión documentada, las causas raíz se codifican y los patrones provocan ajustes mensuales de PMM y ventas"
  ]
},
{
  id: 3014, pillar: 3, type: "scale",
  title: "¿En qué medida tus motions de lanzamiento de producto están bien dotadas de recursos y ejecutadas, desde la preparación interna hasta la activación en el mercado?",
  options: [
    "Los lanzamientos ocurren sin un proceso definido: el GTM no está preparado antes del release",
    "Existe cierta coordinación pero la preparación GTM es incoherente",
    "Los lanzamientos siguen un proceso básico pero la activación en campo suele ser incompleta",
    "Un proceso de lanzamiento definido con enablement interno, entrega de assets y puntos de control de activación en mercado",
    "Una motion de lanzamiento totalmente gobernada: scorecard de preparación, certificación de enablement y medición lanzamiento-a-pipeline para cada lanzamiento"
  ]
},
{
  id: 3015, pillar: 3, type: "scale",
  title: "¿Cuál es la tasa de conversión de tu sitio web, de visitante cualificado a reunión reservada o trial, y cómo se compara con el trimestre anterior?",
  options: [
    "No seguimos la conversión visitante-a-reunión en el sitio web",
    "La conversión se sigue pero no sabemos cómo es un buen benchmark",
    "La seguimos pero la conversión es estable o va a la baja sin un plan de mejora documentado",
    "La conversión visitante-a-reunión se sigue mensualmente e impulsa la optimización trimestral del sitio web",
    "La conversión del sitio web es un KPI gestionado: seguido semanalmente, testado en A/B continuamente y revisado frente a los benchmarks de categoría trimestralmente con objetivos de mejora documentados"
  ]
},

{
  id: 3016, pillar: 3, type: "scale",
  title: "De manera sistemática, ¿tu función de PMM sigue, documenta y distribuye la inteligencia competitiva a ventas?",
  options: [
    "Sin función de PMM competitivo: las respuestas competitivas se improvisan en los deals",
    "Existen battlecards pero están obsoletas y no se usan de forma coherente",
    "Los materiales competitivos se actualizan ocasionalmente cuando cambia algo significativo",
    "Un programa de PMM competitivo con actualizaciones trimestrales de las battlecards y formación de los comerciales",
    "Un sistema de inteligencia competitiva vivo: con propietario, actualizado mensualmente, integrado en el onboarding y en las deal reviews, con seguimiento de adopción por parte de los comerciales"
  ]
},
{
  id: 3017, pillar: 3, type: "scale",
  title: "Cuando se pierde un deal en la etapa final, tras la presentación de una propuesta, ¿con qué frecuencia la razón invocada es algo que tu equipo de PMM podría haber abordado?",
  options: [
    "No analizamos las pérdidas en etapa final a nivel de messaging o de posicionamiento",
    "Discutimos ocasionalmente las razones de pérdida en etapa avanzada de manera informal",
    "Revisamos las pérdidas en etapa avanzada trimestralmente, pero el PMM no forma parte de la revisión",
    "El PMM participa en las revisiones de pérdidas en etapa avanzada y se hace cargo de una acción documentada cuando el messaging ha contribuido",
    "El PMM lleva a cabo una auditoría trimestral de las pérdidas en etapa final: cada pérdida codificada por tipo de fallo del mensaje, carencia de prueba o debilidad de posicionamiento competitivo, con una remediación documentada"
  ]
},
{
  id: 3018, pillar: 3, type: "scale",
  title: "¿Hasta qué punto tus materiales de demo y de presentación son convincentes y se utilizan de forma coherente en las interacciones en directo con los compradores?",
  options: [
    "Sin demo estándar: cada comercial construye la suya",
    "Existe una demo estándar, pero los comerciales se desvían significativamente en la práctica",
    "Existe una demo de referencia y se utiliza como punto de partida, pero la coherencia es baja",
    "Un marco de demo estandarizado con variantes específicas por rol, formado y certificado antes de que los comerciales estén en contacto con los prospects",
    "Un sistema operativo de demo: estructura estándar, variantes por segmento, uso monitorizado y actualizado a partir de los datos win/loss cada trimestre"
  ]
},
{
  id: 3019, pillar: 3, type: "scale",
  title: "¿Hasta qué punto el Product Marketing contribuye de manera medible al pipeline, al win rate y a la velocidad de los deals?",
  options: [
    "El impacto del PMM en los ingresos no se mide",
    "La contribución del PMM se discute cualitativamente pero no se vincula a las métricas de los deals",
    "Existen algunos datos de uso de assets y de atribución de campañas, pero no se revisan de manera sistemática",
    "El PMM reporta sobre la influencia en el pipeline, el win rate por asset y el rendimiento de los mensajes trimestralmente",
    "El PMM es propietario de un cuadro de mando de impacto en ingresos: win rate por segmento, uso de los assets, mejora de los mensajes y correlación lanzamiento-a-pipeline monitorizados mensualmente"
  ]
},
{
  id: 3020, pillar: 3, type: "scale",
  title: "Mapea tu contenido sobre el buyer journey: ¿qué etapa tiene la cobertura más baja actualmente, y tiene un plan documentado para cerrar esa brecha?",
  options: [
    "El messaging existe únicamente para la etapa de venta: el contenido de awareness y postventa está ausente",
    "Hay contenido que cubre varias etapas, pero está fragmentado y no conectado a un buyer journey",
    "Las etapas principales están cubiertas, pero existen lagunas en el contenido de prueba en etapa avanzada y en la comunicación de valor postventa",
    "Un mapa de contenido documentado cubre todas las etapas principales del comprador, desde el awareness hasta la renovación, para los segmentos principales",
    "Una arquitectura completa de contenido del buyer journey: cada etapa mapeada por segmento y persona, frescura monitorizada, lagunas priorizadas en la planificación trimestral del PMM y rendimiento medido por conversión de etapa"
  ]
},

/* ===========================================================
   PILAR 4: DEMAND GENERATION (20 QUESTIONS)
   =========================================================== */

{
  id: 4001, pillar: 4, type: "scale",
  title: "¿Hasta qué punto tu estrategia de demand generation está explícitamente definida, canales, targets, presupuestos y métricas de éxito, y cuándo se revisó por última vez?",
  subtitle: "Responde para tu segmento de ingresos principal y tu motion GTM principal, salvo que una pregunta pida explícitamente distinguir.",
  options: [
    "Sin estrategia documentada: las actividades de DG se eligen por disponibilidad o costumbre",
    "Existe un plan de canales aproximado pero carece de asignación presupuestaria u objetivos de rendimiento",
    "Existe un documento de estrategia pero no se ha revisado formalmente desde hace más de seis meses",
    "Una estrategia de DG documentada revisada trimestralmente con objetivos de rendimiento por canal",
    "Una estrategia de DG totalmente operativa: mix de canales, presupuesto, objetivos de pipeline y cadencia de revisión, todo documentado y gobernando la ejecución"
  ]
},
{
  id: 4002, pillar: 4, type: "scale",
  title: "¿Qué parte de tu pipeline cualificado proviene de canales inbound, y con qué constancia se mantiene esto trimestre tras trimestre?",
  options: [
    "El inbound no contribuye con pipeline significativo: es un canal aspiracional",
    "El inbound genera algunos leads pero la calidad es baja y el volumen impredecible",
    "El inbound genera leads cualificados pero el volumen fluctúa significativamente por trimestre",
    "El inbound entrega pipeline cualificado constante frente a los objetivos definidos cada trimestre",
    "El inbound es un motor de pipeline fiable y medido: contribución monitorizada por canal, segmento y etapa de conversión mensualmente"
  ]
},
{
  id: 4003, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "¿Hasta qué punto tu motion outbound es predecible y reproducible para generar pipeline cualificado, y cómo se mide?",
  options: [
    "Sin outbound estructurado: los comerciales prospectan independientemente sin un enfoque compartido",
    "El outbound existe pero los resultados son muy variables y no se miden sistemáticamente",
    "El outbound genera pipeline pero la secuenciación, el messaging y la cadencia son incoherentes",
    "Una motion outbound estandarizada con secuencias definidas, cuentas objetivo y objetivos de pipeline revisados semanalmente",
    "Un motor outbound totalmente instrumentado: actividad, respuesta y métricas de pipeline monitorizadas diariamente, con A/B tests sobre las secuencias trimestralmente"
  ]
},
{
  id: 4004, pillar: 4, type: "scale",
  title: "Nombre tus tres principales fuentes de pipeline clasificadas por coste por oportunidad cualificada actualmente. ¿Esta clasificación se basa en datos monitorizados o se estima de memoria?",
  options: [
    "El paid media no se utiliza o el gasto solo se monitoriza a nivel de costes",
    "El paid media funciona pero el ROI y la contribución al pipeline no se miden",
    "Existe cierta atribución de pipeline, pero el seguimiento del coste por oportunidad es incoherente",
    "Coste por oportunidad monitorizado por canal con revisiones de eficiencia trimestrales",
    "El paid media se gestiona como una inversión en pipeline: CPO, contribución al CAC y retorno monitorizados mensualmente por canal"
  ]
},
{
  id: 4005, pillar: 4, type: "scale",
  title: "¿Cómo mides el rendimiento de conversión del sitio web, y cuál es tu tasa de conversión de visitante a lead cualificado?",
  options: [
    "La conversión del sitio web no se monitoriza: sin visibilidad sobre el funnel",
    "El tráfico y los envíos de formularios se monitorizan pero la calidad de conversión no se mide",
    "La conversión del top of funnel se monitoriza, pero los abandonos en el middle of funnel no se analizan",
    "Las tasas de conversión se monitorizan por página y fuente, se revisan mensualmente con acciones de mejora documentadas",
    "Un programa de optimización de la conversión: funnel mapeado de extremo a extremo, A/B tests en curso y tasa de conversión revisada frente a benchmarks trimestralmente"
  ]
},
{
  id: 4006, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 10 },
  title: "De manera sistemática, ¿cómo ejecutas el Account-Based Marketing sobre tus cuentas más prioritarias, y cómo se mide el impacto?",
  options: [
    "Sin motion ABM: todas las cuentas reciben el mismo enfoque",
    "El ABM se discute pero no existe selección dedicada de cuentas, presupuesto ni medición",
    "Existe una motion ABM piloto para un subconjunto de cuentas, pero sin métricas de éxito definidas",
    "Un programa ABM documentado con tiers de cuentas, activación por canal y revisiones trimestrales de impacto sobre el pipeline",
    "Un motor ABM totalmente instrumentado: cobertura, engagement y contribución al pipeline monitorizados por tier de cuentas mensualmente"
  ]
},
{
  id: 4007, pillar: 4, type: "scale",
  title: "¿Hasta qué punto tu motion de lead nurturing para los prospects que aún no están listos para comprar está estructurada y con el rendimiento monitorizado?",
  options: [
    "Sin nurturing: los prospects que no están listos para comprar de inmediato se abandonan",
    "Existe una secuencia de emails pero es genérica, no segmentada y no revisada",
    "Existen recorridos de nurturing por segmento, pero las tasas de engagement y conversión no se monitorizan",
    "Los programas de nurturing están segmentados, automatizados y revisados por su impacto de conversión trimestralmente",
    "Un motor de nurturing totalmente instrumentado: segmentado por persona y etapa, conversión monitorizada y actualizado a partir de datos de rendimiento"
  ]
},
{
  id: 4008, pillar: 4, type: "scale",
  title: "¿Con qué constancia el contenido genera demanda cualificada, y cómo mides la contribución del contenido al pipeline?",
  options: [
    "Se produce contenido pero su contribución al pipeline no se mide",
    "El contenido genera tráfico pero la atribución al pipeline no se monitoriza",
    "Algunos contenidos se atribuyen al pipeline pero la medición es incoherente",
    "La contribución del contenido al pipeline se monitoriza trimestralmente por tipo de asset y tema",
    "Un modelo de demanda por contenido: cada asset monitorizado por tráfico, conversión MQL e influencia sobre el pipeline, revisado mensualmente"
  ]
},
{
  id: 4009, pillar: 4, type: "scale",
  title: "¿Puede atribuir el pipeline y los ingresos a canales, campañas y gastos específicos de DG, y con qué frecuencia estos datos conducen a una reasignación presupuestaria?",
  options: [
    "Sin atribución: cualquier fuente de pipeline es desconocida o marcada como «direct»",
    "Existe atribución al primer punto de contacto, pero el multi-touch y el ROI de los gastos no se monitorizan",
    "El pipeline se atribuye a nivel de canal pero el ROI a nivel de campañas no se monitoriza de forma coherente",
    "Atribución multi-touch en marcha, revisada mensualmente por canal y campaña",
    "Un modelo de atribución completo: canal, campaña y gasto monitorizados hasta los ingresos closed-won con un reporting de ROI trimestral"
  ]
},
{
  id: 4010, pillar: 4, type: "scale",
  title: "¿Marketing es responsable de una quota de ingresos o de pipeline, y cómo se fija y se revisa ese objetivo?",
  options: [
    "Marketing no tiene quota de ingresos ni de pipeline: el éxito se mide en leads o impresiones",
    "Existe una expectativa informal de pipeline pero no se monitoriza ni gobierna formalmente",
    "Marketing tiene un objetivo de pipeline pero es secundario y rara vez guía las decisiones de presupuesto o de headcount",
    "Marketing tiene una quota de pipeline formal revisada mensualmente con el CRO o el VP Sales",
    "Marketing co-posee un objetivo de ingresos: contribución al pipeline, win rate de los deals sourced por marketing y CPO revisados en reuniones de ingresos semanales"
  ]
},
{
  id: 4011, pillar: 4, type: "scale",
  title: "¿Tus SLA de seguimiento de leads entre marketing y ventas están definidos, monitorizados y aplicados, y qué ocurre cuando un comercial pierde la ventana?",
  options: [
    "Sin SLA: el seguimiento de los leads depende del comportamiento individual del comercial",
    "Existe una expectativa informal pero no se monitoriza ni se aplica",
    "Los SLA están documentados pero el cumplimiento no se supervisa",
    "Los SLA están definidos, monitorizados en el CRM y revisados semanalmente con el liderazgo comercial",
    "Los SLA son contractuales entre marketing y ventas: cumplimiento monitorizado diariamente, incumplimientos escalados y tiempo de respuesta revisado en reuniones de pipeline semanales"
  ]
},
{
  id: 4012, pillar: 4, type: "scale",
  title: "¿Con qué precisión tu demand generation está personalizada por segmento, persona y etapa de compra, más allá de la segmentación básica de listas?",
  options: [
    "Una única campaña enviada a todos los prospects: sin segmentación aplicada",
    "Segmentación básica por tamaño de empresa o sector, pero el messaging es genérico",
    "Existen campañas a nivel de segmento pero el targeting por persona y etapa es incoherente",
    "Las campañas están segmentadas por tier ICP, persona y etapa del funnel con un messaging personalizado",
    "Personalización dinámica multivariable: idoneidad ICP, señales de intención, persona y etapa conducen automáticamente el contenido, el timing y la selección de canales"
  ]
},
{
  id: 4013, pillar: 4, type: "scale",
  title: "De manera sistemática, ¿cómo se optimizan tus campañas de demand generation con datos, y cuál es la cadencia de esa revisión?",
  options: [
    "Las campañas se llevan a cabo durante un periodo fijo sin revisión de rendimiento ni ajustes",
    "El rendimiento se revisa ocasionalmente pero los cambios se hacen por intuición",
    "Hay revisiones de rendimiento mensuales pero las decisiones de optimización son incoherentes",
    "Una revisión de rendimiento de DG semanal conduce a ajustes de campañas documentados",
    "Un bucle de optimización continuo: rendimiento de canales, CPO y conversión monitorizados semanalmente, con A/B tests y una reasignación presupuestaria en una cadencia definida"
  ]
},
{
  id: 4014, pillar: 4, type: "scale",
  show_if: { field: 'gtm_motion', not_contains: ['product-led'] },
  title: "Para tus tres últimos eventos o webinars: ¿qué pipeline se generó y cuál fue el coste por oportunidad cualificada por evento?",
  options: [
    "Los eventos se llevan a cabo sin seguimiento del pipeline ni de los costes: la asistencia es la única métrica",
    "Se atribuye pipeline a los eventos a posteriori, pero el coste por oportunidad no se calcula",
    "El pipeline generado se monitoriza por evento, pero los datos de coste son incompletos o no están vinculados a las oportunidades cualificadas",
    "El pipeline generado y el coste por oportunidad cualificada se monitorizan por evento y se revisan tras cada uno",
    "Un modelo de ROI de eventos gobernado: pipeline generado, coste por opp y ARR influenciado monitorizados por evento, los resultados alimentan directamente las decisiones de inversión para los próximos eventos"
  ]
},
{
  id: 4015, pillar: 4, type: "scale",
  title: "De manera sistemática, ¿cómo diseña, ejecuta y documenta tu equipo los experimentos de DG, y con qué rapidez los resultados orientan las decisiones?",
  options: [
    "Sin experimentos: DG ejecuta el mismo playbook repetidamente",
    "Se hacen cambios ocasionales pero sin hipótesis definidas ni criterios de éxito",
    "Se llevan a cabo algunos tests, pero la documentación y los procesos de decisión son informales",
    "Un calendario de experimentos trimestral con hipótesis definidas, periodos de medición y criterios go/no-go",
    "Una cultura de test continuo: experimentos semanales monitorizados en un diario compartido, resultados revisados mensualmente y enfoques ganadores desplegados de forma sistemática"
  ]
},
{
  id: 4016, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "¿Hasta qué punto está estructurado el bucle de feedback entre SDR y Marketing sobre la calidad de los leads, y con qué frecuencia este feedback conduce a cambios?",
  options: [
    "Sin bucle de feedback formal: los SDR y Marketing operan independientemente",
    "Los SDR se quejan informalmente de la calidad de los leads, pero eso no cambia las campañas",
    "Hay sesiones de feedback ocasionales pero sin formato estructurado ni seguimiento de acciones",
    "Un proceso de feedback estructurado semanal entre el equipo SDR y Marketing con acciones documentadas",
    "Un sistema de feedback en bucle cerrado: scores de calidad de leads SDR-a-marketing revisados semanalmente, que impulsan los refinamientos de campañas y de ICP en una cadencia definida"
  ]
},
{
  id: 4017, pillar: 4, type: "scale",
  show_if: { field: 'gtm_motion', not_contains: ['product-led', 'partner-led'] },
  title: "¿Tienes una estrategia de eventos y webinars definida con objetivos de pipeline por evento, y puedes mostrar el ROI de pipeline de tus tres últimos eventos?",
  options: [
    "Los eventos se eligen de manera oportunista sin estrategia definida ni medición",
    "Los eventos se planifican pero la asistencia es la principal métrica de éxito",
    "Existe un calendario de eventos básico con seguimiento del pipeline postevento para los eventos principales",
    "Una estrategia de eventos con objetivos de pipeline definidos, activación pre/postevento y ROI revisado trimestralmente",
    "Un motor de eventos totalmente instrumentado: pipeline sourced e influenciado monitorizado por evento, con playbooks pre/post y benchmarks de ROI revisados trimestralmente"
  ]
},
{
  id: 4018, pillar: 4, type: "scale",
  title: "¿Hasta qué punto la Demand Generation está formalmente incluida en la planificación de ingresos, y Marketing co-posee la cifra de pipeline?",
  options: [
    "Marketing no está incluido en las discusiones de planificación de ingresos",
    "Marketing está informado de los objetivos de ingresos pero no contribuye al modelado del pipeline",
    "Marketing aporta input a la planificación pero no co-posee los objetivos de pipeline",
    "Marketing co-posee un objetivo de pipeline, incluido en el proceso de planificación de ingresos",
    "Marketing es copropietario del plan de ingresos: modelo de pipeline, asignación presupuestaria e hipótesis de ramp-up revisados conjuntamente con Sales y Finance"
  ]
},
{
  id: 4019, pillar: 4, type: "scale",
  title: "¿Puede hacer crecer el pipeline sin aumentar proporcionalmente el presupuesto de DG, y tiene datos de los últimos 12 meses para demostrarlo?",
  options: [
    "Hacer crecer el pipeline requiere aumentos proporcionales de presupuesto y headcount",
    "Existen algunas economías de escala pero la eficiencia se degrada a medida que el volumen aumenta",
    "DG escala moderadamente: se logran ganancias de eficiencia incrementales con iniciativas documentadas",
    "DG escala con aumentos de presupuesto sublineales: mejoras de eficiencia monitorizadas cada trimestre",
    "Un motor de DG con efecto acumulativo: los canales orgánicos, earned y paid se refuerzan mutuamente, y la eficiencia mejora a medida que crece la escala"
  ]
},
{
  id: 4020, pillar: 4, type: "scale",
  title: "¿Cómo evoluciona tu Customer Acquisition Cost a medida que escalas, y cómo mides y gestionas esa tendencia?",
  options: [
    "El CAC no se monitoriza: el coste de adquisición es desconocido",
    "El CAC se monitoriza anualmente pero no se gestiona como palanca de rendimiento",
    "El CAC se monitoriza trimestralmente pero aumenta sin un plan de mejora documentado",
    "El CAC se monitoriza mensualmente y se revisa con iniciativas de eficiencia documentadas",
    "Las tendencias del CAC se modelan por canal y motion, se revisan mensualmente, con una trayectoria objetivo documentada y un disparador de reasignación"
  ]
},

/* ===========================================================
   PILAR 5: SALES EXECUTION (20 QUESTIONS)
   =========================================================== */

{
  id: 5001, pillar: 5, type: "scale",
  title: "¿Tu proceso de venta está documentado, aplicado en las puertas de etapa y monitorizado sistemáticamente, o cada comercial ejecuta de hecho su propia versión?",
  subtitle: "Responde para tu segmento de ingresos principal y tu motion GTM principal, salvo que una pregunta pida explícitamente distinguir.",
  options: [
    "Sin proceso documentado: cada comercial gestiona los deals independientemente",
    "Existe un proceso informal en la mente de los comerciales sénior pero no está escrito ni enseñado",
    "Existe un proceso documentado pero la adopción en el equipo es incoherente",
    "Un proceso documentado paso a paso con criterios de salida, formado y reflejado en el CRM",
    "Un proceso de venta gobernado: etapas, criterios de salida y campos CRM requeridos aplicados, con desviación señalizada en las revisiones de pipeline"
  ]
},
{
  id: 5002, pillar: 5, type: "scale",
  title: "¿Con qué rigor se cualifican los deals antes de entrar en el pipeline, y qué ocurre con los deals no cualificados?",
  options: [
    "Sin cualificación formal: todo lo que expresa interés entra en el pipeline",
    "La cualificación es informal e incoherente entre los comerciales",
    "Existe un marco de cualificación pero se aplica de manera incoherente",
    "Un marco de cualificación definido aplicado de manera coherente, con los deals no cualificados retirados activamente del pipeline",
    "Una cultura de cualificación de tolerancia cero: los deals sin criterios de cualificación documentados no se crean en el CRM, revisados en reuniones de pipeline"
  ]
},
{
  id: 5003, pillar: 5, type: "scale",
  title: "¿Hasta qué punto tu gestión del pipeline es visible y disciplinada, y con qué coherencia progresan los deals a través de las etapas definidas?",
  options: [
    "El pipeline es una lista de deseos: la progresión de etapas no se gobierna",
    "El pipeline se revisa informalmente y la higiene de etapas se deja a los comerciales individuales",
    "Se llevan a cabo revisiones de pipeline, pero los deals estancados e hinchados no se gestionan activamente",
    "Revisiones de pipeline semanales con acciones documentadas sobre los deals estancados y las etapas hinchadas",
    "Una disciplina de pipeline gobernada: disparadores de antigüedad de etapa, criterios de salida requeridos y calidad del pipeline puntuada semanalmente con acción forzada sobre los deals retrasados"
  ]
},
{
  id: 5004, pillar: 5, type: "scale",
  title: "¿Qué porcentaje de los deals comprometidos a principios de mes se cierran efectivamente al final del mes, y hasta qué punto este ratio es estable?",
  options: [
    "Menos del 50 %: la precisión de los compromisos no se monitoriza ni se gestiona",
    "50-70 %: los compromisos se incumplen con frecuencia y no se revisan sistemáticamente",
    "70-85 %: los compromisos se cierran a una tasa moderada con cierta disciplina de forecast",
    "85-95 %: los compromisos se cumplen constantemente con un proceso formal de revisión de los compromisos",
    "Más del 95 %: la precisión de los compromisos es una métrica gobernada, revisada semanalmente, con un camino de escalado documentado para los incumplimientos"
  ]
},
{
  id: 5005, pillar: 5, type: "scale",
  title: "¿Con qué constancia todos los comerciales pueden articular las capacidades del producto, tus límites y tu diferenciación competitiva sin apoyarse en el soporte técnico?",
  options: [
    "El conocimiento del producto varía considerablemente: la mayoría de los comerciales no pueden hacer una demo sin asistencia",
    "Algunos comerciales experimentados tienen un conocimiento profundo del producto; los demás no son fiables",
    "La mayoría de los comerciales tienen un conocimiento del producto adecuado, pero aparecen lagunas en los deals complejos",
    "El conocimiento del producto está certificado antes de que los comerciales estén operativos, con recordatorios en cada release mayor",
    "Un programa de dominio del producto continuo: condicionado por la certificación, monitorizado por comercial y actualizado con cada release del producto"
  ]
},
{
  id: 5006, pillar: 5, type: "scale",
  title: "¿Tu proceso de venta está aplicado en las puertas de etapa en el CRM, y qué porcentaje de los deals en tu pipeline del último trimestre tenía todos los campos requeridos completados en cada etapa?",
  options: [
    "Las puertas de etapa CRM no se aplican: los campos requeridos suelen estar vacíos y los deals progresan de todos modos",
    "Existen algunos campos requeridos, pero los comerciales generalmente pueden hacer avanzar los deals sin completarlos",
    "Existen requisitos de puertas de etapa y son revisados por los managers, pero la aplicación es incoherente entre los equipos",
    "Los campos requeridos se aplican en las etapas clave y el cumplimiento se revisa regularmente durante las inspecciones de pipeline",
    "Un sistema de puertas de etapa gobernado: campos requeridos aplicados en el CRM en cada etapa, cumplimiento monitorizado semanalmente y excepciones documentadas con responsabilidad del manager"
  ]
},
{
  id: 5007, pillar: 5, type: "scale",
  title: "En tus últimos 20 deals, ¿qué porcentaje tenía todos los campos de metodología de cualificación completados, y el CRM lo impone antes de que un deal progrese a la siguiente etapa?",
  options: [
    "No se utiliza ninguna metodología de cualificación: los comerciales cualifican a ojo, sin marco compartido",
    "Existe una metodología, pero menos del 40 % de los deals tienen los campos de cualificación completos en el CRM",
    "El 40-70 % de los deals tienen los campos de cualificación completos, pero la aplicación es incoherente entre los managers",
    "Más del 70 % de los deals tienen los campos de cualificación completos: las puertas de etapa CRM aplican la metodología para los deals por encima de un tamaño definido",
    "La metodología de cualificación se aplica al 90 %+ sobre todos los deals por encima del umbral: puertas CRM activas, cumplimiento monitorizado semanalmente y desviación señalizada en las deal reviews"
  ]
},
{
  id: 5008, pillar: 5, type: "scale",
  title: "De manera sistemática, ¿cómo capturas y utilizas la inteligencia win/loss para mejorar la forma en que tus comerciales venden?",
  options: [
    "Las razones win/loss no se documentan: los resultados se celebran o se olvidan",
    "Los comerciales registran una razón en el CRM, pero rara vez se analiza o se discute",
    "Los datos win/loss se revisan informalmente en reuniones de equipo sin resultados estructurados",
    "Un proceso de revisión win/loss produce temas documentados compartidos con ventas y PMM trimestralmente",
    "La inteligencia win/loss conduce a actualizaciones directas de los playbooks, del messaging y del contenido de coaching cada trimestre"
  ]
},
{
  id: 5009, pillar: 5, type: "scale",
  title: "¿Hasta qué punto tus comerciales están preparados para gestionar las objeciones más comunes, y cómo saben que el tratamiento funciona?",
  options: [
    "Sin marco de tratamiento de objeciones: los comerciales improvisan las respuestas",
    "Las objeciones comunes se cubren en el onboarding pero no se practican ni se actualizan",
    "Existe una guía de tratamiento de objeciones pero la adopción y la eficacia no se miden",
    "Las respuestas a las objeciones se forman, se practican en role-play y se revisan en sesiones de coaching",
    "Una biblioteca de objeciones viva: respuestas testadas en llamadas, actualizadas a partir de los datos win/loss y eficacia monitorizada frente a las tasas de conversión"
  ]
},
{
  id: 5010, pillar: 5, type: "scale",
  title: "En los últimos 90 días, ¿cuántas demos de comerciales se han revisado frente a una rúbrica de calidad definida, y cuál fue la puntuación media?",
  options: [
    "No se revisa ninguna demo frente a una rúbrica: la calidad no se gestiona",
    "Algunas demos se revisan informalmente, pero no hay rúbrica coherente ni método de puntuación",
    "Algunas demos se puntúan frente a una rúbrica, pero la cobertura es parcial e incoherente entre los managers",
    "La calidad de las demos se revisa regularmente con una rúbrica definida y el feedback se documenta por comercial",
    "Un sistema gobernado de calidad de demos: revisiones de demos puntuadas frente a una rúbrica estándar, puntuaciones medias monitorizadas por comercial y manager, y las puntuaciones bajas disparan un coaching dirigido en el mismo mes"
  ]
},
{
  id: 5011, pillar: 5, type: "scale",
  title: "¿Tu plan de compensación comercial recompensa los comportamientos que construyen ingresos a largo plazo, o incentiva los cierres a corto plazo en detrimento de la calidad de los deals y de la retención?",
  options: [
    "La compensación se basa puramente en el volumen: los comportamientos como el multithreading o la cualificación ICP no se recompensan",
    "Existen algunos elementos cualitativos pero la compensación se basa principalmente en la quota sin salvaguardas comportamentales",
    "La compensación incluye algunos componentes de retención o NRR, pero los descuentos y la calidad de los deals no se penalizan",
    "El diseño de la compensación incluye salvaguardas de calidad de los deals: límites de descuento, requisitos ICP y componentes NRR",
    "Un modelo de compensación multifactorial: nuevo ARR, NRR, disciplina de descuento y cumplimiento ICP, todo ponderado, revisado anualmente con Finance y RR. HH."
  ]
},
{
  id: 5012, pillar: 5, type: "scale",
  title: "¿Tu plan de compensación actual incluye un mecanismo que penaliza los descuentos importantes, los cierres fuera de ICP o los deals single-threaded, y ha modificado eso el comportamiento de los comerciales de manera medible?",
  options: [
    "La compensación recompensa únicamente los ingresos cerrados: los descuentos, la calidad ICP y la higiene de los deals no tienen consecuencias",
    "Existen algunas salvaguardas comportamentales de manera informal, pero no están integradas en la compensación y el comportamiento no ha cambiado de forma medible",
    "La compensación incluye una o dos salvaguardas de calidad, pero se aplican débilmente y el impacto es confuso",
    "La compensación incluye penalizaciones o modificadores explícitos por descuentos, incumplimientos ICP o mala calidad de los deals, y el comportamiento se revisa trimestralmente",
    "Un modelo de compensación multifactorial: la disciplina de descuento, el cumplimiento ICP y la calidad de los deals afectan directamente a la compensación, el comportamiento se monitoriza mensualmente y se ha observado una mejora medible"
  ]
},
{
  id: 5013, pillar: 5, type: "scale",
  title: "Nombra la palanca más impactante sobre tu win rate actualmente, e identifica la fuente de datos que confirma que es esa palanca y no otra.",
  options: [
    "No podemos nombrar una palanca específica: el win rate se discute de manera agregada sin prueba de causa raíz",
    "El liderazgo tiene una visión de la palanca, pero es principalmente anecdótica y no está vinculada a una fuente de datos fiable",
    "Se ha identificado una o dos palancas probables, pero las pruebas son parciales o incoherentes entre los segmentos",
    "Se ha identificado una palanca principal de win rate y está respaldada por datos segmentados de conversión, win/loss o de etapa",
    "La causalidad del win rate se modela activamente: la palanca principal está respaldada por datos segmentados, revisada regularmente y vinculada a intervenciones dirigidas con impacto medido"
  ]
},
{
  id: 5014, pillar: 5, type: "scale",
  title: "En tu última revisión de pipeline, para los deals que se estancaron o se perdieron: ¿cuántos habían consultado tus materiales de enablement en los 30 días anteriores, y se monitoriza eso?",
  options: [
    "Los materiales de enablement existen pero no se utilizan en los deals activos",
    "Los comerciales conocen los materiales pero el acceso es incoherente y el uso no se monitoriza",
    "Los materiales están disponibles en un drive compartido pero la adopción en los deals no se mide",
    "Los materiales de enablement están organizados por etapa de deal, monitorizados por uso y revisados por eficacia trimestralmente",
    "Un sistema de enablement por etapa de deal: materiales indexados por etapa, persona y objeción, con correlación uso-resultado de deal monitorizada mensualmente"
  ]
},
{
  id: 5015, pillar: 5, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "¿Con qué rigor se aplica la higiene de datos CRM, y cuáles son las consecuencias de las fichas de deals incompletas?",
  options: [
    "Los datos CRM son voluntarios: la mayoría de las fichas de deals están incompletas o son inexactas",
    "La higiene de datos se espera pero no se aplica: sin consecuencias por los campos que faltan",
    "Los managers verifican la calidad CRM informalmente en los 1:1 sin aplicación sistemática",
    "Los campos CRM requeridos se aplican en las puertas de etapa con revisión del manager",
    "Una política de higiene CRM de tolerancia cero: las fichas incompletas bloquean la progresión de etapa, las comisiones exigen la completitud de los datos, revisada semanalmente"
  ]
},
{
  id: 5016, pillar: 5, type: "scale",
  title: "¿Con qué nivel de granularidad se monitoriza el rendimiento individual de los comerciales, y con qué rapidez se identifican los patrones de bajo rendimiento?",
  options: [
    "El rendimiento de los comerciales se revisa trimestralmente solo a nivel de consecución de la quota",
    "Existe un seguimiento mensual de la quota pero los indicadores adelantados no se supervisan",
    "Las métricas de actividad, pipeline y conversión se monitorizan pero se revisan de manera incoherente",
    "Cuadros de mando semanales de rendimiento de los comerciales que cubren actividad, pipeline y conversión, revisados en los 1:1",
    "Un sistema de inteligencia de rendimiento de los comerciales en tiempo real: indicadores adelantados y rezagados monitorizados diariamente, con alertas automatizadas para los patrones de desviación"
  ]
},
{
  id: 5017, pillar: 5, type: "scale",
  title: "¿Monitoriza los cuatro componentes de la velocidad comercial, número de deals, win rate, tamaño de los deals y duración del ciclo, por segmento, y actúa sobre los datos mensualmente?",
  options: [
    "La velocidad comercial no se monitoriza: nos centramos únicamente en los ingresos totales",
    "Se monitorizan uno o dos componentes de velocidad pero no se revisan juntos",
    "Existe una vista básica de velocidad pero no se revisa regularmente ni se segmenta",
    "Los cuatro componentes de velocidad se monitorizan por segmento, se revisan mensualmente con acciones de mejora documentadas",
    "Un cuadro de mando de velocidad comercial revisado semanalmente: componentes monitorizados por segmento, comercial y motion, con iniciativas de mejora por palanca"
  ]
},
{
  id: 5018, pillar: 5, type: "scale",
  show_if: { field: 'product_complexity', contains_any: ['complex / configurable', 'highly complex'] },
  title: "En los últimos 90 días, ¿qué porcentaje de tus comerciales ha tratado una pregunta técnica de producto en un deal en curso sin escalar a Product o a Engineering?",
  options: [
    "Muy pocos o ninguno: la mayoría de las preguntas técnicas disparan un escalado",
    "Una minoría de comerciales puede tratar las preguntas técnicas estándar, pero la mayoría necesita soporte",
    "La mayoría de los comerciales puede tratar las preguntas técnicas comunes, pero los escenarios complejos aún se escalan frecuentemente",
    "Una amplia mayoría de comerciales puede tratar las preguntas técnicas estándar de manera autónoma, con escalados limitados a los casos límite definidos",
    "El dominio técnico es una competencia gestionada: tasa de tratamiento por parte de los comerciales monitorizada, razones de escalado revisadas y enablement actualizado continuamente para reducir los escalados innecesarios"
  ]
},
{
  id: 5019, pillar: 5, type: "scale",
  title: "En el último trimestre completo, ¿qué porcentaje de los deals cerrados incluía un descuento no iniciado por el comprador, y tu plan de compensación crea un incentivo para ese comportamiento?",
  options: [
    "No monitorizamos si los descuentos son iniciados por el comercial o por el comprador: todos los descuentos se tratan de la misma manera",
    "Sabemos que los descuentos son comunes, pero no hemos separado los iniciados por el comercial de los iniciados por el comprador en nuestros datos",
    "Los descuentos iniciados por los comerciales son conocidos, pero el diseño de la compensación no los aborda ni los penaliza",
    "Los descuentos iniciados por los comerciales se monitorizan y la compensación incluye salvaguardas, pero el cambio de comportamiento aún no es medible",
    "Los descuentos iniciados por los comerciales frente a los iniciados por los compradores se monitorizan mensualmente, la compensación penaliza los descuentos iniciados por los comerciales por encima de una tasa definida, y la tasa de descuentos iniciados por los comerciales ha disminuido de forma medible"
  ]
},
{
  id: 5020, pillar: 5, type: "scale",
  title: "En el último trimestre, ¿qué porcentaje de los deals que entraron en el pipeline fue finalmente descalificado, y cuántos de ellos fueron retirados en los 30 días siguientes a tu entrada?",
  options: [
    "La descalificación es rara: los deals que entran en el pipeline tienden a permanecer independientemente de la idoneidad",
    "Algunos deals se descalifican pero la tasa es desconocida y el timing queda a discreción del comercial",
    "La tasa de descalificación se monitoriza pero no se revisa sistemáticamente: la velocidad de retirada no se mide",
    "La tasa de descalificación y el tiempo medio en el pipeline antes de la retirada se monitorizan y se revisan en las inspecciones de pipeline",
    "Una disciplina de descalificación rápida: los criterios de cualificación se aplican en la entrada de etapa, la tasa y la velocidad de descalificación se monitorizan semanalmente, y las descalificaciones tardías en volumen elevado disparan una revisión del proceso de cualificación"
  ]
},

/* ===========================================================
   PILAR 6: CUSTOMER SUCCESS & EXPANSION (20 QUESTIONS)
   =========================================================== */

{
  id: 6001, pillar: 6, type: "scale",
  title: "¿Hasta qué punto tu motion de onboarding de clientes está estructurada y acotada en el tiempo, y cómo monitoriza si los clientes alcanzan el primer valor dentro de los plazos?",
  subtitle: "Responde para tu segmento de ingresos principal y tu motion GTM principal, salvo que una pregunta pida explícitamente distinguir.",
  options: [
    "Sin onboarding estructurado: cada cliente se gestiona de manera diferente",
    "Existe una checklist de onboarding pero el time-to-value no se monitoriza",
    "El onboarding sigue un proceso básico pero la consecución de los hitos es incoherente",
    "Un playbook de onboarding definido con seguimiento de los hitos y time-to-value revisado por cohorte",
    "Un motor de onboarding totalmente instrumentado: finalización de los hitos, time-to-value y adopción temprana monitorizados por cliente, revisados semanalmente"
  ]
},
{
  id: 6002, pillar: 6, type: "scale",
  title: "¿Con qué proactividad supervisa la salud de los clientes, y con qué rapidez un deterioro de la salud dispara una intervención?",
  options: [
    "Sin seguimiento de salud: el churn se descubre cuando los clientes cancelan",
    "Los managers de CS siguen la salud de manera subjetiva sin marco compartido",
    "Existe un modelo de health score pero se revisa con poca frecuencia o de manera incoherente",
    "Un modelo de health score revisado semanalmente con playbooks de intervención documentados para las cuentas en riesgo",
    "Un sistema de salud predictivo: indicadores adelantados monitorizados en tiempo real, alertas automatizadas que disparan playbooks y resultados de las intervenciones medidos"
  ]
},
{
  id: 6003, pillar: 6, type: "scale",
  title: "¿Puedes nombrar los dos principales factores controlables de churn en tu base, y eso se basa en un análisis de cohortes o se deduce de unas pocas cuentas perdidas?",
  options: [
    "Sin análisis de retención: el churn se atribuye al producto o al pricing sin datos",
    "Las razones de churn se registran en el CRM pero no se analizan para detectar patrones",
    "Un análisis anual del churn identifica temas amplios pero no las causas raíz",
    "Los factores de retención se cuantifican mediante el análisis de cohortes y las entrevistas de salida revisadas trimestralmente",
    "Un modelo de inteligencia de retención: predictores de churn puntuados por segmento, validados trimestralmente, que alimentan playbooks de intervención proactivos"
  ]
},
{
  id: 6004, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['deer / mid-market', 'elephant / enterprise', 'whale / strategic'] },
  title: "¿Con qué constancia y qué sustancia lleva a cabo las business reviews con los clientes, y cómo se monitorizan los resultados?",
  options: [
    "Sin QBR: los clientes solo oyen hablar de nosotros cuando hay un problema",
    "Los QBR se llevan a cabo de manera informal e incoherente según el representante de CS",
    "Existe una template de QBR pero la planificación y la calidad de los resultados son incoherentes",
    "Las business reviews trimestrales están planificadas, estructuradas y los resultados documentados por cuenta",
    "Un programa QBR totalmente gobernado: plantillas de preparación, directrices de implicación de los directivos y seguimiento de las acciones reportado a los resultados de renovación y expansión"
  ]
},
{
  id: 6005, pillar: 6, type: "scale",
  title: "¿CS transmite sistemáticamente la inteligencia del cliente hacia Product y Sales, y puede rastrear una decisión específica de los dos últimos trimestres que haya cambiado gracias a ello?",
  options: [
    "Los equipos operan en silos: la inteligencia del cliente no se comparte sistemáticamente",
    "Se produce cierto intercambio informal pero no impulsa las decisiones cross-funcionales",
    "Existe un punto de sincronización mensual pero la calidad y la coherencia del intercambio de información son bajas",
    "Un foro de inteligencia del cliente estructurado con acciones de product, ventas y CS documentadas",
    "Un sistema de inteligencia del cliente vivo: señales de product, oportunidades de expansión e indicadores de riesgo compartidos entre CS, Product y Sales en tiempo real"
  ]
},
{
  id: 6006, pillar: 6, type: "scale",
  title: "¿Con qué proactividad tu equipo de CS identifica y acciona las oportunidades de expansión, antes de que Sales inicie la conversación?",
  options: [
    "La expansión está totalmente impulsada por Sales: CS no tiene motion de expansión",
    "CS transmite a veces oportunidades de expansión pero sin proceso definido",
    "CS identifica oportunidades de expansión en las revisiones de salud, pero el traspaso a Sales es incoherente",
    "Un marco de disparadores de expansión documentado: propiedad de CS hasta el traspaso, con pipeline monitorizado por cuenta",
    "CS lleva a cabo una motion de expansión proactiva: señales de uso, disparadores de hitos y modelos de propensión por segmento alimentan el pipeline independientemente de Sales"
  ]
},
{
  id: 6007, pillar: 6, type: "scale",
  title: "¿Hasta qué punto tu motion de renovación es predecible y procesada, y con cuánta antelación comienza a gestionar cada renovación?",
  options: [
    "Las renovaciones se gestionan de manera reactiva: el contacto solo comienza a medida que se acerca la fecha",
    "Existe un proceso de recordatorio de renovación, pero el timing y la responsabilidad son incoherentes",
    "Las renovaciones se monitorizan a 90 días, pero la motion no está estructurada",
    "Un playbook de renovación con disparadores de engagement a 120 días, responsabilidad del propietario y seguimiento de los forecasts",
    "Un motor de renovación totalmente gobernado: jerarquizado por riesgo, disparadores de engagement a 180 días, forecasts actualizados semanalmente y resultados de renovación revisados en el reporting al board"
  ]
},
{
  id: 6008, pillar: 6, type: "scale",
  title: "En tu última cohorte de onboarding, ¿qué porcentaje de clientes alcanzó el hito de primer valor definido dentro de los plazos, y qué bloqueó a los que no lo lograron?",
  options: [
    "La adopción del producto no se mide: CS se apoya en retornos de clientes anecdóticos",
    "Algunos datos de uso están disponibles pero no se conectan sistemáticamente con las acciones de CS",
    "Las métricas de uso se monitorizan pero se utilizan de manera incoherente en el health score",
    "La adopción del producto se monitoriza por cuenta, integrada en los health scores y revisada semanalmente por CS",
    "Un sistema de inteligencia de uso: adopción de las funcionalidades, profundidad de engagement y time-to-activation monitorizados por cuenta y que alimentan intervenciones de CS automatizadas"
  ]
},
{
  id: 6009, pillar: 6, type: "scale",
  title: "De manera sistemática, ¿cómo educas a los clientes sobre las capacidades del producto, y tu programa de educación mejora de forma medible las tasas de adopción o de renovación?",
  options: [
    "Sin programa de educación del cliente: los usuarios aprenden por ensayo y error",
    "Existe documentación básica pero no se promueve activamente ni se monitoriza",
    "Existe un programa de educación, pero las tasas de finalización y el impacto en la adopción no se miden",
    "Un programa de educación del cliente estructurado con seguimiento de la finalización y correlación con la adopción",
    "Un modelo de impacto de la educación: finalización de las certificaciones, aumento de la adopción de las funcionalidades y tasas de renovación por cohorte de educación monitorizados y revisados trimestralmente"
  ]
},
{
  id: 6010, pillar: 6, type: "scale",
  title: "¿Con qué coherencia se definen y se ejecutan las responsabilidades de gestión de cuentas entre los roles de CS y AM, y dónde fallan los traspasos?",
  options: [
    "Sin división clara de responsabilidades: los roles de CS y AM se solapan o entran en conflicto",
    "Existe una división informal de los roles, pero las lagunas de cobertura y de responsabilidad son comunes",
    "Existe un documento de definición de roles, pero los traspasos entre CS y AM son incoherentes",
    "Una interfaz CS/AM documentada con responsabilidad clara por tier de cuenta y umbral de ingresos",
    "Un modelo de gestión de cuentas gobernado: reglas de responsabilidad integradas en el CRM, SLA de traspaso monitorizados y cobertura revisada en las revisiones de cuentas mensuales"
  ]
},
{
  id: 6011, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['deer / mid-market', 'elephant / enterprise', 'whale / strategic'] },
  title: "En el último trimestre, ¿qué porcentaje de tus cuentas ha recibido una business review, y para cada una, se ha documentado y monitorizado una acción de seguimiento?",
  options: [
    "La comunicación de valor es ad-hoc: los clientes no ven su ROI de forma regular",
    "Existe cierto reporting de valor, pero es incoherente y no específico del cliente",
    "Existe un marco de valor pero se utiliza esporádicamente en los QBR y en las conversaciones de renovación",
    "Entrega de valor documentada compartida con cada cuenta trimestralmente, vinculada a las métricas de éxito acordadas",
    "Un playbook de valor del cliente: métricas de éxito definidas en el onboarding, resultados monitorizados trimestralmente y ROI documentado para cada conversación de renovación y de expansión"
  ]
},
{
  id: 6012, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['elephant / enterprise', 'whale / strategic'] },
  title: "En el último trimestre, ¿cuántas cuentas cayeron en la brecha entre la responsabilidad de CS y AM, y una regla de traspaso más clara lo habría evitado?",
  options: [
    "Sin reglas de traspaso: la responsabilidad de CS y AM es informal y las cuentas caen con frecuencia en las lagunas",
    "Algunas cuentas tienen responsables definidos, pero la frontera entre CS y AM es difusa y los conflictos son comunes",
    "Existen criterios de traspaso por escrito, pero se aplican de manera incoherente: aún se producen lagunas y se gestionan de manera reactiva",
    "Las reglas de traspaso CS y AM están documentadas, integradas en el CRM y revisadas trimestralmente: las lagunas son raras",
    "Un modelo de responsabilidad sin lagunas: cada cuenta tiene un único responsable documentado, las transiciones siguen un protocolo definido y las lagunas de cobertura se monitorizan como métrica de gobernanza"
  ]
},
{
  id: 6013, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['elephant / enterprise', 'whale / strategic'] },
  title: "De manera distinta y coherente, ¿cómo tu equipo de Account Management lleva a cabo las revisiones de pipeline de expansión, separadamente de las revisiones de salud de CS?",
  options: [
    "Sin distinción: la expansión se discute en las llamadas de salud de CS sin gestión de pipeline dedicada",
    "El pipeline de expansión se plantea ocasionalmente en las reuniones de CS sin proceso separado",
    "Existe una revisión de expansión separada pero la cadencia y la calidad son incoherentes",
    "Se llevan a cabo revisiones semanales del pipeline de expansión separadas de las llamadas de salud de CS con acciones de deal documentadas",
    "La expansión se gestiona como una motion de venta distinta: pipeline revisado semanalmente, forecasts monitorizados por separado y ARR de expansión reportado independientemente del ARR de renovación"
  ]
},
{
  id: 6014, pillar: 6, type: "scale",
  title: "De manera sistemática, ¿cómo se identifican, se escalan y se gestionan las cuentas en riesgo antes de que hagan churn?",
  options: [
    "Las cuentas en riesgo solo se identifican después de que el cliente haya señalado su intención de cancelar",
    "Los managers de CS señalan las cuentas en riesgo de manera informal sin proceso compartido",
    "Existe un sistema de señalización de riesgo pero los playbooks de intervención son incoherentes",
    "Un marco de riesgo documentado: umbrales de salud, disparadores de escalado y playbooks de intervención revisados semanalmente",
    "Un motor de gestión de riesgo proactivo: las señales predictivas disparan automáticamente playbooks, los caminos de escalado están gobernados y las tasas de recuperación se monitorizan por tier de riesgo"
  ]
},
{
  id: 6015, pillar: 6, type: "scale",
  title: "Nombre una decisión de Product o GTM de los dos últimos trimestres que haya cambiado gracias a la inteligencia de CS, y cuánto tiempo transcurrió entre la señal y la decisión.",
  options: [
    "No podemos nombrar ninguna: la inteligencia de CS no impulsa visiblemente las decisiones de Product o GTM",
    "Las señales de CS influyen ocasionalmente en las decisiones de manera informal, pero la conexión no está documentada",
    "Algunas decisiones se han vinculado a un input de CS, pero el camino señal-a-decisión es incoherente y lento",
    "Varias decisiones por trimestre son trazables a la inteligencia de CS, con el origen de la señal y el calendario documentados",
    "Un sistema de inteligencia de CS en bucle cerrado: señales registradas, revisadas en foros estructurados, decisiones vinculadas a la fuente y tiempo señal-a-decisión monitorizado como métrica de rendimiento"
  ]
},
{
  id: 6016, pillar: 6, type: "scale",
  title: "¿Cuál es tu ratio actual de clientes por CSM, y este ratio ha mejorado o se ha degradado en los últimos 12 meses a medida que tu base de clientes ha crecido?",
  options: [
    "No monitorizamos los clientes por CSM: cada cuenta requiere un tiempo de CS aproximadamente dedicado y el ratio nunca se ha calculado",
    "El ratio existe de manera informal pero se ha degradado con nuestro crecimiento: no hemos podido dimensionar la capacidad de CS por delante del crecimiento de clientes",
    "El ratio se monitoriza pero está aproximadamente estable: hemos añadido headcount de CS proporcionalmente sin mejorar el apalancamiento",
    "El ratio de clientes por CSM ha mejorado en los últimos 12 meses gracias al tiering, a la automatización o al self-service: monitorizado trimestralmente",
    "El apalancamiento de CS es una métrica gestionada: clientes por CSM monitorizado mensualmente, mejorando trimestre tras trimestre, y un ratio objetivo está definido en la planificación anual con un camino documentado para alcanzarlo"
  ]
},
{
  id: 6017, pillar: 6, type: "scale",
  title: "¿Puede tu equipo de CS extraer una vista unificada del cliente, salud, uso, soporte y datos comerciales, sin ensamblar datos a mano entre sistemas?",
  options: [
    "Los datos de CS están fragmentados entre sistemas desconectados: sin vista unificada del cliente",
    "El ensamblaje manual de los datos proporciona una vista parcial, revisada con poca frecuencia",
    "Existe una integración parcial, pero las lagunas en los datos de salud o de uso requieren workarounds manuales",
    "Los datos de CS, CRM y producto están integrados con una vista única del cliente disponible en los cuadros de mando",
    "Una plataforma de datos de cliente unificada: salud, uso, soporte y datos comerciales en una sola vista, actualizada en tiempo real y alimentando acciones automatizadas"
  ]
},
{
  id: 6018, pillar: 6, type: "scale",
  title: "¿Monitoriza el churn de logo y el churn de ingresos como métricas distintas, y en los dos últimos trimestres, han evolucionado de manera diferente?",
  options: [
    "Se monitoriza una única métrica de churn: el churn de logo y el churn de ingresos no se separan",
    "Ambas métricas se calculan, pero se revisan juntas sin análisis de por qué divergen",
    "El churn de logo y el churn de ingresos se monitorizan por separado, y las divergencias se anotan pero no se analizan formalmente",
    "Ambas métricas se monitorizan por separado, se revisan mensualmente y las divergencias se analizan para encontrar la causa raíz",
    "Un sistema diagnóstico de doble churn: churn de logo y churn de ingresos monitorizados y tendenciados por separado, divergencia analizada por cohorte y segmento, e insights que alimentan la planificación de capacidad de CS y de expansión"
  ]
},
{
  id: 6019, pillar: 6, type: "scale",
  title: "¿Con qué fiabilidad tu función de CS contribuye a un NRR predecible, y qué confianza tienes en tu forecast de NRR a tres trimestres?",
  options: [
    "El NRR es impredecible: los resultados de retención y de expansión son volátiles de un trimestre a otro",
    "Las tendencias de NRR se monitorizan pero la precisión de los forecasts está limitada a 30-60 días",
    "El NRR se modela a 90 días pero la precisión de los forecasts es variable",
    "El NRR se proyecta a 180 días con inputs documentados de pipeline de renovación y de expansión",
    "Un forecast de NRR totalmente modelado: riesgo de renovación, pipeline de expansión y predictores de churn actualizados semanalmente y revisados en el reporting al board"
  ]
},
{
  id: 6020, pillar: 6, type: "scale",
  title: "En el último trimestre, ¿cuántas decisiones GTM cross-funcionales han sido directamente alimentadas por la inteligencia del cliente transmitida por CS, y se monitoriza esto en algún sitio?",
  options: [
    "Ninguna: la inteligencia de CS no se transmite sistemáticamente a las decisiones GTM cross-funcionales",
    "Algunas señales de los clientes llegan a otros equipos de manera informal, pero ninguna decisión se rastrea hasta ellas",
    "Algunas decisiones se han visto influidas por los insights de CS, pero la conexión no está documentada de manera coherente",
    "La inteligencia del cliente de CS se revisa en foros estructurados y puede vincularse a decisiones GTM o de Product documentadas",
    "Un sistema de inteligencia del cliente en bucle cerrado: las señales originadas por CS se registran, se revisan de manera cross-funcional y las decisiones influidas por ellas se monitorizan con los responsables y los resultados"
  ]
},

/* ===========================================================
   PILAR 7: REVENUE OPERATIONS & SYSTEMS (20 QUESTIONS)
   =========================================================== */

{
  id: 7001, pillar: 7, type: "scale",
  title: "¿Con qué exactitud y completitud se mantienen los registros CRM, y cómo mides y aplicas la calidad de los datos?",
  subtitle: "Responde para tu segmento de ingresos principal y tu motion GTM principal, salvo que una pregunta pida explícitamente distinguir.",
  options: [
    "Los datos CRM no son fiables: los registros están incompletos, duplicados u obsoletos",
    "La calidad de los datos se espera pero no se mide ni se aplica",
    "Se realizan auditorías de datos periódicas pero los problemas de higiene vuelven sin correcciones sistémicas",
    "La calidad de los datos CRM se mide mensualmente con responsables documentados y objetivos de corrección",
    "Un sistema de higiene CRM gobernado: campos requeridos aplicados, completitud puntuada semanalmente y calidad de los datos reportada al liderazgo mensualmente"
  ]
},
{
  id: 7002, pillar: 7, type: "scale",
  title: "En tu último cambio de proceso, ¿cuánto tiempo se tardó en reflejar ese cambio en las definiciones de etapas CRM y en los campos requeridos, y quién fue responsable de esa actualización?",
  options: [
    "El CRM se utiliza para registrar los contactos pero no refleja el proceso de venta",
    "Existen etapas CRM pero no se corresponden con la forma en que los deals progresan realmente",
    "El CRM refleja globalmente el proceso pero los criterios de salida y los campos requeridos están incompletos",
    "Las definiciones de etapas CRM, los criterios de salida y los campos requeridos reflejan el proceso de venta real",
    "El CRM es un espejo de proceso gobernado: puertas de etapa aplicadas, preparación de las deal reviews automatizada y configuración revisada tras cada cambio de proceso"
  ]
},
{
  id: 7003, pillar: 7, type: "scale",
  title: "De manera exhaustiva, ¿los workflows GTM están documentados, y con qué coherencia se siguen estos procesos entre equipos y regiones?",
  options: [
    "Sin documentación de procesos: los workflows solo existen en la práctica individual",
    "Algunos procesos están documentados pero la cobertura es incompleta y el acceso es incoherente",
    "Los procesos principales están documentados pero no se siguen ni se aplican sistemáticamente",
    "Una biblioteca de procesos que cubre todos los workflows GTM principales, revisada trimestralmente y vinculada al onboarding",
    "Una biblioteca de procesos gobernada: versionada, acceso monitorizado y desviación señalizada en las revisiones operativas mensualmente"
  ]
},
{
  id: 7004, pillar: 7, type: "scale",
  title: "¿Hasta qué punto tu stack tecnológico GTM automatiza los procesos repetitivos, y dónde siguen los cuellos de botella manuales que consumen la capacidad de los comerciales y de ops?",
  options: [
    "El GTM funciona casi por completo sobre procesos manuales: la automatización es mínima",
    "Existe una automatización básica en el email y el CRM, pero los traspasos siguen siendo manuales",
    "Los workflows principales están automatizados, pero queda un esfuerzo manual significativo en el reporting y el routing",
    "La mayoría de los procesos GTM rutinarios están automatizados con excepciones documentadas y controles de override manual",
    "Una capa de automatización totalmente instrumentada: routing, secuenciación, reporting y alertas automatizados, con puntos de contacto manuales limitados a las actividades que requieren un juicio elevado"
  ]
},
{
  id: 7005, pillar: 7, type: "scale",
  title: "¿Puede rastrear un prospect desde el primer contacto hasta el closed-won sin ensamblar datos a mano entre sistemas, y cuánto tiempo lleva esto actualmente?",
  options: [
    "Los sistemas están en silos: los datos no pueden rastrearse entre las herramientas sin trabajo manual",
    "Existen integraciones parciales, pero las lagunas de datos y los fallos de sincronización son comunes",
    "Los sistemas principales están integrados, pero algunos flujos de datos requieren reconciliación manual",
    "El CRM, el MAP y el SEP están totalmente integrados con flujos de datos limpios revisados mensualmente",
    "Una arquitectura de datos GTM coherente: todos los sistemas integrados, calidad de los datos supervisada en tiempo real y salud de las integraciones revisada trimestralmente"
  ]
},
{
  id: 7006, pillar: 7, type: "scale",
  title: "¿Hasta qué punto tu proceso de routing y de asignación de leads está estructurado y basado en reglas, y con qué rapidez un lead cualificado llega al comercial adecuado?",
  options: [
    "El routing de leads es manual: alguien decide quién recibe cada lead",
    "Existen reglas de routing básicas en el CRM pero las excepciones son frecuentes y no se monitorizan",
    "Las reglas de routing cubren la mayoría de los escenarios pero los casos límite causan retrasos o doble asignación",
    "Un marco de routing documentado que cubre todos los tipos de leads, revisado trimestralmente en cuanto a cobertura",
    "Un sistema de routing de leads automatizado: reglas documentadas, testadas y supervisadas, con velocidad y precisión del routing monitorizadas semanalmente"
  ]
},
{
  id: 7007, pillar: 7, type: "scale",
  title: "¿Con qué eficiencia se gestiona tu stack tecnológico GTM en cuanto a costes, y cuándo hiciste tu última auditoría de redundancia, subutilización o ineficiencia contractual?",
  options: [
    "No se ha llevado a cabo ninguna auditoría del stack tecnológico: las herramientas se añaden y se olvidan",
    "Existe una vista aproximada de las herramientas pero no se ha hecho ninguna auditoría formal ni racionalización",
    "Se lleva a cabo una revisión anual del stack tecnológico, pero el uso y la optimización de los contratos no se monitorizan",
    "Una auditoría semestral del stack tecnológico revisa el uso, el valor de los contratos y la redundancia con acciones documentadas",
    "Un programa de gobernanza del stack tecnológico continuo: uso supervisado mensualmente, contratos benchmarkados anualmente y decisiones de racionalización revisadas trimestralmente"
  ]
},
{
  id: 7008, pillar: 7, type: "scale",
  title: "¿RevOps funciona como un socio estratégico de los equipos GTM, o principalmente como una función reactiva de ejecución de peticiones?",
  options: [
    "RevOps es reactivo: el trabajo lo impulsa quien pide más alto",
    "RevOps tiene un backlog pero la priorización es incoherente y no está gobernada",
    "RevOps prioriza por petición de equipo, pero la ponderación del impacto de negocio es informal",
    "RevOps ejecuta un proceso de priorización basado en sprints, alineado con el liderazgo GTM trimestralmente",
    "RevOps opera como una función estratégica: proceso de intake gobernado, roadmap ponderada por el impacto y revisión de stakeholders trimestral"
  ]
},
{
  id: 7009, pillar: 7, type: "scale",
  title: "Para tus tres principales herramientas GTM por gasto: ¿cuál es la tasa real de uso diario activo frente a los asientos licenciados, y cuándo revisaste estos datos por última vez?",
  options: [
    "La adopción de las herramientas no se monitoriza: las licencias se compran y asumimos el uso sin datos",
    "Tenemos una idea aproximada de las herramientas subutilizadas, pero no hemos medido el uso diario activo frente a los asientos licenciados",
    "El uso se monitoriza para al menos una herramienta principal, pero las demás no se miden ni se revisan",
    "El uso se monitoriza para todas las herramientas principales, se revisa trimestralmente y las licencias subutilizadas se identifican, pero las decisiones de reasignación son lentas",
    "Un programa gobernado de adopción de las herramientas: uso diario activo frente a asientos licenciados monitorizado mensualmente por herramienta, la subutilización dispara una revisión de consolidación en 30 días y el coste por usuario activo es una métrica gestionada"
  ]
},
{
  id: 7010, pillar: 7, type: "scale",
  title: "De manera sistemática, ¿cómo mides y gestionas la eficiencia GTM, y cómo sabes si está mejorando o degradándose?",
  options: [
    "La eficiencia GTM no se mide: nos centramos únicamente en los ingresos top-line",
    "Existen algunas métricas de eficiencia pero se revisan con poca frecuencia",
    "Las métricas de eficiencia principales se monitorizan pero no se revisan frente a objetivos o benchmarks",
    "Las métricas de eficiencia GTM se revisan mensualmente frente a objetivos definidos y tendencias históricas",
    "Un cuadro de mando de eficiencia GTM revisado mensualmente: CAC, retorno sobre la inversión, velocidad del pipeline y burn multiple benchmarkados e impulsando las decisiones de inversión trimestrales"
  ]
},
{
  id: 7011, pillar: 7, type: "scale",
  title: "¿Hasta qué punto se gobiernan los cambios de datos y de procesos, y cómo impide que los cambios no controlados creen incoherencias de reporting?",
  options: [
    "Sin gobernanza: cualquiera puede modificar los campos CRM, los procesos o las integraciones",
    "Existen normas informales pero los cambios no controlados son comunes",
    "Existe un proceso de solicitud de cambio, pero el cumplimiento es incoherente",
    "Un proceso de gobernanza de los cambios documentado: solicitudes revisadas, impacto evaluado y cambios registrados",
    "Un comité formal de control de cambios: todos los cambios de sistema y de proceso GTM revisados, aprobados, testados y documentados antes del despliegue"
  ]
},
{
  id: 7012, pillar: 7, type: "scale",
  title: "De manera racional, ¿cómo están diseñadas y mantenidas tus estructuras de territorios y quotas de forma equitativa, y cuándo se revisaron formalmente por última vez?",
  options: [
    "Los territorios y quotas se fijan históricamente: sin proceso formal de diseño o de revisión",
    "Las quotas se fijan de manera top-down con un mínimo de datos que respalden el diseño de los territorios",
    "Se llevan a cabo revisiones anuales de quotas y territorios, pero el proceso no está guiado por los datos",
    "El diseño de los territorios y quotas sigue un marco documentado revisado anualmente con Finance",
    "Un modelo de territorios y quotas guiado por los datos: potencial de las cuentas, capacidad de los comerciales y oportunidad de mercado revisados trimestralmente, con ajustes en curso de año documentados"
  ]
},
{
  id: 7013, pillar: 7, type: "scale",
  title: "¿Hasta qué punto RevOps está estructuralmente integrado entre Sales, Marketing y CS, y RevOps tiene un asiento en la planificación GTM?",
  options: [
    "RevOps sirve a una única función: Sales o Marketing, sin alcance cross-funcional",
    "RevOps cubre varias funciones pero opera de manera reactiva en lugar de en la planificación",
    "RevOps asiste a la planificación GTM pero no co-posee las decisiones de procesos o de tooling",
    "RevOps es un copropietario formal del modelo operativo GTM, de las decisiones de procesos y de tooling",
    "RevOps es una función GTM estratégica: co-posee la planificación, los datos y los procesos en todas las funciones de ingresos con un asiento en las revisiones mensuales del liderazgo"
  ]
},
{
  id: 7014, pillar: 7, type: "scale",
  title: "¿Hasta qué punto tus cuadros de mando e informes GTM son accionables y se utilizan de manera coherente, y quién los revisa y a qué cadencia?",
  options: [
    "Sin cuadros de mando: el reporting se hace manualmente en hojas de cálculo",
    "Existen cuadros de mando pero rara vez se abren o se utilizan para guiar las decisiones",
    "Se producen informes estándar pero los datos no son fiables sistemáticamente ni se aprovechan",
    "Los cuadros de mando se revisan en reuniones GTM semanales con resultados de acción documentados",
    "Una arquitectura de reporting gobernada: cuadros de mando automatizados revisados en cadencias diaria, semanal y mensual, con un diario de decisiones que sigue las acciones de cada revisión"
  ]
},
{
  id: 7015, pillar: 7, type: "scale",
  title: "¿Puede tu equipo extraer una vista completa del cliente, desde el primer contacto hasta la salud actual, sin ensamblar datos a mano entre sistemas?",
  options: [
    "Una vista completa del cliente no existe: los datos están dispersos entre herramientas desconectadas",
    "Se puede ensamblar una vista parcial manualmente, pero requiere un esfuerzo significativo",
    "Existe una vista del cliente pero requiere correcciones manuales regulares para ser exacta",
    "Una vista única del cliente automatizada existe en el CRM o en BI, actualizada diariamente",
    "Un registro de cliente unificado en tiempo real: todos los puntos de contacto, señales de salud y datos comerciales accesibles en una sola vista sin intervención manual"
  ]
},
{
  id: 7016, pillar: 7, type: "scale",
  title: "En el último trimestre, ¿qué porcentaje de los equipos GTM siguió los procesos estándar definidos por RevOps sin desviación, y cómo lo sabe?",
  options: [
    "Sin estandarización: cada equipo sigue su propio enfoque",
    "Existen algunos procesos compartidos pero la adopción es desigual",
    "Los procesos principales están estandarizados pero el seguimiento de la adopción es informal",
    "Los procesos GTM están estandarizados, la adopción monitorizada por equipo y la desviación abordada mensualmente",
    "Un programa de estandarización: adherencia a los procesos puntuada por equipo y revisada mensualmente, con las causas raíz de desviación abordadas en auditorías trimestrales"
  ]
},
{
  id: 7017, pillar: 7, type: "scale",
  title: "¿Con qué rigor se llevan a cabo las revisiones de pipeline y de forecasts, y hasta qué punto mejora la precisión de los forecasts a lo largo de un trimestre?",
  options: [
    "Sin proceso de forecast formal: las predicciones de ingresos se basan en la intuición",
    "Se produce un forecast, pero la precisión no se monitoriza ni se revisa frente a los resultados",
    "Existe un forecast trimestral, pero la precisión se degrada significativamente a lo largo del trimestre",
    "Una revisión semanal de los forecasts con seguimiento de precisión documentado y explicación de los desvíos",
    "Un sistema operativo de forecasts gobernado: precisión llamada-a-cierre monitorizada semanalmente, desvíos explicados y metodología de forecast revisada tras cada trimestre"
  ]
},
{
  id: 7018, pillar: 7, type: "scale",
  title: "En el último trimestre, ¿qué porcentaje de las peticiones de RevOps se entregó a tiempo, y para las principales, puede mostrar el impacto de negocio que produjeron?",
  options: [
    "El respeto de los plazos de entrega de las peticiones no se monitoriza y el impacto de negocio es generalmente desconocido",
    "Algunas peticiones se entregan a tiempo, pero ni la adherencia a los SLA ni el impacto se revisan sistemáticamente",
    "El respeto de los plazos se monitoriza para algunas peticiones, pero el impacto de negocio se documenta de manera incoherente",
    "El respeto de los plazos de entrega de RevOps se monitoriza y las peticiones principales incluyen un impacto de negocio documentado tras la entrega",
    "Un modelo de entrega de RevOps gobernado: tasa de entrega a tiempo monitorizada mensualmente, las peticiones principales requieren documentación de impacto y la priorización del backlog se ajusta en función del valor de negocio entregado"
  ]
},
{
  id: 7019, pillar: 7, type: "scale",
  title: "De manera estratégica, ¿cómo contribuye RevOps a la planificación GTM, y la capacidad de RevOps forma parte de la discusión de planificación anual?",
  options: [
    "RevOps está excluido de la planificación: la capacidad operativa no se tiene en cuenta",
    "RevOps se consulta ocasionalmente en la planificación pero no es un input formal",
    "RevOps contribuye a la planificación de los sistemas y procesos anualmente",
    "RevOps es un input de planificación formal: capacidad operativa, tooling y roadmap de procesos revisados en la planificación anual y trimestral",
    "RevOps co-posee el plan operativo GTM: capacidad de los sistemas, roadmap de procesos e infraestructura de datos se planifican en paralelo al headcount y al presupuesto"
  ]
},
{
  id: 7020, pillar: 7, type: "scale",
  title: "¿Qué porcentaje de tus comerciales utiliza activamente tus herramientas GTM principales sin incentivo ni coacción, y cómo distingue la adopción voluntaria del cumplimiento?",
  options: [
    "Las herramientas solo se usan porque el cumplimiento lo exige: los comerciales no las usarían voluntariamente y las evitan con frecuencia",
    "La mayoría de los comerciales tolera las herramientas pero los workarounds son comunes: el stack crea más fricción de la que elimina",
    "Las herramientas principales se utilizan de manera adecuada: la adopción es aceptable pero los comerciales no las ven como realmente útiles en su día a día",
    "La mayoría de los comerciales utiliza voluntariamente las herramientas principales y las encuentra útiles: se recoge feedback y se abordan los problemas de UX",
    "Un stack centrado en el comercial con adopción voluntaria monitorizada: los datos de uso muestran que los comerciales acceden a las herramientas antes de ser invitados a ello, la fricción del workflow se revisa trimestralmente y las herramientas que puntúan sistemáticamente bajo se retiran o se rediseñan"
  ]
},

/* ===========================================================
   PILAR 8: PRICING & PACKAGING (20 QUESTIONS)
   =========================================================== */

{
  id: 8001, pillar: 8, type: "scale",
  title: "¿Hasta qué punto tu estrategia de pricing está explícitamente definida, y cuándo se revisó por última vez frente a datos de mercado y de costes?",
  subtitle: "Responde para tu segmento de ingresos principal y tu motion GTM principal, salvo que una pregunta pida explícitamente distinguir.",
  options: [
    "Sin estrategia de pricing: los precios se fijaron una vez y no se han revisado",
    "Existe una filosofía de pricing informal pero no está documentada ni gobernada",
    "Existe un documento de estrategia de pricing pero no se ha actualizado desde hace más de un año",
    "Una estrategia de pricing revisada anualmente frente a los datos win/loss, a los benchmarks competitivos y a los objetivos de margen",
    "Una estrategia de pricing gobernada: revisada semestralmente, alimentada por la investigación de compradores, los datos de deals y la inteligencia competitiva, con una justificación de las decisiones documentada"
  ]
},
{
  id: 8002, pillar: 8, type: "scale",
  title: "¿Tu estructura de packaging refleja la manera en que los clientes adoptan y se expanden realmente, y la has validado frente a datos de uso reales en los últimos 12 meses?",
  options: [
    "El packaging se diseñó internamente: los patrones de adopción del cliente no se tuvieron en cuenta",
    "El packaging está vagamente alineado con los patrones de uso pero crea fricción en los puntos de expansión",
    "El packaging está alineado con los patrones de adopción principales pero los segmentos secundarios están mal atendidos",
    "El packaging se valida frente a los datos de adopción y se revisa anualmente en cuanto a alineamiento",
    "Una arquitectura de packaging diseñada a partir de los datos de adopción: disparadores de expansión, recorridos de upgrade y alineamiento de las métricas de valor validados mediante entrevistas a clientes y análisis de uso"
  ]
},
{
  id: 8003, pillar: 8, type: "scale",
  title: "¿Con qué intuitividad puede un comprador comprender tu pricing en menos de dos minutos sin necesitar un comercial para explicárselo?",
  options: [
    "El pricing requiere explicaciones significativas: los compradores se confunden con frecuencia",
    "La mayoría de los compradores necesita una llamada para comprender lo que pagarán",
    "El pricing es comprensible para los segmentos principales pero crea confusión para los demás",
    "El pricing es claro y autoexplicativo para todos los segmentos de compradores principales",
    "El pricing se valida mediante tests de comprensión del comprador: todos los segmentos pueden autoseleccionar el tier adecuado sin implicación comercial"
  ]
},
{
  id: 8004, pillar: 8, type: "scale",
  title: "¿Con qué rigor testas y validas la propensión a pagar en tus segmentos de clientes clave, y con qué metodología?",
  options: [
    "La propensión a pagar es desconocida: el pricing se fijó sobre la base del coste o la intuición",
    "Consciencia anecdótica a partir de deals perdidos por el precio, no validada",
    "Algunas entrevistas a compradores han alimentado el pricing, pero la investigación no es sistemática",
    "Propensión a pagar validada mediante una investigación de compradores estructurada y un análisis de la tasa de cierre por tramo de precio",
    "Un modelo de propensión a pagar por segmento: validado mediante investigación controlada, análisis de pricing win/loss y tasa de cierre por tier de precio, revisado anualmente"
  ]
},
{
  id: 8005, pillar: 8, type: "scale",
  title: "¿Cuál es tu prueba para tu nivel de pricing actual, entrevistas a compradores, análisis de la tasa de cierre por tramo de precio o benchmark competitivo? ¿Cuándo se actualizó esa prueba por última vez?",
  options: [
    "La propensión a pagar es desconocida: el pricing se fijó sobre la base del coste o de hipótesis internas",
    "Consciencia anecdótica a partir de deals perdidos por el precio, no validada mediante investigación estructurada",
    "Algunas entrevistas a compradores han alimentado el pricing, pero la investigación no es sistemática ni segmentada",
    "Propensión a pagar validada mediante una investigación de compradores estructurada y un análisis de la tasa de cierre por tramo de precio",
    "Un modelo de propensión a pagar por segmento: validado mediante investigación controlada, datos de pricing win/loss y tasa de cierre por tier de precio, revisado anualmente y alimentando las decisiones de packaging"
  ]
},
{
  id: 8006, pillar: 8, type: "scale",
  title: "¿Hasta qué punto tus precios están anclados al valor medible que tu producto entrega a los clientes en cada segmento?",
  options: [
    "El pricing se basa en el coste o está referenciado al competidor: el valor no es el ancla principal",
    "Se utiliza una narrativa de valor informal en las negociaciones pero el pricing no se deriva del valor",
    "El pricing está aproximadamente alineado con el valor para los segmentos principales",
    "Un marco documentado valor-a-precio validado mediante un análisis de ROI del cliente por segmento",
    "Pricing basado en el valor con un modelo de ROI documentado por segmento: anclas de valor testadas mediante entrevistas a compradores y actualizadas anualmente"
  ]
},

{
  id: 8007, pillar: 8, type: "scale",
  title: "¿Tu arquitectura de packaging está basada en cómo los clientes adoptan y se expanden realmente, o en lo que era más fácil de construir? ¿Cuándo la validó por última vez frente a los datos de uso reales?",
  options: [
    "El packaging fue diseñado internamente sin referencia a los patrones de adopción del cliente",
    "El packaging está vagamente alineado con los patrones de uso pero crea fricción en los puntos de expansión habituales",
    "El packaging está alineado con los patrones de adopción principales pero los segmentos secundarios y los caminos de expansión están mal atendidos",
    "El packaging está validado frente a los datos de adopción y se revisa anualmente para alinearlo con la realidad de uso",
    "Una arquitectura de packaging diseñada a partir de los datos de adopción y expansión: caminos de upgrade, disparadores de uso y alineación de las métricas de valor validados mediante entrevistas a clientes y análisis de cohortes"
  ]
},
{
  id: 8008, pillar: 8, type: "scale",
  title: "¿Con qué claridad entiende qué funcionalidades generan propensión a pagar, y esa comprensión informa directamente cómo las empaqueta y tarifica?",
  options: [
    "Sin inteligencia de pricing a nivel de funcionalidad: las funcionalidades se empaquetan sin test de valor",
    "Hipótesis intuitivas guían el packaging de funcionalidades pero ninguna investigación las respalda",
    "Se han realizado tests de valor por funcionalidad pero no se aplican sistemáticamente",
    "Mapeo funcionalidad-hacia-propensión a pagar validado mediante investigación de compradores y análisis de tasa de cierre",
    "Un modelo vivo de valor de las funcionalidades: importancia de las funcionalidades y propensión a pagar testadas continuamente mediante entrevistas a compradores y datos de uso, alimentando el packaging anualmente"
  ]
},
{
  id: 8009, pillar: 8, type: "scale",
  title: "En el último trimestre, ¿qué porcentaje de los deals de expansión requirió una renegociación completa del contrato, y ese porcentaje está mejorando o empeorando?",
  options: [
    "Toda expansión requiere un nuevo proceso comercial: el packaging no se adapta al crecimiento",
    "La expansión es posible pero crea fricción comercial debido al packaging o la estructura contractual",
    "Algunos caminos de expansión existen pero no todos los escenarios de crecimiento habituales se gestionan limpiamente",
    "El packaging incluye caminos de expansión definidos validados frente a los patrones de crecimiento de clientes habituales",
    "Una arquitectura de expansión modular: disparadores de uso, de asientos y de funcionalidades auto-facturados sin renegociación: fuga de expansión rastreada trimestralmente y packaging actualizado cuando se detecta una fuga"
  ]
},
{
  id: 8010, pillar: 8, type: "scale",
  title: "En los últimos 10 deals, ¿cuántos prospectos pidieron una explicación del pricing que debería haber sido evidente a partir de tus materiales publicados?",
  options: [
    "Todos o casi todos los prospectos necesitaron explicaciones significativas sobre el pricing: nuestro pricing no es autoexplicativo para ningún segmento",
    "La mayoría de los prospectos necesitaron al menos una llamada de seguimiento para entender lo que pagarían antes de poder evaluar",
    "La mitad o más necesitaron aclaraciones: el pricing es aproximadamente comprensible para compradores experimentados pero confuso para el resto",
    "Menos de 3 prospectos de cada 10 necesitaron explicaciones sobre el pricing: la mayoría de los compradores del segmento principal pueden auto-seleccionar el tier adecuado",
    "La claridad del pricing se testa: comprensión del comprador validada mediante entrevistas estructuradas: menos de 1 prospecto de cada 10 del segmento principal requiere una explicación del pricing por parte de un comercial"
  ]
},
{
  id: 8011, pillar: 8, type: "scale",
  title: "¿Con qué precisión entiende la sensibilidad al precio a nivel de segmento, y cómo informa eso qué segmentos prioriza?",
  options: [
    "La sensibilidad al precio no se analiza por segmento: una sola estructura de pricing sirve a todos los segmentos",
    "Conciencia aproximada de qué segmentos cuestionan el precio",
    "Sensibilidad al precio por segmento rastreada de manera informal a través de los datos de deals",
    "Sensibilidad al precio analizada por segmento, validada mediante datos de deals y entrevistas revisadas anualmente",
    "Un modelo de sensibilidad al precio por segmento: elasticidad cuantificada por segmento, alimentando la arquitectura de precio, la gobernanza de descuentos y la asignación de recursos GTM"
  ]
},
{
  id: 8012, pillar: 8, type: "scale",
  title: "¿Tu packaging está basado en una investigación documentada de propensión a pagar, o en hipótesis internas sobre las funcionalidades más valiosas?",
  options: [
    "El packaging fue diseñado internamente: nunca se llevó a cabo una investigación de compradores sobre el valor de las funcionalidades",
    "Hipótesis intuitivas guían el packaging de funcionalidades: ninguna investigación estructurada respalda las decisiones de packaging actuales",
    "Se han realizado tests de valor por funcionalidad pero los resultados no se aplican sistemáticamente a las decisiones de packaging",
    "El mapeo funcionalidad-hacia-propensión a pagar ha sido validado mediante investigación de compradores y análisis de tasa de cierre por tramo de precio",
    "Existe un modelo vivo de valor de funcionalidades: importancia de las funcionalidades y propensión a pagar testadas mediante entrevistas a compradores y datos de uso, revisado anualmente y alimentando directamente las decisiones de packaging, no las hipótesis"
  ]
},
{
  id: 8013, pillar: 8, type: "scale",
  title: "¿Tu pricing y packaging ofrecen configuraciones significativamente diferentes para distintos personas, casos de uso o verticales, o es efectivamente una sola estructura para todo el mundo?",
  options: [
    "Una estructura de precio universal sirve a todos los personas y casos de uso",
    "Se hacen ajustes de precio informales para personas específicas sin justificación documentada",
    "Existe cierta diferenciación por persona o vertical pero no se aplica de manera coherente",
    "Las opciones de packaging basadas en personas o casos de uso están documentadas y se utilizan en la estructuración de deals",
    "Una arquitectura de packaging completamente diferenciada: configuraciones específicas por personas, casos de uso y verticales validadas mediante investigación de compradores"
  ]
},
{
  id: 8014, pillar: 8, type: "scale",
  title: "¿Cuándo hiciste el último benchmark formal de tu pricing frente a los competidores, y ese análisis modificó alguna decisión de pricing o packaging?",
  options: [
    "Sin datos de pricing competitivo: el posicionamiento frente a las alternativas es desconocido",
    "Conciencia aproximada del pricing competitivo a partir de las llamadas comerciales, no estructurada ni reciente",
    "Existe una revisión periódica del pricing competitivo pero la calidad y frescura de los datos son limitadas",
    "Una revisión anual del pricing competitivo con implicaciones de posicionamiento y decisiones documentadas",
    "Un programa de inteligencia de pricing competitivo: benchmark semestral, pricing competitivo a nivel de deal rastreado en el CRM y posición revisada trimestralmente, con una respuesta documentada cuando la posición cambia"
  ]
},
{
  id: 8015, pillar: 8, type: "scale",
  title: "En el último trimestre, ¿cuántos deals crearon un conflicto de canal entre tus motions self-serve y enterprise, y existe una regla documentada que gobierne qué motion posee qué cuenta?",
  options: [
    "El conflicto de canal no se gestiona: self-serve y enterprise compiten regularmente por las mismas cuentas sin regla de resolución",
    "El conflicto existe y es conocido pero se gestiona caso por caso: no existe regla formal de responsabilidad",
    "Una regla informal gobierna la mayoría de los conflictos pero los casos límite aún causan fricción o conflictos internos",
    "Una regla de responsabilidad documentada define qué motion gestiona qué cuentas: la mayoría de los conflictos se resuelven sin escalado",
    "El conflicto de canal es una métrica rastreada: reglas de responsabilidad aplicadas en el CRM, tasa de conflicto monitorizada mensualmente y lagunas de las reglas abordadas en las revisiones trimestrales de RevOps"
  ]
},
{
  id: 8016, pillar: 8, type: "scale",
  title: "De manera sistemática, ¿cómo identifica dónde el pricing o el packaging crea fricción que bloquea deals o ralentiza el ciclo de venta?",
  options: [
    "La fricción de pricing solo se identifica cuando se pierden deals",
    "Las anécdotas comerciales hacen emerger la fricción de manera informal sin seguimiento sistemático",
    "El análisis de deals perdidos a veces hace emerger bloqueos de pricing",
    "La fricción de pricing se rastrea en el análisis de deals perdidos y se revisa trimestralmente con Finanzas y RevOps",
    "Un programa de inteligencia de fricción de pricing: bloqueos rastreados por segmento y etapa del deal, revisados trimestralmente y alimentando las actualizaciones de packaging y los cambios en las reglas de descuento"
  ]
},
{
  id: 8017, pillar: 8, type: "scale",
  title: "¿Con qué regularidad y rigor testas los cambios de pricing, y cuál es tu proceso para validar una actualización de pricing antes de un despliegue completo?",
  options: [
    "Sin tests de pricing: los cambios se implementan por decisión de los directivos",
    "Se hacen cambios de pricing ocasionales sin proceso formal de validación",
    "Se realizan algunas experimentaciones de pricing pero los resultados se evalúan de manera informal",
    "Un proceso de cambio de pricing definido: hipótesis, cohorte de test, período de medición y criterios go/no-go documentados antes de cada cambio",
    "Un modelo de gobernanza del pricing sistemático: todos los cambios se pilotan, se mide el impacto en la conversión y el margen y la decisión de despliegue queda documentada"
  ]
},
{
  id: 8018, pillar: 8, type: "scale",
  title: "Para cada geografía donde vende activamente: ¿el pricing está validado frente a la propensión a pagar local, o es una conversión directa del pricing de tu mercado principal?",
  options: [
    "Una única estructura de precio global aplicada en todas partes sin consideración geográfica",
    "Ajustes geográficos informales realizados en negociación sin justificación documentada",
    "Existe un pricing regional pero no está validado frente a los datos del mercado local",
    "Pricing específico por geografía validado mediante investigación de compradores y datos de deals locales",
    "Un modelo de pricing geográfico: propensión a pagar local validada, paridad de poder adquisitivo aplicada cuando es relevante y pricing regional revisado anualmente"
  ]
},
{
  id: 8019, pillar: 8, type: "scale",
  title: "De manera sistemática, ¿cómo mides el rendimiento del pricing, y qué métricas señalan que tu pricing necesita un ajuste?",
  options: [
    "El rendimiento del pricing no se rastrea: el crecimiento del revenue es la única señal",
    "El win rate y el tamaño medio de los deals se rastrean pero no se vinculan con la estructura de pricing",
    "Algunas métricas de pricing se revisan anualmente pero sin umbrales de rendimiento definidos",
    "Una revisión trimestral del rendimiento del pricing: win rate por tramo de precio, frecuencia de descuentos y tasa de expansión rastreadas frente a los objetivos",
    "Un sistema analítico de pricing: win rate, tasa de descuento, velocidad de los deals y NRR revisados mensualmente por segmento, con disparadores definidos para la revisión del pricing"
  ]
},
{
  id: 8020, pillar: 8, type: "scale",
  title: "De manera automática, ¿tu pricing captura el crecimiento de valor, por ejemplo vía aumentos de uso o adiciones de asientos, sin requerir renegociación manual?",
  options: [
    "Toda expansión de valor requiere un proceso de renegociación manual",
    "Existen algunos disparadores de expansión pero el proceso comercial es en gran medida manual",
    "La expansión de asientos o uso está prevista contractualmente pero no automatizada",
    "La mayoría de los escenarios de expansión están gobernados por las condiciones contractuales y se auto-facturan sin renegociación",
    "Un modelo de expansión totalmente automatizado: disparadores de uso, de asientos y de funcionalidades auto-facturados sin implicación comercial, revisado trimestralmente para detectar fugas"
  ]
},

/* ===========================================================
   PILAR 9: PRODUCT READINESS (20 PREGUNTAS)
   =========================================================== */

{
  id: 9001, pillar: 9, type: "scale",
  title: "¿Con qué frecuencia emergen carencias de producto en los deals en etapa avanzada, después de la demo, durante el proof-of-concept o la compra?",
  subtitle: "Responde para tu segmento principal de revenue y tu motion GTM principal, salvo que una pregunta pida explícitamente distinguir.",
  options: [
    "Las carencias de producto sorpresa en deals en etapa avanzada son frecuentes: perdemos deals a causa de ellas",
    "Las carencias emergen regularmente en los deals en etapa avanzada y se gestionan caso por caso sin proceso de prevención",
    "Las carencias a veces emergen tarde pero existe un proceso de escalado para gestionarlas",
    "Una etapa de validación técnica pre-deal captura la mayoría de las carencias antes de que lleguen a la etapa avanzada",
    "Un modelo cero sorpresas: la adecuación de la solución se confirma en discovery mediante un marco estructurado: la frecuencia de carencias en etapa avanzada se rastrea trimestralmente y alimenta las mejoras del proceso de venta"
  ]
},
{
  id: 9002, pillar: 9, type: "scale",
  title: "¿Con qué predictibilidad los nuevos clientes alcanzan el primer valor, y cómo se rastrea esto a través de las cohortes de clientes?",
  options: [
    "El time-to-value no se rastrea: no sabemos cuándo los clientes ven tus primeros resultados",
    "El time-to-value varía significativamente sin patrón claro ni responsable",
    "Existe un benchmark de time-to-value pero tu logro es inconsistente",
    "El time-to-value se rastrea por cohorte y se revisa trimestralmente con acciones de mejora documentadas",
    "Un modelo de time-to-value: objetivo definido por segmento, logro rastreado por cliente y tendencias de cohortes revisadas mensualmente en reuniones de CS y Producto"
  ]
},
{
  id: 9003, pillar: 9, type: "scale",
  title: "En un ciclo de venta estándar, ¿qué porcentaje de las demos resulta en un siguiente paso claro, y sabe qué parte de la demo produce ese resultado?",
  options: [
    "El producto no puede demostrarse eficazmente sin una preparación extensa",
    "Existe una demo pero generalmente requiere una personalización significativa o la implicación de un especialista",
    "Una demo de referencia funciona para la mayoría de los casos pero los escenarios complejos requieren soluciones alternativas",
    "Un marco de demo estándar cubre todos los casos de uso principales y se utiliza de manera coherente",
    "Un sistema de demo de alta conversión: específico por segmento, autónomo y rastreado para la tasa de conversión a la siguiente etapa trimestralmente"
  ]
},
{
  id: 9004, pillar: 9, type: "scale",
  title: "En el último trimestre, ¿cuántos escalados de clientes en los primeros 90 días fueron causados por una brecha entre lo que se vendió y lo que se entregó, y esto se rastrea?",
  options: [
    "La realidad postventa difiere frecuentemente de lo que se vendió: causando fricción inmediata y daño a la confianza",
    "Los desajustes entre las promesas comerciales y la realidad de la entrega son habituales y se gestionan caso por caso",
    "Se producen desajustes ocasionalmente pero existe un proceso para gestionar las expectativas antes del traspaso",
    "La experiencia de implementación coincide con las expectativas comerciales en la mayoría de los casos con excepciones documentadas",
    "Las expectativas comerciales y de entrega están alineadas contractualmente: los desajustes se rastrean, las causas raíz se identifican trimestralmente y los patrones recurrentes conducen a cambios en el proceso de venta o de producto"
  ]
},
{
  id: 9005, pillar: 9, type: "scale",
  title: "De manera natural, ¿el producto soporta tu motion GTM elegida, SMB, mid-market o enterprise, en cuanto a despliegue, configuración y time-to-value?",
  options: [
    "El producto crea sistemáticamente fricción con la motion GTM elegida",
    "El producto funciona para la motion GTM pero requiere soluciones alternativas significativas",
    "Adecuación parcial: el producto soporta algunos escenarios pero crea fricción en otros",
    "El producto se adapta bien a la motion GTM con excepciones menores",
    "El producto está diseñado para la motion GTM: despliegue, configuración y calendarios de valor validados frente a las expectativas del segmento objetivo"
  ]
},
{
  id: 9006, pillar: 9, type: "scale",
  title: "¿Con qué coherencia la experiencia de implementación real se corresponde con lo prometido al cliente durante el ciclo de venta?",
  options: [
    "Las expectativas postventa difieren frecuentemente de lo que se vendió: causando fricción inmediata",
    "Los desajustes entre las promesas comerciales y la realidad de la entrega son habituales",
    "Se producen desajustes ocasionalmente y se gestionan caso por caso",
    "La experiencia de implementación coincide con las expectativas comerciales en la mayoría de los casos con excepciones documentadas",
    "Las expectativas comerciales y de entrega están alineadas contractualmente: los desajustes se rastrean y las causas raíz se identifican trimestralmente"
  ]
},
{
  id: 9007, pillar: 9, type: "scale",
  title: "En tus últimos 10 deals, ¿cuántas veces emergió una limitación de producto que no estaba en tu registro de restricciones documentado, y qué sucedió?",
  options: [
    "Las limitaciones de producto no están documentadas: los equipos las descubren durante los deals u onboarding",
    "Algunas limitaciones se conocen de manera informal pero se comunican de forma incoherente entre Sales y CS",
    "Existe un documento de limitaciones pero no se actualiza regularmente ni se utiliza en la cualificación de deals",
    "Las limitaciones de producto están documentadas, actualizadas en cada release e integradas en el onboarding comercial y la cualificación",
    "Un registro explícito de restricciones de producto: mantenido por Producto, revisado con Sales y CS trimestralmente e integrado en los playbooks de cualificación de deals y los scripts de onboarding"
  ]
},
{
  id: 9008, pillar: 9, type: "scale",
  title: "¿Con qué fiabilidad los equipos comerciales pueden confirmar o descalificar la adecuación del producto temprano en un deal, sin requerir validación técnica en etapa avanzada?",
  options: [
    "La adecuación del producto generalmente solo se confirma durante o después del proof-of-concept",
    "La evaluación de la adecuación se retrasa a mitad del ciclo porque los criterios de cualificación son difusos",
    "Existen criterios de cualificación pero no se aplican de manera coherente temprano en el proceso",
    "Un marco de cualificación documentado permite la confirmación temprana de la adecuación en la mayoría de los deals",
    "Un playbook de auto-cualificación: los comerciales pueden confirmar o descalificar la adecuación al final del discovery utilizando criterios definidos y anclados en el producto"
  ]
},
{
  id: 9009, pillar: 9, type: "scale",
  title: "¿En qué medida están bien documentadas tus limitaciones y restricciones de producto, y Sales y CS aplican sistemáticamente ese conocimiento en los deals y durante el onboarding?",
  options: [
    "Las limitaciones de producto no están documentadas: los equipos las descubren durante los deals u onboarding",
    "Algunas limitaciones se conocen pero se comunican de manera incoherente entre Sales y CS",
    "Existe un documento de limitaciones pero no se actualiza regularmente ni se referencia",
    "Las limitaciones de producto están documentadas, actualizadas en cada release e integradas en el onboarding comercial",
    "Un registro explícito de restricciones de producto: mantenido por Producto, revisado por Sales y CS trimestralmente e integrado en los playbooks de cualificación de deals y de onboarding"
  ]
},
{
  id: 9010, pillar: 9, type: "scale",
  title: "Cuando emerge una carencia de producto en un deal en etapa avanzada, ¿cuál es el camino de escalado documentado, y con qué frecuencia seguir ese camino resulta en un deal cerrado vs una pérdida?",
  options: [
    "Sin camino de escalado: las carencias de producto en etapa avanzada se gestionan ad hoc por quien esté disponible",
    "Existe un escalado informal: los comerciales saben a quién llamar: pero los resultados varían considerablemente y no se rastrean",
    "Un proceso de escalado está documentado pero se sigue de manera incoherente, y si mejora los resultados es desconocido",
    "Existe un camino de escalado documentado, se sigue en la mayoría de los casos y los win rates de los deals escalados se revisan trimestralmente",
    "Un sistema de escalado de carencias gobernado: camino documentado, seguido de manera coherente, win rate de los deals escalados rastreado y benchmarked, y las carencias recurrentes alimentan una actualización del registro de restricciones del producto"
  ]
},
{
  id: 9011, pillar: 9, type: "scale",
  title: "¿En qué medida tu onboarding de cliente está automatizado y es autónomo, y qué intervención manual se requiere para completar una configuración estándar?",
  options: [
    "El onboarding es totalmente manual: cada cliente requiere un tiempo significativo de PS o CS",
    "El onboarding es principalmente manual con algunos pasos modelados",
    "Una mezcla de pasos automatizados y manuales: el esfuerzo manual varía significativamente según el cliente",
    "La mayoría de los pasos de onboarding están automatizados con implicación manual limitada a excepciones definidas",
    "El onboarding está completamente automatizado para las configuraciones estándar: los puntos de contacto manuales se rastrean y las tasas de finalización se revisan mensualmente"
  ]
},
{
  id: 9012, pillar: 9, type: "scale",
  title: "Pide independientemente a un comercial y a un manager de CS que nombren las tres principales limitaciones del producto. ¿Sus respuestas coinciden, y cuándo testaste esta alineación por última vez?",
  options: [
    "Sales, CS y Producto tienen visiones significativamente diferentes de las capacidades y limitaciones del producto",
    "Existe una alineación de alto nivel pero se desintegra en los casos límite y las conversaciones cara al cliente",
    "Existe un documento de producto compartido pero no se aplica de manera coherente entre los equipos",
    "Una comprensión de producto unificada mantenida mediante sincronizaciones cross-funcionales regulares y documentación compartida",
    "Una fuente única de verdad del producto: límites de capacidad, limitaciones conocidas y posicionamiento co-poseídos por Sales, CS y Producto, actualizados trimestralmente y testados para la coherencia"
  ]
},
{
  id: 9013, pillar: 9, type: "scale",
  title: "De manera fluida, ¿tu producto se integra en los entornos técnicos existentes de los clientes, y con qué frecuencia los problemas de integración retrasan el time-to-value?",
  options: [
    "Los desafíos de integración son habituales y retrasan o descarrilan frecuentemente los despliegues",
    "La integración funciona en la mayoría de los casos pero requiere un esfuerzo significativo del IT del cliente",
    "La integración es aceptable para los entornos principales pero existen carencias para los stacks secundarios",
    "La cobertura de integración está bien documentada y validada frente a los entornos de clientes objetivo",
    "Un ecosistema de integración certificado: integraciones del stack objetivo validadas, documentación mantenida y tasas de fallo de integración rastreadas en el reporting de CS"
  ]
},
{
  id: 9014, pillar: 9, type: "scale",
  title: "¿Con qué coherencia Sales, CS y Producto comparten una visión común de lo que el producto hace bien y de lo que no hace?",
  options: [
    "Sales, CS y Producto tienen visiones significativamente diferentes de las capacidades del producto",
    "Existe alineación a alto nivel pero se desintegra en los casos límite y las conversaciones con clientes",
    "Existe un documento de posicionamiento de producto compartido pero no se aplica de manera coherente",
    "Se mantiene una comprensión de producto unificada mediante sincronizaciones cross-funcionales regulares y documentación compartida",
    "Una fuente única de verdad del producto: límites de capacidad, limitaciones conocidas y posicionamiento son co-poseídos por Sales, CS y Producto y actualizados trimestralmente"
  ]
},
{
  id: 9015, pillar: 9, type: "scale",
  title: "En el último trimestre, ¿qué porcentaje de los deals de expansión requirió trabajo de engineering, configuración a medida o implicación de PS, y ese porcentaje está mejorando?",
  options: [
    "Más del 80 % de los deals de expansión requirió implicación significativa de engineering o PS: la expansión no está en self-service y nunca lo ha estado",
    "50-80 % de las expansiones requirieron intervención técnica: los caminos de expansión estándar no son fiablemente self-service",
    "20-50 % de las expansiones requirieron trabajo técnico: los escenarios de expansión habituales funcionan en general pero los casos límite aún requieren soporte",
    "Menos del 20 % de los deals de expansión requirió intervención técnica: los escenarios de expansión más habituales están soportados nativamente",
    "Menos del 10 % de las expansiones requiere implicación de engineering o PS: los caminos de expansión no tienen fricción, están documentados y testados frente a patrones reales de clientes: fugas revisadas trimestralmente"
  ]
},
{
  id: 9016, pillar: 9, type: "scale",
  title: "¿En qué medida tu documentación de producto y tus materiales de enablement son completos y están al día, y los equipos GTM los encuentran suficientes sin escalar a Producto?",
  options: [
    "La documentación falta, está obsoleta o es inaccesible",
    "Existe documentación pero es incompleta y requiere aclaraciones frecuentes del equipo de Producto",
    "La documentación cubre los casos de uso principales pero existen carencias para los escenarios avanzados",
    "Documentación completa que cubre los casos de uso principales y secundarios, actualizada en cada release",
    "Un sistema de documentación best-in-class: completo, versionado, buscable y validado por los equipos GTM para la suficiencia trimestralmente"
  ]
},
{
  id: 9017, pillar: 9, type: "scale",
  title: "¿En qué medida el proceso de envío de feedback de producto por parte de los equipos GTM está estructurado, y cómo rastrea si influye en el roadmap?",
  options: [
    "Sin proceso de feedback: los equipos GTM escalan a Producto por canales informales",
    "Existe un proceso de feedback ad-hoc pero el seguimiento del input al resultado está ausente",
    "Existe un proceso estructurado de envío de feedback pero el impacto en el roadmap es difuso",
    "Un bucle de feedback formal: inputs rastreados desde el envío hasta la revisión del roadmap con visibilidad de los resultados para quienes lo envían",
    "Un sistema de feedback GTM-a-Producto en bucle cerrado: inputs registrados, revisados trimestralmente, priorizados de manera transparente y resultados reportados a los equipos GTM"
  ]
},
{
  id: 9018, pillar: 9, type: "scale",
  title: "¿En qué medida las decisiones de roadmap están alimentadas directamente por señales GTM y de clientes validadas, en lugar de por hipótesis internas?",
  options: [
    "El roadmap está guiado por las prioridades de engineering y la intuición del leadership",
    "Las peticiones de clientes se consideran pero la ponderación es informal y opaca",
    "Los inputs de clientes y mercado alimentan la planificación pero no se puntúan sistemáticamente",
    "Las decisiones de roadmap documentan las evidencias de mercado y clientes detrás de cada prioridad",
    "Un roadmap basado en evidencias: cada decisión significativa tiene una señal de mercado y cliente documentada con frecuencia, impacto en revenue y correlación con la retención"
  ]
},
{
  id: 9019, pillar: 9, type: "scale",
  title: "En el último trimestre, ¿qué porcentaje de los nuevos deals requirió una cláusula no estándar, un compromiso de entrega a medida o una excepción a tu proceso estándar, y esa tasa se rastrea?",
  options: [
    "Las excepciones son la norma: la mayoría de los deals requieren alguna forma de cláusula a medida o acomodación de entrega",
    "Una minoría significativa de deals requiere excepciones, pero la tasa no se rastrea y los factores son difusos",
    "La tasa de excepción se rastrea pero no se revisa formalmente: si mejora o empeora es desconocido",
    "La tasa de excepción se rastrea trimestralmente, se revisa por el leadership y los factores se analizan para reducir la recurrencia",
    "Una disciplina de excepción gobernada: las condiciones y entrega estándar se aplican a la gran mayoría de los deals, la tasa de excepción es un KPI gestionado y cada excepción se registra, se aprueba y se identifica su causa raíz"
  ]
},
{
  id: 9020, pillar: 9, type: "scale",
  title: "¿Con qué coherencia tu producto puede venderse, implementarse y escalarse sin requerir excepciones a las condiciones estándar o a los procesos de entrega?",
  options: [
    "Las excepciones son la norma: prácticamente cada deal requiere alguna forma de acomodación a medida",
    "Las excepciones son frecuentes y se gestionan caso por caso sin gobernanza documentada",
    "Algunos escenarios de excepción están documentados pero otros todavía requieren resolución ad-hoc",
    "Las excepciones son raras y gobernadas por un proceso de excepción documentado con aprobación del leadership",
    "Un modelo estándar sin excepciones: las condiciones y entrega estándar se aplican de manera coherente, las excepciones se rastrean y revisan para una resolución sistémica"
  ]
},

/* ===========================================================
   PILAR 10: DATA & INSIGHTS (20 PREGUNTAS)
   =========================================================== */

{
  id: 10001, pillar: 10, type: "scale",
  title: "En los últimos 30 días, nombre una decisión GTM que los datos cambiaron. ¿Fue fácil responder?",
  subtitle: "Responde para tu segmento principal de revenue y tu motion GTM principal, salvo que una pregunta pida explícitamente distinguir.",
  options: [
    "No podemos nombrar ninguna: se producen datos pero no influyen en las decisiones",
    "Los datos se revisan en reunión pero raramente cambian la conclusión: la intuición domina",
    "Los datos influyen ocasionalmente en las decisiones pero no podemos señalar un ejemplo reciente específico",
    "Podemos nombrar dos o tres decisiones recientes directamente influidas por los datos, con una justificación documentada",
    "Las decisiones guiadas por datos son la norma: cada decisión GTM importante se documenta con un respaldo de datos, y los casos en que los datos anularon la intuición se rastrean como señales positivas de gobernanza"
  ]
},
{
  id: 10002, pillar: 10, type: "scale",
  title: "En tus tres últimas revisiones de leadership, ¿cuántos minutos se dedicaron a debatir las definiciones de métricas en lugar de actuar sobre ellas, y esa cifra representa una mejora?",
  options: [
    "La mayor parte del tiempo de revisión se consume en disputas de métricas: los equipos no confían en un conjunto de definiciones compartido",
    "Los debates de métricas frecuentemente ralentizan las decisiones y no hay evidencia de que la situación mejore",
    "Las definiciones de métricas están principalmente alineadas, pero las disputas recurrentes aún consumen un tiempo de revisión significativo",
    "Las definiciones de métricas están gobernadas, las disputas son limitadas y el tiempo de revisión se dedica principalmente a la interpretación y a la acción",
    "Un registro de métricas con fuente única gobierna todas las revisiones de leadership: los debates sobre definiciones son raros, rastreados cuando ocurren y con tendencia descendente"
  ]
},
{
  id: 10003, pillar: 10, type: "scale",
  title: "¿Con qué constancia se utilizan los datos para guiar las decisiones GTM, y puede dar un ejemplo de los últimos 30 días en que los datos cambiaron un plan?",
  options: [
    "El instinto guía la mayoría de las decisiones: se producen datos pero no se utilizan",
    "Los datos se revisan en reunión pero raramente cambian la conclusión",
    "Los datos influyen ocasionalmente en las decisiones pero la intuición todavía domina",
    "Los datos son un input principal para la mayoría de las decisiones GTM con una justificación de decisión documentada",
    "Una cultura de decisión guiada por datos: decisiones documentadas con un respaldo de datos y los casos en que los datos anularon la intuición rastreados como señal positiva"
  ]
},
{
  id: 10004, pillar: 10, type: "scale",
  title: "Ahora mismo, sin extracción manual de datos: ¿puedes enunciar tu ratio de cobertura de pipeline, el pipeline ponderado por etapa y el número de deals en riesgo este trimestre?",
  options: [
    "No: estas cifras requieren un ensamblaje manual o no están disponibles en absoluto",
    "Algunas cifras están disponibles, pero al menos una requiere trabajo manual o no es fiable",
    "Las métricas principales de pipeline existen en los paneles, pero la confianza en la exactitud o frescura es mixta",
    "Estas métricas están disponibles en casi tiempo real y se utilizan en las revisiones operativas semanales",
    "Una capa de inteligencia de pipeline gobernada: cobertura, valor de etapa ponderado y deals en riesgo disponibles bajo demanda, fiables para el leadership y vinculados a umbrales de acción documentados"
  ]
},
{
  id: 10005, pillar: 10, type: "scale",
  title: "En los dos últimos trimestres, ¿cuántos fallos de revenue fueron predichos por un indicador adelantado más de 60 días antes, vs descubiertos solo al cierre del trimestre?",
  options: [
    "Ninguno fue predicho temprano: los fallos se descubrieron cuando el revenue ya se había perdido",
    "Existían algunas señales de alerta, pero eran informales y no estaban vinculadas a un sistema de indicadores adelantados definido",
    "Algunos fallos fueron predichos temprano, pero la calidad de las señales y el seguimiento eran incoherentes",
    "Los indicadores adelantados predijeron varios fallos con suficiente antelación para actuar, y esos casos se revisaron tras el trimestre",
    "Existe un sistema de señales predictivas: las alertas tempranas se registran, se les hace seguimiento y se revisan frente a los resultados, con el ratio de fallos detectados temprano vs tarde rastreado en el tiempo"
  ]
},
{
  id: 10006, pillar: 10, type: "scale",
  title: "¿Con qué precisión mides la eficiencia GTM, y puedes calcular el retorno del CAC, el burn multiple y la eficiencia del pipeline por motion?",
  options: [
    "La eficiencia GTM no se mide: rastreamos el revenue pero no el coste del revenue",
    "El CAC total se rastrea pero la eficiencia por motion o segmento es desconocida",
    "Existen las métricas de eficiencia principales pero se revisan con poca frecuencia o de manera incoherente",
    "CAC, retorno de la inversión y eficiencia del pipeline rastreados por motion y revisados mensualmente",
    "Un P&L de eficiencia GTM: CAC, retorno, burn multiple y eficiencia del pipeline por motion, segmento y comercial revisados mensualmente en reuniones de leadership"
  ]
},
{
  id: 10007, pillar: 10, type: "scale",
  title: "¿Con qué rigor realiza análisis de cohortes, y puede comparar las tasas de retención, expansión y churn a través de las cohortes de adquisición?",
  options: [
    "Sin análisis de cohortes: el rendimiento del cliente no se rastrea en el tiempo",
    "Existe un seguimiento básico de cohortes pero no se revisa ni se utiliza en la planificación",
    "Los datos de cohortes están disponibles pero el análisis es superficial y poco frecuente",
    "Revisiones trimestrales de cohortes que comparan retención, NRR y expansión por período de adquisición",
    "Un sistema completo de inteligencia de cohortes: retención, expansión y retorno rastreados por cohorte, revisados trimestralmente y alimentando la estrategia de ICP y DG"
  ]
},
{
  id: 10008, pillar: 10, type: "scale",
  title: "Ahora mismo, sin extracción manual de datos: ¿puedes ver la distribución por etapas de tu pipeline, los indicadores de salud y el ratio de cobertura, y confía en esas cifras?",
  options: [
    "La visibilidad sobre el pipeline es limitada: una vista en tiempo real requiere ensamblaje manual de los datos",
    "El pipeline es visible en el CRM pero la calidad, la salud y la exactitud de las etapas no son fiables",
    "Existen paneles de pipeline pero los problemas de higiene de datos reducen la confianza en la vista",
    "Una vista de pipeline en tiempo real con distribución por etapas, indicadores de salud y ratio de cobertura rastreados",
    "Un sistema de inteligencia de pipeline gobernado: distribución por etapas, health score, cobertura y velocidad rastreados en tiempo real y revisados en reuniones semanales de pipeline"
  ]
},
{
  id: 10009, pillar: 10, type: "scale",
  title: "¿Con qué nivel de granularidad puede segmentar los datos de rendimiento GTM, por segmento, motion, comercial y cohorte, para identificar causas raíz en lugar de medias?",
  options: [
    "Los datos de rendimiento solo están disponibles en agregado: la segmentación no es posible",
    "Es posible cierta segmentación pero requiere un trabajo manual significativo sobre los datos",
    "Los segmentos principales están disponibles pero el filtrado cruzado por motion y comercial es limitado",
    "El rendimiento puede segmentarse por segmento, motion y comercial con datos disponibles en los paneles",
    "Un modelo de segmentación multidimensional: rendimiento desglosado por segmento, motion, comercial, cohorte y geografía, revisado mensualmente a nivel de equipo y de leadership"
  ]
},
{
  id: 10010, pillar: 10, type: "scale",
  title: "¿Con qué precisión tu equipo pronostica el revenue del próximo trimestre, y cuál es tu desviación típica entre el compromiso y el resultado final?",
  options: [
    "Sin forecasting formal: el revenue trimestral es una sorpresa",
    "Existe un forecasting pero la desviación frente al real suele ser superior al 20 %",
    "Se intentan previsiones pero la desviación es incoherente y no se revisa sistemáticamente",
    "Una metodología de forecasting documentada con seguimiento de desviaciones y retrospectiva post-trimestre",
    "Un sistema de forecasting gobernado: desviación inferior al 10 % de manera constante, metodología revisada trimestralmente y precisión commit-a-cierre rastreada semanalmente"
  ]
},
{
  id: 10011, pillar: 10, type: "scale",
  title: "¿Cuál es el nivel de avance de tu uso de la analítica predictiva en el GTM, y puedes modelar el resultado probable de un deal o una campaña DG antes de su cierre?",
  options: [
    "Sin analítica predictiva: todas las decisiones se basan en datos históricos o en la intuición",
    "Existe un análisis básico de tendencias pero no se utiliza ningún modelo prospectivo",
    "El scoring predictivo se utiliza en una función pero no se aplica en todo el GTM",
    "Se utilizan modelos predictivos para el lead scoring, el riesgo de churn y la calidad del pipeline en todo el GTM",
    "Una capa completa de inteligencia predictiva: scoring de deals, predicción de churn y modelado de campañas DG integrados en las operaciones GTM diarias"
  ]
},
{
  id: 10012, pillar: 10, type: "scale",
  title: "¿En qué medida tus paneles GTM son accionables, y cuando un panel muestra un problema, hay un responsable claro y una próxima acción?",
  options: [
    "Existen paneles pero no se revisan ni se explotan",
    "Los paneles se revisan pero generan discusiones en lugar de decisiones",
    "La mayoría de las métricas tienen responsables pero el seguimiento de las acciones es incoherente",
    "Los paneles desencadenan acciones documentadas con responsables y fechas revisadas semanalmente",
    "Los paneles son herramientas de decisión: cada métrica tiene un responsable, un umbral y un playbook documentado para cuando se cruza el umbral"
  ]
},
{
  id: 10013, pillar: 10, type: "scale",
  title: "¿En qué medida tus revisiones de rendimiento GTM están guiadas por datos, y qué porcentaje del tiempo se dedica al análisis vs a la anécdota?",
  options: [
    "Las revisiones de rendimiento están guiadas por anécdotas: los datos raramente se presentan o se cuestionan",
    "Los datos están presentes en las revisiones pero la discusión está dominada por la narrativa y la intuición",
    "La mayoría de las revisiones utilizan datos pero la profundidad del análisis varía significativamente según el manager",
    "Un marco de datos estándar gobierna todas las revisiones de rendimiento con materiales de pre-lectura requeridos",
    "Las revisiones de rendimiento están totalmente guiadas por datos: pre-lectura estandarizada, análisis estructurado y registro de decisiones producido en cada sesión"
  ]
},
{
  id: 10014, pillar: 10, type: "scale",
  title: "De manera sistemática, ¿cómo identifica las tendencias de rendimiento, y con qué rapidez las señales de tendencia llegan a las personas que pueden actuar sobre ellas?",
  options: [
    "Las tendencias se identifican después de que ya se hayan convertido en problemas",
    "La conciencia de las tendencias es informal: detectada por líderes experimentados en reunión",
    "Existe cierto seguimiento de tendencias pero la velocidad señal-a-acción es lenta",
    "Las alertas de tendencia están automatizadas y se entregan a los responsables dentro de un plazo definido",
    "Un sistema proactivo de inteligencia de tendencias: señales detectadas algorítmicamente, entregadas a los responsables en tiempo real y tiempo de respuesta rastreado como métrica de gobernanza"
  ]
},
{
  id: 10015, pillar: 10, type: "scale",
  title: "De manera sistemática, ¿cómo haces benchmark de tu rendimiento GTM frente a estándares sectoriales externos, y cuándo utilizó benchmarks por última vez para desafiar una decisión?",
  options: [
    "Sin benchmarking: evaluamos el rendimiento de manera aislada",
    "El leadership tiene una idea aproximada de las medias sectoriales pero sin comparación formal",
    "Una comparación anual con benchmarks tiene lugar pero raramente cambia nuestra forma de operar",
    "Los benchmarks externos están integrados en la planificación trimestral y las revisiones de rendimiento",
    "Un programa de benchmarking continuo: fuentes de datos externas integradas en los paneles, utilizadas para desafiar las hipótesis en la planificación y revisadas con el board"
  ]
},
{
  id: 10016, pillar: 10, type: "scale",
  title: "¿Con qué precisión puede predecir el revenue del próximo trimestre, y cuál es el margen de error en tus cuatro últimos forecasts trimestrales?",
  options: [
    "La predicción del revenue es imposible: la desviación es superior al 25 %",
    "La precisión de los forecasts es baja: la desviación es típicamente del 15-25 %",
    "El forecasting es a veces exacto pero la desviación intratrimestral es significativa",
    "Precisión de los forecasts inferior al 10 % en la mayoría de los trimestres con un proceso documentado de revisión de desviaciones",
    "Precisión de los forecasts inferior al 5 % de manera constante: historial de cuatro trimestres documentado y revisado con el board"
  ]
},
{
  id: 10017, pillar: 10, type: "scale",
  title: "De manera sistemática, ¿cómo utiliza los datos de rendimiento para reasignar los recursos GTM, presupuesto, headcount o foco, durante el año?",
  options: [
    "Los recursos se fijan en la planificación anual y no se ajustan durante el año",
    "La reasignación ocurre ocasionalmente pero basada en las preferencias de los directivos en lugar de en los datos",
    "Existen revisiones durante el año pero los datos raramente guían cambios significativos de recursos",
    "Una revisión documentada de recursos durante el año utiliza los datos de rendimiento para reasignar el presupuesto y el foco",
    "Un modelo de asignación de recursos basado en el rendimiento continuo: las motions con bajo rendimiento se desfinancian y las motions con alto ROI se escalan en tiempo real"
  ]
},
{
  id: 10018, pillar: 10, type: "scale",
  title: "¿Con qué precisión calcula el LTV, y tu modelo de LTV tiene en cuenta la expansión, el churn y el margen por segmento?",
  options: [
    "El LTV no se calcula: estimamos el valor únicamente sobre la base del ARR",
    "Existe una estimación básica del LTV pero no tiene en cuenta la expansión o el margen",
    "El LTV se calcula a nivel agregado pero no se segmenta ni se actualiza regularmente",
    "El LTV se calcula por segmento, integrando retención, expansión y margen bruto",
    "Un modelo de LTV completo: a nivel de segmento, actualizado trimestralmente, integrando probabilidad de expansión, riesgo de churn y margen, y utilizado en el scoring de ICP y la fijación de objetivos de CAC"
  ]
},
{
  id: 10019, pillar: 10, type: "scale",
  title: "De manera directa, ¿los datos e insights guían la mejora del rendimiento GTM, y puede citar un cambio específico realizado en el último trimestre basado en los datos?",
  options: [
    "Los datos no guían los cambios: las revisiones de rendimiento son únicamente informativas",
    "Los datos a veces hacen emerger insights pero raramente conducen a acciones documentadas",
    "Los datos influyen en algunas decisiones pero el seguimiento es incoherente",
    "Un proceso trimestral de mejora guiado por datos produce acciones documentadas con responsables",
    "La mejora guiada por datos es una norma cultural: cada trimestre produce cambios documentados trazables a una señal de datos específica, con seguimiento de los resultados"
  ]
},
{
  id: 10020, pillar: 10, type: "scale",
  title: "De manera temprana y fiable, ¿las señales de datos identifican el riesgo de churn, y cuál es tu plazo medio entre la detección del riesgo y la cancelación por parte del cliente?",
  options: [
    "El churn se detecta en el momento de la llamada de cancelación o después: no existe alerta temprana",
    "Se notan algunas señales en los últimos 30 días antes del churn",
    "Las señales de riesgo se detectan 60-90 días antes del churn en algunas cuentas",
    "Un modelo de health score identifica la mayoría de las cuentas en riesgo 90 días o más antes del churn",
    "Un sistema predictivo de churn: riesgo detectado 120 días o más antes de la cancelación, intervención disparada automáticamente y tasa de salvamento rastreada por tier de riesgo"
  ]
},

/* ===========================================================
   PILAR 11: ENABLEMENT (20 PREGUNTAS)
   =========================================================== */

{
  id: 11001, pillar: 11, type: "scale",
  title: "¿En qué medida tu programa de onboarding para los nuevos colaboradores GTM está estructurado y se entrega de manera coherente, y cómo se rastrean la finalización y la calidad?",
  subtitle: "Responde para tu segmento principal de revenue y tu motion GTM principal, salvo que una pregunta pida explícitamente distinguir.",
  options: [
    "Sin onboarding estructurado: los recién llegados aprenden por observación y ensayo",
    "Existe un proceso de onboarding informal pero la cobertura y la calidad varían según el manager",
    "Existe un currículum de onboarding pero la finalización y la calidad no se rastrean sistemáticamente",
    "Un programa de onboarding estructurado con seguimiento de finalización de hitos por recluta",
    "Un sistema de onboarding totalmente gobernado: currículum, hitos, validaciones del manager y rendimiento a 30-60-90 días revisados para cada nuevo colaborador"
  ]
},
{
  id: 11002, pillar: 11, type: "scale",
  title: "¿Con qué eficacia los nuevos colaboradores GTM alcanzan la plena productividad, y cómo rastrea el tiempo de rampa vs el objetivo?",
  options: [
    "El tiempo de rampa no se rastrea: no sabemos cuánto tardan los recién llegados en contribuir",
    "Existen expectativas de rampa de manera informal pero el time-to-productivity real no se mide",
    "El tiempo de rampa se rastrea pero no se compara con un objetivo o benchmark definido",
    "El time-to-productivity se rastrea por cohorte frente a un objetivo definido, revisado trimestralmente",
    "Un modelo de eficacia de rampa: time-to-first-deal y time-to-quota rastreados por recluta, benchmark frente a las cohortes anteriores y alimentando la mejora del onboarding"
  ]
},
{
  id: 11003, pillar: 11, type: "scale",
  title: "¿Con qué constancia tu equipo recibe un desarrollo estructurado de habilidades, y la formación está vinculada a las carencias de rendimiento observadas?",
  options: [
    "Sin formación continua: el desarrollo es autodirigido y no está soportado",
    "Tienen lugar formaciones ad-hoc cuando surge un problema, no de manera proactiva",
    "Existe un calendario de formación pero el contenido es genérico y no está vinculado a los datos de rendimiento",
    "El desarrollo de habilidades está vinculado a las carencias de rendimiento de los comerciales identificadas en coaching y revisiones de llamadas",
    "Un sistema de aprendizaje vinculado al rendimiento: carencias de habilidades identificadas semanalmente en coaching, formación prescrita en consecuencia y mejora rastreada frente a los resultados de deals"
  ]
},
{
  id: 11004, pillar: 11, type: "scale",
  title: "¿En qué medida tus playbooks de venta son completos, están al día y se utilizan, y cómo sabes que los comerciales los consultan realmente en los deals activos?",
  options: [
    "Sin playbooks de venta: los comerciales se apoyan en la experiencia y el juicio personal",
    "Existen playbooks pero fueron actualizados por última vez hace más de un año y raramente se consultan",
    "Los playbooks están disponibles pero el uso en los deals activos no se rastrea",
    "Los playbooks se actualizan trimestralmente y el uso se rastrea vía la plataforma de enablement",
    "Un sistema de playbooks vivo: actualizado trimestralmente, uso rastreado por etapa del deal y correlación playbook-a-win-rate revisada mensualmente"
  ]
},
{
  id: 11005, pillar: 11, type: "scale",
  title: "¿Con qué facilidad los comerciales GTM pueden encontrar y utilizar el contenido de enablement que necesitan, y cómo mides la accesibilidad del contenido?",
  options: [
    "El contenido de enablement está disperso entre múltiples sistemas sin punto de acceso central",
    "Existe un repositorio central pero la búsqueda y la navegación son mediocres",
    "El contenido está organizado pero los comerciales escalan frecuentemente para encontrar lo que necesitan",
    "Una plataforma de enablement bien organizada donde los comerciales pueden encontrar contenido por rol y etapa del deal",
    "Una plataforma de enablement estructurada y buscable: contenido indexado por rol, etapa y persona, adopción rastreada y tasa de éxito de búsqueda revisada trimestralmente"
  ]
},
{
  id: 11006, pillar: 11, type: "scale",
  title: "De manera específica, ¿el contenido de enablement está adaptado a cada rol GTM, AE, SDR, CS, AM, en lugar de producirse como contenido genérico compartido?",
  options: [
    "Todo el contenido de enablement es genérico: los roles no están diferenciados",
    "Existe contenido específico por rol pero las carencias son significativas",
    "Los roles principales tienen contenido dedicado pero los roles secundarios están poco atendidos",
    "Existen caminos de enablement específicos por rol para todos los roles GTM principales",
    "Una arquitectura de enablement específica por rol: cada rol GTM tiene un currículum dedicado, evaluado independientemente y actualizado sobre la base de datos de rendimiento específicos del rol"
  ]
},
{
  id: 11007, pillar: 11, type: "scale",
  title: "¿Con qué rigor los comerciales son certificados antes de interactuar con prospectos en directo, y qué ocurre cuando un comercial suspende la certificación?",
  options: [
    "Sin proceso de certificación: los comerciales empiezan a vender desde el primer día sin evaluación",
    "Existe una validación informal pero los estándares son incoherentes entre los managers",
    "Existe una checklist de certificación pero la finalización se rastrea de manera informal",
    "Un proceso de certificación estructurado con criterios de aprobado/suspendido y caminos de remediación",
    "Una puerta de certificación rigurosa: los comerciales no pueden interactuar con prospectos en directo sin aprobarla, los intentos fallidos desencadenan una remediación estructurada y las tasas de certificación se rastrean"
  ]
},
{
  id: 11008, pillar: 11, type: "scale",
  title: "¿En qué medida el coaching comercial entregado por tus managers está estructurado y es coherente, y cómo se rastrea la calidad del coaching?",
  options: [
    "El coaching es completamente informal: los managers dan feedback cuando se les pide",
    "El coaching tiene lugar en 1:1 pero sin marco definido ni cadencia",
    "Existe un marco de coaching pero la calidad y la coherencia varían significativamente según el manager",
    "Un marco de coaching estandarizado aplicado de manera coherente a todos los managers, con resultados de sesión documentados",
    "Un sistema operativo de coaching: revisiones de llamadas, scoring de competencias, documentación de sesión e impacto del coaching rastreado frente al rendimiento de los comerciales semanalmente"
  ]
},
{
  id: 11009, pillar: 11, type: "scale",
  title: "¿En qué medida tu biblioteca de materiales comerciales y de marketing es completa y está al día, y los comerciales la utilizan en los deals activos?",
  options: [
    "Los materiales son mínimos, están obsoletos o no se utilizan en los deals",
    "Existe un conjunto de materiales pero la mayoría de los comerciales usan sus propios materiales",
    "Los materiales estándar están disponibles pero el uso en los deals en curso no se mide",
    "Una biblioteca de materiales al día organizada por etapa del deal y caso de uso, con seguimiento de adopción",
    "Un sistema estratégico de materiales: indexado por etapa del deal, versionado y adopción correlacionada con el win rate trimestralmente"
  ]
},
{
  id: 11010, pillar: 11, type: "scale",
  title: "¿El Time-to-First-Deal se rastrea como KPI principal de rampa para los nuevos colaboradores, y cómo se compara con tu objetivo definido?",
  options: [
    "El Time-to-First-Deal no se rastrea",
    "Se rastrea de manera informal pero no se compara con un objetivo definido",
    "Se rastrea y se reporta pero no se utiliza para guiar las decisiones de onboarding o coaching",
    "Rastreado formalmente como un KPI, comparado con un objetivo y revisado en retrospectivas de nuevos colaboradores",
    "Un KPI de rampa gobernado: Time-to-First-Deal rastreado por recluta, benchmark trimestralmente y alimentando las actualizaciones del currículum de onboarding"
  ]
},
{
  id: 11011, pillar: 11, type: "scale",
  title: "De manera sistemática, ¿cómo mides si los programas de enablement producen una mejora medible en los resultados de los deals?",
  options: [
    "La eficacia del enablement no se mide: los programas se ejecutan y se asume que funcionan",
    "La participación se rastrea pero el impacto en el rendimiento no se evalúa",
    "Se observa cierta correlación entre la finalización de la formación y el rendimiento de manera informal",
    "Los programas de enablement se evalúan para la mejora de habilidades y el impacto en el win rate trimestralmente",
    "Un modelo de ROI del enablement: finalización de programas, mejora del score de competencias y correlación con los resultados de deals rastreados y revisados mensualmente"
  ]
},
{
  id: 11012, pillar: 11, type: "scale",
  title: "¿Con qué constancia y frecuencia los materiales de enablement se actualizan para reflejar los cambios de producto, las evoluciones del mercado y los movimientos competitivos?",
  options: [
    "Los materiales raramente se actualizan: el contenido queda obsoleto pocos meses después de crearlo",
    "Las actualizaciones tienen lugar de manera reactiva cuando algo es claramente incorrecto",
    "Existe un ciclo de actualización anual aproximado pero la frescura es incoherente entre los assets",
    "Un ciclo de actualización trimestral definido para todos los assets de enablement principales con responsabilidad del propietario",
    "Un sistema de actualización continua: materiales revisados con una cadencia definida, disparados por los releases de producto y los cambios competitivos, con control de versiones y fechas de caducidad"
  ]
},
{
  id: 11013, pillar: 11, type: "scale",
  title: "Después de tus tres últimos releases de producto: ¿con qué rapidez se actualizaron los materiales de enablement, y la actualización se disparó proactivamente o solo después de que los comerciales señalaran carencias en los deals?",
  options: [
    "Los materiales de enablement no se actualizaron a tiempo: los comerciales descubrieron carencias en deals en curso",
    "Las actualizaciones tuvieron lugar de manera reactiva tras las quejas del terreno, sin proceso definido vinculado a los releases",
    "Los materiales se actualizaron para algunos releases, pero el timing y la completitud fueron incoherentes",
    "Las actualizaciones de enablement están vinculadas a los releases de producto y generalmente se completan antes de la exposición al terreno",
    "Un sistema de enablement vinculado a los releases: materiales actualizados proactivamente en un calendario definido, preparación del terreno verificada antes del release y tiempo de retraso rastreado después de cada release"
  ]
},
{
  id: 11014, pillar: 11, type: "scale",
  title: "De manera específica, ¿cómo se forma y entrena a tus comerciales para gestionar las objeciones más habituales que bloquean deals?",
  options: [
    "Sin formación en tratamiento de objeciones: los comerciales se montan sus propias respuestas con el tiempo",
    "Las objeciones habituales se cubren en el onboarding pero no se refrescan ni se practican",
    "Existe una guía de objeciones pero no está vinculada a las revisiones de deals en curso ni a los juegos de rol",
    "El tratamiento de objeciones se forma en el onboarding, se refuerza en sesiones de coaching y se actualiza a partir de los datos win/loss",
    "Un sistema estructurado de formación en objeciones: objeciones habituales por segmento catalogadas, respuestas testadas en coaching en directo y eficacia del tratamiento rastreada por tipo de objeción"
  ]
},
{
  id: 11015, pillar: 11, type: "scale",
  title: "En tu última revisión de pipeline, para los deals que se han estancado o se han perdido: ¿cuántos habían tenido tus materiales de enablement consultados en los 30 días anteriores, y rastreas esto?",
  options: [
    "El enablement es totalmente preventa: no existen materiales para los deals en curso",
    "Los comerciales pueden acceder a materiales generales pero no hay consejos específicos por deal disponibles",
    "Existe enablement por etapa del deal pero se organiza y consulta de manera incoherente",
    "El enablement indexado por etapa del deal está disponible y se referencia activamente en las deal reviews",
    "Un sistema de enablement de ejecución de deals: contenido específico por etapa, herramientas y caminos de escalado organizados en el CRM y revisados para el uso mensualmente"
  ]
},
{
  id: 11016, pillar: 11, type: "scale",
  title: "¿Hasta qué punto tus comerciales GTM entienden el producto, y pueden tratar las preguntas técnicas sin implicar a producto o a engineering?",
  options: [
    "Los comerciales tienen un conocimiento superficial del producto: la mayoría de las preguntas técnicas requieren escalado",
    "Algunos comerciales tratan bien las preguntas técnicas pero los niveles de conocimiento varían considerablemente",
    "La mayoría de los comerciales pueden tratar las preguntas estándar pero los escenarios complejos requieren soporte de especialista",
    "El conocimiento del producto está certificado y se refresca en cada release mayor",
    "Un programa continuo de maestría de producto: condicionado por la certificación, evaluado regularmente y refrescado en cada release con scores de conocimiento de los comerciales rastreados por trimestre"
  ]
},
{
  id: 11017, pillar: 11, type: "scale",
  title: "En el último trimestre, para cada comercial con bajo rendimiento: ¿se identificó una carencia de competencia específica y se prescribió una formación dirigida, o se aplicó a todos el mismo currículum genérico?",
  options: [
    "El bajo rendimiento no se vincula a un diagnóstico de carencia de competencias específica: el soporte es genérico o está ausente",
    "Los managers a veces identifican las carencias probables, pero la formación sigue siendo principalmente genérica e incoherente",
    "Algunos colaboradores con bajo rendimiento reciben desarrollo dirigido, pero el proceso no es sistemático entre managers",
    "Los comerciales con bajo rendimiento reciben un diagnóstico de carencia de competencias y planes de formación dirigidos con seguimiento del manager",
    "Un sistema de enablement vinculado al rendimiento: cada colaborador con bajo rendimiento recibe un diagnóstico de carencia de competencias, una formación dirigida prescrita y seguimiento de los resultados frente a la carencia diagnosticada"
  ]
},
{
  id: 11018, pillar: 11, type: "scale",
  title: "De manera sistemática, ¿cómo utiliza escenarios reales y juegos de rol estructurados para desarrollar las competencias de los comerciales antes de que se enfrenten a los compradores?",
  options: [
    "Sin juegos de rol ni práctica de escenarios: los comerciales aprenden por la experiencia de los deals en directo",
    "Tienen lugar juegos de rol ocasionales en formación pero no están estructurados ni evaluados",
    "Los juegos de rol forman parte del onboarding pero no se utilizan de manera coherente en el coaching continuo",
    "Juegos de rol estructurados con escenarios definidos y scoring utilizados en el onboarding y los refrescos trimestrales",
    "Un sistema de práctica inmersivo: juegos de rol grabados revisados por los managers, puntuados frente a rúbricas y utilizados para rastrear el desarrollo de competencias en el tiempo"
  ]
},
{
  id: 11019, pillar: 11, type: "scale",
  title: "De manera directa y medible, ¿tu función de enablement contribuye a mejoras del win rate, del tiempo de rampa y de la constancia del pipeline?",
  options: [
    "La contribución del enablement al rendimiento no se mide ni se rastrea",
    "Evidencias anecdóticas sugieren que el enablement ayuda pero ningún dato respalda esa afirmación",
    "Se rastrean algunos indicadores adelantados de impacto del enablement pero no se revisan formalmente",
    "El ROI del enablement se revisa trimestralmente: tiempo de rampa, win rate por finalización de formación y uso de playbooks rastreados",
    "El enablement es una función de revenue medida: win rate, tiempo de rampa y mejoras de velocidad de deals atribuidos a los programas de enablement y revisados mensualmente con el leadership de Sales"
  ]
},
{
  id: 11020, pillar: 11, type: "scale",
  title: "¿Con qué constancia y rapidez tu organización gestiona a los comerciales con bajo rendimiento, y cuál es el plazo medio entre la identificación del bajo rendimiento y tu resolución?",
  options: [
    "El bajo rendimiento se tolera indefinidamente: no existe una gestión sistemática del rendimiento",
    "Los colaboradores con bajo rendimiento acaban siendo abordados pero el proceso es incoherente y lento",
    "Existe un proceso formal de PIP pero la activación se retrasa y los resultados son impredecibles",
    "El bajo rendimiento se identifica dentro del trimestre y se aborda mediante un plan de mejora documentado en menos de 30 días",
    "Los indicadores adelantados señalan el bajo rendimiento temprano, los planes de mejora se activan en menos de 30 días y los resultados se rastrean de manera coherente"
  ]
},

/* ===========================================================
   PILAR 12: ALIGNMENT & GOVERNANCE (20 PREGUNTAS)
   =========================================================== */

{
  id: 12001, pillar: 12, type: "scale",
  title: "Si pidiera ahora mismo a cinco comerciales GTM de primera línea que nombraran las tres principales prioridades de este trimestre, ¿cuántos darían la misma respuesta?",
  subtitle: "Responde para tu segmento principal de revenue y tu motion GTM principal, salvo que una pregunta pida explícitamente distinguir.",
  options: [
    "Menos de dos estarían de acuerdo: las prioridades son desconocidas o contradictorias a nivel de primera línea",
    "Dos o tres podrían alinearse globalmente pero con variaciones significativas en la formulación y el orden",
    "La mayoría nombraría prioridades similares pero sin lenguaje preciso ni orden coherente",
    "Cuatro o cinco darían la misma respuesta: las prioridades se comunican y se testan en reuniones de equipo",
    "Los cinco darían respuestas idénticas: la cascada de prioridades se verifica mediante un control estructurado trimestral de comprensión en primera línea, y el desalineamiento desencadena una intervención de comunicación inmediata"
  ]
},
{
  id: 12002, pillar: 12, type: "scale",
  title: "Cuando el leadership se reúne para revisar el rendimiento GTM, ¿cuánto tiempo se dedica a debatir las definiciones de datos vs a resolver realmente los problemas?",
  options: [
    "La mayor parte del tiempo de reunión se consume en disputas de datos: no existe una fuente única de verdad",
    "Los debates de datos descarrilan frecuentemente las discusiones y retrasan las decisiones",
    "Los datos se aceptan principalmente pero las disputas ocasionales ralentizan las revisiones",
    "Las definiciones de datos están bloqueadas: las reuniones se centran en la interpretación y las decisiones en lugar de en las disputas de cifras",
    "Todos los foros de leadership operan a partir de una fuente de datos única y gobernada: los debates de datos están ausentes y el 100 % del tiempo se dedica a la toma de decisiones"
  ]
},
{
  id: 12003, pillar: 12, type: "scale",
  title: "¿Con qué rigor los equipos GTM son responsabilizados de los objetivos a los que se han comprometido, y qué ocurre cuando se incumple un compromiso?",
  options: [
    "Sin mecanismo de responsabilización: los objetivos incumplidos se justifican sin consecuencia",
    "Los objetivos incumplidos se discuten de manera informal pero la responsabilización estructurada está ausente",
    "Existe un proceso de revisión pero la responsabilización es incoherente entre líderes",
    "Una revisión formal de responsabilización para los objetivos incumplidos con causa raíz documentada y acción correctiva",
    "Un sistema de responsabilización disciplinado: los objetivos incumplidos desencadenan una revisión documentada en menos de dos semanas, las acciones correctivas se rastrean y los incumplimientos repetidos se escalan"
  ]
},
{
  id: 12004, pillar: 12, type: "scale",
  title: "Cuando una decisión GTM cross-funcional requiere el input de más de dos equipos, ¿cuánto tiempo suele llevar alcanzar una conclusión documentada, y se rastrea?",
  options: [
    "Las decisiones multi-equipo no tienen proceso definido: se resuelven cuando alguien acaba forzando una conclusión",
    "Estas decisiones tienen lugar de manera informal en reunión, pero el tiempo de resolución no se rastrea y varía considerablemente",
    "La mayoría de las decisiones multi-equipo se resuelven en unas semanas, pero no hay SLA formal y los retrasos son habituales",
    "Existe un proceso documentado para las decisiones multi-equipo con un calendario definido y un facilitador responsable",
    "Un protocolo gobernado de decisión multi-equipo: plazos de input, propietario de la decisión y SLA de resolución definidos: tiempo de decisión rastreado trimestralmente y los retrasos persistentes se escalan al leadership automáticamente"
  ]
},
{
  id: 12005, pillar: 12, type: "scale",
  title: "¿Con qué fiabilidad se sostiene tu cadencia operativa GTM, y qué porcentaje de las reuniones programadas se cancelan o se mantienen sin pre-lectura?",
  options: [
    "Las reuniones se cancelan frecuentemente o se mantienen sin preparación: la cadencia no es fiable",
    "La cadencia funciona pero la asistencia y la preparación son incoherentes",
    "Las reuniones se mantienen globalmente pero las pre-lecturas y los estándares de documentación no se aplican",
    "La cadencia operativa se mantiene de manera coherente con pre-lecturas y resultados documentados",
    "Un ritmo operativo no negociable: estándares de asistencia, de pre-lectura y de resultados aplicados, con la salud de la cadencia revisada mensualmente por el COO o el CRO"
  ]
},
{
  id: 12006, pillar: 12, type: "scale",
  title: "En el último trimestre, ¿cuántas iniciativas GTM se detuvieron o desprioritizaron formalmente, y esa decisión se tomó proactivamente o solo después de que los recursos ya se hubieran desperdiciado?",
  options: [
    "Las iniciativas raramente se detienen: una vez iniciado, el trabajo GTM tiende a continuar independientemente de los resultados",
    "Algunas iniciativas se abandonan discretamente, pero las decisiones formales de detención son raras y no están documentadas",
    "Algunas iniciativas se detuvieron este trimestre, pero las decisiones fueron reactivas y llegaron después de un fracaso visible",
    "Las decisiones de detención de iniciativas están documentadas, se revisan en la planificación trimestral y se guían por criterios de rendimiento predefinidos",
    "Una disciplina de iniciativas gobernada: criterios de detención/despriorización definidos en el lanzamiento, rendimiento revisado en puntos de control fijos y decisiones de detención tomadas proactivamente, con un post-mortem para evitar un despilfarro similar"
  ]
},
{
  id: 12007, pillar: 12, type: "scale",
  title: "Entre tus iniciativas GTM actuales: ¿cuántas tienen un único responsable nombrado con autoridad definida, y cuántas están poseídas por un comité o no tienen un responsable claro?",
  options: [
    "Las iniciativas no tienen propietario formal: todo el mundo y nadie es responsable",
    "La responsabilidad se asigna de manera informal pero la autoridad y la rendición de cuentas son difusas",
    "Existen propietarios de iniciativas pero el sponsorship a nivel ejecutivo es incoherente",
    "Cada iniciativa GTM tiene un propietario documentado con autoridad y rendición de cuentas definidas",
    "Un modelo formal de gobernanza de iniciativas: un único propietario responsable, sponsor ejecutivo, métricas de éxito definidas y estatus mensual revisado en el foro de leadership GTM"
  ]
},
{
  id: 12008, pillar: 12, type: "scale",
  title: "¿Con qué rapidez y previsibilidad los bloqueos operativos son escalados y resueltos, y tu camino de escalado conduce realmente a una resolución?",
  options: [
    "Sin camino de escalado: los bloqueos se acumulan hasta convertirse en crisis",
    "Los bloqueos se plantean de manera informal pero la resolución es lenta e impredecible",
    "Existe un proceso de escalado pero raramente se utiliza o es fiable",
    "Un camino de escalado definido con SLA de tiempo de respuesta y seguimiento de resolución documentado",
    "Un sistema gobernado de resolución de bloqueos: disparadores de escalado, SLA de respuesta y resultados de resolución rastreados mensualmente en la revisión operativa"
  ]
},
{
  id: 12009, pillar: 12, type: "scale",
  title: "En tus tres últimas reuniones de gobernanza: ¿qué porcentaje de las acciones documentadas fueron completadas por el responsable acordado, en el plazo acordado?",
  options: [
    "Las reuniones producen discusiones pero no decisiones documentadas ni responsables",
    "Algunas decisiones se toman en reunión pero el seguimiento no se asegura sistemáticamente",
    "Las decisiones se documentan pero el seguimiento de las acciones es incoherente entre reuniones",
    "Todas las reuniones de gobernanza producen un registro de decisiones con responsables, plazos y progreso revisado en la sesión siguiente",
    "Un sistema operativo de gobernanza disciplinado: cada reunión produce un registro de decisiones estructurado, las acciones se revisan al inicio de la siguiente reunión y las tasas de finalización se rastrean"
  ]
},
{
  id: 12010, pillar: 12, type: "scale",
  title: "¿En qué medida tu proceso de gestión del rendimiento es sistemático y coherente, y cuánto tiempo transcurre entre la identificación del bajo rendimiento y la adopción de acciones documentadas?",
  options: [
    "La gestión del rendimiento es completamente ad-hoc: no existe un proceso sistemático",
    "Los problemas de rendimiento se abordan de manera informal e incoherente entre los managers",
    "Existe un proceso formal de PIP pero la activación se retrasa semanas o meses",
    "Los problemas de rendimiento desencadenan una revisión formal en menos de 30 días con criterios de mejora documentados",
    "Un sistema de gestión del rendimiento gobernado: bajo rendimiento identificado mediante indicadores adelantados, revisión formal en menos de dos semanas y resultados rastreados de manera coherente"
  ]
},
{
  id: 12011, pillar: 12, type: "scale",
  title: "En el último trimestre, ¿cuántas iniciativas GTM cross-funcionales fueron retrasadas, bloqueadas o fracasaron debido a una responsabilidad difusa o lagunas de interfaz entre los equipos?",
  options: [
    "Varias iniciativas importantes se retrasaron debido a ambigüedad de responsabilidad: es un patrón recurrente",
    "Varias iniciativas menores se ralentizaron por interfaces difusas pero nada se abordó formalmente",
    "Uno o dos retrasos se produjeron y se resolvieron de manera informal",
    "Las lagunas de responsabilidad se identifican en la retrospectiva trimestral y se abordan antes del siguiente ciclo de planificación",
    "Las lagunas de responsabilidad cross-funcionales se rastrean como métrica de gobernanza: frecuencia, tiempo de resolución y causa raíz revisados trimestralmente"
  ]
},
{
  id: 12012, pillar: 12, type: "scale",
  title: "De manera directa, ¿la inversión GTM y la asignación de headcount reflejan las prioridades estratégicas de tu plan GTM?",
  options: [
    "Las decisiones de inversión están guiadas por la inercia o la política interna, no por las prioridades estratégicas",
    "Existe cierta conexión entre la estrategia y la asignación de recursos pero es laxa",
    "La asignación de recursos hace referencia a la estrategia pero persiste un desalineamiento significativo",
    "Las decisiones de asignación de recursos están documentadas y mapeadas a las prioridades estratégicas en la planificación",
    "Un modelo de gobernanza estrategia-a-inversión: cada decisión de asignación significativa documentada frente a la prioridad estratégica a la que sirve, revisada trimestralmente"
  ]
},
{
  id: 12013, pillar: 12, type: "scale",
  title: "¿En qué medida los bucles de feedback entre los equipos GTM de primera línea y el leadership ejecutivo están estructurados y orientados a la acción?",
  options: [
    "Sin bucle de feedback estructurado: los directivos escuchan a la primera línea vía los escalados",
    "El feedback de primera línea llega al leadership de manera informal e incoherente",
    "Existe un mecanismo de feedback pero los resultados no se explotan de manera fiable",
    "Un proceso trimestral estructurado de feedback primera línea-a-directivos con acciones documentadas",
    "Un sistema de feedback bidireccional continuo: señales de primera línea revisadas mensualmente, respuestas de los directivos documentadas y finalización de las acciones rastreada"
  ]
},
{
  id: 12014, pillar: 12, type: "scale",
  title: "¿En qué medida tu proceso de ajustes estratégicos está definido, y qué desencadena una revisión estratégica entre los ciclos de planificación anual?",
  options: [
    "Sin proceso definido: los cambios de estrategia tienen lugar de manera reactiva cuando algo se rompe",
    "El leadership discute los ajustes estratégicos de manera informal cuando emergen problemas",
    "Una revisión estratégica amplia se desencadena por eventos mayores pero los criterios no están documentados",
    "Umbrales de rendimiento definidos desencadenan una revisión estratégica estructurada con un proceso documentado",
    "Un protocolo gobernado de adaptación estratégica: disparadores definidos, proceso de revisión y requisitos de documentación para todos los ajustes entre ciclos"
  ]
},
{
  id: 12015, pillar: 12, type: "scale",
  title: "En el último trimestre, ¿cuántas decisiones tomadas en tus reuniones GTM semanales fueron directamente trazables a un objetivo trimestral, y cuántas fueron reactivas a problemas no previstos?",
  options: [
    "La mayoría de las decisiones semanales son reactivas: hay poco vínculo visible con los objetivos trimestrales",
    "Los objetivos trimestrales existen, pero las decisiones semanales derivan frecuentemente sin ser cuestionadas",
    "Algunas decisiones semanales pueden rastrearse hasta los objetivos trimestrales, pero el trabajo reactivo aún consume una gran parte de la atención del leadership",
    "La mayoría de las decisiones semanales pueden rastrearse hasta los objetivos trimestrales, con el trabajo reactivo explícitamente identificado y contenido",
    "Las decisiones operativas semanales se mapean a los objetivos trimestrales por diseño: el trabajo fuera de plan se registra, se cuantifica y se revisa como señal de salud de gobernanza"
  ]
},
{
  id: 12016, pillar: 12, type: "scale",
  title: "En los dos últimos trimestres, ¿cuántos problemas GTM significativos el leadership ejecutivo aprendió de un miembro del equipo de primera línea antes de que apareciera en una métrica, y cuántos solo descubrieron después de un incumplimiento?",
  options: [
    "El leadership generalmente aprende los problemas solo después de un incumplimiento de métrica o un fracaso visible",
    "Algunos problemas se elevan temprano, pero principalmente por líderes sénior en lugar de por los equipos de primera línea",
    "Algunas alertas tempranas originadas en la primera línea llegan al leadership, pero el patrón es incoherente",
    "Varios problemas materiales fueron elevados temprano por los equipos de primera línea y abordados antes del impacto en el revenue",
    "La alerta temprana es una señal gobernada: los escalados originados en la primera línea se rastrean, se revisan frente a los resultados posteriores y se utilizan como métrica de salud de transparencia"
  ]
},
{
  id: 12017, pillar: 12, type: "scale",
  title: "¿En qué medida tus caminos de escalado GTM son claros y se utilizan activamente, y cualquier miembro del equipo puede describir cómo escalar un problema importante ahora mismo?",
  options: [
    "Sin caminos de escalado formales: los problemas se gestionan de manera informal o en absoluto",
    "Existen caminos de escalado pero no son ampliamente conocidos ni fiables",
    "Los caminos de escalado están documentados pero el uso es incoherente",
    "Los caminos de escalado están documentados, formados y sistemáticamente referenciados cuando surgen bloqueos",
    "Un sistema de escalado gobernado: los caminos están documentados, testados anualmente y las tasas de uso rastreadas como métrica de salud de transparencia organizativa"
  ]
},
{
  id: 12018, pillar: 12, type: "scale",
  title: "En los dos últimos trimestres, ¿cuántos riesgos o incumplimientos GTM significativos emergieron a nivel ejecutivo ANTES de que se convirtieran en un problema de revenue, y quién los elevó?",
  options: [
    "Los incumplimientos significativos siempre se descubrieron en la etapa de impacto en el revenue: la primera línea no escaló temprano",
    "Ocasionalmente se elevaron riesgos temprano pero por líderes sénior, no por los equipos de primera línea",
    "Algunos escalados tempranos tuvieron lugar pero el patrón es incoherente",
    "Varios escalados tempranos vinieron de los equipos de primera línea y se abordaron antes del impacto en el revenue",
    "El escalado temprano de riesgos es una métrica rastreada: las alertas tempranas originadas en la primera línea se cuentan, se reconocen públicamente y el ratio de detección temprana vs tardía se revisa trimestralmente"
  ]
},
{
  id: 12019, pillar: 12, type: "scale",
  title: "¿Qué porcentaje de los elementos de acción de tus tres últimas revisiones de leadership GTM se completó a tiempo, por el responsable, en el plazo acordado?",
  options: [
    "No rastreamos la finalización de los elementos de acción de las revisiones de leadership",
    "Los elementos de acción se registran pero la finalización raramente se revisa en la siguiente reunión",
    "Aproximadamente la mitad de los elementos de acción se completan a tiempo: el resto se pospone repetidamente",
    "Más del 70 % de los elementos de acción se completan a tiempo, revisados al inicio de cada reunión",
    "La tasa de finalización de las acciones es una métrica de salud de gobernanza: rastreada por responsable, reportada al CRO mensualmente y una finalización por debajo del umbral desencadena una revisión de escalado"
  ]
},
{
  id: 12020, pillar: 12, type: "scale",
  title: "En el último trimestre, ¿cuántas decisiones GTM fueron revertidas o significativamente modificadas tras la implementación, porque la decisión original se basaba en una inteligencia de primera línea incompleta?",
  options: [
    "Las reversiones de decisiones son habituales: descubrimos frecuentemente que la realidad del terreno contradice lo que motivó la decisión original",
    "Ocurren algunas reversiones, pero no se rastrean y la conexión con las lagunas de inteligencia no se analiza",
    "Ocurren reversiones ocasionales y se discuten de manera informal, pero no existe un seguimiento formal ni un proceso de causa raíz",
    "Las reversiones de decisiones se rastrean, y las vinculadas a lagunas de inteligencia se revisan en la gobernanza trimestral",
    "Un sistema de calidad de las decisiones: reversiones rastreadas con causa raíz, reversiones vinculadas a lagunas de inteligencia revisadas mensualmente y los patrones alimentan la forma en que los datos de primera línea se recogen y se elevan antes de la toma de decisiones"
  ]
},


]; // END QUESTIONS ARRAY

window.QUESTIONS = QUESTIONS;
