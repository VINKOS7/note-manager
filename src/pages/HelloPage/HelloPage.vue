<template>
    <div class="button" @click="Click">GO TO NOTES</div>
</template>

<script setup lang="ts">
    import router from '@/router';

    const Click = () => {
        router.push({path: '/notes'})
        router.go(1)
    }
</script>

<style lang="css" scoped>
    .button {
        background: cadetblue;
        width: 50px;
        height: 50px;
    }
</style>