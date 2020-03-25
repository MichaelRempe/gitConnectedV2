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

import NavBar from "../../components/Navbar"

import Container from "../../components/Container";

//Style:
import background from "../../assets/employerFeed-bg.png";
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
    <div className="EmpBackgroundImage" style={{backgroundImage: `url(${background})`}}>
    <Container>
    <header id="nav">
    <NavBar />
    </header>
    
    <div id="main">
     
      <nav>
        <LeftPanel>
          <UserInfo />
          <HomeButton />
          <ProfileButton />
          <PostJobButton />
        </LeftPanel>
      </nav>
      <article>
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
      </article>
      <aside>
        <PopUpPanel>
          <Route
            exact
            path={`${props.match.url}/${activeDev._id}`}
            render={props => <DeveloperDetails {...activeDev} />}
          />
        </PopUpPanel>
        </aside>
      </div>
    
    {/* <footer><Footer /></footer> */}
    </Container>
    </div>
    </>
    
  );
}

export default EmployerFeed;
