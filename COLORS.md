# 🎨 Esquema de Cores - Speak Russian Landing Page

Este documento descreve o esquema de cores completo criado para o site Speak Russian, baseado nas cores oficiais do Nuxt.js.

## 🎯 Cores Principais

### Primary (#020617)
Cor principal central do Nuxt - um azul escuro profundo.

```css
/* Variações disponíveis */
primary-50   /* #f0f9ff - Muito claro */
primary-100  /* #e0f2fe */
primary-200  /* #bae6fd */
primary-300  /* #7dd3fc */
primary-400  /* #38bdf8 */
primary-500  /* #0ea5e9 */
primary-600  /* #0284c7 */
primary-700  /* #0369a1 */
primary-800  /* #075985 */
primary-900  /* #0c4a6e */
primary-950  /* #020617 - Cor principal */
```

### Secondary (#00DC82)
Cor secundária do Nuxt - um verde vibrante.

```css
/* Variações disponíveis */
secondary-50   /* #ecfdf5 - Muito claro */
secondary-100  /* #d1fae5 */
secondary-200  /* #a7f3d0 */
secondary-300  /* #6ee7b7 */
secondary-400  /* #34d399 */
secondary-500  /* #00DC82 - Cor principal */
secondary-600  /* #059669 */
secondary-700  /* #047857 */
secondary-800  /* #065f46 */
secondary-900  /* #064e3b */
secondary-950  /* #022c22 */
```

## 🌈 Gradientes

### Gradientes Lineares
```css
/* Gradientes principais */
bg-gradient-primary              /* Primary gradient */
bg-gradient-secondary            /* Secondary gradient */
bg-gradient-primary-secondary    /* Primary → Secondary */
bg-gradient-secondary-primary    /* Secondary → Primary */

/* Gradientes especiais */
bg-gradient-hero                 /* Hero section gradient */
bg-gradient-hero-reverse         /* Hero reverse gradient */
bg-gradient-subtle-primary       /* Subtle primary gradient */
bg-gradient-subtle-secondary     /* Subtle secondary gradient */
```

### Gradientes Radiais
```css
bg-gradient-radial-primary       /* Radial primary */
bg-gradient-radial-secondary     /* Radial secondary */
```

### Gradientes com Transparência
```css
bg-gradient-overlay-dark         /* Dark overlay */
bg-gradient-overlay-light        /* Light overlay */
```

### Gradiente Animado
```css
bg-gradient-animated             /* Animated gradient */
```

## 🎨 Cores de Sistema

### Success (Verde)
```css
success-500  /* #22c55e */
/* Variações: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 */
```

### Warning (Amarelo)
```css
warning-500  /* #f59e0b */
/* Variações: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 */
```

### Error (Vermelho)
```css
error-500    /* #ef4444 */
/* Variações: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 */
```

### Info (Azul)
```css
info-500     /* #3b82f6 */
/* Variações: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 */
```

### Neutras
```css
neutral-500  /* #737373 */
/* Variações: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 */
```

### Básicas
```css
white        /* #ffffff */
black        /* #000000 */
```

## 🧩 Componentes Pré-definidos

### Botões
```html
<!-- Botões com gradientes -->
<button class="btn-primary">Botão Primary</button>
<button class="btn-secondary">Botão Secondary</button>
<button class="btn-outline-primary">Outline Primary</button>
<button class="btn-outline-secondary">Outline Secondary</button>
```

### Cards
```html
<!-- Cards com diferentes estilos -->
<div class="card-primary">Card Primary</div>
<div class="card-secondary">Card Secondary</div>
<div class="card-glass">Card Glass Effect</div>
```

### Seções Hero
```html
<!-- Seções hero com gradientes -->
<section class="hero-section">Hero Section</section>
<section class="hero-section-reverse">Hero Reverse</section>
```

### Textos com Gradiente
```html
<!-- Textos com gradientes -->
<h1 class="text-gradient-primary">Texto Primary</h1>
<h1 class="text-gradient-secondary">Texto Secondary</h1>
<h1 class="text-gradient-hero">Texto Hero</h1>
```

## ✨ Efeitos Especiais

### Sombras
```css
shadow-primary       /* Sombra primary */
shadow-secondary     /* Sombra secondary */
shadow-primary-lg    /* Sombra primary grande */
shadow-secondary-lg  /* Sombra secondary grande */
```

### Animações
```css
animate-gradient     /* Animação de gradiente */
animate-pulse-slow   /* Pulse lento */
animate-bounce-slow  /* Bounce lento */
```

### Bordas com Gradiente
```css
border-gradient-primary    /* Borda com gradiente primary */
border-gradient-secondary  /* Borda com gradiente secondary */
```

## 🛠️ Utilitários Personalizados

### Scrollbar
```css
scrollbar-primary    /* Scrollbar personalizada */
```

### Seleção de Texto
```css
selection-primary    /* Seleção primary */
selection-secondary  /* Seleção secondary */
```

### Foco
```css
focus-primary        /* Foco primary */
focus-secondary      /* Foco secondary */
```

## 📱 Exemplo de Uso

```vue
<template>
  <div class="min-h-screen bg-gradient-hero">
    <!-- Header com gradiente -->
    <header class="bg-gradient-primary p-8">
      <h1 class="text-4xl font-bold text-white">
        Speak Russian
      </h1>
    </header>
    
    <!-- Conteúdo principal -->
    <main class="container mx-auto px-4 py-12">
      <!-- Card com efeito glass -->
      <div class="card-glass max-w-md mx-auto">
        <h2 class="text-gradient-hero text-2xl font-bold mb-4">
          Aprenda Russo
        </h2>
        <p class="text-white/80 mb-6">
          Comece sua jornada no aprendizado do russo hoje mesmo.
        </p>
        <button class="btn-secondary w-full">
          Começar Agora
        </button>
      </div>
    </main>
  </div>
</template>
```

## 🎨 Visualização

Para ver todas as cores e gradientes em ação, acesse:
```
http://localhost:3000/colors-demo
```

## 📝 Variáveis CSS

As seguintes variáveis CSS estão disponíveis para uso em JavaScript:

```css
:root {
  --color-primary: #020617;
  --color-secondary: #00DC82;
  --color-primary-rgb: 2, 6, 23;
  --color-secondary-rgb: 0, 220, 130;
}
```

## 🚀 Dicas de Uso

1. **Contraste**: Sempre verifique o contraste entre texto e fundo
2. **Acessibilidade**: Use as variações mais claras para fundos com texto escuro
3. **Gradientes**: Use com moderação para não sobrecarregar o design
4. **Animações**: As animações de gradiente consomem mais recursos
5. **Responsividade**: Teste os gradientes em diferentes tamanhos de tela

---

*Este esquema de cores foi criado especificamente para o projeto Speak Russian Landing Page, seguindo as diretrizes de design do Nuxt.js.*