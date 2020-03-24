import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";
// import nextId from "react-id-generator";

function JobCard(props) {
  console.log(props);
  return (
// <<<<<<< HEAD
//     <>
//       <div className="card">
       
//         <div className="card-body">
//         <h1 className="card-text">Company Name</h1>
//           <h5 className="card-title">{props.data.title}</h5>
//           <p className="card-text">{props.data.position}</p>
//           <p className="card-text">{props.data.salary}</p>
//           <p className="card-text">{props.data.empType}</p>
//           <Link to={`${props.url}/${props.data._id }`} key={props.data._id} className="btn btn-primary" onClick={(e)=> props.setActive(props.data._id)}>Apply!</Link>
//         </div>
// =======

    <div className="card job">
      <div className="card-header">Position: {props.data.title}</div>
      <div className="card-body">
        <h5 className="card-title">Developer Type: {props.data.position}</h5>
        <p className="card-text">Salary: ${props.data.salary}</p>
        <p className="card-text">Requirements: {props.data.empType}</p>
        <p className="card-text">Description: {props.data.description}</p>
        <br />
        <Link
          to={`${props.url}/${props.data._id}`}
          key={props.data._id}
          className="btn btn-primary apply"
          onClick={e => props.setActive(props.data._id)}
        >
         Details
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
