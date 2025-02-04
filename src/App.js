import React from "react";
import "./styles/global.css";
import Hero from "./components/hero";
// import TransitionWrapper from "./components/TransitionWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/comman/footer";
import Navbar from "./components/comman/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Hero/> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/files" element={<Files />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/tools" element={<Tools />} /> */}
        {/* <Route path="/edit" element={<Edit />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
