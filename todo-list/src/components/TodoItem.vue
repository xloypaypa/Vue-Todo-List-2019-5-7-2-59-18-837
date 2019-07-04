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
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: "TodoItem",
        methods: {
            syncTodoItem: function () {
                this.isFinished = this.todoItem.finished;
            },
            updateName(event) {
                this.updateTodoItem({...this.todoItem, name: event.target.value});
                this.edit = false;
                setTimeout(this.syncTodoItem);
            },
            updateFinishedStatus(event) {
                this.updateTodoItem({...this.todoItem, finished: event.target.checked});
                setTimeout(this.syncTodoItem);
            },
            ...mapMutations([
                'updateTodoItem',
            ]),
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
        computed: mapGetters([
            'getCountByIndex',
        ]),
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