<template>
    <div id="app">
        {{ count }}
        <router-view></router-view>
    </div>
</template>

<script>

    import Blogs from "./components/Blogs";

    export default {
        name: 'App',
        components: {Blogs},
        computed: {
            count () {
                return this.$store.getters.count;
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
