/* ===========================================================
   MASTER QUESTION ENGINE v4.8 — CANONICAL (POLISH)
   =========================================================== */

const QUESTIONS = [
/* ===========================================================
   FILAR 0: KONTEKST (25 QUESTIONS)
   =========================================================== */

{
  id: 1, pillar: 0, type: "group",
  title: "Kilka słów o Państwa firmie",
  subtitle: "Tożsamość firmy, którą wykorzystujemy do kalibracji benchmarków i kontekstu raportu.",
  fields: [
    { name: "fullname",        label: "Imię i nazwisko" },
    { name: "role",            label: "Funkcja lub tytuł stanowiska" },
    { name: "email",           label: "Adres e-mail" },
    { name: "company",         label: "Nazwa firmy" },
    { name: "industry",        label: "Branża (np. FinTech, HRTech, DevTools)" },
    { name: "total_employees", label: "Całkowita liczba pracowników (FTE)" },
    { name: "year_founded",    label: "Rok założenia (RRRR)" },
    { name: "hq_region",       label: "Region siedziby (US, FR, UK, DACH, Benelux, Nordics, Inny)" }
  ]
},

{
  id: 2, pillar: 0, type: "group",
  title: "Kluczowe metryki wyników SaaS",
  subtitle: "Podstawa finansowa i retencji.",
  fields: [
    { name: "arr",              label: "Aktualny ARR (Annual Recurring Revenue)" },
    { name: "growth_rate",      label: "Roczny wskaźnik wzrostu (%)" },
    { name: "nrr",              label: "Net Revenue Retention, NRR (%)" },
    { name: "grr",              label: "Gross Revenue Retention, GRR (%)" },
    { name: "gross_margin",     label: "Marża brutto (%)" },
    { name: "monthly_burn",     label: "Miesięczny net burn" },
    { name: "cash_runway",      label: "Runway gotówki (miesiące)" },
    { name: "number_of_clients",label: "Liczba aktywnych płacących klientów" }
  ]
},

{
  id: 3, pillar: 0, type: "group",
  title: "Skład zespołu GTM",
  subtitle: "Wyłącznie ekwiwalenty pełnego etatu.",
  fields: [
    { name: "sales_headcount",             label: "# Sales, AE / Closerzy" },
    { name: "sdr_headcount",               label: "# SDR / BDR" },
    { name: "marketing_headcount",         label: "# Marketing, Demand + PMM + Brand" },
    { name: "cs_headcount",               label: "# Customer Success / Account Management" },
    { name: "revops_enablement_headcount", label: "# RevOps / Enablement" },
    { name: "product_headcount",           label: "# Produkt, PM + Design wyłącznie (bez engineering)" },
    { name: "engineering_headcount",       label: "# Engineering / R&D, wyłącznie deweloperzy" },
    { name: "gtm_other_headcount",         label: "# Inne GTM, Partnerzy, SE" }
  ]
},

{
  id: 4, pillar: 0, type: "group",
  title: "Cele i efektywność",
  subtitle: "Efektywność przychodów oraz wyniki sprzedaży.",
  fields: [
    { name: "arr_target",         label: "Cel ARR na bieżący rok obrotowy" },
    { name: "quota_attainment",   label: "% handlowców osiągających swój quota, ostatni pełny kwartał" },
    { name: "cac_payback",        label: "Okres zwrotu CAC (miesiące)" },
    { name: "magic_number",       label: "Magic Number, net new ARR dzielone przez wydatki S&M poprzedniego kwartału" },
    { name: "avg_discount",       label: "Średni rabat (%) na nowych logo" },
    { name: "expansion_pct",      label: "% nowego ARR pochodzącego z upsellu / expansion" },
    { name: "avg_ramp_months",    label: "Średni czas dojścia do pełnej wydajności nowego AE, miesiące do pełnego quota" },
    { name: "sales_marketing_pct",label: "Wydatki Sales & Marketing jako % przychodów" }
  ]
},

{
  id: 5, pillar: 0, type: "group",
  title: "Velocity lejka i kontekst ryzyka",
  subtitle: "Miejsca, w których deale zwalniają, blokują się lub znikają.",
  fields: [
    { name: "win_rate",             label: "Średni Win rate (%)" },
    { name: "sales_cycle",          label: "Średnia długość cyklu sprzedaży (dni)" },
    { name: "pipeline_coverage",    label: "Wskaźnik pokrycia pipeline (np. 3,5 dla 3,5x)" },
    { name: "inbound_pipeline_pct", label: "% zakwalifikowanego pipeline pochodzącego z inbound" },
    { name: "revenue_concentration",label: "% przychodu pochodzącego od 10 największych klientów" },
    { name: "top_competitors",      label: "Top 3 konkurenci (oddzieleni przecinkami)" },
    { name: "primary_loss_reason",  label: "Główny powód przegranej, jedno zdanie" },
    { name: "primary_churn_reason", label: "Główny powód churn, jedno zdanie" }
  ]
},

{
  id: 6, pillar: 0, type: "group",
  title: "Intelligence pipeline i produktu",
  subtitle: "Obserwowane mechaniki konwersji i adopcji.",
  fields: [
    { name: "discovery_to_demo",        label: "Konwersja Discovery do Demo (%)" },
    { name: "demo_to_poc",              label: "Konwersja Demo do POC / Trial (%)" },
    { name: "poc_to_close",             label: "Konwersja POC do Closing (%)" },
    { name: "technical_validation_loss",label: "% deali przegranych na walidacji technicznej" },
    { name: "activation_30d",           label: "% użytkowników aktywnych 30 dni po onboardingu" },
    { name: "feature_penetration",      label: "% kont korzystających z 3+ kluczowych funkcjonalności" },
    { name: "time_to_value",            label: "Średnia liczba dni do pierwszego momentu wartości" },
    { name: "product_expansion_pct",    label: "% przychodu z expansion generowanego przez sygnały użycia produktu" }
  ]
},

{
  id: 7, pillar: 0, type: "multi_radio",
  title: "Model GTM",
  subtitle: "Wybierz jedną odpowiedź dla każdego pytania.",
  questions: [
    {
      key: "gtm_motion",
      label: "Jaki jest najlepszy opis Państwa głównego GTM motion?",
      options: [
        "Inbound-led (prowadzony przez marketing)",
        "Outbound-led (prowadzony przez sprzedaż)",
        "Product-led (PLG / self-serve)",
        "Partner-led (channel / ekosystem)",
        "Enterprise Field Sales (wysoki poziom wsparcia)",
        "Hybrydowy (zrównoważony mix)"
      ]
    },
    {
      key: "revenue_model",
      label: "Państwa główny model przychodowy",
      options: [
        "Subskrypcja SaaS (rekurencyjna)",
        "Oparty na użyciu / konsumpcji",
        "Transakcyjny / jednorazowy",
        "Marketplace / take-rate",
        "Usługi zarządzane / hybrydowy"
      ]
    }
  ]
},

{
  id: 8, pillar: 0, type: "group",
  title: "Szczegóły churn i kontraktów",
  subtitle: "Struktura retencji i handlowa.",
  fields: [
    { name: "burn_multiple",       label: "Burn Multiple, net burn dzielone przez net new ARR" },
    { name: "logo_churn_rate",     label: "Roczny wskaźnik churn logo, % utraconych klientów" },
    { name: "revenue_churn_rate",  label: "Roczny wskaźnik churn przychodu, % utraconego ARR" },
    { name: "avg_contract_length", label: "Średnia długość kontraktów (miesiące)" }
  ]
},

{
  id: 9, pillar: 0, type: "multi_radio",
  title: "Rynek docelowy",
  subtitle: "Wybierz jedną odpowiedź dla każdego pytania.",
  questions: [
    {
      key: "target_segment",
      label: "Główny segment docelowy (deklarowana strategia)",
      options: [
        "Rabbit / SMB (< 10 000 EUR ACV)",
        "Deer / Mid-Market (10 000 EUR do 50 000 EUR ACV)",
        "Elephant / Enterprise (50 000 EUR do 250 000 EUR ACV)",
        "Whale / Strategic (250 000 EUR+ ACV)"
      ]
    },
    {
      key: "economic_buyer",
      label: "Kto jest Państwa głównym kupującym ekonomicznym?",
      options: [
        "Osoba na poziomie C-Level (CEO, CFO, CTO)",
        "VP / Dyrektor działu",
        "Team Lead / Manager",
        "Indywidualny kontrybutor / Użytkownik końcowy",
        "Techniczny / IT / Zakupy"
      ]
    }
  ]
},

{
  id: 10, pillar: 0, type: "group",
  title: "Efektywność i szczegóły lejka",
  subtitle: "Drugorzędne metryki efektywności.",
  fields: [
    { name: "ltv_cac",              label: "Wskaźnik LTV:CAC" },
    { name: "pct_deals_no_discount",label: "% deali zamkniętych w cenie katalogowej" },
    { name: "outbound_pipeline_pct",label: "% zakwalifikowanego pipeline pochodzącego z outbound" },
    { name: "mql_to_sql_rate",      label: "Wskaźnik konwersji MQL do SQL (%)" }
  ]
},

{
  id: 11, pillar: 0, type: "multi_radio",
  title: "Etap firmy",
  subtitle: "Wybierz jedną odpowiedź dla każdego pytania.",
  questions: [
    {
      key: "operating_phase",
      label: "Która faza operacyjna najlepiej opisuje Państwa firmę dzisiaj?",
      options: [
        "Land & Expand, szybki wzrost, agresywne inwestowanie w nowe logo. Burn jest celowy.",
        "Grow & Optimize, skalowanie przychodu przy jednoczesnej poprawie efektywności. Rule of 40 jest w zasięgu.",
        "Efficiency First, rentowność jest głównym celem. Nowe logo są drugorzędne wobec NRR i marży.",
        "Transition / Repositioning, aktywna zmiana segmentu, motion, produktu lub rynku.",
        "Stabilization / Recovery, ochrona bazy przychodów i ograniczanie ryzyka przed kolejną fazą wzrostu."
      ]
    },
    {
      key: "funding_stage",
      label: "Etap finansowania",
      options: [
        "Bootstrapped / Rentowny",
        "Pre-Seed / Seed",
        "Series A",
        "Series B",
        "Series C+",
        "Private Equity / Notowany na giełdzie"
      ]
    }
  ]
},

{
  id: 12, pillar: 0, type: "group",
  title: "Kontekst zespołu i źródeł pipeline",
  subtitle: "Zasięg geograficzny i rozkład pipeline według kanału.",
  fields: [
    { name: "sales_leadership_headcount",label: "# Leadership Sales, VP / Head / Managers" },
    { name: "active_countries",          label: "Liczba krajów z aktywną sprzedażą lub klientami" },
    { name: "inbound_pct",  label: "% Pipeline, Inbound (content, SEO, marka, eventy)", type: "number", min: 0, max: 100, placeholder: "np. 40" },
    { name: "outbound_pct", label: "% Pipeline, Outbound (SDR, prospecting AE, cold)",  type: "number", min: 0, max: 100, placeholder: "np. 30" },
    { name: "plg_pct",      label: "% Pipeline, Product-led (PLG, self-serve, trial)",   type: "number", min: 0, max: 100, placeholder: "np. 20" },
    { name: "partner_pct",  label: "% Pipeline, Partnerzy (channel, ekosystem, polecenia)",type: "number", min: 0, max: 100, placeholder: "np. 10" }
  ]
},

{
  id: 13, pillar: 0, type: "group",
  title: "Aktualne wyniki vs cel",
  subtitle: "To, co leadership śledzi obecnie i gdzie znajduje się luka.",
  fields: [
    { name: "current_primary_metric",       label: "Główna metryka śledzona przez leadership, np. ARR, NRR, EBITDA, Rule of 40, Win Rate, Burn Multiple" },
    { name: "current_primary_metric_value", label: "Aktualna wartość tej metryki" },
    { name: "current_primary_metric_goal",  label: "Wartość docelowa na bieżący rok obrotowy" },
    { name: "leadership_bottleneck",        label: "Główne wąskie gardło postrzegane przez leadership, jedno zdanie" }
  ]
},

{
  id: 14, pillar: 0, type: "radio",
  title: "Jak pilne jest rozwiązanie Państwa głównego wąskiego gardła GTM?",
  subtitle: "Wybierz odpowiedź odzwierciedlającą aktualną rzeczywistość operacyjną.",
  options: [
    "Niskie, mamy czas, aby rozwiązać to prawidłowo",
    "Umiarkowane, wymaga uwagi w ciągu najbliższych dwóch kwartałów",
    "Wysokie, obecnie blokuje wzrost",
    "Krytyczne, zagraża firmie w ciągu 90 dni"
  ]
},

{
  id: 15, pillar: 0, type: "multi_radio",
  title: "Profil produktu",
  subtitle: "Wybierz jedną odpowiedź dla każdego pytania.",
  questions: [
    {
      key: "product_category",
      label: "Typ kategorii produktu",
      options: [
        "System of record (np. CRM, ERP, HRIS)",
        "System engagement (np. SEP, Collaboration, Messaging)",
        "Rozwiązanie punktowe / Narzędzie workflow",
        "Infrastruktura / API / Narzędzie deweloperskie",
        "Data / Analytics / AI / BI"
      ]
    },
    {
      key: "product_complexity",
      label: "Jak opisałby Pan/Pani złożoność Państwa produktu dla typowego kupującego?",
      options: [
        "Proste / Plug & Play, działa w ciągu kilku godzin, bez wsparcia technicznego",
        "Umiarkowanie złożone, podstawowa konfiguracja, działa w ciągu kilku dni",
        "Złożone / Konfigurowalne, wymaga parametryzacji, szkolenia i zdefiniowanego procesu onboardingu",
        "Bardzo złożone / Na zamówienie, implementacja trwająca wiele miesięcy, wymagane rozwiązania engineering"
      ]
    }
  ]
},

{
  id: 16, pillar: 0, type: "group",
  title: "Cel na 12 miesięcy",
  subtitle: "To, co firma musi osiągnąć w ciągu najbliższych 12 miesięcy.",
  fields: [
    { name: "goal_12m_primary_metric",   label: "Główna metryka sukcesu na 12 miesięcy, np. ARR, NRR, Rule of 40, EBITDA %" },
    { name: "goal_12m_primary_target",   label: "Wartość docelowa na 12 miesięcy" },
    { name: "goal_12m_secondary_metric", label: "Metryka drugorzędna (12 miesięcy)" },
    { name: "goal_12m_secondary_target", label: "Drugorzędna wartość docelowa" }
  ]
},

{
  id: 17, pillar: 0, type: "radio",
  title: "Jaka jest Państwa główna oś strategiczna na najbliższe 12 miesięcy?",
  subtitle: "Odpowiedzi dotyczą głównego segmentu przychodowego i głównego motion GTM, chyba że pytanie wyraźnie wymaga rozróżnienia.",
  options: [
    "Agresywne pozyskiwanie nowych logo, wolumen nowych klientów przede wszystkim",
    "Efektywność i rentowność, gotówka, poprawa marż, redukcja burn",
    "Expansion i NRR, upsell, cross-sell i retencja jako główny motor przychodu",
    "Wejście na nowy rynek, nowa geografia, segment lub GTM motion",
    "Przywództwo kategorii, marka, pozycjonowanie i długoterminowa obronność"
  ]
},

{
  id: 18, pillar: 0, type: "radio",
  title: "Jaki jest obecnie najbardziej widoczny symptom GTM?",
  options: [
    "Za mało leadów, góra lejka jest zbyt cienka",
    "Niska konwersja, pipeline istnieje, ale deale się nie zamykają",
    "Deale w martwym punkcie / długie cykle, deale posuwają się wolno lub cichną",
    "Wysoki churn lub downsell, klienci odchodzą lub wartość kontraktu spada",
    "Brak spójności między zespołami: realizacja jest rozchwiana lub koordynacja się sypie"
  ]
},

{
  id: 19, pillar: 0, type: "radio",
  title: "Jaka jest według leadership przyczyna źródłowa?",
  options: [
    "Luki w talentach lub rekrutacji, nie mamy odpowiednich ludzi na odpowiednich stanowiskach",
    "Dług technologiczny lub w danych, systemy są powolne, wadliwe lub nieistniejące",
    "Ograniczenia budżetowe, nie możemy zainwestować tyle, ile wymaga strategia",
    "Niejednoznaczność strategiczna, leadership nie jest w pełni zgodny co do kierunku lub priorytetów",
    "Luki produktowe, produkt nie może obsłużyć GTM motion, którego potrzebujemy"
  ]
},

{
  id: 20, pillar: 0, type: "group",
  title: "Cel na 24 miesiące",
  subtitle: "Jak firma ma wyglądać za 24 miesiące.",
  fields: [
    { name: "goal_24m_primary_metric",   label: "Główna metryka sukcesu na 24 miesiące" },
    { name: "goal_24m_primary_target",   label: "Wartość docelowa na 24 miesiące" },
    { name: "goal_24m_secondary_metric", label: "Metryka drugorzędna (24 miesiące)" },
    { name: "goal_24m_secondary_target", label: "Drugorzędna wartość docelowa" },
    { name: "goal_24m_operating_model",  label: "Docelowy model operacyjny na 24 miesiące, np. Rule of 40, dodatni EBITDA, gotowy do exit, gotowy do IPO" }
  ]
},

{
  id: 21, pillar: 0, type: "radio",
  title: "Ile segmentów handlowych aktywnie obsługujecie Państwo dzisiaj?",
  subtitle: "Segment to odrębna grupa kupujących ze znacząco różnym ACV, motion lub propozycją wartości.",
  options: [
    "1 segment, jeden typ kupującego i jeden motion",
    "2 segmenty, dwie odrębne grupy kupujących",
    "3 segmenty, trzy odrębne grupy kupujących",
    "4 segmenty lub więcej"
  ]
},

{
  id: 22, pillar: 0, type: "group",
  title: "Wyniki segmentu 1",
  subtitle: "Państwa główny segment lub największy pod względem kontrybucji ARR.",
  fields: [
    { name: "segment_1_name",     label: "Segment 1, Nazwa lub opis (np. Mid-Market SaaS)" },
    { name: "segment_1_arr_pct",  label: "Segment 1, Kontrybucja ARR (%)" },
    { name: "segment_1_acv",      label: "Segment 1, Średni ACV" },
    { name: "segment_1_win_rate", label: "Segment 1, Win Rate (%)" },
    { name: "segment_1_nrr",      label: "Segment 1, NRR (%)" },
    { name: "segment_1_priority", label: "Segment 1, Priorytet strategiczny",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

{
  id: 23, pillar: 0, type: "group",
  title: "Wyniki segmentu 2",
  subtitle: "Państwa drugi segment.",
  fields: [
    { name: "segment_2_name",     label: "Segment 2, Nazwa" },
    { name: "segment_2_arr_pct",  label: "Segment 2, Kontrybucja ARR (%)" },
    { name: "segment_2_acv",      label: "Segment 2, Średni ACV" },
    { name: "segment_2_win_rate", label: "Segment 2, Win Rate (%)" },
    { name: "segment_2_nrr",      label: "Segment 2, NRR (%)" },
    { name: "segment_2_priority", label: "Segment 2, Priorytet",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

{
  id: 24, pillar: 0, type: "multi_radio",
  title: "Kontekst rynku i raportowania",
  subtitle: "Wybierz jedną odpowiedź dla każdego pytania.",
  questions: [
    {
      key: "market_adoption",
      label: "Faza adopcji rynku",
      options: [
        "Emerging, edukacja kategorii jest wciąż konieczna przed sprzedażą",
        "Wczesny wzrost, świadomość kategorii istnieje, różnicowanie produktu jest głównym wyzwaniem",
        "Ugruntowany wzrost, kilka wiarygodnych alternatyw, konkurencja się nasila",
        "Dojrzały, kategoria ulega komoditizacji, retencja i efektywność liczą się bardziej niż akwizycja"
      ]
    },
    {
      key: "currency",
      label: "Główna waluta raportowania",
      options: [
        "USD ($)",
        "EUR (EUR)",
        "GBP (GBP)",
        "AUD ($)",
        "CAD ($)",
        "Inna"
      ]
    }
  ]
},

{
  id: 25, pillar: 0, type: "group",
  title: "Wyniki segmentu 3",
  subtitle: "Państwa trzeci segment.",
  fields: [
    { name: "segment_3_name",     label: "Segment 3, Nazwa" },
    { name: "segment_3_arr_pct",  label: "Segment 3, Kontrybucja ARR (%)" },
    { name: "segment_3_acv",      label: "Segment 3, Średni ACV" },
    { name: "segment_3_win_rate", label: "Segment 3, Win Rate (%)" },
    { name: "segment_3_nrr",      label: "Segment 3, NRR (%)" },
    { name: "segment_3_priority", label: "Segment 3, Priorytet",
      type: "select", options: ["Core","Growth","Explore","Phase-out"] }
  ]
},

/* ===========================================================
   FILAR 1: GTM STRATEGY & LEADERSHIP (20 QUESTIONS)
   =========================================================== */

{
  id: 1001, pillar: 1, type: "scale",
  title: "W ciągu ostatnich 12 miesięcy ile inicjatyw GTM zostało formalnie zatrzymanych, zdepriorytetyzowanych lub pozbawionych finansowania po przeglądzie kwartalnym?",
  subtitle: "Odpowiedzi dotyczą głównego segmentu przychodowego i głównego motion GTM, chyba że pytanie wyraźnie wymaga rozróżnienia.",
  options: [
    "Nie zatrzymaliśmy formalnie żadnej inicjatywy, wszystko, co rozpoczynamy, jest kontynuowane",
    "Jedna lub dwie rzeczy zostały po cichu porzucone, ale bez formalnego procesu przeglądu",
    "Kilka inicjatyw zostało formalnie ocenionych i zatrzymanych na podstawie danych wydajnościowych",
    "Mamy udokumentowany kwartalny proces zatrzymywania: inicjatywy są wstrzymywane z udokumentowanym uzasadnieniem",
    "Nasz przegląd kwartalny zatrzymuje więcej inicjatyw, niż uruchamia, dyscyplina zasobów jest stosowana systematycznie"
  ]
},
{
  id: 1002, pillar: 1, type: "scale",
  title: "W jakim stopniu zdefiniowaliście Państwo wyraźnie, których segmentów rynku, wertykałów lub typów deali nie będziecie realizować?",
  options: [
    "Brak zdefiniowanych wykluczeń, realizujemy wszystko, co przypomina deal",
    "Nieformalny konsensus, ale nic udokumentowanego ani egzekwowanego",
    "Pewne wykluczenia istnieją, ale nie są stosowane spójnie w sprzedaży",
    "Pisemne kryteria wykluczeń, weryfikowane na spotkaniach kwalifikacji pipeline",
    "Wyraźne reguły negatywnego ICP stosowane w scoringu CRM, projektowaniu quota i wynagrodzeniach handlowców"
  ]
},
{
  id: 1003, pillar: 1, type: "scale",
  title: "Gdy dwa zespoły GTM konkurują o ten sam budżet lub headcount, jak i w jakim czasie jest rozwiązywany ten konflikt?",
  options: [
    "Konflikty są eskalowane do CEO i rozwiązywane nieformalnie przez kilka tygodni",
    "Leadership dyskutuje o nich na spotkaniach, ale rozwiązanie jest powolne i często polityczne",
    "Istnieje udokumentowany framework priorytetyzacji, ale rozwiązanie konfliktów wymaga jeszcze kilku cykli",
    "Zdefiniowana władza decyzyjna rozwiązuje konflikty zasobów w ciągu tygodnia z udokumentowanym uzasadnieniem",
    "Konflikty zasobów są rozwiązywane na poziomie kadencji operacyjnej, w ciągu 48 godzin, przy użyciu wcześniej ustalonej hierarchii priorytetów"
  ]
},
{
  id: 1004, pillar: 1, type: "scale",
  title: "Jak szczegółowa i osadzona w czasie jest Państwa roadmapa GTM na najbliższe 12-18 miesięcy?",
  options: [
    "Brak roadmapy, działamy z kwartału na kwartał reaktywnie",
    "Przybliżone cele kwartalne bez kamieni milowych ani osób odpowiedzialnych",
    "Istnieje plan 12-miesięczny z głównymi kamieniami milowymi, ale z ograniczoną odpowiedzialnością",
    "Sekwencjonowana roadmapa z osobami odpowiedzialnymi, metrykami sukcesu i kwartalnymi przeglądami",
    "W pełni sfazowana roadmapa GTM z kamieniami milowymi walidacji, osobami odpowiedzialnymi i raportowaniem na poziomie board"
  ]
},
{
  id: 1005, pillar: 1, type: "scale",
  title: "W jakim stopniu release'y produktu i decyzje dotyczące roadmapy są połączone z planami wdrożenia GTM i ich harmonogramem?",
  options: [
    "Produkt jest dostarczany niezależnie, GTM dowiaduje się o release'ach w momencie wdrożenia",
    "Pewna koordynacja, ale GTM rzadko jest obecny przy decyzjach roadmapy",
    "Istnieją regularne synchronizacje produkt-GTM, ale planowanie w dalszym ciągu często jest ad hoc",
    "Cykle planowania produktu i GTM są zsynchronizowane z wspólnymi przeglądami kamieni milowych",
    "Ujednolicony kalendarz produkt-GTM steruje sekwencjonowaniem, gotowością do wdrożenia i aktywacją handlową"
  ]
},
{
  id: 1006, pillar: 1, type: "scale",
  title: "Jak są definiowane, śledzone i weryfikowane cele GTM w zespole kierowniczym?",
  options: [
    "Cele są ustalane rocznie i rzadko weryfikowane",
    "Cele istnieją, ale przeglądy postępów są nieregularne lub ignorowane",
    "Miesięczne przeglądy się odbywają, ale jakość danych ogranicza jakość dyskusji",
    "Kwartalne OKR lub KPI śledzone we wspólnym systemie z regularnymi przeglądami leadership",
    "Formalna kadencja operacyjna GTM, tygodniowe metryki, miesięczne przeglądy, kwartalne retrospektywy z udokumentowanymi działaniami"
  ]
},
{
  id: 1007, pillar: 1, type: "scale",
  title: "W jakim stopniu Państwa strategia GTM wyraźnie artykułuje, dlaczego wygrywacie, dlaczego przegrywacie i co czyni was obronnymi?",
  options: [
    "Brak formalnej artykulacji, różnicowanie jest improwizowane podczas rozmów",
    "Istnieje ogólne oświadczenie pozycjonujące, ale brakuje mu operacyjnego zakotwiczenia",
    "Tematy zwycięstw zidentyfikowane anegdotycznie z feedbacku handlowców",
    "Udokumentowana przewaga konkurencyjna z potwierdzającymi dowodami win/loss",
    "Zwalidowana architektura różnicowania, testowana u kupujących, aktualizowana kwartalnie"
  ]
},
{
  id: 1008, pillar: 1, type: "scale",
  title: "W Państwa obecnym budżecie, który motion lub segment otrzymuje najwięcej inwestycji, i czy to przydzielenie jest wyraźnie udokumentowane i bronione danymi wydajnościowymi?",
  options: [
    "Decyzje budżetowe są podejmowane na podstawie wydatków poprzedniego roku z minimalnym przeglądem strategicznym",
    "Pewna priorytetyzacja istnieje, ale jest głównie polityczna lub oparta na relacjach",
    "Inwestycje są mapowane do priorytetów GTM, ale śledzenie ROI jest słabe",
    "Formalny framework priorytetyzacji łączy wydatki z wynikami pipeline i przychodu",
    "Inwestycje GTM są rankingowane według modelowanego ROI, weryfikowane kwartalnie i realokowane na podstawie danych wydajnościowych"
  ]
},
{
  id: 1009, pillar: 1, type: "scale",
  title: "Który z Państwa GTM motion, inbound, outbound, PLG, channel, generuje najbardziej efektywny przychód, i jakie dane to potwierdzają?",
  options: [
    "Brak widoczności per motion, źródła pipeline nie są śledzone",
    "Przybliżone szacunki oparte na intuicji handlowców lub założeniach marketingu",
    "Istnieją dane pipeline per motion, ale nie są wykorzystywane spójnie w planowaniu",
    "CAC, win rate i długość cyklu są śledzone per motion i weryfikowane kwartalnie",
    "Każdy motion ma własny widok typu P&L, efektywność, zwrot z inwestycji i pojemność są modelowane i aktualizowane"
  ]
},
{
  id: 1010, pillar: 1, type: "scale",
  title: "W ciągu ostatnich 12 miesięcy ile razy rozwój rynku lub konkurencji skłonił Państwa do istotnej zmiany priorytetu GTM, alokacji budżetowej lub motion?",
  options: [
    "Nasza strategia nie zmieniła się istotnie w odpowiedzi na sygnały rynkowe w ciągu ostatniego roku",
    "Dyskutowaliśmy o zmianach, ale nie dostosowaliśmy formalnie priorytetów ani budżetów",
    "Istotne dostosowanie zostało przeprowadzone i udokumentowane",
    "Dwa do trzech udokumentowanych dostosowań zostało przeprowadzonych w odpowiedzi na sygnały rynkowe z wyraźnym uzasadnieniem",
    "Mamy ciągły proces monitorowania rynku, który generuje co najmniej jedno udokumentowane dostosowanie strategiczne kwartalnie"
  ]
},
{
  id: 1011, pillar: 1, type: "scale",
  title: "W jakim stopniu mają Państwo playbooki GTM wyspecjalizowane pod segment lub personę, z których handlowcy faktycznie korzystają?",
  options: [
    "Brak playbooków, każdy handlowiec działa niezależnie",
    "Istnieje ogólny playbook sprzedaży, ale nie jest specyficzny dla segmentów",
    "Playbooki istnieją dla głównych segmentów, ale adopcja przez handlowców jest niespójna",
    "Playbooki per segment są używane w onboardingu, weryfikowane podczas deal reviews i aktualizowane kwartalnie",
    "Modularny system playbooków per segment, persona i etap deala, ze śledzeniem użycia w CRM lub platformie enablement"
  ]
},
{
  id: 1012, pillar: 1, type: "scale",
  title: "Gdy nowy pracownik GTM dołącza do zespołu, ile czasu zajmuje mu przed podjęciem decyzji zgodnej z Państwa strategią GTM, bez pytania leadership?",
  options: [
    "Większość nowych pracowników nigdy w pełni nie przyswaja strategii, polegają na leadership w nieskończoność",
    "Zajmuje sześć miesięcy lub więcej, zanim nowy pracownik może samodzielnie podejmować spójne decyzje",
    "Trzy do sześciu miesięcy, strategia jest udokumentowana, ale złożona do przyswojenia",
    "Cztery do ośmiu tygodni, onboarding obejmuje strukturalne sesje strategiczne z frameworkami decyzyjnymi",
    "Dwa do czterech tygodni: strategia jest udokumentowana, przekazywana w onboardingu i weryfikowana przez ustrukturyzowany test orientacji"
  ]
},
{
  id: 1013, pillar: 1, type: "scale",
  title: "W jakim stopniu Państwa strategia GTM jest zrównoważona pomiędzy akwizycją nowych logo a expansion istniejących kont?",
  options: [
    "Prawie całkowicie skoncentrowana na nowych logo, expansion jest niestrukturalny",
    "Expansion odbywa się reaktywnie, ale nie istnieje dedykowany motion ani cel",
    "Odrębne cele dla nowych logo i expansion istnieją, ale zasoby są mocno ukierunkowane na nowe logo",
    "Dedykowana pojemność expansion, cele i playbooki równolegle do motion nowych logo",
    "Model dwusilnikowy, nowe logo i expansion są odpowiednio zasobowo wyposażone, mierzone i weryfikowane niezależnie"
  ]
},
{
  id: 1014, pillar: 1, type: "scale",
  title: "Jak systematycznie testujecie Państwo nowe podejścia GTM, zanim rzucą się zasoby na wdrożenie szerokie?",
  options: [
    "Nowe inicjatywy są uruchamiane na szeroką skalę bez pilotażu",
    "Punktowe testy na małą skalę są przeprowadzane, ale bez zdefiniowanych kryteriów sukcesu",
    "Pilotaże są prowadzone, ale wyniki są oceniane nieformalnie i niespójnie",
    "Zdefiniowane kryteria pilotażu, progi sukcesu i decyzje skalowania udokumentowane przed uruchomieniem",
    "Formalny playbook testowania i skalowania, hipoteza, kohorta testowa, okres pomiaru i kryteria go/no-go dla każdej inicjatywy"
  ]
},
{
  id: 1015, pillar: 1, type: "scale",
  title: "W jakim stopniu Państwa strategia GTM bezpośrednio kieruje planami rekrutacji i modelowaniem pojemności?",
  options: [
    "Decyzje rekrutacyjne są podejmowane reaktywnie na podstawie zastępstw lub instynktu kierownictwa",
    "Strategia GTM i plany rekrutacji są w najlepszym wypadku luźno powiązane",
    "Roczne plany headcount odwołują się do strategii GTM, ale nie są aktualizowane w trakcie roku",
    "Kwartalne przeglądy pojemności przekładają cele GTM na plany rekrutacji per rola",
    "Rolowany model pojemności, cele pipeline, założenia ramp-up i sekwencjonowanie rekrutacji są aktualizowane w każdym kwartale"
  ]
},
{
  id: 1016, pillar: 1, type: "scale",
  title: "Jaki procent Państwa obecnego pipeline pochodzi spoza głównego ICP, i jak leadership reaguje na tę liczbę?",
  options: [
    "Nie śledzimy pipeline ICP vs nie-ICP, cały pipeline jest traktowany równo",
    "Pipeline spoza ICP istnieje, ale nie jest mierzony ani zarządzany",
    "Śledzimy go, ale pipeline spoza ICP jest akceptowany, ponieważ potrzebujemy przychodu",
    "Pipeline spoza ICP jest śledzony, zarządzany, a handlowcy nie są motywowani do jego realizacji",
    "Zgodność z ICP jest metryką quota, handlowcy są wyraźnie penalizowani za realizację deali spoza ICP powyżej zdefiniowanego progu"
  ]
},
{
  id: 1017, pillar: 1, type: "scale",
  title: "W jakim stopniu Państwa strategia GTM opiera się na zwalidowanych dowodach rynkowych, a nie na założeniach leadership?",
  options: [
    "Strategia jest głównie budowana na opinii założyciela lub kierownictwa",
    "Pewne rozmowy z klientami zasilają strategię, ale nie w sposób systematyczny",
    "Roczne badanie VOC lub rynku zasila cykl planowania",
    "Strukturalne analizy win/loss, wywiady z klientami i dane rynkowe są weryfikowane przed aktualizacjami strategicznymi",
    "Strategia GTM jest zakotwiczona w ciągłej pętli dowodowej, wywiady z kupującymi, dane z deali i sygnały rynkowe weryfikowane kwartalnie"
  ]
},
{
  id: 1018, pillar: 1, type: "scale",
  title: "W ciągu ostatnich czterech kwartałów, ile razy rzeczywisty mix Państwa przychodu, per segment, motion lub geografia, istotnie różnił się od tego, co przewidywała Państwa strategia GTM?",
  options: [
    "Nie śledzimy rzeczywistego mixu przychodu w porównaniu z prognozami strategicznymi",
    "Istotne różnice istnieją, ale nie są formalnie weryfikowane",
    "Różnice w mixie są omawiane rocznie w planowaniu, ale nie śledzone z kwartału na kwartał",
    "Kwartalny przegląd rzeczywistego vs prognozowanego mixu przychodu generuje udokumentowaną analizę odchyleń",
    "Odchylenie mixu jest metryką na poziomie board, śledzone miesięcznie, wyjaśniane kwartalnie i prowadzące do dostosowania strategicznego, gdy odchylenie przekracza zdefiniowane progi"
  ]
},
{
  id: 1019, pillar: 1, type: "scale",
  title: "W ostatnim kwartale, gdy dwa zespoły GTM konkurowały o ten sam zasób lub priorytet, jak to zostało rozwiązane, i czy rozwiązanie było powiązane z udokumentowanymi kryteriami strategicznymi?",
  options: [
    "Strategia rzadko wpływa na codzienne decyzje: realizacja jest napędzana tym, co pilne",
    "Strategia jest sporadycznie przywoływana, ale nie zarządza kompromisami zasobów",
    "Większość liderów odwołuje się do strategii w planowaniu, ale nie w decyzjach operacyjnych",
    "Strategia jest wykorzystywana do arbitrażu konfliktów zasobów i decyzji priorytetyzacji",
    "Strategia GTM jest głównym pryzmatem decyzyjnym, wszystkie istotne decyzje dotyczące zasobów, rekrutacji i inwestycji są weryfikowane w stosunku do niej"
  ]
},
{
  id: 1020, pillar: 1, type: "scale",
  title: "Czy Państwa obecny plan GTM wyraźnie adresuje zarówno cele egzekucyjne na 12 miesięcy, jak i zmiany modelu operacyjnego konieczne do utrzymania wyników na 24 miesiące?",
  options: [
    "Strategia jest całkowicie skupiona na celach krótkoterminowych, brak strukturalnej wizji modelu operacyjnego na 24 miesiące",
    "Długoterminowy kierunek istnieje nieformalnie, ale nie jest połączony z aktualnymi decyzjami GTM",
    "Cele na 12 miesięcy są zdefiniowane, ale implikacje modelu operacyjnego na 24 miesiące nie są wyraźnie zaplanowane",
    "Cele krótkoterminowe i model operacyjny na 24 miesiące są udokumentowane i weryfikowane w planowaniu",
    "Strategia dwuhoryzontowa zarządza decyzjami GTM, cele egzekucyjne na 12 miesięcy i wymagania pojemności na 24 miesiące są utrzymywane równolegle, a kompromisy między nimi są wyraźnie rozstrzygane"
  ]
},

/* ===========================================================
   FILAR 2: MARKET INTELLIGENCE (20 QUESTIONS)
   =========================================================== */

{
  id: 2001, pillar: 2, type: "scale",
  title: "Jak precyzyjnie zdefiniowany jest Państwa Ideal Customer Profile i kiedy ostatnio został zwalidowany w stosunku do danych closed-won?",
  subtitle: "Odpowiedzi dotyczą głównego segmentu przychodowego i głównego motion GTM, chyba że pytanie wyraźnie wymaga rozróżnienia.",
  options: [
    "Brak zdefiniowanego ICP, realizujemy każdą firmę, która wykazuje zainteresowanie",
    "Istnieje przybliżony ICP oparty na intuicji założyciela, niezwalidowany",
    "Istnieje dokument ICP, ale nie został zwalidowany w stosunku do danych deali od ponad roku",
    "Kryteria ICP zwalidowane w stosunku do danych kohort closed-won w ciągu ostatnich 12 miesięcy",
    "ICP jest żywym modelem scoringowym, sygnały firmograficzne, technograficzne i behawioralne zwalidowane w stosunku do danych przychodowych kwartalnie"
  ]
},
{
  id: 2002, pillar: 2, type: "scale",
  title: "Jak jest budowana, utrzymywana i priorytetyzowana Państwa lista kont docelowych dla sprzedaży i marketingu?",
  options: [
    "Brak formalnej listy kont, handlowcy sami się sourcują według osobistego osądu",
    "Statyczna lista zbudowana raz, nieregularnie weryfikowana ani aktualizowana",
    "Lista istnieje, ale scoring i priorytetyzacja są niespójne pomiędzy handlowcami",
    "Lista kont oparta na danych, odświeżana kwartalnie ze zdefiniowanymi kryteriami scoringu",
    "Dynamiczna, hierarchiczna lista kont, aktualizowana miesięcznie, scorowana według dopasowania do ICP i sygnałów zakupowych, z przypisaną osobą odpowiedzialną per konto"
  ]
},
{
  id: 2003, pillar: 2, type: "scale",
  title: "Jak zbieracie Państwo, syntetyzujecie i działacie na inteligencji dotyczącej punktów bólu i wyzwalaczy zakupu klientów?",
  options: [
    "Brak strukturalnego procesu, insights pochodzą z nieformalnych rozmów handlowców",
    "Feedback klientów jest zbierany ad hoc, ale rzadko syntetyzowany",
    "Rozmowy lub ankiety VOC odbywają się sporadycznie, ale wyniki nie są używane spójnie",
    "Strukturalny program VOC z udokumentowanymi wynikami weryfikowanymi w planowaniu GTM",
    "Ciągła pętla inteligencji klienta, wywiady, sygnały z deali i dane ze wsparcia syntetyzowane i weryfikowane miesięcznie"
  ]
},
{
  id: 2004, pillar: 2, type: "scale",
  title: "Jak spójnie Państwa model segmentacji jest stosowany w sprzedaży, marketingu i produkcie?",
  options: [
    "Brak segmentacji, wszystkie konta są traktowane tak samo niezależnie od wielkości czy dopasowania",
    "Segmentacja istnieje koncepcyjnie, ale nie odzwierciedla się w routingu, pricingu ani messagingu",
    "Segmenty są zdefiniowane, ale stosowane niespójnie, różne zespoły używają różnych definicji",
    "Segmentacja jest skodyfikowana w CRM, używana w routingu i targetowaniu kampanii, weryfikowana rocznie",
    "Ujednolicona architektura segmentacji zarządza CRM, pricingiem, targetowaniem kampanii i planowaniem pojemności, weryfikowana kwartalnie i stosowana spójnie"
  ]
},
{
  id: 2005, pillar: 2, type: "scale",
  title: "Jak monitorujecie Państwo trendy rynkowe i ruchy konkurentów, i jak szybko insights trafiają do decydentów?",
  options: [
    "Brak monitoringu, o ruchach konkurentów dowiadujemy się, gdy wspominają o nich prospekci",
    "Sporadyczny monitoring na LinkedIn lub w newsach przez pojedyncze osoby, niedystrybuowany systematycznie",
    "Monitoring konkurencji i rynku istnieje, ale nie jest ustrukturyzowany ani regularny",
    "Zdefiniowana kadencja monitoringu z wynikami dzielonymi z liderami GTM miesięcznie",
    "Ciągły przepływ inteligencji rynkowej, źródła monitorowane, sygnały triażowane, a briefy dostarczane do leadership w zdefiniowanej kadencji"
  ]
},
{
  id: 2006, pillar: 2, type: "scale",
  title: "Wymień dwie główne bariery blokujące adopcję produktu po stronie Państwa kupujących. Czy opierają się na udokumentowanych wywiadach z kupującymi, czy są wyciągnięte z rozmów z handlowcami?",
  options: [
    "Brak udokumentowanego zrozumienia, handlowcy zakładają, że wiedzą, co jest ważne",
    "Anegdotyczne zrozumienie starszych handlowców, nieskodyfikowane",
    "Kryteria decyzyjne uchwycone nieformalnie w notatkach CRM, ale nieskonsolidowane",
    "Kryteria decyzyjne udokumentowane per segment, zwalidowane wywiadami win/loss",
    "Zwalidowana mapa kryteriów decyzyjnych, ważona per segment i wielkość deala, aktualizowana przy każdym kwartalnym przeglądzie win/loss"
  ]
},
{
  id: 2007, pillar: 2, type: "scale",
  title: "W ostatnich 10 przegranych dealach, jak często persona-blokujący wykoleił decyzję, i czy ten schemat jest udokumentowany w formalnej mapie wpływu?",
  options: [
    "Brak mapowania person, handlowcy celują w każdego, kto odpowie na prospecting",
    "Nieformalna wiedza o kluczowych personach istnieje wśród starszych handlowców, ale nie jest udokumentowana",
    "Główna persona kupującego jest udokumentowana, ale role championa i blokującego są słabo rozumiane",
    "Istnieje mapa multi-persona per segment, zwalidowana przez deal reviews i wywiady win/loss",
    "Zwalidowana mapa wpływu dokumentuje role championa, kupującego ekonomicznego i blokującego per segment i wielkość deala, aktualizowana kwartalnie i używana w kwalifikacji deali"
  ]
},
{
  id: 2008, pillar: 2, type: "scale",
  title: "Czy potrafią Państwo wymienić dwie główne bariery uniemożliwiające docelowym kupującym adopcję produktu, i czy są oparte na wywiadach z kupującymi, czy wywnioskowane z przegranych deali?",
  options: [
    "Brak insight, bariery adopcji nie są badane",
    "Istnieją założenia oparte na obiekcjach handlowych, niezwalidowane zewnętrznie",
    "Pewne bariery adopcji zidentyfikowane przez analizę przegranych deali",
    "Bariery adopcji udokumentowane i zwalidowane wywiadami z kupującymi oraz analizą churn",
    "Udokumentowany model barier adopcji, per segment, persona i etap deala, aktualizowany danymi rynkowymi i deali kwartalnie"
  ]
},
{
  id: 2009, pillar: 2, type: "scale",
  title: "Co skłania klientów do przechodzenia z narzędzi konkurentów do Państwa, lub do opuszczania Państwa, i jak precyzyjnie Państwo to wiecie?",
  options: [
    "Brak strukturalnego insight na temat dynamiki switch",
    "Nieformalne zrozumienie z kilku anegdot handlowych",
    "Wyzwalacze switch zidentyfikowane przez sporadyczne rozmowy win/loss",
    "Wyzwalacze switch udokumentowane per segment, zwalidowane strukturalnymi wywiadami win/loss",
    "Model inteligencji wyzwalaczy switch, schematy przepływu od konkurentów śledzone i weryfikowane w planowaniu GTM kwartalnie"
  ]
},
{
  id: 2010, pillar: 2, type: "scale",
  title: "Czy Państwa zespół śledzi trendy makroekonomiczne i sektorowe kształtujące budżety kupujących, i czy to bezpośrednio zasila Państwa priorytety GTM?",
  options: [
    "Brak świadomości, trendy makro nie są częścią planowania GTM",
    "Ogólna świadomość, ale niepołączona ze strategią deali lub segmentów",
    "Kontekst makro jest omawiany na spotkaniach leadership, ale nie operacjonalizowany",
    "Trendy makro zintegrowane z rocznym planowaniem GTM z wyraźnymi założeniami scenariuszowymi",
    "Sygnały makro są śledzone w sposób ciągły i bezpośrednio zasilają priorytetyzację segmentów i dostosowania messagingu"
  ]
},
{
  id: 2011, pillar: 2, type: "scale",
  title: "W jakim stopniu Państwa model segmentacji rynku jest dobrze zdefiniowany i operacyjnie spójny w sprzedaży, marketingu i produkcie?",
  options: [
    "Brak segmentacji, wszystkie konta są traktowane tak samo",
    "Segmentacja istnieje koncepcyjnie, ale nie odzwierciedla się w procesach czy narzędziach",
    "Segmenty są zdefiniowane, ale stosowane niespójnie pomiędzy zespołami",
    "Segmentacja jest skodyfikowana w CRM, używana w routingu i weryfikowana rocznie",
    "Ujednolicona architektura segmentacji, spójna w CRM, targetowaniu kampanii, pricingu i modelach pojemności, weryfikowana kwartalnie"
  ]
},
{
  id: 2012, pillar: 2, type: "scale",
  title: "W jakim stopniu Państwa definicja ICP jest zgodna z segmentami, które generują największy ARR, najniższy CAC i najlepszy NRR?",
  options: [
    "Brak połączenia, ICP nie jest powiązany z danymi wydajności finansowej",
    "Przybliżone założenia o segmentach najlepiej wydajnych, niezwalidowane",
    "ICP i dane przychodu są porównywane rocznie, ale nie operacjonalizowane",
    "Scoring ICP jest kalibrowany w stosunku do danych ARR, CAC i NRR weryfikowanych w ostatnim kwartale",
    "ICP jest modelem ważonym przychodem, aktualizowanym każdego kwartału analizą kohort closed-won i metrykami efektywności"
  ]
},
{
  id: 2013, pillar: 2, type: "scale",
  title: "Które persony najbardziej systematycznie przyspieszają velocity deali w Państwa głównych kontach, i czy ten schemat jest udokumentowany oddzielnie od analizy blokujących?",
  options: [
    "Brak mapowania championów i akceleratorów: wszystkie persony traktowane tak samo w trakcie realizacji deala",
    "Doświadczeni handlowcy nieformalnie wiedzą, kogo angażować, aby przyspieszyć deale, ale nie jest to udokumentowane",
    "Główna persona championa jest udokumentowana, ale dynamika akceleracji nie jest analizowana oddzielnie od blokujących",
    "Persony akceleratorów i blokujących są udokumentowane per segment i używane w kwalifikacji deali oraz coachingu",
    "Kompletna architektura wpływu, profile akceleratorów championów i blokujących udokumentowane per segment i wielkość deala, walidowane kwartalnie przez analizę win/loss i zintegrowane z coachingiem handlowców oraz deal reviews"
  ]
},
{
  id: 2014, pillar: 2, type: "scale",
  title: "Czy Państwa program win/loss systematycznie generuje insighty, które zmieniają to, jak Państwo sprzedają lub pozycjonują?",
  options: [
    "Brak programu win/loss, wyniki nie są formalnie weryfikowane",
    "Handlowcy rejestrują powody win/loss w CRM, ale wyniki nigdy nie są analizowane",
    "Dane win/loss są weryfikowane nieformalnie, czasami generując anegdoty",
    "Strukturalny program win/loss z kwartalną syntezą i udokumentowanymi działaniami GTM",
    "Insights win/loss prowadzą do zdefiniowanych zmian w playbookach, messagingu i pozycjonowaniu konkurencyjnym każdego kwartału"
  ]
},
{
  id: 2015, pillar: 2, type: "scale",
  title: "Które segmenty klientów generują Państwa najwyższy lifetime value, i czy ten wniosek bezpośrednio kieruje Państwa decyzjami priorytetyzacji i targetowania ICP?",
  options: [
    "Brak danych LTV, wszyscy klienci są traktowani jako mający równą wartość",
    "Przybliżona świadomość oparta na wielkości ARR, niezwalidowana w stosunku do danych retencji lub expansion",
    "Istnieją szacunki LTV, ale nie są segmentowane ani operacjonalizowane w targetowaniu",
    "LTV per segment jest obliczany rocznie i zasila priorytetyzację ICP",
    "LTV jest żywym inputem segmentacji, aktualizowanym kwartalnie, zasilającym scoring kont, alokację pojemności i decyzje pricingowe"
  ]
},
{
  id: 2016, pillar: 2, type: "scale",
  title: "W jakim stopniu rozumieją Państwo swój ekosystem partnerów i channel, kto przyspiesza deale, kto je blokuje i dlaczego?",
  options: [
    "Brak inteligencji partnerów, dynamika ekosystemu jest nieznana",
    "Nieformalne relacje z kilkoma partnerami, brak systematycznego insight",
    "Pipeline partnerów jest śledzony, ale wpływ na wyniki deali nie jest analizowany",
    "Udokumentowany model inteligencji partnerów, weryfikowany w kwartalnych business reviews partnerów",
    "Skwantyfikowana mapa ekosystemu, pipeline sourcowany vs wpływany przez partnerów, win rates i długości cyklu śledzone i weryfikowane miesięcznie"
  ]
},
{
  id: 2017, pillar: 2, type: "scale",
  title: "Jak precyzyjnie rozumieją Państwo wrażliwość cenową i skłonność do zapłaty w kluczowych segmentach klientów?",
  options: [
    "Brak inteligencji pricingowej, cena jest ustalana na zasadzie koszt plus lub benchmark konkurencyjny",
    "Anegdotyczna świadomość z deali przegranych na cenie",
    "Wrażliwość cenowa oceniana przez sporadyczne wywiady z kupującymi",
    "Skłonność do zapłaty zwalidowana strukturalnym badaniem i analizą wskaźnika closing per przedział cenowy",
    "Model elastyczności cenowej per segment, zwalidowany testami kontrolowanymi, danymi win/loss i wywiadami z kupującymi, weryfikowany rocznie"
  ]
},
{
  id: 2018, pillar: 2, type: "scale",
  title: "Jak śledzicie Państwo pojawiających się konkurentów i potencjalnych disruptorów rynku, zanim pojawią się w Państwa dealach?",
  options: [
    "Pojawiający się konkurenci wychodzą na jaw dopiero wtedy, gdy prospekci wspominają o nich w rozmowie",
    "Monitoring ad hoc przez liderów sprzedaży bez formalnego raportowania",
    "Okresowy skan konkurencyjny jest przeprowadzany, ale nie w zdefiniowanej kadencji",
    "Kwartalny przegląd pojawiających się konkurentów jest przeprowadzany i dzielony z leadership GTM",
    "Program ciągłego monitoringu zagrożeń, nowi gracze śledzeni, briefy dystrybuowane i playbooki aktualizowane proaktywnie"
  ]
},
{
  id: 2019, pillar: 2, type: "scale",
  title: "W jakim stopniu Państwa roadmapa produktu jest powiązana z kwantyfikowanymi dowodami rynkowymi, a nie tylko z opiniami wewnętrznymi?",
  options: [
    "Roadmapa jest prowadzona przez pojemność engineering i priorytety leadership, nie przez dowody rynkowe",
    "Inputy rynkowe są zbierane nieformalnie, ale rzadko prowadzą sekwencjonowanie roadmapy",
    "Prośby klientów są rejestrowane i przywoływane w planowaniu, ale nie systematycznie ważone",
    "Decyzje roadmapy są powiązane z udokumentowanymi sygnałami rynkowymi z wyraźnym uzasadnieniem priorytetu",
    "Każdy element roadmapy ma udokumentowane dossier dowodów rynkowych, częstotliwość klienta, wpływ na deale i sygnał retencji, weryfikowane w planowaniu"
  ]
},
{
  id: 2020, pillar: 2, type: "scale",
  title: "W ostatnim kwartale, jaki procent Państwa zamkniętych deali angażował partnera, i czy wiecie Państwo, czy zaangażowanie partnera przyspieszyło, czy skomplikowało każde zamknięcie?",
  options: [
    "Zaangażowanie partnerów nie jest śledzone, nie wiemy, które deale angażowały partnerów ani jak wpłynęły na wyniki",
    "Wiemy w przybliżeniu, które deale angażowały partnerów, ale nie analizowaliśmy wpływu na wskaźnik closing ani długość cyklu",
    "Deale z zaangażowaniem partnerów są śledzone, ale różnice win rate i długości cyklu nie były formalnie analizowane",
    "Śledzenie deali partnerskich istnieje i porównaliśmy win rate oraz długość cyklu vs deale bezpośrednie, weryfikowane kwartalnie",
    "Żywy model wyników partnerów, pipeline sourcowany vs wpływany przez partnerów, delta win rate i wpływ na długość cyklu śledzone miesięcznie i weryfikowane na spotkaniach przychodowych"
  ]
},

/* ===========================================================
   FILAR 3: PRODUCT MARKETING (20 QUESTIONS)
   =========================================================== */

{
  id: 3001, pillar: 3, type: "scale",
  title: "Gdy prospekt pyta \"co robicie i dlaczego ma to dla mnie znaczenie?\", jak spójnie Państwa handlowcy i strona internetowa dostarczają tę samą jasną odpowiedź?",
  subtitle: "Odpowiedzi dotyczą głównego segmentu przychodowego i głównego motion GTM, chyba że pytanie wyraźnie wymaga rozróżnienia.",
  options: [
    "Każdy handlowiec i każda strona daje inną odpowiedź, brak spójności",
    "Istnieje główny message, ale handlowcy często zbaczają lub improwizują",
    "Messaging jest spójny w materiałach pisemnych, ale nie w rozmowach na żywo",
    "Główny messaging jest skodyfikowany, szkolony i używany spójnie w rozmowach i materiałach",
    "Messaging jest systematycznie testowany, aktualizowany kwartalnie i poddawany certyfikacji, zanim handlowcy go użyją w dealach"
  ]
},
{
  id: 3002, pillar: 3, type: "scale",
  title: "W ostatnich 10 zweryfikowanych rozmowach handlowych, czy handlowcy dostarczyli ten sam główny message różnicujący, czy też opowieść różniła się w zależności od handlowca, kanału i dnia?",
  options: [
    "Brak formalnego pozycjonowania, firma opisuje się inaczej w zależności od pytanej osoby",
    "Istnieje oświadczenie pozycjonujące, ale nie odzwierciedla się spójnie w sprzedaży czy marketingu",
    "Pozycjonowanie jest udokumentowane i używane w marketingu, ale nie stosowane w rozmowach handlowych",
    "Pozycjonowanie jest udokumentowane, szkolone i odzwierciedlone we wszystkich głównych punktach kontaktu",
    "Pozycjonowanie jest zwalidowane badaniami kupujących, zintegrowane z narracją kategorii i osadzone w każdym asset i GTM motion"
  ]
},
{
  id: 3003, pillar: 3, type: "scale",
  title: "Skąd wiadomo, że Państwa propozycja wartości rzeczywiście rezonuje z segmentami ICP, i jakie dowody to wspierają?",
  options: [
    "Zakładamy, że rezonuje, żadna formalna walidacja nie została przeprowadzona",
    "Anegdoty handlowców sugerują rezonans, ale nie został formalnie przetestowany",
    "Kilka wywiadów z klientami potwierdziło rezonans, ale nie w różnych segmentach",
    "Propozycja wartości zwalidowana strukturalnymi wywiadami z kupującymi i analizą win/loss per segment",
    "Rezonans jest testowany w sposób ciągły, poprawa messagingu śledzona w konwersji deali, wywiadach i A/B testach per segment"
  ]
},
{
  id: 3004, pillar: 3, type: "scale",
  title: "W ostatnich 10 dealach closed-won, jaki procent zawierał udokumentowany powód wyrażony przez klienta, bezpośrednio odpowiadający Państwa głównemu messaging różnicującemu?",
  options: [
    "Nie rejestrujemy, dlaczego klienci twierdzą, że nas wybrali",
    "Mamy kilka notatek o wygranych, ale nie są kodowane w stosunku do naszego messagingu różnicującego",
    "Około jedna czwarta wygranych odwołuje się do naszego głównego messagingu, pozostałe wskazują inne powody",
    "Połowa lub więcej wygranych odwołuje się do naszego głównego messagingu różnicującego w udokumentowanych notatkach o wygranych",
    "Ponad 70 % deali closed-won zawiera powód wyrażony przez klienta odpowiadający naszemu udokumentowanemu głównemu różnicowaniu, śledzone i weryfikowane kwartalnie"
  ]
},
{
  id: 3005, pillar: 3, type: "scale",
  title: "Czy messaging jest systematycznie dostosowany do poszczególnych person kupujących: nie tylko pod kątem seniority, ale bólu i języka charakterystycznego dla roli?",
  options: [
    "Ogólny message używany dla wszystkich person",
    "Messaging jest dostosowywany nieformalnie przez doświadczonych handlowców, ale nieskodyfikowany",
    "Istnieją specyficzne dla person punkty dyskusyjne, ale nie są używane spójnie",
    "Messaging per persona udokumentowany dla głównych ról kupujących, zintegrowany z playbookami i prezentacjami",
    "Architektura messagingu per persona, ból, język i dowody specyficzne dla roli, zwalidowane wywiadami i zintegrowane ze wszystkimi assets"
  ]
},
{
  id: 3006, pillar: 3, type: "scale",
  title: "Jak spójnie handlowcy używają najnowszych zatwierdzonych materiałów messagingowych bez ich modyfikowania ani zastępowania?",
  options: [
    "Handlowcy używają własnych materiałów, standardowe prezentacje są rzadko otwierane",
    "Handlowcy sporadycznie używają zatwierdzonych materiałów, ale personalizują silnie i nieprzewidywalnie",
    "Większość handlowców używa zatwierdzonych materiałów, ale z niespójnymi modyfikacjami",
    "Zatwierdzone materiały są używane spójnie z drobnymi, autoryzowanymi personalizacjami",
    "Kontrolowana biblioteka assets, wersjonowana, adopcja śledzona w CRM lub platformie enablement, odchylenia sygnalizowane na deal reviews"
  ]
},
{
  id: 3007, pillar: 3, type: "scale",
  title: "Skąd Państwo wiedzą, które konkretne messages, dowody lub ramowanie systematycznie posuwają deale do przodu?",
  options: [
    "Brak insight, nie śledzimy, które messages posuwają deale do przodu",
    "Anegdotyczny feedback od starszych handlowców, niezwalidowany ani niesystematyzowany",
    "Notatki win/loss zawierają odniesienia do messages, ale nie są analizowane",
    "Wydajność messages jest weryfikowana w analizie win/loss i sesjach coachingu handlowego",
    "System inteligencji messages, win/loss kodowane według tematu messages, poprawa konwersji śledzona per asset i argumentacja"
  ]
},
{
  id: 3008, pillar: 3, type: "scale",
  title: "W jakim stopniu Państwa biblioteka dowodów, case studies i danych ROI jest kompletna, użyteczna i aktualna?",
  options: [
    "Brak formalnej biblioteki dowodów, handlowcy opierają się na pamięci lub ogólnych rekomendacjach",
    "Istnieje kilka case studies, ale są przestarzałe lub niespecyficzne dla segmentów",
    "Biblioteka dowodów istnieje, ale nie jest zorganizowana według segmentu, persony czy use case'a",
    "Biblioteka dowodów zorganizowana według segmentu i use case'a, weryfikowana kwartalnie",
    "Strategiczna architektura dowodów, case studies, kalkulatory ROI i walidacje stron trzecich indeksowane według segmentu, persony i etapu deala"
  ]
},
{
  id: 3009, pillar: 3, type: "scale",
  title: "W Państwa obecnym demo, które funkcjonalności są pokazywane w pierwszych 10 minutach, i czy ta sekwencja jest oparta na zwalidowanych danych o tym, co generuje konwersję do następnego etapu?",
  options: [
    "Brak systematycznego zrozumienia, funkcjonalności są demonstrowane według tego, co handlowiec lubi pokazywać",
    "Doświadczeni handlowcy mają nieformalną świadomość, co działa, ale nie jest to udokumentowane ani dzielone",
    "Rezonans funkcjonalności jest śledzony anegdotycznie przez feedback z deali, ale niesystematyzowany",
    "Rezonans funkcjonalności per segment i etap deala jest udokumentowany analizą win/loss i demo",
    "Istnieje mapa funkcjonalności-etap deala, zwalidowana wywiadami z kupującymi i danymi postępu, aktualizowana kwartalnie i używana do zarządzania strukturą demo"
  ]
},
{
  id: 3010, pillar: 3, type: "scale",
  title: "Jaki procent Państwa handlowców pomyślnie ukończył ostatnią certyfikację messagingu, i kiedy ta certyfikacja została zaktualizowana, aby odzwierciedlić Państwa aktualne pozycjonowanie?",
  options: [
    "Nie istnieje żadna certyfikacja messagingu",
    "Certyfikacja istnieje, ale mniej niż połowa handlowców ją ukończyła",
    "Większość handlowców ukończyła certyfikację, ale nie została zaktualizowana od ponad 12 miesięcy",
    "Ponad 80 % handlowców certyfikowanych na aktualnym messagingu w ciągu ostatnich sześciu miesięcy",
    "Certyfikacja jest obowiązkowa, handlowcy nie mogą mieć quota bez jej zdania, ponownie testowani przy każdej istotnej aktualizacji pozycjonowania, ze wskaźnikami zdawalności śledzonymi per manager"
  ]
},
{
  id: 3011, pillar: 3, type: "scale",
  title: "Po Państwa ostatnich 10 demo, ile zakończyło się udokumentowanym następnym krokiem, i czy śledzicie, które elementy demo wygenerowały ten wynik?",
  options: [
    "Następne kroki po demo są nieformalne, nie ma śledzenia wskaźnika konwersji ani tego, co go wygenerowało",
    "Niektórzy handlowcy dokumentują następne kroki, ale korelacja demo-wynik nie jest systematycznie śledzona",
    "Konwersja demo-następny krok jest śledzona jako liczba, ale które elementy demo wygenerowały wyniki jest nieznane",
    "Wskaźnik konwersji demo jest śledzony per segment i weryfikowany w coachingu, z pewną korelacją z zawartością i sekwencją demo",
    "Zarządzany system wydajności demo, wskaźnik konwersji śledzony per handlowiec i segment, elementy demo skorelowane z wynikami, a wnioski używane do aktualizacji standardowej struktury demo kwartalnie"
  ]
},
{
  id: 3012, pillar: 3, type: "scale",
  title: "Jaki wpływ ma Product Marketing na priorytetyzację roadmapy produktu, i jak ten wpływ jest realizowany?",
  options: [
    "PMM nie ma miejsca w dyskusjach roadmapy",
    "PMM sporadycznie dostarcza input, ale rzadko zmienia priorytetyzację",
    "PMM prezentuje dowody rynkowe w przeglądach planowania z niespójnym wpływem",
    "PMM posiada strukturalny proces inputu rynkowego z udokumentowanym wpływem na decyzje roadmapy",
    "PMM jest formalnym współwłaścicielem priorytetyzacji roadmapy, dowody rynkowe są wymaganym inputem dla każdej istotnej decyzji dotyczącej funkcjonalności"
  ]
},
{
  id: 3013, pillar: 3, type: "scale",
  title: "Jak często deal osiąga zaawansowany etap, propozycję lub zakup, a następnie umiera bez udokumentowanego wyjaśnienia, na które Państwa zespół zareagował?",
  options: [
    "Śmierć deali w zaawansowanym etapie jest powszechna, a przyczyny nigdy nie są systematycznie analizowane",
    "Dyskutujemy o stratach w zaawansowanym etapie nieformalnie, ale nie śledzimy schematów",
    "Powody strat w zaawansowanym etapie są rejestrowane, ale analiza odbywa się w najlepszym wypadku rocznie",
    "Straty w zaawansowanym etapie uruchamiają strukturalny przegląd w ciągu dwóch tygodni z udokumentowaną przyczyną źródłową",
    "Wskaźnik strat w zaawansowanym etapie jest KPI, każda strata powyżej progu wielkości deala uruchamia udokumentowany przegląd, przyczyny źródłowe są kodowane, a schematy prowadzą do miesięcznych dostosowań PMM i sprzedaży"
  ]
},
{
  id: 3014, pillar: 3, type: "scale",
  title: "W jakim stopniu Państwa motion wdrożeń produktu są dobrze zasobowo wyposażone i egzekwowane, od przygotowania wewnętrznego po aktywację rynku?",
  options: [
    "Wdrożenia odbywają się bez zdefiniowanego procesu, GTM nie jest przygotowany przed release'em",
    "Pewna koordynacja istnieje, ale gotowość GTM jest niespójna",
    "Wdrożenia podążają za podstawowym procesem, ale aktywacja w terenie jest często niekompletna",
    "Zdefiniowany proces wdrożenia z enablement wewnętrznym, dostarczaniem assets i punktami kontrolnymi aktywacji rynku",
    "W pełni zarządzany motion wdrożeń, scorecard gotowości, certyfikacja enablement i pomiar wdrożenie-do-pipeline dla każdego wdrożenia"
  ]
},
{
  id: 3015, pillar: 3, type: "scale",
  title: "Jaki jest wskaźnik konwersji Państwa strony internetowej, od zakwalifikowanego odwiedzającego do zarezerwowanego spotkania lub trialu, i jak porównuje się do poprzedniego kwartału?",
  options: [
    "Nie śledzimy konwersji odwiedzający-do-spotkania na stronie internetowej",
    "Konwersja jest śledzona, ale nie wiemy, jak wygląda dobry benchmark",
    "Śledzimy ją, ale konwersja jest stabilna lub spada bez udokumentowanego planu poprawy",
    "Konwersja odwiedzający-do-spotkania jest śledzona miesięcznie i steruje kwartalną optymalizacją strony internetowej",
    "Konwersja strony internetowej jest zarządzanym KPI, śledzona tygodniowo, testowana A/B w sposób ciągły i weryfikowana w stosunku do benchmarków kategorii kwartalnie z udokumentowanymi celami poprawy"
  ]
},

{
  id: 3016, pillar: 3, type: "scale",
  title: "Czy Państwa funkcja PMM w sposób systematyczny śledzi, dokumentuje i dystrybuuje intelligence konkurencyjne do sprzedaży?",
  options: [
    "Brak funkcji PMM konkurencyjnej: odpowiedzi konkurencyjne są improwizowane w dealach",
    "Battlecards istnieją, lecz są przestarzałe i niestosowane w sposób spójny",
    "Materiały konkurencyjne są aktualizowane okazjonalnie, gdy zmienia się coś istotnego",
    "Program PMM konkurencyjny z kwartalną aktualizacją battlecards i szkoleniem handlowców",
    "Żywy system intelligence konkurencyjnego: posiadany, aktualizowany miesięcznie, zintegrowany z onboardingiem i deal reviews, z monitorowaniem adopcji przez handlowców"
  ]
},
{
  id: 3017, pillar: 3, type: "scale",
  title: "Gdy deal jest tracony na etapie końcowym, po złożeniu propozycji, jak często podana przyczyna dotyczy czegoś, co Państwa zespół PMM mógłby zaadresować?",
  options: [
    "Nie analizujemy strat na etapie końcowym pod kątem messagingu ani pozycjonowania",
    "Okazjonalnie omawiamy przyczyny strat na zaawansowanym etapie w sposób nieformalny",
    "Przeglądamy straty na zaawansowanym etapie kwartalnie, lecz PMM nie uczestniczy w przeglądzie",
    "PMM uczestniczy w przeglądach strat na zaawansowanym etapie i posiada udokumentowane działanie, gdy messaging przyczynił się do straty",
    "PMM prowadzi kwartalny audyt strat na etapie końcowym: każda strata zakodowana według typu błędu messagingu, luki w dowodach lub słabości pozycjonowania konkurencyjnego, z udokumentowaną remediacją"
  ]
},
{
  id: 3018, pillar: 3, type: "scale",
  title: "W jakim stopniu Państwa materiały demo i prezentacyjne są przekonujące oraz stosowane w sposób spójny w interakcjach z kupującymi na żywo?",
  options: [
    "Brak standardowego demo: każdy handlowiec buduje własne",
    "Istnieje standardowe demo, lecz handlowcy znacząco od niego odbiegają w praktyce",
    "Istnieje demo referencyjne używane jako punkt wyjścia, lecz spójność jest niska",
    "Standardowy framework demo z wariantami specyficznymi dla roli, przeszkolonymi i certyfikowanymi przed kontaktem handlowców z prospectami",
    "Operacyjny system demo: standardowa struktura, warianty według segmentu, monitorowane wykorzystanie i aktualizacja na podstawie danych win/loss co kwartał"
  ]
},
{
  id: 3019, pillar: 3, type: "scale",
  title: "W jakim stopniu Product Marketing wnosi mierzalny wkład w pipeline, win rate i velocity dealów?",
  options: [
    "Wpływ PMM na przychody nie jest mierzony",
    "Wkład PMM jest omawiany jakościowo, lecz niepowiązany z metrykami dealów",
    "Istnieją pewne dane wykorzystania assetów i atrybucji kampanii, lecz nie są one systematycznie przeglądane",
    "PMM raportuje wpływ na pipeline, win rate według assetu i performance messagingu kwartalnie",
    "PMM posiada dashboard wpływu na przychody: win rate według segmentu, wykorzystanie assetów, poprawa messagingu i korelacja launch-to-pipeline monitorowane miesięcznie"
  ]
},
{
  id: 3020, pillar: 3, type: "scale",
  title: "Zmapuj swoją treść na ścieżkę kupującego: który etap ma obecnie najniższe pokrycie i czy mają Państwo udokumentowany plan wypełnienia tej luki?",
  options: [
    "Messaging istnieje wyłącznie dla etapu sprzedaży: treść dla etapu świadomości i post-sprzedażowa jest nieobecna",
    "Treść pokrywa kilka etapów, lecz jest pofragmentowana i niepowiązana ze ścieżką kupującego",
    "Główne etapy są pokryte, lecz istnieją luki w treści dowodowej na zaawansowanym etapie i w komunikacji wartości post-sprzedażowej",
    "Udokumentowana mapa treści pokrywa wszystkie główne etapy kupującego od świadomości do odnowienia dla segmentów głównych",
    "Kompletna architektura treści ścieżki kupującego: każdy etap zmapowany według segmentu i persony, świeżość monitorowana, luki priorytetyzowane w kwartalnym planowaniu PMM, a performance mierzony przez konwersję etapów"
  ]
},

/* ===========================================================
   FILAR 4: DEMAND GENERATION (20 PYTAŃ)
   =========================================================== */

{
  id: 4001, pillar: 4, type: "scale",
  title: "W jakim stopniu Państwa strategia demand generation jest jawnie zdefiniowana: kanały, cele, budżety i metryki sukcesu: i kiedy była ostatnio przeglądana?",
  subtitle: "Odpowiedzi dotyczą głównego segmentu przychodowego i głównego motion GTM, chyba że pytanie wyraźnie wymaga rozróżnienia.",
  options: [
    "Brak udokumentowanej strategii: działania DG są wybierane według dostępności lub nawyku",
    "Istnieje przybliżony plan kanałów, lecz brakuje alokacji budżetu lub celów wydajności",
    "Dokument strategii istnieje, lecz nie był formalnie przeglądany od ponad sześciu miesięcy",
    "Udokumentowana strategia DG przeglądana kwartalnie z celami wydajności na kanał",
    "W pełni zoperacjonalizowana strategia DG: mix kanałów, budżet, cele pipeline i rytm przeglądów: wszystko udokumentowane i sterujące realizacją"
  ]
},
{
  id: 4002, pillar: 4, type: "scale",
  title: "Jaka część Państwa kwalifikowanego pipeline pochodzi z kanałów inbound i jak konsekwentnie utrzymuje się to kwartał po kwartale?",
  options: [
    "Inbound nie wnosi znaczącego pipeline: to kanał aspiracyjny",
    "Inbound generuje kilka leadów, lecz jakość jest niska, a wolumen nieprzewidywalny",
    "Inbound generuje kwalifikowane leady, lecz wolumen znacząco się waha w każdym kwartale",
    "Inbound dostarcza stały kwalifikowany pipeline względem celów zdefiniowanych w każdym kwartale",
    "Inbound jest niezawodnym i mierzonym motorem pipeline: wkład monitorowany według kanału, segmentu i etapu konwersji miesięcznie"
  ]
},
{
  id: 4003, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "W jakim stopniu Państwa motion outbound jest przewidywalna i powtarzalna w generowaniu kwalifikowanego pipeline oraz jak jest to mierzone?",
  options: [
    "Brak ustrukturyzowanego outboundu: handlowcy prospektują niezależnie, bez wspólnego podejścia",
    "Outbound istnieje, lecz wyniki są bardzo zmienne i niesystematycznie mierzone",
    "Outbound generuje pipeline, lecz sekwencjonowanie, messaging i kadencja są niespójne",
    "Ustandaryzowana motion outbound ze zdefiniowanymi sekwencjami, kontami docelowymi i celami pipeline przeglądanymi tygodniowo",
    "W pełni oprzyrządowany silnik outbound: aktywność, odpowiedzi i metryki pipeline monitorowane codziennie, z testami A/B na sekwencjach kwartalnie"
  ]
},
{
  id: 4004, pillar: 4, type: "scale",
  title: "Wymień trzy główne źródła pipeline uszeregowane według kosztu na kwalifikowaną okazję. Czy ten ranking wynika z mierzonych danych, czy z pamięci?",
  options: [
    "Paid media nie jest używane lub wydatki są monitorowane tylko na poziomie kosztów",
    "Paid media działa, lecz ROI i wkład w pipeline nie są mierzone",
    "Istnieje pewna atrybucja pipeline, lecz monitorowanie kosztu na okazję jest niespójne",
    "Koszt na okazję monitorowany według kanału z kwartalnymi przeglądami efektywności",
    "Paid media zarządzane jako inwestycja w pipeline: CPO, wkład w CAC i zwrot monitorowane miesięcznie według kanału"
  ]
},
{
  id: 4005, pillar: 4, type: "scale",
  title: "Jak mierzą Państwo wydajność konwersji strony internetowej i jaki jest Państwa wskaźnik konwersji odwiedzającego na kwalifikowany lead?",
  options: [
    "Konwersja strony internetowej nie jest monitorowana: brak widoczności funnelu",
    "Ruch i przesłania formularzy są monitorowane, lecz jakość konwersji nie jest mierzona",
    "Konwersja na górze funnelu jest monitorowana, lecz porzucenia w środku funnelu nie są analizowane",
    "Wskaźniki konwersji monitorowane według strony i źródła, przeglądane miesięcznie z udokumentowanymi działaniami doskonalącymi",
    "Program optymalizacji konwersji: funnel zmapowany od początku do końca, trwające testy A/B i wskaźnik konwersji przeglądany względem benchmarków kwartalnie"
  ]
},
{
  id: 4006, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 10 },
  title: "W jaki sposób systematycznie realizują Państwo Account-Based Marketing na kontach najwyższego priorytetu i jak mierzony jest wpływ?",
  options: [
    "Brak motion ABM: wszystkie konta otrzymują to samo podejście",
    "ABM jest omawiany, lecz nie istnieje dedykowana selekcja kont, budżet ani pomiar",
    "Istnieje pilotażowa motion ABM dla podzbioru kont, lecz bez zdefiniowanych metryk sukcesu",
    "Udokumentowany program ABM z tierami kont, aktywacją kanałową i kwartalnymi przeglądami wpływu na pipeline",
    "W pełni oprzyrządowany silnik ABM: pokrycie, zaangażowanie i wkład w pipeline monitorowane według tieru kont miesięcznie"
  ]
},
{
  id: 4007, pillar: 4, type: "scale",
  title: "W jakim stopniu Państwa motion lead nurturingu dla prospectów jeszcze niegotowych do zakupu jest ustrukturyzowana i monitorowana pod kątem wydajności?",
  options: [
    "Brak nurturingu: prospecci niegotowi od razu do zakupu są porzucani",
    "Istnieje sekwencja emailowa, lecz jest generyczna, niekierowana i nieprzeglądana",
    "Istnieją ścieżki nurturingu według segmentu, lecz wskaźniki zaangażowania i konwersji nie są monitorowane",
    "Programy nurturingu są segmentowane, zautomatyzowane i przeglądane pod kątem wpływu na konwersję kwartalnie",
    "W pełni oprzyrządowany silnik nurturingu: segmentowany według persony i etapu, konwersja monitorowana i aktualizowany na podstawie danych wydajności"
  ]
},
{
  id: 4008, pillar: 4, type: "scale",
  title: "Z jaką konsekwencją treść generuje kwalifikowany popyt i jak mierzą Państwo wkład treści w pipeline?",
  options: [
    "Treść jest produkowana, lecz jej wkład w pipeline nie jest mierzony",
    "Treść generuje ruch, lecz atrybucja do pipeline nie jest monitorowana",
    "Część treści jest przypisywana do pipeline, lecz pomiar jest niespójny",
    "Wkład treści w pipeline monitorowany kwartalnie według typu assetu i tematu",
    "Model popytu napędzanego treścią: każdy asset monitorowany pod kątem ruchu, konwersji MQL i wpływu na pipeline, przeglądany miesięcznie"
  ]
},
{
  id: 4009, pillar: 4, type: "scale",
  title: "Czy mogą Państwo przypisać pipeline i przychody do konkretnych kanałów, kampanii i wydatków DG: i jak często te dane powodują realokację budżetu?",
  options: [
    "Brak atrybucji: każde źródło pipeline jest nieznane lub oznaczone jako „direct”",
    "Istnieje atrybucja pierwszego punktu kontaktu, lecz multi-touch i ROI wydatków nie są monitorowane",
    "Pipeline jest przypisywany na poziomie kanału, lecz ROI na poziomie kampanii nie jest monitorowane spójnie",
    "Atrybucja multi-touch wdrożona, przeglądana miesięcznie według kanału i kampanii",
    "Kompletny model atrybucji: kanał, kampania i wydatki monitorowane aż do przychodów closed-won z kwartalnym raportowaniem ROI"
  ]
},
{
  id: 4010, pillar: 4, type: "scale",
  title: "Czy Marketing jest rozliczany z kwoty przychodów lub pipeline i jak ten cel jest ustalany i przeglądany?",
  options: [
    "Marketing nie ma kwoty przychodów ani pipeline: sukces jest mierzony w leadach lub wyświetleniach",
    "Istnieje nieformalne oczekiwanie pipeline, lecz nie jest formalnie monitorowane ani zarządzane",
    "Marketing ma cel pipeline, lecz jest on drugorzędny i rzadko prowadzi decyzje o budżecie lub headcount",
    "Marketing ma formalną kwotę pipeline przeglądaną miesięcznie z CRO lub VP Sales",
    "Marketing współposiada cel przychodów: wkład w pipeline, win rate na dealach źródłowych marketingu i CPO przeglądane na cotygodniowych spotkaniach przychodowych"
  ]
},
{
  id: 4011, pillar: 4, type: "scale",
  title: "Czy Państwa SLA follow-upu leadów między marketingiem a sprzedażą są zdefiniowane, monitorowane i egzekwowane: i co się dzieje, gdy handlowiec przegapi okno?",
  options: [
    "Brak SLA: follow-up leadów zależy od indywidualnego zachowania handlowca",
    "Istnieje nieformalne oczekiwanie, lecz nie jest monitorowane ani egzekwowane",
    "SLA są udokumentowane, lecz zgodność nie jest nadzorowana",
    "SLA są zdefiniowane, monitorowane w CRM i przeglądane tygodniowo z leadershipem sprzedaży",
    "SLA są kontraktowe między marketingiem a sprzedażą: zgodność monitorowana codziennie, naruszenia eskalowane, a czas odpowiedzi przeglądany na cotygodniowych spotkaniach pipeline"
  ]
},
{
  id: 4012, pillar: 4, type: "scale",
  title: "Z jaką precyzją Państwa demand generation jest spersonalizowany według segmentu, persony i etapu zakupu, ponad podstawową segmentację list?",
  options: [
    "Pojedyncza kampania wysyłana do wszystkich prospectów: brak stosowanej segmentacji",
    "Podstawowa segmentacja według wielkości firmy lub branży, lecz messaging jest generyczny",
    "Istnieją kampanie na poziomie segmentu, lecz targeting według persony i etapu jest niespójny",
    "Kampanie są segmentowane według tieru ICP, persony i etapu funnelu ze spersonalizowanym messagingiem",
    "Dynamiczna personalizacja multi-zmienna: dopasowanie ICP, sygnały intencji, persona i etap automatycznie sterują treścią, timingiem i wyborem kanałów"
  ]
},
{
  id: 4013, pillar: 4, type: "scale",
  title: "W jaki sposób systematycznie Państwa kampanie demand generation są optymalizowane przy pomocy danych i jaka jest kadencja tego przeglądu?",
  options: [
    "Kampanie są prowadzone przez ustalony okres bez przeglądu wydajności ani dostosowań",
    "Wydajność jest przeglądana okazjonalnie, lecz zmiany są dokonywane intuicyjnie",
    "Odbywają się miesięczne przeglądy wydajności, lecz decyzje o optymalizacji są niespójne",
    "Cotygodniowy przegląd wydajności DG napędza udokumentowane dostosowania kampanii",
    "Ciągła pętla optymalizacji: wydajność kanałów, CPO i konwersja monitorowane tygodniowo, z testami A/B i realokacją budżetu w zdefiniowanej kadencji"
  ]
},
{
  id: 4014, pillar: 4, type: "scale",
  show_if: { field: 'gtm_motion', not_contains: ['product-led'] },
  title: "Dla Państwa trzech ostatnich wydarzeń lub webinariów: jaki pipeline został wygenerowany i jaki był koszt na kwalifikowaną okazję dla każdego wydarzenia?",
  options: [
    "Wydarzenia są prowadzone bez monitorowania pipeline ani kosztów: frekwencja to jedyna metryka",
    "Pipeline jest przypisywany do wydarzeń po fakcie, lecz koszt na okazję nie jest obliczany",
    "Wygenerowany pipeline jest monitorowany dla każdego wydarzenia, lecz dane kosztowe są niekompletne lub niepowiązane z kwalifikowanymi okazjami",
    "Wygenerowany pipeline i koszt na kwalifikowaną okazję są monitorowane dla każdego wydarzenia i przeglądane po każdym z nich",
    "Nadzorowany model ROI wydarzeń: wygenerowany pipeline, koszt na okazję i ARR pod wpływem monitorowane dla każdego wydarzenia: wyniki bezpośrednio zasilają decyzje inwestycyjne dla przyszłych wydarzeń"
  ]
},
{
  id: 4015, pillar: 4, type: "scale",
  title: "W jaki sposób systematycznie Państwa zespół projektuje, realizuje i dokumentuje eksperymenty DG oraz jak szybko wyniki kierują decyzjami?",
  options: [
    "Brak eksperymentów: DG realizuje ten sam playbook w sposób powtarzalny",
    "Okazjonalnie dokonywane są zmiany, lecz bez zdefiniowanych hipotez ani kryteriów sukcesu",
    "Prowadzone są pewne testy, lecz dokumentacja i procesy decyzyjne są nieformalne",
    "Kwartalny kalendarz eksperymentów ze zdefiniowanymi hipotezami, okresami pomiaru i kryteriami go/no-go",
    "Kultura ciągłego testowania: cotygodniowe eksperymenty monitorowane we wspólnym rejestrze, wyniki przeglądane miesięcznie, a zwycięskie podejścia wdrażane systematycznie"
  ]
},
{
  id: 4016, pillar: 4, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "W jakim stopniu pętla feedbacku między SDR a Marketingiem na temat jakości leadów jest ustrukturyzowana i jak często ten feedback powoduje zmiany?",
  options: [
    "Brak formalnej pętli feedbacku: SDR i Marketing działają niezależnie",
    "SDR nieformalnie skarżą się na jakość leadów, lecz to nie zmienia kampanii",
    "Odbywają się okazjonalne sesje feedbackowe, lecz bez ustrukturyzowanego formatu ani śledzenia działań",
    "Ustrukturyzowany cotygodniowy proces feedbacku między zespołem SDR a Marketingiem z udokumentowanymi działaniami",
    "System feedbacku z zamkniętą pętlą: wyniki jakości leadów SDR-do-marketingu przeglądane tygodniowo, napędzające dopracowywanie kampanii i ICP w zdefiniowanej kadencji"
  ]
},
{
  id: 4017, pillar: 4, type: "scale",
  show_if: { field: 'gtm_motion', not_contains: ['product-led', 'partner-led'] },
  title: "Czy mają Państwo zdefiniowaną strategię wydarzeń i webinariów z celami pipeline na wydarzenie: i czy mogą Państwo pokazać ROI pipeline z trzech ostatnich wydarzeń?",
  options: [
    "Wydarzenia są wybierane oportunistycznie bez zdefiniowanej strategii ani pomiaru",
    "Wydarzenia są planowane, lecz frekwencja jest główną metryką sukcesu",
    "Istnieje podstawowy kalendarz wydarzeń z monitorowaniem pipeline po wydarzeniu dla wydarzeń głównych",
    "Strategia wydarzeń ze zdefiniowanymi celami pipeline, aktywacją pre/post wydarzeniową i ROI przeglądanym kwartalnie",
    "W pełni oprzyrządowany silnik wydarzeń: źródłowy i wpłynięty pipeline monitorowany dla każdego wydarzenia, z playbookami pre/post i benchmarkami ROI przeglądanymi kwartalnie"
  ]
},
{
  id: 4018, pillar: 4, type: "scale",
  title: "W jakim stopniu Demand Generation jest formalnie włączony w planowanie przychodów i czy Marketing współposiada liczbę pipeline?",
  options: [
    "Marketing nie jest włączany w dyskusje planowania przychodów",
    "Marketing jest informowany o celach przychodów, lecz nie wnosi wkładu w modelowanie pipeline",
    "Marketing wnosi input do planowania, lecz nie współposiada celów pipeline",
    "Marketing współposiada cel pipeline, włączony w proces planowania przychodów",
    "Marketing jest współwłaścicielem planu przychodów: model pipeline, alokacja budżetu i założenia ramp-up przeglądane wspólnie z Sales i Finance"
  ]
},
{
  id: 4019, pillar: 4, type: "scale",
  title: "Czy mogą Państwo skalować pipeline bez proporcjonalnego zwiększania budżetu DG: i czy mają Państwo dane z ostatnich 12 miesięcy, aby to wykazać?",
  options: [
    "Skalowanie pipeline wymaga proporcjonalnych zwiększeń budżetu i headcount",
    "Istnieją pewne ekonomie skali, lecz efektywność degraduje się wraz ze wzrostem wolumenu",
    "DG skaluje się umiarkowanie: inkrementalne zyski efektywności są osiągane dzięki udokumentowanym inicjatywom",
    "DG skaluje się z sub-liniowymi zwiększeniami budżetu: poprawa efektywności monitorowana kwartalnie",
    "Silnik DG z efektem kumulatywnym: kanały organiczne, zdobyte i płatne wzajemnie się wzmacniają, a efektywność poprawia się wraz ze wzrostem skali"
  ]
},
{
  id: 4020, pillar: 4, type: "scale",
  title: "Jak Państwa Customer Acquisition Cost ewoluuje w miarę skalowania i jak mierzą i zarządzają Państwo tym trendem?",
  options: [
    "CAC nie jest monitorowany: koszt pozyskania jest nieznany",
    "CAC jest monitorowany rocznie, lecz nie zarządzany jako dźwignia wydajności",
    "CAC jest monitorowany kwartalnie, lecz rośnie bez udokumentowanego planu poprawy",
    "CAC jest monitorowany miesięcznie i przeglądany z udokumentowanymi inicjatywami efektywności",
    "Trendy CAC są modelowane według kanału i motion, przeglądane miesięcznie, z udokumentowaną trajektorią docelową i wyzwalaczem realokacji"
  ]
},

/* ===========================================================
   FILAR 5: SALES EXECUTION (20 PYTAŃ)
   =========================================================== */

{
  id: 5001, pillar: 5, type: "scale",
  title: "Czy Państwa proces sprzedaży jest udokumentowany, egzekwowany przy bramkach etapów i systematycznie monitorowany: czy każdy handlowiec faktycznie realizuje własną wersję?",
  subtitle: "Odpowiedzi dotyczą głównego segmentu przychodowego i głównego motion GTM, chyba że pytanie wyraźnie wymaga rozróżnienia.",
  options: [
    "Brak udokumentowanego procesu: każdy handlowiec zarządza dealami niezależnie",
    "Nieformalny proces istnieje w głowach seniorów handlowych, lecz nie jest spisany ani uczony",
    "Proces jest udokumentowany, lecz adopcja w zespole jest niespójna",
    "Udokumentowany proces etap po etapie z kryteriami wyjścia, przeszkolony i odzwierciedlony w CRM",
    "Nadzorowany proces sprzedaży: etapy, kryteria wyjścia i wymagane pola CRM egzekwowane, z odchyleniami sygnalizowanymi w przeglądach pipeline"
  ]
},
{
  id: 5002, pillar: 5, type: "scale",
  title: "Z jaką rygorystycznością deale są kwalifikowane przed wejściem do pipeline i co dzieje się z dealami niekwalifikowanymi?",
  options: [
    "Brak formalnej kwalifikacji: wszystko, co wyraża zainteresowanie, wchodzi do pipeline",
    "Kwalifikacja jest nieformalna i niespójna między handlowcami",
    "Istnieje framework kwalifikacji, lecz jest stosowany w sposób niespójny",
    "Zdefiniowany framework kwalifikacji stosowany konsekwentnie, z niekwalifikowanymi dealami aktywnie usuwanymi z pipeline",
    "Kultura kwalifikacji zero tolerancji: deale bez udokumentowanych kryteriów kwalifikacji nie są tworzone w CRM, przeglądane na spotkaniach pipeline"
  ]
},
{
  id: 5003, pillar: 5, type: "scale",
  title: "W jakim stopniu Państwa zarządzanie pipeline jest widoczne i zdyscyplinowane oraz z jaką konsekwencją deale postępują przez zdefiniowane etapy?",
  options: [
    "Pipeline to lista życzeń: progresja etapów nie jest nadzorowana",
    "Pipeline jest przeglądany nieformalnie, a higiena etapów pozostawiona indywidualnym handlowcom",
    "Odbywają się przeglądy pipeline, lecz deale zastygnięte i napompowane nie są aktywnie zarządzane",
    "Cotygodniowe przeglądy pipeline z udokumentowanymi działaniami na dealach zastygniętych i napompowanych etapach",
    "Nadzorowana dyscyplina pipeline: wyzwalacze wieku etapu, wymagane kryteria wyjścia i jakość pipeline punktowana tygodniowo z wymuszonym działaniem na opóźnionych dealach"
  ]
},
{
  id: 5004, pillar: 5, type: "scale",
  title: "Jaki procent dealów zaangażowanych na początku miesiąca faktycznie zamyka się pod koniec miesiąca i jak stabilny jest ten stosunek?",
  options: [
    "Mniej niż 50%: dokładność zobowiązań nie jest monitorowana ani zarządzana",
    "50-70%: zobowiązania są często pomijane i niesystematycznie przeglądane",
    "70-85%: zobowiązania zamykają się z umiarkowaną stopą z pewną dyscypliną prognozowania",
    "85-95%: zobowiązania są konsekwentnie dotrzymywane z formalnym procesem przeglądu zobowiązań",
    "Powyżej 95%: dokładność zobowiązań jest nadzorowaną metryką, przeglądaną tygodniowo, z udokumentowaną ścieżką eskalacji dla braków"
  ]
},
{
  id: 5005, pillar: 5, type: "scale",
  title: "Z jaką konsekwencją wszyscy handlowcy potrafią artykułować możliwości produktu, jego ograniczenia i różnicowanie konkurencyjne bez polegania na wsparciu technicznym?",
  options: [
    "Wiedza produktowa znacznie się różni: większość handlowców nie potrafi zrobić demo bez asysty",
    "Niewielu doświadczonych handlowców ma pogłębioną wiedzę produktową; pozostali są zawodni",
    "Większość handlowców ma adekwatną wiedzę produktową, lecz luki pojawiają się w złożonych dealach",
    "Wiedza produktowa jest certyfikowana zanim handlowcy zaczną działać, z przypomnieniami przy każdym głównym release",
    "Ciągły program mistrzostwa produktowego: uwarunkowany certyfikacją, monitorowany na handlowca i aktualizowany przy każdym release produktu"
  ]
},
{
  id: 5006, pillar: 5, type: "scale",
  title: "Czy Państwa proces sprzedaży jest egzekwowany przy bramkach etapów w CRM: i jaki procent dealów w Państwa pipeline z ostatniego kwartału miał wszystkie wymagane pola uzupełnione na każdym etapie?",
  options: [
    "Bramki etapów CRM nie są egzekwowane: wymagane pola są często puste, a deale mimo to postępują",
    "Istnieją pewne wymagane pola, lecz handlowcy na ogół mogą przesuwać deale bez ich uzupełnienia",
    "Wymagania bramek etapów istnieją i są przeglądane przez menedżerów, lecz egzekwowanie jest niespójne między zespołami",
    "Wymagane pola są egzekwowane przy kluczowych etapach, a zgodność jest regularnie przeglądana podczas inspekcji pipeline",
    "Nadzorowany system bramek etapów: wymagane pola egzekwowane w CRM przy każdym etapie, zgodność monitorowana tygodniowo, a wyjątki udokumentowane z odpowiedzialnością menedżera"
  ]
},
{
  id: 5007, pillar: 5, type: "scale",
  title: "W Państwa 20 ostatnich dealach, jaki procent miał wszystkie pola metodologii kwalifikacji uzupełnione: i czy CRM wymusza to przed postępem deala do następnego etapu?",
  options: [
    "Żadna metodologia kwalifikacji nie jest używana: handlowcy kwalifikują według własnego osądu bez wspólnego frameworka",
    "Istnieje metodologia, lecz mniej niż 40% dealów ma kompletne pola kwalifikacji w CRM",
    "40-70% dealów ma kompletne pola kwalifikacji, lecz egzekwowanie jest niespójne między menedżerami",
    "Ponad 70% dealów ma kompletne pola kwalifikacji: bramki etapów CRM egzekwują metodologię dla dealów powyżej zdefiniowanego rozmiaru",
    "Metodologia kwalifikacji jest egzekwowana w 90%+ na wszystkich dealach powyżej progu: aktywne bramki CRM, zgodność monitorowana tygodniowo, a odchylenia sygnalizowane w deal reviews"
  ]
},
{
  id: 5008, pillar: 5, type: "scale",
  title: "W jaki sposób systematycznie zbierają i wykorzystują Państwo intelligence win/loss, aby poprawić sposób sprzedaży handlowców?",
  options: [
    "Przyczyny win/loss nie są dokumentowane: wyniki są celebrowane lub zapominane",
    "Handlowcy rejestrują przyczynę w CRM, lecz jest ona rzadko analizowana lub omawiana",
    "Dane win/loss są przeglądane nieformalnie na spotkaniach zespołowych bez ustrukturyzowanych wyników",
    "Proces przeglądu win/loss produkuje udokumentowane tematy dzielone z sprzedażą i PMM kwartalnie",
    "Intelligence win/loss napędza bezpośrednie aktualizacje playbooków, messagingu i treści coachingowych co kwartał"
  ]
},
{
  id: 5009, pillar: 5, type: "scale",
  title: "W jakim stopniu Państwa handlowcy są przygotowani do obsługi najczęstszych obiekcji i jak wiedzą Państwo, że ich obsługa działa?",
  options: [
    "Brak frameworka obsługi obiekcji: handlowcy improwizują odpowiedzi",
    "Powszechne obiekcje są pokryte w onboardingu, lecz nieprzećwiczone ani zaktualizowane",
    "Istnieje przewodnik obsługi obiekcji, lecz adopcja i skuteczność nie są mierzone",
    "Odpowiedzi na obiekcje są szkolone, ćwiczone w role-playach i przeglądane na sesjach coachingowych",
    "Żywa biblioteka obiekcji: odpowiedzi testowane na rozmowach, aktualizowane z danych win/loss, a skuteczność monitorowana względem wskaźników konwersji"
  ]
},
{
  id: 5010, pillar: 5, type: "scale",
  title: "W ciągu ostatnich 90 dni, ile dem handlowców zostało przejrzanych względem zdefiniowanej rubryki jakości: i jaki był średni wynik?",
  options: [
    "Żadne demo nie jest przeglądane względem rubryki: jakość nie jest zarządzana",
    "Kilka dem jest przeglądanych nieformalnie, lecz nie ma spójnej rubryki ani metody punktacji",
    "Niektóre dema są punktowane względem rubryki, lecz pokrycie jest częściowe i niespójne między menedżerami",
    "Jakość dem jest regularnie przeglądana ze zdefiniowaną rubryką, a feedback udokumentowany na handlowca",
    "Nadzorowany system jakości dem: recenzje dem punktowane względem standardowej rubryki, średnie wyniki monitorowane na handlowca i menedżera, a niskie wyniki wyzwalają ukierunkowany coaching w tym samym miesiącu"
  ]
},
{
  id: 5011, pillar: 5, type: "scale",
  title: "Czy Państwa plan wynagradzania handlowego nagradza zachowania budujące długoterminowe przychody: czy zachęca do krótkoterminowych closingów kosztem jakości dealów i retencji?",
  options: [
    "Wynagrodzenie jest czysto oparte na wolumenie: zachowania takie jak multithreading lub kwalifikacja ICP nie są nagradzane",
    "Istnieją pewne elementy jakościowe, lecz wynagrodzenie jest głównie oparte na kwocie bez zabezpieczeń behawioralnych",
    "Wynagrodzenie zawiera pewne komponenty retencji lub NRR, lecz zniżki i jakość dealów nie są karane",
    "Projekt wynagrodzenia zawiera zabezpieczenia jakości dealów: limity zniżek, wymagania ICP i komponenty NRR",
    "Model wynagrodzenia wieloczynnikowy: nowy ARR, NRR, dyscyplina zniżek i zgodność ICP, wszystko ważone, przeglądane rocznie z Finance i HR"
  ]
},
{
  id: 5012, pillar: 5, type: "scale",
  title: "Czy Państwa obecny plan wynagradzania zawiera mechanizm karzący duże zniżki, closingi poza ICP lub deale single-threaded: i czy to zmieniło zachowanie handlowców w mierzalny sposób?",
  options: [
    "Wynagrodzenie nagradza wyłącznie zamknięte przychody: zniżki, jakość ICP i higiena dealów nie mają żadnych konsekwencji",
    "Istnieją pewne zabezpieczenia behawioralne nieformalnie, lecz nie są zintegrowane w wynagrodzeniu, a zachowanie nie zmieniło się w mierzalny sposób",
    "Wynagrodzenie zawiera jedno lub dwa zabezpieczenia jakości, lecz są słabo egzekwowane, a wpływ jest niejasny",
    "Wynagrodzenie zawiera wyraźne kary lub modyfikatory dla zniżek, braków ICP lub słabej jakości dealów, a zachowanie jest przeglądane kwartalnie",
    "Model wynagrodzenia wieloczynnikowy: dyscyplina zniżek, zgodność ICP i jakość dealów bezpośrednio wpływają na wynagrodzenie, zachowanie jest monitorowane miesięcznie, a zaobserwowano mierzalną poprawę"
  ]
},
{
  id: 5013, pillar: 5, type: "scale",
  title: "Wskaż najsilniejszą obecnie dźwignię Państwa win rate i wskaż źródło danych, które potwierdza, że to właśnie ta dźwignia, a nie inna.",
  options: [
    "Nie potrafimy wymienić konkretnej dźwigni: win rate jest omawiany agregatowo bez dowodu przyczyny źródłowej",
    "Leadership ma pogląd na dźwignię, lecz głównie anegdotyczny i niepowiązany z wiarygodnym źródłem danych",
    "Jedna lub dwie prawdopodobne dźwignie zostały zidentyfikowane, lecz dowody są częściowe lub niespójne między segmentami",
    "Główna dźwignia win rate została zidentyfikowana i poparta segmentowanymi danymi konwersji, win/loss lub etapów",
    "Przyczynowość win rate jest aktywnie modelowana: główna dźwignia jest poparta segmentowanymi danymi, regularnie przeglądana i powiązana z ukierunkowanymi interwencjami z mierzonym wpływem"
  ]
},
{
  id: 5014, pillar: 5, type: "scale",
  title: "Podczas ostatniego przeglądu pipeline, dla dealów zastygniętych lub utraconych: ile miało swoje materiały enablement konsultowane w ciągu poprzednich 30 dni: i czy to jest monitorowane?",
  options: [
    "Materiały enablement istnieją, lecz nie są używane w aktywnych dealach",
    "Handlowcy znają materiały, lecz dostęp jest niespójny, a użycie niemonitorowane",
    "Materiały są dostępne na współdzielonym dysku, lecz adopcja w dealach nie jest mierzona",
    "Materiały enablement są zorganizowane według etapu deala, monitorowane pod kątem użycia i przeglądane pod kątem skuteczności kwartalnie",
    "System enablement według etapu deala: materiały indeksowane według etapu, persony i obiekcji, z korelacją użycie-wynik deala monitorowaną miesięcznie"
  ]
},
{
  id: 5015, pillar: 5, type: "scale",
  show_if: { field: 'outbound_pct', greater_than: 0 },
  title: "Z jaką rygorystycznością higiena danych CRM jest egzekwowana i jakie są konsekwencje niekompletnych rekordów dealów?",
  options: [
    "Dane CRM są dobrowolne: większość rekordów dealów jest niekompletna lub niedokładna",
    "Higiena danych jest oczekiwana, lecz nieegzekwowana: brak konsekwencji za brakujące pola",
    "Menedżerowie sprawdzają jakość CRM nieformalnie na 1:1 bez systematycznego egzekwowania",
    "Wymagane pola CRM są egzekwowane przy bramkach etapów z przeglądem menedżera",
    "Polityka higieny CRM zero tolerancji: niekompletne rekordy blokują progresję etapów, prowizje wymagają kompletności danych, przegląd tygodniowy"
  ]
},
{
  id: 5016, pillar: 5, type: "scale",
  title: "Z jakim poziomem szczegółowości monitorowana jest indywidualna wydajność handlowców i jak szybko identyfikowane są wzorce niedostatecznej wydajności?",
  options: [
    "Wydajność handlowców jest przeglądana kwartalnie tylko na poziomie osiągnięcia kwoty",
    "Istnieje miesięczne monitorowanie kwoty, lecz wskaźniki wyprzedzające nie są nadzorowane",
    "Metryki aktywności, pipeline i konwersji są monitorowane, lecz przeglądane w sposób niespójny",
    "Cotygodniowe dashboardy wydajności handlowców pokrywające aktywność, pipeline i konwersję, przeglądane na 1:1",
    "System intelligence wydajności handlowców w czasie rzeczywistym: wskaźniki wyprzedzające i opóźnione monitorowane codziennie, z automatycznymi alertami dla wzorców odchyleń"
  ]
},
{
  id: 5017, pillar: 5, type: "scale",
  title: "Czy monitorują Państwo cztery składowe velocity sprzedaży: liczbę dealów, win rate, rozmiar deali i czas cyklu: według segmentu i czy działają na danych miesięcznie?",
  options: [
    "Velocity sprzedaży nie jest monitorowane: koncentrujemy się wyłącznie na całkowitych przychodach",
    "Jedna lub dwie składowe velocity są monitorowane, lecz nie przeglądane razem",
    "Istnieje podstawowy widok velocity, lecz nie jest regularnie przeglądany ani segmentowany",
    "Cztery składowe velocity są monitorowane według segmentu, przeglądane miesięcznie z udokumentowanymi działaniami doskonalącymi",
    "Dashboard velocity sprzedaży przeglądany tygodniowo: składowe monitorowane według segmentu, handlowca i motion, z inicjatywami doskonalenia według dźwigni"
  ]
},
{
  id: 5018, pillar: 5, type: "scale",
  show_if: { field: 'product_complexity', contains_any: ['complex / configurable', 'highly complex'] },
  title: "W ciągu ostatnich 90 dni, jaki procent Państwa handlowców obsłużył pytanie techniczne o produkt w trwającym dealu bez eskalacji do Produktu lub Engineeringu?",
  options: [
    "Bardzo niewielu lub żaden: większość pytań technicznych wyzwala eskalację",
    "Mniejszość handlowców potrafi obsłużyć standardowe pytania techniczne, lecz większość wymaga wsparcia",
    "Większość handlowców potrafi obsłużyć powszechne pytania techniczne, lecz złożone scenariusze są nadal często eskalowane",
    "Duża większość handlowców potrafi autonomicznie obsłużyć standardowe pytania techniczne, z eskalacjami ograniczonymi do zdefiniowanych przypadków brzegowych",
    "Mistrzostwo techniczne to zarządzana kompetencja: wskaźnik obsługi przez handlowców monitorowany, przyczyny eskalacji przeglądane, a enablement ciągle aktualizowany w celu redukcji zbędnych eskalacji"
  ]
},
{
  id: 5019, pillar: 5, type: "scale",
  title: "W ostatnim pełnym kwartale, jaki procent zamkniętych dealów zawierał zniżkę nieinicjowaną przez kupującego: i czy Państwa plan wynagradzania tworzy zachętę do tego zachowania?",
  options: [
    "Nie monitorujemy, czy zniżki są inicjowane przez handlowca czy kupującego: wszystkie zniżki są traktowane tak samo",
    "Wiemy, że zniżki są powszechne, lecz nie oddzieliliśmy tych inicjowanych przez handlowca od tych inicjowanych przez kupującego w naszych danych",
    "Zniżki inicjowane przez handlowców są znane, lecz projekt wynagrodzenia ich nie adresuje ani nie karze",
    "Zniżki inicjowane przez handlowców są monitorowane, a wynagrodzenie zawiera zabezpieczenia: lecz zmiana zachowania nie jest jeszcze mierzalna",
    "Zniżki inicjowane przez handlowców vs te inicjowane przez kupujących są monitorowane miesięcznie, wynagrodzenie karze zniżki inicjowane przez handlowców powyżej zdefiniowanej stopy, a stopa zniżek inicjowanych przez handlowców mierzalnie spadła"
  ]
},
{
  id: 5020, pillar: 5, type: "scale",
  title: "W ostatnim kwartale, jaki procent dealów, które weszły do pipeline, został ostatecznie zdyskwalifikowany: i ile z nich zostało usuniętych w ciągu 30 dni od wejścia?",
  options: [
    "Dyskwalifikacja jest rzadka: deale wchodzące do pipeline zwykle pozostają niezależnie od dopasowania",
    "Niektóre deale są dyskwalifikowane, lecz stopa jest nieznana, a timing pozostawiony uznaniu handlowca",
    "Stopa dyskwalifikacji jest monitorowana, lecz nieprzeglądana systematycznie: szybkość usuwania nie jest mierzona",
    "Stopa dyskwalifikacji i średni czas w pipeline przed usunięciem są monitorowane i przeglądane podczas inspekcji pipeline",
    "Dyscyplina szybkiej dyskwalifikacji: kryteria kwalifikacji egzekwowane przy wejściu na etap, stopa i szybkość dyskwalifikacji monitorowane tygodniowo, a późne dyskwalifikacje o dużym wolumenie wyzwalają przegląd procesu kwalifikacji"
  ]
},

/* ===========================================================
   FILAR 6: CUSTOMER SUCCESS & EXPANSION (20 PYTAŃ)
   =========================================================== */

{
  id: 6001, pillar: 6, type: "scale",
  title: "W jakim stopniu Państwa motion onboardingu klientów jest ustrukturyzowana i ograniczona czasowo oraz jak monitorują Państwo, czy klienci osiągają pierwszą wartość w terminie?",
  subtitle: "Odpowiedzi dotyczą głównego segmentu przychodowego i głównego motion GTM, chyba że pytanie wyraźnie wymaga rozróżnienia.",
  options: [
    "Brak ustrukturyzowanego onboardingu: każdy klient jest obsługiwany inaczej",
    "Istnieje checklista onboardingu, lecz time-to-value nie jest monitorowany",
    "Onboarding podąża podstawowym procesem, lecz osiąganie kamieni milowych jest niespójne",
    "Zdefiniowany playbook onboardingu z monitorowaniem kamieni milowych i time-to-value przeglądanym według kohorty",
    "W pełni oprzyrządowany silnik onboardingu: ukończenie kamieni milowych, time-to-value i wczesna adopcja monitorowane na klienta, przeglądane tygodniowo"
  ]
},
{
  id: 6002, pillar: 6, type: "scale",
  title: "Z jaką proaktywnością monitorują Państwo zdrowie klientów i jak szybko pogorszenie zdrowia wyzwala interwencję?",
  options: [
    "Brak monitorowania zdrowia: churn jest odkrywany, gdy klienci anulują",
    "Menedżerowie CS monitorują zdrowie subiektywnie bez wspólnego frameworka",
    "Istnieje model wyniku zdrowia, lecz przeglądany rzadko lub niespójnie",
    "Model wyniku zdrowia przeglądany tygodniowo z udokumentowanymi playbookami interwencji dla kont zagrożonych",
    "Predykcyjny system zdrowia: wskaźniki wyprzedzające monitorowane w czasie rzeczywistym, automatyczne alerty wyzwalają playbooki, a wyniki interwencji są mierzone"
  ]
},
{
  id: 6003, pillar: 6, type: "scale",
  title: "Czy potrafią Państwo wymienić dwa główne kontrolowalne czynniki churnu w Państwa bazie: i czy opiera się to na analizie kohortowej czy zostało wydedukowane z kilku utraconych kont?",
  options: [
    "Brak analizy retencji: churn jest przypisywany produktowi lub pricingowi bez danych",
    "Przyczyny churnu są rejestrowane w CRM, lecz nieanalizowane pod kątem wzorców",
    "Roczna analiza churnu identyfikuje szerokie tematy, lecz nie przyczyny źródłowe",
    "Czynniki retencji są kwantyfikowane przez analizę kohortową i wywiady wyjściowe przeglądane kwartalnie",
    "Model intelligence retencji: predyktory churnu punktowane według segmentu, walidowane kwartalnie, zasilające proaktywne playbooki interwencji"
  ]
},
{
  id: 6004, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['deer / mid-market', 'elephant / enterprise', 'whale / strategic'] },
  title: "Z jaką konsekwencją i jaką treścią prowadzą Państwo business reviews z klientami i jak monitorowane są wyniki?",
  options: [
    "Brak QBR: klienci słyszą od nas tylko wtedy, gdy jest problem",
    "QBR odbywają się nieformalnie i niespójnie w zależności od przedstawiciela CS",
    "Istnieje szablon QBR, lecz planowanie i jakość wyników są niespójne",
    "Kwartalne business reviews są planowane, ustrukturyzowane, a wyniki dokumentowane na konto",
    "W pełni nadzorowany program QBR: szablony przygotowania, wytyczne zaangażowania kadry kierowniczej i monitorowanie działań powiązane z wynikami odnowień i ekspansji"
  ]
},
{
  id: 6005, pillar: 6, type: "scale",
  title: "Czy CS systematycznie przekazuje intelligence klientów do Produktu i Sales: i czy potrafią Państwo prześledzić konkretną decyzję z ostatnich dwóch kwartałów, która zmieniła się dzięki temu?",
  options: [
    "Zespoły działają w silosach: intelligence klientów nie jest systematycznie dzielone",
    "Występuje nieformalne dzielenie się, lecz nie napędza decyzji cross-funkcyjnych",
    "Istnieje miesięczny punkt synchronizacji, lecz jakość i spójność dzielenia informacji są niskie",
    "Ustrukturyzowane forum intelligence klientów z udokumentowanymi działaniami produktu, sprzedaży i CS",
    "Żywy system intelligence klientów: sygnały produktowe, okazje ekspansji i wskaźniki ryzyka dzielone między CS, Produktem i Sales w czasie rzeczywistym"
  ]
},
{
  id: 6006, pillar: 6, type: "scale",
  title: "Z jaką proaktywnością Państwa zespół CS identyfikuje i działa na okazje ekspansji, zanim Sales zainicjuje rozmowę?",
  options: [
    "Ekspansja jest całkowicie napędzana przez Sales: CS nie ma motion ekspansji",
    "CS czasem przekazuje okazje ekspansji, lecz bez zdefiniowanego procesu",
    "CS identyfikuje okazje ekspansji w przeglądach zdrowia, lecz przekazanie do Sales jest niespójne",
    "Udokumentowany framework wyzwalaczy ekspansji: posiadany przez CS aż do przekazania, z pipeline monitorowanym na konto",
    "CS prowadzi proaktywną motion ekspansji: sygnały użycia, wyzwalacze kamieni milowych i modele skłonności według segmentu zasilają pipeline niezależnie od Sales"
  ]
},
{
  id: 6007, pillar: 6, type: "scale",
  title: "W jakim stopniu Państwa motion odnowień jest przewidywalna i przetworzona oraz z jakim wyprzedzeniem zaczynają Państwo zarządzać każdym odnowieniem?",
  options: [
    "Odnowienia są zarządzane reaktywnie: kontakt zaczyna się dopiero w miarę zbliżania się daty",
    "Istnieje proces przypomnienia o odnowieniu, lecz timing i odpowiedzialność są niespójne",
    "Odnowienia są monitorowane na 90 dni, lecz motion nie jest ustrukturyzowana",
    "Playbook odnowień z wyzwalaczami zaangażowania na 120 dni, odpowiedzialnością właściciela i monitorowaniem prognoz",
    "W pełni nadzorowany silnik odnowień: zhierarchizowany według ryzyka, wyzwalacze zaangażowania na 180 dni, prognozy aktualizowane tygodniowo, a wyniki odnowień przeglądane w raportowaniu do zarządu"
  ]
},
{
  id: 6008, pillar: 6, type: "scale",
  title: "W Państwa ostatniej kohorcie onboardingu, jaki procent klientów osiągnął zdefiniowany kamień milowy pierwszej wartości w terminie: i co zablokowało tych, którzy go nie osiągnęli?",
  options: [
    "Adopcja produktu nie jest mierzona: CS polega na anegdotycznym feedbacku klientów",
    "Dostępne są pewne dane użycia, lecz nie są systematycznie łączone z działaniami CS",
    "Metryki użycia są monitorowane, lecz używane niespójnie w punktacji zdrowia",
    "Adopcja produktu jest monitorowana na konto, zintegrowana z wynikami zdrowia i przeglądana tygodniowo przez CS",
    "System intelligence użycia: adopcja funkcjonalności, głębokość zaangażowania i time-to-activation monitorowane na konto i zasilające zautomatyzowane interwencje CS"
  ]
},
{
  id: 6009, pillar: 6, type: "scale",
  title: "W jaki sposób systematycznie edukują Państwo klientów o możliwościach produktu i czy Państwa program edukacji mierzalnie poprawia wskaźniki adopcji lub odnowień?",
  options: [
    "Brak programu edukacji klientów: użytkownicy uczą się metodą prób i błędów",
    "Istnieje podstawowa dokumentacja, lecz nie jest aktywnie promowana ani monitorowana",
    "Istnieje program edukacji, lecz wskaźniki ukończenia i wpływ na adopcję nie są mierzone",
    "Ustrukturyzowany program edukacji klientów z monitorowaniem ukończenia i korelacją z adopcją",
    "Model wpływu edukacji: ukończenie certyfikacji, wzrost adopcji funkcjonalności i wskaźniki odnowień według kohorty edukacyjnej monitorowane i przeglądane kwartalnie"
  ]
},
{
  id: 6010, pillar: 6, type: "scale",
  title: "Z jaką spójnością odpowiedzialności zarządzania kontami są zdefiniowane i realizowane między rolami CS i AM, i gdzie przekazania zawodzą?",
  options: [
    "Brak jasnego podziału odpowiedzialności: role CS i AM nakładają się lub wchodzą w konflikt",
    "Istnieje nieformalny podział ról, lecz luki w pokryciu i odpowiedzialności są powszechne",
    "Istnieje dokument definicji ról, lecz przekazania między CS a AM są niespójne",
    "Udokumentowany interfejs CS/AM z jasną odpowiedzialnością według tieru konta i progu przychodów",
    "Nadzorowany model zarządzania kontami: reguły odpowiedzialności zintegrowane w CRM, SLA przekazań monitorowane, a pokrycie przeglądane na miesięcznych przeglądach kont"
  ]
},
{
  id: 6011, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['deer / mid-market', 'elephant / enterprise', 'whale / strategic'] },
  title: "W ostatnim kwartale, jaki procent Państwa kont otrzymał business review: i czy dla każdego działanie następcze zostało udokumentowane i monitorowane?",
  options: [
    "Komunikacja wartości jest ad-hoc: klienci nie widzą regularnie swojego ROI",
    "Istnieje pewne raportowanie wartości, lecz jest niespójne i nie specyficzne dla klienta",
    "Istnieje framework wartości, lecz używany sporadycznie w QBR i rozmowach o odnowieniu",
    "Udokumentowane dostarczanie wartości dzielone z każdym kontem kwartalnie, powiązane z uzgodnionymi metrykami sukcesu",
    "Playbook wartości klienta: metryki sukcesu zdefiniowane przy onboardingu, wyniki monitorowane kwartalnie, a ROI udokumentowane dla każdej rozmowy o odnowieniu i ekspansji"
  ]
},
{
  id: 6012, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['elephant / enterprise', 'whale / strategic'] },
  title: "W ostatnim kwartale, ile kont wpadło w lukę między odpowiedzialnością CS a AM: i czy jaśniejsza reguła przekazania zapobiegłaby temu?",
  options: [
    "Brak reguł przekazań: odpowiedzialność CS i AM jest nieformalna, a konta często wpadają w luki",
    "Niektóre konta mają zdefiniowanych właścicieli, lecz granica między CS a AM jest niejasna, a konflikty powszechne",
    "Kryteria przekazań istnieją na piśmie, lecz są stosowane niespójnie: luki nadal występują i są zarządzane reaktywnie",
    "Reguły przekazań CS i AM są udokumentowane, zintegrowane w CRM i przeglądane kwartalnie: luki są rzadkie",
    "Model odpowiedzialności bez luk: każde konto ma jednego udokumentowanego właściciela, przejścia podążają zdefiniowanym protokołem, a luki pokrycia są monitorowane jako metryka nadzoru"
  ]
},
{
  id: 6013, pillar: 6, type: "scale",
  show_if: { field: 'target_segment', contains_any: ['elephant / enterprise', 'whale / strategic'] },
  title: "Jak odrębnie i spójnie Państwa zespół Account Management prowadzi przeglądy pipeline ekspansji, oddzielnie od przeglądów zdrowia CS?",
  options: [
    "Brak rozróżnienia: ekspansja jest omawiana w rozmowach zdrowia CS bez dedykowanego zarządzania pipeline",
    "Pipeline ekspansji jest okazjonalnie poruszany na spotkaniach CS bez oddzielnego procesu",
    "Istnieje oddzielny przegląd ekspansji, lecz kadencja i jakość są niespójne",
    "Cotygodniowe przeglądy pipeline ekspansji są prowadzone oddzielnie od rozmów zdrowia CS z udokumentowanymi działaniami dealowymi",
    "Ekspansja jest zarządzana jako odrębna motion sprzedaży: pipeline przeglądany tygodniowo, prognozy monitorowane oddzielnie, a ARR ekspansji raportowany niezależnie od ARR odnowień"
  ]
},
{
  id: 6014, pillar: 6, type: "scale",
  title: "W jaki sposób systematycznie konta zagrożone są identyfikowane, eskalowane i zarządzane przed tym, jak zrobią churn?",
  options: [
    "Konta zagrożone są identyfikowane dopiero po tym, jak klient zasygnalizował zamiar anulacji",
    "Menedżerowie CS sygnalizują konta zagrożone nieformalnie bez wspólnego procesu",
    "Istnieje system sygnalizacji ryzyka, lecz playbooki interwencji są niespójne",
    "Udokumentowany framework ryzyka: progi zdrowia, wyzwalacze eskalacji i playbooki interwencji przeglądane tygodniowo",
    "Proaktywny silnik zarządzania ryzykiem: sygnały predykcyjne automatycznie wyzwalają playbooki, ścieżki eskalacji są nadzorowane, a wskaźniki uratowań monitorowane według tieru ryzyka"
  ]
},
{
  id: 6015, pillar: 6, type: "scale",
  title: "Wskaż decyzję produktową lub GTM z ostatnich dwóch kwartałów, która zmieniła się pod wpływem intelligence z CS: i ile czasu minęło od sygnału do decyzji?",
  options: [
    "Nie potrafimy wymienić żadnej: intelligence CS nie napędza widocznie decyzji Produktowych ani GTM",
    "Sygnały CS okazjonalnie wpływają na decyzje nieformalnie, lecz powiązanie nie jest udokumentowane",
    "Kilka decyzji zostało powiązanych z inputem CS, lecz ścieżka sygnał-do-decyzji jest niespójna i powolna",
    "Kilka decyzji na kwartał jest śledzonych do intelligence CS, z udokumentowanym pochodzeniem sygnału i harmonogramem",
    "System intelligence CS z zamkniętą pętlą: sygnały rejestrowane, przeglądane na ustrukturyzowanych forach, decyzje powiązane ze źródłem, a czas sygnał-do-decyzji monitorowany jako metryka wydajności"
  ]
},
{
  id: 6016, pillar: 6, type: "scale",
  title: "Jaki jest Państwa obecny stosunek klientów na CSM: i czy ten stosunek poprawił się czy pogorszył w ciągu ostatnich 12 miesięcy w miarę wzrostu bazy klientów?",
  options: [
    "Nie monitorujemy klientów na CSM: każde konto wymaga mniej więcej dedykowanego czasu CS, a stosunek nigdy nie został obliczony",
    "Stosunek istnieje nieformalnie, lecz pogorszył się wraz z naszym wzrostem: nie zdołaliśmy wymiarować pojemności CS z wyprzedzeniem wobec wzrostu klientów",
    "Stosunek jest monitorowany, lecz mniej więcej stabilny: dodaliśmy headcount CS proporcjonalnie bez poprawy dźwigni",
    "Stosunek klientów na CSM poprawił się w ciągu ostatnich 12 miesięcy dzięki tieringowi, automatyzacji lub self-service: monitorowany kwartalnie",
    "Dźwignia CS jest zarządzaną metryką: klienci na CSM monitorowani miesięcznie, poprawiani kwartał po kwartale, a docelowy stosunek jest zdefiniowany w planowaniu rocznym z udokumentowaną ścieżką jego osiągnięcia"
  ]
},
{
  id: 6017, pillar: 6, type: "scale",
  title: "Czy Państwa zespół CS potrafi wyciągnąć ujednolicony widok klienta: zdrowie, użycie, wsparcie i dane handlowe: bez ręcznego składania danych między systemami?",
  options: [
    "Dane CS są pofragmentowane między rozłączonymi systemami: brak ujednoliconego widoku klienta",
    "Ręczne składanie danych zapewnia częściowy widok, przeglądany rzadko",
    "Istnieje częściowa integracja, lecz luki w danych zdrowia lub użycia wymagają ręcznych obejść",
    "Dane CS, CRM i produktowe są zintegrowane z pojedynczym widokiem klienta dostępnym w dashboardach",
    "Ujednolicona platforma danych klientów: zdrowie, użycie, wsparcie i dane handlowe w jednym widoku, aktualizowana w czasie rzeczywistym i zasilająca zautomatyzowane działania"
  ]
},
{
  id: 6018, pillar: 6, type: "scale",
  title: "Czy monitorują Państwo churn logo i churn przychodowy jako odrębne metryki: i czy w ciągu ostatnich dwóch kwartałów ewoluowały one inaczej?",
  options: [
    "Monitorowana jest pojedyncza metryka churnu: churn logo i churn przychodowy nie są rozdzielone",
    "Obie metryki są obliczane, lecz przeglądane razem bez analizy, dlaczego się rozchodzą",
    "Churn logo i churn przychodowy są monitorowane oddzielnie, a rozbieżności są notowane, lecz nieformalnie analizowane",
    "Obie metryki są monitorowane oddzielnie, przeglądane miesięcznie, a rozbieżności są analizowane w celu znalezienia przyczyny źródłowej",
    "Diagnostyczny system podwójnego churnu: churn logo i churn przychodowy monitorowane i trendowane oddzielnie, rozbieżności analizowane według kohorty i segmentu, a insights zasilają planowanie pojemności CS i ekspansji"
  ]
},
{
  id: 6019, pillar: 6, type: "scale",
  title: "Z jaką niezawodnością Państwa funkcja CS wnosi wkład w przewidywalny NRR i jakie mają Państwo zaufanie do prognozy NRR na trzy kwartały?",
  options: [
    "NRR jest nieprzewidywalny: wyniki retencji i ekspansji są zmienne z kwartału na kwartał",
    "Trendy NRR są monitorowane, lecz dokładność prognozy jest ograniczona do 30-60 dni",
    "NRR jest modelowany na 90 dni, lecz dokładność prognozy jest zmienna",
    "NRR jest prognozowany na 180 dni z udokumentowanymi inputami pipeline odnowień i ekspansji",
    "W pełni zamodelowana prognoza NRR: ryzyko odnowień, pipeline ekspansji i predyktory churnu aktualizowane tygodniowo i przeglądane w raportowaniu do zarządu"
  ]
},
{
  id: 6020, pillar: 6, type: "scale",
  title: "W ostatnim kwartale, ile decyzji GTM cross-funkcyjnych zostało bezpośrednio zasilonych intelligence klientów przekazanym przez CS: i czy jest to gdzieś monitorowane?",
  options: [
    "Żadna: intelligence CS nie jest systematycznie przekazywany do cross-funkcyjnych decyzji GTM",
    "Niektóre sygnały klienckie docierają do innych zespołów nieformalnie, lecz żadna decyzja nie jest śledzona z powrotem do nich",
    "Kilka decyzji zostało poinformowanych insightami CS, lecz powiązanie nie jest udokumentowane spójnie",
    "Intelligence klientów z CS jest przeglądany na ustrukturyzowanych forach i może być powiązany z udokumentowanymi decyzjami GTM lub Produktowymi",
    "System intelligence klientów z zamkniętą pętlą: sygnały pochodzące z CS są rejestrowane, przeglądane cross-funkcyjnie, a decyzje pod ich wpływem są monitorowane z właścicielami i wynikami"
  ]
},

/* ===========================================================
   FILAR 7: REVENUE OPERATIONS & SYSTEMS (20 PYTAŃ)
   =========================================================== */

{
  id: 7001, pillar: 7, type: "scale",
  title: "Z jaką dokładnością i kompletnością utrzymywane są rekordy CRM i jak mierzą i egzekwują Państwo jakość danych?",
  subtitle: "Odpowiedzi dotyczą głównego segmentu przychodowego i głównego motion GTM, chyba że pytanie wyraźnie wymaga rozróżnienia.",
  options: [
    "Dane CRM są niewiarygodne: rekordy są niekompletne, zduplikowane lub przestarzałe",
    "Jakość danych jest oczekiwana, lecz niemierzona ani niewegzekwowana",
    "Odbywają się okresowe audyty danych, lecz problemy higieny powracają bez systemowych korekt",
    "Jakość danych CRM jest mierzona miesięcznie z udokumentowanymi właścicielami i celami korekt",
    "Nadzorowany system higieny CRM: wymagane pola egzekwowane, kompletność punktowana tygodniowo, a jakość danych raportowana leadershipowi miesięcznie"
  ]
},
{
  id: 7002, pillar: 7, type: "scale",
  title: "Podczas Państwa ostatniej zmiany procesu, ile czasu zajęło odzwierciedlenie tej zmiany w definicjach etapów CRM i wymaganych polach: i kto był odpowiedzialny za tę aktualizację?",
  options: [
    "CRM jest używany do rejestrowania kontaktów, lecz nie odzwierciedla procesu sprzedaży",
    "Istnieją etapy CRM, lecz nie odpowiadają temu, jak faktycznie postępują deale",
    "CRM ogólnie odzwierciedla proces, lecz kryteria wyjścia i wymagane pola są niekompletne",
    "Definicje etapów CRM, kryteria wyjścia i wymagane pola odzwierciedlają rzeczywisty proces sprzedaży",
    "CRM jest nadzorowanym zwierciadłem procesu: bramki etapów egzekwowane, przygotowanie deal reviews zautomatyzowane, a konfiguracja przeglądana po każdej zmianie procesu"
  ]
},
{
  id: 7003, pillar: 7, type: "scale",
  title: "Czy wyczerpująco workflowy GTM są udokumentowane i z jaką spójnością te procesy są podążane między zespołami i regionami?",
  options: [
    "Brak dokumentacji procesów: workflowy istnieją tylko w indywidualnej praktyce",
    "Niektóre procesy są udokumentowane, lecz pokrycie jest niekompletne, a dostęp niespójny",
    "Główne procesy są udokumentowane, lecz nie są systematycznie podążane ani egzekwowane",
    "Biblioteka procesów pokrywająca wszystkie główne workflowy GTM, przeglądana kwartalnie i powiązana z onboardingiem",
    "Nadzorowana biblioteka procesów: wersjonowana, dostęp monitorowany, a odchylenia sygnalizowane w miesięcznych przeglądach operacyjnych"
  ]
},
{
  id: 7004, pillar: 7, type: "scale",
  title: "W jakim stopniu Państwa stack technologiczny GTM automatyzuje powtarzalne procesy i gdzie ręczne wąskie gardła nadal konsumują pojemność handlowców i ops?",
  options: [
    "GTM działa niemal całkowicie na ręcznych procesach: automatyzacja jest minimalna",
    "Istnieje podstawowa automatyzacja w emailu i CRM, lecz przekazania pozostają ręczne",
    "Główne workflowy są zautomatyzowane, lecz znaczący ręczny wysiłek pozostaje w raportowaniu i routingu",
    "Większość rutynowych procesów GTM jest zautomatyzowana z udokumentowanymi wyjątkami i kontrolami ręcznego override",
    "W pełni oprzyrządowana warstwa automatyzacji: routing, sekwencjonowanie, raportowanie i alerty zautomatyzowane, z ręcznymi punktami kontaktu ograniczonymi do działań wymagających wysokiego osądu"
  ]
},
{
  id: 7005, pillar: 7, type: "scale",
  title: "Czy potrafią Państwo prześledzić prospecta od pierwszego kontaktu do closed-won bez ręcznego składania danych między systemami: i ile czasu zajmuje to obecnie?",
  options: [
    "Systemy są w silosach: danych nie można śledzić między narzędziami bez pracy ręcznej",
    "Istnieją częściowe integracje, lecz luki w danych i awarie synchronizacji są powszechne",
    "Główne systemy są zintegrowane, lecz niektóre przepływy danych wymagają ręcznego uzgadniania",
    "CRM, MAP i SEP są w pełni zintegrowane z czystymi przepływami danych przeglądanymi miesięcznie",
    "Spójna architektura danych GTM: wszystkie systemy zintegrowane, jakość danych monitorowana w czasie rzeczywistym, a zdrowie integracji przeglądane kwartalnie"
  ]
},
{
  id: 7006, pillar: 7, type: "scale",
  title: "W jakim stopniu Państwa proces routingu i przypisywania leadów jest ustrukturyzowany i oparty na regułach oraz jak szybko kwalifikowany lead dociera do właściwego handlowca?",
  options: [
    "Routing leadów jest ręczny: ktoś decyduje, kto otrzymuje każdy lead",
    "Istnieją podstawowe reguły routingu w CRM, lecz wyjątki są częste i niemonitorowane",
    "Reguły routingu pokrywają większość scenariuszy, lecz przypadki brzegowe powodują opóźnienia lub podwójne przypisania",
    "Udokumentowany framework routingu pokrywający wszystkie typy leadów, przeglądany kwartalnie pod kątem pokrycia",
    "Zautomatyzowany system routingu leadów: reguły udokumentowane, testowane i nadzorowane, z szybkością i dokładnością routingu monitorowaną tygodniowo"
  ]
},
{
  id: 7007, pillar: 7, type: "scale",
  title: "Z jaką efektywnością Państwa stack technologiczny GTM jest zarządzany pod kątem kosztów i kiedy przeprowadzili Państwo ostatni audyt redundancji, niedostatecznego wykorzystania lub nieefektywności kontraktowej?",
  options: [
    "Żaden audyt stacku technologicznego nie został przeprowadzony: narzędzia są dodawane i zapominane",
    "Istnieje przybliżony widok narzędzi, lecz żaden formalny audyt ani racjonalizacja nie miały miejsca",
    "Odbywa się roczny przegląd stacku technologicznego, lecz wykorzystanie i optymalizacja kontraktów nie są monitorowane",
    "Półroczny audyt stacku technologicznego przegląda wykorzystanie, wartość kontraktów i redundancję z udokumentowanymi działaniami",
    "Ciągły program nadzoru stacku technologicznego: wykorzystanie monitorowane miesięcznie, kontrakty benchmarkowane rocznie, a decyzje o racjonalizacji przeglądane kwartalnie"
  ]
},
{
  id: 7008, pillar: 7, type: "scale",
  title: "Czy RevOps funkcjonuje jako strategiczny partner zespołów GTM: czy głównie jako reaktywna funkcja realizacji żądań?",
  options: [
    "RevOps jest reaktywny: praca jest napędzana przez tych, którzy najgłośniej proszą",
    "RevOps ma backlog, lecz priorytetyzacja jest niespójna i nienadzorowana",
    "RevOps priorytetyzuje według żądania zespołu, lecz ważenie wpływu biznesowego jest nieformalne",
    "RevOps realizuje proces priorytetyzacji oparty na sprintach, wyrównany z leadershipem GTM kwartalnie",
    "RevOps operuje jako funkcja strategiczna: nadzorowany proces przyjmowania, roadmap ważony wpływem i kwartalny przegląd interesariuszy"
  ]
},
{
  id: 7009, pillar: 7, type: "scale",
  title: "Dla Państwa trzech głównych narzędzi GTM według wydatku: jaka jest rzeczywista stopa aktywnego użycia dziennego w porównaniu do licencjonowanych miejsc: i kiedy ostatnio przeglądali Państwo te dane?",
  options: [
    "Adopcja narzędzi nie jest monitorowana: licencje są kupowane i zakładamy użycie bez danych",
    "Mamy przybliżone pojęcie o narzędziach niedostatecznie wykorzystywanych, lecz nie zmierzyliśmy aktywnego użycia dziennego vs licencjonowanych miejsc",
    "Użycie jest monitorowane dla przynajmniej jednego głównego narzędzia, lecz pozostałe nie są mierzone ani przeglądane",
    "Użycie jest monitorowane dla wszystkich głównych narzędzi, przeglądane kwartalnie, a licencje niedostatecznie wykorzystywane zidentyfikowane: lecz decyzje o realokacji są powolne",
    "Nadzorowany program adopcji narzędzi: aktywne użycie dzienne vs licencjonowane miejsca monitorowane miesięcznie na narzędzie, niedostateczne wykorzystanie wyzwala przegląd konsolidacji w ciągu 30 dni, a koszt na aktywnego użytkownika jest zarządzaną metryką"
  ]
},
{
  id: 7010, pillar: 7, type: "scale",
  title: "W jaki sposób systematycznie mierzą i zarządzają Państwo efektywnością GTM oraz jak wiedzą Państwo, czy poprawiają się czy pogarszają?",
  options: [
    "Efektywność GTM nie jest mierzona: koncentrujemy się wyłącznie na przychodach top-line",
    "Istnieją pewne metryki efektywności, lecz są przeglądane rzadko",
    "Główne metryki efektywności są monitorowane, lecz nie przeglądane względem celów ani benchmarków",
    "Metryki efektywności GTM są przeglądane miesięcznie względem zdefiniowanych celów i trendów historycznych",
    "Dashboard efektywności GTM przeglądany miesięcznie: CAC, zwrot z inwestycji, velocity pipeline i burn multiple benchmarkowane i napędzające kwartalne decyzje inwestycyjne"
  ]
},
{
  id: 7011, pillar: 7, type: "scale",
  title: "W jakim stopniu zmiany danych i procesów są nadzorowane i jak zapobiegają Państwo, aby niekontrolowane zmiany nie tworzyły niespójności raportowych?",
  options: [
    "Brak nadzoru: każdy może modyfikować pola CRM, procesy lub integracje",
    "Istnieją nieformalne standardy, lecz niekontrolowane zmiany są powszechne",
    "Istnieje proces żądania zmiany, lecz zgodność jest niespójna",
    "Udokumentowany proces nadzoru zmian: żądania przeglądane, wpływ oceniany, a zmiany rejestrowane",
    "Formalny komitet kontroli zmian: wszystkie zmiany systemów i procesów GTM przeglądane, zatwierdzane, testowane i dokumentowane przed wdrożeniem"
  ]
},
{
  id: 7012, pillar: 7, type: "scale",
  title: "W jaki racjonalny sposób Państwa struktury terytoriów i kwot są projektowane i utrzymywane sprawiedliwie i kiedy były ostatnio formalnie przeglądane?",
  options: [
    "Terytoria i kwoty są historycznie ustalone: brak formalnego procesu projektowania lub przeglądu",
    "Kwoty są ustalane odgórnie z minimalnymi danymi wspierającymi projekt terytoriów",
    "Odbywają się roczne przeglądy kwot i terytoriów, lecz proces nie jest napędzany danymi",
    "Projekt terytoriów i kwot podąża udokumentowanym frameworkiem przeglądanym rocznie z Finance",
    "Model terytoriów i kwot napędzany danymi: potencjał kont, pojemność handlowców i okazja rynkowa przeglądane kwartalnie, z udokumentowanymi dostosowaniami śródrocznymi"
  ]
},
{
  id: 7013, pillar: 7, type: "scale",
  title: "W jakim stopniu RevOps jest strukturalnie zintegrowany między Sales, Marketingiem i CS i czy RevOps ma miejsce przy planowaniu GTM?",
  options: [
    "RevOps służy jednej funkcji: Sales lub Marketing, bez cross-funkcyjnego zakresu",
    "RevOps pokrywa wiele funkcji, lecz operuje reaktywnie zamiast w planowaniu",
    "RevOps uczestniczy w planowaniu GTM, lecz nie współposiada decyzji procesowych lub narzędziowych",
    "RevOps jest formalnym współwłaścicielem modelu operacyjnego GTM, decyzji procesowych i narzędziowych",
    "RevOps jest strategiczną funkcją GTM: współposiada planowanie, dane i procesy we wszystkich funkcjach przychodowych z miejscem w miesięcznych przeglądach leadershipu"
  ]
},
{
  id: 7014, pillar: 7, type: "scale",
  title: "W jakim stopniu Państwa dashboardy i raporty GTM są actionable i używane spójnie oraz kto je przegląda i w jakiej kadencji?",
  options: [
    "Brak dashboardów: raportowanie jest wykonywane ręcznie w arkuszach kalkulacyjnych",
    "Istnieją dashboardy, lecz są rzadko otwierane lub używane do kierowania decyzjami",
    "Standardowe raporty są produkowane, lecz dane nie są systematycznie wiarygodne ani wykorzystywane",
    "Dashboardy są przeglądane na cotygodniowych spotkaniach GTM z udokumentowanymi wynikami działań",
    "Nadzorowana architektura raportowania: zautomatyzowane dashboardy przeglądane w kadencji dziennej, tygodniowej i miesięcznej, z rejestrem decyzji monitorującym działania z każdego przeglądu"
  ]
},
{
  id: 7015, pillar: 7, type: "scale",
  title: "Czy Państwa zespół potrafi wyciągnąć pełny widok klienta, od pierwszego kontaktu do obecnego zdrowia, bez ręcznego składania danych między systemami?",
  options: [
    "Pełny widok klienta nie istnieje: dane są rozproszone między rozłączonymi narzędziami",
    "Częściowy widok można złożyć ręcznie, lecz wymaga to znaczącego wysiłku",
    "Istnieje widok klienta, lecz wymaga regularnych ręcznych korekt, aby był dokładny",
    "Zautomatyzowany pojedynczy widok klienta istnieje w CRM lub BI, aktualizowany codziennie",
    "Ujednolicony rekord klienta w czasie rzeczywistym: wszystkie punkty kontaktu, sygnały zdrowia i dane handlowe dostępne w pojedynczym widoku bez ręcznej interwencji"
  ]
},
{
  id: 7016, pillar: 7, type: "scale",
  title: "W ostatnim kwartale, jaki procent zespołów GTM podążał za standardowymi procesami zdefiniowanymi przez RevOps bez odchyleń: i jak to wiedzą Państwo?",
  options: [
    "Brak standaryzacji: każdy zespół podąża za własnym podejściem",
    "Istnieją pewne wspólne procesy, lecz adopcja jest nierówna",
    "Główne procesy są ustandaryzowane, lecz monitorowanie adopcji jest nieformalne",
    "Procesy GTM są ustandaryzowane, adopcja monitorowana na zespół, a odchylenia adresowane miesięcznie",
    "Program standaryzacji: przestrzeganie procesów punktowane na zespół i przeglądane miesięcznie, z przyczynami źródłowymi odchyleń adresowanymi w kwartalnych audytach"
  ]
},
{
  id: 7017, pillar: 7, type: "scale",
  title: "Z jaką rygorystycznością prowadzone są przeglądy pipeline i prognoz oraz w jakim stopniu dokładność prognoz poprawia się w trakcie kwartału?",
  options: [
    "Brak formalnego procesu prognozowania: predykcje przychodów oparte na wyczuciu",
    "Prognoza jest produkowana, lecz dokładność nie jest monitorowana ani przeglądana względem wyników",
    "Istnieje kwartalna prognoza, lecz dokładność znacząco się pogarsza w trakcie kwartału",
    "Cotygodniowy przegląd prognoz z udokumentowanym monitorowaniem dokładności i wyjaśnieniem odchyleń",
    "Operacyjny nadzorowany system prognoz: dokładność call-to-closing monitorowana tygodniowo, odchylenia wyjaśniane, a metodologia prognozy przeglądana po każdym kwartale"
  ]
},
{
  id: 7018, pillar: 7, type: "scale",
  title: "W ostatnim kwartale, jaki procent żądań RevOps został dostarczony na czas: i dla głównych, czy mogą Państwo pokazać wpływ biznesowy, który wyprodukowały?",
  options: [
    "Dotrzymywanie terminów dostarczania żądań nie jest monitorowane, a wpływ biznesowy jest generalnie nieznany",
    "Niektóre żądania są dostarczane na czas, lecz ani przestrzeganie SLA, ani wpływ nie są przeglądane systematycznie",
    "Dotrzymywanie terminów jest monitorowane dla niektórych żądań, lecz wpływ biznesowy jest dokumentowany niespójnie",
    "Dotrzymywanie terminów dostarczania RevOps jest monitorowane, a główne żądania zawierają udokumentowany wpływ biznesowy po dostawie",
    "Zarządzany model dostarczania RevOps: stopa terminowości monitorowana miesięcznie, główne zgłoszenia wymagają udokumentowanego wpływu, a priorytetyzacja backlogu jest aktualizowana na podstawie dostarczonej wartości biznesowej"
  ]
},
{
  id: 7019, pillar: 7, type: "scale",
  title: "W jaki sposób strategicznie RevOps wnosi wkład w planowanie GTM i czy pojemność RevOps jest częścią dyskusji rocznego planowania?",
  options: [
    "RevOps jest wykluczony z planowania: pojemność operacyjna nie jest brana pod uwagę",
    "RevOps jest konsultowany okazjonalnie w planowaniu, lecz nie jest formalnym inputem",
    "RevOps wnosi wkład w planowanie systemów i procesów rocznie",
    "RevOps jest formalnym inputem planowania: pojemność operacyjna, narzędzia i roadmap procesów przeglądane w planowaniu rocznym i kwartalnym",
    "RevOps współposiada plan operacyjny GTM: pojemność systemów, roadmap procesów i infrastruktura danych są planowane równolegle do headcount i budżetu"
  ]
},
{
  id: 7020, pillar: 7, type: "scale",
  title: "Jaki procent Państwa handlowców aktywnie używa Państwa głównych narzędzi GTM bez zachęty ani przymusu: i jak odróżniają Państwo dobrowolną adopcję od zgodności?",
  options: [
    "Narzędzia są używane tylko dlatego, że zgodność tego wymaga: handlowcy nie używaliby ich dobrowolnie i często je omijają",
    "Większość handlowców toleruje narzędzia, lecz obejścia są powszechne: stack tworzy więcej tarcia niż usuwa",
    "Główne narzędzia są używane adekwatnie: adopcja jest akceptowalna, lecz handlowcy nie widzą ich jako rzeczywiście użytecznych dla swojego workflow",
    "Większość handlowców dobrowolnie używa głównych narzędzi i uważa je za użyteczne: feedback jest zbierany, a problemy UX adresowane",
    "Stack zorientowany na handlowca z monitorowaną dobrowolną adopcją: dane użycia pokazują, że handlowcy uzyskują dostęp do narzędzi zanim zostaną do tego zaproszeni, tarcie workflow jest przeglądane kwartalnie, a narzędzia, które systematycznie punktują nisko, są wycofywane lub przeprojektowywane"
  ]
},

/* ===========================================================
   FILAR 8: PRICING & PACKAGING (20 PYTAŃ)
   =========================================================== */

{
  id: 8001, pillar: 8, type: "scale",
  title: "W jakim stopniu Państwa strategia pricingu jest jawnie zdefiniowana i kiedy była ostatnio przeglądana względem danych rynkowych i kosztowych?",
  subtitle: "Odpowiedzi dotyczą głównego segmentu przychodowego i głównego motion GTM, chyba że pytanie wyraźnie wymaga rozróżnienia.",
  options: [
    "Brak strategii pricingu: ceny zostały ustalone raz i nie były przeglądane",
    "Istnieje nieformalna filozofia pricingu, lecz nie jest udokumentowana ani nadzorowana",
    "Istnieje dokument strategii pricingu, lecz nie był aktualizowany od ponad roku",
    "Strategia pricingu przeglądana rocznie względem danych win/loss, benchmarków konkurencyjnych i celów marży",
    "Nadzorowana strategia pricingu: przeglądana półrocznie, zasilana badaniami kupujących, danymi dealów i intelligence konkurencyjnym, z udokumentowanym uzasadnieniem decyzji"
  ]
},
{
  id: 8002, pillar: 8, type: "scale",
  title: "Czy Państwa struktura packagingu odzwierciedla sposób, w jaki klienci faktycznie adoptują i ekspandują: i czy zwalidowali ją Państwo względem rzeczywistych danych użycia w ciągu ostatnich 12 miesięcy?",
  options: [
    "Packaging został zaprojektowany wewnętrznie: wzorce adopcji klienta nie zostały wzięte pod uwagę",
    "Packaging jest luźno wyrównany z wzorcami użycia, lecz tworzy tarcie w punktach ekspansji",
    "Packaging jest wyrównany z głównymi wzorcami adopcji, lecz segmenty drugorzędne są słabo obsłużone",
    "Packaging jest zwalidowany względem danych adopcji i przeglądany rocznie pod kątem wyrównania",
    "Architektura packagingu zaprojektowana z danych adopcji: wyzwalacze ekspansji, ścieżki upgrade'u i wyrównanie metryk wartości zwalidowane wywiadami z klientami i analizą użycia"
  ]
},
{
  id: 8003, pillar: 8, type: "scale",
  title: "Z jaką intuicyjnością kupujący może zrozumieć Państwa pricing w mniej niż dwie minuty bez potrzeby wyjaśnienia przez handlowca?",
  options: [
    "Pricing wymaga znaczących wyjaśnień: kupujący są często zdezorientowani",
    "Większość kupujących potrzebuje rozmowy, aby zrozumieć, ile zapłacą",
    "Pricing jest zrozumiały dla głównych segmentów, lecz tworzy zamieszanie dla pozostałych",
    "Pricing jest jasny i samowyjaśniający dla wszystkich głównych segmentów kupujących",
    "Pricing jest zwalidowany testami zrozumienia kupującego: wszystkie segmenty potrafią samodzielnie wybrać właściwy tier bez zaangażowania handlowca"
  ]
},
{
  id: 8004, pillar: 8, type: "scale",
  title: "Z jaką rygorystycznością testują i walidują Państwo skłonność do płacenia w Państwa kluczowych segmentach klientów: i jaką metodologią?",
  options: [
    "Skłonność do płacenia jest nieznana: pricing został ustalony na podstawie kosztu lub wyczucia",
    "Świadomość anegdotyczna z dealów utraconych na cenie, niezwalidowana",
    "Niektóre wywiady z kupującymi zasiliły pricing, lecz badania nie są systematyczne",
    "Skłonność do płacenia zwalidowana ustrukturyzowanymi badaniami kupujących i analizą wskaźnika zamknięć według przedziału cenowego",
    "Model skłonności do płacenia według segmentu: zwalidowany kontrolowanymi badaniami, analizą pricing win/loss i wskaźnikiem zamknięć według tieru cenowego, przeglądany rocznie"
  ]
},
{
  id: 8005, pillar: 8, type: "scale",
  title: "Jaki jest Państwa dowód dla obecnego poziomu pricingu: wywiady z kupującymi, analiza wskaźnika zamknięć według przedziału cenowego czy benchmark konkurencyjny? Kiedy ten dowód był ostatnio aktualizowany?",
  options: [
    "Skłonność do płacenia jest nieznana: pricing został ustalony na podstawie kosztu lub założeń wewnętrznych",
    "Świadomość anegdotyczna z dealów utraconych na cenie, niezwalidowana ustrukturyzowanymi badaniami",
    "Niektóre wywiady z kupującymi zasiliły pricing, lecz badania nie są ani systematyczne, ani segmentowane",
    "Skłonność do płacenia zwalidowana ustrukturyzowanymi badaniami kupujących i analizą wskaźnika zamknięć według przedziału cenowego",
    "Model skłonności do płacenia według segmentu: zwalidowany kontrolowanymi badaniami, danymi pricing win/loss i wskaźnikiem zamknięć według tieru cenowego: przeglądany rocznie i zasilający decyzje packagingu"
  ]
},
{
  id: 8006, pillar: 8, type: "scale",
  title: "W jakim stopniu Państwa ceny są zakotwiczone w mierzalnej wartości, którą Państwa produkt dostarcza klientom w każdym segmencie?",
  options: [
    "Pricing jest oparty na koszcie lub referencji do konkurenta: wartość nie jest główną kotwicą",
    "Nieformalny narracja wartości jest używana w negocjacjach, lecz pricing nie jest wyprowadzany z wartości",
    "Pricing jest mniej więcej wyrównany z wartością dla głównych segmentów",
    "Udokumentowany framework wartość-do-ceny zwalidowany analizą ROI klienta według segmentu",
    "Pricing oparty na wartości z udokumentowanym modelem ROI według segmentu: kotwice wartości testowane wywiadami z kupującymi i aktualizowane rocznie"
  ]
},

{
  id: 8007, pillar: 8, type: "scale",
  title: "Czy Państwa architektura packagingu jest zbudowana wokół tego, jak klienci realnie adoptują i rozszerzają produkt: czy wokół tego, co było najłatwiej zbudować? Kiedy ostatnio zweryfikowali ją Państwo na rzeczywistych danych o wykorzystaniu?",
  options: [
    "Packaging został zaprojektowany wewnętrznie bez odniesienia do wzorców adopcji klientów",
    "Packaging jest luźno dopasowany do wzorców wykorzystania, ale tworzy tarcie w typowych punktach ekspansji",
    "Packaging jest dopasowany do głównych wzorców adopcji, ale segmenty drugorzędne i ścieżki ekspansji są źle obsługiwane",
    "Packaging jest walidowany względem danych adopcji i przeglądany corocznie pod kątem zgodności z rzeczywistością wykorzystania",
    "Architektura packagingu zaprojektowana na podstawie danych adopcji i ekspansji: ścieżki upgrade'u, triggery wykorzystania i dopasowanie metryk wartości walidowane przez wywiady z klientami i analizę kohort"
  ]
},
{
  id: 8008, pillar: 8, type: "scale",
  title: "Jak dokładnie rozumieją Państwo, które funkcjonalności budują skłonność do płacenia: i czy to zrozumienie wprost kształtuje sposób, w jaki je pakują i wyceniają?",
  options: [
    "Brak pricing intelligence na poziomie funkcji: funkcje są packagowane bez testów wartości",
    "Intuicyjne założenia kierują packagingiem funkcji, ale brak badań, które je wspierają",
    "Testy wartości poszczególnych funkcji zostały przeprowadzone, ale nie są systematycznie stosowane",
    "Mapowanie funkcja-skłonność do płacenia walidowane przez badania nabywców i analizę Win Rate",
    "Żywy model wartości funkcji: istotność funkcji i skłonność do płacenia testowane ciągle przez wywiady z nabywcami i dane wykorzystania, zasilający packaging corocznie"
  ]
},
{
  id: 8009, pillar: 8, type: "scale",
  title: "W ostatnim kwartale jaki procent deali ekspansji wymagał pełnej renegocjacji kontraktu i czy ten procent poprawia się czy pogarsza?",
  options: [
    "Każda ekspansja wymaga nowego procesu handlowego: packaging nie dostosowuje się do wzrostu",
    "Ekspansja jest możliwa, ale tworzy tarcie handlowe z powodu packagingu lub struktury kontraktowej",
    "Niektóre ścieżki ekspansji istnieją, ale nie wszystkie typowe scenariusze wzrostu są obsługiwane czysto",
    "Packaging zawiera zdefiniowane ścieżki ekspansji walidowane względem typowych wzorców wzrostu klientów",
    "Modularna architektura ekspansji: triggery wykorzystania, miejsc i funkcji automatycznie fakturowane bez renegocjacji, wyciek ekspansji monitorowany kwartalnie i packaging aktualizowany przy wykryciu wycieku"
  ]
},
{
  id: 8010, pillar: 8, type: "scale",
  title: "W 10 ostatnich dealach ilu potencjalnych klientów poprosiło o wyjaśnienie pricingu, które powinno być oczywiste na podstawie opublikowanych materiałów?",
  options: [
    "Wszyscy lub prawie wszyscy potencjalni klienci potrzebowali istotnych wyjaśnień pricingu: nasz pricing nie jest samowyjaśniający dla żadnego segmentu",
    "Większość potencjalnych klientów potrzebowała przynajmniej jednej rozmowy follow-up, aby zrozumieć, co będą płacić, zanim mogli dokonać oceny",
    "Połowa lub więcej potrzebowała wyjaśnień: pricing jest mniej więcej zrozumiały dla doświadczonych nabywców, ale niejasny dla pozostałych",
    "Mniej niż 3 na 10 potencjalnych klientów potrzebowało wyjaśnień pricingu: większość nabywców z głównego segmentu potrafi samodzielnie wybrać właściwy tier",
    "Klarowność pricingu jest testowana: zrozumienie nabywców walidowane przez ustrukturyzowane wywiady, mniej niż 1 na 10 potencjalnych klientów z głównego segmentu wymaga wyjaśnienia pricingu przez handlowca"
  ]
},
{
  id: 8011, pillar: 8, type: "scale",
  title: "Jak precyzyjnie rozumieją Państwo wrażliwość cenową na poziomie segmentu i jak kształtuje to priorytetyzację segmentów?",
  options: [
    "Wrażliwość cenowa nie jest analizowana według segmentu: jedna struktura pricingu obsługuje wszystkie segmenty",
    "Przybliżona świadomość, które segmenty kwestionują cenę",
    "Wrażliwość cenowa według segmentu monitorowana nieformalnie na podstawie danych dealowych",
    "Wrażliwość cenowa analizowana według segmentu, walidowana przez dane dealowe i wywiady, przeglądana corocznie",
    "Model wrażliwości cenowej według segmentu: elastyczność skwantyfikowana według segmentu, zasilająca architekturę cenową, zarządzanie rabatami i alokację zasobów GTM"
  ]
},
{
  id: 8012, pillar: 8, type: "scale",
  title: "Czy Państwa packaging opiera się na udokumentowanych badaniach skłonności do płacenia, czy na wewnętrznych założeniach o najbardziej wartościowych funkcjonalnościach?",
  options: [
    "Packaging został zaprojektowany wewnętrznie: żadne badania nabywców dotyczące wartości funkcji nigdy nie zostały przeprowadzone",
    "Intuicyjne założenia kierują packagingiem funkcji, żadne ustrukturyzowane badania nie wspierają obecnych decyzji packagingowych",
    "Testy wartości poszczególnych funkcji zostały przeprowadzone, ale wyniki nie są systematycznie stosowane do decyzji packagingowych",
    "Mapowanie funkcja-skłonność do płacenia zostało zwalidowane przez badania nabywców i analizę Win Rate według przedziału cenowego",
    "Istnieje żywy model wartości funkcji: istotność funkcji i skłonność do płacenia testowane przez wywiady z nabywcami i dane wykorzystania, przeglądane corocznie i bezpośrednio zasilające decyzje packagingowe, nie założenia"
  ]
},
{
  id: 8013, pillar: 8, type: "scale",
  title: "Czy Państwa pricing i packaging oferują realnie różne konfiguracje dla różnych person, use case'ów czy wertykali: czy w praktyce jest to jedna struktura dla wszystkich?",
  options: [
    "Uniwersalna struktura cenowa obsługuje wszystkie persony i przypadki użycia",
    "Nieformalne dostosowania cenowe są dokonywane dla konkretnych person bez udokumentowanego uzasadnienia",
    "Pewne zróżnicowanie według persony lub wertykalu istnieje, ale nie jest stosowane spójnie",
    "Opcje packagingu oparte na personach lub przypadkach użycia są udokumentowane i używane przy strukturyzowaniu deali",
    "W pełni zróżnicowana architektura packagingu: konfiguracje specyficzne dla person, przypadków użycia i wertykali walidowane przez badania nabywców"
  ]
},
{
  id: 8014, pillar: 8, type: "scale",
  title: "Kiedy ostatnio formalnie benchmarkowali Państwo swój pricing wobec konkurencji i czy ta analiza zmieniła którąkolwiek decyzję pricingową lub packagingową?",
  options: [
    "Brak danych o pricingu konkurencji: pozycjonowanie względem alternatyw jest nieznane",
    "Przybliżona świadomość pricingu konkurencji z rozmów handlowych, nieustrukturyzowana ani niedawna",
    "Okresowy przegląd pricingu konkurencji ma miejsce, ale jakość i świeżość danych są ograniczone",
    "Coroczny przegląd pricingu konkurencji z udokumentowanymi implikacjami pozycjonowania i decyzjami",
    "Program competitive pricing intelligence: benchmarkowany półrocznie, pricing konkurencji na poziomie deali monitorowany w CRM i pozycja przeglądana kwartalnie, z udokumentowaną odpowiedzią, gdy pozycja się zmienia"
  ]
},
{
  id: 8015, pillar: 8, type: "scale",
  title: "W ostatnim kwartale ile deali wywołało konflikt kanałów między motion self-serve a enterprise u Państwa i czy istnieje udokumentowana reguła mówiąca, który motion odpowiada za które konto?",
  options: [
    "Konflikt kanałów nie jest zarządzany: self-serve i enterprise regularnie konkurują o te same konta bez reguły rozwiązywania",
    "Konflikt istnieje i jest znany, ale zarządzany ad hoc, żadna formalna reguła odpowiedzialności nie istnieje",
    "Nieformalna reguła reguluje większość konfliktów, ale przypadki brzegowe nadal powodują tarcie lub wewnętrzne konflikty",
    "Udokumentowana reguła odpowiedzialności definiuje, która motion obsługuje jakie konta, większość konfliktów jest rozwiązywana bez eskalacji",
    "Konflikt kanałów jest monitorowaną metryką: reguły odpowiedzialności egzekwowane w CRM, wskaźnik konfliktów monitorowany miesięcznie, a luki w regułach adresowane w kwartalnych przeglądach RevOps"
  ]
},
{
  id: 8016, pillar: 8, type: "scale",
  title: "Jak systematycznie identyfikują Państwo miejsca, w których pricing lub packaging generuje tarcie blokujące deale lub wydłużające cykl sprzedaży?",
  options: [
    "Tarcie pricingowe jest identyfikowane tylko wtedy, gdy deale są przegrywane",
    "Anegdoty handlowe nieformalnie podnoszą tarcie bez systematycznego śledzenia",
    "Analiza przegranych deali czasami ujawnia blokady pricingowe",
    "Tarcie pricingowe jest monitorowane w analizie przegranych deali i przeglądane kwartalnie z Finansami i RevOps",
    "Program pricing friction intelligence: blokady monitorowane według segmentu i etapu deala, przeglądane kwartalnie i zasilające aktualizacje packagingu i zmiany reguł rabatowych"
  ]
},
{
  id: 8017, pillar: 8, type: "scale",
  title: "Jak regularnie i rygorystycznie testują Państwo zmiany pricingu i jaki jest proces walidacji aktualizacji cennika przed pełnym rolloutem?",
  options: [
    "Brak testów pricingu: zmiany są wdrażane decyzją kadry zarządzającej",
    "Zmiany pricingu są dokonywane okazjonalnie bez formalnego procesu walidacji",
    "Niektóre eksperymenty pricingowe są prowadzone, ale wyniki są oceniane nieformalnie",
    "Zdefiniowany proces zmiany pricingu: hipoteza, kohorta testowa, okres pomiaru i kryteria go/no-go udokumentowane przed każdą zmianą",
    "Model systematycznego zarządzania pricingiem: wszystkie zmiany pilotowane, wpływ na konwersję i marżę mierzony, a decyzja wdrożeniowa udokumentowana"
  ]
},
{
  id: 8018, pillar: 8, type: "scale",
  title: "Dla każdej geografii, w której Państwo aktywnie sprzedają: czy pricing jest walidowany na lokalnej skłonności do płacenia, czy to zwykła konwersja cennika z rynku głównego?",
  options: [
    "Jedna globalna struktura cenowa stosowana wszędzie bez uwzględnienia geograficznego",
    "Nieformalne dostosowania geograficzne dokonywane w negocjacjach bez udokumentowanego uzasadnienia",
    "Regionalny pricing istnieje, ale nie jest walidowany względem lokalnych danych rynkowych",
    "Pricing specyficzny dla geografii walidowany przez badania nabywców i lokalne dane dealowe",
    "Model pricingu geograficznego: lokalna skłonność do płacenia zwalidowana, parytet siły nabywczej stosowany tam, gdzie zasadne, i regionalny pricing przeglądany corocznie"
  ]
},
{
  id: 8019, pillar: 8, type: "scale",
  title: "Jak systematycznie mierzą Państwo skuteczność pricingu i jakie metryki sygnalizują, że pricing wymaga korekty?",
  options: [
    "Wydajność pricingu nie jest monitorowana: wzrost przychodów jest jedynym sygnałem",
    "Win Rate i średnia wielkość deala są monitorowane, ale nie powiązane ze strukturą pricingu",
    "Niektóre metryki pricingu są przeglądane corocznie, ale bez zdefiniowanych progów wydajności",
    "Kwartalny przegląd wydajności pricingu: Win Rate według przedziału cenowego, częstotliwość rabatów i wskaźnik ekspansji monitorowane względem celów",
    "System pricing analytics: Win Rate, wskaźnik rabatów, velocity deali i NRR przeglądane miesięcznie według segmentu, z zdefiniowanymi triggerami przeglądu pricingu"
  ]
},
{
  id: 8020, pillar: 8, type: "scale",
  title: "Czy pricing w sposób automatyczny wychwytuje wzrost wartości: np. przez wzrost wykorzystania lub dodawanie miejsc: bez ręcznej renegocjacji?",
  options: [
    "Każda ekspansja wartości wymaga procesu ręcznej renegocjacji",
    "Pewne triggery ekspansji istnieją, ale proces handlowy jest w dużej mierze ręczny",
    "Ekspansja miejsc lub wykorzystania jest przewidziana kontraktowo, ale niezautomatyzowana",
    "Większość scenariuszy ekspansji jest regulowana warunkami kontraktowymi i automatycznie fakturowana bez renegocjacji",
    "W pełni zautomatyzowany model ekspansji: triggery wykorzystania, miejsc i funkcji automatycznie fakturowane bez zaangażowania handlowego, przeglądane pod kątem wycieków kwartalnie"
  ]
},

/* ===========================================================
   FILAR 9: PRODUCT READINESS (20 PYTAŃ)
   =========================================================== */

{
  id: 9001, pillar: 9, type: "scale",
  title: "Jak często luki produktowe wypływają w dealach na zaawansowanym etapie, po demo, podczas proof-of-concept lub zakupu?",
  subtitle: "Odpowiedzi dotyczą głównego segmentu przychodowego i głównego motion GTM, chyba że pytanie wyraźnie wymaga rozróżnienia.",
  options: [
    "Zaskakujące luki produktowe w dealach na zaawansowanym etapie są częste: przegrywamy deale z ich powodu",
    "Luki wypływają regularnie w dealach na zaawansowanym etapie i są obsługiwane ad hoc bez procesu zapobiegania",
    "Luki czasami wypływają późno, ale istnieje proces eskalacji do ich obsługi",
    "Etap walidacji technicznej przed dealem wychwytuje większość luk, zanim dotrą do zaawansowanego etapu",
    "Model zero niespodzianek: dopasowanie rozwiązania jest potwierdzane w discovery przez ustrukturyzowany framework, częstotliwość luk na zaawansowanym etapie jest monitorowana kwartalnie i zasila ulepszenia procesu sprzedaży"
  ]
},
{
  id: 9002, pillar: 9, type: "scale",
  title: "Jak przewidywalnie nowi klienci osiągają pierwszą wartość i jak jest to monitorowane w kohortach klientów?",
  options: [
    "Time-to-value nie jest monitorowany: nie wiemy, kiedy klienci widzą pierwsze wyniki",
    "Time-to-value znacznie się różni bez wyraźnego schematu ani osoby odpowiedzialnej",
    "Benchmark time-to-value istnieje, ale osiągnięcie jest niespójne",
    "Time-to-value jest monitorowany według kohorty i przeglądany kwartalnie z udokumentowanymi działaniami naprawczymi",
    "Model time-to-value: cel zdefiniowany według segmentu, osiągnięcie monitorowane według klienta i trendy kohort przeglądane miesięcznie na spotkaniach CS i Produktu"
  ]
},
{
  id: 9003, pillar: 9, type: "scale",
  title: "W standardowym cyklu sprzedaży jaki procent dem prowadzi do jasnego następnego kroku: i czy wiedzą Państwo, która część demo daje ten wynik?",
  options: [
    "Produkt nie może być skutecznie demonstrowany bez obszernych przygotowań",
    "Demo istnieje, ale zazwyczaj wymaga znacznej personalizacji lub zaangażowania specjalisty",
    "Referencyjne demo działa dla większości przypadków, ale złożone scenariusze wymagają obejść",
    "Standardowy framework demo pokrywa wszystkie główne przypadki użycia i jest używany spójnie",
    "System demo o wysokiej konwersji: specyficzny dla segmentu, samodzielny i monitorowany pod kątem wskaźnika konwersji do następnego etapu kwartalnie"
  ]
},
{
  id: 9004, pillar: 9, type: "scale",
  title: "W ostatnim kwartale ile eskalacji klientów w pierwszych 90 dniach było spowodowanych rozbieżnością między tym, co zostało sprzedane, a tym, co zostało dostarczone, i czy jest to monitorowane?",
  options: [
    "Rzeczywistość po sprzedaży często różni się od tego, co zostało sprzedane: powodując natychmiastowe tarcie i uszkodzenie zaufania",
    "Rozbieżności między obietnicami handlowymi a rzeczywistością dostarczenia są częste i obsługiwane ad hoc",
    "Rozbieżności występują sporadycznie, ale istnieje proces zarządzania oczekiwaniami przed przekazaniem",
    "Doświadczenie wdrożeniowe odpowiada oczekiwaniom handlowym w większości przypadków z udokumentowanymi wyjątkami",
    "Oczekiwania handlowe i wdrożeniowe są zgodne kontraktowo: rozbieżności monitorowane, przyczyny źródłowe identyfikowane kwartalnie, a powtarzające się schematy prowadzą do zmian procesu sprzedaży lub produktu"
  ]
},
{
  id: 9005, pillar: 9, type: "scale",
  title: "Czy produkt naturalnie wspiera wybrany przez Państwa motion GTM: SMB, mid-market czy enterprise: pod kątem wdrożenia, konfiguracji i time-to-value?",
  options: [
    "Produkt systematycznie tworzy tarcie z wybraną motion GTM",
    "Produkt działa dla motion GTM, ale wymaga znaczących obejść",
    "Częściowe dopasowanie: produkt wspiera niektóre scenariusze, ale tworzy tarcie w innych",
    "Produkt jest dobrze dopasowany do motion GTM z drobnymi wyjątkami",
    "Produkt jest zaprojektowany dla motion GTM: wdrożenie, konfiguracja i harmonogramy wartości zwalidowane względem oczekiwań docelowego segmentu"
  ]
},
{
  id: 9006, pillar: 9, type: "scale",
  title: "Jak spójnie rzeczywiste doświadczenie wdrożeniowe odpowiada temu, co zostało obiecane klientowi podczas cyklu sprzedaży?",
  options: [
    "Oczekiwania po sprzedaży często różnią się od tego, co zostało sprzedane: powodując natychmiastowe tarcie",
    "Rozbieżności między obietnicami handlowymi a rzeczywistością dostarczenia są częste",
    "Rozbieżności występują sporadycznie i są obsługiwane ad hoc",
    "Doświadczenie wdrożeniowe odpowiada oczekiwaniom handlowym w większości przypadków z udokumentowanymi wyjątkami",
    "Oczekiwania handlowe i wdrożeniowe są zgodne kontraktowo: rozbieżności monitorowane i przyczyny źródłowe identyfikowane kwartalnie"
  ]
},
{
  id: 9007, pillar: 9, type: "scale",
  title: "W 10 ostatnich Państwa dealach ile razy wypłynęło ograniczenie produktowe, którego nie było w udokumentowanym rejestrze ograniczeń: i co się z nim stało?",
  options: [
    "Ograniczenia produktu nie są udokumentowane: zespoły odkrywają je podczas deali lub onboardingu",
    "Niektóre ograniczenia są znane nieformalnie, ale komunikowane niespójnie między Sales a CS",
    "Dokument ograniczeń istnieje, ale nie jest regularnie aktualizowany ani używany w kwalifikacji deali",
    "Ograniczenia produktu są udokumentowane, aktualizowane przy każdym release i zintegrowane w onboardingu handlowym i kwalifikacji",
    "Jawny rejestr ograniczeń produktu: utrzymywany przez Produkt, przeglądany z Sales i CS kwartalnie i zintegrowany w playbookach kwalifikacji deali i skryptach onboardingu"
  ]
},
{
  id: 9008, pillar: 9, type: "scale",
  title: "Jak niezawodnie zespoły handlowe mogą potwierdzić lub zdyskwalifikować dopasowanie produktu wcześnie w dealu, bez konieczności walidacji technicznej na zaawansowanym etapie?",
  options: [
    "Dopasowanie produktu jest zazwyczaj potwierdzane dopiero podczas lub po proof-of-concept",
    "Ocena dopasowania jest opóźniana do środka cyklu, ponieważ kryteria kwalifikacji są niejasne",
    "Kryteria kwalifikacji istnieją, ale nie są stosowane spójnie wcześnie w procesie",
    "Udokumentowany framework kwalifikacji umożliwia wczesne potwierdzenie dopasowania w większości deali",
    "Playbook samokwalifikacji: handlowcy mogą potwierdzić lub zdyskwalifikować dopasowanie pod koniec discovery przy użyciu zdefiniowanych kryteriów zakotwiczonych w produkcie"
  ]
},
{
  id: 9009, pillar: 9, type: "scale",
  title: "W jakim stopniu Państwa ograniczenia produktu są dobrze udokumentowane i czy Sales oraz CS systematycznie wykorzystują tę wiedzę w dealach i podczas onboardingu?",
  options: [
    "Ograniczenia produktu nie są udokumentowane: zespoły odkrywają je podczas deali lub onboardingu",
    "Niektóre ograniczenia są znane, ale komunikowane niespójnie między Sales a CS",
    "Dokument ograniczeń istnieje, ale nie jest regularnie aktualizowany ani przywoływany",
    "Ograniczenia produktu są udokumentowane, aktualizowane przy każdym release i zintegrowane w onboardingu handlowym",
    "Jawny rejestr ograniczeń produktu: utrzymywany przez Produkt, przeglądany przez Sales i CS kwartalnie i zintegrowany w playbookach kwalifikacji deali i onboardingu"
  ]
},
{
  id: 9010, pillar: 9, type: "scale",
  title: "Gdy luka produktowa wypływa w dealu na zaawansowanym etapie, jaka jest udokumentowana ścieżka eskalacji i jak często podążanie nią prowadzi do zamkniętego deala vs straty?",
  options: [
    "Brak ścieżki eskalacji: luki produktowe na zaawansowanym etapie są obsługiwane ad hoc przez tego, kto jest dostępny",
    "Nieformalna eskalacja istnieje, handlowcy wiedzą, do kogo zadzwonić, ale wyniki znacznie się różnią i nie są monitorowane",
    "Proces eskalacji jest udokumentowany, ale stosowany niespójnie, a czy poprawia wyniki, jest nieznane",
    "Udokumentowana ścieżka eskalacji istnieje, jest stosowana w większości przypadków, a Win Rates na eskalowanych dealach są przeglądane kwartalnie",
    "Zarządzany system eskalacji luk: ścieżka udokumentowana, stosowana spójnie, Win Rate na eskalowanych dealach monitorowany i benchmarkowany, a powtarzające się luki zasilają aktualizację rejestru ograniczeń produktu"
  ]
},
{
  id: 9011, pillar: 9, type: "scale",
  title: "W jakim stopniu onboarding klienta u Państwa jest zautomatyzowany i self-serve: i jaka ręczna interwencja jest wymagana, aby domknąć standardową konfigurację?",
  options: [
    "Onboarding jest całkowicie ręczny: każdy klient wymaga znacznego czasu PS lub CS",
    "Onboarding jest głównie ręczny z kilkoma wzorcowymi krokami",
    "Mieszanka kroków zautomatyzowanych i ręcznych: wysiłek ręczny znacznie się różni w zależności od klienta",
    "Większość kroków onboardingu jest zautomatyzowana z ograniczonym zaangażowaniem ręcznym w zdefiniowanych wyjątkach",
    "Onboarding jest w pełni zautomatyzowany dla standardowych konfiguracji: ręczne punkty styku są monitorowane, a wskaźniki ukończenia przeglądane miesięcznie"
  ]
},
{
  id: 9012, pillar: 9, type: "scale",
  title: "Poproście niezależnie handlowca i CSM-a o wymienienie trzech głównych ograniczeń produktu. Czy ich odpowiedzi się zbiegają: i kiedy ostatnio ta spójność była sprawdzana?",
  options: [
    "Sales, CS i Produkt mają znacząco różne poglądy na możliwości i ograniczenia produktu",
    "Zgodność na wysokim poziomie istnieje, ale załamuje się w przypadkach brzegowych i rozmowach z klientami",
    "Wspólny dokument produktowy istnieje, ale nie jest stosowany spójnie między zespołami",
    "Jednolite rozumienie produktu utrzymywane przez regularne synchronizacje cross-funkcjonalne i wspólną dokumentację",
    "Pojedyncze źródło prawdy o produkcie: granice możliwości, znane ograniczenia i pozycjonowanie współposiadane przez Sales, CS i Produkt, aktualizowane kwartalnie i testowane pod kątem spójności"
  ]
},
{
  id: 9013, pillar: 9, type: "scale",
  title: "Czy produkt integruje się płynnie ze środowiskami technicznymi klientów i jak często problemy integracyjne opóźniają time-to-value?",
  options: [
    "Wyzwania integracyjne są częste i często opóźniają lub wykolejają wdrożenia",
    "Integracja działa w większości przypadków, ale wymaga znacznego wysiłku IT klienta",
    "Integracja jest akceptowalna dla głównych środowisk, ale luki istnieją dla drugorzędnych Stacków",
    "Pokrycie integracyjne jest dobrze udokumentowane i zwalidowane względem docelowych środowisk klientów",
    "Certyfikowany ekosystem integracji: integracje docelowego Stacka zwalidowane, dokumentacja utrzymywana, a wskaźniki awarii integracji monitorowane w reportingu CS"
  ]
},
{
  id: 9014, pillar: 9, type: "scale",
  title: "Jak spójnie Sales, CS i Produkt dzielą wspólny pogląd na to, co produkt robi dobrze, a czego nie robi?",
  options: [
    "Sales, CS i Produkt mają znacząco różne poglądy na możliwości produktu",
    "Zgodność istnieje na wysokim poziomie, ale załamuje się w przypadkach brzegowych i rozmowach z klientami",
    "Wspólny dokument pozycjonowania produktu istnieje, ale nie jest stosowany spójnie",
    "Jednolite rozumienie produktu jest utrzymywane przez regularne synchronizacje cross-funkcjonalne i wspólną dokumentację",
    "Pojedyncze źródło prawdy o produkcie: granice możliwości, znane ograniczenia i pozycjonowanie są współposiadane przez Sales, CS i Produkt oraz aktualizowane kwartalnie"
  ]
},
{
  id: 9015, pillar: 9, type: "scale",
  title: "W ostatnim kwartale jaki procent deali ekspansji wymagał pracy engineeringu, konfiguracji na zamówienie lub zaangażowania PS i czy ten procent się poprawia?",
  options: [
    "Ponad 80% deali ekspansji wymagało znacznego zaangażowania engineeringu lub PS: ekspansja nie jest w self-service i nigdy nie była",
    "50-80% ekspansji wymagało interwencji technicznej: standardowe ścieżki ekspansji nie są niezawodnie w self-service",
    "20-50% ekspansji wymagało pracy technicznej: typowe scenariusze ekspansji działają ogólnie, ale przypadki brzegowe nadal wymagają wsparcia",
    "Mniej niż 20% deali ekspansji wymagało interwencji technicznej: najczęstsze scenariusze ekspansji są natywnie wspierane",
    "Mniej niż 10% ekspansji wymaga zaangażowania engineeringu lub PS: ścieżki ekspansji są bez tarcia, udokumentowane i testowane względem rzeczywistych wzorców klientów, wycieki przeglądane kwartalnie"
  ]
},
{
  id: 9016, pillar: 9, type: "scale",
  title: "W jakim stopniu Państwa dokumentacja produktu i materiały enablementowe są kompletne oraz aktualne: i czy zespoły GTM uznają je za wystarczające bez eskalacji do Produktu?",
  options: [
    "Dokumentacja jest brakująca, nieaktualna lub niedostępna",
    "Dokumentacja istnieje, ale jest niekompletna i wymaga częstych wyjaśnień od zespołu Produktu",
    "Dokumentacja pokrywa główne przypadki użycia, ale luki istnieją dla zaawansowanych scenariuszy",
    "Kompletna dokumentacja pokrywająca główne i drugorzędne przypadki użycia, aktualizowana przy każdym release",
    "System dokumentacji best-in-class: kompletny, wersjonowany, przeszukiwalny i walidowany przez zespoły GTM pod kątem wystarczalności kwartalnie"
  ]
},
{
  id: 9017, pillar: 9, type: "scale",
  title: "W jakim stopniu proces zgłaszania feedbacku produktowego przez zespoły GTM jest ustrukturyzowany: i jak Państwo monitorują, czy wpływa na roadmapę?",
  options: [
    "Brak procesu feedbacku: zespoły GTM eskalują do Produktu nieformalnymi kanałami",
    "Ad-hoc proces feedbacku istnieje, ale śledzenie input-wynik jest nieobecne",
    "Ustrukturyzowany proces składania feedbacku istnieje, ale wpływ na roadmapę jest niejasny",
    "Formalna pętla feedbacku: inputy monitorowane od złożenia do przeglądu roadmapy z widocznością wyników dla składających",
    "Zamknięty system feedbacku GTM-do-Produktu: inputy rejestrowane, przeglądane kwartalnie, priorytetyzowane transparentnie, a wyniki raportowane do zespołów GTM"
  ]
},
{
  id: 9018, pillar: 9, type: "scale",
  title: "W jakim stopniu decyzje roadmapy są bezpośrednio zasilane zwalidowanymi sygnałami GTM i klientów, a nie wewnętrznymi założeniami?",
  options: [
    "Roadmapa jest kierowana priorytetami engineeringu i intuicją leadership",
    "Prośby klientów są rozważane, ale ważenie jest nieformalne i nieprzejrzyste",
    "Inputy klientów i rynkowe zasilają planowanie, ale nie są systematycznie scoringowane",
    "Decyzje roadmapy dokumentują dowody rynkowe i klienckie stojące za każdym priorytetem",
    "Roadmapa oparta na dowodach: każda znacząca decyzja ma udokumentowany sygnał rynkowy i kliencki z częstotliwością, wpływem na przychody i korelacją z retencją"
  ]
},
{
  id: 9019, pillar: 9, type: "scale",
  title: "W ostatnim kwartale jaki procent nowych deali wymagał niestandardowej klauzuli, niestandardowego zobowiązania dostarczenia lub wyjątku od Państwa standardowego procesu: i czy ten wskaźnik jest monitorowany?",
  options: [
    "Wyjątki są normą: większość deali wymaga jakiejś formy niestandardowej klauzuli lub akomodacji dostarczenia",
    "Znacząca mniejszość deali wymaga wyjątków, ale wskaźnik nie jest monitorowany, a czynniki są niejasne",
    "Wskaźnik wyjątków jest monitorowany, ale nie formalnie przeglądany: czy się poprawia, czy pogarsza, jest nieznane",
    "Wskaźnik wyjątków jest monitorowany kwartalnie, przeglądany przez leadership, a czynniki są analizowane w celu redukcji powtarzalności",
    "Zarządzana dyscyplina wyjątków: standardowe warunki i dostarczenie dotyczą ogromnej większości deali, wskaźnik wyjątków jest zarządzanym KPI, a każdy wyjątek jest rejestrowany, zatwierdzany i jego przyczyna źródłowa identyfikowana"
  ]
},
{
  id: 9020, pillar: 9, type: "scale",
  title: "Jak spójnie Państwa produkt może być sprzedawany, wdrażany i skalowany bez konieczności wyjątków od standardowych warunków lub procesów dostarczenia?",
  options: [
    "Wyjątki są normą: prawie każdy deal wymaga jakiejś formy akomodacji na zamówienie",
    "Wyjątki są częste i obsługiwane ad hoc bez udokumentowanego zarządzania",
    "Niektóre scenariusze wyjątków są udokumentowane, ale inne nadal wymagają ad hoc rozwiązywania",
    "Wyjątki są rzadkie i regulowane udokumentowanym procesem wyjątków z zatwierdzeniem leadership",
    "Standardowy model bez wyjątków: standardowe warunki i dostarczenie są stosowane spójnie, wyjątki są monitorowane i przeglądane pod kątem systemowego rozwiązania"
  ]
},

/* ===========================================================
   FILAR 10: DATA & INSIGHTS (20 PYTAŃ)
   =========================================================== */

{
  id: 10001, pillar: 10, type: "scale",
  title: "Z ostatnich 30 dni wskażcie decyzję GTM, którą zmieniły dane. Czy łatwo Państwu odpowiedzieć?",
  subtitle: "Odpowiedzi dotyczą głównego segmentu przychodowego i głównego motion GTM, chyba że pytanie wyraźnie wymaga rozróżnienia.",
  options: [
    "Nie możemy wymienić żadnej: dane są produkowane, ale nie wpływają na decyzje",
    "Dane są przeglądane na spotkaniach, ale rzadko zmieniają wniosek: intuicja dominuje",
    "Dane sporadycznie wpływają na decyzje, ale nie możemy wskazać konkretnego niedawnego przykładu",
    "Możemy wymienić dwie lub trzy niedawne decyzje bezpośrednio zasilone danymi z udokumentowanym uzasadnieniem",
    "Decyzje oparte na danych są normą: każda duża decyzja GTM jest udokumentowana z poparciem danych, a przypadki, w których dane wyparły intuicję, są monitorowane jako pozytywne sygnały zarządzania"
  ]
},
{
  id: 10002, pillar: 10, type: "scale",
  title: "Na Państwa trzech ostatnich przeglądach leadershipowych ile minut poszło na debaty o definicjach metryk, a nie na działanie na ich podstawie: i czy ta liczba pokazuje poprawę?",
  options: [
    "Większość czasu przeglądu jest pochłaniana przez spory o metryki: zespoły nie ufają wspólnemu zestawowi definicji",
    "Debaty o metrykach często spowalniają decyzje i nie ma dowodów, że sytuacja się poprawia",
    "Definicje metryk są głównie spójne, ale powtarzające się spory nadal pochłaniają znaczny czas przeglądu",
    "Definicje metryk są zarządzane, spory są ograniczone, a czas przeglądu jest głównie poświęcany interpretacji i działaniu",
    "Pojedyncze źródło rejestru metryk reguluje wszystkie przeglądy leadership: debaty o definicjach są rzadkie, monitorowane, gdy występują, i w trendzie spadkowym"
  ]
},
{
  id: 10003, pillar: 10, type: "scale",
  title: "Jak konsekwentnie dane są używane do kierowania decyzjami GTM i czy możesz podać przykład z ostatnich 30 dni, w którym dane zmieniły plan?",
  options: [
    "Wyczucie kieruje większością decyzji: dane są produkowane, ale nie używane",
    "Dane są przeglądane na spotkaniach, ale rzadko zmieniają wniosek",
    "Dane sporadycznie wpływają na decyzje, ale intuicja nadal dominuje",
    "Dane są głównym inputem dla większości decyzji GTM z udokumentowanym uzasadnieniem decyzji",
    "Kultura decyzji opartych na danych: decyzje udokumentowane z poparciem danych i przypadki, w których dane wyparły intuicję, monitorowane jako pozytywny sygnał"
  ]
},
{
  id: 10004, pillar: 10, type: "scale",
  title: "Tu i teraz, bez ręcznej ekstrakcji danych: czy potrafią Państwo podać wskaźnik pokrycia pipeline, pipeline ważony etapem i liczbę zagrożonych deali w tym kwartale?",
  options: [
    "Nie: te liczby wymagają ręcznego zestawienia lub nie są w ogóle dostępne",
    "Niektóre liczby są dostępne, ale co najmniej jedna wymaga pracy ręcznej lub nie jest wiarygodna",
    "Główne metryki Pipeline istnieją w panelach, ale zaufanie do dokładności lub świeżości jest mieszane",
    "Te metryki są dostępne niemal w czasie rzeczywistym i używane w cotygodniowych przeglądach operacyjnych",
    "Zarządzana warstwa pipeline intelligence: pokrycie, ważona wartość etapu i deale zagrożone dostępne na żądanie, wiarygodne dla leadership i powiązane z udokumentowanymi progami działania"
  ]
},
{
  id: 10005, pillar: 10, type: "scale",
  title: "W ciągu ostatnich dwóch kwartałów ile chybień przychodowych zostało przewidzianych przez wskaźnik wyprzedzający ponad 60 dni wcześniej, a ile odkryto dopiero na koniec kwartału?",
  options: [
    "Żadne nie zostało przewidziane wcześnie: chybienia odkryto, gdy przychody były już utracone",
    "Kilka sygnałów alarmowych istniało, ale były nieformalne i nie powiązane ze zdefiniowanym systemem wskaźników wyprzedzających",
    "Niektóre chybienia zostały przewidziane wcześnie, ale jakość sygnałów i śledzenie były niespójne",
    "Wskaźniki wyprzedzające przewidziały kilka chybień wystarczająco wcześnie, aby podjąć działania, a te przypadki zostały przejrzane po kwartale",
    "Istnieje system sygnałów predykcyjnych: wczesne ostrzeżenia są rejestrowane, prowadzone do działania i przeglądane względem wyników, a wskaźnik chybień wykrytych wcześnie vs późno monitorowany w czasie"
  ]
},
{
  id: 10006, pillar: 10, type: "scale",
  title: "Jak precyzyjnie mierzą Państwo efektywność GTM: i czy potrafią policzyć zwrot z CAC, burn multiple i efektywność pipeline według motion?",
  options: [
    "Efektywność GTM nie jest mierzona: monitorujemy przychody, ale nie koszt przychodów",
    "Całkowity CAC jest monitorowany, ale efektywność według motion lub segmentu jest nieznana",
    "Główne metryki efektywności istnieją, ale są przeglądane rzadko lub niespójnie",
    "CAC, zwrot z inwestycji i efektywność Pipeline monitorowane według motion i przeglądane miesięcznie",
    "P&L efektywności GTM: CAC, zwrot, burn multiple i efektywność Pipeline według motion, segmentu i handlowca przeglądane miesięcznie na spotkaniach leadership"
  ]
},
{
  id: 10007, pillar: 10, type: "scale",
  title: "Jak rygorystycznie prowadzą Państwo analizy kohortowe: i czy potrafią porównać wskaźniki retencji, ekspansji i churnu między kohortami akwizycyjnymi?",
  options: [
    "Brak analizy kohort: wydajność klientów nie jest monitorowana w czasie",
    "Podstawowe śledzenie kohort istnieje, ale nie jest przeglądane ani używane w planowaniu",
    "Dane kohort są dostępne, ale analiza jest powierzchowna i rzadka",
    "Kwartalne przeglądy kohort porównujące retencję, NRR i ekspansję według okresu akwizycji",
    "Kompletny system cohort intelligence: retencja, ekspansja i zwrot monitorowane według kohorty, przeglądane kwartalnie i zasilające strategię ICP oraz DG"
  ]
},
{
  id: 10008, pillar: 10, type: "scale",
  title: "Aktualnie, bez ręcznej ekstrakcji danych: czy możesz zobaczyć rozkład etapów swojego Pipeline, wskaźniki Health score i wskaźnik pokrycia, i czy ufasz tym liczbom?",
  options: [
    "Widoczność Pipeline jest ograniczona: widok w czasie rzeczywistym wymaga ręcznego zestawienia danych",
    "Pipeline jest widoczny w CRM, ale jakość, zdrowie i dokładność etapów nie są wiarygodne",
    "Panele Pipeline istnieją, ale problemy z higieną danych redukują zaufanie do widoku",
    "Widok Pipeline w czasie rzeczywistym z rozkładem etapów, wskaźnikami zdrowia i monitorowanym wskaźnikiem pokrycia",
    "Zarządzany system pipeline intelligence: rozkład etapów, Health score, pokrycie i velocity monitorowane w czasie rzeczywistym i przeglądane na cotygodniowych spotkaniach Pipeline"
  ]
},
{
  id: 10009, pillar: 10, type: "scale",
  title: "Z jakim poziomem granularności możesz segmentować dane wydajności GTM, według segmentu, motion, handlowca i kohorty, aby identyfikować przyczyny źródłowe, a nie średnie?",
  options: [
    "Dane wydajności są dostępne tylko zagregowane: segmentacja nie jest możliwa",
    "Pewna segmentacja jest możliwa, ale wymaga znaczącej ręcznej pracy na danych",
    "Główne segmenty są dostępne, ale filtrowanie krzyżowe według motion i handlowca jest ograniczone",
    "Wydajność można segmentować według segmentu, motion i handlowca z danymi dostępnymi w panelach",
    "Wielowymiarowy model segmentacji: wydajność podzielona według segmentu, motion, handlowca, kohorty i geografii, przeglądana miesięcznie na poziomie zespołu i leadership"
  ]
},
{
  id: 10010, pillar: 10, type: "scale",
  title: "Jak precyzyjnie Państwa zespół prognozuje przychody następnego kwartału i jaka jest typowa rozbieżność między commitem a finalnym wynikiem?",
  options: [
    "Brak formalnej prognozy: przychody kwartalne są niespodzianką",
    "Prognoza istnieje, ale rozbieżność względem rzeczywistości jest zazwyczaj powyżej 20%",
    "Prognozy są próbowane, ale rozbieżność jest niespójna i nie jest systematycznie przeglądana",
    "Udokumentowana metodologia forecastingu ze śledzeniem rozbieżności i retrospektywą po kwartale",
    "Zarządzany system forecastingu: rozbieżność konsekwentnie poniżej 10%, metodologia przeglądana kwartalnie, a dokładność call-do-closing monitorowana cotygodniowo"
  ]
},
{
  id: 10011, pillar: 10, type: "scale",
  title: "Jak zaawansowane jest u Państwa wykorzystanie analityki predykcyjnej w GTM: i czy potrafią Państwo modelować prawdopodobny wynik deala lub kampanii DG, zanim się zamkną?",
  options: [
    "Brak analityki predykcyjnej: wszystkie decyzje oparte są na danych historycznych lub intuicji",
    "Podstawowa analiza trendów istnieje, ale nie są używane żadne modele prospektywne",
    "Predictive scoring jest używany w jednej funkcji, ale nie jest stosowany w całym GTM",
    "Modele predykcyjne są używane do lead scoringu, ryzyka churnu i jakości Pipeline w całym GTM",
    "Kompletna warstwa predictive intelligence: scoring deali, predykcja churnu i modelowanie kampanii DG zintegrowane w codziennych operacjach GTM"
  ]
},
{
  id: 10012, pillar: 10, type: "scale",
  title: "W jakim stopniu Państwa dashboardy GTM są actionable: i czy, gdy dashboard pokazuje problem, istnieje jasny owner i konkretne następne działanie?",
  options: [
    "Panele istnieją, ale nie są ani przeglądane, ani wykorzystywane",
    "Panele są przeglądane, ale generują dyskusje, a nie decyzje",
    "Większość metryk ma odpowiedzialnych, ale śledzenie działań jest niespójne",
    "Panele prowadzą do udokumentowanych działań z odpowiedzialnymi i terminami przeglądanymi co tydzień",
    "Panele są narzędziami decyzyjnymi: każda metryka ma odpowiedzialnego, próg i udokumentowany Playbook na moment przekroczenia progu"
  ]
},
{
  id: 10013, pillar: 10, type: "scale",
  title: "W jakim stopniu Państwa przeglądy wydajności GTM są sterowane danymi: i jaki procent czasu idzie na analizę, a nie na anegdotę?",
  options: [
    "Przeglądy wydajności są kierowane anegdotami: dane są rzadko prezentowane lub kwestionowane",
    "Dane są obecne w przeglądach, ale dyskusja jest zdominowana przez narrację i intuicję",
    "Większość przeglądów używa danych, ale głębokość analizy znacząco różni się w zależności od menedżera",
    "Standardowy framework danych reguluje wszystkie przeglądy wydajności z wymaganymi materiałami pre-read",
    "Przeglądy wydajności są w pełni kierowane danymi: standardowy pre-read, ustrukturyzowana analiza i dziennik decyzji produkowany na każdej sesji"
  ]
},
{
  id: 10014, pillar: 10, type: "scale",
  title: "Jak systematycznie identyfikują Państwo trendy wydajności i jak szybko sygnały o trendach trafiają do osób, które mogą działać?",
  options: [
    "Trendy są identyfikowane po tym, jak już stały się problemami",
    "Świadomość trendów jest nieformalna: dostrzegana przez doświadczonych liderów na spotkaniach",
    "Pewne śledzenie trendów istnieje, ale prędkość sygnał-do-działania jest powolna",
    "Alerty trendów są zautomatyzowane i dostarczane odpowiedzialnym w zdefiniowanym czasie",
    "Proaktywny system trend intelligence: sygnały wykrywane algorytmicznie, dostarczane odpowiedzialnym w czasie rzeczywistym, a czas reakcji monitorowany jako metryka zarządzania"
  ]
},
{
  id: 10015, pillar: 10, type: "scale",
  title: "Jak systematycznie benchmarkują Państwo swoją wydajność GTM wobec zewnętrznych standardów branżowych i kiedy ostatnio benchmark podważył Państwa decyzję?",
  options: [
    "Brak Benchmarkingu: oceniamy wydajność w izolacji",
    "Leadership ma przybliżone pojęcie o średnich branżowych, ale brak formalnego porównania",
    "Coroczne porównanie do Benchmarków ma miejsce, ale rzadko zmienia sposób, w jaki operujemy",
    "Zewnętrzne Benchmarki są zintegrowane w planowaniu kwartalnym i przeglądach wydajności",
    "Ciągły program Benchmarkingu: zewnętrzne źródła danych zintegrowane w panelach, używane do kwestionowania założeń w planowaniu i przeglądane z zarządem"
  ]
},
{
  id: 10016, pillar: 10, type: "scale",
  title: "Jak precyzyjnie potrafią Państwo przewidzieć przychody następnego kwartału i jaki jest margines błędu w Państwa czterech ostatnich prognozach kwartalnych?",
  options: [
    "Prognozowanie przychodów jest niemożliwe: rozbieżność jest powyżej 25%",
    "Dokładność prognoz jest niska: rozbieżność typowo 15-25%",
    "Forecasting jest czasem dokładny, ale rozbieżność wewnątrzkwartalna jest znacząca",
    "Dokładność prognoz poniżej 10% w większości kwartałów z udokumentowanym procesem przeglądu rozbieżności",
    "Dokładność prognoz konsekwentnie poniżej 5%: historia czterech kwartałów udokumentowana i przeglądana z zarządem"
  ]
},
{
  id: 10017, pillar: 10, type: "scale",
  title: "Jak systematycznie wykorzystują Państwo dane o wydajności do realokacji zasobów GTM: budżetu, headcountu, fokusu: w trakcie roku?",
  options: [
    "Zasoby są ustalane w planowaniu rocznym i niedostosowywane w trakcie roku",
    "Realokacja ma miejsce sporadycznie, ale oparta na preferencjach kadry zarządzającej, a nie na danych",
    "Przeglądy w trakcie roku istnieją, ale dane rzadko kierują znaczącymi zmianami zasobów",
    "Udokumentowany przegląd zasobów w trakcie roku używa danych wydajności do realokacji budżetu i fokusu",
    "Ciągły model alokacji zasobów oparty na wydajności: motion niedoperformujące są definansowane, a motion o wysokim ROI są skalowane w czasie rzeczywistym"
  ]
},
{
  id: 10018, pillar: 10, type: "scale",
  title: "Jak precyzyjnie liczą Państwo LTV: i czy model LTV uwzględnia ekspansję, churn i marżę według segmentu?",
  options: [
    "LTV nie jest obliczany: szacujemy wartość tylko na podstawie ARR",
    "Podstawowe szacowanie LTV istnieje, ale nie uwzględnia ekspansji ani marży",
    "LTV jest obliczany na poziomie zagregowanym, ale nie segmentowany ani regularnie aktualizowany",
    "LTV jest obliczany według segmentu, integrując retencję, ekspansję i marżę brutto",
    "Kompletny model LTV: na poziomie segmentu, aktualizowany kwartalnie, integrujący prawdopodobieństwo ekspansji, ryzyko churnu i marżę, i używany w scoringu ICP oraz ustalaniu celów CAC"
  ]
},
{
  id: 10019, pillar: 10, type: "scale",
  title: "Czy dane i insighty bezpośrednio napędzają poprawę wydajności GTM: i czy potrafią Państwo przytoczyć konkretną zmianę z ostatniego kwartału podjętą na podstawie danych?",
  options: [
    "Dane nie kierują zmianami: przeglądy wydajności są wyłącznie informacyjne",
    "Dane czasami ujawniają insighty, ale rzadko prowadzą do udokumentowanych działań",
    "Dane wpływają na niektóre decyzje, ale śledzenie jest niespójne",
    "Kwartalny proces poprawy kierowany danymi produkuje udokumentowane działania z odpowiedzialnymi",
    "Poprawa kierowana danymi jest normą kulturową: każdy kwartał produkuje udokumentowane zmiany odnośnie do konkretnego sygnału danych, ze śledzeniem wyników"
  ]
},
{
  id: 10020, pillar: 10, type: "scale",
  title: "Czy sygnały z danych wcześnie i niezawodnie identyfikują ryzyko churnu: i jaki jest u Państwa średni czas od wykrycia ryzyka do anulacji przez klienta?",
  options: [
    "Churn jest wykrywany w momencie rozmowy o anulowaniu lub później: żadne wczesne ostrzeżenie nie istnieje",
    "Niektóre sygnały są zauważane w ostatnich 30 dniach przed Churnem",
    "Sygnały ryzyka są wykrywane 60-90 dni przed Churnem na niektórych kontach",
    "Model Health score identyfikuje większość kont zagrożonych 90 dni lub więcej przed Churnem",
    "System predykcyjny Churnu: ryzyko wykryte 120 dni lub więcej przed anulowaniem, interwencja wyzwalana automatycznie i wskaźnik uratowań monitorowany według tiera ryzyka"
  ]
},

/* ===========================================================
   FILAR 11: ENABLEMENT (20 PYTAŃ)
   =========================================================== */

{
  id: 11001, pillar: 11, type: "scale",
  title: "W jakim stopniu Państwa program onboardingu dla nowych GTM-owców jest ustrukturyzowany i prowadzony spójnie: i jak monitorują Państwo ukończenie oraz jakość?",
  subtitle: "Odpowiedzi dotyczą głównego segmentu przychodowego i głównego motion GTM, chyba że pytanie wyraźnie wymaga rozróżnienia.",
  options: [
    "Brak ustrukturyzowanego onboardingu: nowi uczą się przez obserwację i próby",
    "Nieformalny proces onboardingu istnieje, ale pokrycie i jakość różnią się w zależności od menedżera",
    "Program onboardingu istnieje, ale ukończenie i jakość nie są systematycznie monitorowane",
    "Ustrukturyzowany program onboardingu ze śledzeniem ukończenia kamieni milowych na rekruta",
    "W pełni zarządzany system onboardingu: program, kamienie milowe, walidacje menedżera i wydajność na 30-60-90 dni przeglądana dla każdego nowego współpracownika"
  ]
},
{
  id: 11002, pillar: 11, type: "scale",
  title: "Jak skutecznie nowi GTM-owcy osiągają pełną produktywność: i jak monitorują Państwo czas dojścia wobec celu?",
  options: [
    "Czas dojścia do produktywności nie jest monitorowany: nie wiemy, ile czasu potrzebują nowi, aby wnieść wkład",
    "Oczekiwania dotyczące dojścia istnieją nieformalnie, ale rzeczywisty time-to-productivity nie jest mierzony",
    "Czas dojścia jest monitorowany, ale nie porównywany ze zdefiniowanym celem lub Benchmarkiem",
    "Time-to-productivity jest monitorowany według kohorty względem zdefiniowanego celu, przeglądany kwartalnie",
    "Model efektywności dojścia: time-to-first-deal i time-to-quota monitorowane na rekruta, Benchmarkowane względem poprzednich kohort i zasilające poprawę onboardingu"
  ]
},
{
  id: 11003, pillar: 11, type: "scale",
  title: "Jak konsekwentnie Państwa zespół dostaje ustrukturyzowany rozwój kompetencji: i czy szkolenia są powiązane z zaobserwowanymi lukami w wynikach?",
  options: [
    "Brak ciągłego szkolenia: rozwój jest samodzielnie kierowany i niewspierany",
    "Ad hoc szkolenia mają miejsce, gdy problem się pojawia, nie proaktywnie",
    "Kalendarz szkoleń istnieje, ale treść jest ogólna i niepowiązana z danymi wydajności",
    "Rozwój kompetencji jest powiązany z lukami wydajności handlowców zidentyfikowanymi w coachingu i przeglądach rozmów",
    "System uczenia się powiązany z wydajnością: luki kompetencji identyfikowane cotygodniowo w coachingu, szkolenie przepisywane odpowiednio, a poprawa monitorowana względem wyników deali"
  ]
},
{
  id: 11004, pillar: 11, type: "scale",
  title: "W jakim stopniu Państwa sales playbooki są kompletne, aktualne i faktycznie używane: i skąd wiecie, że handlowcy sięgają po nie w aktywnych dealach?",
  options: [
    "Brak sales Playbooks: handlowcy polegają na doświadczeniu i osobistym osądzie",
    "Playbooks istnieją, ale zostały ostatnio zaktualizowane ponad rok temu i są rzadko konsultowane",
    "Playbooks są dostępne, ale wykorzystanie w aktywnych dealach nie jest monitorowane",
    "Playbooks są aktualizowane kwartalnie, a wykorzystanie monitorowane przez platformę Enablement",
    "Żywy system Playbooks: aktualizowany kwartalnie, wykorzystanie monitorowane według etapu deala i korelacja Playbook-do-Win-Rate przeglądana miesięcznie"
  ]
},
{
  id: 11005, pillar: 11, type: "scale",
  title: "Jak łatwo handlowcy GTM znajdują i wykorzystują potrzebne treści enablementowe: i jak mierzą Państwo dostępność tych treści?",
  options: [
    "Treści Enablement są rozproszone między wieloma systemami bez centralnego punktu dostępu",
    "Centralne repozytorium istnieje, ale wyszukiwanie i nawigacja są słabe",
    "Treści są zorganizowane, ale handlowcy często eskalują, aby znaleźć to, czego potrzebują",
    "Dobrze zorganizowana platforma Enablement, gdzie handlowcy mogą znaleźć treści według roli i etapu deala",
    "Ustrukturyzowana i przeszukiwalna platforma Enablement: treści indeksowane według roli, etapu i persony, adopcja monitorowana i wskaźnik sukcesu wyszukiwania przeglądany kwartalnie"
  ]
},
{
  id: 11006, pillar: 11, type: "scale",
  title: "Czy treści enablementowe są konkretnie dopasowane do każdej roli GTM: AE, SDR, CS, AM: zamiast produkowane jako wspólna, ogólna treść?",
  options: [
    "Wszystkie treści Enablement są ogólne: role nie są zróżnicowane",
    "Treści specyficzne dla roli istnieją, ale luki są znaczące",
    "Główne role mają dedykowane treści, ale drugorzędne role są niedoobsługiwane",
    "Ścieżki Enablement specyficzne dla roli istnieją dla wszystkich głównych ról GTM",
    "Architektura Enablement specyficzna dla roli: każda rola GTM ma dedykowany program, oceniany niezależnie i aktualizowany na podstawie danych wydajności specyficznych dla roli"
  ]
},
{
  id: 11007, pillar: 11, type: "scale",
  title: "Jak rygorystycznie handlowcy są certyfikowani przed zaangażowaniem potencjalnych klientów na żywo i co się dzieje, gdy handlowiec nie zdaje certyfikacji?",
  options: [
    "Brak procesu certyfikacji: handlowcy zaczynają sprzedawać pierwszego dnia bez oceny",
    "Nieformalna walidacja istnieje, ale standardy są niespójne między menedżerami",
    "Checklista certyfikacyjna istnieje, ale ukończenie jest monitorowane nieformalnie",
    "Ustrukturyzowany proces certyfikacji z kryteriami zdany/niezdany i ścieżkami remediacji",
    "Rygorystyczna brama certyfikacji: handlowcy nie mogą angażować potencjalnych klientów na żywo bez jej zdania, nieudane próby wyzwalają ustrukturyzowaną remediację, a wskaźniki certyfikacji są monitorowane"
  ]
},
{
  id: 11008, pillar: 11, type: "scale",
  title: "W jakim stopniu coaching sprzedażowy prowadzony przez Państwa menedżerów jest ustrukturyzowany i spójny: i jak monitorowana jest jakość coachingu?",
  options: [
    "Coaching jest całkowicie nieformalny: menedżerowie dają feedback, gdy są o to poproszeni",
    "Coaching odbywa się na 1:1, ale bez zdefiniowanego frameworku ani kadencji",
    "Framework coachingu istnieje, ale jakość i spójność znacząco różnią się w zależności od menedżera",
    "Standaryzowany framework coachingu stosowany spójnie u wszystkich menedżerów, z udokumentowanymi wynikami sesji",
    "Operacyjny system coachingu: przeglądy rozmów, scoring kompetencji, dokumentacja sesji i wpływ coachingu monitorowany względem wydajności handlowców cotygodniowo"
  ]
},
{
  id: 11009, pillar: 11, type: "scale",
  title: "W jakim stopniu Państwa biblioteka materiałów handlowych i marketingowych jest kompletna oraz aktualna: i czy handlowcy używają jej w aktywnych dealach?",
  options: [
    "Materiały są minimalne, nieaktualne lub nieużywane w dealach",
    "Zestaw materiałów istnieje, ale większość handlowców używa własnych materiałów",
    "Standardowe materiały są dostępne, ale wykorzystanie w aktywnych dealach nie jest mierzone",
    "Aktualna biblioteka materiałów zorganizowana według etapu deala i przypadku użycia, ze śledzeniem adopcji",
    "Strategiczny system materiałów: indeksowany według etapu deala, wersjonowany, a adopcja skorelowana z Win Rate kwartalnie"
  ]
},
{
  id: 11010, pillar: 11, type: "scale",
  title: "Czy Time-to-First-Deal jest monitorowany jako główny KPI dojścia dla nowych rekrutów: i jak wypada wobec zdefiniowanego przez Państwa celu?",
  options: [
    "Time-to-First-Deal nie jest monitorowany",
    "Jest monitorowany nieformalnie, ale nie porównywany ze zdefiniowanym celem",
    "Jest monitorowany i raportowany, ale nie używany do kierowania decyzjami onboardingowymi lub coachingowymi",
    "Formalnie monitorowany jako KPI, porównywany z celem i przeglądany w retrospektywach nowych współpracowników",
    "Zarządzany KPI dojścia: Time-to-First-Deal monitorowany na rekruta, Benchmarkowany kwartalnie i zasilający aktualizacje programu onboardingowego"
  ]
},
{
  id: 11011, pillar: 11, type: "scale",
  title: "Jak systematycznie mierzą Państwo, czy programy enablementowe przynoszą mierzalną poprawę wyników na dealach?",
  options: [
    "Skuteczność Enablement nie jest mierzona: programy są prowadzone i zakłada się, że działają",
    "Uczestnictwo jest monitorowane, ale wpływ na wydajność nie jest oceniany",
    "Pewna korelacja między ukończeniem szkolenia a wydajnością jest obserwowana nieformalnie",
    "Programy Enablement są oceniane pod kątem poprawy kompetencji i wpływu na Win Rate kwartalnie",
    "Model ROI Enablementu: ukończenie programów, poprawa score'u kompetencji i korelacja z wynikami deali monitorowane i przeglądane miesięcznie"
  ]
},
{
  id: 11012, pillar: 11, type: "scale",
  title: "Jak konsekwentnie i często materiały Enablement są aktualizowane, aby odzwierciedlić zmiany produktu, ewolucje rynku i ruchy konkurencji?",
  options: [
    "Materiały są rzadko aktualizowane: treści stają się nieaktualne kilka miesięcy po utworzeniu",
    "Aktualizacje mają miejsce reaktywnie, gdy coś jest wyraźnie nieprawidłowe",
    "Przybliżony coroczny cykl aktualizacji istnieje, ale świeżość jest niespójna między zasobami",
    "Zdefiniowany kwartalny cykl aktualizacji dla wszystkich głównych zasobów Enablement z odpowiedzialnością właściciela",
    "Ciągły system aktualizacji: materiały przeglądane w zdefiniowanej kadencji, wyzwalane przez release'y produktu i zmiany konkurencyjne, z kontrolą wersji i datami wygaśnięcia"
  ]
},
{
  id: 11013, pillar: 11, type: "scale",
  title: "Po trzech ostatnich Państwa release'ach produktu: jak szybko zaktualizowano materiały enablementowe i czy aktualizacja była uruchomiona proaktywnie, czy dopiero po tym, jak handlowcy zgłosili luki z dealów?",
  options: [
    "Materiały Enablement nie zostały zaktualizowane na czas: handlowcy odkryli luki w trwających dealach",
    "Aktualizacje miały miejsce reaktywnie po skargach z terenu, bez zdefiniowanego procesu powiązanego z release'ami",
    "Materiały zostały zaktualizowane dla niektórych release'ów, ale timing i kompletność były niespójne",
    "Aktualizacje Enablement są powiązane z release'ami produktu i zazwyczaj ukończone przed ekspozycją terenową",
    "System Enablement powiązany z release'ami: materiały aktualizowane proaktywnie w zdefiniowanym harmonogramie, gotowość terenowa weryfikowana przed release'em i czas opóźnienia monitorowany po każdym release'u"
  ]
},
{
  id: 11014, pillar: 11, type: "scale",
  title: "Jak konkretnie Państwa handlowcy są szkoleni i trenowani w obsłudze najczęstszych obiekcji blokujących deale?",
  options: [
    "Brak szkolenia w obsłudze obiekcji: handlowcy rozwijają własne odpowiedzi z czasem",
    "Typowe obiekcje są pokryte w onboardingu, ale nie odświeżane ani ćwiczone",
    "Przewodnik obiekcji istnieje, ale nie jest powiązany z przeglądami trwających deali ani odgrywaniem ról",
    "Obsługa obiekcji jest szkolona w onboardingu, wzmacniana na sesjach coachingowych i aktualizowana na podstawie danych Win/Loss",
    "Ustrukturyzowany system szkolenia obiekcji: typowe obiekcje według segmentu skatalogowane, odpowiedzi testowane w coachingu na żywo, a skuteczność obsługi monitorowana według typu obiekcji"
  ]
},
{
  id: 11015, pillar: 11, type: "scale",
  title: "Na ostatnim Państwa przeglądzie pipeline: dla deali, które utknęły lub przepadły: ile z nich miało materiały enablementowe otwierane w ciągu poprzednich 30 dni i czy to w ogóle monitorujecie?",
  options: [
    "Enablement jest w całości pre-sales: żadne materiały nie istnieją dla trwających deali",
    "Handlowcy mogą uzyskać dostęp do ogólnych materiałów, ale konkretne wskazówki dotyczące deali nie są dostępne",
    "Enablement według etapu deala istnieje, ale jest zorganizowany i konsultowany niespójnie",
    "Enablement indeksowany według etapu deala jest dostępny i aktywnie przywoływany w deal reviews",
    "System Enablement wykonania deali: treści specyficzne dla etapu, narzędzia i ścieżki eskalacji zorganizowane w CRM i przeglądane pod kątem użycia miesięcznie"
  ]
},
{
  id: 11016, pillar: 11, type: "scale",
  title: "Jak dobrze Twoi handlowcy GTM rozumieją produkt i czy potrafią obsłużyć pytania techniczne bez angażowania produktu lub engineeringu?",
  options: [
    "Handlowcy mają powierzchowną wiedzę produktową: większość pytań technicznych wymaga eskalacji",
    "Niektórzy handlowcy dobrze obsługują pytania techniczne, ale poziomy wiedzy znacznie się różnią",
    "Większość handlowców radzi sobie ze standardowymi pytaniami, ale złożone scenariusze wymagają wsparcia specjalisty",
    "Wiedza produktowa jest certyfikowana i odświeżana przy każdym znaczącym release'u",
    "Ciągły program mistrzostwa produktu: warunkowany certyfikacją, oceniany regularnie i odświeżany przy każdym release'u ze score'ami wiedzy handlowców monitorowanymi kwartalnie"
  ]
},
{
  id: 11017, pillar: 11, type: "scale",
  title: "W ostatnim kwartale, dla każdego handlowca niedoperformującego: czy zidentyfikowano konkretną lukę kompetencyjną i przepisano ukierunkowane szkolenie, czy ten sam ogólny program zastosowano do wszystkich?",
  options: [
    "Niedoperformowanie nie jest powiązane z konkretną diagnozą luki kompetencyjnej: wsparcie jest ogólne lub nieobecne",
    "Menedżerowie czasami identyfikują prawdopodobne luki, ale szkolenie pozostaje głównie ogólne i niespójne",
    "Niektórzy niedoperformujący otrzymują ukierunkowany rozwój, ale proces nie jest systematyczny między menedżerami",
    "Niedoperformujący handlowcy otrzymują diagnozę luki kompetencyjnej i ukierunkowane plany szkoleniowe z nadzorem menedżera",
    "System Enablement powiązany z wydajnością: każdy niedoperformujący otrzymuje diagnozę luki kompetencyjnej, ukierunkowane szkolenie przepisane i śledzenie wyników względem zdiagnozowanej luki"
  ]
},
{
  id: 11018, pillar: 11, type: "scale",
  title: "Jak systematycznie wykorzystują Państwo realne scenariusze i ustrukturyzowane role-playe do rozwijania kompetencji handlowców, zanim staną twarzą w twarz z kupującymi?",
  options: [
    "Brak odgrywania ról ani ćwiczenia scenariuszy: handlowcy uczą się przez doświadczenie z deali na żywo",
    "Sporadyczne odgrywanie ról ma miejsce na szkoleniach, ale nie jest ustrukturyzowane ani oceniane",
    "Odgrywanie ról jest częścią onboardingu, ale nie jest używane spójnie w ciągłym coachingu",
    "Ustrukturyzowane odgrywanie ról ze zdefiniowanymi scenariuszami i scoringiem używane w onboardingu i kwartalnych odświeżeniach",
    "Immersyjny system ćwiczeń: nagrane odgrywanie ról przeglądane przez menedżerów, oceniane według rubryk i używane do monitorowania rozwoju kompetencji w czasie"
  ]
},
{
  id: 11019, pillar: 11, type: "scale",
  title: "Czy funkcja enablementu bezpośrednio i mierzalnie przyczynia się do poprawy win rate, czasu dojścia i spójności pipeline?",
  options: [
    "Wkład Enablementu w wydajność nie jest mierzony ani monitorowany",
    "Anegdotyczne dowody sugerują, że Enablement pomaga, ale żadne dane tego nie wspierają",
    "Niektóre wskaźniki wyprzedzające wpływu Enablementu są monitorowane, ale nie formalnie przeglądane",
    "ROI Enablementu jest przeglądane kwartalnie: czas dojścia, Win Rate według ukończenia szkolenia i wykorzystanie Playbooks monitorowane",
    "Enablement jest mierzoną funkcją przychodową: Win Rate, czas dojścia i poprawy velocity deali przypisywane programom Enablement i przeglądane miesięcznie z leadership Sales"
  ]
},
{
  id: 11020, pillar: 11, type: "scale",
  title: "Jak konsekwentnie i szybko Państwa organizacja radzi sobie z niedoperformującymi handlowcami: i jaki jest średni czas od identyfikacji problemu do jego rozwiązania?",
  options: [
    "Niedoperformowanie jest tolerowane w nieskończoność: nie istnieje żadne systematyczne zarządzanie wydajnością",
    "Niedoperformujący są ostatecznie adresowani, ale proces jest niespójny i powolny",
    "Formalny proces PIP istnieje, ale aktywacja jest opóźniona, a wyniki są nieprzewidywalne",
    "Niedoperformowanie jest identyfikowane w kwartale i adresowane przez udokumentowany plan poprawy w ciągu 30 dni",
    "Wskaźniki wyprzedzające sygnalizują niedoperformowanie wcześnie, plany poprawy aktywują się w ciągu 30 dni, a wyniki są monitorowane spójnie"
  ]
},

/* ===========================================================
   FILAR 12: ALIGNMENT & GOVERNANCE (20 PYTAŃ)
   =========================================================== */

{
  id: 12001, pillar: 12, type: "scale",
  title: "Gdybyście zapytali teraz pięciu handlowców GTM pierwszej linii o trzy główne priorytety tego kwartału, ilu dałoby tę samą odpowiedź?",
  subtitle: "Odpowiedzi dotyczą głównego segmentu przychodowego i głównego motion GTM, chyba że pytanie wyraźnie wymaga rozróżnienia.",
  options: [
    "Mniej niż dwóch by się zgodziło: priorytety są nieznane lub sprzeczne na poziomie pierwszej linii",
    "Dwóch lub trzech mogłoby się ogólnie zgodzić, ale ze znaczącymi wariacjami w sformułowaniu i rankingu",
    "Większość wymieniłaby podobne priorytety, ale bez precyzyjnego języka ani spójnej kolejności",
    "Czterech lub pięciu dałoby tę samą odpowiedź: priorytety są komunikowane i testowane na spotkaniach zespołu",
    "Wszyscy pięciu dałoby identyczne odpowiedzi: kaskada priorytetów jest weryfikowana przez ustrukturyzowaną kwartalną kontrolę zrozumienia w pierwszej linii, a niezgodność wyzwala natychmiastową interwencję komunikacyjną"
  ]
},
{
  id: 12002, pillar: 12, type: "scale",
  title: "Gdy leadership spotyka się, aby przejrzeć wydajność GTM, ile czasu jest poświęcane na debatowanie o definicjach danych vs faktyczne rozwiązywanie problemów?",
  options: [
    "Większość czasu spotkania jest pochłaniana przez spory o dane: nie istnieje pojedyncze źródło prawdy",
    "Debaty o danych często wykolejają dyskusje i opóźniają decyzje",
    "Dane są w większości akceptowane, ale sporadyczne spory spowalniają przeglądy",
    "Definicje danych są zablokowane: spotkania skupiają się na interpretacji i decyzjach, a nie na sporach o liczby",
    "Wszystkie fora leadership działają z pojedynczego, zarządzanego źródła danych: debaty o danych są nieobecne, a 100% czasu jest poświęcane podejmowaniu decyzji"
  ]
},
{
  id: 12003, pillar: 12, type: "scale",
  title: "Jak rygorystycznie zespoły GTM są rozliczane z celów, do których się zobowiązały, i co się dzieje, gdy zobowiązanie nie zostaje dotrzymane?",
  options: [
    "Brak mechanizmu rozliczalności: niedotrzymane cele są uzasadniane bez konsekwencji",
    "Niedotrzymane cele są dyskutowane nieformalnie, ale ustrukturyzowana rozliczalność jest nieobecna",
    "Proces przeglądu istnieje, ale rozliczalność jest niespójna między liderami",
    "Formalny przegląd rozliczalności dla niedotrzymanych celów z udokumentowaną przyczyną źródłową i działaniem naprawczym",
    "Zdyscyplinowany system rozliczalności: niedotrzymane cele wyzwalają udokumentowany przegląd w ciągu dwóch tygodni, działania naprawcze są monitorowane, a powtarzające się niedotrzymania są eskalowane"
  ]
},
{
  id: 12004, pillar: 12, type: "scale",
  title: "Gdy cross-funkcjonalna decyzja GTM wymaga inputu więcej niż dwóch zespołów, ile czasu zazwyczaj zajmuje osiągnięcie udokumentowanej konkluzji i czy jest to monitorowane?",
  options: [
    "Decyzje wielozespołowe nie mają zdefiniowanego procesu: rozwiązują się, gdy ktoś w końcu wymusza konkluzję",
    "Te decyzje mają miejsce nieformalnie na spotkaniach, ale czas rozwiązania nie jest monitorowany i znacznie się różni",
    "Większość decyzji wielozespołowych rozwiązuje się w ciągu kilku tygodni, ale nie ma formalnego SLA, a opóźnienia są częste",
    "Udokumentowany proces istnieje dla decyzji wielozespołowych ze zdefiniowanym harmonogramem i odpowiedzialnym facylitatorem",
    "Zarządzany protokół decyzji wielozespołowych: terminy inputu, właściciel decyzji i SLA rozwiązania zdefiniowane, czas decyzji monitorowany kwartalnie, a uporczywe opóźnienia są eskalowane do leadership automatycznie"
  ]
},
{
  id: 12005, pillar: 12, type: "scale",
  title: "Jak niezawodnie trzyma się u Państwa rytm operacyjny GTM: i jaki procent zaplanowanych spotkań jest odwoływany lub prowadzony bez pre-reada?",
  options: [
    "Spotkania są często odwoływane lub prowadzone bez przygotowania: kadencja nie jest niezawodna",
    "Kadencja działa, ale uczestnictwo i przygotowanie są niespójne",
    "Spotkania odbywają się ogólnie, ale pre-read i standardy dokumentacji nie są egzekwowane",
    "Kadencja operacyjna jest utrzymywana spójnie z pre-read i udokumentowanymi wynikami",
    "Nienegocjowalny rytm operacyjny: standardy uczestnictwa, pre-read i wyników egzekwowane, ze zdrowiem kadencji przeglądanym miesięcznie przez COO lub CRO"
  ]
},
{
  id: 12006, pillar: 12, type: "scale",
  title: "W ostatnim kwartale ile inicjatyw GTM zostało formalnie zatrzymanych lub depriorytetyzowanych i czy ta decyzja została podjęta proaktywnie, czy dopiero po tym, jak zasoby zostały już zmarnowane?",
  options: [
    "Inicjatywy są rzadko zatrzymywane: raz rozpoczęta praca GTM ma tendencję do kontynuowania niezależnie od wyników",
    "Niektóre inicjatywy są po cichu porzucane, ale formalne decyzje o zatrzymaniu są rzadkie i nieudokumentowane",
    "Kilka inicjatyw zostało zatrzymanych w tym kwartale, ale decyzje były reaktywne i przyszły po widocznej porażce",
    "Decyzje o zatrzymaniu inicjatyw są udokumentowane, przeglądane w planowaniu kwartalnym i kierowane przez wstępnie zdefiniowane kryteria wydajności",
    "Zarządzana dyscyplina inicjatyw: kryteria zatrzymania/depriorytetyzacji zdefiniowane przy uruchomieniu, wydajność przeglądana w stałych punktach kontrolnych, a decyzje o zatrzymaniu podejmowane proaktywnie, z post-mortem, aby uniknąć podobnego marnotrawstwa"
  ]
},
{
  id: 12007, pillar: 12, type: "scale",
  title: "Wśród Państwa obecnych inicjatyw GTM: ile ma jednego wskazanego ownera ze zdefiniowanym mandatem, a ile jest w rękach komitetu lub bez jasnego ownera?",
  options: [
    "Inicjatywy nie mają formalnego właściciela: wszyscy i nikt są odpowiedzialni",
    "Odpowiedzialność jest przypisywana nieformalnie, ale władza i rozliczalność są niejasne",
    "Właściciele inicjatyw istnieją, ale sponsoring na poziomie wykonawczym jest niespójny",
    "Każda inicjatywa GTM ma udokumentowanego właściciela ze zdefiniowaną władzą i rozliczalnością",
    "Formalny model zarządzania inicjatywami: pojedynczy rozliczalny właściciel, sponsor wykonawczy, zdefiniowane metryki sukcesu i miesięczny status przeglądany w forum leadership GTM"
  ]
},
{
  id: 12008, pillar: 12, type: "scale",
  title: "Jak szybko i przewidywalnie blokery operacyjne są eskalowane i rozwiązywane: i czy Państwa ścieżka eskalacji rzeczywiście prowadzi do rozstrzygnięcia?",
  options: [
    "Brak ścieżki eskalacji: blokady nawarstwiają się, aż staną się kryzysami",
    "Blokady są podnoszone nieformalnie, ale rozwiązanie jest powolne i nieprzewidywalne",
    "Proces eskalacji istnieje, ale jest rzadko używany lub niezawodny",
    "Zdefiniowana ścieżka eskalacji z SLA czasu odpowiedzi i udokumentowanym śledzeniem rozwiązania",
    "Zarządzany system rozwiązywania blokad: triggery eskalacji, SLA odpowiedzi i wyniki rozwiązania monitorowane miesięcznie w przeglądzie operacyjnym"
  ]
},
{
  id: 12009, pillar: 12, type: "scale",
  title: "Na trzech ostatnich Państwa spotkaniach governance: jaki procent udokumentowanych działań został domknięty przez wskazanego ownera w ustalonym terminie?",
  options: [
    "Spotkania produkują dyskusje, ale nie udokumentowane decyzje ani odpowiedzialnych",
    "Niektóre decyzje są podejmowane na spotkaniach, ale śledzenie nie jest systematycznie zapewniane",
    "Decyzje są udokumentowane, ale śledzenie działań jest niespójne między spotkaniami",
    "Wszystkie spotkania zarządzania produkują dziennik decyzji z odpowiedzialnymi, terminami i postępem przeglądanym na następnej sesji",
    "Operacyjny system zdyscyplinowanego zarządzania: każde spotkanie produkuje ustrukturyzowany dziennik decyzji, działania są przeglądane na początku następnego spotkania, a wskaźniki ukończenia są monitorowane"
  ]
},
{
  id: 12010, pillar: 12, type: "scale",
  title: "W jakim stopniu Państwa proces zarządzania wynikami jest systematyczny i spójny: i ile czasu mija od identyfikacji niedoperformowania do podjęcia udokumentowanego działania?",
  options: [
    "Zarządzanie wydajnością jest całkowicie ad hoc: nie istnieje żaden systematyczny proces",
    "Problemy wydajnościowe są adresowane nieformalnie i niespójnie między menedżerami",
    "Formalny proces PIP istnieje, ale aktywacja jest opóźniana o tygodnie lub miesiące",
    "Problemy wydajnościowe wyzwalają formalny przegląd w ciągu 30 dni z udokumentowanymi kryteriami poprawy",
    "Zarządzany system zarządzania wydajnością: niedoperformowanie identyfikowane przez wskaźniki wyprzedzające, formalny przegląd w ciągu dwóch tygodni, a wyniki monitorowane spójnie"
  ]
},
{
  id: 12011, pillar: 12, type: "scale",
  title: "W ostatnim kwartale ile cross-funkcjonalnych inicjatyw GTM zostało opóźnionych, zablokowanych lub nie powiodło się z powodu niejasnej odpowiedzialności lub luk interfejsowych między zespołami?",
  options: [
    "Kilka dużych inicjatyw zostało opóźnionych z powodu niejasności odpowiedzialności: to powtarzający się schemat",
    "Kilka mniejszych inicjatyw zostało spowolnionych przez niejasne interfejsy, ale nic nie zostało formalnie zaadresowane",
    "Jedno lub dwa opóźnienia wystąpiły i zostały rozwiązane nieformalnie",
    "Luki odpowiedzialności są identyfikowane w kwartalnej retrospektywie i adresowane przed następnym cyklem planowania",
    "Cross-funkcjonalne luki odpowiedzialności są monitorowane jako metryka zarządzania: częstotliwość, czas rozwiązania i przyczyna źródłowa przeglądane kwartalnie"
  ]
},
{
  id: 12012, pillar: 12, type: "scale",
  title: "Czy inwestycje GTM i alokacja headcountu wprost odzwierciedlają strategiczne priorytety Państwa planu GTM?",
  options: [
    "Decyzje inwestycyjne są kierowane przez inercję lub wewnętrzną politykę, a nie strategiczne priorytety",
    "Pewne połączenie między strategią a alokacją zasobów istnieje, ale jest luźne",
    "Alokacja zasobów odnosi się do strategii, ale znacząca niezgodność trwa",
    "Decyzje o alokacji zasobów są udokumentowane i zmapowane do strategicznych priorytetów w planowaniu",
    "Model zarządzania strategia-do-inwestycji: każda znacząca decyzja alokacyjna udokumentowana względem strategicznego priorytetu, któremu służy, przeglądana kwartalnie"
  ]
},
{
  id: 12013, pillar: 12, type: "scale",
  title: "W jakim stopniu pętle feedbacku między zespołami GTM pierwszej linii a leadership wykonawczym są ustrukturyzowane i zorientowane na działanie?",
  options: [
    "Brak ustrukturyzowanej pętli feedbacku: kadra zarządzająca słyszy pierwszą linię przez eskalacje",
    "Feedback pierwszej linii dociera do leadership nieformalnie i niespójnie",
    "Mechanizm feedbacku istnieje, ale wyniki nie są niezawodnie wykorzystywane",
    "Ustrukturyzowany kwartalny proces feedbacku pierwsza-linia-do-kadry-zarządzającej z udokumentowanymi działaniami",
    "Ciągły system feedbacku dwukierunkowego: sygnały pierwszej linii przeglądane miesięcznie, odpowiedzi kadry zarządzającej udokumentowane, a ukończenie działań monitorowane"
  ]
},
{
  id: 12014, pillar: 12, type: "scale",
  title: "W jakim stopniu Państwa proces korekt strategicznych jest zdefiniowany: i co wyzwala przegląd strategii między rocznymi cyklami planowania?",
  options: [
    "Brak zdefiniowanego procesu: zmiany strategii mają miejsce reaktywnie, gdy coś się zepsuje",
    "Leadership dyskutuje dostosowania strategiczne nieformalnie, gdy pojawiają się problemy",
    "Szeroki przegląd strategiczny jest wyzwalany przez główne wydarzenia, ale kryteria nie są udokumentowane",
    "Zdefiniowane progi wydajności wyzwalają ustrukturyzowany przegląd strategiczny z udokumentowanym procesem",
    "Zarządzany protokół adaptacji strategicznej: zdefiniowane triggery, proces przeglądu i wymagania dokumentacyjne dla wszystkich dostosowań między cyklami"
  ]
},
{
  id: 12015, pillar: 12, type: "scale",
  title: "W ostatnim kwartale ile decyzji podjętych na Państwa cotygodniowych spotkaniach GTM było wprost powiązanych z celem kwartalnym, a ile było reaktywnych na nieprzewidziane problemy?",
  options: [
    "Większość cotygodniowych decyzji jest reaktywnych: istnieje niewielkie widoczne powiązanie z celami kwartalnymi",
    "Cele kwartalne istnieją, ale cotygodniowe decyzje często dryfują bez kwestionowania",
    "Niektóre cotygodniowe decyzje można prześledzić do celów kwartalnych, ale reaktywna praca nadal pochłania dużą część uwagi leadership",
    "Większość cotygodniowych decyzji można prześledzić do celów kwartalnych, z reaktywną pracą wyraźnie zidentyfikowaną i ograniczoną",
    "Cotygodniowe decyzje operacyjne są mapowane do celów kwartalnych z założenia: praca poza planem jest rejestrowana, kwantyfikowana i przeglądana jako sygnał zdrowia zarządzania"
  ]
},
{
  id: 12016, pillar: 12, type: "scale",
  title: "W ciągu ostatnich dwóch kwartałów o ilu znaczących problemach GTM leadership wykonawczy dowiedział się od członka zespołu pierwszej linii, zanim pojawiły się w metryce, a ilu odkryli dopiero po niedotrzymaniu?",
  options: [
    "Leadership zazwyczaj dowiaduje się o problemach dopiero po niedotrzymaniu metryki lub widocznej porażce",
    "Kilka problemów jest podnoszonych wcześnie, ale głównie przez starszych liderów, a nie zespoły pierwszej linii",
    "Niektóre wczesne ostrzeżenia pochodzące z pierwszej linii docierają do leadership, ale schemat jest niespójny",
    "Kilka istotnych problemów zostało podniesionych wcześnie przez zespoły pierwszej linii i zaadresowanych przed wpływem na przychody",
    "Wczesne ostrzeganie jest zarządzanym sygnałem: eskalacje pochodzące z pierwszej linii są monitorowane, przeglądane względem późniejszych wyników i używane jako metryka zdrowia transparentności"
  ]
},
{
  id: 12017, pillar: 12, type: "scale",
  title: "W jakim stopniu Państwa ścieżki eskalacji w GTM są jasne i aktywnie używane: i czy każdy członek zespołu potrafi opisać, jak wyeskalować poważny problem tu i teraz?",
  options: [
    "Brak formalnych ścieżek eskalacji: problemy są obsługiwane nieformalnie lub wcale",
    "Ścieżki eskalacji istnieją, ale nie są szeroko znane ani niezawodne",
    "Ścieżki eskalacji są udokumentowane, ale wykorzystanie jest niespójne",
    "Ścieżki eskalacji są udokumentowane, szkolone i systematycznie przywoływane, gdy pojawiają się blokady",
    "Zarządzany system eskalacji: ścieżki są udokumentowane, testowane corocznie, a wskaźniki wykorzystania monitorowane jako metryka zdrowia transparentności organizacyjnej"
  ]
},
{
  id: 12018, pillar: 12, type: "scale",
  title: "W ciągu ostatnich dwóch kwartałów ile znaczących ryzyk lub niedotrzymań GTM wypłynęło na poziomie wykonawczym, ZANIM stały się problemem przychodowym, i kto je podniósł?",
  options: [
    "Znaczące niedotrzymania były zawsze odkrywane na etapie wpływu na przychody: pierwsza linia nie eskalowała wcześnie",
    "Sporadycznie ryzyka były podnoszone wcześnie, ale przez starszych liderów, a nie zespoły pierwszej linii",
    "Kilka wczesnych eskalacji miało miejsce, ale schemat jest niespójny",
    "Kilka wczesnych eskalacji pochodziło z zespołów pierwszej linii i zostało zaadresowanych przed wpływem na przychody",
    "Wczesna eskalacja ryzyk jest monitorowaną metryką: wczesne ostrzeżenia pochodzące z pierwszej linii są liczone, publicznie uznawane, a stosunek wykrycia wczesnego vs późnego jest przeglądany kwartalnie"
  ]
},
{
  id: 12019, pillar: 12, type: "scale",
  title: "Jaki procent action items z trzech ostatnich Państwa przeglądów leadershipowych GTM został zamknięty na czas, przez przypisanego ownera, w ustalonym terminie?",
  options: [
    "Nie monitorujemy ukończenia pozycji działań z przeglądów leadership",
    "Pozycje działań są rejestrowane, ale ukończenie jest rzadko przeglądane na następnym spotkaniu",
    "Około połowa pozycji działań jest ukończona na czas: reszta jest wielokrotnie przekładana",
    "Ponad 70% pozycji działań jest ukończonych na czas, przeglądanych na początku każdego spotkania",
    "Wskaźnik ukończenia działań jest metryką zdrowia zarządzania: monitorowany według odpowiedzialnego, raportowany do CRO miesięcznie, a ukończenie poniżej progu wyzwala przegląd eskalacyjny"
  ]
},
{
  id: 12020, pillar: 12, type: "scale",
  title: "W ostatnim kwartale ile decyzji GTM zostało odwróconych lub znacząco zmodyfikowanych po wdrożeniu, ponieważ pierwotna decyzja była oparta na niekompletnej inteligencji pierwszej linii?",
  options: [
    "Odwrócenia decyzji są częste: często odkrywamy, że rzeczywistość terenowa jest sprzeczna z tym, co motywowało pierwotną decyzję",
    "Niektóre odwrócenia mają miejsce, ale nie są monitorowane, a związek z lukami wywiadowczymi nie jest analizowany",
    "Sporadyczne odwrócenia występują i są dyskutowane nieformalnie, ale żadne formalne śledzenie ani proces przyczyny źródłowej nie istnieje",
    "Odwrócenia decyzji są monitorowane, a te powiązane z lukami wywiadowczymi są przeglądane w zarządzaniu kwartalnym",
    "System jakości decyzji: odwrócenia monitorowane z przyczyną źródłową, odwrócenia powiązane z lukami wywiadowczymi przeglądane miesięcznie, a schematy zasilają sposób, w jaki dane pierwszej linii są zbierane i raportowane przed podjęciem decyzji"
  ]
},


]; // END QUESTIONS ARRAY

window.QUESTIONS = QUESTIONS;
