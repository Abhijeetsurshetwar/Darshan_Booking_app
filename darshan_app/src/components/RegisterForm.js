import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate('/login');
      const reqInfo ={
        method:"POST",
        headers:{"Content-Type" : "application/json"},
        body:JSON.stringify({
          uname  : formData.userId,
          password:formData.password,
          role:"Devotee"
        })
      }
      fetch("http://localhost:8080/insertUser",reqInfo)
      .then((res)=>{
          console.log(res);
          navigate('/login');
      })
    // }
    // else{
    //   navigate('/register');

    // }
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
          <div className="mb-3">
            <label
              className="form-label"
              style={{ fontSize: '0.875rem', color: '#78350f' }}
            >
              User ID
            </label>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              className="form-control"
              style={{
                borderColor: '#fde68a',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
              }}
              required
            />
          </div>

          <div className="mb-3">
            <label
              className="form-label"
              style={{ fontSize: '0.875rem', color: '#78350f' }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              style={{
                borderColor: '#fde68a',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
              }}
              required
            />
          </div>

          <div className="mb-3">
            <label
              className="form-label"
              style={{ fontSize: '0.875rem', color: '#78350f' }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
              style={{
                borderColor: '#fde68a',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
              }}
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
