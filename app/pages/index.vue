<script setup>
import { onMounted } from 'vue'

// Handle scroll to section on page load
onMounted(() => {
  // Check for hash in URL
  const hash = window.location.hash
  if (hash) {
    // Wait for page to fully render
    setTimeout(() => {
      const element = document.querySelector(hash)
      if (element) {
        const navbarHeight = 100 // Offset for fixed navbar
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <HeroPartnerSociety />
    <HeroImageSlider />
    <ProgramsSection />
    <EventsActivities />
    <NoticeSection />
    <SchoolListSection />
    <GallerySection />
    <LeadershipSection />
    <ContactSection />
    <Footer />
  </div>
</template>
