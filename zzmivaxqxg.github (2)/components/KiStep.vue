<!--
  KI-Schulung Komponente: Step
  =============================
  Einzelner Schritt

  Verwendung:
  <KiStep :number="1" status="complete">Erster Schritt</KiStep>
-->
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  number: { type: Number, default: 0 },
  status: { type: String, default: 'default' }, // default, active, complete
  icon: { type: String, default: '' },
})

const isVisible = ref(false)
const stepNumber = ref(props.number)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, (props.number || 1) * 100)
})

const statusClass = computed(() => `status-${props.status}`)

const displayIcon = computed(() => {
  if (props.icon)
    return props.icon
  if (props.status === 'complete')
    return '✓'
  return ''
})
</script>

<template>
  <div class="ki-step" :class="[statusClass, { visible: isVisible }]">
    <div class="step-indicator">
      <span v-if="displayIcon" class="step-icon">{{ displayIcon }}</span>
      <span v-else class="step-number">{{ number || '' }}</span>
    </div>
    <div class="step-connector"></div>
    <div class="step-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ki-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  position: relative;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease-out;
  counter-increment: step;
}

.ki-step.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Connector line */
.step-connector {
  position: absolute;
  left: 1rem;
  top: 3.25rem;
  width: 2px;
  height: calc(100% - 1.5rem);
  background: #E8E8ED;
}

.ki-step:last-child .step-connector {
  display: none;
}

/* Indicator */
.step-indicator {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5F5F7;
  border-radius: 50%;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--color-text-secondary, #6E6E73);
  transition: all 0.25s ease-out;
  z-index: 1;
}

.step-number::before {
  content: counter(step);
}

/* Status variants */
.status-active .step-indicator {
  background: linear-gradient(135deg, #0071E3, #AF52DE);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 113, 227, 0.3);
}

.status-complete .step-indicator {
  background: #34C759;
  color: white;
}

.status-complete .step-connector {
  background: #34C759;
}

/* Content */
.step-content {
  flex: 1;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-text-primary, #1D1D1F);
  padding-top: 0.25rem;
}

.status-complete .step-content {
  color: var(--color-text-secondary, #6E6E73);
}
</style>
