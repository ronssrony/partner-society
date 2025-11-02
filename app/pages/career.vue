<script setup lang="ts">
import { ref } from 'vue'

const circulars = [
  {
    id: 1,
    title: 'Primary School Teacher',
    titleBengali: 'প্রাথমিক বিদ্যালয়ের শিক্ষক',
    location: 'Jaldhaka, Nilphamari',
    locationBengali: 'জলঢাকা, নীলফামারী',
    type: 'Full Time',
    typeBengali: 'পূর্ণকালীন',
    deadline: '৩১ ডিসেম্বর, ২০২৫',
    vacancies: 5,
    description: 'আমরা জলঢাকা উপজেলার বিভিন্ন স্কুলে অভিজ্ঞ ও মেধাবী প্রাথমিক বিদ্যালয়ের শিক্ষক নিয়োগ দিতে চাই।',
    requirements: [
      'স্নাতক ডিগ্রি (শিক্ষা বিষয়ে ডিগ্রি থাকলে অগ্রাধিকার)',
      'ন্যূনতম ২ বছরের শিক্ষকতার অভিজ্ঞতা',
      'বাংলা ও ইংরেজিতে দক্ষতা',
      'কম্পিউটার ব্যবহারে পারদর্শী'
    ],
    salary: '২৫,০০০ - ৩৫,০০০ টাকা'
  },
  {
    id: 2,
    title: 'Program Manager',
    titleBengali: 'প্রোগ্রাম ম্যানেজার',
    location: 'Rangpur',
    locationBengali: 'রংপুর',
    type: 'Full Time',
    typeBengali: 'পূর্ণকালীন',
    deadline: '১৫ জানুয়ারী, ২০২৬',
    vacancies: 1,
    description: 'শিক্ষা প্রকল্পসমূহের বাস্তবায়ন, মনিটরিং ও স্কুলগুলোর সঙ্গে যোগাযোগের জন্য অভিজ্ঞ প্রোগ্রাম ম্যানেজার প্রয়োজন।',
    requirements: [
      'মাস্টার্স ডিগ্রি (শিক্ষা/সমাজকল্যাণ/উন্নয়ন বিষয়ে)',
      'ন্যূনতম ৫ বছরের প্রকল্প ব্যবস্থাপনার অভিজ্ঞতা',
      'শক্তিশালী নেতৃত্ব ও যোগাযোগ দক্ষতা',
      'MS Office ও প্রকল্প ব্যবস্থাপনা সফটওয়্যারে দক্ষ'
    ],
    salary: '৫০,০০০ - ৭০,০০০ টাকা'
  },
  {
    id: 3,
    title: 'IT Support Specialist',
    titleBengali: 'আইটি সহায়তা বিশেষজ্ঞ',
    location: 'Jaldhaka, Nilphamari',
    locationBengali: 'জলঢাকা, নীলফামারী',
    type: 'Part Time',
    typeBengali: 'খণ্ডকালীন',
    deadline: '২০ জানুয়ারী, ২০২৬',
    vacancies: 2,
    description: 'স্কুলগুলোতে কম্পিউটার ল্যাব সেটআপ, রক্ষণাবেক্ষণ এবং শিক্ষক-শিক্ষার্থীদের প্রশিক্ষণ প্রদানের জন্য।',
    requirements: [
      'কম্পিউটার সায়েন্স/আইটি বিষয়ে ডিগ্রি বা ডিপ্লোমা',
      'হার্ডওয়্যার ও নেটওয়ার্কিং জ্ঞান',
      'Windows ও Linux অপারেটিং সিস্টেমে অভিজ্ঞতা',
      'শিক্ষা খাতে কাজের অভিজ্ঞতা থাকলে অগ্রাধিকার'
    ],
    salary: '২০,০০০ - ৩০,০০০ টাকা'
  }
]

const selectedCircular = ref<typeof circulars[0] | null>(null)

const openDetails = (circular: typeof circulars[0]) => {
  selectedCircular.value = circular
}

const closeDetails = () => {
  selectedCircular.value = null
}

