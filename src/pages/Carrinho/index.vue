<template>
  <div class="w-full flex flex-col justify-start items-start gap-10 bg-white text-gray-800">
    <NavBar />
    <h1 class="text-2xl font-bold mb-4 text-gray-800 text-center w-full">
      Carrinho
    </h1>

    <!-- Lista de Produtos no Carrinho -->
    <div v-if="cart.length" class="space-y-4 w-full max-w-[1100px] mx-auto">
      <div
        v-for="(item, index) in cart"
        :key="index"
        class="flex flex-col md:flex-row items-center justify-between gap-4 border p-4 rounded w-full"
      >
        <div class="flex gap-4">
          <img
            :src="item.imagem"
            :alt="item.nome"
            class="w-16 h-16 object-cover rounded"
          />
          <h2 class="text-lg font-medium text-gray-800">{{ item.nome }}</h2>
        </div>
        <div class="flex items-center justify-between max-md:w-full gap-2">
          <label
            for="quantity-{{ index }}"
            class="block text-sm font-medium text-gray-600"
            >Quantidade:</label
          >
          <div class="flex items-center mt-1">
            <button
              class="bg-gray-200 w-10 h-12 flex items-center justify-center rounded hover:bg-gray-300"
              @click="decreaseQuantity(index)"
            >
              -
            </button>
            <input
              id="quantity-{{ index }}"
              type="number"
              v-model.number="item.quantidade"
              min="1"
              class="w-14 h-12 p-2 text-center mx-2"
              disabled
            />
            <button
              class="bg-gray-200 w-10 h-12 flex items-center justify-center rounded hover:bg-gray-300"
              @click="increaseQuantity(index)"
            >
              +
            </button>
          </div>
          <button
            @click="confirmRemove(index)"
            class="group"
          >
            <svg
              id="Layer_1"
              enable-background="new 0 0 25.9 32"
              viewBox="0 0 25.9 32"
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.dev/svgjs"
            >
              <g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)">
                <path
                  d="m8 10h2v16h-2z"
                  fill="#000000"
                  fill-opacity="1"
                  data-original-color="#000000ff"
                  stroke="none"
                  stroke-opacity="1"
                />
                <path
                  d="m12 10h2v16h-2z"
                  fill="#000000"
                  fill-opacity="1"
                  data-original-color="#000000ff"
                  stroke="none"
                  stroke-opacity="1"
                />
                <path
                  d="m16 10h2v16h-2z"
                  fill="#000000"
                  fill-opacity="1"
                  data-original-color="#000000ff"
                  stroke="none"
                  stroke-opacity="1"
                />
                <path
                  d="m18 4v-4h-10v4h-8v2h2l1 23c0 1.7 1.3 3 3 3h14c1.6 0 3-1.3 3-3l1-23h1.9v-2zm-8-2h6v2h-6zm11 27c0 .6-.4 1-1 1h-14c-.6 0-1-.5-1-1l-1-23h18z"
                  fill="#000000"
                  fill-opacity="1"
                  data-original-color="#000000ff"
                  stroke="none"
                  stroke-opacity="1"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mensagem quando o carrinho está vazio -->
    <div
      v-else
      class="text-center w-full flex flex-col justify-center items-center gap-4"
    >
      <p class="text-lg font-semibold text-gray-600">
        Seu carrinho está vazio.
      </p>
      <a
        href="/produtos"
        class="text-gray-600 group hover:bg-primary font-semibold flex gap-2 items-center bg-primary py-3 px-10 rounded-xl hover:text-white transition-all duration-300 ease-in-out"
      >
        <svg
          id="Layer_1"
          height="1.5em"
          viewBox="0 0 512 512"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
        >
          <g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)">
            <path
              d="m45.052 88.13-44.293 315.9a69.34 69.34 0 0 0 16.841 56.78 69.508 69.508 0 0 0 53.869 24.552h369.066a71.423 71.423 0 0 0 70.709-81.332l-44.293-315.9a70.836 70.836 0 0 0 -70.71-61.492h-280.479a70.837 70.837 0 0 0 -70.71 61.492zm288.688 25.47a15.991 15.991 0 1 1 31.982 0v31.6a112.551 112.551 0 1 1 -225.1 0v-31.6a15.991 15.991 0 1 1 31.982 0v31.6a80.569 80.569 0 0 0 161.137 0z"
              fill-rule="evenodd"
              fill="#8f99a3"
              fill-opacity="1"
              data-original-color="#000000ff"
              stroke="none"
              stroke-opacity="1"
              class="group-hover:fill-white stroke-none transition-all duration-300 ease-in-out"
            />
          </g>
        </svg>
        Adicionar produtos ao carrinho</a
      >
    </div>

    <!-- Informações do Cliente -->
    <div
      v-if="cart.length"
      class="mt-6 w-full max-w-[700px] mx-auto flex flex-col bg-gray-200 p-10 rounded-2xl gap-1"
    >
      <label for="client-name" class="block text-sm font-medium text-gray-600"
        >Nome</label
      >
      <input
        id="client-name"
        v-model="client.name"
        type="text"
        placeholder="Digite o nome do cliente"
        class="mt-1 w-full p-2 border-[1px] rounded-md outline-none"
      />

      <label
        for="client-phone"
        class="block text-sm font-medium text-gray-600 mt-4"
        >Número de WhatsApp:</label
      >
      <input
        id="client-phone"
        v-model="client.phone"
        type="tel"
        @input="formatTelefone"
        maxlength="15"
        placeholder="Digite o número com DDD"
        class="mt-1 w-full p-2 border-[1px] rounded-md outline-none"
      />

      <label
        for="client-phone"
        class="block text-sm font-medium text-gray-600 mt-4"
        >Comentários:</label
      >
      <textarea
        name="comment"
        placeholder="Você tem alguma recomendação especial para o seu pedido?"
        v-model="client.comment"
        id="client-comment"
        cols="30"
        rows="10"
        class="w-full resize-none p-2 border-[1px] rounded-md outline-none"
      ></textarea>
      <!-- Botão para Confirmar Pedido -->
      <button
        @click="sendOrder"
        class="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Confirmar Pedido
      </button>
    </div>

    <div>
      <!-- Modal de Confirmação -->
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h3 class="text-lg font-semibold mb-4">Remover Produto</h3>
          <p class="text-gray-700 mb-6">
            Você tem certeza que deseja remover este produto do carrinho?
          </p>
          <div class="flex justify-end gap-4">
            <button
              @click="cancelRemove"
              class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              @click="removeItem"
              class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import NavBar from "../../components/Navbar/index.vue";
