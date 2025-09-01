<template>
  <section class="relative min-h-screen bg-gradient-hero py-20 overflow-hidden">
    <!-- Background decorativo -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-secondary-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header da seção -->
      <div class="text-center mb-16">
        <div class="mb-6">
          <Badge text="Escolha seu Plano" />
        </div>
        
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Comece sua Jornada no
          <span class="text-secondary-400">
            Russo Hoje
          </span>
        </h2>
        
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Escolha o plano ideal para você e transforme sua vida com o domínio do idioma russo
        </p>
      </div>

      <!-- Cards de preços -->
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        <!-- Plano Anual -->
        <PricingCard
          title="Acesso Anual"
          subtitle="Perfeito para começar"
          :original-price="99"
          :promotional-price="59"
          :discount="40"
          payment-info="Pagamento único"
          :features="[
            'Acesso completo ao curso por 1 ano',
            'Mais de 50 aulas em vídeo HD',
            'Material didático em PDF',
            'Exercícios práticos interativos',
            'Certificado de conclusão',
            'Acesso via computador e celular'
          ]"
          @purchase="handlePurchase"
        />

        <!-- Plano Vitalício -->
        <PricingCard
          title="Acesso Vitalício"
          subtitle="A escolha mais inteligente"
          :original-price="199"
          :promotional-price="99"
          :discount="50"
          payment-info="Pagamento único"
          :features="[
            'Acesso VITALÍCIO ao curso',
            'Todas as atualizações futuras GRÁTIS',
            'Suporte direto via WhatsApp',
            'Aulas bônus exclusivas',
            'Grupo VIP de alunos no Telegram',
            'Sessões de conversação ao vivo',
            'Material extra: áudios nativos',
            'Prioridade no atendimento'
          ]"
          :is-popular="true"
          @purchase="handlePurchase"
        />
      </div>

      <!-- Seção de garantia e segurança -->
      <div class="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <div class="inline-flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white">Compra 100% Segura</h3>
          </div>
          <p class="text-gray-300 text-lg mb-6">
            Sua satisfação é nossa prioridade. Por isso, oferecemos uma garantia incondicional.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 class="text-white font-semibold mb-2">7 Dias de Garantia</h4>
            <p class="text-gray-400 text-sm">Não gostou? Devolvemos 100% do seu dinheiro</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-secondary-500/20 to-secondary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 class="text-white font-semibold mb-2">Pagamento Seguro</h4>
            <p class="text-gray-400 text-sm">Processamento via SSL com máxima segurança</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h4 class="text-white font-semibold mb-2">Acesso Imediato</h4>
            <p class="text-gray-400 text-sm">Comece a estudar assim que o pagamento for aprovado</p>
          </div>
        </div>
      </div>

      <!-- Call to action final -->
      <div class="text-center mt-12">
        <p class="text-gray-300 mb-4">
          ⏰ <strong class="text-white">Oferta por tempo limitado!</strong> Não perca essa oportunidade única.
        </p>
        <div class="flex items-center justify-center gap-2 text-secondary-400">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
          </svg>
          <span class="font-semibold">Mais de 1.000 alunos já transformaram suas vidas!</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PricingCard from '~/components/ui/PricingCard.vue'
import Badge from '~/components/Badge.vue'

const handlePurchase = (planData) => {
  console.log('Plano selecionado:', planData)
  // Aqui você pode implementar a lógica de redirecionamento para o checkout
  // Por exemplo, redirecionar para uma página de pagamento ou abrir um modal
}
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