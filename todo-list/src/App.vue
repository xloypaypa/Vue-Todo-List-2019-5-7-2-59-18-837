<template>
    <div id="app">
        <h2>Vue To Do List</h2>
        <p>Simple Todo List with adding and filter by diff status.</p>
        <label>
            <input v-model="todoName"/>
        </label>
        <button v-on:click="addItem">Add</button>
        <TodoList v-bind:todoList="todoList" v-on:update-status="updateStatus"/>
    </div>
</template>

<script>

    import TodoList from "./components/TodoList";

    export default {
        name: 'app',
        components: {TodoList},
        methods: {
            addItem: function () {
                const index = this.todoList.length;
                this.todoList.push({index: index, name: this.todoName, active: true});
                this.todoName = "";
            },
            updateStatus: function (event) {
                this.todoList[event.index].active = event.active;
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
