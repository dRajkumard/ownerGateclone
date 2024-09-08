import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaHome
} from "react-icons/fa";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <div
              className="card text-center card-container"
              style={{ borderRadius: "10px" }}
            >
              <div className="card-body d-flex align-items-start Contact Property">
                <img src="" className="img-custom" />
                <div className="ms-3">
                  <div className="d-flex align-items-start text-start flex-column">
                    <h2 className="card-title">You need a house</h2>
                    <p className="card-text align-items-start ">
                      Tell us your needs, we will give you thousands of
                      suggestions for the dream home.
                    </p>
                  </div>

                  <div className="button-container">
                    <button className="btn btn-dark footerbutton">
                      <FaPhoneAlt className="btn-icon" /> Contact Seller
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div
              className="card text-center card-container"
              style={{ borderRadius: "10px" }}
            >
              <div className="card-body d-flex align-items-center">
                <img src="" className="img-custom" />
                <div className="ms-3">
                  <div className="d-flex align-items-start text-start flex-column">
                    <h2 className="card-title">Sell your house</h2>
                    <p className="card-text">
                      We will connect you to thousands of people who need to buy
                      a home.
                    </p>
                  </div>
                  <div className="button-container">
                    <button className="btn btn-dark footerbutton">
                      <FaHome className="btn-icon" /> Sell Property
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark footernav justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#property">
                Property
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#page">
                Page
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center mt-4">
          <div className="social-icons">
            <a
              href="https://facebook.com"
              className="social-icon"
              aria-label="Facebook"
            >
              <FaFacebookF className="icon" />
            </a>
            <a
              href="https://twitter.com"
              className="social-icon"
              aria-label="Twitter"
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://instagram.com"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://linkedin.com"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="icon" />
            </a>
          </div>
        </div>
        <div className="text-center mt-4 copyright">
          <p>
            Copyright © 2023 Real Estate CP. Designed & Developed by Salina
            Information Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
