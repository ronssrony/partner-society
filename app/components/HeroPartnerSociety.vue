<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Hero images - using images from public/images
const heroImages = [
  '/images/image-7.jpeg',
  '/images/image-8.jpeg',
  '/images/image-9.jpeg',
  '/images/image-10.jpeg',
  '/images/image-11.jpeg',
]

const currentImageIndex = ref(0)

onMounted(() => {
  // Auto-slide images
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % heroImages.length
  }, 4000)
})

const goToSlide = (index: number) => {
  currentImageIndex.value = index
}
</script>

<template>
  <section id="home" class="relative min-h-[90vh] bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 pt-24 pb-16">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <!-- Intro Text -->
          <div class="space-y-6">
            <p class="text-lg md:text-xl lg:text-2xl text-gray-700 font-bengali leading-relaxed">
              Partner Society BD একটি <span class="text-[#6B46C1] font-bold">কিন্ডারগার্ডেন সোসাইটি</span>, আধুনিক শিক্ষামূলক প্রতিষ্ঠান, মেধাবী শিক্ষার্থীদের বৃত্তিমূলক কার্যক্রম পরিচালনা করা, বিভিন্ন সহায়ক বই প্রকাশ এবং দক্ষতা উন্নয়নের মাধ্যমে শিক্ষার গুণগত মান নিশ্চিত করাই আমাদের মূল লক্ষ্য!
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4">
            <a
              href="#programs"
              class="bg-[#6B46C1] hover:bg-[#553399] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-block"
            >
              Learn More
            </a>
            <a
              href="/registration"
              class="border-2 border-[#6B46C1] text-[#6B46C1] hover:bg-[#6B46C1] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
            >
              Apply Now
            </a>
          </div>
        </div>

        <!-- Right Side - Image Slider -->
        <div class="relative">
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <!-- Image Container -->
            <div class="relative h-[400px] md:h-[500px] lg:h-[600px]">
              <!-- Images -->
              <div
                v-for="(image, index) in heroImages"
                :key="index"
                :class="[
                  'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                  currentImageIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
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
