import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import welcomeImage from '../assets/welcome-image.jpg';

const HomePage = ({ onShopNowClick }) => {
  return (
    <div className="homepage">
      <Image src={welcomeImage} fluid className="mb-3" />
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Featured Product</Card.Title>
          <Card.Text>
            Check out our latest products and promotions!
          </Card.Text>
        </Card.Body>
      </Card>
      <Button variant="primary" className="shadow" onClick={onShopNowClick}>Shop Now</Button>
    </div>
  );
};

export default HomePage;