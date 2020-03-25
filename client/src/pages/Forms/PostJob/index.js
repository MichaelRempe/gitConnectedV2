import React, { useState, useEffect } from "react";
import API from "../../../utils/API";

import background from "../../../assets/job-bg.jpg";
import "./style.css";

function PostJob(props) {
  const [formObject, setFormObject] = useState({
    title: "",
    position: "Full Stack",
    empType: "Full-Time",
    salary: 0,
    location: "West Coast",
    description: undefined,
    company_id: ""
  });
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    loadUser();
  });

  function loadUser() {
    API.getEmployer(props.userID)
      .then(data => setCurrentUser(data.data))
      .catch(err => console.log(err));
    // console.log(currentUser);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    console.log(formObject);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    let newJob = formObject;
    newJob.company_id = currentUser._id;
    if (!formObject) {
      alert("Required fields must be filled out!");
    }
    API.createJob(newJob)
      .then(data => console.log(data.data))
      .catch(err => console.log(err));
  }

  return (
    <>
      <div
        className="PostJobImage text-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="display-4">Post a job!</h1>
        <h2 className="lead">
          Employers, post a job by filling out the form below!
        </h2>
        <form>
          <div className="accountForm">
            <div className="form-group">
              <input
                name="title"
                type="text"
                className="form-control"
                placeholder="Job Title"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                name="salary"
                type="text"
                className="form-control"
                placeholder="Salary"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Type of Position</label>
              <select
                className="form-control"
                name="position"
                onChange={handleInputChange}
              >
                <option name="position" value="Full-Stack">
                  Full Stack
                </option>
                <option name="position" value="Front-End">
                  Front End
                </option>
                <option name="position" value="Back-End">
                  Back End
                </option>
              </select>
            </div>
            <div className="form-group">
              <label>Type of Employment</label>
              <select
                className="form-control"
                name="empType"
                onChange={handleInputChange}
              >
                <option name="empType" value="Full-Time">
                  Full-Time
                </option>
                <option name="empType" value="Part-Time">
                  Part-Time
                </option>
                <option name="empType" value="Contract">
                  Contract
                </option>
                <option name="empType" value="Volunteer">
                  Volunteer
                </option>
              </select>
            </div>
            <div className="form-group">
              <label>Tell us a little bit about the position</label>
              <textarea
                onChange={handleInputChange}
                name="description"
                className="form-control"
                rows="3"
              ></textarea>
            </div>
            <button
              onClick={handleFormSubmit}
              type="button"
              className="btn btn-success"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default PostJob;
