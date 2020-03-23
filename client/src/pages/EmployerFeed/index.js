import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import LeftPanel from "../../components/LeftPanel";
import MainPanel from "../../components/MainPanel";
import PopUpPanel from "../../components/PopUpPanel";
import HomeButton from "../../components/ButtonHome";
import ProfileButton from "../../components/ButtonProfile";
import PostJobButton from "../../components/ButtonCreateJob";

import UserInfo from "../../components/UserInfo";
import DeveloperCard from "../../components/DevCard";
import DeveloperDetails from "../../components/DevDetails";

import NavBar from "../../components/NavBar";

//Style:
import background from "../../assets/developerFeed-bg.png";
import "./style.css";

// API:
import API from "../../utils/API";

function EmployerFeed(props) {
  const [devList, setDevList] = useState([]);
  const [activeDev, setActiveDev] = useState({});
  console.log(props.userID)

  //On page load, pull DEVELOPERS from API
  useEffect(() => {
    loadDevelopers();
  }, []);

  function loadDevelopers() {
    API.getAllDevs()
      .then(data => setDevList(data.data))
      .catch(err => console.log(err));
  }

  const populateActiveDev = id => {
    devList.map(dev => {
      if (dev._id === id) {
        setActiveDev(dev);
      }
    });
  };

  return (
    <>
    <header>
    <NavBar />
    </header>
    
    <div className="container-fluid">
     
      <div className="row">
        <LeftPanel>
          <UserInfo />
          <HomeButton />
          <ProfileButton />
          <PostJobButton />
        </LeftPanel>

        <MainPanel>
          {devList.map(dev => (
            <DeveloperCard
              setActive={populateActiveDev}
              url={props.match.url}
              data={dev}
              key={dev._id}
            />
          ))}
        </MainPanel>

        <PopUpPanel>
          <Route
            exact
            path={`${props.match.url}/${activeDev._id}`}
            render={props => <DeveloperDetails {...activeDev} />}
          />
        </PopUpPanel>
      </div>
    </div>
    </>
  );
}

export default EmployerFeed;
