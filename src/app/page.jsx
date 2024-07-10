import React from 'react'
import myImage from './carrrr.jpg';

const  Home   = () => {
  return (
    <div>
      <h1 style={{color:'red',fontSize:'50px',textAlign:'center'}}>Home</h1>   
      <hr />

      <input type="text" />
      <button className='p-3 rounded-md bg-green-600 text-white m-5'> Learn MORE</button>


     
      <img src={myImage.src} alt="" />
       
       </div>
  )
}

export default  Home; 