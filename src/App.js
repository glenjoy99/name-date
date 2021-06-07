import React, {useState} from 'react'
import Header from './Header.js';
import Body from './Body'
import Login from './Login.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch} from "react-router-dom"
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(); 

  firebase.auth().onAuthStateChanged((user) => {
    setLoggedIn(user != null);
  });

  return ( 
    <div className="App">
     <Header loggedin={loggedIn}/> 
     <Router>
        <Switch>
          <PublicRoute componentProps={setLoggedIn} restricted={true} component={Login} path="/login" exact />
          <PrivateRoute component={Body} path="/" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
