<script setup>
const props = defineProps([
  "cadastrarTarefa",
  "tarefaTemporaria",
  "trocarFiltro",
  "editaTarefaTemporaria",
]);
</script>

<template>
  <form @submit.prevent="props.cadastrarTarefa" class="mb-4">
    <div class="row">
      <div class="col">
        <input
          :value="props.tarefaTemporaria"
          @input="props.editaTarefaTemporaria"
          type="text"
          placeholder="Digite a tarefa"
          class="form-control"
          required
        />
      </div>
      <div class="col-md-2">
        <button type="submit" class="btn btn-primary w-100">Cadastrar</button>
      </div>
      <div class="col-md-2">
        <select @change="props.trocarFiltro" class="form-control">
          <option value="todas">Todas as tarefas</option>
          <option value="pendentes">Tarefas pendentes</option>
          <option value="finalizadas">Tarefas concluídas</option>
        </select>
      </div>
    </div>
  </form>
</template>
