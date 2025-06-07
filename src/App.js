import React from "react";
import "./styles/global.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Layout from "./components/layout/Layout";
import Footer from "./components/layout/Footer";

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
