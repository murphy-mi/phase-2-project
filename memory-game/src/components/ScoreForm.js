import React, { useState } from 'react';

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
                    type="text"
                    placeholder="enter your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    >
                </input>
                    <button>Submit Score</button>
            </form>
        </div>
    );
}

export default ScoreForm;