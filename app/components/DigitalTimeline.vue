<script setup lang="ts">
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  ServerIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  CloudIcon
} from '@heroicons/vue/24/outline'

const timeline = [
  {
    year: "2023",
    title: "bKash Principal Agent",
    description: "Doorstep financial services to 400,000+ low-income women in 55 districts",
    icon: DevicePhoneMobileIcon
  },
  {
    year: "2022",
    title: "e-Loan Platform",
    description: "Digital loan service for small online businesses with instant approval",
    icon: ComputerDesktopIcon
  },
  {
    year: "2021",
    title: "Going Paperless",
    description: "Scholar Mobile app reducing paper documentation by 80%",
    icon: DocumentTextIcon
  },
  {
    year: "2020",
    title: "ERP Integration",
    description: "Enterprise software across all branches for seamless operations",
    icon: ServerIcon
  },
  {
    year: "2019",
    title: "Digital Recruitment",
    description: "Onboarding members through psychometric analysis and digital verification",
    icon: UserGroupIcon
  },
  {
    year: "2018",
    title: "SMS Notifications",
    description: "Real-time updates and notifications for all members",
    icon: ChatBubbleLeftRightIcon
  },
  {
    year: "2017",
    title: "Full Automation",
    description: "All branches connected digitally with centralized data management",
    icon: CloudIcon
  }
]
</script>

<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600 }
        }"
        class="text-center mb-16"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
          Our Digital Journey
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Transforming microfinance through technology innovation
        </p>
      </div>

      <!-- Desktop Timeline -->
      <div class="hidden lg:block relative">
        <!-- Timeline line -->
        <div class="absolute left-0 right-0 h-1 bg-brand-200 top-1/2 transform -translate-y-1/2"></div>

        <div class="grid grid-cols-7 gap-4">
          <div
            v-for="(item, index) in timeline"
            :key="item.year"
            v-motion
            :initial="{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: index * 100 }
            }"
            class="relative"
          >
            <!-- Year badge -->
            <div class="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-brand-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
              {{ item.year }}
            </div>

            <!-- Icon circle -->
            <div class="flex justify-center mb-4 relative z-10">
              <div class="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <component :is="item.icon" class="w-10 h-10 text-brand-600" />
              </div>
            </div>

            <!-- Card -->
            <div class="bg-white rounded-xl border-2 border-brand-100 p-4 hover:border-brand-500 hover:shadow-xl transition-all duration-300 mt-12">
              <h3 class="text-lg font-bold text-brand-900 mb-2">
                {{ item.title }}
              </h3>
              <p class="text-sm text-gray-600">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Timeline -->
      <div class="lg:hidden relative">
        <!-- Vertical timeline line -->
        <div class="absolute left-8 top-0 bottom-0 w-1 bg-brand-200"></div>

        <div class="space-y-8">
          <div
            v-for="(item, index) in timeline"
            :key="item.year"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible-once="{
              opacity: 1,
              x: 0,
              transition: { duration: 600, delay: index * 100 }
            }"
            class="relative pl-20"
          >
            <!-- Year badge -->
            <div class="absolute left-0 bg-brand-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              {{ item.year }}
            </div>

            <!-- Icon circle -->
            <div class="absolute left-2 top-8 w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center shadow-lg z-10">
              <component :is="item.icon" class="w-6 h-6 text-brand-600" />
            </div>

            <!-- Card -->
            <div class="bg-white rounded-xl border-2 border-brand-100 p-6 hover:border-brand-500 hover:shadow-xl transition-all duration-300">
              <h3 class="text-xl font-bold text-brand-900 mb-2">
                {{ item.title }}
              </h3>
              <p class="text-gray-600">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
