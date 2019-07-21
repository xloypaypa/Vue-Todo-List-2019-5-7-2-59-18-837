<template>
    <div>
        <Hello v-if="!status"/>
        <div id="app" v-if="status">
            <h2>Vue To Do List</h2>
            <p>Simple Todo List with adding and filter by diff status.</p>
            <label>
                <input v-model="todoName"/>
            </label>
            <button v-on:click="addItem">Add</button>
            <TodoList v-bind:todoList="displayList" v-on:update-todo-item="updateTodoItem"/>
            <button v-on:click="updateFilter(showAll)">ALL</button>
            <button v-on:click="updateFilter(showActive)">Active</button>
            <button v-on:click="updateFilter(showComplete)">Complete</button>
        </div>
    </div>
</template>

<script>

    import TodoList from "./components/TodoList";
    import Hello from "./components/Hello";

    export default {
        name: 'app',
        components: {Hello, TodoList},
        methods: {
            addItem: function () {
                const index = this.todoList.length;
                this.todoList.push({index: index, name: this.todoName, finished: false});
                this.displayList = this.todoList.filter(this.displayFilter);
                this.todoName = "";
            },
            updateTodoItem: function (event) {
                this.todoList[event.index].name = event.name;
                this.todoList[event.index].finished = event.finished;
            },
            showAll: function () {
                return true;
            },
            showActive: function (todoItem) {
                return !todoItem.finished;
            },
            showComplete: function (todoItem) {
                return todoItem.finished;
            },
            updateFilter: function (filter) {
                this.displayList = this.todoList.filter(filter);
            }
        },
        data: function () {
            return {
                todoName: "",
                todoList: [],
                displayList: [],
                displayFilter: this.showAll,
                status: window.location.pathname !== '/hello'
            }
        }
    }
</script>

<style>
</style>
