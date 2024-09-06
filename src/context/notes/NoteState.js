import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "66d5846dffdfa5bc426102e4",
          "user": "66d4385b4750c41d6155afb5",
          "title": "Structuring assignment",
          "description": "The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects",
          "tag": "objects based",
          "date": "2024-09-02T09:25:01.977Z",
          "__v": 0
        },
        {
          "_id": "66d584b5ffdfa5bc426102e6",
          "user": "66d4385b4750c41d6155afb5",
          "title": "Destructuring assignment",
          "description": "The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects",
          "tag": "objects assignment",
          "date": "2024-09-02T09:26:13.155Z",
          "__v": 0
        },
        {
          "_id": "66d584e9ffdfa5bc426102e8",
          "user": "66d4385b4750c41d6155afb5",
          "title": "React ES6 Destructuring",
          "description": "Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.",
          "tag": "Destructuring",
          "date": "2024-09-02T09:27:05.860Z",
          "__v": 0
        },
        {
          "_id": "66d586e33fcbded250f87264",
          "user": "66d4385b4750c41d6155afb5",
          "title": "React ES6 Destructuring",
          "description": "Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.",
          "tag": "Destructuring",
          "date": "2024-09-02T09:35:31.429Z",
          "__v": 0
        }
      ];

    const [notes,setNotes] = useState(notesInitial)
    return(
        // to pass the value using create new useContext hooks pass the value and access is another one
        <NoteContext.Provider value={{notes}}>   
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


