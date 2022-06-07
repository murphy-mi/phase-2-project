import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { imgArr1, imgArr2 } from '../data.js'
import HighScores from './HighScores';
import Settings from './Settings';
import GamePlayer from './GamePlayer';

function GamePage() {

    // STATE
    const [imagesArray, setImagesArray] = useState([])
    const [cardsChosen, setCardsChosen] = useState([])
    const [cardsChosenIdx, setCardsChosenIdx] = useState([])
    const [points, setPoints] = useState(0)
    const [openCards, setOpenCards] = useState([])
    const [playCount, setPlayCount] = useState(0)
    const [playTimer, setPlayTimer] = useState(0)
    const [guessCount, setGuessCount] = useState(0)
    const [intervalId, setIntervalId] = useState("")
    const [scores, setScores] = useState([])
    const [cardSet, setCardSet] = useState(imgArr1)
    console.log(guessCount)

    useEffect(() => {
        fetch('http://localhost:3000/highscores')
            .then(r => r.json())
            .then(data => setScores(data))
    }, [])

    useEffect(() => {
        createCardBoard()
    }, [playCount])

    useEffect(() => {
        createCardBoard()
    }, [cardSet])

    useEffect(() => {
        createCardBoard()

    }, [])

    useEffect(() => {
        // console.log(playTimer)
        // console.log(intervalId)
        if (points < 16 && guessCount === 1) {
            setIntervalId(setInterval(() => setPlayTimer(playTimer => playTimer + 1), 1000))
        } else if (points === 16) {
            // console.log(intervalId)
            clearInterval(intervalId)
        }
    }, [guessCount])

    // INITIALIZE ON RENDER
    function createCardBoard() {
        const imagesGenerated = cardSet.concat(...cardSet) // double our images
        const shuffledArray = shuffleArray(imagesGenerated)
        setImagesArray(shuffledArray)
    }

    // ON IMAGE CLICK
    function handleFlip(image, index) {

        setGuessCount(guessCount => guessCount + 1)

        if (cardsChosenIdx.length === 1 && cardsChosenIdx[0] === index) {
            return
        }

        if (cardsChosen.length < 2) {
            setCardsChosen(cardsChosen => cardsChosen.concat(image))
            setCardsChosenIdx(cardsChosenIdx => cardsChosenIdx.concat(index))

            if (cardsChosen.length === 1) {
                if (cardsChosen[0] === image) {
                    setPoints(points => points + 2)
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
        return array
    }

    function playAgain() {
        setCardsChosenIdx([])
        setCardsChosen([])
        setPoints(0)
        setOpenCards([])
        setPlayTimer(0)
        setPlayCount(playCount => playCount + 1)
        setGuessCount(0)
    }

    const handleForm = (data) => {
        setScores([...scores, data])
    }

    function handleCardToggle() {
        setCardSet(cardSet === imgArr1 ? imgArr2 : imgArr1)
    }


    return (
        <div className="GamePage">
            <Routes>
                <Route
                    path="/"
                    element={
                        <GamePlayer
                            playAgain={playAgain}
                            imagesArray={imagesArray}
                            handleFlip={handleFlip}
                            points={points}
                            isCardChosen={isCardChosen}
                            playTimer={playTimer}
                            handleForm={handleForm}
                            guessCount={guessCount}
                            cardSet={cardSet}
                        />
                    }
                />
                <Route
                    path="/highscores"
                    element={<HighScores scores={scores} playTimer={playTimer} guessCount={guessCount} />}
                />
                <Route
                    path="/settings"
                    element={<Settings handleCardToggle={handleCardToggle} />}
                />
            </Routes>
        </div>
    );
}

export default GamePage;