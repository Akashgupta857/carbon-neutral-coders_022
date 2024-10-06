import React from 'react'
import { DataContext } from '../Context/DataContext'
import { useContext } from 'react'

const NameCompo = () => {
  let {data}=useContext(DataContext)
  console.log((data[0]),"h")
  return (
    <div>
        
        {data.map(([key,val])=>{
          return <div>
            <h2 style={{fontSize:"25px"}}>{val.personalInfo.name}</h2>
          </div>
        })} 
        <h2>Frontend Developer</h2>
    </div>
  )
}

export default NameCompo