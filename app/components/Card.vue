<template>
  <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
    <!-- Ícone -->
    <div class="mb-4">
      <div class="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center group-hover:bg-secondary-500/30 transition-colors duration-300">
        <component :is="iconComponent" class="w-6 h-6 text-secondary-400" />
      </div>
    </div>
    
    <!-- Título -->
    <h3 class="text-xl font-bold text-white mb-3 leading-tight">
      {{ title }}
    </h3>
    
    <!-- Descrição -->
    <p class="text-white/80 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props do componente
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

// Componente do ícone baseado na prop
const iconComponent = computed(() => {
  const icons = {
    'trending-up': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
      })
    ]),
    'sparkles': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M5 3l1.5 1.5L5 6l-1.5-1.5L5 3zM19 3l1.5 1.5L19 6l-1.5-1.5L19 3zM12 8l1.5 1.5L12 11l-1.5-1.5L12 8zM5 21l1.5-1.5L5 18l-1.5 1.5L5 21zM19 21l1.5-1.5L19 18l-1.5 1.5L19 21z'
      }),
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M9 9h6v6H9V9z'
      })
    ]),
    'target': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('circle', {
        cx: '12',
        cy: '12',
        r: '10'
      }),
      h('circle', {
        cx: '12',
        cy: '12',
        r: '6'
      }),
      h('circle', {
        cx: '12',
        cy: '12',
        r: '2'
      })
    ]),
    'lightning': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M13 10V3L4 14h7v7l9-11h-7z'
      })
    ])
  }
  
  return icons[props.icon] || icons['sparkles']
})

// Configurações do componente
defineOptions({
  name: 'Card'
})
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>