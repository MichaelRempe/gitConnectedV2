import React from "react";
import "./style.css";
import EmpButtonProfile from "../EmpButtonProfile";
import LogoutButton from "../LogoutButton"
import EmpButtonFeed from "../EmpButtonFeed"


function NavBar(props) {
  return (
    <div className="row nav">
      <nav className="navbar fixed-top  justify-content-between" id="navbar">
        <div className="col-lg-6 col-sm-12"><a className="navbar-brand" href="https://git-connected.com/"><h1 id="heading">Git Connected</h1></a></div>
        <div className="col-lg-1"><EmpButtonProfile /></div>
        <div className="col-lg-1"><EmpButtonFeed /></div>
        <div className="col-lg-2"><LogoutButton /></div>

      </nav>
    </div>
  );
}

export default NavBar;