import Footer from "../../components/Footer/index.vue";
// Estados
const cart = ref([]);
const client = ref({
  name: "",
  phone: "",
  comment: "",
});
const showModal = ref(false); // Controla o estado do modal
const selectedIndex = ref(null); // Índice do item a ser removido

// Carregar o carrinho do localStorage
function loadCart() {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.value = storedCart;
}

// Atualizar o carrinho no localStorage
function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart.value));
}

// Exibir o modal de confirmação
function confirmRemove(index) {
  selectedIndex.value = index; // Define o índice do item a ser removido
  showModal.value = true; // Exibe o modal
}

// Cancelar a remoção
function cancelRemove() {
  selectedIndex.value = null; // Reseta o índice selecionado
  showModal.value = false; // Esconde o modal
}

// Remover o item selecionado
function removeItem() {
  if (selectedIndex.value !== null) {
    cart.value.splice(selectedIndex.value, 1); // Remove o item do array
    updateCart(); // Atualiza o localStorage
  }
  cancelRemove(); // Fecha o modal
}

const formatTelefone = () => {
  const value = client.value.phone.replace(/\D/g, ""); // Remove caracteres não numéricos
  client.value.phone = value
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
};
// Enviar pedido para o WhatsApp
function sendOrder() {
  if (!client.value.name || !client.value.phone) {
    alert("Por favor, preencha o nome e o número do cliente.");
    return;
  }

  const storePhoneNumber = "5584998477441"; // Número da loja no formato internacional

  const message =
    `Olá! Este é meu pedido%0A` +
    `%0A%0A*Cliente:* ${client.value.name}%0A*whatsapp:* ${client.value.phone}%0A*Comentários:* ${client.value.comment}%0A` +
    "%0A*Lista de Produtos:* %0A" +
    cart.value
      .map((item) => `*Produto:* ${item.nome} (QTD: ${item.quantidade})`)
      .join("%0A");

  const whatsappUrl = `https://wa.me/${storePhoneNumber}?text=${message}`;
  window.open(whatsappUrl, "_blank");
}

// Diminuir quantidade
function decreaseQuantity(index) {
  if (cart.value[index].quantidade > 1) {
    cart.value[index].quantidade--;
    updateCart();
  }
}

// Aumentar quantidade
function increaseQuantity(index) {
  cart.value[index].quantidade++;
  updateCart();
}

// Inicializar o carrinho ao carregar a página
loadCart();

// Monitorar mudanças no carrinho para atualizá-lo no localStorage
watch(cart, updateCart, { deep: true });
</script>

<style>
</style>
