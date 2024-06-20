import React, { useEffect } from 'react';
import Logo from '../assets/logo.png';

export const Navbar = () => {
  useEffect(() => {
    document.title = 'CoinSage';

    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = Logo;
  }, []);

  return (
    <div>
      <nav className="bg-primary p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src={Logo} alt="CoinSage" className="h-8 w-12 mr-2 filter-white" />
            <a className="text-white text-xl font-bold hover:text-gray-200 transition-colors duration-300">CoinSage</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
