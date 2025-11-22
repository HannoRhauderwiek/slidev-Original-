# Anleitung: Folien anpassen (Schritt-für-Schritt)

> Diese Anleitung erklärt dir ganz einfach, wie du deine Präsentation anpassen kannst - so einfach, dass es jeder versteht!

---

## Inhaltsverzeichnis

1. [Wo finde ich was?](#1-wo-finde-ich-was)
2. [Bilder tauschen](#2-bilder-tauschen)
3. [GIFs tauschen](#3-gifs-tauschen)
4. [Ebenen ändern (Vordergrund & Hintergrund)](#4-ebenen-ändern-vordergrund--hintergrund)
5. [Größen ändern](#5-größen-ändern)
6. [Positionen ändern](#6-positionen-ändern)
7. [Zusammenfassung & Checkliste](#7-zusammenfassung--checkliste)

---

## 1. Wo finde ich was?

### Die wichtigsten Ordner und Dateien

Stell dir die Präsentation wie ein Haus vor:

```
zzmivaxqxg.github (2)/          <-- Das ist dein "Haus" (Hauptordner)
│
├── slides-ki-demo.md           <-- Hier sind alle Folien drin (wie Seiten in einem Buch)
├── slides-ki-bildung.md        <-- Eine andere Präsentation
│
├── public/                     <-- Hier kommen alle Dateien rein, die du zeigen willst
│   └── images/                 <-- HIER KOMMEN DEINE BILDER UND GIFS HIN!
│       └── mein-bild.png       <-- Beispiel für ein Bild
│
├── layouts/                    <-- Fertige Vorlagen für verschiedene Folientypen
│   ├── ki-media.vue            <-- Vorlage für Videos/GIFs
│   ├── ki-title.vue            <-- Vorlage für Titel-Folien
│   └── ...
│
└── styles/                     <-- Hier sind die Farben und Designs gespeichert
    └── main.css                <-- Das Haupt-Stylesheet
```

### Wichtige Regel zum Merken:

> **Alle Bilder und GIFs MÜSSEN in den Ordner `public/images/` gespeichert werden!**
> Danach kannst du sie mit `/images/dateiname.png` aufrufen.

---

## 2. Bilder tauschen

### Schritt 1: Neues Bild vorbereiten

1. **Suche oder erstelle dein neues Bild**
2. **Benenne die Datei gut** - OHNE Leerzeichen!
   - Gut: `mein-tolles-bild.png`
   - Schlecht: `Mein tolles Bild.png`
3. **Empfohlene Formate:**
   - PNG (für Grafiken mit transparentem Hintergrund)
   - JPG/JPEG (für Fotos)
   - WebP (für moderne, kleine Dateien)

### Schritt 2: Bild in den richtigen Ordner kopieren

1. Öffne den Ordner: `public/images/`
2. Kopiere dein Bild dort hinein
3. Merke dir den **exakten Dateinamen**!

### Schritt 3: Bild in der Folie austauschen

Öffne die Datei `slides-ki-demo.md` (oder deine Präsentationsdatei) in einem Texteditor.

#### Methode A: Einfaches Markdown-Bild

**So sieht es vorher aus:**
```markdown
![Beschreibung des alten Bildes](/images/altes-bild.png)
```

**So änderst du es:**
```markdown
![Beschreibung des neuen Bildes](/images/dein-neues-bild.png)
```

**Erklärung:**
- `![...]` = Das ist der "Alt-Text" - eine Beschreibung für das Bild
- `(/images/...)` = Der Pfad zum Bild (immer mit `/images/` beginnen!)

#### Methode B: HTML-Bild (mehr Kontrolle)

**So sieht es vorher aus:**
```html
<img src="/images/altes-bild.png" alt="Beschreibung" />
```

**So änderst du es:**
```html
<img src="/images/dein-neues-bild.png" alt="Neue Beschreibung" />
```

#### Methode C: Bild im ki-example Layout

Manche Folien haben ein spezielles Layout. Suche nach:

```yaml
---
layout: ki-example
title: ChatGPT verwenden
image: /images/altes-bild.png    <-- HIER ÄNDERN!
imagePosition: left
---
```

Ändere einfach den `image:`-Wert:

```yaml
---
layout: ki-example
title: ChatGPT verwenden
image: /images/dein-neues-bild.png    <-- NEUES BILD
imagePosition: left
---
```

### Beispiel zum Nachmachen:

**Vorher:**
```markdown
<img src="/images/chatgpt-screenshot.png" alt="ChatGPT Interface" class="rounded-lg" />
```

**Nachher (mit deinem eigenen Bild):**
```markdown
<img src="/images/mein-screenshot.png" alt="Mein eigener Screenshot" class="rounded-lg" />
```

---

## 3. GIFs tauschen

GIFs sind animierte Bilder - sie funktionieren fast genauso wie normale Bilder!

### Schritt 1: GIF vorbereiten

1. **Speichere dein GIF** mit der Endung `.gif`
2. **Achte auf die Dateigröße!**
   - Empfohlen: Maximal 2-5 MB
   - Zu große GIFs machen die Präsentation langsam

### Schritt 2: GIF in den richtigen Ordner kopieren

Kopiere dein GIF in: `public/images/`

### Schritt 3: GIF in der Folie austauschen

#### Methode A: Einfaches Markdown

```markdown
![Animation zeigt wie KI arbeitet](/images/meine-animation.gif)
```

#### Methode B: HTML (mit mehr Optionen)

```html
<img src="/images/meine-animation.gif" alt="Animation" class="rounded-lg shadow-lg" />
```

#### Methode C: Das spezielle ki-media Layout (EMPFOHLEN für GIFs!)

Dies ist das beste Layout für GIFs und Videos. Suche in deiner Präsentation nach:

```yaml
---
layout: ki-media
title: KI in Aktion
media: /videos/alte-animation.gif    <-- HIER ÄNDERN!
type: gif
caption: Beschreibung der Animation
size: large
---
```

**Ändere es zu:**

```yaml
---
layout: ki-media
title: Meine Animation
media: /images/meine-neue-animation.gif    <-- NEUER PFAD
type: gif
caption: Hier steht was die Animation zeigt
size: large
---
```

### Die Optionen beim ki-media Layout erklärt:

| Option | Was sie macht | Mögliche Werte |
|--------|---------------|----------------|
| `media:` | Pfad zur Datei | `/images/dein-gif.gif` |
| `type:` | Art der Datei | `gif`, `video`, `image`, `auto` |
| `caption:` | Bildunterschrift | Jeder Text, z.B. "So funktioniert KI" |
| `size:` | Wie groß das GIF angezeigt wird | `small`, `medium`, `large`, `full` |
| `autoplay:` | Automatisch abspielen? | `true` oder `false` |
| `loop:` | Endlosschleife? | `true` oder `false` |

---

## 4. Ebenen ändern (Vordergrund & Hintergrund)

### Was sind Ebenen?

Stell dir Ebenen wie durchsichtige Folien übereinander vor:
- **Hintergrund** = Die unterste Folie (ganz hinten)
- **Vordergrund** = Die oberste Folie (ganz vorne, verdeckt alles darunter)

In CSS kontrollieren wir das mit dem Wert `z-index`:
- **Kleiner Wert** = weiter hinten (z.B. `z-index: 1`)
- **Großer Wert** = weiter vorne (z.B. `z-index: 100`)
- **Negativer Wert** = ganz hinten, hinter allem! (z.B. `z-index: -1`)

### Wie ändere ich die Ebene?

#### Methode 1: Mit CSS-Klassen (einfach!)

Slidev und TailwindCSS bieten fertige Klassen:

```html
<!-- Ganz nach HINTEN (Hintergrund) -->
<div class="-z-1">
  Ich bin im Hintergrund
</div>

<!-- Normal (Standard) -->
<div class="z-0">
  Ich bin auf der normalen Ebene
</div>

<!-- Nach VORNE -->
<div class="z-10">
  Ich bin weiter vorne
</div>

<!-- Ganz nach VORNE -->
<div class="z-50">
  Ich bin ganz vorne!
</div>
```

#### Methode 2: Mit inline-Style

```html
<img
  src="/images/mein-bild.png"
  style="z-index: 50; position: relative;"
  alt="Bild ganz vorne"
/>
```

**WICHTIG:** `z-index` funktioniert nur zusammen mit `position`!
Füge immer auch `position: relative;` oder `position: absolute;` hinzu.

### Praktisches Beispiel: Bild hinter Text

**So sieht der Code aus:**

```html
<!-- Container für beide Elemente -->
<div class="relative">

  <!-- Bild im HINTERGRUND -->
  <img
    src="/images/hintergrund-bild.png"
    class="absolute top-0 left-0 -z-1 opacity-30"
    alt="Hintergrundbild"
  />

  <!-- Text im VORDERGRUND -->
  <div class="z-10 relative">
    <h1>Mein Text ist vorne!</h1>
    <p>Das Bild ist dahinter, leicht durchsichtig.</p>
  </div>

</div>
```

**Erklärung:**
- `relative` auf dem Container = Bezugspunkt für absolute Elemente
- `absolute` auf dem Bild = Bild wird aus dem normalen Fluss genommen
- `-z-1` = Bild ist hinter allem
- `z-10` = Text ist vor allem
- `opacity-30` = Bild ist zu 30% sichtbar (durchsichtig)

### Ebenen-Werte Übersicht:

| CSS-Klasse | z-index Wert | Bedeutung |
|------------|--------------|-----------|
| `-z-10` | -10 | Ganz weit hinten |
| `-z-1` | -1 | Hinter dem normalen Inhalt |
| `z-0` | 0 | Normal (Standard) |
| `z-10` | 10 | Etwas nach vorne |
| `z-20` | 20 | Weiter nach vorne |
| `z-30` | 30 | Noch weiter vorne |
| `z-40` | 40 | Fast ganz vorne |
| `z-50` | 50 | Ganz vorne |

---

## 5. Größen ändern

### Methode 1: Mit CSS-Klassen (TailwindCSS)

#### Breite (width)

```html
<!-- Feste Breiten -->
<img src="/images/bild.png" class="w-20" />   <!-- 5rem = 80px -->
<img src="/images/bild.png" class="w-40" />   <!-- 10rem = 160px -->
<img src="/images/bild.png" class="w-64" />   <!-- 16rem = 256px -->
<img src="/images/bild.png" class="w-80" />   <!-- 20rem = 320px -->
<img src="/images/bild.png" class="w-96" />   <!-- 24rem = 384px -->

<!-- Prozentuale Breiten -->
<img src="/images/bild.png" class="w-1/2" />  <!-- 50% der Breite -->
<img src="/images/bild.png" class="w-1/3" />  <!-- 33% der Breite -->
<img src="/images/bild.png" class="w-2/3" />  <!-- 66% der Breite -->
<img src="/images/bild.png" class="w-full" /> <!-- 100% der Breite -->
```

#### Höhe (height)

```html
<img src="/images/bild.png" class="h-20" />   <!-- 80px hoch -->
<img src="/images/bild.png" class="h-40" />   <!-- 160px hoch -->
<img src="/images/bild.png" class="h-64" />   <!-- 256px hoch -->
<img src="/images/bild.png" class="h-auto" /> <!-- Automatische Höhe -->
```

#### Maximale Größe (damit es nicht zu groß wird)

```html
<img src="/images/bild.png" class="max-w-md" />  <!-- Maximal 448px breit -->
<img src="/images/bild.png" class="max-w-lg" />  <!-- Maximal 512px breit -->
<img src="/images/bild.png" class="max-w-xl" />  <!-- Maximal 576px breit -->
<img src="/images/bild.png" class="max-w-2xl" /> <!-- Maximal 672px breit -->
<img src="/images/bild.png" class="max-h-96" />  <!-- Maximal 384px hoch -->
```

### Größen-Tabelle zum Nachschlagen:

| Klasse | Größe in rem | Größe in Pixel |
|--------|--------------|----------------|
| `w-4` / `h-4` | 1rem | 16px |
| `w-8` / `h-8` | 2rem | 32px |
| `w-12` / `h-12` | 3rem | 48px |
| `w-16` / `h-16` | 4rem | 64px |
| `w-20` / `h-20` | 5rem | 80px |
| `w-24` / `h-24` | 6rem | 96px |
| `w-32` / `h-32` | 8rem | 128px |
| `w-40` / `h-40` | 10rem | 160px |
| `w-48` / `h-48` | 12rem | 192px |
| `w-56` / `h-56` | 14rem | 224px |
| `w-64` / `h-64` | 16rem | 256px |
| `w-72` / `h-72` | 18rem | 288px |
| `w-80` / `h-80` | 20rem | 320px |
| `w-96` / `h-96` | 24rem | 384px |

### Methode 2: Mit inline-Style (genaue Pixel-Werte)

```html
<img
  src="/images/bild.png"
  style="width: 450px; height: 300px;"
  alt="Bild mit genauer Größe"
/>
```

Oder mit Prozent:

```html
<img
  src="/images/bild.png"
  style="width: 75%; height: auto;"
  alt="Bild mit 75% Breite"
/>
```

### Methode 3: Im ki-media Layout (size-Option)

```yaml
---
layout: ki-media
title: Mein Bild
media: /images/mein-bild.png
type: image
size: medium    <-- HIER DIE GRÖSSE ÄNDERN!
---
```

| size-Wert | Maximale Breite |
|-----------|-----------------|
| `small` | 400px |
| `medium` | 600px |
| `large` | 800px |
| `full` | 100% (volle Breite) |

### Beispiel: Bild anpassen mit mehreren Eigenschaften

```html
<img
  src="/images/mein-bild.png"
  class="w-80 h-auto max-h-64 rounded-lg shadow-lg"
  alt="Angepasstes Bild"
/>
```

**Was passiert hier?**
- `w-80` = 320px breit
- `h-auto` = Höhe passt sich automatisch an
- `max-h-64` = Aber maximal 256px hoch
- `rounded-lg` = Abgerundete Ecken
- `shadow-lg` = Schöner Schatten

---

## 6. Positionen ändern

### Absolute Positionierung

Mit `absolute` kannst du Elemente genau platzieren:

```html
<div class="relative">  <!-- Container als Bezugspunkt -->

  <!-- Bild in der linken oberen Ecke -->
  <img
    src="/images/bild.png"
    class="absolute top-0 left-0 w-32"
    alt="Oben links"
  />

  <!-- Bild in der rechten oberen Ecke -->
  <img
    src="/images/bild.png"
    class="absolute top-0 right-0 w-32"
    alt="Oben rechts"
  />

  <!-- Bild unten in der Mitte -->
  <img
    src="/images/bild.png"
    class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32"
    alt="Unten Mitte"
  />

</div>
```

### Positions-Klassen erklärt:

| Klasse | Was sie macht |
|--------|---------------|
| `top-0` | Ganz oben (0 Abstand) |
| `top-4` | 1rem (16px) von oben |
| `top-10` | 2.5rem (40px) von oben |
| `bottom-0` | Ganz unten |
| `left-0` | Ganz links |
| `right-0` | Ganz rechts |
| `left-1/2` | 50% von links (Mitte) |
| `-translate-x-1/2` | Verschiebt Element um halbe Breite nach links (für echte Zentrierung) |

### Praxis-Beispiel: Bild mit Overlay-Text

```html
<div class="relative">
  <!-- Hintergrundbild -->
  <img
    src="/images/hintergrund.jpg"
    class="w-full h-64 object-cover rounded-lg"
    alt="Hintergrund"
  />

  <!-- Text-Overlay (schwebt über dem Bild) -->
  <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
    <h3 class="text-xl font-bold">Mein Titel</h3>
    <p>Eine Beschreibung des Bildes</p>
  </div>
</div>
```

---

## 7. Zusammenfassung & Checkliste

### Schnell-Referenz: Die wichtigsten Befehle

#### Bild einfügen:
```markdown
![Beschreibung](/images/mein-bild.png)
```

#### Bild mit Größe und Klassen:
```html
<img src="/images/mein-bild.png" class="w-64 h-auto rounded-lg" alt="Beschreibung" />
```

#### GIF mit ki-media Layout:
```yaml
---
layout: ki-media
title: Meine Animation
media: /images/animation.gif
type: gif
size: large
caption: Was zeigt das GIF?
---
```

#### Element in den Vordergrund:
```html
<div class="relative z-50">Ich bin vorne!</div>
```

#### Element in den Hintergrund:
```html
<div class="absolute -z-1">Ich bin hinten!</div>
```

---

### Checkliste vor dem Ändern

- [ ] Neue Bilder/GIFs in `public/images/` gespeichert?
- [ ] Dateinamen ohne Leerzeichen und Sonderzeichen?
- [ ] Dateigröße nicht zu groß (max. 2 MB)?
- [ ] Richtiges Format gewählt (PNG, JPG, GIF)?
- [ ] Pfad beginnt mit `/images/`?
- [ ] Alt-Text für Barrierefreiheit hinzugefügt?

---

### Häufige Fehler und Lösungen

| Problem | Lösung |
|---------|--------|
| Bild wird nicht angezeigt | Prüfe den Pfad! Muss mit `/images/` beginnen |
| Bild ist zu groß | Füge `max-w-lg` oder `w-64` hinzu |
| Bild ist verzerrt | Nutze `object-contain` oder `object-cover` |
| Element erscheint hinter anderen | Erhöhe `z-index` (z.B. `z-50`) |
| z-index funktioniert nicht | Füge `position: relative` hinzu |
| GIF läuft nicht | Prüfe ob die Datei wirklich ein animiertes GIF ist |

---

### Beispiel einer kompletten Folie

```yaml
---
layout: ki-media
title: KI-Demo in Aktion
media: /images/ki-demo.gif
type: gif
size: large
caption: So funktioniert die KI-Erkennung
autoplay: true
loop: true
---

Zusätzlicher Text unter dem GIF erscheint hier.

<div class="mt-4 p-4 bg-blue-50 rounded-lg">
  <strong>Tipp:</strong> Achten Sie auf die markierten Bereiche!
</div>
```

---

## Brauche ich Hilfe?

Falls etwas nicht funktioniert:

1. **Speichere alle Dateien** (Strg+S oder Cmd+S)
2. **Aktualisiere die Präsentation** im Browser (F5)
3. **Prüfe die Browser-Konsole** (F12) auf Fehlermeldungen
4. **Vergleiche mit funktionierenden Beispielen** in den Originaldateien

---

*Erstellt für die KI-Schulung Präsentation | Zuletzt aktualisiert: November 2024*
