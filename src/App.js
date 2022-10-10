import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import Login from "./screens/Login";
import Register from "./screens/Register";
import Plumber from "./components/Plumber";
import Painter from "./components/Painter";
import Mason from "./components/Mason";
import Electrician from "./components/Electrician";
import AddArtisan from "./components/AddArtisan";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/plumber" element={<Plumber />} />
        <Route path="/painter" element={<Painter />} />
        <Route path="/mason" element={<Mason />} />
        <Route path="/electrician" element={<Electrician />} />
        <Route path="/addartisan" element={<AddArtisan />} />
      </Routes>
    </>
  );
}

export default App;
