// import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Regis = () =>{
    return (
        <div>
            <h3 className='judulhalaman'>Registrasi</h3>
            <Form className='input'>
          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  />
            
          </Form.Group>
          
          <Form.Group className="mb-3" >
            <Form.Label>FullName</Form.Label>
            <Form.Control type="text" placeholder="Enter FullName" />
            
          </Form.Group>
    
          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit" className='tombol'>
            Registrasi
          </Button>
        </Form>
        </div>
      )
}