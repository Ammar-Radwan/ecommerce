import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carts({ imageSrc, price, description }) {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={imageSrc} height="200px" width="200px" />
      <Card.Body>
        <Card.Title>{price}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default Carts;
