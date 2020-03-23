import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const HomeButton = () => {
  return (
    //navigates user to Home/Landing Page
    <Link to="/">
      <button className="btn btn-outline-dark btn-lg btn-block" role="button">
        Home
      </button>
    </Link>
  );
};

export default HomeButton;
