'use client';
import React from 'react'



const EventHandling = () => {
  return (
    <div>  
        
        <h1    className='text-4xl text-center font-bold my-5' >Event Handling in React</h1>

        <hr />


        <button className='bg-violet-700 p-3 text-white rounded-md'
        onClick={() => {alert('Button Clicked');}}  
        
        
        >touch me</button>



    
    </div>
  )
}

export default EventHandling