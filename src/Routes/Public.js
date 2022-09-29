import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Login } from './../Halaman/Login';
import { Regis } from './../Halaman/Regis';

export const Public = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Regis/>}/>
                <Route path="/Login" element={<Login/>}/>
                
            </Routes>
        </Router>
    )
}