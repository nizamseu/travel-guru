import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Registration from './Componant/Auth/Registration/Registration';
import Google from './Componant/Auth/Google/Google';
import SignUp from './Componant/Auth/SignUp/SignUp';
import Home from './Componant/Home/Home';
import Booking from './Componant/Booking/Booking';
import Hotel from './Componant/Hotel/Hotel';
import PrivateRoute from './Componant/Auth/Google/PrivateRoute';
export const userContext =React.createContext();
function App() {
  const  [user,setUser]= useState({
    name:'',
    photo:'',
    email:'',
    password:'',
    islogged:false,
    error:'',
    success:false,
    isValid:''
  })

  return (
    <div className="App">
      <userContext.Provider value={[user,setUser]}>
      <Router>
      {/* <Registration></Registration> */}
        <Switch>

          {/* <Route path="/signup">
            <SignUp></SignUp>
          </Route> */}
          {/* <Route path="/">
            <Google></Google>
          <Registration></Registration>
          </Route> */}

          <Route  path='/booking/:id'>
              <Booking></Booking>
        </Route>

            <PrivateRoute path='/hotel'>
                <Hotel></Hotel>
            </PrivateRoute>
          <Route path='/login'>
              <Google></Google>
          </Route>


        <Route path='/'>
            <Home></Home>
        </Route>

       

      </Switch>
      </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
