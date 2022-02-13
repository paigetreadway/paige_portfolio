import React from "react";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceBody from "./ExperienceBody";
import "../index.css";

function ResumePage() {

  const resumeData = require('../assets/data.json');
  const IMG = (imgName) => {
    return require (`../assets/${imgName}`)
  }

  return resumeData.resume.map((job)=>{
    return (
      <div className="contact">
      <div class="row align-items-right mt-3 p-4 row-custom">
        <div class="col-sm-4 mt-2 mb-2 ml-2 align-self-center col-custom">
          <ExperienceHeader 
          position={job.position}
          companyName={job.company}
          location={job.location}
          dates={job.dates}
          logo={job.logo}
          />
        </div>
        <div class="col-lg-7 ml-2 align-self-center">
          <ExperienceBody
          description={job.description}/>
        </div>
      </div>
      <hr/>
    </div>
    )
  })
}

export default ResumePage;
