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
        <div>
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
          </Switch>
        </div>
      </Router>
      </FirebaseAuthProvider>
    </>
   
  );
}

export default App;