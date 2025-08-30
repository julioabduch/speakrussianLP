<template>
  <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-secondary-500/20 to-secondary-400/20 border border-secondary-500/30 backdrop-blur-sm">
    <div class="w-2 h-2 bg-secondary-500 rounded-full mr-3 animate-pulse"></div>
    <span class="text-secondary-400 font-medium text-sm uppercase tracking-wide">
      {{ text }}
    </span>
  </div>
</template>

<script setup>
// Props do componente
defineProps({
  text: {
    type: String,
    required: true
  }
})

// Configurações do componente
defineOptions({
  name: 'Badge'
})
</script>

<style scoped>
/* Efeito de brilho sutil */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>