import React, { useState } from 'react';
import '../App.css';
import ScoreForm from './ScoreForm';
import GamePlayerCard from './GamePlayerCard'


function GamePlayer({ imagesArray }) {
    console.log(imagesArray)

    const gameCard = imagesArray.map((image, index) => {
        return (
            <GamePlayerCard key={index} image={image} />
        )
    })

    return (
        <div className="GamePlayer">
            <ScoreForm />
             <div className='cards-wrapper'>
                {gameCard}
            </div>
        </div>
    );
}

export default GamePlayer;