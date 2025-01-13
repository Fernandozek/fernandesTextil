<template>
  <Tabledinamic v-model:campos="camposAdded" />
  <button @click="submit">Submit</button>
</template>

<script setup>
import { ref } from "vue";
import Tabledinamic from "./Tabledinamic.vue";

const camposAdded = ref([]);

function submit() {
  console.log("Formulário atualizado:", camposAdded.value);
}
</script>
