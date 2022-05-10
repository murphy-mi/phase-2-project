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
            {gameCard}
        </div>
    );
}

export default GamePlayer;