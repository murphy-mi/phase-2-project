import React, { useState } from 'react';
import '../App.css';
import ScoreForm from './ScoreForm';
import GamePlayerCard from './GamePlayerCard'


function GamePlayer({ imagesArray, handleFlip, points, isCardChosen, playAgain, playTimer, handleForm, guessCount, cardSet }) {
    // console.log(imagesArray)

    const gameCard = imagesArray.map((image, index) => {
        return (
            <GamePlayerCard key={index} image={image} isCardChosen={isCardChosen} index={index} handleFlip={handleFlip} cardSet={cardSet} />
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
            <div className="info">
                <div className="instructions">
                    <h4>How to Play:</h4>
                    <p>To begin, click on any two cards.
                        If they match, GREAT! They will remain flipped over.
                        If they don't match, try again. Try getting all matches with minimal guesses in as short a time as you can.</p>
                    <p>After all matching is complete,
                        fill out your name in the form below to add your score to our leaderboard!</p>
                    <div className="end-game">
                        <ScoreForm handleForm={handleForm} playTimer={playTimer} guessCount={guessCount} />
                        <button className="play-again" onClick={playAgain}>Play Again</button>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default GamePlayer;