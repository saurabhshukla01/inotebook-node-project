import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

const Home = (props) => {
  const {showAlert} = props;
  return (
    <>
      <div className="col-md-10 offset-md-1">
        <div className="container my-3">
          <AddNote showAlert={showAlert} />
        </div>
        <div className="container my-3">
          <Notes showAlert={showAlert} />
        </div>
      </div>
    </>
  );
};

export default Home;
