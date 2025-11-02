<script setup lang="ts">
const notices = [
  {
    badge: 'নতুন',
    badgeColor: 'bg-[#6B46C1]',
    date: '০১ জানুয়ারী, ২০২৫',
    title: 'Admission is open for 2025',
    titleBengali: '২০২৫ শিক্ষাবর্ষের ভর্তি কার্যক্রম চলমান',
    description: '২০২৫ শিক্ষাবর্ষের ভর্তি কার্যক্রম চলমান',
    buttonText: 'বিস্তারিত দেখুন',
    buttonLink: '#registration'
  },
  {
    badge: 'জরুরি',
    badgeColor: 'bg-[#EF4444]',
    date: '১৫ ডিসেম্বর, ২০২৪',
    title: 'Scholarship Exam Registration Deadline',
    titleBengali: 'বৃত্তি পরীক্ষা রেজিস্ট্রেশনের শেষ তারিখ',
    description: 'বৃত্তি পরীক্ষা রেজিস্ট্রেশনের শেষ তারিখ ৩১ ডিসেম্বর',
    buttonText: 'আবেদন করুন',
    buttonLink: '#registration'
  },
  {
    badge: 'সুযোগ',
    badgeColor: 'bg-[#FACC15]',
    date: 'চলমান',
    title: 'Volunteer Recruitment Ongoing',
    titleBengali: 'স্বেচ্ছাসেবক নিয়োগ চলছে',
    description: 'স্বেচ্ছাসেবক নিয়োগ চলছে',
    buttonText: 'যোগ দিন',
    buttonLink: '#career'
  }
]
</script>

<template>
  <section id="notice" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Latest <span class="text-[#6B46C1]">Notices</span>
        </h2>
        <p class="text-xl text-gray-600 font-bengali">সর্বশেষ নোটিশ</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(notice, index) in notices"
          :key="index"
          class="card p-6 hover:scale-105 transition-all duration-300 flex flex-col"
        >
          <!-- Badge -->
          <div class="mb-4">
            <span
              :class="[
                'inline-block px-4 py-1 rounded-full text-white text-sm font-bold font-bengali',
                notice.badgeColor
              ]"
            >
              {{ notice.badge }}
            </span>
          </div>

          <!-- Date -->
          <p class="text-sm text-gray-500 font-bengali mb-3">
            {{ notice.date }}
          </p>

          <!-- Title -->
          <h3 class="text-xl font-bold text-gray-900 mb-2">
            {{ notice.title }}
          </h3>
          <p class="text-base text-gray-700 font-bengali mb-4">
            {{ notice.titleBengali }}
          </p>

          <!-- Description -->
          <p class="text-gray-600 font-bengali leading-relaxed mb-6 flex-grow">
            {{ notice.description }}
          </p>

          <!-- Button -->
          <a
            :href="notice.buttonLink"
            class="btn-primary text-center"
          >
            {{ notice.buttonText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
