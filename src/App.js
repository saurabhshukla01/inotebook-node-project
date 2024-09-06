import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="container py-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
