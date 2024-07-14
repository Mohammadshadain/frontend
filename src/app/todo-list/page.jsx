'use client';

import React, { useState } from 'react'


const todo = () => {


    // state is most important in js

    // const [num, setnum] = useState(10); in this

    const [taskList, setTaskList] = useState([

        {text:'learn HTML',completed:false,  createdAt:new Date()},
        {text:'learn CSS',completed:false,  createdAt:new Date()},
        {text:'learn JS',completed:false,  createdAt:new Date()},


    ])
    

    const addTask=(e) => {
        if(e.code==='Enter'){
            console.log(e.target.value);
        }
    };
  return (
    <div className='max-w-[80%]  mx-auto '>
      
        {/* {num} */}
        {/* <button onClick={()=>{setnum(num + 1); console.log(num);}}>Add number</button> */}

        <h1 className='text-5xl font-bold text-center mt-5'>toDo-list</h1>

        <div className='border-2 rounded-md shadow mt-5 '>
            <div className='border-b-2 border-gray-600 p-4'>

                <input  
                placeholder='add a new task'
                onKeyDown={addTask}
                className='border-2 border-blue-500 rounded p-3 w-full'
                 type="text" />
                 
                 
                 

            </div>

            <div  className='p-5' >
                {
                    taskList.map((task,index)=>{return       <div  key={index} >
                        <p>{task.text}</p>
                        
                   <div>
                    <button> edit </button>
                    
                    <button>  delete </button>


                    </div>
                    </div>

                    
                
                })
                }

            </div>
        </div>



    </div>
  )
}

export default todo