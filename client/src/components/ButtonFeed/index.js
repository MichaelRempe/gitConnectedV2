import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const FeedButton = () => {
  return (
    //navigates user their feed page:
    <Link to="/feed/dev">
      <button className="btn btn-outline-dark btn-lg btn-block" role="button">
        My Feed
      </button>
    </Link>
  );
};

export default FeedButton;
