import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineLogout } from "react-icons/md";



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
      className="flex items-center px-4 py-2 w-28 text-white rounded-md shadow-md transition duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      Logout
      <MdOutlineLogout className="ml-2 transition-all duration-300 ease-in-out transform hover:ml-4 motion-reduce:transition-none motion-reduce:hover:transform-none" />
    </button>
    </>
  );
};

export default Logout;




