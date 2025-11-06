<script setup lang="ts">
import { ref, onMounted } from 'vue'

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

onMounted(() => {
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
</script>

<template>
  <section id="home" class="relative min-h-[90vh] bg-gradient-to-br from-gray-900 via-[#2D1B4E] to-gray-900 pt-24 md:pt-32 pb-16 overflow-hidden">
    <div class="container-custom">
      <!-- Desktop Layout (lg and above) -->
      <div class="hidden lg:grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
        <!-- Left Content -->
        <div class="space-y-8 z-10">
          <!-- Small Header -->
          <div>
            <p class="text-[#A78BFA] uppercase tracking-widest text-sm font-semibold mb-6">
              শিক্ষায় পরিবর্তন আনুন
            </p>
          </div>

          <!-- Main Heading -->
          <div class="space-y-4">
            <h1 class="text-5xl md:text-6xl font-extrabold leading-tight">
              <span class="text-white">আপনার </span>
              <span class="text-[#EF4444]">হৃদয়</span>
              <br />
              <span class="text-white">দিয়ে পরিবর্তন করুন</span>
              <br />
              <span class="text-white">একটি </span>
              <span class="text-[#EF4444]">শিশুর</span>
              <span class="text-white"> গল্প</span>
            </h1>
          </div>

          <!-- Description -->
          <p class="text-gray-300 text-lg leading-relaxed font-bengali max-w-xl">
            আমাদের মিশনে যোগ দিন এবং আপনার প্রচেষ্টা অসহায় শিশুদের সাহায্য করুন। আপনার দান প্রয়োজনীয় যত্ন এবং আশা প্রদান করে।
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 pt-4">
            <a
              href="#programs"
              class="bg-[#EF4444] hover:bg-[#DC2626] text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-lg inline-block"
            >
              দান করুন
            </a>
            <a
              href="/registration"
              class="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all duration-300 hover:scale-105 inline-block"
            >
              আরও জানুন
            </a>
          </div>
        </div>

        <!-- Right Side - Hero Image -->
        <div class="relative z-10">
          <div class="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <!-- Main Image Display -->
            <div class="relative aspect-[4/3]">
              <img
                src="/images/image-9.jpeg"
                alt="Partner Society Students"
                class="w-full h-full object-cover"
              />
              <!-- Subtle Overlay Gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div class="absolute -top-8 -right-8 w-32 h-32 bg-[#6B46C1] rounded-full opacity-20 blur-3xl"></div>
          <div class="absolute -bottom-8 -left-8 w-40 h-40 bg-[#EF4444] rounded-full opacity-20 blur-3xl"></div>
        </div>
      </div>

      <!-- Mobile Layout (below lg) -->
      <div class="lg:hidden space-y-8">
        <!-- Mobile Content -->
        <div class="space-y-6 text-center z-10 relative">
          <!-- Small Header -->
          <p class="text-[#A78BFA] uppercase tracking-widest text-xs font-semibold">
            শিক্ষায় পরিবর্তন আনুন
          </p>

          <!-- Main Heading -->
          <h1 class="text-3xl md:text-4xl font-extrabold leading-tight">
            <span class="text-white">আপনার </span>
            <span class="text-[#EF4444]">হৃদয়</span>
            <br />
            <span class="text-white">দিয়ে পরিবর্তন করুন</span>
            <br />
            <span class="text-white">একটি </span>
            <span class="text-[#EF4444]">শিশুর</span>
            <span class="text-white"> গল্প</span>
          </h1>

          <!-- Description -->
          <p class="text-gray-300 text-base leading-relaxed font-bengali">
            আমাদের মিশনে যোগ দিন এবং আপনার প্রচেষ্টা অসহায় শিশুদের সাহায্য করুন।
          </p>
        </div>

        <!-- Mobile Hero Image -->
        <div class="relative">
          <div class="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div class="relative aspect-[16/10]">
              <img
                src="/images/image-9.jpeg"
                alt="Partner Society Students"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

        <!-- Mobile CTA Buttons -->
        <div class="flex flex-col gap-3 max-w-sm mx-auto">
          <a
            href="#programs"
            class="bg-[#EF4444] hover:bg-[#DC2626] text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all duration-300 text-center"
          >
            দান করুন
          </a>
          <a
            href="/registration"
            class="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all duration-300 text-center"
          >
            আরও জানুন
          </a>
        </div>
      </div>

      <!-- Stats Counter Section (Below Hero) -->
      <div class="grid grid-cols-3 gap-4 md:gap-6 pt-16 md:pt-20 justify-center mx-auto max-w-4xl z-10 relative">
        <div
          v-for="(stat, index) in stats"
          :key="stat.id"
          class="text-center group"
        >
          <!-- Icon Circle -->
          <div
            class="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm"
            :style="{ backgroundColor: stat.color + '40' }"
          >
            <span class="text-2xl md:text-3xl">{{ stat.icon }}</span>
          </div>

          <!-- Counter -->
          <div class="mb-1">
            <span
              class="text-3xl md:text-4xl font-bold text-white"
            >
              {{ counters[index] }}{{ stat.suffix || '' }}
            </span>
          </div>

          <!-- Label -->
          <p class="text-gray-300 font-semibold text-xs uppercase tracking-wide mb-1">
            {{ stat.label }}
          </p>
          <p class="text-gray-400 font-semibold text-xs font-bengali">
            {{ stat.labelBengali }}
          </p>
        </div>
      </div>
    </div>

    <!-- Static Background Elements -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-[#6B46C1] rounded-full opacity-10 blur-3xl"></div>
    <div class="absolute top-40 right-20 w-40 h-40 bg-[#EF4444] rounded-full opacity-10 blur-3xl"></div>
    <div class="absolute bottom-32 left-1/4 w-48 h-48 bg-[#A78BFA] rounded-full opacity-10 blur-3xl"></div>

    <!-- Animated Star Pattern Overlay -->
    <div class="absolute inset-0 opacity-5 star-pattern" style="background-image: radial-gradient(circle, #ffffff 1px, transparent 1px); background-size: 50px 50px;"></div>
  </section>
</template>

<style scoped>
@keyframes starBlink {
  0%, 100% {
    opacity: 0.05;
  }
  50% {
    opacity: 0.08;
  }
}

.star-pattern {
  animation: starBlink 3s ease-in-out infinite;
}
</style>
