<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  target: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 2000,
  },
  suffix: {
    type: String,
    default: '',
  },
  prefix: {
    type: String,
    default: '',
  },
  decimals: {
    type: Number,
    default: 0,
  },
})

const currentValue = ref(0)
const displayValue = ref('0')
const isVisible = ref(false)
const isAnimating = ref(false)
const counterRef = ref<HTMLElement | null>(null)

const easeOutQuart = (t: number): number => {
  return 1 - Math.pow(1 - t, 4)
}

const animateValue = () => {
  const startTime = performance.now()
  const startValue = 0
  const endValue = props.target
  isAnimating.value = true

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    const easedProgress = easeOutQuart(progress)

    currentValue.value = startValue + (endValue - startValue) * easedProgress

    if (props.decimals > 0) {
      displayValue.value = currentValue.value.toFixed(props.decimals)
    } else {
      displayValue.value = Math.round(currentValue.value).toString()
    }

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      isAnimating.value = false
    }
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  // Start animation when component becomes visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isVisible.value) {
        isVisible.value = true
        animateValue()
      }
    })
  }, { threshold: 0.1 })

  if (counterRef.value) observer.observe(counterRef.value)

  // Fallback: start animation after short delay if intersection observer doesn't trigger
  setTimeout(() => {
    if (!isVisible.value) {
      isVisible.value = true
      animateValue()
    }
  }, 500)
})

watch(() => props.target, () => {
  if (isVisible.value) {
    animateValue()
  }
})
</script>

<template>
  <span ref="counterRef" class="animated-counter" :class="{ 'is-animating': isAnimating, 'is-visible': isVisible }">
    <span class="counter-inner">
      {{ prefix }}{{ displayValue }}{{ suffix }}
    </span>
  </span>
</template>

<style scoped>
.animated-counter {
  font-variant-numeric: tabular-nums;
  display: inline-block;
  overflow: hidden;
  position: relative;
}

.counter-inner {
  display: inline-block;
  transform: translateY(100%);
  opacity: 0;
  transition: none;
}

.animated-counter.is-visible .counter-inner {
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease-out;
}

.animated-counter.is-animating .counter-inner {
  animation: slideUpPulse 0.15s ease-out;
}

@keyframes slideUpPulse {
  0% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
