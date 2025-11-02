<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <!-- Page Header -->
    <section class="pt-28 pb-8 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50">
      <div class="container-custom text-center">
        <div class="inline-block mb-4 px-4 py-2 bg-[#6B46C1]/10 rounded-full">
          <span class="text-[#6B46C1] font-semibold">Registration</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          School <span class="text-[#6B46C1]">Registration</span>
        </h1>
        <p class="text-lg text-gray-600 font-semibold ">স্কুল রেজিস্ট্রেশন ফর্ম</p>
      </div>
    </section>

    <!-- Registration Content -->
    <section class="py-12 bg-gray-50">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-8 items-start">
          <!-- Left Side - Image & Benefits -->
          <div class="order-2 lg:order-1 space-y-6">
            <!-- Image -->
            <div class="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/image-12.jpeg"
                alt="Bangladeshi Students"
                class="w-full h-[400px] object-cover"
              />
            </div>

            <!-- Benefits Card -->
            <div class="card p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-4 font-bengali">
                কেন আমাদের সাথে যুক্ত হবেন?
              </h3>
              <ul class="space-y-3 font-bengali text-gray-700">
                <li class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-[#6B46C1] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>আধুনিক শিক্ষা ব্যবস্থা ও পরিকাঠামো</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-[#6B46C1] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>শিক্ষক প্রশিক্ষণ ও উন্নয়ন সহায়তা</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-[#6B46C1] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>বৃত্তি ও শিক্ষা উপকরণ সহায়তা</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-[#6B46C1] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>নিয়মিত মনিটরিং ও মান নিয়ন্ত্রণ</span>
                </li>
              </ul>

              <!-- Contact Info -->
              <div class="mt-6 pt-6 border-t border-gray-200">
                <p class="text-sm text-gray-600 font-bengali mb-2">প্রশ্ন আছে? আমাদের সাথে যোগাযোগ করুন:</p>
                <p class="text-[#6B46C1] font-semibold">01337-212468</p>
                <p class="text-gray-600 text-sm">partnersocietynet@gmail.com</p>
              </div>
            </div>
          </div>

          <!-- Right Side - Form -->
          <div class="order-1 lg:order-2 sticky top-24">
            <SchoolRegistrationForm />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'School Registration - Partner Society BD',
  meta: [
    { name: 'description', content: 'Register your school with Partner Society BD and become part of our educational network.' }
  ]
})
</script>
