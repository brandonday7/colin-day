import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Home from "../components/Layout/Home";
import Brandon from "../components/Layout/Brandon";
import NotFound from "../components/Static/NotFound"

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/*" component={NotFound} />
          <Route path="/brandon" component={Brandon} />
        </Switch>
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default Root;
