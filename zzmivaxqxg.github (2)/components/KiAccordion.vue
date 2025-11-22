<!--
  KI-Schulung Komponente: Accordion
  ==================================
  Aufklappbare Unterkategorien mit Smooth-Animation

  Verwendung:
  <KiAccordion>
    <KiAccordionItem title="Was ist KI?" icon="🤖">
      Künstliche Intelligenz ist...
    </KiAccordionItem>
    <KiAccordionItem title="Wie funktioniert ML?" icon="🧠">
      Machine Learning basiert auf...
    </KiAccordionItem>
  </KiAccordion>
-->
<script setup lang="ts">
import { provide, ref } from 'vue'

defineProps({
  allowMultiple: { type: Boolean, default: false },
})

const openItems = ref<Set<string>>(new Set())

const toggleItem = (id: string, allowMultiple: boolean) => {
  if (allowMultiple) {
    if (openItems.value.has(id)) {
      openItems.value.delete(id)
    }
    else {
      openItems.value.add(id)
    }
  }
  else {
    if (openItems.value.has(id)) {
      openItems.value.clear()
    }
    else {
      openItems.value.clear()
      openItems.value.add(id)
    }
  }
  // Trigger reactivity
  openItems.value = new Set(openItems.value)
}

provide('accordion', { openItems, toggleItem })
</script>

<template>
  <div class="ki-accordion">
    <slot />
  </div>
</template>

<style scoped>
.ki-accordion {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}
</style>
