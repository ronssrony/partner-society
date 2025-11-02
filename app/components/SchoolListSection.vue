<script setup lang="ts">
const schools = [
  'ইসলামিয়া মাদ্রাসা',
  'গোলনা নিউ শিশু নিকেতন',
  'গোলনা ত্রিবেণী মডেল স্কুল',
  'মীরগঞ্জ বিজ্ঞান একাডেমি',
  'আল আকিদা মডেল মাদ্রাসা',
  'কৈমারী বিদ্যানিকেতন',
  'আনন্দপাঠ বিদ্যানিকেতন',
  'তানজিমুল উম্মাহ মাদ্রাসা'
]
</script>

<template>
  <section id="schools" class="py-12 md:py-16 bg-white">
    <div class="container-custom">
      <div class="text-center mb-10 md:mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Our <span class="text-[#6B46C1]">Schools</span>
        </h2>
        <p class="text-lg md:text-xl text-gray-600 font-semibold  mb-2">আমাদের স্কুলসমূহ</p>
        <p class="text-base text-gray-500 font-bengali">নীলফামারী জেলা, জলঢাকা উপজেলা</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div
          v-for="(school, index) in schools"
          :key="index"
          class="card p-5 md:p-6 text-center hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-[#6B46C1] group"
        >
          <!-- Icon -->
          <div class="text-4xl md:text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
            🏫
          </div>

          <!-- School Name -->
          <h3 class="text-base md:text-lg font-bold text-gray-900 mb-2 font-bengali">
            {{ school }}
          </h3>

          <!-- Location Badge -->
          <span class="inline-block px-2 md:px-3 py-1 bg-[#6B46C1]/10 text-[#6B46C1] rounded-full text-xs md:text-sm font-bengali font-semibold">
            জলঢাকা
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
