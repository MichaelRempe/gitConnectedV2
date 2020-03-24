import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Image from "./image";
import AppliedTable from "../../components/developer/AppliedTable";
import AppliedList from "../../components/developer/AppliedList";


// style:
import background from "../../assets/developerProfile-bg.jpg";
import "./style.css";

// API:
import API from "../../utils/API";

const columns = [
  {id: 1, label: "Job Name"},
]

function DeveloperProfile(props) {
  console.log(props.userID)
  const [currentUser, setCurrentUser] = useState({});

  useEffect(()=>{
    loadUser();
  })

  function loadUser() {
    API.getDev(props.userID)
      .then(data => setCurrentUser(data.data))
      .catch(err => console.log(err));
  }
  return (
    <>
      <Image backgroundImage={background}>
        <h1 className="display-4">Welcome!</h1>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="card-title">About Me</h2>
                  <img src="" />
                  <p class="card-text">First Name: {currentUser.firstName}</p>
                  <p class="card-text">Last Name: {currentUser.lastName}</p>
                  <p class="card-text">Email: {currentUser.emailAddress}</p>
                  <p class="card-text">Type of Developer: {currentUser.devType} </p>
                  <p class="card-text">Type of Employment: {currentUser.empType}</p>
                  <p class="card-text">Primary Languages: {currentUser.language}</p>
                  <p class="card-text">Summary: {currentUser.profile}</p>
                  <p class="card-text">Summary: {currentUser.appliedTo}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card mb-4">
                <div class="card-body">  
                  <h2 className="card-title">Applied Jobs</h2>
                  <AppliedTable columns={columns} user={currentUser} />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card mb-4">
                <div className="card-body">
                  <Route
                    exact path={`${props.match.url}/:id`}
                    render={(props) => <AppliedList {...props} />}
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

export default DeveloperProfile;
