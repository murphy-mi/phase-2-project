import React, { useState } from 'react';
import { imgArr1, imgArr2 } from '../data.js';
import '../index.css';

function GamePlayerCard({ image, index, handleFlip, isCardChosen, cardSet }) {
    // const [isFlipped, setIsFlipped] = useState(false)

    const newFlip = () => {
        handleFlip(image, index)
    }

    let cardSrc = cardSet === imgArr1 ? 'https://images.unsplash.com/photo-1537420327992-d6e192287183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80' : 'https://images.unsplash.com/photo-1549313861-33587f3d2956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80';

    return (
        <div className='card-container'>
            <img
                onClick={newFlip}
                src={isCardChosen(image, index) ? image : cardSrc}
                className='spaceCard'
            />
        </div>
    )
}

export default GamePlayerCard;