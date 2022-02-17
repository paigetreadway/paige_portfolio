import React from "react";

function About() {
  const data = require('../assets/data.json');
  const about = data.about

  const IMG = (imgName) => {
    return require (`../assets/${imgName}`)
  }


  const experiences = about.experiences.map((exp)=>{
    return ( 
    <div class="col-sm-auto m-2">
      <img src={IMG(exp.icon)}
      class="img-responsive img-rounded icon"/>
      <p>{exp.title}</p>
    </div>)});

  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7 center-block">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={IMG(about.image)} 
              alt=""
            />
          </div>
        </div>
        <h4>Certifications and Experiences</h4><br/>
        <div class="row align-items-center my-5">
          {experiences}
        </div>
      </div>
    </div>
  );
}

export default About;
