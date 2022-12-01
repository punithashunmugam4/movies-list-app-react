import React from "react";
import './header.css';

const Header=()=>{
    return <div id="header">
        <h1 id="head">Star Cinemas</h1>
        <nav className="navbar">
            <a href='/'>Home</a>
            <a href='/'>About us</a>
            <a href='/'>Contact</a>
        </nav>
        </div>
}

export default Header