---
theme: default
title: KI-Schulung Demo
info: |
  ## KI-Schulung Präsentationsvorlage
  Eine professionelle Slidev-Vorlage für KI-Schulungen in der Erwachsenenbildung.

  Alle 12+ Folientypen werden hier demonstriert.
author: KI-Schulung Team
date: "2024"
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
css: unocss
---

<!--
  ═══════════════════════════════════════════════════════════════════════════
  FOLIE 1: TITEL-FOLIE (ki-title)
  ═══════════════════════════════════════════════════════════════════════════
-->

<style>
/* Import der globalen Styles */
@import './styles/main.css';
</style>

# Einführung in Künstliche Intelligenz

Grundlagen, Anwendungen und Best Practices für die Erwachsenenbildung

<div class="mt-12 flex justify-center gap-4">
  <span class="text-gray-500">📅 2024</span>
  <span class="text-gray-500">•</span>
  <span class="text-gray-500">👤 KI-Schulung Team</span>
</div>

<div class="abs-br m-8 text-sm opacity-50">
  Drücken Sie Leertaste →
</div>

---
transition: fade-out
---

<!--
  ═══════════════════════════════════════════════════════════════════════════
  FOLIE 2: INHALTS-FOLIE MIT BULLETS
  ═══════════════════════════════════════════════════════════════════════════
-->

# Was ist Künstliche Intelligenz?

<div class="mt-8">

<v-clicks>

- 🤖 **Maschinelles Lernen** - Computer lernen aus Daten und Erfahrungen
- 🧠 **Neuronale Netze** - Algorithmen inspiriert vom menschlichen Gehirn
- 💬 **Sprachmodelle (LLMs)** - GPT, Claude, Gemini und mehr
- 🎨 **Generative KI** - Erstellt neue Inhalte wie Text, Bilder, Code
- 🔍 **Computer Vision** - Maschinen verstehen visuelle Informationen

</v-clicks>

</div>

<div v-click class="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
  <strong>💡 Wichtig:</strong> KI ist ein Werkzeug, kein Ersatz für menschliches Denken!
</div>

---
layout: two-cols
layoutClass: gap-8
---

<!--
  ═══════════════════════════════════════════════════════════════════════════
  FOLIE 3: VERGLEICHS-FOLIE (2-Spalten Pro/Contra)
  ═══════════════════════════════════════════════════════════════════════════
-->

# KI im Arbeitsalltag

## <span class="text-green-600">✓ Empfohlen</span>

<div class="mt-4">

- <span class="text-green-600">✓</span> Recherche beschleunigen
- <span class="text-green-600">✓</span> Texte zusammenfassen
- <span class="text-green-600">✓</span> Erste Entwürfe erstellen
- <span class="text-green-600">✓</span> Ideen brainstormen
- <span class="text-green-600">✓</span> Code-Unterstützung

</div>

::right::

<div class="mt-12"></div>

## <span class="text-red-500">✗ Vermeiden</span>

<div class="mt-4">

- <span class="text-red-500 line-through opacity-70">✗ Blindes Vertrauen</span>
- <span class="text-red-500 line-through opacity-70">✗ Sensible Daten eingeben</span>
- <span class="text-red-500 line-through opacity-70">✗ Ohne Prüfung verwenden</span>
- <span class="text-red-500 line-through opacity-70">✗ Copyright ignorieren</span>
- <span class="text-red-500 line-through opacity-70">✗ Menschliche Aufsicht weglassen</span>

</div>

---

<!--
  ═══════════════════════════════════════════════════════════════════════════
  FOLIE 4: CODE-BEISPIEL-FOLIE
  ═══════════════════════════════════════════════════════════════════════════
-->

# Prompt Engineering Beispiel

Ein guter Prompt macht den Unterschied!

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

### ❌ Schlechter Prompt

```text
Schreib mir was über KI
```

<div class="mt-2 text-sm text-red-500">
Zu vage, keine Struktur, unklares Ziel
</div>

</div>

<div>

### ✅ Guter Prompt

```text
Erkläre die 3 wichtigsten Vorteile
von KI im Bildungsbereich.

Zielgruppe: Lehrer ohne Tech-Hintergrund
Format: Bullet-Points mit Beispielen
Länge: Maximal 200 Wörter
```

<div class="mt-2 text-sm text-green-600">
Spezifisch, strukturiert, klare Vorgaben
</div>

</div>

</div>

---

