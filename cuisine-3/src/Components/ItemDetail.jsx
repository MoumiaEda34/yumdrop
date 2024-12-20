import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../Data.json'; // Importing the JSON file
import { Button, Container, Row, Col } from 'react-bootstrap'; // Importing Bootstrap components

const ItemDetail = () => {
  const { cuisineId, itemId } = useParams();
  const cuisine = data.food.find(c => c.id === parseInt(cuisineId));
  const item = cuisine.items.find(i => i.id === itemId);
  const [quantity, setQuantity] = useState(1); // Initial quantity set to 1

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleOrderNow = () => {
    alert(`Order placed for ${quantity} ${item.name}(s) at $${(item.price * quantity).toFixed(2)}`);
  };

  return (
    <Container
      fluid
      className="item-details p-4 text-white"
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textShadow: '1px 1px 2px black',
      }}
    >
      <Row>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h1 className="display-4">{item.name}</h1>
          <p>{item.description}</p>
          <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>

          <div className="d-flex align-items-center my-3">
            <Button variant="outline-light" onClick={decreaseQuantity} className="mr-3"> - </Button>
            <span className="h4"> {quantity} </span><br/>
            <Button variant="outline-light" onClick={increaseQuantity} className="ml-3"> + </Button>
          </div>

          <p><strong>Total Price:</strong> ${(item.price * quantity).toFixed(2)}</p>

          <Button
            variant="success"
            onClick={handleOrderNow}
            className="mt-3"
            size="lg"
          >
            Order Now
          </Button>
        </Col>
        <Col md={6} className="text-center">
          <img src={item.image} alt={item.name} className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
