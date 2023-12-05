import React from "react";
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Services from './routes/Services';
import { Route, Routes } from "react-router-dom";
import Courses from "./routes/Courses";

function App() {



  return (
    <>
    <Routes>
    <Route path="/" element={<Home />}  />
      <Route path="/" element={<Home />}  />
      <Route path="/about" element={<About />}  />
      <Route path="/contact" element={<Contact />}  />
      <Route path="/services" element={<Services />}  />
      <Route path="/courses" element={<Courses />}  />
    </Routes>
    </>
  );
}

export default App;
