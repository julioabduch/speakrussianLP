<template>
  <section id="faq" class="relative min-h-screen bg-gradient-hero py-20 overflow-hidden">
    <!-- Background decorativo -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-secondary-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header da seção -->
      <div class="text-center mb-16">
        <div class="mb-6">
          <Badge text="Perguntas Frequentes" />
        </div>
        
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Dúvidas
          <span class="text-secondary-400">
            Frequentes
          </span>
        </h2>
        
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Encontre respostas para as principais dúvidas sobre o curso de russo
        </p>
      </div>

      <!-- Lista de FAQs -->
      <div class="space-y-4">
        <FAQItem
          question="Como tenho acesso ao curso?"
          answer="Os dados de login e senha são enviados para seu email após a confirmação do pagamento."
        />
        
        <FAQItem
          question="Como funciona a garantia?"
          answer="Você tem 7 dias para acessar a plataforma e solicitar o reembolso caso o curso não atenda suas expectativas."
        />
        
        <FAQItem
          question="Quanto tempo vou levar para falar russo?"
          answer="Isto depende do tempo que você dedicar aos estudos. Normalmente você vai conseguir se comunicar após 100 horas de estudo."
        />
        
        <FAQItem
          question="Como o app foi desenvolvido?"
          answer="O aplicativo foi desenvolvido especificamente para ajudá-lo a memorizar o alfabeto rapidamente. Está disponível na Apple Store ou pode ser acessado diretamente pelo navegador (Safari, Chrome, Firefox). A versão para Android estará disponível em breve!"
        />
        
        <FAQItem
          question="Quanto tempo leva para aprender a comunicação básica?"
          answer="Com apenas 1 hora de estudo por dia, você pode alcançar habilidades básicas de comunicação em cerca de 3 meses. No entanto, o tempo pode variar dependendo da sua dedicação e consistência."
        />
        
        <FAQItem
          question="Posso agendar uma aula particular?"
          answer="Sim, temos um sistema de aulas particulares com professoras russas e ucranianas, com custo adicional. Você vai receber informações de como agendar aulas no seu email."
        />
        
        <FAQItem
          question="O curso me ajudará em viagens?"
          answer="Com certeza! O curso foi projetado para ajudar em viagens, e oferecemos um programa especial de assistência para viagens à Rússia e à Ucrânia. Você terá acesso a guias locais para ajudar no que precisar, com custo adicional."
        />
        
        <FAQItem
          question="O que torna este curso diferente dos cursos tradicionais?"
          answer="• Diferente dos cursos tradicionais, que focam em gramática e vocabulário de forma teórica, este curso oferece uma abordagem prática e direta, baseada em situações reais e comunicação eficaz."
        />
        
        <FAQItem
          question="Este curso é adequado para iniciantes?"
          answer="Sim! O curso foi criado especialmente para iniciantes, com uma abordagem simples e passo a passo que torna o aprendizado do russo fácil e acessível desde o início."
        />
        
        <FAQItem
          question="Posso acessar o curso em vários dispositivos?"
          answer="Sim, o curso pode ser acessado em qualquer dispositivo com conexão à internet. Seja no computador, tablet ou smartphone, você terá acesso em qualquer lugar, a qualquer momento."
        />
        
        <FAQItem
          question="O russo é amplamente falado na Ucrânia?"
          answer="Sim, o russo é a língua nativa em muitas das maiores cidades da Ucrânia, como Kiev, Odessa e Kharkiv. Nessas cidades, o russo é comumente falado nas ruas e no dia a dia, muitas vezes mais do que o ucraniano."
        />
      </div>

      <!-- Call to action -->
      <div class="text-center mt-16">
        <p class="text-gray-300 mb-6">
          Ainda tem dúvidas? Entre em contato conosco!
        </p>
        <ActionButton 
          text="Começar Agora" 
          href="#checkout"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import FAQItem from '~/components/ui/FAQItem.vue'
import Badge from '~/components/Badge.vue'
import ActionButton from '~/components/ActionButton.vue'



// Configurações do componente
defineOptions({
  name: 'FAQSection'
})
</script>

<style scoped>
/* Animações personalizadas para o background */
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