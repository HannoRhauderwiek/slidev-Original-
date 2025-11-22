# KI-Schulung Layouts Übersicht

## Alle verfügbaren Folientypen

| # | Layout | Datei | Beschreibung |
|---|--------|-------|--------------|
| 1 | **Titel-Folie** | `ki-title.vue` | Großer Titel, Untertitel, Autor/Datum, subtile Animationen |
| 2 | **Inhalts-Folie** | `ki-content.vue` | Titel + Bullet-Points mit animiertem Stagger-Effekt |
| 3 | **Vergleichs-Folie** | `ki-comparison.vue` | 2-Spalten für Pro/Contra mit visueller Unterscheidung |
| 4 | **Code-Folie** | `ki-code.vue` | Syntax-Highlighting im macOS-Style mit Erklärungen |
| 5 | **Praktisches Beispiel** | `ki-example.vue` | Bild + nummerierte Schritte mit Callouts |
| 6 | **Quiz-Folie** | `ki-quiz.vue` | Interaktive Multiple-Choice mit Feedback |
| 7 | **Webseite-Einbettung** | `ki-iframe.vue` | iframe mit URL-Bar und Fallback |
| 8 | **GIF/Video-Folie** | `ki-media.vue` | Responsive Media mit Play-Kontrollen |
| 9 | **Fallunterscheidung** | `ki-decision.vue` | Entscheidungsbaum mit Branches |
| 10 | **Accordion-Folie** | `ki-accordion.vue` | Aufklappbare Kategorien |
| 11 | **Zusammenfassung** | `ki-summary.vue` | Key Takeaways mit CTA-Button |
| 12 | **Spalten-Folie** | `ki-columns.vue` | Flexibles 2-4 Spalten-Layout |

---

## Schnellreferenz

### 1. Titel-Folie

```yaml
---
layout: ki-title
title: Haupttitel
subtitle: Untertitel
author: Name
date: "2024"
background: gradient  # white | dark | image
backgroundImage: /path/to/image.jpg  # nur bei background: image
---
```

### 2. Inhalts-Folie

```yaml
---
layout: ki-content
title: Folientitel
bullets: icon    # check | arrow | number | none
animate: stagger # fade | slide | none
columns: 1       # 2 | 3
---
```

### 3. Vergleichs-Folie

```yaml
---
layout: ki-comparison
title: Vergleichstitel
leftTitle: Empfohlen
rightTitle: Vermeiden
leftType: positive   # neutral
rightType: negative  # neutral
dividerStyle: line   # vs | arrow
---

::left::
Inhalt links

::right::
Inhalt rechts
```

### 4. Code-Folie

```yaml
---
layout: ki-code
title: Code-Beispiel
language: python
filename: script.py
showLineNumbers: true
layout: split  # full | bottom
---

::explanation::
Erklärung hier
```

### 5. Praktisches Beispiel

```yaml
---
layout: ki-example
title: Schritt für Schritt
image: /images/screenshot.png
imageAlt: Beschreibung
imagePosition: left  # right | top
caption: Bildunterschrift
---

::steps::
1. Erster Schritt
2. Zweiter Schritt
```

### 6. Quiz-Folie

```yaml
---
layout: ki-quiz
question: Ihre Frage?
showExplanation: true
allowRetry: true
options:
  - text: Antwort A
    correct: false
    explanation: Warum falsch
  - text: Antwort B
    correct: true
    explanation: Warum richtig
---
```

### 7. Webseite-Einbettung

```yaml
---
layout: ki-iframe
title: Live Demo
url: https://example.com
height: 75%
showUrl: true
allowFullscreen: true
---
```

### 8. Media-Folie

```yaml
---
layout: ki-media
title: Demo
media: /videos/demo.mp4
type: video  # gif | image | auto
autoplay: true
loop: true
muted: true
controls: true
caption: Beschreibung
size: large  # small | medium | full
---
```

### 9. Fallunterscheidung

```yaml
---
layout: ki-decision
title: Entscheidung
question: Zentrale Frage?
layout: horizontal  # vertical | radial
animated: true
---

::branch-yes::
Ja-Szenario

::branch-no::
Nein-Szenario

::branch-maybe::
Vielleicht-Szenario (optional)
```

### 10. Accordion-Folie

```yaml
---
layout: ki-accordion
title: FAQ
subtitle: Häufige Fragen
---

<KiAccordion>
  <KiAccordionItem title="Frage 1" icon="❓">
    Antwort 1
  </KiAccordionItem>
</KiAccordion>
```

### 11. Zusammenfassung

```yaml
---
layout: ki-summary
title: Zusammenfassung
subtitle: Was Sie gelernt haben
cta: Button-Text
ctaLink: https://example.com
style: cards  # list | numbered
---

- Punkt 1
- Punkt 2
```

### 12. Spalten-Folie

```yaml
---
layout: ki-columns
title: Überschrift
columns: 3    # 2 | 3 | 4
gap: normal   # small | large
equalHeight: true
animate: true
---

::col1::
Spalte 1

::col2::
Spalte 2

::col3::
Spalte 3

::col4::
Spalte 4 (nur bei columns: 4)
```

---

## Komponenten in Folien verwenden

### Accordion

```vue
<KiAccordion :allowMultiple="false">
  <KiAccordionItem title="Titel" icon="🔍" variant="info">
    Inhalt
  </KiAccordionItem>
</KiAccordion>
```

### Callout

```vue
<KiCallout type="info" title="Hinweis" :collapsible="true">
  Inhalt
</KiCallout>
<!-- Typen: info | success | warning | danger | tip -->
```

### Highlight

```vue
<KiHighlight type="positive" :underline="true">Text</KiHighlight>
<KiHighlight type="negative" :strikethrough="true">Text</KiHighlight>
<!-- Typen: positive | negative | info | warning | neutral -->
```

### Card

```vue
<KiCard title="Titel" icon="🎯" type="info" :delay="100">
  Inhalt
</KiCard>
<!-- Typen: default | positive | negative | info | warning -->
```

### Steps

```vue
<KiSteps variant="default">
  <KiStep :number="1" status="complete">Erledigt</KiStep>
  <KiStep :number="2" status="active">Aktuell</KiStep>
  <KiStep :number="3">Ausstehend</KiStep>
</KiSteps>
```

### Progressive Reveal

```vue
<KiProgressiveReveal
  :items="['Punkt 1', 'Punkt 2']"
  :autoReveal="false"
  :interval="1500"
/>
```
