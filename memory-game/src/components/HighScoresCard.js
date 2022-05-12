import React, { useState, useEffect } from 'react';

function HighScoresCard({ score }) {

    return (
        <tr className="HighScores">
            <td>{score.name}</td>
            <td>{score.time}</td>
            <td>{score.guesses}</td>
        </tr >
    );
}

export default HighScoresCard;