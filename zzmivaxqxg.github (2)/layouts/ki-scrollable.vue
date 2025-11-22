<!--
  KI-Schulung Layout: Scrollbare Folie
  =====================================
  Ermöglicht Scrollen wenn Inhalte größer als die Slide-Fläche sind.

  Verwendung:
  ---
  layout: ki-scrollable
  title: Langer Inhalt
  ---

  Hier kann beliebig viel Inhalt stehen...
  Der Slide wird automatisch scrollbar.
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  showScrollHint: { type: Boolean, default: true },
})

const isLoaded = ref(false)
const contentRef = ref<HTMLElement | null>(null)
const isScrollable = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 50)

  // Prüfe ob Inhalt scrollbar ist
  if (contentRef.value) {
    const checkScrollable = () => {
      if (contentRef.value) {
        isScrollable.value = contentRef.value.scrollHeight > contentRef.value.clientHeight
      }
    }
    checkScrollable()
    // Beobachte Größenänderungen
    const observer = new ResizeObserver(checkScrollable)
    observer.observe(contentRef.value)
  }
})
</script>

<template>
  <div class="ki-scrollable-layout" :class="{ loaded: isLoaded }">
    <!-- Header -->
    <header v-if="title" class="header">
      <h1 class="title">{{ title }}</h1>
      <div class="title-underline"></div>
    </header>

    <!-- Scrollable Content -->
    <main ref="contentRef" class="scrollable-content">
      <slot />
    </main>

    <!-- Scroll-Hinweis -->
    <div v-if="showScrollHint && isScrollable" class="scroll-hint">
      <span class="scroll-text">Scrollen für mehr</span>
      <span class="scroll-arrow">↓</span>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: `${($slidev.nav.currentPage / $slidev.nav.total) * 100}%` }"></div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.ki-scrollable-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  padding: 2rem 3rem;
  background: var(--color-background, #FAFAFA);
  opacity: 0;
  transition: opacity 0.3s ease-out;
  overflow: hidden;
}

.ki-scrollable-layout.loaded {
  opacity: 1;
}

/* Header */
.header {
  flex-shrink: 0;
  margin-bottom: 1.5rem;
}

.title {
  font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-text-primary, #1D1D1F);
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.2;
}

.title-underline {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #0071E3, #34C759);
  border-radius: 2px;
  margin-top: 0.75rem;
  transition: width 0.5s ease-out 0.2s;
}

.ki-scrollable-layout.loaded .title-underline {
  width: 80px;
}

/* Scrollable Content - DER WICHTIGE TEIL */
.scrollable-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 1rem;
  margin-right: -1rem;

  /* Scrollbar Styling */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

.scrollable-content::-webkit-scrollbar {
  width: 8px;
}

.scrollable-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.scrollable-content::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.scrollable-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* Content Styling */
.scrollable-content :deep(h1),
.scrollable-content :deep(h2),
.scrollable-content :deep(h3) {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.scrollable-content :deep(h1:first-child),
.scrollable-content :deep(h2:first-child),
.scrollable-content :deep(h3:first-child) {
  margin-top: 0;
}

.scrollable-content :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.scrollable-content :deep(ul),
.scrollable-content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.scrollable-content :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

/* Scroll Hint */
.scroll-hint {
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  color: var(--color-text-tertiary, #86868B);
  font-size: 0.75rem;
  opacity: 0.7;
  animation: fadeInOut 2s ease-in-out infinite;
  pointer-events: none;
}

.scroll-arrow {
  font-size: 1.25rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes fadeInOut {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.9; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

/* Footer */
.footer {
  flex-shrink: 0;
  margin-top: 1rem;
  padding-top: 1rem;
}

.progress-bar {
  width: 100%;
  height: 3px;
  background: var(--color-muted, #E8E8ED);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #0071E3, #34C759);
  border-radius: 2px;
  transition: width 0.3s ease-out;
}

/* Responsive */
@media (max-width: 768px) {
  .ki-scrollable-layout {
    padding: 1.5rem;
  }

  .title {
    font-size: 1.75rem;
  }
}
</style>
