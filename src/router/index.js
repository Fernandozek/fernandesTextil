import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home/index.vue';
import Produtos from '../pages/Produtos/index.vue'
import Carrinho from '../pages/Carrinho/index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: Produtos,
  },
  {
    path: '/carrinho',
    name: 'Carrinho',
    component: Carrinho,
  },
  // Outras rotas podem ser adicionadas aqui
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
