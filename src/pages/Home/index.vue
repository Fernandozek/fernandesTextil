<template>
  <div class="w-full min-h-screen flex flex-col justify-start items-start">
    <NavBar />
    <section class="w-full relative reveal mb-20">
      <span
        class="w-full h-full absolute top-0 left-0 bg-black bg-opacity-40 z-20"
      ></span>
      <img
        src="@/assets/images/mantas/produto1.png"
        alt="mantas"
        class="z-10 w-full h-[500px] object-cover blur-[1.5px]"
      />
      <h1
        class="absolute top-[30%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[28px] md:text-[82px] shadow-lg text-white border-b-8 border-primary z-30 font-extrabold"
      >
        FÁBRICA FERNANDES
      </h1>
      <h1
        class="absolute top-[calc(30%+100px)] md:top-[calc(50%+100px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:whitespace-nowrap max-md:w-full max-md:text-center text-[22px] md:text-[42px] md:shadow-lg text-white z-30 italic font-serif"
      >
        Mantas de Qualidade com Fabricação Própria.
      </h1>
      <a
        href="/produtos"
        class="absolute top-[calc(30%+200px)] md:top-[calc(50%+200px)] left-1/2 bg-primary whitespace-nowrap px-4 py-2 rounded-lg transform -translate-x-1/2 -translate-y-1/2 max-md:text-center text-[22px] md:text-[32px] md:shadow-lg text-white z-30 font-bold"
      >
        VER PRODUTOS
      </a>
    </section>
    <!-- Destaques da Fábrica -->
    <section class="w-full py-16 bg-gray-100 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8 text-primary">
          Por que escolher a Fábrica Fernandes?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-white rounded shadow-lg">
            <h3 class="text-xl font-semibold mb-4">Fabricação Própria</h3>
            <p class="text-gray-600">
              Controle total do processo, garantindo qualidade e personalização.
            </p>
          </div>
          <div class="p-6 bg-white rounded shadow-lg">
            <h3 class="text-xl font-semibold mb-4">Entrega em Todo o Brasil</h3>
            <p class="text-gray-600">
              Levamos nossas mantas com segurança para qualquer região do país.
            </p>
          </div>
          <div class="p-6 bg-white rounded shadow-lg">
            <h3 class="text-xl font-semibold mb-4">Preço Competitivo</h3>
            <p class="text-gray-600">
              Qualidade superior pelo melhor preço do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Depoimentos de Clientes -->
    <section class="w-full py-16 bg-white px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8 text-primary">
          O que nossos clientes dizem
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-6 border rounded shadow-lg">
            <p class="italic text-gray-600">
              "Excelente qualidade e atendimento impecável. Recomendo!"
            </p>
            <span class="block mt-4 font-semibold">- Maria Silva</span>
          </div>
          <div class="p-6 border rounded shadow-lg">
            <p class="italic text-gray-600">
              "As mantas são lindas e chegaram antes do prazo. Ótima
              experiência!"
            </p>
            <span class="block mt-4 font-semibold">- João Santos</span>
          </div>
          <div class="p-6 border rounded shadow-lg">
            <p class="italic text-gray-600">
              "A fábrica realmente entrega o que promete. Nota 10!"
            </p>
            <span class="block mt-4 font-semibold">- Carla Oliveira</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa e Contato -->
    <section class="w-full py-16 bg-gray-100 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-primary text-center">
          Onde estamos
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d471.06516704881074!2d-37.33967803553495!3d-6.382333258824275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1736690990364!5m2!1spt-BR!2sbr"
            class="w-full h-[350px]"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div class="flex flex-col justify-center items-start">
            <p class="text-lg text-gray-700">
              <strong>Endereço:</strong> Avenida Rio Branco, 112, Jardim de Piranhas - RN
            </p>
            <p class="text-lg text-gray-700">
              <strong>Contato:</strong> (84) 9 9847-7441
            </p>
            <p class="text-lg text-gray-700">
              <strong>Email:</strong> contato@fabricaf.com
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script setup>
import { ref } from "vue";
import NavBar from "@/components/Navbar/index.vue";
import Footer from "../../components/Footer/index.vue";
</script>

<style>
</style>