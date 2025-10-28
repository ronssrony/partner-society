<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination, Autoplay]

const activities = [
  {
    id: 1,
    title: "Digital Literacy Program Launch",
    date: "October 2024",
    image: "https://picsum.photos/600/400?random=1",
    description: "Introducing comprehensive digital literacy training for 5,000 women entrepreneurs across Bangladesh."
  },
  {
    id: 2,
    title: "New Branch Opening in Sylhet",
    date: "September 2024",
    image: "https://picsum.photos/600/400?random=2",
    description: "Expanding our reach to serve more communities in the northeastern region with modern facilities."
  },
  {
    id: 3,
    title: "Partnership with Tech Giants",
    date: "August 2024",
    image: "https://picsum.photos/600/400?random=3",
    description: "Collaborating with leading technology companies to enhance our digital infrastructure and services."
  },
  {
    id: 4,
    title: "Annual Impact Report 2024",
    date: "July 2024",
    image: "https://picsum.photos/600/400?random=4",
    description: "Celebrating achievements and outlining our roadmap for continued growth and community impact."
  }
]
</script>

<template>
  <section id="about" class="py-16 md:py-24 bg-white">
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
          Recent Activities
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay updated with our latest initiatives and achievements
        </p>
      </div>

      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="30"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
        :pagination="{ clickable: true }"
        :navigation="true"
        :breakpoints="{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        class="pb-12"
      >
        <SwiperSlide v-for="activity in activities" :key="activity.id">
          <div class="group bg-white rounded-2xl overflow-hidden border-2 border-brand-100 hover:border-brand-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/10">
            <div class="relative aspect-[3/2] overflow-hidden">
              <img
                :src="activity.image"
                :alt="activity.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute top-4 right-4 bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-semibold">
                {{ activity.date }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-brand-900 mb-3">
                {{ activity.title }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ activity.description }}
              </p>
              <a href="#" class="inline-flex items-center text-brand-600 hover:text-brand-700 font-semibold transition-colors">
                Read More
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
