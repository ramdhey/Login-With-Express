import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Profil } from "../Halaman/Profil";

export const Private = () => {
    return(
        <Router>
            <Routes>
                <Route path="/Profil" element={<Profil/>}/>
            </Routes>
        </Router>
    )
}