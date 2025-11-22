<!--
  KI-Schulung Layout: Zusammenfassung/Fazit-Folie
  ================================================
  Key Takeaways mit visueller Hervorhebung

  Verwendung:
  ---
  layout: ki-summary
  title: Zusammenfassung
  subtitle: Was Sie heute gelernt haben
  cta: Jetzt ausprobieren
  ctaLink: https://example.com
  ---

  - KI ist ein mächtiges Werkzeug
  - Prompts sind der Schlüssel
  - Übung macht den Meister
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps({
  title: { type: String, default: 'Zusammenfassung' },
  subtitle: { type: String, default: '' },
  cta: { type: String, default: '' },
  ctaLink: { type: String, default: '' },
  style: { type: String, default: 'cards' }, // cards, list, numbered
})

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 50)
})

const openLink = (url: string) => {
  if (url)
    window.open(url, '_blank')
}
</script>

<template>
  <div class="ki-summary-layout" :class="[{ loaded: isLoaded }, `style-${style}`]">
    <!-- Header -->
    <header class="header">
      <div class="header-icon">📋</div>
      <h1 class="title">{{ title }}</h1>
      <p v-if="subtitle" class="subtitle">
        {{ subtitle }}
      </p>
    </header>

    <!-- Key Takeaways -->
    <div class="takeaways">
      <slot />
    </div>

    <!-- Call to Action -->
    <footer v-if="cta" class="footer">
      <button
        class="cta-button"
        :class="{ 'has-link': ctaLink }"
        @click="openLink(ctaLink)"
      >
        <span class="cta-text">{{ cta }}</span>
        <span v-if="ctaLink" class="cta-arrow">→</span>
      </button>
    </footer>

    <!-- Decorative element -->
    <div class="decoration">
      <div class="decoration-circle"></div>
    </div>
  </div>
</template>

<style scoped>
.ki-summary-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 3rem;
  background: linear-gradient(180deg, #FAFAFA 0%, #F5F5F7 100%);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.ki-summary-layout.loaded {
  opacity: 1;
}

/* Decoration */
.decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.decoration-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(0, 113, 227, 0.05), rgba(52, 199, 89, 0.05));
  top: -200px;
  right: -200px;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 2.5rem;
  z-index: 1;
}

.header-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0;
  transform: scale(0.5);
  animation: iconIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
}

@keyframes iconIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.title {
  font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0;
  opacity: 0;
  transform: translateY(20px);
  animation: titleIn 0.5s ease-out 0.2s forwards;
}

@keyframes titleIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary, #6E6E73);
  margin: 0.75rem 0 0;
  opacity: 0;
  animation: fadeIn 0.5s ease-out 0.3s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

/* Takeaways */
.takeaways {
  width: 100%;
  max-width: 800px;
  z-index: 1;
}

/* Cards Style */
.style-cards .takeaways :deep(ul) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.style-cards .takeaways :deep(ul li) {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  animation: cardIn 0.4s ease-out forwards;
  position: relative;
  border-top: 4px solid transparent;
  border-image: linear-gradient(90deg, #0071E3, #34C759) 1;
}

.style-cards .takeaways :deep(ul li:nth-child(1)) { animation-delay: 0.35s; }
.style-cards .takeaways :deep(ul li:nth-child(2)) { animation-delay: 0.45s; }
.style-cards .takeaways :deep(ul li:nth-child(3)) { animation-delay: 0.55s; }
.style-cards .takeaways :deep(ul li:nth-child(4)) { animation-delay: 0.65s; }

@keyframes cardIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* List Style */
.style-list .takeaways :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0;
}

.style-list .takeaways :deep(ul li) {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  margin-bottom: 0.75rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  font-size: 1.125rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: listIn 0.4s ease-out forwards;
}

.style-list .takeaways :deep(ul li:nth-child(1)) { animation-delay: 0.35s; }
.style-list .takeaways :deep(ul li:nth-child(2)) { animation-delay: 0.45s; }
.style-list .takeaways :deep(ul li:nth-child(3)) { animation-delay: 0.55s; }
.style-list .takeaways :deep(ul li:nth-child(4)) { animation-delay: 0.65s; }

@keyframes listIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.style-list .takeaways :deep(ul li)::before {
  content: "✓";
  flex-shrink: 0;
  width: 1.75rem;
  height: 1.75rem;
  background: linear-gradient(135deg, #34C759, #32D74B);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}

/* Numbered Style */
.style-numbered .takeaways :deep(ul) {
  counter-reset: takeaway;
  list-style: none;
  padding: 0;
  margin: 0;
}

.style-numbered .takeaways :deep(ul li) {
  counter-increment: takeaway;
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid #E8E8ED;
  font-size: 1.125rem;
  line-height: 1.5;
  opacity: 0;
  transform: translateY(15px);
  animation: numberedIn 0.4s ease-out forwards;
}

.style-numbered .takeaways :deep(ul li:last-child) {
  border-bottom: none;
}

.style-numbered .takeaways :deep(ul li:nth-child(1)) { animation-delay: 0.35s; }
.style-numbered .takeaways :deep(ul li:nth-child(2)) { animation-delay: 0.45s; }
.style-numbered .takeaways :deep(ul li:nth-child(3)) { animation-delay: 0.55s; }
.style-numbered .takeaways :deep(ul li:nth-child(4)) { animation-delay: 0.65s; }

@keyframes numberedIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.style-numbered .takeaways :deep(ul li)::before {
  content: counter(takeaway);
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #0071E3, #AF52DE);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
}

/* Footer / CTA */
.footer {
  margin-top: 2.5rem;
  z-index: 1;
  opacity: 0;
  animation: fadeIn 0.5s ease-out 0.7s forwards;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #0071E3, #005bb5);
  color: white;
  border: none;
  border-radius: 2rem;
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease-out;
  box-shadow: 0 4px 20px rgba(0, 113, 227, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 30px rgba(0, 113, 227, 0.4);
}

.cta-button.has-link {
  cursor: pointer;
}

.cta-arrow {
  transition: transform 0.2s ease-out;
}

.cta-button:hover .cta-arrow {
  transform: translateX(4px);
}

/* Responsive */
@media (max-width: 768px) {
  .ki-summary-layout {
    padding: 2rem;
  }

  .title {
    font-size: 2rem;
  }

  .style-cards .takeaways :deep(ul) {
    grid-template-columns: 1fr;
  }
}
</style>
