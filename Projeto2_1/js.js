const form = document.getElementById("form-contato");
const nomes = [];
const telefones = [];
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  const inputNome = document.getElementById("nome-contato");
  const inputTelefone = document.getElementById("telefone-contato");

  if (nomes.includes(inputNome.value)) {
    alert(`O contato "${inputNome.value}" já foi cadastrado.`);
  } else if (telefones.includes(inputTelefone.value)) {
    alert(`O telefone "${inputTelefone.value}" já foi cadastrado.`);
  } else {
    nomes.push(inputNome.value);
    telefones.push(inputTelefone.value);

    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += "</tr>";

    linhas += linha;
  }

  inputNome.value = "";
  inputTelefone.value = "";
  inputNome.focus();
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
