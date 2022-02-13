import React from "react";

function ExperienceHeader(props) {
  return (
    <div class="experience-header">
        <h2 class="font-weight-light">{props.position}</h2>
        <p>{props.companyName}</p>
        <p>{props.location}</p>
        <p>{props.dates}</p>
    </div>
  );
}

export default ExperienceHeader;
