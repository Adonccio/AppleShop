'use client'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'reactstrap';

export default function Navigationbar () {
    return (
    <Navbar expand="lg " className="bg-body-tertiary ">
        <Container >
          <Navbar.Brand href="/">Apple Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/products"> Produtos</Nav.Link>
              <Nav.Link href="/cart">Carrinho</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>)
}