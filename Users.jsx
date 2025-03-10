import React, { useState } from "react";
import { UserX, UserCheck, AlertTriangle } from "lucide-react";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", status: "Active", warnings: 0 },
    { id: 2, name: "Jane Smith", status: "Active", warnings: 1 },
    { id: 3, name: "Alice Johnson", status: "Banned", warnings: 3 },
  ]);

  const handleBan = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: "Banned" } : user));
  };

  const handleUnban = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: "Active", warnings: 0 } : user));
  };

  const handleWarning = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        const newWarnings = user.warnings + 1;
        return { ...user, warnings: newWarnings, status: newWarnings >= 3 ? "Banned" : user.status };
      }
      return user;
    }));
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">User Management</h1>
      <table className="w-full bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Status</th>
            <th className="p-3">Warnings</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-b dark:border-gray-600">
              <td className="p-3">{user.name}</td>
              <td className="p-3 font-bold">{user.status}</td>
              <td className="p-3">{user.warnings}</td>
              <td className="p-3 flex gap-2">
                {user.status === "Active" && (
                  <>
                    <button onClick={() => handleWarning(user.id)} className="bg-yellow-500 text-white p-2 rounded flex items-center gap-1"><AlertTriangle /> Warn</button>
                    <button onClick={() => handleBan(user.id)} className="bg-red-600 text-white p-2 rounded flex items-center gap-1"><UserX /> Ban</button>
                  </>
                )}
                {user.status === "Banned" && (
                  <button onClick={() => handleUnban(user.id)} className="bg-green-600 text-white p-2 rounded flex items-center gap-1"><UserCheck /> Unban</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

  