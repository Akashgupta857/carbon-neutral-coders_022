// import React from 'react'
import React from 'react'
import { DataContext } from '../Context/DataContext'
import { useContext } from 'react'

const EducationComp = () => {
  let {data}=useContext(DataContext)
  return (
    <div>
          <h2>Education</h2>
          <hr />
          {data.map(([key,val])=>{
            
            return<>
            
           <h6>{val.education[0].degree}</h6>
           <h6>{val.education[0].year}</h6>
           <h6>{val.education[0].school}</h6>
         
            </>
          })}
    
    </div>
  )
}

export default EducationComp