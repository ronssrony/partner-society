<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const scrollProgress = ref(0)

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Impact', href: '#impact' },
  { name: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20

  // Calculate scroll progress
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (window.scrollY / windowHeight) * 100
  scrollProgress.value = scrolled
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    ]"
  >
    <!-- Scroll Progress Bar -->
    <div class="absolute top-0 left-0 h-1 bg-brand-500 transition-all duration-150" :style="{ width: scrollProgress + '%' }"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#home" :class="['text-2xl font-bold transition-colors', isScrolled ? 'text-brand-600' : 'text-white']">
            Scholar Foundation
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            :class="['text-base font-medium transition-colors hover:text-brand-500', isScrolled ? 'text-gray-700' : 'text-white']"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <a
            href="#contact"
            class="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Get Started
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            :class="['p-2 rounded-md transition-colors', isScrolled ? 'text-gray-700' : 'text-white']"
          >
            <Bars3Icon v-if="!isMobileMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow-lg">
        <div class="px-4 pt-2 pb-4 space-y-2">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"
            @click="toggleMobileMenu"
          >
            {{ link.name }}
          </a>
          <a
            href="#contact"
            class="block bg-brand-500 hover:bg-brand-600 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors"
            @click="toggleMobileMenu"
          >
            Get Started
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>
