import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


const CreateJob = ()=>{
    return(
        //navigates user to post job form
        <Link to="/postjob">
             <button className="btn btn-outline-dark btn-lg btn-block" role="button">Post New Job</button>
        </Link>
       
    )
}

export default CreateJob;