<!--
  ═══════════════════════════════════════════════════════════════════════════
  FOLIE 5: PRAKTISCHES BEISPIEL MIT SCHRITTEN
  ═══════════════════════════════════════════════════════════════════════════
-->

# ChatGPT Schritt für Schritt

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="bg-gray-100 rounded-xl p-4 flex items-center justify-center">
  <div class="text-center">
    <div class="text-6xl mb-4">💬</div>
    <div class="text-gray-500">ChatGPT Interface</div>
  </div>
</div>

<div>

<v-clicks>

<div class="flex items-start gap-3 mb-4">
  <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
  <div>
    <strong>Öffnen Sie chat.openai.com</strong>
    <p class="text-sm text-gray-600">Erstellen Sie ein kostenloses Konto</p>
  </div>
</div>

<div class="flex items-start gap-3 mb-4">
  <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
  <div>
    <strong>Formulieren Sie Ihren Prompt</strong>
    <p class="text-sm text-gray-600">Klar, spezifisch und strukturiert</p>
  </div>
</div>

<div class="flex items-start gap-3 mb-4">
  <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
  <div>
    <strong>Prüfen Sie die Antwort</strong>
    <p class="text-sm text-gray-600">Fakten verifizieren, bei Bedarf nachfragen</p>
  </div>
</div>

<div class="flex items-start gap-3">
  <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
  <div>
    <strong>Iterieren und verfeinern</strong>
    <p class="text-sm text-gray-600">Follow-up Fragen für bessere Ergebnisse</p>
  </div>
</div>

</v-clicks>

</div>

</div>

---

<!--
  ═══════════════════════════════════════════════════════════════════════════
  FOLIE 6: INTERAKTIVES QUIZ
  ═══════════════════════════════════════════════════════════════════════════
-->

# Quiz: Testen Sie Ihr Wissen!

<div class="mt-8 max-w-2xl mx-auto">

<div class="text-center mb-6">
  <span class="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-4 py-1 rounded-full">Frage</span>
</div>

<h2 class="text-2xl font-bold text-center mb-8">Was bedeutet "LLM" im KI-Kontext?</h2>

<div class="space-y-3">

<div v-click class="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-500 cursor-pointer transition-all flex items-center gap-4">
  <span class="w-8 h-8 bg-gray-100 rounded flex items-center justify-center font-semibold">A</span>
  <span>Low Level Machine</span>
</div>

<div v-click class="p-4 bg-green-50 rounded-lg border-2 border-green-500 flex items-center gap-4">
  <span class="w-8 h-8 bg-green-500 text-white rounded flex items-center justify-center font-semibold">B</span>
  <span>Large Language Model ✓</span>
</div>

<div v-click class="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-500 cursor-pointer transition-all flex items-center gap-4">
  <span class="w-8 h-8 bg-gray-100 rounded flex items-center justify-center font-semibold">C</span>
  <span>Local Learning Method</span>
</div>

</div>

<div v-click class="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500 text-center">
  🎉 <strong>Richtig!</strong> LLM steht für "Large Language Model" - große Sprachmodelle wie GPT-4 oder Claude.
</div>

</div>

---

<!--
  ═══════════════════════════════════════════════════════════════════════════
  FOLIE 7: FALLUNTERSCHEIDUNG / ENTSCHEIDUNGSBAUM
  ═══════════════════════════════════════════════════════════════════════════
-->

# Wann sollte ich KI einsetzen?

<div class="flex flex-col items-center mt-6">

<div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl shadow-lg mb-8">
  <span class="text-2xl mr-3">❓</span>
  <span class="font-semibold text-lg">Ist die Aufgabe repetitiv?</span>
</div>

<div class="grid grid-cols-3 gap-6 w-full max-w-4xl">

<div v-click class="bg-white rounded-xl p-5 shadow-md border-t-4 border-green-500">
  <div class="flex items-center gap-2 mb-3">
    <span class="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</span>
    <span class="font-semibold">Ja</span>
  </div>
  <h3 class="font-semibold text-green-700 mb-2">→ KI empfohlen</h3>
  <p class="text-sm text-gray-600">Automatisierung spart Zeit und reduziert Fehler</p>
</div>

<div v-click class="bg-white rounded-xl p-5 shadow-md border-t-4 border-orange-500">
  <div class="flex items-center gap-2 mb-3">
    <span class="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">◐</span>
    <span class="font-semibold">Teilweise</span>
  </div>
  <h3 class="font-semibold text-orange-700 mb-2">→ Hybrid-Ansatz</h3>
  <p class="text-sm text-gray-600">KI als Unterstützung, Mensch entscheidet</p>
