import React, { useState } from 'react';
import { ToggleButton } from 'react-bootstrap';

function Settings({ handleCardToggle }) {
    const [isButtonClicked, setIsButtonClicked] = useState(false)

    function handleButtonClicked() {
        handleCardToggle()
        setIsButtonClicked(isButtonClicked => !isButtonClicked)
    }

    return (
        <div className="Settings">
            <h3>Activate Secret Card Set:</h3>
            <button className="cardSetButton" onClick={handleButtonClicked}>{isButtonClicked ? "🪐" : "👽"}</button>
        </div>
    );
}

export default Settings;