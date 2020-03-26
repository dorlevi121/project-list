import React from "react";
import { Route, Switch } from "react-router";
import Dashboard from "./components/dashboard/dashboard.dashboard";
import ProjectDetails from "./components/projects/project-details/projectDetails.project";
import SignIn from "./components/auth/sign-in/signIn.auth";
import SignUp from "./components/auth/sign-up/signUp.auth";
import CreateProject from "./components/projects/create-project/createProject.project";

export const Routing: React.FC = () => (
  <Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route path='/project/:id' component={ProjectDetails}/>
    <Route path='/signin' component={SignIn}/>
    <Route path='/signup' component={SignUp}/>
    <Route path='/create' component={CreateProject}/>

  </Switch>
);

export default Routing;