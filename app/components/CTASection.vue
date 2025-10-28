<script setup lang="ts">
</script>

<template>
  <section class="relative py-20 md:py-32 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700 overflow-hidden">
    <!-- Background shapes -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style="animation-delay: 1s"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600 }
        }"
      >
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Lives?
        </h2>
        <p class="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join us in empowering communities through digital innovation
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            class="inline-flex items-center justify-center bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Become a Member
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand-600 transition-all duration-300 hover:scale-105"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