</div>

<div v-click class="bg-white rounded-xl p-5 shadow-md border-t-4 border-red-500">
  <div class="flex items-center gap-2 mb-3">
    <span class="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✗</span>
    <span class="font-semibold">Nein</span>
  </div>
  <h3 class="font-semibold text-red-700 mb-2">→ Manuell prüfen</h3>
  <p class="text-sm text-gray-600">Kreative/einzigartige Aufgaben brauchen Menschen</p>
</div>

</div>

</div>

---

<!--
  ═══════════════════════════════════════════════════════════════════════════
  FOLIE 8: AUFKLAPPBARE KATEGORIEN (ACCORDION)
  ═══════════════════════════════════════════════════════════════════════════
-->

# Häufige Fragen (FAQ)

<div class="mt-6 max-w-3xl mx-auto">

<KiAccordion>
  <KiAccordionItem title="Was kostet die Nutzung von KI-Tools?" icon="💰">
    <p>Die Kosten variieren stark:</p>
    <ul>
      <li><strong>Kostenlos:</strong> ChatGPT Free, Claude Free, Gemini</li>
      <li><strong>Premium:</strong> ChatGPT Plus ($20/Monat), Claude Pro</li>
      <li><strong>Enterprise:</strong> Individuelle Preise für Unternehmen</li>
    </ul>
  </KiAccordionItem>

  <KiAccordionItem title="Sind meine Daten bei KI-Tools sicher?" icon="🔒">
    <p>Wichtige Sicherheitsaspekte:</p>
    <ul>
      <li>Lesen Sie die Datenschutzrichtlinien</li>
      <li>Geben Sie keine sensiblen/personenbezogenen Daten ein</li>
      <li>Nutzen Sie Enterprise-Versionen für geschäftskritische Daten</li>
    </ul>
  </KiAccordionItem>

  <KiAccordionItem title="Kann KI meinen Job ersetzen?" icon="🤔">
    <p>KI wird Jobs transformieren, nicht komplett ersetzen:</p>
    <ul>
      <li>Routine-Aufgaben werden automatisiert</li>
      <li>Neue Rollen entstehen (Prompt Engineering, KI-Training)</li>
      <li>Menschliche Fähigkeiten bleiben essenziell</li>
    </ul>
  </KiAccordionItem>
</KiAccordion>

</div>

---

<!--
  ═══════════════════════════════════════════════════════════════════════════
  FOLIE 9: SPALTEN-FOLIE (3 Spalten)
  ═══════════════════════════════════════════════════════════════════════════
-->

# KI-Anwendungsbereiche

<div class="grid grid-cols-3 gap-6 mt-8">

<div v-click class="bg-white rounded-xl p-6 shadow-md">
  <div class="text-4xl mb-4">💬</div>
  <h3 class="font-semibold text-lg mb-2 text-blue-600">Text-KI</h3>
  <ul class="text-sm text-gray-600 space-y-1">
    <li>• ChatGPT</li>
    <li>• Claude</li>
    <li>• Gemini</li>
    <li>• Copilot</li>
  </ul>
</div>

<div v-click class="bg-white rounded-xl p-6 shadow-md">
  <div class="text-4xl mb-4">🎨</div>
  <h3 class="font-semibold text-lg mb-2 text-purple-600">Bild-KI</h3>
  <ul class="text-sm text-gray-600 space-y-1">
    <li>• DALL-E 3</li>
    <li>• Midjourney</li>
    <li>• Stable Diffusion</li>
    <li>• Adobe Firefly</li>
  </ul>
</div>

<div v-click class="bg-white rounded-xl p-6 shadow-md">
  <div class="text-4xl mb-4">💻</div>
  <h3 class="font-semibold text-lg mb-2 text-green-600">Code-KI</h3>
  <ul class="text-sm text-gray-600 space-y-1">
    <li>• GitHub Copilot</li>
    <li>• Cursor</li>
    <li>• Replit AI</li>
    <li>• Amazon CodeWhisperer</li>
  </ul>
</div>

</div>

---

<!--
  ═══════════════════════════════════════════════════════════════════════════
  FOLIE 10: VIDEO/MEDIA FOLIE
  ═══════════════════════════════════════════════════════════════════════════
-->

# KI in Aktion

