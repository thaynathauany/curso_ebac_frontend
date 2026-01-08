const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b !== 0 ? a / b : "Erro: Divisão por zero");

const n1 = 20;
const n2 = 4;

console.log("--- Resultados Aritméticos ---");
console.log(`Soma: ${somar(n1, n2)}`);
console.log(`Subtração: ${subtrair(n1, n2)}`);
console.log(`Multiplicação: ${multiplicar(n1, n2)}`);
console.log(`Divisão: ${dividir(n1, n2)}`);
