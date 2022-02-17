import React from "react";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceBody from "./ExperienceBody";
import "../index.css";

function ResumePage() {
  const resumeData = require('../assets/data.json');
  const IMG = (imgName) => {
    return require (`../assets/${imgName}`)
  }

  const getJobRow = (job)=>{
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
  }

  const getEducation = (education)=>{
    return (
      <div className="contact">
        <div class="col-sm-auto m-2 mt-4">
          <h6 class="font-weight-normal">{education.degree}</h6>
          <p class="font-weight-light">{education.school}</p>
          <p class="font-weight-light">{education.dates}</p>
        </div>
    </div>
    )
  }

  const jobExperiences = resumeData.resume.commercial.map((job)=>{
    return (getJobRow(job))
  })

  const militaryExperiences = resumeData.resume.military.map((job)=>{
    return (getJobRow(job))
  })

  const education = resumeData.resume.education.map((education)=>{
    return (getEducation(education))
  })

  return (
    <div className="contact" class="ml-4">
      <br/>
      <h2 class="resume_title"><b>Work Experience</b></h2>
      {jobExperiences}
      <br/>
      <h2 class="resume_title"><b>Military</b></h2>
      {militaryExperiences}
      <h2 class="resume_title"><b>Education</b></h2>
      {education}
    </div>
  )
}

export default ResumePage;
