import React from "react";
import "./styles/global.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./assets/Layout";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Layout />
      <Footer />
    </Router>
  );
}

export default App;
