import React, { useState } from 'react';
import '../index.css';

function GamePlayerCard({ image, index, handleFlip, isCardChosen }) {
    // const [isFlipped, setIsFlipped] = useState(false)

    const newFlip = () => {
        handleFlip(image, index)
    }

    return (
        <div className='card-container'>
            <img
                onClick={newFlip}
                src={isCardChosen(image, index) ? image : 'https://images.unsplash.com/photo-1537420327992-d6e192287183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80'}
                className='spaceCard'
            />
        </div>
    )
}

export default GamePlayerCard;