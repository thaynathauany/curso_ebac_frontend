<script setup>
import { reactive } from "vue";
import Cabecalho from "./components/Cabecalho.vue";
import Formulario from "./components/Formulario.vue";
import ListaDeTarefas from "./components/ListaDeTarefas.vue";

const estado = reactive({
  tarefaTemporaria: "",
  filtro: "todas",
  tarefas: [
    { titulo: "Tarefa 1", concluida: false },
    { titulo: "Tarefa 2", concluida: true },
    { titulo: "Tarefa 3", concluida: false },
  ],
});

const getTarefasPendentes = () => {
  return estado.tarefas.filter((tarefa) => !tarefa.concluida);
};

const getTarefasFinalizadas = () => {
  return estado.tarefas.filter((tarefa) => tarefa.concluida);
};

const editaTarefaTemporaria = (event) => {
  estado.tarefaTemporaria = event.target.value;
};

const trocarFiltro = (evento) => {
  estado.filtro = evento.target.value;
};

const getTarefasFiltradas = () => {
  const { filtro } = estado;
  switch (filtro) {
    case "pendentes":
      return getTarefasPendentes();
    case "finalizadas":
      return getTarefasFinalizadas();
    default:
      return estado.tarefas;
  }
};

const cadastrarTarefa = () => {
  if (estado.tarefaTemporaria.trim().length > 0) {
    estado.tarefas.push({
      titulo: estado.tarefaTemporaria,
      concluida: false,
    });
    estado.tarefaTemporaria = "";
  }
};
</script>

<template>
  <div class="container">
    <Cabecalho :tarefas-pendentes="getTarefasPendentes().length" />
    <Formulario
      :trocar-filtro="trocarFiltro"
      :tarefa-temporaria="estado.tarefaTemporaria"
      :edita-tarefa-temporaria="editaTarefaTemporaria"
      :cadastrar-tarefa="cadastrarTarefa"
    />
    <ListaDeTarefas :tarefas="getTarefasFiltradas()" />
  </div>
</template>
