<template>
  <div id="app">
    <h2>Vue To Do List</h2>
    <p>Simple Todo List with adding and filter by diff status.</p>
    <label>
      <input v-model="todoName"/>
    </label>
    <button v-on:click="addItem">Add</button>
    <TodoList v-bind:todoList="todoList"/>
  </div>
</template>

<script>

import TodoList from "./components/TodoList";
export default {
  name: 'app',
  components: {TodoList},
  methods:{
    addItem: function () {
      this.todoList.push({name: this.todoName, active: true});
      this.todoName = "";
    }
  },
  data: function () {
    return {
      todoName: "",
      todoList: []
    }
  }
}
</script>

<style>
</style>
