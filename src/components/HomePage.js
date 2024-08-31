import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Card, Carousel, Col, Container, Form, Row } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
  return (
    <Container>
      <header className="d-flex justify-content-between align-items-center my-4">
        <h1>SALON-X</h1>
        <div>
          <Form.Control as="select" className="d-inline w-auto">
            <option>Banglore</option>
            <option>Mumbai</option>
          </Form.Control>
          <Form.Control type="search" placeholder="Search for salon, services..." className="d-inline w-auto mx-2" />
          <Button variant="outline-primary">Cart</Button>
          <Button variant="outline-primary" className="mx-2">James</Button>
        </div>
      </header>
      
      <Carousel className="mb-4">
        <Carousel.Item>
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
          <Carousel.Caption>
            <h3>Get upto 50% OFF</h3>
            <p>Here is a distinction between a beauty salon and a hair salon and although many small.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2>What are you looking for?</h2>
      <Row className="mb-4">
        {['Hair Services', 'Nail Services', 'Skincare', 'Waxing and Hair Removal', 'Makeup Services'].map(service => (
          <Col key={service} sm={6} md={4} lg={2} className="mb-3">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>{service}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Form.Group className="mb-4">
        <Form.Check type="checkbox" label="Filter" />
        <Form.Check type="checkbox" label="Short" />
        <Form.Check type="checkbox" label="4+ ratings" />
        <Form.Check type="checkbox" label="Offer" />
      </Form.Group>

      <h2>Top Rated Salons</h2>
      <Row className="mb-4">
        {['LuxeLocks Salon & Spa', 'Serenity Strands Salon', 'VelvetVibe Salon Lounge', 'Lumina Lux'].map(salon => (
          <Col key={salon} sm={6} md={4} lg={3} className="mb-3">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>{salon}</Card.Title>
                <Card.Text>
                  <p>Address: Some Address</p>
                  <p>Rating: 4.25</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
