import React from "react";
import './NavBar.css'
import logo from '../../assets/logo.png'

const navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt='logo' className="navbar-logo"></img>
            <div className="search-bar">
                <div className="search-bar-text">Any where</div>
                <div className="search-bar-text">Any week</div>
                <div className="search-bar-text2">Add guests</div>
            </div>
            <div className="session-container"></div>
        </div>
    )
}

export default navbar;