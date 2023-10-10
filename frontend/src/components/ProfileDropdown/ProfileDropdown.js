import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './ProfileDropdown.css'


function ProfileDropdown(props) {
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          
        >
            <MenuRoundedIcon className="menu-rounded-icon" />
            <AccountCircleIcon className="account-circle-icon" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        //   MenuListProps={{
        //     'aria-labelledby': 'basic-button',
        //   }}
        >
          <MenuItem onClick={handleClose}>Sign Up</MenuItem>
          <MenuItem onClick={handleClose}>Log In</MenuItem>
          {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </div>
    );
  
}

export default ProfileDropdown;