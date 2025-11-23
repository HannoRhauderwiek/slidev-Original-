# KI-Schulung Slidev Präsentationsvorlage

Eine professionelle, wiederverwendbare Präsentationsvorlage für KI-Schulungen in der Erwachsenenbildung.

## Inhaltsverzeichnis

1. [Schnellstart](#schnellstart)
2. [Projektstruktur](#projektstruktur)
3. [Design-System](#design-system)
4. [Verfügbare Layouts](#verfügbare-layouts)
5. [Interaktive Komponenten](#interaktive-komponenten)
6. [Anpassung & Konfiguration](#anpassung--konfiguration)
7. [Export als HTML](#export-als-html)
8. [Best Practices](#best-practices)

---

## Schnellstart

### Installation

```bash
# In das Projektverzeichnis wechseln
cd "zzmivaxqxg.github (2)"

# Abhängigkeiten installieren
pnpm install

# Entwicklungsserver starten
pnpm dev

# Browser öffnet automatisch http://localhost:3030
```

### Erste Präsentation erstellen

1. Öffnen Sie `slides-ki-demo.md` als Referenz
2. Erstellen Sie eine neue `.md` Datei oder bearbeiten Sie `slides.md`
3. Nutzen Sie die verfügbaren Layouts und Komponenten

---

## Projektstruktur

```
zzmivaxqxg.github (2)/
├── components/           # Vue-Komponenten
│   ├── KiAccordion.vue      # Aufklappbare Listen
│   ├── KiAccordionItem.vue  # Einzelne Accordion-Elemente
│   ├── KiCallout.vue        # Info-Boxen
│   ├── KiCard.vue           # Karten-Komponente
│   ├── KiHighlight.vue      # Text-Hervorhebungen
│   ├── KiProgressiveReveal.vue  # Sukzessive Enthüllung
│   ├── KiStep.vue           # Einzelner Schritt
│   └── KiSteps.vue          # Nummerierte Schritte
│
├── layouts/              # Folienlayouts
│   ├── ki-title.vue         # Titelfolie
│   ├── ki-content.vue       # Inhaltsfolie
│   ├── ki-comparison.vue    # Vergleichsfolie
│   ├── ki-code.vue          # Code-Beispiele
│   ├── ki-example.vue       # Praktische Beispiele
│   ├── ki-media.vue         # Video/GIF
│   ├── ki-iframe.vue        # Webseiten-Einbettung
│   ├── ki-decision.vue      # Entscheidungsbaum
│   ├── ki-quiz.vue          # Interaktives Quiz
│   ├── ki-columns.vue       # Spalten-Layout
│   └── ki-summary.vue       # Zusammenfassung
│
├── setup/                # Konfiguration
│   └── config.ts            # Design-System Variablen
│
├── styles/               # Globale Styles
│   └── main.css             # CSS mit allen Utility-Klassen
│
├── slides.md             # Standard-Präsentation
├── slides-ki-demo.md     # Demo mit allen Folientypen
└── package.json          # Projektdefinition
```

---

## Design-System

### Farbpalette

```css
/* Primärfarben (Hell) */
--color-white: #FFFFFF
--color-background: #FAFAFA
--color-surface: #F5F5F7
--color-muted: #E8E8ED

/* Akzentfarben */
--color-accent-blue: #0071E3     /* Primärer Akzent */
--color-accent-green: #34C759    /* Erfolg/Positiv */
--color-accent-red: #FF3B30      /* Fehler/Negativ */
--color-accent-orange: #FF9500   /* Warnung */
--color-accent-purple: #AF52DE   /* Highlight */

/* Textfarben */
--color-text-primary: #1D1D1F
--color-text-secondary: #6E6E73
--color-text-tertiary: #86868B
```

### Animationen

Alle Animationen sind unter 300ms für schnelle, professionelle Übergänge:

- `--duration-instant: 100ms`
- `--duration-fast: 150ms`
- `--duration-normal: 200ms`
- `--duration-slow: 250ms`
- `--duration-emphasis: 300ms`

### Utility-Klassen

```html
<!-- Positive/Negative Hervorhebung -->
<span class="positive">Empfohlen</span>
<span class="negative">Vermeiden</span>
<span class="underline-green">Unterstrichen</span>
<span class="strikethrough">Durchgestrichen</span>

<!-- Animationen -->
<div class="animate-fade-in">Fade In</div>
<div class="animate-slide-up">Slide Up</div>
<div class="animate-scale-in">Scale In</div>

<!-- Stagger-Delays -->
<li class="stagger-1">Erster Punkt</li>
<li class="stagger-2">Zweiter Punkt</li>
```

---

## Verfügbare Layouts

### 1. Titelfolie (`ki-title`)

```markdown
---
layout: ki-title
title: Präsentationstitel
subtitle: Untertitel
author: Max Mustermann
date: "2024"
background: gradient  # white, dark, image
---
```

### 2. Inhaltsfolie (`ki-content`)

```markdown
---
layout: ki-content
title: Folientitel
bullets: icon      # check, arrow, number, none
animate: stagger   # fade, slide, none
columns: 1         # 2, 3
---

- Erster Punkt
- Zweiter Punkt
```

### 3. Vergleichsfolie (`ki-comparison`)

```markdown
---
layout: ki-comparison
title: Vergleich
leftTitle: Option A
rightTitle: Option B
leftType: positive
rightType: negative
---

::left::
- Vorteil 1
- Vorteil 2

::right::
- Nachteil 1
- Nachteil 2
```

### 4. Code-Folie (`ki-code`)

```markdown
---
layout: ki-code
title: Code Beispiel
language: python
filename: main.py
layout: split  # full, bottom
---

\`\`\`python
print("Hello World")
\`\`\`

::explanation::
Erklärung zum Code
```

### 5. Praktisches Beispiel (`ki-example`)

```markdown
---
layout: ki-example
title: Schritt für Schritt
image: /images/screenshot.png
imagePosition: left  # right, top
---

::steps::
1. Erster Schritt
2. Zweiter Schritt
3. Dritter Schritt
```

### 6. Media-Folie (`ki-media`)

```markdown
---
layout: ki-media
title: Demo
media: /videos/demo.mp4
type: video  # gif, image, auto
autoplay: true
loop: true
caption: Beschreibung
---
```

### 7. Webseiten-Einbettung (`ki-iframe`)

```markdown
---
layout: ki-iframe
title: Live Demo
url: https://example.com
height: 75%
showUrl: true
---
```

### 8. Entscheidungsbaum (`ki-decision`)

```markdown
---
layout: ki-decision
title: Entscheidung
question: Welcher Weg?
---

::branch-yes::
### Ja
Erklärung...

::branch-no::
### Nein
Erklärung...

::branch-maybe::
### Vielleicht
Erklärung...
```

### 9. Quiz-Folie (`ki-quiz`)

```markdown
---
layout: ki-quiz
question: Was ist KI?
options:
  - text: Antwort A
    correct: false
  - text: Antwort B
    correct: true
    explanation: Richtig!
  - text: Antwort C
    correct: false
---
```

### 10. Spalten-Folie (`ki-columns`)

```markdown
---
layout: ki-columns
title: Drei Bereiche
columns: 3
gap: normal  # small, large
---

::col1::
### Spalte 1
Inhalt...

::col2::
### Spalte 2
Inhalt...

::col3::
### Spalte 3
Inhalt...
```

### 11. Zusammenfassung (`ki-summary`)

```markdown
---
layout: ki-summary
title: Zusammenfassung
subtitle: Was Sie gelernt haben
cta: Jetzt ausprobieren
ctaLink: https://example.com
style: cards  # list, numbered
---

- Punkt 1
- Punkt 2
- Punkt 3
```

---

## Interaktive Komponenten

### Accordion

```vue
<KiAccordion>
  <KiAccordionItem title="Frage 1" icon="❓">
    Antwort auf Frage 1...
  </KiAccordionItem>
  <KiAccordionItem title="Frage 2" icon="💡">
    Antwort auf Frage 2...
  </KiAccordionItem>
</KiAccordion>
```

### Callout (Info-Boxen)

```vue
<KiCallout type="info" title="Hinweis">
  Wichtige Information hier...
</KiCallout>

<!-- Typen: info, success, warning, danger, tip -->
```

### Highlight (Text-Hervorhebung)

```vue
<KiHighlight type="positive">Empfohlen</KiHighlight>
<KiHighlight type="negative" strikethrough>Vermeiden</KiHighlight>
<KiHighlight type="info" underline>Wichtig</KiHighlight>
```

### Cards

```vue
<KiCard title="Titel" icon="🤖" type="info">
  Karteninhalt hier...
</KiCard>

<!-- Typen: default, positive, negative, info, warning -->
```

### Schritte (Steps)

```vue
<KiSteps>
  <KiStep :number="1">Erster Schritt</KiStep>
  <KiStep :number="2" status="active">Aktueller Schritt</KiStep>
  <KiStep :number="3">Nächster Schritt</KiStep>
</KiSteps>
```

### Progressive Reveal

```vue
<KiProgressiveReveal :items="['Punkt 1', 'Punkt 2', 'Punkt 3']" />

<!-- Oder mit Slots -->
<KiProgressiveReveal :count="3">
  <template #1>Erster Inhalt</template>
  <template #2>Zweiter Inhalt</template>
  <template #3>Dritter Inhalt</template>
</KiProgressiveReveal>
```

---

## Anpassung & Konfiguration

### Design-System anpassen

Bearbeiten Sie `setup/config.ts`:

```typescript
export const designConfig = {
  colors: {
    accent: {
      blue: '#0071E3',    // Ihre Primärfarbe
      green: '#34C759',   // Erfolgsfarbe
      // ...
    },
  },
  typography: {
    fonts: {
      heading: '"Ihre Schrift", sans-serif',
      // ...
    },
  },
  animations: {
    duration: {
      normal: '200ms',    // Animationsgeschwindigkeit
      // ...
    },
  },
}
```

### Globale Styles anpassen

Bearbeiten Sie `styles/main.css` für:
- Farbvariablen
- Typografie
- Animationen
- Utility-Klassen

---

## Export als HTML

### Standard-Export

```bash
# Build für Production
pnpm build

# Ergebnis in /dist Ordner
```

### Export-Optionen

```bash
# Mit bestimmter Base-URL
pnpm build --base /mein-pfad/

# Einzelne HTML-Datei (SPA)
pnpm build --spa
```

### Standalone HTML erstellen

Der Export enthält:
- `index.html` - Hauptdatei
- `assets/` - CSS, JS, Fonts
- Alle notwendigen Ressourcen

**Wichtig:** Für vollständig offline-fähigen Export:
1. Stellen Sie sicher, dass keine externen CDN-Links verwendet werden
2. Betten Sie Bilder lokal ein oder als Base64
3. Verwenden Sie lokale Schriftarten

---

## Best Practices

### Für Schulungspräsentationen

1. **Weniger ist mehr** - Maximal 5-7 Punkte pro Folie
2. **Große Schrift** - Mindestens 24px für Lesbarkeit
3. **Kontrast** - WCAG AA Standard für Barrierefreiheit
4. **Animationen sparsam** - Nur zur Unterstützung, nicht zur Ablenkung

### Performance

1. **Bilder optimieren** - WebP Format, max. 1920px Breite
2. **Videos komprimieren** - H.264/MP4, max. 10MB
3. **Lazy Loading** - Für große Präsentationen

### Accessibility

1. **Alt-Texte** für alle Bilder
2. **Farbkontrast** mindestens 4.5:1
3. **Keyboard-Navigation** funktioniert automatisch
4. **Screen Reader** kompatibel durch semantisches HTML

---

## Neue Features

### Schrittweise Animationen

Elemente werden bei jedem Klick einzeln eingeblendet:

```html
<div v-click class="comparison-item positive-item">
  <span class="item-icon">✓</span>
  <span class="item-text">Vorteil-Text</span>
</div>
```

### Quiz mit Modal-Popup

Quiz-Antworten erscheinen jetzt als Modal in der Bildmitte:
- Klicke auf eine Antwort
- Modal erscheint mit Erklärung
- Schließen mit X oder "Weiter"-Button

### Scrollbare Folien

Für Inhalte, die nicht auf eine Folie passen:

```markdown
---
layout: ki-scrollable
title: "Langer Inhalt"
---

Beliebig viel Inhalt hier...
```

### Fullscreen iframe-Einbettung

Webseiten ohne UI-Elemente einbetten:

```markdown
---
layout: ki-iframe
url: 'https://example.com'
fullscreen: true
---
```

### Code mit schrittweiser Hervorhebung

Slidev-natives Code-Highlighting mit Klick-Animation:

````markdown
```python {all|1-3|5-8|all}
# Zeile 1-3 (Klick 1)
import openai

# Zeile 5-8 (Klick 2)
prompt = "Text..."
```
````

### 3D-Flip-Karten

Größere Karten mit Scroll-Support für längere Texte:

```html
<FlipCard
  front-title="Thema"
  front-icon="🎯"
  back-type="pro"
  back-content="Längerer Text wird scrollbar..."
/>
```

### Diagramm-Animationen

Kreisdiagramme füllen sich beim Anzeigen:

```html
<div v-click class="stat-card animate-on-click">
  <!-- SVG mit --progress Variable -->
</div>
```

---

## Support & Ressourcen

- **Slidev Dokumentation:** https://sli.dev
- **Vue.js Dokumentation:** https://vuejs.org
- **UnoCSS:** https://unocss.dev

---

*Erstellt für KI-Schulungen in der Erwachsenenbildung*
