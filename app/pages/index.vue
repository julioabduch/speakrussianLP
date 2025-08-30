<template>
  <div>
    <HeroSection />
    <ExpressMethodSection />
    <TraditionalMethodSection />
  </div>
</template>

<script setup>
import HeroSection from '~/components/sections/HeroSection.vue'
import ExpressMethodSection from '~/components/sections/ExpressMethodSection.vue'
import TraditionalMethodSection from '~/components/sections/TraditionalMethodSection.vue'

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