import React, { useState } from 'react';
import './tempCompo1.css';
import TempCompo2 from './TempCompo2';
import TempCompo3 from './tempCompo3';
import TempCompo4 from './TempoCompo4';
import PhotoComp from './PhotoComp';
import ContactDetailsComp from './ContactDetailsComp';
import EducationComp from './EducationComp';
import TechnicalSkillsComp from './TechnicalSkillsComp';
import SoftSkillsComp from './SoftSkillsComp';
import CertificationComp from './CertificationComp';
import NameCompo from './NameCompo';
import ProjectCompo from './ProjectCompo';
import ProfessionalSum from './ProfessionalSum';
import Experience from './Experience';
import { useRef } from 'react'
import { Button } from '@chakra-ui/react';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const TempCompo1 = () => {
  const [bgColor, setBgColor] = useState('#2e8b57'); // background color
  const [leftColor, setLeftColor] = useState('#3c9d77'); // left section color
  const [rightColor, setRightColor] = useState('#fff'); // right section color
  const [isLeftFirst, setIsLeftFirst] = useState(true);
  const resumeRef = useRef();
  const toggleOrder = () => {
    setIsLeftFirst(!isLeftFirst);
  };
  const downloadResume = () => {
    const input = resumeRef.current;
    
    // Use html2canvas to capture the resume section
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // Width of A4 in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add image of the resume to PDF
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      
      // Download the PDF with the specified filename
      pdf.save("Resume.pdf");
    });
};


  return (
    <>
     <Button colorScheme="teal" size="md" onClick={downloadResume}>Download Resume</Button>
     <br />
     <div ref={resumeRef}> 
      <div className="container" style={{ backgroundColor: bgColor }}>
        {isLeftFirst ? (<>
          <div className="left" style={{ backgroundColor: leftColor }}>
          <PhotoComp />
          <ContactDetailsComp />
          <EducationComp />
          <TechnicalSkillsComp />
          <SoftSkillsComp />
          <CertificationComp />
        </div>
        <div className="right" style={{ backgroundColor: rightColor }}>
          <NameCompo />
          <ProfessionalSum />
          <Experience />
          <ProjectCompo />
        </div>
        </>):<>
        <div className="right" style={{ backgroundColor: rightColor }}>
          <NameCompo />
          <ProfessionalSum />
          <Experience />
          <ProjectCompo />
        </div>

        <div className="left" style={{ backgroundColor: leftColor }}>
          <PhotoComp />
          <ContactDetailsComp />
          <EducationComp />
          <TechnicalSkillsComp />
          <SoftSkillsComp />
          <CertificationComp />
        </div>
        </>}
       
      </div>
      </div>
      <div className="color-pickers">
        <div>
          <label>Background Color: </label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>
        <div>
          <label>Left Section Color: </label>
          <input
            type="color"
            value={leftColor}
            onChange={(e) => setLeftColor(e.target.value)}
          />
        </div>
        <div>
          <label>Right Section Color: </label>
          <input
            type="color"
            value={rightColor}
            onChange={(e) => setRightColor(e.target.value)}
          />
        </div>
        <Button colorScheme="teal" size="md" onClick={toggleOrder}>
          {isLeftFirst ? 'Move Left to Right' : 'Move Right to Left'}
        </Button>
      </div>
      <TempCompo2/>
      <TempCompo3/>
      <TempCompo4/>
    </>
  );
};

export default TempCompo1;
