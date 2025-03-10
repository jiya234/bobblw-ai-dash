// Sidebar.js
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#096267] text-white p-5">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <ul className="mt-4">
        <li>
          <Link to="/dashboard" className="block py-2 hover:bg-[#054f48]">Dashboard</Link>
        </li>
        <li>
          <Link to="/users" className="block py-2 hover:bg-[#054f48]">Users</Link>
        </li>
        <li>
          <Link to="/analytics" className="block py-2 hover:bg-[#054f48]">Analytics</Link>
        </li>
        <li>
          <Link to="/settings" className="block py-2 hover:bg-[#054f48]">Settings</Link>
        </li>
        <li>
          <button className="block py-2 mt-4 bg-red-500 hover:bg-red-600 text-white w-full">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
