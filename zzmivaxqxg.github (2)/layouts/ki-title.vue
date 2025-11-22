<!--
  KI-Schulung Layout: Titel-Folie
  ================================
  Großer, prägnanter Titel mit Untertitel, Datum/Autor und subtiler Animation

  Verwendung:
  ---
  layout: ki-title
  title: Willkommen zur KI-Schulung
  subtitle: Grundlagen der künstlichen Intelligenz
  author: Max Mustermann
  date: 2024
  background: gradient  # oder: white, dark, image
  ---
-->
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Präsentationstitel' },
  subtitle: { type: String, default: '' },
  author: { type: String, default: '' },
  date: { type: String, default: '' },
  background: { type: String, default: 'gradient' }, // gradient, white, dark, image
  backgroundImage: { type: String, default: '' },
})

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})

const backgroundStyle = computed(() => {
  if (props.background === 'image' && props.backgroundImage) {
    return {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${props.backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  }
  if (props.background === 'dark') {
    return { background: 'linear-gradient(135deg, #1D1D1F 0%, #2C2C2E 100%)' }
  }
  if (props.background === 'white') {
    return { background: '#FAFAFA' }
  }
  // Default: gradient
  return {
    background: 'linear-gradient(135deg, #FAFAFA 0%, #F5F5F7 50%, #E8E8ED 100%)',
  }
})

const textColor = computed(() => {
  return props.background === 'dark' || props.background === 'image' ? '#FFFFFF' : '#1D1D1F'
})

const subtitleColor = computed(() => {
  return props.background === 'dark' || props.background === 'image' ? '#A1A1A6' : '#6E6E73'
})
</script>

<template>
  <div class="ki-title-layout" :style="backgroundStyle">
    <!-- Subtle animated background elements -->
    <div class="background-decoration">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>

    <div class="content-wrapper" :class="{ loaded: isLoaded }">
      <!-- Main Title -->
      <h1 class="title" :style="{ color: textColor }">
        {{ $slidev.configs.title || title }}
      </h1>

      <!-- Subtitle -->
      <p v-if="subtitle || $slidev.configs.subtitle" class="subtitle" :style="{ color: subtitleColor }">
        {{ $slidev.configs.subtitle || subtitle }}
      </p>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Author & Date -->
      <div class="meta" :style="{ color: subtitleColor }">
        <span v-if="author || $slidev.configs.author" class="author">
          {{ $slidev.configs.author || author }}
        </span>
        <span v-if="(author || $slidev.configs.author) && (date || $slidev.configs.date)" class="separator">•</span>
        <span v-if="date || $slidev.configs.date" class="date">
          {{ $slidev.configs.date || date }}
        </span>
      </div>

      <!-- Slot for additional content -->
      <div class="slot-content">
        <slot />
      </div>
    </div>

    <!-- Navigation hint -->
    <div class="nav-hint" :style="{ color: subtitleColor }">
      <span>Drücken Sie Leertaste zum Fortfahren</span>
      <span class="arrow">→</span>
    </div>
  </div>
</template>

<style scoped>
.ki-title-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 3rem;
}

/* Background Decoration */
.background-decoration {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.circle-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #0071E3, #AF52DE);
  top: -100px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.circle-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #34C759, #0071E3);
  bottom: -50px;
  left: -50px;
  animation: float 10s ease-in-out infinite reverse;
}

.circle-3 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #AF52DE, #FF9500);
  top: 50%;
  left: 60%;
  animation: float 12s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -20px) scale(1.05); }
}

/* Content */
.content-wrapper {
  text-align: center;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.content-wrapper.loaded {
  opacity: 1;
  transform: translateY(0);
}

.title {
  font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0 0 1rem 0;
  max-width: 900px;
}

.subtitle {
  font-family: "Inter", "SF Pro Text", -apple-system, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 2rem 0;
  max-width: 700px;
}

.divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #0071E3, #AF52DE);
  border-radius: 2px;
  margin: 0 auto 2rem;
  opacity: 0;
  animation: slideIn 0.5s ease-out 0.3s forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 80px;
  }
}

.meta {
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.separator {
  opacity: 0.5;
}

.slot-content {
  margin-top: 2rem;
}

/* Navigation Hint */
.nav-hint {
  position: absolute;
  bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.nav-hint:hover {
  opacity: 1;
}

.arrow {
  animation: bounce 1.5s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}

/* Responsive */
@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1.125rem;
  }
}
</style>
