import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const Profil = () =>{
    return(
        <div>

            <h2 className="mb-5"> Welcome, Nama </h2>

        
        <Card className='cardnya mb-5' style={{ width: '18rem', backgroundImage: 'linear-gradient(to left,#9941E3,#E37C41,#E341A6)',marginTop:'100px', margin: 'auto', borderRadius: '10px' }} >

                        <Card.Body>
                            <Card.Title className='sama'>Data Anda</Card.Title>
                            <Card.Text className='sama'>
                            Email : 
                            </Card.Text>
                            <Card.Text className='sama'>
                            Nama Lengkap : 
                            </Card.Text>
                            <Card.Text className='sama'>
                                Password : 
                            </Card.Text>
                            <Button variant="primary"  className='mt-4 buttoncard' style={{ backgroundImage: 'linear-gradient(to right,#4863A0,#151B54)', border: 'none' }}>Logout</Button>
                            
                        </Card.Body>
        </Card>

        </div>
    )
    
}