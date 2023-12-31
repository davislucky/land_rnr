import React from "react";
import { useState, useEffect } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './ProfileDropdown.css'
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../../store/session';
import { openModal } from "../../../store/modal";
import { Link } from "react-router-dom";


function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
 

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  }

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    }

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  }

  const handleSignUpModal = (e) => {
    dispatch(openModal('signup'))
  }

  const handleSignInModal = (e) => {
    dispatch(openModal('login'))
  }

  let dropdown;

  if (!sessionUser) {
    dropdown = (
      <>
        {showMenu && (
          <div className="profile-dropdown">
            <div className="dropdown-content">
              <div className="session-button" onClick={handleSignUpModal}>
                Sign Up
              </div>
              <div className="session-button" onClick={handleSignInModal}>
                Log in
              </div>
            </div>
          </div>
        )}
      </>
    )
  } else {
    dropdown = (
      <>
        {showMenu && (
          <div className="profile-dropdown">
            <div className="dropdown-content">
              <Link to={`/user`}>
                <div className="signup-button">Trips</div>
              </Link>
              <div className="dropdown-line"/>
              <div onClick={logout}>Log out</div>
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <button onClick={openMenu} className="profile-button">
          <MenuRoundedIcon className="menu-rounded-icon" />
          <AccountCircleIcon className="account-circle-icon" />
      </button>
      <div className="dropdown-content">{dropdown}</div>
    </>
  )
}

export default ProfileButton;