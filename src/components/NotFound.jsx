import React from 'react';
import { Container, Row, Col, Image, Button, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NotFound.css';
import errorImage from '../assets/error.jpg'; // Adjust the path as needed

const NotFound = () => {
  return (
    <Container className="not-found">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="text-danger">404 - Not Found</h1>
          <p className="text-muted">Oops! The page you are looking for does not exist.</p>
          <NavLink href="/">
            <Button variant="primary">Go to Homepage</Button>
          </NavLink>
        </Col>
        <Col md={6}>
          <Image src={errorImage} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;