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
    type: 'student', // student notice - goes to registration
    buttonLink: '/registration'
  },
  {
    badge: 'জরুরি',
    badgeColor: 'bg-[#EF4444]',
    date: '১৫ ডিসেম্বর, ২০২৪',
    title: 'Scholarship Exam Registration Deadline',
    titleBengali: 'বৃত্তি পরীক্ষা রেজিস্ট্রেশনের শেষ তারিখ',
    description: 'বৃত্তি পরীক্ষা রেজিস্ট্রেশনের শেষ তারিখ ৩১ ডিসেম্বর',
    buttonText: 'আবেদন করুন',
    type: 'student', // student notice - goes to registration
    buttonLink: '/registration'
  },
  {
    badge: 'সুযোগ',
    badgeColor: 'bg-[#FACC15]',
    date: 'চলমান',
    title: 'Volunteer Recruitment Ongoing',
    titleBengali: 'স্বেচ্ছাসেবক নিয়োগ চলছে',
    description: 'স্বেচ্ছাসেবক নিয়োগ চলছে',
    buttonText: 'যোগ দিন',
    type: 'career', // career notice - goes to career page
    buttonLink: '/career'
  }
]
</script>

<template>
  <section id="notice" class="py-12 md:py-16 bg-white">
    <div class="container-custom">
      <div class="text-center mb-10 md:mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Latest <span class="text-[#6B46C1]">Notices</span>
        </h2>
        <p class="text-lg md:text-xl text-gray-600 font-bengali">সর্বশেষ নোটিশ</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div
          v-for="(notice, index) in notices"
          :key="index"
          class="card p-5 md:p-6 hover:scale-105 transition-all duration-300 flex flex-col border border-gray-200 hover:border-[#6B46C1]"
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
            :class="[
              'inline-block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105',
              notice.type === 'career'
                ? 'bg-[#EF4444] hover:bg-[#DC2626] text-white'
                : 'bg-[#6B46C1] hover:bg-[#553399] text-white'
            ]"
          >
            {{ notice.buttonText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
