import React from "react";

const IMG = (imgName) => {
  return require (`../assets/${imgName}`)
}

function ExperienceHeader(props) {
  return (
    <div class="experience-header">
        <h3 class="font-weight">{props.position}</h3>
        <h5 class="pull-right">{props.companyName}</h5>
        <p>{props.location}</p>
        <p>{props.dates}</p>
        <img src={IMG(props.logo)} 
          alt="image"
          class="img-resonsive img-rounded icon"
          ></img>
    </div>
  );
}

export default ExperienceHeader;
