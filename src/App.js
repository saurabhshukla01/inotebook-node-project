import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [alert , setAlert] = useState(null);
  const showAlert = (message ,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  return (
    <>
      <Navbar />
      <Alert alert={alert} />
      <div className="container py-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Home showAlert={showAlert} />} />
          <Route exact path="/login" element={<Login showAlert={showAlert} />} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
