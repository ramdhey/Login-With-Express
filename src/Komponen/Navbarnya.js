import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



import logonavbar from './image/wolf.png'


export const Navbarnya = () => {
    return(
        <Navbar style={{ backgroundColor: '#ff000000' }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logonavbar} alt="logo" width="100" height="100" className="d-inline-block align-top" />{'   '}
            
          </Navbar.Brand>
          <Navbar.Brand className="namenya text-white">
            Rama Dhea Yudhistira
            
          </Navbar.Brand>
          
          
        </Container>
      </Navbar>
    )
}