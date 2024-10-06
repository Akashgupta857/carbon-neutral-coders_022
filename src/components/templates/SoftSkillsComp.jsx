// import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
const SoftSkillsComp = () => {
  let {data}=useContext(DataContext)
  return (
    <div>
      <h2>Sofe Skills</h2>
      <hr />
      {data.map(([key,val])=>{
            return<>
            <div style={{display:"flex",gap:"10px"}}>
            
            {val.technicalSkills}
            </div>
      
            </>
          })}
    </div>
  )
}

export default SoftSkillsComp