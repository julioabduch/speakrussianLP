<template>
  <div class="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10">
    <button
      @click="toggleExpanded"
      class="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-secondary-500/50 rounded-xl transition-colors duration-200"
      :class="{ 'bg-white/5': isExpanded }"
    >
      <h3 class="text-lg font-semibold text-white pr-4">{{ question }}</h3>
      <div class="flex-shrink-0">
        <svg
          class="w-6 h-6 text-secondary-400 transition-transform duration-300"
          :class="{ 'rotate-180': isExpanded }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </button>
    
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="isExpanded" class="px-6 pb-6">
        <div class="text-gray-300 leading-relaxed" v-html="formattedAnswer"></div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Props
const props = defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  defaultExpanded: {
    type: Boolean,
    default: false
  }
})

// Estado reativo
const isExpanded = ref(props.defaultExpanded)

// Métodos
const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

// Computed para formatar a resposta com quebras de linha e listas
const formattedAnswer = computed(() => {
  return props.answer
    .replace(/\n/g, '<br>')
    .replace(/•\s*/g, '<span class="text-secondary-400">•</span> ')
    .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
})
</script>

<style scoped>
.max-h-0 {
  max-height: 0;
}

.max-h-96 {
  max-height: 24rem;
}
</style>