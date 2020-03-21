import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav
      className="navbar fixed-top navbar-light bg-light justify-content-between"
     
    >
      <a className="navbar-brand">Welcome {props.name}</a>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
