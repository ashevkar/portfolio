import React from 'react';
import './styles/global.css';
import Hero from './components/hero';
import TransitionWrapper from './components/TransitionWrapper';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Footer from './components/comman/footer';
import Navbar from './components/comman/Navbar';

function App() {
  return (
    <Router>  
      <div className="App">
        <Navbar />
        <TransitionWrapper>
          <Hero />

        </TransitionWrapper>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
