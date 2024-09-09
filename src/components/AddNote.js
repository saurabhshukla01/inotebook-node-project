import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

const AddNote = () => {
  // const { notes } = useContext(noteContext);
  const context = useContext(noteContext);
  const {addNote} = context;
  const [note,setNote] = useState({"title":"","description":"","tag":""});

  const handleClick = () => {
    console.log("on click function");
  }
  
  const onChange = () => {
    console.log("on change input value");
  }
  return (
    <div>
      <h2>Add Your Note</h2>
      <form action="#" className="p-4 border rounded shadow-lg bg-light">
        <div className="form-group mb-4">
          <label htmlFor="title" className="font-weight-bold mb-2">
            Note Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Please Type Title Note ..."
            onChange={onChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="tag" className="font-weight-bold mb-2">
            Note Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="Please Type Tag Note ..."
            onChange={onChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="description" className="font-weight-bold mb-2">
            Note Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            placeholder="Type your note description..."
            onChange={onChange}
          ></textarea>
        </div>
        <div className="form-group py-3 text-center">
          <input
            type="submit"
            className="btn btn-primary btn-lg w-100"
            id="noteButton"
            onClick={handleClick}
            value="Submit Note"
          />
        </div>
      </form>
    </div>
  );
};

export default AddNote;