'use client';
import React from 'react'



const EventHandling = () => {

  const previewImage = (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];

    // initialize file reader
    const reader = new FileReader();

    // what to do when image is loaded
    reader.onload = (data) => {
        const img = new Image();
        img.src = data.target.result;
        document.body.append(img);
    };

    // load the image
    reader.readAsDataURL(file);
  }



  return (
    <div>  
        
        <h1    className='text-4xl text-center font-bold my-5' >Event Handling in React</h1>

        <hr />


        <button className='bg-violet-700 p-3 text-white rounded-md'
        onClick={() => {alert('Button Clicked');}}  
        
        
        >touch me</button>

        <input className='border-2 rounded-md px-1 py-3 mt-3 w-full'
        onChange={(e)=>{console.log(e.target.value);}}
        
        type="text" />

        <input type="color"  className='mt5'

        onChange={(e)=>{document.body.style.backgroundColor=e.target.value;}}
        
        />
        <input type="file" 

        onChange={(e)=>{console.log(e.target.files);}}
        
        />
      



    
    </div>
  )
}

export default EventHandling