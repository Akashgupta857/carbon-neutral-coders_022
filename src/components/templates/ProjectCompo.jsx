import React from 'react'
import { DataContext } from '../Context/DataContext'
import { useContext } from 'react'

const ProjectCompo = () => {
  let {data}=useContext(DataContext)
  return (
    <div>
        <h2>Project</h2>
        <hr />
        {data.map(([key,val])=>{
            console.log(val.experience[0],"tt")
            return<><div style={{display:"flex",justifyContent:"space-around"}}>
            
           <p>{val.projects[0].name}</p>
           <h3>Deploy link</h3>
            <h5>git hub link</h5>
        
            </div>
            <p>{val.projects[0].description}</p>
            </>
          })}
        {/* <div style={{display:"flex",justifyContent:"space-around"}}>
            <h3>Project Name</h3>
            <h3>Deploy link</h3>
            <h5>git hub link</h5>
        </div>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quis, numquam magni quos accusamus quod consequuntur magnam aspernatur molestiae assumenda quisquam ratione ipsa molestias velit accusantium dolor blanditiis, obcaecati expedita.</h6> */}
    </div>
  )
}

export default ProjectCompo
