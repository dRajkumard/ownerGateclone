import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserPlus, FaUser, FaHandshake } from "react-icons/fa";
import "./index.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        {/* Left section: Logo and Brand */}
        <a
          className="navbar-brand d-flex align-items-center logo-container"
          href="#"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAwCAYAAABuZUjcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHMSURBVHgB7ZnxUcIwFMY/Pf+XDcwIdQLjBLoBbABOwHMCHAEnUCdQJ5ANwAl0A8w72oODtE3gvZB6/O4+ONq0/ZGkadoCevTKdApyWZYhdATCWroz8oRd6ezlCfXS2coT2qWzkyeES2cjT4iXPro8YX/po8kTDpc+SP6sYV3hMvQs56vhPdqZRpR9hFDtG5cf7FeDvF2xsa8icF8EASxkpJPLW8hJJ5W3kJVOJm8hL51E3kJHWl2eoCetJk/QlxaXJ6STFpPvIb10rPwV9hDXko6Rr735HrvMPRt8QVe6oqg5Pv+hIZQxLhOsa4+/X8rl2WLgr7EqI2RKk3QVkS53ATkGCOsOfB49IJ7fMjvwGWu3EgP346VyJtsHNfA38xzhz//elWS9Xe28PGgf/mbmZXcIY4Y0XPLHOeR4CyxHWFWIL9eInBGOUd80/Yj9TNHczKFdr6nb3XAByRpnBi5PNes+XG5RMzJssWgrIDkcVvBQ94xVS3HtsuiryycE0RBnZlA+WaW7SjJO4qn51+LHeOVn2gqEiI8QNuuTwiJgghcyHBqsrngLpMGEFIoZxw0y4jSqpKbz4iEztlz43vzBY3WKe8ZDws9nxpXwH6MD+Z6wqgSBAAAAAElFTkSuQmCC"
            alt="Brand Logo"
            className="logoimage"
          />
          <div className="logoTextcontainer">
            <span className="logo-text">Owner Gate</span>
            <span className="sub-text">Real Estate</span>
          </div>
        </a>

        {/* Toggler button for responsiveness */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center section: Menu items */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home Page
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center justify-content-start"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="dropdown-arrow me-2">▼</span> Buy
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center justify-content-start"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="dropdown-arrow me-2">▼</span> Rent
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link " aria-disabled="true">
                Find
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Properties near you
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                New Listing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Auction
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-disabled="true">
                Luxury Properties
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-disabled="true">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right section: Sign up, Sign in, and Button */}
        <div className="d-flex align-items-center ms-auto">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaUserPlus className="me-2" /> Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaUser className="me-2" /> Sign In
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-dark " type="button">
                <FaHandshake className="me-2" /> Partner Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
