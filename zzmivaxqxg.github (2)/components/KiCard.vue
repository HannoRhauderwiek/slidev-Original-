<!--
  KI-Schulung Komponente: Card
  =============================
  Vielseitige Karten-Komponente

  Verwendung:
  <KiCard title="Titel" icon="🤖" type="info">
    Inhalt hier...
  </KiCard>
-->
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  icon: { type: String, default: '' },
  type: { type: String, default: 'default' }, // default, positive, negative, info, warning
  hoverable: { type: Boolean, default: true },
  animate: { type: Boolean, default: true },
  delay: { type: Number, default: 0 },
})

const isVisible = ref(false)

onMounted(() => {
  if (props.animate) {
    setTimeout(() => {
      isVisible.value = true
    }, props.delay)
  }
  else {
    isVisible.value = true
  }
})

const typeClass = computed(() => `type-${props.type}`)
</script>

<template>
  <div
    class="ki-card"
    :class="[
      typeClass,
      {
        hoverable,
        visible: isVisible,
        animated: animate,
      },
    ]"
  >
    <div v-if="title || icon" class="card-header">
      <span v-if="icon" class="card-icon">{{ icon }}</span>
      <h3 v-if="title" class="card-title">{{ title }}</h3>
    </div>
    <div class="card-content">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.ki-card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  transition: all 0.25s ease-out;
}

.ki-card.animated {
  opacity: 0;
  transform: translateY(15px);
}

.ki-card.animated.visible {
  opacity: 1;
  transform: translateY(0);
}

.ki-card.hoverable:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

/* Types */
.type-positive {
  border-top: 4px solid #34C759;
}

.type-negative {
  border-top: 4px solid #FF3B30;
}

.type-info {
  border-top: 4px solid #0071E3;
}

.type-warning {
  border-top: 4px solid #FF9500;
}

/* Header */
.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #E8E8ED;
}

.card-icon {
  font-size: 1.5rem;
}

.card-title {
  flex: 1;
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0;
}

/* Content */
.card-content {
  color: var(--color-text-secondary, #6E6E73);
  font-size: 0.95rem;
  line-height: 1.6;
}

.card-content :deep(p) {
  margin: 0 0 0.75rem 0;
}

.card-content :deep(p:last-child) {
  margin-bottom: 0;
}

.card-content :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}

.card-content :deep(ul li) {
  padding: 0.25rem 0;
  padding-left: 1.25rem;
  position: relative;
}

.card-content :deep(ul li)::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #0071E3;
}

/* Footer */
.card-footer {
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid #E8E8ED;
}
</style>
