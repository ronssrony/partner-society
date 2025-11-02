<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  position: '',
  resume: null as File | null,
  coverLetter: ''
})

const errors = ref<Record<string, string>>({})
const isSubmitting = ref(false)
const isSuccess = ref(false)
const resumeFileName = ref('')

const positions = [
  { value: 'teacher', label: 'শিক্ষক (Teacher)' },
  { value: 'program-manager', label: 'প্রোগ্রাম ম্যানেজার (Program Manager)' },
  { value: 'admin-officer', label: 'প্রশাসনিক কর্মকর্তা (Administrative Officer)' },
  { value: 'others', label: 'অন্যান্য (Others)' }
]

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    // Check file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      errors.value.resume = 'ফাইলের সর্বোচ্চ আকার 5MB'
      formData.value.resume = null
      resumeFileName.value = ''
      return
    }

    // Check file type
    if (file.type !== 'application/pdf') {
      errors.value.resume = 'শুধুমাত্র PDF ফাইল গ্রহণযোগ্য'
      formData.value.resume = null
      resumeFileName.value = ''
      return
    }

    formData.value.resume = file
    resumeFileName.value = file.name
    delete errors.value.resume
  }
}

const validateForm = () => {
  errors.value = {}

  if (!formData.value.name.trim()) {
    errors.value.name = 'নাম আবশ্যক'
  }

  if (!formData.value.email.trim()) {
    errors.value.email = 'ইমেইল আবশ্যক'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'সঠিক ইমেইল প্রদান করুন'
  }

  if (!formData.value.phone.trim()) {
    errors.value.phone = 'ফোন নম্বর আবশ্যক'
  }

  if (!formData.value.position) {
    errors.value.position = 'পদের নাম নির্বাচন করুন'
  }

  if (!formData.value.resume) {
    errors.value.resume = 'জীবনবৃত্তান্ত আবশ্যক'
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true

    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      position: '',
      resume: null,
      coverLetter: ''
    }
    resumeFileName.value = ''

    // Hide success message after 5 seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  }, 1500)
}
</script>

<template>
  <section id="career" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Join <span class="text-[#6B46C1]">Our Team</span>
        </h2>
        <p class="text-xl text-gray-600 font-bengali">আমাদের সাথে যোগ দিন</p>
      </div>

      <div class="max-w-3xl mx-auto">
        <!-- Success Message -->
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="isSuccess"
            class="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg font-bengali"
          >
            আপনার আবেদন সফলভাবে জমা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
          </div>
        </transition>

        <form @submit.prevent="handleSubmit" class="card p-8">
          <!-- Name -->
          <div class="mb-6">
            <label class="block text-gray-700 font-semibold mb-2 font-bengali">
              নাম <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.name"
              type="text"
              class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B46C1] transition-all"
              :class="{ 'border-red-500': errors.name }"
            />
            <p v-if="errors.name" class="text-red-500 text-sm mt-1 font-bengali">{{ errors.name }}</p>
          </div>

          <!-- Email -->
          <div class="mb-6">
            <label class="block text-gray-700 font-semibold mb-2 font-bengali">
              ইমেইল <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.email"
              type="email"
              class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B46C1] transition-all"
              :class="{ 'border-red-500': errors.email }"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1 font-bengali">{{ errors.email }}</p>
          </div>

          <!-- Phone -->
          <div class="mb-6">
            <label class="block text-gray-700 font-semibold mb-2 font-bengali">
              ফোন নম্বর <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.phone"
              type="tel"
              class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B46C1] transition-all"
              :class="{ 'border-red-500': errors.phone }"
            />
            <p v-if="errors.phone" class="text-red-500 text-sm mt-1 font-bengali">{{ errors.phone }}</p>
          </div>

          <!-- Position -->
          <div class="mb-6">
            <label class="block text-gray-700 font-semibold mb-2 font-bengali">
              পদের নাম <span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.position"
              class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B46C1] transition-all font-bengali"
              :class="{ 'border-red-500': errors.position }"
            >
              <option value="">নির্বাচন করুন</option>
              <option v-for="position in positions" :key="position.value" :value="position.value">
                {{ position.label }}
              </option>
            </select>
            <p v-if="errors.position" class="text-red-500 text-sm mt-1 font-bengali">{{ errors.position }}</p>
          </div>

          <!-- Resume Upload -->
          <div class="mb-6">
            <label class="block text-gray-700 font-semibold mb-2 font-bengali">
              জীবনবৃত্তান্ত (PDF only, max 5MB) <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <input
                type="file"
                @change="handleFileChange"
                accept=".pdf"
                class="hidden"
                id="resume-upload"
              />
              <label
                for="resume-upload"
                class="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer hover:border-[#6B46C1] transition-all"
                :class="{ 'border-red-500': errors.resume, 'border-[#6B46C1]': resumeFileName }"
              >
                <svg class="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <span class="font-bengali">{{ resumeFileName || 'ফাইল নির্বাচন করুন' }}</span>
              </label>
            </div>
            <p v-if="errors.resume" class="text-red-500 text-sm mt-1 font-bengali">{{ errors.resume }}</p>
          </div>

          <!-- Cover Letter -->
          <div class="mb-6">
            <label class="block text-gray-700 font-semibold mb-2 font-bengali">
              কভার লেটার
            </label>
            <textarea
              v-model="formData.coverLetter"
              rows="5"
              class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B46C1] transition-all"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-[#6B46C1] hover:bg-[#553399] text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-bengali"
          >
            <span v-if="!isSubmitting">আবেদন করুন</span>
            <span v-else>জমা দেওয়া হচ্ছে...</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
