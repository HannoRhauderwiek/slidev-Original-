<!--
  KI-Schulung Komponente: Steps
  ==============================
  Nummerierte Schritte mit Animation

  Verwendung:
  <KiSteps>
    <KiStep>Schritt 1: Vorbereitung</KiStep>
    <KiStep>Schritt 2: Durchführung</KiStep>
    <KiStep>Schritt 3: Auswertung</KiStep>
  </KiSteps>
-->
<script setup lang="ts">
import { provide } from 'vue'

defineProps({
  animated: { type: Boolean, default: true },
  variant: { type: String, default: 'default' }, // default, compact, horizontal
})

provide('stepsAnimated', true)
</script>

<template>
  <div class="ki-steps" :class="[variant, { animated }]">
    <slot />
  </div>
</template>

<style scoped>
.ki-steps {
  display: flex;
  flex-direction: column;
  gap: 0;
  counter-reset: step;
}

.ki-steps.horizontal {
  flex-direction: row;
  gap: 1rem;
}

.ki-steps.compact :deep(.ki-step) {
  padding: 0.75rem 0;
}
</style>
