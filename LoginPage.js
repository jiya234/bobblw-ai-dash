import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // CSS file import

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successful!");
    navigate("/dashboard");
  };

  return (  // 🔹 Yeh return add kar diya
    <div className="login-container">
      {/* Left Side (Form) */}
      <div className="login-form">
        <h2>Welcome Back!</h2>
        <p>Enter to get unlimited access to data & information.</p>
        <form onSubmit={handleLogin}>  {/* 🔹 onSubmit ka event handler fix kiya */}
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          
          <label>Password</label>
          <input type="password" placeholder="Enter password" required />


          <button type="submit">Log In</button>

        

          <button className="google-btn">Sign up with Google</button>

          <p className="register-text">
            Don’t have an account? <a href="/">Register here</a>
          </p>
        </form>
      </div>

      {/* Right Side (Abstract Background) */}
      <div className="login-bg">
        
      </div>
    </div>
  );
};

export default LoginPage;

  
