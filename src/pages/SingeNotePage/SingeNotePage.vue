<template>
    <div v-if="note" class="note">
        <div>{{ note.title }}</div>
        <div>{{ note.text }}</div>
        <div>{{ note.date }}</div>
    </div>
    <Error v-else>not found note</Error>
    <div class="go-to-notes" @click="GoToNotes">GO TO MAIN</div>
</template>

<script setup lang="ts">
    import type { Note } from '../models/Note'

    import router from '@/router';

    import Error from "../components/Error.vue"
   
    import { GetNote } from '../../connection/notesApi/notesApi'

    const data = localStorage.getItem('notes')
  
    let note: Note

    if(data){
        const data_note = (JSON.parse(data) as Note[]).find(n => n.id == router.currentRoute.value.params.id as string)
        
        if(data_note) note = data_note      
    } 
    else {     
        //issuing a query to the database
        const data = GetNote({id: router.currentRoute.value.params.id as string})
        
        if(data) note = data
    }

    const GoToNotes = () => {
        router.push('/notes')

        router.go(1)
    }

</script>

<style lang="css" scoped>
    .note {
        background: white;
        color: black;
        border-radius: 10px;
        padding-left: 5vw;
    }

    .go-to-notes {
        margin-top: 5vh;
        color: black;
        background: white;
        text-align: center;
        border-radius: 20px;
    }
</style>