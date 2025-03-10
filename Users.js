// Users.js
import React, { useState } from "react";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", status: "Active", warnings: 0 },
    { id: 2, name: "Jane Smith", status: "Active", warnings: 1 },
    { id: 3, name: "Alice Johnson", status: "Banned", warnings: 3 },
  ]);

  const handleWarn = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, warnings: user.warnings + 1 } : user
      )
    );
  };

  const handleBan = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: "Banned" } : user
      )
    );
  };

  const handleUnban = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: "Active", warnings: 0 } : user
      )
    );
  };

  return (
    <div className="users-container">
      <h1>User Management</h1>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Warnings</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className={user.status === "Banned" ? "banned" : ""}>
              <td>{user.name}</td>
              <td>{user.status}</td>
              <td>{user.warnings}</td>
              <td>
                {user.status !== "Banned" ? (
                  <>
                    <button className="warn-btn" onClick={() => handleWarn(user.id)}>
                      ⚠ Warn
                    </button>
                    <button className="ban-btn" onClick={() => handleBan(user.id)}>
                      ❌ Ban
                    </button>
                  </>
                ) : (
                  <button className="unban-btn" onClick={() => handleUnban(user.id)}>
                    ✅ Unban
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
