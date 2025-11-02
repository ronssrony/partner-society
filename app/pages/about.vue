<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <!-- Page Header -->
    <section class="pt-28 pb-10 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50">
      <div class="container-custom text-center">
        <div class="inline-block mb-4 px-4 py-2 bg-[#6B46C1]/10 rounded-full">
          <span class="text-[#6B46C1] font-semibold">About Us</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          <span class="text-[#EF4444]">Partner</span>
          <span class="text-[#6B46C1]"> Society</span>
        </h1>
        <p class="text-lg text-gray-600 font-bengali">আমাদের সম্পর্কে জানুন</p>
      </div>
    </section>

    <!-- About Section -->
    <section id="vision" class="py-12 bg-white">
      <div class="container-custom">
        <AboutSection />
      </div>
    </section>

    <!-- Leadership Section -->
    <section id="team" class="py-12 bg-gray-50">
      <div class="container-custom">
        <LeadershipSection />
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-12 bg-white">
      <div class="container-custom">
        <ContactSection />
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'About Us - Partner Society BD',
  meta: [
    { name: 'description', content: 'Learn about Partner Society BD - our vision, mission, values, and leadership team.' }
  ]
})
</script>
