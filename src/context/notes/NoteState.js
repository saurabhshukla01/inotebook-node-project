import { useState } from "react";
import NoteContext from "./NoteContext";
import { json } from "react-router-dom";

const NoteState = (props) => {
  const host = "http://localhost:4000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // get a notes

  const getNotes = async () => {
    // TODO : API CALL
    // API CALL
    const response = await fetch(`${host}/api/notes/fetch-all-notes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmM2E3ZGNkZGZjYmZmNjZiM2Q2ZDA5In0sImlhdCI6MTcyNzI0NDI4NX0.2Ay5vZt9jUb4TNbiVRqHKCblOSHeFVRDo1Ku5HCcjHc",
      },
    });
    const data = await response.json();
    setNotes(data);
  };

  // add a notes

  const addNote = async (title, description, tag) => {
    // TODO : API CALL
    // API CALL
    const response = await fetch(`${host}/api/notes/create-notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmM2E3ZGNkZGZjYmZmNjZiM2Q2ZDA5In0sImlhdCI6MTcyNzI0NDI4NX0.2Ay5vZt9jUb4TNbiVRqHKCblOSHeFVRDo1Ku5HCcjHc",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };
  // delete a notes

  const deleteNote = async (id) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/delete-notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmM2E3ZGNkZGZjYmZmNjZiM2Q2ZDA5In0sImlhdCI6MTcyNzI0NDI4NX0.2Ay5vZt9jUb4TNbiVRqHKCblOSHeFVRDo1Ku5HCcjHc",
      },
    });
    const json = await response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // edit a d notes
  const editNote = async (id, title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/update-notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmM2E3ZGNkZGZjYmZmNjZiM2Q2ZDA5In0sImlhdCI6MTcyNzI0NDI4NX0.2Ay5vZt9jUb4TNbiVRqHKCblOSHeFVRDo1Ku5HCcjHc",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
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
    // to pass the value using create new useContext hooks pass the value and access is another one
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
