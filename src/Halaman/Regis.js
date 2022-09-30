import React, {useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useSelector,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom"
import userRegisterAction from './../Redux/Regis/RegisAction';
import {Link} from "react-router-dom";



export const Regis = () =>{
  const registerData = useSelector((state)=>state.userRegister)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(()=>{
    dispatch(userRegisterAction.resetForm())

    // eslint-disable-next-line
  },[])

  const handleRegister = (event) => {
    event.preventDefault()

    dispatch(
      userRegisterAction.register(
        registerData.email,
        registerData.password,
        registerData.fullName,
        navigate
      )
    )

  }



    return (
        <div>
            <h3 className='judulhalaman'>Registrasi</h3>
            <Form className='input' onSubmit={handleRegister}>
          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>dispatch(userRegisterAction.setEmail(e.target.value))} />
            
          </Form.Group>
          
          <Form.Group className="mb-3" >
            <Form.Label>FullName</Form.Label>
            <Form.Control type="text" placeholder="Enter FullName" onChange={(e)=>dispatch(userRegisterAction.setFullName(e.target.value))} />
            
          </Form.Group>
    
          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>dispatch(userRegisterAction.setPassword(e.target.value))} />
          </Form.Group>
          
          <Button variant="primary" type="submit" className='tombol'>
            Registrasi
          </Button>
        </Form>

        

        <p>Sudah punya akun? Ayo</p>
        <Link to="/login">Login</Link>
        </div>
      )
}