<script setup lang="ts">
import { ref, computed } from 'vue'

const activeTab = ref('vision')

const tabs = [
  {
    id: 'vision',
    title: 'Vision',
    titleBengali: 'দৃষ্টিভঙ্গি',
    content: 'আধুনিক শিক্ষা ব্যবস্থার মাধ্যমে প্রতিটি শিশুর সম্ভাবনা বিকাশ।'
  },
  {
    id: 'mission',
    title: 'Mission',
    titleBengali: 'লক্ষ্য',
    content: 'স্কুল ও মাদ্রাসা পর্যায়ে গুণগত শিক্ষা, বৃত্তি এবং দক্ষতা উন্নয়ন কার্যক্রম পরিচালনা।'
  },
  {
    id: 'values',
    title: 'Values',
    titleBengali: 'মূল্যবোধ',
    content: 'সততা, মানবতা, জ্ঞানচর্চা, সহযোগিতা।'
  }
]

const currentTab = computed(() => {
  return tabs.find(tab => tab.id === activeTab.value) || tabs[0]
})

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId
}
</script>

<template>
  <section id="about" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About <span class="text-[#6B46C1]">Us</span>
        </h2>
        <p class="text-xl text-gray-600 font-bengali">আমাদের সম্পর্কে জানুন</p>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- Tab Navigation -->
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="setActiveTab(tab.id)"
            :class="[
              'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
              activeTab === tab.id
                ? 'bg-[#6B46C1] text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            ]"
          >
            <span class="block text-lg">{{ tab.title }}</span>
            <span class="block text-sm font-bengali">{{ tab.titleBengali }}</span>
          </button>
        </div>

        <!-- Tab Content -->
        <div class="card p-8 md:p-12 min-h-[200px]">
          <transition
            mode="out-in"
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 transform scale-95"
            enter-to-class="opacity-100 transform scale-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 transform scale-100"
            leave-to-class="opacity-0 transform scale-95"
          >
            <div
              :key="currentTab.id"
              class="text-center"
            >
              <div class="mb-6">
                <div
                  v-if="currentTab.id === 'vision'"
                  class="w-20 h-20 mx-auto mb-4 bg-[#6B46C1]/10 rounded-full flex items-center justify-center"
                >
                  <svg class="w-10 h-10 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <div
                  v-else-if="currentTab.id === 'mission'"
                  class="w-20 h-20 mx-auto mb-4 bg-[#6B46C1]/10 rounded-full flex items-center justify-center"
                >
                  <svg class="w-10 h-10 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div
                  v-else
                  class="w-20 h-20 mx-auto mb-4 bg-[#6B46C1]/10 rounded-full flex items-center justify-center"
                >
                  <svg class="w-10 h-10 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{{ currentTab.title }}</h3>
              <p class="text-xl md:text-2xl text-gray-700 font-bengali leading-relaxed">
                {{ currentTab.content }}
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>
