import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { auth } from '../firebase'; // Ensure this import points to your firebase configuration

const Navbar = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/'); // Redirect to home after logout
  };

  return (
    <Box
      bg="blue.600"
      px={4}
      color="white"
      position="sticky"
      top="0"
      zIndex="1000"
      boxShadow="md"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Hamburger Icon for Mobile View */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Brand: Centered on Small Screens */}
        <Box
          fontWeight="bold"
          fontSize="xl"
          textAlign={{ base: 'center', md: 'left' }} // Center text on small screens
          flex="1" // Allow the brand to take available space
        >
          <Link to="/">Resume Builder</Link>
        </Box>

        {/* Links for Desktop View */}
        <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
          <Link to="/alltemplate">Resume Templates</Link>
          <Link to="/resumebuilding">CV Templates</Link>
          <Link to="/careerblog">Career Blog</Link>
          <Link to="/pricing">Pricing</Link>
          {user ? (
            <>
              <Link to="/dashboard">
                <Button colorScheme="teal" size="md">Dashboard</Button>
              </Link>
              <Button colorScheme="teal" size="md" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Flex alignItems="center">
              <Link to="/register">
                <Button colorScheme="teal" size="md" mr={2}>Register</Button>
              </Link>
              <Link to="/login">
                <Button colorScheme="teal" size="md">Login</Button>
              </Link>
            </Flex>
          )}
        </HStack>
      </Flex>

      {/* Hamburger Menu Links */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }} bg="blue.700" borderRadius="md">
          <Stack as="nav" spacing={4}>
            <Link to="/resume-templates" onClick={onClose}>Resume Templates</Link>
            <Link to="/cv-templates" onClick={onClose}>CV Templates</Link>
            <Link to="/cover-letters" onClick={onClose}>Cover Letters</Link>
            <Link to="/career-blog" onClick={onClose}>Career Blog</Link>
            {user ? (
              <>
                <Link to="/dashboard" onClick={onClose}>
                  <Button colorScheme="teal" size="md">Dashboard</Button>
                </Link>
                <Button colorScheme="teal" size="md" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <HStack spacing={4}>
                <Link to="/register" onClick={onClose}>
                  <Button colorScheme="teal" size="md">Register</Button>
                </Link>
                <Link to="/login" onClick={onClose}>
                  <Button colorScheme="teal" size="md">Login</Button>
                </Link>
              </HStack>
            )}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;