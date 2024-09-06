import React from "react";
import Notes from "./Notes";

const Home = () => {
  return (
    <>
      <div className="col-md-10 offset-md-1">
        <div className="container my-3">
          <h2>Add Your Note</h2>
          <form action="#" className="p-4 border rounded shadow-lg bg-light">
            <div className="form-group mb-4">
              <label htmlFor="noteTitle" className="font-weight-bold mb-2">
                Note Title
              </label>
              <input
                type="text"
                className="form-control"
                id="noteTitle"
                placeholder="Please Type Title Note ..."
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
                placeholder="Please Type Tag Note ..."
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="noteTextarea" className="font-weight-bold mb-2">
                Note Description
              </label>
              <textarea
                className="form-control"
                id="noteTextarea"
                rows="4"
                placeholder="Type your note description..."
              ></textarea>
            </div>
            <div className="form-group py-3 text-center">
              <input
                type="submit"
                className="btn btn-primary btn-lg w-100"
                id="noteButton"
                value="Submit Note"
              />
            </div>
          </form>
        </div>
        <div className="container my-3">
          <Notes/>
        </div>
      </div>
    </>
  );
};

export default Home;
