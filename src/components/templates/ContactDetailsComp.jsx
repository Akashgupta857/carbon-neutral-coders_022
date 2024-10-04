// import React from 'react'
import React from 'react'
import { DataContext } from '../Context/DataContext'
import { useContext } from 'react'
import { IoCall } from "react-icons/io5";
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
            
            <p><span><IoCall />:</span>{val.personalInfo.phone}</p>
            <p><span><HiOutlineMail />:</span>{val.personalInfo.email}</p>
            <p><span><FaGithub />:</span>{val.personalInfo.github}</p>
            <p><span><FaLinkedin />:</span>{val.personalInfo.linkedIn}</p>
            </>
          })}

    </div>
  )
}

export default ContactDetailsComp


