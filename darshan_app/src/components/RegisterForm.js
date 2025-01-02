import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    email: '',
    contactNo: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password === formData.confirmPassword){

      const reqInfo ={
        method:"POST",
        headers:{"Content-Type" : "application/json"},
        body:JSON.stringify({
          uname  : formData.userId,
          password:formData.password,
          role:"Devotee",
          age:formData.age,
          gender:formData.gender,
          email:formData.email,
          contactNo:formData.contactNo
          
        })
      }
      fetch("http://localhost:8080/insertDevotee",reqInfo)
      .then((res)=>{
        console.log(res);
        navigate('/login');
      })
    } else{
      navigate('/RegisterForm')
    }
  };  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: 'linear-gradient(to bottom right, #fef3c7, #e9d5ff)',
      }}
    >
      <div
        className="bg-white p-4 rounded shadow-lg"
        style={{
          width: '24rem',
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <div className="text-center mb-4">
          <UserPlus
            style={{
              width: '4rem',
              height: '4rem',
              color: '#d97706',
              marginBottom: '0.5rem',
            }}
          />
          <h2 className="h4 fw-bold" style={{ color: '#78350f' }}>
            Create Account
          </h2>
          <p style={{ color: '#92400e' }}>Register for darshan booking</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">User ID</label>
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col">
              <label className="form-label">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="1"
                max="120"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contact Number</label>
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: '#d97706',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
            }}
          >
            Register
          </button>
        </form>
        <p>
          {JSON.stringify(formData)}
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
