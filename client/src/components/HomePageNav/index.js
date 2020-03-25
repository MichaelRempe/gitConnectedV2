import React from "react";
import "./style.css";
// import ButtonProfile from "../ButtonProfile";
// import ButtonFeed from "../ButtonFeed"
import ButtonHome from "../ButtonHome"
import LogoutButton from "../LogoutButton"


function HomePageNav(props) {
  return (   
      <div className="row nav">
      <nav className="navbar fixed-top  justify-content-between" id="navbar">
        <div className="col-7"><a className="navbar-brand" href="https://git-connected.com/"><h1 id="heading">Git Connected</h1></a></div>
        <div className="col-1"><ButtonHome/></div> 
      </nav>
      </div>
  );
}

export default HomePageNav;
