<template>
    <div>
        <Hello v-if="status"/>
        <TodoMain/>
    </div>
</template>

<script>

    import Hello from "./components/Hello";
    import TodoMain from "./TodoMain"

    import Status from "./status"

    export default {
        name: 'app',
        components: {Hello, TodoMain},
        data: function () {
            return {
                status: new Status('/hello').status,
            }
        }
    }
</script>

<style>
</style>
