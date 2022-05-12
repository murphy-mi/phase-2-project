import React, { useState } from 'react';
import '../App.css';
import ScoreForm from './ScoreForm';
import GamePlayerCard from './GamePlayerCard'


function GamePlayer({ imagesArray, handleFlip, points, isCardChosen, playAgain, playTimer, handleForm, guessCount }) {
    // console.log(imagesArray)

    const gameCard = imagesArray.map((image, index) => {
        return (
            <GamePlayerCard key={index} image={image} isCardChosen={isCardChosen} index={index} handleFlip={handleFlip} />
        )
    })


    return (
        <div className="GamePlayer">
            <div className='cards-wrapper'>
                {gameCard}
            </div>
            <div className="counters-container">
                <h1 className="counters" id="time"> Time: {playTimer}</h1>
                <h1 className="counters" id="guesses"> Guesses: {guessCount}</h1>
            </div>
            <div>
                <ScoreForm handleForm={handleForm} playTimer={playTimer} guessCount={guessCount} />
                <button onClick={playAgain}>Play Again</button>
            </div>
        </div >
    );
}

export default GamePlayer;