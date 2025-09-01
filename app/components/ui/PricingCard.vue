<template>
  <div class="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
    <!-- Badge de destaque -->
    <div v-if="isPopular" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
      <div class="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
        🔥 MAIS POPULAR
      </div>
    </div>

    <!-- Título do plano -->
    <div class="text-center mb-6">
      <h3 class="text-2xl font-bold text-white mb-2">{{ title }}</h3>
      <p class="text-gray-300 text-sm">{{ subtitle }}</p>
    </div>

    <!-- Preços -->
    <div class="text-center mb-8">
      <div class="flex items-center justify-center gap-3 mb-2">
        <span class="text-gray-400 line-through text-xl">R$ {{ originalPrice }}</span>
        <div class="bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
          -{{ discount }}%
        </div>
      </div>
      <div class="text-4xl font-bold text-white mb-1">
        R$ {{ promotionalPrice }}
      </div>
      <p class="text-gray-300 text-sm">{{ paymentInfo }}</p>
    </div>

    <!-- Features -->
    <div class="space-y-4 mb-8">
      <div v-for="(feature, index) in features" :key="index" class="flex items-start gap-3">
        <div class="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center mt-0.5">
          <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <span class="text-gray-200 text-sm leading-relaxed">{{ feature }}</span>
      </div>
    </div>

    <!-- Botão de compra -->
    <button 
      @click="$emit('purchase', { plan: title, price: promotionalPrice })"
      class="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl group-hover:shadow-primary-500/25 relative overflow-hidden"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      <span class="relative flex items-center justify-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"></path>
        </svg>
        Comprar Agora
      </span>
    </button>

    <!-- Garantia -->
    <div class="mt-4 text-center">
      <p class="text-xs text-gray-400 flex items-center justify-center gap-1">
        <svg class="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
        Garantia de 7 dias ou seu dinheiro de volta
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  originalPrice: {
    type: Number,
    required: true
  },
  promotionalPrice: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  paymentInfo: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    required: true
  },
  isPopular: {
    type: Boolean,
    default: false
  }
})

defineEmits(['purchase'])
</script>