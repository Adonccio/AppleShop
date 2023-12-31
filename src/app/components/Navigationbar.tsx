'use client'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'reactstrap';
import { AiFillApple } from 'react-icons/ai'

export default function Navigationbar () {
    return (<div className="navdiv">
      
      <Navbar expand="lg " className="bg-body-tertiary navbar">
          <Container >
            <Navbar.Brand className='logo' href="/">AppleShop<AiFillApple/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='nav-items' id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/products"> Produtos</Nav.Link>
                <Nav.Link href="/cart">Carrinho</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>)
}