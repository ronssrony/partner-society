<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  schoolName: '',
  schoolAddress: '',
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

  if (!formData.value.phone.trim()) {
    errors.value.phone = 'ফোন নম্বর আবশ্যক'
  }

  if (!formData.value.schoolName.trim()) {
    errors.value.schoolName = 'স্কুলের নাম আবশ্যক'
  }

  if (!formData.value.schoolAddress.trim()) {
    errors.value.schoolAddress = 'স্কুলের ঠিকানা আবশ্যক'
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
      schoolName: '',
      schoolAddress: '',
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
  <section id="registration" class="">
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
          class="mb-4 md:mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg font-bengali"
        >
          আপনার আবেদন সফলভাবে জমা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
        </div>
      </transition>

      <form @submit.prevent="handleSubmit" class="card p-4 md:p-8">
          <!-- Name -->
          <div class="mb-4 md:mb-6">
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
          <div class="mb-4 md:mb-6">
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
          <div class="mb-4 md:mb-6">
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

          <!-- School Name -->
          <div class="mb-4 md:mb-6">
            <label class="block text-gray-700 font-semibold mb-2 font-bengali">
              স্কুলের নাম <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.schoolName"
              type="text"
              class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B46C1] transition-all"
              :class="{ 'border-red-500': errors.schoolName }"
            />
            <p v-if="errors.schoolName" class="text-red-500 text-sm mt-1 font-bengali">{{ errors.schoolName }}</p>
          </div>

          <!-- School Address -->
          <div class="mb-4 md:mb-6">
            <label class="block text-gray-700 font-semibold mb-2 font-bengali">
              স্কুলের ঠিকানা <span class="text-red-500">*</span>
            </label>
            <textarea
              v-model="formData.schoolAddress"
              rows="3"
              class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B46C1] transition-all"
              :class="{ 'border-red-500': errors.schoolAddress }"
            ></textarea>
            <p v-if="errors.schoolAddress" class="text-red-500 text-sm mt-1 font-bengali">{{ errors.schoolAddress }}</p>
          </div>

          <!-- Message -->
          <div class="mb-4 md:mb-6">
            <label class="block text-gray-700 font-semibold mb-2 font-bengali">
              বার্তা
            </label>
            <textarea
              v-model="formData.message"
              rows="4"
              class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B46C1] transition-all"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-[#6B46C1] hover:bg-[#553399] text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-bengali"
          >
            <span v-if="!isSubmitting">আবেদন জমা দিন</span>
            <span v-else>জমা দেওয়া হচ্ছে...</span>
          </button>
        </form>
    </div>
  </section>
</template>
