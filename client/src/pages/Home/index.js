import React, { useState, useEffect } from "react";

import { Button } from "reactstrap";
import { Link, Route } from "react-router-dom";


//Style
import background from "../../assets/home-bg.jpeg";
import "./style.css";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

function Home() {
  

  const devID = "5e69316dc528fd5c40dbace2";
  const empID = "5e69316dc528fd5c40dbace1";
  
  const [admin, setAdmin] = useState({
    id: "Mongoose id"
  });

  function devClick(event) {
    const { name, value } = event.target;
    setAdmin({ ...admin, [name]: devID });
    console.log(admin);
  }
  function empClick(event) {
    const { name, value } = event.target;
    setAdmin({ ...admin, [name]: empID });
    console.log(admin);
  }

  // Email validation
  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      alert("You have entered an invalid email address!");
      return false;
    }
  }

  /**
   * Handles the sign in button press.
   */
  function toggleSignIn() {
    if (firebase.auth().currentUser) {
      // [START signout]
      firebase.auth().signOut();
      // [END signout]
    } else {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      if (email.length < 4) {
        alert("Please enter an email address.");
        return;
      }
      if (password.length < 4) {
        alert("Please enter a password.");
        return;
      }
      // Sign in with email and pass.
      // [START authwithemail]
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
          if (!error) {
            console.log("success");

          }
          document.getElementById("quickstart-sign-in").disabled = false;
          // [END_EXCLUDE]
        });
      // [END authwithemail]
    }
    document.getElementById("quickstart-sign-in").disabled = true;
  }

  /**
   * initApp handles setting up UI event listeners and registering Firebase auth listeners:
   *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
   *    out, and that is where we update the UI.
   */
  function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
      // [START_EXCLUDE silent]
      // document.getElementById('quickstart-verify-email').disabled = true;
      // [END_EXCLUDE]
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // [START_EXCLUDE]
        document.getElementById("email").style.display = "none";
        document.getElementById("password").style.display = "none";
        document.getElementById("quickstart-sign-in").textContent = "Sign out";
       
        // if (!emailVerified) {
        //   document.getElementById("quickstart-verify-email").disabled = false;
        // }
        // [END_EXCLUDE]
      } else {
        // User is signed out.
        // [START_EXCLUDE]
       
        document.getElementById("quickstart-sign-in").textContent = "Sign in";
        
        // [END_EXCLUDE]
      }
      // [START_EXCLUDE silent]
      document.getElementById("quickstart-sign-in").disabled = false;
      // [END_EXCLUDE]
    });
    // [END authstatelistener]
  }

  initApp();

  return (
    <>
      <div className="HomeImage text-center" style={{ backgroundImage: `url(${background})` }}>
        <h1 className="display-4">Welcome to Git Connected</h1>
        <h2 className="lead">
          A place for developers and employers to get connected. Yeehaw!!
        </h2>
        <p>Get started by logging in or signing up</p>
        <br />
        <div className="container signinForm">
          <div className="row">
            <div className="col-md-6 col-12 form-group">
              <input
                // onChange={handleInputChange}
                name="emailAddress"
                id="email"
                type="email"
                className="form-control"
                placeholder="Enter Email"
              />
              <br />
              <input
                // onChange={handleInputChange}
                name="password"
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter Password"
              />
              <br />
              <Button
                name="id"
                id="quickstart-sign-in"
                onClick={toggleSignIn}
                color="primary"
              >
                Log in
              </Button>
            </div>
            <div className="col-md-6 col-12 form-group">
              <br />
              <Link to="/selectform">
                <Button name="id" color="success">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </ div>
    </>
  );
}

export default Home;
