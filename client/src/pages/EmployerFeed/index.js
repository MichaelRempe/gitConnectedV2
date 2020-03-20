import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import LeftPanel from "../../components/LeftPanel";
import MainPanel from "../../components/MainPanel";
import PopUpPanel from "../../components/PopUpPanel";
import HomeButton from "../../components/ButtonHome";
import ProfileButton from "../../components/ButtonProfile";


//Style:
import background from "../../assets/developerFeed-bg.png";
import "./style.css";

function EmployerFeed(props) {
   return (
     <div className="container-fluid">
       <div className="row">
         <LeftPanel>
           <HomeButton />
           <ProfileButton />
         </LeftPanel>

         <MainPanel>

         </MainPanel>
         <PopUpPanel>

         </PopUpPanel>
       </div>
     </div>
   )
}

export default EmployerFeed;
