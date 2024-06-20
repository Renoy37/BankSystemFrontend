import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import AdminSidebar from './AdminSidebar';
import AdminUsers from './AdminUsers';
import AdminTransactions from './AdminTransactions';
import AdminSettings from './AdminSettings';
import AdminSupport from './AdminSupport';
import AdminComplaints from './AdminComplaits';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const lineData = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Income',
      data: [400, 300, 500, 600, 700, 400, 200],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
    {
      label: 'Expenses',
      data: [200, 100, 300, 400, 300, 200, 100],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const pieData = {
  labels: ['Installment', 'Investment', 'Property'],
  datasets: [
    {
      label: 'Categories',
      data: [5412, 3784, 2000],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
    },
  ],
};

const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Balance',
      data: [1200, 1900, 3000, 500, 2000, 3000],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* <AdminSidebar /> */}
      <div className="flex-1 overflow-y-auto bg-gray-200 p-4 ml-64 lg:ml-0">
        <Routes>
          <Route path="/" element={<AdminDashboardContent />} />
          <Route path="/users" element={<AdminUsers />} />
          <Route path="/transactions" element={<AdminTransactions />} />
          <Route path="/settings" element={<AdminSettings />} />
          <Route path="/support" element={<AdminSupport />} />
          <Route path="/complaints" element={<AdminComplaints />} />
        </Routes>
      </div>
    </div>
  );
};

const AdminDashboardContent = () => {
  return (
    <div className="p-4 bg-gray-200 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-lg p-4">
          <h2 className="text-xl font-bold">Your Balance Summary</h2>
          <Line data={lineData} />
        </div>
        <div className="bg-white shadow-lg p-4">
          <h2 className="text-xl font-bold">Admission Summary</h2>
          <Bar data={barData} />
        </div>
        <div className="bg-white shadow-lg p-4">
          <h2 className="text-xl font-bold">Expense Breakdown</h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
