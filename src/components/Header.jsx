import { Heading, Box } from '@chakra-ui/react';
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <Box textAlign="center" mb={8}>
      <Heading as="h1" size="2xl" className="text-animation">
        Professional Resume Builder
      </Heading>
    </Box>
  );
};

export default Header;
