import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ProfileButton = () => {
  return (
    //navigates user to Home/Landing Page
    <Link to="/profile/dev" id="link">
      
        <p id="button">Profile</p>
     
    </Link>
  );
};

export default ProfileButton;
