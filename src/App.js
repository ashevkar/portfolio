import React, {lazy} from "react";
import "./styles/global.css";
import { BrowserRouter as Router } from "react-router-dom";
import LazyLoader from "./components/LazyLoader";

const Layout = lazy(() => 
  new Promise((resolve) => setTimeout(() => resolve(import("./components/layout")), 3000))
);

function App() {
  return (
    <Router>
      <LazyLoader component={Layout} />
    </Router>
  );
}

export default App;
