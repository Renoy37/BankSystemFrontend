import React from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); 

    navigate('/signup'); 
  };

  return (
    <> 
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Logout
    </button>
    </>
  );
};

export default Logout;




