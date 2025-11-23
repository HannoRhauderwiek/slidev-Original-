<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  frontTitle: {
    type: String,
    default: 'Thema',
  },
  frontIcon: {
    type: String,
    default: '📌',
  },
  backType: {
    type: String,
    default: 'neutral', // 'pro', 'contra', 'neutral'
  },
  backContent: {
    type: String,
    default: 'Details zur Karte...',
  },
})

const isFlipped = ref(false)

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}
</script>

<template>
  <div
    class="flip-card"
    :class="{ flipped: isFlipped }"
    @click="toggleFlip"
  >
    <div class="flip-card-inner">
      <!-- Front -->
      <div class="flip-card-front">
        <div class="card-icon">{{ frontIcon }}</div>
        <h3 class="card-title">{{ frontTitle }}</h3>
        <div class="flip-hint">
          <span class="flip-icon">↻</span>
          Klicken zum Drehen
        </div>
      </div>

      <!-- Back -->
      <div class="flip-card-back" :class="backType">
        <div class="back-header">
          <span v-if="backType === 'pro'" class="back-badge pro">✓ Pro</span>
          <span v-else-if="backType === 'contra'" class="back-badge contra">✗ Contra</span>
          <span v-else class="back-badge neutral">○ Info</span>
        </div>
        <p class="back-content">{{ backContent }}</p>
        <div class="flip-back-hint">
          ↻ Zurück
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card {
  perspective: 1000px;
  cursor: pointer;
  height: 340px;
  min-height: 340px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.flip-card-front {
  background: white;
  border: 1px solid #e5e7eb;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.flip-card:hover .flip-card-front {
  border-color: #6366f1;
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.2);
}

.flip-card-back {
  transform: rotateY(180deg);
}

.flip-card-back.pro {
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
  border: 2px solid #22c55e;
}

.flip-card-back.contra {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border: 2px solid #ef4444;
}

.flip-card-back.neutral {
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
  border: 2px solid #6366f1;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.flip-card:hover .card-icon {
  transform: scale(1.1);
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
  text-align: center;
}

.flip-hint {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: auto;
}

.flip-icon {
  animation: rotate-hint 2s ease-in-out infinite;
}

@keyframes rotate-hint {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(20deg); }
}

.back-header {
  margin-bottom: 1rem;
}

.back-badge {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.back-badge.pro {
  background: rgba(34, 197, 94, 0.2);
  color: #166534;
}

.back-badge.contra {
  background: rgba(239, 68, 68, 0.2);
  color: #991b1b;
}

.back-badge.neutral {
  background: rgba(99, 102, 241, 0.2);
  color: #4338ca;
}

.back-content {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #374151;
  margin: 0;
  flex: 1;
}

.flip-back-hint {
  font-size: 0.7rem;
  color: #6b7280;
  text-align: center;
  margin-top: auto;
  padding-top: 0.75rem;
}
</style>
