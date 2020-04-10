/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginSignupPage from "../loginPage/LoginSignupPage";
import EmailVerificationForm from "../forms/EmailVerificationForm";
import PasswordResetForm from "../forms/PasswordResetForm";

function UnauthenticatedApp(props) {
  return (
    <Switch>
      <Route path="/password-reset/:token">
        <PasswordResetForm />
      </Route>
      <Route path="/activate/:token">
        <EmailVerificationForm />
      </Route>
      <Route path="/">
        <LoginSignupPage {...props} />
      </Route>
    </Switch>
  );
}

export default UnauthenticatedApp;
