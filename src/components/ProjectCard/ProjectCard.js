import React from "react";

function ProjectCard (props) {
  return ( 
    <div>
      <div>
        <img alt={props.name} src={props.image} />
      </div>
      <div>
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>

        <a href={props.href} target="_blank" onClick={"return false"}><button>{props.name}</button></a>
      </div>
          
    </div>
  );
}

export default ProjectCard;
