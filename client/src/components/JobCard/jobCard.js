import React from "react";
import JobDetails from "../JobDetails/JobDetails";
import { Link, Route } from "react-router-dom";
// import nextId from "react-id-generator";


function JobCard(props) {
  return (
    <>
      <div className="card" style={{width: "75%", margin: "auto", marginBottom: "20px", marginTop: "20px"}}>
        <div className="card-header">Company Name</div>
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <p className="card-text">{props.data.position}</p>
          <p className="card-text">{props.data.salary}</p>
          <p className="card-text">{props.data.empType}</p>
          <Link to={`${props.url}/${props.data._id }`} key={props.data._id} className="btn btn-primary" onClick={(e)=> props.setActive(props.data._id)}>Apply!</Link>
        </div>
      </div>
    </>
  );
}

export default JobCard;
