import React, { useState } from 'react';
import NavBar from './NavBar'
import '../index.css';

function Header() {



    return (
        <div className="Header">
            <h1 className="title">THIS IS THE TITLE</h1>
            <NavBar />
        </div>
    );
}

export default Header;