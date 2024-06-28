import React, { useState, useEffect } from 'react';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import Notifications from './Notifications'; // Import the Notifications component


// const production = 'http://127.0.0.1:5000';
const deployment = 'https://banksystem-123.onrender.com';
const baseUrl = deployment

const UserNavbar = ({ userAvatar, onLogout, accessToken }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/user/details`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.error(`HTTP error! status: ${response.status}`, errorData);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUserDetails({
          firstName: data.firstName,
          lastName: data.lastName,
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [accessToken, baseUrl]);

  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsToggle = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate('/settings');
    handleMenuClose();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div />
      <div className="flex items-center space-x-4">
        <IconButton>
          <NightsStayIcon />
        </IconButton>
        <div className='relative'>
          <IconButton onClick={handleNotificationsToggle}>
            <NotificationsIcon />
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-2 text-xs">5</span> {/* Adjust the count dynamically */}
          </IconButton>
          {isNotificationsOpen && <Notifications />}
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
        <span className="text-xl">{userDetails.firstName} {userDetails.lastName}</span>
      </div>
    </div>
  );
};

export default UserNavbar;
