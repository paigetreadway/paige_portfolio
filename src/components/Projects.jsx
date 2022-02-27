import React from "react";

function Projects() {

  const data = require('../assets/data.json');
  const projects = data.projects

  const IMG = (imgName) => {
    return require (`../assets/${imgName}`)
  }

  const projectComponent = projects.map((project)=>{
    return (
        <a href={project.url}>
          <div class="project mb-4">
            <h3 class="font-weight-normal resume-margine text-center text-bold p-4">{project.title}</h3>
            <div class="row align-items-center my-2 p-3">
              <div class="col-md-7">
                <img
                  class="img-fluid rounded mb-4 mb-lg-0 resume-margine project-image"
                  src={project.img}
                  alt={project.title}
                />
              </div>
              <div class="col-md-5">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </a>
        
    )
  });


  return (
    <div class="container projects">
      {projectComponent}
    </div>
  );
}

export default Projects;
