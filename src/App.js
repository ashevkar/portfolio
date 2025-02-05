import React from "react";
import "./styles/global.css";
import Hero from "./components/hero";
// import TransitionWrapper from "./components/TransitionWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/comman/footer";
import Navbar from "./components/comman/Navbar";
import Layout from "./components/layout";

function App() {
  return (
    <Router>
      <Navbar />
      <Layout/>
      <Footer />
    </Router>
  );
}

export default App;
