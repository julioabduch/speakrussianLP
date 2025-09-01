<template>
  <section id="hero" class="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
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
              <div class="" style="width: 100%; height: null; position: relative; padding-top: 52.67%; border-radius: 12px; overflow: hidden;">
                <iframe 
                  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;" 
                  allowtransparency="true"   
                  src="https://adilo.bigcommand.com/watch/d9RDTUgz"  
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
      
      <!-- Action Button -->
      <div class="mb-16">
        <ActionButton text="Começar Agora" href="#checkout" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Badge from '~/components/Badge.vue'
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