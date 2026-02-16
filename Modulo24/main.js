// Classe de abstração
class Veiculo {
  constructor(marca, modelo) {
    if (new.target === Veiculo) {
      throw new Error(
        "A classe Veiculo é uma abstração e não pode ser instanciada diretamente.",
      );
    }
    this.marca = marca;
    this.modelo = modelo;
  }

  acelerar() {
    throw new Error(
      "O método acelerar deve ser implementado pelas classes filhas.",
    );
  }
}

// Classe herdeira 1
class Carro extends Veiculo {
  constructor(marca, modelo, cor) {
    super(marca, modelo);
    this.cor = cor;
  }

  acelerar() {
    const mensagem = `🚗 O carro ${this.marca} ${this.modelo} (${this.cor}) está acelerando!`;
    console.log(mensagem);
    exibirMensagemNaTela(mensagem);
  }
}

// Classe herdeira 2
class Moto extends Veiculo {
  constructor(marca, modelo, cilindradas) {
    super(marca, modelo);
    this.cilindradas = cilindradas;
  }

  acelerar() {
    const mensagem = `🏍️ A moto ${this.marca} ${this.modelo} (${this.cilindradas}cc) está acelerando!`;
    console.log(mensagem);
    exibirMensagemNaTela(mensagem);
  }
}

// Criação de instâncias (3 objetos)
const carro1 = new Carro("Toyota", "Corolla", "Prata");
const carro2 = new Carro("Honda", "Civic", "Preto");
const moto1 = new Moto("Yamaha", "MT-07", 689);

// --- Funções de Interface (UI) ---

function exibirMensagemNaTela(msg) {
  const lista = document.getElementById("log-output");
  const item = document.createElement("li");
  item.textContent = msg;
  lista.prepend(item);
}

function criarCardVeiculo(veiculo, tipo) {
  const container = document.getElementById("veiculos-container");
  const card = document.createElement("div");
  card.className = "card";

  let icone = tipo === "Carro" ? "🚗" : "🏍️";
  let detalhe =
    tipo === "Carro" ? `Cor: ${veiculo.cor}` : `${veiculo.cilindradas}cc`;

  card.innerHTML = `
        <h3>${icone} ${veiculo.marca} ${veiculo.modelo}</h3>
        <p>${detalhe}</p>
        <button class="btn-acelerar">Acelerar</button>
    `;

  const botao = card.querySelector(".btn-acelerar");
  botao.addEventListener("click", () => veiculo.acelerar());

  container.appendChild(card);
}

document.addEventListener("DOMContentLoaded", () => {
  criarCardVeiculo(carro1, "Carro");
  criarCardVeiculo(carro2, "Carro");
  criarCardVeiculo(moto1, "Moto");
});
