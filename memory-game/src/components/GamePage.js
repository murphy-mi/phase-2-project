import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { imgArr } from '../data.js'
import HighScores from './HighScores';
import Settings from './Settings';
import GamePlayer from './GamePlayer';

function GamePage() {

    const [imagesArray, setImagesArray] = useState([])
    const [cardsChosen, setCardsChosen] = useState([])
    const [cardsChosenIdx, setCardsChosenIdx] = useState([])
    const [points, setPoints] = useState(0)
    const [openCards, setOpenCards] = useState([])
    // const [isFlipped, setIsFlipped] = useState(false)


    function createCardBoard() {
        const imagesGenerated = imgArr.concat(...imgArr) // double our images
        const shuffledArray = shuffleArray(imagesGenerated)
        setImagesArray(shuffledArray)
    }


    function handleFlip(image, index) {
        // console.log(image, index)

        if (cardsChosenIdx.length === 1 && cardsChosenIdx[0] === index) {
            return
        }

        if (cardsChosen.length < 2) {
            setCardsChosen(cardsChosen => cardsChosen.concat(image))
            setCardsChosenIdx(cardsChosenIdx => cardsChosenIdx.concat(index))
            // console.log(cardsChosen)
            // console.log(cardsChosenIdx)

            if (cardsChosen.length === 1) {
                if (cardsChosen[0] === image) {
                    setPoints(pointes => points + 2)
                    setOpenCards(openCards => openCards.concat([cardsChosen[0], image]))
                }
                setTimeout(() => {
                    setCardsChosenIdx([])
                    setCardsChosen([])
                }, 700)
            }
        }
    }

    function isCardChosen(image, index) {
        return cardsChosenIdx.includes(index) || openCards.includes(image)
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
                    element={<GamePlayer imagesArray={imagesArray} handleFlip={handleFlip} points={points} isCardChosen={isCardChosen} />}
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