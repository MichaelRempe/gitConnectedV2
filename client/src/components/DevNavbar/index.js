import React from "react";
import "./style.css";
import DevButtonProfile from "../DevButtonProfile";
import LogoutButton from "../LogoutButton"
import DevButtonFeed from "../DevButtonFeed"


function NavBar(props) {
  return (
    <div className="row nav">
      <nav className="navbar fixed-top  justify-content-between" id="navbar">
        <div className="col-lg-6 col-sm-12"><a className="navbar-brand" href="https://git-connected.com/"><h1 id="heading">Git Connected</h1></a></div>
        <div className="col-lg-1"><DevButtonProfile /></div>
        <div className="col-lg-1"><DevButtonFeed /></div>
        <div className="col-lg-2"><LogoutButton /></div>

      </nav>
    </div>
  );
}

export default NavBar;
