import React, { useState } from 'react';
import { ToggleButton } from 'react-bootstrap';

function Settings({ handleCardToggle }) {



    return (
        <div className="Settings">
            <h3>Activate Secret Card Set:</h3>
            <button onClick={handleCardToggle}>👽</button>
        </div>
    );
}

export default Settings;