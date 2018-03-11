import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./ScrollToTopRoute";
import Layout from '../components/Layout';

import Home from "../components/Layout/Home";
import Brandon from "../components/Layout/Brandon";
import NotFound from "../components/Static/NotFound"

const Root = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/*" component={NotFound} />
        <Route path="/brandon" component={Brandon} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Root;
