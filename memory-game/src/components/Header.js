import React, { useState } from 'react';
import NavBar from './NavBar'
import '../index.css';

function Header() {



    return (
        <div className="Header">
            <ul className="title">
                Extraterrestrial Twinning
            </ul>
            <NavBar />
        </div>
    );
}

export default Header;