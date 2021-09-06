import NoteContext from "./noteContext";
import { useState } from "react";

const NotesState = (props)=>{
    const s1 = {
        "name":"sagar",
        "age" : "23"
    }
    const [state, setstate] = useState(s1);
    const update = ()=>{
        setTimeout(()=>{
            setstate({
                "name":"saggy",
                "age" : "20"
            })
        },4000)
    }
    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NotesState;