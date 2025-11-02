<script setup lang="ts">
const programs = [
  {
    id: 'pssp',
    icon: '🎓',
    title: 'Partner Society Scholarship Program (PSSP)',
    subtitle: 'বৃত্তি ভিত্তিক শিক্ষা উন্নয়ন কর্মসূচি',
    description: 'মেধাবী ও দরিদ্র শিক্ষার্থীদের জন্য বৃত্তি প্রদান ও শিক্ষা সহায়তা'
  },
  {
    id: 'sdp',
    icon: '💡',
    title: 'Skill Development Program (SDP)',
    subtitle: 'শিক্ষার্থীদের দক্ষতা বৃদ্ধির প্রশিক্ষণ',
    description: 'কম্পিউটার, ভাষা, এবং জীবন দক্ষতা উন্নয়ন প্রশিক্ষণ'
  },
  {
    id: 'cssp',
    icon: '🏫',
    title: 'Community School Support Program (CSSP)',
    subtitle: 'স্থানীয় স্কুলে সহায়তা কার্যক্রম',
    description: 'গ্রামীণ স্কুলে অবকাঠামো, শিক্ষা উপকরণ ও শিক্ষক প্রশিক্ষণ সহায়তা'
  },
  {
    id: 'model-school',
    icon: '⭐',
    title: 'Model School Initiative',
    subtitle: 'মানসম্পন্ন বিদ্যালয় প্রতিষ্ঠা ও পরিচালনা',
    description: 'আধুনিক শিক্ষা ব্যবস্থার সাথে মডেল স্কুল প্রতিষ্ঠা ও পরিচালনা'
  }
]
</script>

<template>
  <section id="programs" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What <span class="text-[#6B46C1]">We Do</span>
        </h2>
        <p class="text-xl text-gray-600 font-bengali">আমাদের কার্যক্রম</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="program in programs"
          :key="program.id"
          :id="program.id"
          class="card p-8 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#6B46C1] group"
        >
          <!-- Icon -->
          <div class="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {{ program.icon }}
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold text-gray-900 mb-2">
            {{ program.title }}
          </h3>

          <!-- Subtitle in Bengali -->
          <p class="text-base text-[#6B46C1] font-bengali font-semibold mb-4">
            {{ program.subtitle }}
          </p>

          <!-- Description -->
          <p class="text-gray-600 font-bengali leading-relaxed">
            {{ program.description }}
          </p>

          <!-- Decorative Element -->
          <div class="mt-6 w-16 h-1 bg-gradient-to-r from-[#6B46C1] to-[#A78BFA] rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>
