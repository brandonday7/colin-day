import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from '../components/Layout';
// import { withRouter } from 'react-router'

import Home from "../components/Layout/Home";
import Contact from "../components/Contact/Contact";
import Services from "../components/Services/Services";
import About from "../components/Static/About"
import NotFound from "../components/Static/NotFound"

const Root = ({ }) => (
  <BrowserRouter>
    <Layout >
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/contact" exact component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Root;
