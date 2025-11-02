<script setup lang="ts">
const teamMembers = [
  {
    name: 'MD Tarikul Islam',
    position: 'Executive Director',
    positionBengali: 'নির্বাহী পরিচালক',
    bio: 'প্রতিষ্ঠানের সার্বিক ব্যবস্থাপনা, নীতি নির্ধারণ ও শিক্ষা কার্যক্রমের মানোন্নয়ন তদারকি করেন।',
    image: 'https://placehold.co/400x400/6B46C1/FFFFFF?text=MD+Tarikul+Islam'
  },
  {
    name: 'Mishuk Rayhan',
    position: 'Program Manager',
    positionBengali: 'প্রোগ্রাম ম্যানেজার',
    bio: 'শিক্ষা প্রকল্পসমূহের বাস্তবায়ন, মনিটরিং ও স্কুলগুলোর সঙ্গে যোগাযোগের দায়িত্বে আছেন।',
    image: 'https://placehold.co/400x400/6B46C1/FFFFFF?text=Mishuk+Rayhan'
  }
]
</script>

<template>
  <section id="team" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span class="text-[#6B46C1]">Leadership</span>
        </h2>
        <p class="text-xl text-gray-600 font-bengali">আমাদের নেতৃত্ব</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="card p-8 text-center hover:scale-105 transition-all duration-300"
        >
          <!-- Image -->
          <div class="mb-6">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-40 h-40 rounded-full mx-auto object-cover border-4 border-[#6B46C1] shadow-lg"
            />
          </div>

          <!-- Name -->
          <h3 class="text-2xl font-bold text-gray-900 mb-2">
            {{ member.name }}
          </h3>

          <!-- Position -->
          <p class="text-lg text-[#6B46C1] font-semibold mb-1">
            {{ member.position }}
          </p>
          <p class="text-base text-[#6B46C1] font-bengali mb-4">
            {{ member.positionBengali }}
          </p>

          <!-- Bio -->
          <p class="text-gray-600 font-bengali leading-relaxed">
            {{ member.bio }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
