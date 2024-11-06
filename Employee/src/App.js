import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import EmployeeTable from "./pages/EmployeeTable";


const generateClassName = createGenerateClassName({
  productionPrefix: "AttendanceGen",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/employee" component={EmployeeTable} />
            
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
//
