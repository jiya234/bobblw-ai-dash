import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="hero">
        <h1>
          AI-Powered Content Moderation <span className="highlight">for the Modern Web</span>
        </h1>
        <p>
          Protect your platform with advanced AI that automatically detects and filters inappropriate content in real-time.
        </p>
        <div className="hero-buttons">
          <button className="get-started" onClick={() => navigate("/login")}>
            Get Started
          </button>
        </div>
      </header>

      <section className="features">
        <h2>Comprehensive Content Moderation Solutions</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Real-time Protection</h3>
            <p>Instant content analysis and filtering to keep platforms safe 24/7.</p>
          </div>
          <div className="feature-card">
            <h3>Advanced AI</h3>
            <p>State-of-the-art machine learning models for content moderation.</p>
          </div>
          <div className="feature-card">
            <h3>Lightning Fast</h3>
            <p>Processes thousands of content pieces per second with high accuracy.</p>
          </div>
          <div className="feature-card">
            <h3>Multi-language Support</h3>
            <p>Detect inappropriate content across 100+ languages and dialects.</p>
          </div>
          <div className="feature-card">
            <h3>Detailed Analytics</h3>
            <p>Comprehensive reporting and insights on content moderation activities.</p>
          </div>
          <div className="feature-card">
            <h3>Privacy First</h3>
            <p>Enterprise-grade security with data privacy compliance built-in.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h3>Bobble AI</h3>
        <p>Leading the future of content moderation with advanced AI technology.</p>
        <div className="copyright">
          <p>&copy; 2025 Bobble AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
