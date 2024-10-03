import React, { useState } from 'react';
import "./photoCompo1.css"
const PhotoComp = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
  
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };
 

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };
  return (
    <div>
     
      
    
      {!selectedImage ? (
        <input type="file" accept="image/*" onChange={handleImageChange} />
      ) : (
        <div className='imgcontainer' style={{ position: 'relative', display: 'inline-block', marginTop: '20px' }}>
          <img src={selectedImage} alt="Selected" style={{ width: '150px', height: '150px', borderRadius:"50%" }} />
      
          <button 
            onClick={handleRemoveImage} 
            className='crossbutton'
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              background: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '16px',
              padding: '5px 10px'
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}

export default PhotoComp
