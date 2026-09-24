# MedTalk Passau

MedTalk Passau ist eine browserbasierte Trainingsanwendung zur Vorbereitung auf das **Arzt-Patienten-Gespräch** im Rahmen der medizinischen Fachsprachprüfung.

Die Anwendung unterstützt Ärztinnen und Ärzte mit internationalem Abschluss dabei, typische Gesprächssituationen zu üben: von der strukturierten Anamnese über verständliche Rückfragen bis zur Erklärung einer Verdachtsdiagnose und der nächsten Schritte.

Die Anwendung ist unter [medtalk-passau.de](https://medtalk-passau.de) erreichbar.

## Ziel des Trainings

Im Prüfungsteil „Arzt-Patienten-Gespräch“ führen Prüflinge ein etwa 20-minütiges Gespräch mit einer Person, die einen Patienten oder eine Patientin spielt.

Dabei geht es insbesondere darum,

- aktuelle Beschwerden strukturiert zu erfragen,
- Vorerkrankungen, Medikamente und die Familienanamnese zu berücksichtigen,
- eine Verdachtsdiagnose verständlich zu erklären,
- das weitere Vorgehen nachvollziehbar zu beschreiben,
- medizinische Fachsprache in allgemein verständliche Sprache zu übersetzen.

Bewertet werden dabei vor allem die **sprachlichen Leistungen**: verständliche Kommunikation, angemessene Fragen, ein klarer Gesprächsaufbau und der sichere Umgang mit typischen Situationen im medizinischen Alltag.

## Was MedTalk Passau bietet

MedTalk Passau stellt Fallbeispiele und Gesprächsimpulse für das eigenständige oder gemeinsame Training bereit.

Die Anwendung hilft dabei,

- medizinische Anamnesegespräche realitätsnah zu üben,
- typische Fragen in einfacher, patientengerechter Sprache zu formulieren,
- Gesprächsabläufe zu strukturieren,
- passende Formulierungen für Diagnose, Untersuchung und Behandlung zu trainieren,
- sich gezielt auf die Anforderungen der Fachsprachprüfung vorzubereiten.

Die Fälle können beispielsweise zu zweit genutzt werden: Eine Person übernimmt die Rolle der Ärztin oder des Arztes, die andere spielt anhand der Fallinformationen den Patienten oder die Patientin.

## Ablauf eines Trainings

Ein typisches Training kann so aussehen:

1. Das Prüfungsgremium und die prüfende Person stellen sich kurz vor.
2. Der Prüfling berichtet kurz über Studium oder bisherigen Berufsweg.
3. Anschließend beginnt das simulierte Arzt-Patienten-Gespräch.
4. Der Prüfling erhebt die Anamnese und fragt nach Beschwerden, Vorerkrankungen, Medikamenten und familiären Erkrankungen.
5. Zum Schluss erläutert der Prüfling eine mögliche Verdachtsdiagnose und das weitere Vorgehen in verständlicher Sprache.

Notizen sind während des Gesprächs erlaubt. Entscheidend ist nicht die fachmedizinische Detailtiefe, sondern eine klare, strukturierte und patientengerechte Kommunikation.

## Technik

Das Projekt ist bewusst einfach gehalten und besteht aus einer statischen Website:

- `index.html` enthält die Startseite und die grundlegende Oberfläche.
- `app.js` steuert die interaktiven Funktionen der Anwendung.
- `style.css` enthält das Layout und die Gestaltung.
- `case/` enthält die Trainingsfälle beziehungsweise deren Inhalte.
- `images/` enthält verwendete Grafiken und Bilddateien.

Für die Nutzung ist kein Build-Prozess und kein serverseitiges Framework erforderlich. Die Anwendung kann direkt über einen Webserver ausgeliefert oder lokal im Browser geöffnet werden.

## Lokale Nutzung

Repository klonen:

```bash
git clone [https://github.com/ThomasKujawa/medtalk-passau.git](https://github.com/ThomasKujawa/medtalk-passau.git)
cd medtalk-passau
```

Anschließend kann die Datei `index.html` im Browser geöffnet werden.

Für eine realistischere lokale Umgebung empfiehlt sich ein einfacher Entwicklungsserver, zum Beispiel mit Python:

```bash
python3 -m http.server 8000
```

Danach ist die Anwendung unter `http://localhost:8000` erreichbar.

## Mitwirken

Beiträge zur Verbesserung der Anwendung sind willkommen – besonders:

- neue oder überarbeitete Gesprächsfälle,
- sprachlich verständlichere Formulierungen,
- Hinweise zu typischen Prüfungssituationen,
- Verbesserungen bei Barrierefreiheit und Bedienung,
- Fehlerkorrekturen und technische Optimierungen.

Bitte beschreibe bei Änderungen möglichst kurz, welchen konkreten Nutzen sie für das Training haben.

## Lizenz

Die Lizenzbedingungen sind in der Datei [LICENSE](LICENSE) hinterlegt.
