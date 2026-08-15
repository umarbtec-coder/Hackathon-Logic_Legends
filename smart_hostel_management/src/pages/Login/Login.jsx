import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      // Hit Backend on Port 5000
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );

      if (response.data.success || response.status === 200) {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }
        if (response.data.user) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }

        alert("Login successful!");
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        setError(
          error.response.data.message || "Invalid email or password."
        );
      } else if (error.request) {
        setError(
          "Cannot connect to backend. Make sure Node.js server is running on port 5000."
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-glow login-glow-one"></div>
      <div className="login-glow login-glow-two"></div>

      <div className="login-container">
        {/* BRAND */}
        <div className="login-brand">
          <div className="login-logo">
            <Building2 size={25} />
          </div>
          <div>
            <h2>SmartHostel</h2>
            <span>Smart Hostel Management</span>
          </div>
        </div>

        {/* LOGIN CARD */}
        <div className="login-card">
          <div className="login-card-header">
            <div className="login-shield">
              <ShieldCheck size={25} />
            </div>
            <h1>Welcome Back</h1>
            <p>Login to access your SmartHostel account</p>
          </div>

          {/* ERROR */}
          {error && <div className="login-error">{error}</div>}

          {/* FORM */}
          <form onSubmit={handleSubmit}>
            {/* EMAIL */}
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <Mail size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <div className="password-label">
                <label>Password</label>
                <a href="#forgot" onClick={(e) => e.preventDefault()}>
                  Forgot Password?
                </a>
              </div>

              <div className="input-wrapper">
                <Lock size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* REMEMBER ME */}
            <div className="remember-row">
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          <div className="login-divider">
            <span>SECURE LOGIN</span>
          </div>

          <div className="register-text">
            Login using your SmartHostel account
          </div>
        </div>

        {/* FOOTER */}
        <div className="login-footer">
          <ShieldCheck size={14} />
          <span>Your information is secure and protected</span>
        </div>
      </div>
    </div>
  );
};

export default Login;