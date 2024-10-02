import React, { useState } from 'react';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import ResumeForm from './components/ResumeForm';
import Preview from './components/Preview';
import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: { name: '', email: '', phone: '', linkedIn: '', github: '' },
    education: [],
    experience: [],
    technicalSkills: [],
    softSkills: [],
    projects: [],
  });

  const updateResumeData = (section, data) => {
    setResumeData((prevData) => ({ ...prevData, [section]: data }));
  };

  return (
    <ChakraProvider>
      <Container maxW="container" p={5}>
        <Header />
        <Flex mt={5} justifyContent="space-between">
          <ResumeForm resumeData={resumeData} updateResumeData={updateResumeData} />
          <Preview resumeData={resumeData} />
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default App;
