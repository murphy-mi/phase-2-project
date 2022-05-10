import '../App.css';
import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './Header'
import GamePage from './GamePage'

function App() {



  return (
    <div className="App">
      <Header />
      <GamePage />
    </div>
  );
}

export default App;
