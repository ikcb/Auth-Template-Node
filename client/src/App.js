import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import { Home, Post, Profile } from "./pages";
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/post" component={Post} />
      <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
