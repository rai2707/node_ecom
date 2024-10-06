import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./Signin";
import { Button } from "@mui/material";
import axios from "axios";

const Navbar = () => {
    const navigate=useNavigate()
  const [formData, setFormData] = useState('');
    const handleSubmit = (e: any) => {
        try {
            const res = axios.post('http://localhost:2000/logout')
            console.log(res);
            navigate('/signin')
        } catch (error) {
            
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Navbar</h1>
            <Button variant="contained" color="primary" type="submit">
              Logout
            </Button>
            </form>
        </div>
    )
}
export default Navbar;