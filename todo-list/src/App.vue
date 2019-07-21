<template>
    <div>
        <component :is="show"/>
    </div>
</template>

<script>

    import Vue from 'vue'

    export default {
        name: 'app',
        data: function () {
            return {
                show: Vue.status.show
            }
        }
    }
</script>

<style>
</style>
