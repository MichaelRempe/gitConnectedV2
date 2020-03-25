import React from "react";
import "./style.css";
import ButtonProfile from "../ButtonProfile";
import ButtonFeed from "../ButtonFeed";
import ButtonHome from "../ButtonHome"
import LogoutButton from "../LogoutButton"

function HomePageNav(props) {
  return (
    <div className="row nav">
    <nav className="navbar fixed-top  justify-content-between" id="navbar">
      <div className="col-10"><a className="navbar-brand" href="https://git-connected.com/"><h1 id="heading">Git Connected</h1></a></div>      
      <div className="col-1"><ButtonHome/></div>
      <div className="col-1"><ButtonFeed/></div>
      <div className="col-1"><ButtonProfile/></div>
      <div className="col-2"><LogoutButton/></div>
      
    </nav>
    </div>
  );
}

export default HomePageNav;
