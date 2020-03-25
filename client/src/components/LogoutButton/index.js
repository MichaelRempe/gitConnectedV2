import React from "react";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

import { Link } from "react-router-dom";
import "./style.css";
import { FirebaseAuthConsumer } from "@react-firebase/auth";

const LogoutButton = () => {
  function logout () {
    firebase.auth().signOut();
  }
  return (
    //navigates user to Home/Landing Page
    <Link to="/" id="link">
      
        <p id="button" onClick={logout}>Log Out</p>
     
    </Link>
  );
};

export default LogoutButton;