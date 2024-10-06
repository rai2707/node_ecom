import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:2000/login', formData);
      navigate('/products')
    } catch (err) {
      console.error(err);
    }
  };
  const handleReturnSignup =() =>{
    navigate('/')
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "2rem", marginTop: "2rem" }}>
        <Typography variant="h5" gutterBottom>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <Button fullWidth variant="contained" color="primary" type="submit">
              Sign In
            </Button>
          </Stack>
        </form>
        <Typography gutterBottom>
          Don't have an accoutn? <Button onClick={handleReturnSignup}>Sign Up</Button>
        </Typography>
      </Paper>
      
    </Container>
  );
};

export default SignIn;
