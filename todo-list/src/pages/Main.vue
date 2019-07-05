<template>
    <div id="app">
        <label for="username">请输入姓名</label>
        <input id="username" v-model="username">
        <a href="/home">开始使用</a>
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
