import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

function AdminSidebar ()  {
  const location = useLocation();
  const activeTab = location.pathname.substring(7) || 'dashboard';

  return (
    <div className="bg-blue-700 text-white w-64 p-4 flex flex-col h-screen fixed lg:relative">
      <div className="flex items-center mb-8">
        <img src={Logo} alt="CoinSage" className="h-10 w-10 mr-2" />
        <span className="text-2xl font-bold">CoinSage</span>
      </div>
      <nav className="flex flex-col space-y-4">
        {['dashboard', 'users', 'transactions', 'settings', 'support', 'complaints', 'logout'].map((tab) => (
          <Link
            key={tab}
            to={`/admin/${tab}`}
            className={`text-left text-xl p-2 hover:bg-blue-800 transition ${
              activeTab === tab ? 'bg-blue-800' : ''
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
