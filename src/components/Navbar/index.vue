<template>
  <nav
    class="w-full flex justify-between items-center p-4 bg-white shadow-md px-10 md:px-32"
  >
    <!-- Logo -->
    <div class="flex items-center">
      <a href="/" class="cursor-pointer hover:bg-white">
        <img src="@/assets/images/logo.png" alt="Logo" class="h-10" />
      </a>
    </div>

    <!-- Ícone do Menu (Mobile) -->
    <button
      class="md:hidden text-secondary text-3xl fixed top-4 right-4 z-50 bg-white bg-opacity-40 shadow-xl rounded-md p-2"
      @click="toggleSidebar"
    >
      ☰
    </button>

    <!-- Links do Navbar (Desktop) -->
    <ul class="hidden md:flex space-x-8">
      <li>
        <a
          href="#"
          class="text-secondary font-semibold text-lg hover:bg-white hover:border-b-4 hover:border-primary"
          >Contato</a
        >
      </li>
      <li>
        <a
          href="#"
          class="text-secondary font-semibold text-lg hover:bg-white hover:border-b-4 hover:border-primary"
          >Sobre</a
        >
      </li>
      <li>
        <a
          href="/produtos"
          class="text-secondary font-semibold text-lg hover:bg-white hover:border-b-4 hover:border-primary"
          >Produtos</a
        >
      </li>
      <li>
        <a
          href="/carrinho"
          class="text-secondary font-semibold text-lg hover:bg-white hover:border-b-4 hover:border-primary"
          >Carrinho</a
        >
      </li>
      <!-- <li>
        <a
          href="/carrinho"
          class="text-secondary font-semibold text-lg flex gap-1 items-center hover:bg-white"
          :class="{ 'bg-primary' : getCartItemCount(), 'bg-secondary hover:text-white' : !getCartItemCount() }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 14 15"
            fill="none"
          >
            <path
              d="M0.999995 1.99996H2.33333V11.3333C2.33333 11.5101 2.40357 11.6797 2.52859 11.8047C2.65361 11.9297 2.82318 12 2.99999 12H11C11.1434 12 11.283 11.9537 11.3981 11.8681C11.5131 11.7825 11.5975 11.662 11.6387 11.5246L13.6387 4.85796C13.6685 4.75842 13.6746 4.65329 13.6566 4.55095C13.6386 4.44862 13.5969 4.35191 13.5348 4.26856C13.4728 4.1852 13.3921 4.11751 13.2992 4.07087C13.2064 4.02424 13.1039 3.99995 13 3.99996H3.66666V1.33329C3.66666 1.15648 3.59642 0.986912 3.4714 0.861888C3.34638 0.736864 3.17681 0.666626 2.99999 0.666626H0.999995C0.823184 0.666626 0.653615 0.736864 0.52859 0.861888C0.403566 0.986912 0.333328 1.15648 0.333328 1.33329C0.333328 1.5101 0.403566 1.67967 0.52859 1.8047C0.653615 1.92972 0.823184 1.99996 0.999995 1.99996ZM3.66666 5.33329H12.104L10.504 10.6666H3.66666V5.33329ZM3.33333 12.6666C3.53111 12.6666 3.72445 12.7253 3.8889 12.8352C4.05335 12.945 4.18152 13.1012 4.25721 13.2839C4.3329 13.4667 4.3527 13.6677 4.31411 13.8617C4.27553 14.0557 4.18029 14.2339 4.04044 14.3737C3.90058 14.5136 3.7224 14.6088 3.52842 14.6474C3.33444 14.686 3.13337 14.6662 2.95064 14.5905C2.76792 14.5148 2.61174 14.3866 2.50186 14.2222C2.39198 14.0577 2.33333 13.8644 2.33333 13.6666C2.33333 13.4014 2.43868 13.1471 2.62622 12.9595C2.81376 12.772 3.06811 12.6666 3.33333 12.6666ZM10 12.6666C10.1978 12.6666 10.3911 12.7253 10.5556 12.8352C10.72 12.945 10.8482 13.1012 10.9239 13.2839C10.9996 13.4667 11.0194 13.6677 10.9808 13.8617C10.9422 14.0557 10.847 14.2339 10.7071 14.3737C10.5672 14.5136 10.3891 14.6088 10.1951 14.6474C10.0011 14.686 9.80004 14.6662 9.61731 14.5905C9.43459 14.5148 9.27841 14.3866 9.16853 14.2222C9.05864 14.0577 9 13.8644 9 13.6666C9 13.4014 9.10535 13.1471 9.29289 12.9595C9.48042 12.772 9.73478 12.6666 10 12.6666Z"
              fill="#3D2F00"
            />
            </svg>
            {{getCartItemCount()}}
        </a>
      </li> -->
    </ul>

    <!-- Sidebar (Mobile) -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 z-50 bg-black bg-opacity-50"
      @click="toggleSidebar"
    >
      <div
        class="absolute top-0 left-0 bg-white h-full w-64 shadow-lg transform transition-transform"
        @click.stop
      >
        <button class="text-secondary text-2xl p-4" @click="toggleSidebar">
          ✖
        </button>
        <ul class="space-y-4 mt-8 pl-6">
          <li>
            <a
              href="#"
              class="text-secondary font-semibold text-lg block hover:text-primary"
              >Contato</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-secondary font-semibold text-lg block hover:text-primary"
              >Sobre</a
            >
          </li>
          <li>
            <a
              href="/produtos"
              class="text-secondary font-semibold text-lg block hover:text-primary"
              >Produtos</a
            >
          </li>
          <li>
            <a
              href="/carrinho"
              class="text-secondary font-semibold text-lg block hover:text-primary"
              >Carrinho</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

// Estado para controlar o sidebar
const isSidebarOpen = ref(false);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

function getCartItemCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart ? cart.length : 0;
}
</script>

<style scoped>
/* Estilo adicional para a transição do sidebar */
.fixed {
  backdrop-filter: blur(4px);
}
</style>
