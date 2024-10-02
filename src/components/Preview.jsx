import React from 'react';
import { Box, Heading, Text, Stack, Divider, List, ListItem, Badge, Icon } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Preview = ({ resumeData }) => {
  const { personalInfo, education, experience, technicalSkills, softSkills, projects } = resumeData;

  return (
    <Box
      w="80vw" // Set to 100% width to take up the full width of the container
      p={8}
      m={4}
      border="1px solid"
      borderColor="gray.300"
      borderRadius="md"
      boxShadow="lg" // Added larger shadow for emphasis
      bg="white"
      maxW="container.xl" // Set max width to a container size
    >
      <Stack spacing={5}>
        {/* Personal Info Section */}
        <Stack spacing={1}>
          <Heading as="h2" size="lg" color="teal.500">
            {personalInfo.name}
          </Heading>
          <Text fontSize="lg">{personalInfo.email}</Text>
          <Text fontSize="lg">{personalInfo.phone}</Text>
          <Stack direction="row" spacing={4}>
            {personalInfo.linkedIn && (
              <Text fontSize="lg">
                <Icon as={FaLinkedin} color="teal.400" mr={1} />
                <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </Text>
            )}
            {personalInfo.github && (
              <Text fontSize="lg">
                <Icon as={FaGithub} color="gray.600" mr={1} />
                <a href={personalInfo.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Text>
            )}
          </Stack>
        </Stack>

        <Divider />

        {/* Education Section */}
        <Stack spacing={3}>
          <Heading as="h3" size="md" color="teal.500">
            Education
          </Heading>
          {education.map((edu, index) => (
            <Box key={index} bg="gray.50" p={4} borderRadius="md">
              <Text fontWeight="bold">{edu.school}</Text>
              <Text>{edu.degree}</Text>
              <Text color="gray.600">{edu.year}</Text>
            </Box>
          ))}
        </Stack>

        <Divider />

        {/* Experience Section */}
        <Stack spacing={3}>
          <Heading as="h3" size="md" color="teal.500">
            Experience
          </Heading>
          {experience.map((exp, index) => (
            <Box key={index} bg="gray.50" p={4} borderRadius="md">
              <Text fontWeight="bold">{exp.company}</Text>
              <Text>{exp.role}</Text>
              <Text color="gray.600">{exp.years}</Text>
            </Box>
          ))}
        </Stack>

        <Divider />

        {/* Technical Skills Section */}
        <Stack spacing={3}>
          <Heading as="h3" size="md" color="teal.500">
            Technical Skills
          </Heading>
          <Box>
            {technicalSkills.map((skill, index) => (
              <Badge key={index} colorScheme="teal" mr={2} mb={2}>
                {skill}
              </Badge>
            ))}
          </Box>
        </Stack>

        <Divider />

        {/* Soft Skills Section */}
        <Stack spacing={3}>
          <Heading as="h3" size="md" color="teal.500">
            Soft Skills
          </Heading>
          <Box>
            {softSkills.map((skill, index) => (
              <Badge key={index} colorScheme="gray" mr={2} mb={2}>
                {skill}
              </Badge>
            ))}
          </Box>
        </Stack>

        <Divider />

        {/* Projects Section */}
        <Stack spacing={3}>
          <Heading as="h3" size="md" color="teal.500">
            Projects
          </Heading>
          {projects.map((project, index) => (
            <Box key={index} bg="gray.50" p={4} borderRadius="md">
              <Text fontWeight="bold">{project.name}</Text>
              <Text>{project.description}</Text>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Preview;
