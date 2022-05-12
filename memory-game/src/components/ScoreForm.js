import React, { useState } from 'react';
import '../App.css';

function ScoreForm({ handleForm, playTimer, guessCount }) {
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/highscores', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                time: playTimer,
                guesses: guessCount
            })
        })
            .then(r => r.json())
            .then(data => handleForm(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="submit-form"
                    type="text"
                    placeholder="enter your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                >
                </input>
                <button id="submit-button" className="submit-form">Submit Score</button>
            </form>
        </div>
    );
}

export default ScoreForm;