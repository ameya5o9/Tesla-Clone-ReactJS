import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Home from './components/Home';

function App() {
  return (
      <div>
        <Header/>
        <Home/>
      </div>
    
  );
}

export default App;
