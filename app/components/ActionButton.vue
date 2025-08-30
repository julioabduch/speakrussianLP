<template>
  <button 
    class="action-button group relative inline-flex items-center justify-center px-8 py-4 text-xl font-semibold text-white transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary-500/50 active:scale-95"
    @click="handleClick"
  >
    <!-- Background with gradient -->
    <div class="absolute inset-0 bg-gradient-to-r from-secondary-500 to-secondary-400 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"></div>
    
    <!-- Hover overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-secondary-400 to-secondary-300 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <!-- Glow effect -->
    <div class="absolute inset-0 bg-secondary-500 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
    
    <!-- Button content -->
    <span class="relative z-10 flex items-center space-x-2">
      <span>{{ text }}</span>
      <svg 
        class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </span>
    
    <!-- Ripple effect -->
    <div class="absolute inset-0 rounded-xl overflow-hidden">
      <div class="ripple absolute inset-0 bg-white/20 rounded-full scale-0 group-active:scale-100 transition-transform duration-300"></div>
    </div>
  </button>
</template>

<script setup>
// Props do componente
defineProps({
  text: {
    type: String,
    required: true
  }
})

// Emits
defineEmits(['click'])

// Configurações do componente
defineOptions({
  name: 'ActionButton'
})

// Handlers
const handleClick = () => {
  // Aqui pode ser adicionada lógica específica do botão
  // Por exemplo, scroll para seção de preços, abrir modal, etc.
}
</script>

<style scoped>
.action-button {
  position: relative;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  user-select: none;
}

/* Animação do ripple */
.ripple {
  transform-origin: center;
}

/* Efeitos de hover aprimorados */
.action-button:hover {
  transform: translateY(-2px) scale(1.02);
}

.action-button:active {
  transform: translateY(0) scale(0.98);
}

/* Responsividade */
@media (max-width: 768px) {
  .action-button {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
}

/* Acessibilidade */
.action-button:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}

/* Animação de entrada */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.action-button {
  animation: fadeInUp 0.6s ease-out;
}
</style>