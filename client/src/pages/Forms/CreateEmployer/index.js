import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
// Style:
import background from "../../../assets/employerForm-bg.jpg";
import "./style.css";
import { Link } from "react-router-dom";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

function EmpCreateAccount() {
  const [formObject, setFormObject] = useState({
    firebase_id: "",
    companyName: "",
    email: "",
    phone: "",
    location: "West-Coast",
    about: ""
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
        let newEmployer = formObject;
        firebase.auth().currentUser.sendEmailVerification();
        let id = firebase.auth().currentUser.uid.toString();
        newEmployer.firebase_id = id;
        setFormObject(newEmployer);
        console.log(formObject);
        handleFormSubmit();
      });
    // [END createwithemail]
  }

  function handleInputChange(event) {
    console.log(formObject);
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
    if (!formObject.companyName && !formObject.email) {
      alert("Required fields must be filled out!");
      return;
    }
    if (validateEmail(formObject.email) === false) {
      return;
    }
    console.log(formObject)
    API.createEmployer(formObject)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <div
        className="EmpCreateImage text-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="display-4" id="employerHeader">Let's find you a developer</h1>
        <h2 className="lead">
          Fill out the following to register your company.
        </h2>
        <form>
          <div className="accountForm">
            <div className="form-group">
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                name="companyName"
                placeholder="Company Name (Required)"
              />
            </div>
            <div className="form-group">
              <input
                onChange={handleInputChange}
                type="email"
                id="email"
                className="form-control"
                name="email"
                placeholder="example@email.com (Required)"
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
              <label>Phone Number</label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                name="phone"
                placeholder="123-456-7890"
              />
            </div>
            <div className="form-group">
              <label>Company Location</label>
              <select
                onChange={handleInputChange}
                className="form-control"
                name="location"
                value={formObject.location}
              >
                <option name="location" value="West-Coast">
                  West Coast
                </option>
                <option name="location" value="East-Coast">
                  East Coast
                </option>
                <option name="location" value="MidWest">
                  Midwest
                </option>
              </select>
            </div>
            <div className="form-group">
              <label>Tell us a little bit about your company</label>
              <textarea
                onChange={handleInputChange}
                name="about"
                className="form-control"
                rows="3"
              ></textarea>
            </div>
          </div>
        </form>
        <Link to="feed/emp">
        <button id="submitBtn"
          // onChange={handleInputChange}
          name="profile"
          type="button"
          className="btn btn-success"
          disabled={!(formObject.companyName && formObject.email)}
          onClick={handleSignUp}
        >
          Submit
        </button>
        </Link>
      </div>
    </div>
  );
}

export default EmpCreateAccount;
