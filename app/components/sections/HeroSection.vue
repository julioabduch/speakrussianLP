<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-secondary-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-8 text-center py-16">
      <!-- Badge -->
      <div class="mb-12">
        <Badge text="método russo expresso" />
      </div>
      
      <!-- Main Title -->
      <h1 class="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
        <span class="block mb-2">Aprenda Russo</span>
        <span class="text-secondary-400 block mb-2">10x Mais Rápido:</span>
        <span class="block text-xl md:text-4xl lg:text-5xl">Do Zero à Fluência</span>
        <span class="block text-lg md:text-3xl lg:text-4xl text-primary-200">com Nosso Método Exclusivo</span>
      </h1>
      
      <!-- Subtitle -->
      <p class="text-lg md:text-2xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
        Com nosso método acelerado e aulas gravadas passo a passo, você domina o idioma e abre portas para novas oportunidades pessoais e profissionais.
      </p>
      
      <!-- Video Player -->
      <div class="mb-16">
        <VideoPlayer video-url="https://adilo.bigcommand.com/watch/nSBHTmXC" />
      </div>
      
      <!-- Action Button -->
      <div class="mb-16">
        <ActionButton text="Começar Agora" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Badge from '~/components/Badge.vue'
import VideoPlayer from '~/components/VideoPlayer.vue'
import ActionButton from '~/components/ActionButton.vue'

// Configurações do componente
defineOptions({
  name: 'HeroSection'
})
</script>

<style scoped>
/* Animações personalizadas para o hero */
.bg-gradient-hero {
  background: linear-gradient(135deg, #0f172a 0%, #334155 25%, #1e293b 50%, #0f172a 75%, #020617 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}


</style>