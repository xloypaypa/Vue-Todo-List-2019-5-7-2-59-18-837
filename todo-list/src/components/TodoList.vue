<template>
    <ul>
        <TodoItem v-for="todoItem in todoList"
                  v-bind:todoItem="todoItem"
                  v-on:update-status="updateStatus"/>
    </ul>
</template>

<script>
    import TodoItem from "./TodoItem";
    export default {
        name: "TodoList",
        components: {TodoItem},
        methods:{
            updateStatus: function (event) {
                this.$emit("update-status", event);
            }
        },
        props: {
            todoList: Array
        }
    }
</script>

<style src="../css/todoListStyle.css"></style>