// Page metadata
useHead({
  title: 'Career Opportunities - Partner Society BD',
  meta: [
    { name: 'description', content: 'Join our team and make a difference in education. Explore current job openings at Partner Society BD.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <!-- Page Header -->
    <section class="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-purple-100">
      <div class="container-custom text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Career <span class="text-[#6B46C1]">Opportunities</span>
        </h1>
        <p class="text-xl text-gray-600 font-bengali">আমাদের সাথে যোগ দিন</p>
        <p class="mt-4 text-gray-600">Join our team and make a difference in education</p>
      </div>
    </section>

    <!-- Job Circulars -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="circular in circulars"
            :key="circular.id"
            class="card p-6 cursor-pointer hover:shadow-xl transition-all duration-300 group"
            @click="openDetails(circular)"
          >
            <!-- Header -->
            <div class="flex items-start justify-between mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-[#6B46C1] transition-colors mb-2">
                  {{ circular.title }}
                </h3>
                <p class="text-base text-gray-700 font-bengali font-semibold">
                  {{ circular.titleBengali }}
                </p>
              </div>
              <div class="bg-[#6B46C1]/10 px-3 py-1 rounded-full">
                <span class="text-[#6B46C1] font-bold text-sm">{{ circular.vacancies }} পদ</span>
              </div>
            </div>

            <!-- Details -->
            <div class="space-y-3 mb-4">
              <div class="flex items-center gap-2 text-gray-600 text-sm">
                <svg class="w-4 h-4 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="font-bengali">{{ circular.locationBengali }}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-600 text-sm">
                <svg class="w-4 h-4 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="font-bengali">{{ circular.typeBengali }}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-600 text-sm">
                <svg class="w-4 h-4 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span class="font-bengali">শেষ তারিখ: {{ circular.deadline }}</span>
              </div>
            </div>

            <!-- Description -->
            <p class="text-gray-600 font-bengali text-sm line-clamp-2 mb-4">
              {{ circular.description }}
            </p>

            <!-- View Details Button -->
            <button class="w-full bg-[#6B46C1] hover:bg-[#553399] text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm font-bengali">
              বিস্তারিত দেখুন
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Circular Details Modal -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="selectedCircular"
        @click="closeDetails"
        class="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
      >
        <div
          @click.stop
          class="bg-white rounded-2xl max-w-3xl w-full my-8 overflow-hidden shadow-2xl"
        >
          <!-- Modal Header -->
          <div class="bg-gradient-to-r from-[#6B46C1] to-[#8B5CF6] p-8 text-white">
            <div class="flex items-start justify-between">
              <div>
                <h2 class="text-3xl font-bold mb-2">{{ selectedCircular.title }}</h2>
                <h3 class="text-2xl font-bengali">{{ selectedCircular.titleBengali }}</h3>
              </div>
              <button
                @click="closeDetails"
                class="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal Content -->
          <div class="p-8">
            <!-- Info Grid -->
            <div class="grid md:grid-cols-2 gap-4 mb-6">
              <div class="flex items-center gap-3">
                <div class="bg-[#6B46C1]/10 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Location</p>
                  <p class="font-semibold font-bengali">{{ selectedCircular.locationBengali }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="bg-[#6B46C1]/10 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Job Type</p>
                  <p class="font-semibold font-bengali">{{ selectedCircular.typeBengali }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="bg-[#6B46C1]/10 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-bengali">শেষ তারিখ</p>
                  <p class="font-semibold font-bengali">{{ selectedCircular.deadline }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="bg-[#6B46C1]/10 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-bengali">বেতন</p>
                  <p class="font-semibold font-bengali">{{ selectedCircular.salary }}</p>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div class="mb-6">
              <h4 class="text-xl font-bold text-gray-900 mb-3 font-bengali">বিবরণ</h4>
              <p class="text-gray-700 font-bengali leading-relaxed">{{ selectedCircular.description }}</p>
            </div>

            <!-- Requirements -->
            <div class="mb-6">
              <h4 class="text-xl font-bold text-gray-900 mb-3 font-bengali">যোগ্যতা ও প্রয়োজনীয়তা</h4>
              <ul class="space-y-2">
                <li
                  v-for="(req, index) in selectedCircular.requirements"
                  :key="index"
                  class="flex items-start gap-3 text-gray-700 font-bengali"
                >
                  <svg class="w-5 h-5 text-[#6B46C1] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{{ req }}</span>
                </li>
              </ul>
            </div>

            <!-- Apply Button -->
            <a
              :href="`/career/apply/${selectedCircular.id}`"
              class="block w-full bg-[#6B46C1] hover:bg-[#553399] text-white px-6 py-4 rounded-lg font-semibold text-center transition-colors font-bengali text-lg"
            >
              আবেদন করুন
            </a>
          </div>
        </div>
      </div>
    </transition>

    <Footer />
  </div>
</template>
