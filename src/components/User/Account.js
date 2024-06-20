import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading';

const Accounts = ({ accessToken }) => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/accounts', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setAccounts(response.data.accounts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching accounts:', error);
        setError('Failed to fetch accounts. Please try again later.');
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [accessToken]);

  if (loading) {
    return <div><Loading /></div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex-1 overflow-y-auto bg-gray-100 p-8 ml-64 lg:ml-0">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">User Account Details</h2>
      <div className="container mx-auto p-4">
        {accounts.map((account) => (
          <div key={account.id} className="bg-white shadow-lg p-8 rounded-lg mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{account.user.name}</h3>
                <p className="text-gray-500">{`@${account.user.email}`}</p>
              </div>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Download PDF</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <p className="text-gray-600 font-semibold">Phone:</p>
                <p className="text-gray-800">{account.user.phone_number}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Address:</p>
                <p className="text-gray-800">{account.user.address}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Email:</p>
                <p className="text-gray-800">{account.user.email}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Website:</p>
                <p className="text-gray-800">{account.user.website}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Payment Method:</p>
                <p className="text-gray-800">{account.paymentMethod}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Invoice Date:</p>
                <p className="text-gray-800">{account.invoiceDate}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Due Date:</p>
                <p className="text-gray-800">{account.dueDate}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Date Paid:</p>
                <p className="text-gray-800">{account.datePaid}</p>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-800">Main Balance</h4>
              <p className="text-3xl text-green-600">${account.balance.toLocaleString()}</p>
            </div>
            <div className="mt-8 flex justify-between items-center">
              <div>
                <p className="text-gray-600 font-semibold">Amount</p>
                <p className="text-2xl text-gray-800">${account.amount}</p>
              </div>
              <div className="flex items-center">
                <img src="https://via.placeholder.com/40" alt={account.user.name} className="rounded-full" />
                <p className="ml-4 text-gray-800">{account.user.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accounts;
