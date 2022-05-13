import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {



    return (
        <div className="nav-container">
            <nav className="NavBar">
                <NavLink className="nav" to="/">Play</NavLink>
                <NavLink className="nav" to="/highscores">High Scores</NavLink>
                <NavLink className="nav" to="/settings">Do NOT click</NavLink>
            </nav>
        </div>
    );
}

export default NavBar;