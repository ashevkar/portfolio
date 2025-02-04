import React from 'react';
import './styles/global.css';
import Hero from './components/hero';
import Resume from './components/resume';
import TransitionWrapper from './components/TransitionWrapper';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Footer from './components/footer';

function App() {
  return (
    <Router>  
      <div className="App">
        <TransitionWrapper>
          <Hero />

        </TransitionWrapper>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
