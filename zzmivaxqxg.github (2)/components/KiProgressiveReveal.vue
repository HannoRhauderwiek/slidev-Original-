<!--
  KI-Schulung Komponente: ProgressiveReveal
  ==========================================
  Inhalte erscheinen sukzessive

  Verwendung:
  <KiProgressiveReveal :items="['Punkt 1', 'Punkt 2', 'Punkt 3']" />

  Oder mit Slots:
  <KiProgressiveReveal :count="3">
    <template #1>Erster Inhalt</template>
    <template #2>Zweiter Inhalt</template>
    <template #3>Dritter Inhalt</template>
  </KiProgressiveReveal>
-->
<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps({
  items: { type: Array as () => string[], default: () => [] },
  count: { type: Number, default: 0 },
  autoReveal: { type: Boolean, default: false },
  interval: { type: Number, default: 1500 },
  revealAll: { type: Boolean, default: false },
})

const revealedCount = ref(props.revealAll ? (props.items.length || props.count) : 0)

const totalItems = computed(() => props.items.length || props.count)

const revealNext = () => {
  if (revealedCount.value < totalItems.value) {
    revealedCount.value++
  }
}

const revealAllItems = () => {
  revealedCount.value = totalItems.value
}

const reset = () => {
  revealedCount.value = 0
}

// Auto-reveal functionality
let intervalId: ReturnType<typeof setInterval> | null = null

watch(() => props.autoReveal, (auto) => {
  if (auto && revealedCount.value < totalItems.value) {
    intervalId = setInterval(() => {
      if (revealedCount.value < totalItems.value) {
        revealNext()
      }
      else if (intervalId) {
        clearInterval(intervalId)
      }
    }, props.interval)
  }
  else if (intervalId) {
    clearInterval(intervalId)
  }
}, { immediate: true })

// Expose methods
defineExpose({ revealNext, revealAllItems, reset })
</script>

<template>
  <div class="ki-progressive-reveal">
    <!-- Items from array -->
    <template v-if="items.length > 0">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="reveal-item"
        :class="{ visible: index < revealedCount }"
        :style="{ transitionDelay: `${index * 50}ms` }"
      >
        {{ item }}
      </div>
    </template>

    <!-- Slots -->
    <template v-else>
      <div
        v-for="n in count"
        :key="n"
        class="reveal-item"
        :class="{ visible: n <= revealedCount }"
        :style="{ transitionDelay: `${(n - 1) * 50}ms` }"
      >
        <slot :name="n.toString()" />
      </div>
    </template>

    <!-- Controls -->
    <div v-if="!autoReveal && revealedCount < totalItems" class="reveal-controls">
      <button class="reveal-button" @click="revealNext">
        Weiter <span class="arrow">→</span>
      </button>
      <button class="reveal-all-button" @click="revealAllItems">
        Alle anzeigen
      </button>
    </div>
  </div>
</template>

<style scoped>
.ki-progressive-reveal {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.reveal-item {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease-out;
  padding: 0.5rem 0;
}

.reveal-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-controls {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.reveal-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: #0071E3;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.reveal-button:hover {
  background: #005bb5;
  transform: scale(1.02);
}

.reveal-button .arrow {
  transition: transform 0.2s ease-out;
}

.reveal-button:hover .arrow {
  transform: translateX(3px);
}

.reveal-all-button {
  padding: 0.625rem 1.25rem;
  background: transparent;
  color: #0071E3;
  border: 1px solid #0071E3;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.reveal-all-button:hover {
  background: rgba(0, 113, 227, 0.1);
}
</style>
