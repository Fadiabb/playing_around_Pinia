<script setup lang="ts">
import { useCounterStore } from "./stores/counter";
import TodoForm from "@/TodoForm.vue";
import { mapActions, storeToRefs } from "pinia";
import { useTodoStore } from "./stores/totdo";

const counter = useCounterStore();
const { count } = storeToRefs(counter);
const todoStore = useTodoStore();
const { name, age } = storeToRefs(todoStore);

/* Dealing with store actions */
function add(value: number) {
  counter.$patch({
    count: count.value + value,
  });
}
function add2(value: number) {
  counter.$patch((state) => {
    state.count += value;
  });
}
function reset() {
  todoStore.$reset();
}
function resetCounter() {
  counter.$patch({
    count: 0,
  });
}
//const { increment } = mapActions(useCounterStore, ["increment"]);

const { increment } = counter;
todoStore.$subscribe((mutation, state) => {
  console.log("mut", mutation);
  console.log("state", state);
});
</script>

<template>
  <header>
    <h4>Payling around with Pinia</h4>
    <h5>No css --> ugly layout :)</h5>
    <div class="wrapper">{{ counter.count }}</div>
    <div>{{ counter.doubleCount }}</div>
    <button @click="counter.increment()">add</button>
    <TodoForm />
    {{ name }} {{ age }}
    <button @click="todoStore.name = 'Bob'">change name</button>
  </header>
  <button @click="increment">add-2</button>
  <button @click="add(15)">add 15</button>
  <button @click="add2(20)">add 20</button>
  <button @click="reset">reset todo store</button>
  <button @click="resetCounter">reset Counter</button>
  <button @click="todoStore.changeOtherStoreValues">
    Change from another store
  </button>
</template>
