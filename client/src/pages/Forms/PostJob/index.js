import React, {useState} from "react";
import API from "../../../utils/API";

import background from "../../../assets/job-bg.jpg";
import "./style.css";

function PostJob() {
  const [formObject, setFormObject] = useState({
    companyName: "", //needs to default to company thats logged in (Passport UUID must refelct _id in DB)
    title: "",
    position: "",
    empType: "",
    language:"",
    salary: 0,
    location: "",
    description: undefined
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event){
    event.preventDefault();
    if (!formObject) {
      alert("Required fields must be filled out!");
    }
    API.createJob(formObject)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="PostJobImage text-center" style={{ backgroundImage: `url(${background})` }}>
        <h1 className="display-4">Post a job!</h1>
        <h2 className="lead">
          Employers, post a job by filling out the form below!
        </h2>    
        <form>
          <div className="accountForm">
            <div className="form-group">
              <input
                name="companyName"
                type="text"
                className="form-control"
                placeholder="Company Name"
                onChange={handleInputChange}
              />
            </div>
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
              <label>Type of Position</label>
              <select className="form-control" name="position" onChange={handleInputChange}>
                <option name="position" value="Full-Stack">Full Stack</option>
                <option name="position" value="Front-End">Front End</option>
                <option name="position" value="Back-End">Back End</option>
              </select>
            </div>
            <div className="form-group">
              <label>Company Location</label>
              <select className="form-control" name="location" onChange={handleInputChange}>
                <option name="location" value="West-Coast">West Coast</option>
                <option name="location" value="East-Coast">East Coast</option>
                <option name="location" value="Mid-West">Midwest</option>
              </select>
            </div>
            <div className="form-group">
              <label>Type of Employment</label>
              <select className="form-control" name="empType" onChange={handleInputChange}>
                <option name="empType" value="Full-Time">Full-Time</option>
                <option name="empType" value="Part-Time">Part-Time</option>
                <option name="empType" value="Contract">Contract</option>
                <option name="empType" value="Volunteer">Volunteer</option>
              </select>
            </div>
            <div className="form-group">
            <label>Select your primary language</label>
            <select
              className="form-control"
              name="language"
              value={formObject.language}
              onChange={handleInputChange}
            >
              <option name="language" value="JavaScript">
                JavaScript
              </option>
              <option name="language" value="Java">
                Java
              </option>
              <option name="language" value="C">
                C
              </option>
              <option name="language" value="C++">
                C++
              </option>
              <option name="language" value="PHP">
                PHP
              </option>
              <option name="language" value="Python">
                Python
              </option>
              <option name="language" value="Ruby">
                Ruby
              </option>
              <option name="language" value="Other">
                Other
              </option>
            </select>
            </div>
            <button
            onClick={handleFormSubmit}
            type="button"
            className="btn btn-success">
            Submit
            </button>
          </div>
        </form>
      </div >
    </>
  );
}
export default PostJob;
