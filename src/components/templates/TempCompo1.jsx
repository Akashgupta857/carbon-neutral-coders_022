// import React from 'react'
import './tempCompo1.css'
import PhotoComp from './PhotoComp'
import ContactDetailsComp from './ContactDetailsComp'
import EducationComp from './EducationComp'
import TechnicalSkillsComp from './TechnicalSkillsComp'
import SoftSkillsComp from './SoftSkillsComp'
import CertificationComp from './CertificationComp'
import NameCompo from './NameCompo'
import ProjectCompo from './ProjectCompo'
import ProfessionalSum from './ProfessionalSum'
import Experience from './Experience'
import { useRef } from 'react'

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const tempCompo1 = () => {
  const resumeRef = useRef();

  // Function to download resume


    // Convert the HTML content to PDFMake format
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
        <button onClick={downloadResume}>Download Resume</button>
      <div ref={resumeRef}> 
    
          <div className="container">
              <div className='left'>
                  <PhotoComp />
                  <ContactDetailsComp/>
                  <EducationComp />
                  <TechnicalSkillsComp />
                  <SoftSkillsComp />
                  <CertificationComp/>
             </div>
              <div className='right'>
                  <NameCompo/>
                  <ProfessionalSum/>
                  <Experience/>
                  <ProjectCompo/>
             </div>
          </div>
          </div>
      
    </>
  )
}

export default tempCompo1
