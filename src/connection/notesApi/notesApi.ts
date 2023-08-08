import type { Note } from "@/pages/models/Note"
import { v4 as uuidv4 } from 'uuid';

export const GetNotes = () => {
    
    return [
        {id: uuidv4(), title: 'заметка 1', text: 'text note', date: new Date(2023, 2, 4)},
        {id: uuidv4(), title: 'заметка 2', text: 'text text', date: new Date(2023, 7, 4)},
        {id: uuidv4(), title: 'заметка 3', text: 'text lol', date: new Date(2023, 10, 2)},
        {id: uuidv4(), title: 'заметка 2', text: 'text text', date: new Date(2023, 7, 3)},
        {id: uuidv4(), title: 'заметка 2', text: 'text text', date: new Date(2023, 4, 4)},
        {id: uuidv4(), title: 'заметка 2', text: 'text text', date: new Date(2023, 6, 4)},
    ] as Note[]
} 

interface GetNoteProps {
    id: string
}

export const GetNote = (props: GetNoteProps) => {
    const data = localStorage.getItem('notes')

    let notes: Note[]

    if(data){
        notes = JSON.parse(data) as Note[]
    
        return notes.find(note => note.id == props.id)
    }
} 

interface SaveNoteProps {
    note: Note
}

export const SaveNote = (props: SaveNoteProps) => {
    const data = localStorage.getItem('notes')
    
    if(data) localStorage.setItem('notes', JSON.stringify((JSON.parse(data) as Note[]).concat(props.note))) 
} 

