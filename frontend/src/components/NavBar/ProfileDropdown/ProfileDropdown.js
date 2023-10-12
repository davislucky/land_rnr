import React from "react";
import { useState, useEffect } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './ProfileDropdown.css'
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../../store/session';

function ProfileDropdown() {
  const sessionUser = useSelector( (state) => state.session.user);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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



  return (
    <>
      <button onClick={openMenu}>
          <MenuRoundedIcon className="menu-rounded-icon" />
          <AccountCircleIcon className="account-circle-icon" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>Log in</li>
          <li>Sign Up</li>
        </ul>
      )}
    </>
  )
}

export default ProfileDropdown;