import React, { useState } from "react";
import "./style.css";


function SelectForm() {
  return (
  <div className="container">
    <div className="jumbotron">
      <h1 className="display-4" id="header">What brings you to Git Connected?</h1>
      <hr className="my-4"/>
      <ul className="list-group">
        <a className="list-group-item btn btn-light" type='button' href='/dev-create-account'>I'm a developer!</a>
        <a className="list-group-item btn btn-light" type='button' href='/emp-create-account'>I need a developer!</a>
      </ul>
    </div>
  </div>
  );
}

export default SelectForm;