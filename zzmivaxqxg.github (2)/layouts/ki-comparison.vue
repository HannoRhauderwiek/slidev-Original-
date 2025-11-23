<!--
  KI-Schulung Layout: Vergleichs-Folie
  =====================================
  2-Spalten Layout für Pro/Contra, Vorher/Nachher, etc.
  Elemente werden durch v-click schrittweise eingeblendet.

  Verwendung:
  ---
  layout: ki-comparison
  title: KI vs. Traditionelle Methoden
  leftTitle: Mit KI
  rightTitle: Ohne KI
  leftType: positive   # positive, neutral
  rightType: negative  # negative, neutral
  ---

  ::left::
  - Schnellere Verarbeitung
  - Automatische Optimierung

  ::right::
  - Manuelle Prozesse
  - Zeitaufwendig
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps({
  title: { type: String, default: 'Vergleich' },
  leftTitle: { type: String, default: 'Option A' },
  rightTitle: { type: String, default: 'Option B' },
  leftType: { type: String, default: 'positive' }, // positive, neutral
  rightType: { type: String, default: 'negative' }, // negative, neutral
  dividerStyle: { type: String, default: 'line' }, // line, vs, arrow
})

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 50)
})
</script>

<template>
  <div class="ki-comparison-layout" :class="{ loaded: isLoaded }">
    <!-- Header -->
    <header class="header">
      <h1 class="title">{{ title }}</h1>
    </header>

    <!-- Comparison Grid -->
    <div class="comparison-grid">
      <!-- Left Column -->
      <div class="column column-left" :class="leftType">
        <div class="column-header">
          <h2 class="column-title">{{ leftTitle }}</h2>
        </div>
        <div class="column-content">
          <slot name="left" />
        </div>
      </div>

      <!-- Divider -->
      <div class="divider" :class="dividerStyle">
        <template v-if="dividerStyle === 'vs'">
          <span class="vs-badge">VS</span>
        </template>
        <template v-else-if="dividerStyle === 'arrow'">
          <span class="arrow-icon">→</span>
        </template>
        <div v-else class="divider-line"></div>
      </div>

      <!-- Right Column -->
      <div class="column column-right" :class="rightType">
        <div class="column-header">
          <h2 class="column-title">{{ rightTitle }}</h2>
        </div>
        <div class="column-content">
          <slot name="right" />
        </div>
      </div>
    </div>

    <!-- Optional footer slot -->
    <footer class="footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped>
.ki-comparison-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.5rem 3rem;
  background: var(--color-background, #FAFAFA);
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.ki-comparison-layout.loaded {
  opacity: 1;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0;
}

/* Grid */
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.5rem;
  flex: 1;
  align-items: stretch;
}

/* Columns */
.column {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  opacity: 0;
  transform: translateY(20px);
  animation: columnIn 0.5s ease-out forwards;
}

.column-left {
  animation-delay: 0.1s;
}

.column-right {
  animation-delay: 0.3s;
}

@keyframes columnIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Positive Column */
.column.positive {
  border-top: 4px solid #34C759;
  background: linear-gradient(180deg, rgba(52, 199, 89, 0.05) 0%, white 100%);
}

/* Negative Column */
.column.negative {
  border-top: 4px solid #FF3B30;
  background: linear-gradient(180deg, rgba(255, 59, 48, 0.05) 0%, white 100%);
}

/* Neutral Column */
.column.neutral {
  border-top: 4px solid #86868B;
}

/* Column Header */
.column-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #E8E8ED;
}

.column-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--color-text-primary, #1D1D1F);
}

/* Column Content */
.column-content :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0;
}

.column-content :deep(ul li) {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  font-size: 1.05rem;
  line-height: 1.5;
  color: var(--color-text-primary, #1D1D1F);
}

/* Positive list items */
.column.positive .column-content :deep(ul li)::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #34C759;
  font-weight: 700;
}

/* Negative list items */
.column.negative .column-content :deep(ul li) {
  opacity: 0.75;
}

.column.negative .column-content :deep(ul li)::before {
  content: "✗";
  position: absolute;
  left: 0;
  color: #FF3B30;
  font-weight: 700;
}

/* Neutral list items */
.column.neutral .column-content :deep(ul li)::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #86868B;
}

/* Divider */
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  opacity: 0;
  animation: fadeIn 0.3s ease-out 0.2s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.divider-line {
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #E8E8ED, #E8E8ED, transparent);
  border-radius: 1px;
}

.vs-badge {
  background: linear-gradient(135deg, #0071E3, #AF52DE);
  color: white;
  font-weight: 700;
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.arrow-icon {
  font-size: 1.5rem;
  color: #0071E3;
  background: rgba(0, 113, 227, 0.1);
  padding: 0.5rem;
  border-radius: 50%;
}

/* Footer */
.footer {
  margin-top: 1rem;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .divider {
    display: none;
  }

  .column-left, .column-right {
    animation-delay: 0.1s;
  }
}
</style>
