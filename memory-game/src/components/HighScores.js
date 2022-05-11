import React, { useState, useEffect } from 'react';
import HighScoresCard from './HighScoresCard';

function HighScores({ scores }) {


    return (
        <table className="HighScores">
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Time (s)
                </th>
                <th>
                    Guesses
                </th>
            </tr>
            {scores.map((score) => {
                return <HighScoresCard score={score} />
            })}
        </table>
    );
}

export default HighScores;