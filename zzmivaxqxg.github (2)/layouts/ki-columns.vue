<!--
  KI-Schulung Layout: Spalten-Folie
  ==================================
  Flexibles 2, 3 oder 4 Spalten-Layout

  Verwendung:
  ---
  layout: ki-columns
  title: KI-Anwendungsbereiche
  columns: 3
  ---

  ::col1::
  ### Text-KI
  GPT, Claude, etc.

  ::col2::
  ### Bild-KI
  DALL-E, Midjourney

  ::col3::
  ### Code-KI
  Copilot, Cursor
-->
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  columns: { type: Number, default: 2 }, // 2, 3, 4
  gap: { type: String, default: 'normal' }, // small, normal, large
  equalHeight: { type: Boolean, default: true },
  animate: { type: Boolean, default: true },
})

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 50)
})

const gridClass = computed(() => `grid-${props.columns}`)
const gapClass = computed(() => `gap-${props.gap}`)
</script>

<template>
  <div class="ki-columns-layout" :class="{ loaded: isLoaded }">
    <!-- Header -->
    <header v-if="title" class="header">
      <h1 class="title">{{ title }}</h1>
    </header>

    <!-- Columns Grid -->
    <div
      class="columns-grid"
      :class="[gridClass, gapClass, { 'equal-height': equalHeight, animated: animate }]"
    >
      <!-- Column 1 -->
      <div class="column column-1">
        <slot name="col1" />
      </div>

      <!-- Column 2 -->
      <div class="column column-2">
        <slot name="col2" />
      </div>

      <!-- Column 3 (if columns >= 3) -->
      <div v-if="columns >= 3" class="column column-3">
        <slot name="col3" />
      </div>

      <!-- Column 4 (if columns === 4) -->
      <div v-if="columns === 4" class="column column-4">
        <slot name="col4" />
      </div>
    </div>

    <!-- Footer slot for additional content -->
    <div class="footer-slot">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ki-columns-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.5rem 3rem;
  background: var(--color-background, #FAFAFA);
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.ki-columns-layout.loaded {
  opacity: 1;
}

/* Header */
.header {
  margin-bottom: 2rem;
}

.title {
  font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0;
}

/* Columns Grid */
.columns-grid {
  display: grid;
  flex: 1;
  overflow: hidden;
}

/* Grid variants */
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* Gap variants */
.gap-small { gap: 1rem; }
.gap-normal { gap: 1.5rem; }
.gap-large { gap: 2.5rem; }

/* Equal height columns */
.equal-height .column {
  display: flex;
  flex-direction: column;
}

/* Column styling */
.column {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  overflow: auto;
}

/* Animated columns */
.animated .column {
  opacity: 0;
  transform: translateY(20px);
  animation: columnIn 0.4s ease-out forwards;
}

.animated .column-1 { animation-delay: 0.1s; }
.animated .column-2 { animation-delay: 0.2s; }
.animated .column-3 { animation-delay: 0.3s; }
.animated .column-4 { animation-delay: 0.4s; }

@keyframes columnIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Column content styling */
.column :deep(h2),
.column :deep(h3) {
  font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0 0 1rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #0071E3;
}

.column :deep(p) {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-secondary, #6E6E73);
  margin: 0 0 0.75rem 0;
}

.column :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0;
}

.column :deep(ul li) {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--color-text-primary, #1D1D1F);
}

.column :deep(ul li)::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #0071E3;
  font-weight: 700;
}

.column :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
}

.column :deep(code) {
  background: #F5F5F7;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-family: "SF Mono", monospace;
  font-size: 0.875em;
  color: #AF52DE;
}

/* Different column accent colors */
.column-1 :deep(h2),
.column-1 :deep(h3) {
  border-bottom-color: #0071E3;
}

.column-2 :deep(h2),
.column-2 :deep(h3) {
  border-bottom-color: #34C759;
}

.column-3 :deep(h2),
.column-3 :deep(h3) {
  border-bottom-color: #AF52DE;
}

.column-4 :deep(h2),
.column-4 :deep(h3) {
  border-bottom-color: #FF9500;
}

/* Footer slot */
.footer-slot {
  margin-top: 1.5rem;
}

.footer-slot:empty {
  display: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .grid-3,
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .ki-columns-layout {
    padding: 1.5rem;
  }

  .columns-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
