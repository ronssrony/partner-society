<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const scrollProgress = ref(0)
const activeDropdown = ref<string | null>(null)

const navLinks = [
  {
    name: 'About Us',
    hasDropdown: true,
    items: [
      { name: 'Vision, Mission & Values', href: '/about#vision' },
      { name: 'Our Leadership', href: '/about#team' },
      { name: 'Contact Us', href: '#contact' },
    ]
  },
  {
    name: 'What We Do',
    hasDropdown: true,
    items: [
      { name: 'Partner Society Scholarship Program (PSSP)', href: '#programs' },
      { name: 'Skill Development Program (SDP)', href: '#programs' },
      { name: 'Community School Support Program (CSSP)', href: '#programs' },
      { name: 'Model School Initiative', href: '#programs' },
    ]
  },
  { name: 'Notice', href: '#notice', hasDropdown: false },
  { name: 'Gallery', href: '#gallery', hasDropdown: false },
  { name: 'Career', href: '/career', hasDropdown: false },
  { name: 'School List', href: '#schools', hasDropdown: false },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (window.scrollY / windowHeight) * 100
  scrollProgress.value = scrolled
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  activeDropdown.value = null
}

const toggleDropdown = (name: string) => {
  activeDropdown.value = activeDropdown.value === name ? null : name
}

const closeDropdown = () => {
  activeDropdown.value = null
}

// Close dropdown when clicking outside
onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target.closest('.dropdown-container')) {
      activeDropdown.value = null
    }
  }
  document.addEventListener('click', handleClickOutside)

  return () => {
    document.removeEventListener('click', handleClickOutside)
  }
})

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
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'
    ]"
  >
    <!-- Scroll Progress Bar -->
    <div class="absolute top-0 left-0 h-1 bg-[#6B46C1] transition-all duration-150" :style="{ width: scrollProgress + '%' }"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#home" class="flex items-center gap-3">
            <img src="/logo.jpg" alt="Partner Society Logo" class="h-14 w-auto" />
            <div class="flex flex-col">
              <span class="text-xl font-bold text-[#6B46C1]">Partner Society</span>
              <span class="text-xs text-gray-600 font-bengali">আধুনিক শিক্ষা, সবার জন্য</span>
            </div>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-6">
          <div
            v-for="link in navLinks"
            :key="link.name"
            class="relative dropdown-container"
          >
            <a
              v-if="!link.hasDropdown"
              :href="link.href"
              class="text-base font-medium text-gray-700 hover:text-[#6B46C1] transition-colors py-2"
            >
              {{ link.name }}
            </a>

            <button
              v-else
              @click="toggleDropdown(link.name)"
              class="flex items-center space-x-1 text-base font-medium text-gray-700 hover:text-[#6B46C1] transition-colors py-2"
            >
              <span>{{ link.name }}</span>
              <ChevronDownIcon
                :class="[
                  'h-4 w-4 transition-transform duration-300 ease-in-out',
                  activeDropdown === link.name ? 'rotate-180' : 'rotate-0'
                ]"
              />
            </button>

            <!-- Dropdown Menu -->
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div
                v-if="link.hasDropdown && activeDropdown === link.name"
                class="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
              >
                <a
                  v-for="item in link.items"
                  :key="item.name"
                  :href="item.href"
                  @click="closeDropdown"
                  class="block px-4 py-3 text-sm text-gray-700 hover:bg-[#6B46C1] hover:text-white transition-colors"
                >
                  {{ item.name }}
                </a>
              </div>
            </transition>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:block">
          <a
            href="/registration"
            class="bg-[#6B46C1] hover:bg-[#553399] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md"
          >
            School Registration
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-md text-gray-700 hover:text-[#6B46C1] transition-colors"
          >
            <Bars3Icon v-if="!isMobileMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMobileMenuOpen" class="lg:hidden bg-white shadow-lg border-t">
        <div class="px-4 pt-2 pb-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <template v-for="link in navLinks" :key="link.name">
            <!-- Simple Link -->
            <a
              v-if="!link.hasDropdown"
              :href="link.href"
              class="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-[#6B46C1]/10 hover:text-[#6B46C1] rounded-lg transition-colors"
              @click="toggleMobileMenu"
            >
              {{ link.name }}
            </a>

            <!-- Dropdown Link -->
            <div v-else class="space-y-1">
              <button
                @click="toggleDropdown(link.name)"
                class="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:bg-[#6B46C1]/10 hover:text-[#6B46C1] rounded-lg transition-colors"
              >
                <span>{{ link.name }}</span>
                <ChevronDownIcon
                  :class="[
                    'h-4 w-4 transition-transform duration-200',
                    activeDropdown === link.name ? 'rotate-180' : ''
                  ]"
                />
              </button>

              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2"
              >
                <div v-if="activeDropdown === link.name" class="pl-4 space-y-1">
                  <a
                    v-for="item in link.items"
                    :key="item.name"
                    :href="item.href"
                    class="block px-4 py-2 text-sm text-gray-600 hover:bg-[#6B46C1]/10 hover:text-[#6B46C1] rounded-lg transition-colors"
                    @click="toggleMobileMenu"
                  >
                    {{ item.name }}
                  </a>
                </div>
              </transition>
            </div>
          </template>

          <a
            href="/registration"
            class="block bg-[#6B46C1] hover:bg-[#553399] text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors mt-4"
            @click="toggleMobileMenu"
          >
            School Registration
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>
