import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
//Style:
import background from "../../../assets/developerForm-bg.jpg";
import "./style.css";
import { Link } from "react-router-dom";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

function DevCreateAccount() {
  const [formObject, setFormObject] = useState({
    firebase_id:"",
    firstName: "",
    lastName: "",
    emailAddress: "",
    devType: "Full-Stack",
    empType: "Full-Time",
    language: "JavaScript",
    location: "",
    profile: "",
  });

  /**
   * Handles the sign up button press.
   */
  function handleSignUp(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email.length < 4) {
      alert("Please enter an email address.");
      return;
    }
    if (password.length < 6) {
      alert("Please enter a password.");
      return;
    }
    // Create user with email and pass.
    // [START createwithemail]
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      })
      .then(() => {
        let newDeveloper = formObject;
        firebase.auth().currentUser.sendEmailVerification();
        let id = firebase.auth().currentUser.uid.toString();
        newDeveloper.firebase_id = id;
        setFormObject(newDeveloper);
        console.log(formObject);
        handleFormSubmit()
      });
    // [END createwithemail]
  }

  function handleInputChange(event) {
    console.log(formObject);
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  function handleDropDownChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      alert("You have entered an invalid email address!");
      return false;
    }
  }

  function handleFormSubmit() {
    if (
      !formObject.firstName &&
      !formObject.lastName &&
      !formObject.emailAddress
    ) {
      alert("Required fields must be filled out!");
      return;
    }
    if (validateEmail(formObject.emailAddress) === false) {
      return;
    }
    console.log(formObject);
    API.createDev(formObject)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <div
      className="DevCreateImage text-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="display-4" id="developerHeader">Hello Fellow Developer!</h1>
      <h2 className="lead">
        Let's get started. Fill out the following to create an account.
      </h2>
      <form>
        <div className="accountForm">
          <div className="form-group">
            <input
              onChange={handleInputChange}
              name="firstName"
              type="text"
              className="form-control"
              placeholder="First Name (Required)"
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleInputChange}
              name="lastName"
              type="text"
              className="form-control"
              placeholder="Last Name (Required)"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              onChange={handleInputChange}
              name="emailAddress"
              id="email"
              type="email"
              className="form-control"
              placeholder="name@example.com (Required)"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              onChange={handleInputChange}
              name="password"
              id="password"
              type="password"
              className="form-control"
              placeholder="Must be at least 6 characters long"
            />
          </div>
          <div className="form-group">
            <label>Type of Developer</label>
            <select
              className="form-control"
              name="devType"
              value={formObject.devType}
              onChange={handleDropDownChange}
            >
              <option name="devType" value="fullStack">
                Full-Stack
              </option>
              <option name="devType" value="frontEnd">
                Front End
              </option>
              <option name="devType" value="backEnd">
                Back End
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Type of Employment</label>
            <select
              className="form-control"
              name="empType"
              value={formObject.empType}
              onChange={handleDropDownChange}
            >
              <option name="empType" value="fullTime">
                Full-Time
              </option>
              <option name="empType" value="partTime">
                Part-Time
              </option>
              <option name="empType" value="contract">
                Contract
              </option>
              <option name="empType" value="volunteer">
                Volunteer
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Select your primary language</label>
            <select
              className="form-control"
              name="language"
              value={formObject.language}
              onChange={handleDropDownChange}
            >
              <option name="language" value="JavaScript">
                JavaScript
              </option>
              <option name="language" value="Java">
                Java
              </option>
              <option name="language" value="C">
                C
              </option>
              <option name="language" value="C++">
                C++
              </option>
              <option name="language" value="PHP">
                PHP
              </option>
              <option name="language" value="Python">
                Python
              </option>
              <option name="language" value="Ruby">
                Ruby
              </option>
              <option name="language" value="Other">
                Other
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Tell us a little bit about yourself</label>
            <textarea
              onChange={handleInputChange}
              name="profile"
              className="form-control"
              rows="3"
            ></textarea>
          </div>
          <Link to="feed/dev">
            <button
              // onChange={handleInputChange}
              name="profile"
              type="button"
              className="btn btn-success"
              disabled={
                !(
                  formObject.firstName &&
                  formObject.lastName &&
                  formObject.emailAddress
                )
              }
              onClick={handleSignUp}
            >
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default DevCreateAccount;

