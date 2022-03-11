import React from "react";
import Background from "./home1.jpg";

var sectionStyle = {
  backgroundImage: `url(${Background})`
};


function Home() {
  const resumeData = require('../assets/data.json');
  return (
    <div class="home-div">
        <div class="container home p-5 my-3 center-home">
        <div class="row align-items-center">
          <div class="col-lg-auto my-5">
            <h1 class="font-weight-normal mb-3">{resumeData.home.heading}</h1>
            <p class="font-weight-normal mb-3">{resumeData.home.body}</p>
            <div class="mt-5">
            <code className="py-code">
              <span className="py-def">def </span> 
              <span className="py-hwf">hello_word()-&gt;</span>
              <span className="py-none">None</span>: <br/> &#8195; &#8195; 
              <span className="py-print">print</span>(
              <span className="py-hwt">"Hello World :)"</span>)
            </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;