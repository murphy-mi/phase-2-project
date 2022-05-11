import React, { useState } from 'react';
import '../App.css';
import ScoreForm from './ScoreForm';
import GamePlayerCard from './GamePlayerCard'


function GamePlayer({ imagesArray, handleFlip, points, isCardChosen, playAgain }) {
    // console.log(imagesArray)

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
                <span>
                    <h1 style={{ color: 'cyan' }} > Score:{points}</h1>
                    <button onClick={playAgain}>Play Again</button>
                </span>
            </div>
        </div >
    );
}

export default GamePlayer;