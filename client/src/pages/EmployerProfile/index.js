import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Image from "./image"

import PostedTable from "../../components/employer/PostedTable";
import PostedList from "../../components/employer/PostedList";
import EmpNavbar from "../../components/EmpNavbar";
// import data from "../../data"


// style:
import background from "../../assets/employerProfile-bg.jpg";
import "./style.css";

// API:
import API from "../../utils/API";

const columns = [
  {id: 1, label: "Job Name"},
]

function EmployerProfile(props) {
  console.log(props.userID)
  const [currentUser, setCurrentUser] = useState({});

  useEffect(()=> {
    loadUser();
  })

  function loadUser() {
    API.getEmployer(props.userID)
      .then(data => setCurrentUser(data.data))
      .catch(err => console.log(err));
  }

  return (
    <>
    <EmpNavbar/>
      <Image backgroundImage={background}>
        <br/>
        <h1 className="display-4">Hi {currentUser.companyName}</h1>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="card-title">About the Company</h2>
                  <p class="card-text">Company Name:
                  {currentUser.companyName}</p>
                  <p class="card-text">Summary:
                  {currentUser.about}</p>
                  <p class="card-text">Location:
                  {currentUser.location} </p>
                  <p class="card-text">Email Address:
                  {currentUser.email}</p>
                  <p class="card-text">Phone Number:
                  {currentUser.phone}</p>
                  <p class="card-text">Posted Jobs:
                  {currentUser.posted}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card mb-4">
                <div class="card-body">  
                  <h2 className="card-title">Posted Jobs</h2>
                  <PostedTable columns={columns} user={currentUser} />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card mb-4">
                <div className="card-body">
                  <Route
                    exact path={`${props.match.url}/:id`}
                    render={(props) => <PostedList {...props} />}
                  />
                </div>
              </div>
            </div>
          </div> 
        </div> 
      </Image>
    </>        
  );
}

export default EmployerProfile;
