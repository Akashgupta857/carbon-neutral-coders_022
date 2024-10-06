// import React from 'react'
import React from 'react'
import { DataContext } from '../Context/DataContext'
import { useContext } from 'react'
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub ,FaLinkedin} from "react-icons/fa";
const ContactDetailsComp = () => {
  let {data}=useContext(DataContext)
  return (
    <div>
      <h3>Contact</h3>
        <hr />
          {data.map(([key,val])=>{
            return<>
            <div style={{display:"flex",gap:"10px"}}>
            <IoCall />
            {val.personalInfo.phone}
            </div>
            <div style={{display:"flex",gap:"10px"}}>
            <IoMail />
            {val.personalInfo.email}
              </div>
              <div style={{display:"flex",gap:"10px"}}>
              <FaGithub />
              {val.personalInfo.github}
              </div>
              <div style={{display:"flex",gap:"10px"}}>
              <FaLinkedin />
              {val.personalInfo.linkedIn}
              </div>
            
           
           
            </>
          })}

    </div>
  )
}

export default ContactDetailsComp

