import React, { useState } from 'react';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';

const UserNavbar = ({ userAvatar, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElTwo, setAnchorElTwo] = useState(null);

  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClickTwo = (event) => {
    setAnchorElTwo(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate('/settings');
    handleMenuClose();
  };

  const handleNotificationClick = () => {
    navigate('./Notifications.js')
    handleMenuClose();
  }

  

  return (
    <div className="flex justify-between items-center mb-4">
      <div />
      <div className="flex items-center space-x-4">
        <IconButton>
          <NightsStayIcon />
        </IconButton>
        <div className='relative'>
          <IconButton onClick={handleMenuClickTwo}>
            <NotificationsIcon />
          </IconButton>

          <Menu
            anchorElTwo={anchorElTwo}
            open={Boolean(anchorElTwo)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleNotificationClick}>Notifications and messages here</MenuItem>
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </Menu>
        </div>
        
        <div className="relative">
          <IconButton onClick={handleMenuClick}>
            <Avatar src={userAvatar} />
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </Menu>
        </div>
        <span className="text-xl">Laban Weru</span>
      </div>
    </div>
  );
};

export default UserNavbar;
