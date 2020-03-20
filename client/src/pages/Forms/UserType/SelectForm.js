import React, { useState } from "react";

function SelectForm() {
  return (
  <div className="container">
    <div className="jumbotron">
      <h1 className="display-4">Welcome to the space portal</h1>
      <p className="lead">A place for developers and employers to get connected.</p>
      <hr className="my-4"/>
      <p>Select which option applies to you to create and account:</p>
      <ul className="list-group">
        <a className="list-group-item btn btn-light" type='button' href='/dev-create-account'>I'm a developer!</a>
        <a className="list-group-item btn btn-light" type='button' href='/emp-create-account'>I need a developer!</a>
      </ul>
    </div>
  </div>
  );
}

export default SelectForm;