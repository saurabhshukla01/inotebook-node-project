import { useState } from "react";
import NoteContext from "./NoteContext";
import { json } from "react-router-dom";

const NoteState = (props) => {
  const host = "http://localhost:4000";
  const notesInitial = [
    {
      _id: "66d5846dffdfa5bc426102e4",
      user: "66d4385b4750c41d6155afb5",
      title: "Structuring assignment",
      description:
        "The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects",
      tag: "objects based",
      date: "2024-09-02T09:25:01.977Z",
      __v: 0,
    },
    {
      _id: "66d584b5ffdfa5bc426102e6",
      user: "66d4385b4750c41d6155afb5",
      title: "Destructuring assignment",
      description:
        "The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects",
      tag: "objects assignment",
      date: "2024-09-02T09:26:13.155Z",
      __v: 0,
    },
    {
      _id: "66d584e9ffdfa5bc426102e8",
      user: "66d4385b4750c41d6155afb5",
      title: "React ES6 Destructuring",
      description:
        "Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.",
      tag: "Destructuring",
      date: "2024-09-02T09:27:05.860Z",
      __v: 0,
    },
    {
      _id: "66d586e33fcbded250f87264",
      user: "66d4385b4750c41d6155afb5",
      title: "React ES6 Destructuring",
      description:
        "Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.",
      tag: "Destructuring",
      date: "2024-09-02T09:35:31.429Z",
      __v: 0,
    },
  ];

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
    // console.log("Getting a notes",data);
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
    // console.log("Adding a new note");
    const note = {
      _id: "66d586e33fcbded250f87266",
      user: "66d4385b4750c41d6155afb5",
      title: title,
      description: description,
      tag: tag,
      date: "2024-09-02T09:35:31.429Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // delete a notes

  const deleteNote = (id) => {
    // console.log("Deleting the note with id "+id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // edit a d notes
  const editNote = async (id, title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/update-notes/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZmM2E3ZGNkZGZjYmZmNjZiM2Q2ZDA5In0sImlhdCI6MTcyNzI0NDI4NX0.2Ay5vZt9jUb4TNbiVRqHKCblOSHeFVRDo1Ku5HCcjHc",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
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
