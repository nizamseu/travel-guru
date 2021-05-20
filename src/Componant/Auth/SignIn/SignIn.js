import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import '../Registration/./style.css'
import firebaseConfig from './firebaseConfig';
import { userContext } from '../../../App';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }
const SignIn = () => {
 
    const [user,setUser]=useContext(userContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogle= ()=>{
        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            // const {displayName,email,photoURL}=res.user
            // const logIn ={
            //     name:displayName,
            //     photo:photoURL,
            //     email:email,
            //     islogged:true,
            
            //   }
            //   setUser(res);
            })
        .catch(error=> {
            console.log(error);
          });
          
       }
    
    console.log("user",user);
    return (
    <form>
       <h1>This is Sign iN form</h1> 
    </form>
    );
};

export default SignIn;