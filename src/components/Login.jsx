import React, { useState } from 'react';
import { auth } from '../firebase'; // Adjust the import based on your project structure
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Box, Button, Input, FormLabel, Heading, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      console.log(data);
      setEmail('');
      setPassword('');
      navigate('/'); // Redirect to Home after successful login
    } catch (error) {
      alert(`Error during login: ${error.message}`);
    }
  };

  return (
    <Box
      maxWidth="400px"
      mx="auto"
      mt="100px"
      p={4}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
    >
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Login
      </Heading>
      <form onSubmit={handleLogin}>
        <VStack spacing={4} align="stretch">
          <FormLabel>Email:</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
          <FormLabel>Password:</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
          <Button type="submit" colorScheme="teal" mt={4}>
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
