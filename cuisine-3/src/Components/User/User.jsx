import React from "react";
import UserData from "./Data.json";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const User = () => {
  return (
    <div>
      <Container>
        <h2>User</h2>
        <Row>
          {UserData.food.map(user => (
            <Col key={user.id} xs={6} md={3}>
              <div>
               <p>{user.id}</p>
                <h3>{user.cuisine}</h3>
                <h3>{user.name}</h3>
                <Link to={`details/${user.id}`}>
                  <button variant="primary">See Food</button>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default User;
