import './App.css';
import React, {useState} from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/navbar/Navbar"
import Portfolio from "./pages/Portfolio"
import Project from "./components/Project/Project"

function App() {

  

  
  return (
    <Router>
      <div className="flex-column">
        <Navbar />
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/portfolio">
        <Portfolio>
        <Project />
        </Portfolio>
        </Route>
      </div>
    </Router>
  );
}

export default App;
