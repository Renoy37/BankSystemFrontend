import React, { useState, useEffect } from 'react';
import Loading from '../Loading';

const Settings = ({ accessToken }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('https://via.placeholder.com/150');
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/user/details', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUserDetails({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          address: data.address,
          dateOfBirth: data.dateOfBirth,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [accessToken]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/user/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(userDetails),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setIsEditing(false); // Exit edit mode if successful
    } catch (error) {
      console.error('Error saving user details:', error);
    }
  };

  if (loading) {
    return <div><Loading image={selectedImage}/></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col lg:flex-row sm:ml-64 lg:ml-0">
      {/* Left Column - Profile Info */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/3 mb-8 lg:mb-0 lg:mr-8">
        <img
          src={imagePreview}
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 object-cover"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4"
        />
        <h3 className="text-xl font-bold mb-2">{userDetails.firstName} {userDetails.lastName}</h3>
        <p className="text-gray-600 mb-4">{userDetails.email}</p>
        <div className="flex space-x-4 mb-8">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Chat
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Follow
          </button>
        </div>
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-4">Profile Actions</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200 transition">
              <span className="font-semibold">My Profile</span>
            </li>
            <li className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200 transition">
              <span className="font-semibold">Edit Profile</span>
            </li>
            <li className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200 transition">
              <span className="font-semibold">Reset Password</span>
            </li>
            <li className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200 transition">
              <span className="font-semibold">Logout</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column - Editable Profile Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">My Profile</h3>
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          ) : (
            <button
              onClick={toggleEditMode}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={userDetails.firstName}
              onChange={handleInputChange}
              className={`border p-2 rounded ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              readOnly={!isEditing}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={userDetails.lastName}
              onChange={handleInputChange}
              className={`border p-2 rounded ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              readOnly={!isEditing}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              className={`border p-2 rounded ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              readOnly={!isEditing}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={userDetails.phoneNumber}
              onChange={handleInputChange}
              className={`border p-2 rounded ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              readOnly={!isEditing}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={userDetails.address}
              onChange={handleInputChange}
              className={`border p-2 rounded ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              readOnly={!isEditing}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Date Of Birth</label>
            <input
              type="text"
              name="dateOfBirth"
              value={userDetails.dateOfBirth}
              onChange={handleInputChange}
              className={`border p-2 rounded ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              readOnly={!isEditing}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
