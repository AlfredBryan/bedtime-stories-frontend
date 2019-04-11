import React from "react";

import { Consumer } from "../session/session";
import Profile from "./Profile";

const profile = () => (
  <Consumer>{({ user }) => <Profile username={user.name} />}</Consumer>
);

export default profile;
