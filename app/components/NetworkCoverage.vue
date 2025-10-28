<script setup lang="ts">
import { ref } from 'vue'
import { useCounter } from '~/composables/useCounter'

const stats = [
  { value: 400000, label: "Women Empowered", suffix: "+" },
  { value: 55, label: "Districts Covered", suffix: "" },
  { value: 150, label: "Active Branches", suffix: "+" },
  { value: 95, label: "Satisfaction Rate", suffix: "%" }
]

// Create counters for each stat
const counter1 = useCounter(400000, 2000)
const counter2 = useCounter(55, 1500)
const counter3 = useCounter(150, 1800)
const counter4 = useCounter(95, 1600)

const counters = [counter1, counter2, counter3, counter4]

const statRefs = ref<HTMLElement[]>([])

const handleVisible = (index: number) => {
  counters[index].animate()
}
</script>

<template>
  <section class="py-16 md:py-24 bg-brand-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600 }
        }"
        class="text-center mb-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
          Our Network Coverage
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Making an impact across Bangladesh with our extensive network
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 600,
              delay: index * 100,
              onComplete: () => handleVisible(index)
            }
          }"
          class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div class="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-4">
            <svg class="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              <path v-else-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              <path v-else-if="index === 2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="text-4xl md:text-5xl font-bold text-brand-600 mb-2">
            {{ Math.floor(counters[index].count.value).toLocaleString() }}{{ stat.suffix }}
          </div>
          <div class="text-gray-600 font-medium">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
