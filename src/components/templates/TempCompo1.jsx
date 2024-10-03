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
const tempCompo1 = () => {
  return (
      <>
          
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
      
    </>
  )
}

export default tempCompo1
