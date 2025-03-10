import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        {/* Analytics Overview */}
        <h2 className="dashboard-title">Analytics Overview</h2>
        <div className="stats-grid">
          <div className="stats-card">
            <h3>Total Users</h3>
            <p>12,458</p>
          </div>
          <div className="stats-card">
            <h3>Flagged Content</h3>
            <p>23</p>
          </div>
          <div className="stats-card">
            <h3>Active Users</h3>
            <p>892</p>
          </div>
          <div className="stats-card">
            <h3>Reported Issues</h3>
            <p>15</p>
          </div>
        </div>

        {/* Recent Flagged Content */}
        <h2 className="dashboard-title">Recent Flagged Content</h2>
        <div className="table-container">
          <table className="content-table">
            <thead>
              <tr>
                <th>Content</th>
                <th>User</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Inappropriate comment</td>
                <td>john_doe</td>
                <td>2024-03-10</td>
                <td>Pending</td>
                <td>
                  <button className="btn btn-blue">Review</button>
                  <button className="btn btn-red">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Spam post</td>
                <td>jane_smith</td>
                <td>2024-03-09</td>
                <td>Pending</td>
                <td>
                  <button className="btn btn-blue">Review</button>
                  <button className="btn btn-red">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
