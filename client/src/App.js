// Imports:
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
// Pages:
import Home from "./pages/Home";
import SelectForm from "./pages/Forms/UserType";
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

//History
import history from './history';

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
        <Router history={history}>
          <IfFirebaseAuthed>
            {user => {
              return (
                <>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/selectform"><Redirect to="/"/></Route>
                    {/* Developer Paths */}
                    <Route
                      path="/feed/dev/"
                      render={props => (
                        <DeveloperFeed {...props} userID={user.user.uid} />
                      )}
                    />
                    <Route exact path="/dev-create-account"><Redirect to="/feed/dev"/></Route>
                    <Route exact path="/emp-create-account"><Redirect to="/feed/emp"/></Route>
                    <Route
                      path="/profile/dev"
                      render={props => (
                        <DeveloperProfile {...props} userID={user.user.uid} />
                      )}
                    />
                    {/* Employer Paths */}
                    <Route
                      path="/feed/emp"
                      render={props => (
                        <EmployerFeed {...props} userID={user.user.uid} />
                      )}
                    />
                    <Route
                      path="/profile/emp"
                      render={props => (
                        <EmployerProfile {...props} userID={user.user.uid} />
                      )}
                    />
                    <Route
                      exact
                      path="/postjob"
                      render={props => (
                        <PostJob {...props} userID={user.user.uid} />
                      )}
                    />
                    <Route component={ErrorPage}></Route>
                  </Switch>
                </>
              );
            }}
          </IfFirebaseAuthed>
          <IfFirebaseUnAuthed>
            {/* CAN WE JUST REPLACE THIS WITH ONE CATCHALL ROUTE? */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/selectform" component={SelectForm} />
              {/* Developer Paths */}
              <Route path="/feed/dev/" component={Unauth} />
              <Route path="/profile/dev" component={Unauth} />
              {/* Employer Paths */}
              <Route path="/feed/emp" component={Unauth} />
              <Route path="/profile/emp" component={Unauth} />
              {/* Forms */}
              <Route
                exact path="/dev-create-account"
                component={CreateDeveloper}
              />
              <Route
                exact path="/emp-create-account"
                component={CreateEmployer}
              />
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

