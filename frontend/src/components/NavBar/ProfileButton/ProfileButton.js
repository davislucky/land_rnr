import React from "react";
import { useState, useEffect } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './ProfileDropdown.css'
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../../store/session';
import LoginFormModal from "../../LoginFormPage";


function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);

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

  const handleModal = (e) => {
    setShowModal(!showModal);
  }

  let dropdown;

  if (!sessionUser) {
    dropdown = (
      <>
        {showMenu && (
          <div className="profile-dropdown">
            {/* <LoginFormModal /> */}
            <button className="signup-button">
              Sign Up
            </button>
            <button className="signup-button" onClick={handleModal}>
              Log in
            </button>
          </div>
        )}
      </>
    )
  } else {
    dropdown = (
      <>
        {showMenu && (
          <div className="profile-dropdown">
            <button className="signup-button">Trips</button>
            <button className="signup-button">Messages</button>
            <div className="dropdown-line"/>
            <button onClick={logout}>Log out</button>
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