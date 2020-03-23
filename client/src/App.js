// Imports:
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages:
import Home from "./pages/Home";
import SelectForm from "./pages/Forms/UserType/SelectForm";
    // Developer
import DeveloperFeed from "./pages/DeveloperFeed";
import DeveloperProfile from "./pages/DeveloperProfile";
    // Employer
import EmployerFeed from "./pages/EmployerFeed";
import EmployerProfile from "./pages/EmployerProfile";
    // Forms
import CreateDeveloper from "./pages/Forms/CreateDeveloper";
import CreateEmployer from "./pages/Forms/CreateEmployer";
import PostJob from "./pages/Forms/PostJob";
    // Errors
import ErrorPage from "./pages/ErrorPage";
import Unauth from "./pages/Unauth";

import firebase from "firebase/app";
import {
  IfFirebaseAuthed,
  IfFirebaseUnAuthed,
  FirebaseAuthProvider
} from "@react-firebase/auth";
import "firebase/auth";
import config from "./firebase-config";

function App() {

  return (
    <>
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <Router >
        
          <IfFirebaseAuthed>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/selectform' component={SelectForm} />
            {/* Developer Paths */}
            <Route path="/feed/dev/" component ={DeveloperFeed} />
            <Route path="/profile/dev" component={DeveloperProfile} />
            {/* Employer Paths */}
            <Route path="/feed/emp" component ={EmployerFeed} />
            <Route path="/profile/emp" component={EmployerProfile} />
            {/* Forms */}
            <Route exact path="/dev-create-account" component={CreateDeveloper} />
            <Route exact path="/emp-create-account" component={CreateEmployer} />
            <Route exact path="/postjob" component={PostJob} />
            <Route component={ErrorPage}></Route>
          </Switch>
       
        </IfFirebaseAuthed>
        <IfFirebaseUnAuthed>
            {/* CAN WE JUST REPLACE THIS WITH ONE CATCHALL ROUTE? */}
            <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/login" component={Home} /> */}
            <Route exact path='/selectform' component={Unauth} />
            {/* Developer Paths */}
            <Route path="/feed/dev/" component ={Unauth} />
            <Route path="/profile/dev" component={Unauth} />
            {/* Employer Paths */}
            <Route path="/feed/emp" component ={Unauth} />
            <Route path="/profile/emp" component={Unauth} />
            {/* Forms */}
            <Route exact path="/dev-create-account" component={Unauth} />
            <Route exact path="/emp-create-account" component={Unauth} />
            <Route exact path="/postjob" component={Unauth} />
            <Route component={ErrorPage}></Route>

            </Switch>
          </IfFirebaseUnAuthed>
      </Router>
      </FirebaseAuthProvider>
    </>
   
  );
}

export default App;