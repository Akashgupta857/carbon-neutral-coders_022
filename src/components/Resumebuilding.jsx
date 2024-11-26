import React, { useState } from "react";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import Header from "./Header";
import ResumeForm from "./ResumeForm";
import Preview from "./Preview";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Resumebuilding = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: { name: "", email: "", phone: "", linkedIn: "", github: "" },
    education: [],
    experience: [],
    technicalSkills: [],
    softSkills: [],
    projects: [],
  });
  
  const navigate = useNavigate()
  const updateResumeData = (section, data) => {
    setResumeData((prevData) => ({ ...prevData, [section]: data }));
  };
  const generateresume = ()=>{
    if(resumeData.education.length == 0){
      alert("Education is missing")
      return
    }
    if(resumeData.technicalSkills.length == 0){
      alert("Skills is missing")
      return
    }
    if(resumeData.softSkills.length == 0){
      alert("Soft skills are missing")
      return
    }
    if(resumeData.projects.length == 0){
      alert("Projects are missing")
      return
    }
    console.log(resumeData);
    // axios.delete("https://resumebuilder-3edd6-default-rtdb.firebaseio.com/resumedata.json")
    axios.delete('https://resumebuilder-e6450-default-rtdb.asia-southeast1.firebasedatabase.app/resumedata.json')
    .then((val) =>{
      // https://resumebuilder-e6450-default-rtdb.asia-southeast1.firebasedatabase.app/
      // return axios.post("https://resumebuilder-3edd6-default-rtdb.firebaseio.com/resumedata.json", resumeData)
      return axios.post("https://resumebuilder-e6450-default-rtdb.asia-southeast1.firebasedatabase.app/resumedata.json", resumeData)
    })
    .then((val) =>{
      console.log(val);
      alert("resume generated")
     
      setTimeout(()=>{
        navigate("/template")
      },3000)
     
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  return (
    <ChakraProvider>
      <Container maxW="container" p={5}>
        <Header />
        <Flex mt={5} justifyContent="space-between">
          <ResumeForm
            resumeData={resumeData}
            updateResumeData={updateResumeData}
          />
          <Preview resumeData={resumeData} 
          generateresume={generateresume}
          />
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default Resumebuilding;

