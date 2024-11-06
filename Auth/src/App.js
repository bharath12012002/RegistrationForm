import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ForgotPassword from "./components/Forgotpassword";
import Changepassword from "./components/Changepassword";
const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

// vijay d workflow fixes - trigger ////

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/forgotpassword">
              <ForgotPassword onSignIn={ForgotPassword} />
            </Route>
            <Route path="/auth/change-password">
              <Changepassword onSignIn={Changepassword} />
            </Route>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
            {/*  */}
            <Route
              path="/auth/forgotpassword"
              component={ForgotPassword}
            ></Route>
            <Route
              path="/auth/change-password"
              component={Changepassword}
            ></Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
