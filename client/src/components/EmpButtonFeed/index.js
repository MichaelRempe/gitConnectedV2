import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const FeedButton = () => {
  return (
    //navigates user their feed page:
    <Link to="/feed/emp" id="link">
    
      <p id="button">Feed</p>
      
    </Link>
  );
};

export default FeedButton;
