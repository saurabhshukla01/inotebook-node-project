import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  // const { notes } = useContext(noteContext);
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h2>Your Notes List</h2>
      {notes && notes.length > 0 ? (
        notes.map((note, index) => (
          <div key={index} className="card my-3 shadow-sm row">
            <NoteItem note={note} index={index} />
          </div>
        ))
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
};

export default Notes;
