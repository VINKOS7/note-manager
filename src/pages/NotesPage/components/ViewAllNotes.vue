<template>
    <div class="button">ОТОБРАЗИТЬ - {{ quantityNotes }}</div>
</template>

<script setup lang="ts">

    defineProps<{quantityNotes: number}>()
</script>

<style lang="css" scoped>
    .button {
        background: white;
        color: black;
        margin-top: 10vh;
        text-align: center;
        width: 40vw;
        height: 10vh;
        padding: 4vh;
        border-radius: 10px;
        margin-inline: 25vw; 
    }
</style>