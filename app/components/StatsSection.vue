<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = [
  {
    id: 1,
    end: 8,
    label: 'Years',
    labelBengali: 'বছরের অভিজ্ঞতা',
    icon: '📅',
    color: '#6B46C1'
  },
  {
    id: 2,
    end: 8,
    label: 'Schools',
    labelBengali: 'স্কুল',
    icon: '🏫',
    color: '#8B5CF6'
  },
  {
    id: 3,
    end: 500,
    suffix: '+',
    label: 'Students',
    labelBengali: 'শিক্ষার্থী',
    icon: '👨‍🎓',
    color: '#A78BFA'
  },
  {
    id: 4,
    end: 50,
    suffix: '+',
    label: 'Teachers',
    labelBengali: 'শিক্ষক',
    icon: '👨‍🏫',
    color: '#C4B5FD'
  },
]

const counters = ref(stats.map(() => 0))
const hasAnimated = ref(false)

const animateValue = (index: number, start: number, end: number, duration: number) => {
  const range = end - start
  const increment = end > start ? 1 : -1
  const stepTime = Math.abs(Math.floor(duration / range))

  let current = start
  const timer = setInterval(() => {
    current += increment
    counters.value[index] = current

    if (current === end) {
      clearInterval(timer)
    }
  }, stepTime)
}

onMounted(() => {
  // Use Intersection Observer to trigger animation when visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true
          stats.forEach((stat, index) => {
            setTimeout(() => {
              animateValue(index, 0, stat.end, 2000)
            }, index * 200)
          })
        }
      })
    },
    { threshold: 0.5 }
  )

  const element = document.querySelector('#stats-section')
  if (element) {
    observer.observe(element)
  }
})
</script>

<template>
  <section id="stats-section" class="section-padding bg-white">
    <div class="container-custom">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="stat.id"
          class="text-center group"
        >
          <!-- Icon Circle -->
          <div
            class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
            :style="{ backgroundColor: stat.color + '20' }"
          >
            <span class="text-4xl">{{ stat.icon }}</span>
          </div>

          <!-- Counter -->
          <div class="mb-2">
            <span
              class="text-4xl md:text-5xl font-bold"
              :style="{ color: stat.color }"
            >
              {{ counters[index] }}{{ stat.suffix || '' }}
            </span>
          </div>

          <!-- Label -->
          <p class="text-gray-600 font-semibold text-sm uppercase tracking-wide mb-1">
            {{ stat.label }}
          </p>
          <p class="text-gray-500 font-bengali text-sm">
            {{ stat.labelBengali }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
