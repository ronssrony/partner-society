<script setup lang="ts">
import { ref } from 'vue'

const heroData = {
  tagline: "High-trust, High-touch, High-tech",
  subtitle: "Creating meaningful change through our six synergetic programs",
  description: "Empowering low-income women through innovative digital financial services across Bangladesh",
  ctaPrimary: "Get Started",
  ctaSecondary: "Learn More"
}
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 overflow-hidden pt-20">
    <!-- Background geometric shapes -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
      <div class="absolute top-40 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style="animation-delay: 1s"></div>
      <div class="absolute bottom-20 left-1/3 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style="animation-delay: 2s"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 200 }
          }"
          class="text-white"
        >
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {{ heroData.tagline }}
          </h1>
          <p class="text-xl md:text-2xl mb-6 font-medium">
            {{ heroData.subtitle }}
          </p>
          <p class="text-lg md:text-xl mb-10 text-white/90">
            {{ heroData.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              class="inline-flex items-center justify-center bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              {{ heroData.ctaPrimary }}
            </a>
            <a
              href="#about"
              class="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand-600 transition-all duration-300 hover:scale-105"
            >
              {{ heroData.ctaSecondary }}
            </a>
          </div>
        </div>

        <!-- Hero Image -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, delay: 400 }
          }"
          class="relative"
        >
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/800/600?random=hero"
              alt="Scholar Foundation"
              class="w-full h-auto object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-brand-600/20 to-transparent"></div>
          </div>

          <!-- Floating badge -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0 }"
            :visible-once="{
              opacity: 1,
              scale: 1,
              transition: { duration: 600, delay: 800 }
            }"
            class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6"
          >
            <div class="flex items-center gap-4">
              <div class="bg-brand-100 rounded-full p-3">
                <svg class="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p class="text-2xl font-bold text-brand-600">400K+</p>
                <p class="text-sm text-gray-600">Women Empowered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
      </svg>
    </div>
  </section>
</template>
