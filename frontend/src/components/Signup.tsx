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

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formData;
    const navigate = useNavigate()
    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:2000/register', formData);
            console.log(res)
            console.log('User registered successfully!');
            navigate('/signin')
        } catch (err) {
            console.error(err);
            console.log('Error registering user!');
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: "2rem", marginTop: "2rem" }}>
                <Typography variant="h5" gutterBottom>
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            required
                        />
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
                            Sign Up
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Container>
    );
};

export default SignUp;
