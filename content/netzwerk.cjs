// Netzwerk-Verlinkung: pro Artikel 1 bis 4 thematisch passende Links auf andere Portale (Regeln: strategie/NETZWERK-VERLINKUNG.md).
// Nur Seiten, die es gibt (HTTP 200, per check-links.cjs geprüft), beschreibende Linktexte.
const O = (s, t) => ({ p: 'Guidance Observatory', t, u: 'https://guidanceobservatory.com/analyses/' + s + '/' });
const C = (s, t) => ({ p: 'CoGether Wissen', t, u: 'https://cogether.de/wissen/' + s + '/' });
// from: Link erscheint erst ab diesem Datum (Artikel dort ist bis dahin noch nicht veröffentlicht).
const F = (s, t, from) => ({ p: 'Selbstfokus', t, u: 'https://selbstfokus.de/artikel/' + s + '/', from });
const A = (path, t) => ({ p: 'ADHS Begleitung', t, u: 'https://adhsbegleitung.de' + path });
const NET = {
  'abrufuebungen-lernen-testeffekt': [O('abrufuebungen-was-die-meta-analyse-zum-testeffekt-zeigt', 'Abrufübungen: was die Meta-Analyse zum Testeffekt zeigt'), O('verteiltes-lernen-abstaende-zwischen-uebungen', 'Verteiltes Lernen: Abstände zwischen Übungen'), C('coaching-ausbildung-auswaehlen-kriterien', 'Coaching-Ausbildung auswählen: Kriterien')],
  'verteiltes-lernen-abstaende-planen': [O('verteiltes-lernen-abstaende-zwischen-uebungen', 'Verteiltes Lernen: Abstände zwischen Übungen'), O('lerntransfer-was-89-studien-ueber-den-weg-in-den-alltag-zeigen', 'Lerntransfer: was 89 Studien über den Weg in den Alltag zeigen'), C('gewohnheiten-aendern-warum-21-tage-nicht-reichen-und-was-wirklich-hilft', 'Gewohnheiten ändern: warum 21 Tage nicht reichen')],
  'lerntechniken-pruefen-was-wirklich-hilft': [O('abrufuebungen-was-die-meta-analyse-zum-testeffekt-zeigt', 'Abrufübungen: was die Meta-Analyse zum Testeffekt zeigt'), O('lerntransfer-was-89-studien-ueber-den-weg-in-den-alltag-zeigen', 'Lerntransfer: was 89 Studien über den Weg in den Alltag zeigen'), C('coaching-ausbildung-auswaehlen-kriterien', 'Coaching-Ausbildung auswählen: Kriterien')],
  'bewegung-absicht-und-tun-luecke': [C('gewohnheiten-aendern-warum-21-tage-nicht-reichen-und-was-wirklich-hilft', 'Gewohnheiten ändern: warum 21 Tage nicht reichen'), O('wenn-dann-plaene-von-der-absicht-zur-handlung', 'Wenn-dann-Pläne: von der Absicht zur Handlung'), F('impulskontrolle-verbessern', 'Impulskontrolle verbessern: was die Forschung zeigt')],
  'neujahrsvorsaetze-annaehern-statt-vermeiden': [C('gewohnheiten-aendern-warum-21-tage-nicht-reichen-und-was-wirklich-hilft', 'Gewohnheiten ändern: warum 21 Tage nicht reichen'), O('zielsetzung-35-jahre-forschung-zur-zieltheorie', 'Zielsetzung: 35 Jahre Forschung zur Zieltheorie'), O('selbstkonkordante-ziele-warum-passende-ziele-wohlbefinden-staerken', 'Selbstkonkordante Ziele: warum passende Ziele das Wohlbefinden stärken')],
  'bewegung-als-gewohnheit-aufbauen': [C('gewohnheiten-aendern-warum-21-tage-nicht-reichen-und-was-wirklich-hilft', 'Gewohnheiten ändern: warum 21 Tage nicht reichen'), O('gewohnheiten-brauchen-laenger-als-gedacht', 'Gewohnheiten brauchen länger als gedacht'), C('achtsamkeit-im-alltag-was-sie-wirklich-bedeutet-und-wie-sie-bei-stress-helfen-kann', 'Achtsamkeit im Alltag: was sie bedeutet und wie sie bei Stress helfen kann')],
  'sparen-automatisch-save-more-tomorrow': [C('selbstfuehrung-lernen-was-es-bedeutet-und-wie-du-anfaengst', 'Selbstführung lernen: was es bedeutet und wie Du anfängst'), O('selbstkontrolle-was-102-studien-zeigen', 'Selbstkontrolle: was 102 Studien zeigen'), F('entscheidungen-treffen-zu-viel-auswahl', 'Entscheidungen treffen bei zu viel Auswahl')],
  'zukunfts-ich-sparen-motivation': [C('selbstfuehrung-lernen-was-es-bedeutet-und-wie-du-anfaengst', 'Selbstführung lernen: was es bedeutet und wie Du anfängst'), O('selbstkontrolle-was-102-studien-zeigen', 'Selbstkontrolle: was 102 Studien zeigen'), C('orientierungslos-sinnkrise-lebenskrise-was-dahintersteckt-und-wie-du-wieder-richtung-findest', 'Orientierungslos: Sinnkrise und wie Du wieder Richtung findest')],
  'finanzwissen-und-finanzielle-ziele': [C('du-brauchst-nicht-mehr-motivation-du-brauchst-mehr-selbstfuehrung', 'Du brauchst nicht mehr Motivation, sondern mehr Selbstführung'), O('zielsetzung-35-jahre-forschung-zur-zieltheorie', 'Zielsetzung: 35 Jahre Forschung zur Zieltheorie')],
  'zeitmanagement-wirkt-meta-analyse': [O('zeitmanagement-was-eine-meta-analyse-zu-leistung-und-wohlbefinden-zeigt', 'Zeitmanagement: was eine Meta-Analyse zu Leistung und Wohlbefinden zeigt'), C('adhs-im-alltag-organisieren-struktur-zeitblindheit-und-reizueberflutung', 'ADHS im Alltag organisieren: Struktur, Zeitblindheit, Reizüberflutung'), O('anforderungen-und-ressourcen-bei-der-arbeit', 'Anforderungen und Ressourcen bei der Arbeit')],
  'aufgabenwechsel-kosten-fokus-arbeit': [O('mikropausen-bei-der-arbeit-was-eine-meta-analyse-zu-erholung-zeigt', 'Mikropausen bei der Arbeit: was eine Meta-Analyse zu Erholung zeigt'), C('adhs-im-alltag-organisieren-struktur-zeitblindheit-und-reizueberflutung', 'ADHS im Alltag organisieren: Struktur, Zeitblindheit, Reizüberflutung'), O('selbstkontrolle-was-102-studien-zeigen', 'Selbstkontrolle: was 102 Studien zeigen')],
  'arbeitsgestaltung-motivierende-aufgaben': [O('arbeitsgestaltung-was-259-studien-ueber-merkmale-der-arbeit-zeigen', 'Arbeitsgestaltung: was 259 Studien über Merkmale der Arbeit zeigen'), O('job-crafting-promotion-und-praevention-was-eine-meta-analyse-zeigt', 'Job Crafting: was eine Meta-Analyse zeigt'), { p: 'CoGether für Organisationen', t: 'Level You Up für Organisationen: Entwicklung für Teams und Führungskräfte', u: 'https://business.cogether.de/' }, C('burnout-erkennen-anzeichen-ursachen-und-wie-du-wieder-zu-kraeften-kommst', 'Burnout erkennen: Anzeichen, Ursachen und wie Du wieder zu Kräften kommst')],
  'teilziele-grosse-ziele-zerlegen': [
    O('zielsetzung-35-jahre-forschung-zur-zieltheorie', 'Zielsetzung: 35 Jahre Forschung zur Zieltheorie'),
    F('selbstwirksamkeit-staerken', 'Selbstwirksamkeit stärken: was die Forschung sagt'),
    C('selbstfuehrung-lernen-was-es-bedeutet-und-wie-du-anfaengst', 'Selbstführung lernen: was es bedeutet und wie Du anfängst')
  ],
  'pausen-machen-ohne-den-faden-zu-verlieren': [
    O('mikropausen-bei-der-arbeit-was-eine-meta-analyse-zu-erholung-zeigt', 'Mikropausen bei der Arbeit: was eine Meta-Analyse zu Erholung zeigt'),
    O('erholung-von-der-arbeit-was-54-stichproben-zeigen', 'Erholung von der Arbeit: was 54 Stichproben zeigen'),
    C('achtsamkeit-im-alltag-was-sie-wirklich-bedeutet-und-wie-sie-bei-stress-helfen-kann', 'Achtsamkeit im Alltag: was sie bedeutet und wie sie bei Stress helfen kann')
  ],
  'ziele-loslassen-und-neu-ausrichten': [
    C('selbstmitgefuehl-lernen-warum-weniger-selbstkritik-dich-nicht-schwaecher-sondern-handlungsfaehiger-machen-kann', 'Selbstmitgefühl lernen: weniger Selbstkritik, mehr Handlungsfähigkeit'),
    O('selbstmitgefuehl-und-psychische-belastung', 'Selbstmitgefühl und psychische Belastung'),
    C('orientierungslos-sinnkrise-lebenskrise-was-dahintersteckt-und-wie-du-wieder-richtung-findest', 'Orientierungslos: Sinnkrise und wie Du wieder Richtung findest')
  ],
  'feedback-einholen-und-nutzen': [
    O('feedback-wann-es-hilft-und-wann-es-schadet', 'Feedback: wann es hilft und wann es schadet'),
    O('coaching-und-multisource-feedback-feldstudie-mit-1361-managern', 'Coaching und Multisource-Feedback: Feldstudie mit 1.361 Managern')
  ],
  'ziele-formulieren-spezifisch-anspruchsvoll': [
    O('zielsetzung-35-jahre-forschung-zur-zieltheorie', 'Zielsetzung: 35 Jahre Forschung zur Zieltheorie'),
    F('selbstwirksamkeit-staerken', 'Selbstwirksamkeit stärken: was die Forschung sagt'),
    C('selbstfuehrung-lernen-was-es-bedeutet-und-wie-du-anfaengst', 'Selbstführung lernen: was es bedeutet und wie Du anfängst')
  ],
  'zu-viele-ziele-weniger-ist-mehr': [
    F('entscheidungen-treffen-zu-viel-auswahl', 'Entscheidungen treffen bei zu viel Auswahl'),
    O('zielsetzung-35-jahre-forschung-zur-zieltheorie', 'Zielsetzung: 35 Jahre Forschung zur Zieltheorie'),
    C('selbstfuehrung-lernen-was-es-bedeutet-und-wie-du-anfaengst', 'Selbstführung lernen: was es bedeutet und wie Du anfängst')
  ],
  'passende-ziele-finden-selbstkonkordanz': [
    O('selbstkonkordante-ziele-warum-passende-ziele-wohlbefinden-staerken', 'Selbstkonkordante Ziele: warum passende Ziele das Wohlbefinden stärken'),
    F('selbstbestimmung-autonomie-kompetenz-verbundenheit', 'Selbstbestimmung: Autonomie, Kompetenz, Verbundenheit', '2026-11-21'),
    C('orientierungslos-sinnkrise-lebenskrise-was-dahintersteckt-und-wie-du-wieder-richtung-findest', 'Orientierungslos: Sinnkrise und wie Du wieder Richtung findest')
  ],
  'wenn-dann-plan-schreiben-anleitung': [
    O('wenn-dann-plaene-von-der-absicht-zur-handlung', 'Wenn-dann-Pläne: von der Absicht zur Handlung'),
    F('impulskontrolle-verbessern', 'Impulskontrolle verbessern: was die Forschung zeigt'),
    C('gewohnheiten-aendern-warum-21-tage-nicht-reichen-und-was-wirklich-hilft', 'Gewohnheiten ändern: warum 21 Tage nicht reichen')
  ],
  'routinen-entwerfen-anker-mindestversion': [
    C('gewohnheiten-aendern-warum-21-tage-nicht-reichen-und-was-wirklich-hilft', 'Gewohnheiten ändern: warum 21 Tage nicht reichen'),
    O('gewohnheiten-brauchen-laenger-als-gedacht', 'Gewohnheiten brauchen länger als gedacht'),
    A('/thema/alltag/', 'ADHS im Alltag: Struktur und Routinen')
  ],
  'planungsfehlschluss-zeit-realistisch-planen': [
    O('zeitmanagement-was-eine-meta-analyse-zu-leistung-und-wohlbefinden-zeigt', 'Zeitmanagement: was eine Meta-Analyse zu Leistung und Wohlbefinden zeigt'),
    C('adhs-im-alltag-organisieren-struktur-zeitblindheit-und-reizueberflutung', 'ADHS im Alltag organisieren: Struktur, Zeitblindheit, Reizüberflutung'),
    A('/artikel/zeitblindheit-adhs/', 'Zeitblindheit bei ADHS verstehen')
  ],
  'aufschieben-anfangen-leichter-machen': [
    F('prokrastination-warum-wir-aufschieben', 'Prokrastination: warum wir aufschieben', '2026-11-14'),
    O('prokrastination-was-691-korrelationen-zeigen', 'Prokrastination: was 691 Korrelationen zeigen'),
    C('adhs-im-alltag-organisieren-struktur-zeitblindheit-und-reizueberflutung', 'ADHS im Alltag organisieren: Struktur, Zeitblindheit, Reizüberflutung')
  ],
  'versuchungen-umgebung-statt-willenskraft': [
    F('impulskontrolle-verbessern', 'Impulskontrolle verbessern: was die Forschung zeigt'),
    O('selbstkontrolle-was-102-studien-zeigen', 'Selbstkontrolle: was 102 Studien zeigen')
  ],
  'verpasster-tag-neustart-rueckschlag': [
    C('selbstmitgefuehl-lernen-warum-weniger-selbstkritik-dich-nicht-schwaecher-sondern-handlungsfaehiger-machen-kann', 'Selbstmitgefühl lernen: weniger Selbstkritik, mehr Handlungsfähigkeit'),
    O('selbstmitgefuehl-und-psychische-belastung', 'Selbstmitgefühl und psychische Belastung'),
    F('selbstakzeptanz-und-wohlbefinden', 'Selbstakzeptanz und Wohlbefinden', '2026-11-19')
  ],
  'durchhalten-grit-was-belegt-ist': [
    F('wachstums-mindset-was-belegt-ist', 'Wachstums-Mindset: was belegt ist'),
    O('growth-mindset-was-zwei-meta-analysen-zeigen', 'Growth Mindset: was zwei Meta-Analysen zeigen'),
    C('du-brauchst-nicht-mehr-motivation-du-brauchst-mehr-selbstfuehrung', 'Du brauchst nicht mehr Motivation, sondern mehr Selbstführung')
  ],
  'verbindlichkeit-rechenschaft-fortschritt-teilen': [
    O('fortschritt-beobachten-was-138-experimente-zur-zielverfolgung-zeigen', 'Fortschritt beobachten: was 138 Experimente zur Zielverfolgung zeigen'),
    O('peer-und-gruppenformate-in-der-begleitung', 'Peer- und Gruppenformate in der Begleitung'),
    C('einzelcoaching-oder-gruppencoaching-was-passt-zu-mir', 'Einzelcoaching oder Gruppencoaching: was passt zu mir?')
  ],
  'teamziele-setzen-gruppen-leistung': [
    O('psychologische-sicherheit-und-lernverhalten-in-teams', 'Psychologische Sicherheit und Lernverhalten in Teams'),
    { p: 'CoGether für Organisationen', t: 'Level You Up für Organisationen: Entwicklung für Teams und Führungskräfte', u: 'https://business.cogether.de/' },
    O('zielsetzung-35-jahre-forschung-zur-zieltheorie', 'Zielsetzung: 35 Jahre Forschung zur Zieltheorie')
  ]
};
// Fallback: Artikel ohne Eintrag in NET bekommen 2 bis 3 Standardlinks nach Säule. Jeder Artikel erhält mindestens einen Link auf cogether.de/wissen (Prämisse: alle Portale stärken CoGether).
const POD = { p: 'Podcast Border Allein', t: 'Border Allein: der Podcast über alte Muster, Beziehungen und Selbstführung', u: 'https://borderallein.de/podcast/' };
const FALLBACK = {
  'ziele-setzen': [C('selbstfuehrung-lernen-was-es-bedeutet-und-wie-du-anfaengst', 'Selbstführung lernen: was es bedeutet und wie Du anfängst'), O('zielsetzung-35-jahre-forschung-zur-zieltheorie', 'Zielsetzung: 35 Jahre Forschung zur Zieltheorie'), F('selbstwirksamkeit-staerken', 'Selbstwirksamkeit stärken: was die Forschung sagt')],
  'planen-dranbleiben': [C('gewohnheiten-aendern-warum-21-tage-nicht-reichen-und-was-wirklich-hilft', 'Gewohnheiten ändern: warum 21 Tage nicht reichen'), O('wenn-dann-plaene-von-der-absicht-zur-handlung', 'Wenn-dann-Pläne: von der Absicht zur Handlung'), F('impulskontrolle-verbessern', 'Impulskontrolle verbessern: was die Forschung zeigt')],
  'fokus-zeit': [C('du-brauchst-nicht-mehr-motivation-du-brauchst-mehr-selbstfuehrung', 'Du brauchst nicht mehr Motivation, sondern mehr Selbstführung'), O('selbstkontrolle-was-102-studien-zeigen', 'Selbstkontrolle: was 102 Studien zeigen'), A('/thema/alltag/', 'ADHS im Alltag: Struktur und Routinen')],
  'motivation-rueckschlaege': [C('selbstmitgefuehl-lernen-warum-weniger-selbstkritik-dich-nicht-schwaecher-sondern-handlungsfaehiger-machen-kann', 'Selbstmitgefühl lernen: weniger Selbstkritik, mehr Handlungsfähigkeit'), O('selbstmitgefuehl-und-psychische-belastung', 'Selbstmitgefühl und psychische Belastung'), POD],
  'lernen-weiterbildung': [C('coaching-ausbildung-auswaehlen-kriterien', 'Coaching-Ausbildung auswählen: Kriterien'), O('verteiltes-lernen-abstaende-zwischen-uebungen', 'Verteiltes Lernen: Abstände zwischen Übungen')],
  'gesundheit-bewegung': [C('gewohnheiten-aendern-warum-21-tage-nicht-reichen-und-was-wirklich-hilft', 'Gewohnheiten ändern: warum 21 Tage nicht reichen'), O('gewohnheiten-brauchen-laenger-als-gedacht', 'Gewohnheiten brauchen länger als gedacht')],
  'geld-finanzen': [C('selbstfuehrung-lernen-was-es-bedeutet-und-wie-du-anfaengst', 'Selbstführung lernen: was es bedeutet und wie Du anfängst'), O('selbstkontrolle-was-102-studien-zeigen', 'Selbstkontrolle: was 102 Studien zeigen')],
  'arbeit-karriere': [C('adhs-im-alltag-organisieren-struktur-zeitblindheit-und-reizueberflutung', 'ADHS im Alltag organisieren: Struktur, Zeitblindheit, Reizüberflutung'), O('arbeitsgestaltung-was-259-studien-ueber-merkmale-der-arbeit-zeigen', 'Arbeitsgestaltung: was 259 Studien über Merkmale der Arbeit zeigen')],
  'beruf-mit-anderen': [C('einzelcoaching-oder-gruppencoaching-was-passt-zu-mir', 'Einzelcoaching oder Gruppencoaching: was passt zu mir?'), O('psychologische-sicherheit-und-lernverhalten-in-teams', 'Psychologische Sicherheit und Lernverhalten in Teams'), { p: 'CoGether für Organisationen', t: 'Level You Up für Organisationen: Entwicklung für Teams und Führungskräfte', u: 'https://business.cogether.de/' }]
};
module.exports = { NET, FALLBACK };
