<script setup>
import { reactive, computed } from "vue";

const estado = reactive({
  numero1: 0,
  numero2: 0,
  operacao: "soma",
});

const calcularResultado = computed(() => {
  const { numero1, numero2, operacao } = estado;

  const n1 = parseFloat(numero1) || 0;
  const n2 = parseFloat(numero2) || 0;

  switch (operacao) {
    case "subtracao":
      return n1 - n2;
    case "multiplicacao":
      return n1 * n2;
    case "divisao":
      return n2 !== 0 ? n1 / n2 : "Divisão por zero!";
    default:
      return n1 + n2;
  }
});
</script>

<template>
  <div class="container text-center mt-5">
    <header class="p-5 mb-4 bg-light rounded-3">
      <h1>Calculadora Aritmética</h1>
      <p>Insira os números e escolha a operação</p>
    </header>

    <div class="row justify-content-center">
      <div class="col-md-3">
        <input
          v-model="estado.numero1"
          type="number"
          placeholder="Número A"
          class="form-control mb-2"
        />
      </div>
      <div class="col-md-2">
        <select v-model="estado.operacao" class="form-control mb-2">
          <option value="soma">+</option>
          <option value="subtracao">-</option>
          <option value="multiplicacao">x</option>
          <option value="divisao">÷</option>
        </select>
      </div>
      <div class="col-md-3">
        <input
          v-model="estado.numero2"
          type="number"
          placeholder="Número B"
          class="form-control mb-2"
        />
      </div>
    </div>

    <div class="mt-4">
      <h2 class="display-4">Resultado: {{ calcularResultado }}</h2>
    </div>
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
