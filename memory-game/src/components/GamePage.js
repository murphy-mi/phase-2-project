import React, { useState } from 'react';
import HighScores from './HighScores'
import Settings from './Settings'
import GamePlayer from './GamePlayer'

function GamePage() {



    return (
        <div className="GamePage">
            <HighScores />
            <Settings />
            <GamePlayer />
        </div>
    );
}

export default GamePage;