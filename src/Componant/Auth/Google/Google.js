import React, { useContext, useState } from 'react';
import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from '../SignIn/firebaseConfig';
import { Button } from '@material-ui/core';
import { userContext } from '../../../App';
import '../Registration/style.css'
import Registration from '../Registration/Registration';
import { useHistory, useLocation } from 'react-router';
const Google = () => {
    const [user,setUser]=useContext(userContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const history= useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
 



    const handleSignIn= ()=>{
        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const {displayName,email,photoURL}=res.user
            const logIn ={
                name:displayName,
                photo:photoURL,
                email:email,
                islogged:true,
            
              }
              setUser(logIn);
              storeAuthToken()
            }

          ).catch(error=> {
            console.log(error);
          });
          
       }
   
       const handleSignOut= ()=>{
        firebase.auth().signOut()
        .then(()=> {
           const logedOut ={
            name:'',
            photo:'',
            email:'',
            islogged:false,
            
           }
           setUser(logedOut)
          }).catch(function(error) {
            // An error happened.
          });
       }
       

       const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }
    



       const handleEmailPass = ()=>{
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((user) => {
          // Signed in 
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
       }
    console.log("user",user);
    return (
        <div>
           
           {/* <Registration 
           handleSignOut={handleSignOut}
           handleSignIn={handleSignIn}
           /> */}

           <h3>Sign In</h3>


        <div className="formItem">
          
                <form >

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <h5 style={{textAlign:"center"}}>OR</h5>
                <Button onClick={()=>handleSignIn()} variant="contained" color="secondary" className="btn btn-primary btn-block">Sign In With Google</Button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
              
            </div>

            
        </div>
    );
};

export default Google;