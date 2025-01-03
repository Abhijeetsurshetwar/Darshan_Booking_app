import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    confirmPassword: '',
<<<<<<< Updated upstream
    age: '',
    gender: '',
    email: '',
    contactNo: ''
=======
    age:0,
    gender:'',
    contactNo:'',
    email:''
>>>>>>> Stashed changes
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< Updated upstream
    if(formData.password === formData.confirmPassword){

=======
>>>>>>> Stashed changes
      const reqInfo ={
        method:"POST",
        headers:{"Content-Type" : "application/json"},
        body:JSON.stringify({
          uname  : formData.userName,
          password:formData.password,
          role:"Devotee",
<<<<<<< Updated upstream
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
=======
          age : formData.age,
          gender: formData.gender,
          contactNo : formData.contactNo,
          email : formData.email
        })
      }
      fetch("http://localhost:8080/devotees/insertDevotee",reqInfo)
      .then((res)=>{
          if(res.status === 200){

            navigate('/login');
          }
          else{
            navigate('/RegisterForm');
          }
>>>>>>> Stashed changes
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
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(to bottom right, #fef3c7, #e9d5ff)' }}>
      <div className="bg-white p-4 rounded-lg shadow-lg" style={{ width: '450px', backdropFilter: 'blur(5px)' }}>
        <div className="text-center mb-4">
          <UserPlus className="mb-2" style={{ width: '4rem', height: '4rem', color: '#d97706' }} />
          <h2 className="h4 text-dark fw-bold">Create Account</h2>
          <p className="text-muted">Register for darshan booking</p>
        </div>

<<<<<<< Updated upstream
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">User ID</label>
              <input
                type="text"
                name="userId"
                value={formData.userId}
=======
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold text-dark">User Name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
>>>>>>> Stashed changes
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

<<<<<<< Updated upstream
            <div className="col">
              <label className="form-label">Age</label>
=======
            <div className="col-md-6">
              <label className="form-label fw-semibold text-dark">Age</label>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <label className="form-label">Gender</label>
=======
            <label className="form-label fw-semibold text-dark">Gender</label>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <label className="form-label">Email</label>
=======
            <label className="form-label fw-semibold text-dark">Email</label>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <label className="form-label">Contact Number</label>
=======
            <label className="form-label fw-semibold text-dark">Contact Number</label>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <label className="form-label">Password</label>
=======
            <label className="form-label fw-semibold text-dark">Password</label>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <label className="form-label">Confirm Password</label>
=======
            <label className="form-label fw-semibold text-dark">Confirm Password</label>
>>>>>>> Stashed changes
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Register
          </button>
        </form>
        <p>{JSON.stringify(formData)}</p>
      </div>
    </div>
  );
};

export default RegisterForm;