<!--
  KI-Schulung Komponente: Highlight
  ==================================
  Hervorhebung für wichtige Punkte

  Verwendung:
  <KiHighlight type="positive">Empfohlen</KiHighlight>
  <KiHighlight type="negative">Vermeiden</KiHighlight>
  <KiHighlight type="info">Hinweis</KiHighlight>
-->
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  type: { type: String, default: 'info' }, // positive, negative, info, warning, neutral
  icon: { type: String, default: '' },
  underline: { type: Boolean, default: false },
  strikethrough: { type: Boolean, default: false },
  pulse: { type: Boolean, default: false },
})

const typeClass = computed(() => `type-${props.type}`)

const defaultIcon = computed(() => {
  if (props.icon)
    return props.icon
  switch (props.type) {
    case 'positive': return '✓'
    case 'negative': return '✗'
    case 'warning': return '⚠'
    case 'info': return 'ℹ'
    default: return ''
  }
})
</script>

<template>
  <span
    class="ki-highlight"
    :class="[
      typeClass,
      {
        underline,
        strikethrough,
        pulse,
      },
    ]"
  >
    <span v-if="defaultIcon" class="highlight-icon">{{ defaultIcon }}</span>
    <span class="highlight-text"><slot /></span>
  </span>
</template>

<style scoped>
.ki-highlight {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s ease-out;
}

/* Types */
.type-positive {
  background: rgba(52, 199, 89, 0.15);
  color: #248A3D;
}

.type-negative {
  background: rgba(255, 59, 48, 0.15);
  color: #D70015;
}

.type-info {
  background: rgba(0, 113, 227, 0.15);
  color: #0071E3;
}

.type-warning {
  background: rgba(255, 149, 0, 0.15);
  color: #C93400;
}

.type-neutral {
  background: rgba(134, 134, 139, 0.15);
  color: #6E6E73;
}

/* Modifiers */
.underline .highlight-text {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
}

.type-positive.underline .highlight-text {
  text-decoration-color: #34C759;
}

.strikethrough .highlight-text {
  text-decoration: line-through;
  opacity: 0.7;
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 currentColor;
    opacity: 1;
  }
  50% {
    box-shadow: 0 0 0 4px transparent;
    opacity: 0.85;
  }
}

/* Icon */
.highlight-icon {
  font-size: 0.9em;
}
</style>
