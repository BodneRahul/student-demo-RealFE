import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* Brand and Links */}
        <Link className="navbar-brand" to="/">Personal Information</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Personal Information Section */}
            <li className="nav-item d-flex align-items-center">
              <Link className="nav-link" to="/">Users</Link>
              <Link className="btn btn-outline-light ms-2" to="/addUser">Add User</Link>
            </li>

            {/* Patient Detail Section */}
            <li className="nav-item d-flex align-items-center ms-4">
              <Link className="nav-link" to="/patientDetails">Patient Details</Link>
              <Link className="btn btn-outline-light ms-2" to="/addPatient">Add Patient</Link>
            </li>
          </ul>

          {/* Responsive Toggle Button */}
          <button className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
