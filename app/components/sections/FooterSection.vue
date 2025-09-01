<template>
  <footer class="relative bg-gradient-hero py-16 overflow-hidden">
    <!-- Background decorativo -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-64 h-64 bg-secondary-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-80 h-80 bg-primary-400 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Logo e descrição -->
      <div class="text-center mb-12">
        <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Speak <span class="text-secondary-400">Russian</span>
        </h3>
        <p class="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Transforme sua vida aprendendo russo de forma rápida e eficiente com nosso método revolucionário
        </p>
      </div>

      <!-- Links úteis -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Curso -->
        <div class="text-center">
          <h4 class="text-lg font-semibold text-white mb-4">Curso</h4>
          <ul class="space-y-2 text-gray-300">
            <li><a href="#hero" class="hover:text-secondary-400 transition-colors duration-200">Início</a></li>
            <li><a href="#advantages" class="hover:text-secondary-400 transition-colors duration-200">Vantagens</a></li>
            <li><a href="#content" class="hover:text-secondary-400 transition-colors duration-200">Conteúdo</a></li>
            <li><a href="#testimonials" class="hover:text-secondary-400 transition-colors duration-200">Depoimentos</a></li>
          </ul>
        </div>

        <!-- Suporte -->
        <div class="text-center">
          <h4 class="text-lg font-semibold text-white mb-4">Suporte</h4>
          <ul class="space-y-2 text-gray-300">
            <li><a href="#faq" class="hover:text-secondary-400 transition-colors duration-200">FAQ</a></li>
            <li><a href="https://wa.me/5541992152505?text=Olá! Gostaria de saber mais sobre o curso de russo." target="_blank" class="hover:text-secondary-400 transition-colors duration-200">Contato</a></li>
          </ul>
        </div>

        <!-- Redes Sociais -->
        <div class="text-center">
          <h4 class="text-lg font-semibold text-white mb-4">Siga-nos</h4>
          <div class="flex justify-center">
            <a href="https://www.instagram.com/russo.rapido?igsh=MWdyZ2d5YXhreDMzcA%3D%3D&utm_source=qr" target="_blank" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary-500/20 transition-colors duration-200">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Linha divisória -->
      <div class="border-t border-white/10 pt-8">
        <!-- Copyright -->
        <div class="text-center">
          <p class="text-gray-400 text-sm">
            © 2025 <span class="text-secondary-400 font-semibold">Speak Russian</span>. Todos os direitos reservados.
          </p>
          <p class="text-gray-500 text-xs mt-2">
            Desenvolvido com ❤️ para acelerar seu aprendizado do russo
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Configurações do componente
defineOptions({
  name: 'FooterSection'
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
