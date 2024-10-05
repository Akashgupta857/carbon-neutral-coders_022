import React from 'react'
import Navbar from './Navbar'
import ArticlesGrid from './CareerBlog'
import Footer from './Footer'

export const careerRout = () => {
  return (
    <div className="App">
        <Navbar/>
        <ArticlesGrid/>
        <Footer/>
    </div>
    
  )
}
