import React from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/resume';
import TransitionWrapper from './components/TransitionWrapper';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <TransitionWrapper>
        <Hero />
      </TransitionWrapper>
      {/* <TransitionWrapper>
        <Resume />
      </TransitionWrapper>
      <TransitionWrapper>
        <Projects />
      </TransitionWrapper> */}
    </div>
  );
}

export default App;
