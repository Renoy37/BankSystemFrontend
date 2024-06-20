import React, { useState, useEffect } from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import axios from 'axios';
import Loading from '../Loading.js';
import Card from './DashCards.js'
import { FaArrowUp, FaChartLine } from 'react-icons/fa';


const Dashboard = ({ accessToken, setAccessToken }) => {
  const [dashboardData, setDashboardData] = useState(null);

  // const production = 'http://127.0.0.1:5000/dashboard_data';
  const deployment = 'https://banksystem-123.onrender.com/dashboard_data'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(deployment, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setDashboardData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
  
    fetchData();
  }, [accessToken]);

  // const handleLogout = () => {
  //   // Clear user session or token (accessToken in this case)
  //   setAccessToken(null); // Clear accessToken state
  //   localStorage.removeItem('accessToken'); // Clear accessToken from localStorage
  // };


  if (!dashboardData) return <div className="flex justify-center items-center h-screen"><Loading /></div>;

  const { lineData, pieData, barData } = dashboardData;

  // Chart.js options for customization
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          borderColor: 'rgba(0,0,0,0.1)',
          color: 'rgba(0,0,0,0.1)',
          drawBorder: true,
          drawOnChartArea: true,
          drawTicks: true,
        },
        ticks: {
          callback: function (value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  // Custom colors for charts
  const lineColors = ['#6366F1'];
  const barColors = ['#34D399'];
  const pieColors = ['#F59E0B', '#3B82F6', '#EF4444'];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4 ml-64 lg:ml-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Card
            amount="$19,522"
            label="Expense"
            trend="+0.5% than last month"
            icon={<FaArrowUp size={24} />}
          />
          <Card
            amount="$45,234"
            label="Income"
            trend="-2% than last month"
            percentage={38}
            icon={<FaChartLine size={24} />}
          />
          <Card 
            amount="$984"
            label="Transactions"
            icon={<FaChartLine size={24} />}
          />
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:m-4">
            <h2 className="text-xl font-bold mb-4">Weekly Income</h2>
            <div className="h-64">
              <Line data={{ ...lineData, datasets: [{ ...lineData.datasets[0], borderColor: lineColors[0] }] }} options={options} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 sm:m-4">
            <h2 className="text-xl font-bold mb-4">Monthly Balance</h2>
            <div className="h-64">
              <Bar data={{ ...barData, datasets: [{ ...barData.datasets[0], backgroundColor: barColors }] }} options={options} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 sm:m-4">
            <h2 className="text-xl font-bold mb-4">Expense Breakdown</h2>
            <div className="h-64">
              <Pie data={{ ...pieData, datasets: [{ ...pieData.datasets[0], backgroundColor: pieColors }] }} options={{ ...options, plugins: { legend: { ...options.plugins.legend, labels: { ...options.plugins.legend.labels, color: 'black' } } } }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
