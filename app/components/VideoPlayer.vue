<template>
  <div class="video-player-container">
    <!-- Video wrapper with modern styling -->
    <div class="relative max-w-4xl mx-auto">
      <!-- Decorative background elements -->
      <div class="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 rounded-3xl blur-xl opacity-75"></div>
      <div class="absolute -inset-2 bg-gradient-to-r from-secondary-500/30 to-primary-500/30 rounded-2xl blur-lg opacity-50"></div>
      
      <!-- Main video container -->
      <div class="relative bg-gradient-to-br from-primary-900/80 to-primary-950/90 backdrop-blur-sm rounded-2xl border border-secondary-500/20 shadow-2xl overflow-hidden">
        <!-- Glowing border effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-secondary-500/10 via-transparent to-primary-500/10 rounded-2xl"></div>
        
        <!-- Video iframe container -->
        <div class="relative p-4 md:p-6">
          <div class="relative" style="width: 100%; height: 0; padding-top: 56.25%; border-radius: 12px; overflow: hidden;">
            <iframe 
              :src="videoUrl"
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;"
              allowtransparency="true"
              frameborder="0"
              allowfullscreen
              mozallowfullscreen
              webkitallowfullscreen
              oallowfullscreen
              msallowfullscreen
              scrolling="no"
              class="shadow-lg"
            ></iframe>
          </div>
        </div>
        
        <!-- Bottom accent line -->
        <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-500 via-secondary-400 to-secondary-500"></div>
      </div>
      
      <!-- Floating decorative elements -->
      <div class="absolute -top-2 -right-2 w-4 h-4 bg-secondary-500 rounded-full opacity-60 animate-pulse"></div>
      <div class="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-400 rounded-full opacity-40 animate-pulse" style="animation-delay: 1s;"></div>
    </div>
  </div>
</template>

<script setup>
// Props do componente
defineProps({
  videoUrl: {
    type: String,
    required: true
  }
})

// Configurações do componente
defineOptions({
  name: 'VideoPlayer'
})
</script>

<style scoped>
.video-player-container {
  padding: 2rem 1rem;
}

/* Animação suave para os elementos decorativos */
@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.1);
  }
}

/* Efeito hover para interatividade */
.video-player-container:hover .absolute.bg-gradient-to-r {
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

/* Responsividade aprimorada */
@media (max-width: 768px) {
  .video-player-container {
    padding: 1rem 0.5rem;
  }
}
</style>