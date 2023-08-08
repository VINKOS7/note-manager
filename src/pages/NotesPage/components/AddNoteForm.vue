<template>
    <div class="form">
        <div class="inputs">
            <input v-model="note.title" placeholder="введите имя" />
            <textarea 
                class="text"
                v-model="note.text" 
                placeholder="введите текст заметки" 
            />
        </div>
        <div @click="Save()" v-if="note.title.length >= 3" class="button">
            sumbit
        </div>
    </div>
</template>

<script setup lang="ts">
    import { reactive } from 'vue';

    import type { Note } from '@/pages/models/Note';

    import {v4 as uuidv4} from 'uuid'

    import { SaveNote } from '@/connection/notesApi/notesApi';

    //const emit = defineEmits<{save: [addNote: Note]}>()
    const props = defineProps<{SaveNote: (note: Note) => void}>()

    const note = reactive({title: "", text: ""} as Note)

    const Save = () => {     
        note.id = uuidv4()
        note.date =  new Date(Date.now())

        SaveNote({note: note})

        props.SaveNote(note)
        //emit<{}>()
    }
</script>

<style lang="css" scoped>
    .form {
        background: white;
        color: black;
        margin-inline: 12vw;
        height: 60vh;
        width: 70vw;
        border-radius: 10px;
    }

    .inputs {
        text-align: center;
    }

    .button {
        background: green;
        width: 30vw;
        height: 10vh;
        text-align: center;
        padding: 3vh;
        margin-inline: 20vw;
        margin-top: 5vh;
        border-radius: 10px;
    }

    .text {
        margin-top: 3vh;
        width: 60vw;
        height: 30vh;
    }
</style>