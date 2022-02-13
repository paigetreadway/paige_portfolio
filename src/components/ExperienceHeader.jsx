import React from "react";

const IMG = (imgName) => {
  return require (`../assets/${imgName}`)
}

function ExperienceHeader(props) {
  return (
    <div class="experience-header">
        <h2 class="font-weight-light">{props.position}</h2>
        <p class="pull-right">{props.companyName}</p>
        <p>{props.location}</p>
        <p>{props.dates}</p>
        <img src={IMG(props.logo)} 
          alt="image" 
          class="img-responsive img-rounded icon"
          ></img>
    </div>
  );
}

export default ExperienceHeader;
