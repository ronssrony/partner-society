<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Activity data - merged from both RecentActivities and EventsActivities
// In a real app, this would come from an API or store
const activities = [
  {
    id: 1,
    title: "Annual Scholarship Distribution Ceremony",
    titleBengali: "বার্ষিক বৃত্তি বিতরণ অনুষ্ঠান",
    date: "১৫ জানুয়ারী, ২০২৫",
    badge: "EVENTS",
    image: "/images/image-1.jpeg",
    description: "বছরব্যাপী বৃত্তি পরীক্ষা এবং সম্প্রদায় ভিত্তিক শিক্ষা কার্যক্রম",
    fullDescription: "Partner Society BD এর বার্ষিক বৃত্তি বিতরণ অনুষ্ঠানে ১০০+ মেধাবী শিক্ষার্থীদের মধ্যে বৃত্তি প্রদান করা হয়েছে। এই কার্যক্রমের মাধ্যমে আমরা দরিদ্র ও মেধাবী শিক্ষার্থীদের শিক্ষা অব্যাহত রাখতে সহায়তা করছি।"
  },
  {
    id: 2,
    title: "Rural School Infrastructure Development",
    titleBengali: "গ্রামীণ স্কুল অবকাঠামো উন্নয়ন",
    date: "১০ ফেব্রুয়ারী, ২০২৫",
    badge: "PROGRAMS",
    image: "/images/image-2.jpeg",
    description: "গ্রামীণ স্কুল উন্নয়নে বিশেষ প্রকল্প",
    fullDescription: "জলঢাকা উপজেলার ৮টি স্কুলে আধুনিক অবকাঠামো উন্নয়ন প্রকল্প বাস্তবায়ন করা হচ্ছে। এতে নতুন শ্রেণীকক্ষ, লাইব্রেরি, এবং কম্পিউটার ল্যাব স্থাপন অন্তর্ভুক্ত রয়েছে।"
  },
  {
    id: 3,
    title: "Teacher Professional Development Workshop",
    titleBengali: "শিক্ষক পেশাগত উন্নয়ন কর্মশালা",
    date: "২৫ ফেব্রুয়ারী, ২০২৫",
    badge: "TRAINING",
    image: "/images/image-3.jpeg",
    description: "নিয়মিত শিক্ষক প্রশিক্ষণ এবং দক্ষতা কর্মশালা",
    fullDescription: "৫০+ শিক্ষকদের জন্য আধুনিক শিক্ষা পদ্ধতি, ডিজিটাল শিক্ষা সরঞ্জাম ব্যবহার এবং শ্রেণীকক্ষ ব্যবস্থাপনার উপর ৩ দিনের প্রশিক্ষণ কর্মশালা আয়োজন করা হয়েছে।"
  },
  {
    id: 4,
    title: "Student Science Fair 2025",
    titleBengali: "শিক্ষার্থী বিজ্ঞান মেলা ২০২৫",
    date: "০৫ মার্চ, ২০২৫",
    badge: "EVENTS",
    image: "/images/image-4.jpeg",
    description: "বিজ্ঞান ও প্রযুক্তি প্রদর্শনী এবং প্রতিযোগিতা",
    fullDescription: "২০০+ শিক্ষার্থীর অংশগ্রহণে বিজ্ঞান মেলা আয়োজন করা হয়েছে যেখানে তারা তাদের উদ্ভাবনী প্রকল্প প্রদর্শন করেছে এবং বিজ্ঞান ও প্রযুক্তিতে তাদের আগ্রহ বৃদ্ধি পেয়েছে।"
  },
  {
    id: 5,
    title: "Digital Literacy Program Launch",
    titleBengali: "ডিজিটাল সাক্ষরতা কর্মসূচি উদ্বোধন",
    date: "২০ মার্চ, ২০২৫",
    badge: "PROGRAMS",
    image: "/images/image-5.jpeg",
    description: "কম্পিউটার এবং ইন্টারনেট প্রশিক্ষণ কার্যক্রম",
    fullDescription: "গ্রামীণ শিক্ষার্থীদের জন্য কম্পিউটার বেসিক, ইন্টারনেট ব্যবহার এবং অনলাইন নিরাপত্তা বিষয়ক প্রশিক্ষণ কর্মসূচি শুরু হয়েছে। এই কর্মসূচির মাধ্যমে ডিজিটাল যুগে শিক্ষার্থীদের প্রস্তুত করা হচ্ছে।"
  },
  {
    id: 6,
    title: "Community Health & Education Camp",
    titleBengali: "কমিউনিটি স্বাস্থ্য ও শিক্ষা শিবির",
    date: "১০ এপ্রিল, ২০২৫",
    badge: "EVENTS",
    image: "/images/image-6.jpeg",
    description: "স্বাস্থ্য সচেতনতা এবং শিক্ষা মূলক কার্যক্রম",
    fullDescription: "স্থানীয় সম্প্রদায়ের জন্য বিনামূল্যে স্বাস্থ্য পরীক্ষা, শিক্ষা পরামর্শ এবং সচেতনতামূলক সেমিনার আয়োজন করা হয়েছে যেখানে ৫০০+ মানুষ উপকৃত হয়েছেন।"
  }
]

