import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { Home, Post, Profile,Error,Login } from "./pages";
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/posts" component={Post} />
      <Route path="/profile" component={Profile} />
      <Route  component={Error}/>
      </Switch>
    </Router>
  );
}

export default App;
