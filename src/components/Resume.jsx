import React from "react";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceBody from "./ExperienceBody";
import "../index.css";



function ResumePage() {

  const resumeData = require('./data.json');
  console.log(resumeData)


  return resumeData.resume.map((job)=>{
    return (
      <div className="contact">
      <div class="row align-items-center my-5 bg-blue row-custom">
        <div class="col-sm-4 col-custom">
          <ExperienceHeader 
          position={job.position}
          companyName={job.company}
          location={job.location}
          dates={job.dates}
          />
        </div>
        <div class="col-lg-8">
          <ExperienceBody
          description={job.description}/>
        </div>
      </div>
    </div>
    )
  })
}

export default ResumePage;
