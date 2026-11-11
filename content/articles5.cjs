// Neue Themen (Teil 1): Lernen, Gesundheit, Geld, Arbeit. Vorrat ab 23.11. im Mo/Mi/Fr-Rhythmus. Quellen-Nummern {n} = Reihenfolge in sources.
module.exports = [
{
  slug: 'abrufuebungen-lernen-testeffekt', pillar: 'lernen-weiterbildung', sub: 'Lernstrategien', author: 'sven', publishedAt: '2026-11-23',
  title: 'Besser lernen mit Abrufübungen: Warum Selbsttests mehr bringen als Wiederlesen',
  description: 'Wer sich selbst abfragt, behält langfristig mehr als wer nur erneut liest. Was das klassische Experiment zum Testeffekt zeigt und wie Du Abrufübungen für Weiterbildung und Prüfungen nutzt.',
  keywords: ['besser lernen', 'Abrufübungen', 'Testeffekt', 'Lernen Selbsttest', 'Lerntechniken', 'Weiterbildung lernen'],
  sources: ['roediger', 'cepeda'],
  related: ['verteiltes-lernen-abstaende-planen', 'lerntechniken-pruefen-was-wirklich-hilft', 'wenn-dann-plan-schreiben-anleitung'],
  kurz: [
    'In zwei Experimenten lasen Studierende Texte und machten entweder Erinnerungstests oder lasen erneut. Nach fünf Minuten war Wiederlesen besser, nach zwei Tagen und einer Woche aber lieferte das Testen deutlich mehr Behalten.{1}',
    'Wiederholtes Lesen machte die Teilnehmenden zudem sicherer, dass sie sich erinnern würden, obwohl sie weniger behielten.{1}',
    'Praktisch: Klappe das Buch zu und schreibe auf, was Du noch weißt. Verteile das über mehrere Tage.{1,2}'
  ],
  body: [
    'Wer ein Ziel wie „Ich lerne Spanisch“ oder „Ich bestehe die Zertifizierung“ hat, markiert und liest meist noch einmal. Das fühlt sich sicher an. Die Forschung zeigt: Es ist nicht die wirksamste Art zu lernen.',
    { h: 'Das Experiment zum Testeffekt' },
    'Henry Roediger und Jeffrey Karpicke ließen Studierende Prosatexte lernen. Eine Gruppe machte danach ein oder drei freie Erinnerungstests ohne Rückmeldung, die andere las den Stoff genauso oft erneut. Ein Abschlusstest folgte nach fünf Minuten, zwei Tagen oder einer Woche. Nach fünf Minuten war das wiederholte Lesen im Vorteil. Bei den verzögerten Tests brachte das vorherige Testen jedoch deutlich mehr Behalten. Trotzdem machte das Wiederlesen die Teilnehmenden sicherer, dass sie sich erinnern würden. Die Autoren schließen: Testen ist ein wirksames Mittel zum Lernen, nicht nur zum Prüfen.{1}',
    { h: 'So nutzt Du Abrufübungen' },
    'Die Schritte sind Alltagsideen, die an den Befund anknüpfen:',
    { ol: ['**Erst lesen, dann zuklappen.** Schreibe nach dem Lesen aus dem Kopf auf, was Du behalten hast, in Stichworten oder in ganzen Sätzen.', '**Lücken markieren.** Vergleiche mit dem Text und kennzeichne, was gefehlt hat. Genau dort lernst Du als Nächstes.', '**Wiederholen mit Abstand.** Frage Dich morgen, in drei Tagen und in einer Woche erneut ab ({{a:verteiltes-lernen-abstaende-planen|Verteiltes Lernen}}).', '**Fragen selbst stellen.** Formuliere beim Lesen Fragen, die Du später ohne Text beantworten willst.', '**Feste Lernzeit.** Lege einen Zeitpunkt fest, zum Beispiel mit einem {{a:wenn-dann-plan-schreiben-anleitung|Wenn-dann-Plan}}.'] },
    { tool: ['Welchen Abschnitt hast Du zuletzt gelesen? Schreibe fünf Minuten auf, was Du ohne Text weißt, und prüfe danach.'], title: 'Probier es aus' },
    { h: 'Grenzen' },
    'Die Studie nutzte Prosatexte und Studierende mit Tests nach bis zu einer Woche.{1} Für andere Inhalte, etwa praktische Fähigkeiten, und für längere Zeiträume sagt sie nichts. Dass Abstand zwischen Lerneinheiten hilft, zeigt eine große Auswertung zum verteilten Lernen.{2} Eine breite Einordnung findest Du bei den Analysen des Guidance Observatory (Links unten).'
  ],
  faq: [
    { q: 'Was ist der Testeffekt?', a: 'Das Phänomen, dass das Abrufen von Wissen in einem Test das spätere Behalten verbessert, nicht nur misst.{1}' },
    { q: 'Ist Wiederlesen nutzlos?', a: 'Nach fünf Minuten war wiederholtes Lesen im Experiment im Vorteil. Bei Tests nach zwei Tagen und einer Woche brachte Testen deutlich mehr.{1}' },
    { q: 'Wie oft sollte ich mich abfragen?', a: 'Eine feste Zahl nennen die Studien hier nicht. Eine Auswertung zeigt, dass der beste Abstand zwischen Lerneinheiten mit der Zeit bis zum Test wächst.{2}' }
  ]
},
{
  slug: 'bewegung-absicht-und-tun-luecke', pillar: 'gesundheit-bewegung', sub: 'Vorsätze und Bewegung', author: 'angie', publishedAt: '2026-11-25',
  title: 'Mehr Bewegung vornehmen und trotzdem nicht machen: Die Lücke zwischen Absicht und Tun',
  description: 'Viele wollen sich mehr bewegen und tun es dann nicht. Was eine Meta-Analyse zur Absicht-Verhalten-Lücke bei Bewegung zeigt und wie Du sie im Alltag verkleinerst. Information, keine ärztliche Beratung.',
  keywords: ['mehr Bewegung', 'Sport Vorsatz', 'Absicht Verhalten Lücke', 'innerer Schweinehund', 'Bewegung Alltag', 'Sport durchhalten'],
  sources: ['rhodes', 'gollwitzer'],
  related: ['bewegung-als-gewohnheit-aufbauen', 'neujahrsvorsaetze-annaehern-statt-vermeiden', 'wenn-dann-plan-schreiben-anleitung'],
  kurz: [
    'Eine Meta-Analyse (10 Studien, N = 3.899) fand: 42 % der Befragten wollten sich bewegen und taten es, 36 % wollten es und taten es nicht, 21 % wollten nicht und taten es nicht, 2 % wollten nicht und taten es doch.{1}',
    'Die Lücke zwischen Absicht und Verhalten betrug insgesamt 46 %.{1}',
    'Wenn-dann-Pläne helfen nach einer Meta-Analyse mit 94 Tests mit mittlerer bis großer Wirkung, mit dem Handeln zu beginnen.{2}'
  ],
  body: [
    'Der gute Vorsatz steht, die Sportsachen liegen bereit, und am Abend siegt das Sofa. Das ist kein Charakterfehler, sondern ein erforschtes Phänomen: die Lücke zwischen Absicht und Verhalten.',
    { h: 'Wie groß ist die Lücke?' },
    'Ryan Rhodes und Gert-Jan de Bruijn werteten zehn Studien mit insgesamt 3.899 Personen aus, um die Lücke bei körperlicher Aktivität nach den Empfehlungen der Gesundheitsleitlinien zu beziffern. 42 % der Personen hatten die Absicht und waren erfolgreich. 36 % hatten die Absicht und setzten sie nicht um. 21 % hatten keine Absicht und waren nicht aktiv, 2 % hatten keine Absicht und bewegten sich doch. Die Lücke insgesamt betrug 46 %.{1}',
    { h: 'Was die Lücke verkleinern kann' },
    'Wenn-dann-Pläne legen vorab fest, wann und wo Du handelst. In einer Meta-Analyse mit 94 Tests förderten sie die Zielerreichung mit mittlerer bis großer Wirkung (d = 0,65).{2} Mehr dazu in {{a:wenn-dann-plan-schreiben-anleitung|Wenn-dann-Plan schreiben}}. Die Beispiele für Bewegung sind Alltagsideen:',
    { ul: ['Wenn ich nach der Arbeit die Schuhe ausziehe, dann gehe ich zehn Minuten zu Fuß um den Block.', 'Wenn die Mittagspause beginnt, dann laufe ich eine Runde, bevor ich esse.', 'Wenn das Wetter schlecht ist, dann mache ich zu Hause zehn Minuten Dehnen.'] },
    { tool: ['Was ist Deine kleinste Bewegungsversion, die Du auch an einem schlechten Tag schaffst? Wann und wo genau?'], title: 'Probier es aus' },
    { h: 'Grenzen und Hinweis' },
    'Die Meta-Analyse betrachtet wenige Studien und eine bestimmte Messweise.{1} Dieser Beitrag ersetzt keine ärztliche Beratung. Wenn Du Vorerkrankungen hast oder lange inaktiv warst, sprich vor einem größeren Bewegungsprogramm mit Deiner Hausärztin oder Deinem Hausarzt. Wie aus kleinen Schritten eine Gewohnheit wird, steht in {{a:bewegung-als-gewohnheit-aufbauen|Bewegung als Gewohnheit aufbauen}}.'
  ],
  faq: [
    { q: 'Wie groß ist die Lücke zwischen Absicht und Bewegung?', a: 'In der Meta-Analyse waren 36 % der Befragten Personen, die sich bewegen wollten und es nicht taten. Die Lücke insgesamt betrug 46 %.{1}' },
    { q: 'Was hilft gegen den inneren Schweinehund?', a: 'Wenn-dann-Pläne, die Zeit und Ort festlegen, förderten in einer Meta-Analyse die Zielerreichung mit mittlerer bis großer Wirkung.{2}' },
    { q: 'Wie viel Bewegung ist richtig?', a: 'Das beantwortet dieser Beitrag nicht. Orientiere Dich an den Empfehlungen Deiner Ärztin oder Deines Arztes oder öffentlicher Gesundheitsstellen.' }
  ]
},
{
  slug: 'sparen-automatisch-save-more-tomorrow', pillar: 'geld-finanzen', sub: 'Sparen und Planen', author: 'michelle', publishedAt: '2026-11-27',
  title: 'Sparen ohne Willenskraft: Was „Save More Tomorrow“ zeigt',
  description: 'Wer sich vorab verpflichtet, künftige Gehaltserhöhungen teilweise zu sparen, spart langfristig deutlich mehr. Was die Studie zu Save More Tomorrow zeigt und was Du daraus für Deine Finanzziele mitnehmen kannst. Keine Finanzberatung.',
  keywords: ['Sparen Ziel', 'automatisch sparen', 'Save More Tomorrow', 'Sparquote erhöhen', 'Sparplan', 'Sparen Verhaltensökonomie'],
  sources: ['thaler', 'bryan'],
  related: ['zukunfts-ich-sparen-motivation', 'finanzwissen-und-finanzielle-ziele', 'verbindlichkeit-rechenschaft-fortschritt-teilen'],
  kurz: [
    'Beim Programm „Save More Tomorrow“ verpflichten sich Menschen im Voraus, einen Teil künftiger Gehaltserhöhungen zu sparen.{1}',
    'In der ersten Umsetzung stieg die durchschnittliche Sparquote der Teilnehmenden in 40 Monaten von 3,5 auf 13,6 Prozent. 78 % der Angebotenen traten bei, 80 % der Teilnehmenden blieben bis zur vierten Gehaltserhöhung dabei.{1}',
    'Das Prinzip: Entscheidungen im Voraus festlegen, Sparen automatisch machen, den Gegenwartsverzicht klein halten.{1,2}'
  ],
  body: [
    'Sparen scheitert selten am Rechnen, oft an der Gegenwart: Heute gibt es Dinge, die sich dringender anfühlen als eine ferne Rente. Die Verhaltensökonomen Richard Thaler und Shlomo Benartzi haben dafür ein Programm entwickelt, das Willenskraft kaum braucht.',
    { h: 'Das Programm' },
    'Beim Programm „Save More Tomorrow“ (SMarT) verpflichten sich Beschäftigte im Voraus, einen Teil ihrer künftigen Gehaltserhöhungen für die Altersvorsorge zurückzulegen. Die Autoren berichten aus den ersten drei Umsetzungen. In der ersten, über vier Gehaltserhöhungen: 78 % der Angebotenen traten bei, 80 % der Teilnehmenden blieben bis zur vierten Erhöhung dabei, und die durchschnittliche Sparquote stieg in 40 Monaten von 3,5 auf 13,6 Prozent.{1}',
    { h: 'Was Du daraus für Deine Ziele mitnehmen kannst' },
    'Die Studie betrifft Altersvorsorge in Unternehmen. Die folgenden Übertragungen sind Alltagsideen, keine Finanzberatung:',
    { ol: ['**Im Voraus entscheiden.** Lege fest, wie viel Du bei der nächsten Erhöhung oder Einnahme zurücklegst, bevor das Geld da ist.', '**Automatisieren.** Ein Dauerauftrag am Zahltag wirkt, ohne dass Du jeden Monat neu entscheiden musst.', '**Klein anfangen.** Ein kleiner Betrag, der kaum weh tut, hält länger durch als ein großer.', '**Schrittweise erhöhen.** Plane Erhöhungen mit Terminen, etwa jährlich.', '**Weiche Selbstverpflichtung nutzen.** Eine Übersichtsarbeit zu „Commitment Devices“ beschreibt harte und weiche Formen der Selbstbindung ({{a:verbindlichkeit-rechenschaft-fortschritt-teilen|Verbindlichkeit schaffen}}).{2}'] },
    { tool: ['Welchen Betrag könntest Du ab nächsten Monat automatisch zurücklegen, ohne ihn zu spüren? Richte den Dauerauftrag am Zahltag ein.'], title: 'Probier es aus' },
    { h: 'Grenzen' },
    'Die Studie berichtet über erste Umsetzungen in einzelnen Betrieben.{1} Ob und wie gut sich die Ergebnisse auf Deine Situation übertragen lassen, hängt von Einkommen, Schulden und Lebenslage ab. Dieser Beitrag ist keine Anlage- oder Finanzberatung. Bei Verschuldung oder größeren Entscheidungen wende Dich an eine unabhängige Beratungsstelle, etwa eine Verbraucherzentrale oder Schuldnerberatung.'
  ],
  faq: [
    { q: 'Was ist Save More Tomorrow?', a: 'Ein Sparprogramm, bei dem Beschäftigte sich im Voraus verpflichten, einen Teil künftiger Gehaltserhöhungen für die Altersvorsorge zu sparen.{1}' },
    { q: 'Wie viel wurde gespart?', a: 'In der ersten Umsetzung stieg die durchschnittliche Sparquote der Teilnehmenden in 40 Monaten von 3,5 auf 13,6 Prozent.{1}' },
    { q: 'Funktioniert das auch privat?', a: 'Das Prinzip, vorab zu entscheiden und automatisch zu sparen, lässt sich privat nachbauen, zum Beispiel mit einem Dauerauftrag. Die Studie selbst untersuchte ein Programm in Unternehmen.{1}' }
  ]
},
{
  slug: 'zeitmanagement-wirkt-meta-analyse', pillar: 'arbeit-karriere', sub: 'Arbeitsalltag', author: 'kerstin', publishedAt: '2026-11-30',
  title: 'Wirkt Zeitmanagement wirklich? Was eine Meta-Analyse zu Leistung und Wohlbefinden zeigt',
  description: 'Zeitmanagement ist beliebt, aber bringt es etwas? Eine Meta-Analyse zeigt moderate Zusammenhänge mit Leistung und Wohlbefinden und weniger Belastung. Was das für Deinen Arbeitsalltag heißt.',
  keywords: ['Zeitmanagement', 'Zeitmanagement Methoden', 'Zeitmanagement Arbeit', 'Prioritäten Arbeit', 'Zeit besser nutzen', 'Zeitmanagement Studie'],
  sources: ['aeon', 'buehler'],
  related: ['planungsfehlschluss-zeit-realistisch-planen', 'aufgabenwechsel-kosten-fokus-arbeit', 'zu-viele-ziele-weniger-ist-mehr'],
  kurz: [
    'Eine Meta-Analyse fand: Zeitmanagement hängt moderat mit Arbeitsleistung, Studienleistung und Wohlbefinden zusammen und moderat negativ mit Belastung (Distress).{1}',
    'Persönliche und situative Faktoren hingen nur schwach damit zusammen, mit Ausnahme der Gewissenhaftigkeit.{1}',
    'Der Zusammenhang mit der Arbeitsleistung scheint über die Jahre gewachsen zu sein.{1}'
  ],
  body: [
    'Kalender, Listen, Prioritätenmatrix: Zeitmanagement-Ratgeber gibt es viele. Aber wirkt es? Eine Meta-Analyse von Brad Aeon und Kolleg:innen gibt eine differenzierte Antwort.',
    { h: 'Was die Meta-Analyse zeigt' },
    'Die Auswertung fand, dass Zeitmanagement moderat mit Arbeitsleistung, Studienleistung und Wohlbefinden zusammenhängt. Mit Belastung (Distress) besteht ein moderater negativer Zusammenhang. Persönliche und situative Faktoren hingen nur schwach mit Zeitmanagement zusammen, mit Ausnahme der Gewissenhaftigkeit. Der Zusammenhang zwischen Zeitmanagement und Arbeitsleistung scheint über die Jahre zuzunehmen: Heute führt Zeitmanagement eher zu guten Leistungsbeurteilungen als in den frühen 1990er Jahren.{1}',
    { h: 'Was das praktisch heißt' },
    'Es handelt sich um Zusammenhänge, nicht um bewiesene Ursachen. Die folgenden Schritte sind Alltagsideen:',
    { ol: ['**Wochenplanung zuerst.** Lege fest, was diese Woche wichtig ist, bevor der Posteingang entscheidet.', '**Realistisch schätzen.** Plane mit Erfahrungswerten und Puffer ({{a:planungsfehlschluss-zeit-realistisch-planen|Planungsfehlschluss}}).{2}', '**Weniger parallel.** Begrenze die Zahl gleichzeitiger Vorhaben ({{a:zu-viele-ziele-weniger-ist-mehr|Zu viele Ziele}}).', '**Blöcke für Wichtiges.** Reserviere feste Zeiten für das, was Dein Ziel voranbringt, und verteidige sie.', '**Wöchentlicher Rückblick.** Zehn Minuten: Was ist gelungen, was zieht sich, was streiche ich?'] },
    { tool: ['Welche zwei Dinge sollen diese Woche unbedingt passieren? Wann genau trägst Du sie in Deinen Kalender ein?'], title: 'Probier es aus' },
    { h: 'Grenzen' },
    'Meta-Analysen von Zusammenhängen zeigen nicht, was Ursache und was Folge ist: Wer ohnehin gut zurechtkommt, plant vielleicht auch besser.{1} Wenn Du chronisch überlastet bist, hilft weniger Planung nicht unbedingt. Dann lohnt ein Blick auf Aufgabenmenge und Rahmenbedingungen, bei Bedarf mit Vorgesetzten oder Beratung. Mehr dazu auch bei den Analysen des Guidance Observatory (Links unten).'
  ],
  faq: [
    { q: 'Bringt Zeitmanagement etwas?', a: 'Nach der Meta-Analyse hängt Zeitmanagement moderat mit Leistung und Wohlbefinden zusammen und moderat negativ mit Belastung.{1} Das sind Zusammenhänge, keine bewiesenen Ursachen.' },
    { q: 'Wer managt seine Zeit besser?', a: 'Persönliche und situative Faktoren zeigten nur schwache Zusammenhänge, außer der Gewissenhaftigkeit.{1}' },
    { q: 'Wie beginne ich mit Zeitmanagement?', a: 'Mit einer kurzen Wochenplanung, realistischen Schätzungen und festen Zeiten für Wichtiges. Das sind Alltagsideen, die an die Befunde anknüpfen.' }
  ]
},
{
  slug: 'verteiltes-lernen-abstaende-planen', pillar: 'lernen-weiterbildung', sub: 'Lernstrategien', author: 'angie', publishedAt: '2026-12-02',
  title: 'Verteilt lernen: Warum Pausen zwischen den Lernphasen helfen',
  description: 'Lernen in Portionen mit Abstand behält länger als Pauken am Stück. Was die große Auswertung zu 317 Experimenten zeigt und wie Du Lernabstände plant.',
  keywords: ['verteiltes Lernen', 'Spaced Repetition', 'Lernen planen', 'Lernabstände', 'Vokabeln lernen', 'Lernplan'],
  sources: ['cepeda', 'roediger'],
  related: ['abrufuebungen-lernen-testeffekt', 'lerntechniken-pruefen-was-wirklich-hilft', 'routinen-entwerfen-anker-mindestversion'],
  kurz: [
    'Eine Meta-Analyse fand 839 Auswertungen aus 317 Experimenten in 184 Artikeln zum Effekt verteilter Übung.{1}',
    'Der Abstand zwischen den Lerneinheiten, der das Behalten maximierte, wurde größer, wenn der Test weiter in der Zukunft lag.{1}',
    'Praktisch: Plane Wiederholungen mit wachsenden Abständen und prüfe Dich dabei selbst.{1,2}'
  ],
  body: [
    'Am Abend vor der Prüfung alles auf einmal lernen: Das kennt fast jeder. Die Forschung zum „Spacing“ zeigt, dass Verteilen über mehrere Tage besser funktioniert.',
    { h: 'Was die Meta-Analyse zeigt' },
    'Nicholas Cepeda, Harold Pashler und Edward Vul fanden 839 Auswertungen von verteilter Übung in 317 Experimenten aus 184 Artikeln. Sie untersuchten den Effekt von Abstand (zusammenhängendes Lernen gegenüber verteilten Lerneinheiten) und Verzögerung. Ihr Ergebnis: Der Abstand zwischen den Lerneinheiten und die Zeit bis zum Test wirken zusammen. Der Abstand, der das Behalten maximiert, nahm mit der Zeit bis zum Abschlusstest zu.{1}',
    { h: 'Einen Lernplan mit Abstand bauen' },
    'Die Schritte sind Alltagsideen auf dieser Grundlage:',
    { ol: ['**Das Zieldatum festlegen.** Wann brauchst Du das Wissen: in zwei Wochen oder in sechs Monaten?', '**Früh anfangen.** Je weiter der Test entfernt ist, desto größer darf der Abstand zwischen den Einheiten sein.', '**Kleine Portionen.** Lieber 20 Minuten an fünf Tagen als zwei Stunden an einem.', '**Beim Wiederholen abfragen.** Schließe die Unterlagen und prüfe, was Du noch weißt ({{a:abrufuebungen-lernen-testeffekt|Abrufübungen}}).{2}', '**Termine fest eintragen.** Binde die Einheiten an feste Anker im Tag ({{a:routinen-entwerfen-anker-mindestversion|Routinen entwerfen}}).'] },
    { tool: ['Welches Thema willst Du in den nächsten vier Wochen lernen? Trage heute die ersten drei kurzen Termine mit wachsendem Abstand ein.'], title: 'Probier es aus' },
    { h: 'Grenzen' },
    'Die Meta-Analyse betrifft Experimente zum Abrufen verbaler Inhalte, nicht jede Art von Lernen.{1} Das Ergebnis nennt keine feste beste Frequenz, sondern ein Muster. Ergänzend zeigt die Studie zum Testeffekt, dass Abfragen das Behalten verbessert.{2}'
  ],
  faq: [
    { q: 'Was ist verteiltes Lernen?', a: 'Lernen in mehreren Einheiten mit Pausen dazwischen statt in einer langen Einheit. Die Meta-Analyse von Cepeda und Kolleg:innen wertete 317 Experimente dazu aus.{1}' },
    { q: 'Wie groß sollten die Abstände sein?', a: 'Der ideale Abstand wuchs mit der Zeit bis zum Test. Eine feste Zahl nennt die Zusammenfassung nicht.{1}' },
    { q: 'Reicht verteiltes Lernen allein?', a: 'Es lässt sich gut mit Abrufübungen verbinden, die ebenfalls das Behalten verbessern.{2}' }
  ]
},
{
  slug: 'neujahrsvorsaetze-annaehern-statt-vermeiden', pillar: 'gesundheit-bewegung', sub: 'Vorsätze und Bewegung', author: 'michelle', publishedAt: '2026-12-04',
  title: 'Neujahrsvorsätze: Warum „Hin zu“ besser funktioniert als „Weg von“',
  description: 'Eine Studie mit 1.066 Teilnehmenden zeigt: Vorsätze, die etwas Neues anstreben, gelingen häufiger als Vorsätze, etwas zu vermeiden. Wie Du Vorsätze formulierst, die ein Jahr halten.',
  keywords: ['Neujahrsvorsätze', 'gute Vorsätze', 'Vorsätze umsetzen', 'Vorsätze formulieren', 'Vorsätze einhalten', 'Vorsätze Jahreswechsel'],
  sources: ['oscarsson', 'dai'],
  related: ['bewegung-absicht-und-tun-luecke', 'verpasster-tag-neustart-rueckschlag', 'ziele-formulieren-spezifisch-anspruchsvoll'],
  kurz: [
    'In einer randomisierten Studie mit 1.066 Menschen betrafen die beliebtesten Vorsätze körperliche Gesundheit, Gewichtsabnahme und Essgewohnheiten.{1}',
    'Nach einem Jahr hielten 55 % der Antwortenden ihre Vorsätze für erfolgreich. Wer etwas anstrebte („Annäherungsziel“), war erfolgreicher als wer etwas vermeiden wollte (58,9 % gegenüber 47,1 %).{1}',
    'Die Gruppe mit etwas Unterstützung war erfolgreicher als die anderen beiden.{1}'
  ],
  body: [
    'Jedes Jahr zum Jahreswechsel entstehen Listen, und im Februar sind viele vergessen. Doch eine große Studie zeigt: Vorsätze können durchaus halten, und es hängt auch davon ab, wie sie formuliert sind.',
    { h: 'Was die Studie zeigt' },
    'Martin Oscarsson und Kolleg:innen fragten, welche Vorsätze Menschen fassen, wie erfolgreich sie sind und ob Informationen und Übungen zur Zielsetzung die Erfolgschance erhöhen. 1.066 Menschen aus der Allgemeinbevölkerung wurden zufällig drei Gruppen zugeteilt (aktive Kontrolle, etwas Unterstützung, erweiterte Unterstützung). Am beliebtesten waren Vorsätze zu körperlicher Gesundheit, Gewichtsabnahme und Essgewohnheiten. Nach einem Jahr hielten 55 % der Antwortenden ihre Vorsätze für erfolgreich. Annäherungsziele waren erfolgreicher als Vermeidungsziele (58,9 % gegenüber 47,1 %). Die Gruppe mit etwas Unterstützung war als einzige signifikant erfolgreicher als die anderen beiden.{1}',
    { h: 'Vorsätze richtig formulieren' },
    'Die Schritte sind Alltagsideen auf dieser Grundlage:',
    { ol: ['**Hin zu statt weg von.** Statt „weniger Süßes“ lieber „jeden Tag ein Obst zum Frühstück“.', '**Konkret machen.** Wann, wie oft, wie viel? ({{a:ziele-formulieren-spezifisch-anspruchsvoll|Ziele formulieren}})', '**Klein starten.** Ein Vorsatz, nicht sieben.', '**Neustart-Daten nutzen.** Wegmarken wie Jahresbeginn oder Montag erhöhen die Bereitschaft anzufangen.{2}', '**Rückfall einplanen.** Lege vorab fest, was Du nach einem verpassten Tag tust ({{a:verpasster-tag-neustart-rueckschlag|Verpasster Tag, Neustart}}).'] },
    { tool: ['Formuliere Deinen wichtigsten Vorsatz um: Was willst Du anstreben, statt zu vermeiden? Was ist der erste kleine Schritt?'], title: 'Probier es aus' },
    { h: 'Grenzen' },
    'Der Erfolg war selbst eingeschätzt, und es antworteten nur Teilnehmende des Follow-ups.{1} Die Studie belegt Unterschiede zwischen Zielarten, nicht, dass jeder Vermeidungsvorsatz scheitert. Der Beitrag ersetzt keine ärztliche Beratung, etwa bei Gewichtsfragen. Zum Fresh-Start-Effekt: Menschen gingen Ziele nach zeitlichen Wegmarken eher an.{2}'
  ],
  faq: [
    { q: 'Halten Neujahrsvorsätze?', a: 'In der Studie mit 1.066 Teilnehmenden hielten nach einem Jahr 55 % der Antwortenden ihren Vorsatz für erfolgreich.{1}' },
    { q: 'Was ist ein Annäherungsziel?', a: 'Ein Ziel, etwas anzustreben, statt etwas zu vermeiden. Solche Vorsätze waren erfolgreicher (58,9 % gegenüber 47,1 %).{1}' },
    { q: 'Hilft Unterstützung beim Formulieren?', a: 'Die Gruppe, die etwas Unterstützung bekam, war signifikant erfolgreicher als die beiden anderen Gruppen.{1}' }
  ]
}
];
