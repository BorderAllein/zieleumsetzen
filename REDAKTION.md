# Redaktionsanleitung Ziele umsetzen

## Neuer Artikel
1. Suchfragen recherchieren (Autosuggest), Überschneidungen mit cogether.de/wissen, Guidance Observatory und Selbstfokus prüfen, verlinken statt doppeln.
2. Quellen nur mit DOI/Abstract prüfen und in content/sources.cjs eintragen. Zahlen nur aus dem Abstract oder der Seite.
3. Artikel in content/articles*.cjs mit publishedAt (Mo/Mi/Fr) anlegen. Autoren im Wechsel (Sven, Angie, Michelle, Kerstin).
4. Netzwerk-Links: Eintrag in content/netzwerk.cjs (NET) ist optional. Fehlt er, setzt der Generator automatisch 2 bis 3 Standardlinks nach Säule (FALLBACK).
5. node check-links.cjs ausführen (alle Ziele HTTP 200; Selbstfokus-Links mit from-Datum erscheinen erst dann).

## Prämisse: alle Portale stärken CoGether
- Jeder Artikel hat mindestens einen Link auf cogether.de/wissen (Liste: https://cogether.de/wissen-sitemap.xml). Hat der NET-Eintrag keinen, ergänzt der Generator den Säulen-Standardlink.
- Der Autorenkasten verlinkt die CoGether-Landingpage der Autorin bzw. des Autors, am Ende steht der Erstgespräch-CTA mit UTM.
- Guidance Observatory bleibt neutral (nur Weiterlesen-Links).

## Newsletter-Block
Aus, bis auf cogether.de der Schlüssel zieleumsetzen und die Domain in frame-ancestors freigeschaltet sind. Dann Datei NEWSLETTER_LIVE im Repo-Root anlegen.
