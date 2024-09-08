import React from "react";
import CardComponent from "../../components/discovercard/card";

import "./index.css";
import { FaDollarSign, FaHome, FaSortAmountDown } from "react-icons/fa";

const BodyComponent = () => {
  return (
    <div className="container-fluid bodycomponent ">
      <div className="row dashboarrow d-flex  justify-content-center align-items-center">
        <div className="col-md-5 d-flex flex-column  justify-content-center heading">
          <div class="text-container">
            <h1 class="default-font-med">
              Invest in your property by selling, buying or renting
            </h1>
          </div>
          <div class=" d-flex flex-column align-items-start gap-3 discoverbuttoncontainer">
            <button class="btn btn-dark custom-btndashboard" type="button">
              <FaHome className="me-2" /> Sale and Estimate For Your Property
            </button>
            <div class="col-6 d-flex justify-content-center">
              <button class="btn btn-dark custom-btndashboard" type="button">
                <FaSortAmountDown className="me-2" /> Auction
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <CardComponent />
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
