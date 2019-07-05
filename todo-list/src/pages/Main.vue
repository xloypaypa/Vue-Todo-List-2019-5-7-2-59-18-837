<template>
    <div id="app">
        <label for="username">请输入姓名</label>
        <input id="username" v-model="username">
        <router-link :to="{ name: 'Home' }">开始使用</router-link>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {
                username: "",
            }
        }
    }
</script>

<style>
</style>
