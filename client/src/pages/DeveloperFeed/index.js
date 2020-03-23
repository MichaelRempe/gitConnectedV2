import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import LeftPanel from "../../components/LeftPanel";
import MainPanel from "../../components/MainPanel";
import PopUpPanel from "../../components/PopUpPanel";
import HomeButton from "../../components/ButtonHome";
import ProfileButton from "../../components/ButtonProfile";

import UserInfo from "../../components/UserInfo";
import JobCard from "../../components/JobCard";
import JobDetails from "../../components/JobDetails";

//Style:
import background from "../../assets/developerFeed-bg.png";
import "./style.css";

// API:
import API from "../../utils/API";

//Container:
import Container from "../../components/Container/Container"

//Navbar:
import Navbar from "../../components/Navbar/Navbar"

function DeveloperFeed(props) {
  const [jobList, setJobList] = useState([]);
  const [activeJob, setActiveJob] = useState([]);

  console.log(props.userID)

  //On page load, pull in jobs from API
  useEffect(() => {
    loadJobs();
  }, []);

  //access API and gather JOBS
  function loadJobs() {
    API.getAllJobs()
      .then(data => setJobList(data.data))
      .catch(err => console.log(err));
  }
  // Set Active Job in popUP panel
  const populateActiveJob = id => {
    jobList.map(job => {
      if (job._id === id) {
        setActiveJob(job);
      }
    });
  };

  return (
    <>
    
    {/* <div className="container DevBackgroundImage" */}
     {/* style={{ backgroundImage: `url(${background})` }}
    > */}
      {/* <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div> */}
     
      {/* <div className="nav">Header</div>
      <div className="main">
        <div className="left">Left</div>
        <div className="middle">Middle</div>
        <div className="right">Right</div>
      </div>
      <div className="bottom">Footer</div> */}
      
      {/* <Container> */}
      
      {/* <div className="row">        
        <LeftPanel>
          <UserInfo />
          <HomeButton />
          <ProfileButton />
        </LeftPanel>       
        
        <MainPanel>
          {jobList.map(job => (
            <JobCard
              setActive={populateActiveJob}
              url={props.match.url}
              data={job}
              key={job._id}
            />
          ))}
        </MainPanel>
                 
          <PopUpPanel>
            <Route
              exact
              path={`${props.match.url}/${activeJob._id}`}
              render={props => <JobDetails {...activeJob} />}
            />
          </PopUpPanel>        
      </div> */}
    {/* </Container> */}
    {/*  </div> */}
    <header><Navbar/></header>
    <div id="main">
        <article>Article</article>
        <nav>Nav</nav>
        <aside>Aside</aside>
    </div>
    <footer>Footer</footer>     
    </>
  );
}

export default DeveloperFeed;
