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
            <h1>{val.personalInfo.name
            }</h1>
          </div>
        })} 
        <h1>Frontend Developer</h1>
    </div>
  )
}

export default NameCompo