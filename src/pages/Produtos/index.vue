<template>
  <div
    class="flex flex-col items-start justify-start gap-10 w-full min-h-screen"
  >
    <NavBar />
    <!-- Info Empresa -->
    <div
      class="w-full text-center flex justify-center items-center flex-col text-[#8f99a3]"
    >
      <h1 class="text-3xl font-bold">Fernandes Textil</h1>
      <p class="flex gap-1 items-end text-md md:text-lg">
        <svg
          id="Layer_1"
          enable-background="new 0 0 512 512"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
        >
          <g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)">
            <path
              clip-rule="evenodd"
              d="m318.247 398.536c67.251 7.153 115.124 25.557 115.124 47.137 0 27.795-79.412 50.327-177.371 50.327s-177.371-22.532-177.371-50.327c0-21.579 47.873-39.984 115.124-47.137 16.708 19.312 32.767 37.197 46.286 53.012 8.376 9.798 23.545 9.798 31.921 0 13.52-15.814 29.579-33.7 46.287-53.012zm-12.17-255.903h24.629l-16.876-32.364h-16.283zm-100.155 0 8.53-32.364h-16.283l-16.876 32.364zm-27.269 16c2.602 3.715 6.768 5.889 11.21 5.964 4.667.068 9.009-2.136 11.689-5.964zm55.381 5.965c4.58 0 8.834-2.228 11.45-5.966h-22.899c2.618 3.739 6.866 5.966 11.449 5.966zm13.966-21.965v-32.364h-17.04l-8.53 32.364zm29.966 21.965c4.58 0 8.834-2.228 11.45-5.966h-22.899c2.614 3.738 6.869 5.966 11.449 5.966zm11.603-21.965-8.529-32.364h-17.04v32.364zm43.777 16h-22.899c2.615 3.738 6.87 5.966 11.45 5.966 4.588-.022 8.815-2.2 11.449-5.966zm-4.434 21.139v66.192c0 2.875-2.312 5.003-5.005 5h-47.845v-56.698c0-1.984-1.619-3.603-3.603-3.603h-32.916c-1.985 0-3.603 1.619-3.603 3.603v56.698h-47.846c-2.692.003-5.005-2.125-5.005-5v-66.192c2.287.547 4.665.812 7.015.826 8.361 0 16.283-3.458 21.966-9.584 5.69 6.127 13.598 9.584 21.966 9.584s16.276-3.457 21.966-9.584c5.69 6.127 13.598 9.584 21.966 9.584s16.276-3.457 21.966-9.584c5.69 6.127 13.598 9.584 21.966 9.584 2.356-.013 4.717-.277 7.012-.826zm-76.711 261.379c1.996 2.333 5.602 2.333 7.597 0 59.5-69.604 161.253-173.067 161.253-260.099.001-91.155-73.896-165.052-165.051-165.052s-165.052 73.897-165.052 165.052c0 87.032 101.753 190.495 161.253 260.099zm3.799-393.164c73.49 0 133.064 59.575 133.064 133.064 0 73.49-59.575 133.065-133.064 133.065s-133.064-59.575-133.064-133.065c-.001-73.488 59.574-133.064 133.064-133.064z"
              fill-rule="evenodd"
              fill="#8f99a3"
              fill-opacity="1"
              data-original-color="#000000ff"
              stroke="none"
              stroke-opacity="1"
            />
          </g>
        </svg>
        Avenida Rio Branco, 112, Jardim de Piranhas - RN
      </p>
    </div>

    <!-- Search Input -->
    <div
      class="p-2 border rounded flex gap-2 items-center bg-gray-100 w-full max-w-[800px] mx-auto"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.41599 10C3.33915 10.9245 4.5685 11.4794 5.87246 11.5603C7.17641 11.6413 8.46495 11.2426 9.49532 10.4393L13.0407 13.9847C13.1664 14.1061 13.3348 14.1733 13.5096 14.1718C13.6844 14.1703 13.8516 14.1001 13.9752 13.9765C14.0988 13.8529 14.1689 13.6857 14.1704 13.5109C14.172 13.3361 14.1048 13.1677 13.9833 13.042L10.438 9.49666C11.2769 8.42011 11.6735 7.06409 11.5469 5.70518C11.4204 4.34626 10.7802 3.08679 9.75698 2.18364C8.73375 1.28048 7.40455 0.801672 6.04043 0.844849C4.67632 0.888026 3.38005 1.44994 2.41599 2.416C1.91785 2.91388 1.5227 3.50503 1.25309 4.15567C0.983492 4.80632 0.844727 5.50371 0.844727 6.208C0.844727 6.91229 0.983492 7.60968 1.25309 8.26032C1.5227 8.91096 1.91785 9.50212 2.41599 10ZM3.35866 3.36C4.0177 2.70096 4.88487 2.29082 5.81241 2.19946C6.73994 2.1081 7.67047 2.34116 8.44543 2.85895C9.2204 3.37673 9.79186 4.14719 10.0625 5.03907C10.3331 5.93095 10.286 6.88907 9.92943 7.75017C9.57282 8.61127 8.92868 9.32209 8.10674 9.76152C7.28481 10.2009 6.33594 10.3418 5.4218 10.1601C4.50767 9.97834 3.68482 9.48528 3.09345 8.76489C2.50209 8.0445 2.1788 7.14136 2.17866 6.20933C2.17683 5.67971 2.28019 5.155 2.48275 4.66565C2.68532 4.1763 2.98304 3.73204 3.35866 3.35866V3.36Z"
          fill="#8F99A3"
        ></path>
      </svg>
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Buscar por nome ou descrição..."
        class="w-full outline-none bg-gray-100"
      />
    </div>

    <!-- Filter and Grid -->
    <section class="flex gap-4 flex-col md:flex-row w-full p-4">
      <!-- Search and Filter -->
      <div class="flex flex-col gap-4 mb-6">
        <!-- Category Filter -->
        <div class="flex flex-col items-start gap-2">
          <span class="font-semibold">Categorias:</span>
          <div class="flex flex-col gap-4">
            <div
              v-for="category in categories"
              :key="category"
              class="flex items-center gap-2"
            >
              <input
                type="checkbox"
                :value="category"
                v-model="selectedCategories"
                id="category-{{ category }}"
                class="cursor-pointer"
              />
              <label :for="'category-' + category" class="text-gray-800">
                {{ category }}
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid -->
      <div
        class="w-full max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        v-if="filteredList.length > 0"
      >
        <div
          v-for="item in filteredList"
          :key="item.id"
          class="border rounded-lg overflow-hidden shadow hover:shadow-lg"
        >
          <img
            :src="item.images[0]"
            :alt="item.nome"
            @click="openModal(item)"
            class="w-full md:h-48 object-cover cursor-pointer"
          />
          <div class="p-4">
            <h2 class="text-lg font-bold text-gray-800">{{ item.nome }}</h2>
            <button
              @click="isItemInCart(item.id) ? null : openCartModal(item)"
              class="mt-2 text-gray-600 font-bold py-2 px-4 rounded w-full transition-all duration-300 ease-in-out"
              :class="{ 'bg-gray-200' : isItemInCart(item.id), 'bg-primary hover:text-white' : !isItemInCart(item.id)}"
            >
            {{isItemInCart(item.id) ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}}
            </button>
          </div>
        </div>
      </div>
      <div class="w-full max-w-[1000px] mx-auto" v-else>
        <h2 class="text-2xl font-bold text-gray-800 text-center">
          Nenhum produto encontrado.
        </h2>
      </div>
    </section>

    <!-- Cart Modal -->
    <div
      v-if="cartItem"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
      @click.self="closeCartModal"
    >
      <div class="bg-white rounded-lg overflow-hidden w-full max-w-md">
        <div class="p-4">
          <h2 class="text-xl font-bold mb-4 text-gray-800 text-center">
            Adicionar ao Carrinho
          </h2>
          <img
            :src="cartItem.images[0]"
            :alt="cartItem.nome"
            class="w-full md:h-48 object-cover rounded mb-4"
          />
          <p class="mb-4 text-gray-600">{{ cartItem.nome }}</p>

          <label for="quantity" class="block mb-2 font-medium text-gray-700"
            >Quantidade:</label
          >
          <div class="flex justify-start items-center">
            <button
              @click="subQuantity"
              class="w-10 h-12 flex justify-center items-center rounded-l-md bg-gray-100 text-2xl"
            >
              -
            </button>
            <input
              id="quantity"
              type="number"
              disabled
              v-model.number="cartQuantity"
              min="1"
              class="w-20 h-12 p-2 text-center rounded"
            />
            <button
              @click="addQuantity"
              class="w-10 h-12 flex justify-center items-center rounded-r-md bg-gray-100 text-2xl"
            >
              +
            </button>
          </div>
        </div>
        <div class="flex justify-end gap-4 p-4 border-t">
          <button
            @click="closeCartModal"
            class="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            @click="addToCart"
            class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-all duration-300 ease-in-out"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="current"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      @click.self="closeModal"
    >
      <div
        class="bg-white rounded-lg overflow-y-auto w-full max-w-2xl max-h-[90vh] gap-4"
      >
        <div class="p-4 flex flex-col md:flex-row items-start justify-start gap-2">
          <div class="w-[400px] max-w-[80vw] mx-auto h-full flex flex-col gap-2">
            <img
              :src="current.showImage"
              alt=""
              @click="openImageFull(current.showImage)"
              class="w-full cursor-pointer"
            />
            <div class="flex flex-wrap w-full gap-1">
              <img
                v-for="image in current.images"
                :key="image"
                :src="image"
                @click="setShowImageModal(image)"
                class="w-24 h-24 object-contain rounded cursor-pointer"
                :alt="current.nome"
              />
            </div>
          </div>
          <div class="h-full flex flex-col justify-between">
            <h2 class="text-xl md:text-2xl font-bold mb-2 text-gray-800">
              {{ current.nome }}
            </h2>
            <p class="mb-4 text-gray-600 whitespace-pre-line">
              {{ current.descricao }}
            </p>

            <button
              @click="closeModal"
              class="mt-2 bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-md hover:text-white transition-all duration-300 ease-in-out w-full"
            >
              Fechar
            </button>

            <button
              @click="openCartModal(current)"
              class="mt-2 bg-primary text-gray-600 font-bold py-2 px-4 rounded-md hover:text-white transition-all duration-300 ease-in-out w-full"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
        <button
          @click="closeModal"
          class="absolute top-2 text-3xl right-2 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
      </div>
    </div>

    <!-- Modal Image Full -->
    <div
      v-if="imageFull"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      @click.self="closeImageFull"
    >
      <img :src="imageFull" alt="ImageFull" class="max-w-[95vw] max-h-[95vh] object-contain" />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import NavBar from "../../components/Navbar/index.vue";
