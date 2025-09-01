<template>
  <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
    <!-- Cabeçalho do Card -->
    <div 
      @click="toggleExpanded" 
      class="p-6 cursor-pointer flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
    >
      <div class="flex items-center space-x-4">
        <!-- Ícone -->
        <div class="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center group-hover:bg-secondary-500/30 transition-colors duration-300">
          <component :is="iconComponent" class="w-6 h-6 text-secondary-400" />
        </div>
        
        <!-- Título e Descrição -->
        <div>
          <h3 class="text-xl font-bold text-white mb-1 leading-tight">
            {{ title }}
          </h3>
          <p class="text-white/70 text-sm">
            {{ description }}
          </p>
        </div>
      </div>
      
      <!-- Seta de Expansão -->
      <div class="flex items-center">
        <svg 
          :class="['w-5 h-5 text-white/60 transition-transform duration-300', { 'rotate-180': isExpanded }]"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    
    <!-- Conteúdo Expansível -->
    <transition 
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div v-show="isExpanded" class="overflow-hidden">
        <div class="px-6 pb-6">
          <!-- Linha Separadora -->
          <div class="w-full h-px bg-white/10 mb-4"></div>
          
          <!-- Lista de Módulos -->
          <div v-if="modules && modules.length" class="space-y-3">
            <div 
              v-for="(module, index) in modules" 
              :key="index"
              class="flex items-start space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              <!-- Número do Módulo -->
              <div class="w-6 h-6 bg-secondary-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs font-bold text-secondary-300">{{ index + 1 }}</span>
              </div>
              
              <!-- Conteúdo do Módulo -->
              <div class="flex-1">
                <h4 class="text-white font-medium mb-1">{{ module.title }}</h4>
                <p v-if="module.description" class="text-white/70 text-sm leading-relaxed">
                  {{ module.description }}
                </p>
              </div>
            </div>
          </div>
          
          <!-- Conteúdo Adicional -->
          <div v-else-if="content" class="text-white/80 leading-relaxed">
            {{ content }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

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
  },
  modules: {
    type: Array,
    default: () => []
  },
  content: {
    type: String,
    default: ''
  },
  initialExpanded: {
    type: Boolean,
    default: false
  }
})

// Estado de expansão
const isExpanded = ref(props.initialExpanded)

// Função para alternar expansão
const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

// Componente do ícone baseado na prop
const iconComponent = computed(() => {
  const icons = {
    'academic-cap': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M12 14l9-5-9-5-9 5 9 5z'
      }),
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
      })
    ]),
    'film': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011 1v2m0 0v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4m8 0H8m0 0V2a1 1 0 011-1h6a1 1 0 011 1v2M8 4v16m8-16v16'
      })
    ]),
    'play': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 4h10a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
      })
    ]),
    'chat': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
      })
    ]),
    'book': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
      })
    ]),
    'calculator': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
      })
    ]),
    'puzzle': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
      })
    ]),
    'emoji-happy': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 4h10a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
      })
    ]),
    'device-mobile': () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z'
      })
    ])
  }
  
  return icons[props.icon] || icons['book']
})

// Animações de transição
const enter = (el) => {
  el.style.height = '0'
}

const afterEnter = (el) => {
  el.style.height = 'auto'
}

const leave = (el) => {
  el.style.height = el.scrollHeight + 'px'
  el.offsetHeight // força reflow
  el.style.height = '0'
}

// Configurações do componente
defineOptions({
  name: 'ExpandableCard'
})
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  height: 0;
}
</style>