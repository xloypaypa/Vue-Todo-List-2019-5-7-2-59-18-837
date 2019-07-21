<template>
    <div>
        <component :is="show"/>
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
                show: new Status([
                    {
                        path: '/hello',
                        needShow: Hello,
                    }
                ]).show,
            }
        }
    }
</script>

<style>
</style>
