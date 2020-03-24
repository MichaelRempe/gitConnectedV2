import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <nav
      className="navbar fixed-top  justify-content-between"
      style={{backgroundColor: "#464866"}}
     
    >
      <a className="navbar-brand" ><h1>gitConnected</h1> {props.name}</a>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

export default NavBar;
