import React from "react";

const NoteItem = (props) => {
    const {note} = props;
  return (
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="card-title mb-0">
          <strong className="text-danger">{note.title}</strong>
        </h5>
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
        <small className="text-primary">Last updated at {note.date}</small>
        {" & "}
        <small className="text-success">Created By {note.user}</small>
      </p>
    </div>
  );
};

export default NoteItem;
