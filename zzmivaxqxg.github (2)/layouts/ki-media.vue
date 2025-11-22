<!--
  KI-Schulung Layout: GIF/Video-Folie
  ====================================
  Responsive Media-Einbettung mit Caption und Kontrollen

  Verwendung:
  ---
  layout: ki-media
  title: KI in Aktion
  media: /videos/demo.mp4  # oder .gif
  type: video  # video, gif, image
  autoplay: true
  loop: true
  caption: Eine Demo der KI-Anwendung
  ---
-->
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  media: { type: String, default: '' },
  type: { type: String, default: 'auto' }, // video, gif, image, auto
  autoplay: { type: Boolean, default: true },
  loop: { type: Boolean, default: true },
  muted: { type: Boolean, default: true },
  controls: { type: Boolean, default: true },
  caption: { type: String, default: '' },
  size: { type: String, default: 'large' }, // small, medium, large, full
})

const isLoaded = ref(false)
const isPlaying = ref(props.autoplay)
const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 50)
})

const mediaType = computed(() => {
  if (props.type !== 'auto') return props.type

  const ext = props.media.split('.').pop()?.toLowerCase()
  if (['mp4', 'webm', 'ogg', 'mov'].includes(ext || '')) return 'video'
  if (['gif'].includes(ext || '')) return 'gif'
  return 'image'
})

const togglePlay = () => {
  if (videoRef.value) {
    if (isPlaying.value) {
      videoRef.value.pause()
    }
    else {
      videoRef.value.play()
    }
    isPlaying.value = !isPlaying.value
  }
}

const sizeClass = computed(() => `size-${props.size}`)
</script>

<template>
  <div class="ki-media-layout" :class="{ loaded: isLoaded }">
    <!-- Header -->
    <header v-if="title" class="header">
      <h1 class="title">{{ title }}</h1>
    </header>

    <!-- Media Container -->
    <div class="media-wrapper" :class="sizeClass">
      <div class="media-container">
        <!-- Video -->
        <template v-if="mediaType === 'video'">
          <video
            ref="videoRef"
            class="media-element"
            :src="media"
            :autoplay="autoplay"
            :loop="loop"
            :muted="muted"
            :controls="false"
            playsinline
            @play="isPlaying = true"
            @pause="isPlaying = false"
          />
          <div v-if="controls" class="video-controls">
            <button class="play-button" @click="togglePlay">
              <span v-if="isPlaying" class="icon">⏸</span>
              <span v-else class="icon">▶</span>
            </button>
          </div>
        </template>

        <!-- GIF -->
        <template v-else-if="mediaType === 'gif'">
          <img :src="media" alt="" class="media-element gif" />
        </template>

        <!-- Image -->
        <template v-else>
          <img :src="media" alt="" class="media-element" />
        </template>

        <!-- Placeholder -->
        <div v-if="!media" class="media-placeholder">
          <span class="placeholder-icon">🎬</span>
          <span class="placeholder-text">Media hier einfügen</span>
        </div>
      </div>

      <!-- Caption -->
      <p v-if="caption" class="caption">{{ caption }}</p>
    </div>

    <!-- Optional content slot -->
    <div class="content-slot">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ki-media-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2.5rem 3rem;
  background: var(--color-background, #FAFAFA);
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.ki-media-layout.loaded {
  opacity: 1;
}

/* Header */
.header {
  width: 100%;
  margin-bottom: 1.5rem;
  text-align: center;
}

.title {
  font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0;
}

/* Media Wrapper */
.media-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  opacity: 0;
  transform: scale(0.98);
  animation: mediaIn 0.5s ease-out 0.1s forwards;
}

@keyframes mediaIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Size variants */
.size-small .media-container { max-width: 400px; }
.size-medium .media-container { max-width: 600px; }
.size-large .media-container { max-width: 800px; }
.size-full .media-container { max-width: 100%; }

/* Media Container */
.media-container {
  position: relative;
  width: 100%;
  background: #1D1D1F;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.media-element {
  display: block;
  width: 100%;
  height: auto;
  max-height: 60vh;
  object-fit: contain;
}

.media-element.gif {
  background: white;
}

/* Video Controls */
.video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease-out;
}

.media-container:hover .video-controls {
  opacity: 1;
}

.play-button {
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-out;
}

.play-button:hover {
  transform: scale(1.1);
  background: white;
}

.play-button .icon {
  font-size: 1rem;
  color: #1D1D1F;
}

/* Placeholder */
.media-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background: #2C2C2E;
  color: #86868B;
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.placeholder-text {
  font-size: 1rem;
}

/* Caption */
.caption {
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-text-tertiary, #86868B);
  margin-top: 1rem;
  font-style: italic;
  max-width: 600px;
}

/* Content Slot */
.content-slot {
  margin-top: 1.5rem;
  width: 100%;
  max-width: 800px;
}

.content-slot:empty {
  display: none;
}

/* Responsive */
@media (max-width: 768px) {
  .ki-media-layout {
    padding: 1.5rem;
  }

  .media-element {
    max-height: 50vh;
  }
}
</style>