import Footer from "../../components/Footer/index.vue";
// Lista de produtos
const list = ref([
  {
    id: 1,
    nome: "Manta Tijolinho - Conforto e Estilo Direto da Fábrica!",
    descricao: `
    🧵 Medidas: 1,80m X 2,40m
    🌟 Gramatura: 800g
    💸 Preço: Apenas R$18,00
    `,
    categoria: ["Manta"],
    images: [
      "/src/assets/images/MantaTijolinho/image1.png",
      "/src/assets/images/MantaTijolinho/image2.png",
      "/src/assets/images/MantaTijolinho/image3.png",
      "/src/assets/images/MantaTijolinho/image4.png",
      "/src/assets/images/MantaTijolinho/image5.png",
    ],
  },
  {
    id: 2,
    nome: "🐾 Tapete Felpudo - 40cm x 60cm 🐾",
    descricao: `
      Composição: 100% poliéster.

      Preço: R$9,50 por unidade.

      Fardo com 200 unidades.
    `,
    categoria: ["Tapete"],
    images: [
      "/src/assets/images/tapete/image1.png",
      "/src/assets/images/tapete/image2.png",
      "/src/assets/images/tapete/image3.png",
      "/src/assets/images/tapete/image4.png",
    ],
  },
  {
    id: 3,
    nome: "Manta Lisa - Elegância e Conforto com Preço de Fábrica!",
    descricao: `
      🧵 Medidas: 1,70m X 2,30m
      🌟 Gramatura: 750g
      💸 Preço: Apenas R$15,00
    `,
    categoria: ["Manta"],
    images: [
      "/src/assets/images/mantaLisa/image1.png",
      "/src/assets/images/mantaLisa/image2.png",
      "/src/assets/images/mantaLisa/image3.png",
      "/src/assets/images/mantaLisa/image4.png",
    ],
  },
]);

