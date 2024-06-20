import React from 'react';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white shadow-lg p-4">
        <h2 className="text-xl font-bold">Laban Income</h2>
        {/* Add dashboard logic here */}
      </div>
      <div className="bg-white shadow-lg p-4">
        <h2 className="text-xl font-bold">Laban Transactions</h2>
        {/* Add dashboard logic here */}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center">Graph Dashboard</h2>
        {/* Add graph logic here */}
      </div>
    </div>
  );
};

export default Dashboard;
