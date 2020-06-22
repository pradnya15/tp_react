import React, { Component } from "react";
import logo from '../assets/svg/login_dashboard.svg';
import { Container, Row, Col } from "react-bootstrap";

class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={6}>
              <h3><strong>The collections management platform for your organisation</strong></h3>
              <p>Manage your collections across accounting, marketing, and sales teams.</p>
              <img src={logo} className="img-responsive" alt="TimePay - Receivable Management Software" />
           </Col>
            <Col md={6}>
              <h1 className="text-center">Login</h1>              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
