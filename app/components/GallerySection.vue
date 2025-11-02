<script setup lang="ts">
import { ref } from 'vue'

// Generate image array from 36 images
const images = Array.from({ length: 36 }, (_, i) => ({
  url: `/images/image-${i + 1}.jpeg`,
  caption: `Gallery Image ${i + 1}`
}))

const isLightboxOpen = ref(false)
const currentImageIndex = ref(0)

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  isLightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length
}
</script>

<template>
  <section id="gallery" class="py-12 md:py-16 bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-10 md:mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Our <span class="text-[#6B46C1]">Gallery</span>
        </h2>
        <p class="text-lg md:text-xl text-gray-600 font-bengali">আমাদের গ্যালারি</p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div
          v-for="(image, index) in images"
          :key="index"
          @click="openLightbox(index)"
          class="card overflow-hidden cursor-pointer group"
        >
          <div class="relative overflow-hidden">
            <img
              :src="image.url"
              :alt="image.caption"
              class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isLightboxOpen"
        @click="closeLightbox"
        class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      >
        <!-- Close Button -->
        <button
          @click.stop="closeLightbox"
          class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Previous Button -->
        <button
          @click.stop="prevImage"
          class="absolute left-4 text-white hover:text-gray-300 transition-colors"
        >
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <!-- Image -->
        <div @click.stop class="max-w-5xl max-h-[90vh]">
          <img
            :src="images[currentImageIndex].url"
            :alt="images[currentImageIndex].caption"
            class="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
          <p class="text-white text-center mt-4 text-lg">
            {{ images[currentImageIndex].caption }}
          </p>
        </div>

        <!-- Next Button -->
        <button
          @click.stop="nextImage"
          class="absolute right-4 text-white hover:text-gray-300 transition-colors"
        >
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Image Counter -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
          {{ currentImageIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </transition>
  </section>
</template>
