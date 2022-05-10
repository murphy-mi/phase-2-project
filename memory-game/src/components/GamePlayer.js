import React, { useState } from 'react';
import '../App.css';
import ScoreForm from './ScoreForm';

function GamePlayer() {



    return (
        <div className="GamePlayer">
            <ScoreForm />
            {/* <h1>HELLLLEEOOOOOOOOOOO</h1> */}
            <div className="grid-item">1</div>
            <div className="grid-item">2</div>
            <div className="grid-item">3</div>
            <div className="grid-item">4</div>
            <div className="grid-item">5</div>
            <div className="grid-item">6</div>
            <div className="grid-item">7</div>
            <div className="grid-item">8</div>
            <div className="grid-item">9</div>
        </div>
    );
}

export default GamePlayer;