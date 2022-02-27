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
      <div class="row align-items-right resume-margine p-2 row-resume">
        <div class="col-sm-4 mt-2 mb-2 ml-2 align-self-center">
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
        <div class="col-sm-4">
          <p class="font-weight-bold">{education.degree}</p>
          <p>{education.school}</p>
          <p>{education.dates}</p>
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

  const technologies = resumeData.resume.experiences.map((exp)=>{
    return ( 
    <div class="col p-3" align="center">
      <img src={IMG(exp.icon)} class="img-rounded icon center-icon"/>
      <span class="align-bottom my-3">{exp.title}</span>
    </div>
    )});

  return (
    <div class="container resume">
    <h3 class="resume_title resume-margine my-4"><b>Technologies</b></h3>
        <div class="technologies">
          {technologies}
        </div>
    <h3 class="resume_title resume-margine my-4"><b>Education</b></h3>
    <div class="row align-items-right resume-margine p-3 row-resume">
      {education}
    </div>
    <h3 class="resume_title resume-margine my-4"><b>Work Experience</b></h3>
      {jobExperiences}
    <h3 class="resume_title resume-margine my-4"><b>Military</b></h3>
      {militaryExperiences}
    </div> 
  )
}

export default ResumePage;
