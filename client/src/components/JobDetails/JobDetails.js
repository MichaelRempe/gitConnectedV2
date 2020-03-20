import React from "react";
import API from "../../utils/API";
// import data from "../../data";

function jobDetails(props){
    const user = "5e69af9b39a8906f28d61cea";

    function applyJob(id, jobType){
        API.updateDev(id, jobType).then(data=>console.log(data)).catch(err=>console.log(err));
        alert("Gary has applied to "+jobType)
    }
    return(
       
        <div className="card" style={{margin: "5px", position: "relative"}}>          
            <div className="card-headers" >
                Company Name
                </div>        
                <p className="card-text">Seeking: {props.title}</p>
                <p className="card-text">Job Type: {props.empType} Position: {props.position}</p>
                <p className="card-text">Salary: {props.salary}</p>
                <h5 className="card-text">Description</h5>
                <p className="card-text">{props.description}</p>
                <br />
                <br />
                <button type="button" class="btn btn-secondary" style={{position: "absolute", marginTop: "10px",bottom: "5px"}} onClick={applyJob(user, props.title)}>Apply Now</button>     
        </div>
    )
}

export default jobDetails;