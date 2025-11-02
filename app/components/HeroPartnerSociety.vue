<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Hero images - using images from public/images
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

// Stats with counters
const stats = [
  {
    id: 1,
    end: 8,
    label: 'Years',
    labelBengali: 'বছরের অভিজ্ঞতা',
    icon: '📅',
    color: '#6B46C1'
  },
  {
    id: 2,
    end: 8,
    label: 'Schools',
    labelBengali: 'স্কুল',
    icon: '🏫',
    color: '#8B5CF6'
  },
  {
    id: 3,
    end: 500,
    suffix: '+',
    label: 'Students',
    labelBengali: 'শিক্ষার্থী',
    icon: '👨‍🎓',
    color: '#A78BFA'
  }
]

const counters = ref(stats.map(() => 0))
const hasAnimated = ref(false)

const animateValue = (index: number, start: number, end: number, duration: number) => {
  const range = end - start
  const increment = end > start ? 1 : -1
  const stepTime = Math.abs(Math.floor(duration / range))

  let current = start
  const timer = setInterval(() => {
    current += increment
    counters.value[index] = current

    if (current === end) {
      clearInterval(timer)
    }
  }, stepTime)
}

// Start autoplay
const startAutoplay = () => {
  if (autoplayInterval) clearInterval(autoplayInterval)
  autoplayInterval = setInterval(() => {
    if (!isPaused.value) {
      nextSlide()
    }
  }, 4000)
}

// Stop autoplay
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

const handleMouseEnter = () => {
  isHovered.value = true
  isPaused.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
  isPaused.value = false
}

onMounted(() => {
  // Start autoplay
  startAutoplay()

  // Animate counters
  if (!hasAnimated.value) {
    hasAnimated.value = true
    stats.forEach((stat, index) => {
      setTimeout(() => {
        animateValue(index, 0, stat.end, 2000)
      }, index * 200)
    })
  }
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section id="home" class="relative min-h-[85vh] md:min-h-[90vh] bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 pt-24 md:pt-24 pb-12 md:pb-16 ">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <!-- Intro Text -->
          <div class="space-y-6">
            <p class="text-lg md:text-xl lg:text-2xl text-gray-700 font-bengali leading-relaxed">
              <span class="text-[#EF4444] font-bold">Partner</span> <span class="text-[#6B46C1] font-bold">Society</span> BD একটি <span class="text-[#6B46C1] font-bold">কিন্ডারগার্ডেন সোসাইটি</span>, আধুনিক শিক্ষামূলক প্রতিষ্ঠান, মেধাবী শিক্ষার্থীদের বৃত্তিমূলক কার্যক্রম পরিচালনা করা, বিভিন্ন সহায়ক বই প্রকাশ এবং দক্ষতা উন্নয়নের মাধ্যমে শিক্ষার গুণগত মান নিশ্চিত করাই আমাদের মূল লক্ষ্য!
            </p>
          </div>

          <!-- Stats Counter -->


          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-3">
            <a
              href="#programs"
              class="bg-[#6B46C1] hover:bg-[#553399] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-block text-sm md:text-base"
            >
              Learn More
            </a>
            <a
              href="/registration"
              class="border-2 border-[#6B46C1] text-[#6B46C1] hover:bg-[#6B46C1] hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-block text-sm md:text-base"
            >
              Apply Now
            </a>
          </div>


        </div>

        <!-- Right Side - Image Slider -->
        <div
          class="relative group"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <!-- Image Container -->
            <div class="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
              <!-- Images -->
              <div
                v-for="(image, index) in heroImages"
                :key="index"
                :class="[
                  'absolute inset-0 transition-transform duration-700 ease-in-out',
                  currentImageIndex === index ? 'translate-x-0 z-10' :
                  currentImageIndex > index ? '-translate-x-full z-0' : 'translate-x-full z-0'
                ]"
              >
                <img
                  :src="image"
                  :alt="`Hero Image ${index + 1}`"
                  class="w-full h-full object-cover"
                />
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              <!-- Navigation Buttons - Show on Hover -->
              <transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <div v-show="isHovered" class="absolute inset-0 z-20 flex items-center justify-between px-4">
                  <!-- Previous Button -->
                  <button
                    @click="prevSlide"
                    class="bg-white/90 hover:bg-white text-[#6B46C1] rounded-full p-3 shadow-lg transform hover:scale-110 transition-all duration-300"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>

                  <!-- Next Button -->
                  <button
                    @click="nextSlide"
                    class="bg-white/90 hover:bg-white text-[#6B46C1] rounded-full p-3 shadow-lg transform hover:scale-110 transition-all duration-300"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </transition>

              <!-- Pagination Dots -->
              <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                <button
                  v-for="(image, index) in heroImages"
                  :key="index"
                  @click="goToSlide(index)"
                  :class="[
                    'transition-all duration-300 rounded-full',
                    currentImageIndex === index
                      ? 'w-10 h-3 bg-[#6B46C1]'
                      : 'w-3 h-3 bg-white/50 hover:bg-white/80'
                  ]"
                ></button>
              </div>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div class="absolute -top-6 -right-6 w-24 h-24 bg-[#6B46C1] rounded-full opacity-20 blur-2xl"></div>
          <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-2xl"></div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-3 md:gap-4 py-8 md:py-6 justify-center mx-auto max-w-4xl">
        <div
            v-for="(stat, index) in stats"
            :key="stat.id"
            class="text-center group"
        >
          <!-- Icon Circle -->
          <div
              class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
              :style="{ backgroundColor: stat.color + '20' }"
          >
            <span class="text-3xl">{{ stat.icon }}</span>
          </div>

          <!-- Counter -->
          <div class="mb-1">
                <span
                    class="text-3xl md:text-4xl font-bold"
                    :style="{ color: stat.color }"
                >
                  {{ counters[index] }}{{ stat.suffix || '' }}
                </span>
          </div>

          <!-- Label -->
          <p class="text-gray-600 font-semibold text-xs uppercase tracking-wide mb-1">
            {{ stat.label }}
          </p>
          <p class="text-gray-500 font-bengali text-xs">
            {{ stat.labelBengali }}
          </p>
        </div>
      </div>
    </div>

    <!-- Floating Background Shapes -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-2xl animate-pulse delay-1000"></div>
  </section>
</template>

<style scoped>
.delay-1000 {
  animation-delay: 1000ms;
}
</style>
