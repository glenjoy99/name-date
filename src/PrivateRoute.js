import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const PrivateRoute = ({component: Component, ...rest}) => {
    var user = firebase.auth().currentUser;
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            user != null ?
            <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;