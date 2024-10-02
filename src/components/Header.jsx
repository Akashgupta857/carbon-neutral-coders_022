import { Heading, Box } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Box textAlign="center" mb={8}>
      <Heading as="h1" size="2xl">
        Professional Resume Builder
      </Heading>
    </Box>
  );
};

export default Header;
