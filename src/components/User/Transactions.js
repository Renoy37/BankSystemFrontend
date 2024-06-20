import React, { useState, useEffect } from 'react';
import Loading from '../Loading';

const Transactions = ({ accessToken }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/transactions', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTransactions(data.transactions);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [accessToken]);

  const handleDelete = async (transactionId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/transactions/del/${transactionId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setTransactions(transactions.filter(transaction => transaction.id !== transactionId));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div><Loading /></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex-1 overflow-y-auto bg-gray-100 p-4 sm:ml-64 lg:ml-0">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center text-blue-800">Transactions History</h2>
      <div className="container mx-auto p-2 sm:p-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-2 sm:p-4 text-left">Transaction ID</th>
                <th className="p-2 sm:p-4 text-left">Date</th>
                <th className="p-2 sm:p-4 text-left">Description</th>
                <th className="p-2 sm:p-4 text-left">Category</th>
                <th className="p-2 sm:p-4 text-left">Amount</th>
                <th className="p-2 sm:p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-200">
                  <td className="p-2 sm:p-4">{transaction.id}</td>
                  <td className="p-2 sm:p-4">{transaction.date}</td>
                  <td className="p-2 sm:p-4">{transaction.description}</td>
                  <td className="p-2 sm:p-4">{transaction.category}</td>
                  <td className={`p-2 sm:p-4 ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {`$${Math.abs(transaction.amount).toFixed(2)}`}
                  </td>
                  <td className="p-2 sm:p-4">
                    <button
                      onClick={() => handleDelete(transaction.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
