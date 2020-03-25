import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ButtonHome = () => {
  return (
    //navigates user to Home/Landing Page
    <Link to="/" id="link">
      
        <p id="button">Home</p>
     
    </Link>
  );
};

export default ButtonHome;
