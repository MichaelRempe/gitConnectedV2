import React from "react";
import API from "../../utils/API";
import "./style.css";


function jobDetails(props) {
  console.log(props.user);
  console.log(props._id);

  function applyTo(){
    API.updateJob(props._id, props.user._id)
  }

  return (
    <div className="card">
      <div className="card-headers">Company Name</div>
      <p className="card-text">Seeking: {props.title}</p>
      <p className="card-text">
        Job Type: {props.empType} Position: {props.position}
      </p>
      <p className="card-text">Salary: {props.salary}</p>
      <h5 className="card-text">Description</h5>
      <p className="card-text">{props.description}</p>
      <br />
      <br />
      <button
        type="button"
        class="btn btn-secondary"
        style={{ position: "absolute", marginTop: "10px", bottom: "5px" }}
        onClick={applyTo()}
      >
        Apply Now
      </button>
    </div>
  );
}

export default jobDetails;
