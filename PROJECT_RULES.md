# 📋 Regras do Projeto - Speak Russian Landing Page

Este documento estabelece as regras e padrões de desenvolvimento para a landing page do curso de russo.

## 🎯 Visão Geral do Projeto

**Objetivo**: Landing page para venda de curso de russo com aulas gravadas  
**Stack**: Nuxt 4 + Tailwind CSS + Vue 3  
**Tipo**: Single Page Application (SPA) focada em conversão  

## 🏗️ Estrutura do Projeto

### Organização de Arquivos
```
app/
├── components/           # Componentes reutilizáveis
│   ├── sections/        # Seções específicas da landing page
│   └── ui/              # Componentes de interface (botões, cards, etc.)
├── pages/               # Páginas da aplicação
├── assets/              # Assets estáticos
└── composables/         # Composables Vue
```

## 🎨 Padrões de Design

### Sistema de Cores
- **Primary**: `#020617` (azul escuro profundo do Nuxt)
- **Secondary**: `#00DC82` (verde vibrante do Nuxt)
- Usar sempre as variações definidas em `COLORS.md`
- Gradientes permitidos: `bg-gradient-primary`, `bg-gradient-secondary`, `bg-gradient-primary-secondary`

### Background das Seções
**IMPORTANTE**: Para manter consistência visual entre seções, usar sempre o background personalizado:

```css
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
```

**Elementos decorativos padrão**:
```html
<!-- Background decorative elements -->
<div class="absolute inset-0 opacity-10">
  <div class="absolute top-20 left-10 w-72 h-72 bg-secondary-500 rounded-full blur-3xl"></div>
  <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
</div>
```

**Estrutura base para seções**:
```html
<section class="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
  <!-- Background decorative elements -->
  <!-- Conteúdo da seção -->
</section>
```

### Tipografia
- Usar classes Tailwind para consistência
- Mobile-first: começar com tamanhos menores e escalar para desktop
- Hierarquia clara: h1 > h2 > h3 > p

## 🧩 Componentes

### Convenções de Nomenclatura
- **PascalCase** para nomes de componentes: `VideoPlayer`, `HeroSection`, `Badge`
- **kebab-case** para props: `video-url`, `button-text`
- **camelCase** para variáveis JavaScript: `videoUrl`, `buttonText`

### Estrutura de Componentes
```vue
<template>
  <!-- Template aqui -->
</template>

<script setup>
// Imports explícitos
import ComponentName from '~/components/ComponentName.vue'

// Props
defineProps({
  propName: {
    type: String,
    required: true
  }
})

// Configurações do componente
defineOptions({
  name: 'ComponentName'
})
</script>

<style scoped>
/* Estilos específicos do componente */
</style>
```

### Regras de Componentes
1. **Importações Explícitas**: Todos os componentes devem ser explicitamente importados
2. **Nome Obrigatório**: Todo componente deve ter `defineOptions({ name: 'ComponentName' })`
3. **Props Tipadas**: Sempre definir tipo, required e default quando necessário
4. **Scoped Styles**: Usar `<style scoped>` para evitar vazamento de estilos
5. **Responsividade**: Sempre considerar mobile, tablet e desktop

## 📱 Responsividade

### Breakpoints Tailwind
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+
- `2xl`: 1536px+

### Abordagem Mobile-First
```css
/* ✅ Correto */
class="text-base md:text-lg lg:text-xl"

/* ❌ Incorreto */
class="text-xl md:text-lg sm:text-base"
```

## 🎯 Seções da Landing Page

### Seções Obrigatórias
1. **Hero**: Título, subtítulo, badge, vídeo
2. **Benefícios**: Por que aprender russo
3. **Método**: Como funciona o curso
4. **Depoimentos**: Prova social
5. **Preços**: Planos e valores
6. **FAQ**: Perguntas frequentes
7. **CTA Final**: Chamada para ação
8. **Footer**: Informações legais

### Componentes Reutilizáveis
- `Badge`: Para destacar informações importantes
- `VideoPlayer`: Para vídeos promocionais
- `Button`: Botões de CTA padronizados
- `Card`: Cards para benefícios, depoimentos, etc.
- `Section`: Container padrão para seções

## 🔧 Padrões de Código

### Vue/Nuxt
- Usar Composition API (`<script setup>`)
- Preferir `defineProps()` e `defineEmits()`
- Usar `useHead()` para meta tags
- Implementar lazy loading para componentes pesados

### Tailwind CSS
- Usar classes utilitárias sempre que possível
- Criar componentes CSS apenas quando necessário
- Usar `@apply` com moderação
- Manter consistência no espaçamento (4, 8, 12, 16, 20, 24...)

### Performance
- Otimizar imagens (usar WebP quando possível)
- Lazy loading para vídeos e imagens
- Minimizar JavaScript desnecessário
- Usar `v-show` vs `v-if` apropriadamente

## 📋 Checklist de Desenvolvimento

### Antes de Criar um Componente
- [ ] Nome segue PascalCase
- [ ] Props são tipadas
- [ ] Componente é responsivo
- [ ] Usa cores do sistema
- [ ] Tem `defineOptions({ name: 'ComponentName' })`

### Antes de Fazer Commit
- [ ] Código está formatado
- [ ] Não há console.logs
- [ ] Componentes são importados explicitamente
- [ ] Responsividade testada
- [ ] Performance verificada

## 🚫 Práticas Proibidas

1. **Auto-import de componentes**: Sempre importar explicitamente
2. **Estilos globais desnecessários**: Usar scoped styles
3. **Hardcoded colors**: Usar sempre o sistema de cores
4. **Componentes não nomeados**: Todo componente deve ter nome
5. **Props não tipadas**: Sempre definir tipos
6. **Código não responsivo**: Testar em todos os breakpoints

## 🎨 Guia de Estilo Visual

### Elementos de Interface
- **Bordas**: Usar `rounded-lg`, `rounded-xl`, `rounded-2xl`
- **Sombras**: `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Blur**: `backdrop-blur-sm`, `blur-xl` para efeitos
- **Gradientes**: Sempre usar as cores do sistema
- **Animações**: Sutis e com propósito (pulse, fade, slide)

### Espaçamento
- **Seções**: `py-16` ou `py-20` para desktop, `py-12` para mobile
- **Componentes**: `p-4`, `p-6`, `p-8` conforme necessário
- **Margens**: `mb-8`, `mb-12`, `mb-16` para separação vertical

## 📞 Contato e Suporte

Para dúvidas sobre estas regras ou sugestões de melhorias, consulte a documentação do projeto ou entre em contato com a equipe de desenvolvimento.

---

**Última atualização**: Dezembro 2024  
**Versão**: 1.0.0