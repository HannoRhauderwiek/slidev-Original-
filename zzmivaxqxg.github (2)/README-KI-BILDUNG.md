# KI in der Schulbildung - Slidev Präsentation

Eine interaktive, professionelle Präsentation für Erwachsene in der Weiterbildung zum Thema Künstliche Intelligenz in der Schulbildung.

## Schnellstart

```bash
# Abhängigkeiten installieren
npm install
# oder
pnpm install

# Präsentation starten
npm run dev -- slides-ki-bildung.md
# oder
pnpm dev slides-ki-bildung.md
```

Die Präsentation ist dann unter `http://localhost:3030` erreichbar.

## Inhalt der Präsentation

### Struktur (14 Folien)

1. **Impact Opening** - Visueller Hook mit animierten Statistiken
2. **Agenda** - Übersicht der Themenblöcke
3. **Chancen vs. Risiken** - Vergleichsfolie mit Pro/Contra
4. **Statistiken** - Animierte Zahlen zur KI-Nutzung in deutschen Schulen
5. **Quiz 1** - Multiple Choice zu KI-Anwendungen
6. **Praktische Anwendungen** - Konkrete Tools für den Schulalltag
7. **Szenarien** - Interaktive Auswahl verschiedener Implementierungsansätze
8. **Quiz 2** - Datenschutz bei ChatGPT
9. **Datenschutz Deep-Dive** - DSGVO-Anforderungen
10. **Datenschutz-Check** - Eingebettetes Analyse-Tool (iframe)
11. **3D-Flip-Cards** - Pro/Contra mit Hover-Effekten
12. **Quiz 3** - Umgang mit KI-generierten Arbeiten
13. **Zeitstrahl** - Mermaid-Diagramm zur Entwicklung
14. **Quiz 4** - Prüfungskriterien vor KI-Einführung
15. **Case Study** - Praxisbeispiel Gymnasium München-Süd
16. **Handlungsempfehlungen** - 6-Schritte-Plan
17. **Closing** - Abschluss mit Call-to-Action

## Interaktive Features

### Vue-Komponenten

Die Präsentation nutzt folgende Custom-Komponenten:

#### `<AnimatedCounter />`
Zählt Zahlen von 0 bis zum Zielwert hoch.

```vue
<AnimatedCounter :target="73" suffix="%" :duration="1500" />
```

**Props:**
- `target` (Number, required) - Zielwert
- `duration` (Number, default: 2000) - Animationsdauer in ms
- `suffix` (String) - Suffix (z.B. "%")
- `prefix` (String) - Prefix (z.B. "€")
- `decimals` (Number, default: 0) - Dezimalstellen

#### `<ScenarioSelector />`
Interaktive Auswahl von drei Implementierungsszenarien.

```vue
<ScenarioSelector />
```

Zeigt bei Klick Details zu:
- Ohne Regulierung
- Strenge Richtlinien
- Ausgewogener Ansatz

#### `<FlipCard />`
3D-Karte, die bei Klick dreht.

```vue
<FlipCard
  front-title="Personalisierung"
  front-icon="🎯"
  back-type="pro"
  back-content="KI ermöglicht maßgeschneiderte Lernpfade..."
/>
```

**Props:**
- `frontTitle` (String) - Titel auf der Vorderseite
- `frontIcon` (String) - Emoji/Icon
- `backType` (String: 'pro', 'contra', 'neutral') - Farbschema der Rückseite
- `backContent` (String) - Inhalt der Rückseite

### Slidev-Layouts

Die Präsentation nutzt bestehende Layouts:

- `ki-quiz` - Interaktive Multiple-Choice-Fragen
- `ki-comparison` - Zweispaltige Pro/Contra-Ansicht
- `ki-iframe` - Einbettung externer Webseiten

### Animationen

- **v-click** - Schrittweise Einblendung von Elementen
- **Staggered Animations** - Zeitversetzte Einblendung in Listen
- **CSS 3D Transforms** - Flip-Card-Effekte
- **Floating Icons** - Schwebende Elemente auf der Eröffnungsfolie
- **Progress Rings** - SVG-basierte Kreisdiagramme

## Anpassung

### Inhalte ändern

1. **Statistiken aktualisieren**: Suchen Sie nach `AnimatedCounter` und ändern Sie die `target`-Werte
2. **Quiz-Fragen anpassen**: Bearbeiten Sie die `options` in den `ki-quiz` Layouts
3. **Szenarien erweitern**: Editieren Sie `components/ScenarioSelector.vue`

### Styling anpassen

Jede Folie hat eigene `<style>` Blöcke. Globale Anpassungen:

```css
/* In slides-ki-bildung.md am Anfang */
<style>
:root {
  --primary-color: #6366f1;
  --accent-color: #8b5cf6;
}
</style>
```

### Datenschutz-Tool URL ändern

Suchen Sie nach `layout: ki-iframe` und ändern Sie die `url`:

```yaml
---
layout: ki-iframe
url: 'https://ihre-alternative-url.de/'
---
```

### Eigene Komponenten hinzufügen

1. Erstellen Sie eine `.vue`-Datei in `/components/`
2. Komponenten werden automatisch registriert
3. Nutzen Sie sie direkt in den Folien

## Präsentationsmodus

### Navigation

| Taste | Aktion |
|-------|--------|
| `Space` / `→` | Nächste Animation/Folie |
| `←` | Vorherige Animation/Folie |
| `↑` | Vorherige Folie |
| `↓` | Nächste Folie |
| `o` | Folienübersicht |
| `d` | Dark Mode toggle |
| `f` | Vollbild |

### Presenter Mode

Öffnen Sie in einem zweiten Fenster:
```
http://localhost:3030/presenter
```

## Export

### PDF Export
```bash
npm run export -- slides-ki-bildung.md
```

### SPA (Single Page Application)
```bash
npm run build -- slides-ki-bildung.md
```

Die Ausgabe liegt dann in `dist/`.

## Hinweise zur Nutzung

### Datenschutz-iframe

Das eingebettete Datenschutz-Tool benötigt eine aktive Internetverbindung. Falls blockiert:
- Prüfen Sie Firewall-Einstellungen
- Nutzen Sie den "In neuem Tab öffnen" Button

### Quiz-Interaktivität

- Quizze funktionieren durch Klick auf die Antwortoptionen
- Feedback wird automatisch angezeigt
- "Erneut versuchen" setzt das Quiz zurück

### Responsive Design

Die Präsentation ist für 16:9 Displays optimiert. Für andere Formate:

```yaml
---
aspectRatio: '4/3'
---
```

## Weiterentwicklung

### Ideen für Erweiterungen

- [ ] Audio-Integration für Quiz-Feedback
- [ ] Live-Polling mit Audience-Votes
- [ ] PDF-Handout-Version
- [ ] Übersetzung (EN, FR)

### Ressourcen

- [Slidev Dokumentation](https://sli.dev)
- [Vue.js Guide](https://vuejs.org/guide/)
- [Mermaid Diagramme](https://mermaid.js.org/)

---

Erstellt für die Weiterbildung "KI in der Schulbildung" | 2025
