<template>
    <li>
        <label>
            <input type="checkbox" v-model="isFinished" v-on:change="updateStatus">
        </label>
        <span>{{todoItem.name}}</span>
    </li>
</template>

<script>
    export default {
        name: "TodoItem",
        methods: {
            syncActiveStatus: function () {
                this.isFinished = !this.todoItem.active;
            },
            updateStatus: function (event) {
                this.$emit("update-status", {index: this.todoItem.index, active: !event.target.checked});
                setTimeout(this.syncActiveStatus);
            }
        },
        data: function () {
            return {
                isFinished: !this.todoItem.active
            }
        },
        props: {
            todoItem: Object
        }
    }
</script>

<style scoped>

</style>