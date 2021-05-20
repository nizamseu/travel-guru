import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import '../Registration/./style.css';

const SignUp = () => {
    const [user,setUser]=useContext(userContext)

  const handleChange =(e)=>{
    const newUser ={
      ...user,
    }
    newUser[e.target.name]=e.target.value
    setUser(newUser)

  }

  console.log(user);
    return (
        <form>
          <h1>  This is sign Up Form   </h1> 
          <input onBlur={handleChange} type="text" name="email" placeholder="Your Email"/>
          <br/>
          <input onBlur={handleChange} type="password" name="password" placeholder="Your Password"/>
          <br/>
          <Button>Create Account</Button>
        </form>
    );
};

export default SignUp;