<template>
    <ol>
        <TodoItem v-for="todoItem in todoList"
                  v-bind:todoItem="todoItem"/>
    </ol>
</template>

<script>
    import TodoItem from "./TodoItem";
    export default {
        name: "TodoList",
        components: {TodoItem},
        props: {
            todoList: Array
        }
    }
</script>

<style src="../css/todoListStyle.css"></style>