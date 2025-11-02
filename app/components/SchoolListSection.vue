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
  <section id="schools" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span class="text-[#6B46C1]">Schools</span>
        </h2>
        <p class="text-xl text-gray-600 font-bengali mb-2">আমাদের স্কুলসমূহ</p>
        <p class="text-lg text-gray-500 font-bengali">নীলফামারী জেলা, জলঢাকা উপজেলা</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(school, index) in schools"
          :key="index"
          class="card p-6 text-center hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#6B46C1] group"
        >
          <!-- Icon -->
          <div class="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            🏫
          </div>

          <!-- School Name -->
          <h3 class="text-lg font-bold text-gray-900 mb-3 font-bengali">
            {{ school }}
          </h3>

          <!-- Location Badge -->
          <span class="inline-block px-3 py-1 bg-[#6B46C1]/10 text-[#6B46C1] rounded-full text-sm font-bengali font-semibold">
            জলঢাকা
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
