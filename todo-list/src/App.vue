<template>
    <div>
        <Hello v-if="!status"/>
        <TodoMain/>
    </div>
</template>

<script>

    import Hello from "./components/Hello";
    import TodoMain from "./TodoMain"

    export default {
        name: 'app',
        components: {Hello, TodoMain},
        data: function () {
            return {
                status: window.location.pathname !== '/hello'
            }
        }
    }
</script>

<style>
</style>
