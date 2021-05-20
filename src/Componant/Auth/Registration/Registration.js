import React, { useContext } from 'react';
import Login from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style.css'
import { userContext } from '../../../App';
import { AppBar, Toolbar,Typography,Button, Icon } from '@material-ui/core';
import logo from '../../../Image/Logo.png'
import logo1 from '../../../Image/Logo1.jpg'

const Registration = ({ handleSignOut,handleSignIn}) => {
  console.log("log",handleSignOut,handleSignIn);
  const [user,setUser]=useContext(userContext)
    return (
      
      <AppBar   position="absolute" elevation={0} color="transparent">
        <Toolbar>
          
          <Typography variant="h6" className="menu">
            <img style={{height:'50px'}} src={logo} alt=""/>
          </Typography>

          {user.islogged 
          ? 
          <Toolbar>
              <Typography>
              Welcom {user.name}
            </Typography>
            <Button color="inherit" >LogOut</Button>
          </Toolbar>
          : <Button color="inherit" onClick={()=> handleSignIn()}>LogIn</Button>}
         
        </Toolbar>
      </AppBar>
   
    );
};

export default Registration;