<template>
  <div v-for="t in todoStore.todos" :key="t.id">
    <span>id: {{ t.id }}</span>
    <span>Title: {{ t.title }}</span>
    <span>Description: {{ t.description }}</span>
  </div>
  <div>
    <label>Title</label>
    <input type="text" v-model="title" />
  </div>
  <div>
    <label>Description</label>
    <input type="text" v-model="description" />
  </div>
  <div class="field">
    <button @click="addTodo">Create Todo</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "@/stores/totdo";
const todoStore = useTodoStore();
const description = ref("");
const title = ref("");
const addTodo = () => {
  if (title.value && title.value == "") {
    return;
  } else {
    todoStore.addTodo(title.value, description.value);
  }
};
</script>
