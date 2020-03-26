import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import LeftPanel from "../../components/LeftPanel";
import MainPanel from "../../components/MainPanel";
import PopUpPanel from "../../components/PopUpPanel";
import HomeButton from "../../components/ButtonHome";
import ProfileButton from "../../components/DevButtonProfile";

import UserInfo from "../../components/UserInfo";
import JobCard from "../../components/JobCard";
import JobDetails from "../../components/JobDetails";

//Style:
import background from "../../assets/developerFeed-bg.png";
import "./style.css";

// API:
import API from "../../utils/API";

//Container:
import Container from "../../components/Container";

//Navbar:
import DevNavbar from "../../components/DevNavbar";

//Slick
// import "slick-carousel/slick/slick.css";
// import "/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function DeveloperFeed(props) {
  const [jobList, setJobList] = useState([]);
  // const [activeJob, setActiveJob] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  
  //On page load, pull in jobs from API
  useEffect(() => {
    loadJobs();
    loadUser();
  }, []);

  //access API and gather JOBS
  function loadJobs() {
    API.getAllJobs()
      .then(data => setJobList(data.data))
      .catch(err => console.log(err));
  }
  function loadUser() {
    API.getDev(props.userID)   
      .then(data => setCurrentUser(data.data))      
      .catch(err => console.log(err));
       
  }
  // // Set Active Job in popUP panel
  // const populateActiveJob = id => {
  //   jobList.map(job => {
  //     if (job._id === id) {
  //       setActiveJob(job);
  //     }
  //   });
  // };

  return (
    <>
      <div
        className="DevBackgroundImage"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Container>
          <header  id="nav">
            <DevNavbar/>
          </header>
          <div id="main">
            <nav>
              <LeftPanel>
                <UserInfo user={currentUser}>
                  <HomeButton />
                  <ProfileButton />
                </UserInfo>
              </LeftPanel>
            </nav>
            <article>
              <MainPanel>
                {jobList.map(job => (
                  <JobCard
                    // setActive={populateActiveJob}
                    // url={props.match.url}
                    data={job}
                    key={job._id}
                    user={currentUser}
                  />
                ))}
              </MainPanel>
            </article>

            {/* <aside> */}
              {/* <PopUpPanel> */}
                {/* <Route
                  exact
                  path={`${props.match.url}/${activeJob._id}`}
                  render={props => <JobDetails {...activeJob} user={currentUser} />}
                /> */}
              {/* </PopUpPanel> */}
            {/* </aside> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default DeveloperFeed;
