'use client'
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const UpdateUser = () => {
  const {id}=useParams(); // id display krane ke liye use krte h
  const [userData, setuserData] = useState(null) // consol me jo data h usko form me lane k liye use krte h
  const getUserData= async()=>{
    const res= await axios.get('http://localhost:5000/user/getbyid/'+id);
    console.log(res.data);
    setuserData(res.data);
    
  }
  const router=useRouter();
useEffect(() => {
  getUserData();
  
}, [])
const submitform=(values)=>{
  console.log(values);
  axios.put('http://localhost:5000/user/updateid/'+id,values)
  .then((result) => {
    toast.success('user add succesfully')
    router.back();
    
  }).catch((err) => {
    console.log(err);
    toast.error('fail do add')
    
  });
}


  return (
    <div className='max-w-[80%] mx-auto'>
        <h1 className='text-center font-bold'>
        UpdateUser
        </h1>
        {
          userData!=null?(
            <Formik initialValues={userData} onSubmit={submitform}>
              {(updateForm)=>{
                return <form onSubmit={updateForm.handleSubmit}>
                <label htmlFor="">Name</label>
                <input 
                id='name'
                onChange={updateForm.handleChange}
                value={updateForm.values.name}
                type="text"  className='border-2 border-b-4 border-gray-500 rounded px-3 py-1 block w-full'/>
                <label htmlFor="">Email Address</label>
                <input 
                id='email'
                onChange={updateForm.handleChange}
                value={updateForm.values.email}
                type="text"  className='border-2 border-gray-500 rounded px-3 py-1 block w-full'/>
                <label htmlFor="">Password</label>
                <input 
                id='password'
                onChange={updateForm.handleChange}
                value={updateForm.values.password}
                type="text"  className='border-2 border-gray-500 rounded px-3 py-1 block w-full'/>
                <label htmlFor="">City</label>
                <input
                id='city'
                onChange={updateForm.handleChange}
                value={updateForm.values.city}
                 type="text"  className='border-2 border-gray-500 rounded px-3 py-1 block w-full'/>
                <button className='bg-blue-500 text-white px-4 rounded mt-5 flex mx-auto '>Submit</button>
      
              </form>
              

              }}
              
               </Formik>
          ) :(
            <h1>Loading....</h1>
          )
        }
        
        
    </div>
  )
}

export default UpdateUser