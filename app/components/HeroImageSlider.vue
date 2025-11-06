<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const heroImages = [
  '/images/image-7.jpeg',
  '/images/image-8.jpeg',
  '/images/image-9.jpeg',
  '/images/image-10.jpeg',
  '/images/image-11.jpeg',
]

const currentImageIndex = ref(0)
const isHovered = ref(false)
const isPaused = ref(false)
let autoplayInterval: ReturnType<typeof setInterval> | null = null

const startAutoplay = () => {
  if (autoplayInterval) clearInterval(autoplayInterval)
  autoplayInterval = setInterval(() => {
    if (!isPaused.value) nextSlide()
  }, 3500)
}
const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}
const nextSlide = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % heroImages.length
}
const prevSlide = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + heroImages.length) % heroImages.length
}
const goToSlide = (index: number) => {
  currentImageIndex.value = index
}

onMounted(startAutoplay)
onUnmounted(stopAutoplay)
</script>

<template>
  <section id="showcase" class="section-padding bg-gradient-to-br from-brand-50 via-white to-brand-50">
    <div class="container-custom">
      <div class="text-center mb-8 md:mb-10">
        <span class="inline-block px-3 py-1 rounded-full bg-[#6B46C1]/10 text-[#6B46C1] text-sm font-semibold mb-3">Gallery Highlight</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Our Work In Pictures</h2>
        <p class="text-gray-600 font-bengali mt-2">আমাদের কার্যক্রমের কিছু ঝলক</p>
      </div>

      <div
        class="relative group rounded-2xl overflow-hidden shadow-2xl"
        @mouseenter="isHovered = true; isPaused = true"
        @mouseleave="isHovered = false; isPaused = false"
      >
        <div class="relative h-[340px] sm:h-[420px] md:h-[520px] overflow-hidden">
          <div
            v-for="(image, index) in heroImages"
            :key="index"
            :class="[
              'absolute inset-0 transition-transform duration-700 ease-in-out',
              currentImageIndex === index ? 'translate-x-0 z-10' :
              currentImageIndex > index ? '-translate-x-full z-0' : 'translate-x-full z-0'
            ]"
          >
            <img :src="image" :alt="`Showcase Image ${index + 1}`" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          <transition enter-active-class="transition duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-show="isHovered" class="absolute inset-0 z-20 flex items-center justify-between px-4">
              <button @click="prevSlide" class="bg-white/90 hover:bg-white text-[#6B46C1] rounded-full p-3 shadow-lg transform hover:scale-110 transition-all duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button @click="nextSlide" class="bg-white/90 hover:bg-white text-[#6B46C1] rounded-full p-3 shadow-lg transform hover:scale-110 transition-all duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </transition>

          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            <button
              v-for="(image, index) in heroImages"
              :key="index"
              @click="goToSlide(index)"
              :class="[
                'transition-all duration-300 rounded-full',
                currentImageIndex === index ? 'w-10 h-3 bg-[#6B46C1]' : 'w-3 h-3 bg-white/60 hover:bg-white'
              ]"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
