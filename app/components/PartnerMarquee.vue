<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'

const partners = [
  { name: "bKash", logo: "bKash" },
  { name: "Nagad", logo: "Nagad" },
  { name: "BRAC Bank", logo: "BRAC Bank" },
  { name: "Dutch-Bangla Bank", logo: "Dutch-Bangla Bank" },
  { name: "City Bank", logo: "City Bank" },
  { name: "Eastern Bank", logo: "Eastern Bank" },
  { name: "Rocket", logo: "Rocket" },
  { name: "Upay", logo: "Upay" },
]
</script>

<template>
  <section class="py-16 md:py-20 bg-brand-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600 }
        }"
      >
        <h2 class="text-center text-3xl md:text-4xl font-bold text-brand-900 mb-12">
          Trusted Partners
        </h2>
      </div>

      <Vue3Marquee :duration="30" :pause-on-hover="true" class="overflow-hidden">
        <div class="flex items-center gap-16 mx-8">
          <div
            v-for="partner in partners"
            :key="partner.name"
            class="px-8 text-2xl md:text-3xl font-bold text-gray-400 hover:text-brand-500 transition-colors duration-300 whitespace-nowrap"
          >
            {{ partner.name }}
          </div>
        </div>
      </Vue3Marquee>
    </div>
  </section>
</template>
