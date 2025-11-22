<!--
  KI-Schulung Komponente: AccordionItem
  ======================================
  Einzelnes aufklappbares Element

  Verwendung:
  <KiAccordionItem title="Titel" icon="🔍" :defaultOpen="false">
    Inhalt hier...
  </KiAccordionItem>
-->
<script setup lang="ts">
import { computed, inject, onMounted, ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: '' },
  defaultOpen: { type: Boolean, default: false },
  variant: { type: String, default: 'default' }, // default, success, warning, info
})

const id = ref(`accordion-${Math.random().toString(36).substr(2, 9)}`)
const contentRef = ref<HTMLElement | null>(null)
const contentHeight = ref(0)

const accordion = inject<{
  openItems: { value: Set<string> }
  toggleItem: (id: string, allowMultiple: boolean) => void
}>('accordion')

const isOpen = computed(() => accordion?.openItems.value.has(id.value) || false)

const toggle = () => {
  accordion?.toggleItem(id.value, false)
  if (contentRef.value) {
    contentHeight.value = contentRef.value.scrollHeight
  }
}

onMounted(() => {
  if (props.defaultOpen) {
    accordion?.toggleItem(id.value, true)
  }
  if (contentRef.value) {
    contentHeight.value = contentRef.value.scrollHeight
  }
})

const variantClass = computed(() => `variant-${props.variant}`)
</script>

<template>
  <div class="ki-accordion-item" :class="[{ open: isOpen }, variantClass]">
    <button class="accordion-header" :aria-expanded="isOpen" @click="toggle">
      <span v-if="icon" class="accordion-icon">{{ icon }}</span>
      <span class="accordion-title">{{ title }}</span>
      <span class="accordion-arrow" :class="{ rotated: isOpen }">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </button>
    <div
      ref="contentRef"
      class="accordion-content"
      :style="{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }"
    >
      <div class="accordion-content-inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.ki-accordion-item {
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #E8E8ED;
  transition: all 0.2s ease-out;
}

.ki-accordion-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.ki-accordion-item.open {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Variants */
.variant-success .accordion-header { border-left: 4px solid #34C759; }
.variant-warning .accordion-header { border-left: 4px solid #FF9500; }
.variant-info .accordion-header { border-left: 4px solid #0071E3; }

/* Header */
.accordion-header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s ease-out;
}

.accordion-header:hover {
  background: rgba(0, 0, 0, 0.02);
}

.accordion-icon {
  font-size: 1.25rem;
  margin-right: 0.75rem;
}

.accordion-title {
  flex: 1;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary, #1D1D1F);
}

.accordion-arrow {
  color: var(--color-text-tertiary, #86868B);
  transition: transform 0.25s ease-out;
}

.accordion-arrow.rotated {
  transform: rotate(180deg);
}

/* Content */
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.accordion-content-inner {
  padding: 0 1.25rem 1.25rem;
  color: var(--color-text-secondary, #6E6E73);
  font-size: 0.95rem;
  line-height: 1.6;
}

.accordion-content-inner :deep(p) {
  margin: 0 0 0.75rem 0;
}

.accordion-content-inner :deep(p:last-child) {
  margin-bottom: 0;
}

.accordion-content-inner :deep(ul) {
  margin: 0.5rem 0;
  padding-left: 1.25rem;
}

.accordion-content-inner :deep(ul li) {
  margin: 0.25rem 0;
}

.accordion-content-inner :deep(code) {
  background: #F5F5F7;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-family: "SF Mono", monospace;
  font-size: 0.875em;
  color: #AF52DE;
}
</style>
