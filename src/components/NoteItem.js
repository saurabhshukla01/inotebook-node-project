import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note , updateNote} = props;
  // Parse the date string and create a new Date object
  const date = new Date(note.date);

  // Format the date in the desired format, e.g., "MM/DD/YYYY"
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  return (
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <h5 className="card-title me-4">
            <strong className="text-danger">{note.title}</strong>
          </h5>
          <span className="me-1 btn btn-sm btn-primary" title="Edit Note" onClick={() => {updateNote(note)}}>
            <i className="fa fa-edit"></i>
          </span>
          <span
            className="mx-1 btn btn-sm btn-danger"
            title="Delete Note"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Delete Note Successfully !!!","success");
            }}
          >
            <i className="fa fa-trash"></i>
          </span>
        </div>
        <span
          className="badge badge-primary"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "5px 10px",
            borderRadius: "15px",
            fontSize: "0.75rem",
            fontWeight: "bold",
          }}
        >
          {note.tag}
        </span>
      </div>
      <p className="card-text">
        <small>
          <i>{note.description}</i>
        </small>
      </p>
      <p className="card-text">
        {/* Format the date in the desired format, e.g., "MM/DD/YYYY" */}
        <small className="text-primary">Last updated at {formattedDate}</small>
        {" & "}
        <small className="text-success">Created By {note.user}</small>
      </p>
    </div>
  );
};

export default NoteItem;
