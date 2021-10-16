import './App.css';
import React, {useState} from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/navbar/Navbar"
import Portfolio from "./pages/Portfolio"
import Project from "./components/Project/Project"
import ProjectCard from './components/ProjectCard/ProjectCard';
import projects from "./projects.json"

function App() {

  

  const [projectState, setProjects] = useState(projects)
console.log(projectState)
  return (
    <Router>
      <div className="flex-column">
        <Navbar />
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/portfolio">
        <Portfolio>
        <Project>
            {projectState.map(project => (
              <ProjectCard

                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                href={project.href}

              />

            ))}
        </Project>
        </Portfolio>
        </Route>
      </div>
    </Router>
  );
}

export default App;
