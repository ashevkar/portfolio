import React from "react";
import "./styles/global.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./assets/layout";
import Footer from "./components/footer";

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
