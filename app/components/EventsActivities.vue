<script setup lang="ts">
import { ref } from 'vue'

const activities = [
  {
    id: 1,
    image: '/images/image-1.jpeg',
    date: '১৫ জানুয়ারী, ২০২৫',
    badge: 'EVENTS',
    title: 'Annual Scholarship Distribution Ceremony',
    titleBengali: 'বার্ষিক বৃত্তি বিতরণ অনুষ্ঠান',
    description: 'বছরব্যাপী বৃত্তি পরীক্ষা এবং সম্প্রদায় ভিত্তিক শিক্ষা কার্যক্রম',
    fullDescription: 'Partner Society BD এর বার্ষিক বৃত্তি বিতরণ অনুষ্ঠানে ১০০+ মেধাবী শিক্ষার্থীদের মধ্যে বৃত্তি প্রদান করা হয়েছে। এই কার্যক্রমের মাধ্যমে আমরা দরিদ্র ও মেধাবী শিক্ষার্থীদের শিক্ষা অব্যাহত রাখতে সহায়তা করছি।'
  },
  {
    id: 2,
    image: '/images/image-2.jpeg',
    date: '১০ ফেব্রুয়ারী, ২০২৫',
    badge: 'PROGRAMS',
    title: 'Rural School Infrastructure Development',
    titleBengali: 'গ্রামীণ স্কুল অবকাঠামো উন্নয়ন',
    description: 'গ্রামীণ স্কুল উন্নয়নে বিশেষ প্রকল্প',
    fullDescription: 'জলঢাকা উপজেলার ৮টি স্কুলে আধুনিক অবকাঠামো উন্নয়ন প্রকল্প বাস্তবায়ন করা হচ্ছে। এতে নতুন শ্রেণীকক্ষ, লাইব্রেরি, এবং কম্পিউটার ল্যাব স্থাপন অন্তর্ভুক্ত রয়েছে।'
  },
  {
    id: 3,
    image: '/images/image-3.jpeg',
    date: '২৫ ফেব্রুয়ারী, ২০২৫',
    badge: 'TRAINING',
    title: 'Teacher Professional Development Workshop',
    titleBengali: 'শিক্ষক পেশাগত উন্নয়ন কর্মশালা',
    description: 'নিয়মিত শিক্ষক প্রশিক্ষণ এবং দক্ষতা কর্মশালা',
    fullDescription: '৫০+ শিক্ষকদের জন্য আধুনিক শিক্ষা পদ্ধতি, ডিজিটাল শিক্ষা সরঞ্জাম ব্যবহার এবং শ্রেণীকক্ষ ব্যবস্থাপনার উপর ৩ দিনের প্রশিক্ষণ কর্মশালা আয়োজন করা হয়েছে।'
  },
  {
    id: 4,
    image: '/images/image-4.jpeg',
    date: '০৫ মার্চ, ২০২৫',
    badge: 'EVENTS',
    title: 'Student Science Fair 2025',
    titleBengali: 'শিক্ষার্থী বিজ্ঞান মেলা ২০২৫',
    description: 'বিজ্ঞান ও প্রযুক্তি প্রদর্শনী এবং প্রতিযোগিতা',
    fullDescription: '২০০+ শিক্ষার্থীর অংশগ্রহণে বিজ্ঞান মেলা আয়োজন করা হয়েছে যেখানে তারা তাদের উদ্ভাবনী প্রকল্প প্রদর্শন করেছে এবং বিজ্ঞান ও প্রযুক্তিতে তাদের আগ্রহ বৃদ্ধি পেয়েছে।'
  },
  {
    id: 5,
    image: '/images/image-5.jpeg',
    date: '২০ মার্চ, ২০২৫',
    badge: 'PROGRAMS',
    title: 'Digital Literacy Program Launch',
    titleBengali: 'ডিজিটাল সাক্ষরতা কর্মসূচি উদ্বোধন',
    description: 'কম্পিউটার এবং ইন্টারনেট প্রশিক্ষণ কার্যক্রম',
    fullDescription: 'গ্রামীণ শিক্ষার্থীদের জন্য কম্পিউটার বেসিক, ইন্টারনেট ব্যবহার এবং অনলাইন নিরাপত্তা বিষয়ক প্রশিক্ষণ কর্মসূচি শুরু হয়েছে। এই কর্মসূচির মাধ্যমে ডিজিটাল যুগে শিক্ষার্থীদের প্রস্তুত করা হচ্ছে।'
  },
  {
    id: 6,
    image: '/images/image-6.jpeg',
    date: '১০ এপ্রিল, ২০২৫',
    badge: 'EVENTS',
    title: 'Community Health & Education Camp',
    titleBengali: 'কমিউনিটি স্বাস্থ্য ও শিক্ষা শিবির',
    description: 'স্বাস্থ্য সচেতনতা এবং শিক্ষা মূলক কার্যক্রম',
    fullDescription: 'স্থানীয় সম্প্রদায়ের জন্য বিনামূল্যে স্বাস্থ্য পরীক্ষা, শিক্ষা পরামর্শ এবং সচেতনতামূলক সেমিনার আয়োজন করা হয়েছে যেখানে ৫০০+ মানুষ উপকৃত হয়েছেন।'
  }
]

