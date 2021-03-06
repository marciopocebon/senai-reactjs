import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import List from "../pages/List";
import Form from "../pages/Form";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/form" component={Form} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
