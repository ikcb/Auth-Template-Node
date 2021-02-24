import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { Home, Post, Profile,Error,Login,SignUp,AddPost } from "./pages";
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/posts" component={Post} />
      <Route path="/profile" component={Profile} />
      <Route path="/signup" component={SignUp} />
      <Route path="/create-post" component={AddPost} /> 
      <Route  component={Error}/>
      </Switch>
    </Router>
  );
}

export default App;
