<script setup>
const props = defineProps(["tarefas"]);
</script>

<template>
  <ul class="list-group mt-4">
    <li
      class="list-group-item"
      v-for="tarefa in props.tarefas"
      :key="tarefa.titulo"
    >
      <input
        @change="tarefa.concluida = $event.target.checked"
        v-model="tarefa.concluida"
        :id="tarefa.titulo"
        type="checkbox"
        class="form-check-input me-2"
      />
      <label
        :class="{ 'text-decoration-line-through': tarefa.concluida }"
        :for="tarefa.titulo"
        class="form-check-label"
      >
        {{ tarefa.titulo }}
      </label>
    </li>
  </ul>
</template>
