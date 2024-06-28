import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Logout from './Logout'

const Sidebar = ({ onLogout }) => {
  const location = useLocation();
  const activeTab = location.pathname.substring(1) || 'dashboard';

  return (
    <div className="bg-blue-700 text-white w-64 p-4 flex flex-col h-full fixed lg:relative z-50 ">
      <div className="flex items-center mb-8">
        <img src={Logo} alt="CoinSage" className="h-10 w-10 mr-2" />
        <span className="text-2xl font-bold">CoinSage</span>
      </div>
      <nav className="flex flex-col space-y-4">
        {['dashboard', 'account', 'transactions', 'settings', 'support'].map((tab) => (
          <Link
            key={tab}
            to={`/${tab}`}
            className={`text-left text-xl p-2 hover:bg-blue-800 transition ${
              activeTab === tab ? 'bg-blue-800' : ''
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Link>
        ))}
          <Logout onLogout={onLogout} />
      </nav>
    </div>
  );
};

export default Sidebar;
