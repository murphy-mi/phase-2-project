import React, { useState } from 'react';
import '../index.css';

function GamePlayerCard({ image }) {
    return (
        <div>
            <p>{image}</p>
            <img id={spaceCard} src={image} alt='' />
        </div>
    )
}

export default GamePlayerCard;