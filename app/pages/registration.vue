<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <!-- Page Header -->
    <section class="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-purple-100">
      <div class="container-custom text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          School <span class="text-[#6B46C1]">Registration</span>
        </h1>
        <p class="text-xl text-gray-600 font-bengali">স্কুল রেজিস্ট্রেশন ফর্ম</p>
      </div>
    </section>

    <!-- Registration Content -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Side - Image -->
          <div class="order-2 lg:order-1">
            <div class="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/image-12.jpeg"
                alt="Bangladeshi Students"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="mt-6 p-6 bg-purple-50 rounded-xl">
              <h3 class="text-2xl font-bold text-gray-900 mb-3 font-bengali">
                কেন আমাদের সাথে যুক্ত হবেন?
              </h3>
              <ul class="space-y-3 font-bengali text-gray-700">
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-[#6B46C1] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>আধুনিক শিক্ষা ব্যবস্থা ও পরিকাঠামো</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-[#6B46C1] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>শিক্ষক প্রশিক্ষণ ও উন্নয়ন সহায়তা</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-[#6B46C1] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>বৃত্তি ও শিক্ষা উপকরণ সহায়তা</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-[#6B46C1] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>নিয়মিত মনিটরিং ও মান নিয়ন্ত্রণ</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Side - Form -->
          <div class="order-1 lg:order-2">
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
