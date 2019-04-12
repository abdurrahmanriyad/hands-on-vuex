<template>
    <div class="single-blog">
        <button v-on:click="increaseCount">increment</button>
        <h1>title {{ count }}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum eius</p>
    </div>
</template>

<script>
    export default {
        name: 'Blog',
        computed: {
            count () {
                return this.$store.getters.count;
            }
        },
        methods : {
            increaseCount : function () {
                this.$store.commit('increment');
            }
        }
    }
</script>