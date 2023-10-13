import React from "react";
import './NavBar.css';
import logo from '../../assets/logo.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import LoginForm from "../LoginFormPage/LoginForm";
import ProfileButton from "./ProfileButton/ProfileButton";



const NavBar = () => {

    return (
        <div className="navbar">
            <img src={logo} alt='logo' className="navbar-logo"></img>
            <div className="search-bar">
                <div className="search-bar-text">Any where</div>
                <div className="search-bar-text">Any week</div>
                <div className="search-bar-text2">Add guests</div>
                <div className="search-icon-div">
                    <SearchRoundedIcon className="search-icon-div"/>    
                </div>
            </div>
            <div className="session-container">
                <div className="github-link">
                    <FontAwesomeIcon className="github-icon" icon={faGithub} style={{color: "#ff2600",}} />
                </div>
                <div className="linkedin-link">
                    <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} style={{color: "#ff2600",}} />
                </div>
                <div className="profile-button" >
                    <ProfileButton />
                   
                </div>
            </div>
        </div>
    )
}

export default NavBar;