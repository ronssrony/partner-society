<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const jobId = computed(() => route.params.id)

const jobs = {
  '1': {
    title: 'Primary School Teacher',
    titleBengali: 'প্রাথমিক বিদ্যালয়ের শিক্ষক'
  },
  '2': {
    title: 'Program Manager',
    titleBengali: 'প্রোগ্রাম ম্যানেজার'
  },
  '3': {
    title: 'IT Support Specialist',
    titleBengali: 'আইটি সহায়তা বিশেষজ্ঞ'
  }
}

const selectedJob = computed(() => jobs[jobId.value as keyof typeof jobs] || jobs['1'])

// Form state
const formData = ref({
  name: '',
  email: '',
  phone: '',
  position: selectedJob.value.title,
  resume: null as File | null,
  coverLetter: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    formData.value.resume = target.files[0]
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true

  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))

  isSuccess.value = true
  isSubmitting.value = false

  // Reset form after success
  setTimeout(() => {
    isSuccess.value = false
    formData.value = {
      name: '',
      email: '',
      phone: '',
      position: selectedJob.value.title,
      resume: null,
      coverLetter: ''
    }
  }, 3000)
}

// Page metadata
useHead({
  title: `Apply for ${selectedJob.value.title} - Partner Society BD`,
  meta: [
    { name: 'description', content: `Submit your application for ${selectedJob.value.title} position at Partner Society BD.` }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <!-- Page Header -->
    <section class="pt-28 pb-10 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50">
      <div class="container-custom text-center">
        <div class="inline-block mb-4 px-4 py-2 bg-[#6B46C1]/10 rounded-full">
          <span class="text-[#6B46C1] font-semibold">Job Application</span>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Apply for <span class="text-[#6B46C1]">Position</span>
        </h1>
        <p class="text-xl text-gray-700 font-semibold mb-2">{{ selectedJob.title }}</p>
        <p class="text-lg text-gray-600 font-bengali">{{ selectedJob.titleBengali }}</p>
      </div>
    </section>

    <!-- Application Form -->
    <section class="py-12 bg-gray-50">
      <div class="container-custom max-w-3xl">
        <!-- Success Message -->
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div v-if="isSuccess" class="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-xl">
            <div class="flex items-center gap-3 text-green-700">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p class="font-bold text-lg">Application Submitted Successfully!</p>
                <p class="font-bengali">আপনার আবেদন সফলভাবে জমা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
              </div>
            </div>
          </div>
        </transition>

        <!-- Form Card -->
        <div class="card p-8">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Position (Read-only) -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2 font-bengali">
                পদের নাম *
              </label>
              <input
                type="text"
                :value="selectedJob.titleBengali"
                readonly
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-gray-50 font-bengali cursor-not-allowed"
              />
            </div>

            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-700 mb-2 font-bengali">
                নাম (Full Name) *
              </label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#6B46C1] focus:ring-2 focus:ring-[#6B46C1]/20 transition-colors outline-none"
                placeholder="আপনার পূর্ণ নাম লিখুন"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-semibold text-gray-700 mb-2 font-bengali">
                ইমেইল (Email) *
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#6B46C1] focus:ring-2 focus:ring-[#6B46C1]/20 transition-colors outline-none"
                placeholder="example@email.com"
              />
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2 font-bengali">
                ফোন নম্বর (Phone) *
              </label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                required
                pattern="[0-9]{11}"
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#6B46C1] focus:ring-2 focus:ring-[#6B46C1]/20 transition-colors outline-none"
                placeholder="01XXXXXXXXX"
              />
              <p class="text-sm text-gray-500 mt-1 font-bengali">১১ ডিজিটের মোবাইল নম্বর লিখুন</p>
            </div>

            <!-- Resume Upload -->
            <div>
              <label for="resume" class="block text-sm font-semibold text-gray-700 mb-2 font-bengali">
                জীবনবৃত্তান্ত (Resume/CV) *
              </label>
              <div class="relative">
                <input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  @change="handleFileUpload"
                  class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#6B46C1] focus:ring-2 focus:ring-[#6B46C1]/20 transition-colors outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#6B46C1] file:text-white hover:file:bg-[#553399] file:cursor-pointer"
                />
              </div>
              <p class="text-sm text-gray-500 mt-1 font-bengali">PDF, DOC, বা DOCX ফাইল (সর্বোচ্চ 5MB)</p>
              <p v-if="formData.resume" class="text-sm text-green-600 mt-2 font-bengali">
                ✓ {{ formData.resume.name }} নির্বাচিত হয়েছে
              </p>
            </div>

            <!-- Cover Letter -->
            <div>
              <label for="coverLetter" class="block text-sm font-semibold text-gray-700 mb-2 font-bengali">
                কভার লেটার (Cover Letter)
              </label>
              <textarea
                id="coverLetter"
                v-model="formData.coverLetter"
                rows="6"
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#6B46C1] focus:ring-2 focus:ring-[#6B46C1]/20 transition-colors outline-none resize-none"
                placeholder="আপনি কেন এই পদের জন্য উপযুক্ত তা সংক্ষেপে লিখুন..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
              <button
                type="submit"
                :disabled="isSubmitting"
                :class="[
                  'w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 font-bengali',
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#6B46C1] hover:bg-[#553399] text-white hover:scale-105 shadow-lg'
                ]"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  জমা হচ্ছে...
                </span>
                <span v-else>আবেদন জমা দিন</span>
              </button>
            </div>

            <!-- Back to Jobs Link -->
            <div class="text-center pt-4">
              <a
                href="/career"
                class="text-[#6B46C1] hover:text-[#553399] font-semibold transition-colors font-bengali"
              >
                ← সকল চাকরি দেখুন
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
