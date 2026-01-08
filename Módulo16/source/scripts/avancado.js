function calcularResto(a, b) {
  return a % b;
}

function calcularPotencia(base, expoente) {
  return base ** expoente;
}

const valorA = 10;
const valorB = 3;

console.log("--- Operações Avançadas ---");
console.log("Resto da divisão:", calcularResto(valorA, valorB));
console.log("Potência:", calcularPotencia(valorA, 2));
