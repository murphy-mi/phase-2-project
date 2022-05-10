import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import HighScores from './HighScores'
import Settings from './Settings'
import GamePlayer from './GamePlayer'

function GamePage() {


    return (
        <div className="GamePage">
            <Routes>
                <Route
                    path="/"
                    element={<GamePlayer />}
                />
                <Route
                    path="/highscores"
                    element={<HighScores />}
                />
                <Route
                    path="/settings"
                    element={<Settings />}
                />
            </Routes>
        </div>
    );
}

export default GamePage;