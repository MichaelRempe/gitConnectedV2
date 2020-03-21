import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css"

function DevCard(props) {
  const [selectedDev, setSelectedDev] = useState("");

  return (
    <>
      <div className="card">
        <div className="card-header">
        Developer Name: {props.data.firstName} {props.data.lastName}
        </div>
        <div className="card-body">
          <p className="card-text">Developer Type: {props.data.devType}</p>
          <p className="card-text">Languages {props.data.languages}</p>
          <p className="card-text">
            Employment Type Seeking: {props.data.empType}
          </p>
          <Link
            to={`${props.url}/${props.data._id}`}
            key={props.data._id}
            className="btn btn-primary"
            onClick={e => props.setActive(props.data._id)}
          >
            Details
          </Link>
        </div>
      </div>
    </>
  );
}

export default DevCard;
