import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {



    return (
        <nav className="NavBar">
            <NavLink to="/">Play</NavLink>
            <NavLink to="/highscores">High Scores</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </nav>
    );
}

export default NavBar;