import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
import Users from "./pages/Users";
import FlaggedContent from "./pages/FlaggedContent";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import LoginPage from "./pages/LoginPage";
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import "./App.css";

const BACKEND_URL = "http://192.168.76.116:8000";

function AppLayout() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const location = useLocation(); 

  return (
    <div className="app-container">
      {/* ✅ Sidebar sirf tab dikhana jab Login aur HomePage NA ho */}
      {location.pathname !== "/" && location.pathname !== "/login" && (
        <Sidebar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      )}

      {/* ✅ Main Content Area */}
      <div className="main-content">
        <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <main className="content-area">
          <Routes>
            <Route path="/" element={<HomePage />} />  
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/flagged" element={<FlaggedContent />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
