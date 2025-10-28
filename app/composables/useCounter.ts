import { ref } from 'vue'

export const useCounter = (target: number, duration: number = 2000) => {
  const count = ref(0)
  const isAnimating = ref(false)

  const animate = () => {
    if (isAnimating.value) return

    isAnimating.value = true
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      count.value += increment
      if (count.value >= target) {
        count.value = target
        clearInterval(timer)
        isAnimating.value = false
      }
    }, 16)
  }

  return { count, animate }
}