<div class="flex justify-center mt-8">
  <div class="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl">
    <div class="bg-gray-800 px-4 py-3 flex items-center gap-2">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
      <span class="ml-4 text-gray-400 text-sm">demo.mp4</span>
    </div>
    <div class="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
      <div class="text-center">
        <div class="text-6xl mb-4">🎬</div>
        <p class="text-gray-400">Video-Demo hier einfügen</p>
        <p class="text-gray-500 text-sm mt-2">Unterstützt: MP4, WebM, GIF</p>
      </div>
    </div>
  </div>
</div>

<p class="text-center text-gray-500 mt-4 text-sm italic">
  Eine Live-Demonstration der KI-gestützten Textgenerierung
</p>

---

<!--
  ═══════════════════════════════════════════════════════════════════════════
  FOLIE 11: WEBSEITE-EINBETTUNG
  ═══════════════════════════════════════════════════════════════════════════
-->

# Live-Demo: ChatGPT

<div class="mt-4">
  <div class="bg-white rounded-lg shadow-md p-2 flex items-center gap-2 mb-4">
    <span>🔗</span>
    <code class="flex-1 text-sm text-gray-600">https://chat.openai.com</code>
    <button class="px-3 py-1 bg-blue-500 text-white rounded text-sm">Öffnen ↗</button>
  </div>

  <div class="bg-gray-100 rounded-xl overflow-hidden shadow-lg" style="height: 400px;">
    <div class="h-full flex items-center justify-center">
      <div class="text-center">
        <div class="text-5xl mb-4">🌐</div>
        <p class="text-gray-600 font-medium">Webseite wird hier eingebettet</p>
        <p class="text-gray-400 text-sm mt-2">
          Im Export-Modus: Klicken Sie "Öffnen" für die Live-Seite
        </p>
      </div>
    </div>
  </div>
</div>

---

<!--
  ═══════════════════════════════════════════════════════════════════════════
  FOLIE 12: ZUSAMMENFASSUNG / FAZIT
  ═══════════════════════════════════════════════════════════════════════════
-->

# Zusammenfassung

<div class="flex justify-center mt-8">
  <div class="text-5xl mb-6">📋</div>
</div>

<h2 class="text-center text-2xl font-bold mb-8">Was Sie heute gelernt haben</h2>

<div class="grid grid-cols-2 gap-6 max-w-4xl mx-auto">

<div v-click class="bg-white rounded-xl p-5 shadow-md text-center border-t-4 border-blue-500">
  <div class="text-2xl mb-2">🤖</div>
  <p class="font-medium">KI-Grundlagen verstehen</p>
</div>

<div v-click class="bg-white rounded-xl p-5 shadow-md text-center border-t-4 border-green-500">
  <div class="text-2xl mb-2">✍️</div>
  <p class="font-medium">Effektive Prompts schreiben</p>
</div>

<div v-click class="bg-white rounded-xl p-5 shadow-md text-center border-t-4 border-purple-500">
  <div class="text-2xl mb-2">⚖️</div>
  <p class="font-medium">Chancen & Risiken abwägen</p>
</div>

<div v-click class="bg-white rounded-xl p-5 shadow-md text-center border-t-4 border-orange-500">
  <div class="text-2xl mb-2">🛠️</div>
  <p class="font-medium">Tools praktisch anwenden</p>
</div>

</div>

<div v-click class="mt-10 text-center">
  <button class="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
    Jetzt ausprobieren →
  </button>
</div>

---
layout: center
class: text-center
---

<!--
  ═══════════════════════════════════════════════════════════════════════════
  FOLIE 13: ABSCHLUSS
  ═══════════════════════════════════════════════════════════════════════════
-->

# Vielen Dank!

<div class="mt-8 text-2xl text-gray-600">
  Fragen? Diskussion?
</div>

<div class="mt-12 flex justify-center gap-8">
  <div class="text-center">
    <div class="text-3xl mb-2">📧</div>
    <p class="text-sm text-gray-500">kontakt@ki-schulung.de</p>
  </div>
  <div class="text-center">
    <div class="text-3xl mb-2">🌐</div>
    <p class="text-sm text-gray-500">www.ki-schulung.de</p>
  </div>
  <div class="text-center">
    <div class="text-3xl mb-2">📚</div>
    <p class="text-sm text-gray-500">Ressourcen & Links</p>
  </div>
</div>

<div class="abs-br m-10 text-sm opacity-40">
  Erstellt mit Slidev • 2024
</div>
