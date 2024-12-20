import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import data from '../Data.json'; // Importing the JSON file
import './Header.css';

const Header = () => {
    return (
        <div className='header-main'>
            <Navbar expand="lg" className="bg-danger">
                <Container>
                    <Navbar.Brand href="#home">YumDrop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/foodlist">Home</Nav.Link>
                            {/* <Nav.Link as={Link} to="/user">User</Nav.Link> */}
                            <NavDropdown title="Cuisines" id="collapsible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/foodlist">All Cuisines</NavDropdown.Item>
                                {data.food.map(cuisine => (
                                    <NavDropdown.Item key={cuisine.id} as={Link} to={`/cuisine/${cuisine.id}`}>
                                        {cuisine.cuisine}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
