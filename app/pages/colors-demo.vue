<template>
  <div class="min-h-screen bg-gradient-hero">
    <!-- Header -->
    <header class="p-8">
      <h1 class="text-4xl font-bold text-white text-center mb-2">
        Esquema de Cores - Speak Russian
      </h1>
      <p class="text-white/80 text-center">
        Demonstração das cores e gradientes do Nuxt
      </p>
    </header>

    <!-- Cores Principais -->
    <section class="px-8 py-12">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-white mb-8">Cores Principais</h2>
        
        <!-- Primary Colors -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold text-white mb-4">Primary (#020617)</h3>
          <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            <div v-for="shade in primaryShades" :key="shade.name" class="text-center">
              <div 
                :class="`w-16 h-16 rounded-lg mb-2 ${shade.class}`"
                :title="shade.hex"
              ></div>
              <p class="text-xs text-white/80">{{ shade.name }}</p>
              <p class="text-xs text-white/60">{{ shade.hex }}</p>
            </div>
          </div>
        </div>

        <!-- Secondary Colors -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold text-white mb-4">Secondary (#00DC82)</h3>
          <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            <div v-for="shade in secondaryShades" :key="shade.name" class="text-center">
              <div 
                :class="`w-16 h-16 rounded-lg mb-2 ${shade.class}`"
                :title="shade.hex"
              ></div>
              <p class="text-xs text-white/80">{{ shade.name }}</p>
              <p class="text-xs text-white/60">{{ shade.hex }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gradientes -->
    <section class="px-8 py-12">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-white mb-8">Gradientes</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="gradient in gradients" :key="gradient.name" class="text-center">
            <div 
              :class="`h-32 rounded-lg mb-4 ${gradient.class}`"
            ></div>
            <h4 class="text-white font-semibold mb-1">{{ gradient.name }}</h4>
            <p class="text-white/60 text-sm">{{ gradient.class }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Componentes de Exemplo -->
    <section class="px-8 py-12">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-white mb-8">Componentes de Exemplo</h2>
        
        <!-- Botões -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold text-white mb-6">Botões</h3>
          <div class="flex flex-wrap gap-4">
            <button class="btn-primary">Botão Primary</button>
            <button class="btn-secondary">Botão Secondary</button>
            <button class="btn-outline-primary">Outline Primary</button>
            <button class="btn-outline-secondary">Outline Secondary</button>
          </div>
        </div>

        <!-- Cards -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold text-white mb-6">Cards</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="card-primary">
              <h4 class="text-white font-semibold mb-2">Card Primary</h4>
              <p class="text-white/80">Este é um exemplo de card com gradiente primary.</p>
            </div>
            <div class="card-secondary">
              <h4 class="text-primary-950 font-semibold mb-2">Card Secondary</h4>
              <p class="text-primary-800">Este é um exemplo de card com gradiente secondary.</p>
            </div>
            <div class="card-glass">
              <h4 class="text-white font-semibold mb-2">Card Glass</h4>
              <p class="text-white/80">Este é um exemplo de card com efeito glass.</p>
            </div>
          </div>
        </div>

        <!-- Textos com Gradiente -->
        <div class="mb-12">
          <h3 class="text-xl font-semibold text-white mb-6">Textos com Gradiente</h3>
          <div class="space-y-4">
            <h2 class="text-4xl font-bold text-gradient-primary">Texto Primary Gradient</h2>
            <h2 class="text-4xl font-bold text-gradient-secondary">Texto Secondary Gradient</h2>
            <h2 class="text-4xl font-bold text-gradient-hero">Texto Hero Gradient</h2>
          </div>
        </div>
      </div>
    </section>

    <!-- Cores de Sistema -->
    <section class="px-8 py-12">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-white mb-8">Cores de Sistema</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-full h-20 bg-success-500 rounded-lg mb-4"></div>
            <h4 class="text-white font-semibold">Success</h4>
            <p class="text-white/60 text-sm">#22c55e</p>
          </div>
          <div class="text-center">
            <div class="w-full h-20 bg-warning-500 rounded-lg mb-4"></div>
            <h4 class="text-white font-semibold">Warning</h4>
            <p class="text-white/60 text-sm">#f59e0b</p>
          </div>
          <div class="text-center">
            <div class="w-full h-20 bg-error-500 rounded-lg mb-4"></div>
            <h4 class="text-white font-semibold">Error</h4>
            <p class="text-white/60 text-sm">#ef4444</p>
          </div>
          <div class="text-center">
            <div class="w-full h-20 bg-info-500 rounded-lg mb-4"></div>
            <h4 class="text-white font-semibold">Info</h4>
            <p class="text-white/60 text-sm">#3b82f6</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Definir as cores para demonstração
const primaryShades = [
  { name: '50', class: 'bg-primary-50', hex: '#f0f9ff' },
  { name: '100', class: 'bg-primary-100', hex: '#e0f2fe' },
  { name: '200', class: 'bg-primary-200', hex: '#bae6fd' },
  { name: '300', class: 'bg-primary-300', hex: '#7dd3fc' },
  { name: '400', class: 'bg-primary-400', hex: '#38bdf8' },
  { name: '500', class: 'bg-primary-500', hex: '#0ea5e9' },
  { name: '600', class: 'bg-primary-600', hex: '#0284c7' },
  { name: '700', class: 'bg-primary-700', hex: '#0369a1' },
  { name: '800', class: 'bg-primary-800', hex: '#075985' },
  { name: '950', class: 'bg-primary-950', hex: '#020617' }
]

const secondaryShades = [
  { name: '50', class: 'bg-secondary-50', hex: '#ecfdf5' },
  { name: '100', class: 'bg-secondary-100', hex: '#d1fae5' },
  { name: '200', class: 'bg-secondary-200', hex: '#a7f3d0' },
  { name: '300', class: 'bg-secondary-300', hex: '#6ee7b7' },
  { name: '400', class: 'bg-secondary-400', hex: '#34d399' },
  { name: '500', class: 'bg-secondary-500', hex: '#00DC82' },
  { name: '600', class: 'bg-secondary-600', hex: '#059669' },
  { name: '700', class: 'bg-secondary-700', hex: '#047857' },
  { name: '800', class: 'bg-secondary-800', hex: '#065f46' },
  { name: '950', class: 'bg-secondary-950', hex: '#022c22' }
]

const gradients = [
  { name: 'Primary', class: 'bg-gradient-primary' },
  { name: 'Secondary', class: 'bg-gradient-secondary' },
  { name: 'Primary → Secondary', class: 'bg-gradient-primary-secondary' },
  { name: 'Secondary → Primary', class: 'bg-gradient-secondary-primary' },
  { name: 'Radial Primary', class: 'bg-gradient-radial-primary' },
  { name: 'Radial Secondary', class: 'bg-gradient-radial-secondary' },
  { name: 'Hero', class: 'bg-gradient-hero' },
  { name: 'Hero Reverse', class: 'bg-gradient-hero-reverse' },
  { name: 'Subtle Primary', class: 'bg-gradient-subtle-primary' }
]
</script>