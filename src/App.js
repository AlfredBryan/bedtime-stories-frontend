import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./components/User/User";
import Profile from "./components/Profile/Profile";
import CreateStory from "./components/Stories/CreateStory";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/User/Login";
import { Switch, Route } from "react-router-dom";
import Register from "./components/User/Register";
import Authenticate from "./components/hoc/WithAuth";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Authenticate>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/add_story" component={CreateStory} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/user" component={User} />
          </Authenticate>
        </Switch>
      </div>
    );
  }
}

export default App;
