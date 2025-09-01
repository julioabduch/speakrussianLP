<template>
  <section class="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-secondary-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Cabeçalho da seção -->
      <div class="text-center mb-16">
        <!-- Badge -->
        <div class="mb-6">
          <Badge text="Vantagens" />
        </div>
        
        <!-- Título -->
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          <span class="text-secondary-400">
            Por que escolher nosso método?
          </span>
        </h2>
        
        <!-- Subtítulo -->
        <p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Descubra as principais vantagens que tornam nosso curso de russo único e eficaz para acelerar seu aprendizado.
        </p>
      </div>
      
      <!-- Grid de Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        <!-- Card 1: Aprendizado Natural e Progressivo -->
        <Card 
          title="Aprendizado Natural e Progressivo"
          description="Você avança no russo de forma estruturada: cada etapa é consolidada antes de seguir para a próxima, garantindo uma base sólida sem sobrecarga."
          icon="trending-up"
        />
        
        <!-- Card 2: Conteúdo Dinâmico e Variado -->
        <Card 
          title="Conteúdo Dinâmico e Variado"
          description="Do vocabulário essencial até situações do dia a dia, o curso mistura métodos modernos, diálogos práticos e trechos de filmes para tornar o aprendizado envolvente."
          icon="sparkles"
        />
        
        <!-- Card 3: Prática Constante com Contexto Real -->
        <Card 
          title="Prática Constante com Contexto Real"
          description="Mais do que decorar palavras, você aprende a usar o idioma em contextos reais — facilitando a memorização e a fluência."
          icon="target"
        />
        
        <!-- Card 4: Método Pensado para Resultados Rápidos -->
        <Card 
          title="Método Pensado para Resultados Rápidos"
          description="Com uma combinação de repetição inteligente e exercícios direcionados, você fixa o conhecimento de forma duradoura e percebe evolução já nos primeiros meses."
          icon="lightning"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Badge from '~/components/Badge.vue'
import Card from '~/components/Card.vue'

// Configurações do componente
defineOptions({
  name: 'AdvantagesSection'
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