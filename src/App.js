
import React from 'react';
import logo from './assets/svg/logo.svg';
import './App.css';
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Container fluid>
        <img src={logo} className="App-logo" alt="logo" />
          <Row>
            <Col md={12}>
              <h1>Home Page</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
