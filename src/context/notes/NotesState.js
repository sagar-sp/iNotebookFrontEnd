import NoteContext from "./noteContext";
import { useState } from "react";

const NotesState = (props)=>{
    const notesinitial = [
        {
            "_id": "6134d5cdd8baa545b5cfbd41cb",
            "user": "6134473c5c3525f9fa0c8a07",
            "title": "My title",
            "description": "Please Wake Up early",
            "tag": "personal",
            "date": "2021-09-05T14:35:52.669Z",
            "__v": 0
        },
        {
            "_id": "6134d5c9baqwqa545b5cbd41cd",
            "user": "6134473c5c3525f9fa0c8a07",
            "title": "My title",
            "description": "Please Wake Up early",
            "tag": "personal",
            "date": "2021-09-05T14:35:53.719Z",
            "__v": 0
        },  
        {
            "_id": "6134d5c9baqqa545bbd41cd",
            "user": "6134473c5c3525f9fa0c8a07",
            "title": "My title",
            "description": "Please Wake Up early",
            "tag": "personal",
            "date": "2021-09-05T14:35:53.719Z",
            "__v": 0
        },
        {
            "_id": "6134d5c9ewwbaa545b5fbd41cd",
            "user": "6134473c5c3525f9fa0c8a07",
            "title": "My title",
            "description": "Please Wake Up early",
            "tag": "personal",
            "date": "2021-09-05T14:35:53.719Z",
            "__v": 0
        },  
        {
            "_id": "6134d5c9bdsaa545bd41cd",
            "user": "6134473c5c3525f9fa0c8a07",
            "title": "My title",
            "description": "Please Wake Up early",
            "tag": "personal",
            "date": "2021-09-05T14:35:53.719Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesinitial)
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NotesState;