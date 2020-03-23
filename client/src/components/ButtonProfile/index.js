import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ProfileButton = () => {
  return (
    //navigates user to Home/Landing Page
    <Link to="/profile/dev">
      <button className="btn btn-outline-dark btn-lg btn-block" role="button">
        My Feed
      </button>
    </Link>
  );
};

export default ProfileButton;
