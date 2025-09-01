<template>
  <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
    <!-- Aspas decorativas -->
    <div class="mb-4">
      <svg class="w-8 h-8 text-secondary-400/60" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
      </svg>
    </div>

    <!-- Texto do depoimento -->
    <p class="text-white/90 text-lg leading-relaxed mb-6 italic">
      {{ testimonial }}
    </p>

    <!-- Informações do autor -->
    <div class="flex items-center space-x-4">
      <!-- Avatar -->
      <div class="relative">
        <img 
          :src="avatar" 
          :alt="`Avatar de ${name}`"
          class="w-12 h-12 rounded-full object-cover border-2 border-secondary-500/30 group-hover:border-secondary-500/50 transition-colors duration-300"
        />
        <!-- Indicador de verificação -->
        <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary-500 rounded-full flex items-center justify-center">
          <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>

      <!-- Nome e informações -->
      <div>
        <h4 class="text-white font-semibold text-base">
          {{ name }}
        </h4>
        <p class="text-white/60 text-sm">
          {{ role }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props do componente
defineProps({
  testimonial: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
})

// Configurações do componente
defineOptions({
  name: 'TestimonialCard'
})
</script>

<style scoped>
/* Efeitos de hover suaves */
.group:hover .transition-colors {
  transition-duration: 300ms;
}
</style>