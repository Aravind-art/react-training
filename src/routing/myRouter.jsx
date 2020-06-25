import React, { Component } from "react";
import Nav from "./nav";
import About from "./about";
import Shop from "./shop";
import Item from "./item";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class MyRouter extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Item} />
        </Switch>
      </Router>
    );
  }
}

const Home = () => {
  return <h1>Home</h1>;
};

export default MyRouter;
