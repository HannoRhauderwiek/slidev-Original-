<!--
  KI-Schulung Layout: Inhalts-Folie
  ==================================
  Standard-Folie mit Titel, Bullet-Points und animiertem Entrance

  Verwendung:
  ---
  layout: ki-content
  title: Grundlagen der KI
  bullets: icon  # icon, check, arrow, number, none
  animate: stagger  # stagger, fade, slide, none
  ---

  - Erster Punkt mit wichtiger Information
  - Zweiter Punkt mit Details
  - Dritter Punkt als Zusammenfassung
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  bullets: { type: String, default: 'icon' }, // icon, check, arrow, number, none
  animate: { type: String, default: 'stagger' }, // stagger, fade, slide, none
  columns: { type: Number, default: 1 },
})

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 50)
})

const getBulletClass = () => {
  switch (props.bullets) {
    case 'check': return 'bullet-check'
    case 'arrow': return 'bullet-arrow'
    case 'number': return 'bullet-number'
    case 'none': return 'bullet-none'
    default: return 'bullet-icon'
  }
}

const getAnimationClass = () => {
  switch (props.animate) {
    case 'fade': return 'animate-fade'
    case 'slide': return 'animate-slide'
    case 'none': return ''
    default: return 'animate-stagger'
  }
}
</script>

<template>
  <div class="ki-content-layout" :class="{ loaded: isLoaded }">
    <!-- Header -->
    <header class="header">
      <h1 class="title">{{ title }}</h1>
      <div class="title-underline"></div>
    </header>

    <!-- Main Content -->
    <main
      class="content"
      :class="[getBulletClass(), getAnimationClass(), `columns-${columns}`]"
    >
      <slot />
    </main>

    <!-- Footer with slide number -->
    <footer class="footer">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: `${($slidev.nav.currentPage / $slidev.nav.total) * 100}%` }"></div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.ki-content-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 3rem 4rem;
  background: var(--color-background, #FAFAFA);
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.ki-content-layout.loaded {
  opacity: 1;
}

/* Header */
.header {
  margin-bottom: 2rem;
}

.title {
  font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
  font-size: 2.5rem;
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

.ki-content-layout.loaded .title-underline {
  width: 80px;
}

/* Content Area */
.content {
  flex: 1;
  overflow: auto;
}

.content.columns-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.content.columns-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* Bullet Styles */
.content :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0;
}

.content :deep(ul li) {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--color-text-primary, #1D1D1F);
}

/* Icon bullets (default) */
.bullet-icon :deep(ul li)::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #0071E3;
  font-size: 1.5rem;
  line-height: 1;
  top: 0.2rem;
}

/* Check bullets */
.bullet-check :deep(ul li)::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #34C759;
  font-weight: 700;
  font-size: 1.1rem;
}

/* Arrow bullets */
.bullet-arrow :deep(ul li)::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #0071E3;
  font-weight: 500;
}

/* No bullets */
.bullet-none :deep(ul li) {
  padding-left: 0;
}

.bullet-none :deep(ul li)::before {
  display: none;
}

/* Number bullets */
.bullet-number :deep(ul) {
  counter-reset: item;
}

.bullet-number :deep(ul li) {
  counter-increment: item;
  padding-left: 2.5rem;
}

.bullet-number :deep(ul li)::before {
  content: counter(item);
  position: absolute;
  left: 0;
  width: 1.75rem;
  height: 1.75rem;
  background: #0071E3;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
}

/* Animations */
.animate-stagger :deep(ul li) {
  opacity: 0;
  transform: translateY(15px);
  animation: staggerIn 0.4s ease-out forwards;
}

.animate-stagger :deep(ul li:nth-child(1)) { animation-delay: 0.1s; }
.animate-stagger :deep(ul li:nth-child(2)) { animation-delay: 0.18s; }
.animate-stagger :deep(ul li:nth-child(3)) { animation-delay: 0.26s; }
.animate-stagger :deep(ul li:nth-child(4)) { animation-delay: 0.34s; }
.animate-stagger :deep(ul li:nth-child(5)) { animation-delay: 0.42s; }
.animate-stagger :deep(ul li:nth-child(6)) { animation-delay: 0.50s; }
.animate-stagger :deep(ul li:nth-child(7)) { animation-delay: 0.58s; }
.animate-stagger :deep(ul li:nth-child(8)) { animation-delay: 0.66s; }

@keyframes staggerIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade :deep(ul li) {
  opacity: 0;
  animation: fadeIn 0.5s ease-out 0.2s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.animate-slide :deep(ul li) {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.4s ease-out 0.2s forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Footer */
.footer {
  margin-top: auto;
  padding-top: 1.5rem;
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
  .ki-content-layout {
    padding: 2rem;
  }

  .title {
    font-size: 2rem;
  }

  .content :deep(ul li) {
    font-size: 1.1rem;
  }

  .content.columns-2,
  .content.columns-3 {
    grid-template-columns: 1fr;
  }
}
</style>
