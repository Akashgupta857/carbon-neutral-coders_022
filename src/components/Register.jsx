import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Heading, Text } from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { auth } from '../firebase'; // Adjust the import according to your Firebase config

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user; // Get the created user

            // Save additional user information in the Realtime Database
            const db = getDatabase();
            const data = await set(ref(db, 'users/' + user.uid), {
                firstName: firstName,
                lastName: lastName,
                email: email
            });
            console.log(data);
            
            // Show success message
            alert("Registration Successful! You have registered successfully.");

            // Redirect to login page after successful registration
            navigate('/login');
        } catch (error) {
            // Check for specific error codes and respond accordingly
            if (error.code === 'auth/email-already-in-use') {
                alert("Email already in use. This email address is already registered. Please try another one.");
            } else {
                alert("Registration Failed. An error occurred during registration. Please try again.");
                console.error("Error during registration: ", error);
            }
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
