import React from "react";
import { SocialIcon } from 'react-social-icons';

function About() {
  const data = require('../assets/data.json');
  const about = data.about

  const IMG = (imgName) => {
    return require (`../assets/${imgName}`)
  }

  const connections = about.connections.map((connection)=>{
    return (
      <div class="connection">
        <SocialIcon network={connection.network} 
        url={connection.url} />
      </div>
    )
  });

  const body = about.body.map((paragraphs)=>{
    return (
      <p>{paragraphs}</p>
    )
  });


  return (
    <div class="container">
      <div class="about">
      <div class="row d-flex connections">
          {connections}
      </div> 
      <div class="wrapper">
        <img
          class="img-fluid rounded mb-4 personal-photo"
          src={IMG(about.image)} 
          alt=""
        />
      <h3>{about.heading}</h3>
      {body}
      </div>
      </div>
    </div>
  );
}

export default About;
