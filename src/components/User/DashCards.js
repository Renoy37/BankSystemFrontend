import React from 'react';

const Card = ({ amount, label, percentage, icon, trend, className }) => {
  return (
    <div className={`card  text-black p-4 shadow-md mb-4 ${className}`}>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-2xl font-bold">{amount}</div>
          <div className="text-sm">{label}</div>
        </div>
        <div className="icon bg-white rounded-full p-2 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="text-xs mt-2">{trend}</div>
      {percentage !== undefined && (
        <div className="mt-2">
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div
                style={{ width: `${percentage}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
