// import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Login = () =>{
    return(
        <div>
            <h3 className='judulhalaman'>Login</h3>
            <Form className='input'>
          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  />
            
          </Form.Group>
          
    
          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit" className='tombol'>
            Login
          </Button>
        </Form>
        </div>
    )
    
}