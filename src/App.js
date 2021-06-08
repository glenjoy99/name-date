import React, {useState} from 'react'
import Header from './Header.js';
import Body from './Body'
import Login from './Login.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, MemoryRouter, Switch} from "react-router-dom"
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Liked from "./Liked.js"


function App() {
  const [loggedIn, setLoggedIn] = useState(); 

  firebase.auth().onAuthStateChanged((user) => {
    setLoggedIn(user != null);
  });

  return ( 
    <div className="App">
     
     <Router>
     <Header loggedin={loggedIn}/> 
        <Switch>
          <PublicRoute componentProps={setLoggedIn} restricted={true} component={Login} path="/login" exact />
          <PrivateRoute component={Body} path="/" exact />
          <PrivateRoute component={Liked} path="/liked" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
