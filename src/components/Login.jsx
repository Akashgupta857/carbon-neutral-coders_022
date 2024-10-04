import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Heading, Text } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login Successful!");
            navigate('/'); // Redirect to home after successful login
        } catch (error) {
            alert("Login Failed. " + error.message);
        }
    };

    return (
        <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius={8}>
            <Heading mb={4}>Login</Heading>
            <form onSubmit={handleLogin}>
                <FormControl mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </FormControl>
                <Button colorScheme="teal" type="submit" width="full">Login</Button>
            </form>
            <Text mt={4}>
                Don't have an account? <Link to="/register">Register</Link>
            </Text>
        </Box>
    );
};

export default Login;
