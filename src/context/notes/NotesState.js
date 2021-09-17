import NoteContext from "./noteContext";
import { useState } from "react";

const NotesState = (props) => {
  const host = "http://localhost:3005";
  const notesinitial = [];
  const [notes, setNotes] = useState(notesinitial);

  //Get all Notes
  const getNotes = async () => {
    //TODO : API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNDQ3M2M1YzM1MjVmOWZhMGM4YTA3In0sImlhdCI6MTYzMDg0ODc4MX0.Q6hGricGsY40lHJPnbCdmk3cdd1WnniG2Ifx-z3CFlE",
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    //TODO : API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNDQ3M2M1YzM1MjVmOWZhMGM4YTA3In0sImlhdCI6MTYzMDg0ODc4MX0.Q6hGricGsY40lHJPnbCdmk3cdd1WnniG2Ifx-z3CFlE",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json);

    console.log("adding a new Note");
    const note = {
      _id: "6141e5b96f9ccaa5e5a1b1a2",
      user: "6134473c5c3525f9fa0c8a07",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-05T14:35:53.719Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete A Note

  const deleteNote = async (id) => {
    alert("delete");
    console.log(id);
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNDQ3M2M1YzM1MjVmOWZhMGM4YTA3In0sImlhdCI6MTYzMDg0ODc4MX0.Q6hGricGsY40lHJPnbCdmk3cdd1WnniG2Ifx-z3CFlE",
      },
    });
    const json = response.json();
    // console.log(json)

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit A Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNDQ3M2M1YzM1MjVmOWZhMGM4YTA3In0sImlhdCI6MTYzMDg0ODc4MX0.Q6hGricGsY40lHJPnbCdmk3cdd1WnniG2Ifx-z3CFlE",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NotesState;
