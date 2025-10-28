<script setup lang="ts">
import { ref } from 'vue'
import { useCounter } from '~/composables/useCounter'

const stats = [
  { value: 400000, label: "Lives Impacted", icon: "users", suffix: "+" },
  { value: 2500, label: "Businesses Funded", icon: "briefcase", suffix: "+" },
  { value: 55, label: "Districts", icon: "map", suffix: "" },
  { value: 98, label: "Success Rate", icon: "chart", suffix: "%" }
]

const counter1 = useCounter(400000, 2000)
const counter2 = useCounter(2500, 1800)
const counter3 = useCounter(55, 1500)
const counter4 = useCounter(98, 1600)

const counters = [counter1, counter2, counter3, counter4]

const handleVisible = (index: number) => {
  counters[index].animate()
}
</script>

<template>
  <section id="impact" class="relative py-20 md:py-32 bg-brand-500 overflow-hidden">
    <!-- Pattern overlay -->
    <div class="absolute inset-0 opacity-10">
      <svg width="100%" height="100%">
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="white" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600 }
        }"
        class="text-center text-white mb-16"
      >
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Our Impact in Numbers
        </h2>
        <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Measurable change that transforms communities
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :visible-once="{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 600,
              delay: index * 100,
              onComplete: () => handleVisible(index)
            }
          }"
          class="text-center text-white"
        >
          <div class="mb-4 flex justify-center">
            <svg class="w-12 h-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="stat.icon === 'users'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              <path v-else-if="stat.icon === 'briefcase'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              <path v-else-if="stat.icon === 'map'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div class="text-5xl md:text-6xl font-bold mb-2">
            {{ Math.floor(counters[index].count.value).toLocaleString() }}{{ stat.suffix }}
          </div>
          <div class="text-lg md:text-xl text-white/90 font-medium">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
