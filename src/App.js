import React from 'react';
import './styles/global.css';
import Hero from './components/hero';
import TransitionWrapper from './components/TransitionWrapper';

function App() {
  return (
    <div className="App">
      <TransitionWrapper>
        <Hero />
      </TransitionWrapper>
      
    </div>
  );
}

export default App;
