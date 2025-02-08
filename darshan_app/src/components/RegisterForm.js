import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";

const RegisterForm = () => {
  const navigate = useNavigate();

  // Initialize useForm hook
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm();

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
      const res = await fetch("http://localhost:8061/authenticate/signup", reqInfo);
      if (res.ok) {
        navigate("/login");
      } else {
        const errorData = await res.json(); // Convert response to JSON
        alert(errorData.message || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred. Please try again later.");
    }
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">User  Name</label>
            <input
              type="text"
              {...register("userName", { 
                required: "User  Name is required", 
                minLength: {
                  value: 3,
                  message: "User  Name must be at least 3 characters long"
                },
                maxLength: {
                  value: 20,
                  message: "User  Name cannot exceed 20 characters"
                }
              })}
              className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
            />
            {errors.userName && <div className="invalid-feedback">{errors.userName.message}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Email</label>
            <input
              type="email"
              {...register("email", { 
                required: "Email is required", 
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address"
                }
              })}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Password</label>
            <input
              type="password"
              {...register("password", { 
                required: "Password is required", 
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long"
                },
                validate: {
                  hasNumber: value => /[0-9]/.test(value) || "Password must contain at least one number",
                  hasUpperCase: value => /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
                  hasLowerCase: value => /[a-z]/.test(value) || "Password must contain at least one lowercase letter",
                }
              })}
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", { 
                required: "Please confirm your password",
                validate: value => value === watch('password') || "Passwords do not match"
              })}
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
            />
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
          </div>

          <button type="submit" className="btn btn-warning w-100" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;