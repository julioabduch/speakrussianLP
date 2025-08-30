<template>
  <section class="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-secondary-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Coluna da Esquerda - Conteúdo -->
        <div class="space-y-6">
          <!-- Badge -->
          <div class="mb-6">
            <Badge text="Método Tradicional" />
          </div>
          
          <!-- Título -->
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span class="text-secondary-400">
              Estuda por anos, mas não consegue se comunicar?
            </span>
          </h2>
          
          <!-- Subtítulo -->
          <p class="text-xl sm:text-2xl text-white/90 leading-relaxed">
            Compare nosso método revolucionário com os cursos tradicionais e veja a diferença na velocidade de aprendizado e retenção do conhecimento.
          </p>
        </div>
        
        <!-- Coluna da Direita - Imagem -->
        <div class="flex justify-center lg:justify-end">
          <div class="w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <!-- Imagem do método tradicional -->
            <div class="relative group">
              <img 
                src="~/assets/images/sections/traditional-method/tradicional.png" 
                alt="Método tradicional de ensino de idiomas"
                class="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <!-- Overlay decorativo -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Badge from '~/components/Badge.vue'

// Configurações do componente
defineOptions({
  name: 'TraditionalMethodSection'
})
</script>

<style scoped>
/* Animações personalizadas para a seção */
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