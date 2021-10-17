import React, { useState } from "react"
import projects from "./assets/projects.json"
import ProjectCard from '../components/ProjectCard/ProjectCard';



function Portfolio() {

    const [projectState, setProjects] = useState(projects)
  
    //filter through projects for specific technologies
    function findProject(tag) {
        
        
        const projects = projectState.filter(data => {
            for (let i = 0; i < data.tags.length; i++) {
                if(data.tags[i] == tag){
                    return true
                } else return false
            } 
        });

       
        setProjects(projects);
    };


  

    const styleSheet = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    }

    const col1 = {
        height: "100vh",
        flexDirection: "column",
        flexBasis: "100vw",
        flex: 1
    }

    const col2 = {
        height: "100vh",
        flexDirection: "column",
        flexBasis: "100vw",
        flex: 1
    }

    return (
        <div style={styleSheet}>
            <div style={col1}>
                <h1>stack list</h1>
                <button onClick={() => {findProject("HTML")}}>HTML</button>
                <button onClick={() => {findProject("CSS")}}>CSS</button>
                <button onClick={() => {findProject("JS")}}>JavaScript</button>
                <button onClick={() => {findProject("API")}}>API</button>
            </div>
            <div style={col2}>
                <h1>projects</h1>
                <div>
                    {projectState.map(project => (
                    <ProjectCard

                        id={project.id}
                        key={project.id}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        href={project.href}

                    />

                ))}</div>
            </div>
        </div>
    )
}

export default Portfolio;