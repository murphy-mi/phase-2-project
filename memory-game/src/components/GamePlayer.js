import React, { useState } from 'react';
import '../App.css';
import ScoreForm from './ScoreForm';
import GamePlayerCard from './GamePlayerCard'


function GamePlayer({ imagesArray, handleFlip, points, isCardChosen }) {
    console.log(imagesArray)

    const gameCard = imagesArray.map((image, index) => {
        return (
            <GamePlayerCard key={index} image={image} isCardChosen={isCardChosen} index={index} handleFlip={handleFlip} />
        )
    })

    return (
        <div className="GamePlayer">
            <ScoreForm />
            <div className='cards-wrapper'>
                {gameCard}
                <h1 style={{ color: 'cyan' }} > Score:{points}</h1>
            </div>
        </div >
    );
}

export default GamePlayer;