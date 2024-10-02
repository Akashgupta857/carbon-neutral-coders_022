import React from 'react';
import { Link } from 'react-router-dom';
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

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="blue.600" px={4} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Hamburger Icon for Mobile View */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        
        {/* Brand */}
        <Box fontWeight="bold" fontSize="xl">
          <Link to="/">CareerCraft</Link>
        </Box>

        {/* Links for Desktop View */}
        <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
          <Link to="/resume-templates">Resume Templates</Link>
          <Link to="/cv-templates">CV Templates</Link>
          <Link to="/cover-letters">Cover Letters</Link>
          <Link to="/career-blog">Career Blog</Link>
        </HStack>

        {/* Login/Signup Button */}
        <Flex alignItems="center">
          <Link to="/auth">
            <Button colorScheme="teal" size="md">Login/Signup</Button>
          </Link>
        </Flex>
      </Flex>

      {/* Hamburger Menu Links */}
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link to="/resume-templates" onClick={onClose}>Resume Templates</Link>
            <Link to="/cv-templates" onClick={onClose}>CV Templates</Link>
            <Link to="/cover-letters" onClick={onClose}>Cover Letters</Link>
            <Link to="/career-blog" onClick={onClose}>Career Blog</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
