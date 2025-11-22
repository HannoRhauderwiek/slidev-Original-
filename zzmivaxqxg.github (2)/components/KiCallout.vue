<!--
  KI-Schulung Komponente: Callout
  ================================
  Hervorgehobene Info-Box

  Verwendung:
  <KiCallout type="info" title="Hinweis">
    Wichtige Information hier...
  </KiCallout>
-->
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  type: { type: String, default: 'info' }, // info, success, warning, danger, tip
  title: { type: String, default: '' },
  icon: { type: String, default: '' },
  collapsible: { type: Boolean, default: false },
})

const isOpen = defineModel('open', { default: true })

const defaultIcon = computed(() => {
  if (props.icon)
    return props.icon
  switch (props.type) {
    case 'success': return '✓'
    case 'warning': return '⚠'
    case 'danger': return '✗'
    case 'tip': return '💡'
    default: return 'ℹ'
  }
})

const defaultTitle = computed(() => {
  if (props.title)
    return props.title
  switch (props.type) {
    case 'success': return 'Erfolg'
    case 'warning': return 'Warnung'
    case 'danger': return 'Achtung'
    case 'tip': return 'Tipp'
    default: return 'Info'
  }
})

const typeClass = computed(() => `type-${props.type}`)

const toggle = () => {
  if (props.collapsible) {
    isOpen.value = !isOpen.value
  }
}
</script>

<template>
  <div class="ki-callout" :class="[typeClass, { collapsible, open: isOpen }]">
    <div class="callout-header" :class="{ clickable: collapsible }" @click="toggle">
      <span class="callout-icon">{{ defaultIcon }}</span>
      <span class="callout-title">{{ defaultTitle }}</span>
      <span v-if="collapsible" class="callout-toggle">
        {{ isOpen ? '−' : '+' }}
      </span>
    </div>
    <div v-show="isOpen" class="callout-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ki-callout {
  border-radius: 0.75rem;
  overflow: hidden;
  margin: 1rem 0;
}

/* Types */
.type-info {
  background: rgba(0, 113, 227, 0.08);
  border-left: 4px solid #0071E3;
}

.type-success {
  background: rgba(52, 199, 89, 0.08);
  border-left: 4px solid #34C759;
}

.type-warning {
  background: rgba(255, 149, 0, 0.08);
  border-left: 4px solid #FF9500;
}

.type-danger {
  background: rgba(255, 59, 48, 0.08);
  border-left: 4px solid #FF3B30;
}

.type-tip {
  background: rgba(175, 82, 222, 0.08);
  border-left: 4px solid #AF52DE;
}

/* Header */
.callout-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
}

.callout-header.clickable {
  cursor: pointer;
}

.callout-header.clickable:hover {
  background: rgba(0, 0, 0, 0.03);
}

.callout-icon {
  font-size: 1rem;
}

.type-info .callout-icon { color: #0071E3; }
.type-success .callout-icon { color: #34C759; }
.type-warning .callout-icon { color: #FF9500; }
.type-danger .callout-icon { color: #FF3B30; }
.type-tip .callout-icon { color: #AF52DE; }

.callout-title {
  flex: 1;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-text-primary, #1D1D1F);
}

.callout-toggle {
  font-size: 1.25rem;
  font-weight: 300;
  color: var(--color-text-tertiary, #86868B);
  transition: transform 0.2s ease-out;
}

/* Content */
.callout-content {
  padding: 0 1rem 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-secondary, #6E6E73);
}

.callout-content :deep(p) {
  margin: 0 0 0.5rem 0;
}

.callout-content :deep(p:last-child) {
  margin-bottom: 0;
}

.callout-content :deep(code) {
  background: rgba(0, 0, 0, 0.06);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-family: "SF Mono", monospace;
  font-size: 0.875em;
}
</style>
