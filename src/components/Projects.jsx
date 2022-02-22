import React from "react";

function Projects() {

  const data = require('../assets/data.json');
  const projects = data.projects

  const IMG = (imgName) => {
    return require (`../assets/${imgName}`)
  }

  const projectComponent = projects.map((project)=>{
    return (
        <a href={project.url} class="project">
          <div class="project">
            <h1 class="font-weight-normal resume-margine text-center text-bold">{project.title}</h1>
            <div class="row align-items-center my-5 p-4">
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
    <div className="contact">
      <div class="container projects  p-5">
        {projectComponent}
      </div>
    </div>
  );
}

export default Projects;
