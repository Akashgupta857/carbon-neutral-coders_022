import React from 'react'
import {ResumeTemplatesSection} from "./HomePage"
import TempCompo1 from './templates/TempCompo1'
import TempCompo2 from './templates/TempCompo2'
import TempCompo3 from './templates/tempCompo3'
import TempCompo4 from './templates/TempoCompo4'
const Alltemplate = () => {
  return (
    <div>
        <ResumeTemplatesSection/>
        <TempCompo1/>
        {/* <TempCompo2/>
        <TempCompo3/>
        <TempCompo4/> */}
    </div>
  )
}

export default Alltemplate