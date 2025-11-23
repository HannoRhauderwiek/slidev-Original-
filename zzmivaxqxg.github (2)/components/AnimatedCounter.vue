<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'

const props = defineProps({
  target: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 1500,
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
const hasAnimated = ref(false)
const counterRef = ref<HTMLElement | null>(null)
let mutationObserver: MutationObserver | null = null

const easeOutQuart = (t: number): number => {
  return 1 - Math.pow(1 - t, 4)
}

const animateValue = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true

  const startTime = performance.now()
  const startValue = 0
  const endValue = props.target

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
    }
  }

  requestAnimationFrame(animate)
}

const checkVClickState = () => {
  if (!counterRef.value || hasAnimated.value) return

  // Suche nach dem nächsten Eltern-Element mit v-click Klassen
  let element: HTMLElement | null = counterRef.value
  while (element) {
    if (element.classList.contains('slidev-vclick-current') ||
        element.classList.contains('slidev-vclick-prior')) {
      animateValue()
      return true
    }
    element = element.parentElement
  }
  return false
}

onMounted(() => {
  if (!counterRef.value) return

  // Prüfe sofort, ob das Element bereits sichtbar ist (kein v-click)
  let hasVClick = false
  let element: HTMLElement | null = counterRef.value
  while (element) {
    if (element.classList.contains('slidev-vclick-target') ||
        element.hasAttribute('v-click')) {
      hasVClick = true
      break
    }
    element = element.parentElement
  }

  // Wenn kein v-click vorhanden ist, starte Animation sofort bei Sichtbarkeit
  if (!hasVClick) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          animateValue()
        }
      })
    }, { threshold: 0.1 })

    observer.observe(counterRef.value)
    return
  }

  // Bei v-click: verwende MutationObserver um auf Klassenänderungen zu reagieren
  mutationObserver = new MutationObserver(() => {
    checkVClickState()
  })

  // Beobachte die gesamte Eltern-Kette
  element = counterRef.value
  while (element && element !== document.body) {
    mutationObserver.observe(element, {
      attributes: true,
      attributeFilter: ['class']
    })
    element = element.parentElement
  }

  // Prüfe einmal initial
  checkVClickState()
})

onUnmounted(() => {
  if (mutationObserver) {
    mutationObserver.disconnect()
  }
})
</script>

<template>
  <span ref="counterRef" class="animated-counter" :class="{ 'has-animated': hasAnimated }">
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
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease-out;
}

.animated-counter.has-animated .counter-inner {
  transform: translateY(0);
  opacity: 1;
}
</style>
