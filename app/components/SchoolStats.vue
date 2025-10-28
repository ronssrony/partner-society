<script setup lang="ts">
import { ref } from 'vue'
import { useCounter } from '~/composables/useCounter'
import {
  AcademicCapIcon,
  UserGroupIcon,
  BookOpenIcon,
  ChartBarIcon
} from '@heroicons/vue/24/outline'

// School Management System Statistics
const stats = [
  {
    value: 5000,
    label: "Total Students",
    suffix: "+",
    icon: AcademicCapIcon,
    description: "Enrolled students"
  },
  {
    value: 250,
    label: "Faculty Members",
    suffix: "+",
    icon: UserGroupIcon,
    description: "Dedicated teachers"
  },
  {
    value: 150,
    label: "Courses Offered",
    suffix: "+",
    icon: BookOpenIcon,
    description: "Academic programs"
  },
  {
    value: 95,
    label: "Success Rate",
    suffix: "%",
    icon: ChartBarIcon,
    description: "Student achievement"
  }
]

// Create counters for each stat
const counters = stats.map(stat => useCounter(stat.value, 2000))

const hasAnimated = ref(false)

// Handle animation trigger when section becomes visible
const handleVisible = () => {
  if (!hasAnimated.value) {
    hasAnimated.value = true
    counters.forEach((counter, index) => {
      setTimeout(() => {
        counter.animate()
      }, index * 100)
    })
  }
}
</script>

<template>
  <section class="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-brand-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600 }
        }"
        class="text-center mb-12 md:mb-16"
      >
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-4">
          School Management Excellence
        </h2>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering education through innovative technology and comprehensive management solutions
        </p>
      </div>

      <!-- Statistics Grid -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            onComplete: handleVisible
          }
        }"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="group relative bg-white rounded-2xl p-6 md:p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-brand-100 hover:border-brand-500"
        >
          <!-- Animated background on hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

          <!-- Content -->
          <div class="relative z-10">
            <!-- Icon Container -->
            <div class="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-brand-100 rounded-full mb-4 md:mb-6 group-hover:bg-brand-500 transition-colors duration-300">
              <component
                :is="stat.icon"
                class="w-8 h-8 md:w-10 md:h-10 text-brand-600 group-hover:text-white transition-colors duration-300"
              />
            </div>

            <!-- Counter -->
            <div class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-600 mb-2 group-hover:text-brand-700 transition-colors duration-300">
              {{ Math.floor(counters[index].count.value).toLocaleString() }}{{ stat.suffix }}
            </div>

            <!-- Label -->
            <div class="text-lg md:text-xl font-bold text-brand-900 mb-1">
              {{ stat.label }}
            </div>

            <!-- Description -->
            <div class="text-sm md:text-base text-gray-600 font-medium">
              {{ stat.description }}
            </div>
          </div>

          <!-- Decorative corner accent -->
          <div class="absolute top-0 right-0 w-20 h-20 bg-brand-100 rounded-bl-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        </div>
      </div>

      <!-- Optional: Additional Info Section -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 500 }
        }"
        class="mt-12 md:mt-16 text-center"
      >
        <p class="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Our comprehensive school management system streamlines operations, enhances communication,
          and improves educational outcomes for institutions of all sizes.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>
