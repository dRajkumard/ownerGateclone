import React from "react";
import Emptybox from "../../asserts/images/empty-box.19553f7.png";
import "./index.css";

const DiscoverProperty = () => {
  return (
    <div className="container discovercontainer">
      <div className="text-center mb-4">
        <h1 className="discover">Discover Property by City</h1>
        <p className="lead-text">
          Search for property for you through our city listings
        </p>
      </div>
      <div className="card text-center  ">
        <div className="discovercard">
          <hr className="custom-hr" />
          <div className="d-flex justify-content-center mt-5">
            <img
              src={Emptybox}
              className="card-img-top "
              id="img-customdiscover"
              alt="Property"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">No Cities Available</h5>
            <p className="card-text">We can't find any city</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverProperty;
