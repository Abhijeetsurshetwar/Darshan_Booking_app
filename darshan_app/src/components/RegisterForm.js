import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    email: "",
    contactNo: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      const reqInfo = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uname: formData.userName,
          password: formData.password,
          role: "Devotee",
          age: formData.age,
          gender: formData.gender,
          email: formData.email,
          contactNo: formData.contactNo,
        }),
      };

      fetch("http://localhost:8080/devotees/insertDevotee", reqInfo)
        .then((res) => {
          if (res.status === 200) {
            navigate("/login");
          } else {
            alert("Registration failed. Please try again.");
          }
          
        })
        .catch((err) => {
          console.error("Error:", err);
          alert("An error occurred. Please try again later.");
        });
    } else {
      alert("Passwords do not match. Please try again.");
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
      style={{ background: "linear-gradient(to bottom right, #fef3c7, #e9d5ff)" }}
    >
      <div
        className="bg-white p-4 rounded-lg shadow-lg"
        style={{ width: "450px", backdropFilter: "blur(5px)" }}
      >
        <div className="text-center mb-4">
          <UserPlus
            className="mb-2"
            style={{ width: "4rem", height: "4rem", color: "#d97706" }}
          />
          <h2 className="h4 text-dark fw-bold">Create Account</h2>
          <p className="text-muted">Register for darshan booking</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">User Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Age</label>
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

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Gender</label>
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
            <label className="form-label fw-semibold text-dark">Email</label>
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
            <label className="form-label fw-semibold text-dark">Contact Number</label>
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
            <label className="form-label fw-semibold text-dark">Password</label>
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
            <label className="form-label fw-semibold text-dark">Confirm Password</label>
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
      </div>
    </div>
  );
};

export default RegisterForm;
