import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle } from 'lucide-react';

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    email: '',
    contactNo: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-purple-100">
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl w-96">
        <div className="flex flex-col items-center mb-6">
          <UserCircle className="w-16 h-16 text-amber-700 mb-2" />
          <h2 className="text-2xl font-bold text-amber-900">Complete Your Profile</h2>
          <p className="text-amber-800">Please provide your details</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-amber-900">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-amber-200 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2 border"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-900">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-amber-200 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2 border"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-900">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-amber-200 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2 border"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-900">Contact Number</label>
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-amber-200 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2 border"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-700 text-white rounded-md py-2 px-4 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Save Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsForm;