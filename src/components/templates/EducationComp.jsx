// import React from 'react'
import React from 'react'
import { DataContext } from '../Context/DataContext'
import { useContext } from 'react'

const EducationComp = () => {
  let {data}=useContext(DataContext)
  return (
    <div>
          <h3>Education</h3>
          <hr />
          {data.map(([key,val])=>{
            
            return<>
            
           <p>{val.education[0].degree}</p>
           <p>{val.education[0].year}</p>
           <p>{val.education[0].school}</p>
         
            </>
          })}
    
    </div>
  )
}

export default EducationComp