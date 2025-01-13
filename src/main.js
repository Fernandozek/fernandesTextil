import './assets/main.css'
import "vue-toastification/dist/index.css";
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import './directives/scrollReveal';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Toast, { POSITION } from "vue-toastification";
import PrimeVue from 'primevue/config';
import Maska from 'maska'
const app = createApp(App);

app.use(router);
app.use(Maska);
app.use(Toast, {
  position: POSITION.BOTTOM_RIGHT,
});
app.use(PrimeVue, {
  locale: {
      startsWith: 'Começa com',
      contains: 'Contém',
      notContains: 'Não contém',
      endsWith: 'Termina com',
      equals: 'É igual a',
      notEquals: 'Não é igual a',
      noFilter: 'Sem filtro',
      lt: 'Menor que',
      lte: 'Menor que ou igual a',
      gt: 'Maior que',
      gte: 'Melhor que ou igual a',
      dateIs: 'Data é',
      dateIsNot: 'Data não é',
      dateBefore: 'A data é antes',
      dateAfter: 'A data é depois',
      clear: 'Limpar',
      apply: 'Aplicar',
      matchAll: 'Combinar tudo',
      matchAny: 'Corresponder a qualquer um',
      addRule: 'Adicionar Regra',
      removeRule: 'Remover Regra',
      accept: 'Sim',
      reject: 'Não',
      choose: 'Escolher',
      upload: 'Upload',
      cancel: 'Cancelar',
      dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      dayNamesMin: ["Se", "Te", "Qa", "Qi", "Se", "Sa", "Do"],
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      today: 'Hoje',
      weekHeader: 'CS',
      firstDayOfWeek: 0,
      dateFormat: 'dd/mm/yyyy',
      weak: 'Fraca',
      medium: 'Média',
      strong: 'Forte',
      passwordPrompt: 'Insira uma senha',
      emptyFilterMessage: 'Nenhum resultado encontrado',
      emptyMessage: 'Não há opções disponíveis'
  }
});
app.mount('#app');