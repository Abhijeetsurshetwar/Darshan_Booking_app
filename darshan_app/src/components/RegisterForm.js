import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserPlus } from "lucide-react";
import { color } from "chart.js/helpers";

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // Use watch to get the current value of the password field
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    const reqInfo = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.userName,
        password: data.password,
        role: "ROLE_USER",
        email: data.email,
      }),
    };

    try {
      const res = await fetch("http://localhost:8060/authenticate/signup", reqInfo);
      if (res.ok) {
        setSuccessMessage("Registered successfully! Now go to Login.");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        const errorData = await res.json();
        alert(errorData.message || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: "linear-gradient(to bottom right, #fef3c7, #e9d5ff)" }}>
      <div className="bg-white p-4 rounded-lg shadow-lg" style={{ width: "450px", backdropFilter: "blur(5px)" }}>
        <div className="text-center mb-4">
          <UserPlus className="mb-2" style={{ width: "4rem", height: "4rem", color: "#d97706" }} />
          <h2 className="h4 text-dark fw-bold">Create Account</h2>
          <p className="text-muted">Register for darshan booking</p>
        </div>

        {successMessage && (
          <div className="alert alert-success text-center" role="alert">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">User  Name</label>
            <input
              type="text"
              {...register("userName", {
                required: "User  Name is required",
                minLength: { value: 3, message: "Must be at least 3 characters" },
                maxLength: { value: 20, message: "Cannot exceed 20 characters" },
              })}
              className={`form-control ${errors.userName ? "is-invalid" : ""}`}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Must be at least 6 characters" },
                validate: {
                  hasNumber: (value) => /[0-9]/.test(value) || "Must contain at least one number",
                  hasUpperCase: (value) => /[A-Z]/.test(value) || "Must contain at least one uppercase letter",
                  hasLowerCase: (value) => /[a-z]/.test(value) || "Must contain at least one lowercase letter",
                },
              })}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === watch("password") || "Passwords do not match", // Use watch to get the current password value
              })}
              className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
            />
          </div>

          <button type="submit" className="btn btn-warning w-100">Register</button>
        </form>

        <div className="text-center mt-3">
          <p className="mb-0">
            Already have an account? <Link to="/login" className="text-warning fw-semibold">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;