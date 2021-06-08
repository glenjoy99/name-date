import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import "firebase/auth";
import "./config/firebase.js";
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useHistory } from "react-router-dom";

function Header(props) {

    const history = useHistory()

    const handleLogout = function () {
        firebase.auth().signOut();
    }

    function HandleClick () {
        
        history.push("/liked"); //idk
    }


    if (props.loggedin) {
        return (
            <div className="header">
                <div className = "user_info">
                    <img className = "profile-pic" src={firebase.auth().currentUser.photoURL} alt="user"/>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {firebase.auth().currentUser.displayName}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                 </div>
                <div className="header_contents">
                    <img src={'./NameLogo.png'} alt="logo"/>
                    <h1><b>name</b> date</h1>
                </div>
                <div className ="liked">
                <IconButton onClick={HandleClick} aria-label="liked">
                    <FavoriteIcon />
                </IconButton>
                </div>
            </div>                
        )
    } else {
        return (
        <div className="header">
            <div className="user_info">
                <p>NO USER LOGGED IN</p>
            </div>
            <div className="header_contents">
                <img src={'./NameLogo.png'} alt="logo"/>
                <h1><b>name</b> date</h1>
            </div>
        </div>
    );
        
    }
        
    
       
}

export default Header = React.memo(Header)
