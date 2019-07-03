<template>
    <li>
        <label>
            <input type="checkbox" v-model="isFinished" v-on:change="updateFinishedStatus">
        </label>
        <span v-if="!edit" v-on:dblclick="edit = true">{{todoItem.name}}</span>
        <label>
            <input v-if="edit" v-model="tempName" v-on:focusout="updateName">
        </label>
    </li>
</template>

<script>
    export default {
        name: "TodoItem",
        methods: {
            syncTodoItem: function () {
                this.isFinished = this.todoItem.finished;
            },
            updateName(event) {
                this.updateTodoItem(event.target.value, this.todoItem.finished);
                this.edit = false;
            },
            updateFinishedStatus(event) {
                this.updateTodoItem(this.todoItem.name, event.target.checked);
            },
            updateTodoItem: function (name, finished) {
                this.$emit("update-todo-item", {index: this.todoItem.index, name: name, finished: finished});
                setTimeout(this.syncTodoItem);
            }
        },
        data: function () {
            return {
                edit: false,
                tempName: this.todoItem.name,
                isFinished: this.todoItem.finished
            }
        },
        props: {
            todoItem: Object
        },
        watch: {
            todoItem: {
                immediate: true,
                handler () {
                    this.syncTodoItem();
                }
            }
        }
    }
</script>

<style scoped>

</style>