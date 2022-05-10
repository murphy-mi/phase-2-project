import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { imgArr } from '../data.js'
import HighScores from './HighScores';
import Settings from './Settings';
import GamePlayer from './GamePlayer';

function GamePage() {

    const [imagesArray, setImagesArray] = useState([])
    const [cardsChosen, setCardsChosen] = useState([])
    const [cardsChosenIds, setCardsChosenIds] = useState([])
    const [points, setPoints] = useState(0)


    function createCardBoard() {
        const imagesGenerated = imgArr.concat(...imgArr) // double our images
        const shuffledArray = shuffleArray(imagesGenerated)
        setImagesArray(shuffledArray)
    }

    function shuffleArray(array) {
        for (let i = 0; i < array.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        console.log(array)
        return array
    }

    useEffect(() => {
        createCardBoard()
    }, [])

    return (
        <div className="GamePage">
            <Routes>
                <Route
                    path="/"
                    element={<GamePlayer imagesArray={imagesArray} />}
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