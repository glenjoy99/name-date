import React from 'react'
import Button from 'react-bootstrap/Button'
import firebase from "firebase";
import "firebase/auth";
import "./config/firebase.js";
import {useHistory} from "react-router-dom";


function Login(props) {
    
    const history = useHistory()

    function handleClick () {
        console.log("button clicked")
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
      
          // This gives you a Google Access Token. You can use it to access the Google API.
        //   var token = credential.accessToken;
        //   // The signed-in user info.
        //   var user = result.user;
          
          history.push("/");
          props.handleLogin(true);
          // ...
        }).catch((error) => {
          console.log(error);
        });

        
    }


    return (
        <div class="Login">
            <div class="Login_contents">
                <h2>Let's get started!</h2>
                <p>Your perfect baby name is a swipe away.</p>
                <Button variant="primary" onClick={handleClick}>Login with Google</Button>{' '}
            </div>
        </div>
    )
}

export default Login
