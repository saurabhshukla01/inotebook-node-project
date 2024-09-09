import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

const Home = () => {
  return (
    <>
      <div className="col-md-10 offset-md-1">
        <div className="container my-3">
          <AddNote />
        </div>
        <div className="container my-3">
          <Notes/>
        </div>
      </div>
    </>
  );
};

export default Home;
