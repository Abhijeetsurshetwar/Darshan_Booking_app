import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import UserMenu from "../components/Navbar";
import Footer from "../components/Footer";

const UpdateProfile = () => {
  const userInfo = useSelector((state) => state.user.userinfo);
  const username = userInfo?.uname;
  const token = userInfo?.token;

  const [formData, setFormData] = useState({
    newUsername: username || "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [errors, setErrors] = useState({});

  // Password Strength Checker
  const checkPasswordStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (password.match(/[A-Za-z]/) && password.match(/[0-9]/)) return "Moderate";
    if (password.match(/[A-Za-z]/) && password.match(/[0-9]/) && password.match(/[@$!%*?&]/))
      return "Strong";
    return "Weak";
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Password Strength Validation
    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value));
    }
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.newUsername || formData.newUsername.length < 3) {
      newErrors.newUsername = "Username must be at least 3 characters long.";
    }
    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      newErrors.email = "Invalid email format.";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.put(
        `http://localhost:8060/authenticate/update-profile`,
        {
          username: formData.newUsername,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        }
      );
      console.log("Update Response:", response.data);
      setMessage("✅ Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("❌ Failed to update profile. Try again.");
    }
  };

  return (
    <>
      {/* Ensuring Navbar is accessible */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <UserMenu />
      </div>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BkJJxcqYbbL7kCCD7ZXYyuLHJp86n7WqVA&s')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay only for form */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1, // Keeps the overlay below the navbar
          }}
        ></div>

        <div
          style={{
            position: "relative",
            background: "rgba(255, 255, 255, 0.95)",
            padding: "30px",
            borderRadius: "12px",
            maxWidth: "400px",
            textAlign: "center",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            zIndex: 2, // Ensures form is above overlay
          }}
        >
          <h2 style={{ color: "#8B0000", fontFamily: "Georgia, serif" }}>🛠 Update Profile 🛠</h2>
          {message && <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="newUsername"
              placeholder="New Username"
              value={formData.newUsername}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            {errors.newUsername && <p style={errorStyle}>{errors.newUsername}</p>}

            <input
              type="email"
              name="email"
              placeholder="New Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            {errors.email && <p style={errorStyle}>{errors.email}</p>}

            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            {passwordStrength && (
              <p
                style={{
                  color: passwordStrength === "Strong" ? "green" : passwordStrength === "Moderate" ? "orange" : "red",
                  fontSize: "14px",
                  marginTop: "-10px",
                  marginBottom: "10px",
                }}
              >
                Password Strength: {passwordStrength}
              </p>
            )}
            {errors.password && <p style={errorStyle}>{errors.password}</p>}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            {errors.confirmPassword && <p style={errorStyle}>{errors.confirmPassword}</p>}

            <button type="submit" style={buttonStyle}>
              ✅ Update Profile
            </button>
          </form>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 10 }}>
        <Footer />
      </div>
    </>
  );
};

// **Reusable Styles**
const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  background: "#8B0000",
  color: "white",
  border: "none",
  padding: "12px",
  width: "100%",
  borderRadius: "6px",
  fontSize: "18px",
  cursor: "pointer",
  marginTop: "10px",
};

const errorStyle = {
  color: "red",
  fontSize: "14px",
  marginTop: "-8px",
};

export default UpdateProfile;
