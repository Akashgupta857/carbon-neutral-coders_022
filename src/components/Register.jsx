import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Heading, Text } from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { auth } from '../firebase';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const db = getDatabase();
            await set(ref(db, 'users/' + user.uid), {
                firstName,
                lastName,
                email
            });

            alert("Registration Successful!");
            navigate('/login'); // Redirect to login after registration
        } catch (error) {
            alert("Registration Failed. " + error.message);
        }
    };

    return (
        <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius={8}>
            <Heading mb={4}>Register</Heading>
            <form onSubmit={handleRegister}>
                <FormControl mb={4}>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </FormControl>
                <Button colorScheme="teal" type="submit" width="full">Register</Button>
            </form>
            <Text mt={4}>
                Already have an account? <Link to="/login">Login</Link>
            </Text>
        </Box>
    );
};

export default Register;
