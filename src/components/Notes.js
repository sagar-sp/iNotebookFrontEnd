import noteContext from "../context/notes/noteContext";
import React, { useContext } from "react";
import NoteItem from "./NoteItem";

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
  return (
    <div>
      <div className="row my-3">
        <h1>Your Note</h1>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note}/>
        })}
      </div>
    </div>
  );
};

export default Notes;
