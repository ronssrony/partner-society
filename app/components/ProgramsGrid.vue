<script setup lang="ts">
import {
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  AcademicCapIcon,
  HeartIcon,
  BookOpenIcon,
  BriefcaseIcon
} from '@heroicons/vue/24/outline'

const programs = [
  {
    id: 1,
    icon: CurrencyDollarIcon,
    title: "Microfinance Services",
    description: "Accessible loans and financial services tailored for small businesses and entrepreneurs looking to grow."
  },
  {
    id: 2,
    icon: DevicePhoneMobileIcon,
    title: "Digital Banking",
    description: "Cashless transactions and mobile banking solutions for financial inclusion and convenience."
  },
  {
    id: 3,
    icon: AcademicCapIcon,
    title: "Skill Development",
    description: "Training programs to enhance digital and business skills for sustainable growth and success."
  },
  {
    id: 4,
    icon: HeartIcon,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs for members and their families."
  },
  {
    id: 5,
    icon: BookOpenIcon,
    title: "Education Support",
    description: "Scholarships and educational resources for children of members to build a better future."
  },
  {
    id: 6,
    icon: BriefcaseIcon,
    title: "Entrepreneurship",
    description: "Business mentorship and resources for aspiring entrepreneurs to launch successful ventures."
  }
]
</script>

<template>
  <section id="programs" class="py-16 md:py-24 bg-white">
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
          Our Programs
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Six synergetic programs working together to create lasting impact
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(program, index) in programs"
          :key="program.id"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: index * 100 }
          }"
          class="group bg-white rounded-2xl border-2 border-brand-100 p-8 hover:bg-brand-50 hover:border-brand-500 hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          <div class="flex flex-col items-center text-center">
            <div class="mb-6">
              <component :is="program.icon" class="w-16 h-16 text-brand-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 class="text-xl font-bold text-brand-900 mb-3">
              {{ program.title }}
            </h3>
            <p class="text-gray-600">
              {{ program.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
