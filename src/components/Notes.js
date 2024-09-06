import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const { notes } = useContext(noteContext);

  return (
    <div>
      <h2>Your Notes List</h2>
      {notes && notes.length > 0 ? (
        notes.map((note, index) => (
          <div key={index} className="card my-3 shadow-sm">
            <NoteItem note={note} index={index}/>
          </div>
        ))
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
};

export default Notes;
