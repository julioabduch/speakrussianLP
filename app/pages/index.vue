<template>
  <div>
    <HeroSection />
    <TraditionalMethodSection />
    <NewMethodSection />
    <AdvantagesSection />
    <CourseContentSection />
    <ExpressMethodSection />
    <TestimonialsSection />
    <CheckoutSection />
  </div>
</template>

<script setup>
import HeroSection from '~/components/sections/HeroSection.vue'
import ExpressMethodSection from '~/components/sections/ExpressMethodSection.vue'
import TraditionalMethodSection from '~/components/sections/TraditionalMethodSection.vue'
import NewMethodSection from '~/components/sections/NewMethodSection.vue'
import AdvantagesSection from '~/components/sections/AdvantagesSection.vue'
import CourseContentSection from '~/components/sections/CourseContentSection.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import CheckoutSection from '~/components/sections/CheckoutSection.vue'

// Configurações da página
useHead({
  title: 'Aprenda Russo 10x Mais Rápido - Do Zero à Fluência',
  meta: [
    {
      name: 'description',
      content: 'Com nosso método acelerado e aulas gravadas passo a passo, você domina o russo e abre portas para novas oportunidades pessoais e profissionais.'
    }
  ]
})
</script>