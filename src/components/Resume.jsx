import React from "react";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceBody from "./ExperienceBody";

function ResumePage() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <ExperienceHeader/>
          </div>
          <div class="col-lg-5">
          <ExperienceBody/>
          </div>
        </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <ExperienceHeader/>
          </div>
          <div class="col-lg-5">
          <ExperienceBody/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
