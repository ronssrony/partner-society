<script setup lang="ts">
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/vue/24/outline'

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'School Registration', href: '/registration' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '#contact' },
]
</script>

<template>
  <footer class="bg-gray-900 text-gray-300">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- About Column -->
        <div>
          <div class="flex items-center gap-3 mb-3">
            <img src="/logo.jpg" alt="Partner Society Logo" class="h-12 w-auto" />
            <div>
              <h3 class="text-xl font-bold text-[#6B46C1]">Partner Society</h3>
              <p class="text-xs text-gray-400 font-bengali">আধুনিক শিক্ষা, সবার জন্য</p>
            </div>
          </div>
          <p class="text-gray-400 mb-4 font-bengali text-sm">
            আধুনিক শিক্ষার মাধ্যমে সমাজ উন্নয়নে প্রতিশ্রুতিবদ্ধ
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <a :href="link.href" class="text-gray-400 hover:text-[#6B46C1] transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4 font-bengali">যোগাযোগ</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <MapPinIcon class="w-5 h-5 text-[#6B46C1] flex-shrink-0 mt-1" />
              <span class="text-gray-400 text-sm">
                Dhap, Kakoli Lane, Rangpur
              </span>
            </li>
            <li class="flex items-center gap-3">
              <PhoneIcon class="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
              <div class="text-gray-400 text-sm">
                <a href="tel:01337212468" class="hover:text-[#6B46C1] transition-colors block">01337-212468</a>
                <a href="tel:01337212469" class="hover:text-[#6B46C1] transition-colors block">01337-212469</a>
                <a href="tel:01337212467" class="hover:text-[#6B46C1] transition-colors block">01337-212467</a>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <EnvelopeIcon class="w-5 h-5 text-[#6B46C1] flex-shrink-0" />
              <a href="mailto:partnersocietynet@gmail.com" class="text-gray-400 hover:text-[#6B46C1] transition-colors text-sm">
                partnersocietynet@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4">Social Media</h3>
          <div class="space-y-3">
            <a
              href="https://www.facebook.com/partnersocietybd"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-gray-400 hover:text-[#6B46C1] transition-colors"
            >
              <div class="w-10 h-10 bg-gray-800 hover:bg-[#6B46C1] rounded-full flex items-center justify-center transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span class="text-sm">Facebook</span>
            </a>
            <a
              href="https://wa.me/8801337212468"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-gray-400 hover:text-[#6B46C1] transition-colors"
            >
              <div class="w-10 h-10 bg-gray-800 hover:bg-[#6B46C1] rounded-full flex items-center justify-center transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span class="text-sm">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p class="text-center text-gray-500 text-sm">
          Copyright © {{ new Date().getFullYear() }} Partner Society BD — All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
