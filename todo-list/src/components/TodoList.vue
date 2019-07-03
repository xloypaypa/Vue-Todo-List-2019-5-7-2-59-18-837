<template>
    <ul>
        <li v-for="todo in todoList">
            {{todo.name}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "TodoList",
        props: {
            todoList: Array
        }
    }
</script>

<style src="../css/todoListStyle.css"></style>