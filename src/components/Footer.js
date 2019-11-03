import React from "react";
import { Link } from "gatsby";

import logo from "../img/br-logo.png";
import linkedin from "../img/social/linkedin.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer background-primary has-text-white-ter rounded-corners">
        <div className="has-text-centered">
          <img
            src={logo}
            alt="BeResourceful"
            style={{ width: "5em", height: "6em" }}
          />
        </div>
        <div className="content has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <Link to="/" className="navbar-item">
                  Home
                </Link>

                <Link className="navbar-item" to="/aboutus">
                  About
                </Link>

                <Link className="navbar-item" to="/cases">
                  Case
                </Link>

                <Link className="navbar-item" to="/product">
                  Product
                </Link>
              </div>
              <div className="column is-4">
                <Link className="navbar-item" to="/blog">
                  Latest Stories
                </Link>

                <Link className="navbar-item" to="/aboutus#contact">
                  Contact
                </Link>
              </div>
              <div className="column is-4">
                <p>
                  BeResourceful is developing an IoT solution to monitor
                  building components to detect damages early so the building
                  owner can save resources.
                </p>
                <p>
                  <b>Address: </b>
                  Elektrovej 331, 2800 Kongens Lyngby, Denmark
                </p>
                <p>
                  <b>Contact: </b>
                  +45 42 83 87 52 - jeppe@beresourceful.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
