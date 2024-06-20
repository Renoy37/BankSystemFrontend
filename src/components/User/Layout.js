import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import UserNavbar from './UserNavbar';

// const Layout = () => {
//   return (
//     <div className="flex flex-col lg:flex-row h-screen">
//       <Sidebar />
//       <div className="flex-1 overflow-y-auto bg-gray-200 p-4 lg:ml-64">
//         <UserNavbar />
//         <div className="mt-4">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };


const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-200 p-4 overflow-y-auto">
        <UserNavbar />
        <div className="mt-4">
           <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
