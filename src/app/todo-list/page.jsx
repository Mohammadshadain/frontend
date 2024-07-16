"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const todo = () => {
  // state is most important in js

  // const [num, setnum] = useState(10); in this

  const [taskList, setTaskList] = useState([
    // {text:'learn HTML',completed:false,  createdAt:new Date()},
    // {text:'learn CSS',completed:false,  createdAt:new Date()},
    // {text:'learn JS',completed:false,  createdAt:new Date()},
  ]);

  const addTask = (e) => {
    if (e.code === "Enter") {
      if (!e.target.value) {
        alert("Please enter a value to add");
        return;
      }

      console.log(e.target.value);

      const newTask = {
        text: e.target.value,
        completed: false,
        createdAt: new Date(),
      };
      setTaskList([...taskList, newTask]);
      e.target.value = "";
      toast.success("Task added successfully");
    }
  };
  //    creating fn to delete task
  const deleteTask = (index) => {
    console.log(index);

    const tem = taskList;
    tem.splice(index, 1);
    setTaskList([...tem]);
    toast.success("Task deleted successfully");
  };

  const togglComplete = (index) => {
    const tem = taskList;
    tem[index].completed = !tem[index].completed;
    setTaskList([...tem]);
  };

  return (
    <div className="max-w-[80%]  mx-auto ">
      {/* {num} */}
      {/* <button onClick={()=>{setnum(num + 1); console.log(num);}}>Add number</button> */}

      <h1 className="text-5xl font-bold text-center mt-5">ToDo-list</h1>

      <div className="border-2 rounded-md shadow mt-5 ">
        <div className="border-b-2 border-gray-600 p-4">
          <input
            placeholder="add a new task"
            onKeyDown={addTask}
            className="border-2 border-blue-500 rounded p-3 w-full"
            type="text"
          />
        </div>

        <div className="p-5">
          {taskList.map((task, index) => {
            return (
              <div
                key={index}
                className="shadow-md border-2  rounded-lg p-4 mb-5"
              >

                {task.completed ? (

                    <p  className="text-sm bg-green-500 px-3 w-fit rounded-full text-white"> completed</p>
                ):(
                    <p className="text-sm bg-yellow-500 px-3 w-fit runded-full text-white">pending</p>



                )}
                
            
        



                <p className={(task.completed)? 'line-through':''}>{task.text} </p>

                <div className="mt-3 flex gap-3 justify-end">
                  <button 

                  onClick={() => {togglComplete(index);}}
                  
                  className="bg-blue-500 px-3 text-white rounded-full ">
                  
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      deleteTask(index);
                    }}
                    className="bg-red-500 px-3 text-white rounded-full"

                  >
                    Deleted
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default todo;
