// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'; // Optional: For custom styles

const Sidebar = () => {
  return (
    <div>
    <div className="sidebar">
      <h2>Hotel Management</h2>
      <ul>
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <li><Link to="/Booking">Bookings</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/guests">Guests</Link></li>
        <li><Link to="/staff">Staff</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
