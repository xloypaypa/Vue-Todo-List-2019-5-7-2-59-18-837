<template>
  <div id="app">
    <h2>Vue To Do List</h2>
    <p>Simple Todo List with adding and filter by diff status.</p>

    <TodoList v-bind:todoList="todoList"/>
  </div>
</template>

<script>

import TodoList from "./components/TodoList";
export default {
  name: 'app',
  components: {TodoList},
  data: function () {
    return {
      todoList: ['a', 'b', 'c']
    }
  }
}
</script>

<style>
</style>
