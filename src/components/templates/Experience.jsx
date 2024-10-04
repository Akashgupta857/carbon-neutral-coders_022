import React from 'react'
import { DataContext } from '../Context/DataContext'
import { useContext } from 'react'
const Experience = () => {
  let {data}=useContext(DataContext)
  return (
    <div>
        <h2>Experience</h2>
        <hr />
        {/* <div style={{display:"flex",justifyContent:"space-around"}}>
            <p>company name</p>
            <p>Role</p>
            <p>Date</p>
        </div> */}
        {data.map(([key,val])=>{
            console.log(val.experience[0],"tt")
            return<div style={{display:"flex",justifyContent:"space-around"}}>
            
           <p>{val.experience[0].company}</p>
           <p>{val.experience[0].role}</p>
           <p>{val.experience[0].years}</p>
        
            </div>
          })}
    </div>
  )
}

export default Experience