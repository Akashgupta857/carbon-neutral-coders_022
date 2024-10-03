import React, { useState } from 'react';
import { Box, Button, FormLabel, Input, Textarea, Heading, VStack } from '@chakra-ui/react';
import './ResumeForm.css';

const ResumeForm = ({ resumeData, updateResumeData }) => {
  const [personalInfo, setPersonalInfo] = useState(resumeData.personalInfo);
  const [education, setEducation] = useState(resumeData.education);
  const [experience, setExperience] = useState(resumeData.experience);
  const [technicalSkills, setTechnicalSkills] = useState(resumeData.technicalSkills);
  const [softSkills, setSoftSkills] = useState(resumeData.softSkills);
  const [projects, setProjects] = useState(resumeData.projects);

  const handleSave = (e) => {
    e.preventDefault();
    updateResumeData('personalInfo', personalInfo);
    updateResumeData('education', education);
    updateResumeData('experience', experience);
    updateResumeData('technicalSkills', technicalSkills);
    updateResumeData('softSkills', softSkills);
    updateResumeData('projects', projects);
  };

  return (
    <Box w="30%">
      <form onSubmit={handleSave}>
        <VStack spacing={4} align="stretch">
          <Heading as="h3" size="md">Personal Information</Heading>
          <FormLabel>Name</FormLabel>
          <Input value={personalInfo.name} onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })} />
          
          <FormLabel>Email</FormLabel>
          <Input type="email" value={personalInfo.email} onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })} />

          <FormLabel>Phone</FormLabel>
          <Input type="tel" value={personalInfo.phone} onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })} />

          <FormLabel>LinkedIn</FormLabel>
          <Input value={personalInfo.linkedIn} onChange={(e) => setPersonalInfo({ ...personalInfo, linkedIn: e.target.value })} />

          <FormLabel>GitHub</FormLabel>
          <Input value={personalInfo.github} onChange={(e) => setPersonalInfo({ ...personalInfo, github: e.target.value })} />

          <Heading as="h3" size="md">Education</Heading>
          {education.map((edu, index) => (
            <Box key={index}>
              <FormLabel>School</FormLabel>
              <Input value={edu.school} onChange={(e) => {
                const updatedEducation = [...education];
                updatedEducation[index].school = e.target.value;
                setEducation(updatedEducation);
              }} />
              <FormLabel>Degree</FormLabel>
              <Input value={edu.degree} onChange={(e) => {
                const updatedEducation = [...education];
                updatedEducation[index].degree = e.target.value;
                setEducation(updatedEducation);
              }} />
              <FormLabel>Year</FormLabel>
              <Input value={edu.year} onChange={(e) => {
                const updatedEducation = [...education];
                updatedEducation[index].year = e.target.value;
                setEducation(updatedEducation);
              }} />
            </Box>
          ))}
          <Button onClick={() => setEducation([...education, { school: '', degree: '', year: '' }])}>Add Education</Button>

          <Heading as="h3" size="md">Experience</Heading>
          {experience.map((exp, index) => (
            <Box key={index}>
              <FormLabel>Company</FormLabel>
              <Input value={exp.company} onChange={(e) => {
                const updatedExperience = [...experience];
                updatedExperience[index].company = e.target.value;
                setExperience(updatedExperience);
              }} />
              <FormLabel>Role</FormLabel>
              <Input value={exp.role} onChange={(e) => {
                const updatedExperience = [...experience];
                updatedExperience[index].role = e.target.value;
                setExperience(updatedExperience);
              }} />
              <FormLabel>Years</FormLabel>
              <Input value={exp.years} onChange={(e) => {
                const updatedExperience = [...experience];
                updatedExperience[index].years = e.target.value;
                setExperience(updatedExperience);
              }} />
            </Box>
          ))}
          <Button onClick={() => setExperience([...experience, { company: '', role: '', years: '' }])}>Add Experience</Button>

          <Heading as="h3" size="md">Technical Skills</Heading>
          {technicalSkills.map((skill, index) => (
            <Input key={index} value={skill} onChange={(e) => {
              const updatedSkills = [...technicalSkills];
              updatedSkills[index] = e.target.value;
              setTechnicalSkills(updatedSkills);
            }} />
          ))}
          <Button onClick={() => setTechnicalSkills([...technicalSkills, ''])}>Add Technical Skill</Button>

          <Heading as="h3" size="md">Soft Skills</Heading>
          {softSkills.map((skill, index) => (
            <Input key={index} value={skill} onChange={(e) => {
              const updatedSkills = [...softSkills];
              updatedSkills[index] = e.target.value;
              setSoftSkills(updatedSkills);
            }} />
          ))}
          <Button onClick={() => setSoftSkills([...softSkills, ''])}>Add Soft Skill</Button>

          <Heading as="h3" size="md">Projects</Heading>
          {projects.map((project, index) => (
            <Box key={index}>
              <FormLabel>Project Name</FormLabel>
              <Input value={project.name} onChange={(e) => {
                const updatedProjects = [...projects];
                updatedProjects[index].name = e.target.value;
                setProjects(updatedProjects);
              }} />
              <FormLabel>Description</FormLabel>
              <Textarea value={project.description} onChange={(e) => {
                const updatedProjects = [...projects];
                updatedProjects[index].description = e.target.value;
                setProjects(updatedProjects);
              }} />
            </Box>
          ))}
          <Button onClick={() => setProjects([...projects, { name: '', description: '' }])}>Add Project</Button>

          <Button type="submit" colorScheme="teal" mt={4}>Save</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ResumeForm;