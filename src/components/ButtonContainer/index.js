import React, { useState } from "react";
import "./index.css";

const ButtonGroupComponent = () => {
  const [activeButton, setActiveButton] = useState(null);

  const buttonLabels = ["Commercial", "Residential", "Other"];

  return (
    <div className="button-group mb-3">
      {" "}
      {buttonLabels.map((label, index) => (
        <button
          key={index}
          className={`btn buttonlabel ${
            activeButton === label ? "active" : ""
          }`}
          onClick={() => setActiveButton(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroupComponent;
