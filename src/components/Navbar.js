import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <h3>React Boilerplate</h3>
      <div>
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          to="/other"
        >
          Other
        </NavLink>
      </div>
    </div>
  );
}
