/* Option Store */
import type { Itodo } from "@/types/todo";
import { defineStore } from "pinia";
import { useCounterStore } from "./counter";

export const useTodoStore = defineStore({
  id: "todo",
  state: () => ({
    todos: [] as Itodo[],
    name: "Erik",
    age: 100,
  }),
  getters: {
    totalTodos: (state) => state.todos.length,
  },
  actions: {
    addTodo(title: string, description?: string) {
      const todo: Itodo = {
        id: Math.floor(Math.random() * 10000),
        title,
        description,
      };
      this.todos = [todo, ...this.todos];
    },
    changeOtherStoreValues() {
      const counter = useCounterStore();
      counter.count = 100;
    },
  },
});
