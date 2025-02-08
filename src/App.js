import React, { lazy } from "react";
import "./styles/global.css";
import { BrowserRouter as Router } from "react-router-dom";
import LazyLoader from "./assets/LazyLoader";

const Layout = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./assets/layout")), 10)
    )
);

function App() {
  return (
    <Router>
      <LazyLoader component={Layout} />
    </Router>
  );
}

export default App;
