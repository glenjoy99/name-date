import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const PublicRoute = ({componentProps, component: Component, restricted,...rest}) => {
    var user = firebase.auth().currentUser;
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            (user != null) && restricted ? // if the user is already authenticated send them to the main page
                <Redirect to="/" />
            : <Component handleLogin={componentProps}/> // otherwise send them to login
        )} />
    );
};

export default PublicRoute;