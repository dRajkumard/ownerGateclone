import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ButtonGroupComponent from "../ButtonContainer";
import "./card.css";
const CardComponent = () => {
  const [activeButton, setActiveButton] = useState("All");
  const buttonLabels = ["All", "Buy", "Rent", "Sale", "Find"];

  const handleButtonClick = (label) => {
    setActiveButton(label);
  };
  return (
    <div className="discovercard">
      <div
        className="card-header"
        style={{
          backgroundColor: "rgba(244, 244, 244, 1)",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "none"
        }}
      >
        <ul className="nav nav-tabs card-header-tabs">
          {buttonLabels.map((label) => (
            <li
              className="nav-item"
              key={label}
              style={{ marginRight: "10px" }}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleButtonClick(label);
                }}
                className={`cardtop nav-link ${
                  activeButton === label ? "active" : ""
                }`}
                style={{
                  backgroundColor: activeButton === label ? "#6e55ff" : "white",
                  color: activeButton === label ? "white" : "black",
                  padding: "15px 15px",
                  border: "none",
                  boxShadow:
                    activeButton === label
                      ? "0 4px 8px rgba(0, 0, 0, 0.1)"
                      : "none",
                  transition: "background-color 0.3s, color 0.3s"
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="card text-center">
        <div className="card-body " style={{ padding: "30px" }}>
          <form
            className="d-flex flex-column align-items-start"
            style={{ width: "100%" }}
            role="search"
          >
            <ButtonGroupComponent />
            <div className="input-group mb-3" style={{ width: "100%" }}>
              <input
                className="form-control"
                type="search"
                placeholder="Enter key words to search..."
                aria-label="Search"
                style={{ borderRadius: "10px 0 0 10px" }}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ borderRadius: "0 10px 10px 0" }}
              >
                <FaSearch />
              </button>
            </div>

            {/* Dropup 2 */}
            <div className="btn-group dropup mb-3" style={{ width: "100%" }}>
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  color: "#000",
                  padding: 10
                }}
              >
                <span>Property Types</span>
              </button>
              <ul
                className="dropdown-menu"
                style={{ backgroundColor: "white", width: "100%" }}
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
              </ul>
            </div>

            <div className="btn-group dropup mb-3" style={{ width: "100%" }}>
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  color: "#000",
                  padding: 10
                }}
              >
                Cities
              </button>
              <ul
                className="dropdown-menu"
                style={{ backgroundColor: "white", width: "100%" }}
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
              </ul>
            </div>

            {/* Primary button */}
            <button
              type="button"
              className="btn "
              style={{ width: "100%", background: "#6e55ff", color: "white" }}
            >
              Search
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
