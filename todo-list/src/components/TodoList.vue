<template>
    <ol>
        <TodoItem v-for="todoItem in todoList"
                  v-bind:todoItem="todoItem"
                  v-on:update-todo-item="updateTodoItem"/>
    </ol>
</template>

<script>
    import TodoItem from "./TodoItem";
    export default {
        name: "TodoList",
        components: {TodoItem},
        methods:{
            updateTodoItem: function (event) {
                this.$emit("update-todo-item", event);
            }
        },
        props: {
            todoList: Array
        }
    }
</script>

<style src="../css/todoListStyle.css"></style>