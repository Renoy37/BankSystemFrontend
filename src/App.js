import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import DSignUpForm from './components/Login/DSignUpForm';
import HomePage from './components/Home/HomePage.js'
import Dashboard from './components/User/Dashboard.js';
import Account from './components/User/Account.js';
import Settings from './components/User/Settings.js';  
import Support from './components/User/Support.js';
import Transactions from './components/User/Transactions.js';
import Layout from './components/User/Layout.js';
import AdminDashboard from './components/Admin/AdminDashboard.js';
import AdminLayout from './components/Admin/AdminLayout.js';
import AdminUsers from './components/Admin/AdminUsers.js';
import AdminTransactions from './components/Admin/AdminTransactions.js';
import AdminSettings from './components/Admin/AdminSettings.js';
import AdminSupport from './components/Admin/AdminSupport.js';
import AdminComplaits from './components/Admin/AdminComplaits.js';
import Notifications from './components/User/Notifications.js';
import Logout from './components/User/Logout.js';
import UserNavbar from '../src/components/User/UserNavbar.js'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  // const isAuthenticated = accessToken !== null;


  const handleSignUp = (accessToken) => {
    // console.log('SignUp - Access Token:', accessToken);
    setAccessToken(accessToken);
    localStorage.setItem('accessToken', accessToken);
    setIsAuthenticated(true);
  };

  const handleLogin = (accessToken) => {
    // console.log('Login - Access Token:', accessToken);
    setAccessToken(accessToken);
    localStorage.setItem('accessToken', accessToken);
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<DSignUpForm onSignUp={handleSignUp} onLogin={handleLogin} accessToken={accessToken} />} />
        
        <Route element={<Layout accessToken={accessToken}  />}>
          <Route path="/dashboard" element={<Dashboard accessToken={accessToken} setAccessToken={setAccessToken} />} />
          <Route path="/account" element={<Account accessToken={accessToken}  />} />
          <Route path="/transactions" element={<Transactions accessToken={accessToken} />} />
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/settings" element={<Settings  accessToken={accessToken} />} />
          <Route path="/usernav" element={<UserNavbar accessToken={accessToken} setAccessToken={setAccessToken} />} />  
          <Route path="/support" element={<Support />} />
          <Route path="/logout" element={<Logout  />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard authentication={isAuthenticated} />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/transactions" element={<AdminTransactions />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/support" element={<AdminSupport />} />
          <Route path="/admin/complaints" element={<AdminComplaits />} />
          <Route path="*" element={<Navigate to="/admin/dashboard" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
