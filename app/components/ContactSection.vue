<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref<Record<string, string>>({})
const isSubmitting = ref(false)
const isSuccess = ref(false)

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

  if (!formData.value.message.trim()) {
    errors.value.message = 'বার্তা আবশ্যক'
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
      message: ''
    }

    // Hide success message after 5 seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  }, 1500)
}
</script>

<template>
  <section id="contact" class="py-12 md:py-16 bg-white">
    <div class="container-custom">
      <div class="text-center mb-10 md:mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Contact <span class="text-[#6B46C1]">Us</span>
        </h2>
        <p class="text-lg md:text-xl text-gray-600 font-bengali">যোগাযোগ করুন</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
        <!-- Contact Information -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-6 font-bengali">যোগাযোগের ঠিকানা</h3>

          <div class="space-y-6">
            <!-- Address -->
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-[#6B46C1]/10 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1 font-bengali">ঠিকানা</h4>
                <p class="text-gray-600">Dhap, Kakoli Lane, Rangpur</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-[#6B46C1]/10 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1 font-bengali">ফোন</h4>
                <p class="text-gray-600">01337-212468</p>
                <p class="text-gray-600">01337-212469</p>
                <p class="text-gray-600">01337-212467</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-[#6B46C1]/10 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1 font-bengali">ইমেইল</h4>
                <p class="text-gray-600">partnersocietynet@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
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
              আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
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

            <!-- Message -->
            <div class="mb-6">
              <label class="block text-gray-700 font-semibold mb-2 font-bengali">
                বার্তা <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="formData.message"
                rows="5"
                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B46C1] transition-all"
                :class="{ 'border-red-500': errors.message }"
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1 font-bengali">{{ errors.message }}</p>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-[#6B46C1] hover:bg-[#553399] text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-bengali"
            >
              <span v-if="!isSubmitting">পাঠান</span>
              <span v-else>পাঠানো হচ্ছে...</span>
            </button>
          </form>
        </div>
      </div>

      <!-- Google Map -->
      <div class="rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.123!2d89.234!3d25.742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ0JzMxLjIiTiA4OcKwMTQnMDIuNCJF!5e0!3m2!1sen!2sbd!4v1234567890"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
</template>
