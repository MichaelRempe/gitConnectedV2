import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Image from "./image"
import AppliedTable from "../../components/developer/AppliedTable"
import AppliedList from "../../components/developer/AppliedList"
import data from "../../data"


// style:
import background from "../../assets/developerProfile-bg.jpg";
import "./style.css";

const columns = [
  {id: 1, label: "Job Name"},
]

function DeveloperProfile(props) {
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
                  <p class="card-text">First Name:</p>
                  <p class="card-text">Last Name:</p>
                  <p class="card-text">Email:</p>
                  <p class="card-text">Type of Developer: </p>
                  <p class="card-text">Type of Employment:</p>
                  <p class="card-text">Primary Languages:</p>
                  <p class="card-text">Summary:</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card mb-4">
                <div class="card-body">  
                  <h2 className="card-title">Applied Jobs</h2>
                  <AppliedTable columns={columns} data={data} />
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
