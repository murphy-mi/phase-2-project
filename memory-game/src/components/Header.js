import React, { useState } from 'react';
import NavBar from './NavBar'
import '../index.css';

function Header() {



    return (
        <div className="Header">
            <span>
                <ul className="title">
                    <span className="rocket">🚀</span>Extraterrestrial Twinning<span className="rocket">🚀</span>
                </ul>
            </span>
            <NavBar />
        </div>
    );
}

export default Header;