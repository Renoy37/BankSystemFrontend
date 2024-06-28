import React from 'react';

const notificationsData = [
  { id: 1, name: 'Michael Brown', time: '1.3 hrs ago', message: 'Lorem ipsum dolor amet cosec...', avatar: 'url-to-avatar' },
  { id: 2, name: 'Adam Smith', time: '1.7 hrs ago', message: 'Lorem ipsum dolor amet cosec...', avatar: 'url-to-avatar' },
  { id: 3, name: 'John Doe', time: '2.1 hrs ago', message: 'Lorem ipsum dolor amet cosec...', avatar: 'url-to-avatar' },
  // Add more dummy data if needed to test scrolling
];

function Notifications() {
  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-10">
      <div className="p-4 border-b border-gray-200">
        <span className="font-bold">Notifications</span>
      </div>
      <ul className="divide-y divide-gray-200 max-h-64 overflow-y-auto">
        {notificationsData.map(notification => (
          <li key={notification.id} className="flex p-4">
            <img src={notification.avatar} alt={notification.name} className="w-10 h-10 rounded-full mr-4" />
            <div className="flex-1">
              <div className="font-bold">{notification.name}</div>
              <div className="text-sm text-gray-500">{notification.time}</div>
              <div className="text-sm">{notification.message}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Notifications;
