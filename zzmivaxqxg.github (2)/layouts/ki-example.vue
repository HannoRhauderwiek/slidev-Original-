<!--
  KI-Schulung Layout: Praktisches Beispiel-Folie
  ===============================================
  Bild/Screenshot mit Callouts und nummerierten Schritten

  Verwendung:
  ---
  layout: ki-example
  title: ChatGPT verwenden
  image: /images/chatgpt-interface.png
  imagePosition: left  # left, right, top
  ---

  ::steps::
  1. Öffnen Sie chat.openai.com
  2. Geben Sie Ihre Frage ein
  3. Analysieren Sie die Antwort

  ::callouts::
  - Eingabefeld für Prompts
  - Antwortbereich
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps({
  title: { type: String, default: 'Praktisches Beispiel' },
  image: { type: String, default: '' },
  imageAlt: { type: String, default: 'Beispielbild' },
  imagePosition: { type: String, default: 'left' }, // left, right, top
  caption: { type: String, default: '' },
})

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 50)
})
</script>

<template>
  <div class="ki-example-layout" :class="[{ loaded: isLoaded }, `image-${imagePosition}`]">
    <!-- Header -->
    <header class="header">
      <h1 class="title">{{ title }}</h1>
    </header>

    <!-- Content Grid -->
    <div class="content-grid">
      <!-- Image Section -->
      <div class="image-section">
        <div class="image-container">
          <img v-if="image" :src="image" :alt="imageAlt" class="example-image" />
          <div v-else class="image-placeholder">
            <span class="placeholder-icon">🖼️</span>
            <span class="placeholder-text">Bild hier einfügen</span>
          </div>

          <!-- Callouts overlay -->
          <div class="callouts-overlay">
            <slot name="callouts" />
          </div>
        </div>
        <p v-if="caption" class="caption">{{ caption }}</p>
      </div>

      <!-- Steps Section -->
      <div class="steps-section">
        <slot name="steps" />
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.ki-example-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.5rem 3rem;
  background: var(--color-background, #FAFAFA);
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.ki-example-layout.loaded {
  opacity: 1;
}

/* Header */
.header {
  margin-bottom: 1.5rem;
}

.title {
  font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0;
}

/* Content Grid */
.content-grid {
  flex: 1;
  display: grid;
  gap: 2rem;
  overflow: hidden;
}

.image-left .content-grid {
  grid-template-columns: 1.2fr 0.8fr;
}

.image-right .content-grid {
  grid-template-columns: 0.8fr 1.2fr;
}

.image-right .image-section {
  order: 2;
}

.image-top .content-grid {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
}

/* Image Section */
.image-section {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: scale(0.98);
  animation: imageIn 0.5s ease-out 0.1s forwards;
}

@keyframes imageIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.image-container {
  position: relative;
  flex: 1;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.example-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 1rem;
}

.image-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 300px;
  background: #F5F5F7;
  color: #86868B;
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.placeholder-text {
  font-size: 1rem;
}

.caption {
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text-tertiary, #86868B);
  margin-top: 0.75rem;
  font-style: italic;
}

/* Callouts Overlay */
.callouts-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.callouts-overlay :deep(.callout) {
  position: absolute;
  background: rgba(0, 113, 227, 0.9);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  box-shadow: 0 2px 10px rgba(0, 113, 227, 0.3);
  pointer-events: auto;
}

.callouts-overlay :deep(.callout)::before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(0, 113, 227, 0.9);
  transform: rotate(45deg);
}

/* Steps Section */
.steps-section {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  opacity: 0;
  transform: translateX(20px);
  animation: stepsIn 0.5s ease-out 0.2s forwards;
  overflow: auto;
}

.image-right .steps-section {
  transform: translateX(-20px);
}

.image-top .steps-section {
  transform: translateY(20px);
}

@keyframes stepsIn {
  to {
    opacity: 1;
    transform: translate(0);
  }
}

.steps-section :deep(h3) {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0 0 1rem 0;
}

/* Numbered Steps */
.steps-section :deep(ol) {
  counter-reset: step;
  list-style: none;
  padding: 0;
  margin: 0;
}

.steps-section :deep(ol li) {
  counter-increment: step;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #E8E8ED;
  position: relative;
  opacity: 0;
  transform: translateX(10px);
  animation: stepIn 0.3s ease-out forwards;
}

.steps-section :deep(ol li:last-child) {
  border-bottom: none;
}

.steps-section :deep(ol li:nth-child(1)) { animation-delay: 0.3s; }
.steps-section :deep(ol li:nth-child(2)) { animation-delay: 0.4s; }
.steps-section :deep(ol li:nth-child(3)) { animation-delay: 0.5s; }
.steps-section :deep(ol li:nth-child(4)) { animation-delay: 0.6s; }
.steps-section :deep(ol li:nth-child(5)) { animation-delay: 0.7s; }

@keyframes stepIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.steps-section :deep(ol li)::before {
  content: counter(step);
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, #0071E3, #34C759);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Bullet lists in steps */
.steps-section :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}

.steps-section :deep(ul li) {
  padding: 0.375rem 0;
  padding-left: 1.25rem;
  position: relative;
  font-size: 0.95rem;
  color: var(--color-text-secondary, #6E6E73);
}

.steps-section :deep(ul li)::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #0071E3;
}

/* Responsive */
@media (max-width: 1024px) {
  .image-left .content-grid,
  .image-right .content-grid {
    grid-template-columns: 1fr;
  }

  .image-right .image-section {
    order: 0;
  }

  .steps-section {
    transform: translateY(20px);
  }
}
</style>
