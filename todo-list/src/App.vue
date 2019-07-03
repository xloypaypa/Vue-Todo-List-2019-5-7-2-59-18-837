<template>
  <div id="app">
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
