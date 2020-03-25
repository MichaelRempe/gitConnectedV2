import React from "react";
import "./style.css";
import ButtonProfile from "../ButtonProfile";
import ButtonFeed from "../ButtonFeed"

function HomePageNav(props) {
  return (
    <div className="row nav">
    <nav className="navbar fixed-top  justify-content-between" id="navbar">
      <div className="col-10"><a className="navbar-brand" href="https://git-connected.com/"><h1 id="heading">Git Connected</h1></a></div>
    </nav>
    </div>
  );
}

export default HomePageNav;
