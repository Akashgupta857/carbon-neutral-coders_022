import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Flex,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  const gridColumns = useBreakpointValue({ base: 1, md: 3 }); // Single column on small screens, 3 on larger screens

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      py={10}
    >
      <Container as={Stack} maxW={"6xl"}>
        {/* Responsive Grid for the footer */}
        <SimpleGrid columns={gridColumns} spacing={8} textAlign="center">
          {/* Column 1: Quick Links */}
          <Stack align={{ base: "center", md: "flex-start" }}>
            <Text fontWeight={"bold"}>Quick Links</Text>
            <Link href={"/"}>Home</Link>
            <Link href={"/templates"}>Resume Templates</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/contact"}>Contact Support</Link>
          </Stack>

          {/* Column 2: Resources */}
          <Stack align={{ base: "center", md: "flex-start" }}>
            <Text fontWeight={"bold"}>Resources</Text>
            <Link href={"/faq"}>FAQs</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/privacy"}>Privacy Policy</Link>
            <Link href={"/terms"}>Terms of Service</Link>
          </Stack>

          {/* Column 3: Social Media */}
          <Stack align={{ base: "center", md: "flex-start" }}>
            <Text fontWeight={"bold"}>Connect with Us</Text>
            <Flex justify={{ base: "center", md: "flex-start" }}>
              <IconButton
                as="a"
                href="https://linkedin.com"
                colorScheme="linkedin"
                icon={<FaLinkedin />}
                aria-label="LinkedIn"
                isRound
                mr={2}
              />
              <IconButton
                as="a"
                href="https://twitter.com"
                colorScheme="twitter"
                icon={<FaTwitter />}
                aria-label="Twitter"
                isRound
                mr={2}
              />
              <IconButton
                as="a"
                href="https://github.com"
                colorScheme="gray"
                icon={<FaGithub />}
                aria-label="GitHub"
                isRound
              />
            </Flex>
          </Stack>
        </SimpleGrid>

        {/* Copyright Section */}
        <Box py={6}>
          <Text textAlign={"center"}>
            © {new Date().getFullYear()} ResumeBuilder. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
