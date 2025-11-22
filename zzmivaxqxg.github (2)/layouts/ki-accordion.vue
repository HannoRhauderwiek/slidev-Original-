<!--
  KI-Schulung Layout: Aufklappbar-Unterkategorien-Folie
  ======================================================
  Folie mit klickbaren Kategorien die aufklappen

  Verwendung:
  ---
  layout: ki-accordion
  title: Häufige Fragen
  ---

  Inhalt mit <KiAccordion> Komponente
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
})

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 50)
})
</script>

<template>
  <div class="ki-accordion-layout" :class="{ loaded: isLoaded }">
    <!-- Header -->
    <header v-if="title" class="header">
      <h1 class="title">{{ title }}</h1>
      <p v-if="subtitle" class="subtitle">
        {{ subtitle }}
      </p>
    </header>

    <!-- Content -->
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ki-accordion-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.5rem 3rem;
  background: var(--color-background, #FAFAFA);
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.ki-accordion-layout.loaded {
  opacity: 1;
}

/* Header */
.header {
  margin-bottom: 2rem;
  text-align: center;
}

.title {
  font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0;
}

.subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary, #6E6E73);
  margin: 0.5rem 0 0;
}

/* Content */
.content {
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  overflow: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .ki-accordion-layout {
    padding: 1.5rem;
  }

  .title {
    font-size: 1.75rem;
  }
}
</style>
