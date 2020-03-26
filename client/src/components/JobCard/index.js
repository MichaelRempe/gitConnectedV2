import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
// import nextId from "react-id-generator";

function JobCard(props) {
  function applyTo() {
    // event.preventDefault();
    console.log(props.data._id);
    console.log(props.user._id);
    API.updateJob(props.data._id, {id:props.user._id});
  }
  return (
    <div className="card job">
      <div className="card-header">Position: {props.data.title}</div>
      <div className="card-body">
        <h5 className="card-title">Developer Type: {props.data.position}</h5>
        <p className="card-text">Salary: ${props.data.salary}</p>
        <p className="card-text">Requirements: {props.data.empType}</p>
        <p className="card-text">Description: {props.data.description}</p>
        <br />
        <button
          type="button"
          class="btn btn-secondary"
          style={{ position: "absolute", marginTop: "10px", bottom: "5px" }}
          onClick={function(event) {
            event.preventDefault();
            applyTo();
          }}
        >
          Apply Now
        </button>

        {/* <Link
          to={`${props.url}/${props.data._id}`}
          key={props.data._id}
          className="btn btn-primary apply"
          onClick={e => {
            props.setActive(props.data._id);
          }}
        >
          Details
        </Link> */}
      </div>
    </div>
  );
}

export default JobCard;
