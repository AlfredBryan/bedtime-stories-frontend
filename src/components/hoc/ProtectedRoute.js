import React from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
   return (
      <Route
         {...rest}
         render={props => {
            let user = "";
            const jwt = localStorage.getItem("token");
            if (!jwt) {
               props.history.push("/");
            }
            axios
               .get("http://localhost:4000/api/getuser", {
                  headers: { Authorization: `Bearer ${jwt}` }
               })
               .then(res => {
                  user = res.data;
               })
               .catch(error => {
                  localStorage.removeItem("token");
                  this.props.history.push("/");
               });

            if (!(user === undefined)) {
               return <component {...props} />;
            } else {
               return (
                  <Redirect
                     to={{
                        pathname: "/",
                        state: {
                           from: props.location
                        }
                     }}
                  />
               );
            }
         }}
      />
   );
};
