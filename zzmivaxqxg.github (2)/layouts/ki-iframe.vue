<!--
  KI-Schulung Layout: Webseite-Einbettung-Folie
  ==============================================
  iframe für externe Webseiten mit Fallback

  Verwendung:
  ---
  layout: ki-iframe
  title: Live Demo
  url: https://chat.openai.com
  height: 80%
  showUrl: true
  ---
-->
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  url: { type: String, default: '' },
  height: { type: String, default: '75%' },
  showUrl: { type: Boolean, default: true },
  allowFullscreen: { type: Boolean, default: true },
  fullscreen: { type: Boolean, default: false }, // Fullscreen-Modus ohne UI
})

const isLoaded = ref(false)
const iframeLoaded = ref(false)
const hasError = ref(false)
const urlInput = ref(props.url)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 50)
})

const loadUrl = (newUrl: string) => {
  urlInput.value = newUrl
  hasError.value = false
  iframeLoaded.value = false
}

const onIframeLoad = () => {
  iframeLoaded.value = true
}

const onIframeError = () => {
  hasError.value = true
}

const openInNewTab = () => {
  window.open(urlInput.value, '_blank')
}

const containerHeight = computed(() => {
  return props.height
})
</script>

<template>
  <div class="ki-iframe-layout" :class="{ loaded: isLoaded, fullscreen: fullscreen }">
    <!-- Header (nur wenn nicht fullscreen) -->
    <header v-if="!fullscreen && (title || showUrl)" class="header">
      <h1 v-if="title" class="title">{{ title }}</h1>

      <!-- URL Bar -->
      <div v-if="showUrl" class="url-bar">
        <span class="url-icon">🔗</span>
        <input
          v-model="urlInput"
          type="text"
          class="url-input"
          placeholder="URL eingeben..."
          @keydown.enter="loadUrl(urlInput)"
        />
        <button class="url-go" @click="loadUrl(urlInput)">
          Los
        </button>
        <button class="url-external" title="In neuem Tab öffnen" @click="openInNewTab">
          ↗
        </button>
      </div>
    </header>

    <!-- iframe Container -->
    <div class="iframe-wrapper" :style="{ height: fullscreen ? '100%' : containerHeight }">
      <!-- Loading State -->
      <div v-if="!iframeLoaded && !hasError && urlInput" class="loading-state">
        <div class="loading-spinner"></div>
        <p>Lade Webseite...</p>
      </div>

      <!-- Error State -->
      <div v-if="hasError" class="error-state">
        <span class="error-icon">⚠️</span>
        <h3>Webseite konnte nicht geladen werden</h3>
        <p>Die URL ist möglicherweise blockiert oder nicht verfügbar.</p>
        <button class="btn-retry" @click="loadUrl(urlInput)">
          Erneut versuchen
        </button>
        <button class="btn-external" @click="openInNewTab">
          In neuem Tab öffnen ↗
        </button>
      </div>

      <!-- Placeholder -->
      <div v-if="!urlInput" class="placeholder-state">
        <span class="placeholder-icon">🌐</span>
        <p>Geben Sie eine URL ein, um eine Webseite einzubetten</p>
      </div>

      <!-- iframe -->
      <iframe
        v-if="urlInput && !hasError"
        :src="urlInput"
        class="iframe-element"
        :class="{ visible: iframeLoaded }"
        :allowfullscreen="allowFullscreen"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        @load="onIframeLoad"
        @error="onIframeError"
      />
    </div>

    <!-- Optional content slot (nur wenn nicht fullscreen) -->
    <div v-if="!fullscreen" class="content-slot">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ki-iframe-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem 3rem;
  background: var(--color-background, #FAFAFA);
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.ki-iframe-layout.loaded {
  opacity: 1;
}

/* Fullscreen-Modus */
.ki-iframe-layout.fullscreen {
  padding: 0;
  background: transparent;
}

.ki-iframe-layout.fullscreen .iframe-wrapper {
  border-radius: 0;
  box-shadow: none;
}

/* Header */
.header {
  margin-bottom: 1rem;
}

.title {
  font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0 0 0.75rem 0;
}

/* URL Bar */
.url-bar {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 0.75rem;
  padding: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  gap: 0.5rem;
}

.url-icon {
  padding-left: 0.5rem;
  font-size: 1rem;
}

.url-input {
  flex: 1;
  border: none;
  background: transparent;
  font-family: "SF Mono", monospace;
  font-size: 0.875rem;
  color: var(--color-text-primary, #1D1D1F);
  padding: 0.375rem;
  outline: none;
}

.url-input::placeholder {
  color: var(--color-text-tertiary, #86868B);
}

.url-go,
.url-external {
  padding: 0.5rem 1rem;
  background: #0071E3;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.url-go:hover,
.url-external:hover {
  background: #005bb5;
}

.url-external {
  background: transparent;
  color: #0071E3;
  padding: 0.5rem 0.75rem;
}

.url-external:hover {
  background: rgba(0, 113, 227, 0.1);
}

/* iframe Wrapper */
.iframe-wrapper {
  flex: 1;
  position: relative;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: scale(0.99);
  animation: wrapperIn 0.4s ease-out 0.1s forwards;
}

@keyframes wrapperIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* States */
.loading-state,
.error-state,
.placeholder-state {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #F5F5F7;
  color: var(--color-text-secondary, #6E6E73);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #E8E8ED;
  border-top-color: #0071E3;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-icon,
.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.error-state h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0 0 0.5rem 0;
}

.error-state p,
.placeholder-state p {
  font-size: 1rem;
  margin: 0 0 1.5rem 0;
}

.btn-retry,
.btn-external {
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
  margin: 0.25rem;
}

.btn-retry {
  background: #0071E3;
  color: white;
  border: none;
}

.btn-retry:hover {
  background: #005bb5;
}

.btn-external {
  background: transparent;
  color: #0071E3;
  border: 1px solid #0071E3;
}

.btn-external:hover {
  background: rgba(0, 113, 227, 0.1);
}

/* iframe Element */
.iframe-element {
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.iframe-element.visible {
  opacity: 1;
}

/* Content Slot */
.content-slot {
  margin-top: 1rem;
}

.content-slot:empty {
  display: none;
}

/* Responsive */
@media (max-width: 768px) {
  .ki-iframe-layout {
    padding: 1.5rem;
  }

  .url-bar {
    flex-wrap: wrap;
  }

  .url-input {
    width: 100%;
    order: -1;
  }
}
</style>