const selectedActivity = ref<typeof activities[0] | null>(null)

const openDetails = (activity: typeof activities[0]) => {
  selectedActivity.value = activity
  document.body.style.overflow = 'hidden'
}

const closeDetails = () => {
  selectedActivity.value = null
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Recent <span class="text-[#6B46C1]">Activities</span>
        </h2>
        <p class="text-xl text-gray-600 font-bengali">সাম্প্রতিক কার্যক্রম</p>
      </div>

      <!-- Activity Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="activity in activities"
          :key="activity.id"
          @click="openDetails(activity)"
          class="card overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
        >
          <!-- Image -->
          <div class="relative overflow-hidden h-56">
            <img
              :src="activity.image"
              :alt="activity.titleBengali"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <!-- Badge -->
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-[#6B46C1] text-white text-xs font-semibold rounded-full">
                {{ activity.badge }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Date -->
            <p class="text-sm text-gray-500 font-bengali mb-3">{{ activity.date }}</p>

            <!-- Title -->
            <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#6B46C1] transition-colors">
              {{ activity.title }}
            </h3>
            <p class="text-base text-gray-700 font-bengali font-semibold mb-3">
              {{ activity.titleBengali }}
            </p>

            <!-- Description -->
            <p class="text-gray-600 font-bengali leading-relaxed text-sm line-clamp-2">
              {{ activity.description }}
            </p>

            <!-- Read More Link -->
            <div class="mt-4 flex items-center text-[#6B46C1] font-semibold text-sm group-hover:gap-2 transition-all">
              <span>বিস্তারিত পড়ুন</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Detail Modal -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="selectedActivity"
        @click="closeDetails"
        class="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
      >
        <div
          @click.stop
          class="bg-white rounded-2xl max-w-3xl w-full my-8 overflow-hidden shadow-2xl transform transition-all"
        >
          <!-- Modal Header Image -->
          <div class="relative h-96">
            <img
              :src="selectedActivity.image"
              :alt="selectedActivity.titleBengali"
              class="w-full h-full object-cover"
            />
            <!-- Close Button -->
            <button
              @click="closeDetails"
              class="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
            >
              <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <!-- Badge -->
            <div class="absolute top-4 left-4">
              <span class="px-4 py-2 bg-[#6B46C1] text-white text-sm font-semibold rounded-full">
                {{ selectedActivity.badge }}
              </span>
            </div>
          </div>

          <!-- Modal Content -->
          <div class="p-8">
            <!-- Date -->
            <p class="text-sm text-gray-500 font-bengali mb-4">{{ selectedActivity.date }}</p>

            <!-- Title -->
            <h2 class="text-3xl font-bold text-gray-900 mb-3">
              {{ selectedActivity.title }}
            </h2>
            <h3 class="text-2xl text-[#6B46C1] font-bengali font-bold mb-6">
              {{ selectedActivity.titleBengali }}
            </h3>

            <!-- Full Description -->
            <p class="text-gray-700 font-bengali leading-relaxed text-lg mb-6">
              {{ selectedActivity.fullDescription }}
            </p>

            <!-- Close Button -->
            <button
              @click="closeDetails"
              class="w-full bg-[#6B46C1] hover:bg-[#553399] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>
