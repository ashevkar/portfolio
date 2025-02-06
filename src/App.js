import React from "react";
import "./styles/global.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/comman/footer";
import Navbar from "./components/comman/Navbar";
import Layout from "./components/layout";

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
