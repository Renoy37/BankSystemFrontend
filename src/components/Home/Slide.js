import React from 'react';

export const Slide = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Explore The App With a Demo Login
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative group w-full max-w-sm">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPYnn1xuJCd2zktOpki0LzHrlHVnQjSbq6Q&s"
            alt="Customer"
            className="h-80 w-80 object-cover rounded-lg shadow-lg transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl font-bold">Customers</p>
            <p className="text-white text-center mt-2 px-2">
              Access your account, check your balance, and more.
            </p>
          </div>
          <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-sm font-semibold px-2 py-1 rounded">
            Customers
          </div>
        </div>
        <div className="relative group w-full max-w-sm">
          <img
            src="https://media.istockphoto.com/id/1471845663/photo/business-woman-writing-and-phone-call-in-office-conversation-or-confirm-schedule-female.jpg?s=612x612&w=0&k=20&c=n2UIWhYszI50SYWxy3RzIFCsYgnor2YbZxgwQPwEF_0="
            alt="Admin"
            className="h-80 w-80 object-cover rounded-lg shadow-lg transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl font-bold">Admin</p>
            <p className="text-white text-center mt-2 px-2">
              Manage users, view reports, and configure settings.
            </p>
          </div>
          <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-sm font-semibold px-2 py-1 rounded">
            Admin
          </div>
        </div>
      </div>
    </div>
  );
};
