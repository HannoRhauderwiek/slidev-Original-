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

const easeOutQuart = (t: number): number => {
  return 1 - Math.pow(1 - t, 4)
}

const animateValue = () => {
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

  const el = document.querySelector('.animated-counter')
  if (el) observer.observe(el)

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
  <span class="animated-counter">
    {{ prefix }}{{ displayValue }}{{ suffix }}
  </span>
</template>

<style scoped>
.animated-counter {
  font-variant-numeric: tabular-nums;
  display: inline-block;
}
</style>
