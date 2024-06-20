import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { FaUserCircle } from 'react-icons/fa';

const AdminNavbar = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div />
      <div className="flex items-center space-x-4">
        <IconButton>
          <NightsStayIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar>
          <FaUserCircle />
        </Avatar>
        <span className="text-xl">Admin</span>
      </div>
    </div>
  );
};

export default AdminNavbar;