// Estados
const searchTerm = ref("");
const selectedCategories = ref([]);
const cartItem = ref(null);
const cartQuantity = ref(1);
const current = ref(null);
const imageFull = ref(null);

// Computed para categorias únicas
const categories = computed(() => {
  const allCategories = list.value.flatMap((item) => item.categoria);
  return [...new Set(allCategories)];
});

// Computed para filtrar produtos
const filteredList = computed(() => {
  return list.value.filter((item) => {
    const matchesSearch =
      searchTerm.value === "" ||
      item.nome.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      item.descricao.toLowerCase().includes(searchTerm.value.toLowerCase());

    const matchesCategory =
      selectedCategories.value.length === 0 ||
      selectedCategories.value.some((category) =>
        item.categoria.includes(category)
      );

    return matchesSearch && matchesCategory;
  });
});

// Funções
function openCartModal(item) {
  cartItem.value = item;
  cartQuantity.value = 1;
}
function openModal(item) {
  current.value = item;
  current.value.showImage = current.value.images[0];
}
function openImageFull(image) {
  imageFull.value = image;
}
function setShowImageModal(image) {
  current.value.showImage = image;
}

function closeCartModal() {
  cartItem.value = null;
}

function closeModal() {
  current.value = null;
}
function closeImageFull() {
  imageFull.value = null;
}

function addQuantity() {
  cartQuantity.value += 1;
}

function subQuantity() {
  if (cartQuantity.value > 1) {
    cartQuantity.value -= 1;
  }
}

function isItemInCart(itemId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.some(cartItem => cartItem.id === itemId);
}

function addToCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({
    id: cartItem.value.id,
    nome: cartItem.value.nome,
    quantidade: cartQuantity.value,
    imagem: cartItem.value.images[0],
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  closeCartModal();
}
</script>

<style>
/* Adicione estilos globais aqui, se necessário */
</style>
