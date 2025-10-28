<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const modules = [Pagination, Autoplay, EffectFade]

const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Small Business Owner",
    avatar: "https://i.pravatar.cc/100?img=1",
    quote: "Scholar's e-Loan service helped me expand my tailoring business. The process was quick and hassle-free!",
    rating: 5
  },
  {
    id: 2,
    name: "Fatima Begum",
    role: "Entrepreneur",
    avatar: "https://i.pravatar.cc/100?img=5",
    quote: "The digital literacy program transformed my understanding of online business. Now I run a successful e-commerce store.",
    rating: 5
  },
  {
    id: 3,
    name: "Nasrin Akter",
    role: "Member Since 2019",
    avatar: "https://i.pravatar.cc/100?img=9",
    quote: "Having access to doorstep banking services has made managing my finances so much easier.",
    rating: 5
  }
]
</script>

<template>
  <section class="py-16 md:py-24 bg-gradient-to-b from-brand-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600 }
        }"
        class="text-center mb-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
          What Our Members Say
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Real stories from real people whose lives have been transformed
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :effect="'fade'"
          :autoplay="{
            delay: 6000,
            disableOnInteraction: false
          }"
          :pagination="{ clickable: true }"
          :fade-effect="{ crossFade: true }"
          class="pb-12"
        >
          <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <!-- Quote Icon -->
              <div class="flex justify-center mb-6">
                <svg class="w-12 h-12 text-brand-200" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              <!-- Quote -->
              <p class="text-lg md:text-xl text-gray-700 italic text-center mb-8">
                "{{ testimonial.quote }}"
              </p>

              <!-- Rating -->
              <div class="flex justify-center gap-1 mb-6">
                <svg v-for="i in testimonial.rating" :key="i" class="w-6 h-6 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <!-- Avatar and Name -->
              <div class="flex items-center justify-center gap-4">
                <img
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  class="w-16 h-16 rounded-full border-4 border-brand-100"
                  loading="lazy"
                />
                <div class="text-left">
                  <div class="font-bold text-brand-900 text-lg">
                    {{ testimonial.name }}
                  </div>
                  <div class="text-gray-600">
                    {{ testimonial.role }}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
