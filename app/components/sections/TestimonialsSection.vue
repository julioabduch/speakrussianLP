<template>
  <section id="testimonials" class="relative py-20 overflow-hidden bg-gradient-hero">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-secondary-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <Badge text="Depoimentos" class="mb-6" />
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          O que nossos <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400">alunos dizem</span>
        </h2>
        <p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Histórias reais de pessoas que transformaram suas vidas aprendendo russo com nosso método
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          :testimonial="testimonial.text"
          :name="testimonial.name"
          :role="testimonial.role"
          :avatar="testimonial.avatar"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Badge from '~/components/Badge.vue'
import TestimonialCard from '~/components/TestimonialCard.vue'

// Dados dos depoimentos (fictícios para demonstração)
const testimonials = [
  {
    id: 1,
    text: 'Em apenas 3 meses consegui ter conversas básicas em russo! O método é realmente eficaz e muito diferente do que já tentei antes.',
    name: 'Maria Silva',
    role: 'Estudante de Idiomas',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 2,
    text: 'O alfabeto cirílico sempre foi um mistério para mim. Com este curso, aprendi de forma natural e sem decoreba. Incrível!',
    name: 'João Santos',
    role: 'Engenheiro',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 3,
    text: 'Finalmente um método que funciona! Estou conseguindo entender filmes russos sem legenda. Muito obrigada!',
    name: 'Ana Costa',
    role: 'Professora',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 4,
    text: 'A metodologia é fantástica! Aprendi mais em 2 meses do que em 1 ano tentando outros cursos. Super recomendo!',
    name: 'Carlos Oliveira',
    role: 'Empresário',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 5,
    text: 'Como alguém que sempre teve dificuldade com idiomas, este curso me surpreendeu. O russo não é mais um bicho de sete cabeças!',
    name: 'Lucia Ferreira',
    role: 'Médica',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 6,
    text: 'Excelente estrutura do curso! As lições são bem organizadas e o progresso é visível desde as primeiras semanas.',
    name: 'Roberto Lima',
    role: 'Advogado',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  }
]
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