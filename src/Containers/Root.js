import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from '../components/Layout';

import Home from "../components/Layout/Home";
import Brandon from "../components/Layout/Brandon";
import NotFound from "../components/Static/NotFound"

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route path="/" component={Home} />
        <Route path="/brandon" component={Brandon} />
        <Route path="/*" component={NotFound} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default Root;
