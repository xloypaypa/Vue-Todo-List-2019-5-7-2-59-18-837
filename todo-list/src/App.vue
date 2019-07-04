<template>
    <div id="app">
        <h2>Vue To Do List</h2>
        <p>Simple Todo List with adding and filter by diff status.</p>
        <label>
            <input v-model="todoName"/>
        </label>
        <button v-on:click="addItem({name: todoName, finished: false})">Add</button>
        <TodoList v-bind:todoList="getTodoList()" />
        <button v-on:click="filterAll()">ALL</button>
        <button v-on:click="filterActive()">Active</button>
        <button v-on:click="filterComplete()">Complete</button>
    </div>
</template>

<script>

    import TodoList from "./components/TodoList";
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: 'app',
        components: {TodoList},
        data() {
            return {
                todoName: "",
            }
        },
        methods: {
            ...mapMutations([
                'addItem',
                'filterAll',
                'filterActive',
                'filterComplete',
            ]),
        },
        computed: mapGetters([
            'getTodoList'
        ]),
    }
</script>

<style>
</style>
