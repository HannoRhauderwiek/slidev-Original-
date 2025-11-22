<!--
  KI-Schulung Layout: Code-Beispiel-Folie
  ========================================
  Syntax-Highlighting mit Erklärungen und Fokuspunkten

  Verwendung:
  ---
  layout: ki-code
  title: API-Aufruf Beispiel
  language: python
  filename: main.py
  ---

  ```python
  import openai

  response = openai.ChatCompletion.create(
      model="gpt-4",
      messages=[{"role": "user", "content": "Hello!"}]
  )
  ```

  ::explanation::
  Dieser Code zeigt einen einfachen API-Aufruf.
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps({
  title: { type: String, default: 'Code-Beispiel' },
  language: { type: String, default: '' },
  filename: { type: String, default: '' },
  showLineNumbers: { type: Boolean, default: true },
  highlightLines: { type: String, default: '' },
  layout: { type: String, default: 'split' }, // split, full, bottom
})

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 50)
})
</script>

<template>
  <div class="ki-code-layout" :class="[{ loaded: isLoaded }, `layout-${layout}`]">
    <!-- Header -->
    <header class="header">
      <h1 class="title">{{ title }}</h1>
      <span v-if="filename" class="filename">
        <span class="filename-icon">📄</span>
        {{ filename }}
      </span>
    </header>

    <!-- Main Content -->
    <div class="content-grid">
      <!-- Code Block -->
      <div class="code-container">
        <div class="code-header">
          <div class="window-controls">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <span v-if="language" class="language-badge">{{ language }}</span>
        </div>
        <div class="code-content" :class="{ 'with-line-numbers': showLineNumbers }">
          <slot />
        </div>
      </div>

      <!-- Explanation (for split layout) -->
      <div v-if="layout === 'split'" class="explanation-container">
        <slot name="explanation" />
      </div>
    </div>

    <!-- Bottom explanation (for bottom layout) -->
    <div v-if="layout === 'bottom'" class="explanation-bottom">
      <slot name="explanation" />
    </div>
  </div>
</template>

<style scoped>
.ki-code-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.5rem 3rem;
  background: var(--color-background, #FAFAFA);
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.ki-code-layout.loaded {
  opacity: 1;
}

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.title {
  font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0;
}

.filename {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 0.875rem;
  color: var(--color-text-secondary, #6E6E73);
  background: var(--color-surface, #F5F5F7);
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
}

.filename-icon {
  font-size: 1rem;
}

/* Content Grid */
.content-grid {
  flex: 1;
  display: grid;
  gap: 2rem;
  overflow: hidden;
}

.layout-split .content-grid {
  grid-template-columns: 1.2fr 0.8fr;
}

.layout-full .content-grid {
  grid-template-columns: 1fr;
}

/* Code Container */
.code-container {
  background: #1D1D1F;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(10px);
  animation: codeIn 0.4s ease-out 0.15s forwards;
}

@keyframes codeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Code Header (macOS style) */
.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: #2C2C2E;
  border-bottom: 1px solid #3A3A3C;
}

.window-controls {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #FF5F57; }
.dot.yellow { background: #FEBC2E; }
.dot.green { background: #28C840; }

.language-badge {
  font-family: "SF Mono", monospace;
  font-size: 0.75rem;
  color: #A1A1A6;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Code Content */
.code-content {
  flex: 1;
  overflow: auto;
  padding: 1.5rem;
}

.code-content :deep(pre) {
  margin: 0;
  background: transparent !important;
  font-family: "SF Mono", "Fira Code", "JetBrains Mono", monospace;
  font-size: 0.95rem;
  line-height: 1.7;
}

.code-content :deep(code) {
  background: transparent !important;
  padding: 0;
}

/* Highlighted lines */
.code-content :deep(.line.highlighted),
.code-content :deep(.line.highlighted) {
  background: rgba(0, 113, 227, 0.2);
  margin: 0 -1.5rem;
  padding: 0 1.5rem;
  display: block;
}

/* Explanation Container */
.explanation-container {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  opacity: 0;
  transform: translateX(20px);
  animation: explainIn 0.4s ease-out 0.25s forwards;
}

@keyframes explainIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.explanation-container :deep(h3) {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0 0 1rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #0071E3;
}

.explanation-container :deep(p) {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-secondary, #6E6E73);
  margin: 0 0 0.75rem 0;
}

.explanation-container :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}

.explanation-container :deep(ul li) {
  padding: 0.375rem 0;
  padding-left: 1.5rem;
  position: relative;
  font-size: 0.95rem;
  color: var(--color-text-primary, #1D1D1F);
}

.explanation-container :deep(ul li)::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #0071E3;
}

.explanation-container :deep(code) {
  background: #F5F5F7;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-family: "SF Mono", monospace;
  font-size: 0.875em;
  color: #AF52DE;
}

/* Bottom Explanation */
.explanation-bottom {
  margin-top: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  border-left: 4px solid #0071E3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.explanation-bottom :deep(p) {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-secondary, #6E6E73);
}

/* Responsive */
@media (max-width: 1024px) {
  .layout-split .content-grid {
    grid-template-columns: 1fr;
  }

  .explanation-container {
    transform: translateY(20px);
  }
}
</style>
