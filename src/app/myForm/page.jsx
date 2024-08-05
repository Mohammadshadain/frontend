import React from 'react'

const myForm = () => {
  
  return (
    <div >
        <h1   className='text-center font-bold text-2xl' >
        
           ABOUT ME
        </h1>
         <form action="" className='flex flex-col max-w-[20%] mx-auto'>
          <label htmlFor="name" className=' font-semibold text-red-500 place-self-start'>name</label>

         <input 
        className=' mt-4  border-b-8 rounded-lg p-1 text-blue-500 '
        placeholder='enter your name'

         type="name" />
          <label htmlFor="name" className=' font-semibold text-red-500 place-self-start'>email</label>

         <input 
        className=' mt-4  border-b-8 rounded-lg p-1 text-blue-500 '
        placeholder='enter your email'

         type="email" />
          <label htmlFor="name" className=' font-semibold text-red-500 place-self-start'>phone number</label>

         <input 
        className=' mt-4  border-b-8 rounded-lg p-1 text-blue-500 '
        placeholder='enter your phone number'

         type="phone number" />
          <label htmlFor="name" className=' font-semibold text-red-500 place-self-start'>Password</label>

         <input 
        className=' mt-4  border-b-8 rounded-lg p-1 text-blue-500 '
        placeholder='enter your password'

         type="password" />
         <button className='self-center text-blue-500 rounded-md'>
          Submit
         </button>
         
         
        

         </form>
       
    </div>
  )
}

export default myForm