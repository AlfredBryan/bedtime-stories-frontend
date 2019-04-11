import React, { Component } from "react";
import "./App.css";
import User from "./components/User/User";
import Profile from "./components/Profile";
import CreateStory from "./components/Stories/CreateStory";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/User/Login";
import { Switch, Route } from "react-router-dom";
import Register from "./components/User/Register";
import Authenticate from "./components/hoc/WithAuth";
import { Provider } from "./components/session/session";

class App extends Component {
  state = {
    user: {
      name: "Alan Shearer",
      id: 1
    },
    isAuthenticated: false
  };

  render() {
    return (
      <div>
        <Provider value={this.state}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/add_story" component={CreateStory} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/user" component={User} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