const activityId = computed(() => parseInt(route.params.id as string))
const activity = computed(() => activities.find(a => a.id === activityId.value))

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <!-- Hero Section with Image -->
    <div v-if="activity" class="pt-20 bg-gray-50">
      <!-- Image Container -->
      <div class="bg-white border-b border-gray-200">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="relative h-96 md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              :src="activity.image"
              :alt="activity.title"
              class="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>

      <!-- Title Section -->
      <div class="bg-white border-b border-gray-200">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <!-- Back Button -->
          <button
            @click="goBack"
            class="mb-6 inline-flex items-center text-[#6B46C1] hover:text-[#553399] font-semibold transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span class="font-bengali">ফিরে যান</span>
          </button>

          <div class="flex flex-wrap items-center gap-3 mb-6">
            <span v-if="activity.badge" class="inline-block px-4 py-2 bg-[#6B46C1] text-white text-sm font-semibold rounded-full">
              {{ activity.badge }}
            </span>
            <span class="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full font-bengali">
              {{ activity.date }}
            </span>
          </div>

          <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            {{ activity.title }}
          </h1>
          <h2 v-if="activity.titleBengali" class="text-2xl md:text-4xl font-bold text-[#6B46C1] font-bengali">
            {{ activity.titleBengali }}
          </h2>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div v-if="activity" class="bg-gray-50 py-12 md:py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Overview -->
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Overview</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6 font-bengali">
          {{ activity.description }}
        </p>

        <div class="border-t border-gray-200 pt-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4 font-bengali">বিস্তারিত বিবরণ</h3>
          <p class="text-gray-700 leading-relaxed text-lg font-bengali">
            {{ activity.fullDescription }}
          </p>
        </div>
      </div>

      <!-- Key Highlights -->
      <div class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-bengali">মূল বৈশিষ্ট্য</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex items-start">
            <div class="flex-shrink-0 w-10 h-10 bg-[#6B46C1]/10 rounded-full flex items-center justify-center mr-4">
              <svg class="w-5 h-5 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-1 font-bengali">সম্প্রদায়ের প্রভাব</h4>
              <p class="text-gray-600 font-bengali">স্থানীয় সম্প্রদায় ও শিক্ষার্থীদের উপর সরাসরি ইতিবাচক প্রভাব</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0 w-10 h-10 bg-[#6B46C1]/10 rounded-full flex items-center justify-center mr-4">
              <svg class="w-5 h-5 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-1 font-bengali">পেশাদার উন্নয়ন</h4>
              <p class="text-gray-600 font-bengali">উন্নত প্রশিক্ষণ এবং দক্ষতা উন্নয়নের সুযোগ</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0 w-10 h-10 bg-[#6B46C1]/10 rounded-full flex items-center justify-center mr-4">
              <svg class="w-5 h-5 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-1 font-bengali">মানসম্মত শিক্ষা</h4>
              <p class="text-gray-600 font-bengali">শিক্ষায় উৎকর্ষতা প্রদানের প্রতিশ্রুতি</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0 w-10 h-10 bg-[#6B46C1]/10 rounded-full flex items-center justify-center mr-4">
              <svg class="w-5 h-5 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-1 font-bengali">উদ্ভাবন</h4>
              <p class="text-gray-600 font-bengali">আধুনিক প্রযুক্তি এবং শিক্ষণ পদ্ধতি ব্যবহার</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="bg-gradient-to-r from-[#6B46C1] to-[#553399] rounded-2xl shadow-lg p-8 md:p-10 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4 font-bengali">যোগ দিন</h2>
        <p class="text-white/90 text-lg mb-6 max-w-2xl mx-auto font-bengali">
          আমাদের উদ্যোগ সম্পর্কে আরও জানতে বা জড়িত হতে চান? আপনি কীভাবে পরিবর্তন আনতে পারেন তা দেখতে আজই আমাদের সাথে যোগাযোগ করুন।
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/#contact"
            class="inline-block bg-white text-[#6B46C1] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors font-bengali"
          >
            যোগাযোগ করুন
          </NuxtLink>
          <button
            @click="goBack"
            class="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors font-bengali"
          >
            কার্যক্রমে ফিরে যান
          </button>
        </div>
      </div>
      </div>
    </div>

    <!-- Not Found -->
    <div v-else class="pt-20 min-h-screen flex items-center justify-center px-4">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4 font-bengali">কার্যক্রম পাওয়া যায়নি</h1>
        <p class="text-gray-600 mb-8 font-bengali">আপনি যে কার্যক্রমটি খুঁজছেন তা বিদ্যমান নেই।</p>
        <button
          @click="goBack"
          class="inline-block bg-[#6B46C1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#553399] transition-colors font-bengali"
        >
          ফিরে যান
        </button>
      </div>
    </div>

    <Footer />
  </div>
</template>
