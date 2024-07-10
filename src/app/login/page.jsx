import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div>
    <h1 className='text-3xl text-center mt10' > Login page</h1>

    <button className= {classes.loginBtn}>Login now</button>
    
    
    </div>
  )
}

export default Login;