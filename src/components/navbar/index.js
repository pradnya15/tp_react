import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

class TopHeader extends Component {
  render() {
    return (
      <Navbar>
        <div className="container-fluid">
        <div className="navbar-header">
          <a href="#pablo" className="navbar-brand">Typography</a>
          <button type="button" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          </div>
          </div>
      </Navbar>
      );
    }
}

export default TopHeader;
