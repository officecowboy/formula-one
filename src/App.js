import React from 'react';
import './App.css';
import Race from './races';

function App() {

  return (
    <div className="App">
      <div className="logo">
        <img alt="" src={require("./assets/F1_logo.png")} />
        <h1 className="season">2018 SEASON</h1>
      </div>
      <div className="card-container">
        <Race />
      </div>
    </div>
  );
}

export default App;
