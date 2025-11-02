<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <!-- Page Header -->
    <section class="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-purple-100">
      <div class="container-custom text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          About <span class="text-[#6B46C1]">Us</span>
        </h1>
        <p class="text-xl text-gray-600 font-bengali">আমাদের সম্পর্কে জানুন</p>
      </div>
    </section>

    <!-- About Section -->
    <section id="vision" class="section-padding bg-white">
      <div class="container-custom">
        <AboutSection />
      </div>
    </section>

    <!-- Leadership Section -->
    <section id="team" class="section-padding bg-gray-50">
      <div class="container-custom">
        <LeadershipSection />
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section-padding bg-white">
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
