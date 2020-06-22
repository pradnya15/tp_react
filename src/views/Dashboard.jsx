import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={12}>
            <h1 className="text-center">Dashboard</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
