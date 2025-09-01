<template>
  <section id="content" class="relative py-20 overflow-hidden bg-gradient-hero">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-secondary-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <Badge text="Conteúdo do Curso" class="mb-6" />
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          O que você vai <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400">aprender</span>
        </h2>
        <p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Um método completo e estruturado para dominar o russo, desde o alfabeto até conversações fluentes
        </p>
      </div>

      <!-- Course Topics Grid -->
      <div class="grid gap-6 md:gap-8">
        <ExpandableCard
          v-for="topic in courseTopics"
          :key="topic.id"
          :title="topic.title"
          :description="topic.description"
          :icon="topic.icon"
          :modules="topic.modules"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Badge from '~/components/Badge.vue'
import ExpandableCard from '~/components/ExpandableCard.vue'

// Dados dos tópicos do curso
const courseTopics = [
  {
    id: 1,
    title: 'App Alfabeto',
    description: 'Aprenda rápido e entenda todas aquelas letras difíceis',
    icon: 'device-mobile',
    modules: [
      {
        title: 'Alfabeto Cirílico Completo',
        description: 'Todas as 33 letras do alfabeto russo com pronúncia correta'
      },
      {
        title: 'Exercícios Interativos',
        description: 'Pratique a escrita e reconhecimento das letras'
      },
      {
        title: 'Dicas de Memorização',
        description: 'Técnicas eficazes para memorizar rapidamente o alfabeto'
      }
    ]
  },
  {
    id: 2,
    title: 'Aprenda com Séries',
    description: 'Trechos de 1 a 2 minutos para decorar e entender episódios completos',
    icon: 'play',
    modules: [
      {
        title: 'Trechos Selecionados',
        description: 'Fragmentos cuidadosamente escolhidos das melhores séries '
      },
      {
        title: 'Método de Repetição',
        description: 'Sistema progressivo para memorização eficaz'
      },
      {
        title: 'Compreensão Gradual',
        description: 'Em 6 meses você entenderá episódios completos em russo'
      }
    ]
  },
  {
    id: 3,
    title: 'Videoaulas Estruturadas',
    description: '48 videoaulas completas sobre estrutura da língua russa',
    icon: 'academic-cap',
    modules: [
      {
        title: 'Estrutura da Língua',
        description: 'Fundamentos gramaticais e sintáticos do russo'
      },
      {
        title: 'Vocabulário Essencial',
        description: 'As palavras mais importantes para comunicação básica'
      },
      {
        title: 'Declinações e Exercícios',
        description: 'Sistema completo de casos com prática intensiva'
      },
      {
        title: 'Legendas em Russo',
        description: 'Todas as aulas gravadas em russo com legendas para melhor compreensão'
      }
    ]
  },
  {
    id: 4,
    title: 'Diálogos Cotidianos',
    description: 'Mais de 40 diálogos de situações do dia a dia com PDF',
    icon: 'chat',
    modules: [
      {
        title: 'Situações Reais',
        description: 'Conversas práticas para uso no cotidiano'
      },
      {
        title: 'Material em PDF',
        description: 'Transcrições completas para estudo offline'
      },
      {
        title: 'Solidificação do Aprendizado',
        description: 'Método mais eficaz após assistir às séries'
      }
    ]
  },
  {
    id: 5,
    title: 'Aprenda com Filmes',
    description: 'Assuntos diversos aplicados na prática através de trechos cinematográficos',
    icon: 'film',
    modules: [
      {
        title: 'Trechos Cinematográficos',
        description: 'Fragmentos selecionados dos melhores filmes russos'
      },
      {
        title: 'Contexto Cultural',
        description: 'Aprenda sobre a cultura russa enquanto estuda o idioma'
      },
      {
        title: 'Aprendizado Divertido',
        description: 'Divirta-se enquanto absorve conhecimento prático'
      }
    ]
  },
  {
    id: 6,
    title: 'Verbos e Conjugações',
    description: 'Sistema completo de verbos e suas conjugações',
    icon: 'puzzle',
    modules: [
      {
        title: 'Verbos Essenciais',
        description: 'Os verbos mais utilizados no russo cotidiano'
      },
      {
        title: 'Aspectos Verbais',
        description: 'Compreenda o sistema de aspectos perfectivo e imperfectivo'
      },
      {
        title: 'Conjugações Práticas',
        description: 'Exercícios para dominar todas as formas verbais'
      }
    ]
  },
  {
    id: 7,
    title: 'Números, Tempo e Datas',
    description: 'Tudo sobre a intrigante forma russa de expressar números e datas',
    icon: 'calculator',
    modules: [
      {
        title: 'Sistema Numérico',
        description: 'Números cardinais e ordinais com suas peculiaridades'
      },
      {
        title: 'Expressões Temporais',
        description: 'Como falar sobre tempo, horas e períodos'
      },
      {
        title: 'Datas e Calendário',
        description: 'Meses, dias da semana e expressões de data'
      }
    ]
  },
  {
    id: 8,
    title: 'Gramática Fundamental',
    description: 'Tabelas e aplicações práticas da gramática essencial',
    icon: 'book',
    modules: [
      {
        title: 'Tabelas de Referência',
        description: 'Guias visuais para consulta rápida'
      },
      {
        title: 'Aplicações Práticas',
        description: 'Exercícios contextualizados para fixação'
      },
      {
        title: 'Regras Essenciais',
        description: 'As regras gramaticais mais importantes do russo'
      }
    ]
  },
  {
    id: 9,
    title: 'Desenhos Animados',
    description: 'Divirta-se enquanto aprende com contexto visual memorável',
    icon: 'emoji-happy',
    modules: [
      {
        title: 'Conteúdo Infantil',
        description: 'Desenhos russos clássicos e modernos'
      },
      {
        title: 'Contexto Visual',
        description: 'Imagens ajudam na memorização de frases e palavras'
      },
      {
        title: 'Aprendizado Lúdico',
        description: 'Método divertido e eficaz para todas as idades'
      }
    ]
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
