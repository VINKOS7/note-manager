<template>
    <div v-if="!isAddingNote">
        <AddNoteButton @click="() => isAddingNote = true"/>
        <div  v-for="(note, index) in notes">
            <div 
                @click="() => OpenNote(note.id)"
                v-if="countItemShow > index" 
                :key="index" class="note-item">
                    <div>{{ note.title }}</div>
                    <div>{{ note.text }}</div>
                    <div>{{ note.date }}</div>
            </div>
        </div>
        <ViewAllNotes 
            @click="() => countItemShow = notes.length"
            v-if="notes.length > countItemShow" 
            :quantityNotes="notes.length - countItemShow"
        />
        <HiddenNotes
            @click="() => countItemShow = 4"
            v-else :quantityNotes="notes.length - 4"
        />
    </div>
    <div v-else>
        <AddNoteForm :SaveNote="SaveNote"/>
    </div>
</template>

<script setup lang="ts">
    import { reactive, ref } from 'vue'

    import type { Note } from '../models/Note';

    import router from '@/router'

    import AddNoteButton from "./components/AddNoteButton.vue"
    import ViewAllNotes from "./components/ViewAllNotes.vue"
    import HiddenNotes from "./components/HiddenNotes.vue" 
    import AddNoteForm from "./components/AddNoteForm.vue"

    import { GetNotes } from '../../connection/notesApi/notesApi'

    const countItemShow = ref(4)
    const isAddingNote = ref(false)

    const notes = reactive([] as Note[])

    const data = localStorage.getItem('notes')

    if(data) (JSON.parse(data) as Note[]).forEach(note => notes.push(note))
    else {
        GetNotes().forEach(note => notes.push(note))

        localStorage.setItem('notes', JSON.stringify(notes))
    } 
    
    const OpenNote = (id: string) => {
        router.push('/note/' + id)

        router.go(1)
    }

    const SaveNote = (note: Note) => {
        notes.push(note)

        isAddingNote.value = false
    }
</script>

<style lang="css" scoped>
    .note-item {
        background-color: rgb(255, 255, 255);
        color: black;
        margin-top: 2vh;
        padding: 20px;
        font-style: oblique;
        font-size: large;
        border-radius: 20px;
    }
</style>